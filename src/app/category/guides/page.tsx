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

export default async function GuidesPage() {
  const allPosts = await getAllPosts()
  const guidePosts = allPosts.filter((post) => post.tags?.includes('Guides'))

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Animated variants={fadeInSlideUp} className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Buying Guides
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive recommendations for your next PC build or hardware
          upgrade.
        </p>
      </Animated>

      {guidePosts.length === 0 ? (
        <Animated variants={fadeInSlideUp} delay={0.2}>
          <p className="text-muted-foreground mt-8 border-l-2 border-primary pl-4">
            No buying guides published yet. Check back soon!
          </p>
        </Animated>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {guidePosts.map((post, index) => (
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
      )}
    </div>
  )
}
