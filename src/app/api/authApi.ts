import axiosInstance from './axiosInstance'

export const login = async (username: string, password: string) => {
  const response = await axiosInstance.post('/auth/login', { username, password })

  // console.log(`response:${JSON.stringify(response)}`)
  if (response.data) {
    console.log(`accessToken:${response.data.accessToken}`)
    console.log(`refreshToken:${response.data.refreshToken}`)
    localStorage.setItem('accessToken', response.data.accessToken)
    localStorage.setItem('refreshToken', response.data.refreshToken)
  }

  return response.data
}

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout')
  return response.data
}
