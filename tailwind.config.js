module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#655af3",
        ligth: {
          bg: {
            primary: "#ffffff",
            secondary: "#e5e5e5"
          }
        },
        dark: {
          bg: {
            primary: "#0f172a",
            secondary: "#1e293b"
          }
        }
      }
    },
  },
  plugins: [],
}
