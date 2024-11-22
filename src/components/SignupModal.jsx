"use client";

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[375px] p-6 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] font-semibold">Sign up or Log in</h2>
          <button
            className="text-gray-500 font-[18px] hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full mt-1 p-2 pt-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button className="w-full p-2 mb-4 text-white bg-[#407680] rounded hover:bg-white hover:text-[#407680] border border-[#407680] hover:border hover:border-[#407680] transition">
          Submit
        </button>

        <div className="flex items-center my-4">
          <hr className="w-full border-t" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-t" />
        </div>

        <button className="w-full p-2 mb-2 text-white bg-[#4267B2] rounded">
          Continue with Facebook
        </button>
        <button className="w-full p-2 text-black border rounded bg-white hover:bg-gray-100">
          Sign in with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          I accept Trulia's{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
