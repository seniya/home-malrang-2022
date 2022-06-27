import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { AxiosResponse } from 'axios'
import { IUser, IUserRequest, IUserResponse, IUserState } from '@/store/interface/user.interface'
import { axiosInstance } from '@/utils/axiosInstance'

interface userStoreIF extends IUserState {
  // isLoading: boolean
  // isDone: boolean
  // error: string
  // token: string | null
  // user: IUser
  apiSignIn: (payload: IUserRequest) => void
  apiGetMe: () => void
}

const userInit: IUser = {
  id: null,
  email: '',
  name: '',
  lv: null,
  photo: ''
}

export const userStore = create<userStoreIF>((set, get) => ({
  isLoading: false,
  isDone: false,
  error: '',
  token: '',
  user: userInit,
  apiSignIn: async (payload) => {
    set(state => ({
      ...state,
      isLoading: true,
      isDone: false
    }))
    try {
      const response: AxiosResponse<IUserResponse> = await axiosInstance({
        method: 'POST',
        url: '/api/authentication/sign-in',
        data: payload
      })
      set(state => ({
        ...state,
        isLoading: false,
        isDone: true,
        token: response.data.data.token,
        user: response.data.data.user
      }))
      console.log('response : ', response.data)
    } catch (error: any) {
      set(state => ({
        ...state,
        error: error.message,
        isLoading: false,
        isDone: false
      }))
    }
  },
  apiGetMe: async () => {
    set(state => ({
      ...state,
      isLoading: true,
      isDone: false
    }))
    try {
      const response: AxiosResponse<IUserResponse> = await axiosInstance({
        method: 'GET',
        url: '/api/authentication/get-me'
      })
      set(state => ({
        ...state,
        isLoading: false,
        isDone: true,
        token: response.data.data.token,
        user: response.data.data.user
      }))
      console.log('response : ', response.data)
    } catch (error: any) {
      set(state => ({
        ...state,
        error: error.message,
        isLoading: false,
        isDone: true
      }))
    }
  }
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', userStore)
}
