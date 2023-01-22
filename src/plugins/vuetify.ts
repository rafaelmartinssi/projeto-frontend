import "@mdi/font/css/materialdesignicons.css"
import "../styles/main.scss"
import { createVuetify } from "vuetify"

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#ff5700",
          secondary: "#1bc23e",
          base: "#f7f7f9",
          light: "#4C4E64",
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
