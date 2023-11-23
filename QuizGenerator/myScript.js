import { Axios } from "axios";
const apiKey = process.env.OPENAI_API_KEY;
const client = Axios.create({
  headers:{
    Authorization: "Bearer " + apiKey,
  },
})
const params = {
  prompt: "Do you like beans?",
  model: "text-davinci-003",
  max_tokens: 10,
  temperature: 0,
};
client
  .post("https://api.openai.com/v1/completions", params)
  .then((result)=>{
    console.log(result.data.choices[0].text); 
  })
  .catch((err) => {
    console.log(err);
  });