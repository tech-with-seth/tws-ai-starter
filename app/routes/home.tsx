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
        <div className="py-12">
            <h1 className="text-3xl font-bold text-center">
                Welcome to the
                <br />
                React Router 7 & Open AI Assistants
                <br />
                Quickstart
            </h1>
        </div>
    );
}
