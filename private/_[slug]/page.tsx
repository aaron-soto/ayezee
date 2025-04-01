import { ArrowLeft, ArrowRight } from "lucide-react";
import { WORKS, Work } from "@/data/works";

import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/sections/call-to-action";
import Image from "next/image";
import Link from "next/link";
import { SimpleFeaturesBanner } from "@/components/sections/simple-features";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const work = WORKS.find((work) => work.slug === slug) as Work;

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <>
      <div className="container">
        <div className="w-full h-[20vh] md:h-[40vh] md:my-14 relative">
          <Image
            src={work.image}
            alt="img-thumbnail"
            quality={100}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 relative min-h-screen text-lg">
          {/* Main Content */}
          <div className="flex flex-col max-w-3xl flex-1 mb-24">
            <div className="text-3xl md:text-5xl font-bold mb-8">
              {work.title}
            </div>
            <p className="mb-6">
              I had the honor of working with William Douglas who opened a new
              coffee shop in Phoenix, Arizona. He wanted a website that would
              showcase his coffee shop and the unique experience that it offers.
              I designed a website that was modern and easy to navigate. The
              website was designed to be responsive and mobile-friendly.
            </p>
            <p className="mb-6">
              We went through a few iterations of feedback on the initial design
              but worked together and have come up with a design that shows off
              the shop&apos;s warm and inviting atmosphere.
            </p>

            <Image
              src={`/images/works/full-screenshots/${work.slug}.jpeg`}
              alt="img"
              width={800}
              height={1000}
              quality={100}
              style={{
                borderRadius: "10px",
                marginBottom: "35px",
              }}
            />

            {work.challenge && (
              <>
                <h2 className="mb-4 text-3xl font-bold">Challenges</h2>
                {work.challenge.map((challenge, idx) => (
                  <p key={idx} className="mb-4">
                    {challenge}
                  </p>
                ))}
              </>
            )}

            {work.features && (
              <>
                <h2 className="mb-4 text-3xl font-bold">Features</h2>
                {work.features.map((feature, idx) => (
                  <p key={idx} className="mb-4">
                    {feature}
                  </p>
                ))}
              </>
            )}

            {work.results && (
              <>
                <h2 className="mb-4 text-3xl font-bold">Results</h2>
                {work.results.map((result, idx) => (
                  <p className="mb-4" key={idx}>
                    {result}
                  </p>
                ))}
              </>
            )}

            <div className="flex w-full mt-14">
              {work.idx > 0 && (
                <Button className="text-lg rounded-none px-6 py-5" asChild>
                  <Link href={`/our-work/${WORKS[work.idx - 1]?.slug}`}>
                    <ArrowLeft size={24} /> Previous Project
                  </Link>
                </Button>
              )}

              {work.idx < WORKS.length - 1 && (
                <Button
                  className="text-lg rounded-none ml-auto px-6 py-5"
                  asChild
                >
                  <Link href={`/our-work/${WORKS[work.idx + 1]?.slug}`}>
                    Next Project <ArrowRight size={24} />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Sticky Section */}
          <div className="w-64 flex-shrink-0 mb-6 md:mb-0">
            <div className="sticky top-4 md:border-l-2 md:pl-4 mt-6 md:mt-2">
              <h2 className="text-2xl font-semibold">Client</h2>
              <div className="mb-4 md:mb-8 text-muted-foreground">
                Case Study Coffee Lounge
              </div>

              <h2 className="text-2xl font-semibold">Date</h2>
              <p className="mb-4 md:mb-8 text-muted-foreground">August 2021</p>

              <h2 className="text-2xl font-semibold">Type of work</h2>
              <p className="mb-4 md:mb-8 text-muted-foreground">
                {work.tags?.join(", ")}
              </p>

              <h2 className="text-2xl font-semibold mb-4">Links</h2>
              <Link
                href={work.website}
                className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
              >
                View Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SimpleFeaturesBanner />
      <CallToAction />
    </>
  );
}
