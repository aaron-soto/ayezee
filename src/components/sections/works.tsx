import { WorksList } from "@/components/works-list";

export const Works = () => {
  return (
    <div className="bg-[#0f1112] pt-32 pb-56">
      <div className="container">
        <h2 className="text-5xl text-center mb-20 font-extrabold text-background max-w-3xl mx-auto">
          What we have done for other businesses
        </h2>

        <WorksList className="text-white" />
      </div>
    </div>
  );
};
