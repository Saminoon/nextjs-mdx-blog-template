import { fadeInSlideUp, scaleIn } from '@/lib/animations'
import { Animated } from '@/components/ui/animated'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'About | Hardware Tune',
  description: 'About the author of Hardware Tune.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Animated variants={fadeInSlideUp} className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground">
          The hardware enthusiast and developer behind Hardware Tune.
        </p>
      </Animated>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Animated variants={scaleIn} delay={0.1} className="md:col-span-1">
          <Card>
            <CardHeader>
              <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold mb-4">
                RN
              </div>
              <CardTitle>Rana Muhammad Sami Noon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Computer Science student at the University of Portsmouth,
                frontend developer, and custom PC builder.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-medium">Focus</div>
                <div className="text-sm text-muted-foreground">
                  PC Hardware & Web Development
                </div>
              </div>
            </CardContent>
          </Card>
        </Animated>

        <Animated
          variants={fadeInSlideUp}
          delay={0.2}
          className="md:col-span-2 space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Hardware Tune. I combine my background in computer
                science with a deep passion for hardware optimization. Whether
                it is tweaking BIOS settings for rock-solid 1% lows in Apex
                Legends, tuning memory frequencies, or putting together custom
                rigs capable of handling demanding engines like Red Dead
                Redemption 2 without breaking a sweat, I am obsessed with
                pushing system performance to its limits.
              </p>
              <p>
                When I am not benchmarking GPUs or managing chassis airflow, I
                work as a frontend developer, building applications and
                dashboards using tools like React, Next.js, and Python. In fact,
                this entire blog is a custom Next.js build!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tech & Hardware Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">
                  Hardware & Optimization
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">System Assembly</Badge>
                  <Badge variant="secondary">BIOS Configuration</Badge>
                  <Badge variant="secondary">RAM Overclocking</Badge>
                  <Badge variant="secondary">Thermal Tuning</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3">
                  Software Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Animated>
      </div>
    </div>
  )
}
