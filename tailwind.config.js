/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#F97316",
        lightbg: "#F8FAFC",
        darktext: "#111827",
        muted: "#6B7280",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
