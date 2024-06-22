import EditPhoneNumberDialog from "@/components/edit-phone-number-dialog";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Clock,
  CreditCard,
  Gift,
  House,
  Info,
  LucideIcon,
  Luggage,
  Phone,
} from "lucide-react";
import { LuArrowLeft } from "react-icons/lu";
import amex from '/public/images/amex.png'
import Image from "next/image";
import OrderSummaryAccordion from "@/components/order-summary-accordion";

export default function Home() {

  const cardNumber = "**** **** **** 1234".split(" ");

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Header
        label="Chiptole Mexican Grill"
        label2="Checkout"
      />
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
        allowArrow={true}
        textOnRight={<div className="flex gap-3">
          <Image
            src={amex}
            alt="American Express"
            width={40}
            height={40}
          />
          ...{cardNumber[3]}
          </div>}
      />
      <hr className="bg-border h-1.5 border-y border-secondary" />
      <OrderSummaryAccordion />
    </div>
  );
}

function DetailItem({
  label,
  label2,
  icon: Icon,
  icon2: Icon2,
  textOnRight,
  className,
  allowArrow = true
}: {
  label: string;
  label2?: string;
  icon: LucideIcon;
  icon2?: LucideIcon;
  textOnRight?: string | React.ReactNode;
  className?: string;
  allowArrow?: boolean;
}) {
  return (
    <div className="max-md:px-3.5">
      <div className={cn("flex justify-between items-center w-full cursor-pointer border-t pr-3 py-4", className)}>
        <div className="flex gap-5 items-center">
          <Icon className="w-6 h-6 text-muted" />
          <div className="flex flex-col">
            <p className="font-medium">{label}</p>
            {label2 && (
              <div className="flex gap-1 items-center">
                <p className="text-muted font-medium">{label2}</p>
                {Icon2 && <Icon2 className="text-muted w-3.5 h-3.5" />}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3">
        {
          textOnRight && <div className="font-medium">{textOnRight}</div> }

          {allowArrow && <ChevronRight className="w-6 h-6 text-muted" />
        }
        </div>
      </div>
    </div>
  );
}

function Header({
  label,
  label2
}: {
  label: string;
  label2: string;
}) {
  return <header className="flex px-2.5">
  <LuArrowLeft className="w-6 h-6 mt-4" />
  <div className="flex gap-y-1 justify-center py-2 items-center w-full flex-col">
    {label2 && <p className="text-muted-foreground font-bold">{label2}</p>}
    <h1 className="text-xl font-bold">{label}</h1>
  </div>
</header>
}