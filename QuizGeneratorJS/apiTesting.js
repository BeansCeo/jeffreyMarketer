import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "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"
});
async function quiz() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": "Create 10 analytical questions for an 8th grade igcse student, studying Astronomy."
      }
    ],
    temperature: 0.6,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const result = response.choices[0].message.content;
  console.log("delay");
  var delayInMilliseconds = 1000; //1 second
  setTimeout(function() {
  }, delayInMilliseconds);
  console.log(result);
}
quiz();