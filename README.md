# DaredevTech AWS Learning Platform

A modern, interactive learning platform designed to help developers prepare for the **AWS Developer Associate Certification** by building hands-on projects.

Live at: [learn.daredevtech.com](https://learn.daredevtech.com)

---

## 🎯 Goal

This project gamifies the AWS learning experience. Each AWS service is taught through:

- A **visual slideshow introduction**
- An **interactive module** or simulation (like IAM sandbox)
- Code walkthroughs and best practices
- Real project examples to reinforce concepts

The goal is to make AWS approachable, visual, and fun.

---

## 🧠 Who It's For

- Developers studying for the AWS Developer Associate Certification
- Educators who want to showcase AWS services interactively
- Contributors interested in devtools, cloud education, and frontend/backend integration

---

## 🌐 Architecture

- **Frontend**: Built with [Next.js](https://nextjs.org/) using the App Router and Tailwind CSS
- **Auth**: [Amazon Cognito](https://aws.amazon.com/cognito/) (user onboarding and profile saving)
- **Design System**: Dark-themed UI with custom iconography and slide-based education flow

---

## 📁 Folder Structure

```bash
daredevtech-learning-platform/
│
├── public/                     # Static assets (images, logos, icons)
│   └── assets/                 # Custom illustrations (laptop, cube, etc.)
│
├── src/
│   ├── app/                    # App Router structure
│   │   ├── page.tsx           # Homepage (overview of modules)
│   │   ├── layout.tsx         # Global layout wrapper
│   │   └── iam/               # IAM-specific learning path
│   │       ├── page.tsx       # IAM base module page
│   │       ├── slideshow.tsx  # IAM intro slideshow
│   │       └── sandbox.tsx    # Interactive drag-and-drop IAM builder
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Button.tsx
│   │   ├── Slide.tsx
│   │   └── SandboxCanvas.tsx
│   │
│   ├── lib/                   # Logic utilities
│   │   └── simulatePolicy.ts  # Example: IAM policy simulator logic
│   │
│   ├── styles/                # Tailwind + global styles
│   │   └── globals.css
│   │
│   └── types/                 # Shared TypeScript types
│       └── iam.ts
│
├── tailwind.config.ts         # Tailwind theme config (Daredev brand colors)
├── postcss.config.js
├── tsconfig.json
└── package.json


** DEFAULT NOTES **

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# daredevtech-learning-platform
