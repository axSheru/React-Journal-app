import configureStore from 'redux-mock-store';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};

let store = mockStore( initState );

store.dispatch = jest.fn();

const nota = {
    id: 12,
    date: 0,
    title: 'This is',
    body: 'the way',
    url: 'https://algunlugar.com/fojo.jpg'
};

const wrapper = mount(
    <Provider store={ store } >
        <JournalEntry { ...nota } />
    </Provider>
);


describe('Pruebas en el componente JournalEntry.', () => {

    test('Debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de activar la nota.', () => {

        wrapper.find( '.journal__entry' ).prop( 'onClick' )();

        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( nota.id, { ...nota } )
        );

    });

});