import { AiFillPrinter } from "react-icons/ai"
import { MdStorefront } from "react-icons/md"
import { FaComputer } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { RiPaintFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa6";
import { GiUsbKey } from "react-icons/gi";



export const categories = [
    {
        label: 'All',
        icon: MdStorefront
    },
    {
        label: 'Printer',
        icon: AiFillPrinter
    },
    {
        label: 'Komputer',
        icon: FaComputer
    },
    {
        label: 'Laptop',
        icon: FaLaptop
    },
    {
        label: 'Tinta',
        icon: RiPaintFill
    },
    {
        label: 'Kertas',
        icon: FaNewspaper
    },
    {
        label: 'USB',
        icon: GiUsbKey
    },
]