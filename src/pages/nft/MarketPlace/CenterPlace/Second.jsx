import { data } from "../data";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Second = () => {
  const [index, setIndex] = useState(0);
  const [totalCard, setTotalCard] = useState(3);

  const handleResize = () => {
    if (window.innerWidth <= 767 && window.innerWidth >= 577) {
      setTotalCard(2);
    } else if (window.innerWidth <= 576) {
      setTotalCard(1);
    } else {
      setTotalCard(3);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setIndex(index > 0 ? index - 1 : 0);
  };

  const handleNext = () => {
    setIndex(index < data.length - 3 ? index + 1 : data.length - 3);
    s;
  };

  return (
    <div className={`flex gap-5 relative`}>
      {index !== 0 && (
        <button
          onClick={() => {
            handlePrev();
          }}
          className="absolute rounded-full bg-white dark:bg-[#21294c] dark:text-white shadow-xl p-2 top-1/2"
        >
          <BsArrowLeft />
        </button>
      )}
      {data.slice(index, index + totalCard).map((items) => {
        return <Card key={items.id} {...items} />;
      })}
      {index < data.length - totalCard && (
        <button
          onClick={() => {
            handleNext();
          }}
          className="absolute rounded-full bg-white dark:bg-[#21294c] dark:text-white shadow-xl p-2 top-1/2 right-0"
        >
          <BsArrowRight />
        </button>
      )}
    </div>
  );
};

export default Second;
