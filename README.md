# Components Documentation

Welcome to the Components Documentation! This repository contains a variety of reusable and customizable components designed to enhance your application development. Below is an overview of the available components and their usage.

---

## Table of Contents

1. [Alert Toast](#Alert-Toast)
2. [Loading Spinner](#loading-spinner)
3. [Navbar with Authentication](#navbar-with-authentication)
4. [Theme Switcher](#Theme-Toogle)

---

### 1. Alert Toast
**Description**: A customizable alert component for displaying notifications with a title, message, and type (e.g., success, error, info).

**Usage**:
- Wrap your layout with `AlertProvider`.
- Use `showAlert` to trigger an alert.

Refer to the [Alert Toast Documentation](./AlertToast/README.md) for detailed instructions.

---

### 2. Loading Spinner
**Description**: A customizable spinner component to indicate loading states.

**Features**:
- Configurable size and animation speed.
- Inline or full-screen modes.

**Basic Example**:
```jsx
<Spinner size="large" />
```

---

### 3. Navbar with Authentication
**Description**: A floating navigation bar that includes authentication functionality. It shows links for Home, Dashboard, and Create Form, and displays the user’s avatar or a login button based on their authentication status.

**Features**:
- **Scroll-based visibility**: Navbar hides on scroll down and reappears on scroll up.
- **Authentication**: Integrates with **Clerk** for user login state management.
- **Responsive**: Adapts to different screen sizes, showing icons on smaller screens.

**Usage**:
1. **Install Dependencies**:
   ```bash
   npm install lucide-react @clerk/nextjs framer-motion next
   ```

2. **Integrate Navbar in Your Layout**:
   ```jsx
   import { Navbar } from './components/Navbar';

   const Layout = () => {
     return (
       <div>
         <Navbar />
         {/* Other layout components */}
       </div>
     );
   };
   ```

3. **Authentication**:
   - Wrap your app with the Clerk provider in `_app.js` or `_app.tsx` to manage authentication.

**Basic Example**:
```jsx
<Navbar />
```

For detailed instructions, refer to the [Navbar Documentation](./Navbar/README.md).

---

## Notes
- Each component is designed to be modular and reusable.
- We use `clsx` for conditional classnames and `prop-types` for prop validation.
- Components are built using **React** and can be easily integrated into any React application.
- Ensure you have the required dependencies installed (e.g., `react`, `react-dom`, `prop-types`, `clsx`).
- Ensure you import the required context providers (e.g., for `Alert Toast` and `Navbar`).
- Custom styles can be added via **Tailwind CSS** or **styled-components** as needed.

For detailed documentation on each component, refer to the respective README files in their folders.
