import type { Token } from "@/store/types"
import type { ResponseToken } from "./common/types"
import { RequestPath, RestClient } from "./common/rest-client"

@RequestPath("/oauth/token")
class TokenService extends RestClient<{ id?: number }> {
  public async getTokenUser(code: string): Promise<ResponseToken<Token>> {
    const params = new URLSearchParams()
    params.append("code", code)
    params.append("grant_type", "authorization_code")
    params.append("redirect_uri", "http://localhost:9000/callback")
    params.append("code_verifier", "ksagsfgadsgfdsjgfhds54df4df8fd544")
    params.append("client_id", "frontend-web")

    const response = await this.httpClient.post(`${this.path}`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    return this.handleResponse(response)
  }
}

export { TokenService }
