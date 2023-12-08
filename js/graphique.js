var ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx,
    {
        type: 'line',
        data:{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgb(255, 99, 132)',
        }]
    }
    });