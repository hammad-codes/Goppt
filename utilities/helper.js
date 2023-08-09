const Slide = require('./slide.js');
const { getCompletion, getPrompt } = require("../utilities/palmAPI");
const { getPhotos } = require("../utilities/unsplashAPI");

module.exports.makePPT = async (title) => {
    const prompt = getPrompt(title);
    const response = await getCompletion(prompt);
    const slideObjects = JSON.parse(response);
    const slides = [];

    // Use map to create an array of promises
    const slidePromises = slideObjects.map(async (slideObject) => {
        const photos = await getPhotos(slideObject.unsplashQuery);
        // const photo = photos[0];
        const photo = photos[Math.floor(Math.random() * photos.length)];
        const slide = new Slide(
            slideObject.slideNumber,
            slideObject.title,
            photo.urls.regular,
            slideObject.content
        );
        return slide;
    });

    // Wait for all promises to resolve using Promise.all
    const resolvedSlides = await Promise.all(slidePromises);

    return resolvedSlides;
};
