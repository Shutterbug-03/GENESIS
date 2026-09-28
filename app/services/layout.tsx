import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cosmetic Gynaecology, Obstetrics & Fertility Services | VCUS Genesis Bangalore",
  description:
    "Advanced cosmetic gynaecology treatments in Bangalore (vaginal rejuvenation, tightening, labiaplasty, PRP intimate wellness, post-delivery restoration) performed in a safe, hospital-based setting at VCUS Genesis, New BEL Road.",
  keywords: [
    "cosmetic gynaecology bangalore",
    "vaginal rejuvenation bangalore",
    "vaginal tightening bangalore",
    "labiaplasty bangalore",
    "post delivery vaginal restoration bangalore",
    "treatment for vaginal dryness bangalore",
    "stress urinary incontinence treatment bangalore",
    "prp therapy for intimate wellness bangalore",
    "dr uma sheshgiri bangalore",
    "women hospital new bel road bangalore",
  ],
  alternates: {
    canonical: "https://vcusgenesis.com/services",
  },
  openGraph: {
    title: "Cosmetic Gynaecology & Clinical Care Pathways | VCUS Genesis Bangalore",
    description:
      "Our hospital offers advanced cosmetic gynaecology treatments in Bangalore, tailored to individual needs and performed in a safe, hospital-based setting with Dr. Uma Sheshgiri.",
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

