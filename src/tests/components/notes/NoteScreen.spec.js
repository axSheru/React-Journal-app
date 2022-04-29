import configureStore from 'redux-mock-store';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock( '../../../actions/notes', ()  => ({
    activeNote: jest.fn()
}));

    const middlewares = [ thunk ];
    const mockStore = configureStore( middlewares );

    const initState = {
        auth: {
            uid: '1235',
            name: 'Alex'
        },
        notes: {
            active: {
                id: 12345,
                title: 'title',
                body: 'body',
                date: 0
            },
            notes: []
        }
    };

    let store = mockStore( initState );

    store.dispatch = jest.fn();

    const wrapper = mount(
        <Provider store={ store } >
            <NoteScreen />
        </Provider>
    );

describe('Pruebas en el componente NoteScreen.', () => {

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de disparar la acción activeNote.', () => {

        wrapper.find('input[name="title"]').simulate( 'change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });

        expect( activeNote ).toHaveBeenLastCalledWith(
            {"body": "body", "date": 0, "id": 12345, "title": "Hola de nuevo"},
            {"body": "body", "date": 0, "id": 12345, "title": "Hola de nuevo"}
        );
        
    });

});