import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route
} from '@react-router/dev/routes';

export default [
    layout('./components/Layout.tsx', [
        index('routes/home.tsx'),
        route('completions', './routes/completions.tsx')
    ])
] satisfies RouteConfig;
