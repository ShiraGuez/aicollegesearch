function produceSearchResults() {
    var criteria = document.getElementById('topic1').value.trim();

    if (!criteria) {
        alert('Please enter a search criterion.');
        return;
    }

    toggleLoading(true);

    const payload = {
        criteria: criteria,
    };

    fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        toggleLoading(false);
        displayResults(data.results);
    })
    .catch(error => {
        toggleLoading(false);
        console.error('Error:', error);
    });
}

function toggleLoading(isLoading) {
    const loadingSection = document.getElementById('loading');
    if (isLoading) {
        loadingSection.classList.remove('hidden');
    } else {
        loadingSection.classList.add('hidden');
    }
}

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerText = results;
    resultsSection.classList.remove('hidden');
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('produceSearchResults').addEventListener('click', produceSearchResults);
});
