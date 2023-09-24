import { React, useState } from "react";
import { Carousel } from "antd";
import { TypeAnimation } from "react-type-animation";
// import img1 from "../assets/carousel1.jpeg";
// import img2 from "../assets/carousel2.png";
// import img3 from "../assets/carousel3.jpg";
// import img4 from "../assets/carousel4.jpg";
// import img5 from "../assets/carousel5.jpg";

const Hero = () => {
  const [textColor, setTextColor] = useState("text-rose-500");
  return (
    <div className=" bg-gradient-to-b from-violet-300 from-20% via-[#fab5b5] to-[#fab5b5] to-100% pt-28">
      <div className="mx-8">
        <section className="flex px-4">
          <aside className="basis-2/6 h-80 w-auto pr-4 flex flex-col gap-4 justify-center">
            <h1 className="pl-2 text-4xl font-bold">All in one platform for</h1>
            <div className="">
              <h1 className="inline text-transparent"> s </h1>
              <div className={`inline text-5xl ${textColor} font-bold`}>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Startups!",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Investors!",
                    1000,
                    () => setTextColor("text-amber-500"),
                    "Mentors!",
                    1000,
                    "Incubators!",
                    1000,
                    () => setTextColor("text-indigo-500"),
                    "Accelerators!",
                    1000,
                    "Govt. Agencies!",
                    1000,
                    () => setTextColor("text-rose-500"),
                  ]}
                  wrapper="span"
                  speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                  cursor={false}
                  omitDeletionAnimation={true}
                  repeat={Infinity}
                />
              </div>
            </div>
          </aside>
          <section className="basis-4/6 h-80 w-1/6">
            <Carousel autoplay className=" z-0">
              <div className="m-0 h-80 text-center bg-[url('/banner/carousel1.jpeg')]">
                {/* <img src={img1} alt="carousel1" /> */}
              </div>
              <div className="m-0 h-80 text-center bg-[url('/banner/carousel2.png')]">
                {/* <img src={img2} alt="carousel2" /> */}
              </div>
              <div className="m-0 h-80 text-center bg-[url('/banner/carousel3.jpg')]">
                {/* <img src={img3} alt="carousel3" /> */}
              </div>
              <div className="m-0 h-80 text-center bg-[url('/banner/carousel4.jpg')]">
                {/* <img src={img4} alt="carousel4" /> */}
              </div>
              <div className="m-0 h-80 text-center bg-[url('/banner/carousel5.jpg')]">
                {/* <img src={img5} alt="carousel5" /> */}
              </div>
            </Carousel>
          </section>
        </section>
        <section className="flex justify-around gap-8 mt-8 ">
          <Benefits
            heading="Unlock Connections"
            desc="Connect with investors, mentors, and like-minded innovators. Our platform opens doors to endless opportunities."
          />
          <Benefits
            heading="Fuel Success"
            desc="Discover expert guidance, mentorship, and vital resources. Government agencies track your progress, ensuring you're supported."
          />
          <Benefits
            heading="Streamlined Growth"
            desc="Pitch ideas effortlessly to potential investors, and investors find your next big opportunity with ease."
          />
          <Benefits
            heading="Seamless Guidance"
            desc="Navigate seamlessly with our interactive chatbot. Get instant answers and personalized recommendations."
          />
        </section>
      </div>
      <div className=" aspect-video h-40 w-full bg-[url('/layered-waves-haikei1.svg')] bg-no-repeat bg-top bg-cover"></div>
      <div className="h-40 w-full bg-gradient-to-b from-[#ececec] via-[#ececec] to-white"></div>
    </div>
  );
};

const Benefits = (props) => {
  return (
    <div className="flex flex-col gap-2 w-1/4 p-4 rounded-xl bg-violet-200 hover:-translate-y-4 hover:bg-violet-50 hover:shadow-xl transition ease-in-out duration-300 group">
      <h1 className="text-xl font-semibold group-hover:text-indigo-600 transition ease-in-out duration-300">
        {" "}
        {props.heading}{" "}
      </h1>
      <p className="font-medium text-slate-800"> {props.desc} </p>
    </div>
  );
};

export default Hero;
