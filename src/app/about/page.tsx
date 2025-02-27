import { CallToAction } from "@/components/sections/call-to-action";
import Image from "next/image";
import { SimpleFeaturesBanner } from "@/components/sections/simple-features";
import { Star } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="bg-[#e3ff04] text-black">
        <div className="container py-8 md:py-24 flex flex-col md:flex-row gap-20">
          <div className="flex flex-1 flex-col items-start">
            <h1 className="text-4xl md:text-7xl font-bold w-full md:max-w-[960px]">
              Built with Precision. Designed for Results.
            </h1>
            <h2 className="text-xl md:text-4xl mt-12 font-bold">
              Veteran-Owned. Mission-Focused.
            </h2>

            <p className="max-w-2xl text-lg mt-6">
              After serving as an Army Ranger, I started AyeZee Web Designs with
              the same principles that got me through every mission—strategy,
              precision, and execution. In a world filled with overpriced
              agencies and cookie-cutter templates, I set out to do things
              differently.
            </p>

            <p className="max-w-2xl text-lg mt-6">
              We create clean, high-performance websites that help businesses
              grow—without the headaches. We keep it simple: clear pricing,
              direct communication, and websites that actually deliver.
            </p>

            <h2 className="text-4xl mt-12 font-semibold">Why work with us</h2>

            <ul className="max-w-2xl mt-6 flex text-lg flex-col gap-4">
              <li className=" flex items-start gap-3">
                <Star className="fill-white stroke-indigo-600" size={24} />{" "}
                Straight Shooter Approach – No jargon, no nonsense. Just clear,
                honest web development.
              </li>

              <li className=" flex items-start gap-3">
                <Star className="fill-white stroke-indigo-600" size={24} />{" "}
                Veteran-Owned, Mission-Driven – We apply military-level
                precision to every project.
              </li>

              <li className=" flex items-start gap-3">
                <Star className="fill-white stroke-indigo-600" size={24} />{" "}
                Results That Matter – We don’t just build sites—we build
                solutions that help businesses grow.
              </li>
            </ul>
          </div>
          <div className="flex-1 max-h-[50vh] relative">
            <Image
              src="/images/about.jpg"
              alt="office"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>

      <SimpleFeaturesBanner />

      <CallToAction />
    </>
  );
}
