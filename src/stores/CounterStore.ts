import { types, flow, applySnapshot, onSnapshot } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
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
    },
    hydrate: flow(function*(): IterableIterator<Promise<string | null>> {
      const data = yield AsyncStorage.getItem("counter");

      if (data) {
        applySnapshot(self, JSON.parse(data));
      }
    })
  }))
  .create();

onSnapshot(CounterStore, (snapshot: object) => {
  AsyncStorage.setItem("counter", JSON.stringify(snapshot));
});
