"use client";

import { Button } from "@/components/Button/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center items-center text-zinc-900 gap-2">
      <h1>Something went wrong :(</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
