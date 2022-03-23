import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
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
                    />
                    <textarea
                        placeholder='What happened today?'
                        className='notes__textarea'
                    ></textarea>
                    <div className="notes__image">
                        <img
                            src="https://i1.wp.com/www.lafosadelrancor.com/wp-content/uploads/2019/07/Sith-Trooper-El-Ascenso-de-Skywalker.jpg?fit=678%2C489&ssl=1"
                            alt="imagen"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
