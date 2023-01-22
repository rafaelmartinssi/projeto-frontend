export interface User {
  id: number
  nome: string
  email: string
  senha?: string
}

export interface Password {
  senhaAtual: string
  novaSenha: string
  confirmeSenha: string
}

export interface Token {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  user_first_name: string
  user_id: number
  jti: string
}
