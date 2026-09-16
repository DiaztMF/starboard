import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ContactForm from "../ContactForm";

const FooterCTA = () => {
  return (
    <SectionWrapper id="get-started">
      <div className="custom-screen text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Let’s get started now
          </h2>
          <p className="mt-3 text-gray-600">
            Work with a project management software that's easy and fun to use.
          </p>
        </div>

        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default FooterCTA;
