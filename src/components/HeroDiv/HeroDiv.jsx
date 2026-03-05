import React from "react";
import vectorImg from "../../assets/vector1.png";

const StatCard = ({ title, count, gradientClass }) => (
  <div
    className={`relative flex flex-col items-center justify-center w-full lg:w-175 h-[200px] md:h-[250px] text-white rounded-2xl ${gradientClass} overflow-hidden shadow-lg`}
  >
    <img
      src={vectorImg}
      alt=""
      className="absolute left-0 top-0 w-32 md:w-48 h-full object-cover pointer-events-none"
    />
    <img
      src={vectorImg}
      alt=""
      className="absolute right-0 top-0 w-32 md:w-48 h-full object-cover -scale-x-100 pointer-events-none"
    />

    {/* Content Area */}
    <div className="relative z-10 flex flex-col items-center">
      <p className="text-xl md:text-2xl font-medium mb-1 tracking-wide uppercase">
        {title}
      </p>
      <h2 className="text-[60px] md:text-[80px] lg:text-[110px] font-bold leading-none">
        {count}
      </h2>
    </div>
  </div>
);

const HeroDiv = ({ inProgress, resolved }) => {
  return (
    <div className="w-full">
      <main className="flex flex-col lg:flex-row justify-center items-center mt-16 md:mt-24 px-5 md:px-10 gap-6">
        <StatCard
          title="In-Progress"
          count={inProgress}
          gradientClass="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1]"
        />
        <StatCard
          title="Resolved"
          count={resolved}
          gradientClass="bg-gradient-to-br from-[#34D399] to-[#059669]"
        />
      </main>
    </div>
  );
};

export default HeroDiv;
