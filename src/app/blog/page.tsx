import Link from 'next/link'
import { ArrowRight, CalendarIcon } from 'lucide-react'
import { fadeInSlideUp, scaleIn } from '@/lib/animations'
import { getAllPosts } from '@/lib/mdx'
import { Animated } from '@/components/ui/animated'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata = {
  title: 'Blog',
  description: 'Read the latest PC hardware guides and troubleshooting logs.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Animated variants={fadeInSlideUp} className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">All Articles</h1>
        <p className="text-lg text-muted-foreground">
          The latest guides, reviews, and tutorials for PC hardware and system
          optimization.
        </p>
      </Animated>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Animated key={post.slug} variants={scaleIn} delay={index * 0.1}>
            <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md h-full">
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                {post.date && (
                  <div className="text-muted-foreground mb-3 flex items-center text-sm">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                )}
                {post.excerpt && (
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </CardContent>
              <CardFooter className="mt-auto pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="hover:text-primary px-0 hover:bg-transparent"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </Animated>
        ))}
      </div>
    </div>
  )
}
