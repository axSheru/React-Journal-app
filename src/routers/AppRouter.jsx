import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={ <AuthRouter /> } />
            <Route path='/' element={ <JournalScreen /> } />
            <Route path='*' element={ <Navigate to='/auth/login' replace /> } />
        </Routes>
    );
}
