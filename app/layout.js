import { Inter } from "next/font/google";
import '@/styles/main.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "What is happening ?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
