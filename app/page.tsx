export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* HERO */}
        <section className="space-y-4">
          <p className="text-sm text-zinc-400">Abolaji Habeeb (BJ)</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            AI Engineer — Backend & Model Serving
          </h1>
          <p className="max-w-2xl text-zinc-300">
            I build production-style AI services with FastAPI: secure auth, model inference APIs,
            and reliable engineering practices (logging, testing, deployment).
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900"
              href="https://github.com/Abolajioyin/auth-service"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm"
              href="https://www.linkedin.com/in/abolaji-oyinloye-764ab0133"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProjectCard
              title="Authenticated AI Inference Service"
              description="JWT auth + protected /ai/predict endpoint serving a trained sklearn sentiment model."
              stack={["FastAPI", "JWT", "scikit-learn", "Uvicorn"]}
              githubUrl=""
            />

            <ProjectCard
              title="Next: NLP Sentiment API (HF)"
              description="Upgrade path: Hugging Face pipeline model serving + versioning."
              stack={["FastAPI", "Transformers", "Model Serving"]}
              githubUrl="https://github.com/Abolajioyin/auth-service"
            />

            <ProjectCard
              title="Next: ML Pipeline + Monitoring"
              description="Train → evaluate → save artifacts → serve → log + drift signals."
              stack={["Python", "Pipelines", "Monitoring"]}
              githubUrl="https://github.com/Abolajioyin/auth-service"
            />
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "FastAPI",
              "JWT Auth",
              "REST APIs",
              "scikit-learn",
              "Git/GitHub",
              "Docker (next)",
              "Cloud Deploy (next)",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-14 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-400">
            Contact:{""}
            <a className="underline" href="mailto:bolajioyinloye@yahoo.com">
              bolajioyinloye@yahoo.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  stack,
  githubUrl,
}: {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((t) => (
          <span key={t} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <a
          className="text-sm underline text-zinc-200 hover:text-white"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
