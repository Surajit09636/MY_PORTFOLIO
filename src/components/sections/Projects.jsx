import { RevealOnScroll } from "../ReviewOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Personal Ai assistant{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                This is an Ai chatbot that can communicate with you do whatever
                you told it like(play Music, open any app, close any app, search
                on google, youtube play, it can generate text like chatgpt) on
                your desktop
              </p>
              <div className="flex flex-wrap garp-2 mb-4">
                {["python-dotenv", "AppOpener", "request"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Surajit09636/Personal_AI_Assistant.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Crowd Prediction </h3>
              <p className="text-gray-400 mb-4">
                This is an Ai based crowd prediction platform that helps users
                to see the upcoming crowd level before going out anywhere
              </p>
              <div className="flex flex-wrap garp-2 mb-4">
                {["React", "Fastapi", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Surajit09636/Crowd_prediction.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
