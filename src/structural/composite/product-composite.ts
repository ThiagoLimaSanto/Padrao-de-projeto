export abstract class ProductComponent {
  abstract getPrice(): number;
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const index = this.children.indexOf(product);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}

const camiseta = new ProductLeaf("Camiseta", 50);
const caneca = new ProductLeaf("Caneca", 20);
const suporte = new ProductLeaf("Suporte", 40);
const carrinho = new ProductComposite();
carrinho.add(camiseta, caneca, suporte);

const tablet = new ProductLeaf("Tablet", 1000);
const smartphone = new ProductLeaf("Smartphone", 1500);
const tv = new ProductLeaf("TV", 3000);
const carrinho2 = new ProductComposite();
carrinho2.add(tablet, smartphone, tv);

carrinho.add(carrinho2);

console.log(carrinho.getPrice());
