import Image from "next/image";
import { useState } from "react";

export default function SubscribeForm(props: {
  setSubmitted: (submitted: boolean) => void;
}) {
  const [email, setEmail] = useState("");

  return (
    <div className="flex bg-white rounded-[24px] p-6">
      <div className="flex flex-col w-1/2 justify-center mx-6 gap-y-4">
        <h1 className="text-nowrap text-[48px] font-[700] text-center">
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

        <div className="flex flex-col">
          <label htmlFor="email" className="text-[16px]">
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
            className="rounded-[8px] peer p-4 outline-strawberry bg-slate-100 mt-2"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>

          <button
            className="peer-invalid:pointer-events-none peer-invalid:opacity-80 rounded-[8px] bg-gradient-to-l text-white p-4 mt-4 shadow-lg hover:from-strawberry hover:to-tomato from-darkSlateGrey to-charcoalGrey"
            onClick={() => props.setSubmitted(true)}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
      <div className="flex w-1/2 justify-end">
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
