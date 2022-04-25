import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en el authReducer', () => {

    test('Debe de realizar el caso login.', () => {

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Alex'
            }
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Alex'
        });

    });

    test('Debe de realizar el caso logout.', () => {

        const initState = {
            uid: 'abc',
            name: 'Alex'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({});

    });

    test('Debe de realizar el caso default.', () => {

        const initState = {};

        const action = {
            type: 'error'
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({});

    });

});