import { BiBuilding } from "react-icons/bi";
import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { RiNetflixFill } from "react-icons/ri";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { BsFillBusFrontFill, BsHandbag } from "react-icons/bs";

export const secondData = [
  {
    id: 1,
    icon: <BiBuilding className="text-xl text-blue-500" />,
    name: "Bill & Taxes",
    date: "Today, 16:36",
    amount: { value: "-$154.50" },
  },
  {
    id: 2,
    icon: <AiFillCar className="text-xl text-green-500" />,
    name: "Car Energy",
    date: "23 June, 13:06",
    amount: { value: "-$40.50" },
  },
  {
    id: 3,
    icon: <GiGraduateCap className="text-xl text-yellow-500" />,
    name: "Design Course",
    date: "21 June, 19:04",
    amount: { value: "-$70.00" },
  },
];

export const fourthData = [
  {
    id: 1,
    image:
      "https://horizon-ui.com/chakra-pro/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
    name: "From Alex Manda",
    date: "Today, 16:36",
    amount: {
      value: "+$50",
      class:
        "text-green-500 bg-green-50 dark:bg-[#21294c] px-3 py-1 rounded-xl",
    },
  },
  {
    id: 2,
    image:
      "https://horizon-ui.com/chakra-pro/static/media/avatar2.5692c39db4f8c0ea999e.png",
    name: "To Laura Santos",
    date: "Today, 8:49",
    amount: {
      value: "-$27",
      class: "text-red-500 bg-red-50 dark:bg-[#21294c] px-3 py-1 rounded-xl",
    },
  },
  {
    id: 3,
    image:
      "https://horizon-ui.com/chakra-pro/static/media/avatar3.9f646ac5920fa40adf00.png",
    name: "From Jadon S.",
    date: "Yesterday, 14:36",
    amount: {
      value: "+$157",
      class:
        "text-green-500 bg-green-50 dark:bg-[#21294c] px-3 py-1 rounded-xl",
    },
  },
  {
    id: 4,
    image:
      "https://horizon-ui.com/chakra-pro/static/media/avatar4.54d5c1de851c273b2cd9.png",
    name: "From Esthera J.",
    date: "Yesterday, 09:42",
    amount: {
      value: "+$92",
      class:
        "text-green-500 bg-green-50 dark:bg-[#21294c] px-3 py-1 rounded-xl",
    },
  },
];

export const transactionData = [
  {
    id: 1,
    icon: <BsFillBusFrontFill className="text-xl text-purple-800" />,
    name: "Public Transport",
    date: "22 September 2022",
    amount: { value: "-$15.50" },
  },
  {
    id: 2,
    icon: <BsHandbag className="text-xl text-green-500" />,
    name: "Grocery Store",
    date: "18 September 2022",
    amount: { value: "-$42.28" },
  },
  {
    id: 3,
    icon: <AiOutlineCar className="text-xl text-yellow-500" />,
    name: "Public Transport",
    date: "18 September 2022",
    amount: { value: "-$11.37" },
  },
  {
    id: 4,
    icon: <RiNetflixFill className="text-xl text-red-500" />,
    name: "Netflix",
    date: "12 September 2022",
    amount: { value: "-$34.90" },
  },
  {
    id: 5,
    icon: <FaGlassMartiniAlt className="text-xl text-blue-500" />,
    name: "Drink Store",
    date: "09 September 2022",
    amount: { value: "-$5.21" },
  },
];
