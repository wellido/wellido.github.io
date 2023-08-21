function homeStyle() {
    d3.select("#HomePage").style({
        "background-color":"#E6E6E6"
    });

    d3.select("#Content").style({
        "position": "relative",
        "top" : "10%",
        "left" : "20%",
        "width": "80%",
        "height" : "60%"
    });
    drawHeatMap(d3.select("#histogramDiv"), paperArray);
    d3.select("#histogramP").style({
        "height" : "50%"
    });

    // d3.select("#Wellcome").style({
    //     "height" : "50%"
    // });

    d3.select("#Survey").style({
        "height" : "50%"
    });

    d3.select("#Homeh31").style({
        'font-size': '23px',
        "text-align":"left",
        "vertical-align":"middle"
    });

    d3.select("#Homeh32").style({
        'font-size': '23px',
        "text-align":"left",
        "vertical-align":"middle"
    });

    // d3.select("#homeP2").style({
    //     "height": "auto"
    // });



    // d3.select("#homePre").html("@misc{yzmham:dltest-repository, \n" +
    //     "            author = Qiang Hu and Lei Ma and Jianjun Zhao,\n" +
    //     "            title = The {DLT} Repository: {A} repository and analysis of \n" +
    //     "                       research articles on Robust Deep Learning Systems\n" +
    //     "            publisher = {{PANGU Research Group, Kyushu  University}}, \n" +
    //     "            note = https://pangukaitian.github.io/pangu/en/index.html_repository/ \n" +
    //     "}").style({
    //     "position": "relative",
    //     "top" : "0%",
    //     "left" : "23%",
    //     "width": "56%",
    //     'border': '0.5px solid #848484',
    //     'border-radius': '3px',
    //     "background-color":"#E0E0E0",
    //     "vertical-align":"middle",
    //     "font-family": "Microsoft Yahei",
    //     'font-size': '14px'
    // });
}
