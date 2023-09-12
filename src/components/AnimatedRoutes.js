import {
  Routes,
  Route,
  useLocation,
  Navigate,
  HashRouter,
} from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import PageNotFound from "../pages/404/PageNotFound";

const AnimatedRoutes = ({ personalDetails }) => {
  //const location = useLocation();

  return (
    // <Routes location={location} key={location.pathname}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route
        path="/myPortifolio"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      {/* <Route
        path="/"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      /> */}
      <Route
        path="/myPortifolio/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/myPortifolio/portfolio" element={<Portfolio />} />
      <Route
        path="/myPortifolio/contact"
        element={
          <Contact
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
      <Route path="/myPortifolio/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/page-not-found" />} />
      {/* </Routes> */}
    </HashRouter>
  );
};

export default AnimatedRoutes;
