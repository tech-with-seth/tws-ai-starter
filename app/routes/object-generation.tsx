import { experimental_useObject as useObject } from 'ai/react';
import { useState } from 'react';
import { z } from 'zod';

export const snippetSchema = z.object({
    prefix: z.string(), // Validates that prefix is a string
    body: z.union([z.string(), z.array(z.string())]), // Validates that body is either a string or an array of strings
    description: z.string().optional() // Validates that description is a string, if present
});

export default function ObjectGenerationRoute() {
    const [prompt, setPrompt] = useState('');
    const { object, submit } = useObject({
        api: '/api/object-generation',
        schema: snippetSchema
    });

    return (
        <div className="h-full">
            <div className="mx-auto max-w-3xl py-8">
                <h1 className="text-2xl mb-4">Object generation</h1>
                <div className="flex gap-4">
                    <input
                        type="text"
                        onChange={(event) => setPrompt(event.target.value)}
                        value={prompt}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="p-2 bg-blue-500 text-white rounded-md"
                        onClick={() => submit(prompt)}
                    >
                        Send
                    </button>
                </div>
                <div className="py-4">
                    {object ? (
                        <pre>
                            <code>{JSON.stringify(object, null, 4)}</code>
                        </pre>
                    ) : (
                        <span className="text-zinc-300 dark:text-zinc-500">{`VS Code snippet will appear here...`}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
