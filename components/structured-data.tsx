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
          "Cosmetic Gynecology",
          "Maternal-Fetal Medicine",
          "Women's Health",
        ],
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "New BEL Road" },
          { "@type": "AdministrativeArea", "name": "RMV 2nd Stage" },
          { "@type": "AdministrativeArea", "name": "Sadashivanagar" },
          { "@type": "AdministrativeArea", "name": "Sanjaynagar" },
          { "@type": "AdministrativeArea", "name": "Mathikere" },
          { "@type": "AdministrativeArea", "name": "Yeshwanthpur" },
          { "@type": "AdministrativeArea", "name": "Malleshwaram" },
          { "@type": "AdministrativeArea", "name": "Hebbal" },
          { "@type": "AdministrativeArea", "name": "RT Nagar" },
          { "@type": "AdministrativeArea", "name": "Dollars Colony" },
          { "@type": "AdministrativeArea", "name": "Vidyaranyapura" },
          { "@type": "AdministrativeArea", "name": "Yelahanka" },
          { "@type": "AdministrativeArea", "name": "Bengaluru North" },
          { "@type": "AdministrativeArea", "name": "Bengaluru" },
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
          "name": "Women's Healthcare & Cosmetic Gynaecology Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Vaginal Rejuvenation",
                "description": "Non-surgical treatments to improve vaginal tone, hydration and overall comfort.",
                "procedureType": "Non-Surgical",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Vaginal Tightening",
                "description": "Minimally invasive procedures designed to restore firmness and improve functional support.",
                "procedureType": "Minimally Invasive",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Labiaplasty",
                "description": "A surgical procedure to reshape or reduce the labia for comfort and aesthetic balance.",
                "procedureType": "Surgical Procedure",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Post Delivery Vaginal Restoration",
                "description": "Treatments aimed at restoring intimate health after childbirth.",
                "procedureType": "Postpartum Restorative",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Treatment for Vaginal Dryness",
                "description": "Advanced therapies to improve lubrication and reduce irritation or discomfort.",
                "procedureType": "Advanced Therapy",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Stress Urinary Incontinence Treatment (Non-surgical options)",
                "description": "Helps manage mild urine leakage without surgery.",
                "procedureType": "Non-Surgical Option",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "PRP Therapy for Intimate Wellness",
                "description": "Uses the body’s own healing properties to enhance tissue health and sensitivity.",
                "procedureType": "Regenerative Medicine",
              },
            },
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
          "Cosmetic Gynecology",
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
        "description": "Humanized women's health, maternity care, and advanced cosmetic gynaecology in Bengaluru.",
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
            "name": "What cosmetic gynaecology procedures are offered at VCUS Genesis Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our hospital offers a comprehensive range of advanced cosmetic gynaecology treatments tailored to individual needs in a safe, hospital-based setting: Vaginal Rejuvenation (non-surgical tone & hydration), Vaginal Tightening (minimally invasive firmness and functional support), Labiaplasty (surgical reshaping for comfort and aesthetic balance), Post Delivery Vaginal Restoration (post-childbirth recovery), Treatment for Vaginal Dryness (lubrication & irritation relief), Stress Urinary Incontinence Treatment (non-surgical mild leakage management), and PRP Therapy for Intimate Wellness (autologous regenerative tissue healing).",
            },
          },
          {
            "@type": "Question",
            "name": "Are cosmetic gynaecology procedures performed in a safe, hospital-based setting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. At VCUS Genesis, all cosmetic and reconstructive gynaecological procedures are conducted in fully equipped, sterile hospital-based clinical suites. Every patient undergoes an in-depth medical evaluation by Dr. Uma Sheshgiri with strict clinical safety standards and absolute privacy.",
            },
          },
          {
            "@type": "Question",
            "name": "What is PRP therapy for intimate wellness and how does it work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PRP (Platelet-Rich Plasma) therapy for intimate wellness uses concentrated growth factors from the patient's own blood to naturally stimulate collagen production, improve micro-circulation, enhance tissue health, and restore sensitivity without synthetic chemicals or invasive surgery.",
            },
          },
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
            "name": "Where is VCUS Genesis located and which Bengaluru areas are served?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VCUS Genesis is located on New BEL Road, RMV 2nd Stage, Bengaluru (postal code 560094). We serve patients across New BEL Road, Sadashivanagar, Sanjaynagar, Mathikere, Yeshwanthpur, Malleshwaram, Hebbal, RT Nagar, Dollars Colony, Vidyaranyapura, and Yelahanka.",
            },
          },
          {
            "@type": "Question",
            "name": "Where are deliveries and major surgeries performed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All outpatient consultations, antenatal scans, cosmetic gynaecology evaluations, and clinical checks occur at our New BEL Road sanctuary. For deliveries and inpatient surgeries, Dr. Uma personally admits and delivers patients at premier affiliated tertiary hospitals including Cloudnine Hospital Malleswaram, Milan Hospital Kumara Park West, and Columbia Asia Hospital Yeshwanthpur.",
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
          {
            "@type": "Question",
            "name": "How is patient confidentiality protected during cosmetic gynaecology visits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We operate with strict medical privacy. Consultations are scheduled in private one-on-one appointments where patient identity, medical history, and treatment records are completely confidential.",
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

