```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx", // Ajouté pour être sûr qu'il voit ton fichier principal
  ],
  theme: {
    extend: {
      colors: {
        'sotra-orange': '#FF8200',
        'sotra-vert': '#009E49',
      },
    },
  },
  plugins: [],
}

```
