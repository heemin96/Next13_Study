import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import os from "os"; //노트 APIs
import Counter from "@/components/Counter";

export default function Home() {
  // console.log("hello");
  // console.log(os.hostname());
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
      <Image
        src=" https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
