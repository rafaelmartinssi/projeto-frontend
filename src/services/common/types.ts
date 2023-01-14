export interface Info {
  descricao: string
  codigo: number
}

export interface ResponseError {
  status: number
  statusText: string
}

export interface IResponse<T> {
  content: T
  info: Info
}

export interface IResponseList<T> {
  content: T[]
  info: Info
}

export interface IResponseListPeageble<T> {
  content: T[]
  totalPages: number
  totalElements: number
  size: number
  page: number
  info: Info
}

export interface ResponseToken<T> {
  data: T
  errors: ResponseError | null
}

export interface Response<T> {
  data: IResponse<T>
  errors: ResponseError | null
}

export interface ResponseList<T> {
  data: IResponseList<T>
  errors: ResponseError | null
}

export interface ResponseListPeageble<T> {
  data: IResponseListPeageble<T>
  errors: ResponseError | null
}

export class ResponseListConstructor<T> implements IResponseList<T> {
  content: T[]
  info: Info
  constructor(payload: IResponseList<T>) {
    this.content = payload.content
    this.info = payload.info
  }
}

export class ResponseListPeagebleConstructor<T>
  implements IResponseListPeageble<T>
{
  content: T[]
  totalPages: number
  totalElements: number
  size: number
  page: number
  info: Info
  constructor(payload: IResponseListPeageble<T>) {
    this.content = payload.content
    this.totalPages = payload.totalPages
    this.totalElements = payload.totalElements
    this.size = payload.size
    this.page = payload.page
    this.info = payload.info
  }
}
