function getFullAssayModel(pk) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                visualize(JSON.parse(xmlhttp.responseText))
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "/model/" + pk, true);
    xmlhttp.send();
}


function simpleSearch() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('user_input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("model_list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function createIndexableJSON(obj) {
    var lookup = [];
    var i = 0;

    for (var name in obj) {
        if (obj.hasOwnProperty(name)) {
            lookup[i] = obj[name];
            i++;
        }
    }
    return lookup
}

function visualize(data) {
    x = createIndexableJSON(data[0]['fields']);
    predicted_values = x.slice(-10);
    actual_values = x.slice(3, 13);
    var ctx = document.getElementById('visualization_chart');
    var visualization_chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                label: 'Ground Truth value',
                data: actual_values,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: 1
            },
                {
                    label: 'Predicted values',
                    data: predicted_values,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(0,0,139,1)',
                    ],
                    borderWidth: 1
                }],

        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                text: data[0]['fields']['metadata'] + " For " + data[0]['fields']['metadata_1'] + ' @ ' + data[0]['fields']['metadata_2']
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(0,0,0)'
                }
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Value',
                        fontSize: 16
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of predictions',
                        fontSize: 16
                    }
                }]
            }
        }
    });
}
