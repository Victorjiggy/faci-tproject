import React from "react";
import { Book, Globe, X } from "lucide-react";

function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-14 pb-10">
      
      <div className="bg-[#0B0735] rounded-[28px] overflow-hidden">

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 pb-12 sm:pb-16">

          {/* ================= TOP ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr] gap-12 lg:gap-20">

            {/* LEFT */}
            <div className="text-center lg:text-left">

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

                <img
                  src="/logo.png"
                  alt="FACIT"
                  className="w-20 sm:w-24 h-auto"
                />

                <h3 className="text-white font-semibold text-[16px] sm:text-[18px] leading-tight">
                  FACULTY OF
                  <br />
                  COMPUTING AND
                  <br />
                  INFO. TECHNOLOGY
                </h3>

              </div>

              <p className="text-[#B4B4C8] text-base sm:text-[18px] lg:text-[20px] leading-[1.4] mt-8 sm:mt-12 max-w-full lg:max-w-[420px] mx-auto lg:mx-0">
                Empowering the next generation of digital leaders
                through rigorous education and transformative research.
              </p>

              <div className="flex justify-center lg:justify-start mt-10 sm:mt-16 gap-4">

                <button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2E236C] flex items-center justify-center rounded-md">
                  <Book size={18} className="text-white" />
                </button>

                <button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A79AFF] flex items-center justify-center rounded-md">
                  <Globe size={18} className="text-white" />
                </button>

                <button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ECE8FF] flex items-center justify-center rounded-md">
                  <X size={18} className="text-black" />
                </button>

              </div>
            </div>

            {/* RESOURCES */}
            <div className="text-center lg:text-left">

              <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[22px] font-medium mb-5 sm:mb-7">
                RESOURCES
              </h3>

              <div className="space-y-3 sm:space-y-4 text-[#B4B4C8] text-base sm:text-[18px] lg:text-[20px]">
                <p>Privacy Policy</p>
                <p>Accessibility</p>
                <p>Directory</p>
                <p>Research Portal</p>
                <p>Internal Login</p>
              </div>

            </div>

            {/* CONTACT */}
            <div className="text-center lg:text-left">

              <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[22px] font-medium mb-5 sm:mb-7">
                CONTACT
              </h3>

              <div className="space-y-3 sm:space-y-4 text-[#B4B4C8] text-base sm:text-[18px] leading-relaxed">
                <p>
                  Godfrey Okoye University
                  <br />
                  FGGC+GHC, Jideofor St,
                  Thinkers Corner,
                  Enugu 400001, Enugu,
                  Nigeria
                </p>

                <p>info@gouni.edu.ng</p>
              </div>

            </div>

          </div>

          {/* ================= LINE ================= */}
          <div className="h-px bg-white mt-16 sm:mt-20 lg:mt-24" />

          {/* ================= BOTTOM ================= */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 pt-8 sm:pt-12 text-center lg:text-left">

            <p className="text-white text-base sm:text-[18px]">
              © 2026. FACIT - GO University
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-12 text-[#B4B4C8] text-sm sm:text-[16px] lg:text-[18px]">

              <p>Terms Of Use</p>
              <p>Privacy Policy</p>
              <p className="text-white font-semibold">
                Developed by Obi-Dev
              </p>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;