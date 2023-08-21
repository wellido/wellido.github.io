function Pagination(pno, psize){
    var num = 139;
    // var table = d3.select("#tbody1");
    var itable = document.getElementById("tbody1");
    console.log(itable);
    console.log(num);
    var totalPage = 0;
    var pageSize = psize;
    if(num / pageSize > parseInt(num / pageSize)){
        totalPage = parseInt(num / pageSize) + 1;
    }else{
        totalPage = parseInt(num / pageSize);
    }
    console.log(totalPage);
    var currentPage = pno;
    var startRow = (currentPage - 1) * pageSize * 2;
    var endRow = currentPage * pageSize * 2;
    console.log(startRow);
    console.log(endRow);
    for (var i = 0 ; i < num * 2 ; i += 2) {
        var irow = itable.rows[i];

        if(i < startRow || i > endRow){
            irow.style.display = "none";

        }else{
            irow.style.display = "";
            // console.log(irow);
        }
    }

    // var pageEnd = document.getElementById("pageEnd");
    var tempStr = "Total pages:"+totalPage+", Now in page "+currentPage+".";
    if(currentPage > 1){
        tempStr += "<a href=\"#\" onClick=\"Pagination("+(1)+","+psize+")\">First</a>";
        tempStr += "<a href=\"#\" onClick=\"Pagination("+(currentPage-1)+","+psize+")\">< Previous </a>"
    }else{
        tempStr += "First";
        tempStr += "< Previous ";
    }

    if(currentPage < totalPage){
        tempStr += "<a href=\"#\" onClick=\"Pagination("+(currentPage+1)+","+psize+")\"> Next ></a>";
        tempStr += "<a href=\"#\" onClick=\"Pagination("+(totalPage)+","+psize+")\">Last</a>";
    }else{
        tempStr += " Next >";
        tempStr += "Last";
    }

    document.getElementById("barcon").innerHTML = tempStr;

}