import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <Link exact to="/">
            Homepage
        </Link>
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <h1>
        <Link to="/logs/new">New Log</Link>
      </h1>
    </nav>
  );
}
