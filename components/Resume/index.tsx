import { languages, tools } from "../../data";
import Bar from "../Bar/Bar";

const Resume = () => {
  return (
    <div className="px-6 py-4">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">BS Computer Science</h5>
            <p className="font-semibold">Muhammad Ali Jinnah University</p>
            <p className="my-3">
              I am currently pursuing MS in Computer Science from Muhammad Ali
              Jinnah University
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Internship</h5>
            <p className="font-semibold">InApps Solutions</p>
            <h5 className="my-2 text-xl font-bold">Full Stack Developer Jr.</h5>
            <p className="font-semibold">InApps Solutions</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lang) => (
              <Bar value={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar value={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
