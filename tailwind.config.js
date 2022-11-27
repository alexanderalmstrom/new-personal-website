/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "fluid-1": ["clamp(4rem, 8vw + 2rem, 8rem)", "1.1"],
        "fluid-2": ["clamp(3rem, 6vw + 1.5rem, 6rem)", "1.1"],
        "fluid-3": ["clamp(2rem, 4vw + 1rem, 4rem)", "1.1"],
      },
    },
  },
  plugins: [],
};
