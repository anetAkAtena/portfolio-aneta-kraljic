// Funkcija za izračunavanje cosine sličnosti
function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

// Funkcija za generiranje preporuka na osnovu korisničke povijesti i stranica
function getRecommendations(userHistory, pages) {
    return pages.map(page => ({
        page: page.name,
        similarity: cosineSimilarity(userHistory, page.vector)
    })).sort((a, b) => b.similarity - a.similarity); // Sortiranje po sličnosti
}

// Funkcija za prikazivanje preporuka u HTML listi
function displayRecommendations(recommendations) {
    const list = document.getElementById('recommendations-list');
    list.innerHTML = "";  // Očisti prethodne stavke

    recommendations.forEach(rec => {
        let listItem = document.createElement("li");
        listItem.textContent = rec.page;
        list.appendChild(listItem);
    });
}
