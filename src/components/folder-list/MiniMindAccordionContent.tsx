import { Nugget } from "@/src/types/folder";
import { AccordionContent } from "@radix-ui/react-accordion";
import { useState } from "react";

type MiniMindAccordionContentProps = {
    nugget: Nugget,
    key: string,
}
export default function MiniMindAccordionContent(
    { nugget, key }: MiniMindAccordionContentProps
) {
    const [isCopied, setIsCopied] = useState<boolean>(false)

    async function copyToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
          } else {
            return document.execCommand('copy', true, text);
          }
    }

    function handleCopy() {
        copyToClipboard(nugget.value)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 1000)
    }
    return (
            <AccordionContent key={key}>
                <div className='flex flex-row justify-between items-center border-b border-slate-200 py-3'>
                    <h4 className="text-md font-semibold">{nugget.key}</h4>
                    <h4 className="text-md">{nugget.value}</h4>
                    <button className="text-sm" onClick={handleCopy}>
                        {isCopied ? "Copied" : "Copy"}
                    </button>
                </div>
            </AccordionContent>
    )
}