import { fadeInSlideUp } from '@/lib/animations'
import { Animated } from '@/components/ui/animated'

export default function GpusPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Animated variants={fadeInSlideUp}>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Graphics Cards
        </h1>
        <p className="text-lg text-muted-foreground">
          CPU reviews, benchmarks, bottleneck analysis, and buying guides are
          coming soon.
        </p>
      </Animated>
    </div>
  )
}
