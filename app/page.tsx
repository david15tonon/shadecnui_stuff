import Image from "next/image";
import react from "react";
import {

  Accordion,  AccordionHeader,  AccordionItem,  AccordionPanel,  AccordionWrapper,
} from '@/components/ui/accordion';

import { Plus } from 'lucide-react';

export default function Home() {
  return (<Accordion defaultValue={['item-1']} multiple>
  <AccordionItem value='item-1'>
    <AccordionHeader>Voici le header de mon accordion 1</AccordionHeader>
    <AccordionPanel>Voici le contenu: lormzyzefyz
      zeyzfyzfgfgef efzbbzuyefez efzvfuzvfzvfe efzvfvz
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value='item-2'>
    <AccordionHeader> Voici le header de mon accordion 2</AccordionHeader>
    <AccordionPanel>Voici le contenu: lormzyzefyz
      zeyzfyzfgfgef efzbbzuyefez efzvfuzvfzvfe efzvfvz</AccordionPanel>
  </AccordionItem>
  <AccordionItem value='item-3'>
    <AccordionHeader> Voici le header de mon accordion 3</AccordionHeader>
    <AccordionPanel>Voici le contenu: lormzyzefyz
      zeyzfyzfgfgef efzbbzuyefez efzvfuzvfzvfe efzvfvz</AccordionPanel>
  </AccordionItem>
</Accordion>
  );
}
