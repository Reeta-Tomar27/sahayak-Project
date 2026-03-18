export const ALL_SCHEMES_LIST: Record<string, any[]> = {
  "specially-abled": [
    { id: "sa-1", name: "Disability Pension Scheme", eligibility: "40% disability or above", benefit: "₹1,500/month", status: "Active" },
    { id: "sa-2", name: "Accessible India Campaign", eligibility: "All specially-abled", benefit: "Infrastructure support", status: "Ongoing" },
    { id: "sa-3", name: "Scholarship for Students with Disabilities", eligibility: "Students", benefit: "Up to ₹50,000/year", status: "Active" },
  ],
  "senior-citizen": [
    { id: "sc-1", name: "Indira Gandhi National Old Age Pension (IGNOAPS)", eligibility: "60+ years, BPL", benefit: "₹200 - ₹500 Monthly Pension", status: "Active" },
    { id: "sc-2", name: "Ayushman Bharat PM-JAY (70+ Health Cover)", eligibility: "70+ years, All Income Groups", benefit: "₹5 Lakh Health Cover", status: "Active" },
    { id: "sc-3", name: "Vayoshreshtha Samman", eligibility: "Eminent Senior Citizens", benefit: "National Award & Recognition", status: "Ongoing" },
  ],
  "orphan-home": [
    { id: "oh-1", name: "Child Protection Services (CPS)", eligibility: "Registered NGOs", benefit: "Grant-in-aid", status: "Active" },
    { id: "oh-2", name: "PM CARES for Children", eligibility: "Children who lost parents", benefit: "Education & Health Insurance", status: "Active" },
  ],
  "donor": [
    { id: "dn-1", name: "80G Tax Exemption", eligibility: "Registered Donors", benefit: "50% or 100% Tax Deduction", status: "Active" },
    { id: "dn-2", name: "CSR Matching Grants", eligibility: "Corporate Donors", benefit: "Government matched funds", status: "Ongoing" },
  ],
};

export const SCHEME_DETAILS: Record<string, any> = {
  "sc-1": {
    id: "sc-1",
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    description: "The Indira Gandhi National Old Age Pension Scheme (IGNOAPS) is a centrally sponsored social security program launched by the Ministry of Rural Development. It aims to provide financial stability to senior citizens who are living below the poverty line and have little to no regular means of subsistence.\n\nMonthly Pension: ₹200 for beneficiaries aged 60–79 years.\nIncreased Pension: ₹500 for beneficiaries aged 80 years and above.\nNote: State governments often add a top-up amount to this central contribution, so the total amount received varies by state.",
    status: "Active",
    eligibility: [
      "Nationality: Must be a citizen of India.",
      "Age: Must be 60 years of age or older.",
      "Economic Status: Must belong to a household living Below Poverty Line (BPL) according to the criteria prescribed by the Government of India."
    ],
    benefits: [
      "Monthly Pension: ₹200 for beneficiaries aged 60–79 years.",
      "Increased Pension: ₹500 for beneficiaries aged 80 years and above.",
      "Note: State governments often add a top-up amount to this central contribution, so the total amount received varies by state."
    ],
    documents: [
      "Application Form: Duly filled and self-attested.",
      "Proof of Identity/Residence: Aadhaar Card, Voter ID, or Electricity Bill.",
      "Age Proof: Birth Certificate, School Leaving Certificate, or a certificate from a Medical Board/SHO.",
      "Income/Poverty Proof: BPL Ration Card or BPL Certificate.",
      "Bank Details: Copy of the Bank Passbook (for direct pension transfer).",
      "Affidavit: A declaration attested by a Judicial/Executive Magistrate stating the applicant is not receiving any other pension or financial assistance from other sources."
    ],
    applicationProcess: [
      "Online Method:",
      "Visit the official UMANG website (web.umang.gov.in) or download the UMANG App.",
      "Login using your mobile number and OTP.",
      "Search for \"NSAP\" (National Social Assistance Programme).",
      "Select \"Apply Online\" and fill in the required personal and bank details.",
      "Upload your photograph and documents, then click \"Submit.\"",
      "Offline Method:",
      "Visit the Social Welfare Department, Jan Seva Kendra (CSCs), or the Block Development Officer (BDO) in rural areas.",
      "In urban areas, approach the District Social Welfare Officer.",
      "Submit the physical application form along with the required documents mentioned above."
    ],
    trackingTitle: "Application Tracking",
    tracking: [
      "Once submitted, you can track the status of your application via the NSAP Dashboard or the UMANG App using the application number or your Aadhaar number provided during registration."
    ],
    videoUrl: "https://www.youtube.com/embed/EJFNPqNuBX4?autoplay=1&mute=1",
    applyUrl: "https://www.myscheme.gov.in/schemes/nsap-ignoaps",
    youtubeLinks: [
      "How to Apply for Old Age Pension via UMANG App",
      "IGNOAPS Scheme Details and Eligibility Explained",
      "NSAP Pension Status Check Guide"
    ]
  },
  "sc-2": {
    id: "sc-2",
    name: "Ayushman Bharat PM-JAY (70+ Health Cover)",
    description: "Ayushman Bharat PM-JAY is the world's largest health insurance scheme fully financed by the government. It provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization.\n\nRecent Major Expansion (September 2024): The Union Cabinet approved health coverage for all senior citizens aged 70 and above, regardless of their socio-economic status or income. This specific expansion aims to benefit approximately 6 crore senior citizens across India.",
    status: "Active",
    eligibility: [
      "Age-Based Eligibility: Every Indian citizen aged 70 years and above is now eligible.",
      "Income Neutral: For those 70+, there is no income limit or socio-economic requirement (unlike the original scheme which was based on SECC 2011 data).",
      "Choice of Scheme: Seniors already using public health schemes (CGHS, ECHS, CAPF) can choose to either stay with their current scheme or switch to AB PM-JAY.",
      "Private Insurance Holders: Even those with private health insurance or ESIC are eligible for the ₹5 Lakh cover under PM-JAY."
    ],
    benefits: [
      "Provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization.",
      "Recent Major Expansion (September 2024): The Union Cabinet approved health coverage for all senior citizens aged 70 and above, regardless of their socio-economic status or income.",
      "This specific expansion aims to benefit approximately 6 crore senior citizens across India."
    ],
    documents: [
      "Aadhaar Card: This is the primary document for identity and age verification.",
      "Active Mobile Number: For OTP verification during the registration process.",
      "Ration Card / Family ID: To establish family relationships (especially for top-up benefits)."
    ],
    applicationProcess: [
      "Self-Registration: Visit the official portal beneficiary.nha.gov.in or download the Ayushman App.",
      "Authentication: Enter your mobile number, receive an OTP, and select your State/Scheme.",
      "e-KYC: Use Aadhaar-based OTP, Fingerprint, or Iris scan to complete the e-KYC process.",
      "Assisted Registration: You can also visit the nearest Common Service Center (CSC), Empanelled Hospital, or UTI-ITSL center for assistance."
    ],
    trackingTitle: "Application (The Ayushman Card)",
    tracking: [
      "New Distinct Card: Eligible senior citizens aged 70+ will be issued a new, distinct card specifically for this category.",
      "Top-Up Feature: If a senior citizen's family is already covered under PM-JAY, the senior citizen gets an additional ₹5 Lakh top-up exclusively for their use (they do not have to share this specific 5 lakh with younger family members).",
      "Family Basis: If the senior's family is not already covered, they receive the ₹5 Lakh cover on a family basis for themselves and their spouse (if also 70+)."
    ],
    videoUrl: "https://www.youtube.com/embed/4tyEM9WvyXw?autoplay=1&mute=1",
    applyUrl: "https://www.india.gov.in/spotlight/details/ayushman-bharat-pradhan-mantri-jan-arogya-yojana",
    youtubeLinks: [
      "How to Apply for Ayushman Card for Senior Citizens 70+ (Step-by-Step)",
      "Ayushman Bharat PM-JAY New Update 2024 Explained",
      "How to download Ayushman Card online."
    ]
  }
};
