![tw-banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

# Next.js Web3 Dashboard with Thirdweb

A modern, responsive web3 dashboard built with Next.js, Thirdweb, and shadcn/ui. This template includes authentication, a clean UI, and is ready for you to build upon.

## ✨ Features

- 🔐 **Authentication** - Email/password login and signup flows
- 🎨 **Modern UI** - Built with shadcn/ui components
- 🚀 **Next.js 13+** - App Router and React Server Components
- 🌈 **Theming** - Dark/light mode support
- 📱 **Responsive** - Works on all device sizes
- ⚡ **Fast** - Optimized for performance
- 🔄 **Real-time Updates** - With React Query

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI**: shadcn/ui, Tailwind CSS
- **Web3**: Thirdweb SDK
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Icons**: Lucide Icons
- **Notifications**: Sonner

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-thirdweb-dashboard.git
   cd nextjs-thirdweb-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📂 Project Structure

```
/src
  /app
    /dashboard        # Dashboard page (protected route)
    /login            # Login page
    /signup           # Signup page
    layout.tsx        # Root layout
  /components
    /auth             # Authentication components
    /ui               # Reusable UI components
    /layout           # Layout components
  /lib                # Utility functions and configurations
  /styles             # Global styles
```

## 🔐 Authentication

The app includes a complete authentication system with:
- Email/Password login
- Protected routes
- Session management
- Form validation

## 🎨 Theming

Customize the theme by editing the `tailwind.config.js` file. The app supports both light and dark modes out of the box.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Thirdweb](https://thirdweb.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Installation

Install the template using [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
  npx thirdweb create app --next
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`CLIENT_ID`

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).

## Run locally

Install dependencies

```bash
yarn
```

Start development server

```bash
yarn dev
```

Create a production build

```bash
yarn build
```

Preview the production build

```bash
yarn start
```

## Resources

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

## Need help?

For help or feedback, please [visit our support site](https://thirdweb.com/support)
