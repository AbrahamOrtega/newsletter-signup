import SubscribeForm from "@/components/SubscribeForm";
import SubscribeSumit from "@/components/SubscribeSumit";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-charcoalGrey justify-center items-center">
      {submitted ? (
        <SubscribeSumit setSubmitted={setSubmitted} />
      ) : (
        <SubscribeForm setSubmitted={setSubmitted} />
      )}
    </div>
  );
}
