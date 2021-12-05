module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "rgb(21, 21, 21)",
        dusk: "#202022",
        mist: "#949495",
        purple: "#bb86fc",
        "intuit-blue": "#0077c5",
        "tekion-green": "#01bfa5",
        "toptal-blue": "#60a5fa",
        "contiamo-blue": "#3caad6",
      },
      width: {
        "w-fit": "fit-content",
        100: "25rem",
        148: "37rem",
      },
      maxWidth: {
        212: "53rem",
        312: "78rem",
      },
      minWidth: {
        100: "25rem",
      },
      height: {
        34: "8.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
