import React, {useEffect} from "react";
import NavBarNew from "../../components/NavBarNew";
import Footer from "../../components/Footer/Footer";
import FullStackCareersComponent from "../../components/FullStackCareersComponent";
import { Helmet } from "react-helmet-async";

function FullStackCareers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
      <title>Careers - Sen Transport</title>
      <meta
        name="description"
        content="SEN Transport Australian-based transport company is seeking a talented and experienced Full Stack Developer - Web to join our team part-time. As a Full Stack Developer, you will be responsible for developing and maintaining web applications using technologies such as React, Node.js, MySQL, and Firebase. You will collaborate with the product and design teams to ensure the successful delivery of our products and participate in agile development processes such as sprint planning, daily stand-ups, and retrospectives.
        "
      />
      <link rel="canonical" href="/careersfulldev" />
    </Helmet>
    <div className="w-full h-screen">
      <div className="w-full bg-secondary-blue-dark ">
        <div className="abolute">
          <NavBarNew />
        </div>
        <FullStackCareersComponent/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default FullStackCareers;
