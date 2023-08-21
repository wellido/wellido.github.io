function titleEdit() {
    d3.select("#headTitle1").html("Welcome to Paper Repository of Secure Deep Learning Engineering").style({
        "position":"absolute",
        'left': '12%',
        "top": '25px',
        'font-size': '30px',
        'font-family': 'Arial'
    });
    d3.select("#authorDiv").style({
        "position":"absolute",
        'top':"5px",
        'right': '120px',
        'width': "60px",
        'height': "20px",
        'border-radius': '3px',
        "cursor":"pointer",
        "background-color":"#E0E0E0"
    }).on("mouseover",function () {
        d3.select(this).style({
            'background': '#AED6F1'
        });

    }).on("mouseout",function () {
        d3.select(this).style({
            'background': '#E0E0E0'
        });
    }).on("click",function () {
            d3.select("#abInfo").style({
                "opacity": 1.0,
                'z-index': '3'
            });
            d3.select("#abInfo").html("");

    }).html("Author").style({
        "text-align":"center",
        "vertical-align":"middle",
        "font-size": "15px"
    });
    d3.select("#bibDiv").style({
        "position":"absolute",
        'top':"5px",
        'right': '50px',
        'width': "60px",
        'height': "20px",
        'border-radius': '3px',
        "cursor":"pointer",
        "background-color":"#E0E0E0"
    }).on("mouseover",function () {
        d3.select(this).style({
            'background': '#AED6F1'
        });

    }).on("mouseout",function () {
        d3.select(this).style({
            'background': '#E0E0E0'
        });
    }).on("click",function () {
        d3.select("#abInfo").style({
            "opacity": 1.0,
            'z-index': '3'
        });
        d3.select("#abInfo").html("")
    }).html("BibTex").style({
        "text-align":"center",
        "vertical-align":"middle",
        "font-size": "15px"
    });
    d3.select("#abInfo").style({
        "position":"absolute",
        'top':"70px",
        'right': '50px',
        'width': "450px",
        'border-radius': '3px',
        'background': '#F0F0F0',
        'height': "95px",
        "opacity": 0.0,
        'z-index': '0'
    }).html("");

    d3.select("#headTitle").on("click",function () {
        d3.select("#abInfo").style({
            "opacity": 0.0,
            'z-index': '0'
        });
    });
    d3.select("#qstable").on("click",function () {
        d3.select("#abInfo").style({
            "opacity": 0.0,
            'z-index': '0'
        });
    });




    d3.selectAll(".chosePage").style({
        // "background-color":"white",
        'width': "20%",
        'font-size': '18px',
        'font-family': 'bold',
        'border': '0.5px solid #848484',
        'border-radius': '3px',
        "text-align":"center",
        "color": "gray",
        "cursor":"pointer",
        "vertical-align":"middle"
    }).on("mouseover", function () {
        d3.select(this).style({
            "color": "black"
        })
    }).on("mouseout",function () {
        d3.select(this).style({
            "color": "gray"
        });
    });


    d3.select("#HomePage").style({
        "position":"absolute",
        'top':"10%",
        'height': "50%",
        'left': '18%'
    });

    d3.select("#RepositoryPage").style({
        "position":"absolute",
        'top':"10%",
        'height': "50%",
        'left': '38%'
    });
    // d3.select("#TheoryPage").style({
    //     "position":"absolute",
    //     'top':"10%",
    //     'height': "50%",
    //     'left': '40%'
    // });
    // d3.select("#TechniquesPage").style({
    //     "position":"absolute",
    //     'top':"10%",
    //     'height': "50%",
    //     'left': '60%'
    // });
    d3.select("#AnalysisPage").style({
        "position":"absolute",
        'top':"10%",
        'height': "50%",
        'left': '58%'
    });
}
