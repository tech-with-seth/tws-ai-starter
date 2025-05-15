import { Link, NavLink, Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <main className="flex-grow">
                <Outlet />
            </main>
        </>
    );
}
