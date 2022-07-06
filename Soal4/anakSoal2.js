let get = fetch('https://dhiyo-api-article.herokuapp.com/articles')

get.then(Response => Response.json())
    .then(json => json.data.map(element => {
        console.log(element.tittle);
    }))
    .catch(err => console.log(err))

console.log('be patient for get all data')