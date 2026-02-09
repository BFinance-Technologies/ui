# UI BFinance - Component Library

A React component library starter template for building reusable UI components.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your components in action.

### Build

```bash
npm run build
```

## 📁 Project Structure

```
ui-bfinance/
├── src/
│   ├── components/
│   │   ├── Button/              # Example component
│   │   │   ├── index.js         # Export file
│   │   │   ├── Button.jsx       # Component logic
│   │   │   └── Button.module.css # Component styles
│   │   └── .template/           # Template for new components
│   ├── App.jsx                  # Demo page
│   ├── App.css                  # Global app styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── README.md
```

## 🎨 Creating a New Component

### Step 1: Copy the Template

```bash
cp -r src/components/.template src/components/YourComponentName
```

### Step 2: Rename Files

Rename the files inside the folder:
- `ComponentName.jsx` → `YourComponentName.jsx`
- `ComponentName.module.css` → `YourComponentName.module.css`

### Step 3: Update index.js

```javascript
export { default } from './YourComponentName';
```

### Step 4: Implement Your Component

Update `YourComponentName.jsx` with your component logic:

```jsx
import React from 'react';
import styles from './YourComponentName.module.css';

const YourComponentName = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

export default YourComponentName;
```

### Step 5: Add Styles

Update `YourComponentName.module.css` with your component styles.

### Step 6: Demo Your Component

Add your component to `App.jsx` to see it in action:

```jsx
import YourComponentName from './components/YourComponentName'

// In your App component:
<YourComponentName>
  Hello World!
</YourComponentName>
```

## 📝 Component Guidelines

### Required Props

All components should accept these standard props:

- `className` - Additional CSS classes
- `style` - Inline styles object
- `...rest` - Spread remaining props to the root element

### CSS Modules

- Use CSS Modules for component styles (`.module.css`)
- Avoid global styles in component files
- Use semantic class names (`.container`, `.button`, `.header`)

### File Naming

- Components: PascalCase (`Button.jsx`, `InputField.jsx`)
- CSS Modules: PascalCase + `.module.css` (`Button.module.css`)
- Folders: PascalCase (`Button/`, `InputField/`)

## 🎯 Best Practices

1. **Keep components small and focused** - One component, one responsibility
2. **Use prop destructuring** - Makes props clear and explicit
3. **Provide default props** - Use ES6 default parameters
4. **Add PropTypes or TypeScript** - Document expected prop types
5. **Write examples** - Include usage examples in JSDoc comments
6. **Test your components** - Write tests for critical functionality
7. **Accessibility** - Use semantic HTML and ARIA attributes when needed

## 📦 Exporting Components

When your library is ready, you can create a main export file:

```javascript
// src/index.js
export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
// Add more components here
```

Then import in other projects:

```javascript
import { Button, Input } from 'ui-bfinance';
```

## 🛠 Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS Modules** - Component styling
- **ES6+** - Modern JavaScript

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 🤝 Contributing

1. Create a new component following the guidelines above
2. Add examples in `App.jsx`
3. Document your component with JSDoc comments
4. Test your component thoroughly

---

**Happy coding! 🎉**
