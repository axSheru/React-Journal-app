import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';
import { firebase } from '../../firebase/firebase-config';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}));

describe('Pruebas en el AppRouter.', () => {



    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);

    const initState = {
        ui: {
            loading: false,
            msgError: null
        },
        notes: {
            active: {
                id: 'ABCD'
            },
            notes: []
        }
    };

    let store = mockStore( initState );

    store.dispatch = jest.fn();



    test('Debe de llamar el login si estoy autenticado.', async () => {

        let user;

        await act( async () => {

            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );

        });

        const userCred = await firebase.auth().signInWithEmailAndPassword( 'test@test.com', '12345678' );

        user = userCred.user;

        expect( login ).toHaveBeenCalledWith( 'JLD0wIo1kGT4KkRFb0YXRwK6jO72', null );

    });

});