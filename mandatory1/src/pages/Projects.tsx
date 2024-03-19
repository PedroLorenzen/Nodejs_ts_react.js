// Import React and other necessary dependencies
import React, { useState } from 'react';
import getMatches from '../util/matches';
import Header from '../components/header';
import Footer from '../components/footer';

interface DogProfile {
    message: string; // URL to the dog image
    status: string;
    name: string;
    bio: string;
    streetAddress: string;
    city: string;
}

export function DogInder() {
    const [dogProfiles, setDogProfiles] = useState<DogProfile[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDogMatches = async () => {
        setIsLoading(true);
        const matches = await getMatches();
        setDogProfiles(matches);
        setIsLoading(false);
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex flex-col min-h-screen pt-20 bg-stone-800 text-white p-4">
                <div className="flex flex-col items-center justify-center flex-grow">
                    <button
                        className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer m-5 transition duration-300 ease-in-out"
                        onClick={fetchDogMatches}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Fetch Faker Dog Matches'}
                    </button>

                    {/* Adjusted grid for dog profiles with size constraints */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {dogProfiles.map((profile, index) => (
                            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-stone-700">
                                {/* Image with constrained height */}
                                <img className="w-full max-h-60 object-cover" src={profile.message} alt={`Dog ${index + 1}`} />

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{profile.name}</div>
                                    <p className="text-gray-300 text-base">{profile.bio}</p>
                                    <p className="text-gray-400 text-sm">
                                        {profile.streetAddress}, {profile.city}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
