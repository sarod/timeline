import "./TimelineHtml.css";

import { TimelineYear } from "../model/timeline-year";
import { TimelineDay } from "../model/timeline-day";
import { SeasonStyles } from "./SeasonStyles";
import { SeasonFragment } from "../model/timeline-month";
import { defaultSeasonStyles } from "./defaultSeasonStyles";

export function TimelineHtml({
  timelineYear,
  seasonStyles = defaultSeasonStyles,
  useSeasonDecorators = true,
}: {
  timelineYear: TimelineYear;
  seasonStyles?: SeasonStyles;
  useSeasonDecorators?: boolean;
}) {
  return (
    <div
      className="timeline-year"
      style={
        {
          "--day-width": "30px",
          "--season-blending-width": "60px",
        } as React.CSSProperties
      }
    >
      {timelineYear.months.map((month) => {
        return (
          <div key={month.name} className="timeline-month-container">
            <div
              className="timeline-month"
              style={
                {
                  "--month-days": month.days.length,
                } as React.CSSProperties
              }
            >
              <div className="month-header">
                <div className="season-images-container">
                  {month.seasonFragments.map((fragment) => (
                    <div
                      key={fragment.seasonId}
                      className="season-image-container"
                      style={fragmentCssVariables(fragment)}
                    >
                      <img
                        src={seasonStyles[fragment.seasonId].imageUrl}
                        className="season-image"
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
                    className="season-bar-fragment"
                    style={{
                      ...fragmentCssVariables(fragment),
                      backgroundColor: seasonStyles[fragment.seasonId].color,
                    }}
                  >
                    {fragment.firstSeasonDay === 0 &&
                    month.monthIdx !== 0 &&
                    useSeasonDecorators ? (
                      <div className="season-bar-fragment-decorator">
                        {seasonEmoji(fragment.seasonId)}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="days-container">
                {month.days.map((day) => (
                  <div
                    key={day.dayOfMonth}
                    className={"day" + (isWeekEnd(day) ? " weekend" : "")}
                  >
                    <div className="day-of-month">{day.dayOfMonth}</div>
                    <div className="moon-phase">{day.moonQuarterEmoji}</div>
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

function fragmentCssVariables(fragment: SeasonFragment): React.CSSProperties {
  return {
    "--fragment-days": fragment.fragmentLength,
    "--fragment-first-month-day": fragment.firstMonthDay,
    "--fragment-first-season-day": fragment.firstSeasonDay,
  } as React.CSSProperties;
}

function isWeekEnd(day: TimelineDay): boolean {
  return day.dayOfWeekIndex == 0 || day.dayOfWeekIndex == 6;
}

function seasonEmoji(seasonId: string): string {
  switch (seasonId) {
    case "summer":
      return "☀️";
    case "spring":
      return "🌸";
    case "winter":
      return "❄️";
    case "fall":
      return "🍂";
    default:
      return "";
  }
}
