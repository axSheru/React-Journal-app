import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'alexp@test.com',
        password: '12345678'
    });

    const { email, password } = formValues;

    const handleLogin = ( e ) => {
        e.preventDefault();

        // NOTE: Add better form error handling like in register form.
        if ( validator.isEmail( email ) && password.trim().length > 0 ) {
            dispatch( startLoginEmailPassword( email, password ) );
        } else {
            console.log( 'Faltan datos.' );
        }
    };

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    };
    
    return (
        <>
            <h3 className='auth__title'>Login</h3>

            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    placeholder='email'
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
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                >
                    Login
                </button>
                <hr />
                <div className='auth__social-networks'>
                    <p>Login with social networks.</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to='/auth/register'
                    className='link'
                >
                    Create new account
                </Link>
            </form>
        </>
    );
}
