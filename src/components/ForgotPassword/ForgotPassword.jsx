import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { resetPassword } from '../../services/authentication';

export const passwordResetOnSubmit = (successCallback, formData) => {
    resetPassword(formData.email).then(_ => successCallback(true));
}

const ForgotPassword = props => {
    const [ resetStatus, updateResetStatus ] = React.useState(false);

    const { register, handleSubmit, errors } = useForm();
    const className = "form-control form-control-user";

    return (
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1
                                                className="h4 text-gray-900 mb-2 page-title"
                                            >
                                                Forgot Your Password?
                                            </h1>
                                            <p className="mb-4">
                                                We get it, stuff happens.
                                                Just enter your email address below and
                                                we&apos;ll send you a link to reset your password!
                                            </p>
                                        </div>
                                        {
                                            resetStatus ? (
                                                <div className="text-center mt-5 reset-success">
                                                    <h6 className="mb-4 text-success">
                                                        Password reset email has been send 
                                                        successfully.
                                                    </h6>
                                                    <Link to={"/sign-in"} className={
                                                        "btn btn-primary btn-user btn-block"
                                                    }>Login !</Link>
                                                </div>

                                            ) : (
                                                    <form className="reset-form"
                                                        onSubmit={handleSubmit(
                                                            passwordResetOnSubmit.bind(
                                                                null, updateResetStatus
                                                            )
                                                        )}
                                                    >
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className={className}
                                                                aria-describedby="emailHelp"
                                                                placeholder="Enter Email Address..."
                                                                ref={register({ required: true })}
                                                            />
                                                            {errors &&
                                                                errors.email &&
                                                                errors.email.type === 'required' ? (
                                                                    <small
                                                                        data-error="email"
                                                                        className="text-danger"
                                                                    >
                                                                        Email is required
                                                                    </small>
                                                                ) : null
                                                            }
                                                        </div>
                                                        <button type="submit" className={
                                                            "btn btn-primary btn-block"
                                                        }>Send Reset Password Link</button>
                                                    </form>
                                                )
                                        }
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to={"/sign-up"}>
                                                Create an Account!
                                            </Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to={"/sign-in"}>
                                                Already have an account? Login!
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
export default ForgotPassword;