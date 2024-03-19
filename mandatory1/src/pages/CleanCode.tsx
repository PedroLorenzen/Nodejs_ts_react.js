import React from 'react';
import profilePic from '../assets/images/profilePic.jpg';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

function CleanCode() {
  return (
    <div>
        <div>
            <Header />
        </div>
    <div className="flex flex-row relative w-full h-screen bg-stone-800 pt-20">
      <div className="basis-3/4 flex flex-col items-start justify-center p-8 text-white z-10">
        <h2 className="text-2xl my-5 font-semibold">Promises (async, await, then, catch)</h2>
        <p className="text-lg text-left mb-4">
          JavaScript Promises are a powerful way to handle asynchronous operations. They allow you to handle asynchronous tasks, such as API calls, in a more manageable way. The 'async' and 'await' keywords enable writing asynchronous code that appears synchronous, making it easier to read and understand. Using 'then' for success callbacks and 'catch' for handling errors gives you a clear structure for managing success and failure scenarios.
        </p>
        <p className="text-lg text-left">
          Let's dive into how Promises can simplify asynchronous code management and improve the readability of your React.js applications.
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-grow overflow-hidden rounded-3xl m-4 mt-1">
        <img src={profilePic} alt="Illustration for Promises in JavaScript" className="w-full h-full object-cover z-10" />
      </div>
    </div>
    <div>
      <Menu />
      </div>
    <div>
      <Footer />
      </div>
    </div>
  );
}

export default CleanCode;

