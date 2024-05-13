import Image from "next/image";
import logo from "./logo.svg";
import cn from "classnames";

import { Be_Vietnam_Pro } from "next/font/google";
import { VectorDesignForCard } from "@/icons";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500",
});

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={cn(
        "text-white shadow-primary-button bg-gradient-primary-button",
        "flex py-[0.875rem] px-[1.625rem] justify-center items-center",
        "gap-[0.625rem] rounded-[0.625rem]",
        " font-semibold text-[1rem] tracking-tight",
        " hover:scale-[1.05] transition-transform duration-300 ease-in-out",
        beVietnamPro.className
      )}
    >
      {children}
    </button>
  );
}

export function Nav() {
  return (
    <>
      <div className="min-h-12 flex justify-between py-5 px-[6.5rem] w-full">
        <Image src={logo} alt="logo" width={113} />
        <div className="flex flex-row gap-1">
          <a
            className="px-[0.5rem] py-[0.25rem] cursor-pointer flex items-center"
            href="#features"
          >
            Features
          </a>
          <a
            className="px-[0.5rem] py-[0.25rem] cursor-pointer flex items-center"
            href="#product"
          >
            Product
          </a>
          <a
            className="px-[0.5rem] py-[0.25rem] cursor-pointer flex items-center"
            href="#testimony"
          >
            Testimony
          </a>
          <a
            className="px-[0.5rem] py-[0.25rem] cursor-pointer flex items-center"
            href="#faq"
          >
            FAQ
          </a>
        </div>
        <PrimaryButton>
          <span>Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.793 7.50001H2.5C2.36739 7.50001 2.24021 7.55268 2.14645 7.64645C2.05268 7.74022 2 7.8674 2 8.00001C2 8.13261 2.05268 8.25979 2.14645 8.35356C2.24021 8.44733 2.36739 8.50001 2.5 8.50001H11.793L8.146 12.146C8.05211 12.2399 7.99937 12.3672 7.99937 12.5C7.99937 12.6328 8.05211 12.7601 8.146 12.854C8.23989 12.9479 8.36722 13.0006 8.5 13.0006C8.63278 13.0006 8.76011 12.9479 8.854 12.854L13.354 8.35401C13.4006 8.30756 13.4375 8.25238 13.4627 8.19164C13.4879 8.13089 13.5009 8.06577 13.5009 8.00001C13.5009 7.93424 13.4879 7.86912 13.4627 7.80837C13.4375 7.74763 13.4006 7.69245 13.354 7.64601L8.854 3.14601C8.76011 3.05212 8.63278 2.99937 8.5 2.99937C8.36722 2.99937 8.23989 3.05212 8.146 3.14601C8.05211 3.23989 7.99937 3.36723 7.99937 3.50001C7.99937 3.63278 8.05211 3.76012 8.146 3.85401L11.793 7.50001Z"
              fill="white"
            />
          </svg>
        </PrimaryButton>
      </div>
    </>
  );
}

export function HeroSection() {
  return (
    <>
      <div className="min-h-[30rem] w-full relative overflow-clip">
        {/* hero section left */}
        <div className="ml-[6.5rem] my-[3.78rem] w-[47vw] space-y-[2.5rem]">
          <div className="space-y-[1.5rem]">
            <div className="font-semibold text-[4.35rem] tracking-[-0.125rem] leading-[normal]">
              <span className="text-[#FF4F00]">Transform Ideas</span> into apps
              with AI
            </div>
            <div className="text-[#374151] text-[1.11875rem] font-[600] leading-[2.10rem]">
              Step into a new era of strategic decision-making. Horizon empowers
              businesses in the marketing space with unparalleled
            </div>
          </div>
          <PrimaryButton>
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.793 7.50001H2.5C2.36739 7.50001 2.24021 7.55268 2.14645 7.64645C2.05268 7.74022 2 7.8674 2 8.00001C2 8.13261 2.05268 8.25979 2.14645 8.35356C2.24021 8.44733 2.36739 8.50001 2.5 8.50001H11.793L8.146 12.146C8.05211 12.2399 7.99937 12.3672 7.99937 12.5C7.99937 12.6328 8.05211 12.7601 8.146 12.854C8.23989 12.9479 8.36722 13.0006 8.5 13.0006C8.63278 13.0006 8.76011 12.9479 8.854 12.854L13.354 8.35401C13.4006 8.30756 13.4375 8.25238 13.4627 8.19164C13.4879 8.13089 13.5009 8.06577 13.5009 8.00001C13.5009 7.93424 13.4879 7.86912 13.4627 7.80837C13.4375 7.74763 13.4006 7.69245 13.354 7.64601L8.854 3.14601C8.76011 3.05212 8.63278 2.99937 8.5 2.99937C8.36722 2.99937 8.23989 3.05212 8.146 3.14601C8.05211 3.23989 7.99937 3.36723 7.99937 3.50001C7.99937 3.63278 8.05211 3.76012 8.146 3.85401L11.793 7.50001Z"
                fill="white"
              />
            </svg>
          </PrimaryButton>
        </div>
        {/* hero image to right */}
        <div className="absolute right-[-50px] top-[-30px] ">
          <Image src="/product.png" alt="hero image" width={500} height={600} />
        </div>
      </div>
    </>
  );
}

export function FeaturesSection() {
  return (
    <section className="space-y-[8rem]">
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="w-[31.3rem] space-y-[1.75rem]">
          <div className="text-[#1C1C1C] text-center text-[3.24375rem] font-[600] tracking-[-0.09375rem] leading-[3.575rem]">
            Explore the power of AI apps generation
          </div>
          <div className="text-[#374151] text-center text-[1.11875rem]">
            Unlock the full potential of your tech stack with Horizon&apos;s
            intuitive and Unlock the full potential of your tech stack with
            GenAI&rsquo;s intuitive and
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-[5rem]">
        <Image
          src="/phone.png"
          height={616}
          width={593}
          className="rounded-[1.25rem]"
          alt="a phone"
        />
        <div className="space-y-[1.5rem]">
          <div className="text-[3.23125rem] font-[600] leading-[3.4125rem] tracking-[-0.125rem]">
            <span className="text-[#FF4F00]">Unleash</span> the power of AI with
            GenAI
          </div>
          <div className="text-[#374151] text-[1.11875rem] font-[500] leading-[2.10rem]">
            Stay ahead of the curve with our Dynamic Trend Analysis feature.
            Unlock the full potential of your tech stack with Horizon&apos;s
            intuitive and Stay ahead of the curve with our Dynamic Trend
            Analysis feature. Unlock the full potential of your tech stack with
            Horizon&apos;s intuitive and
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-[5rem]">
        <div className="space-y-[1.5rem]">
          <div className="text-[3.23125rem] font-[600] leading-[3.4125rem] tracking-[-0.125rem]">
            <span className="text-[#FF4F00]">Unleash</span> the power of AI with
            GenAI
          </div>
          <div className="text-[#374151] text-[1.11875rem] font-[500] leading-[2.10rem]">
            Stay ahead of the curve with our Dynamic Trend Analysis feature.
            Unlock the full potential of your tech stack with Horizon&apos;s
            intuitive and Stay ahead of the curve with our Dynamic Trend
            Analysis feature. Unlock the full potential of your tech stack with
            Horizon&apos;s intuitive and
          </div>
        </div>
        <Image
          src="/phone1.png"
          height={616}
          width={593}
          className="rounded-[1.25rem]"
          alt="a phone"
        />
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-[5rem]">
        <Image
          src="/phone2.png"
          height={616}
          width={593}
          className="rounded-[1.25rem]"
          alt="a phone"
        />
        <div className="space-y-[1.5rem]">
          <div className="text-[3.23125rem] font-[600] leading-[3.4125rem] tracking-[-0.125rem]">
            <span className="text-[#FF4F00]">Unleash</span> the power of AI with
            GenAI
          </div>
          <div className="text-[#374151] text-[1.11875rem] font-[500] leading-[2.10rem]">
            Stay ahead of the curve with our Dynamic Trend Analysis feature.
            Unlock the full potential of your tech stack with Horizon&apos;s
            intuitive and Stay ahead of the curve with our Dynamic Trend
            Analysis feature. Unlock the full potential of your tech stack with
            Horizon&apos;s intuitive and
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardsSection() {
  return (
    <div className="space-y-[5rem]">
      <div className="flex items-center justify-center">
        <div className="w-[56.6rem] text-[3.23125rem] font-[600] leading-[3.4125rem] tracking-[-0.125rem]">
          <span className="text-[#FF4F00]">Essentially, </span>
          with everything you need to ship you first AI App
        </div>
      </div>
      {/* 3 grid */}
      <div className="grid grid-cols-3 gap-[2rem]">
        <div
          className={cn(
            "flex p-[1.5rem] pb-[2rem] flex-col items-start",
            "gap-[3rem] rounded-[1.625rem]",
            "border border-[#E5E7EB] bg-white shadow-[0px 4px 4px 0px #E8E8E8]"
          )}
        >
          <div className="space-y-[3rem]">
            <VectorDesignForCard />
            <div>
              <div className="text-[1.4875rem] font-[600]">Quality apps</div>
              <div className="mt-1">
                Identify strengths, capitalize on weaknesses, and chart a course
                for unparalleled success.
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex p-[1.5rem] pb-[2rem] flex-col items-start",
            "gap-[3rem] rounded-[1.625rem]",
            "border border-[#E5E7EB] bg-white shadow-[0px 4px 4px 0px #E8E8E8]"
          )}
        >
          <div className="space-y-[3rem]">
            <VectorDesignForCard />
            <div>
              <div className="text-[1.4875rem] font-[600]">Quality apps</div>
              <div className="mt-1">
                Identify strengths, capitalize on weaknesses, and chart a course
                for unparalleled success.
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex p-[1.5rem] pb-[2rem] flex-col items-start",
            "gap-[3rem] rounded-[1.625rem]",
            "border border-[#E5E7EB] bg-white shadow-[0px 4px 4px 0px #E8E8E8]"
          )}
        >
          <div className="space-y-[3rem]">
            <VectorDesignForCard />
            <div>
              <div className="text-[1.4875rem] font-[600]">Quality apps</div>
              <div className="mt-1">
                Identify strengths, capitalize on weaknesses, and chart a course
                for unparalleled success.
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex p-[1.5rem] pb-[2rem] flex-col items-start",
            "gap-[3rem] rounded-[1.625rem]",
            "border border-[#E5E7EB] bg-white shadow-[0px 4px 4px 0px #E8E8E8]"
          )}
        >
          <div className="space-y-[3rem]">
            <VectorDesignForCard />
            <div>
              <div className="text-[1.4875rem] font-[600]">Quality apps</div>
              <div className="mt-1">
                Identify strengths, capitalize on weaknesses, and chart a course
                for unparalleled success.
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex p-[1.5rem] pb-[2rem] flex-col items-start",
            "gap-[3rem] rounded-[1.625rem]",
            "border border-[#E5E7EB] bg-white shadow-[0px 4px 4px 0px #E8E8E8]"
          )}
        >
          <div className="space-y-[3rem]">
            <VectorDesignForCard />
            <div>
              <div className="text-[1.4875rem] font-[600]">Quality apps</div>
              <div className="mt-1">
                Identify strengths, capitalize on weaknesses, and chart a course
                for unparalleled success.
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex p-[1.5rem] pb-[2rem] flex-col items-start",
            "gap-[3rem] rounded-[1.625rem]",
            "border border-[#E5E7EB] bg-white shadow-[0px 4px 4px 0px #E8E8E8]"
          )}
        >
          <div className="space-y-[3rem]">
            <VectorDesignForCard />
            <div>
              <div className="text-[1.4875rem] font-[600]">Quality apps</div>
              <div className="mt-1">
                Identify strengths, capitalize on weaknesses, and chart a course
                for unparalleled success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <>
      <section id="pricing">
        <div className="flex flex-col items-center justify-center text-center ">
          <div className="w-[56.6rem] text-[3.23125rem] font-[600] leading-[3.4125rem] tracking-[-0.125rem]">
            Start making <span className="text-[#FF4F00]">smarter</span>{" "}
            decisions,
          </div>
          <div className="w-[56.6rem] text-[3.23125rem] font-[600] leading-[3.4125rem] tracking-[-0.125rem]">
            Choose a plan
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[1.75rem] min-h-screen w-full text-[#111827]">
      <Nav />
      <main className="w-full h-full">
        <HeroSection />
        <div className="space-y-[8.81rem] mx-[6.5rem]">
          <FeaturesSection />
          <CardsSection />
        </div>
      </main>
    </div>
  );
}
