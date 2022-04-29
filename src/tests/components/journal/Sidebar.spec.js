import configureStore from 'redux-mock-store';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Sidebar } from "../../../components/journal/Sidebar";

jest.mock( '../../../actions/auth', ()  =>{
    startLogout: jest.fn()
});

jest.mock( '../../../actions/notes', ()  =>{
    startNewNote: jest.fn()
});

describe('Pruebas en el componente <Sidebar />.', () => {

    const middlewares = [ thunk ];
    const mockStore = configureStore( middlewares );

    const initState = {
        auth: {
            uid: '1235',
            name: 'Alex'
        },
        notes: {
            notes: []
        }
    };

    let store = mockStore( initState );

    store.dispatch = jest.fn();

    const wrapper = mount(
        <Provider store={ store } >
            <Sidebar />
        </Provider>
    );

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    /* test('Debe de disparar la acción startLogout.', () => {

        wrapper.find( 'button' ).prop( 'onClick' )();

        expect( startLogout ).toHaveBeenCalled();

    });

    test('Debe de disparar la acción startNewNote.', () => {
        
        wrapper.find( '.journal___new-entry' ).prop( 'onClick' )();

        expect( startNewNote ).toHaveBeenCalled();

    }); */

});