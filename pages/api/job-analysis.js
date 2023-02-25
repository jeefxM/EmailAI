import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ text: "No prompt provided" });

  const basePromptPrefix =
    "Highlite the three most important responsibilites in this job description:  ";

  const responseResult = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix} ${prompt}`,
    max_tokens: 2048,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    stream: false,
    logprobs: null,
  });

  const response =
    responseResult.data.choices[0].text?.trim() || "Sorry try again";
  res.status(200).json({ text: response });
}
