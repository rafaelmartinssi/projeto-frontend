import type {
  Response,
  ResponseList,
  ResponseError,
  ResponseListConstructor,
  ResponseListPeagebleConstructor,
  ResponseListPeageble
} from "./types"
import type { AxiosInstance, AxiosResponse } from "axios"
import router from "@/router"

export const RequestPath = (newPath: string) => {
  return <T extends { new (...args: any[]): {} }>(construtor: T) => {
    return class extends construtor {
      path = newPath
    }
  }
}

export abstract class RestClient<T extends { id?: number }, F = null> {
  path!: string
  httpClient: AxiosInstance

  public constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  public async create(t: T): Promise<Response<T>> {
    const response = await this.httpClient.post<T>(this.path, t)
    return this.handleResponse(response)
  }

  public async update(t: T): Promise<Response<T>> {
    const { id, ...data } = t
    const response = await this.httpClient.put<T>(`${this.path}/${id}`, data)
    return this.handleResponse(response)
  }

  public async findById(id: number): Promise<Response<T>> {
    const response = await this.httpClient.get<T>(`${this.path}/${id}`)
    return this.handleResponse(response)
  }

  public async delete(id: number) {
    const response = await this.httpClient.delete(`${this.path}/${id}`)
    return this.handleResponse(response)
  }

  public async findAll(filters?: F): Promise<ResponseList<T>> {
    const response = await this.httpClient.get<ResponseListConstructor<T>>(
      this.path,
      {
        params: {
          ...filters
        }
      }
    )

    return this.handleResponse(response)
  }

  public async findAllPeageble(filters?: F): Promise<ResponseListPeageble<T>> {
    const response = await this.httpClient.get<
      ResponseListPeagebleConstructor<T>
    >(this.path, {
      params: {
        ...filters
      }
    })
    return this.handleResponse(response)
  }

  protected handleResponse(response: AxiosResponse) {
    let errors: ResponseError | null = null

    if (response.request.status !== 200) {
      if (response.request.status === 401) {
        router.push("logout")
      }
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }
}
