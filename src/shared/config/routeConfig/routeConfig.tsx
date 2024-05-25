import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ChatPage } from 'pages/ChatPage';

export enum AppRoutes {
	MAIN = 'main', // +id
	CHAT = 'chat', // +id
    NOT_FOUND = 'not_found',

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/:id',
    [AppRoutes.CHAT]: '/:id/chat',
    [AppRoutes.NOT_FOUND]: '*',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CHAT]: {
        path: RoutePath.chat,
        // @ts-ignore
        element: <ChatPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <>not found</>,
    },
};
