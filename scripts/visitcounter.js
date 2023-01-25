const getCounterUrl = "https://comtrvisitcounter.onrender.com/api/visitcounter/badicev/GetVisitCount";
const addCounterUrl = "https://comtrvisitcounter.onrender.com/api/visitcounter/badicev/AddVisitCount";


function Run() {
    GetVisitCount();
    AddVisitCount();
}

function GetVisitCount() {
    $.get(getCounterUrl, function (data, status) {
        $("#VisitCounter").html(data);
    });
}

function AddVisitCount() {
    $.post(addCounterUrl);
}
