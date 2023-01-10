import type { Password, User } from "@/store/types"
import { useMainStore } from "@/store"
import { RequestPath, RestClient } from "./common/rest-client"
import { Response } from "./common/types"

@RequestPath("/usuarios")
class UserService extends RestClient<User> {
  public async getUser(): Promise<Response<User>> {
    const response = await this.httpClient.get<User>(`${this.path}/autenticado`)
    return this.handleResponse(response)
  }

  public async changePassword(data: Password): Promise<Response<Password>> {
    const main = useMainStore()
    const id = main.userId
    const response = await this.httpClient.put<Password>(
      `${this.path}/${id}/senha`,
      data
    )
    return this.handleResponse(response)
  }
}

export { UserService }
