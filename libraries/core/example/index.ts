import "reflect-metadata";
import { container } from "./container";

import { ObjectHelper } from "../src/helpers/object.helper";
import { Symbols } from "../src/app/symbols";

const helper = container.get<ObjectHelper>(Symbols.ObjectHelper);
console.log(helper.toString(10));
