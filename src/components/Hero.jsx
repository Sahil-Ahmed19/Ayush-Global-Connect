import { React, useState } from "react";
import { Carousel } from "antd";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [textColor, setTextColor] = useState("text-red-500");
  return (
    <div className="flex">
      <div className="basis-3/5 h-80 w-1/6">
        <Carousel autoplay>
          <div className="m-0 h-80 bg-orange-400 text-center">
            <h3>1</h3>
          </div>
          <div className="m-0 h-80 bg-orange-400 text-center">
            <h3>2</h3>
          </div>
          <div className="m-0 h-80 bg-orange-400 text-center">
            <h3>3</h3>
          </div>
          <div className="m-0 h-80 bg-orange-400 text-center">
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
      <aside className="basis-2/5 h-80 w-auto flex flex-col gap-4 justify-center">
        <h1 className="text-4xl font-bold text-center">
          All in one platform for{" "}
        </h1>
        <div className={` text-4xl ${textColor} font-bold text-center`}>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Investors",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              () => setTextColor("text-orange-500"),
              "Mentors",
              1000,
              () => setTextColor("text-yellow-500"),
              "Startups",
              1000,
              () => setTextColor("text-green-500"),
              "Government agencies",
              1000,
              () => setTextColor("text-blue-500"),
              "Individual users",
              1000,
              () => setTextColor("text-indigo-500"),
              "Accelerators",
              1000,
              () => setTextColor("text-violet-500"),
              "Incubators",
              1000,
              () => setTextColor("text-red-500"),
            ]}
            wrapper="span"
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            repeat={Infinity}
          />
        </div>
      </aside>
    </div>
  );
};

export default Hero;
