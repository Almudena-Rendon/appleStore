import { Footer } from "./components/footer/Footer";
import { HeroSection } from "./components/hero-section/HeroSection";
import { MainSection } from "./components/main-section/MainSection";
import { Navbar } from "./components/navbar/Navbar";
import { SwiperAppleTV } from "./components/swiper/Swiper";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainSection />
      <SwiperAppleTV />
      <Footer />
    </>
  );
}

export default App;
