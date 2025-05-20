import Image from "next/image";
import bureau from '../../public/bureau.png'



export default function Home() {

  
  
const windowdimensions = [window.innerWidth, window.innerHeight];

 

  console.log(windowdimensions)
  console.log('coucou')

  return (    
    <div className="flex flex-col items-center p-8">

       <h1 className="text-3xl text-red-500">Escape from the office !</h1>
       <p>{13}</p>
          <Image className="bureau w-[800px] h-[600px] p-8 bg-zinc-100"
                   src={bureau}
                   alt="Un bureau" 
          />
    </div>
    // <div className="flex flex-col p-8 max-h-full bg-red-100 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div className="flex flex-col p-8 max-h-1/5 bg-blue-100">
    //     <h1 className="flex flex-col  p-8 text-3xl text-red-500">Escape from the office !</h1>
    //   </div>
    //   <div className="flex flex-col  p-8 max-w-fit max-h-fit bg-green-100">
    //     <Image className="bureau"
    //               src={bureau}
    //               alt="Un bureau" 
    //             />
    //   </div>
        
      
    // </div>
  );
}
