// Import React and other necessary dependencies
import React, { useState } from 'react';
import getMatches from '../util/matches'; // Adjust the import path as necessary

interface DogProfile {
    message: string; // URL to the dog image
    status: string;
    name: string;
    bio: string;
    streetAddress: string;
    city: string;
}

const RestApi: React.FC = () => {
    const [dogProfiles, setDogProfiles] = useState<DogProfile[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDogMatches = async () => {
        setIsLoading(true);
        const matches = await getMatches();
        setDogProfiles(matches);
        setIsLoading(false);
    };

    return (
        <div className="p-4">
            <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                onClick={fetchDogMatches}
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Fetch Dog Matches'}
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dogProfiles.map((profile, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                        <img className="w-full" src={profile.message} alt={`Dog ${index + 1}`} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{profile.name}</div>
                            <p className="text-gray-700 text-base">{profile.bio}</p>
                            <p className="text-gray-600 text-sm">
                                {profile.streetAddress}, {profile.city}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestApi;
