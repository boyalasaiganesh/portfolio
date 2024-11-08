// src/themes/default.js
const theme = {
    // Temp fonts
    fonts: {
        title: "Space Grotesk, sans-serif",
        main: "Space Grotesk, sans-serif"
    },
    // Colors for layout
    colors: {
        primary1: "#212A31",      // You can leave this as is or change it
        background1: "#000000",   // Change this to black
        button: "#dcdae3",
        background2: "#19212C",   // You can leave this as is or change it
        text: "#C8CFD8",
        text1: "#F2F5F7",
        text2: "#626970",
        text3: "#575C66",
        footerBackground: "#000000" // Change this to black as well
    },
    // Breakpoints for responsive design
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    }
};

export default theme;
