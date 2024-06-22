"use client";

import { Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus, FaTrash } from "react-icons/fa6";
import { Button } from "./ui/button";

import BurritoBowl from "/public/images/burrito-bowl.png";
import Image from "next/image";

export default function OrderSummaryAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 max-md:pl-3.5">
      <div className="flex justify-between w-full pr-[1rem]">
        <div className="flex gap-5">
          <ShoppingCart className="w-6 h-6 text-muted" />
          <p className="font-medium">Order Summary (1 Items)</p>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaChevronDown className="w-4 h-4 text-muted" />
          ) : (
            <FaChevronUp className="w-4 h-4 text-muted" />
          )}
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="flex justify-between items-center w-full pt-3">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Items
            </h3>
            <Button
              variant="secondary"
              className="font-bold text-[16px] gap-2.5 mr-3"
            >
              <Plus /> Add more items
            </Button>
          </div>
          <div className="flex gap-2 w-full max-md:flex-col">
            <Image src={BurritoBowl} width={150} height={150} alt="Phone" />
            <div className="flex flex-col gap-y-3 max-md:mr-2">
              <div className="flex gap-y-2 flex-col">
                <p className="font-medium text-xl">Burrito Bowl</p>
                <p className="text-muted font-medium truncate-2-lines overflow-hidden text-ellipsis">
                  Steak, Roasted Chili-Corn Salsa, Tomatillo-Green Chili Salsa,
                  Cheese, Guacamole, Lettuce
                </p>
              </div>
              <p className="text-xl font-medium">$22.95</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full shadow-md bg-input flex gap-2 items-center">
                <Button
                  size="icon"
                  className="bg-background hover:bg-background/50"
                >
                  <FaTrash className="text-foreground" />
                </Button>
                <p className="font-extrabold">1x</p>
                <Button
                  size="icon"
                  className="bg-background hover:bg-background/50"
                >
                  <FaPlus className="text-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
