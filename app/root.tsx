import {
    Link,
    Links,
    Meta,
    NavLink,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'react-router';
import type { LinksFunction, NavLinkRenderProps } from 'react-router';
import lightLogo from './images/rr_logo_light.svg';
import darkLogo from './images/rr_logo_dark.svg';

import './app.css';

function Header() {
    const navLinkClassName = ({ isActive }: NavLinkRenderProps) =>
        `block p-2 rounded-lg ${
            isActive
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-zinc-300 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
        }`;

    return (
        <header className="bg-white dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700 mb-8">
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
                        <NavLink to="/completions" className={navLinkClassName}>
                            Completions
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="h-full flex flex-col">
                <Header />
                <main className="flex-grow">{children}</main>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
