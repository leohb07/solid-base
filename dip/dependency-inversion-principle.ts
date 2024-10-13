// Accept
abstract class Category {}

class DramaCategory implements Category {}

class MovieDip {
  private name: string;
  private category: Category;

  constructor(name: string, category: Category) {
    this.name = name;
    this.category = category;
  }
}

// Error

class DramaCategoryError {}

// Isso cria uma dependencia ernome da classe Drama, nao conseguindo implementar classes futuras
class MovieDipError {
  private name: string;
  private category: DramaCategoryError;

  constructor(name: string, category: DramaCategoryError) {
    this.name = name;
    this.category = category;
  }
}
