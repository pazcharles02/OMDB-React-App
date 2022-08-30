function search(query) {
    const url = "https://www.omdbapi.com/?apikey=355906c2&s="
    let xhttp = new XMLHttpRequest();
    let results;
    xhttp.open("GET", url + query, false);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            results = JSON.parse(this.responseText);
        }
        else {
            results = "N/A"
        }
    }
}