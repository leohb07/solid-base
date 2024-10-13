abstract class MovieIsp {
  abstract play(): void;
}

abstract class AudioControlIsp {
  abstract increaseVolume(): void;
}

class TheLionKingIsp implements MovieIsp, AudioControlIsp {
  increaseVolume(): void {
    throw new Error("Method not implemented.");
  }

  play(): void {
    throw new Error("Method not implemented.");
  }
}

// Esse filme precisa da funcao play, mas nao precisa da increseVolume
class ModernTimesIsp implements MovieIsp {
  play(): void {
    throw new Error("Method not implemented.");
  }
}
