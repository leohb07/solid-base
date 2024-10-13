// Accept
class Course {
  private name: string;
  private category: string;
  private description: string;

  showName() {
    return this.name;
  }

  changeName(name: string) {
    this.name = name;
  }

  showCategory() {
    return this.category;
  }

  changeCategory(category: string) {
    this.category = category;
  }

  showDescription() {
    return this.description;
  }

  changeDescription(description: string) {
    this.description = description;
  }
}

// Error
class CourseError {
  private name: string;
  private category: string;
  private description: string;

  public connection() {
    return `database connected`;
  }

  public createCategory(category: string) {
    return `category ${category} created`;
  }

  public createCourse(course: string) {
    return `course ${course} created`;
  }

  showName() {
    return this.name;
  }

  changeName(name: string) {
    this.name = name;
  }

  showCategory() {
    return this.category;
  }

  changeCategory(category: string) {
    this.category = category;
  }

  showDescription() {
    return this.description;
  }

  changeDescription(description: string) {
    this.description = description;
  }
}
