import OpenAI from "openai";
const gen = document.getElementById("result");
const generate = document.getElementById("generate")
const openai = new OpenAI({
  apiKey: "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"
});
generate.addEventListener('click', async () =>{
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": "Create 20 short math questions for an 8th grade igcse student, studying algebraic equations"
      }
    ],
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  var delayInMilliseconds = 10000; //10 seconds
  setTimeout(function() {
  }, delayInMilliseconds);
  console.log(response.choices[0].message.content)
  const result = response.choices[0].message.content;
  gen.textContent = `quiz: ${result}`
});
