"use client";

import { Button } from "./ui/button";

export default function StickedBottomButton({
  content,
}: {
  content: React.ReactNode;
}) {
  return (
      <div className="p-3 flex w-full bg-background fixed bottom-0 border-t mx-auto max-w-3xl">
      <Button onClick={() => {}} className="flex w-full">
        {content}
      </Button>
    </div>
  );
}
