import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'
import { MDXProvider } from '@/lib/mdx-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }))
}

export const dynamicParams = false

async function loadPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/posts')
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    const [post, fileContents] = await Promise.all([
      getPostBySlug(slug),
      fs.readFile(fullPath, 'utf8'),
    ])

    // Extract the raw frontmatter data directly using gray-matter
    const { data, content } = matter(fileContents)

    return {
      post,
      content,
      // Pull author directly from the file so we don't rely on getPostBySlug
      author: data.author as string | undefined,
    }
  } catch {
    return null
  }
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const result = await loadPost(slug)

  if (!result) {
    return {}
  }

  return {
    title: result.post.title,
    description: result.post.excerpt,
  }
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const result = await loadPost(slug)

  if (!result) {
    notFound()
  }

  const { post, content, author } = result

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>

        <Card>
          <CardHeader className="pb-4">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              {post.title}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              {author && (
                <>
                  <span className="font-medium text-foreground">{author}</span>
                  <span>•</span>
                </>
              )}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <MDXProvider content={content} />
            </article>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
