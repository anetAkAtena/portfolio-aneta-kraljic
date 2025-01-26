async function fetchAnalyticsData() {
// Umjesto stvarnog dohvaćanja podataka, koristimo simulirane podatke
    const response = {
        result: {
            rows: [
                { dimensionValues: [{ value: 'HR' }, { value: 'desktop' }, { value: '/home' }], metricValues: [{ value: '100' }, { value: '150' }, { value: '1200' }] },
                { dimensionValues: [{ value: 'US' }, { value: 'mobile' }, { value: '/about' }], metricValues: [{ value: '200' }, { value: '300' }, { value: '1400' }] },
                { dimensionValues: [{ value: 'DE' }, { value: 'tablet' }, { value: '/work' }], metricValues: [{ value: '50' }, { value: '70' }, { value: '1100' }] }
            ]
        }
    };
    console.log(response.result);  // Ispisujemo u konzolu za provjeru

    // Pretvori podatke u format koji može koristiti Chart.js
    const data = {
        labels: [],
        values: []
    };

    // Izdvoji potrebne podatke iz rezultata
    response.result.rows.forEach(row => {
        // Preuzmi naziv zemlje i broj aktivnih korisnika
        data.labels.push(row.dimensionValues[0].value);  // Zemlja
        data.values.push(row.metricValues[0].value);    // Aktivni korisnici
    });

    // Pozovi renderChart iz app.js i proslijedi mu podatke
    renderChart(data);
}
