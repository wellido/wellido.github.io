function TimeArrow(start, div, id, left, top, height, width, color) {
    div.append("div").attr("id", id).style({
        "left": left + 'px',
        "top": top + 'px',
        "width": width + 'px',
        "height": height + 'px',
        "background-color": color
    });
    var arrow = div.append("div").style({
        "left": left - height + 'px',
        "top": top + 'px',
        "height": 0 + 'px',
        // "background-color": color,
        "width": 0 + 'px'
    });
    div.append("div").style({
        "left": left + width + 'px',
        "top": top + 'px',
        "height": 0 + 'px',
        "width": 0 + 'px',
        "border-left-color" : color,
        "border-right-color" : "transparent",
        "border-top-color" : "transparent",
        "border-bottom-color" : "transparent",
        "border-width": height/2 + "px",
        "border-style": "solid"
        // "sborder-color:": "red green blue pink"
    });
    if (start == 0) {
        arrow.style({
            "border-style": "solid",
            "border-width": height/2 + "px",
            "border-left-color" : "transparent",
            "border-right-color" : color,
            "border-top-color" : color,
            "border-bottom-color" : color
        })
    }
}

function EventDiv(div, left, right, width) {

}

function Init() {
    var div = d3.select("#TimeMainDiv");
    TimeArrow(0, div, "test1", 0, 0, 50, 200, "green");
}