import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authenticateUser } from "../../services/authentication/authentication.api";
import { useAuthContext } from "../../contexts/AuthContext";

export const signInFormOnSubmit = (authDispatch, formData) => {
	authenticateUser(formData, authDispatch);
};

const SignIn = () => {
	const { register, handleSubmit, errors } = useForm();

	const { authDispatch } = useAuthContext();
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10 col-lg-12 col-md-9">
					<div className="card o-hidden border-0 shadow-lg my-5">
						<div className="card-body p-0">
							<div className="row">
								<div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
								<div className="col-lg-6">
									<div className="p-5">
										<div className="text-center">
											<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
										</div>
										<form
											className="user"
											onSubmit={handleSubmit(
												signInFormOnSubmit.bind(null, authDispatch)
											)}
										>
											<div className="form-group">
												<input
													type="email"
													className="form-control form-control-user"
													placeholder="Enter Email Address..."
													name="username"
													aria-invalid={errors.username ? true : false}
													ref={register({ required: true })}
												/>
												{errors &&
													errors.username &&
													errors.username.type === "required" ? (
														<small
															data-error="email"
															className="text-danger"
														>
															Email is required
														</small>
													) : null}
											</div>
											<div className="form-group">
												<input
													type="password"
													className="form-control form-control-user"
													placeholder="Password"
													name="password"
													aria-invalid={errors.password ? true : false}
													ref={register({ required: true })}
												/>
												{errors &&
													errors.password &&
													errors.password.type === "required" ? (
														<small
															data-error="email"
															className="text-danger"
														>
															Password is required
														</small>
													) : null}
											</div>
											<div className="form-group">
												<div
													className="custom-control custom-checkbox small"
												>
													<input
														type="checkbox"
														className="custom-control-input"
													/>
													<label
														className="custom-control-label"
														htmlFor="customCheck"
													>
														Remember Me
													</label>
												</div>
											</div>
											<button
												type="submit"
												className="btn btn-primary btn-user btn-block user-login"
											>
												Login
											</button>
											<hr />
											<button className="btn btn-google btn-user btn-block">
												<i className="fab fa-google fa-fw"></i> Login with
												Google
											</button>
											<button className="btn btn-facebook btn-user btn-block">
												<i className="fab fa-facebook-f fa-fw"></i> Login with
												Facebook
											</button>
										</form>
										<hr />
										<div className="text-center">
											<Link className="small" to={"/"}>
												Forgot Password?
											</Link>
										</div>
										<div className="text-center">
											<Link className="small" to={"/sign-up"}>
												Create an Account!
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
	);
};

export default SignIn;
