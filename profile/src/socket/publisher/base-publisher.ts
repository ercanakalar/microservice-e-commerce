import { Subjects } from "./subjects";
import { ClientOptions, WebSocket } from "ws";

interface EventInterface {
  subject: Subjects;
  data: any;
}
export abstract class Listener<T extends EventInterface> {
  abstract subject: T['subject'];
  abstract onMessage(data: T['data'], msg: MessageEvent): void;
  protected client: ClientOptions;
  protected ackWait = 5 * 1000;

  constructor(client: ClientOptions) {
    this.client = client;
  }

  listen() {
   
  }
}
