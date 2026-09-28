export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
  featured: boolean
}

export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: '1',
      title: 'The 1440p Apex Predator',
      description:
        'A high-refresh-rate build optimized for rock-solid 1% lows in Apex Legends and competitive shooters.',
      technologies: ['Ryzen 7 7800X3D', 'RTX 4070 Super', '32GB DDR5-6000'],
      featured: true,
    },
    {
      id: '2',
      title: 'Cinematic Frontier Engine',
      description:
        'Built specifically for maxing out volumetric lighting and ultra textures in Red Dead Redemption 2 without dipping below 60fps.',
      technologies: ['Core i5-13600K', 'RX 7800 XT', '2TB NVMe SSD'],
      featured: true,
    },
    {
      id: '3',
      title: 'Budget 1080p Starter',
      description:
        'The best price-to-performance ratio for entry-level 1080p gaming and everyday productivity.',
      technologies: ['Ryzen 5 5600', 'RX 6600', '16GB DDR4-3200'],
      featured: true,
    },
  ]
}
