import { Grid } from "@mui/material";
import FeatureSection from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Grid>
        <Navbar />
        <main>
          <Hero />
          <FeatureSection />
        </main>
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
