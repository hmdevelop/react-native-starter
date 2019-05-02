import { Provider } from "mobx-react";
import React from "react";
import stores from "../store";
export const withProvider = component => {
  return (
    <Provider {...stores}>
      <component name="mustafa" />;
    </Provider>
  );
};
