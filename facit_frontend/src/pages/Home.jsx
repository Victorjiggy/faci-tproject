import React from "react";
import StatTube from "../component/StatTube";
import img from "../assets/hero.png";
import Button from "../component/MainButton";

function Home() {
  return (
    <main>
      
      <section className="py-20 lg:py-18 h-auto lg:h-screen items-center">
        <div className="max-w-full mx-[5%] px-1">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              
              <span className="inline-block px-4 py-2 bg-[#ece9ff] text-xs tracking-[3px] uppercase rounded-md">
                Innovation In Education
              </span>

              <h1 className="
                mt-8
                text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem]
                leading-[0.99]
                font-black
                text-[#09021d]
                w-full lg:w-[50vw]
              ">
                BUILDING THE FUTURE
                <br />
                OF COMPUTING
              </h1>

              <p className="
                mt-8
                text-base sm:text-lg
                text-gray-600
                leading-relaxed
                max-w-full lg:max-w-[30vw]
                mx-auto lg:mx-0
              ">
                Building innovators, engineers, and future technology leaders.
                Join a global community at the forefront of digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10 justify-center lg:justify-start">
               
                 <Button>
                   Explore Departments
                  </Button>

                  <Button variant="ghost">
                   View Programs
                  </Button>
              </div>

            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={img}
                alt="Hero"
                className="
                  w-full
                  max-w-[350px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px]
                  h-[300px] sm:h-[380px] md:h-[450px] lg:h-[80vh]
                  object-cover
                  rounded-[24px]
                  shadow-[0_30px_80px_rgba(0,0,0,.15)]
                "
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#eef0fa] pt-[7%] mb-[7%]">
        <div className="max-w-full mx-[5%] px-1">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-7 lg:gap-[10px] md:gap-[30px] items-center">
            
            <div className="mb-10 lg:mb-[5%] text-center lg:text-left">

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0b0627] leading-tight">
                Pioneering the Digital
                <br />
                Frontier
              </h2>

              <div className="w-20 h-[3px] bg-[#0b0627] my-10 mx-auto lg:mx-0" />

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-full lg:max-w-[30vw] mx-auto lg:mx-0">
                Our faculty is dedicated to pushing the boundaries of what's
                possible. Through rigorous academic training and world-class
                research, we prepare the next generation of tech pioneers.
              </p>

              <button className="mt-12 px-8 py-4 rounded-xl bg-gradient-to-b from-[#34256f] to-[#09021d] text-white hover:scale-105 transition">
                Explore Departments
              </button>

            </div>

          {/* RIGHT STATS */}
 <div className="
  flex
  md:px-[25%]
  items-end
  justify-start
  w-full
  gap-0
  md:overflow-x-none
  overflow-x-auto
  scrollbar-hide
  px-2
">

  <StatTube
    target={10}
    label="Departments"
    height="h-[250px] sm:h-[180px] md:h-[220px]"
    color="#afa5f1"
    className="flex-shrink-0 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"
  />

  <StatTube
    target={3}
    label="Students"
    suffix="K+"
    height="h-[300px] sm:h-[220px] md:h-[380px]"
    color="#8f80ff"
    className="flex-shrink-0 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"
  />

  <StatTube
    target={98}
    label="Excellence"
    suffix="%"
    height="h-[380px] sm:h-[260px] md:h-[440px]"
    color="#3d2f89"
    className="flex-shrink-0 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"
  />

  <StatTube
    target={120}
    label="Research"
    suffix="+"
    height="h-[430px] sm:h-[300px] md:h-[500px]"
    color="#12052d"
    className="flex-shrink-0 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"
  />

</div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;