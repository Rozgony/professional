import { COMPANY, ROLES, PRESENT, FACILITATION_PRODUCTS } from './../utils/CONSTANTS';

const resume = {
  "basics":{
      "name": "Matthew Schultz",
      "label": "Principal Application Engineer - Facilitator - Musician",
      "picture": "",
      "email": "matt@matthewkschultz.com",
      "phone": "410-375-8667",
      "website": "http://www.matthewkschultz.com",
      "summary": ["I have a passion for creativity, problem-solving, and service that has motivated me throughout my career as a Team Lead and Principle Application Engineer as well as with my prior experience in team management, partnership building, consensus building, facilitation, education, and applied social sciences."],
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
      "company": COMPANY.YOUREKA,
      "position": "Team Lead / Principal Application Engineer",
      "website": "https://youreka.io",
      "startDate": "2016-02-15",
      "endDate": PRESENT,
      "summary": "A founding engineer on an enterprise-level smart forms application that scaled into its own company that was later purchased. More than 30,000 Youreka forms are created daily for onsite inspections, maintenance, compliance, and auditing. I am currently overseeing a team of 6 engineers balancing the refactor of both the mobile and web apps from older technologies while also adding new features requested by customers.",
      "highlights": [{
        "title": ROLES.TECH,
        "des": "Javascript, React, Zustand, Ionic Capacitor, SQLite, Jest, Android Studio, Xcode, AngularJS, JQuery, HTML and CSS"
      },{
        "title": ROLES.ARCHITECT,
        "des": "Lead team collaboration to design, engineer, and write technical requirements for new features in a way that integrates the joint knowledge, experience, and requirements of the team and clients. This includes customer feedback, user testing, adoption metrics, and market trends as part of a team including data analysts, graphic designers, sales people, marketing staff, and other engineers."
      },{
        "title": ROLES.PROJECT_MANAGEMENT,
        "des": "Run stand-ups, sprints, and ensure team meets release deadlines. Manage iOS App Store and Android Play Store listings and mobile app releases."
      },{
        "title": ROLES.SUPERVISOR,
        "des": "Supervise and mentor engineers on coding, design, architecture, testing, and documentation base practices."
      },{
        "title": ROLES.CLIENT_SUPPORT,
        "des": "Educate clients on app functionality and assist with their implementation issues."
      }]
    },{
      "company": COMPANY.FREELANCE,
      "position": ROLES.FACILITATOR,
      "website": "facilitator.html",
      "startDate": "2009-11-05",
      "endDate": PRESENT,
      "summary": "I co-create impactful experiences with communities and teams of people to build skills, foster dialogue and collaboration, and shift perspectives of what is possible.",
      "highlights": [{
        "title": FACILITATION_PRODUCTS.COLLAB_SKILLS,
        "des": "This interactive training creates opportunities for participants to collaborate in new ways, look at problems from different perspectives, and build a more integrative collaborative practice as a team."
      },{
        "title": FACILITATION_PRODUCTS.TEAM_RETREATS,
        "des": "The perfect activity for team retreats that helps the team build a shared vision of purpose, mutual appreciation, and an understanding of the required action to accomplish the collective goals."
      },{
        "title": FACILITATION_PRODUCTS.SOCIAL_SERVICE_SKILLS,
        "des": "An interactive laboratory for applying best practices and participants' various experiences to difficult social service client interactions."
      },{
        "title": FACILITATION_PRODUCTS.FORUM_THEATRE,
        "des": "This session provides a chance for participants to collaboratively experiment with better responses to challenging situations while building the confidence needed to better navigate such situations."
      },{
        "title": FACILITATION_PRODUCTS.SAE,
        "des": "We've all said something we've regretted as soon as it's left our lips. Things that may have been well-intended but landed much differently or even offensively on others' ears. This session provides an interactive way of addressing Subtle Acts of Exclusions (formerly microaggressions) in a just, compassionate, and dialogical manner."
      },{
        "title": FACILITATION_PRODUCTS.INCLUSIVE_ORGS,
        "des": "What makes an organization inclusive to people from various backgrounds is also what makes it able to dynamically incorporate new ideas and innovations. This session explores what that means in practice."
      }]
    },{
        "company": COMPANY.SOCIETYLAB,
        "position": "Software Architect / Product Owner / Co-Founder",
        "website": "http://societylab.org",
        "startDate": "2013-08-01",
        "endDate": "2016-01-12",
        "summary": "Worked with a partner to develop a new social media platform that leveraged data visualization for collecting, exploring, and sharing information and ideas in a way that respects privacy and breaks users’ filter bubbles. We made it to the beta testing stage and realized the product was beautiful but too abstract and lacked a clear problem to solve and business model to effectively grow. The experience, however, taught us a great deal and developed many ideas that will be implemented elsewhere in the future.",
        "highlights": [{
            "title":  ROLES.TECH,
            "des": "Javascript, ReactJS, Redux, Capacitor, AngularJS, D3JS, MongoDB, Mongoose, NodeJS, AWS"
          },{
            "title": ROLES.PROD_DESIGN,
            "des": "Integrate the review of academic literature, industry advocates, user feedback, and personal experience into an iterative process to design an interface for users to create and share collections of information."
          },{
            "title": ROLES.ARCHITECT,
            "des": "Created full stack web application with users, login, database, and a dynamic UI for adding, collecting, and exploring collections of links using data visualization."
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
        "SQL,",
        "Java"
      ]
    },{
      "name": "Frameworks/Libraries",
      "level": "",
      "keywords": [
        "React,",
        "Ionic Capacitor,",
        "Jest,",
        "D3JS,",
        "LeafletJS,",
        "SQLite,",
        "SCSS,",
        "AngularJS,",
        "JQuery",
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
        "Salesforce"
      ]
    },{
      "name": "Social",
      "level": "",
      "keywords": [
        "Team Leadership & Mentoring,",
        "Experiential Learning Facilitation,",
        "Inter-Agency Conference Facilitation,",
        "Community Building & Engagement,",
        "Intergroup Dialogue,",
        "Conflict Resolution,",
        "Consensus Building,",
        "Theatre of the Oppressed,",
        "Nonprofit Management,",
        "Youth Education"
      ]
    },{
      "name": "Musical",
      "level": "",
      "keywords": [
        "Jazz Piano,",
        "Analog Synthesis,",
        "Music Composition,",
        "Music Production"
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
