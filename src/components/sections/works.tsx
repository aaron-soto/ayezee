import { WorksList } from "@/components/works-list";

export const Works = () => {
  return (
    <div className="bg-[#0f1112] pt-32 pb-56">
      <div className="container">
        <h2 className="text-5xl text-center  font-extrabold text-background max-w-3xl mx-auto">
          What We&apos;ve Built for Other Businesses
        </h2>
        <p className="text-center text-white/60 mt-6 max-w-2xl mx-auto mb-20">
          Take a look at some of the websites we&apos;ve created for past
          clients.
        </p>

        <WorksList className="text-white" />
      </div>
    </div>
  );
};
