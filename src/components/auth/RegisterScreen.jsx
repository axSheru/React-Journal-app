import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: 'Alex P',
        email: 'alexp@test.com',
        password: '12345678',
        password2: '12345678'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();
        console.table([ name, email, password, password2 ]);
    };

    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form>
                <input
                    type="text"
                    placeholder='Name'
                    name="name"
                    autoComplete='off'
                    className='auth__input'
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder='Email'
                    name="email"
                    autoComplete='off'
                    className='auth__input'
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder='Password'
                    name="password"
                    className='auth__input'
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder='Confirm password'
                    name="password2"
                    className='auth__input'
                    value={ password2 }
                    onChange={ handleInputChange }
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                    onClick={ handleRegister }
                >
                    Register
                </button>
                <Link
                    to='/auth/login'
                    className='link'
                >
                    Already registered?
                </Link>
            </form>
        </>
    );
}
