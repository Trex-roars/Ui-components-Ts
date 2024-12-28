# Components Documentation

Welcome to the Components Documentation! This repository contains a variety of reusable and customizable components designed to enhance your application development. Below is an overview of the available components and their usage.

---

## Table of Contents

1. [Alert Toast](#Alert-Toast)
2. [Loading Spinner](#loading-spinner)

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

## Notes
- Each component is designed to be modular and reusable.
- We use `clsx` for conditional classnames and `prop-types` for prop validation.
- Components are built using React and can be easily integrated into any React application.
- Ensure you have the required dependencies installed (e.g., `react`, `react-dom`, `prop-types`, `clsx`).
- Ensure you import the required context providers (if any) for components like `Alert Toast`.
- Custom styles can be added via Tailwind or styled-components as needed.

For detailed documentation on each component, refer to the respective README files in their folders.
