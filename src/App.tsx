import "./App.css";
import { buildTimelineYear } from "./model/timeline-year";
import { TimelineHtml } from "./components/TimelineHtml";

const timelineYear = buildTimelineYear("fr-fr", 2024);
function App() {
  return (
    <>
      <TimelineHtml timelineYear={timelineYear} />
    </>
  );
}

export default App;
