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

export function TimelineHtml(props: { timelineYear: TimelineYear }) {
  return (
    <div className="timeline-year">
      {props.timelineYear.months.map((month) => {
        return (
          <div key={month.name} className="timeline-month-container">
            <div
              className="timeline-month"
              style={{ width: 30 * month.days.length }}
            >
              <div className="month-header">
                <div className="season-images-container">
                  {month.seasonFragments.map((fragment) => (
                    <div
                      key={fragment.seasonId}
                      className="season-image-container"
                      style={{
                        width: 30 * fragment.fragmentLength,
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={seasonStyles[fragment.seasonId].imageUrl}
                        className="season-image"
                        style={{
                          left: -30 * fragment.firstSeasonDay,
                          position: "relative",
                          width: 100 * 30,
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
                      width: 30 * fragment.fragmentLength,
                      backgroundColor: seasonStyles[fragment.seasonId].color,
                    }}
                  ></div>
                ))}
              </div>
              <div className="days-container">
                {month.days.map((day) => (
                  <div
                    key={day.dayOfMonth}
                    className={"day" + (isWeekEnd(day) ? " weekend" : "")}
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
