
import BookCarousel from "./HomePageComponents/BookCarousel";
import HeroBanner from "./HomePageComponents/HeroBanner";
import PubBanner from "./HomePageComponents/PubBanner";
import Subjects from "./HomePageComponents/Subjects";
import WelcomeBanner from "./HomePageComponents/WelcomeBanner";

export default function Home() {
  return (
    <><HeroBanner /><WelcomeBanner /><PubBanner /><Subjects /><BookCarousel /></>
  )
}
