import axios from "axios"
import { TokenService } from "./TokenService"
import { UserService } from "./UserService"
import { useMainStore } from "@/store"

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
  (error) => {
    return error
  }
)

export default {
  user: new UserService(httpClient),
  token: new TokenService(httpClient)
}
