import { types } from "mobx-state-tree";
// @ts-ignore
export const CounterStore = types
  .model("CounterStore", {
    counter: 0,
    name: "mustafa"
  })
  .actions(self => ({
    increment(): void {
      self.counter += 1;
    },
    decrement(): void {
      self.counter -= 1;
    },
    setname(name): void {
      self.name = name;
    }
  }))
  .create();
