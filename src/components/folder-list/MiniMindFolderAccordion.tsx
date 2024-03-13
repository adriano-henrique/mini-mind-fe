"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { GetFoldersData, GetMindData } from "../../types/folder"
import MiniMindAccordionContent from "./MiniMindAccordionContent"

type FolderListElementProps = {
    mindData: GetMindData,
}

export default function MiniMindFolderAccordion({mindData}: FolderListElementProps) {
    const mindResponse = mindData.data
    const folderNuggets = mindResponse.folderNuggets
    return <Accordion type="single" collapsible className="w-full">
        {folderNuggets.map((mind, index) => {
          let itemValue = `item-${index + 1}`
            return (
              <AccordionItem value={itemValue}
                key={mind.folderID}>
                <AccordionTrigger>{mind.folderName}</AccordionTrigger>
                {mind.nuggets.map((nugget, index) => {
                    let itemValue = `item-${index + 1}`
                    return (
                          <MiniMindAccordionContent nugget={nugget} key={itemValue} />
                    )})}
              </AccordionItem>
            )})
}
    </Accordion>

    // return (
    //         <Accordion type="single" collapsible className="w-full">
    //           <AccordionItem value="item-1">
    //             <AccordionTrigger>Is it accessible?</AccordionTrigger>
    //             <AccordionContent>
    //               Yes. It adheres to the WAI-ARIA design pattern.
    //             </AccordionContent>
    //           </AccordionItem>
    //           <AccordionItem value="item-2">
    //             <AccordionTrigger>Is it styled?</AccordionTrigger>
    //             <AccordionContent>
    //               Yes. It comes with default styles that matches the other
    //               components&apos; aesthetic.
    //             </AccordionContent>
    //           </AccordionItem>
    //           <AccordionItem value="item-3">
    //             <AccordionTrigger>Is it animated?</AccordionTrigger>
    //             <AccordionContent>
    //               Yes. It's animated by default, but you can disable it if you prefer.
    //             </AccordionContent>
    //           </AccordionItem>
    //         </Accordion>
    //       )
}