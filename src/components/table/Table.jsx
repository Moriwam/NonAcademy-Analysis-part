import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 3221,
      subject: "Subject 1",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Mimi",
      date: "19 May 2022",
      marks: 80,
      level: "Intermidiate",
      status: "Passed",
    },
    {
      id: 3221,
      subject: "Subject 2",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Mimi",
      date: "19 May 2022",
      marks: 80,
      level: "Hard",
      status: "Passed",
    },
    {
      id: 3221,
      subject: "Subject 3",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Mimi",
      date: "19 May 2022",
      marks: 70,
      level: "Intermidiate",
      status: "Passed",
    },
    {
      id: 3221,
      subject: "Subject 4",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Mimi",
      date: "19 May 2022",
      marks: 60,
      level: "Primary",
      status: "Passed",
    },
    {
      id: 3221,
      subject: "Subject 5",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Mimi",
      date: "19 May 2022",
      marks: 30,
      level: "Intermidiate",
      status: "Failed",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Subjects</TableCell>
            <TableCell className="tableCell">Students</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Marks</TableCell>
            <TableCell className="tableCell">Level</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.subject}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.student}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.marks}</TableCell>
              <TableCell className="tableCell">{row.level}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
