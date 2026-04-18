import type { ServiceSlug } from "./service-slugs";

type ServiceColumn =
  | { kind: "list"; heading: string; items: string[] }
  | { kind: "text"; heading: string; body: string };

type ServiceDetail = {
  kicker: string;
  title: string;
  intro: string;
  columns: [ServiceColumn, ServiceColumn, ServiceColumn];
};

type DictionaryShape = {
  meta: {
    siteTitle: string;
    siteTitleTemplate: string;
    siteDescription: string;
    ogDescription: string;
    home: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
    services: { title: string; description: string };
    servicePages: Record<ServiceSlug, { title: string; description: string }>;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    ctaShort: string;
  };
  languageSwitcher: { aria: string; de: string; en: string };
  footer: {
    tagline: string;
    pages: string;
    contact: string;
    social: string;
    rights: string;
    built: string;
    management: string;
  };
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    bookCall: string;
    viewServices: string;
    metrics: { roi: string; time: string; delivery: string };
    metricsValues: { roi: string; time: string; delivery: string };
    dashboardAlt: string;
    weeklyPipeline: string;
    cac: string;
    conversions: string;
  };
  servicesPreview: {
    kicker: string;
    title: string;
    subtitle: string;
    explore: string;
    viewMobile: string;
    learnMore: string;
    items: Record<
      ServiceSlug,
      { title: string; description: string }
    >;
  };
  howItWorks: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
  };
  whyChooseUs: {
    kicker: string;
    title: string;
    subtitle: string;
    points: { title: string; text: string }[];
  };
  testimonials: {
    kicker: string;
    title: string;
    subtitle: string;
    quotes: { name: string; role: string; text: string }[];
  };
  finalCta: {
    kicker: string;
    title: string;
    subtitle: string;
    button: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    cards: { title: string; body: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    emailLabel: string;
    managementLabel: string;
    managementValue: string;
  };
  contactForm: {
    name: string;
    email: string;
    phone: string;
    message: string;
    namePh: string;
    emailPh: string;
    phonePh: string;
    messagePh: string;
    submit: string;
    sending: string;
    success: string;
    errorSend: string;
    errorNetwork: string;
    errors: { name: string; email: string; phone: string; message: string };
  };
  servicesPage: {
    kicker: string;
    title: string;
    intro: string;
    viewDetails: string;
    cards: Record<
      ServiceSlug,
      { name: string; summary: string; bullets: string[] }
    >;
  };
  serviceDetail: Record<ServiceSlug, ServiceDetail>;
};

const de: DictionaryShape = {
  meta: {
    siteTitle: "PermaGrowth — Performance-Marketing-Agentur",
    siteTitleTemplate: "%s — PermaGrowth",
    siteDescription:
      "Premium Performance Marketing für moderne Marken: SEO, Ads und Design, die echtes Wachstum liefern.",
    ogDescription:
      "SEO, Ads und Design für echtes Wachstum. Konversionsstarke Systeme, die skalieren.",
    home: {
      title: "Startseite",
      description:
        "Skalieren Sie Ihr Business mit Performance Marketing—SEO, Ads und Design für echtes Wachstum.",
    },
    about: {
      title: "Über uns",
      description:
        "Erfahren Sie mehr über PermaGrowth: Management aus Österreich und globale Umsetzung.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Kontaktieren Sie PermaGrowth für Performance Marketing, Design und Wachstum.",
    },
    services: {
      title: "Leistungen",
      description:
        "Performance Marketing von PermaGrowth: SEO, Ads, Social, Web, Design und Analytics.",
    },
    servicePages: {
      "seo-optimization": {
        title: "SEO-Optimierung",
        description:
          "Technisches SEO, Content-Strategie und On-Page-Optimierung für nachhaltigen organischen Traffic.",
      },
      "google-ads": {
        title: "Google Ads",
        description:
          "Intent-starke Google-Ads-Kampagnen, Landingpages und Tracking für profitable Akquise.",
      },
      "social-media-marketing": {
        title: "Social-Media-Marketing",
        description:
          "Bezahlte und organische Social-Media-Strategien für Reichweite, Engagement und Umsatz.",
      },
      "website-development": {
        title: "Webentwicklung",
        description:
          "Schnelle, konversionsstarke Websites mit Premium-Markenauftritt.",
      },
      "graphic-design": {
        title: "Grafikdesign",
        description:
          "Marken- und Marketingdesign für konsistente, hochwertige Touchpoints.",
      },
      "analytics-and-cro": {
        title: "Analytics & CRO",
        description:
          "Analytics und Conversion-Optimierung: aus Traffic wird planbarer Umsatz.",
      },
    },
  },
  nav: {
    home: "Startseite",
    services: "Leistungen",
    about: "Über uns",
    contact: "Kontakt",
    cta: "Kostenlose Beratung",
    ctaShort: "Beratung",
  },
  languageSwitcher: {
    aria: "Sprache wählen",
    de: "DE",
    en: "EN",
  },
  footer: {
    tagline:
      "Premium Performance Marketing mit Fokus auf Konversion. Strategie, Umsetzung und skalierbare Systeme—gebaut zum Wachsen.",
    pages: "Seiten",
    contact: "Kontakt",
    social: "Social",
    rights: "Alle Rechte vorbehalten.",
    built: "Gebaut für Tempo, Klarheit und Konversionen.",
    management: "Österreich (Management)",
  },
  hero: {
    badge: "Premium, konversionsstarke Wachstumssysteme",
    titleBefore: "Skalieren Sie Ihr Business mit",
    titleHighlight: "Performance Marketing",
    subtitle:
      "SEO, Ads und Design, die echtes Wachstum liefern. Wir bauen Akquise-Systeme mit konsequentem Fokus auf ROI.",
    bookCall: "Termin vereinbaren",
    viewServices: "Leistungen ansehen",
    metrics: {
      roi: "Ø ROI",
      time: "Time-to-Value",
      delivery: "Lieferung",
    },
    metricsValues: { roi: "3,4×", time: "14 Tage", delivery: "Globales Team" },
    dashboardAlt: "Modernes Marketing-Dashboard",
    weeklyPipeline: "Wöchentliche Pipeline",
    cac: "CAC",
    conversions: "Konversionen",
  },
  servicesPreview: {
    kicker: "Leistungen",
    title: "Alles für Wachstum—ohne Ballast",
    subtitle:
      "Ein fokussierter Stack aus Performance-Kanälen, der zusammenarbeitet: Akquise, Conversion, Retention und Skalierung.",
    explore: "Alle Leistungen",
    viewMobile: "Leistungen ansehen",
    learnMore: "Mehr erfahren →",
    items: {
      "seo-optimization": {
        title: "SEO-Optimierung",
        description:
          "Technisches SEO, Content-Strategie und Aufbau von Autorität.",
      },
      "google-ads": {
        title: "Google Ads",
        description:
          "High-Intent-Kampagnen mit messbaren Conversion-Lifts auf der Landingpage.",
      },
      "social-media-marketing": {
        title: "Social-Media-Marketing",
        description:
          "Kreativ + Paid Social, abgestimmt auf profitable Akquise.",
      },
      "website-development": {
        title: "Webentwicklung",
        description:
          "Schnelle, moderne Websites für Conversion und Klarheit.",
      },
      "graphic-design": {
        title: "Grafikdesign",
        description:
          "Premium-Visuals für Glaubwürdigkeit und Markenwiedererkennung.",
      },
      "analytics-and-cro": {
        title: "Analytics & CRO",
        description:
          "Funnel-Messung, Tests und kontinuierliche Verbesserungen.",
      },
    },
  },
  howItWorks: {
    kicker: "So arbeiten wir",
    title: "Ein einfaches System, das sich verstärkt",
    subtitle:
      "Wir „machen nicht einfach Marketing“. Wir bauen eine messbare Wachstumsschleife—und iterieren, bis sie skaliert.",
    steps: [
      {
        title: "Wir verstehen Ihr Business",
        text: "Wir kartieren Angebot, Zielgruppe und Rahmenbedingungen—und definieren den schnellsten Weg zu Wachstum.",
      },
      {
        title: "Wir entwickeln die Strategie",
        text: "Kanalwahl, Messaging, Kreativ-Richtung und Messung—aufgebaut um ROI.",
      },
      {
        title: "Wir setzen um & skalieren",
        text: "Launch, Optimierung und wiederholbare Experimente mit klaren Feedback-Schleifen.",
      },
    ],
  },
  whyChooseUs: {
    kicker: "Warum PermaGrowth",
    title: "Premium-Umsetzung, wenig Overhead",
    subtitle:
      "Senior-Strategie und präzise Lieferung ohne Agentur-Ballast. Schnell, verantwortungsvoll skalierbar.",
    points: [
      {
        title: "Kosteneffizientes globales Team",
        text: "Führung aus Österreich mit einem leistungsstarken Remote-Team in Pakistan und Dubai.",
      },
      {
        title: "Fokus auf hohen ROI",
        text: "Wir messen Pipeline, CAC, Conversion und Profit—keine Vanity-Metriken.",
      },
      {
        title: "Schnelle Lieferung",
        text: "Straffe Zyklen mit klarem Scope, Timelines und wöchentlichen Verbesserungen.",
      },
      {
        title: "Skalierbare Operations",
        text: "Wiederholbare Systeme, Dokumentation und Reporting für langfristiges Wachstum.",
      },
    ],
  },
  testimonials: {
    kicker: "Stimmen",
    title: "Überzeugt Teams, denen Ergebnisse wichtig sind",
    subtitle:
      "Ein paar Worte von Kund:innen, nachdem wir Akquise- und Conversion-Systeme geschärft haben.",
    quotes: [
      {
        name: "Amina K.",
        role: "Gründerin, DTC-Marke",
        text: "PermaGrowth hat Funnel und Ads neu aufgesetzt. Endlich planbarer CAC und ein klares Wochen-Rhythmus für Optimierung.",
      },
      {
        name: "Lukas M.",
        role: "Head of Growth, SaaS",
        text: "Klare Strategie, schnelle Umsetzung, echtes Reporting. Landingpages und Kampagnen konvertieren sofort.",
      },
      {
        name: "Noor A.",
        role: "Marketing Lead, B2B",
        text: "Von vielen Experimenten zu einem disziplinierten Wachstumssystem. ROI-Tracking ist sauber, Entscheidungen einfacher.",
      },
    ],
  },
  finalCta: {
    kicker: "Bereit zu wachsen?",
    title: "Lassen Sie uns die nächste Wachstumsphase bauen",
    subtitle:
      "Kostenlose Beratung mit klarem Aktionsplan—Kanäle, Quick Wins und Roadmap zur Skalierung.",
    button: "Jetzt starten",
  },
  about: {
    kicker: "Über uns",
    title: "Management aus Österreich, Umsetzung global",
    intro:
      "PermaGrowth ist ein Performance-Marketing-Studio mit Führung aus Österreich und einem verteilten Team in Pakistan und Dubai. Wir verbinden Strategie, Kreativität und Engineering zu Wachstumssystemen auf Senior-Niveau—mit hoher Geschwindigkeit.",
    cards: [
      {
        title: "So arbeiten wir",
        body: "Schlanke, erfahrene Teams. Sie arbeiten direkt mit Strateg:innen, Kreativen und Builder:innen—ohne viele Account-Ebenen. Kommunikation async-first mit klaren Wochen-Rhythmen.",
      },
      {
        title: "Globales Team",
        body: "Kern-Management in Österreich, Umsetzung in Pakistan und Dubai. Europäische Strategie und Nähe zum Kunden mit effizienter, leistungsstarker Lieferung.",
      },
      {
        title: "Worum es uns geht",
        body: "Klarheit, Tempo und zusammengesetzter Impact. Jedes Mandat startet mit einer präzisen Hypothese, woher Wachstum kommt—und wie wir sie schnell testen.",
      },
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Erzählen Sie uns von Ihrer nächsten Wachstumsphase",
    intro:
      "Kurz Produkt, aktuelle Kanäle und Ziele für die nächsten 6–12 Monate. Wir melden uns mit einem kompakten, unverbindlichen Plan.",
    emailLabel: "E-Mail",
    managementLabel: "Management",
    managementValue: "Österreich",
  },
  contactForm: {
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    message: "Projektdetails",
    namePh: "Ihr Name",
    emailPh: "sie@firma.de",
    phonePh: "+43 …",
    messagePh: "Wo stehen Sie heute—und wie sieht „großartig“ aus?",
    submit: "Nachricht senden",
    sending: "Wird gesendet…",
    success: "Nachricht gesendet. Wir melden uns in Kürze.",
    errorSend:
      "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt per E-Mail.",
    errorNetwork:
      "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
    errors: {
      name: "Bitte geben Sie Ihren Namen ein.",
      email: "Bitte geben Sie eine gültige E-Mail ein.",
      phone: "Bitte geben Sie eine gültige Telefonnummer ein (min. 6 Zeichen).",
      message: "Erzählen Sie etwas mehr über Ihr Projekt.",
    },
  },
  servicesPage: {
    kicker: "Leistungen",
    title: "Ein fokussierter Stack für messbares Wachstum",
    intro:
      "Jede Leistung steckt in einem Performance-System. Kein Rauschen, keine Vanity—nur Kanäle, die sich über Zeit verstärken.",
    viewDetails: "Details ansehen",
    cards: {
      "seo-optimization": {
        name: "SEO-Optimierung",
        summary:
          "Technisches, On-Page- und Content-SEO für nachhaltiges organisches Wachstum.",
        bullets: [
          "Technische Audits, Architektur und Crawlability",
          "Content-Strategie und Redaktionspläne nach Suchintention",
          "On-Page, interne Verlinkung und Schema",
        ],
      },
      "google-ads": {
        name: "Google Ads",
        summary:
          "Intent-starke Search, Performance Max und Remarketing mit ROI-Fokus.",
        bullets: [
          "Account-Struktur und Keyword-Strategie",
          "Ad-Copy und Creative-Testing für hohe Conversion",
          "Landingpages und Conversion-Tracking",
        ],
      },
      "social-media-marketing": {
        name: "Social-Media-Marketing",
        summary:
          "Bezahltes und organisches Social, das Marke und Pipeline stärkt.",
        bullets: [
          "Kanalwahl und Content-Säulen",
          "Kreativ-Konzepte, Hooks und Visuals",
          "Paid-Social-Funnels und Always-on-Kampagnen",
        ],
      },
      "website-development": {
        name: "Webentwicklung",
        summary:
          "Schnelle, konversionsstarke Websites mit Premium-Feeling.",
        bullets: [
          "UX und Informationsarchitektur mit Klarheit",
          "Performantes Frontend mit sauberen Interaktionen",
          "Analytics, Tracking und Experimente von Anfang an",
        ],
      },
      "graphic-design": {
        name: "Grafikdesign",
        summary:
          "Ein visuelles System, das jeden Touchpoint bewusst macht.",
        bullets: [
          "Brand-Kits, Typografie und Farbsysteme",
          "Ad-Kreativ, Social-Templates und Sales-Assets",
          "Web- und Produktdesign entlang des Funnels",
        ],
      },
      "analytics-and-cro": {
        name: "Analytics & CRO",
        summary:
          "Messung und Experimente: aus Traffic wird Umsatz.",
        bullets: [
          "Analytics-Setup und verlässliche Dashboards",
          "Funnel-Analyse und Chancen-Mapping",
          "Strukturierte A/B-Tests und Reporting",
        ],
      },
    },
  },
  serviceDetail: {
    "seo-optimization": {
      kicker: "Leistung",
      title: "SEO-Optimierung",
      intro:
        "PermaGrowth baut SEO-Fundamente, die sich verstärken. Technische Audits, intent-getriebene Inhalte und On-Page-Optimierung machen organische Suche zu einem planbaren Kanal.",
      columns: [
        {
          kind: "list",
          heading: "Was wir tun",
          items: [
            "Technische & Crawl-Audits, Architektur und Indexierung",
            "Suchintention, Content-Roadmaps mit Umsatzbezug",
            "On-Page, interne Links und Schema",
            "Dashboards mit den Metriken, die zählen",
          ],
        },
        {
          kind: "text",
          heading: "Für wen",
          body: "Marken mit starkem Produkt und uneinheitlichem Inbound. Wenn Sie heute Traffic kaufen oder Content-Chancen liegen lassen, lässt sich SEO mit Ihrem Aufwand compounden statt jeden Klick zu mieten.",
        },
        {
          kind: "list",
          heading: "Ergebnisse",
          items: [
            "Schnelle, vertrauenswürdige Seiten für Nutzer:innen und Suchmaschinen",
            "Inhalte für Buying-Intent, nicht nur Impressionen",
            "Klare Messung des SEO-Beitrags zu Pipeline und Umsatz",
          ],
        },
      ],
    },
    "google-ads": {
      kicker: "Leistung",
      title: "Google Ads",
      intro:
        "Wir bauen Google-Ads-Konten um Intent—nicht nur Keywords. Struktur, Kreativ und Landingpages sind auf Cost-per-Opportunity ausgerichtet, nicht nur Klicks.",
      columns: [
        {
          kind: "list",
          heading: "Hebel",
          items: [
            "Account-Struktur nach Funnel-Stage und Match-Type",
            "Search, Performance Max, Remarketing und Brand-Schutz",
            "Überzeugende Texte, Extensions und Test-Frameworks",
            "Dedizierte Landingpages für die Intention hinter dem Klick",
          ],
        },
        {
          kind: "text",
          heading: "Messung",
          body: "Sauberes Conversion-Tracking und einheitliche Benennung, damit Reports vertrauenswürdig sind. Sie sehen, welche Kampagnen Pipeline speisen—und welche aus sollten.",
        },
        {
          kind: "list",
          heading: "Was Sie bekommen",
          items: [
            "Klares Akquise-Modell über Brand und Non-Brand",
            "Landingpages und Experimente für höhere Conversion-Rate",
            "Wöchentliches Reporting mit Empfehlungen—nicht nur Zahlen",
          ],
        },
      ],
    },
    "social-media-marketing": {
      kicker: "Leistung",
      title: "Social-Media-Marketing",
      intro:
        "Wir gestalten Social-Systeme, die mehr als Likes sammeln. Von Content-Säulen bis Paid-Funnels ist jeder Touchpoint darauf ausgelegt, Entscheidungen zu beschleunigen.",
      columns: [
        {
          kind: "list",
          heading: "Content & Kreativ",
          items: [
            "Kanalstrategie für Instagram, LinkedIn, X und TikTok",
            "Content-Säulen passend zu Narrativ und Angebot",
            "Kreativ-Richtung, Templates und Motion-Guidelines",
          ],
        },
        {
          kind: "list",
          heading: "Paid Social",
          items: [
            "Audiences, Exclusions und Creative-Testing in Skala",
            "Full-Funnel-Kampagnen von kalt bis Retention",
            "Landing-Erlebnisse, die zu Ad und Plattform passen",
          ],
        },
        {
          kind: "text",
          heading: "Warum es wirkt",
          body: "Wir behandeln Social als Performance-Kanal mit Marken-Anspruch. Konstante Kreative und eine klare Schleife zwischen Impressionen, Engagement und Umsatz downstream.",
        },
      ],
    },
    "website-development": {
      kicker: "Leistung",
      title: "Webentwicklung",
      intro:
        "Ihre Website ist die Kontrollgruppe Ihrer Experimente. Wir gestalten und bauen schnelle, klare Sites, die Ihr Angebot zeigen und den nächsten Schritt einfach machen.",
      columns: [
        {
          kind: "list",
          heading: "Experience",
          items: [
            "Informationsarchitektur entlang des Kaufprozesses",
            "Klare Message-Hierarchie und conversion-orientierter Copy",
            "Responsive Layouts mit Premium-Feeling auf jedem Gerät",
          ],
        },
        {
          kind: "list",
          heading: "Engineering",
          items: [
            "Moderner Next.js-Stack mit Performance by Design",
            "Analytics, Pixel und Event-Tracking korrekt verdrahtet",
            "SEO-freundliche Struktur und Best Practices",
          ],
        },
        {
          kind: "text",
          heading: "Kontinuierliche Iteration",
          body: "Launch ist kein Endpunkt. Wir testen Headlines, Layouts und Angebote weiter, damit die Seite mit jeder Kohorte besser wird.",
        },
      ],
    },
    "graphic-design": {
      kicker: "Leistung",
      title: "Grafikdesign",
      intro:
        "Starkes Design schafft Vertrauen vor dem ersten Sales-Call. Wir entwickeln visuelle Systeme, die klar, glaubwürdig und merkbar sind—auf jedem Kanal.",
      columns: [
        {
          kind: "list",
          heading: "Marken-Basics",
          items: [
            "Logo-Feinschliff, Typografie und Farbsysteme",
            "Guidelines für konsistente Anwendung",
            "Komponentenbibliotheken für Marketing und Produkt",
          ],
        },
        {
          kind: "list",
          heading: "Performance-Kreativ",
          items: [
            "Ad-Konzepte und Varianten zum Testen",
            "Social-Templates für wöchentlichen Output",
            "Sales-Material, Decks und One-Pager zum Abschluss",
          ],
        },
        {
          kind: "text",
          heading: "Warum es zählt",
          body: "Visuals erzählen eine Geschichte, bevor Copy gelesen wird. Wir sorgen dafür, dass sie zum Produktniveau passt—und zu den Preisen, die Sie erzielen wollen.",
        },
      ],
    },
    "analytics-and-cro": {
      kicker: "Leistung",
      title: "Analytics & CRO",
      intro:
        "Wir machen aus Site- und Kampagnendaten eine klare Test-Roadmap. Statt Raten wissen Sie, welche Änderungen Umsatz bewegen.",
      columns: [
        {
          kind: "list",
          heading: "Instrumentation",
          items: [
            "Sauberes Analytics über Web, Produkt und Kampagnen",
            "Event-Tracking für Schlüsselaktionen, nicht nur Pageviews",
            "Dashboards als Single Source of Truth",
          ],
        },
        {
          kind: "list",
          heading: "Experimente",
          items: [
            "Hypothesen-getriebene Tests zu Copy, Layout und Angebot",
            "Priorisierung nach Hebelwirkung",
            "Klare Auswertung und nächste Schritte",
          ],
        },
        {
          kind: "text",
          heading: "Business-Impact",
          body: "Analytics und CRO sind mehr als Dashboards. Ziel: mehr Umsatz pro Besucher:in, Klick und Impression, die Sie bereits finanzieren.",
        },
      ],
    },
  },
};

const en: DictionaryShape = {
  meta: {
    siteTitle: "PermaGrowth — Performance Marketing Agency",
    siteTitleTemplate: "%s — PermaGrowth",
    siteDescription:
      "Premium performance marketing for modern brands: SEO, Ads, and Design that generate real growth.",
    ogDescription:
      "SEO, Ads, and Design that generate real growth. Conversion-focused systems built to scale.",
    home: {
      title: "Home",
      description:
        "Scale your business with performance marketing—SEO, Ads, and Design that generate real growth.",
    },
    about: {
      title: "About",
      description:
        "Learn more about PermaGrowth’s Austria-led, globally distributed team and how we approach growth.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with PermaGrowth for performance marketing, design, and growth execution.",
    },
    services: {
      title: "Services",
      description:
        "Explore PermaGrowth’s performance marketing services across SEO, ads, social, web, design, and analytics.",
    },
    servicePages: {
      "seo-optimization": {
        title: "SEO Optimization",
        description:
          "Technical SEO, content strategy, and on-page optimization to unlock compounding organic traffic.",
      },
      "google-ads": {
        title: "Google Ads",
        description:
          "High-intent Google Ads campaigns, landing pages, and tracking designed for profitable acquisition.",
      },
      "social-media-marketing": {
        title: "Social Media Marketing",
        description:
          "Paid and organic social media marketing that drives awareness, engagement, and revenue.",
      },
      "website-development": {
        title: "Website Development",
        description:
          "High-performance, conversion-focused websites that express your brand and move visitors to action.",
      },
      "graphic-design": {
        title: "Graphic Design",
        description:
          "Brand and marketing design that gives every touchpoint a consistent, premium feel.",
      },
      "analytics-and-cro": {
        title: "Analytics & CRO",
        description:
          "Analytics and conversion rate optimization to turn existing traffic into predictable revenue.",
      },
    },
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Get Free Consultation",
    ctaShort: "Consult",
  },
  languageSwitcher: {
    aria: "Choose language",
    de: "DE",
    en: "EN",
  },
  footer: {
    tagline:
      "Premium, conversion-focused performance marketing. Strategy, execution, and scalable systems—built to compound.",
    pages: "Pages",
    contact: "Contact",
    social: "Social",
    rights: "All rights reserved.",
    built: "Built for speed, clarity, and conversions.",
    management: "Austria (Management)",
  },
  hero: {
    badge: "Premium, conversion-focused growth systems",
    titleBefore: "Scale Your Business with",
    titleHighlight: "Performance Marketing",
    subtitle:
      "SEO, Ads, and Design that generate real growth. We build compounding acquisition systems with ruthless focus on ROI.",
    bookCall: "Book a Call",
    viewServices: "View Services",
    metrics: {
      roi: "Avg. ROI",
      time: "Time to value",
      delivery: "Delivery",
    },
    metricsValues: { roi: "3.4×", time: "14 days", delivery: "Global team" },
    dashboardAlt: "Modern marketing dashboard",
    weeklyPipeline: "Weekly pipeline",
    cac: "CAC",
    conversions: "Conversions",
  },
  servicesPreview: {
    kicker: "Services",
    title: "Everything you need to grow—without the bloat",
    subtitle:
      "A focused stack of performance channels designed to work together: acquire, convert, retain, and scale.",
    explore: "Explore all services",
    viewMobile: "View services",
    learnMore: "Learn more →",
    items: {
      "seo-optimization": {
        title: "SEO Optimization",
        description:
          "Technical SEO, content strategy, and authority building.",
      },
      "google-ads": {
        title: "Google Ads",
        description:
          "High-intent campaigns with landing page conversion lifts.",
      },
      "social-media-marketing": {
        title: "Social Media Marketing",
        description:
          "Creative + paid social tuned for profitable acquisition.",
      },
      "website-development": {
        title: "Website Development",
        description:
          "Fast, modern websites built for conversion and clarity.",
      },
      "graphic-design": {
        title: "Graphic Design",
        description:
          "Premium visual systems for credibility and brand recall.",
      },
      "analytics-and-cro": {
        title: "Analytics & CRO",
        description:
          "Funnel measurement, testing, and compounding improvements.",
      },
    },
  },
  howItWorks: {
    kicker: "How it works",
    title: "A simple system that compounds",
    subtitle:
      "We don’t “do marketing.” We engineer a measurable growth loop—then iterate until it scales.",
    steps: [
      {
        title: "We Understand Your Business",
        text: "We map your offer, customers, and constraints—then define the fastest path to growth.",
      },
      {
        title: "We Build Strategy",
        text: "Channel selection, messaging, creative direction, and measurement—built around ROI.",
      },
      {
        title: "We Execute & Scale",
        text: "Launch, optimize, and compound wins with structured experiments and tight feedback loops.",
      },
    ],
  },
  whyChooseUs: {
    kicker: "Why PermaGrowth",
    title: "Premium execution, minimal overhead",
    subtitle:
      "You get senior strategy and crisp delivery without the agency bloat. Built to move fast and scale responsibly.",
    points: [
      {
        title: "Cost-efficient global team",
        text: "Austria-based leadership with a high-output remote team across Pakistan and Dubai.",
      },
      {
        title: "High ROI focus",
        text: "We measure what matters: pipeline, CAC, conversion rate, and profit—not vanity metrics.",
      },
      {
        title: "Fast delivery",
        text: "Tight execution cycles with clear scope, timelines, and weekly improvements.",
      },
      {
        title: "Scalable operations",
        text: "Repeatable systems, documentation, and reporting designed for long-term growth.",
      },
    ],
  },
  testimonials: {
    kicker: "Testimonials",
    title: "Loved by teams that care about outcomes",
    subtitle:
      "A few words from clients after we tightened their acquisition and conversion systems.",
    quotes: [
      {
        name: "Amina K.",
        role: "Founder, DTC Brand",
        text: "PermaGrowth rebuilt our funnel and ad stack. We finally have predictable CAC and a clear weekly optimization cadence.",
      },
      {
        name: "Lukas M.",
        role: "Head of Growth, SaaS",
        text: "Clean strategy, fast execution, and real reporting. The team shipped landing pages and campaigns that converted immediately.",
      },
      {
        name: "Noor A.",
        role: "Marketing Lead, B2B",
        text: "We moved from scattered experiments to a disciplined growth system. ROI tracking is airtight and decisions are easier.",
      },
    ],
  },
  finalCta: {
    kicker: "Ready to Grow?",
    title: "Let’s build the next phase of your growth",
    subtitle:
      "Get a free consultation with a clear action plan—channels, quick wins, and a roadmap to scale.",
    button: "Start Now",
  },
  about: {
    kicker: "About",
    title: "Austria-based management, global execution",
    intro:
      "PermaGrowth is a performance marketing studio led from Austria, working with a distributed team across Pakistan and Dubai. We blend strategy, creative, and engineering to build growth systems that feel senior—but move fast.",
    cards: [
      {
        title: "How we work",
        body: "We keep teams lean and senior. You work directly with strategists, creatives, and builders—not layers of account managers. Communication is async-first with clear weekly rhythms.",
      },
      {
        title: "Global team",
        body: "Our core management sits in Austria, with execution talent in Pakistan and Dubai. This lets us combine European strategy and client proximity with a high-output, cost-efficient delivery engine.",
      },
      {
        title: "What we care about",
        body: "We care about clarity, speed, and compounding impact. Every engagement starts with a crisp hypothesis about where growth will come from—and a plan to test it quickly.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Tell us about your next growth phase",
    intro:
      "Share a bit about your product, current channels, and what you’d like to see in the next 6–12 months. We’ll respond with a short, no-pressure plan.",
    emailLabel: "Email",
    managementLabel: "Management",
    managementValue: "Austria",
  },
  contactForm: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Project details",
    namePh: "Your name",
    emailPh: "you@company.com",
    phonePh: "+43 …",
    messagePh: "Where are you today, and what would great look like?",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent. We'll get back to you shortly.",
    errorSend:
      "Could not send your message. Please try again later or email us directly.",
    errorNetwork:
      "Network error. Check your connection and try again.",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email.",
      phone: "Please enter a valid phone number (at least 6 characters).",
      message: "Tell us a bit more about your project.",
    },
  },
  servicesPage: {
    kicker: "Services",
    title: "A focused stack built to ship growth",
    intro:
      "Every service is designed to plug into a single performance system. No noise, no vanity—just channels that compound over time.",
    viewDetails: "View details",
    cards: {
      "seo-optimization": {
        name: "SEO Optimization",
        summary:
          "Technical, on-page, and content SEO for compounding organic growth.",
        bullets: [
          "Technical audits, site architecture, and crawlability fixes",
          "Search-intent driven content strategy and editorial calendars",
          "On-page optimization, internal linking, and schema",
        ],
      },
      "google-ads": {
        name: "Google Ads",
        summary:
          "High-intent search, Performance Max, and remarketing built for ROI.",
        bullets: [
          "Account restructuring and keyword strategy",
          "High-converting ad copy and creative testing",
          "Landing page optimization and conversion tracking",
        ],
      },
      "social-media-marketing": {
        name: "Social Media Marketing",
        summary:
          "Paid and organic social that amplifies your brand and pipeline.",
        bullets: [
          "Channel selection and content pillars",
          "Creative concepts, hooks, and thumb-stopping visuals",
          "Paid social funnels and always-on campaigns",
        ],
      },
      "website-development": {
        name: "Website Development",
        summary:
          "Fast, conversion-focused websites with a premium brand feel.",
        bullets: [
          "UX and information architecture built around clarity",
          "High-performance front-end with clean interactions",
          "Analytics, tracking, and experimentation baked in",
        ],
      },
      "graphic-design": {
        name: "Graphic Design",
        summary:
          "A cohesive visual system that makes every touchpoint feel intentional.",
        bullets: [
          "Brand kits, typography, and color systems",
          "Ad creative, social templates, and sales assets",
          "Web and product design aligned with your funnel",
        ],
      },
      "analytics-and-cro": {
        name: "Analytics & CRO",
        summary:
          "Measurement and experimentation to turn traffic into revenue.",
        bullets: [
          "Analytics implementation and source-of-truth dashboards",
          "Funnel analysis and opportunity mapping",
          "Structured A/B testing roadmap and reporting",
        ],
      },
    },
  },
  serviceDetail: {
    "seo-optimization": {
      kicker: "Service",
      title: "SEO Optimization",
      intro:
        "PermaGrowth builds SEO foundations that compound. We combine technical audits, search-intent driven content, and on-page optimization to turn organic search into a reliable acquisition channel.",
      columns: [
        {
          kind: "list",
          heading: "What we do",
          items: [
            "Technical and crawl audits, site architecture, and index management",
            "Search-intent research and content roadmaps aligned to revenue",
            "On-page optimization, internal linking, and schema implementation",
            "Performance dashboards that surface the metrics that matter",
          ],
        },
        {
          kind: "text",
          heading: "Who it’s for",
          body: "Brands with strong products and inconsistent inbound. If you’re paying for traffic today or sitting on unused content opportunities, SEO lets you compound that effort instead of renting every click.",
        },
        {
          kind: "list",
          heading: "Outcomes",
          items: [
            "Clean, fast pages that search engines and customers trust",
            "Content that ranks for buying-intent queries, not just impressions",
            "Clear measurement of SEO’s contribution to pipeline and revenue",
          ],
        },
      ],
    },
    "google-ads": {
      kicker: "Service",
      title: "Google Ads",
      intro:
        "We rebuild Google Ads accounts around intent, not keywords alone. From structure to creative to landing pages, everything is tuned to cost-per opportunity—not just clicks.",
      columns: [
        {
          kind: "list",
          heading: "Core levers",
          items: [
            "Account restructuring by funnel stage and match type",
            "Search, Performance Max, remarketing, and brand protection",
            "Compelling ad copy, extensions, and testing frameworks",
            "Dedicated landing pages built for the query behind the click",
          ],
        },
        {
          kind: "text",
          heading: "Measurement",
          body: "We implement clean conversion tracking and standardize naming so your team can trust every report. You’ll know exactly which campaigns are feeding pipeline—and which to turn off.",
        },
        {
          kind: "list",
          heading: "What you get",
          items: [
            "A clear acquisition model across branded and non-branded terms",
            "Landing pages and experiments designed to lift conversion rate",
            "Weekly reporting with recommendations—not just numbers",
          ],
        },
      ],
    },
    "social-media-marketing": {
      kicker: "Service",
      title: "Social Media Marketing",
      intro:
        "We design social systems that do more than collect likes. From content pillars to paid funnels, every touchpoint is built to move people closer to a decision.",
      columns: [
        {
          kind: "list",
          heading: "Content & creative",
          items: [
            "Channel strategy across Instagram, LinkedIn, X, and TikTok",
            "Content pillars mapped to your brand narrative and offers",
            "Creative direction, templates, and motion guidelines",
          ],
        },
        {
          kind: "list",
          heading: "Paid social",
          items: [
            "Audience design, exclusions, and creative testing at scale",
            "Full-funnel campaign structures from cold to retention",
            "Landing experiences that feel native to the ad and platform",
          ],
        },
        {
          kind: "text",
          heading: "Why it works",
          body: "We treat social as a performance channel with brand-level craft. You get consistent creative output and a clear feedback loop between impressions, engagement, and downstream revenue.",
        },
      ],
    },
    "website-development": {
      kicker: "Service",
      title: "Website Development",
      intro:
        "Your website is the control in your growth experiments. We design and build fast, opinionated sites that showcase your offer and make it effortless to take the next step.",
      columns: [
        {
          kind: "list",
          heading: "Experience",
          items: [
            "Information architecture built around how customers buy",
            "Clear messaging hierarchy and conversion-focused copy",
            "Responsive layouts that feel premium on every device",
          ],
        },
        {
          kind: "list",
          heading: "Engineering",
          items: [
            "Modern Next.js stack with performance baked in",
            "Analytics, pixels, and event tracking wired correctly",
            "SEO-friendly structure and best practices by default",
          ],
        },
        {
          kind: "text",
          heading: "Ongoing iteration",
          body: "We don’t treat launch as the finish line. We help you continuously test headlines, layouts, and offers so your site gets better with every cohort.",
        },
      ],
    },
    "graphic-design": {
      kicker: "Service",
      title: "Graphic Design",
      intro:
        "Great design builds trust before a single sales call. We create visual systems that make your brand feel clear, credible, and memorable across every channel.",
      columns: [
        {
          kind: "list",
          heading: "Brand foundations",
          items: [
            "Logo refinements, typography, and color systems",
            "Usage guidelines that keep everything consistent",
            "Component libraries for marketing and product teams",
          ],
        },
        {
          kind: "list",
          heading: "Performance creative",
          items: [
            "Ad concepts and variations designed to be tested",
            "Social media templates that are easy to ship weekly",
            "Sales collateral, decks, and one-pagers that close deals",
          ],
        },
        {
          kind: "text",
          heading: "Why it matters",
          body: "Your visuals tell a story long before copy is read. We make sure that story matches the level of your product—and the prices you want to command.",
        },
      ],
    },
    "analytics-and-cro": {
      kicker: "Service",
      title: "Analytics & CRO",
      intro:
        "We turn your site and campaign data into a clear testing roadmap. Instead of guessing, you’ll know exactly which changes move the needle on revenue.",
      columns: [
        {
          kind: "list",
          heading: "Instrumentation",
          items: [
            "Clean analytics setup across web, product, and campaigns",
            "Event tracking for key actions, not just pageviews",
            "Source-of-truth dashboards your team can rely on",
          ],
        },
        {
          kind: "list",
          heading: "Experimentation",
          items: [
            "Hypothesis-driven tests across copy, layout, and offer",
            "Prioritization frameworks to focus on high-leverage ideas",
            "Clear experiment readouts with next steps",
          ],
        },
        {
          kind: "text",
          heading: "Business impact",
          body: "Analytics and CRO are about more than dashboards. Our goal is simple: increase the revenue you get from every visitor, click, and impression you already pay for.",
        },
      ],
    },
  },
};

export const dictionaries = { de, en } as const;

export type Dictionary = DictionaryShape;
