# Floating Navbar with Authentication

This project implements a floating navigation bar with authentication in **React** and **Next.js**. It uses **Clerk** for user management, **Framer Motion** for animations, and **Lucide Icons** for navigation.

## Features
- **Floating Navbar**: Shows/hides on scroll.
- **Authentication**: Displays user avatar or login button based on signed-in status (using **Clerk**).
- **Responsive**: Adjusts for different screen sizes with icons for smaller screens.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install lucide-react @clerk/nextjs framer-motion next
   ```

2. **Configure Clerk**: Follow [Clerk's Next.js setup guide](https://clerk.dev/docs/get-started-with-nextjs).

3. **Customize**: Modify `navItems` in the `Navbar` component to adjust navigation links.

---
