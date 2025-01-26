async function fetchAnalyticsData() {
    const response = await gapi.client.analyticsdata.properties.runReport({
        property: "properties/474803553",
        requestBody: {
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "country" }, { name: "deviceCategory" }, { name: "pagePath" }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "averageSessionDuration" }]
        }
    });
    console.log(response.result);

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