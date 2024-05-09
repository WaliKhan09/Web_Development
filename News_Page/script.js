const apiKey = 'fabc0fb706974a1d9413f26f11036097';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

async function getNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    articles.forEach(article => {
        const { title, description, url, urlToImage } = article;
        const newsItem = `
            <div class="news-item">
                <h2>${title}</h2>
                <img src="${urlToImage}" alt="${title}">
                <p>${description}</p>
                <a href="${url}" target="_blank">Read more</a>
            </div>
        `;
        newsContainer.innerHTML += newsItem;
    });
}

window.onload = getNews;
