import React from "react";
import Carousel from "../components/Carousel";
import GetInTouch from "../components/GetInTouch";
import NoticeBoard from "../components/NoticeBoard";
import CounterComponent from "../components/Counter";

function Home() {
  const images = [
    "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
    "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
    "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
    "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
    "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 ",
  };

  return (
    <>
      {/* IMAGES CAROUSEL */}
      <Carousel images={images} />
      {/* MISSION */}
      <div className="color h-[50vh] grid justify-center">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center text-white lg:mt-12 mt-16 font-[990]">
          OUR MISSION
        </p>
        <p className="text-white lg:text-2xl md:w-[70vw] text-center lg:-mt-12 -mt-16 md:text-xl">
          "To transform and empower young women talent through cutting edge
          education in science, technology, arts and management amalgamated with
          spiritual rejuvenation for their holistic development to serve the
          mankind with compassion and love."
        </p>
      </div>
      {/* // WHY ETERNAL UNIVERSITY */}
      <div>
        <p className="brown font-extrabold text-5xl text-center mt-12">
          Why Eternal University?
        </p>
        <p className="brown text-center font-semibold mt-10 md:text-xl">
          Eternal university is NAAC Accredited & ISO 9001: 2015. The university
          is Recognised by UGC | AICTE | INC | NCTE | DISR | DBT | DRDO.
        </p>
      </div>
      {/* COUNTER */}
      <div className="grid justify-center grid-cols-4 mt-16">
        <div className="m-[10%] w-24 h-24 color rounded-full lg:w-52 lg:h-52">
          <div className="lg:mt-4 lg:-ml-4 -ml-2 m-0">
            <CounterComponent toValue={2200} color="#F8D7C2" separator={true} />
          </div>
        </div>
        <div className="m-[10%] w-24 h-24 color rounded-full lg:w-52 lg:h-52">
          <div className="lg:mt-4 lg:-ml-4 -ml-2 m-0">
            <CounterComponent toValue={10} color="#F8D7C2" separator={true} />
          </div>
        </div>
        <div className="m-[10%] w-24 h-24 color rounded-full lg:w-52 lg:h-52">
          <div className="lg:mt-4 lg:-ml-4 -ml-2 m-0">
            <CounterComponent toValue={63} color="#F8D7C2" separator={true} />
          </div>
        </div>
        <div className="m-[10%] w-24 h-24 color rounded-full lg:w-52 lg:h-52">
          <div className="lg:mt-4 lg:-ml-4 -ml-2 m-0">
            <CounterComponent toValue={50} color="#F8D7C2" separator={true} />
          </div>
        </div>
      </div>
      {/* // COLLEGES */}
      {/* // NOTICE BOARD  */}
      <NoticeBoard />
      {/* // GET IN TOUCH */}
      <GetInTouch />
    </>
  );
}

export default Home;
