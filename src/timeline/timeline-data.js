import { resume } from "./../resume/resume-data";
import { createTimelineWork, parseYearFromDateStr } from "./../utils/utils";
import { TOPICS, ROLES, COMPANY, PRESENT } from './../utils/CONSTANTS';
import facilitationGraph from "./images/facilitation_graph.png";
import WhenAManYells from "./audio/when_a_man_yells_for_his_mother.mp3";
import Infusion from "./audio/Infusion.mp3";
import StormScape from "./audio/StormScape.mp3";
import GallerySoundscape from "./audio/GallerySoundscape.mp3";
import DignityBeforeBread_1 from "./audio/DignityBeforeBread_1.mp3";
import DignityBeforeBread_2 from "./audio/DignityBeforeBread_2.mp3";
import DignityBeforeBread_3 from "./audio/DignityBeforeBread_3.mp3";

const work = createTimelineWork(resume.work);

const timeline = {
	description: "While I work primarily as a software engineer, I have been involved in various activities throughout the years that I wanted to represent here.",
	instructions: "Click the labels to filter the timeline. Click the columns for more info.",
	items: [
		{
			label: "Church Music",
			start: 2003,
			end: 2006,
			topics: {
				[TOPICS.MUSIC]: {
					amount: 100,
					desc: "Played piano weekly in a church of several hundred congregants."
				}
			},
			description: ""
		},
		{
			label: "When a man yells for his mother...",
			start: 2020,
			end: 2020,
			description: "Killer Mike's words after death of George Floyd inspired me. Sadly, this cycle has been going on for a long time and so the words of Ella Baker and Martin Luther King are also just as relevant today as they were 50+ years ago.",
			audio: [{
				fileId: "868134979",
				filePath: WhenAManYells
			}],
			topics: {
				[TOPICS.MUSIC]: {
					amount: 80,
					desc: "Performed the Rhodes, Synthesizer, and Drum Machine parts. I also mixed the vocal samples and mastered the entire track."
				},
				[TOPICS.SOCIAL]: {
					amount: 20,
					desc: "Researched speeches from the 1960s by Civil Rights leaders Martin Luther King and Ella Baker to learn about their reactions to the unrest then and provide context for how to understand our current times."
				}
			}
		},
		{
			label: "Bachelors: Jazz / Commercial Composition",
			start: 2000,
			end: 2005,
			audio: [{
				title: "Infusion",
				fileId: "229729237",
				filePath: Infusion
			}],
			topics: {
				[TOPICS.MUSIC]: {
					amount: 90,
					desc: "Studied Jazz Piano and Composition. Lead small jazz ensembles and big bands in the performance of my music."
				},
				[TOPICS.CODING]: {
					amount: 10,
					desc: "Used the visual programming language Max/MSP to create a program that digitally manipulated and played back permutations of live improvisations by a trumpter."
				}
			}
		},
		{
			label: "Spanish Minor",
			start: 2003,
			end: 2005,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 100,
					desc: "Studied Spanish Languages and Cultures in preparation for my study abroad semester in Argentina."
				}
			},
			description: ""
		},
		{
			label: "Argentina Semester",
			start: 2004,
			end: 2004,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 50,
					desc: "Lived with a host family and studied music and humanities in Spanish in Mendoza, Argentina."
				},
				[TOPICS.MUSIC]: {
					amount: 50,
					desc: "Studied tango and Argentine classic composers with the composer Susan Anton."
				}
			},
			description: ""
		},
		{
			label: "El Salvador Voluntering",
			start: 2005,
			end: 2006,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 80,
					desc: "Conducted research interviews for an independent project on the effects of violence from the 1980’s conflict on local communities, how the church supported the communities in response, and how the repercussions of the violence continues to express itself at various political levels."
				},
				[TOPICS.MUSIC]: {
					amount: 20,
					desc: "Studied Salvadoran folkloric music with professor Israel Bojorje of the Centro National de Artes. "
				}
			},
			description: "Assisted Lutheran Bishop Medardo Gomez, a Nobel Peace Prize nominee, with his community development and violence prevention work throughout the countryside and urban areas."
		},
		{
			label: "Elementary Music Teacher",
			start: 2006,
			end: 2007,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 50,
					desc: "Taught general music two days a week to a small school in the Pen Lucy neighborhood of Baltimore City. Also taught a world cultures after-school program."
				},
				[TOPICS.MUSIC]: {
					amount: 50,
					desc: "Focused on developing the skills of rhythm, moving to music, and ensemble playing with the use of percussion instruments and creating \"music videos\" with the students."
				}
			},
			description: ""
		},
		{
			label: "Letters to Nagalim",
			start: 2007,
			end: 2007,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 50,
					desc: "Worked with an actor to develop a script that used the premise of letters between pen pals in the United States and Nagalim, India to inform the audience of the human rights abuses there."
				},
				[TOPICS.MUSIC]: {
					amount: 50,
					desc: "Lead an ensemble of actor, piano, bass, and drums for the performance."
				}
			},
			description: "Composed and performed a dramatic peice of music at the office Build of the United States Congress to raise awareness about the struggles for human rights for the Naga people of northeast India."
		},
		{
			label: "English for Speakers of Other Languages",
			start: 2007,
			end: 2009,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 100,
					desc: "Taught a community English class to English Language Learners and did English Language intake and placement asssessments at Howard Community College for new students from all around the world."
				}
			},
			description: ""
		},
		{
			label: COMPANY.K4P,
			start: parseYearFromDateStr(work[COMPANY.K4P].startDate),
			end: parseYearFromDateStr(work[COMPANY.K4P].endDate),
			description: work[COMPANY.K4P].summary,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 90,
					desc: work[COMPANY.K4P].roles[ROLES.CURRIC_DEV].des
				},
				[TOPICS.CODING]: {
					amount: 10,
					desc: work[COMPANY.K4P].roles[ROLES.WEBMASTER].des
				}
			}
		},

		{
			label: "Dignity Before Bread",
			start: 2015,
			end: 2015,
			topics: {
				[TOPICS.MUSIC]: {
					amount: 80,
					desc: "Composed, performed, and produced all the music. Worked with actors to record and mix the spoken word collage sections."
				},
				[TOPICS.SOCIAL]: {
					amount: 20,
					desc: "The work is based on my personal experience working with youth in Baltimore City and research into the global protest movements of 2011. I recorded the audio of protests myself while in Spain and Morocco in 2011."
				}
			},
			description: "A piece music weaving together the stories of a Baltimore City student telling his teach he is dropping out of school, the Democracia Real Ya activists of Spain in 2011, and Manoubia Bouazizi, the mother of the young man in Tunisia that set himself on fire and ignited the Arab Spring.",
			audio: [{
				title: "Part 1",
				fileId: "868134928",
				filePath: DignityBeforeBread_1
			},{
				title: "Part 2",
				fileId: "868134949",
				filePath: DignityBeforeBread_2
			},{
				title: "Part 3",
				fileID: "868134964",
				filePath: DignityBeforeBread_3
			}]
		},
		{
			label: "BKER",
			start: 2005,
			end: 2008,
			topics: {
				[TOPICS.MUSIC]: {
					amount: 100,
					desc: "Jazz House group comprising of keyboard, electric bass, drums, and a singer that played at various venues, events, and festivals throughout the mid-Atlantic."
				}
			},
			description: ""
		},
		{
			label: "Masters: Int'l Peace & Conflict Resolution",
			start: 2008,
			end: 2010,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 80,
					desc: "Focused on governance/counter-insurgencies, facilitation, and using the arts in peacebuilding."
				},
				[TOPICS.MUSIC]: {
					amount: 20,
					desc: "Research the role of the music and the arts in general to bridge social divides and challenge assumptions."
				}
			},
			description: "An applied multi-disciplinary masters degree integrating the fields of International Relations, Anthropology, Social Psychology, Peace Studies, and Conflict Resolution."
		},
		{
			label: "Bolivia Field Research",
			start: 2010,
			end: 2010,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 100,
					desc: "I interviewed the NGO staff, state judges, indigenous judges, lawyers, and others throughout the area surrounding Oruro."
				}
			},
			description: "Researched the facilitation process that was done by NGOs in Oruro, Bolivia to integrate the indigenous justice system with the state justice system after the indigenous justice was recognized by the 2009 constitutional reforms."
		},
		{
			label: "Freelance Facilitator",
			start: parseYearFromDateStr(work[COMPANY.FREELANCE].startDate),
			end: parseYearFromDateStr(work[COMPANY.FREELANCE].endDate),
			description: "Below is a chart of the various facilitation styles in which I am experienced.",
			image: facilitationGraph,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 100,
					desc: `${work[COMPANY.FREELANCE].roles[ROLES.TOP].des} ${work[COMPANY.FREELANCE].roles[ROLES.COMM_DIALOG].des}`
				}
			}
		},
		{
			label: "Int'l Rescue Committee",
			start: parseYearFromDateStr(work[COMPANY.IRC].startDate),
			end: parseYearFromDateStr(work[COMPANY.IRC].endDate),
			description: work[COMPANY.IRC].summary,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 80,
					desc: work[COMPANY.IRC].roles[ROLES.DEV_SCALE].des
				},
				[TOPICS.CODING]: {
					amount: 20,
					desc: work[COMPANY.IRC].roles[ROLES.DATA].des
				}
			}
		},
		{
			label: "Trio",
			start: 2012,
			end: 2014,
			topics: {
				[TOPICS.MUSIC]: {
					amount: 100,
					desc: "An experimental jazz hip hop group. Finding a good lead vocalist is difficult sometimes..."
				}
			},
			description: ""
		},
		{
			label: COMPANY.SOCIETYLAB,
			start: parseYearFromDateStr(work[COMPANY.SOCIETYLAB].startDate),
			end: parseYearFromDateStr(work[COMPANY.SOCIETYLAB].endDate),
			description: work[COMPANY.SOCIETYLAB].summary,
			topics: {
				[TOPICS.SOCIAL]: {
					amount: 20,
					desc: work[COMPANY.SOCIETYLAB].roles[ROLES.PROD_DESIGN].des
				},
				[TOPICS.CODING]: {
					amount: 80,
					desc: work[COMPANY.SOCIETYLAB].roles[ROLES.TECH].des
				}
			}
		},
		{
			label: "Federal Government",
			start: parseYearFromDateStr(work[COMPANY.FEDERAL_GOVT].startDate),
			end: parseYearFromDateStr(work[COMPANY.FEDERAL_GOVT].endDate),
			topics: {
				[TOPICS.CODING]: {
					amount: 50,
					desc: work[COMPANY.FEDERAL_GOVT].roles[ROLES.TECH].des
				},
				[TOPICS.SOCIAL]: {
					amount: 50,
					desc: work[COMPANY.FEDERAL_GOVT].summary
				}
			}
		},
		{
			label: "Alleys & Intersections Artist Residency",
			start: 2017,
			end: 2017,
			topics: {
				[TOPICS.MUSIC]: {
					amount: 60,
					desc: "A collage of interviews, ambient noise of their creative process, and music that was created and played in the background during the group art show on the fourth day."
				},
				[TOPICS.SOCIAL]: {
					amount: 40,
					desc: "Throughout the residency, I recorded the sounds of the artists working and interviewed them about their creative processes as well as facilitated daily check-in meetings about the process of their works."
				}
			},
			description: "Four artists gathered at Michael Owen's for four days to create their own original artworks to be presented at a group at show on the fourth day.",
			audio: [{
				title: "Gallery SoundScape",
				fileId: "868134997",
				filePath: GallerySoundscape
			}]
		},
		{
			label: "Stormscape",
			start: 2017,
			end: 2017,
			description: "A storm soundscape created in conjunction with painter and muralist Michael Owen's New Life show ",
			topics: {
				[TOPICS.MUSIC]: {
					amount: 100,
					desc: "A 30 minute-long, four-channel surround sound track that can be played in a continuous loop. It uses synthesizers and field recordings of rain, city streets, water, percussion instruments, metal, and other things to create a seemless mix of real and synthesized sounds."
				}
			},
			audio: [{
				title: "StormScape",
				fileId: "868135015",
				filePath: StormScape
			}]
		},
		{
			label: "Jazz Piano & Synthesizers",
			start: 2021,
			end: PRESENT,
			description: "Solo jazz piano and/or jazz synthesizers for clubs, parties, events, and more.",
			topics: {
				[TOPICS.MUSIC]: {
					amount: 100,
					desc: "Jazz Piano and/or Synthesizer interpretations of both new and old classics from Miles Davis, John Coltrane, Duke Ellington, J. Cole, Kendrick Lamar, J Dilla, Joe Raposo (Sesame Street), Camilla Cabello, Radiohead, Christian Scott aTunde Adjuah, Bjork, Death Cab for Cutie, and many others."
				}
			}
		},
		{
			label: COMPANY.SYNAPTIC,
			start: parseYearFromDateStr(work[COMPANY.SYNAPTIC].startDate),
			end: parseYearFromDateStr(work[COMPANY.SYNAPTIC].endDate),
			description: work[COMPANY.SYNAPTIC].summary,
			topics: {
				[TOPICS.CODING]: {
					amount: 95,
					desc: work[COMPANY.SYNAPTIC].roles[ROLES.TECH].des
				},
				[TOPICS.SOCIAL]: {
					amount: 5,
					desc: work[COMPANY.SYNAPTIC].roles[ROLES.SYNA_CARES].des
				}
			}
		}
	]
};

export {
	timeline
}