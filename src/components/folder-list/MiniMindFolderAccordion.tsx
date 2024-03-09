"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { GetFoldersData } from "../../types/folder"

type FolderListElementProps = {
    foldersData: GetFoldersData,
}

export default function MiniMindFolderAccordion({foldersData}: FolderListElementProps) {
    const foldersList = foldersData.data
    return <Accordion type="single" collapsible className="w-full">
        {foldersList.map((folder, index) => {
          let itemValue = `item-${index + 1}`
            return (
              <AccordionItem value={itemValue}
                key={folder.id}>
                <AccordionTrigger>{folder.folderName}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
                <AccordionContent>Testing second content on accordion</AccordionContent>
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