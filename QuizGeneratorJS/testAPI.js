import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "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"
});
async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": "Create 2 questions for an 8th grade igcse student, studying Atomic Structure"
      }
    ],
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.choices[0])}
main();