import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate(-1);
    };
    return (
        <div className="flex flex-col items-center justify-center py-12">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600 mb-6">
            Welcome to your dashboard! Here you can manage your account and view your data.
            </p>
            <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleLogout}
            >
            Log Out
            </button>
        </div>
        </div>
    );
};
export default Dashboard;