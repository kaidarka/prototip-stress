import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = memo(() => {
    const renderRoutes = useCallback((route: RouteProps) => (
        <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback="asd">{route.element}</Suspense>}
        />
    ), []);

    return (
        <Suspense fallback="">
            <Routes>
                {Object.values(routeConfig).map(renderRoutes)}
            </Routes>
        </Suspense>
    );
});
