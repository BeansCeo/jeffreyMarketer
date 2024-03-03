import OpenAI from "../node_modules/openai";
import { config } from "../node_modules/dotenv/lib/main.js"; 
const response = document.getElementById("response")
config(process.env.OPENAI_API_KEY)
const openai = new OpenAI(process.env.OPENAI_API_KEY);
async function quiz() {
  const request = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": "Find 5 space facts about astrophysics for a space geek such as effects of laws of time and space."
      }
    ],
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const result = request.choices[0].message.content;
  console.log(result);
  response.textContent = result;
  var delayInMilliseconds = 5000; //5 seconds
  setTimeout(function() {
  }, delayInMilliseconds);
}
quiz();