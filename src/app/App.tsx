import classNames from 'classnames';
import { Suspense } from 'react';
import { AppRouter } from './providers/router/ui/AppRouter';
import './App.css';

export const App = () => (
    <div className={classNames('app')}>
        <Suspense fallback="">
            <AppRouter />
        </Suspense>
    </div>
);
