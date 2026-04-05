import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { MockTests } from "./components/MockTests";
import { Flashcards } from "./components/Flashcards";
import { Vocabulary } from "./components/Vocabulary";
import { PhysicalTraining } from "./components/PhysicalTraining";
import { NDAPrep } from "./components/NDAPrep";
import { CDSPrep } from "./components/CDSPrep";
import { AFCATPrep } from "./components/AFCATPrep";
import { TestInterface } from "./components/TestInterface";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mock-tests", Component: MockTests },
      { path: "mock-tests/:testId", Component: TestInterface },
      { path: "flashcards", Component: Flashcards },
      { path: "vocabulary", Component: Vocabulary },
      { path: "physical-training", Component: PhysicalTraining },
      { path: "nda", Component: NDAPrep },
      { path: "cds", Component: CDSPrep },
      { path: "afcat", Component: AFCATPrep },
    ],
  },
]);
