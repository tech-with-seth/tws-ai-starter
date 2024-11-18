import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { ActionFunctionArgs } from 'react-router';

export async function action({ request }: ActionFunctionArgs) {
    const { messages } = await request.json();
    const stream = streamText({
        model: openai('gpt-4-turbo'),
        system: 'You are a helpful assistant.',
        messages
    });
    const result = await stream;

    return result.toDataStreamResponse();
}
