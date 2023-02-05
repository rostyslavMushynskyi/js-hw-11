import "./styles/index.scss";
import { CountdownTimer } from "./scripts/task-03";

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("02-07-2023 14:30"),
});
