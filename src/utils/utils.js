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
	const startYear = 2000;
	const endYear = 22;
	return `grid-row-start-${endYear - (item.start - startYear)} grid-row-end-${endYear - (item.end - startYear)} grid-column-end-01 grid-column-end-06 grid-item ${item.fadeClass || ''}`;
}

export {
	filterResume,
	toCapitalCase,
	arrayToObj,
	createTimelineWork,
	parseYearFromDateStr,
	gridItemClasses
};