import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react"
import { FooterData } from "../data/FooterData"


export const Footer = () => {
  return (
    <div className="mt-16 pt-16 border-t border-gray-800 relative">
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
                <h1 className="tracking-tighter text-4xl font-SyneExtra">Convo</h1>
                <div className="flex flex-col gap-1">
                    {FooterData.legal.map((item, index) => (
                        <a key={index} href={"#"} className="text-gray-100 hover:text-gray-400">{item}</a>
                    ))}
                </div>
                <div className="flex gap-4">
                    <LinkedinIcon />
                    <Instagram />
                    <Facebook />
                    <Twitter />
                </div>
            </div>
            <div className="flex gap-8">
               {FooterData.links.map((item, index) => (
                     <div key={index} className="flex flex-col gap-2">
                          <h1 className="text-gray-100 text-lg font-SyneBold">{item.title}</h1>
                          <ul className="flex flex-col gap-1">
                            {item.items.map((item, index) => (
                                 <li key={index} className="text-gray-100 hover:text-gray-400 hover:cursor-pointer">{item}</li>
                            ))}
                          </ul>
                     </div>
                ))}
            </div>
        </div>
        <div className="flex justify-center items-center w-full h-full">
            <h1 className="text-[25vw] leading-none font-ExtraNeue uppercase pointer-events-none">Convo</h1>
        </div>
    </div>
  )
}
