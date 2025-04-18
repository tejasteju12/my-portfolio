export default function Resume() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold"></h1>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
          <div>
            <h3 className="font-bold">AP Model School</h3>
            <p>2013 – 2018</p>
          </div>
          <div>
            <h3 className="font-bold">Sri Saptagiri PU College, Tumkur</h3>
            <p>2018 – 2020</p>
            <p>Pre-University Course</p>
          </div>
          <div>
            <h3 className="font-bold">Siddaganga Institute of Technology</h3>
            <p>2021 – 2025</p>
            <p>Bachelor of Technology in AI & Data Science</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
          <div>
            <h3 className="font-bold">Fullstack Developer Intern – Stacklane</h3>
            <p>March 2025 – Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Working across the stack to build and maintain scalable web applications.</li>
              <li>Developing frontend components with React and TypeScript.</li>
              <li>Integrating backend APIs and optimizing performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
