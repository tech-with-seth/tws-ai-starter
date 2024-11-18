import { useChat } from 'ai/react';

export default function ChatRoute() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({});

    return (
        <div className="h-full">
            <div className="mx-auto max-w-3xl py-8 grid grid-rows-[1fr_auto] h-full">
                <div className="overflow-y-auto row-span-1 space-y-4">
                    {messages.length > 0 ? (
                        messages.map((message) => (
                            <div
                                key={message.id}
                                className={`border dark:border-zinc-600 p-4 rounded-lg ${
                                    message.role === 'user'
                                        ? 'bg-zinc-200 dark:bg-zinc-700'
                                        : 'bg-zinc-100 dark:bg-zinc-800'
                                }`}
                            >
                                {message.role === 'user' ? 'User: ' : 'AI: '}
                                {message.content}
                            </div>
                        ))
                    ) : (
                        <p>No messages...</p>
                    )}
                </div>
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
                        <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded-md"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
