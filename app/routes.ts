import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, prefix, route } from '@react-router/dev/routes';

export const routes: RouteConfig = [
    layout('./components/Layout.tsx', [
        index('routes/home.tsx'),
        route('chat', './routes/chat.tsx'),
        route('completions', './routes/completions.tsx'),
        route('object-generation', './routes/object-generation.tsx')
    ]),
    ...prefix('api', [
        route('chat', './routes/api/chat.tsx'),
        route('completions', './routes/api/completions.tsx'),
        route('object-generation', './routes/api/object-generation.tsx')
    ])
];
