// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(result => {
        const articles = result.data.articles;
        console.log(articles)
            for (topic in articles) {
                articles[topic].forEach(article => {   
                    cardsContainer.appendChild(createCards(article))
                })
                
            }
    })

    // axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // .then(data => {
    //     objectData = data.data.articles.bootstrap;
    //     console.log(objectData)
    //     objectData.forEach((subject) => {
    //         const element = createCards(subject)
    //         cardsContainer.appendChild(element)
    //     })
    // })

    // axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // .then(data => {
    //     objectData = data.data.articles.technology;
    //     console.log(objectData)
    //     objectData.forEach((subject) => {
    //         const element = createCards(subject)
    //         cardsContainer.appendChild(element)
    //     })
    // })

    // axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // .then(data => {
    //     objectData = data.data.articles.jquery;
    //     console.log(objectData)
    //     objectData.forEach((subject) => {
    //         const element = createCards(subject)
    //         cardsContainer.appendChild(element)
    //     })
    // })

    // axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // .then(data => {
    //     objectData = data.data.articles.node.js;
    //     console.log(objectData)
    //     objectData.forEach((subject) => {
    //         const element = createCards(subject)
    //         cardsContainer.appendChild(element)
    //     })
    // })
//     .then(res => {
//         objectData = res.data.articles.bootstrap;
//         console.log(objectData)
//         objectData.forEach((subject) => {
//             const element = createCards(subject)
//             cardsContainer.appendChild(element)
//     })
// })

/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */

function createCards(e) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = e.headline;
    img.src = e.authorPhoto;
    name.textcontent = `By ${e.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(name);
    imgContainer.appendChild(img);

    return card;
}