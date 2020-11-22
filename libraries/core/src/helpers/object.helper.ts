import { injectable } from "inversify";

@injectable()
export class ObjectHelper {
  public toString(subject: number): string {
    return subject.toString();
  }
}
