import React from 'react'

const Navbar = () => {
    return (
        <nav className="background-color: rgb(190 242 100);">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 relative">
                  <span className="text-pink-600 font-burtons text-3xl">Aurora Kennedy</span>
                </div>
              </div>
              {/* <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <a
                    href="#"
                    className="text-pink-600 font-burtons hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Strikk
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 font-burtons hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reiser
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 font-burtons hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Venner
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      );
    };

export default Navbar