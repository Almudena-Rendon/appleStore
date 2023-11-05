import { NavBarResponsive } from "./components/navbar/NavBarResponsive";
import { HeroSection } from "./components/hero-section/HeroSection";
import { MainSection } from "./components/main-section/MainSection";
import { SwiperAppleTV } from "./components/swiper/Swiper";
import { Footer } from "./components/footer/Footer";

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
