import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <p className="Text-5xl">Page Not Found</p>
            <Link to='/'><button className="ntn">Return to Home Page</button></Link>
        </div>
    );
};

export default Error;