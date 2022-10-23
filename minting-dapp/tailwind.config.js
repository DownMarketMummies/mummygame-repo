const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.stone[100],
          to_bg: colors.stone[200],
        },
        titles: colors.amber[600],
        links: {
          txt: colors.amber[600],
          hover_txt: colors.amber[700],
        },
        loading_spinner: colors.amber[500],
        popups: {
          bg: colors.stone[800],
          txt: colors.stone[50],
          internal_border: colors.stone[500],
        },
        warning: {
          txt: colors.stone[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.stone[50],
          bg: colors.stone[700],
          border: colors.stone[200],
          hover_txt: colors.stone[50],
          hover_bg: colors.stone[800],
          hover_border: colors.stone[200],
        },
        btn_primary: {
          txt: colors.stone[800],
          bg: colors.amber[500],
          border: colors.amber[500],
          hover_txt: colors.stone[800],
          hover_bg: colors.amber[900],
          hover_border: colors.amber[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.amber[600],
        txt_input: {
          txt: colors.amber[600],
          bg: colors.white,
          border: colors.stone[200],
          focus_txt: colors.amber[600],
          focus_bg: colors.stone[50],
          focus_border: colors.amber[300],
          placeholder_txt: colors.amber[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.stone[800],
          bg: colors.amber[100],
        },

        // Mint widget
        token_preview: colors.amber[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
