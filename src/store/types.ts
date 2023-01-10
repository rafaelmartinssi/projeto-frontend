export interface User {
  id: number
  nome: string
  email: string
  senha?: string
}

export interface Password {
  senhaAtual: string
  novaSenha: string
}

export interface Token {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
  user_first_name: string
  user_id: number
  jti: string
}
