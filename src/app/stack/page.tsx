import React from 'react';
import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";
import Header from "@/components/sections/header";
import { ToolCard } from "@/components/ui/tool-card";

export default function StackPage() {
  // Single image URL for all stack cards
  const toolImageUrl = 'https://cdn.gamma.app/0q3kwkx42ofh0ga/d6db9a08745349c9ae67789ae349ee14/optimized/logo.svg';
  
  // Create array with the Clekr logo as the second image
  const toolImages = [
    toolImageUrl,  // First image: Dub
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/d1a947040ff6463291e17466d54133c9/optimized/mark-primary.svg',  // Second image (Clerk)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/37213141f43b4f6ea5432e82475bafd1/original/supabase-logo-icon.png',  // Third image (Supabase)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/a40bd2e3e7d94a548ee84d889b3dcc25/optimized/GitHub_light.svg',  // Fourth image (GitHub)
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjMTExMTExIiBzdHJva2U9IiMxMTExMTEiPjxnIGNsaXAtcGF0aD0idXJsKCNvcGVucm91dGVyX2xpZ2h0X19jbGlwMF8yMDVfMykiPjxwYXRoIGQ9Ik0zIDI0OC45NDVDMTggMjQ4Ljk0NSA3NiAyMzYgMTA2IDIxOUMxMzYgMjAyIDEzNiAyMDIgMTk4IDE1OEMyNzYuNDk3IDEwMi4yOTMgMzMyIDEyMC45NDUgNDIzIDEyMC45NDUiIHN0cm9rZS13aWR0aD0iOTAiLz48cGF0aCBkPSJNMzU3LjI1IDMyLjczMjRMNTEyIDEyMS41TDM1Ny4yNSAyMTAuMjY4WiIvPjxwYXRoIGQ9Ik0wIDI0OUMxNSAyNDkgNzMgMjYxLjk0NSAxMDMgMjc4Ljk0NUMxMzMgMjk1Ljk0NSAxMzMgMjk1Ljk0NSAxOTUgMzM5Ljk0NUMyNzMuNDk3IDM5NS42NTIgMzI5IDM3NyA0MjAgMzc3IiBzdHJva2Utd2lkdGg9IjkwIi8+PHBhdGggZD0iTTM1NC4yNSAyODcuNjc4TDUwOCAzNzYuNDQ1TDM1NC4yNSA0NjUuMjEzWiIvPjwvZz48L3N2Zz4=',  // Fifth image (OpenRouter SVG)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/d3e3fa32ab5a46c2acbf8d7a10255335/optimized/gemini.svg',  // Sixth image (Gemini)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/27450bd60a4543aea68e7b26a5a8830f/optimized/vercel.svg',  // Seventh image (Vercel)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/f5bd9f20bc104029a7c21812c3856d88/optimized/powershell.svg',  // Eighth image (PowerShell)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/830011471a294405874ae85e4e6d720f/optimized/prettier-icon-light.svg',  // Ninth image (Prettier)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/abdb2a0368d2485e9e6656f300abcb34/optimized/notion.svg',  // Tenth image (Notion)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/e201b8bbae614f6eaa0d3b752cc19318/optimized/shadcn-ui.svg',  // Eleventh image (shadcn/ui)
    'https://cdn.gamma.app/0q3kwkx42ofh0ga/7f6e83fe20234eb18384e3f630daa0c6/optimized/openai-1.svg'  // Twelfth image (OpenAI)
  ];

  // Stack data with names and descriptions
  const tools = [
    {
      name: 'Dub',
      description: 'Open-source link management tool for modern marketing teams.',
      url: 'https://dub.sh/'
    },
    {
      name: 'Clerk',
      description: 'Authentication and user management for your applications.',
      url: 'https://clerk.dev/'
    },
    {
      name: 'Supabase',
      description: 'Open source Firebase alternative with Postgres database, authentication, and real-time subscriptions.',
      url: 'https://supabase.com/'
    },
    {
      name: 'GitHub',
      description: 'The world\'s leading software development platform.',
      url: 'https://github.com/'
    },
    {
      name: 'OpenRouter',
      description: 'Unified API for accessing various AI models.',
      url: 'https://openrouter.ai/'
    },
    {
      name: 'Gemini',
      description: 'Google\'s most advanced AI model for complex tasks.',
      url: 'https://gemini.google.com/'
    },
    {
      name: 'Vercel',
      description: 'Develop. Preview. Ship. The fastest way to ship web applications.',
      url: 'https://vercel.com/'
    },
    {
      name: 'PowerShell',
      description: 'Cross-platform task automation and configuration management framework.',
      url: 'https://learn.microsoft.com/en-us/powershell/'
    },
    {
      name: 'Prettier',
      description: 'An opinionated code formatter for consistent style across your codebase.',
      url: 'https://prettier.io/'
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
      url: 'https://www.notion.so/'
    },
    {
      name: 'shadcn/ui',
      description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
      url: 'https://ui.shadcn.com/'
    },
    {
      name: 'OpenAI',
      description: 'AI research and deployment company creating safe and beneficial AI.',
      url: 'https://openai.com/'
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full">
        <ArcGalleryHero images={toolImages} />
        
        {/* Stack Grid Section */}
        <section id="technology-stack" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Our Technology Stack
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge technologies to build robust, scalable, and modern web applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <ToolCard 
                  key={index}
                  name={tool.name}
                  description={tool.description}
                  url={tool.url}
                  imageUrl={toolImages[index]}
                />
              ))}
              {/* Additional Tool Cards */}
              <ToolCard 
                name="Tauri"
                description="Build smaller, faster, and more secure desktop applications with a web frontend."
                url="https://tauri.app/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/3226a25884334b64979591cffb43517d/optimized/tauri.svg"
              />
              <ToolCard 
                name="Electron"
                description="Build cross-platform desktop apps with JavaScript, HTML, and CSS."
                url="https://www.electronjs.org/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/27b171e62a084fc4b27efa3e5253e942/optimized/electron.svg"
              />
              <ToolCard 
                name="Three.js"
                description="JavaScript 3D library for creating and displaying animated 3D computer graphics in a web browser."
                url="https://threejs.org/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/53785ba1d17a4028b53c80298308f0d7/optimized/threejs-light.svg"
              />
              <ToolCard 
                name="HTML5"
                description="The standard markup language for documents designed to be displayed in a web browser."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/d43f5297df7e48dbb890bbb1b7493181/optimized/html5.svg"
              />
              <ToolCard 
                name="CSS3"
                description="The language we use to style an HTML document, describing how elements should be rendered."
                url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                imageUrl="https://skillicons.dev/icons?i=css"
              />
              <ToolCard 
                name="MySQL"
                description="An open-source relational database management system that uses SQL for managing and querying data."
                url="https://www.mysql.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/7341cf8efcf746d39f8091860327dee3/optimized/mysql-icon-light.svg"
              />
              <ToolCard 
                name="TypeScript"
                description="A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
                url="https://www.typescriptlang.org/"
                imageUrl="https://skillicons.dev/icons?i=typescript"
              />
              <ToolCard 
                name="React"
                description="A JavaScript library for building user interfaces, particularly single-page applications."
                url="https://react.dev/"
                imageUrl="https://skillicons.dev/icons?i=react"
              />
              <ToolCard 
                name="Next.js"
                description="The React Framework for the Web - used for server-rendered React applications."
                url="https://nextjs.org/"
                imageUrl="https://skillicons.dev/icons?i=nextjs"
              />
              <ToolCard 
                name="JavaScript"
                description="A high-level, interpreted programming language that conforms to the ECMAScript specification."
                url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                imageUrl="https://skillicons.dev/icons?i=javascript"
              />
              <ToolCard 
                name="Git"
                description="A distributed version control system for tracking changes in source code during software development."
                url="https://git-scm.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/efafae86572545269fd95b0931dae04a/optimized/git.svg"
              />
              <ToolCard 
                name="Docker"
                description="A platform for developing, shipping, and running applications in containers."
                url="https://www.docker.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/3979ae4135054b70bd92136b4d0c415a/optimized/docker.svg"
                tag={{
                  text: 'BETA',
                  className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }}
              />
              <ToolCard 
                name="Bun"
                description="A fast JavaScript runtime, bundler, test runner, and package manager - all in one."
                url="https://bun.sh/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/a82ecfb7fd7f4f99a397237b0c0f91e5/optimized/bun.svg"
              />
              <ToolCard 
                name="Tailwind CSS"
                description="A utility-first CSS framework for rapidly building custom designs."
                url="https://tailwindcss.com/"
                imageUrl="https://skillicons.dev/icons?i=tailwind"
              />
              <ToolCard 
                name="Turborepo"
                description="A high-performance build system for JavaScript and TypeScript codebases."
                url="https://turbo.build/repo"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/07d88150bea64970bacf5da7d3080dd8/original/turborepo-icon-light.svg"
              />
              <ToolCard 
                name="npm"
                description="The package manager for JavaScript and the world's largest software registry."
                url="https://www.npmjs.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/452b103e16a84bfd896cedff798a5b8e/optimized/npm-wordmark.svg"
              />
              <ToolCard 
                name="PostHog"
                description="Product analytics that you can afford to be honest with. Open-source, self-hosted analytics."
                url="https://posthog.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/f93544728fd14a129b2bb26d8330b76f/original/posthog.svg"
              />
              <ToolCard 
                name="Svelte"
                description="A radical new approach to building user interfaces with a compiler that writes vanilla JavaScript."
                url="https://svelte.dev/"
                imageUrl="https://skillicons.dev/icons?i=svelte"
              />
              <ToolCard 
                name="Groq"
                description="The fastest inference engine for running large language models (LLMs) at scale."
                url="https://groq.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/0c91f9c3583c42df8bbfa0b6e11fd204/optimized/groq.svg"
              />
              <ToolCard 
                name="Windsurf"
                description="A powerful development environment with AI assistance for building applications faster."
                url="https://windsurf.dev/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/cd64f681047f4dfab6c8ed6887a210a3/optimized/windsurf-light.svg"
              />
              <ToolCard 
                name="Model Context Protocol"
                description="A protocol that enables AI models to understand and manipulate their execution context."
                url="https://modelcontextprotocol.io/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/78854299c6c749adb751c6f109c95cb4/original/model-context-protocol-light.svg"
              />
              <ToolCard 
                name="Magic UI"
                description="Beautifully designed, animated UI components and templates for React & Next.js."
                url="https://magicui.design/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/46859d82d46b4663abc09b2cf1c55a04/optimized/magicui.svg"
              />
              <ToolCard 
                name="Qwen"
                description="A large language model series developed by Alibaba Cloud, known for its strong performance in understanding and generation tasks."
                url="https://huggingface.co/Qwen"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/767fd4352ea04d3282a4526d34a07195/optimized/qwen_light.svg"
              />
              <ToolCard 
                name="Shiki"
                description="A beautiful syntax highlighter based on TextMate grammars, built for speed and accuracy."
                url="https://shiki.style/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/23e86fe81d8448c8996a4312fea467bd/optimized/shiki.svg"
              />
              <ToolCard 
                name="Motion"
                description="A powerful animation library for React that makes creating beautiful animations simple and declarative."
                url="https://motion.dev/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/658352142e8a442f9ed1cc3b6f78a94f/optimized/motion.svg"
              />
              <ToolCard 
                name="dotenv"
                description="A zero-dependency module that loads environment variables from a .env file into process.env."
                url="https://github.com/motdotla/dotenv"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/5696c9b8699549eab4326209fa4f138a/optimized/dotenv.svg"
              />
              <ToolCard 
                name="TanStack"
                description="A collection of high-quality open-source software for building modern web applications with React, Vue, and more."
                url="https://tanstack.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/d7a2c5c34f544768ab02ded9f34ee2c9/optimized/tanstack.svg"
              />
              <ToolCard 
                name="Drizzle ORM"
                description="A lightweight and performant TypeScript ORM for SQL databases with a focus on developer experience."
                url="https://orm.drizzle.team/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/910b7a5c82a14e02a7c8a3875ceb30b1/optimized/drizzle-orm_light.svg"
              />
              <ToolCard 
                name="Mermaid"
                description="Generation of diagrams and flowcharts from text in a similar manner to Markdown."
                url="https://mermaid.js.org/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/a8be328ca19646a2bcd77925bce5ec3c/optimized/mermaid-logo-light.svg"
                tag={{
                  text: 'BETA',
                  className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }}
              />
              <ToolCard 
                name="Tempo"
                description="Tempo is an AI visual editor for building React apps. It turns designs into production-ready code instantly."
                url="https://tempo.new/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/15858a155f104db48601ee73b1eb2d01/original/Tempo.png"
              />
              <ToolCard 
                name="Markdown"
                description="A lightweight markup language for creating formatted text using a plain-text editor with simple syntax for headers, lists, and more."
                url="https://www.markdownguide.org/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/43192c19cd674a538192cf482440a9a9/optimized/markdown-light.svg"
              />
              <ToolCard 
                name="WebGL"
                description="A JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins."
                url="https://www.khronos.org/webgl/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/024b2ea8d410454fb11cfb44ac357a7b/optimized/webgl.svg"
              />
              <ToolCard 
                name="Mintlify"
                description="A modern documentation platform that helps developers create beautiful, searchable, and interactive documentation for their products."
                url="https://mintlify.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/ec515dcf58764d398b515fb7a66a17ef/optimized/mintlify.svg"
              />
              <ToolCard 
                name="Web Components"
                description="A set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps."
                url="https://www.webcomponents.org/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/1b63846fb7e34c44817017ddc3bda050/optimized/webcomponents.svg"
              />
              <ToolCard 
                name="Ant Design"
                description="A comprehensive UI design language and React component library for building enterprise-level applications with consistent design patterns."
                url="https://ant.design/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/bcbba90f8b8f441fb2e7a724425735b4/optimized/ant-design-dark-theme.svg"
              />
              <ToolCard 
                name="Vite"
                description="A modern build tool that provides instant server start, lightning-fast hot module replacement, and optimized production builds."
                url="https://vitejs.dev/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/2cb14131bdf94d2bb551100ef9db6289/optimized/vitejs.svg"
              />
              <ToolCard 
                name="Node.js"
                description="A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications and server-side code."
                url="https://nodejs.org/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/b812812f587f4933b8dac71f32a29845/optimized/nodejs.svg"
              />
              <ToolCard 
                name="Mistral AI"
                description="A leading AI company building advanced large language models and AI solutions for developers and businesses."
                url="https://mistral.ai/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/2a17648ed2254a66bfee0383580704f1/optimized/mistral-ai_logo.svg"
              />
              <ToolCard 
                name="C#"
                description="A modern, object-oriented programming language developed by Microsoft for building a wide range of applications on the .NET platform."
                url="https://docs.microsoft.com/en-us/dotnet/csharp/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/7cb594d24d594722bc2a97013e7cea3b/optimized/csharp.svg"
                tag={{
                  text: 'BETA',
                  className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }}
              />
              <ToolCard 
                name="pnpm"
                description="Fast, disk space efficient package manager for JavaScript with strict dependency management and monorepo support."
                url="https://pnpm.io/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/449bca47c5c44f2eaa05b8bec0bb98dc/optimized/pnpm.svg"
              />
              <ToolCard 
                name="Bash"
                description="A powerful Unix shell and command language that provides a command-line interface for interacting with operating systems."
                url="https://www.gnu.org/software/bash/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/8f956d729335460cb30d9b219637f712/original/bash.svg"
              />
              <ToolCard 
                name="Stackblitz"
                description="Instant cloud development environments for building, testing, and sharing web applications directly in the browser."
                url="https://stackblitz.com/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/d703529eb6d746ab9c8c4ea0eb78f1ba/optimized/stackblitz.svg"
              />
              <ToolCard 
                name="Python"
                description="A versatile, high-level programming language known for its readability and extensive libraries for data science, web development, and automation."
                url="https://www.python.org/"
                imageUrl="https://skillicons.dev/icons?i=python"
              />
              <ToolCard 
                name="Figma"
                description="A collaborative interface design tool that enables teams to create, prototype, and share designs in real-time."
                url="https://www.figma.com/"
                imageUrl="https://skillicons.dev/icons?i=figma"
              />
              <ToolCard 
                name="Babel"
                description="A JavaScript compiler that allows developers to use next-generation JavaScript features today by transforming modern JavaScript into backward-compatible versions."
                url="https://babeljs.io/"
                imageUrl="https://cdn.gamma.app/0q3kwkx42ofh0ga/19928a4ea1494ad6a282aac79b878268/optimized/babel.svg"
              />
              <ToolCard 
                name="SQLite"
                description="A C-language library that implements a small, fast, self-contained, high-reliability, full-featured SQL database engine."
                url="https://www.sqlite.org/"
                imageUrl="https://skillicons.dev/icons?i=sqlite"
              />
              <ToolCard 
                name="Redis"
                description="An open-source, in-memory data structure store used as a database, cache, and message broker, with optional durability."
                url="https://redis.io/"
                imageUrl="https://skillicons.dev/icons?i=redis"
                tag={{
                  text: 'BETA',
                  className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }}
              />
              <ToolCard 
                name="Yarn"
                description="A fast, reliable, and secure dependency management tool for JavaScript, featuring a plug'n'play installation system and workspaces for monorepos."
                url="https://yarnpkg.com/"
                imageUrl="https://skillicons.dev/icons?i=yarn"
              />
              <ToolCard 
                name="SVG"
                description="Scalable Vector Graphics, an XML-based vector image format for two-dimensional graphics with support for interactivity and animation."
                url="https://developer.mozilla.org/en-US/docs/Web/SVG"
                imageUrl="https://skillicons.dev/icons?i=svg"
              />
              <ToolCard 
                name="Sass"
                description="Syntactically Awesome Style Sheets - a powerful CSS preprocessor that extends CSS with features like variables, nested rules, and mixins."
                url="https://sass-lang.com/"
                imageUrl="https://skillicons.dev/icons?i=sass"
              />
              <ToolCard 
                name="PostgreSQL"
                description="A powerful, open-source object-relational database system with over 35 years of active development, known for reliability, feature robustness, and performance."
                url="https://www.postgresql.org/"
                imageUrl="https://skillicons.dev/icons?i=postgresql"
              />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                And many more stack and technologies to power your applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
