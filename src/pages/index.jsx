import Image from "next/image";
import { Inter } from "next/font/google";
import { useCountdown } from "../useCountdown";
import { useEffect, useState } from "react";
import useSound from "use-sound";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [days, hours, minutes, seconds] = useCountdown("04/04/2024 00:00:00");
  const [isPlay, setIsPlay] = useState(false);
  const [play, { stop }] = useSound("/happy.mp3", { volume: 0.5 });

  useEffect(() => {
    const countdown = days + hours + minutes + seconds;

    if (countdown <= 0) {
      window.open("https://flora-19th-birthday.framer.website/", "_self");
    }
  }, [days, hours, minutes, seconds]);

  useEffect(() => {
    if (isPlay) {
      play();
    } else {
      stop();
    }
  }, [isPlay, play, stop]);

  return (
    <main
      style={{
        background: "#94E5D3",
      }}
      className={`flex lg:min-h-[calc(100vh-17px)] md:min-h-[calc(100vh-17px)] sm:min-h-[calc(100vh-5px)]   flex-col items-center p-24 ${inter.className}`}
    >
      <Image
        className="absolute top-0 left-0"
        width={90}
        height={90}
        src={"/flower.svg"}
        alt={""}
      />
      <Image
        className="absolute top-0 right-0 rotate-90"
        width={90}
        height={90}
        src={"/flower.svg"}
        alt={""}
      />
      <img
        className="absolute bottom-0 left-0 w-3/4"
        src={"/cloud.svg"}
        alt={""}
      />
      <div className="flex absolute bottom-0 right-0 m-8">
        {(isPlay) && (
          <img width={100} height={70} src={"/song.gif"} alt={""} />
        )}
        <img
          src={"/harp.svg"}
          alt={""}
          onClick={() => setIsPlay(!isPlay)}
        />
      </div>
      <div className="font-libre md:text-6xl sm:text-xl text-white text-center">
        Count down for Flora’s 19th Birthday
      </div>
      <div className="flex font-libre  lg:text-7xl md:text-4xl sm:text-xl text-white mt-32 ">
        <div className="flex flex-col max-w-content">
          <div className="mx-auto">{days}</div>
          <div>Days</div>
        </div>
        :
        <div className="flex flex-col max-w-content">
          <div className="mx-auto">{hours}</div>
          <div>Hours</div>
        </div>
        :
        <div className="flex flex-col max-w-content">
          <div className="mx-auto">{minutes}</div>
          <div>Minutes</div>
        </div>
        :
        <div className="flex flex-col max-w-content">
          <div className="mx-auto">{seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </main>
  );
}
