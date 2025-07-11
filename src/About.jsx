import { Outlet, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function About() {
  const[searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') || 'General';
  const handleTopic = (newTopic) => {
    setSearchParams({ topic: newTopic });
  }
  const urlParams = new URLSearchParams(window.location.search);
  const topicFromUrl = urlParams.get('topic') || 'General';
  console.log('Current topic form useSearchParams:', topic);
  console.log('Current topic from URLSearchParams:', topicFromUrl);
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Page</h1>
        <p className="text-xl text-gray-700 mb-6">
          Learn more <Link to="team" className="text-blue-600 hover:underline">about our team</Link> or 
          <Link to="/" className="text-blue-600 hover:underline ml-2">return home</Link>.
        </p>

      <div
      className='flex flex-col items-center justify-center space-y-4 mb-6'>
        <h2
        className='text-2xl font-semibold text-gray-800 mb-4'
        >Choose a topic : </h2>
        <div
        className='flex space-x-4'>
          <button onClick={() => handleTopic('Team')}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'>
          Team</button>
          <button onClick={() => handleTopic('Mission')}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'>
          Mission</button>
          <button onClick={() => handleTopic('Vision')}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
          >Vision</button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Current Topic: <span className="text-blue-600">{topic}</span>
        </h2>
        <p className="text-gray-600 mb-6">
          You can learn more about our {topic} by clicking the links above.
        </p> 
      </div>


        <Outlet />  {/* This will render the Team component */}
      </div>
    </div>
  );
}
export default About;