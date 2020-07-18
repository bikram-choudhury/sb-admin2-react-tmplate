import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../contexts/AuthContext";

export const signUpFormOnSubmit = (authDispatch, formData) => {
	const dataToSave = { ...formData, username: formData.email };
	delete dataToSave.confirmPassword;
	// saveUsers(dataToSave, authDispatch);
};
export const validatePassword = (password, confirmPassword) => {
	return password === confirmPassword;
};

const SignUp = () => {
	const { authDispatch } = useAuthContext();
	const { register, handleSubmit, errors, watch } = useForm();
	const watchPassword = watch("password");

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
								<form
									className="user sign-up-form"
									onSubmit={handleSubmit(
										signUpFormOnSubmit.bind(null, authDispatch)
									)}
								>
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
											{errors &&
											errors.firstName &&
											errors.firstName.type === "required" ? (
												<small data-error="firstname" className="text-danger">
													First Name is required
												</small>
											) : null}
										</div>
										<div className="col-sm-6">
											<input
												type="text"
												className="form-control form-control-user"
												placeholder="Last Name"
												name="lastName"
												aria-invalid={errors.lastName ? "true" : "false"}
												ref={register({ required: true })}
											/>
											{errors &&
											errors.lastName &&
											errors.lastName.type === "required" ? (
												<small data-error="lastname" className="text-danger">
													First Name is required
												</small>
											) : null}
										</div>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control  form-control-user"
											placeholder="Email Address"
											name="email"
											aria-invalid={errors.email ? "true" : "false"}
											ref={register({ required: true })}
										/>
										{errors &&
										errors.email &&
										errors.email.type === "required" ? (
											<small data-error="email" className="text-danger">
												First Name is required
											</small>
										) : null}
									</div>
									<div className="form-group row">
										<div className="col-sm-6 mb-3 mb-sm-0">
											<input
												type="password"
												className="form-control form-control-user"
												placeholder="Password"
												name="password"
												aria-invalid={errors.password ? "true" : "false"}
												ref={register({ required: true })}
											/>
											{errors &&
											errors.password &&
											errors.password.type === "required" ? (
												<small data-error="password" className="text-danger">
													Password is required
												</small>
											) : null}
										</div>
										<div className="col-sm-6">
											<input
												type="password"
												className="form-control form-control-user"
												placeholder="Repeat Password"
												name="confirmPassword"
												aria-invalid={errors.confirmPassword ? "true" : "false"}
												ref={register({
													required: true,
													validate: validatePassword.bind(null, watchPassword)
												})}
											/>
											{errors &&
											errors.confirmPassword &&
											errors.confirmPassword.type === "required" ? (
												<small
													data-error="repeatpassword"
													className="text-danger"
												>
													Repeat Password is required
												</small>
											) : null}
											{errors &&
											errors.confirmPassword &&
											errors.confirmPassword.type === "validate" ? (
												<small
													data-error="repeatpassword"
													className="text-danger"
												>
													Repeat Password is not same as Password
												</small>
											) : null}
										</div>
									</div>
									<button
										type="submit"
										className="btn btn-primary btn-user btn-block user-register"
									>
										{" "}
										Register Account{" "}
									</button>
									<hr />
									<span className="btn btn-google btn-user btn-block">
										<i className="fab fa-google fa-fw"></i> Register with Google
									</span>
									<span className="btn btn-facebook btn-user btn-block">
										<i className="fab fa-facebook-f fa-fw"></i> Register with
										Facebook
									</span>
								</form>
								<hr />
								<div className="text-center">
									<Link className="small" to={"/forgot-password"}>
										Forgot Password?
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
	);
};

export default SignUp;
