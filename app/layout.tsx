import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksii Klymushkin — UI/UX Designer",
  description:
    "Junior UI/UX designer creating beautiful, user-friendly, and intuitive designs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
