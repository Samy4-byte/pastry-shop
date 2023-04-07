
 export function createCatalogItem(item) {
    const itemContainer = document.createElement('div')
    itemContainer.className = 'catalog__item'
  
    const title = document.createElement('h2')
    title.className = 'catalog__item-title'
    title.textContent = item.name
  
    const image = document.createElement('img')
    image.setAttribute('src', item.image)
    image.className = 'catalog__item-image'
   
    const price = document.createElement('div')
    price.className = 'catalog__item-price'
    price.textContent = `${item.cost} $`

    const btn = document.createElement('button')
    btn.className = 'catalog__item-buy-btn'
    btn.textContent = 'Buy'

    itemContainer.append(title, image, price, btn)
  
    return itemContainer
  }