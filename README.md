# Next.js 16 Authentication App

A modern authentication application built with Next.js 16, shadcn/ui, and Tailwind CSS.

## Features

- Modern login interface with email and password fields
- Password visibility toggle
- Remember me checkbox
- Social login buttons (UI only)
- Responsive design with Tailwind CSS
- Pre-built shadcn/ui components (Button, Input, Label, Card, Checkbox)
- TypeScript support
- Beautiful gradient backgrounds
- Form validation
- Error handling

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Headless component primitives
- **Lucide React** - Icon library

## Project Structure

```
next-auth-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Login page
│   ├── dashboard/
│   │   └── page.tsx        # Dashboard page (example)
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── button.tsx      # Button component
│   │   ├── input.tsx       # Input component
│   │   ├── label.tsx       # Label component
│   │   ├── card.tsx        # Card component
│   │   └── checkbox.tsx    # Checkbox component
│   └── login-form.tsx      # Login form component
├── lib/
│   └── utils.ts            # Utility functions
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
cd next-auth-app
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Components

### shadcn/ui Components Included

1. **Button** - Versatile button with multiple variants
2. **Input** - Text input field with styling
3. **Label** - Form label component
4. **Card** - Container component with header, content, and footer
5. **Checkbox** - Accessible checkbox input

## Customization

### Theme Colors

Edit `app/globals.css` to customize the theme. The app uses CSS variables for all colors:

```css
:root {
  --primary: 0 0% 9.0%;
  --secondary: 0 0% 96.1%;
  /* ... other colors ... */
}
```

### Login Form

The login form component is located at `components/login-form.tsx`. Modify it to:
- Add real API integration
- Change validation rules
- Customize the form fields

### Dashboard

Example dashboard page is at `app/dashboard/page.tsx`. Use this as a template for authenticated pages.

## Features to Add

- Real authentication (NextAuth.js, Auth0, Firebase)
- API routes for login/registration
- Protected routes with middleware
- Session management
- Password reset functionality
- Email verification
- Two-factor authentication
- User profile page
- Settings page

## Authentication Integration

To add real authentication, consider:

1. **NextAuth.js** - Next.js authentication solution
2. **Auth0** - Third-party authentication provider
3. **Firebase Auth** - Google's authentication service
4. **Supabase** - Open-source Firebase alternative
5. **Clerk** - Modern authentication platform

## Styling

The project uses Tailwind CSS with custom configuration. Customize styling in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables
- Component files - Individual component styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues and questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Next Steps

1. Implement real authentication
2. Create API routes
3. Add database connection
4. Build registration page
5. Add password reset flow
6. Implement social authentication
7. Add user profile management
