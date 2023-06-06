/* eslint-disable no-unreachable */
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

export const useAPI = () => ({
  validadteToken: async (token: string) => {
      return {
        user: { id: 3, name: "José", email: "jose@gmail.com" },
        token: "123456",
      };
    const response = await api.post('/validate', { token })
    return response.data
  },

  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "José", email: "jose@gmail.com" },
      token: '123456'
    };
    const response = await api.post("/signin", { email, password });

    return response.data;

  },

  logout: async () => {
    return {status: true}
    const response = await api.post('/logout')
    return response.data
  }
})