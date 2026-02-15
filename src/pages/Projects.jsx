import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section className="max-container">

        <h1 className="head-text">
          Engineering{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Work
          </span>
        </h1>

        <p className="max-w-2xl text-slate-500">
          Backend and full-stack systems focusing on API design, state
          management, authentication and data modeling.
        </p>

        <div className="flex flex-wrap my-16 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="lg:w-[400px] w-full">

              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>

                <p className="mt-2 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-2 font-poppins">

                  {project.link && (
                    <>
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600"
                      >
                        Demo
                      </Link>
                      <img src={arrow} alt="arrow" className="w-4 h-4" />
                    </>
                  )}

                  <Link
                    to={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Source
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4" />

                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />
        <CTA />

      </section>
      <Footer />
    </div>
  );
};

export default Projects;
