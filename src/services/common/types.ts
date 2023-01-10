export interface Infos {
  descricao: string
  codigo: number
}

export interface ResponseError {
  status: number
  statusText: string
}

export interface IResponse<T> {
  content: T
  infos: Infos[]
}

export interface IResponseList<T> {
  content: T[]
  infos: Infos[]
}

export interface IResponseListPeageble<T> {
  content: T[]
  totalPages: number
  totalElements: number
  size: number
  page: number
  infos: Infos[]
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
  infos: Infos[]
  constructor(payload: IResponseList<T>) {
    this.content = payload.content
    this.infos = payload.infos
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
  infos: Infos[]
  constructor(payload: IResponseListPeageble<T>) {
    this.content = payload.content
    this.totalPages = payload.totalPages
    this.totalElements = payload.totalElements
    this.size = payload.size
    this.page = payload.page
    this.infos = payload.infos
  }
}
