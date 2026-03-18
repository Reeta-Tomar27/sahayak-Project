export const ALL_SCHEMES_LIST: Record<string, any[]> = {

  "specially-abled": [
    {
      id: "sa-1",
      name: "UDID / Swavlamban Disability Card",
      eligibility: "Any person with certified disability",
      benefit: "Unique disability ID for accessing government schemes",
      status: "Active",
    },
    {
      id: "sa-2",
      name: "Accessible India Campaign (Sugamya Bharat)",
      eligibility: "Persons with disabilities",
      benefit: "Improved accessibility in buildings, transport, and digital services",
      status: "Active",
    },
    {
      id: "sa-3",
      name: "ADIP Scheme (Assistive Devices)",
      eligibility: "Persons with disabilities from low income families",
      benefit: "Free or subsidized assistive devices like wheelchairs and hearing aids",
      status: "Active",
    },
  ],

  "senior-citizen": [
    {
      id: "sc-1",
      name: "Indira Gandhi National Old Age Pension (IGNOAPS)",
      eligibility: "60+ years, BPL",
      benefit: "₹200 - ₹500 Monthly Pension",
      status: "Active",
    },
    {
      id: "sc-2",
      name: "Ayushman Bharat PM-JAY (70+ Health Cover)",
      eligibility: "70+ years",
      benefit: "₹5 Lakh Health Cover",
      status: "Active",
    },
  ],

  "orphan-home": [
    {
      id: "oh-1",
      name: "Mission Vatsalya – Child Welfare & Protection Scheme",
      eligibility: "Orphaned or vulnerable children",
      benefit: "Grant-in-aid",
      status: "Active",
    },
    {
      id: "oh-2",
      name: "PM CARES for Children",
      eligibility: "Children who lost parents due to COVID-19",
      benefit: "Education + Health Insurance + Financial Support",
      status: "Active",
    },
  ],

};


export const SCHEME_DETAILS: Record<string, any> = {

  /* ---------------- Senior Citizen ---------------- */

  "sc-1": {
    id: "sc-1",
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",

    description:
      "The Indira Gandhi National Old Age Pension Scheme provides financial assistance to senior citizens living below the poverty line.",

    status: "Active",

    eligibility: [
      "Must be an Indian citizen",
      "Age must be 60 years or above",
      "Belong to a BPL household",
    ],

    benefits: [
      "₹200 monthly pension for age 60–79",
      "₹500 monthly pension for age 80+",
      "States may add additional pension support",
    ],

    documents: [
      "Aadhaar Card",
      "BPL Ration Card",
      "Age Proof",
      "Bank account details",
    ],

    applicationProcess: [
      "Visit NSAP or UMANG portal",
      "Fill the application form",
      "Upload required documents",
      "Submit application",
    ],

    trackingTitle: "Application Tracking",

    tracking: [
      "Track status using Aadhaar or application number on NSAP portal.",
    ],

    videoUrl: "https://www.youtube.com/embed/EJFNPqNuBX4",

    applyUrl: "https://www.myscheme.gov.in/schemes/nsap-ignoaps",

    youtubeLinks: [
      "Indira Gandhi old age pension scheme",
      "How to apply for old age pension online",
    ],
  },


  "sc-2": {
    id: "sc-2",
    name: "Ayushman Bharat PM-JAY",

    description:
      "Ayushman Bharat PM-JAY provides health insurance coverage of up to ₹5 lakh per family per year.",

    status: "Active",

    eligibility: [
      "Senior citizens aged 70+",
      "Indian citizen",
    ],

    benefits: [
      "₹5 lakh hospital cover",
      "Cashless treatment in empanelled hospitals",
    ],

    documents: [
      "Aadhaar Card",
      "Mobile Number",
      "Ration Card or Family ID",
    ],

    applicationProcess: [
      "Visit Ayushman Bharat portal",
      "Verify eligibility",
      "Complete e-KYC",
      "Download Ayushman card",
    ],

    trackingTitle: "Card Status",

    tracking: [
      "Check card status using Aadhaar or registered mobile number.",
    ],

    videoUrl: "https://www.youtube.com/embed/4tyEM9WvyXw",

    applyUrl:
      "https://www.india.gov.in/spotlight/details/ayushman-bharat-pradhan-mantri-jan-arogya-yojana",

    youtubeLinks: [
      "Ayushman Bharat scheme explained",
      "Ayushman card registration guide",
    ],
  },


  /* ---------------- Specially Abled ---------------- */

"sa-1": {
  id: "sa-1",
  name: "UDID / Swavlamban Disability Card",

  description:
    "The Unique Disability ID (UDID) project provides a universal identification card for persons with disabilities. It helps them access government benefits and simplifies applying for disability schemes.",

  status: "Active",

  eligibility: [
    "Person with disability",
    "Valid disability certificate",
    "Indian citizen"
  ],

  benefits: [
    "Unique disability identity card",
    "Easy access to government schemes",
    "Centralized disability database"
  ],

  documents: [
    "Aadhaar Card",
    "Disability certificate",
    "Passport size photograph",
    "Address proof"
  ],

  applicationProcess: [
    "Visit the UDID portal",
    "Register online",
    "Upload required documents",
    "Submit application for verification"
  ],

  trackingTitle: "Application Tracking",

  tracking: [
    "Track application status through the UDID portal."
  ],

  videoUrl: "https://www.youtube.com/embed/lya8DbhpbKE",

  applyUrl: "https://swavlambancard.gov.in/",

  youtubeLinks: [
    "UDID card registration process",
    "How to apply for disability certificate online"
  ],
},


 "sa-2": {
  id: "sa-2",
  name: "Accessible India Campaign (Sugamya Bharat Abhiyan)",

  description:
    "Accessible India Campaign (Sugamya Bharat Abhiyan) is a nationwide program launched by the Government of India to make public buildings, transportation systems, and digital services accessible to persons with disabilities.",

  status: "Active",

  eligibility: [
    "Persons with disabilities",
    "Government institutions improving accessibility",
    "Public infrastructure projects"
  ],

  benefits: [
    "Accessible public buildings",
    "Accessible transportation facilities",
    "Accessible government websites and digital services"
  ],

  documents: [
    "Identity proof",
    "Disability certificate (if applicable)"
  ],

  applicationProcess: [
    "Visit the Department of Empowerment of Persons with Disabilities portal",
    "Submit accessibility related request or participate in programs",
    "Follow guidelines issued by the ministry"
  ],

  trackingTitle: "Program Information",

  tracking: [
    "Updates and information available on the Department of Empowerment of Persons with Disabilities portal."
  ],

  videoUrl: "https://www.youtube.com/embed/FsIg4I1lHGY",

  applyUrl: "https://depwd.gov.in/",

  youtubeLinks: [
    "Sugamya Bharat Abhiyan explained",
    "Accessible India Campaign details"
  ],
},


"sa-3": {
  id: "sa-3",
  name: "ADIP Scheme (Assistive Devices)",

  description:
    "The ADIP Scheme helps persons with disabilities obtain assistive devices such as wheelchairs, hearing aids, prosthetic limbs and other rehabilitation equipment to improve mobility and independence.",

  status: "Active",

  eligibility: [
    "Person with disability",
    "Low income family",
    "Medical recommendation for assistive device"
  ],

  benefits: [
    "Free or subsidized assistive devices",
    "Improved mobility and independence",
    "Rehabilitation and support services"
  ],

  documents: [
    "Disability certificate",
    "Income certificate",
    "Aadhaar Card"
  ],

  applicationProcess: [
    "Visit the Department of Empowerment of Persons with Disabilities portal",
    "Apply through implementing agencies or government programs",
    "Submit required disability and income documents"
  ],

  trackingTitle: "Scheme Information",

  tracking: [
    "Information and updates available through the DEPwD portal."
  ],

  videoUrl: "https://www.youtube.com/embed/dPlj30_HD78",

  applyUrl: "https://depwd.gov.in/en/",

  youtubeLinks: [
    "ADIP scheme explained",
    "Assistive devices scheme India"
  ],
},


  /* ---------------- Orphan Home ---------------- */

  "oh-1": {
    id: "oh-1",
    name: "Mission Vatsalya – Child Welfare & Protection Scheme",

    description:
      "Mission Vatsalya ensures protection, care and development of children in difficult circumstances including orphaned children.",

    status: "Active",

    eligibility: [
      "Orphaned or abandoned children",
      "Children in need of care and protection"
    ],

    benefits: [
      "Financial support",
      "Education support",
      "Child protection services"
    ],

    documents: [
      "Child Aadhaar Card",
      "Birth certificate",
      "Guardian details"
    ],

    applicationProcess: [
      "Visit Mission Vatsalya portal",
      "Register child or institution details",
      "Submit required documents"
    ],

    trackingTitle: "Application Tracking",

    tracking: [
      "Track application through the Mission Vatsalya portal."
    ],

    videoUrl: "https://www.youtube.com/embed/ARx2kYY4U0U",

    applyUrl: "https://missionvatsalya.wcd.gov.in/",

    youtubeLinks: [
      "Mission Vatsalya scheme explained"
    ],
  },


  "oh-2": {
    id: "oh-2",
    name: "PM CARES for Children",

    description:
      "PM CARES for Children supports children who lost parents due to COVID-19 with financial and educational assistance.",

    status: "Active",

    eligibility: [
      "Child lost parents due to COVID-19",
      "Below 18 years"
    ],

    benefits: [
      "₹10 lakh financial support at age 23",
      "Monthly stipend from 18–23 years",
      "Health insurance under Ayushman Bharat"
    ],

    documents: [
      "Aadhaar Card",
      "Death certificate of parents",
      "Birth certificate"
    ],

    applicationProcess: [
      "Visit PM CARES portal",
      "Register child details",
      "Submit documents"
    ],

    trackingTitle: "Application Tracking",

    tracking: [
      "Track application through PM CARES portal."
    ],

    videoUrl: "https://www.youtube.com/embed/7R4Ui8HUZ-o",

    applyUrl: "https://pmcaresforchildren.in/",

    youtubeLinks: [
      "PM CARES for children scheme"
    ],
  },

};