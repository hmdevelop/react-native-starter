import { types, flow, applySnapshot, onSnapshot } from "mobx-state-tree";
import { AsyncStorage } from "react-native";

// @ts-ignore

const Movie = types.model("Movie", {
  id: types.string,
  title: types.string,
  releaseYear: types.string
});

export const MovieStore = types
  .model("MovieStore", {
    Movies: types.array(Movie)
  })
  .actions(self => ({
    setmovies(newmovies): void {
      self.Movies.push(newmovies);
    },

    fetchProjects: flow(function* fetchProjects() {
      try {
        // ... yield can be used in async/await style
        const data = yield fetch(
          "https://facebook.github.io/react-native/movies.json"
        );
        const veri = JSON.parse(data._bodyText);

        self.Movies = veri.movies;
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    }),

    getmovies(newmovies): void {
      self.Movies = newmovies;
    },
    hydrate: flow(function*(): IterableIterator<Promise<string | null>> {
      const data = yield AsyncStorage.getItem("counter");

      if (data) {
        applySnapshot(self, JSON.parse(data));
      }
    })
  }))
  .create();

onSnapshot(MovieStore, (snapshot: object) => {
  AsyncStorage.setItem("counter", JSON.stringify(snapshot));
});
