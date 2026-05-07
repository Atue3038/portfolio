import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksii Klymushkin — UI/UX Designer",
  description: "Junior UI/UX designer creating beautiful, user-friendly, and intuitive designs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
