import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hadeer Hassan",
    location: "Cairo, Egypt",
    email: "eng.hadeer2893@gmail.com",
    availability: "Open for work",
    // brand:
    //   "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
    brand: "Software Engineer | ITI Graduated | AAST ",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
