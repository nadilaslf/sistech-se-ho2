import Image from "next/image";
// import { Label } from "../Label";
// import {Button} from "../Button";


function Hero({

}
) {
  return (
    <div className="page-center grid grid-cols-3 items-center md:pt-20 md:pb-20 pt-0 pb-6 ">
      <div className="grid col-span-2 gap-6 ">
        <h1 className="text-6xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl dark:text-white my-2 mx-4">
          Aplikasi <span className="color-hero">Belajar Kuliah</span> Terlengkap di Indonesia
        </h1>
        <p className="text-ink font-light md:text-xl text-lg md:w-9/12 mt-6">
        Dapatkan akses ke video kelas, pembahasan soal, textbook, dan rangkuman untuk membantu kamu meraih IPK idaman
        </p>
        <div className="grid grid-cols-3 mt-8 mx-200">
        {/* <Button
            className="mt-4 bg-current"
            variant="primary"
            onClick={onClick}
            isFullWidth={true}
            >
            {buttonLabel || "Daftar"}
        </Button> */}
        {/* <div className="all-button"> */}
            <button className="button">Daftar</button>
            <button className="button">Telusuri</button>
        {/* </div> */}
        
        </div>
        
      </div>
      <div className="mx-auto">
        {/* <Image
          src="/images/Pattern.svg"
          width={700}
          height={700}
          alt="pattern"
          className="absolute bottom-0 right-0 top-16 z-0"
        /> */}
        <Image
          src="/images/banner-1.jpg"
          width={800}
          height={900}
          alt="pattern"
          className="relative"
        />
      </div>
    </div>
  );
}

export { Hero };