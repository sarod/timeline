import "./TimelineHtml.css";

import { TimelineYear } from "../model/timeline-year";
import { TimelineDay } from "../model/timeline-day";
import { SeasonStyles } from "./SeasonStyles";


const dayWidth = 30;
const dayWidthUnit = "px";

export function TimelineHtml({timelineYear, seasonStyles}: { timelineYear: TimelineYear, seasonStyles: SeasonStyles }) {
  return (
    <div className="timeline-year">
      {timelineYear.months.map((month) => {
        return (
          <div key={month.name} className="timeline-month-container">
            <div
              className="timeline-month"
              style={{ width: daysWidth(month.days.length)}}
            >
              <div className="month-header">
                <div className="season-images-container">
                  {month.seasonFragments.map((fragment) => (
                    <div
                      key={fragment.seasonId}
                      className="season-image-container"
                      style={{
                        width: daysWidth(fragment.fragmentLength),
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={seasonStyles[fragment.seasonId].imageUrl}
                        className="season-image"
                        style={{
                          left: daysWidth(-fragment.firstSeasonDay),
                          position: "relative",
                          /* width must be at least large as the full season without stretching too much the image*/
                          width: daysWidth(100),
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="month-name-anchor">
                  <div className="month-name">{month.name}</div>
                </div>
              </div>
              <div className="season-bar">
                {month.seasonFragments.map((fragment) => (
                  <div
                    key={fragment.seasonId}
                    className="season-fragment"
                    style={{
                      width: daysWidth(fragment.fragmentLength),
                      backgroundColor: seasonStyles[fragment.seasonId].color,
                    }}
                  ></div>
                ))}
              </div>
              <div className="days-container"
              
              >
                {month.days.map((day) => (
                  <div
                    key={day.dayOfMonth}
                    className={"day" + (isWeekEnd(day) ? " weekend" : "")}
                    style={{
                      width: daysWidth(1),
                      minWidth: daysWidth(1)
                    }}
                  >
                    <div className="day-of-month">{day.dayOfMonth}</div>
                    <div className="day-of-week">{day.dayOfWeekName}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={
                month.monthIdx === 11
                  ? "timeline-month-arrow"
                  : "timeline-month-tongue"
              }
            ></div>
          </div>
        );
      })}
    </div>
  );
}

function isWeekEnd(day: TimelineDay): boolean {
  return day.dayOfWeekIndex == 0 || day.dayOfWeekIndex == 6;
}


function daysWidth(days: number) {
  return (dayWidth * days).toString() + dayWidthUnit;
}