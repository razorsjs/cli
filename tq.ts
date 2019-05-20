class Z {

}

class A extends Z {
  constructor() {
    super();
  }
}

abstract class B extends A {
  abstract name: string;

  protected constructor() {
    super();
  }
}

class C extends B {
  name: string;

  constructor() {
    super();
    this.name = '123';
  }
}

console.log(new C() instanceof B);
