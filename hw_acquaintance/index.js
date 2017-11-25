document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('#container');
    let myApiKey = '90e3266a077347219e896b2dec2ec141';
    let url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=bbc-news&' +
        `apiKey=${myApiKey}`;
    let req = new Request(url);

    fetch(req)
        .then(function(response) {
            let responseJSON = response.json();
            console.log(responseJSON);
            return responseJSON;
        })
        .then( (response) => {
            handleResponse(response, container);
        } );

    handleResponse = ({status, articles}, container) => {
        if (articles) {
            let ul = document.createElement('UL');

            let articlesNodes = articles.map( (article, index, arr) => {
                const { author, description, publishedAt, source, title, url, urlToImage } = article;
                let li = document.createElement('LI');
                li.innerHTML = `
                    <p><b>${title}</b></p>
                    <div>${description}</div>
                    <div><i>${author}</i></div>
                `;

                return li;
            } );

            container.append(ul);
            ul.append(...articlesNodes);
        }
    };

});