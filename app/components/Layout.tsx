import { NavLink, Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <header className="bg-zinc-200 dark:bg-zinc-700">
                <ul className="flex gap-4 p-2">
                    <li>
                        <NavLink
                            to="/completions"
                            className="block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-lg"
                        >
                            Completions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/assistants"
                            className="block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-lg"
                        >
                            Assistants
                        </NavLink>
                    </li>
                </ul>
            </header>
            <main className="h-full">
                <Outlet />
            </main>
        </>
    );
}
