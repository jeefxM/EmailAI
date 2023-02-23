import { useState } from "react";
import loading from "public/Load.json";
import Lottie from "lottie-react";

export default function Home() {
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  async function generateText(prompt) {
    const response = await fetch("/api/text-generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setGeneratedText(data.text);
    setIsLoading(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const prompt = userInput;
    setIsLoading(true);
    if (!prompt) {
      alert("Please enter an email");
      setIsLoading(false);
      return;
    } else {
      generateText(prompt);
    }
  }

  console.log(userInput);

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <header className="items-center flex flex-col py-14 text-white">
          <div>
            <h1 className="text-7xl font-bold">EmailAI</h1>
          </div>
          <div>
            <p className="text-xl pt-7 font-semibold">
              Write better emails faster with EmailAi
            </p>
          </div>
        </header>
        <div className="w-[600px] max-sm:w-[300px] max-lg:w-[450px] pt-5">
          <textarea
            type="text"
            id="prompt"
            name="prompt"
            onChange={handleChange}
            placeholder="Start Typing here"
            className=" w-full h-[150px] bg-gray-800 text-white p-4 block border border-gray-700 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-base"
            style={{ resize: "none" }}
          />{" "}
          {isLoading ? (
            <Lottie animationData={loading} className="w-16 mt-9 ml-auto" />
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex justify-center items-center text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline bg-gray-800 hover:bg-gray-700 ml-auto mt-3"
            >
              Generate Text
            </button>
          )}
          {generatedText && (
            <div className="my-3 text-white whitespace-pre-line ">
              <p className="text-lg font-bold">Generated Text:</p>
              <p className="font-light mt-3 gap-">{generatedText}</p>
            </div>
          )}
        </div>

        <a
          href="https://tsredimaster.gatsbyjs.io/"
          className="fixed bottom-10 left-10 px-3 py-2 rounded-3xl transition transform hover:scale-105 text-white flex items-center justify-center "
        >
          <img src="whitelogo.png" className="w-32 h-20 mb-2" />
        </a>
      </div>
    </div>
  );
}
