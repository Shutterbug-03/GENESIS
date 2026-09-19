import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getBlogPost, getAllBlogSlugs } from "@/lib/blog-data"
import { BlogPostView } from "@/components/blog-post-view"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Article Not Found | VCUS Genesis",
      description: "The requested clinical guide could not be found.",
    }
  }

  const canonicalUrl = `https://vcusgenesis.com/blog/${post.slug}`

  return {
    title: `${post.metaTitle} | VCUS Genesis`,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | VCUS Genesis`,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "VCUS Genesis Women's Health & Infertility",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      section: post.category,
      tags: [post.tag, "Gynecology", "Bengaluru", "Dr. Uma Sheshgiri", "Women's Health"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metaTitle} | VCUS Genesis`,
      description: post.metaDescription,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => post.relatedSlugs.includes(p.slug) || (p.slug !== post.slug && p.category === post.category)
  ).slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://vcusgenesis.com/blog/${post.slug}#webpage`,
        "url": `https://vcusgenesis.com/blog/${post.slug}`,
        "name": post.title,
        "description": post.metaDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://vcusgenesis.com/#website",
          "name": "VCUS Genesis Women's Health & Infertility",
          "url": "https://vcusgenesis.com",
        },
        "about": [
          {
            "@type": "MedicalCondition",
            "name": post.category,
          },
        ],
        "aspect": ["Diagnosis", "Treatment", "Overview", "Prevention"],
        "medicalAudience": {
          "@type": "MedicalAudience",
          "medicalAudienceType": "Patient",
        },
      },
      {
        "@type": "Article",
        "@id": `https://vcusgenesis.com/blog/${post.slug}#article`,
        "headline": post.title,
        "description": post.metaDescription,
        "image": post.image,
        "datePublished": `${post.publishedAt}T09:00:00+05:30`,
        "dateModified": `${post.updatedAt}T18:00:00+05:30`,
        "mainEntityOfPage": `https://vcusgenesis.com/blog/${post.slug}`,
        "author": {
          "@type": "Physician",
          "name": post.author.name,
          "jobTitle": post.author.title,
          "description": post.author.experience,
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Bangalore Medical College (BMC)",
          },
          "url": "https://vcusgenesis.com/about",
        },
        "publisher": {
          "@type": "MedicalClinic",
          "name": "VCUS Genesis Women's Health & Infertility",
          "url": "https://vcusgenesis.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vcusgenesis.com/images/genesis_emblem_crop.jpg",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://vcusgenesis.com/blog/${post.slug}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vcusgenesis.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Clinical Library",
            "item": "https://vcusgenesis.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://vcusgenesis.com/blog/${post.slug}`,
          },
        ],
      },
      ...(post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://vcusgenesis.com/blog/${post.slug}#faq`,
              "mainEntity": post.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostView post={post} relatedPosts={relatedPosts} />
    </>
  )
}
