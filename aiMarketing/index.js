const rawConfig = fs.readFileSync('config.json');
const config = JSON.parse(rawConfig);
const apiKey = config.apiKey;
const company = document.getElementById("name");
const service = document.getElementById("services");
const goal = document.getElementById("goal");
const audience = document.getElementById("audience");
const Generate = document.getElementById("setSail");
const deadline = document.getElementById("deadline");
const plan = document.getElementById("plan");
const specs = document.getElementById("extras")
Generate.addEventListener("click", function(){
  let prompt = `Act as the greatest marketing planner ever using the analogy of assembling a boat. Help me create an oddyssey worthy SOP for my company; ${company.value} and our product, ${service.value}. We will market on social media such as instagram and youtube, you should list some more effective ways too. Tailor the plan to target my audience${audience.value} and draw traffic to my business. The goal is to reach ${goal.value} in sales by ${deadline.value}. Analyze current processes and potential bottlenecks.
  Draft multiple SOPs tailored to achieve goals efficiently, then test each SOP against a structured template. Evaluate strengths and weaknesses of each SOP. Synthesize best practices into a final, optimized SOP. Only reply with this final SOP. Finish in 1000 tokens.`
  plan.textContent="Generating..."
  plan.textContent= prompt
  const client = axios.create({
    headers:{
      Authorization: "Bearer " + Key,
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
