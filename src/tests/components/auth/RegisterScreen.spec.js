import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';

describe('Pruebas en el componente RegisterScreen.', () => {

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
                <RegisterScreen />
            </MemoryRouter>
        </Provider>
    );

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });
    
});