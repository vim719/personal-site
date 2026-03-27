import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These are the specific Brave Search Hex Codes
        'brave-dark': '#0f111a',    
        'brave-surface': '#191b24', 
        'brave-accent': '#ff5200',  
        'brave-text': '#f4f4f4',
        'brave-muted': '#9ca3af',   
      },
    },
  },
  plugins: [],
};
export default config;