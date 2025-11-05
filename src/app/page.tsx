import Header from "./components/layout/Header";
import MainTopSection from "@/components/home/MainSection/MainTopSection";
import ReviewSection from "@/components/home/ReviewSection/ReviewSection";
import ShopBestSection from "@/components/home/ShopBestSection/ShopBestSection";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <MainTopSection />
        <ShopBestSection />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}
