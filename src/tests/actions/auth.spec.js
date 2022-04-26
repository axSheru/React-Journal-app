import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas en auth-actions.', () => {

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

});