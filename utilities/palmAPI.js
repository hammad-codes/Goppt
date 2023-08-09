if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.PALM_API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

module.exports.getCompletion = async (prompt) => {
  const response = await client.generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
    maxTokens: 800,
  });
  return response[0].candidates[0].output;
};


module.exports.getPrompt = (title) => {
    return `
    As an AI model, your task is to craft presentation content based on the specified topic, enclosed within angle brackets. The content should adhere to the following JSON format, designed to enhance clarity and engagement:
    [
        {
            "slideNumber": "Slide number",
            "title": "Title of the slide",
            "unsplashQuery": "Query for relevant slide image",
            "content": [
                "Concise Bullet Point 1",
                "Concise Bullet Point 2",
                "Concise Bullet Point 3",
                "Concise Bullet Point 4",
                "Concise Bullet Point 5"
            ]
        }
    ]
    For example, for the topic "Olympics", the content JSON format would be:
    [
        {
            "slideNumber": 1,
            "title": "Introduction to the Olympics",
            "unsplashQuery": "Olympics Opening Ceremony",
            "content": [
                "Modern Olympic Games started in 1896.",
                "Hosted every four years.",
                "Brings together nations for sports and unity.",
                "Symbolized by the Olympic rings.",
                "Promotes friendship and fair competition."
            ]
        },
        {
            "slideNumber": 2,
            "title": "Olympic Sports and Events",
            "unsplashQuery": "Olympic Sports",
            "content": [
                "Various sports categories like athletics, swimming, and gymnastics.",
                "New sports added over the years, like skateboarding and surfing.",
                "Diverse events showcase human excellence.",
                "Para Olympics for athletes with disabilities.",
                "Gold, silver, and bronze medals awarded."
            ]
        },
        {
            "slideNumber": 3,
            "title": "Olympic Values",
            "unsplashQuery": "Olympic Values",
            "content": [
                "Citius, Altius, Fortius: Faster, Higher, Stronger.",
                "Emphasizes sportsmanship and respect.",
                "Cultural exchange through Opening and Closing ceremonies.",
                "Promotes global understanding and harmony.",
                "Olympic torch relay symbolizes unity."
            ]
        },
        {
            "slideNumber": 4,
            "title": "Impact and Legacy",
            "unsplashQuery": "Olympics Impact",
            "content": [
                "Boosts tourism and local economies.",
                "Infrastructure development in host cities.",
                "Inspires young athletes to pursue their dreams.",
                "Raises awareness of social and environmental issues.",
                "Encourages healthy lifestyles and physical activity."
            ]
        },
        {
            "slideNumber": 5,
            "title": "Summary",
            "unsplashQuery": "Olympics",
            "content": [
                "Olympics: Uniting nations through sports.",
                "Showcasing human excellence and values.",
                "Inspiring generations and leaving a lasting legacy.",
                "Promoting global understanding and friendship.",
                "A celebration of diversity and unity."
            ]
        }
    ]
    
    Guidelines and Rules:

    Utilize the unsplashQuery field to generate a keyword that ensures the search for relevant and visually appealing slide images.

    Maintain the limit of five slides and a maximum of five bullet points per slide to ensure the presentation's succinctness.

    Each bullet point should be clear, concise, and within 100 characters to facilitate easy comprehension.

    Accurately complete the JSON format, ensuring accurate single quotes usage.

    Conclude the presentation with a summary slide titled "Summary" that succinctly captures the essence of the content.
    
    Lastly take your time and check wether your response is in correct JSON format or not, if not correct it.
    The topic is:
    <${title}>
    `;
}