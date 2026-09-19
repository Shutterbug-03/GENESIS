import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Uma Sheshgiri | Senior Gynecologist & Infertility Specialist Bengaluru",
  description:
    "Meet Dr. Uma Sheshgiri (MBBS, MD - BMC, DGO, Fellow in ART Kiel Germany). Over 40 years of continuous clinical practice in gynecology, obstetrics, and infertility care in Bengaluru.",
  alternates: {
    canonical: "https://vcusgenesis.com/about",
  },
  openGraph: {
    title: "About Dr. Uma Sheshgiri | VCUS Genesis Bengaluru",
    description:
      "Four decades of humanized obstetrics, natural delivery advocacy, and European-trained assisted reproduction in New BEL Road, Bengaluru.",
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

