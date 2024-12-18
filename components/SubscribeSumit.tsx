import Image from "next/image";

export default function SubscribeSumit(props: {
  setSubmitted: (submitted: boolean) => void;
}) {
  return (
    <div className="flex flex-col bg-white justify-between p-8 lg:p-12 lg:rounded-[24px] lg:max-w-[450px] gap-6">
      <div className="flex lg:hidden"></div>
      <div className="flex flex-col gap-4">
        <Image
          className="mb-4"
          src={"/images/icon-success.svg"}
          alt="success"
          width={64}
          height={64}
        />
        <h1 className="text-[48px] font-[700] leading-none">
          Thanks for subscribing!
        </h1>
        <p className="text-[16px] text-charcoalGrey">
          A confirmation email has been sent to{" "}
          <span className="text-darkSlateGrey font-[700]">
            ash@loremcompany.com.
          </span>{" "}
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <button
        className="bg-gradient-to-l hover:from-strawberry hover:to-tomato from-darkSlateGrey to-charcoalGrey text-white p-4 rounded-lg font-[700] mt-2"
        onClick={() => props.setSubmitted(false)}
      >
        Dismiss message
      </button>
    </div>
  );
}
