import React, { useState } from 'react';
import { signIn } from '../../firebase/authentication';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			// Handle successful sign-in, e.g., redirecting to a dashboard
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<div>
			<div className="">
				<div className="bg-gray-100 flex justify-center items-center h-screen">
					<div className="w-1/2 h-screen hidden lg:block">
						<img
							src="https://images.unsplash.com/photo-1602734845056-ba5893c37370?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="object-cover w-full h-full"
							alt="login"
						/>
					</div>
					{/* Right: Login Form */}
					<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
						<h1 className="text-4xl font-semibold mb-4">Login</h1>
						<form onSubmit={handleSubmit}>
							{/* Username Input */}
							<div className="mb-4">
								<label htmlFor="username" className="block text-gray-600">
									Username
								</label>
								<input
									type="text"
									id="username"
									name="username"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
									autoComplete="off"
								/>
							</div>
							{/* Password Input */}
							<div className="mb-4">
								<label htmlFor="password" className="block text-gray-600">
									Password
								</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
									autoComplete="off"
								/>
							</div>
							{/* Remember Me Checkbox */}
							<div className="mb-4 flex items-center">
								<input
									type="checkbox"
									id="remember"
									name="remember"
									className="text-black"
								/>
								<label htmlFor="remember" className="text-gray-600 ml-2">
									Remember Me
								</label>
							</div>
							{/* Forgot Password Link */}
							<div className="mb-6 text-black">
								<a href="login" className="hover:underline">
									Forgot Password?
								</a>
							</div>
							{/* Login Button */}
							<button
								type="submit"
								className="bg-black hover:bg-black text-white font-semibold rounded-md py-2 px-4 w-full"
							>
								Login
							</button>
						</form>
					</div>
				</div>


			</div>
		</div>
	);
}
