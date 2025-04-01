import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="container">
      <div className="pt-16">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-20 mb-16 md:mb-0">
          <div className="flex flex-col flex-1">
            <h2
              className="text-6xl md:text-8xl font-bold"
              style={{
                lineHeight: "1.3",
              }}
            >
              Let&apos;s work together
            </h2>
          </div>
          <div className="flex flex-col items-start flex-1 gap-8">
            <p className="text-lg">
              Ready to take your business online or improve your current
              website? Let&apos;s build something that works for you.
            </p>
            <Button className="rounded-none px-6 py-5">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
