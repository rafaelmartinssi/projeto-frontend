import axios from "axios"
import { TokenService } from "./TokenService"
import { UserService } from "./UserService"
import { useMainStore } from "@/store"
import router from "@/router"

const httpClient = axios.create({
  baseURL: "http://localhost:8080/"
})

httpClient.interceptors.request.use((config) => {
  const main = useMainStore()
  const token = main.token
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`
    }
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  async function (error) {
    const main = useMainStore()
    const token = main.token
    if (error.response.status === 401 && token) {
      const response = await refreshToken(error)
      return response
    }
    return Promise.reject(error)
  }
)

async function refreshToken(error: any) {
  return new Promise((resolve, reject) => {
    try {
      const main = useMainStore()
      const refresh_token = main.refreshToken
      const originalRequest = error.config
      const header = {
        "Content-Type": "application/x-www-form-urlencoded"
      }
      const parameters = {
        method: "POST",
        auth: { username: "frontend-web", password: "" },
        headers: header
      }
      const body = {
        grant_type: "refresh_token",
        refresh_token
      }
      axios
        .post("http://localhost:8080/oauth/token", body, parameters)
        .then(async (res) => {
          main.setToken(res.data)
          const token = main.token
          originalRequest.headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
          return resolve(axios(originalRequest))
        })
        .catch((err) => {
          router.push("/logout")
          return reject(error)
        })
    } catch (err) {
      return reject(err)
    }
  })
}

export default {
  user: new UserService(httpClient),
  token: new TokenService(httpClient)
}
