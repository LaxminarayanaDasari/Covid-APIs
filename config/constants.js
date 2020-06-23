module.exports = {
  months: [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 }
  ],
  version: 'v1.0',
  trackingStatus: [
    "Review Date",
    "Request Contact",
    "Engaged",
    "Distance Interview",
    "Site Visit Interview",
    "Offer Letter",
    "Candidate Hired",
    "Candidate Deleted"
  ],
  algorithm: {
    securityClearanceExists: {
      occupationSkills: 39.30,
      education: 5.1,
      occupationRelatedCertificates: 5.1,
      securityClearance: 5.1,

      softSkills: 15,
      workLevel: 5.1,
      typeOfEngagement: 5.1,

      culturalAttributes: 10,
      lifestyle: 5.1,
      benefits: 5.1
    },
    securityClearanceNotExists: {
      occupationSkills: 40,
      education: 5.5,
      occupationRelatedCertificates: 5.5,
      securityClearance: 0,

      softSkills: 16,
      workLevel: 5.5,
      typeOfEngagement: 5.5,

      culturalAttributes: 11,
      lifestyle: 5.5,
      benefits: 5.5
    },
    config: {
      V1: 0.647, //"Occupation Skills"
      V2: 0.20, //"Soft Skills"
      V3: 0.051, //"Education"
      V4: 0.051, //"Certification"
      V5: 0.051 //"Security Clearance"
    },
    weights: {
      W1: 0.7, //Qualifications
      W2: 0.15, //Suitability
      W3: 0.15 //Compatibility
    },
    SC1: 0.04,
    nonBinary: {
      NBD1: 1.8,
      NBD2: 0.67,
      NBD3: 0.41
    },
    lifestyleNonBinary: {
      LNBD1: 0.25,
      LNBD2: 1.25
    },
    multiplier: 10
  },
  USAEducations: [
    { "attributeName": "HS / GED", "order": 1 },
    { "attributeName": "Associates (AA)", "order": 2 },
    { "attributeName": "BA/BS", "order": 3 },
    { "attributeName": "Masters", "order": 4 },
    { "attributeName": "Doctorate", "order": 5 },
    { "attributeName": "PhD", "order": 5 },
    { "attributeName": "JD", "order": 5 }
  ],
  lifestyleAttributes: [
    "Climate",
    "Commute Time",
    "Cost of Living",
    "Crime Rate",
    "Education",
    "Taxation"
  ],
  randomQuestionsLimitor: 3,
  referenceMaster: {
    years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    relationships: [
      "Supervisor/Manager",
      "Project Manager/Team Leader",
      "Co-worker",
      "Other Professional Association",
      "Academic (professor/Instructor)",
      "Personal/Other"
    ]
  }
};