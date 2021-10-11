import Logout from './Logout'

const Home = ({username, date, loc, dir}) => {

	return (
    <div className="alpha login-form">
      <h2>Logged In</h2>
      <h3>{`username: ${username}`}</h3>
      <h3>{`date:     ${date}`}</h3>
      <h3>{`cwd:      ${dir}`}</h3>
      <h3>{`route:    ${loc}`}</h3>
      <Logout />
    </div>
  )
}

export default Home;