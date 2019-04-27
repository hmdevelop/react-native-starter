import { types, flow, applySnapshot, onSnapshot } from "mobx-state-tree";
import { AsyncStorage } from "react-native";

// @ts-ignore
const getMoviesFromApiAsync = async () => {
  const az = await time();
  return await fetch("https://facebook.github.io/react-native/movies.json");
};
const time = () => setTimeout(() => console.log("hey"), 2000);

const Car = types
  .model("Car", {
    brand: types.string
  })
  .actions(self => ({
    // note the `({`, we are returning an object literal
    setbrand(newbrand) {
      self.brand = newbrand;
    }
  }));

export const CounterStore = types
  .model("CounterStore", {
    counter: 0,
    name: "mustafa",
    cars: types.array(Car)
  })
  .actions(self => ({
    increment(): void {
      self.counter += 1;
    },
    decrement(): void {
      const asd = fetch("https://facebook.github.io/react-native/movies.json");
      console.warn(asd);
      self.counter -= 1;
    },
    setname(name): void {
      self.name = name;
    },

    fetchProjects: flow(function* fetchProjects() {
      try {
        // ... yield can be used in async/await style
        const asd = yield fetch(
          "https://facebook.github.io/react-native/movies.json"
        );
        console.log(asd);
        //  const tt = yield time();
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    }),

    setcars(newcar: string): void {
      self.cars.push(newcar);
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
