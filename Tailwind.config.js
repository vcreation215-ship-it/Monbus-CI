```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sotra: {
          orange: '#FF8200',
          green: '#009E49',
          white: '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
}

```
