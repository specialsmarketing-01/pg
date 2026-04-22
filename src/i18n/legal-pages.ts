import type { Locale } from "./config";
import { SITE_EMAIL } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPageData = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  sections: LegalSection[];
};

function mail(): string {
  return SITE_EMAIL;
}

export function getImpressumPage(locale: Locale): LegalPageData {
  if (locale === "en") {
    return {
      metaTitle: "Legal notice (Imprint)",
      metaDescription:
        "Legal information and provider identification for PermaGrowth in accordance with applicable law.",
      kicker: "Legal notice",
      title: "Imprint",
      sections: [
        {
          heading: "Information pursuant to § 5 TMG / provider identification",
          paragraphs: [
            "PermaGrowth — Digital Marketing Agency",
            "Owner: Hari Krishan Kumar",
            `Email: ${mail()}`,
            "Further company information (legal form, full registered address, commercial register, VAT ID, and similar details) is currently under development and will be published here in due course.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `For enquiries you can reach us at the email address above. Response times may vary depending on workload.`,
          ],
        },
        {
          heading: "Liability for content",
          paragraphs: [
            "As a service provider we are responsible for our own content on these pages in accordance with general law. We are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under applicable law remain unaffected.",
          ],
        },
        {
          heading: "Liability for links",
          paragraphs: [
            "Our offer may contain links to external third-party websites. We have no influence over their content. Therefore we cannot assume liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
          ],
        },
        {
          heading: "Copyright",
          paragraphs: [
            "Content and works created by the site operators on these pages are subject to applicable copyright law. Duplication, processing, distribution, or any kind of exploitation outside the limits of copyright requires prior written consent of the respective author or creator.",
          ],
        },
      ],
    };
  }

  return {
    metaTitle: "Impressum",
    metaDescription:
      "Gesetzliche Anbieterkennung und Kontaktinformationen von PermaGrowth.",
    kicker: "Impressum",
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG / Anbieterkennung",
        paragraphs: [
          "PermaGrowth — Digital Marketing Agency",
          "Inhaber: Hari Krishan Kumar",
          `E-Mail: ${mail()}`,
          "Weitere Unternehmensangaben (Rechtsform, vollständige ladungsfähige Anschrift, Handelsregistereintrag, UID-Nummer u. a.) befinden sich derzeit in Aufbau und werden nachgereicht.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          `Sie erreichen uns unter der oben genannten E-Mail-Adresse. Bearbeitungszeiten können je nach Aufkommen variieren.`,
        ],
      },
      {
        heading: "Haftung für Inhalte",
        paragraphs: [
          "Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
        ],
      },
      {
        heading: "Haftung für Links",
        paragraphs: [
          "Unser Angebot kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        ],
      },
      {
        heading: "Urheberrecht",
        paragraphs: [
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        ],
      },
    ],
  };
}

export function getDatenschutzPage(locale: Locale): LegalPageData {
  if (locale === "en") {
    return {
      metaTitle: "Privacy policy",
      metaDescription:
        "How PermaGrowth processes personal data when you use this website and the contact form.",
      kicker: "Privacy",
      title: "Privacy policy",
      sections: [
        {
          heading: "Controller",
          paragraphs: [
            "Responsible for data processing in connection with this website:",
            `PermaGrowth — Digital Marketing Agency, contact: ${mail()}`,
            "Please add your full legal entity name and postal address as required by your counsel.",
          ],
        },
        {
          heading: "Hosting",
          paragraphs: [
            "This site is hosted by Vercel Inc. (USA / global edge network). When you access pages, the provider may process technical data (e.g. IP address, timestamps, browser type) to deliver and secure the service. This is based on our legitimate interest in a stable and secure website (Art. 6(1)(f) GDPR), where GDPR applies.",
          ],
        },
        {
          heading: "Contact form",
          paragraphs: [
            "When you use the contact form, we process the data you enter (e.g. name, email, phone, message) to handle your request. The legal basis is Art. 6(1)(b) GDPR (steps prior to a contract) and/or Art. 6(1)(f) GDPR (responding to enquiries). Data is transmitted to our email inbox via SMTP and stored there according to normal email retention practices.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "We retain enquiry data only as long as necessary to process your request and any follow-up, unless longer retention is required by law.",
          ],
        },
        {
          heading: "Your rights (where GDPR applies)",
          paragraphs: [
            "You may have the right to access, rectification, erasure, restriction of processing, objection, and data portability. You may also lodge a complaint with a supervisory authority.",
          ],
        },
        {
          heading: "SSL / TLS",
          paragraphs: [
            "This site is delivered over encrypted connections (HTTPS) where supported by your browser and our hosting configuration.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may update this policy when our services or legal requirements change. The version published on this page applies.",
          ],
        },
      ],
    };
  }

  return {
    metaTitle: "Datenschutz",
    metaDescription:
      "Informationen zur Verarbeitung personenbezogener Daten bei Nutzung dieser Website und des Kontaktformulars.",
    kicker: "Datenschutz",
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "Verantwortlicher",
        paragraphs: [
          "Verantwortlich für die Datenverarbeitung im Zusammenhang mit dieser Website:",
          `PermaGrowth — Digital Marketing Agency, Kontakt: ${mail()}`,
          "Bitte ergänzen Sie hier durch Ihre Rechtsberatung: vollständiger Firmenname und ladungsfähige Anschrift.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Diese Website wird bei Vercel Inc. (USA / globales Edge-Netzwerk) gehostet. Beim Aufruf der Seiten kann der Anbieter technische Daten (z. B. IP-Adresse, Zeitstempel, Browsertyp) verarbeiten, um die Auslieferung und Sicherheit des Dienstes zu gewährleisten. Rechtsgrundlage ist unser berechtigtes Interesse an einem stabilen und sicheren Webauftritt (Art. 6 Abs. 1 lit. f DSGVO), soweit die DSGVO anwendbar ist.",
        ],
      },
      {
        heading: "Kontaktformular",
        paragraphs: [
          "Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten (z. B. Name, E-Mail, Telefon, Nachricht), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und/oder Art. 6 Abs. 1 lit. f DSGVO (Beantwortung von Anfragen). Die Daten werden per SMTP an unser E-Mail-Postfach übermittelt und dort gemäß den üblichen Aufbewahrungspraktiken für E-Mails gespeichert.",
        ],
      },
      {
        heading: "Speicherdauer",
        paragraphs: [
          "Wir speichern Anfragedaten nur so lange, wie es zur Bearbeitung Ihrer Anfrage und etwaiger Anschlusskommunikation erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        ],
      },
      {
        heading: "Ihre Rechte (soweit die DSGVO anwendbar ist)",
        paragraphs: [
          "Sie haben ggf. das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit. Außerdem steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.",
        ],
      },
      {
        heading: "SSL / TLS",
        paragraphs: [
          "Diese Website wird über verschlüsselte Verbindungen (HTTPS) ausgeliefert, soweit Ihr Browser und unsere Hosting-Konfiguration dies unterstützen.",
        ],
      },
      {
        heading: "Änderungen",
        paragraphs: [
          "Wir können diese Erklärung anpassen, wenn sich unsere Dienste oder rechtliche Anforderungen ändern. Maßgeblich ist die auf dieser Seite veröffentlichte Fassung.",
        ],
      },
    ],
  };
}
