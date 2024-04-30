import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CraftItems from "../CraftItems/CraftItems";
import CategorySection from "../../CategorySection/CategorySection";

const Home = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <CraftItems allCrafts={allCrafts}></CraftItems>
      <About></About>
      <CategorySection></CategorySection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
