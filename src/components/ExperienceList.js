import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function ExperienceList() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Green Energy Advice Bureau</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="text-left">
              <p className="pb-4">2012</p>
              <h3 className="mb-4">BA Hons - Graphic Design</h3>
              <p className="font-nunito">Manchester Metropolitan University. School of Art.</p>
              <ul className="columns-2">
                <li>
                  <p>Art Direction</p>
                </li>
                <li>
                  <p>Art Direction</p>
                </li>
                <li>
                  <p>Art Direction</p>
                </li>
                <li>
                  <p>Art Direction</p>
                </li>
              </ul>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div >
  )
}