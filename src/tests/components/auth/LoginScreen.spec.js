import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from "enzyme";
import { Provider } from "react-redux";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));

describe('Pruebas en LoginScreen component.', () => {

    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);

    const initState = {
        ui: {
            loading: false,
            msgError: null
        }
    };

    let store = mockStore( initState );

    store.dispatch = jest.fn();

    const wrapper = mount(
        <Provider store={ store }>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>
    );

    beforeEach( () => {
        store = mockStore( initState );
        jest.clearAllMocks();
    });

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de disparar la acción startGoogleLogin.', () => {

        wrapper.find( '.google-btn' ).prop( 'onClick' )();

        expect( startGoogleLogin ).toHaveBeenCalled();

    });

    test('Debe de disparar la acción startLoginEmailPassword con los valores por defecto.', () => {

        wrapper.find( 'form' ).prop( 'onSubmit' )({
            preventDefault(){}
        });

        expect( startLoginEmailPassword ).toHaveBeenCalledWith( 'alexp@test.com', '12345678' );

    });

});