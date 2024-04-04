import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import springImageUrl from "../assets/spring.jpg";
import { TimelineYear } from "../model/timeline-year";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  month: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const TimelinePdfDocument = (props: { timelineYear: TimelineYear }) => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.page}>
      {props.timelineYear.months.map((month) => (
        <View style={styles.month}>
          <Text>
            {month.name} - {month.monthIdx + 1} - ({month.days.length} days)
          </Text>
          <Image src={springImageUrl}></Image>
        </View>
      ))}
    </Page>
  </Document>
);
