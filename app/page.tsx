export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
      <nav className="flex justify-between items-center mb-10 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight">AHO</h1>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
      <section className="text-center mt-20 mb-24 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Abolaji Habeeb Oyinloye</h1>
        <p className="text-gray-400 text-xl mb-8">Backend and AI Engineer — FastAPI · Python · JWT · PostgreSQL</p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-2 rounded-lg font-semibold">View Projects</a>
          <a href="#contact" className="border border-gray-600 px-6 py-2 rounded-lg">Contact Me</a>
        </div>
      </section>
      <section id="about" className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <div className="bg-gray-900 rounded-xl p-6 text-gray-300 space-y-4">
          <p>Backend and AI Engineer with a non-traditional path — Petroleum Engineering graduate
            from the University of Lagos, now a Computer Science student at UNBC.</p>
          <p>I build production-ready backend systems and AI inference APIs using Python, FastAPI,
            JWT authentication, and PostgreSQL. My work focuses on designing secure, scalable APIs
            and deploying real-world systems.</p>
          <p className="text-emerald-400 font-medium">
          Currently open to remote startup roles in backend and AI engineering.
          </p>  
          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "FastAPI", "JWT", "PostgreSQL", "SQLAlchemy", "HuggingFace", "REST APIs"].map((skill) => (
              <span key={skill} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold">Auth and AI Inference API</h3>
              <span className="text-xs bg-emerald-900 text-emerald-400 px-2 py-1 rounded-full">Live</span>
            </div>
            <p className="text-gray-400 mb-4">Production-style backend API with JWT authentication, protected routes, and AI model inference built with FastAPI and deployed on Render.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["FastAPI", "Python", "JWT", "PostgreSQL", "HuggingFace"].map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://auth-service-5ilo.onrender.com/docs" target="_blank" className="text-emerald-400 text-sm hover:underline">Live Demo</a>
              <a href="https://github.com/Abolajioyin/auth-service" target="_blank" className="text-gray-400 text-sm hover:underline">GitHub</a>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-dashed border-gray-700 opacity-50">
            <h3 className="text-xl font-bold mb-2">Next Project</h3>
            <p className="text-gray-500 text-sm">Coming soon — currently building.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-gray-400 mb-6">Open to remote startup roles in backend and AI engineering.</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:your@email.com" className="text-gray-300 hover:text-white">Email: bolajioyinloye@yahoo.com</a>
            <a href="https://github.com/Abolajioyin" target="_blank" className="text-gray-300 hover:text-white">GitHub: github.com/Abolajioyin</a>
            <a href="https://www.linkedin.com/in/abolaji-oyinloye-764ab0133" target="_blank" className="text-gray-300 hover:text-white">LinkedIn: Abolaji Oyinloye</a>
          </div>
        </div>
      </section>
      <footer className="text-center text-gray-600 text-sm mt-12">Built by Abolaji Habeeb Oyinloye</footer>
    </main>
  );
}