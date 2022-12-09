export type Type = 'a' | 'b' | 'c' | 'd';

class App {
  private static headcount = 0;

  constructor(private firstName: string) {
    this.firstName = firstName;
    App.headcount += 1;
  }

  public getFirstName() {
    return this.firstName;
  }

  public static getHeadcount() {
    return App.headcount;
  }
}

export const app = new App('ac');
export const headcount = App.getHeadcount();
