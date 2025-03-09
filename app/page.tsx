import Image from "next/image";
import Header from "./components/header";
import SideBar from "./components/sideBar";


export default function Home() {
  return (
    <div className="text-black">
      <Header/>
      <SideBar/>
    </div>
  );
}
