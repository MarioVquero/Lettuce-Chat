import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/SubmitBlog'>Create Blog</Link>
                </li>
                <li>
                    <Link to='Profile'>Sign In/Sign up</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};

export default Layout;