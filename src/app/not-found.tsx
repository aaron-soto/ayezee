import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container text-center">
      <h1 className="text-[164px] md:text-[30vh] font-extrabold max-w-screen">
        404
      </h1>
      <h2 className="text-4xl font-extrabold mb-3">Look Like You’re Lost</h2>
      <p
        className="
        text-lg"
      >
        The link you followed is probably broken or the page has been removed
      </p>
      <Button asChild className="rounded-none text-base mt-8 py-6 px-8">
        <Link
          scroll={false}
          href="/"
          className="flex items-center justify-center"
        >
          Back to Home <Home size={24} className="ml-2" />
        </Link>
      </Button>
    </div>
  );
}
