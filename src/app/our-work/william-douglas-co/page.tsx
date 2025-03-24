import { WORKS, Work } from "@/data/works";

import Image from "next/image";
import { bigShoudlers } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import williamDouglasLogo from "../../../../public/images/logos/william-douglas.svg";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const work = WORKS.find((work) => work.slug === "william-douglas-co") as Work;

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
          {work.title} - A Craftsmans Portfolio
        </h1>
        <div className="w-full h-[25vh] group md:h-[30vh] mb-6 md:mb-14 relative bg-[#004aac] rounded-2xl">
          <div className="size-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Image
              quality={100}
              src={williamDouglasLogo}
              alt="img-thumbnail"
              height={200}
              width={300}
              objectFit="contain"
              className="group-hover:drop-shadow-xl transition-all"
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
            I have worked with William Douglas on the Case Study Coffee Lounge
            website and he wanted to showcase his craftsmanship and portfolio.
            He also requested to have a website that was easy to navigate and
            people could get where they wanted quickly. We worked together to
            come up with a unique and custom navigation menu for his website.
          </p>
        </div>

        <Image
          quality={100}
          src="/images/works/william-douglas-co/1.png"
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
              Purpose After Sports had a wordpress website but they were having
              a hard time keeping up with placing and managing order and running
              their business. They needed a way to automate taking payments,
              sending out personalized questionairs for their workout and
              nutrition plans, and managing user accounts.
            </p>

            <ul>
              <li className="mb-6">
                <h3 className="text-xl font-bold">Wordpress Updates</h3>
                <p className="text-muted-foreground">
                  The client was having a hard time keeping up with the updates
                  that wordpress was requiring.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-bold">Manual Order Processing</h3>
                <p className="text-muted-foreground">
                  The client was manually sending out questionairs for their
                  workout and nutrition plans.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-bold">User Management</h3>
                <p className="text-muted-foreground">
                  The client was manually managing user order and needed a way
                  to automate this.
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
            We developed a website that is a strong foundation for their
            business to grow without having to worry about managing payments
            manually. We used Stripe for payments, Resend for emails, and
            Next.js for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports screenshots"
              src="/images/works/william-douglas-co/1.png"
            />
          </div>
          <div className="col-span-2 md:col-span-1 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports screenshots"
              src="/images/works/william-douglas-co/3.png"
            />
          </div>
          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports screenshots"
              src="/images/works/william-douglas-co/2.png"
            />
          </div>

          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports screenshots"
              src="/images/works/william-douglas-co/4.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
