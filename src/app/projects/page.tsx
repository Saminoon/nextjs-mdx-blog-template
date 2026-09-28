import { fadeInSlideUp, scaleIn } from '@/lib/animations'
import { getProjects } from '@/lib/projects'
import { ProjectCard } from '@/components/projectCard'
import { Animated } from '@/components/ui/animated'

export const metadata = {
  title: 'PC Builds | Silicon Tuning',
  description:
    'Custom PC rigs optimized for specific games, budgets, and performance targets.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Animated variants={fadeInSlideUp} className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">PC Builds</h1>
        <p className="text-lg text-muted-foreground">
          A collection of custom rigs optimized for specific games, budgets, and
          performance targets.
        </p>
      </Animated>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Animated key={project.id} variants={scaleIn} delay={index * 0.1}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          </Animated>
        ))}
      </div>
    </div>
  )
}
