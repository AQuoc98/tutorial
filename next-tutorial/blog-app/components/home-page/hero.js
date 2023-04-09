import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Ken.jpeg"
          alt="An image showing Ken"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&rsquo;m Ken</h1>
      <p>I blog about web development</p>
    </section>
  );
}
