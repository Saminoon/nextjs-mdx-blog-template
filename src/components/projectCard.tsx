import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
  isFeatured?: boolean
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  isFeatured = false,
}: ProjectCardProps) {
  const imageWidth = isFeatured ? 1200 : 800
  const imageHeight = isFeatured ? 675 : 450
  const fallbackImage = `https://placehold.co/${imageWidth}x${imageHeight}/1a1a1a/ffffff?text=${encodeURIComponent(title)}`

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-none">
        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
          <div className="bg-muted relative h-full w-full">
            <Image
              src={image ?? fallbackImage}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
              priority={isFeatured}
            />
          </div>
        </div>
        <CardTitle className={isFeatured ? 'text-2xl' : 'text-base sm:text-lg'}>
          {title}
        </CardTitle>
        <CardDescription
          className={isFeatured ? 'mt-2 text-lg' : 'text-sm sm:text-base'}
        >
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div
          className={`flex flex-wrap ${isFeatured ? 'gap-2' : 'gap-1.5 sm:gap-2'}`}
        >
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className={!isFeatured ? 'text-xs sm:text-sm' : undefined}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
