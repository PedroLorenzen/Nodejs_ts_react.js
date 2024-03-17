import React from 'react';
import logo from '../assets/images/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Assuming you're using React Icons

const footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col space-y-2 text-center">
                        <span>Christian Pedro Fernandez Lorenzen</span>
                        <span>+45 29 28 27 54</span>
                        <span>christianplorenzen@outlook.com</span>
                    </div>

                    <div>
                        <img
                            src={logo}
                            alt="Footer Logo"
                            className="h-12 sd:h-12 md:h-24 lg:h-32 rounded-lg"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/christian-pedro-fernandez-lorenzen-296151238/"
                            title="LinkedIn Profile"
                            className="hover:text-gray-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/pedroLorenzen"
                            title="GitHub Profile"
                            className="hover:text-gray-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
