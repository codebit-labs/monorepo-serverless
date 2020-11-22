import { Container } from "inversify";

import { MonoRepoCore } from "./../core";

const container = new Container();
container.load(MonoRepoCore.container);

export { container };
