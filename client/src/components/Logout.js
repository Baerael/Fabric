import { logoutReducer } from '../loginReducer'
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch()
  return (
    <>
      <button
      type="submit"
      className="btn2 btn-light btn-lsm"
      onClick={() => dispatch(logoutReducer())}
      >
      logout
      </button>
    </>
  )
}

export default Logout;