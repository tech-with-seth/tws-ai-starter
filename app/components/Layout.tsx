import { Link, NavLink, Outlet } from 'react-router';
import lightLogo from '../images/rr_logo_light.svg';
import darkLogo from '../images/rr_logo_dark.svg';

export default function Layout() {
    return (
        <>
            <header className="bg-zinc-200 dark:bg-zinc-900">
                <div className="container mx-auto">
                    <ul className="flex items-center gap-4 p-4">
                        <li>
                            <Link to="/">
                                <img
                                    className="w-12 block dark:hidden"
                                    src={lightLogo}
                                    alt="React Router 7 Logo"
                                />
                                <img
                                    className="w-12 hidden dark:block"
                                    src={darkLogo}
                                    alt="React Router 7 Logo"
                                />
                            </Link>
                        </li>
                        <li>
                            <NavLink
                                to="/completions"
                                className={({ isActive }) =>
                                    `block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg ${
                                        isActive ? 'bg-green-500' : ''
                                    }`
                                }
                            >
                                Completions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/object-generation"
                                className={({ isActive }) =>
                                    `block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg ${
                                        isActive ? 'bg-green-500' : ''
                                    }`
                                }
                            >
                                Object generation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/chat"
                                className={({ isActive }) =>
                                    `block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg ${
                                        isActive ? 'bg-green-500' : ''
                                    }`
                                }
                            >
                                Chat
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
        </>
    );
}
