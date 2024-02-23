import Header from "../components/header";
import InformativeCard from "../components/informativeCard";
import Footer from "../components/footer";
import PoolShell from "../components/poolShell";
import SubmitCard from "../components/submitCard";



export default function Home() {
  return (
    <>
      <Header/>

      <main className="w-full justify-center flex mt-9">
        <div className="xl:max-w-[75%] max-w-[95%] w-full flex flex-col gap-9">
          <InformativeCard />

          <PoolShell/>

          <SubmitCard/>

          <Footer/>
        </div>
      </main>
    </>
  );
}
