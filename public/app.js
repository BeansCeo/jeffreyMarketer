const details = {
  company:  document.getElementById("age"),
  Generate:  document.getElementById("fitness level"),
  service: document.getElementById("weight"),
  goal:  document.getElementById("goal"),
  deadline:  document.getElementById("deadline"),
  plan: document.getElementById("plan"),
}
const {age, cap, weight, goal, deadline} = details;
details.Generate.addEventListener("click", function(){
  let prompt = `Act as a fitness trainer. Craft a workout tailored for a person of ${age}, starting their journey with you, from ${cap} fitness level at ${weight} weight in ${units}. They wish to ${goal} by ${deadline}`
  plan.textContent = prompt
  plan.textContent = "Generating"
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
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
  }
  client
    .post("https://api.openai.com/v1/chat/completions", request)
    .then((result) =>{
      console.log(result.data.choices[0].message.content)
      plan.textContent = result.data.choices[0].message.content;
    })
    .catch((err) => {
      console.log(err)
    })
});
