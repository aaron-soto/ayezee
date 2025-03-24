import { WORKS, Work } from "@/data/works";

import Image from "next/image";
import { bigShoudlers } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import pasLogo from "../../../../public/images/logos/pas.svg";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const work = WORKS.find(
    (work) => work.slug === "purpose-after-sports"
  ) as Work;

  return (
    <>
      <div className="container mt-6">
        <span className={cn("font-black uppercase", bigShoudlers.className)}>
          Our Work
        </span>
        <h1
          className={cn(
            "font-black text-5xl md:text-6xl mb-6 uppercase",
            bigShoudlers.className
          )}
        >
          {work.title}: A Website That Runs Itself
        </h1>
        <div className="w-full h-[25vh] group md:h-[30vh] mb-6 md:mb-14 relative bg-[#ffde59] rounded-2xl">
          <div className="size-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Image
              quality={100}
              src={pasLogo}
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
            Purpose After Sports needed a way to handle payments automatically
            and start building their online presence. We built a site that gives
            them a solid base to grow without having to deal with manual payment
            processing by using Stripe SDK and a Postgres database to manage the
            products.
          </p>
        </div>

        <Image
          quality={100}
          src="/images/works/purpose-after-sports/1.jpg"
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
              They were using WordPress but struggling to keep things updated.
              Orders were handled manually, and user management was becoming a
              headache. They needed a better system.
            </p>

            <ul>
              <li className="mb-6">
                <h3 className="text-xl font-bold">Wordpress Updates</h3>
                <p className="text-muted-foreground">
                  Keeping up with WordPress updates was time-consuming and
                  getting in the way.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-bold">Manual Order Processing</h3>
                <p className="text-muted-foreground">
                  Workout and nutrition plans were being sent out manually, one
                  by one.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-bold">User Management</h3>
                <p className="text-muted-foreground">
                  Every user order was tracked by hand, which wasn’t sustainable
                  at scale.
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
          <div className="flex flex-col flex-1">
            <p className="mb-4">
              We built a custom site that automates payments and product
              delivery. Stripe handles transactions, and customers automatically
              receive the right emails and forms after checkout.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              <li>
                <strong>Workout Plans</strong> A PDF that the client created to
                be sent to the customer as a PDF.
              </li>
              <li>
                <strong>Nutrition Plans</strong> PDFs that would be sent to the
                customer after they completed a questionaire on their website
                about their nutrition goals.
              </li>
              <li>
                <strong>Merch</strong> Physical items with flat shipping and
                size options. They also wanted a free shipping code for the
                athletes that worked out at their gym.
              </li>
            </ul>

            <p className="mb-4">
              We used a PostgreSQL database to manage product data. Stripe was
              already familiar to them, so we stuck with it and built a custom
              checkout using Stripe’s API. We set up a webhook in our Next.js
              app to listen for Stripe events and trigger emails when payments
              succeed.
            </p>
            <p className="mb-4">
              A custom cart was built using Zustand for state management. This
              let us manage product selection and checkout flow without external
              dependencies.
            </p>

            <p className="mb-4">
              They also had a collection of unlisted YouTube videos they wanted
              to share. We built a page to display those embeds and added a
              search bar that filters the playlist.
            </p>

            <p className="mb-4">
              Lastly, we gave them a Canva template with exact dimensions for
              product images so they could create visuals that fit perfectly in
              the layout.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports main screenshot"
              src="/images/works/purpose-after-sports/1.jpg"
            />
          </div>
          <div className="col-span-2 md:col-span-1 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports cart screenshots"
              src="/images/works/purpose-after-sports/3.jpg"
            />
          </div>
          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports merch page screenshots"
              src="/images/works/purpose-after-sports/2.jpg"
            />
          </div>

          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="purpose after sports resources page and training programs screenshots"
              src="/images/works/purpose-after-sports/4.jpg"
            />
          </div>

          <div className="col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden">
            <Image
              quality={100}
              fill
              className="object-cover"
              alt="exercise library screenshots"
              src="/images/works/purpose-after-sports/5.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
