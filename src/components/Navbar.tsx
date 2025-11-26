import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-white/95 border-b border-gray-800/20 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-28 items-center justify-center">
            <a
              href="https://www.fidihospitality.com/"
              className="flex items-center"
            >
              <img
                src="/logo/logo.png"
                alt="48 Wall Street"
                className="h-20 w-auto"
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-primary h-0.5 w-full"></div>
    </>
  );
};

export default Navbar;
