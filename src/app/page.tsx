import Image from "next/image";
import styles from "./page.module.css";

const avatar = "https://avatars.githubusercontent.com/u/97349847";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.image}
          src={avatar}
          width={128}
          height={128}
          alt="Profile picture"
        />
        <div className={styles.title}>
          <h1>Alessandro Ferrari</h1>
          <h2>software developer and linux enthusiast</h2>
        </div>
        <p className={styles.description}>
          With a self-taught background and years of hands-on experience, I
          enjoy exploring new technologies, solving problems, and continuously
          improving my skills. I believe in writing clean, maintainable code and
          turning ideas into practical solutions.
        </p>
        <div className={styles.links}>
          <a href="mailto:fullmetalsandro@gmail.com">email</a>
          <span>/</span>
          <a target="_blank" href="https://github.com/alessandroferraridev">
            github
          </a>
          <span>/</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alessandro-ferrari-baronissi/"
          >
            linkedin
          </a>
        </div>
      </main>
    </div>
  );
}
