import EditPhoneNumberDialog from "@/components/edit-phone-number-dialog";
import {
  Clock,
  CreditCard,
  Gift,
  House,
  Info,
  Luggage,
  Phone,
} from "lucide-react";
import amex from "/public/images/amex.png";
import Image from "next/image";
import OrderSummaryAccordion from "@/components/order-summary-accordion";
import StickedBottomButton from "@/components/sticked-bottom-button";
import { SlTag } from "react-icons/sl";
import Header from "@/components/header";
import DetailItem from "@/components/detail-item";
import { cn } from "@/lib/utils";
import Price from "@/components/price";

export default function Home() {
  const cardNumber = "**** **** **** 1234".split(" ");

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Header label="Chiptole Mexican Grill" label2="Checkout" />
      <DetailItem
        label="Delivery Time"
        icon={Clock}
        textOnRight="17-27 min"
        allowArrow={false}
      />
      <DetailItem
        label="150 Van Ness Ave #808"
        label2="San Francisco, CA 94102, USA"
        icon={House}
      />
      <DetailItem
        label="Leave it at my door"
        label2='"Apt 808. Ask frontdesk to be sent up"'
        icon={Luggage}
      />
      <EditPhoneNumberDialog
        phoneNumber={{
          countryCode: "+1 (US)",
          number: "(949) 565-5311",
        }}
      >
        <DetailItem label="(949) 565-5311" icon={Phone} />
      </EditPhoneNumberDialog>
      <DetailItem
        label="Send as a gift"
        label2="Learn more"
        icon={Gift}
        icon2={Info}
      />
      <hr className="bg-border h-1.5 border-b border-secondary" />
      <DetailItem
        label="Payment"
        icon={CreditCard}
        textOnRight={
          <div className="flex gap-3">
            <Image src={amex} alt="American Express" width={40} height={40} />
            ...{cardNumber[3]}
          </div>
        }
      />
      <hr className="bg-border h-1.5 border-y border-secondary" />
      <OrderSummaryAccordion />
      <DetailItem
        label="Promo codes, rewards, & gift cards"
        icon={SlTag}
        className="border-b"
      />
      <div className="py-2 px-4">
        <Price price={22.95} label="Subtotal" />
        <Price price={3.99} newPrice={0} priceInfo label="Delivery Fee" />
        <Price
          price={5.42}
          newPrice={3.97}
          priceInfo
          label="Fees & Estimated Tax"
        />
      </div>
      <Price
        price={5.5}
        className="border-t mb-20 px-4"
        label="Dasher Tip"
        options={[4.5, 5.5, 6.5, "Other"]}
      />
      <StickedBottomButton
        content={
          <div className="flex justify-between w-full px-3">
            <p className="font-bold">Place Order</p>
            <p className="font-bold">$32.42</p>
          </div>
        }
      />
    </div>
  );
}
