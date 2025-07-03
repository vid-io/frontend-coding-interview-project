import type { Video } from "@/types/api"

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "React Performance Optimization: Complete Guide",
    description:
      "Learn advanced React performance optimization techniques including memoization, virtualization, and bundle splitting.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320&h=180&fit=crop",
    views: 1200000,
    duration: 4_350, // 4350 seconds
    publishedAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year ago
    tags: ["React", "Frontend", "Performance"],
  },
  {
    id: "2",
    title: "Building High-Performing Engineering Teams",
    description:
      "Learn strategies for creating and leading engineering teams that deliver exceptional results.",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=320&h=180&fit=crop",
    views: 450000,
    duration: 2_535,
    publishedAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(), // 6 months ago
    tags: ["Leadership", "Management"],
  },
  {
    id: "3",
    title: "Advanced TypeScript Patterns You Should Know",
    description:
      "Discover powerful TypeScript patterns that will make your code more robust and maintainable.",
    thumbnail:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=320&h=180&fit=crop",
    views: 125000,
    duration: 1_935,
    publishedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(), // 3 months ago
    tags: ["JavaScript", "Programming"],
  },
  {
    id: "4",
    title: "AI-Powered Code Reviews: Using ChatGPT for Better Code",
    description:
      "Discover how to leverage AI tools like ChatGPT to improve your code review process.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop",
    views: 89000,
    duration: 2_085,
    publishedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 2 months ago
    tags: ["AI", "Productivity"],
  },
  {
    id: "5",
    title: "System Design Interview Deep Dive",
    description:
      "Master system design interviews with real-world examples and proven frameworks.",
    thumbnail:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=320&h=180&fit=crop",
    views: 320000,
    duration: 3_920,
    publishedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 1.5 months ago
    tags: ["Interview", "Backend"],
  },
  {
    id: "6",
    title: "CSS Grid vs Flexbox: When to Use Each",
    description:
      "A comprehensive comparison of CSS Grid and Flexbox layouts with practical examples.",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=180&fit=crop",
    views: 65000,
    duration: 1_725,
    publishedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month ago
    tags: ["CSS", "Frontend"],
  },
  {
    id: "7",
    title: "Node.js Best Practices for Production",
    description:
      "Essential Node.js practices for building scalable and secure production applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    views: 42000,
    duration: 2_482,
    publishedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), // 3 weeks ago
    tags: ["JavaScript", "Backend"],
  },
  {
    id: "8",
    title: "Technical Interview Mastery: Coding Challenges",
    description:
      "Master technical interviews with proven strategies for solving coding problems effectively.",
    thumbnail:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?w=320&h=180&fit=crop",
    views: 78000,
    duration: 3_390,
    publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
    tags: ["Interview", "Career"],
  },
  {
    id: "9",
    title: "Docker for Developers: Complete Guide",
    description:
      "Master Docker containerization for development and deployment workflows.",
    thumbnail:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=320&h=180&fit=crop",
    views: 15000,
    duration: 3_600,
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    tags: ["DevOps", "Tools"],
  },
  {
    id: "10",
    title: "Understanding React Hooks in Depth",
    description:
      "Master React Hooks with detailed explanations and real-world examples.",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320&h=180&fit=crop",
    views: 8500,
    duration: 3_138,
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    tags: ["React", "Frontend"],
  },
  {
    id: "11",
    title: "Remote Team Communication: Tools and Strategies",
    description:
      "Best practices for maintaining effective communication in distributed engineering teams.",
    thumbnail:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=320&h=180&fit=crop",
    views: 3200,
    duration: 2_300,
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
    tags: ["Management", "Team Culture"],
  },
  {
    id: "12",
    title: "AI Tools for Developers: GitHub Copilot and Beyond",
    description:
      "Explore the latest AI coding assistants and how they're transforming software development.",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=320&h=180&fit=crop",
    views: 1800,
    duration: 2_850,
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
    tags: ["AI", "Tools"],
  },
  {
    id: "13",
    title: "Behavioral Interview Questions: STAR Method",
    description:
      "Master behavioral interviews using the STAR method to showcase your experience effectively.",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=320&h=180&fit=crop",
    views: 890,
    duration: 1_755,
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    tags: ["Interview", "Career"],
  },
  {
    id: "14",
    title: "Database Design Fundamentals",
    description:
      "Learn the principles of good database design and normalization techniques.",
    thumbnail:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=320&h=180&fit=crop",
    views: 1240,
    duration: 2_385,
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    tags: ["Database", "Backend"],
  },
  {
    id: "15",
    title: "Vue.js 3 Composition API Deep Dive",
    description:
      "Explore Vue 3's Composition API and learn how to build reactive applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=320&h=180&fit=crop",
    views: 25000,
    duration: 2_910,
    publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    tags: ["JavaScript", "Frontend"],
  },
  {
    id: "16",
    title: "Scaling Engineering Culture in Growing Startups",
    description:
      "How to maintain engineering excellence and culture as your startup grows from 10 to 100+ engineers.",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=320&h=180&fit=crop",
    views: 18500,
    duration: 3_165,
    publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
    tags: ["Leadership", "Career"],
  },
  {
    id: "17",
    title: "GraphQL vs REST: Making the Right Choice",
    description:
      "Compare GraphQL and REST APIs to choose the best approach for your project.",
    thumbnail:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=320&h=180&fit=crop",
    views: 32000,
    duration: 2_140,
    publishedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
    tags: ["Backend", "Programming"],
  },
  {
    id: "18",
    title: "AI Prompt Engineering for Developers",
    description:
      "Learn advanced prompt engineering techniques to get better results from AI coding assistants.",
    thumbnail:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=320&h=180&fit=crop",
    views: 55000,
    duration: 2_470,
    publishedAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(), // 35 days ago
    tags: ["AI", "Productivity"],
  },
  {
    id: "19",
    title: "Python for Web Development with Django",
    description:
      "Build powerful web applications using Python and the Django framework.",
    thumbnail:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=320&h=180&fit=crop",
    views: 95000,
    duration: 3_505,
    publishedAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(), // 2.5 months ago
    tags: ["Programming", "Backend"],
  },
  {
    id: "20",
    title: "Effective 1-on-1 Meetings for Engineering Managers",
    description:
      "Best practices for conducting meaningful 1-on-1 meetings that drive team performance.",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=320&h=180&fit=crop",
    views: 72000,
    duration: 2_025,
    publishedAt: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(), // 50 days ago
    tags: ["Management", "Leadership"],
  },
  {
    id: "21",
    title: "AWS Cloud Architecture Patterns",
    description:
      "Learn common AWS architecture patterns for building scalable cloud applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=320&h=180&fit=crop",
    views: 180000,
    duration: 3_570,
    publishedAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(), // 4 months ago
    tags: ["Cloud", "DevOps"],
  },
  {
    id: "22",
    title: "Negotiating Your Tech Salary: Proven Strategies",
    description:
      "Learn how to research, prepare for, and successfully negotiate your compensation package.",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=320&h=180&fit=crop",
    views: 340000,
    duration: 2_670,
    publishedAt: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString(), // 6.5 months ago
    tags: ["Career", "Management"],
  },
  {
    id: "23",
    title: "Modern JavaScript ES2024 Features",
    description:
      "Discover the latest JavaScript features and how to use them in your projects.",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=320&h=180&fit=crop",
    views: 48000,
    duration: 2_592,
    publishedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(), // 40 days ago
    tags: ["JavaScript", "Programming"],
  },
  {
    id: "24",
    title: "Using AI for Code Documentation and Comments",
    description:
      "Automate and improve your code documentation using AI tools and best practices.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=320&h=180&fit=crop",
    views: 22000,
    duration: 2_175,
    publishedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(), // 25 days ago
    tags: ["AI", "Documentation"],
  },
  {
    id: "25",
    title: "Kubernetes Deployment Strategies",
    description:
      "Master different deployment strategies in Kubernetes for production workloads.",
    thumbnail:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=320&h=180&fit=crop",
    views: 85000,
    duration: 3_318,
    publishedAt: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000).toISOString(), // 2.5 months ago
    tags: ["DevOps", "Tools"],
  },
  {
    id: "26",
    title: "Building Psychological Safety in Engineering Teams",
    description:
      "Create an environment where team members feel safe to take risks and learn from failures.",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=320&h=180&fit=crop",
    views: 65000,
    duration: 2_880,
    publishedAt: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString(), // 2 months ago
    tags: ["Team Culture", "Leadership"],
  },
  {
    id: "27",
    title: "Machine Learning with TensorFlow",
    description:
      "Introduction to machine learning concepts using TensorFlow and Python.",
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=320&h=180&fit=crop",
    views: 220000,
    duration: 3_585,
    publishedAt: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString(), // 5 months ago
    tags: ["AI", "Programming"],
  },
  {
    id: "28",
    title: "Technical Writing for Software Engineers",
    description:
      "Improve your technical writing skills to communicate complex ideas clearly and effectively.",
    thumbnail:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=320&h=180&fit=crop",
    views: 38000,
    duration: 2_370,
    publishedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 1.5 months ago
    tags: ["Documentation", "Career"],
  },
  {
    id: "29",
    title: "Svelte vs React: Framework Comparison",
    description:
      "Compare Svelte and React frameworks to understand their strengths and use cases.",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=180&fit=crop",
    views: 28000,
    duration: 2_310,
    publishedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month ago
    tags: ["JavaScript", "Frontend"],
  },
  {
    id: "30",
    title: "AI-Assisted Testing: Automated Test Generation",
    description:
      "Explore how AI can help generate comprehensive test suites and improve code coverage.",
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=320&h=180&fit=crop",
    views: 15000,
    duration: 2_600,
    publishedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(), // 18 days ago
    tags: ["AI", "Testing"],
  },
  {
    id: "31",
    title: "Git Advanced Workflows and Tips",
    description:
      "Advanced Git techniques for managing complex development workflows.",
    thumbnail:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=320&h=180&fit=crop",
    views: 52000,
    duration: 2_782,
    publishedAt: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000).toISOString(), // 55 days ago
    tags: ["DevOps", "Tools"],
  },
  {
    id: "32",
    title: "Mentoring Junior Developers: A Manager's Guide",
    description:
      "Strategies for effectively mentoring and developing junior engineers on your team.",
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=320&h=180&fit=crop",
    views: 75000,
    duration: 3_045,
    publishedAt: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000).toISOString(), // 70 days ago
    tags: ["Leadership", "Management"],
  },
  {
    id: "33",
    title: "Next.js 14 App Router Deep Dive",
    description:
      "Explore Next.js 14's App Router and learn about server components and layouts.",
    thumbnail:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=320&h=180&fit=crop",
    views: 95000,
    duration: 3_555,
    publishedAt: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000).toISOString(), // 85 days ago
    tags: ["React", "Frontend"],
  },
  {
    id: "34",
    title: "Preparing for FAANG Interviews: Complete Roadmap",
    description:
      "A comprehensive guide to preparing for interviews at top tech companies like Google, Meta, and Amazon.",
    thumbnail:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=320&h=180&fit=crop",
    views: 850000,
    duration: 4_335,
    publishedAt: new Date(Date.now() - 300 * 24 * 60 * 60 * 1000).toISOString(), // 10 months ago
    tags: ["Interview", "Career"],
  },
  {
    id: "35",
    title: "MongoDB Aggregation Pipeline Mastery",
    description:
      "Master MongoDB's aggregation pipeline for complex data processing and analysis.",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=320&h=180&fit=crop",
    views: 68000,
    duration: 3_100,
    publishedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 2 months ago
    tags: ["Database", "Backend"],
  },
  {
    id: "36",
    title: "AI in Software Architecture: Making Better Decisions",
    description:
      "How AI tools can assist in making architectural decisions and designing better systems.",
    thumbnail:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=320&h=180&fit=crop",
    views: 42000,
    duration: 3_330,
    publishedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(), // 40 days ago
    tags: ["AI", "Backend"],
  },
  {
    id: "37",
    title: "WebAssembly: The Future of Web Performance",
    description:
      "Learn how WebAssembly can supercharge your web applications' performance.",
    thumbnail:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=320&h=180&fit=crop",
    views: 35000,
    duration: 2_695,
    publishedAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(), // 35 days ago
    tags: ["Performance", "Frontend"],
  },
  {
    id: "38",
    title: "Building Diverse and Inclusive Engineering Teams",
    description:
      "Practical strategies for creating more diverse, inclusive, and innovative engineering teams.",
    thumbnail:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=320&h=180&fit=crop",
    views: 58000,
    duration: 2_760,
    publishedAt: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(), // 50 days ago
    tags: ["Team Culture", "Leadership"],
  },
  {
    id: "39",
    title: "Microservices Architecture with Spring Boot",
    description:
      "Build scalable microservices using Spring Boot and learn best practices.",
    thumbnail:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=320&h=180&fit=crop",
    views: 140000,
    duration: 3_510,
    publishedAt: new Date(Date.now() - 110 * 24 * 60 * 60 * 1000).toISOString(), // 3.5 months ago
    tags: ["Programming", "Backend"],
  },
  {
    id: "40",
    title: "Code Review Best Practices for Engineering Teams",
    description:
      "Establish effective code review processes that improve code quality and team collaboration.",
    thumbnail:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=320&h=180&fit=crop",
    views: 88000,
    duration: 2_265,
    publishedAt: new Date(Date.now() - 95 * 24 * 60 * 60 * 1000).toISOString(), // 3 months ago
    tags: ["Team Culture", "Management"],
  },
  {
    id: "41",
    title: "Rust Programming for Beginners",
    description:
      "Introduction to Rust programming language and its memory safety features.",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=320&h=180&fit=crop",
    views: 125000,
    duration: 3_252,
    publishedAt: new Date(Date.now() - 130 * 24 * 60 * 60 * 1000).toISOString(), // 4.5 months ago
    tags: ["Programming", "Backend"],
  },
  {
    id: "42",
    title: "AI-Powered Debugging: Finding Bugs Faster",
    description:
      "Learn how AI tools can help you debug more efficiently and catch issues earlier.",
    thumbnail:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=320&h=180&fit=crop",
    views: 32000,
    duration: 2_490,
    publishedAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(), // 4 weeks ago
    tags: ["AI", "Tools"],
  },
  {
    id: "43",
    title: "Flutter Mobile App Development",
    description: "Build cross-platform mobile apps using Flutter and Dart.",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=320&h=180&fit=crop",
    views: 185000,
    duration: 3_585,
    publishedAt: new Date(Date.now() - 160 * 24 * 60 * 60 * 1000).toISOString(), // 5.5 months ago
    tags: ["Frontend", "Programming"],
  },
  {
    id: "44",
    title: "Engineering Manager to Director: Career Transition",
    description:
      "Navigate the transition from engineering manager to director with proven strategies and insights.",
    thumbnail:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=320&h=180&fit=crop",
    views: 95000,
    duration: 3_260,
    publishedAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(), // 2.5 months ago
    tags: ["Career", "Leadership"],
  },
  {
    id: "45",
    title: "API Design Best Practices",
    description: "Learn how to design clean, maintainable, and scalable APIs.",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=320&h=180&fit=crop",
    views: 72000,
    duration: 2_538,
    publishedAt: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000).toISOString(), // 55 days ago
    tags: ["Backend", "Programming"],
  },
  {
    id: "46",
    title: "Whiteboard Interview Strategies That Actually Work",
    description:
      "Master the art of whiteboard coding interviews with practical techniques and examples.",
    thumbnail:
      "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=320&h=180&fit=crop",
    views: 155000,
    duration: 2_955,
    publishedAt: new Date(Date.now() - 105 * 24 * 60 * 60 * 1000).toISOString(), // 3.5 months ago
    tags: ["Interview", "Career"],
  },
  {
    id: "47",
    title: "Building a React App from Scratch",
    description:
      "Learn how to build a modern React application from the ground up using the latest tools and best practices.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320&h=180&fit=crop",
    views: 280000,
    duration: 4_530,
    publishedAt: new Date(Date.now() - 220 * 24 * 60 * 60 * 1000).toISOString(), // 7 months ago
    tags: ["React", "Frontend"],
  },
  {
    id: "48",
    title: "Using ChatGPT for Project Planning and Estimation",
    description:
      "Leverage AI to improve your project planning, estimation accuracy, and team coordination.",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=180&fit=crop",
    views: 68000,
    duration: 2_325,
    publishedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 1.5 months ago
    tags: ["AI", "Management"],
  },
  {
    id: "49",
    title: "Webpack 5 Complete Guide",
    description: "Master Webpack 5 configuration and optimization techniques.",
    thumbnail:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=320&h=180&fit=crop",
    views: 92000,
    duration: 2_913,
    publishedAt: new Date(Date.now() - 88 * 24 * 60 * 60 * 1000).toISOString(), // 3 months ago
    tags: ["JavaScript", "Tools"],
  },
  {
    id: "50",
    title: "Redis Caching Strategies",
    description:
      "Implement effective caching strategies using Redis for high-performance applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?w=320&h=180&fit=crop",
    views: 48000,
    duration: 2_382,
    publishedAt: new Date(Date.now() - 42 * 24 * 60 * 60 * 1000).toISOString(), // 42 days ago
    tags: ["Database", "Performance"],
  },
]
