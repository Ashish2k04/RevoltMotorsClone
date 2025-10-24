let flag = 0;

document.getElementById("dealer").onclick = function () {

    if (flag == 0) {
        document.getElementById("dff").style.display = "none";
        flag = 1;
    }
    else {
        document.getElementById("dff").style.display = "block";
        flag = 0;
    }

};
