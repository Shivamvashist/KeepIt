@type {import('tailwindcss').Config}
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // adjust for your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@codaworks/react-glow/tailwind'),
    ],
  }
  