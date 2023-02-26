import { useStorage, type RemovableRef } from "@vueuse/core"
import { defineStore, StoreDefinition } from "pinia"
import type { User, Token } from "./types"

interface State {
  _user: RemovableRef<User>
  _token: RemovableRef<Token>
  _refreshToken: RemovableRef<Token>
  _isLogged: RemovableRef<boolean>
}

export const useMainStore: StoreDefinition = defineStore<"main", State>({
  id: "main",
  state: () => ({
    _user: useStorage("userSession", {} as User),
    _token: useStorage("token", {} as Token),
    _refreshToken: useStorage("refreshToken", {} as Token),
    _isLogged: useStorage("isLogged", false)
  }),
  getters: {
    user: (state) => ({ ...state._user }),
    token: (state) => state._token.access_token,
    refreshToken: (state) => state._token.refresh_token,
    userName: (state) => state._user.nome,
    userId: (state) => state._user.id,
    isLogged: (state) => state._isLogged
  },
  actions: {
    logout() {
      this._user = {} as User
      this._token = {} as Token
      this._isLogged = false
      window.localStorage.clear()
    },
    setToken(token: Token) {
      this._token = { ...token }
    },
    setUser(user: User) {
      this._user = { ...user }
      if (this._user) this._isLogged = true
      else this._isLogged = false
    }
  }
})
