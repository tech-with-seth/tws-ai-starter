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
            <div className="mx-auto max-w-3xl py-8">
                <h1 className="text-2xl mb-4">Completions</h1>
                <Form method="POST" className="flex items-center gap-4">
                    <div className="grow">
                        <input
                            id="prompt"
                            name="prompt"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="shrink">
                        <button
                            className="p-2 bg-blue-500 text-white rounded-md"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </Form>
                {actionData && <div className="py-4">{actionData}</div>}
            </div>
        </div>
    );
}
