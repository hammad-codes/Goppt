const express = require("express");
const router = express.Router();
const { makePPT } = require("../utilities/helper");

router
  .route("")
  .get((req, res) => {
    res.render("index");
  })
  .post((req, res) => {
    const { title } = req.body;
    res.redirect("/presentation?title=" + title);
  });

router.route("/presentation").get((req, res) => {
  const { title } = req.query;
  if (title === undefined || title === null || title === "")
  return res.redirect("/");
console.log(title);

// Done-> 1. Clean the prompt
// Done-> 2. Send the prompt to the API and get the response
// Done-> 3. Extract the Names of the slides from the response
// Done-> 4. Design the image queries for the slides
// Done-> 5. Send the image queries to the API and get the response
// Done-> 6. Extract the image URLs from the response
// Done-> 7. Design the slide objects
// 8. Finally Send the slide objects to render them on the page

//To make an actual presentation, uncomment the following code and comment the code below it

  makePPT(title).then((slides) => {
      console.log(slides);
      res.render("presentation",{slides});
  }).catch((err) => {
        console.log(err);
        res.send('Oops something went wrong :(');
    });

//For testing purposes only

    // const slides  = [
    //      {
    //       slideNumber: 1,
    //       title: 'United States of America',
    //       imageURL: 'https://images.unsplash.com/photo-1499696562547-dbe51006e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYyNTB8MHwxfHNlYXJjaHwxfHxVU0ElMjBGbGFnfGVufDB8MXx8fDE2OTE1MjA3MzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    //       content: [
    //         'Federal republic in North America.',
    //         'Third-most populous country in the world.',
    //         'Covers an area of 9.8 million km².',
    //         'Bordered by Canada to the north and Mexico to the south.',
    //         'Capital city is Washington, D.C.'
    //       ]
    //     },
    //      {
    //       slideNumber: 2,
    //       title: 'Geography and Climate',
    //       imageURL: 'https://images.unsplash.com/photo-1675478631822-fb663199ccde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYyNTB8MHwxfHNlYXJjaHwxfHxVU0ElMjBMYW5kc2NhcGV8ZW58MHwxfHx8MTY5MTUyMDczNHww&ixlib=rb-4.0.3&q=80&w=1080',
    //       content: [
    //         'Geographic regions include the Midwest, Northeast, South, West, and Alaska.',
    //         'Has a wide range of climates, from tropical to arctic.',
    //         'Home to many natural wonders, including the Grand Canyon and Yellowstone National Park.',
    //         'Has a diverse population of over 330 million people.',
    //         'Official languages are English and Spanish.'
    //       ]
    //     },
    //      {
    //       slideNumber: 3,
    //       title: 'History and Government',
    //       imageURL: 'https://images.unsplash.com/photo-1649173418353-9fa5d7d19db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYyNTB8MHwxfHNlYXJjaHwxfHxVU0ElMjBIaXN0b3J5fGVufDB8MXx8fDE2OTE1MjA3ODd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    //       content: [
    //         'Originally inhabited by Native Americans.',
    //         'Colonized by Europeans in the 16th century.',
    //         'Declared independence from Great Britain in 1776.',
    //         "Became the world's first superpower in the 20th century.",
    //         'Current government is a federal republic.'
    //       ]
    //     },
    //      {
    //       slideNumber: 4,
    //       title: 'Economy and Culture',
    //       imageURL: 'https://images.unsplash.com/photo-1619013970973-1e3e79d0ce57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYyNTB8MHwxfHNlYXJjaHwxfHxVU0ElMjBFY29ub215fGVufDB8MXx8fDE2OTE1MjA3MzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    //       content: [
    //         "World's largest economy by GDP.",
    //         "Home to some of the world's most powerful companies.",
    //         'Has a diverse and vibrant culture.',
    //         'Is a global leader in science, technology, and innovation.',
    //         'Is a major contributor to international development.'
    //       ]
    //     },
    //      {
    //       slideNumber: 5,
    //       title: 'Summary',
    //       imageURL: 'https://images.unsplash.com/photo-1499696562547-dbe51006e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYyNTB8MHwxfHNlYXJjaHwxfHxVU0ElMjBGbGFnfGVufDB8MXx8fDE2OTE1MjA3MzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    //       content: [
    //         'The United States is a diverse, vibrant, and powerful country.',
    //         'It is home to a rich history, culture, and economy.',
    //         'It is a global leader in science, technology, and innovation.',
    //         'It is a major contributor to international development.',
    //         'The United States is a land of opportunity and hope for all.'
    //       ]
    //     }
    //   ];

    // res.render("presentation",{slides});

    //res.send('Yeaay');
});

module.exports = router;
