const Navbar = () => {
  return (
    <div className="navbar fixed w-full transition-all py-4">
      <div className="container mx-auto px-4">
        <div className="navbar-box border-spacing-0 flex items-center justify-center">
          <div className="logo">
            <ul className="flex md:static gap-8 fixed ">
              <li>
                <a
                  href="#about"
                  className="font-medium opacity-75 py-2 px-5 rounded-xl hover:bg-blue-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className="font-medium opacity-75 py-2 px-5 rounded-xl hover:bg-blue-300"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="font-medium opacity-75 py-2 px-5 rounded-xl hover:bg-blue-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium opacity-75 py-2 px-5 rounded-xl hover:bg-blue-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium opacity-75 py-2 px-5 rounded-xl hover:bg-blue-300"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium opacity-75 py-2 px-5 rounded-xl hover:bg-blue-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
