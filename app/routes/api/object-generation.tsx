import { streamObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { ActionFunctionArgs } from 'react-router';
import { snippetSchema } from '../object-generation';

export async function action({ request }: ActionFunctionArgs) {
    const context = await request.json();

    const stream = streamObject({
        model: openai('gpt-4-turbo'),
        schema: snippetSchema,
        prompt: `Generate a VS Code snippet with the following context: ${context}`
    });
    const result = await stream;

    return result.toTextStreamResponse();
}
