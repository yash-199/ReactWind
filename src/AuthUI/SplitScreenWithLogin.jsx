import { useState } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { IoCopy } from "react-icons/io5";
import SideImage from "../assets/BannerUI-Image/thumbslider-1.webp";

const LoginForm = ({ email, onChange, step, onNext }) => {
  return (
    <div className="w-full lg:w-1/3 bg-white py-10 px-8 min-h-screen">
      <p className="text-green-800 text-2xl font-semibold font-serif">Your Logo</p>
      <p className="text-green-800 mt-4 text-2xl font-semibold">Log in to your account</p>
      <p className="text-black py-4 font-semibold">
        Don't have an account? <span className="text-blue-600">Sign Up</span>
      </p>
      <button className="flex items-center justify-center gap-4 border-2 border-slate-400 py-2 mt-4 rounded-md shadow-sm">
        <FcGoogle className="text-4xl" />
        <span className="text-slate-600 font-semibold text-lg">Google</span>
      </button>
      <button className="flex items-center justify-center gap-4 border-2 border-slate-400 py-2 mt-4 rounded-md shadow-sm">
        <GrGithub className="text-4xl text-black" />
        <span className="text-slate-600 font-semibold text-lg">GitHub</span>
      </button>
      <p className="text-sm font-normal text-slate-500 text-center py-6">Or with email and password</p>
      <label htmlFor="email" className="text-green-800 text-sm font-semibold">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={onChange}
        className="bg-transparent outline-none text-sm w-full text-green-800 font-semibold placeholder-gray-400 border-2 border-slate-300 py-2 rounded-lg px-2 my-3"
        placeholder="Enter your email"
      />
      {step === 2 && (
        <>
          <label htmlFor="password" className="text-green-800 text-sm font-semibold">Password</label>
          <input
            type="password"
            id="password"
            className="bg-transparent outline-none text-sm w-full text-green-800 font-semibold placeholder-gray-400 border-2 border-slate-300 py-2 rounded-lg px-2 my-3"
            placeholder="Enter your password"
          />
          <p className="text-blue-600 cursor-pointer">Forget Password</p>
        </>
      )}
      <button
        onClick={step === 1 ? onNext : undefined}
        className={`mt-6 w-full rounded-md px-6 py-2 ${!email.trim() && step === 1
          ? "bg-gray-500 text-gray-300 cursor-not-allowed"
          : "bg-green-500 text-white hover:bg-green-800"
          }`}
        disabled={!email.trim() && step === 1}
      >
        {step === 1 ? "Next" : "Login"}
      </button>
    </div>
  );
};

const SplitScreenWithLogin = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);
  const handleCopy = () => {
    const code = document.getElementById("codeText").innerText;
    navigator.clipboard.writeText(code)
      .then(() => alert("Code copied successfully!"))
      .catch(() => alert("Failed to copy!"));
  };

  return (
    <div className="h-full">
      <h1 className="font-semibold text-2xl mt-4">Split-Screen Sign-In Form</h1>
      <div className="py-4 px-4 mt-6 w-full bg-[#1C1F26] border-2 border-[#343942] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className={`px-4 py-2 ${showPreview ? "bg-indigo-500 text-white" : "bg-white text-black"}`}
            >
              <FaRegEye /> Preview
            </button>
            <button
              onClick={() => setShowPreview(false)}
              className={`px-4 py-2 ${!showPreview ? "bg-indigo-500 text-white" : "bg-white text-black"}`}
            >
              <FaCode /> Code
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-screen">
          {showPreview ? (
            <div className="flex w-full">
              <LoginForm email={email} onChange={(e) => setEmail(e.target.value)} step={step} onNext={handleNext} />
              <div className="w-2/3">
                <img src={SideImage} alt="Illustration" className="object-cover w-full h-full" />
              </div>
            </div>
          ) : (
            <div className="p-4 bg-gray-800 text-white">
              <IoCopy className="float-right cursor-pointer" onClick={handleCopy} />
              <pre id="codeText">{`<Your code here>`}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitScreenWithLogin;
