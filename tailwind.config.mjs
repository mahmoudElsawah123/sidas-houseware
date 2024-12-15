import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : '#0e001a',
        secondary : '#ce0000',
      },
      
      screens : {
        sm : "576px",
        md : "768px",
        lg : "992px",
        xl : "1200px",
       "2xl" : "1400px"
      },
      
     
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
};
