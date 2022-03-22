import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={ <AuthRouter /> } />
            <Route path='/' element={ <JournalScreen /> } />
            <Route path='*' element={ <LoginScreen /> } />
        </Routes>
    );
}
