import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas en auth-actions.', () => {


    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);

    const initState = {};

    let store = mockStore( initState );

    beforeEach( () => {
        store = mockStore( initState );
    });
    


    test('Debe de ejecutar la acción Login.', () => {

        const action = login( 'abc', 'Alex' );

        expect( action ).toEqual({
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Alex'
            }
        });

    });

    test('Debe de ejecutar la acción Logout.', () => {

        const action = logout();

        expect( action ).toEqual({
            type: types.logout
        });

    });

    test('Debe de ejecutar la acción startLogout.', async () => {

        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    });

});