import ContactCard from "../components/ContactCard";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <ContactCard
        githubUrl="https://github.com/Deliciaes"
        linkedinUrl="http://linkedin.com/in/emmaramstedt"
        mailto="emma.ramstedt@gmail.com"
        location="Gothenburg, Sweden"
        name="Emma Ramstedt"
        role="Full Stack Developer"
      />
    </>
  );
};

export default Contact;
