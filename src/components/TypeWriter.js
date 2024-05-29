import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <span className="block h-20 text-[42px] font-medium md:text-5xl lg:h-[5.7rem] lg:text-6xl">
      <TypeAnimation
        sequence={[
          "Développement",
          1200,
          "Codage",
          1200,
          "Créativité",
          1200,
        ]}
        speed={30}
        repeat={Infinity}
        cursor={false}
      />
    </span>
  );
};

export default TypeWriter;
