import React from "react";
interface IntroProps {
    title: string;
    description: string;
}
const Intro = ({title, description} : IntroProps) => {
  return (
    <div className="flex flex-col items-center justify-between w-[588px] h-[178px]">
      <p className="covered-by-your-grace-regular text-[36px] text-[#2DA950] font-[400]">
        {title}
      </p>
      <p className="tracking-[-1.7px] leading-[67.2px] manrope font-[600] text-[56px] text-center">
        {description}
      </p>
    </div>
  );
};

export default Intro;