// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        objectData = data.data.topics;
        console.log(objectData)
        objectData.forEach((language) => {
            const element = createTabs(language);
            topics.appendChild(element);
        })

    })
    .catch(error => {
        console.log('O no its not working!', error)
    })

function createTabs(e) {
    const tab = document.createElement('div')
    
    tab.classList.add('tab')

    tab.textContent = e 

    return tab;
}
