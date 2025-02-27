import { Quiz } from "@/app/does-my-site-suck/quiz";

export default function Page() {
  return (
    <div>
      <div className="container mt-8 pb-8 md:pb-14">
        <h1 className="text-3xl md:text-5xl md:mb-4 text-center font-black">
          Website Checkup
        </h1>
        <p className="text-center mx-4 text-base">
          Get a free website checkup to see how your website is performing.
        </p>

        <Quiz />
      </div>
    </div>
  );
}
