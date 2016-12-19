//FINAL PROJEC

var margin = {t:50,r:50,b:50,l:70};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;


var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform', 'translate ('+margin.l+','+margin.r+')');







d3.csv('data/testdata.csv',parse,dataLoaded);

//var scaleYLines = d3.time.scale().domain([new Date(1823,0,1),new Date(2005,0,1)]).range([0,8000])
//var scaleC = d3.scale.ordinal().domain([])
//var scaleX = d3.scale.linear().domain([2,920]).range([0,2000])

var scaleX = d3.scaleLinear().domain([1,12]).range([0,300])
var scaleB = d3.scaleLinear().domain([0,300]).range([0,150])

// function dataLoaded(err,data){

// 	console.log(data);


// plot.selectAll('.rects')
// 	.data(data)
// 	.enter()
// 	.append('rect').attr('class','rects')
// 	.attr('x',function(d){return scaleX(d.time)})
// 	.attr('y', function(d){

		
// 		return 400-d.value;})
// 	//.attr('r',10)
// 	.attr('height',function(d){ return d.value;})
// 	.attr('width', 15)
// 	//.attr('fill','rgba(12,12,12,.1)')




function dataLoaded(err,data){

	console.log(data);


var bars = plot.selectAll()

var firstBars = plot.selectAll('.first')
	.data(data, function(d){return d.time})


firstBars .enter()
	.append('rect').attr('class','first bars')
	.attr('x',function(d){return scaleX(d.time)})
	.attr('y', function(d){
		return 400-scaleB(d.first);})
	//.attr('r',10)
	.attr('height',function(d){ return scaleB(d.first);})
	.attr('width', 15)
	.attr('fill','#f5851f')

firstBars.exit()
	.remove()



var secondBars=plot.selectAll('.second')
	.data(data, function(d){return d.time})
secondBars.enter()
	.append('rect').attr('class','second bars')
	.attr('x',function(d){return scaleX(d.time)})
	.attr('y', function(d){
		return 400-scaleB(d.first)-scaleB(d.second);})
	.attr('height',function(d){ return scaleB(d.second);})
	.attr('width', 15)
	.attr('fill','#5ac8e7')

secondBars.exit()
	.remove()


var thirdBars=plot.selectAll('.third')
	.data(data, function(d){return d.time})
thirdBars.enter()
	.append('rect').attr('class','third bars')
	.attr('x',function(d){return scaleX(d.time)})
	.attr('y', function(d){
		return 400-scaleB(d.first)-scaleB(d.second)-scaleB(d.third);})
	.attr('height',function(d){ return scaleB(d.third);})
	.attr('width', 15)
	.attr('fill','#64666a')

thirdBars.exit()
	.remove()


var discBars = plot.selectAll('.disc')
	.data(data, function(d){return d.time})
discBars.enter()
	.append('rect').attr('class','disc bars')
	.attr('x',function(d){return scaleX(d.time)})
	.attr('y', function(d){
		return 400-scaleB(d.first)-scaleB(d.second)-scaleB(d.third)-scaleB(d.fourth);})
	.attr('height',function(d){ return scaleB(d.fourth);})
	.attr('width', 15)
	.attr('fill','#808080')
	//.attr('border','solid white 1px')

discBars.enter()
	.remove()

	d3.selectAll('.btn1').on('click',function(){
	//console.log('lgow');
	d3.selectAll('.first')
	.transition()
	.attr('y', function(d){
		return 400-scaleB(d.first);})
	d3.selectAll('.second')
	.transition()
	.attr('y', function(d){
		return 300-scaleB(d.second);})
	d3.selectAll('.third')
	.transition()
	.attr('y',function(d){
		return 100-scaleB(d.third);})
	d3.selectAll('.disc')
	.transition()
	.attr('y',function(d){
		return 0-scaleB(d.fourth);})

	
})

d3.selectAll('.btn2').on('click',function(){
	//console.log('lgow');
	d3.selectAll('.first')
	.transition()
		.attr('y', function(d){
		return 400-scaleB(d.first);})
	d3.selectAll('.second')
	.transition()
	.attr('y', function(d){
		return 400-scaleB(d.first)-scaleB(d.second);})
	d3.selectAll('.third')
	.transition()
	.attr('y', function(d){
		return 400-scaleB(d.first)-scaleB(d.second)-scaleB(d.third);})
	d3.selectAll('.disc')
	.transition()
	.attr('y', function(d){
		return 400-scaleB(d.first)-scaleB(d.second)-scaleB(d.third)-scaleB(d.fourth);})
	
})

}




function parse(d){


	return{
		time: d.measurename,
		first: d.First,
		second: d.Second,
		third: d.Third,
		fourth: d.Fourth,

	}
}



