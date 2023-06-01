import React from "react";
import {
  AiFillHome,
  AiFillLock,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { MdPages } from "react-icons/md";

export const sidebarItem = [
  {
    id: 1,
    title: "dashboard",
    icon: <AiFillHome />,
    arrowDownIcon: <AiOutlineDown />,
    arrowUpIcon: <AiOutlineUp />,
    links: [
      {
        id: 1,
        name: "main dashboard",
      },
      {
        id: 2,
        name: "car interface",
      },
      {
        id: 3,
        name: "smart home",
      },
    ],
  },
  {
    id: 2,
    title: "nft",
    icon: <BsCart3 />,
    arrowDownIcon: <AiOutlineDown />,
    arrowUpIcon: <AiOutlineUp />,
    links: [
      {
        id: 1,
        name: "marketplace",
      },
      {
        id: 2,
        name: "nft page",
      },
    ],
  },
  {
    id: 3,
    title: "application",
    icon: <MdPages />,
    arrowDownIcon: <AiOutlineDown />,
    arrowUpIcon: <AiOutlineUp />,
    links: [
      {
        id: 1,
        name: "kanban",
      },
      {
        id: 2,
        name: "chart",
      },
    ],
  },
  {
    id: 4,
    title: "authentication",
    icon: <AiFillLock />,
    arrowDownIcon: <AiOutlineDown />,
    arrowUpIcon: <AiOutlineUp />,
    links: [
      {
        id: 1,
        name: "sign in",
      },
      {
        id: 2,
        name: "sign up",
      },
    ],
  },
];
