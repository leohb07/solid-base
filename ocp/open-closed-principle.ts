// Accept
abstract class Video {
  abstract calculateReview(): void;
}

class Movie extends Video {
  calculateReview(): void {
    throw new Error("Method not implemented.");
  }
}

class TvShow extends Video {
  calculateReview(): void {
    throw new Error("Method not implemented.");
  }
}

// Error
class VideoError {
  private type: string;

  public calculateReview() {
    if (this.type === "Movie") {
      // calulate review for movie
    } else if (this.type === "TvShow") {
      // calulate review for tv-show
    }
  }
}
