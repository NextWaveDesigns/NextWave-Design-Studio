import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NextWave Design Studio",
  description: "NWDS AI-powered interior design platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* GLOBAL HEADER */}
        <header style={styles.header}>
          <Link href="/" style={styles.logoWrap}>
            <Image src="/logo.png" alt="NWDS Logo" width={40} height={40} />
            <span style={styles.logoText}>NWDS</span>
          </Link>
        </header>

        {children}

      </body>
    </html>
  );
}

const styles = {
  header: {
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(6px)",
    padding: "10px 20px",
    borderBottom: "1px solid #eee"
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "black"
  },
  logoText: {
    fontSize: "18px",
    fontWeight: "bold"
  }
};