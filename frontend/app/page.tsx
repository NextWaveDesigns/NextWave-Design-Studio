import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.overlay}>

      {/* HERO */}
      <section style={styles.hero}>

        <Image
          src="/logo.png"
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

      {/* FURNITURE GRID */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <Image src="/chair.png" alt="Chair" width={120} height={120} />
          <p>Chairs</p>
        </div>

        <div style={styles.card}>
          <Image src="/table.png" alt="Table" width={120} height={120} />
          <p>Tables</p>
        </div>

        <div style={styles.card}>
          <Image src="/sofa.png" alt="Sofa" width={120} height={120} />
          <p>Sofas</p>
        </div>

        <div style={styles.card}>
          <Image src="/door.png" alt="Door" width={120} height={120} />
          <p>Doors</p>
        </div>
      </section>

    </main>
  );
}

const styles = {
  overlay: {
    minHeight: "100vh",
    backdropFilter: "blur(2px)",
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
    borderRadius: 6,
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 20
  },
  card: {
    textAlign: "center" as const,
    padding: 20,
    background: "white",
    borderRadius: 10
  }
};