import { RevealOnScroll } from "../ReviewOnScroll";

export const About = () => {
  const backendSkills = ["Python", "Flask", "Django", "Database"];

  const aiSkills = ["AI", "ML", "Pytorch", "NLP"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me{" "}
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m a backend developer passionate about Artificial Intelligence
              and Machine Learning. I enjoy solving complex problems by building
              scalable systems and delivering optimal solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-transition-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                <div clasName="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-transition-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> AI </h3>
                <div clasName="flex flex-wrap gap-2">
                  {aiSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    {" "}
                    B-Tech in CSE (Artificial Intelligence & Mechine Learning)
                  </strong>{" "}
                  - Brainware University (2027)
                </li>
                <li>
                  <strong> 10th & 12th</strong> - Barajaguli Gopal Academy
                  (2021-2023)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Hackathon </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    NEXATHON 1.0 (Organised by Brainware University)
                  </h4>
                  <p>
                    {" "}
                    Developed the backend of our project (Crowd-Prediction) with
                    python
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
