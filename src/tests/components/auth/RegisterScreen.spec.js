import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

describe('Pruebas en el componente RegisterScreen.', () => {

    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);

    const initState = {
        auth: {},
        ui: {
            loading: false,
            msgError: null
        }
    };

    let store = mockStore( initState );
    // store.dispatch = jest.fn();

    const wrapper = mount(
        <Provider store={ store }>
            <MemoryRouter>
                <RegisterScreen />
            </MemoryRouter>
        </Provider>
    );

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    /* test('Debe de ejecutarse la acción setError.', () => {

        const emailField = wrapper.find( 'input[name="email"]' );
        
        
        emailField.simulate( 'change', {
            target: {
                value: '',
                name: 'email'
            }
        });

        wrapper.find( 'form' ).simulate( 'submit', {
            preventDefault(){}
        });

        const actions = store.getActions();

        console.log(actions)

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email not valid.'
        });

    }); */

    test('Debe de mostrar la caja de alerta con el error.', () => {

        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email no válido'
            }
        };
    
        const store = mockStore( initState );
        // store.dispatch = jest.fn();
    
        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect( wrapper.find( '.auth__alert-error' ).exists() ).toBeTruthy();
        expect( wrapper.find( '.auth__alert-error' ).text().trim() ).toBe( initState.ui.msgError );

    });
    
});