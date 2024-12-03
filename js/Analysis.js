function AnalysisStyle() {
    d3.select("#AnalysisPage").style({
        "background-color":"#E6E6E6"
    });
    d3.select("#Content").style({
        "position": "relative",
        "top" : "0%",
        "left" : "20%",
        "width": "80%",
        "height" : "60%"
    });
    paintChart(paperArray, d3.select("#chartDiv"));
    drawHeatMap(d3.select("#chartDiv"), paperArray);
    // paintHistogram(paperArray, d3.select("#chartDiv"));
    // d3.select("#chartDiv").append("img").attr('src','../img/TimeLine.jpg')

}
