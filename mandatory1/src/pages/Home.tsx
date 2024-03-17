import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import homepicture_top_1 from '../assets/images/home_top_1.jpg';

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="top_page ;">
                <div className="relative w-full h-screen">
                    <img src={homepicture_top_1} alt="headerLogo" className="absolute inset-0 object-cover w-full h-screen rounded-lg z-0" />
                    <div className="flex h-screen">
                        <div className="w-1/2 flex flex-col items-center justify-center p-8 z-10">
                            <h1 className="text-l text-stone-700 font-semibold text-center">Introducting what I have learned the first 2 months in node.js</h1>
                            <h1 className="text-3xl text-stone-800 font-bold my-4">Welcome to my first node.js project</h1>
                            <a href="/" className="py-5 px-3">
                                <button type="button" className="bg-transparent text-stone-700 rounded-lg font-semibold hover:bg-stone-500 py-2 px-4 border-stone-800 border-2">
                                    here goes the button
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="grid grid-cols-3 gap-12 m-10">
                    <div className="p-4 shadow-md rounded-lg text-center">
                        <h1>Clean Code</h1>
                    </div>
                    <div className="p-4 shadow-md rounded-lg text-center">
                        <h1>Vercel</h1>
                    </div>
                    <div className="p-4 shadow-md rounded-lg text-center">
                        <h1>Node Framework</h1>
                    </div>
                    <div className="p-4 shadow-md rounded-lg text-center">
                        <h1>Rendering</h1>
                    </div>
                    <div className="p-4 shadow-md rounded-lg text-center">
                        <h1>Rest API</h1>
                    </div>
                    <div className="p-4 shadow-md rounded-lg text-center">
                        <h1>Terminal commands</h1>
                    </div>
                </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
