import resume from "../../assets/caseykoh.pdf";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full py-11 px-16 text-gray-50 text-right text-large bg-gradient-to-b from-gray-950 to-transparent">
      <a href={resume} target="_blank" className="text-lg px-6">
        Resume
      </a>
      <a
        href="mailto:s.casey.koh@gmail.com"
        target="_blank"
        className="text-lg px-6"
      >
        Email
      </a>
    </div>
  );
};

export default Navbar;
