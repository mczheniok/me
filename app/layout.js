import { Manrope, Unbounded } from "next/font/google"
import "./globals.css";
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";

const UnboundedFont = Unbounded({
  style: "normal",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: "900",
  variable: "--font-unbounded",
});

const ManropeFont = Manrope({
  style: "normal",
  subsets: ['cyrillic',"latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Hello i am Yevhenii Shorobura",
  description: "It's my official page website about me",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${UnboundedFont.variable} ${ManropeFont.variable} antialiased`}
    >
      <body className={`w-full`}>
        <HeaderComponent 
          
        />

        <main
          className="w-full"
        >
          {children}
        </main>

        <FooterComponent />
      </body>
    </html>
  );
}
