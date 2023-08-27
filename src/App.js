import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import OurServives from "./pages/OurServicesPage";
import Team from "./pages/TeamPage";
import AboutUs from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUsPage";
import SenLocalDistribution from "./pages/SenLocalDistributionPage";
import SenConsolidatedHubPage from "./pages/SenConsolidatedHubPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CareersPage from "./pages/Careers/CareersPage";
import FullStackCareers from "./pages/Careers/FullStackCareers";
import CreativeDesignerCareers from "./pages/Careers/CreativeDesignerCareers";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/ourservices">
            <OurServives />
          </Route>
          <Route path="/localdis">
            <SenLocalDistribution/>
          </Route>
          <Route path="/consolidatedhub">
            <SenConsolidatedHubPage/>
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/careers">
            <CareersPage />
          </Route>
          <Route path="/careersfulldev">
            <FullStackCareers />
          </Route>
          <Route path="/careersbusnsanls">
            <CreativeDesignerCareers/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
