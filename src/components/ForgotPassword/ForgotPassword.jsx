import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const passwordResetOnSubmit = (successCallback, formData) => {
    /* resetPassword(formData)
        .then(_ => successCallback()) */
}

export const validatePassword = (newPassword, confirmPassword) => {
    return newPassword === confirmPassword;
}

const ForgotPassword = props => {
    const [ resetStatus, updateResetStatus ] = React.useState(false);

    const { register, handleSubmit, errors, watch } = useForm();
    const watchPassword = watch("newPassword");
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
                                                        Password update has been done successfully.
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
                                                        <div className="form-group">
                                                            <input
                                                                type="password"
                                                                name="newPassword"
                                                                className={className}
                                                                aria-describedby="newPasswordHelp"
                                                                placeholder={
                                                                    "Enter your new password..."
                                                                }
                                                                ref={register({ required: true })}
                                                            />
                                                            {errors &&
                                                                errors.newPassword &&
                                                                errors.newPassword
                                                                    .type === 'required' ? (
                                                                    <small
                                                                        data-error="newPassword"
                                                                        className="text-danger"
                                                                    >
                                                                        New password is required
                                                                    </small>
                                                                ) : null
                                                            }
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="password"
                                                                name="repeatPassword"
                                                                className={className}
                                                                placeholder={
                                                                    "Confirm your new password..."
                                                                }
                                                                ref={register({
                                                                    required: true,
                                                                    validate: validatePassword(
                                                                        watchPassword
                                                                    )
                                                                })}
                                                            />
                                                            {errors &&
                                                                errors.repeatPassword &&
                                                                errors.repeatPassword
                                                                    .type === 'required' ? (
                                                                    <small
                                                                        data-error="repeatPassword"
                                                                        className="text-danger"
                                                                    >
                                                                        Confirm password is required
                                                                    </small>
                                                                ) : null
                                                            }
                                                            {errors &&
                                                                errors.repeatPassword &&
                                                                errors.repeatPassword
                                                                    .type === 'validate' ? (
                                                                    <small
                                                                        data-error="repeatPassword"
                                                                        className="text-danger"
                                                                    >{"New & confirm password " +
                                                                        "should be same"}</small>
                                                                ) : null
                                                            }
                                                        </div>
                                                        <button type="submit" className={
                                                            "btn btn-primary btn-block"
                                                        }>Reset Password</button>
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