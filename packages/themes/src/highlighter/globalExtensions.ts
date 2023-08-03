import * as components from "./components";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Highlighter: (typeof components)["Highlighter"];
  }
}
