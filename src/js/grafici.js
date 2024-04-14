var r = document.querySelector(':root');

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(grafico1);
google.charts.setOnLoadCallback(grafico2);

function grafico1() {
    var data = google.visualization.arrayToDataTable([
        ['Parola', 'Occorrenze', { role: 'style' }],
        ['Pietà', 13, r.style.getPropertyValue('--8')],
        ['Pieta', 5, r.style.getPropertyValue('--8')],
        ['Pietate', 3, r.style.getPropertyValue('--8')],
        ['Pietade', 3, r.style.getPropertyValue('--8')],
        ['Pietoso/a', 2, r.style.getPropertyValue('--8')],
        ['Pietosamente', 1, r.style.getPropertyValue('--8')],
    ]);

    var options = {
        title: 'Occorrenze delle parole della pietà',
        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 14,
                color: r.style.getPropertyValue('--10'),
                auraColor: 'none',
            }
        },
        width: '80%',
        height: '80%',
        legend: { position: "none" },
        vAxis: {
            title: 'Occorrenze'
        },
    };

    var grafico1 = new google.visualization.ColumnChart(document.getElementById('grafico1'));
    grafico1.draw(data, options);
}

function grafico2() {
    var data = google.visualization.arrayToDataTable([
        ['Cantiche', 'Occorrenze', { role: 'style' }],
        ['Inferno', 16, r.style.getPropertyValue('--8')],
        ['Purgatorio', 9, r.style.getPropertyValue('--8')],
        ['Paradiso', 2, r.style.getPropertyValue('--8')],
    ]);

    var options = {
        title: 'Occorrenze delle parole della pietà',
        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 14,
                color: r.style.getPropertyValue('--10'),
                auraColor: 'none',
            }
        },
        width: '80%',
        height: '80%',
        legend: { position: "none" },
        vAxis: {
            title: 'Occorrenze'
        },
    };

    var grafico2 = new google.visualization.ColumnChart(document.getElementById('grafico2'));
    grafico2.draw(data, options);
}