/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"0.7rem",
          xl:"15px",
        },
        
      },
      backgroundImage:{
        "banner":"url(.././images/1.png)",
        "banner2":"url(.././images/download.jpg)",
      },
      fontFamily:{
        "dana-sm":"dana-sm",
        "dana-md":"dana-md",
        "dana-bold":"dana-bold",
        "py-sm":"py-sm",
        "py-md":"py-md",
        "py-bold":"py-bold",
      },
      colors:{
        "blue":"#028fcc",
        "miniSky":"#b3ddf0",
      },
      screens:{
        "1212px":"1212px",
        "340px":"340px",
      }
    },
  },
  plugins: [],
};
