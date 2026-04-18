import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.overlay}>

      {/* HERO */}
      <section style={styles.hero}>

        <Image
          src="/logo-full.png"
          alt="NWDS Logo"
          width={320}
          height={160}
          style={styles.heroLogo}
        />

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
    background: "rgba(255,255,255,0.9)",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  hero: {
    textAlign: "center" as const
  },
  heroLogo: {
    marginBottom: 20
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: 20
  },
  button: {
    padding: "14px 28px",
    fontSize: "16px",
    background: "#0ea5e9",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer"
  }
};