abstract class MovieLsp {
  abstract play(): void;

  abstract increaseVolume(): void;
}

class TheLionKing extends MovieLsp {
  play(): void {
    throw new Error("Method not implemented.");
  }

  increaseVolume(): void {
    throw new Error("Method not implemented.");
  }
}

// Nao e possivel extender Movie para essa classe, pois mesmo sendo um filme, ele nao possui audio
class ModernTimes extends MovieLsp {
  play(): void {
    throw new Error("Method not implemented.");
  }

  increaseVolume(): void {
    throw new Error("Method not implemented.");
  }
}
