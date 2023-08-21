// var timeArray = [];
// var paperNum = [];
//
// for (var i = 0 ; i < paperArray.length ; i++) {
//     if (timeArray.indexOf(paperArray[i][1].split('.')[0]) <= -1) {
//         timeArray.push(paperArray[i][1].split('.')[0]);
//     }
// }
//
// for (var k = 0 ; k < timeArray.length ; k++) {
//     paperNum.push(0);
// }
// for (var j = 0 ; j < paperArray.length ; j++) {
//     paperNum[timeArray.indexOf(paperArray[j][1].split('.')[0])]++;
// }
//
// for (var j = 0 ; j < timeArray.length ; j++) {
//     console.log(timeArray[j] + ":" + paperNum[j]);
// }
function paintChart(paperArray, div) {
    var timeArray = [];
    var paperNum = [];
    //AI Interpretability and Understanding
    var AIU = [];
    //Testing for DL Systems
    var TD = [];
    //Verification for DL Systems
    var VD = [];
    var Datasets = [];
    //AI Privacy
    var AP = [];
    //Adversarial Attacks
    var AA = [];
    //Defenses and Detection
    var DD = [];
    //Security and Privacy
    var SP = [];
    //Testing and Verification
    var TV = [];

    for (var i = 0 ; i < paperArray.length ; i++) {
        if (timeArray.indexOf(paperArray[i][1].split('.')[0]) <= -1) {
            timeArray.push(paperArray[i][1].split('.')[0]);
        }
    }
    timeArray.sort();

    for (var k = 0 ; k < timeArray.length ; k++) {
        paperNum.push(0);
        AIU.push(0);
        TD.push(0);
        VD.push(0);
        Datasets.push(0);
        AP.push(0);
        AA.push(0);
        DD.push(0);
        SP.push(0);
        TV.push(0);
    }
    for (var j = 0 ; j < paperArray.length ; j++) {
        yearLen = timeArray.length;
        yearIndex = timeArray.indexOf(paperArray[j][1].split('.')[0]);
        for (var k = yearIndex ; k < yearLen ; k++) {
            paperNum[k]++;
        }
        if (paperArray[j][5] == "AI Interpretability and Understanding") {
            for (var k = yearIndex ; k < yearLen ; k++) {
                AIU[k]++;
            }
        } else if (paperArray[j][5] == "AI Privacy") {
            for (var k = yearIndex ; k < yearLen ; k++) {
                AP[k]++;
                SP[k]++;
            }
        } else if (paperArray[j][5] == "Adversarial Attacks") {
            for (var k = yearIndex ; k < yearLen ; k++) {
                AA[k]++;
                SP[k]++;
            }
        } else if (paperArray[j][5] == "Datasets") {
            for (var k = yearIndex ; k < yearLen ; k++) {
                Datasets[k]++;
            }
        } else if (paperArray[j][5] == "Defenses and Detection") {
            for (var k = yearIndex ; k < yearLen ; k++) {
                DD[k]++;
                SP[k]++;
            }
        } else if (paperArray[j][5] == "Testing for DL Systems") {
            for (var k = yearIndex ; k < yearLen ; k++) {
                TD[k]++;
                TV[k]++;
            }
        } else {
            for (var k = yearIndex ; k < yearLen ; k++) {
                VD[k]++;
                TV[k]++;
            }
        }
    }

    // for (var j = 0 ; j < timeArray.length ; j++) {
    //     console.log(AIU[]);
    //     AIU.push(0);
    //     TD.push(0);
    //     VD.push(0);
    //     Datasets.push(0);
    //     AP.push(0);
    //     AA.push(0);
    //     DD.push(0);
    //     SP.push(0);
    //     TV.push(0);
    // }
    //
   console.log(AIU[timeArray.length - 1]);
    console.log(AA[timeArray.length - 1]);
    console.log(AP[timeArray.length - 1]);
    console.log(VD[timeArray.length - 1]);
    console.log(TD[timeArray.length - 1]);
    console.log(Datasets[timeArray.length - 1]);
    console.log(DD[timeArray.length - 1]);
    console.log(SP[timeArray.length - 1]);
    console.log(TV[timeArray.length - 1]);
    // console.log(AIU[timeArray.length - 1]);

    var timeData = [];

    for (var i = 0 ; i < timeArray.length ; i++) {
        timeData.push({
            'x' : timeArray[i],
            'y' : paperNum[i]
        });
    }

    var axisNum = timeData.length;
    var padding =  50;  //边界值
    var axisW =  600;      //坐标轴宽度
    var width =  700;      //SVG宽度
    var height =  400;    //SVG高度
    var circleR = 2;                              //圆点半径
//存放画图数据
    var dataset = [];
    var dataset2 = [];
    var AAdata = [];
    var TDdata = [];
    var AIUdata = [];
    var VDdata = [];
    var Datasetsdata = [];
    var APdata = [];
    var DDdata = [];
    var SPdata = [];
    var TVdata = [];
    for (var i = 1; i <= axisNum ; i++)
    {
        dataset.push([i,timeData[i-1].y]);
        dataset.push([i, AA[i - 1]]);
        dataset.push([i, AIU[i - 1]]);
        dataset.push([i, VD[i - 1]]);
        dataset.push([i, Datasets[i - 1]]);
        dataset.push([i, AP[i - 1]]);
        dataset.push([i, DD[i - 1]]);
        dataset.push([i, SP[i - 1]]);
        dataset.push([i, TV[i - 1]]);
        dataset.push([i, TD[i - 1]]);

        dataset2.push({"x" : i, "y" : timeData[i-1].y});
        AAdata.push({"x" : i, "y" : AA[i - 1]});
        AIUdata.push({"x" : i, "y" : AIU[i - 1]});
        VDdata.push({"x" : i, "y" : VD[i - 1]});
        Datasetsdata.push({"x" : i, "y" : Datasets[i - 1]});
        APdata.push({"x" : i, "y" : AP[i - 1]});
        DDdata.push({"x" : i, "y" : DD[i - 1]});
        SPdata.push({"x" : i, "y" : SP[i - 1]});
        TVdata.push({"x" : i, "y" : TV[i - 1]});
        TDdata.push({"x" : i, "y" : TD[i - 1]});


    }
    var yMax = d3.max(dataset,function(d){return d[1];}); //y轴最大值
    var yaxisData = [yMax*(1/3) , yMax*(2/3) , yMax]; //横线y轴坐标

//尺度缩放
    var xScale = d3.scale.linear()
        .domain([1,axisNum])
        .range([0,axisW]);

    var yScale = d3.scale.linear()
        .domain([0, yMax])
        .range([height - padding, padding]);

    var yPoint = d3.scale.linear()
        .domain([0, d3.max(timeData, function(d) { return d.y; })])
        .range([height - padding, padding]);
    var xValues = timeData.map(function (d) { return d.x;  });
    xValues = d3.set(xValues).values();


//加入标轴
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
        .tickFormat(function(d,i) {
            return timeArray[i];
        });
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left')
        .ticks(7);

    //加入SVG
    var svg = div
        .append('svg')
        .attr({
            width : width,
            height : height
        });

    svg.append('g')
        .attr("class", "x axis")
        .attr('transform', 'translate(' + padding + ',' + (height - padding) + ')')
        .call(xAxis);

    svg.append('g')
        .attr("class", "y axis")
        .attr('transform', 'translate(' + padding + ', 0)')
        .call(yAxis);

    svg.append('line').attr({
        x1: xScale(1) + padding,
        y1: yScale(0),
        x2: xScale(axisNum) + padding,
        y2: yScale(0)
    }).style({
        'stroke' : 'darkgray',
        'stroke-width' : 2
    });

//加入路径
    var line = d3.svg.line()
        .x(function (d) {
            return xScale(d.x)+ padding;
        })
        .y(function (d) {
            return yPoint(d.y);
        })
        .interpolate('monotone');

    var path1 = svg.append('path')
        .attr('d', line(dataset2))
        .attr({
            'stroke' : 'red',
            'stroke-width' : 1,
            'fill' : 'none'
        });

    var path2 = svg.append('path')
        .attr('d', line(AAdata))
        .attr({
            'stroke' : 'orange',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path3 = svg.append('path')
        .attr('d', line(AIUdata))
        .attr({
            'stroke' : 'pink',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path4 = svg.append('path')
        .attr('d', line(VDdata))
        .attr({
            'stroke' : 'gray',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path5 = svg.append('path')
        .attr('d', line(Datasetsdata))
        .attr({
            'stroke' : '#9932CC',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path6 = svg.append('path')
        .attr('d', line(APdata))
        .attr({
            'stroke' : '#37A1CC',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path7 = svg.append('path')
        .attr('d', line(DDdata))
        .attr({
            'stroke' : 'black',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path8 = svg.append('path')
        .attr('d', line(SPdata))
        .attr({
            'stroke' : 'green',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path9 = svg.append('path')
        .attr('d', line(TVdata))
        .attr({
            'stroke' : 'blue',
            'stroke-width' : 1,
            'fill' : 'none'
        });
    var path10 = svg.append('path')
        .attr('d', line(TDdata))
        .attr({
            'stroke' : '#5F9EA0',
            'stroke-width' : 1,
            'fill' : 'none'
        });



//加入横线
    for (var lineNum = 0; lineNum < yaxisData.length; lineNum++) {
        svg.append('line').attr({
            x1: xScale(1) + padding,
            y1: yScale(yaxisData[lineNum]),
            x2: xScale(axisNum) + padding,
            y2: yScale(yaxisData[lineNum])
        }).style({
            'stroke' : 'darkgray',
            'stroke-width' : 1
        });
    }

//加入竖线
//     for (var pointNum = 0; pointNum < axisNum; pointNum++) {
//         svg.append('line').attr({
//             x1 : xScale(dataset[pointNum][0]) + padding,
//             y1 : yScale(dataset[pointNum][1]),
//             x2 : xScale(dataset[pointNum][0]) + padding,
//             y2 : yScale(0)
//         }).style({
//             'stroke' : 'darkgray',
//             'stroke-width' : 1
//
//         }).on("mouseover", function (d,i) {
//             d3.select(this).style({
//                 'fill' : 'red'
//             });
//             tooltip.html("Year : " + timeArray[i]+"<br/>" + "Number : " + paperNum[i])
//                 .style("left",(d3.event.pageX + 10)+"px")
//                 .style("top",(d3.event.pageY)+"px")
//                 .style("opacity",1.0);
//         }).on("mouseout", function () {
//             d3.select(this).style({
//                 'fill' : 'white'
//             });
//             tooltip.style("opacity",0.0);
//         });;
//     }
//
    var tooltip = d3.select("body").append("div")
        .attr("class","tooltip")
        .style("opacity",0.0);

//加入圆点
    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d[0]) + padding;
        })
        .attr("cy", function (d) {
            return yScale(d[1]);
        })
        .attr("r", circleR)
        .style({
            'fill' : 'white',
            'stroke' : 'black',
            "cursor":"pointer",
            'stroke-width' : 0.5
        }).on("mouseover", function (d,i) {
        d3.select(this).style({
            'fill' : 'black'
        });
    //     console.log(i);
    //     tooltip.html("Number : " + paperNum[parseInt(i/10])
    //         .style("left",(d3.event.pageX + 10)+"px")
    //         .style("top",(d3.event.pageY)+"px")
    //         .style("opacity",1.0);
    }).on("mouseout", function () {
        d3.select(this).style({
            'fill' : 'white'
        });
    //     tooltip.style("opacity",0.0);
    });

    var legendTop = 60;
    var legendLeft = 80;
    var legendWidth = 15;
    var ledendHeight = 15;
    var legend = svg.selectAll(".legend")
        .data([0])
        .enter().append("g")
        .attr("class", "legend");
    legend.append("rect")
        .attr("x", legendLeft)
        .attr("y", legendTop)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "red");

    svg.append("g")
        .append("text")
        .text("Total (223)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5)
        .attr("y", legendTop + legendWidth - 3);

    legend.append("rect")
        .attr("x", legendLeft)
        .attr("y", legendTop + ledendHeight*1.5)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "green");

    svg.append("g")
        .append("text")
        .text("Security and Privacy (86)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5)
        .attr("y", legendTop + legendWidth*2.5 - 3);

    legend.append("rect")
        .attr("x", legendLeft + 20)
        .attr("y", legendTop + ledendHeight*3)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "#37A1CC");


    svg.append("g")
        .append("text")
        .text("Privacy (17)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5 + 20)
        .attr("y", legendTop + legendWidth*4 - 3);

    legend.append("rect")
        .attr("x", legendLeft + 20)
        .attr("y", legendTop + ledendHeight*4.5)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "orange");

    svg.append("g")
        .append("text")
        .text("Adversarial Attacks (40)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5 + 20)
        .attr("y", legendTop + legendWidth*5.5 - 3);

    legend.append("rect")
        .attr("x", legendLeft + 20)
        .attr("y", legendTop + ledendHeight*6)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "black");

    svg.append("g")
        .append("text")
        .text("Defenses and Detection (29)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5 + 20)
        .attr("y", legendTop + legendWidth*7 -3);

    legend.append("rect")
        .attr("x", legendLeft)
        .attr("y", legendTop + ledendHeight*7.5)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "blue");
    svg.append("g")
        .append("text")
        .text("Testing and Verification (53)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5)
        .attr("y", legendTop + legendWidth*8.5 -3);

    legend.append("rect")
        .attr("x", legendLeft + 20)
        .attr("y", legendTop + ledendHeight*9)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "gray");

    svg.append("g")
        .append("text")
        .text("Verification for DL Systems (34)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5 + 20)
        .attr("y", legendTop + legendWidth*10 -3 );

    legend.append("rect")
        .attr("x", legendLeft + 20)
        .attr("y", legendTop + ledendHeight*10.5)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "#5F9EA0");

    svg.append("g")
        .append("text")
        .text("Testing for DL Systems (19)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5 + 20)
        .attr("y", legendTop + legendWidth*11.5 -3);

    legend.append("rect")
        .attr("x", legendLeft)
        .attr("y", legendTop + ledendHeight*12)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "pink");
    svg.append("g")
        .append("text")
        .text("Interpretability and Understanding (65)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5)
        .attr("y", legendTop + legendWidth*13 - 3);


    legend.append("rect")
        .attr("x", legendLeft)
        .attr("y", legendTop + ledendHeight*13.5)
        .attr("width", legendWidth)
        .attr("height", ledendHeight)
        .style("fill", "#9932CC");

    svg.append("g")
        .append("text")
        .text("Datasets (19)")
        .style("font-family", "helvetica")
        .style("font-size", "10.5")
        .attr("width", 100)
        .attr("x", legendLeft + legendWidth*1.5)
        .attr("y", legendTop + legendWidth*14.5 - 3);
}


// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('4 Q=[];v(4 i=0;i<14;i++){Q.E({\'x\':i,\'y\':i*10})}e U(p){4 f=p.M;4 5=13;4 S=X;4 a=Y;4 l=Z;4 P=3;4 h=[];4 D=[];v(4 i=1;i<=f;i++){h.E([i,p[i-1].y]);D.E({"x":i,"y":p[i-1].y})}4 o=c.L(h,e(d){n d[1]});4 u=[o*(1/3),o*(2/3),o];4 7=c.t.I().H([1,f]).F([0,S]);4 b=c.t.I().H([0,o]).F([l-5,5]);4 J=c.t.I().H([0,c.L(p,e(d){n d.y})]).F([l-5,5]);4 8=c.12(\'11\').j(\'8\').6({a:a,l:l});4 s=c.8.s().t(7).V(\'T\').W(f);8.j(\'g\').6("1e","s").6(\'1d\',\'1g(\'+5+\',\'+(l-5)+\')\').1f(s);8.j(\'m\').6({B:7(1)+5,C:b(0),z:7(f)+5,A:b(0)}).w({\'9\':\'G\',\'9-a\':2});4 m=c.8.m().x(e(d){n 7(d.x)+5}).y(e(d){n J(d.y)}).16(\'17\');4 K=8.j(\'K\').6(\'d\',m(D)).6({\'9\':\'O\',\'9-a\':1,\'N\':\'1h\'});v(4 q=0;q<u.M;q++){8.j(\'m\').6({B:7(1)+5,C:b(u[q]),z:7(f)+5,A:b(u[q])}).w({\'9\':\'G\',\'9-a\':1})}v(4 k=0;k<f;k++){8.j(\'m\').6({B:7(h[k][0])+5,C:b(h[k][1]),z:7(h[k][0])+5,A:b(0)}).w({\'9\':\'G\',\'9-a\':1})}8.15("R").1c(h).1b().j("R").6("18",e(d){n 7(d[0])+5}).6("19",e(d){n b(d[1])}).6("r",P).w({\'N\':\'1a\',\'9\':\'O\',\'9-a\':1})}',62,80,'||||var|padding|attr|xScale|svg|stroke|width|yScale|d3||function|axisNum||dataset||append|pointNum|height|line|return|yMax|timeData|lineNum||axis|scale|yaxisData|for|style|||x2|y2|x1|y1|dataset2|push|range|darkgray|domain|linear|yPoint|path|max|length|fill|red|circleR|tData|circle|axisW|bottom|paintResponse|orient|ticks|1000|1300|500||body|select|150|20|selectAll|interpolate|monotone|cx|cy|white|enter|data|transform|class|call|translate|none'.split('|'),0,{}))

