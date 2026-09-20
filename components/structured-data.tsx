import * as React from "react"

export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": "https://vcusgenesis.com/#clinic",
        "name": "VCUS Genesis Women's Health & Infertility",
        "alternateName": "Genesis Women's Clinic New BEL Road",
        "description":
          "Premier boutique women's healthcare sanctuary in Bengaluru. Providing humanized obstetrics, natural delivery guidance, high-risk pregnancy management, level-one fertility evaluation, and menopause care.",
        "url": "https://vcusgenesis.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vcusgenesis.com/images/genesis_emblem_crop.jpg",
          "width": "512",
          "height": "512",
        },
        "image": "https://vcusgenesis.com/images/genesis_distinction_sanctuary.jpg",
        "telephone": "+91-99000-98736",
        "email": "umasheshgiri@gmail.com",
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
        "medicalSpecialty": [
          "Obstetrics and Gynecology",
          "Reproductive Endocrinology and Infertility",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3rd Floor, SL Complex, Amarajyoti Layout, New BEL Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560094",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.0382",
          "longitude": "77.5654",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "10:00",
            "closes": "13:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "17:00",
            "closes": "20:00",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Women's Healthcare Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Antenatal & Full-Cycle Maternity Care",
                "description": "Comprehensive pregnancy care from first trimester through labor and fourth-trimester postpartum recovery.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Level-One Fertility Evaluation & Counseling",
                "description": "Evidence-based reproductive investigation, follicular monitoring, and European-standard ART guidance.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Gynecological & PCOS Consultation",
                "description": "Diagnosis and empathetic management of cycle irregularities, pelvic pain, endometriosis, and fibroids.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Perimenopause & Menopause Care",
                "description": "Hormone therapy counseling, cardiovascular evaluation, and bone mineral density management.",
              },
            },
          ],
        },
        "founder": {
          "@id": "https://vcusgenesis.com/#dr-uma",
        },
      },
      {
        "@type": ["Person", "Physician"],
        "@id": "https://vcusgenesis.com/#dr-uma",
        "name": "Dr. Uma Sheshgiri",
        "jobTitle": "Senior Obstetrician & Gynaecologist • Chairman, IMA-AMS Bangalore Chapter",
        "description":
          "Senior Obstetrician & Gynaecologist with 45+ years of clinical experience, including 15 years Karnataka Government service (Retired Superintendent, K.R. Puram General Hospital) and Chairman of IMA-AMS Bangalore Chapter. Alumna of M.R. Medical College (MBBS 1978, DGO 1982) and Bangalore Medical College (MD 1998) with Certified Diploma in ART from Germany (2015).",
        "image": "https://vcusgenesis.com/images/dr_uma_clinic.jpg",
        "gender": "Female",
        "medicalSpecialty": [
          "Obstetrics and Gynecology",
          "Infertility",
          "Maternal-Fetal Medicine",
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "M.R. Medical College, Gulbarga (MBBS 1978, DGO 1982)",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Bangalore Medical College (MD Obstetrics & Gynaecology 1998)",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Germany (Certified Diploma in ART 2015)",
          },
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "IMA Academy of Medical Specialties (IMA-AMS) - Chairman, Bangalore Chapter",
          },
          {
            "@type": "Organization",
            "name": "Bangalore Society of Obstetrics & Gynaecology (BSOG) - Life Member",
          },
          {
            "@type": "Organization",
            "name": "Federation of Obstetric and Gynaecological Societies of India (FOGSI) - Life Member",
          },
          {
            "@type": "Organization",
            "name": "Indian Medical Association (IMA) - Life Member, Past President Bangalore Branch",
          },
        ],
        "worksFor": {
          "@id": "https://vcusgenesis.com/#clinic",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://vcusgenesis.com/#website",
        "url": "https://vcusgenesis.com",
        "name": "VCUS Genesis Women's Health & Infertility",
        "description": "Humanized women's health and maternity care in Bengaluru.",
        "publisher": {
          "@id": "https://vcusgenesis.com/#clinic",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://vcusgenesis.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes VCUS Genesis different from corporate maternity hospitals in Bengaluru?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At VCUS Genesis, every patient is personally evaluated by Dr. Uma Sheshgiri (45+ years clinical experience, Retired Superintendent of K.R. Puram General Hospital). We reject high-pressure 5-minute slots in favor of unhurried 30-minute consultations, full doctor continuity, and conservative clinical ethics that prioritize natural delivery over unnecessary surgical interventions.",
            },
          },
          {
            "@type": "Question",
            "name": "Where is VCUS Genesis located and how do I schedule an appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The clinic is located on New BEL Road, RMV 2nd Stage, North Bengaluru. Consultations can be scheduled directly online via our website or by calling our clinic desk at +91 99000 98736.",
            },
          },
          {
            "@type": "Question",
            "name": "Where are deliveries and major surgeries performed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All outpatient consultations, antenatal scans, and clinical checks occur at our New BEL Road sanctuary. For deliveries and surgeries, Dr. Uma personally admits and delivers patients at premier affiliated tertiary hospitals including Cloudnine Hospital Malleswaram, Milan Hospital Kumara Park West, and Columbia Asia Hospital Yeshwanthpur.",
            },
          },
          {
            "@type": "Question",
            "name": "Does the clinic offer fertility and preconception evaluations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Dr. Uma holds a Certified Diploma in Artificial Reproductive Techniques (ART) from Germany (2015). We offer non-invasive Level-1 fertility evaluations, ovulation induction, follicular tracking, and transparent counseling before recommending advanced ART.",
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

