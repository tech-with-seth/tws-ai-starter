import { type MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'React Router 7 & Open AI Quickstart' },
        {
            name: 'description',
            content: 'Welcome to the React Router 7 & Open AI Quickstart'
        }
    ];
};

export default function Home() {
    return (
        <div className="container mx-auto pt-12">
            <h2 className="text-3xl mb-2">Welcome to the</h2>
            <h1 className="font-black text-4xl">
                React Router 7 Open AI Quickstart
            </h1>
        </div>
    );
}
