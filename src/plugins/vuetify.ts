import "@mdi/font/css/materialdesignicons.css"
import "../styles/main.scss"
import { createVuetify } from "vuetify"

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#004e98",
          secondary: "#3a6ea5",
          light: "#efefef",
          success: "#4CBF26",
          warning: "#FFB007",
          error: "#FF4A26",
          info: "#3FA4FC"
        }
      }
    }
  }
})
