import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Basket">Basket</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/SignUpPage">SignUp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
