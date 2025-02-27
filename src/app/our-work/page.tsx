import { CallToAction } from "@/components/sections/call-to-action";
import { SimpleFeaturesBanner } from "@/components/sections/simple-features";
import { WorksList } from "@/components/works-list";

export default function Page() {
  return (
    <div>
      <div className="container mt-8 md:pb-14">
        <h1 className="text-5xl text-center font-black">Our Work</h1>
        <p className="text-center mt-4 text-lg">
          We have worked with a range of businesses to help them achieve their
          goals.
        </p>

        <WorksList className="mt-14 text-black mb-16" />
      </div>

      <SimpleFeaturesBanner />
      <div className="container">
        <CallToAction />
      </div>
    </div>
  );
}
