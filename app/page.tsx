import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>My accordion</AccordionTrigger>
    <AccordionContent>
      Yes. this an accordion content.
    </AccordionContent>
    <AccordionContent>
      Yes. this an accordion content.
    </AccordionContent>
    <AccordionContent>
      Yes. this an accordion content.
    </AccordionContent>
    <AccordionContent>
      Yes. this an accordion content.
    </AccordionContent>
  </AccordionItem>
</Accordion>
  );
}
