//Creating an Array of Objects with the cards
const carObjectDefinitions = [
    {
        id: 1,
        imagePath: './images/card-KingHearts.png'
    },
    {
        id: 2,
        imagePath: './images/card-JackClubs.png'
    },
    {
        id: 3,
        imagePath: './images/card-QueenDiamonds.png'
    },
    {
        id: 4,
        imagePath: './images/card-AceSpades.png'
    },
]

{/* <div class="card">
    <div class="card-inner">
        <div class="card-front">
            <img src="./images/card-JackClubs.png" alt="" class="card-img">
        </div>
        <div class="card-back">
            <img src="./images/card-back-Blue.png" alt="" class="card-img">
        </div>
    </div>
</div> */}

function createCard(cardItem) {
    //create div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

}

function createElement(elemType) {
    return document.createElement(elemType)
}

//Reusable method that adds a class to a HTML Method
function addClassToElement(elem, className) {
    elem.classList.add(className)
}