import { injectable } from "inversify";

@injectable()
export class LogHelper {
  public log(subject: string): void {
    console.log(`modified 1: ${subject}`);
  }
}
