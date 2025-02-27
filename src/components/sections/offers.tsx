import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { OFFERS } from "@/data/offers";

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
      <AccordionTrigger className="flex items-center justify-start gap-3 hover:no-underline text-2xl py-5">
        <span className="mr-4 text-base">0{num}</span>
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
    <div className="container py-32">
      <h2 className="text-5xl text-center mb-12 font-extrabold max-w-3xl mx-auto">
        What we can do for you
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
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
