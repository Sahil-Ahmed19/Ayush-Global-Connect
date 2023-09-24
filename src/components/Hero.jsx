import { React, useState } from "react";
import { Carousel } from "antd";
import { TypeAnimation } from "react-type-animation";
// import img1 from "../assets/carousel1.jpeg";
// import img2 from "../assets/carousel2.png";
// import img3 from "../assets/carousel3.jpg";
// import img4 from "../assets/carousel4.jpg";
// import img5 from "../assets/carousel5.jpg";

const Hero = () => {
  const [textColor, setTextColor] = useState("text-rose-400");
  return (
    <div className="mx-8 my-8">
      <section className="flex px-4">
        <aside className="basis-2/6 h-80 w-auto flex flex-col gap-4 justify-center">
          <h1 className="text-4xl font-bold">All in one platform for </h1>
          <div className={` text-5xl ${textColor} font-bold`}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Startups",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Investors",
                1000,
                () => setTextColor("text-amber-400"),
                "Mentors",
                1000,
                "Incubators",
                1000,
                () => setTextColor("text-indigo-400"),
                "Accelerators",
                1000,
                "Govt. Agencies",
                1000,
                () => setTextColor("text-rose-400"),
              ]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              omitDeletionAnimation={true}
              repeat={Infinity}
            />
          </div>
        </aside>
        <section className="basis-4/6 h-80 w-1/6">
          <Carousel autoplay>
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
      <section className="flex justify-around gap-8 my-8 ">
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
  );
};

const Benefits = (props) => {
  return (
    <div className="flex flex-col gap-2 w-1/4 p-4 rounded-xl bg-indigo-300 hover:-translate-y-4 hover:bg-blue-300 hover:shadow-xl hover:shadow-stone-400 transition ease-in-out duration-300">
      <h1 className="text-xl font-semibold"> {props.heading} </h1>
      <p className="font-medium text-slate-800"> {props.desc} </p>
    </div>
  );
};

export default Hero;
