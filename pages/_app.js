import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);

  if (router.pathname === "/login") return <Component {...pageProps} />;

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </Layout>
    </ThemeProvider>
  );
}
