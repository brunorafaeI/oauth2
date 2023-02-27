import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import Api from '../http/api'

export interface UserInfo {
  name: string
  email: string
  picture: string
  token: string
}

type UseAuthType = {
  isLoading: boolean
  isLoggedIn: boolean
  userInfo: UserInfo
  SignOut: () => void
  getAccessToken: (credential: string) => Promise<void>
}

export const useAuth = create<UseAuthType>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        isLoggedIn: false,
        userInfo: {} as UserInfo,
        SignOut: () => set(() => ({ isLoggedIn: false, userInfo: {} as UserInfo })),
        getAccessToken: async (credential) => {
          set(() => ({ isLoading: true }))
          const { status, data } = await Api.post('/auth/google', { credential })

          if (status === 201) {
            const { accessToken, userInfo } = data
            set(() => ({ 
              isLoggedIn: true,  
              userInfo: { ...userInfo, token: accessToken } 
            }))
          }

          set(() => ({ isLoading: false }))
        }
      }),
      {
        name: '@authStorage',
      }
    )
  )
)
