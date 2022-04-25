import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas en ui-actions', () => {

    test('Debe de retornar el type uiSetError', () => {

        const action = setError('Me equivoqué :(');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'Me equivoqué :('
        });

    });

    test('Debe de retornar el tipo removeError', () => {

        const action = removeError();

        expect( action ).toEqual({
            type: types.uiRemoveError
        });

    });

    test('Debe de retornar el tipo uiStartLoading', () => {

        const action = uiStartLoading();

        expect( action ).toEqual({
            type: types.uiStartLoading
        });

    });

    test('Debe de retornar el tipo uiFinishLoading', () => {

        const action = uiFinishLoading();

        expect( action ).toEqual({
            type: types.uiFinishLoading
        });

    });

});