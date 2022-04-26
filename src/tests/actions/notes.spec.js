/**
 * @jest-environment node
 */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploadingFile } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn( () => {
        return 'https://hola-mundo.com/algo.jpg';
    })
}));

 
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: '3bKtFOf0J9GGLihTehiy',
            title: 'título',
            body: 'body'
        }
    }
};

let store = mockStore( initState );

beforeEach( () => {
    store = mockStore( initState );
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

        const docId = actions[0].payload.id;
        await db.doc( `TESTING/journal/notes/${ docId }` ).delete();

    });

    test('Debe de cargar las notas - startLoadingNotes.', async () => {

        await store.dispatch( startLoadingNotes( 'TESTING' ) );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any( Array )
        });

        const expected = {
            id: expect.any( String ),
            title: expect.any( String ),
            body: expect.any( String ),
            date: expect.any( Number ),
        };

        expect( actions[0].payload[0] ).toMatchObject( expected );

    });

    test('Debe de actualizar la nota - startSaveNote.', async () => {

        const note = {
            id: '3bKtFOf0J9GGLihTehiy',
            title: 'título',
            body: 'body'
        };

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesUpdated,
            payload: {
                id: '3bKtFOf0J9GGLihTehiy',
                note: note
            }
        });

        const docRef = await db.doc( `TESTING/journal/notes/${ note.id }` ).get();

        expect( docRef.data().title ).toBe( note.title );
        expect( docRef.data().body ).toBe( note.body );

    });

    test('Debe de actualizar el URL de la imagen - startUploadingFile.', async () => {

        const file = [];

        await store.dispatch( startUploadingFile( file ) );

        const docRef = await db.doc('/TESTING/journal/notes/3bKtFOf0J9GGLihTehiy').get();

        expect( docRef.data().url ).toBe( 'https://hola-mundo.com/algo.jpg' );

    });

});