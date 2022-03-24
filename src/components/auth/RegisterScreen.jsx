import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: 'Alex P',
        email: 'alexp@test.com',
        password: '12345678',
        password2: '12345678'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();
        
        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
        }
    };

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setError( 'Name is required.' ) );
            Swal.fire( 'Error', 'Name is required.', 'error' );
            return false;
        }

        if ( ! validator.isEmail( email ) ) {
            dispatch( setError( 'Email not valid.' ) );
            Swal.fire( 'Error', 'Email not valid.', 'error' );
            return false;
        }

        if ( password !== password2 || password.length < 5 ) {
            dispatch( setError( 'Password should be at least 6 characters and both fields should match.' ) );
            Swal.fire( 'Error', 'Password should be at least 6 characters and both fields should match.', 'error' );
            return false;
        }

        dispatch( removeError() );

        return true;
    };

    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form>
                {
                    msgError &&
                <div className="auth__alert-error">
                    { msgError }
                </div>
                }

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
