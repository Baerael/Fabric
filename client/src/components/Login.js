import {  useFormik } from 'formik'
import { login, getTime, dir } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { loginReducer, dateReducer, dirReducer } from '../loginReducer'


const Login = () => {
  const u = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({username, password}) => {
      dispatch(
        loginReducer(
          await login(username, password)
      ))

      dispatch(dateReducer(
        await getTime()
      ))

      dispatch(dirReducer(
        await dir()
      ))
    },
  });

  return (
    <div className="alpha login-form">
      <h1>Welcome Fabric Risk</h1>
        <form onSubmit={formik.handleSubmit}  className="space">
          {u.username}
          <input
            id="username"
            name="username"
            type="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Username or Email"
            className="Input-text-search"
          />
          <br/>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="Input-text-search"
          />
          <br/>
          <button type="submit" className="btn2 btn-light btn-lsm">Login</button>
        </form>
          <div> 
            {`${u.error}  ${u.message}`}
          </div>
    </div>
  );
}

export default Login;