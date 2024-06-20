import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link to='/sweets'>Gimme chocolate</Link>
            <Link to='/salty'>Gimme chips</Link>
            <Link to='/drinks'>Gimme pop</Link>
        </>
    )
}

export default Home;