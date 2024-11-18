import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { ActionFunctionArgs } from 'react-router';

export async function action({ request }: ActionFunctionArgs) {
    const { prompt } = await request.json();
    const stream = streamText({
        model: openai('gpt-4o-turbo'),
        prompt
    });
    const result = await stream;

    return result.toDataStreamResponse();
}
