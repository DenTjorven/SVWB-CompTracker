import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/players">Players</Link>
                  <Link to="/tournaments">Tournaments</Link>
            </div>
      )
}
export default Navbar;