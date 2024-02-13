import { Link } from 'react-router-dom';

const Navbar = () => (
// const [count, setCount] = useState(1);

  // function handleClick() {
  // setCount(count + 1);
  // }

  <div className="navbar">
    <Link to="/">
      <img src="webl.png" alt="React Logo" className="logo" />
      <h1>
        My Blog Page

      </h1>
    </Link>

    <p className="link">
      <Link to="/"> home</Link>
      <Link to="/"> Back</Link>
      <Link to="/create"> Addblog</Link>
    </p>

  </div>
);
export default Navbar;
