function drawHeatMap(div, paperArray) {
    var paperType = [];
    var timeArray = [];
    for (var i = 0 ; i < paperArray.length ; i++) {
        if (timeArray.indexOf(paperArray[i][1].split('.')[0]) <= -1) {
            timeArray.push(paperArray[i][1].split('.')[0]);
        }
        if (paperType.indexOf(paperArray[i][5]) <= -1) {
            paperType.push(paperArray[i][5]);
        }
    }
    timeArray.sort();
    var headMapArray = [];
    for (var i = 0 ; i < paperType.length ; i++) {
        headMapArray.push([]);
        for (var j = 0 ; j < timeArray.length ; j++) {
            headMapArray[i].push(0);
        }
    }
    for(var i = 0 ; i < paperArray.length ; i++) {
        headMapArray[paperType.indexOf(paperArray[i][5])][timeArray.indexOf(paperArray[i][1].split('.')[0])]++;
    }
    for (var i = 0 ; i < paperType.length ; i++) {
        for (var j = 0 ; j < timeArray.length ; j++) {
            console.log(paperType[i] + ":" + timeArray[j] + ":" + headMapArray[i][j]);
        }
    }
    for (var i = 0 ; i < paperType.length ; i++) {
        // console.log(paperType[i]);
    }
    // console.log(paperType.length);
    var margin = { top: 40, right: 10, bottom: 100, left: 300 };
    TP = 0;
    cellSize=23;
    col_number=30;
    row_number=30;
    width = cellSize*(col_number - 5 ); // - margin.left - margin.right,
    height = cellSize*(paperType.length);// - margin.top - margin.bottom,
    gridSize = Math.floor(width / 24);
    legendElementWidth = cellSize;
    colorBuckets = 21;
    colors = ['#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];

    hccol = [];
    hcrow = [];
    rowLabel = ["AI Interpretability and Understanding", "AI Privacy", "Adversarial Attacks", "Defenses and Detection", "Testing for DL Systems", "Verification for DL Systems", "Miscellaneou"];
    Type1 = ["Interpretability and Understanding"];
    Type2 = ["Privacy", "Adversarial Attacks", "Defenses and Detection"];
    Type3 = ["Testing for DL Systems", "Verification for DL Systems"];
    Type4 = ["Datasets"];
    colLabel = timeArray;
    for (var i = 0 ; i < row_number; i++) {
        hcrow.push(i)
    }
    for (var i = 0 ; i < col_number; i++) {
        hccol.push(i)
    }
    d3.tsv("data/test3.tsv",
        function(d) {
            return {
                row:   +d.Type,
                col:   +d.Year,
                value: +d.Number
            };
        },
        function(error, data) {
            var colorScale = d3.scale.quantile()
                .domain([ 0 , 5, 10])
                .range(colors);

            var svg = div.append("svg")
                .attr("id", "heatMapSvg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            ;
            var rowLabels = svg.append("g")
                .selectAll(".rowLabelg")
                .data(Type1)
                .enter()
                .append("text")
                .attr("id", function (d) { return d; })
                .text(function (d) { return d; })
                .attr("x", 0)
                .attr("y", function (d, i) { return hcrow.indexOf(i+1) * cellSize; })
                .style("text-anchor", "end")
                .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
                .attr("class", function (d, i) { TP++; return "rowLabel mono r" + i;} )
                .classed("text-red",true);
            // .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
            // .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);});
            console.log(TP);
            svg.append("g")
                .selectAll(".rowLabelg")
                .data(Type2)
                .enter()
                .append("text")
                .attr("id", function (d) { return d; })
                .text(function (d) { return d; })
                .attr("x", 0)
                .attr("y", function (d, i) { return hcrow.indexOf((TP++) + 1) * cellSize; })
                .style("text-anchor", "end")
                .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
                .attr("class", function (d, i) {  return "rowLabel mono r" + TP;} )
                .classed("text-green",true);

            svg.append("g")
                .selectAll(".rowLabelg")
                .data(Type3)
                .enter()
                .append("text")
                .attr("id", function (d) { return d; })
                .text(function (d) { return d; })
                .attr("x", 0)
                .attr("y", function (d, i) { return hcrow.indexOf((TP++) + 1) * cellSize; })
                .style("text-anchor", "end")
                .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
                .attr("class", function (d, i) {  return "rowLabel mono r" + TP;} )
                .classed("text-blue",true);
            svg.append("g")
                .selectAll(".rowLabelg")
                .data(Type4)
                .enter()
                .append("text")
                .attr("id", function (d) { return d; })
                .text(function (d) { return d; })
                .attr("x", 0)
                .attr("y", function (d, i) { return hcrow.indexOf((TP++) + 1) * cellSize; })
                .style("text-anchor", "end")
                .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
                .attr("class", function (d, i) {  return "rowLabel mono r" + TP;} );


            var colLabels = svg.append("g")
                .selectAll(".colLabelg")
                .data(colLabel)
                .enter()
                .append("text")
                .text(function (d) { return d; })
                .attr("x", 0)
                .attr("y", function (d, i) { return hccol.indexOf(i+1) * cellSize; })
                .style("text-anchor", "left")
                .attr("transform", "translate("+cellSize/2 + ",-6) rotate (-90)")
                .attr("class",  function (d,i) { return "colLabel mono c"+i;} )
                .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
                .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);});

            var heatMap = svg.append("g").attr("class","g3")
                .selectAll(".cellg")
                .data(data,function(d){return d.row+":"+d.col;})
                .enter()
                .append("rect")
                .attr("x", function(d) { return hccol.indexOf(d.col) * cellSize; })
                .attr("y", function(d) { return hcrow.indexOf(d.row) * cellSize; })
                .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
                .attr("width", cellSize)
                .attr("height", cellSize)
                .style("fill", function(d) { return colorScale(d.value); })
                .on("mouseover", function(d){
                    //highlight text
                    d3.select(this).classed("cell-hover",true);
                    d3.selectAll(".rowLabel").classed("text-highlight",function(r,ri){ return ri==(d.row-1);});
                    d3.selectAll(".colLabel").classed("text-highlight",function(c,ci){ return ci==(d.col-1);});

                    //Update the tooltip position and value
                    d3.select("#tooltip")
                        .style("left", (d3.event.pageX+10) + "px")
                        .style("top", (d3.event.pageY-10) + "px")
                        .select("#value")
                        .text("lables:"+rowLabel[d.row-1]+","+colLabel[d.col-1]+"\ndata:"+d.value);
                    //Show the tooltip
                    d3.select("#tooltip").classed("hidden", false);
                })
                .on("mouseout", function(){
                    d3.select(this).classed("cell-hover",false);
                    d3.selectAll(".rowLabel").classed("text-highlight",false);
                    d3.selectAll(".colLabel").classed("text-highlight",false);
                    d3.select("#tooltip").classed("hidden", true);
                })
            ;

            var legend = svg.selectAll(".legend")
                .data([0,1,2,3,4,5,6,7,8,9,10])
                .enter().append("g")
                .attr("class", "legend");

            legend.append("rect")
                .attr("x", function(d, i) { return legendElementWidth * (i) - 10; })
                .attr("y", height + (cellSize*2))
                .attr("width", legendElementWidth)
                .attr("height", cellSize)
                .style("fill", function(d, i) { return colors[i]; });

            legend.append("text")
                .attr("class", "mono")
                .text(function(d) { return d; })
                .attr("width", legendElementWidth)
                .attr("x", function(d, i) { return legendElementWidth * (i) - 10; })
                .attr("y", height + (cellSize*4));




            var legend = svg.selectAll(".legend")
                .data([0,1,2,3,4,5,6,7,8,9,10])
                .enter().append("g")
                .attr("class", "legend");

            legend.append("rect")
                .attr("x", function(d, i) { return legendElementWidth * (i) - 10; })
                .attr("y", height + (cellSize*2))
                .attr("width", legendElementWidth)
                .attr("height", cellSize)
                .style("fill", function(d, i) { return colors[i]; });

            legend.append("text")
                .attr("class", "mono")
                .text(function(d) { return d; })
                .attr("width", legendElementWidth)
                .attr("x", function(d, i) { return legendElementWidth * (i) - 10; })
                .attr("y", height + (cellSize*4));




            svg.append("rect")
                .attr("x", -10*cellSize)
                .attr("y", height + 2*cellSize -5)
                .attr("width", legendElementWidth)
                .attr("height", cellSize)
                .style("fill", "green");

            svg.append("g")
                .append("text")
                .text("Security and Privacy")
                .style("font-family", "helvetica")
                .style("font-size", "12")
                .attr("width", legendElementWidth)
                .attr("x", -9*cellSize + 2)
                .attr("y", height + 3*cellSize - 12);
            // .attr("class", "rowLabel mono r14");

            // legend.append("g").append("rect")
            //     .attr("x", -6*cellSize)
            //     .attr("y", height + cellSize)
            //     .attr("width", legendElementWidth)
            //     .attr("height", cellSize)
            //     .style("fill", "green");
            //
            // svg.append("g").append("text")
            // // .attr("class", "rowLabel mono r15")
            //     .text("AI Testing")
            //     .style("font-family", "helvetica")
            //     .style("font-size", "10.5")
            //
            //     .attr("width", legendElementWidth)
            //     .attr("x", -5*cellSize + 2)
            //     .attr("y", height + 2*cellSize - 3)
            // .attr("class", "rowLabel mono r14");

            svg.append("rect")
                .attr("x", -10*cellSize)
                .attr("y", height + 3*cellSize)
                .attr("width", legendElementWidth)
                .attr("height", cellSize)
                .style("fill", "blue");

            svg.append("g").append("text")
            // .attr("class", "rowLabel mono r15")
                .text("Testing and Verification")
                .style("font-family", "helvetica")
                .style("font-size", "12")
                .attr("width", legendElementWidth)
                .attr("x", -9*cellSize + 2)
                .attr("y", height + 4*cellSize - 5)
            // .attr("class", "rowLabel mono r15");

            // legend.append("rect")
            //     .attr("x", -6*cellSize)
            //     .attr("y", height + 3*cellSize)
            //     .attr("width", legendElementWidth)
            //     .attr("height", cellSize)
            //     .style("fill", "black");
            //
            // svg.append("g").append("text")
            // // .attr("class", "rowLabel mono r15")
            //     .text("Others")
            //     .style("font-family", "helvetica")
            //     .style("font-size", "10.5")
            //     .attr("width", legendElementWidth)
            //     .attr("x", -5*cellSize + 2)
            //     .attr("y", height + 4*cellSize - 3)
            //     // .attr("class", "rowLabel mono r15");
        });
}