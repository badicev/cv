const getCounterUrl = "https://comtrsitefunctions.azurewebsites.net/api/visitcounter/badicev/GetVisitCount";
const addCounterUrl = "https://comtrsitefunctions.azurewebsites.net/api/visitcounter/badicev/AddVisitCount";


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
