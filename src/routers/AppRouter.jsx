import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState( true );
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    useEffect(() => {

        firebase.auth().onAuthStateChanged( ( user ) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );

                dispatch( startLoadingNotes( user.uid ) );
            } else {
                setIsLoggedIn( false );
            }

            setChecking( false );

        });

    }, [ dispatch, setChecking, setIsLoggedIn ]);

    if ( checking ) {
        return (
            <h1>Wait a moment please....</h1>
        );
    }
    

    return (
        <Routes>
            <Route path='/auth/*' element={
                <PublicRoute isLoggedIn={ isLoggedIn }>
                    <AuthRouter />
                </PublicRoute>
                }
            />
            <Route path='/' element={
                <PrivateRoute isLoggedIn={ isLoggedIn }>
                    <JournalScreen />
                </PrivateRoute>
            }
            />
            <Route path='*' element={ <Navigate to='/auth/login' replace /> } />
        </Routes>
    );
}
