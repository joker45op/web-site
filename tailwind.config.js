/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          200:"#9ca3af60"
        } // Light blue accent color with 50% opacity
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0ea5e9",
          secondary: "#eab308",
          accent: "#9ca3af",
          neutral: "#060a08",
          "base-100": "#e0f2fe",
          info: "#00b0ff",
          success: "#8db000",
          warning: "#ff9900",
          error: "#ff637c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
