import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );

    const { title, body } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {

        if ( note.id !== activeId ) {
            reset( note );
            activeId.current = note.id;
        }

    }, [ note, reset ]);
    

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">
                <form className='notes__main-content'>
                    <input
                        type="text"
                        placeholder='Some awesome title'
                        className='notes__title-input'
                        autoComplete='off'
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <textarea
                        placeholder='What happened today?'
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
