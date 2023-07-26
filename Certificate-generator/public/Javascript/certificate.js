var na = '';
var form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var start_date = document.getElementById('start-date').value;
    var end_date = document.getElementById('end-date').value;


    document.getElementById('candidate_name').innerText = name;
    document.getElementById('subject').innerText = course;


    document.getElementById('startDate').innerText = start_date;
    document.getElementById('endDate').innerText = end_date;
    na = name.split(' ').join('');
})


$(document).ready(function () {
    $('#btn').click(function () {
        domtoimage.toBlob(document.getElementById('main')).then(function (blob) {
            window.saveAs(blob, na + "-result.png");
        })
    })
})



