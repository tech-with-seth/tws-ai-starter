import { useCompletion } from 'ai/react';

export default function Completions() {
    const { completion, input, handleInputChange, handleSubmit } =
        useCompletion({
            api: '/api/completions'
        });

    return (
        <div className="h-full">
            <div className="mx-auto max-w-3xl py-8">
                <h1 className="text-2xl mb-4">Completions</h1>
                <form
                    className="flex items-center gap-4"
                    onSubmit={handleSubmit}
                >
                    <div className="grow">
                        <input
                            id="prompt"
                            name="prompt"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleInputChange}
                            value={input}
                        />
                    </div>
                    <div className="shrink">
                        <button className="p-2 bg-blue-500 text-white rounded-md">
                            Send
                        </button>
                    </div>
                </form>
                <div className="py-4">
                    {!!completion ? (
                        completion
                    ) : (
                        <span className="text-zinc-300 dark:text-zinc-500">{`Completion will appear here...`}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
