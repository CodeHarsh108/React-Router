import { Outlet, Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Page</h1>
        <p className="text-xl text-gray-700 mb-6">
          Learn more <Link to="team" className="text-blue-600 hover:underline">about our team</Link> or 
          <Link to="/" className="text-blue-600 hover:underline ml-2">return home</Link>.
        </p>
        <Outlet />  {/* This will render the Team component */}
      </div>
    </div>
  );
}
export default About;