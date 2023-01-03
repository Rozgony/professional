import { TOPICS } from './../utils/CONSTANTS';

export class Item {
  constructor() {
    this.title = '';
    this.desc = '';
    this.start = 2000;
	this.end = 2000;
	this.description = '';
    this.topics = {
    	[TOPICS.CODING]: {
    		amount: 0,
    		desc: ''
    	},
    	[TOPICS.SOCIAL]: {
    		amount: 0,
    		desc: ''
    	},
    	[TOPICS.MUSIC]: {
    		amount: 0,
    		desc: '',
    		fileId: ''
    	},
    };
  }
} 