import { Form } from 'react-router';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

import { Route } from './+types/completions';
import invariant from 'tiny-invariant';

export async function action({ request }: Route.ActionArgs) {
    const form = await request.formData();
    const prompt = form.get('prompt') as string;

    invariant(prompt, 'Prompt is required');

    const { text } = await generateText({
        model: openai('gpt-4.1'),
        prompt
    });

    return text;
}

export default function Completions({ actionData }: Route.ComponentProps) {
    return (
        <div className="h-full">
            <div className="mx-auto max-w-3xl py-8 border border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700 p-8 rounded-xl mb-4">
                <h1 className="text-2xl font-bold mb-4">Completions</h1>
                <Form method="POST" className="flex items-center gap-4">
                    <div className="grow">
                        <input
                            id="prompt"
                            name="prompt"
                            type="text"
                            className="w-full p-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="shrink">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </Form>
            </div>
            {actionData && (
                <div className="mx-auto max-w-3xl py-8 border border-zinc-300 bg-white p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Response</h3>
                    {actionData}
                </div>
            )}
        </div>
    );
}
