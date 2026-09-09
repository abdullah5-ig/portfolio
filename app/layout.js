import "./globals.css";
import { profile } from "../data/profile";

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#eef1f8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="field" aria-hidden="true">
          <div
            className="orb animate-drift"
            style={{
              width: "46vw",
              height: "46vw",
              left: "-10vw",
              top: "-8vw",
              background: "radial-gradient(circle at 30% 30%, #9db4ff, #d7e0ff 70%)",
            }}
          />
          <div
            className="orb animate-drift-slow"
            style={{
              width: "38vw",
              height: "38vw",
              right: "-8vw",
              top: "14vh",
              background: "radial-gradient(circle at 60% 40%, #a7f0e6, #dcfaf5 70%)",
            }}
          />
          <div
            className="orb animate-drift"
            style={{
              width: "42vw",
              height: "42vw",
              left: "24vw",
              bottom: "-14vw",
              background: "radial-gradient(circle at 50% 50%, #d8c6ff, #efe7ff 70%)",
              animationDelay: "-8s",
            }}
          />
          <div className="grain" />
        </div>
        {children}
      </body>
    </html>
  );
}
