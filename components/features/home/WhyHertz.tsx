const pillars = [
  {
    title: "Soluciones técnicas especializadas",
    description:
      "Diseñamos e implementamos sistemas eléctricos, solares e hidráulicos con planos técnicos, memorias de cálculo y consultoría de ingeniería para clientes residenciales, comerciales e industriales.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Residencias, comercios e industria",
    description:
      "Atendemos residencias, comercios, industrias, constructoras e instituciones en David y toda la provincia de Chiriquí.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Equipo local en David, Chiriquí",
    description:
      "Presencia local con conocimiento de las normativas y el mercado regional. Disponibilidad y respuesta ágil en toda la provincia.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Contacto directo por WhatsApp",
    description:
      "Sin formularios largos ni esperas. Hablas directamente con el equipo técnico de HERTZ ENERGY desde el primer mensaje.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function WhyHertz() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-hertz-blue">
            Por qué elegirnos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-hertz-text sm:text-4xl">
            Por qué HERTZ ENERGY
          </h2>
          <p className="mt-4 text-base leading-7 text-hertz-muted">
            Ingeniería electromecánica especializada en energía solar,
            instalaciones eléctricas y sistemas hidráulicos para residencias,
            comercios, industrias e instituciones en Chiriquí.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex gap-5">
              {/* Icon circle */}
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-hertz-blue">
                {pillar.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-hertz-text">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-7 text-hertz-muted">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
