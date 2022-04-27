import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from "enzyme";
import { Provider } from "react-redux";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { MemoryRouter } from 'react-router-dom';

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

    const wrapper = mount(
        <Provider store={ store }>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>
    );

    beforeEach( () => {
        store = mockStore( initState );
    });

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});