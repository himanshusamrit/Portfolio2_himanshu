// footer date generate
const d = new Date();
document.getElementById("footer-date").innerHTML = d.getFullYear();

// header onscroll  
window.onscroll = function () {
    if (window.pageYOffset >= 100) {
        document.getElementById('header').style.backgroundColor = '#fff';
        document.getElementById('header').style.borderBottom = '1px solid #eae7e7';
        document.getElementById('header').style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
    } else {
        document.getElementById('header').style.backgroundColor = 'transparent'
        document.getElementById('header').style.borderBottom = 'none';
        document.getElementById('header').style.boxShadow = 'none';
    }
}

// bar oprn and close
let filterStatus=false;
function opernBar() {
    if (filterStatus == false) {
        document.getElementById("nav").style.display = "flex";
        filterStatus = true;
    }
    else {
        document.getElementById("nav").style.display = "none";
        filterStatus = false;
    }
}