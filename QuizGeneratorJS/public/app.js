const response = document.getElementById("response");
const topic = document.getElementById("topic");
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const level = document.getElementById("level");
document.getElementById("generate").addEventListener("click", () => {
  let prompt = `Generate ${questions.value} questions, on ${topic.value} that will suit a ${level.value} student studying in ${board.value} board.`
  response.textContent="Generating..."
  response.textContent= prompt
  const client = axios.create({
    headers:{
      Authorization: "Bearer " + apiKey,
    },
  })
  const request = {
    model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
        "content": prompt,
        }
      ],
      temperature: 1,
      max_tokens: 500,
      top_p: 1,
  }
  client
    .post("https://api.openai.com/v1/chat/completions", request)
    .then((result) =>{
      console.log(result.data.choices[0].message.content)
      response.textContent = result.data.choices[0].message.content;
    })
    .catch((err) => {
      console.log(err)
    })
});

