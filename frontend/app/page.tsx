import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.overlay}>

      <section style={styles.hero}>

        <Image
          src="/logo.svg"
          alt="NWDS Logo"
          width={80}
          height={80}
          style={styles.heroLogo}
        />

        <h1 style={styles.title}>NextWave Design Studio</h1>

        <p style={styles.subtitle}>
          AI-powered interior design for smarter spaces
        </p>

        <Link href="/workspace">
          <button style={styles.button}>Launch NWDS Studio</button>
        </Link>
      </section>

    </main>
  );
}

const styles = {
  overlay: {
    minHeight: "100vh",
    background: "rgba(255,255,255,0.85)",
    padding: 20
  },
  hero: {
    textAlign: "center" as const,
    marginBottom: 60
  },
  heroLogo: {
    marginBottom: 20
  },
  title: {
    fontSize: "42px",
    marginBottom: 10
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: 20
  },
  button: {
    padding: "12px 24px",
    background: "#0ea5e9",
    color: "white",
    border: "none",
    borderRadius: 6
  }
};