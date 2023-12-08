

var ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx,
    {
        type: 'pie',
        data:{
        labels: ['Transport routier', 'Agriculture/Sylviculture', 'Industrie manufacturière et construction', 'Usage des bâtiments et activités résidentiels/tertiaires', 'Industrie énergie', 'Traitement centralisé des déchets', 'Autres transports'],
        datasets: [{
            label: 'Emissions de gaz à effet de serre en France par activité en 2021 (en millions de tonnnes équivalent CO2)',
            data: [119.6, 81.2, 77.8, 74.9, 43.8, 14.5, 6.4],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'right', // Positionne la légende à droite
            },
            title: {
                display: true,
                text: 'Emissions de gaz à effet de serre en France par activité en 2021 (en millions de tonnnes équivalent CO2)',
                font: {
                    size: 20,
                    fontFamily: 'Montserrat',
                },
            }
        },
        layout: {
            padding: 0,
        },
    },
});