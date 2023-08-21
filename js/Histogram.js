
function paintHistogram(paperArray, div) {

    var paperType = [];
    var paperNum = [];

    for (var i = 0 ; i < paperArray.length ; i++) {
        if (paperType.indexOf(paperArray[i][5]) <= -1) {
            paperType.push(paperArray[i][5]);
        }
    }

    for (var k = 0 ; k < paperType.length ; k++) {
        paperNum.push(0);
    }
    for (var j = 0 ; j < paperArray.length ; j++) {
        paperNum[paperType.indexOf(paperArray[j][5])]++;
    }
    for (var j = 0 ; j < paperType.length ; j++) {
        console.log(paperType[j] + ":" + paperNum[j]);
    }


    var timeData = [];

    for (var i = 0 ; i < paperType.length ; i++) {
        timeData.push({
            'x' : paperType[i],
            'y' : paperNum[i]
        });
    }
    var axisNum = timeData.length;
    var width=700;
    var height=400;
    var typename = [];
    var dataset = [];
    // for (var i = 0; i < axisNum ; i++) {
    //     dataset.push({
    //         'x' : timeData[i].x,
    //         'y' : timeData[i].y
    //     });
    // }
    for (var i = 0; i < axisNum ; i++) {
        typename.push(timeData[i].x);
        dataset.push(timeData[i].y);
    }
    // for (var j = 0 ; j < axisNum ; j++) {
    //     console.log(dataset[j].x + ":" + dataset[j].y);
    // }
    var padding={left:50, right:20, top:20, bottom:20};
    var svg=div.append("svg")
        .attr("width",width)
        .attr("height",height)
        .style("z-index",2);
    //x轴的比例尺
    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0, width - padding.left - padding.right]);

    //y轴的比例尺
    var yScale = d3.scale.linear()
        .domain([0,d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);

    //定义x轴
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .tickValues(0)
        .orient("bottom");

    //定义y轴
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");


    //矩形之间的空白
    var rectPadding = 4;

    //定义矩形元素
    var rects=svg.selectAll(".MyRect")
        .data(dataset)
        .enter()
        .append("rect")
        .style({
            "cursor":"pointer"
        })
        .attr("class","MyRect")
        .attr("transform","translate("+padding.left+","+padding.top+")")
        .attr("x",function(d,i){
            return xScale(i)+rectPadding/2;
        })
        .attr("y",function(d){
            return yScale(0);
        })
        .attr("width",xScale.rangeBand()-rectPadding)
        .attr("height",function(d){
            return 0;
        })
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("height",function(d){
            return height-padding.top-padding.bottom-yScale(d);
        }).on("mouseover",function(d,i)
        {
            tooltip.html("Type : " + typename[i]+"<br/>" + "Number : " + d)
                .style("left",(d3.event.pageX + 20)+"px")
                .style("top",(d3.event.pageY-20)+"px")
                .style("opacity",1.0)
                .style("z-index", 5);
        })
        .on("mouseout",function(d) {
            tooltip.style("opacity",0.0).style("z-index", -1);
        });

    var tooltip = d3.select("body").append("div")
        .attr("class","tooltip2")
        .style("opacity",0.0)
        .style("z-index", -1);

    //添加x轴
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis);

    //添加y轴
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .call(yAxis);

    // div.append("p").html("Classification of this Repository").style({
    //     'font-family': 'bold',
    //     'left': '20px'
    // });

}