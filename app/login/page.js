"use client";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white min-h-screen bg-[#FFF5E5] ">
      {/* Card Container */}
      <section className="bg-white dark:bg-gray-900 w-full max-w-lg shadow-lg rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Sign in to access your account
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          {/* Google Sign-in Button */}
          <button
            className="flex items-center justify-center w-full px-4 py-3 bg-white text-gray-800 rounded-lg shadow-lg border hover:scale-105 transition-transform duration-200"
            onClick={() => signIn("google")}
          >
            <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285F4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34A853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#FBBC05"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#EA4335"
              />
            </svg>
            <span className="ml-3">Continue with Google</span>
          </button>

          {/* GitHub Sign-in Button */}
          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center w-full px-4 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
              />
            </svg>
            <span className="ml-3">Continue with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <span className="w-full h-px bg-gray-300 dark:bg-gray-700"></span>
          <span className="px-4 text-sm text-gray-500 dark:text-gray-400">
            Or
          </span>
          <span className="w-full h-px bg-gray-300 dark:bg-gray-700"></span>
        </div>

        {/* Email and Password Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sign in
          </button>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
