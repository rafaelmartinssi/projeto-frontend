import "@mdi/font/css/materialdesignicons.css"
import "../styles/main.scss"
import { createVuetify } from "vuetify"

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#0000ff",
          secondary: "#1bc23e",
          base: "#f7f8fc",
          dark: "#363740",
          fontdark: "#252733",
          fontlight: "#9fa2b4",
          white: "#ffffff",
          success: "#4CBF26",
          warning: "#FFB007",
          error: "#FF4A26",
          info: "#3FA4FC"
        }
      }
    }
  }
})
