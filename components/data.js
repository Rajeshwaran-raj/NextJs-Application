export const courses = [
  {
    slug: "fullstack-nextjs-kubernetes",
    title: "Full‑Stack Apps with Next.js & Kubernetes",
    category: "Web Dev",
    level: "Intermediate",
    duration: "6h 30m",
    lessons: 34,
    price: 2499,
    instructor: "Priya Sharma",
    description:
      "Build, containerize, and deploy a full‑stack Next.js application on Kubernetes step by step.",
    highlights: [
      "Structure production-ready Next.js apps",
      "Containerize apps with Docker",
      "Deploy to a managed Kubernetes cluster",
    ],
    curriculum: [
      { title: "Project overview & architecture", type: "Video", length: "18 min" },
      { title: "Next.js app setup & routing", type: "Video", length: "42 min" },
      { title: "Dockerizing the application", type: "Video", length: "35 min" },
      { title: "Kubernetes manifests & config", type: "Video", length: "50 min" },
      { title: "CI/CD pipeline overview", type: "Video", length: "28 min" },
    ],
  },
  {
    slug: "aws-for-developers",
    title: "AWS for Modern Application Developers",
    category: "Cloud",
    level: "Beginner",
    duration: "5h 10m",
    lessons: 27,
    price: 1999,
    instructor: "Rahul Iyer",
    description:
      "Learn the core AWS services you actually use when building real-world web applications.",
    highlights: [
      "Understand core AWS building blocks",
      "Host secure web applications",
      "Use managed databases effectively",
    ],
    curriculum: [
      { title: "AWS fundamentals for developers", type: "Video", length: "22 min" },
      { title: "VPC, subnets & networking basics", type: "Video", length: "31 min" },
      { title: "EC2 & auto scaling groups", type: "Video", length: "29 min" },
      { title: "RDS & managed databases", type: "Video", length: "36 min" },
      { title: "S3, CloudFront & static hosting", type: "Video", length: "33 min" },
    ],
  },
  {
    slug: "devops-ci-cd-pipelines",
    title: "DevOps Foundations: CI/CD Pipelines",
    category: "DevOps",
    level: "Intermediate",
    duration: "4h 45m",
    lessons: 24,
    price: 1799,
    instructor: "Sarah Lee",
    description:
      "Design and implement CI/CD pipelines that keep your deployments fast, safe, and repeatable.",
    highlights: [
      "Model practical CI/CD workflows",
      "Automate testing & quality checks",
      "Ship changes with confidence",
    ],
    curriculum: [
      { title: "CI/CD concepts in practice", type: "Video", length: "20 min" },
      { title: "Pipeline design patterns", type: "Video", length: "32 min" },
      { title: "Integrating automated testing", type: "Video", length: "37 min" },
      { title: "Blue‑green & canary deployments", type: "Video", length: "41 min" },
      { title: "Maintaining pipelines at scale", type: "Video", length: "26 min" },
    ],
  },
  {
  slug: "react-performance-optimization",
  title: "React Performance Optimization",
  category: "Web Dev",
  level: "Intermediate",
  duration: "4h 20m",
  lessons: 22,
  price: 1699,
  instructor: "Priya Sharma",
  description:
    "Learn how to analyze, debug, and optimize performance in real-world React applications.",
  highlights: [
    "Identify common performance bottlenecks",
    "Use memoization and code splitting",
    "Optimize rendering and state updates",
  ],
  curriculum: [
    { title: "Understanding React rendering", type: "Video", length: "25 min" },
    { title: "Profiling with React DevTools", type: "Video", length: "30 min" },
    { title: "Memoization techniques", type: "Video", length: "28 min" },
    { title: "Code splitting strategies", type: "Video", length: "32 min" },
    { title: "Optimizing large applications", type: "Video", length: "35 min" },
  ],
},
{
  slug: "nodejs-api-design",
  title: "Node.js API Design & Best Practices",
  category: "Backend",
  level: "Beginner",
  duration: "5h 00m",
  lessons: 26,
  price: 1899,
  instructor: "Rahul Iyer",
  description:
    "Build clean, maintainable, and scalable RESTful APIs using Node.js and Express.",
  highlights: [
    "Design RESTful endpoints",
    "Implement authentication & validation",
    "Structure scalable Node.js projects",
  ],
  curriculum: [
    { title: "API design fundamentals", type: "Video", length: "24 min" },
    { title: "Project structure & routing", type: "Video", length: "36 min" },
    { title: "Validation & error handling", type: "Video", length: "29 min" },
    { title: "Authentication strategies", type: "Video", length: "33 min" },
    { title: "Versioning & documentation", type: "Video", length: "27 min" },
  ],
},
{
  slug: "docker-for-developers",
  title: "Docker for Application Developers",
  category: "DevOps",
  level: "Beginner",
  duration: "3h 40m",
  lessons: 18,
  price: 1499,
  instructor: "Sarah Lee",
  description:
    "Understand containerization concepts and use Docker to package and run applications.",
  highlights: [
    "Core container concepts",
    "Write efficient Dockerfiles",
    "Use Docker Compose for local environments",
  ],
  curriculum: [
    { title: "Containers vs virtual machines", type: "Video", length: "18 min" },
    { title: "Docker installation & basics", type: "Video", length: "25 min" },
    { title: "Writing your first Dockerfile", type: "Video", length: "30 min" },
    { title: "Docker Compose for multi-service apps", type: "Video", length: "35 min" },
    { title: "Optimizing images & layers", type: "Video", length: "28 min" },
  ],
},
{
  slug: "kubernetes-for-developers",
  title: "Kubernetes for Application Developers",
  category: "Cloud",
  level: "Intermediate",
  duration: "6h 00m",
  lessons: 30,
  price: 2299,
  instructor: "Priya Sharma",
  description:
    "Learn how developers can effectively build, deploy, and manage applications on Kubernetes.",
  highlights: [
    "Understand core Kubernetes objects",
    "Deploy and scale applications",
    "Manage configs and secrets",
  ],
  curriculum: [
    { title: "Kubernetes architecture overview", type: "Video", length: "22 min" },
    { title: "Pods, deployments & services", type: "Video", length: "40 min" },
    { title: "ConfigMaps & secrets", type: "Video", length: "28 min" },
    { title: "Autoscaling & resource limits", type: "Video", length: "33 min" },
    { title: "Debugging and monitoring", type: "Video", length: "31 min" },
  ],
},
{
  slug: "system-design-basics",
  title: "System Design Basics for Developers",
  category: "Architecture",
  level: "Beginner",
  duration: "5h 30m",
  lessons: 25,
  price: 2099,
  instructor: "Sarah Lee",
  description:
    "Understand the fundamentals of system design including scalability, reliability, and performance.",
  highlights: [
    "Core system design principles",
    "Design scalable architectures",
    "Understand caching and load balancing",
  ],
  curriculum: [
    { title: "What is system design?", type: "Video", length: "20 min" },
    { title: "Scalability fundamentals", type: "Video", length: "34 min" },
    { title: "Caching strategies", type: "Video", length: "29 min" },
    { title: "Load balancing techniques", type: "Video", length: "31 min" },
    { title: "Designing a real-world system", type: "Video", length: "42 min" },
  ],
}
];

export const instructors = [
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Senior Platform Engineer",
    bio: "Designs scalable PaaS solutions and helps teams ship faster on Kubernetes and cloud.",
    courses: 5,
    experience: 9,
  },
  {
    name: "Rahul Iyer",
    initials: "RI",
    role: "Cloud Architect",
    bio: "Works with startups to build reliable, cost‑efficient infrastructure on AWS.",
    courses: 4,
    experience: 11,
  },
  {
    name: "Sarah Lee",
    initials: "SL",
    role: "DevOps Consultant",
    bio: "Helps engineering teams adopt continuous delivery and modern DevOps practices.",
    courses: 6,
    experience: 8,
  },
];


export const placements = [
  {
    name: "Arjun Patel",
    role: "Frontend Developer",
    company: "TechNova",
    package: "₹12 LPA",
    course: "Full-Stack Apps with Next.js & Kubernetes",
    image: "/placements/arjun.jpg",
    testimonial:
      "The hands-on projects helped me crack my interviews and build real confidence.",
  },
  {
    name: "Meera Nair",
    role: "Cloud Engineer",
    company: "SkyNet Solutions",
    package: "₹15 LPA",
    course: "AWS for Modern Application Developers",
    image: "/placements/meera.jpg",
    testimonial:
      "The AWS course gave me exactly the skills companies were looking for.",
  },
  {
    name: "Rahul Verma",
    role: "DevOps Engineer",
    company: "CloudCore",
    package: "₹18 LPA",
    course: "DevOps Foundations: CI/CD Pipelines",
    image: "/placements/rahul.jpg",
    testimonial:
      "Real-world pipeline examples made it easy to understand production workflows.",
  },
  {
    name: "Sneha Reddy",
    role: "Full-Stack Developer",
    company: "ByteWorks",
    package: "₹14 LPA",
    course: "React Performance Optimization",
    image: "/placements/sneha.jpg",
    testimonial:
      "The optimization techniques helped me stand out in technical interviews.",
  },
];