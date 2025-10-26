let flag = 0;

document.getElementById("dealer").onclick = function () {

    if (flag == 0) {
        document.getElementById("dealers").style.display = "block";
        flag = 1;
    }
    else {
        document.getElementById("dealers").style.display = "none";
        flag = 0;
    }

};

let flag2 = 0;

document.getElementById("Support").onclick = function () {

    if (flag == 0) {
        document.getElementById("spp").style.display = "block";
        flag = 1;
    }
    else {
        document.getElementById("spp").style.display = "none";
        flag = 0;
    }

};
