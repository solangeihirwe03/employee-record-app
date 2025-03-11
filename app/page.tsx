"use client";
import Image from "next/image";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import { useRouter } from 'next/navigation';
import { useEffect } from "react"


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/employees');
  }, [router]);
  return <div>Loading...</div>;
  // return (
  //   <div className="text-black flex">
  //     <div style={{ display: 'flex' }}>
  //       <SideBar />
  //     </div>
  //     <div style={{ flex: 1 }}>
  //       <Header />
  //       <main>
  //         {children}
  //       </main>
  //     </div>
  //   </div>
  // );
}
