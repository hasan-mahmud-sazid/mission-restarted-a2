
import vectorImg from "../../assets/vector1.png";

const StatCard = ({ title, count, gradientClass }) => (
  <div
    className={`relative flex flex-col items-center justify-center w-177 h-62.5 text-white rounded-2xl ${gradientClass}`}
  >
    <img
      src={vectorImg}
      alt=""
      className="absolute left-0 top-3 w-48 h-full object-cover pointer-events-none"
    />

    <img
      src={vectorImg}
      alt=""
      className="absolute right-0 top-3 w-48 h-full object-cover -scale-x-100 pointer-events-none"
    />

    <div className="relative z-10 flex flex-col items-center">
      <p className="text-2xl font-medium mb-1 tracking-wide">{title}</p>
      <h2 className="text-[110px] font-bold leading-none">{count}</h2>
    </div>
  </div>
);

const HeroDiv = ({ inProgress, resolved }) => {
  return (
    <div>
      <main className="flex justify-center items-start mt-24 px-10">
        <div className="flex shadow-2xl gap-4">
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
        </div>
      </main>
    </div>
  );
};

export default HeroDiv;
