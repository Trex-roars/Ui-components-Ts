# Custom Alert Toast with Title and Message

This guide explains how to create and use a custom alert toast component with configurable title, message, and type.

## Features
- Customizable **Title** and **Message**.
- Multiple **Alert Types**: `success`, `error`, `warning`, `info` (default: `success`).
- Easy integration with your application layout.

---

## Usage Guide

### 1. Wrap Your Layout with the `AlertProvider` Component

To enable the alert functionality across your app, wrap your main layout or component tree with the `AlertProvider`:

```jsx
<AlertProvider>
  {children}
</AlertProvider>
```

This ensures the `showAlert` function is available throughout the app.

---

### 2. Displaying an Alert Toast

Use the `showAlert` function to trigger an alert. The function accepts the following parameters:

- **title** (required): The title of the alert.
- **message** (required): A brief message describing the alert.
- **type** (optional): The type of alert, such as `success`, `error`, `warning`, or `info`. The default type is `success`.

Example:

```jsx
showAlert({
  title: "Operation Successful",
  message: "Your data has been saved successfully.",
  type: "success" // Optional
});
```

---

### 3. Alert Types

The `type` parameter customizes the appearance of the alert toast. Available options:

| Type      | Description                       | Default Appearance |
|-----------|-----------------------------------|---------------------|
| `success` | Indicates a successful operation. | Green               |
| `error`   | Indicates an error has occurred.  | Red                 |
| `warning` | Warns the user of a potential issue. | Yellow              |
| `info`    | Provides informational feedback.  | Blue                |

If no `type` is specified, the default is `success`.

---

### Example Integration

Here’s how you might use the custom alert system in a component:

```jsx
import { AlertProvider, showAlert } from './AlertToast';

function App() {
  const handleClick = () => {
    showAlert({
      title: "Warning",
      message: "This action cannot be undone.",
      type: "warning"
    });
  };

  return (
    <AlertProvider>
      <button onClick={handleClick}>Trigger Alert</button>
    </AlertProvider>
  );
}
```

---

### Notes

- Ensure the `AlertProvider` wraps your app to provide context.
- Customize styles for each `type` as per your design requirements.

---

Enjoy seamless alert management with your custom alert toast!
