import "./main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Alexander Almström</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Frontend Developer &amp; UI Designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white tracking-wide">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
