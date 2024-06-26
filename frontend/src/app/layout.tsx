import { getServerSession } from "next-auth";
import AlertToLogIn from "./components/AlertToLogIn";
import AuthProvider from "./components/AuthProvider";
import Container_Nav_Cart from "./components/Container_Nav_Cart";
import Navbar from "./components/Navbar";
import ReactQueryProvider from "./components/ReactQueryProvider";

import "./globals.css";
import {
  Inter,
  Oswald,
  Merriweather,
  Merriweather_Sans,
} from "next/font/google";

import { cartProductInterface, TCart } from "./typing/interfaces";
import { getServerSideCartProducts } from "./functions/api/serverSideRequests";
import { authOptions } from "./api/auth/AuthOptions";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather-mono",
  weight: ["300", "400", "700", "900"],
});
const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald-mono",
});

export const metadata = {
  title: "FurniWorld",
  description: "Discover quality furniture with our website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  let initialCart: TCart | undefined = undefined;
  if (session?.user?.userId)
  {  initialCart = await getServerSideCartProducts(session.user.userId);}

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${oswald.variable} ${merriweather.variable}`}
      >
        <AuthProvider>
          <ReactQueryProvider>
            <Container_Nav_Cart initialCart={initialCart} />
            {children}
            <AlertToLogIn />
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
