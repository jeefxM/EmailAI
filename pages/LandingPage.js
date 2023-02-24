import React from "react";
import Lottie from "lottie-react";
import WebAnalysis from "public/ContentCreation.json";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      <div className="bg-[#0f172a] flex flex-col pt-20 items-center">
        <h1 className="text-4xl font-bold text-[#f3f4f8] mb-8 max-sm:text-2xl font-Manrope">
          Welcome to ProWrite AI!
        </h1>
        <p className="text-xl text-[#f3f4f8] mb-8 sm:min-w-[200px] max-w-lg text-center max-sm:text-base ">
          Our web app offers three main features to help you with your online
          presence: post generation, email generation, and job review. With our
          AI-powered tools, you can generate high-quality content in no time.
        </p>
        <div className="grid grid-cols-3 gap-7 px-4 sm:px-10 max-lg:flex max-lg:flex-col">
          <Link
            href="/LinkedinPost"
            className="bg-[#d2d4da] h-auto sm:min-w-[100px] max-w-lg min-h-[200px] hover:scale-105 rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold mb-2">Post Generation</h2>
            <p className="text-gray-700">
              With our AI-powered tool, you can generate professional LinkedIn
              ready posts in no time. Simply provide a prompt, and our tool will
              generate a post for you.
            </p>
          </Link>
          <Link
            href="/LinkedinEmail"
            className="bg-[#d2d4da] h-auto sm:min-w-[200px] max-w-lg hover:scale-105 rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold mb-2">Email Generation</h2>
            <p className="text-gray-700">
              Our AI-powered email generator helps you create targeted emails
              that are ready to send. Simply provide a prompt, and our tool will
              generate an email for you.
            </p>
          </Link>
          <Link
            href="/JobReview"
            className="bg-[#d2d4da] h-auto sm:min-w-[200px] max-w-lg hover:scale-105 rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold mb-2">Job Review</h2>
            <p className="text-gray-700">
              Our job review tool helps you understand what a job is about by
              providing a brief summary of the job description. Simply input the
              job details, and our tool will generate a summary for you.
            </p>
          </Link>
        </div>
        <Lottie
          animationData={WebAnalysis}
          className="min-w-[200px] max-w-lg min-h-[200px] max-lg:mx-auto"
        />
        <a
          href="https://tsredimaster.gatsbyjs.io/"
          className="fixed bottom-5 left-10 max max-lg:static px-3 py-2 rounded-3xl transition transform hover:scale-105 text-[#f3f4f8]  "
        >
          <img src="whitelogo.png" alt="Tsredi" className="w-32 h-20 mb-2" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
