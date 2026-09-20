import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Uma Sheshgiri | Senior Gynecologist & Infertility Specialist Bengaluru",
  description:
    "Meet Dr. Uma Sheshgiri (MBBS, DGO, MD (OBG - BMC), Certified Diploma in ART Germany). Senior Obstetrician & Gynaecologist with 45+ years of clinical experience and Chairman, IMA-AMS Bangalore Chapter.",
  alternates: {
    canonical: "https://vcusgenesis.com/about",
  },
  openGraph: {
    title: "About Dr. Uma Sheshgiri | VCUS Genesis Bengaluru",
    description:
      "Over 45 years of clinical excellence, 15 years Karnataka Government healthcare leadership, and certified ART training in New BEL Road, Bengaluru.",
    url: "https://vcusgenesis.com/about",
    siteName: "VCUS Genesis Women's Health & Infertility",
    images: [
      {
        url: "https://vcusgenesis.com/images/dr_uma_clinic.jpg",
        width: 807,
        height: 975,
        alt: "Dr. Uma Sheshgiri, Senior Gynecologist & Obstetrician",
      },
    ],
    type: "profile",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

