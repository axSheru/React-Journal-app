import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';
 
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
});

describe('Pruebas en notes-actions.', () => {

    test('Debe de crear una nueva nota startNewNote', async () => {

        await store.dispatch( startNewNote() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any( String ),
                title: '',
                body: '',
                date: expect.any( Number )
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any( String ),
                title: '',
                body: '',
                date: expect.any( Number )
            }
        });

    });

});