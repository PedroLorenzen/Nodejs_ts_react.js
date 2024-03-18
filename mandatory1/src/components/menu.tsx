import React from 'react';
import { Link } from 'react-scroll';

function Menu() {
    return (
        <div className="grid grid-cols-3 gap-12 m-10">
            <div className="p-4 shadow-md rounded-lg text-center">
                <h1>Clean Code</h1>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-4 border bg-stone-400 hover:opacity-90 rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>Debugging</Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:opacity-90 rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>Prettier</Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:opacity-90 rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>Promises</Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:opacity-90 rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>Arrow vs Standard Functions</Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:opacity-90 rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>Coding Standards</Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:opacity-90 rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>Imports</Link>
                    </div>
                </div>
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
    );
}

export default Menu;
