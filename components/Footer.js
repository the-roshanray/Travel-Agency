import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            fauget<span className="ml-2 text-yellow-500">✈️</span>
          </h1>
          <p className="text-sm text-gray-600">
            Book your trip in minutes and get full control over your plans.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          {[
            {
              title: "Company",
              links: ["About", "Careers", "Mobile"],
            },
            {
              title: "Contact",
              links: ["Help/FAQ", "Press", "Affiliate"],
            },
            {
              title: "More",
              links: ["Airline Fees", "Airline", "Low Fare Tips"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold text-gray-900 mb-3">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-yellow-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-yellow-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-800 hover:text-white"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.889h2.54V9.798c0-2.508 1.492-3.89 3.775-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.629.771-1.629 1.563v1.874h2.773l-.443 2.889h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Add more social icons here */}
          </div>
          <p className="font-semibold">Download Our App</p>
          <div className="flex space-x-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              width={120}
              height={50}
              className="cursor-pointer hover:opacity-90 transition"
            />
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Apple Store"
              width={120}
              height={50}
              className="cursor-pointer hover:opacity-90 transition"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          © {new Date().getFullYear()} All rights reserved | Powered by{" "}
          <a
            href="https://webiyor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors font-medium"
          >
            Webiyor
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
