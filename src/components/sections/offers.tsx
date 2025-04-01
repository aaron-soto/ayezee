import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { OFFERS } from "@/data/offers";
import { Star } from "lucide-react";

const OfferItem = ({
  title,
  content,
  num,
}: {
  title: string;
  content: string;
  num: number;
}) => {
  return (
    <AccordionItem value={`item-${num}`}>
      <AccordionTrigger className="flex items-center justify-start gap-3 hover:no-underline text-xl py-5 group">
        <span className="mr-2 text-base">
          <Star className="w-6 h-6 text-[#1601ac] fill-current" />
        </span>
        <span className="mr-auto">
          <strong>{title}</strong>
        </span>
      </AccordionTrigger>
      <AccordionContent className="text-lg">{content}</AccordionContent>
    </AccordionItem>
  );
};

export const Offers = () => {
  return (
    <div className="container py-20 md:py-32">
      <h2 className="text-5xl text-center mb-12 font-extrabold max-w-3xl mx-auto">
        How We Help
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-2xl mx-auto"
        defaultValue="item-1"
      >
        {OFFERS.map((offer, idx) => (
          <OfferItem
            key={offer.id}
            num={idx + 1}
            title={offer.title}
            content={offer.content}
          />
        ))}
      </Accordion>
    </div>
  );
};
