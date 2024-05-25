import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Suspense } from 'react';
import { AppRouter } from './providers/router/ui/AppRouter';
import './App.css';

export const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    if (location.pathname === '/' || location.pathname === '') {
        navigate('/0');
    }
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
};
