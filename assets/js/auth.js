const CLIENT_ID = '137357230408-ov67p3alsqocgacr3veb4nqanmukfsc4.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAPlsIUZbK3SgkrhZNJy4S_vzyErNopxBo';
const DISCOVERY_DOCS =
["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";
function handleAuthClick() {
 gapi.auth2.getAuthInstance().signIn().then(() => {
    console.log("Uspješno ste se prijavili!");
    fetchAnalyticsData();  // Pozivanje funkcije za dohvat podataka
   // Preusmjeravanje na specifičan dio stranice
    window.location.hash = "#auth"; // Ovo će preusmjeriti na #auth
});
}
function handleSignoutClick() {
 gapi.auth2.getAuthInstance().signOut();
}
function initClient() {
 gapi.client.init({
 apiKey: API_KEY,
 clientId: CLIENT_ID,
 discoveryDocs: DISCOVERY_DOCS,
 scope: SCOPES
 }).then(() => {
 console.log("Google API spreman!");
 });
}
gapi.load("client:auth2", initClient);
