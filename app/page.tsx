import Image from "next/image";
import Header from "./components/header";
import InformativeCard from "./components/informativeCard";
import Footer from "./components/footer";
import PoolShell from "./components/poolShell";
import SubmitCard from "./components/submitCard";


// <Image
//   src="/pope-francis.png"
//   alt="Vercel Logo"
//   // className="dark:invert"
//   width={100}
//   height={24}
//   priority
// />

export default function Home() {
  return (
    <>
      <Header/>

      <main className="w-full justify-center flex mt-9">
        <div className="max-w-[75%] w-full flex flex-col gap-9">
          <InformativeCard />

          <PoolShell/>

          <SubmitCard/>

          <Footer/>
        </div>
      </main>
    </>
  );
}
