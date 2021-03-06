import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {
	authenticateUser,
	loginWithGoogle,
	loginWithFacebook,
	loginWithGithub
} from "../../services/authentication";

export const signInFormOnSubmit = (formData) => {
	authenticateUser(formData);
};
const loginWithSocialAccount = (type) => {
	let socialAuthPromise = null;
	switch (type) {
		case 'google':
			socialAuthPromise = loginWithGoogle;
			break;
		case 'facebook':
			socialAuthPromise = loginWithFacebook;
			break;
		case 'github':
			socialAuthPromise = loginWithGithub;
			break;
		default:
			break;
	}
	socialAuthPromise().then(socialAuthUser => {
		console.log(socialAuthUser);
	}).catch(error => {
		console.log(error);
	});
}
const SignIn = () => {
	const { register, handleSubmit, errors } = useForm();

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
											onSubmit={handleSubmit(signInFormOnSubmit)}
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
															data-error="password"
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
											<button
												className="btn btn-google btn-user btn-block"
												type="button"
												onClick={loginWithSocialAccount.bind(null, 'google')}
											>
												<i className="fab fa-google fa-fw"></i>
												Login with Google
											</button>
											<button
												className="btn btn-facebook btn-user btn-block"
												type="button"
												onClick={loginWithSocialAccount.bind(null, 'facebook')}
											>
												<i className="fab fa-facebook-f fa-fw"></i>
												Login with Facebook
											</button>
											<button
												className="btn btn-github btn-user btn-block"
												type="button"
												onClick={loginWithSocialAccount.bind(null, 'github')}
											>
												<i className="fab fa-github fa-fw"></i>
												Login with Github
											</button>
										</form>
										<hr />
										<div className="text-center">
											<Link className="small" to={"/forgot-password"}>
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
