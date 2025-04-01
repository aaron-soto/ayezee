import { WORKS, Work } from "@/data/works";

import Image from "next/image";
import { bigShoudlers } from "@/lib/fonts";
import caseStudyLogo from "../../../../public/images/logos/case-study-coffee-lounge.svg";
import { cn } from "@/lib/utils";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const work = WORKS.find(
    (work) => work.slug === "case-study-coffee-lounge"
  ) as Work;

  return (
    <>
      <div className="container mt-16">
        <span className={cn("font-black uppercase", bigShoudlers.className)}>
          Our Work
        </span>
        <h1
          className={cn(
            "font-black text-5xl md:text-6xl mb-6 uppercase",
            bigShoudlers.className
          )}
        >
          {work.title}: Dynamic Event Schedule
        </h1>
        <div className="w-full h-[25vh] group md:h-[30vh] mb-6 md:mb-14 relative bg-[#000000] rounded-2xl">
          <div className="size-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Image
              quality={100}
              src={caseStudyLogo}
              alt="img-thumbnail"
              height={200}
              width={300}
              objectFit="contain"
              className="group-hover:drop-shadow-xl transition-all bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="container mb-14">
        <div className="bg-neutral-300 w-full h-[1px] my-12"></div>

        <div className="flex flex-col md:flex-row md:gap-6 w-full">
          <h1
            className={cn(
              "text-[42px] mb-4 md:w-[30vw] uppercase font-black",
              bigShoudlers.className
            )}
          >
            About the project
          </h1>
          <p className="mb-4 flex-1 text-muted-foreground">
            Case Study Coffee Lounge is a coffee shop in Phoenix Arizona. They
            wanted a website that would showcase their coffee shop as well as
            provide information for their customers. We built a website that
            shows the vibe of being inside the coffee shop and the unique
            experience that it offers. We also built a custom event schedule
            that they can update themselves.
          </p>
        </div>

        <Image
          quality={100}
          src="/images/works/case-study-coffee-lounge/1.jpg"
          alt="img"
          width={800}
          height={1000}
          className="w-full rounded-2xl mt-12 mb-8 md:mb-32 inline-block"
        />

        <div className="flex flex-col md:flex-row md:gap-6 w-full">
          <h1
            className={cn(
              "text-[42px] mb-4 md:w-[30vw] uppercase font-black",
              bigShoudlers.className
            )}
          >
            The Problem
          </h1>
          <div className="flex flex-1 flex-col">
            <p className="mb-6 text-muted-foreground">
              William douglas was looking to give his new company a strong
              online presence. He came to AyeZee Web Designs to help him show
              his customers what events they are hosting at the shop and show
              their up to date hours.
            </p>

            <ul>
              <li className="mb-6">
                <h3 className="text-xl font-bold">Event Schedule</h3>
                <p className="text-muted-foreground">
                  Case Study needed a way to show their customers what events
                  they are hosting at the shop.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-bold">Dynamic Store Hours</h3>
                <p className="text-muted-foreground">
                  As a newer coffee shop, their hours were changing frequently
                  and they needed a way to update their hours on the website.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-200/80 w-full h-[1px] mt-12 mb-24"></div>

        <div className="flex flex-col md:flex-row md:gap-6 w-full mb-12">
          <h1
            className={cn(
              "text-[42px] mb-4 md:w-[30vw] uppercase font-black",
              bigShoudlers.className
            )}
          >
            Solution
          </h1>
          <p className="mb-4 flex-1">
            We built a custom event schedule that they can update themselves.
            This website gives off the vibe of actually being in the coffee
            shop. This website is a beautiful representation of the coffee shop
            and the functionality of the events schedule and store hours makes
            it easy for customers to see what is going on at the shop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports screenshots"
              src="/images/works/case-study-coffee-lounge/1.jpg"
            />
          </div>
          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports screenshots"
              src="/images/works/case-study-coffee-lounge/2.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
