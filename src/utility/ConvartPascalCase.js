
export const convartStringToPascalCase = (str) => {
    // Split the string into an array of words
    const words = str.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toLowerCase() + word.slice(1);
    });

    // Join the words back together with underscores in between
    const result = capitalizedWords.join('_');

    return result;
}