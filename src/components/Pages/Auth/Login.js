import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError(''); // Reset the error message
        if (email && password) {
            try {
                const response = await fetch('/Login/Company', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ workEmail: email, password }),
                });

                if (!response.ok) {
                    if (response.status === 400) {
                        setError('Company with this email does not exist');
                    } else if (response.status === 401) {
                        setError('Incorrect password');
                    } else {
                        setError('An unexpected error occurred');
                    }
                    return;
                }

                const data = await response.json();
                login(data.authToken); // Save the token and update authentication state
                navigate('/'); // Redirect to the home page or another protected route

            } catch (error) {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="bg-Creem py-10 h-screen">
            <div className="bg-white max-w-xl mx-auto p-6 border border-gray-200 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-6 ">Log in to TrustReview Business</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Work Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-500 rounded"
                    />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-500 rounded"
                    />
                    <div className="flex justify-between items-center">
                        <a href="/" className="text-Gray">Forgot your password?</a>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-blue-500"
                        >
                            {showPassword ? 'Hide' : 'Show'} password
                        </button>
                    </div>
                    <button type="submit" className={`w-full py-3 font-semibold rounded-full ${!email || !password ? "bg-[#C2C2C2] text-[#696A6A] hover:cursor-not-allowed" : "bg-Blue text-white hover:cursor-pointer"}`}>Log in</button>
                </form>

                <div className="flex items-center my-4 gap-3 w-full">
                    <hr className="w-1/2 border-gray-300" />
                    <span className="text-gray-500">Or</span>
                    <hr className="w-1/2 border-gray-300" />
                </div>

                <button className="w-full py-3 bg-[#D8E4FA] hover:bg-[#c7d7f4] text-Blue  font-semibold rounded-full mb-6">Log in with Google</button>
                <button className="w-full py-3 bg-[#D8E4FA] text-Blue font-semibold rounded-full mb-4">Log in with SSO</button>
                <p className="text-sm">
                    Don't have a TrustReview account? <Link to="/signup" className=" text-sm text-Blue">Sign up for free now.</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;