import { injectable } from "inversify";

@injectable()
export class Repository {
  public getOne(id: number): any {
    return { id, Hello: "World" };
  }
}
