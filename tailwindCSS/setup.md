# Tailwind CSS Setup Guide (CLI - v4)

This guide explains how to set up **Tailwind CSS v4** using the CLI in a simple HTML + CSS project.

---

## 📂 Project Structure

```
my-tailwind-project/
  src/
    input.css
    index.html
  tailwind.config.js   (optional, for customization)
```

---

## ⚡ Step 1: Create a Project Folder

```bash
mkdir my-tailwind-project
cd my-tailwind-project
```

---

## ⚡ Step 2: Initialize npm (optional but recommended)

```bash
npm init -y
```

---

## ⚡ Step 3: Install Tailwind CSS (with CLI)

```bash
npm install tailwindcss @tailwindcss/cli
```

---

## ⚡ Step 4: Create Input CSS

Create `src/input.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ⚡ Step 5: Create an HTML File

Create `src/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Setup</title>
  <link href="./output.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
  <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind v4 🚀</h1>
</body>
</html>
```

---

## ⚡ Step 6: Build CSS with Tailwind CLI

Run the following command:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

- `-i` → input file (`src/input.css`)
- `-o` → output file (`src/output.css`)
- `--watch` → keeps watching for changes and rebuilds automatically

---

## ⚡ Step 7: Optional - Tailwind Config (Customization)

In Tailwind v4, the `init` command is removed.  
If you need custom configuration, **create `tailwind.config.js` manually**:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#1da1f2",
      },
    },
  },
  plugins: [],
};
```

Then build with:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch --config ./tailwind.config.js
```

---

## ✅ Done!

Now you can use Tailwind classes in your `index.html` 🎉

---

## 🔧 Common Issues

- **Error: input.css does not exist** → Make sure `src/input.css` exists in the correct folder.  
- **Config not applied** → Ensure you created `tailwind.config.js` manually (v4 removed `init` command).  

---

Happy coding! 🚀
