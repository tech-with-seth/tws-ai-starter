import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, prefix, route } from '@react-router/dev/routes';

export const routes: RouteConfig = [
    layout('./components/Layout.tsx', [
        index('routes/home.tsx'),
        route('completions', './routes/completions.tsx')
    ]),
    ...prefix('api', [route('completions', './routes/api/completions.tsx')])
];
