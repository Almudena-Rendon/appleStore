import { Footer } from "./components/footer/Footer";
import { HeroSection } from "./components/hero-section/HeroSection";
import { MainSection } from "./components/main-section/MainSection";
import { NavBarResponsive } from "./components/navbar/NavBarResponsive";
import { SwiperAppleTV } from "./components/swiper/Swiper";

function App() {
  return (
    <>
      <NavBarResponsive />
      <HeroSection />
      <MainSection />
      <SwiperAppleTV />
      <Footer />
    </>
  );
}

export default App;
