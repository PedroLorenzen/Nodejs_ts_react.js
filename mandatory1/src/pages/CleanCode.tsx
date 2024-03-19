import React from 'react';
import promises from '../assets/images/promises.png';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

function CleanCode() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex flex-row relative w-full bg-stone-800 pt-20">
                <div className="basis-3/4 flex flex-col items-start justify-center p-8 text-white z-10">
                    <h2 className="text-2xl my-5 font-semibold">Promises (async, await, then, catch)</h2>
                    <p className="text-md text-left mb-4">
                    Promises in JavaScript have made dealing with asynchronous tasks a lot easier. Using async and await allows for a more intuitive, synchronous-style flow of execution. This syntactic sugar lets developers pause where the code is waiting for a Promise without compomising the responsiveness of the application. Even though Javascript is single-threaded it manages tasks efficiently thanks to its event loop deciding the execution sequence.
                    </p>
                    <p className="text-md text-left">
                    Putting async before a function means you're going to use await in the function, which waits for a Promise to settle (either complete or fail) before continuing execution. This makes your code much cleaner and saves you from falling into the dreaded Callback Hell or Pyramid of Doom where you'd have a lot of callbacks nested inside callbacks, making everything hard to read and debug.
                    </p>
                </div>
                {/* Image Section */}
                <div className="flex-grow overflow-hidden mr-10 ml-5 mt-1">
                    <img src={promises} alt="Illustration for Promises in JavaScript" className="w-full h-full object-contain z-10" />
                </div>
            </div>
            <div className="flex flex-row relative w-full bg-stone-800">
                <div className="basis-3/4 flex flex-col items-start justify-center p-8 text-white z-10">
                    <h2 className="text-2xl my-5 font-semibold">Promises (async, await, then, catch)</h2>
                    <p className="text-md text-left mb-4">
                    Promises in JavaScript have made dealing with asynchronous tasks a lot easier. Using async and await allows for a more intuitive, synchronous-style flow of execution. This syntactic sugar lets developers pause where the code is waiting for a Promise without compomising the responsiveness of the application. Even though Javascript is single-threaded it manages tasks efficiently thanks to its event loop deciding the execution sequence.
                    </p>
                    <p className="text-md text-left">
                    Putting async before a function means you're going to use await in the function, which waits for a Promise to settle (either complete or fail) before continuing execution. This makes your code much cleaner and saves you from falling into the dreaded Callback Hell or Pyramid of Doom where you'd have a lot of callbacks nested inside callbacks, making everything hard to read and debug.
                    </p>
                </div>
                {/* Image Section */}
                <div className="flex-grow overflow-hidden mr-10 ml-5 mt-1">
                    <img src={promises} alt="Illustration for Promises in JavaScript" className="w-full h-full object-contain z-10" />
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
