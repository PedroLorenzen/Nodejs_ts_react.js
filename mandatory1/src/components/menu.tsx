import React from 'react';

function Menu() {
    return (
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
    );
}

export default Menu;