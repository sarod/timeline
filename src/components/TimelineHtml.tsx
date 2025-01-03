import "./TimelineHtml.css";

import springUrl from "../assets/spring.jpg";

import summerUrl from "../assets/summer.jpg";

import fallUrl from "../assets/fall.jpg";
import winterUrl from "../assets/winter.jpg";
import { TimelineYear } from "../model/timeline-year";
import { TimelineDay } from "../model/timeline-day";

function isWeekEnd(day: TimelineDay): boolean {
  return day.dayOfWeekIndex == 0 || day.dayOfWeekIndex == 6;
}

type SeasonStyle = {
  imageUrl: string;
  color: string;
};

const seasonStyles: { [seasonId: string]: SeasonStyle } = {
  spring: {
    imageUrl: springUrl,
    color: "#3d883d",
  },
  summer: {
    imageUrl: summerUrl,
    color: "#fdd218c2",
  },
  fall: {
    imageUrl: fallUrl,
    color: "#ff7100",
  },
  winter: {
    imageUrl: winterUrl,
    color: "lightblue",
  },
};




const dayWidth = 30;
const dayWidthUnit = "px";

export function TimelineHtml(props: { timelineYear: TimelineYear }) {
  return (
    <div className="timeline-year">
      {props.timelineYear.months.map((month) => {
        return (
          <div key={month.name} className="timeline-month-container">
            <div
              className="timeline-month"
              style={{ width: dayWidth * month.days.length + dayWidthUnit}}
            >
              <div className="month-header">
                <div className="season-images-container">
                  {month.seasonFragments.map((fragment) => (
                    <div
                      key={fragment.seasonId}
                      className="season-image-container"
                      style={{
                        width: dayWidth * fragment.fragmentLength + dayWidthUnit,
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={seasonStyles[fragment.seasonId].imageUrl}
                        className="season-image"
                        style={{
                          left: -dayWidth * fragment.firstSeasonDay + dayWidthUnit,
                          position: "relative",
                          /* width must be at least large as the full season without stretching too much the image*/
                          width: 100  * dayWidth + dayWidthUnit,
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
                      width: dayWidth * fragment.fragmentLength + dayWidthUnit,
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
                      width: dayWidth + dayWidthUnit,
                      minWidth: dayWidth + dayWidthUnit
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
