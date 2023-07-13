import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-center"/>
      </Layout>
    </ThemeProvider>
  );
}
