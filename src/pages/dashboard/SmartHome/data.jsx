import { AiOutlineBulb, AiOutlineWifi } from "react-icons/ai";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";

export const data = [
  {
    id: 1,
    icon: <MdOutlineSevereCold />,
    name: "Air Conditioner",
  },
  {
    id: 2,
    icon: <AiOutlineWifi />,
    name: "Wifi",
  },
  {
    id: 3,
    icon: <FaTemperatureHigh />,
    name: "Thermostat",
  },
  {
    id: 4,
    icon: <AiOutlineBulb />,
    name: "Lights",
  },
];
