import axios from 'axios'

const API_URL = "http://localhost:8080/api"

export const login = async (username, password) => {
	try { 
	  const res = await axios.post(`${API_URL}/login`, {
	    username: username,
	    password: password
	  })
    
    console.log(res)
    return {
      isloggedin: true, 
      username: res.data.username, 
      error: '', 
      message: 'Successfully logged in'
    }
	} catch (error) {
    console.log(error.request.response)
    return {
      isloggedin: false, 
      username: '', 
      error: error.message, 
      message: error.request.response
    }
	}
}

export const getTime = async () => {
  try {
	  const res = await axios.get(`${API_URL}/gettime`)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const dir = async () => {
  try {
	  const res = await axios.get(`${API_URL}/cwd`)
    console.log(res.data)
    return res.data
  } catch(error) {
    console.log(error)
  }
}








