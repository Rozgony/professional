import { COMPANY, ROLES, PRESENT } from './../utils/CONSTANTS';

const resume = {
  "basics":{
      "name": "Matthew Schultz",
      "label": "Mobile / Web Engineer - Facilitator - Musician",
      "picture": "",
      "email": "matt@matthewkschultz.com",
      "phone": "410-375-8667",
      "website": "http://www.matthewkschultz.com",
      "summary": ["I create tools and lead teams to improve the way we generate and consume new information and communicate with each other by integrating my abilities as a web/mobile engineer with my experience in social sciences, partnership building, consensus building, facilitation, and team management."],
      "location": {
        "address": "",
        "postalCode": "",
        "city": "Baltimore",
        "countryCode": "US",
        "region": "Maryland"
      },
      "profiles": [{
            "network": "Stack Overflow",
            "username": "Rozgony",
            "url": "http://stackoverflow.com/users/4296614/rozgony"
          },{
            "network": "GitHub",
            "username": "Rozgony",
            "url": "https://github.com/Rozgony"
          },{
            "network": "LinkedIn",
            "username": "Matthew Schultz",
            "url": "https://www.linkedin.com/in/matthewkschultz"
          }]
      },
  "work": [{
      "company": "Synaptic AP",
      "position": "Web/Mobile Engineer",
      "website": "https://synapticap.com",
      "startDate": "2016-02-15",
      "endDate": PRESENT,
      "summary": "Working on a distributed team to develop the Youreka (web browser/iOS/Android) internationally-utilized, enterprise-level Field Service Management app for use with onsite inspections, maintenance, compliance, and auditing while offline. More than Youreka 30,000 forms are created per day by users to perform activities such as COVID-19 Contact Tracking in the United Kingdom, industrial inspections, or retail inspection.",
      "highlights": [{
        "title": ROLES.TECH,
        "des": "Javascript, AngularJS, ReactJS, VueJS, Apache Cordova, Ionic, SOQL/SQL, Salesforce, Salesforce Mobile SDK, Jasmine, Android Studio, Xcode, HTML and CSS."
      },{
        "title": ROLES.PROD_DESIGN,
        "des": "Design new features based on customer feedback, user testing, adoption metrics, and market trends as part of a team including data analysts, graphic designers, sales people, marketing staff, and other developers."
      },{
        "title": ROLES.SYNA_CARES,
        "des": "Chair of the philanthropy committee implementing our own version of the Salesforce model of 1% Profit, 1% Time, and 1% Resources donated to philanthropic efforts."
      }]
    },{
        "company": COMPANY.SOCIETYLAB,
        "position": "Software Architect / Product Owner / Co-Founder",
        "website": "http://societylab.org",
        "startDate": "2013-08-01",
        "endDate": "2018-06-12",
        "summary": "Worked with a partner to develop a new social media platform that leveraged data visualization for collecting, exploring, and sharing information and ideas in a way that respects privacy and breaks users’ filter bubbles. We made it to the beta testing stage and realized the product was beautiful but too abstract and lacked a clear problem to solve and business model to effectively grow. The experience, however, taught us a great deal and developed many ideas that will be implemented elsewhere in the future.",
        "highlights": [{
            "title":  ROLES.TECH,
            "des": "Javascript, ReactJS, Redux, Capacitor, AngularJS, D3JS, MongoDB, Mongoose, NodeJS, AWS"
          },{
            "title": ROLES.PROD_DESIGN,
            "des": "Integrate the review of academic literature, industry advocates, user feedback, and personal experience into an iterative process to design an interface for users to create and share collections of information."
          }]
    },{
      "company": COMPANY.FEDERAL_GOVT,
      "position": "Facilitator / Project Manager / MS Access & MS SharePoint Developer",
      "website": "http://www.cms.gov",
      "startDate": "2013-01-07",
      "endDate": "2016-02-12",
      "summary": "Facilitated high-level projects and inter-agency collaboration sessions for the Center for Program Integrity in the Centers for Medicare & Medicaid Services that brought together policy experts, data analysts, law enforcement, and field investigators from various agencies to combat Medicare fraud, waste, and abuse. I also created a database and reporting system to track and reports on sessions, participants, and outcomes.",
      "highlights": [{
        "title": ROLES.TECH,
        "des": "Microsoft Access, Microsoft Sharepoint, HTML and CSS."
      },{
        "title": "Systems Development and Administration",
        "des": "Engineered and implemented a database interfaced to track information and create automated reports on session logistics, participants, action items, and feedback and evaluation forms for the Command Center and the CPI Governance Council."
      }]
    },{
      "company": COMPANY.FREELANCE,
      "position": ROLES.FACILITATOR,
      "website": "facilitator.html",
      "startDate": "2007-01-01",
      "endDate": "2015-01-01",
      "summary": "For a graph of my facilitation styles, please visit the Timeline and click on \"Freelance Facilitator\".",
      "highlights": [{
        "title": ROLES.COMM_DIALOG,
        "des": "Organize and facilitate community dialogues to address common issues and collectively develop effective solutions. Example sessions include: Language Access Community Dialogue for the Washington DC Mayor’s office as part of the Kommon Denominator team, R-E-S-P-E-C-T session in Baltimore City on how to prevent and address cat-calling and other sexual harassment in the street, and Sustained Dialogues consisting of sets of 7 weekly sessions focusing on issues of race and class."
      },{
        "title": ROLES.TOP,
        "des": "Interactive training for high school teachers, graduate students, and other groups on how to facilitate use Theatre of the Oppressed Techniques with youth and adults."
      }]
    },{
      "company": COMPANY.IRC,
      "position": "Program Manager - Youth",
      "website": "https://www.rescue.org",
      "startDate": "2009-03-04",
      "endDate": "2013-01-06",
      "summary": "Developed the program from a small after-school program to a comprehensive Family Support and Wellbeing program consisting of caseworkers providing life skills trainings for parents and youth, support groups run by contracted mental health therapists, and technical assistance and partnership building with school teachers, school leadership, and with area hospitals.",
      "highlights": [{
        "title": ROLES.DEV_SCALE,
        "des": "Developed the program from a small after-school program to a comprehensive Family Support & Wellbeing program consisting of caseworkers providing life skills trainings for parents and youth, contracted mental health therapists providing support groups, and technical assistance and partnership building with teachers, school leadership, and area hospitals."
      },{
        "title":"Partnership Building",
        "des": "Developed organizational partnerships and sat on advisory boards for the Johns Hopkins Bayview Mental Health Clinic, the Maryland Board of Education, Baltimore City Schools, and the Metropolitan Association of Foreign Student Advisers."
      },{
        "title":"Crisis Response",
        "des": "Led crisis response and follow-up support along with the caseworkers for crises such as assault, robbery, arson, and homicide."
      },{
        "title": ROLES.DATA,
        "des":"Worked with staff to develop a rubric to monitor client wellbeing. Used the rubric data to identify issues and trends with clients using statistical methods with the R programming language."
      }]
    },{
      "company": COMPANY.K4P,
      "position": "Program Manager",
      "website": "",
      "startDate": "2005-06-01",
      "endDate": "2009-09-24",
      "summary": "Managed a youth program focused on training teenagers to lead peer-to-peer youth education about world cultures and issues of peace, justice, and conflict resolution that consisted of a summer camp, yearly youth summits about a specific conflict, and a year-round youth leadership program.",
      "highlights": [{
        "title": ROLES.CURRIC_DEV,
        "des": "Designed and implemented a youth leadership program curriculum about complex social issues such as child soldiers, land mines, and the International Criminal Court."
      },{
        "title": ROLES.WEBMASTER,
        "des": "Created and updated the company website with program information and photos from recent events using HTML and CSS."
      }]
    }],
  "education": [{
      "institution": "American University",
      "area": "International Peace and Conflict Resolution",
      "studyType": "Masters of Arts",
      "startDate": "2008-02-01",
      "endDate": "2010-05-10",
      "gpa": "3.9",
      "courses": [
        "..."
      ]
    },{
        "institution": "Towson University",
        "area": "Jazz/Commercial Music Composition",
        "studyType": "Bachelors of Music (Minor in Spanish)",
        "startDate": "2000-09-01",
        "endDate": "2005-05-10",
        "gpa": "3.65",
        "courses": [
          "..."
        ]
      }],
  "trainings": [{
      "organization": "George Mason University Institute for Conflict Analysis and Resolution",
      "title": "Problem Solving Workshop Facilitation"
    },{
      "organization": "George Mason University Institute for Conflict Analysis and Resolution",
      "title": "Advanced Problem Solving Workshop Facilitation: Power Asymmetries"
    },{
      "organization": "Dialogue Development Group at American University",
      "title": "inter-group Dialogue Facilitator Training"
    },{
      "organization": "American University Judicial Affairs & Mediation Services",
      "title": "Basic Mediation Skills Training"
    },{
      "organization": "International Committee of the Red Cross",
      "title": "Exploring Humanitarian Law Instructor "
    },{
      "organization": "Community Conferencing",
      "title": "Daily Rap Training"
    },{
      "organization": "Baltimore City Office of Immigrant Affairs",
      "title": "Community Interpreter Training"
    }],
  "skills": [{
      "name": "Languages (Programing)",
      "level": "",
      "keywords": [
        "Javascript,",
        "HTML,",
        "CCS,",
        "Apex,",
        "SOQL/SQL,",
        "R",
        "Java (basic),",
        "Objective-C (basic)"
      ]
    },{
      "name": "Frameworks/Libraries",
      "level": "",
      "keywords": [
        "ReactJS,",
        "AngularJS,",
        "VueJS,",
        "D3JS,",
        "NodeJS,",
        "ExpressJS,",
        "MongoDB,",
        "MongooseJS,",
        "SASS/SCSS,",
        "Bootstrap,",
        "Gulp,",
        "Jasmine,",
        "JQuery,",
        "Salesforce Mobile SDK,",
        "Apex,",
        "Ionic,",
        "Capacitor,",
        "Apache Cordova"
      ]
    },{
      "name": "Design",
      "level": "",
      "keywords": [
        "Mobile-first Design,",
        "Responsive Design,",
        "User Interface Design,",
        "Privacy by Design"
      ]
    },{
      "name": "Platforms",
      "level": "",
      "keywords": [
        "Web Browser,",
        "NodeJS,",
        "Salesforce,",
        "Sharepoint"
      ]
    },{
      "name": "Social",
      "level": "",
      "keywords": [
        "Team Leadership,",
        "Inter-Agency Conference Facilitation,",
        "Community Engagement & Building,",
        "Cultural Trainings,",
        "Intergroup Dialogue,",
        "Conflict Resolution,",
        "Consensus Building,",
        "Theatre of the Oppressed,",
        "Youth Education"
      ]
    },{
      "name": "Musical",
      "level": "",
      "keywords": [
        "Jazz Piano,",
        "Analog Synthesis,",
        "Music Composition,",
        "Music Production,",
        "Logic X Pro"
      ]
    },{
      "name": "Languages (Human)",
      "level": "",
      "keywords": [
        "English (Native),",
        "Spanish (Fluent)"
      ]
    }]
};

export {
  resume
}
