import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سارة | استوديو التصميم الإبداعي والهوية البصرية",
  description: "سارة — مصممة جرافيك وهوية بصرية. أحوّل الأفكار إلى تجارب بصرية لا تُنسى مع تصميمات Avant-Garde وإخراج تحريري متميز.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="h-full antialiased dark scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-[#00dce5] selection:text-black font-['ThmanyahSans'] font-normal">
        {children}
      </body>
    </html>
  );
}
