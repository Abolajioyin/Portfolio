export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

{/* NAVBAR */}
<nav className="flex justify-between items-center mb-10">
  <h1 className="text-xl font-bold">AO</h1>

  <div className="flex gap-6 text-gray-400">
    <a href="#projects" className="hover:text-white">Projects</a>
    <a href="#contact" className="hover:text-white">Contact</a>
  </div>
</nav>
      {/* HERO */}
      <section className="text-center mt-20 mb-20">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          Abolaji Habeeb Oyinloye
        </h1>
        <p className="text-gray-400 text-xl mb-6">
          AI / Backend Engineer (Python, FastAPI)
        </p>

        <div className="flex justify-center gap-4">
          <a 
  href="#projects"
  className="bg-white text-black px-6 py-2 rounded-lg font-semibold"
>
  View Projects
</a>
          <button className="border border-gray-600 px-6 py-2 rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid gap-6">
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Auth Service API</h3>
            <p className="text-gray-400 mb-3">
              Backend API with authentication using JWT and database integration.
            </p>

            <a 
              href="https://github.com/Abolajioyin/auth-service"
              target="_blank"
              className="text-white underline"
            >
              View Project →
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="max-w-4xl mx-auto mt-20">
  <h2 className="text-3xl font-semibold mb-6">Contact</h2>

  <div className="flex flex-col gap-3 text-gray-400">
    <p>Email: your@email.com</p>

    <a 
      href="https://github.com/YOUR_USERNAME"
      target="_blank"
      className="hover:text-white"
    >
      GitHub
    </a>

    <a 
      href="https://www.linkedin.com/in/YOUR_USERNAME"
      target="_blank"
      className="hover:text-white"
    >
      LinkedIn
    </a>
  </div>
</section>

    </main>
  );
}