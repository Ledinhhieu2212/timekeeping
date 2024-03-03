import Login from "../Auth/Login";
import Home from "./Home/Home";

export default function App() {
    const user = 1;
    return <>{user ? <Home /> : <Login />}</>;
}
