import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import { TimelinePdfDocument } from "./components/TimelinePdfDocument";
import { buildTimelineYear } from "./model/timeline-year";
import { TimelineHtml } from "./components/TimelineHtml";

const pdf = false;
const timelineYear = buildTimelineYear("fr-fr", 2024);
function App() {
  return (
    <>
      {pdf ? (
        <PDFViewer width={600} height={800}>
          <TimelinePdfDocument timelineYear={timelineYear} />
        </PDFViewer>
      ) : (
        <TimelineHtml timelineYear={timelineYear} />
      )}
    </>
  );
}

export default App;
