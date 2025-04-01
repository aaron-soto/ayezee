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
              Built with Precision. Designed to Deliver.
            </h1>
            <h2 className="text-xl md:text-4xl mt-12 font-bold">
              Veteran-Owned. Mission-Focused.
            </h2>

            <p className="max-w-2xl text-lg mt-6">
              After serving as an Army Ranger, I started AyeZee Web Designs with
              the same mindset that carried me through every mission—strategy,
              focus, and follow-through.
            </p>

            <p className="max-w-2xl text-lg mt-6">
              I’ve always believed in doing things right, especially when it
              comes to helping small businesses and creators. A lot of agencies
              overcharge and overcomplicate things. That’s not my style.
            </p>
            <p className="max-w-2xl text-lg mt-6">
              I work with craftsmen, creators, and small business owners to
              build websites that are clean, fast, and easy to use. Whether
              you’re selling products, promoting your brand, or just need a site
              that actually works—I’ve got you.
            </p>

            <h2 className="text-4xl mt-12 font-semibold">Why work with us</h2>

            <ul className="max-w-2xl mt-6 flex text-lg flex-col gap-4">
              <li className=" flex items-start gap-3">
                <Star className="fill-indigo-600 stroke-indigo-600" size={24} />{" "}
                No Fluff, No Jargon – You’ll always know what you’re getting,
                what it costs, and how it works.
              </li>

              <li className=" flex items-start gap-3">
                <Star className="fill-indigo-600 stroke-indigo-600" size={24} />{" "}
                I I Veteran-Owned – I bring a mission-first mindset to every
                project. Clear goals. Clear execution.
              </li>

              <li className=" flex items-start gap-3">
                <Star className="fill-indigo-600 stroke-indigo-600" size={24} />{" "}
                Built for Results – I don’t just build pretty sites. I build
                tools and workflows that help your business grow.
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
