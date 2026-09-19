import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clinical Library & Notes | VCUS Genesis Bengaluru",
  description:
    "Evidence-based clinical guides on gynecology, high-risk pregnancy, level-1 fertility evaluations, and menopause care authored by Dr. Uma Sheshgiri (MD, DGO) in Bengaluru.",
  alternates: {
    canonical: "https://vcusgenesis.com/blog",
  },
  openGraph: {
    title: "Clinical Library & Notes | VCUS Genesis",
    description:
      "Notes on women's health written in plain language by Dr. Uma Sheshgiri, Senior Gynecologist & Obstetrician in Bengaluru.",
    url: "https://vcusgenesis.com/blog",
    siteName: "VCUS Genesis Women's Health & Infertility",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "VCUS Genesis Clinical Library & Notes",
      },
    ],
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

