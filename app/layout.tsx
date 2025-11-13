import "@/styles/globals.css";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-black">
        <Header />
        <main className="flex flex-col">{children}</main>
      </body>
    </html>
  );
}
