const topic = document.getElementById("topic");
const board = document.getElementById("schoolBoard");
const diff = document.getElementById("level");
const questions = document.getElementById("questions")
const alert = document.getElementById("alert")
const generate = document.getElementById("genQuiz")
import axios from "axios";
while (topic == ""){
    alert.textContent("Kindly provide a topic")
}
generate.addEventListener("click", function () {
  const prompt = `Generate a quiz on ${topic}. You should include ${questions}. The difficulty of the questions should be based on ${board}, class ${diff}.`;
  const apiKey = process.env.OPENAI_API_KEY;
  const client = axios.create({
    headers:{
      Authorization: "Bearer " + apiKey,
    },
  })
  const params = {
    prompt: `${prompt}`,
    model: "text-davinci-003",
    max_tokens: 10,
    temperature: 0,
  };
  client
    .post("https://api.openai.com/v1/completions", params)
    .then((result)=>{
      let quiz = result.data.choices[0].text;
      console.log(quiz);
    })
  .catch((err) => {
      console.log(err);
    });
  }); 