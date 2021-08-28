export class Helpers {
  static GenerateRandom(): string {
    return Math.floor(Math.random() * (1000 - 1) + 1).toString();
  }
}
