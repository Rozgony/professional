import { PRESENT, CURRENT_YEAR, START_YEAR, TIMELINE_ROW_LENGTH } from "./CONSTANTS";

function filterResume(items, filter){
	return items.filter( item => filterObject(item,filter.toLowerCase()));
}

function filterObject(obj,filter) {
	// knowing my dataset, if its not a string its another object or array of objects
	return typeof obj === 'string' ? obj.toLowerCase().includes(filter) : Object.values(obj).some(val => {
		return filterObject(val,filter);
	});
}

function toCapitalCase(string = '') {
  	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function arrayToObj(array = [],key = '') {
	let arrayCopy = [...array];
	return arrayCopy.reduce(function(result, item, index) {
		  result[item[key]] = item;
		  return result;
		}, {});
}

function createTimelineWork(resumeWork){
	const work = arrayToObj(resumeWork,'company');
	for (let title in work) {
		work[title].roles = arrayToObj(work[title].highlights,'title');
	}
	return work;
} 

function parseYearFromDateStr(dateStr = '') {
  return dateStr === 'Present' ? new Date().getUTCFullYear() : Number(dateStr.split('-')[0]);
}

function gridItemClasses(item){
	const end = item.end === PRESENT ? CURRENT_YEAR : item.end;
	return `grid-row-start-${TIMELINE_ROW_LENGTH - (item.start - START_YEAR)} grid-row-end-${TIMELINE_ROW_LENGTH - (end - START_YEAR)} grid-column-end-01 grid-column-end-06 grid-item ${item.fadeClass || ''}`;
}

export {
	filterResume,
	toCapitalCase,
	arrayToObj,
	createTimelineWork,
	parseYearFromDateStr,
	gridItemClasses
};