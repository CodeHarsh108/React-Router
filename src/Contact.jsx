function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Page</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Feel free to reach out to us for any questions or inquiries!
        </p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-lg font-medium text-gray-800">Email: contact@example.com</p>
          <p className="text-lg font-medium text-gray-800 mt-2">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}       

export default Contact;