export class Product {
  id = 0
  name = "یخچال فریزر"
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque."
  price = 30000000
  priceAfterDiscount = 28500000

  constructor(id, name, description, price, priceAfterDiscount) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.priceAfterDiscount = priceAfterDiscount
  }

}


function search(searchProductArray, products) {
  searchProductArray = []
  var searchInput = document.getElementById("search").value
  products.some(function (product) {
    if (product.name.includes(searchInput)) {
      searchProductArray.push(product)
    }
  })
}


export function showProducts(userProducts, products) {
  var ul = document.getElementById("productsList");
  ul.innerHTML = ''
  for (var i = 0; i < products.length; i++) {
    let li = document.createElement("li")
    li.dataset.id = products[i].id
    var div1 = document.createElement("div")
    div1.appendChild(document.createTextNode(products[i].name))
    li.appendChild(div1)
    var div2 = document.createElement("div")
    div2.appendChild(document.createTextNode(products[i].description))
    li.appendChild(div2)
    var div3 = document.createElement("div")
    div3.appendChild(document.createTextNode(products[i].priceAfterDiscount))
    li.appendChild(div3)
    var img = document.createElement("img")
    img.src = "add.png"
    img.onclick = () => addingProduct(li, userProducts, products)
    li.appendChild(img)
    ul.appendChild(li);
  }
}

export function showUserProducts(userProducts) {
  var ul = document.getElementById("userProductsList");
  ul.innerHTML = ''
  for (var i = 0; i < userProducts.length; i++) {
    let li = document.createElement("li")
    li.dataset.id = userProducts[i].id
    var div1 = document.createElement("div")
    div1.appendChild(document.createTextNode(userProducts[i].name))
    li.appendChild(div1)
    var div2 = document.createElement("div")
    div2.appendChild(document.createTextNode(userProducts[i].description))
    li.appendChild(div2)
    var div3 = document.createElement("div")
    div3.appendChild(document.createTextNode(userProducts[i].priceAfterDiscount))
    li.appendChild(div3)
    var img = document.createElement("img")
    img.src = "recycle-bin.png"
    img.onclick = () => deleteProductHTML(li, userProducts)
    li.appendChild(img)
    ul.appendChild(li);
  }
  document.getElementsByClassName("calcuteBtn")[0].style.display = "block"
}

export function showSearchList(searchProductArray, userProducts, products) {
  search(searchProductArray, products)
  var ul = document.getElementById("searchList");
  ul.innerHTML = ''
  for (var i = 0; i < searchProductArray.length; i++) {
    let li = document.createElement("li")
    li.dataset.id = searchProductArray[i].id
    var div1 = document.createElement("div")
    div1.appendChild(document.createTextNode(searchProductArray[i].name))
    li.appendChild(div1)
    var div2 = document.createElement("div")
    div2.appendChild(document.createTextNode(searchProductArray[i].description))
    li.appendChild(div2)
    var div3 = document.createElement("div")
    div3.appendChild(document.createTextNode(searchProductArray[i].priceAfterDiscount))
    li.appendChild(div3)
    var img = document.createElement("img")
    img.src = "add.png"
    img.onclick = () => addingProduct(li, userProducts, products)
    li.appendChild(img)
    ul.appendChild(li)
  }
}

export function calcuteThePrice(userProducts) {
  var price = 0;
  var counter = 0;
  for (i = 0; i < userProducts.length; i++) {
    price += userProducts[i].priceAfterDiscount
    counter++
  }
  if (price <= 150000) {
    price += counter * 2000
  }
  var div = document.getElementById("userProductsListDiv")
  var removeP = document.getElementsByClassName("pUserProductsListDiv")
  if (removeP[0] != undefined) removeP[0].remove()
  var p = document.createElement("p")
  p.innerHTML = "هزینه پرداختی: " + price
  p.classList.add("pUserProductsListDiv")
  div.appendChild(p)
}

function deleteProduct(id, userProducts) {
  const index = userProducts.findIndex(product => product.id === id)
  userProducts.splice(index, 1)
}

function deleteProductHTML(li, userProducts) {
  var dataId = li.dataset.id
  deleteProduct(Number(dataId), userProducts)
  showUserProducts(userProducts)
}

function addingProduct(li, userProducts, products) {
  var dataId = li.dataset.id
  let id = Number(dataId)
  let index = -1
  index = userProducts.findIndex(product => product.id === id)
  if (index === -1) {
    const indexArray = products.findIndex(product => product.id === id)
    userProducts.push(products[indexArray])
    showUserProducts(userProducts)
  }
}