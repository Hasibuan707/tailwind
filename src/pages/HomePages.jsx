const HomePages = () => {
  return (
    <div className="homepage pb-10 bg-">
      <div className="container mx-auto px-2">
        <div className="hero grid grid-cols-2 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="text-5xl/tight font-medium">HELLO!</h1>
            <h2 className="text-3xl mb-6">
              I'm Ahmad Idrus, a Front-End Developer.
            </h2>
            <h2 className="text-base/8 mb-6">
              Building scalable and high-performance web solutions for your
              business needs
            </h2>
            <p>
              <a
                href="#"
                className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full mb-10 "
              >
                Contact Me <i className="ri-eye-line ms-2"></i>
              </a>
            </p>
          </div>
          <div className="box">
            <img src="r.png" alt="" className="" />
          </div>
        </div>
        <div className="about grid grid-cols-2 item-center">
          <div className="box md:order-1 order-2">
            <img src="siluet-.png" alt="" className="" />
          </div>
          <div className="box">
            <h1
              className="lg:text-4xl/tight text-3xl font-medium mb-3"
              id="about"
            >
              ABOUT ME
            </h1>
            <p className="text-base/loose font-medium mb-3">
              Hello There! I'm thrilled to welcome you to my portfolio. I am
              passionate and versatile full-stack developer with a keen interest
              in exploring the latest cutting-edge technologies.
            </p>
            <h2 className="lg:text-2xl/tight text-3xl font-medium mb-3">
              What I do!
            </h2>
            <p>Web Development</p>
            <p>As a developer, i find my self most captivated</p>
          </div>
        </div>
        <div className="Skill">
          <div
            className="lg:text-4xl/tight text-3xl font-medium mb-1"
            id="skill"
          >
            Skill
          </div>
          <img src="cover.png" alt="" className="object-contain h-48 w-96" />
          <img src="tool.png" alt="" className="object-contain h-48 w-96" />
          <h1 className="text-center-5xl font-bold">Front-End Skill </h1>
          <p>Technologies like HTML, CSS, JavaScript, React, Angular, etc.</p>
          <h1 className="text-center-5xl font-bold">Back-End Skills</h1>
          <p>
            Frameworks and languages like Node.js, Express, Django, or Ruby on
            Rails.
          </p>
          <h1 className="text-center-5xl font-bold">DevOps & Tools</h1>
          <p>
            Tools used in development, such as Docker, Git, Jenkins, AWS, or
            CI/CD solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
