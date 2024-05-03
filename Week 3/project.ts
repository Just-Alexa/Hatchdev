// class cart {
//     items: Item[] = [];
//     order: Order;
//     id: string;

//     constructor(
//         id: string,
//         order: Order,
//         items:Item[] ) {
//         this.id = id;
//     }
// }

// class Item {}

// class Order{}

import { DeliveryType, IProduct, OrderState } from "./types";

function generateId(length: number = 10) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.random().toString(35).slice(2, 3);
  }
  return result;
}

export const createAdminUser = (
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string
): User => {
  const user = new User(firstName, lastName, username, email, password);
  user.setToAdmin();

  return user;
};

export class User {
  id: string;
  private firsName: string;
  private lastName: string;
  username: string;
  email: string;
  private password: string;
  isAdmin: boolean = false;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) {
    this.id = generateId();
    this.firsName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  get fullName() {
    return `${this.firsName} ${this.lastName}`;
  }

  setToAdmin() {
    this.isAdmin = true;
  }
}

const isProduct = (product: unknown): product is Product => {
  return product instanceof Product;
};

export class Store {
  private allProducts: Product[] = [];
  private user: User;
  private cart: Cart;

  constructor(user: User) {
    this.user = user;
    this.cart = new Cart(user.id);
  }

  addToCart(productId: string) {
    const foundProduct = this.allProducts.find(
      (product) => product.id === productId
    );
    if (!foundProduct)
      return console.log({
        ok: false,
        message: "Product Not found",
        statusCode: 404,
      });
    if (isProduct(foundProduct)) {
      if (foundProduct.amountInStock <= 0)
        return console.log({
          ok: false,
          message: "Product don finish baba, wetin you wan add!",
          statusCode: 400,
        });
      this.cart.addProduct(foundProduct);
      console.log({
        ok: true,
        message: "Successfully added Product",
        statusCode: 200,
      });
    }
  }

  createProduct(
    name: string,
    price: number,
    description: string,
    amountInStock: number,
    isCategorized: boolean = false,
    category?: Category
  ) {
    let newProduct: Product;

    if (isCategorized && category) {
      newProduct = new CategorisedProduct(
        name,
        price,
        description,
        amountInStock,
        category
      );
    } else {
      newProduct = new Product(name, price, description, amountInStock);
    }
    this.allProducts.push(newProduct);
  }
}

class CartItem {
  product: Product;
  count: number = 1;

  constructor(product: Product, count?: number) {
    this.product = product;
    this.count = count ? count : 1;
  }
}

export class Cart {
  items: CartItem[] = [];
  private ownedBy: string;

  constructor(userId: string) {
    this.ownedBy = userId;
  }

  addProduct(product: Product) {
    const newItem = new CartItem(product, 1);
    this.items.push(newItem);
    product.reduceAmountInStock();
  }
}

class Product implements IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  amountInStock: number;

  constructor(
    name: string,
    price: number,
    description: string,
    amountInStock: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.amountInStock = amountInStock;
    this.id = generateId(10);
  }

  reduceAmountInStock() {
    this.amountInStock = this.amountInStock - 1;
  }
}

export class Category {
  name: string;
  description?: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
  }
}

// FIRA CODE ISCRIPT
export class CategorisedProduct extends Product {
  category: Category;
  constructor(
    name: string,
    price: number,
    description: string,
    amountInStock: number,
    category: Category
  ) {
    super(name, price, description, amountInStock);
    this.category = category;
  }
}

export class Order {
  order: OrderState = "not-started";
  deliveryType: DeliveryType = DeliveryType.payOnDelivery;

  private setDeliveryType(deliveryType: DeliveryType) {
    this.deliveryType = deliveryType;
  }

  constructor(deliveryType: DeliveryType) {
    this.deliveryType = deliveryType;
  }
}