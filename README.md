# TeamFlow AI

A modern, AI-powered team collaboration platform built with Next.js, React, and TypeScript.

## 🚀 Features

- **User Authentication** - Secure authentication powered by Kinde
- **Responsive UI** - Beautiful, modern interface with Tailwind CSS
- **Dark Mode Support** - Built-in theme switching with next-themes
- **Smooth Animations** - Enhanced UX with Motion animations
- **Accessible Components** - Radix UI primitives for accessible, composable components
- **Form Handling** - Robust form management with React Hook Form and Zod validation
- **Toast Notifications** - User-friendly notifications with Sonner

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Authentication**: [Kinde](https://kinde.com/) - Secure auth solution
- **Form Management**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form validation
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Animations**: [Motion](https://www.motion.dev/) - Animation library
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## 📦 Project Structure

```
teamflow-ai/
├── app/                          # Next.js app directory
│   ├── (marketing)/              # Marketing pages
│   │   ├── page.tsx             # Home page
│   │   └── _components/
│   │       ├── header.tsx       # Header navigation
│   │       └── hero-section.tsx # Hero section
│   ├── api/
│   │   └── auth/                # Authentication routes
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/                   # Reusable React components
│   └── ui/                       # UI component library
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── form.tsx
│       ├── avatar.tsx
│       ├── dropdown-menu.tsx
│       └── ...more UI components
├── lib/                          # Utility functions and providers
│   ├── theme-provider.tsx       # Theme provider setup
│   └── utils.ts                 # Helper utilities
├── public/                       # Static assets
│   └── companies/              # Company logos
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.ts              # Next.js configuration
└── eslint.config.mjs           # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srnsksyp/teamflow-ai.git
   cd teamflow-ai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your Kinde authentication credentials:
   ```env
   NEXT_PUBLIC_KINDE_CLIENT_ID=your_client_id
   KINDE_CLIENT_SECRET=your_client_secret
   KINDE_ISSUER_URL=your_issuer_url
   KINDE_SITE_URL=http://localhost:3000
   KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `pnpm dev` - Start the development server with hot reload
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## 🎨 Customization

### Theme Configuration

The project supports light and dark modes. Theme settings can be customized in `lib/theme-provider.tsx`.

### UI Components

All UI components are located in `components/ui/` and built on top of Radix UI primitives. Customize component styles in their respective files using Tailwind CSS classes.

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- PostCSS configuration: `postcss.config.mjs`

## 🔐 Authentication

This project uses Kinde for authentication. The header component automatically handles:
- Login/Register links
- User session management
- Logout functionality
- Responsive mobile navigation

## 📱 Responsive Design

The project is fully responsive and mobile-friendly. The navigation menu adapts to different screen sizes with a mobile hamburger menu.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or inquiries, please reach out to the project maintainer.

---

Built with ❤️ using Next.js and TypeScript
