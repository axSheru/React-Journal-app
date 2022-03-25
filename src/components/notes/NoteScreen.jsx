import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );

    const { title, body } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {

        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id;
        }

    }, [ note, reset ]);

    useEffect(() => {
        
        dispatch( activeNote( formValues, { ...formValues } ) );

    }, [ formValues, dispatch ]);
    
    

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">
                <form className='notes__main-content'>
                    <input
                        type="text"
                        placeholder='Some awesome title'
                        name="title"
                        className='notes__title-input'
                        autoComplete='off'
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <textarea
                        placeholder='What happened today?'
                        name="body"
                        className='notes__textarea'
                        value={ body }
                        onChange={ handleInputChange }
                    ></textarea>
                    {
                        ( note.url ) &&
                        <div className="notes__image">
                            <img
                                src="https://i1.wp.com/www.lafosadelrancor.com/wp-content/uploads/2019/07/Sith-Trooper-El-Ascenso-de-Skywalker.jpg?fit=678%2C489&ssl=1"
                                alt="imagen"
                            />
                        </div>
                    }
                </form>
            </div>
        </div>
    );
}
