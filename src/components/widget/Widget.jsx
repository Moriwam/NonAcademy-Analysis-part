import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import QuizIcon from "@mui/icons-material/Quiz";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DangerousIcon from "@mui/icons-material/Dangerous";

const Widget = ({ type }) => {
  let data;

  //temporary values
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "attempted_question":
      data = {
        title: "Attempted Questions",
        isAttempted: true,
        isPercentage: false,
        link: "See Attempted Questions",
        icon: (
          <QuizIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "correct_answer":
      data = {
        title: "Correct Answers",
        isCorrect: true,
        isPercentage: true,
        link: "View Correct Answers",
        icon: (
          <QuestionAnswerIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "incorrect_answer":
      data = {
        title: "Incorrect Answers",
        isIncorect: true,
        isPercentage: true,
        link: "View Incorrect Answers",
        icon: (
          <DangerousIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "total_mark":
      data = {
        title: "Total Marks",
        isTotal: true,
        isPercentage: true,
        link: "See details",
        icon: (
          <MilitaryTechIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isTotal && "M = "} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data.isPercentage && `${diff}%`}
          {/* {diff} % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
