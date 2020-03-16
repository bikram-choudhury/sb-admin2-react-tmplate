import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { saveUsers } from '../../api/authentication.api';
import { AuthContext } from '../../contexts/AuthContext';

const SignUp = () => {
    const { authDispatch } = useContext(AuthContext);
    
    const { register, handleSubmit, errors, watch } = useForm();
    
    const watchPassword = watch('password');
    const validatePassword = (password) => {
        return password === watchPassword;
    }
    const signUpFormOnSubmit = (formData) => {
        const dataToSave = {...formData};
        delete dataToSave.confirmPassword;
        saveUsers(dataToSave, authDispatch);
    }
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/*  Nested Row within Card Body */}
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user sign-up-form" onSubmit={handleSubmit(signUpFormOnSubmit)}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="First Name"
                                                name="firstName"
                                                aria-invalid={errors.firstName ? "true" : "false"}
                                                ref={register({ required: true })}
                                            />
                                            {
                                                errors &&
                                                    errors.firstName &&
                                                    errors.firstName.type === 'required' ? (
                                                        <small className="text-danger">First Name is required</small>
                                                    ) : null
                                            }
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="Last Name"
                                                name="lastName"
                                                ref={register({ required: true })}
                                            />
                                            {
                                                errors &&
                                                    errors.firstName &&
                                                    errors.firstName.type === 'required' ? (
                                                        <small className="text-danger">First Name is required</small>
                                                    ) : null
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control  form-control-user"
                                            placeholder="Email Address"
                                            name="email"
                                            ref={register({ required: true })}
                                        />
                                        {
                                            errors &&
                                                errors.firstName &&
                                                errors.firstName.type === 'required' ? (
                                                    <small className="text-danger">First Name is required</small>
                                                ) : null
                                        }
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                placeholder="Password"
                                                name="password"
                                                ref={register({ required: true })}
                                            />
                                            {
                                                errors &&
                                                    errors.firstName &&
                                                    errors.firstName.type === 'required' ? (
                                                        <small className="text-danger">First Name is required</small>
                                                    ) : null
                                            }
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                placeholder="Repeat Password"
                                                name="confirmPassword"
                                                ref={register({ required: true, validate: validatePassword })}
                                            />
                                            {
                                                errors &&
                                                    errors.confirmPassword &&
                                                    errors.confirmPassword.type === 'required' ? (
                                                        <small className="text-danger">Repeat Password is required</small>
                                                    ) : null
                                            }
                                            {
                                                errors &&
                                                    errors.confirmPassword &&
                                                    errors.confirmPassword.type === 'validate' ? (
                                                        <small className="text-danger">Repeat Password is not same as Password</small>
                                                    ) : null
                                            }
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-user btn-block"> Register Account </button>
                                    <hr />
                                    <span className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"></i> Register with Google
                                    </span>
                                    <span className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </span>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="login.html">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp;