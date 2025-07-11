import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Home Page</h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome to our application! This is the home page where you can find all the 
          essential information about our services and features.
        </p>
        <button
className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
       onClick={handleLogin}   
        >Login</button>
      </div>
    </div>
  );
}

export default Home;