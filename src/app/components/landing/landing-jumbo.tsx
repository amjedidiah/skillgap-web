import LandingDownloadButtons from "@/components/landing/landing-download-buttons";
import Image from "next/image";

export default function LandingJumbo() {
  return (
    <section id="home" className="pt-[42px] relative overflow-y-hidden lg:pb-4">
      <article className="container">
        <div className="flex flex-col max-w-[900px] mx-auto gap-16 text-center">
          <div className="flex flex-col gap-4">
            <p className="w-fit mx-auto text-lil-dark-blue text-sm -tracking-[0.14px] py-[10px] px-4 rounded-3xl bg-lil-dark-blue-100">
              Play solo or with your squad
            </p>
            <h1 className="text-dm-l2 text-6xl lg:text-[64px] -tracking-[1.92px]">
              Bank on your skill with{" "}
              <span className="text-lil-dark-blue italic font-semibold">
                <span>S</span>
                <span>killgap</span>
              </span>
            </h1>
            <p className="text-grey-700 max-w-[711px] mx-auto">
              Win money competing against the best in the world using your skill
              on your favorite console, mobile games or sports. Bet on yourself,
              play online or play offline at a mutual venue
            </p>

            <LandingDownloadButtons />
          </div>

          <Image
            src="/images/landing-jumbo.png"
            alt="landing-jumbo"
            width={900}
            height={387}
            className="lg:scale-110"
          />
        </div>
      </article>
      <div className="absolute left-0 w-full overflow-x-hidden h-full top-0 flex items-center justify-between pointer-events-none">
        <Image
          src="/images/jumbo-blur-left.png"
          width={491}
          height={676}
          alt="jumbo-blur-left"
        />
        <Image
          src="/images/jumbo-blur-right.png"
          width={491}
          height={676}
          alt="jumbo-blur-right"
        />
      </div>
    </section>
  );
}
