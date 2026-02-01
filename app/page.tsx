import Landing from "./components/Landing";
import Popular from "./components/Popular";
import Category from "./components/Category";
import Ambitions from "./components/Ambitions";
import ProductSelection from "./components/ProductSelection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Landing/>  
      <Popular/>
      <Category/>
      <Ambitions/>
      <ProductSelection/>
      <Footer/>
    </>
  );
}
