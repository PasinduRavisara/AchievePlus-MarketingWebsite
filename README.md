# AchievePlus Marketing Website

A premium, high-performance marketing website designed for **AchievePlus**. Built with the latest web technologies, this project features a stunning dark-themed UI, smooth animations, and a responsive design to effectively communicate the brand's value proposition.

## 🚀 Features

- **Modern Architecture**: Built on **Next.js 15** (App Router) and **React 19** for server-side rendering and optimal performance.
- **Premium Design System**: A custom-crafted CSS design system featuring a cohesive dark theme, vibrant Cyan/Teal accents, glassmorphism effects, and modern gradients.
- **Smooth Animations**: Interactive elements and page transitions powered by **Framer Motion**.
- **Responsive Layout**: Fully adaptive design that looks perfect on mobile, tablet, and desktop devices.
- **Functional Contact Form**: Integrated with **EmailJS** for seamless user inquiries.
- **Modern Typography**: Utilizes _Inter_ for readability and _Space Grotesk_ for bold, distinct headings.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS 3 (CSS Variables, Flexbox/Grid, Responsive Design)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Dependencies**:
  - `@emailjs/browser` (Form handling)

## 📂 Project Structure

```bash
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router pages and layout
│   │   ├── globals.css  # Global styles and design tokens
│   │   ├── layout.tsx   # Root layout and metadata
│   │   └── page.tsx     # Landing page composition
│   └── components/      # Reusable UI components
│       ├── Header/
│       ├── Hero/
│       ├── About/
│       ├── Features/
│       ├── Quote/
│       ├── Team/
│       ├── Contact/
│       └── Footer/
├── netlify.toml         # Netlify deployment configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/StartLord-22/AchievePlus-MarketingWebsite.git
   cd AchievePlus-MarketingWebsite
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🚀 Deployment

The project is configured for easy deployment on **Netlify**. A `netlify.toml` file is included to handle build settings automatically.

To deploy manually:

1. Push your changes to GitHub/GitLab.
2. Connect your repository to Netlify (or Vercel).
3. The build command `npm run build` and publish directory `.next` will be automatically detected.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
