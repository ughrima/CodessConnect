import React from 'react';


function Homepage() {
  return (
    <div className="Homepage">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold text-purple-600">Codess•Connect</div>
        
        <ul className="flex space-x-8 text-lg">
          <li><a href="#home" className="text-gray-600 hover:text-purple-600">Home</a></li>
          <li><a href="#/Opportunities" className="text-gray-600 hover:text-purple-600">Opportunities</a></li>
          <li><a href="/Sessions" className="text-gray-600 hover:text-purple-600">Session Archives</a></li>
          <li><a href="/MentorSessionTracking" className="text-gray-600 hover:text-purple-600">Session Tracking</a></li>
        </ul>
        <div >
        <img src="/assets1/image.png" alt="Codess Cafe" className="h-20 w-20 rounded-full" />
        
        </div>
      </nav>

       {/* Main Content Section with the Gradient Background */}
       <div id="home" className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-center p-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
          

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-white px-4 md:text-left">
            <h1 className="text-4xl font-bold mb-4">Connecting Mentors and Mentees from Codess.Cafe</h1>
            <p className="text-lg mb-6">Your One-Stop Destination for Mentorship Management. Effortlessly track sessions, monitor progress, and access essential resources—all in one place.</p>
            <a href="#about-us">
  <button className="px-6 py-0.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-lg border border-transparent hover:border-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
    About Us
  </button>
</a>

            
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
  <img src="/assets1/Character.png" alt="Codess Cafe" className="w-80 h-80 object-cover" />
</div>
        </div>
      </div>

      {/* Features Section */}
<div id="features" className="py-12 bg-white text-center">
  <div className="text-3xl font-bold text-purple-600 mb-8">Features</div>
  <div className="flex flex-wrap justify-center">
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-purple-600">Opportunities Board</h3>
        <p className="text-gray-600">Discover and apply for internships, jobs, and events relevant to your career.</p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-yellow-600">Session Tracking</h3>
        <p className="text-gray-600">Track and manage mentor-mentee sessions efficiently.</p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-600">Session Links & Archives</h3>
        <p className="text-gray-600">Access live session links and review past sessions in one place.</p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-teal-600">Feedback Form</h3>
        <p className="text-gray-600">Provide feedback to help improve the platform and sessions.</p>
      </div>
    </div>
  </div>
</div>

{/* About Us Section */}
<div id="about-us" className="py-12 bg-gradient-to-r from-purple-500 to-pink-500 ">
<div className="text-3xl font-bold text-white text-center mb-8">About Us</div>
      <div className="flex flex-col md:flex-row items-center justify-center px-4">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src="/assets1/Girl.gif" alt="Mentorship Illustration" className="w-3/4 md:w-2/3 h-auto" />
        </div>
        {/* Right Side: Text */}
        <div className="md:w-1/2 text-left md:pl-8 mt-6 md:mt-0">
      <p className="text-lg text-white mb-4">
      Codess.Connect is developed by the mentees of Codess.Cafe with the aim to streamline mentor sessions, manage community opportunities, and support collaboration across different batches. Our goal is to create a seamless experience for all members, enhancing the growth and learning within our community.
      </p>
     
    </div>
      </div>
    </div>

</div>
  );
}

export default Homepage;
