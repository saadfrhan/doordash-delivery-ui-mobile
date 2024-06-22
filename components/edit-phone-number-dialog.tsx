"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import SelectComponent from "./select-component";
import { useState } from "react";
import { toast } from "sonner";

export default function EditPhoneNumberDialog({
  children,
  phoneNumber: _phoneNumber,
}: {
  children: React.ReactNode;
  phoneNumber: {
    countryCode: string;
    number: string;
  };
}) {
  const [countryCode, setCountryCode] = useState(_phoneNumber.countryCode);
  const [phoneNumber, setPhoneNumber] = useState(_phoneNumber.number);

  const normalizeInput = (value: string, previousValue: string) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
  };

  const validateInput = (value: string) => {
    let error = ""
    console.log(value)
    if (!value) error = "Required!"
    else if (value.length < 14) error = "Invalid phone format. ex: (555) 555-5555";
    else if (value.length !== 14) error = "Invalid phone format. ex: (555) 555-5555";

    return {error};
  };

  const onSubmit = () => {
    const isNumberValid = validateInput(phoneNumber).error;
    if (isNumberValid) return toast.error(isNumberValid);
    else {
      toast.success("Phone number updated successfully!");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
              Edit phone number
            </h2>
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="py-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-y-1.5">
              <p className="font-bold scroll-m-20 text-[16px] tracking-tight">Country</p>
            <SelectComponent
              placeholder={countryCode}
              onValueChange={(value) => setCountryCode(value)}
              values={[
                {
                  group: 1,
                  values: ["+1 (US)", "+44 (UK)", "+55 (BR)", "+81 (JP)"],
                },
              ]}
            />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <p className="font-bold scroll-m-20 text-[16px] tracking-tight">Phone Number</p>
            <Input
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(prev => normalizeInput(e.target.value, prev)!)}
            />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              variant="secondary"
              className="font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="secondary"
            disabled={_phoneNumber.number === phoneNumber}
            className="font-bold"
            onClick={onSubmit}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
