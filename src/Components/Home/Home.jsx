import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CraftItems from "../CraftItems/CraftItems";

const Home = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <CraftItems allCrafts={allCrafts}></CraftItems>
      <Contact></Contact>
    </div>
  );
};

export default Home;
