import Image from "next/image";
import styles from "./page.module.css";

const avatar = "https://avatars.githubusercontent.com/u/97349847";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.image} src={avatar} width={64} height={64} alt="Profile picture" />
        <div className={styles.title}>
          <h1>alessandro ferrari</h1>
          <h2>full stack developer</h2>
        </div>
        <p className={styles.description}>i build web applications with modern technologies</p>
        <div className={styles.links}>
          <a href="mailto:fullmetalsandro@gmail.com">email</a> | <a target="_blank" href="https://www.linkedin.com/in/alessandro-ferrari-baronissi/">linkedin</a>
        </div>
      </main>
    </div>
  );
}
