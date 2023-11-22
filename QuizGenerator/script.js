import {config} from 'dotenv';
config();
import {Configuration, OpenAIApi} from "openai"
console.log(process.env.OPENAI_API_KEY);