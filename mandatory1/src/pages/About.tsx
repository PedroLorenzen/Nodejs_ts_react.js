import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import profilepic from '../assets/images/profilePic.jpg';

function About() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex flex-row relative w-full h-screen bg-stone-800 pt-20">
                <div className="basis-3/4 flex flex-col items-center justify-center p-8 text-white z-10">
                    <h1 className="text-3xl my-10 font-semibold text-center">Hello there! My name is Christian Lorenzen</h1>
                    <h3 className="text-lg font-bold my-2 text-left">I'm a passionate programmer from Copenhagen, Denmark.</h3>
                    <h3 className="text-md text-left">
                        I'm studying Computer Science and now exploring the world of React.js, TypeScript and Node.js.
                    </h3>
                    <a href="/contact" className="py-10 px-3">
                        <button type="button" className="btn">
                            Contact me here
                        </button>
                    </a>
                    <h3 className="text-md text-left">This site showcases what I have learned the 2 first months in node.js</h3>
                </div>
                <div className="flex-grow overflow-hidden rounded-3xl m-4 mt-1">
                    <img src={profilepic} alt="headerLogo" className="basis-1/4 w-full h-full object-cover z-10" />
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

export default About;
