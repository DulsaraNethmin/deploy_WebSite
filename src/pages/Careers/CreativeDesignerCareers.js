import React, {useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import NavBarNew from "../../components/NavBarNew";
import CreativeD_CareersComponent from "../../components/CreativeD_CareersComponent";
import { Helmet } from "react-helmet-async";

function CreativeDesignerCareers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
      <title>Careers - Sen Transport</title>
      <meta
        name="description"
        content="SEN Transport Australian-based transport company is seeking a talented and experienced Creative Designer to join our team part-time. As a Creative Designer, you will be responsible for fulfilling UI/UX, and graphic works (flyer designs, logo designs, custom graphic designs) using Photoshop, illustrator, and Figma/Adobe XD. You will collaborate with the product and design teams to ensure the successful delivery of our products and participate in agile development processes."
      />
      <link rel="canonical" href="/careersbusnsanls" />
    </Helmet>
    <div className="w-full h-screen">
      <div className="w-full bg-secondary-blue-dark ">
        <div className="abolute">
          <NavBarNew />
        </div>
        <CreativeD_CareersComponent/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default CreativeDesignerCareers;
