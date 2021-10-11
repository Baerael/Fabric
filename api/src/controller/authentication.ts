import express, { Request, Response} from 'express'

interface IUser {
    username: string,
    password: string
}

const data: IUser = {
    username: "Fabric",
    password: "password1"
}


export const ping = (req: Request, res: Response) => {
    res.status(200).json({message: "ping"})
}


export const login = (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!findUser(username))      { return statusCode('404', 'user does not exist', res) } 
  if (!checkPassword(password)) { return statusCode('401', 'invalid password',    res) }

  const getUsername = data.username

  res.status(200).json({username: getUsername})
}


export const getTime = (req: Request, res: Response) => {
  const date = new Date();
  res.status(200).json({date})
}


export const cwd = (req: Request, res: Response) => {
  const dir = __dirname
  res.status(200).json({dir})
}


//====================
// Helper Functions
//====================
const findUser      = (username: any) => { return data.username === username }
const checkPassword = (password: any) => { return data.password === password }


const statusCode = (code: string, message: string, res: Response) => {
  switch (code) {
    case '200': res.status(200).json({ success: message }); break;
    case '401': res.status(401).json({ error:   message }); break;
    case '404': res.status(404).json({ error:   message }); break;
  }
}





