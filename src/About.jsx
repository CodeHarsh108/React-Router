function About() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Page</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          This application was built to demonstrate the power of React Router 
          and modern CSS styling with Tailwind CSS.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To provide users with a seamless and intuitive navigation experience 
            across different pages of the application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;