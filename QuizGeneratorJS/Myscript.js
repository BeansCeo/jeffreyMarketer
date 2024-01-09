document.addEventListener('DOMContentLoaded', function () {
  const gen = document.getElementById("result");
  const generate = document.getElementById("generate");});
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "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"
});
generate.addEventListener('click', async function () {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": "Create 10 analytical questions for an 8th grade igcse student, studying probability"
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
