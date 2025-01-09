import "./App.css";
import { buildTimelineYear } from "./model/timeline-year";
import { TimelineHtml } from "./components/TimelineHtml";
import { defaultSeasonStyles } from "./components/defaultSeasonStyles";

const now = new Date();
const year = now.getMonth() < 6 ? now.getFullYear() : now.getFullYear() + 1;
const timelineYear = buildTimelineYear("fr-fr", year);
function App() {
  return (
    <>
      <TimelineHtml timelineYear={timelineYear} seasonStyles={defaultSeasonStyles}/>
    </>
  );
}

export default App;
