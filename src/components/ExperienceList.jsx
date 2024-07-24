import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ExperienceList() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="text-left">
              <p className="pb-4">2020 - 2022</p>
              <h3 className="mb-4">Green Energy Advice Bureau</h3>
              <p className="font-nunito">
                Lead Front End Developer & UI Designer
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-4">
              I spent three years immersed in the world of design and visual
              communication. The prestigeous course challenges budding designers
              to develop their own way of approaching design briefs.
            </p>
            <p className="pb-4">
              I layed the foundations for my design practice, developing skills
              in Typography, Editorial Layout, Animation and Photography.
            </p>
            <p className="pb-4">
              Eventually I gravitated towards digital design and what it means
              to have users, rather than an audience. I discovered User
              Interface Design and leared to write code to realise my designs.
              This culminated in writing my disseration in Human-Computer
              Interaction, then entering the workforce as a Front End Web
              Developer.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="text-left">
              <p className="pb-4">2019 - 20200</p>
              <h3 className="mb-4">Gene Commerce</h3>
              <p className="font-nunito">Front End Developer</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-4">
              I spent three years immersed in the world of design and visual
              communication. The prestigeous course challenges budding designers
              to develop their own way of approaching design briefs.
            </p>
            <p className="pb-4">
              I layed the foundations for my design practice, developing skills
              in Typography, Editorial Layout, Animation and Photography.
            </p>
            <p className="pb-4">
              Eventually I gravitated towards digital design and what it means
              to have users, rather than an audience. I discovered User
              Interface Design and leared to write code to realise my designs.
              This culminated in writing my disseration in Human-Computer
              Interaction, then entering the workforce as a Front End Web
              Developer.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="text-left">
              <p className="pb-4">2017 - 2019</p>
              <h3 className="mb-4">Liverpool Football Club</h3>
              <p className="font-nunito">Front End Developer & UI Designer</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-4">
              I spent three years immersed in the world of design and visual
              communication. The prestigeous course challenges budding designers
              to develop their own way of approaching design briefs.
            </p>
            <p className="pb-4">
              I layed the foundations for my design practice, developing skills
              in Typography, Editorial Layout, Animation and Photography.
            </p>
            <p className="pb-4">
              Eventually I gravitated towards digital design and what it means
              to have users, rather than an audience. I discovered User
              Interface Design and leared to write code to realise my designs.
              This culminated in writing my disseration in Human-Computer
              Interaction, then entering the workforce as a Front End Web
              Developer.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="text-left">
              <p className="pb-4">2013 - 2017</p>
              <h3 className="mb-4">Amaze</h3>
              <p className="font-nunito">Front End Developer</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-4">
              I spent three years immersed in the world of design and visual
              communication. The prestigeous course challenges budding designers
              to develop their own way of approaching design briefs.
            </p>
            <p className="pb-4">
              I layed the foundations for my design practice, developing skills
              in Typography, Editorial Layout, Animation and Photography.
            </p>
            <p className="pb-4">
              Eventually I gravitated towards digital design and what it means
              to have users, rather than an audience. I discovered User
              Interface Design and leared to write code to realise my designs.
              This culminated in writing my disseration in Human-Computer
              Interaction, then entering the workforce as a Front End Web
              Developer.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="text-left">
              <p className="pb-4">2012</p>
              <h3 className="mb-4">
                Manchester Metropolitan University. School of Art.
              </h3>
              <p className="font-nunito">Graphic Design (BA HONS)</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-4">
              I spent three years immersed in the world of design and visual
              communication. The prestigeous course challenges budding designers
              to develop their own way of approaching design briefs.
            </p>
            <p className="pb-4">
              I layed the foundations for my design practice, developing skills
              in Typography, Editorial Layout, Animation and Photography.
            </p>
            <p className="pb-4">
              Eventually I gravitated towards digital design and what it means
              to have users, rather than an audience. I discovered User
              Interface Design and leared to write code to realise my designs.
              This culminated in writing my disseration in Human-Computer
              Interaction, then entering the workforce as a Front End Web
              Developer.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
