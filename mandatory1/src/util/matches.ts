import { faker } from '@faker-js/faker';

interface Profile {
    name: string;
    bio: string;
    streetAddress: string;
    city: string;
}

interface DogImageResponse {
    message: string;
    status: string;
}

export default async function getMatches(numberOfMatches = 5): Promise<(DogImageResponse & Profile)[]> {
    const matches: (DogImageResponse & Profile)[] = [];
    for (let i = 0; i < numberOfMatches; i++) {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const dogImage: DogImageResponse = await response.json();
        const profile = getIndianProfile();
        matches.push({ ...dogImage, ...profile });
    }
    return matches;
}

function getIndianProfile(): Profile {
    return {
        name: faker.name.fullName(),
        bio: faker.lorem.sentence(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
    };
}
