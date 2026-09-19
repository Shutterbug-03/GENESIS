import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gynecology, Obstetrics & Fertility Services | VCUS Genesis Bengaluru",
  description:
    "Comprehensive women's healthcare services at New BEL Road: full-cycle pregnancy care, high-risk obstetrics, level-1 fertility evaluations, PCOS & fibroid management, and menopause clinics.",
  alternates: {
    canonical: "https://vcusgenesis.com/services",
  },
  openGraph: {
    title: "Clinical Services | VCUS Genesis Women's Health & Infertility",
    description:
      "From adolescent gynecology and preconception counseling to normal delivery support and menopause management in Bengaluru.",
    url: "https://vcusgenesis.com/services",
    siteName: "VCUS Genesis Women's Health & Infertility",
    images: [
      {
        url: "https://vcusgenesis.com/images/genesis_distinction_sanctuary.jpg",
        width: 1200,
        height: 900,
        alt: "VCUS Genesis Sanctuary Clinic Interior",
      },
    ],
    type: "website",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

