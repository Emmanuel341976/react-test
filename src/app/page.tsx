import Image from "next/image";

export default function Home() {


  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-6xl p-4 italic font-semibold">Escape if you can...</h1>
        <div className="justify-items-center content-center w-full">
          <Image
            className=""
            src="/hall.png"
            alt="bureau"
            width={800}
            height={200}
          />
        </div> 
      <div className="text-center text-2xl italic p-4">
        <p>{"Now you're locked in a big, spooky house!"}</p>
        <p>{"She told you not to enter. Now you've got to escape!"}</p>  
        <p>{"Will you be perceptive enough to solve the riddles?"}</p>
        <p>{"It's up to you!"}</p>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-amber-600 p-2 max-w-fit rounded-xl">Start if you dare!</button>
      </div>
     


    </div>
  );
}
