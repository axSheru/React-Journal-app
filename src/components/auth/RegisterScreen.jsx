import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        name: 'Alex P',
        email: 'alexp@test.com',
        password: '12345678',
        password2: '12345678'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        console.log('handleRegister')
        
        if ( isFormValid() ) {
            console.log('Formulario correcto');
        }
    };

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setError( 'Name is required.' ) );
            console.log(1);
            return false;
        }

        if ( ! validator.isEmail( email ) ) {
            dispatch( setError( 'Email not valid.' ) );
            console.log(2);
            return false;
        }

        if ( password !== password2 || password.length < 5 ) {
            dispatch( setError( 'Password should be at least 6 characters and both fields should match.' ) );
            console.log(3);
            return false;
        }

        dispatch( removeError() );

        return true;
    };

    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form>

                <div className="auth__alert-error">
                    Hola mundo
                </div>

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
