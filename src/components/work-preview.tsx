import Image from "next/image";
import Link from "next/link";
import { Work } from "@/data/works";
import { cn } from "@/lib/utils";

export const WorkPreview = ({
  featured,
  work,
}: {
  featured?: boolean;
  work: Work;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col",
        !featured ? "w-full md:w-[calc(50%-40px)]" : "basis-full"
      )}
    >
      <Link
        href={`/our-work/${work.slug}`}
        className={cn(
          " w-full relative hover:shadow-lg transition-all shadow-black duration-200",
          featured ? "h-[250px] md:h-[450px]" : "h-[250px] md:h-[350px]"
        )}
      >
        <Image
          src={work.image}
          alt="img-thumbnail"
          layout="fill"
          quality={100}
          objectFit="cover"
        />
      </Link>
      <Link href={`/our-work/${work.slug}`}>
        <h3 className="text-current text-2xl font-semibold mt-6">
          {work.title}
        </h3>
      </Link>
      <p className="text-lg text-current opacity-60">{work.shortDesc}</p>
      <div className="flex gap-5 text-current opacity-45 mt-4">
        <span className="text-sm">Web Development</span>
        <span className="text-sm">Logo & Branding</span>
      </div>
    </div>
  );
};
