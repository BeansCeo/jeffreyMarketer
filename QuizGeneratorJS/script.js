const gen = document.getElementById("result");
const generate = document.getElementById("generate");
import OpenAI from "openai";
config(process.env.OPENAI_API_KEY)
const openai = new OpenAI(process.env.OPENAI_API_KEY);
generate.addEventListener('click', async function () {
  const response = await openai.chat.completions.create({
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
  gen.textContent = "generating...";
  const result = response.choices[0].message.content;
  console.log(result);
  var delayInMilliseconds = 10000; //5 seconds
  setTimeout(function() {
  }, delayInMilliseconds);
  gen.textContent = `quiz: ${result}`
});
