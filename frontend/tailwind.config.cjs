/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "halloween", "winter", "fantasy",
    {
      dark: {
        ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        secondary: "#FA9928"
        // secondary: "#75DB48"
      }
    }
  
    ],
    
  }
}
