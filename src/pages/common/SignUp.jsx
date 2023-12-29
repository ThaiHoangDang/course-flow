import React, { useEffect, useState } from 'react';
import { signUp } from '../../firebase/authentication';
import { useNavigate, Link } from 'react-router-dom';
import { getAllPrograms } from '../../firebase/programs';


export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [program, setProgram] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [programsList, setProgramsList] = useState([]);

    useEffect(() => {
        async function fetchPrograms() {
            const temp = await getAllPrograms();
            setProgramsList(temp);
        }
        fetchPrograms();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (program === "") {
            alert("Missing program");
            return;
        }

        try {
            await signUp(email, password, role, name, program);
            navigate('/login');
            // Handle successful sign-in, e.g., redirecting to a dashboard
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="">
                <div className="bg-gray-50 flex justify-center items-center h-screen">
                    <div className="w-1/2 h-screen hidden lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1602734676133-b1f7a0a5e25c?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover w-full h-full"
                            alt="login"
                        />
                    </div>
                    {/* Right: Login Form */}
                    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                        <h1 className="text-4xl font-semibold mb-4">Registration</h1>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            {error && (
                                <div className="mb-4">
                                    <span className="text-red-500">{error}</span>
                                </div>
                            )}
                            {/* User Input */}
                            {/* <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-600">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full border bg-base-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
                                >
                                    <option value="" disabled>Select a Role</option>
                                    <option value="Student">Student</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div> */}
                            {/* Name Input */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border bg-base-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
                                    autoComplete="off"
                                />
                            </div>
                            {/* Username Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border bg-base-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
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
                                    className="w-full border bg-base-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
                                    autoComplete="off"
                                />
                            </div>
                            {/* Program Input */}
                            <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-600">
                                    Program
                                </label>
                                <select
                                    id="program"
                                    name="program"
                                    value={program}
                                    onChange={(e) => setProgram(e.target.value)}
                                    className="w-full border bg-base-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-black"
                                >
                                    <option value="" disabled>Select a Program</option>
                                    {
                                        programsList && programsList.map((program) => 
                                            <option value={program.id}>{program.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="mb-4">
                                <p className='text-slate-400'><Link to="/login">Already have an account?</Link></p>
                            </div>
                            {/* Login Button */}
                            <button
                                type="submit"
                                className="bg-black hover:bg-black text-white font-semibold rounded-md py-2 px-4 w-full"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}