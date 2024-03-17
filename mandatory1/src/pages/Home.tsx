import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
    return (
        <div>
            <Header />
            <div className="bg-gray-500">
                <h1 className="text-3l font-bold underline text-red-600">Welcome to my first React app</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
