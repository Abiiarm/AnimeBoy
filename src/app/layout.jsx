import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import "@fontsource/fira-code"; // Menggunakan paket fira-code dari fontsource

export const metadata = {
  title: "BoyAnime",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-color-dark" suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
