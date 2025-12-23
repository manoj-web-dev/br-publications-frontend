
import BookCarousel from "./HomePageComponents/bookCarousel";
import HeroBanner from "./HomePageComponents/heroBanner";
import PubBanner from "./HomePageComponents/pubBanner";
import Subjects from "./HomePageComponents/subjects";
import WelcomeBanner from "./HomePageComponents/welcomeBanner";

export default function Home() {
  return (
    <><HeroBanner /><WelcomeBanner /><PubBanner /><Subjects /><BookCarousel /></>
  )
}
