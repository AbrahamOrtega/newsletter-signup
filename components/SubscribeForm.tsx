import Image from "next/image";
import { useState } from "react";

export default function SubscribeForm(props: {
  setSubmitted: (submitted: boolean) => void;
}) {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col lg:flex-row bg-white w-full lg:rounded-[24px] lg:p-6 lg:w-fit">
      <div className="lg:hidden flex max-w-[500px] mx-auto">
        <Image
          src={"/images/illustration-sign-up-mobile.svg"}
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="flex flex-col w-full max-w-[500px] px-8 mt-8 mx-auto lg:w-1/2 justify-center lg:px-0 lg:mx-6 lg:my-6 gap-y-6">
        <h1 className="text-nowrap text-[48px] font-[700] lg:text-center">
          Stay updated!
        </h1>
        <p className="text-[16px]">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col text-[16px] gap-y-2">
          <li className="flex gap-x-3">
            <Image
              src="/images/icon-list.svg"
              alt="Checkmark"
              width={20}
              height={20}
            />
            <span>Product discovery and building what matters</span>
          </li>
          <li className="flex gap-x-3">
            <Image
              src="/images/icon-list.svg"
              alt="Checkmark"
              width={20}
              height={20}
            />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li className="flex gap-x-3">
            <Image
              src="/images/icon-list.svg"
              alt="Checkmark"
              width={20}
              height={20}
            />
            <span>And much more</span>
          </li>
        </ul>

        <div className="flex flex-col relative">
          <label htmlFor="email" className="text-[14px]">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="rounded-[8px] peer p-4 outline-strawberry bg-slate-100 mt-2 invalid:bg-tomato/20 invalid:outline-tomato/50 invalid:text-tomato"
          ></input>
          <p className="absolute text-[14px] right-0 invisible peer-invalid:visible text-tomato">
            Valid email required
          </p>

          <button
            className="peer-invalid:pointer-events-none peer-invalid:opacity-80 rounded-[8px] bg-gradient-to-l text-white p-4 mt-8 shadow-lg hover:from-strawberry hover:to-tomato from-darkSlateGrey to-charcoalGrey"
            onClick={() => props.setSubmitted(true)}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 justify-end">
        <Image
          src="/images/illustration-sign-up-desktop.svg"
          alt="Newsletter signup"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
