import { Link } from 'react-router-dom';

const Home = () => {
    const pages = [
        { path: "/login", name: "Login" },
        { path: "/register", name: "Register" },
        { path: "/dashboard", name: "Dashboard" },
        { path: "/profile", name: "Profile" },
        { path: "/settings", name: "Settings" },
        { path: "/logout", name: "Logout" },
        { path: "/leaders", name: "Leaders"},
    ];

    return (
        <div className={'flex flex-col items-center justify-center gap-4 h-screen bg-gray-100'}>
            <h1 className={'text-center'}>Links</h1>
            <div className="grid grid-cols-2 p-2 md:grid-cols-4 gap-4">
                {pages.map((page, index) => (
                    <Link key={index} to={page.path} className="card">
                        <div className="flex items-center p-2 rounded shadow-sm ring gap-2 hover:bg-secondary">
                            <i className="fa fa-link text-gray-500"></i>
                            <p>{page.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;