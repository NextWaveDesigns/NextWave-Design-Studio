import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      
      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <Image src="/logo.png" alt="NWDS Logo" width={40} height={40} />
          <span style={styles.logoText}>NWDS</span>
        </div>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.title}>NextWave Design Studio</h1>
        <p style={styles.subtitle}>
          AI-powered interior design for smarter spaces
        </p>

        <Link href="/workspace">
          <button style={styles.button}>Launch NWDS Studio</button>
        </Link>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <Image src="/chair.png" alt="Chair" width={200} height={200} />
          <p>Chairs</p>
        </div>

        <div style={styles.card}>
          <Image src="/table.png" alt="Table" width={200} height={200} />
          <p>Tables</p>
        </div>

        <div style={styles.card}>
          <Image src="/sofa.png" alt="Sofa" width={200} height={200} />
          <p>Sofas</p>
        </div>

        <div style={styles.card}>
          <Image src="/door.png" alt="Door" width={200} height={200} />
          <p>Doors</p>
        </div>
      </section>

    </main>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: 20
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 40
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  logoText: {
    fontSize: "18px",
    fontWeight: "bold"
  },
  hero: {
    textAlign: "center" as const,
    marginBottom: 60
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
    fontSize: "16px",
    background: "#0ea5e9",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20
  },
  card: {
    textAlign: "center" as const,
    padding: 20,
    border: "1px solid #eee",
    borderRadius: 10
  }
};