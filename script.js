import { addingProduct, calcuteThePrice, Product, showProducts, showSearchList, showUserProducts } from './product'

let products = [
  new Product(0, "یخچال فریزر", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 30000000, 28500000),
  new Product(1, "فر", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 1500000, 1500000),
  new Product(2, "گاز", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 2000000, 2000000),
  new Product(3, "فرش", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 10000000, 9500000),
  new Product(4, "مبل", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 35000000, 33250000),
  new Product(5, "موبایل", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 10000000, 9500000),
  new Product(6, "تستر", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 4000000, 3800000),
  new Product(7, "پتو", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 500000, 500000),
  new Product(8, "تلویزیون", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 12000000, 11400000),
  new Product(9, "لوستر", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 1500000, 1500000)
];


let userProducts = [
  new Product(0, "یخچال فریزر", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 30000000, 28500000),
  new Product(1, "فر", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo totam dolorum distinctio amet soluta accusantium nobis quae error Consequuntur ab iure fuga molestiae, porro laborum illum nobis incidunt itaque.", 1500000, 1500000)
];


let searchProductArray = [];

() => showProducts(userProducts, products);
() => showSearchList(searchProductArray, userProducts, products);
() => showUserProducts(userProducts);
() => calcuteThePrice(userProducts);