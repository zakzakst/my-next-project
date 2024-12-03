import Image from "next/image";
import styles from "./page.module.css";

// type Test = {
//   /**
//    * 名前
//    */
//   name: string;
// };

export default function Home() {
  const name = "世界";
  // const test: Test = {
  //   name: "7",
  // };
  // console.log(test);
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
