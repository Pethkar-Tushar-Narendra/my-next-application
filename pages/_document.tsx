import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/Components/NavBar";
export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <Head />
      <body>
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
