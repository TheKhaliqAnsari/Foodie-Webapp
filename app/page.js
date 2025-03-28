import Link from "next/link";
import styles from "@/app/page.module.css";
import ImageSlideShow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
            <ImageSlideShow />
        </div>
        <div>
          <div className={styles.hero}>
              <h1>NextLevel Food for NextLevel Foodies</h1>
              <p>Taste & share food from all over the world</p>
          </div>
          <div className={styles.cta}>
              <Link href={'/community'}>Join the Community</Link>
              <Link href={'/meals'}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>What is NextLevel Food?</h2>
          <p>
            NextLevel Food is a community-driven platform where food lovers from
            all over the world can share their favorite meals and recipes. Our
            mission is to connect people through food and to inspire them to
            cook more at home.
          </p>
        </section>
        <section className={styles.section}>
          <h2>How does it work?</h2>
          <p>
            You can browse through our collection of meals and recipes, or join
            our community to share your own. We believe that everyone has a
            story to tell, and we want to hear yours!
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why should I join?</h2>
          <p>
            By joining NextLevel Food, you can connect with other food lovers,
            discover new recipes, and learn about different cuisines from around
            the world. We believe that food has the power to bring people
            together, and we want to help you make that happen.
          </p>
        </section>
      </main>
    </>
  );
}
