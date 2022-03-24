import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        firebase.auth().onAuthStateChanged( ( user ) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
            }

        });

    }, [ dispatch ]);
    

    return (
        <Routes>
            <Route path='/auth/*' element={ <AuthRouter /> } />
            <Route path='/' element={ <JournalScreen /> } />
            <Route path='*' element={ <Navigate to='/auth/login' replace /> } />
        </Routes>
    );
}
