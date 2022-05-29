export const examColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "subject",
    headerName: "Subject",
    width: 400,
  },

  {
    field: "marks",
    headerName: "Marks",
    width: 200,
  },
  {
    field: "level",
    headerName: "Level",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={`cellWithlevel ${params.row.level}`}>
          {params.row.level}
        </div>
      );
    },
  },
];

//temporary data
export const examRows = [
  {
    id: 1,
    examname: "HM",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    level: "hard",
    marks: 35,
  },
  {
    id: 2,
    examname: "Eng",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    level: "primary",
    marks: 42,
  },
  {
    id: 3,
    examname: "Math",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    level: "intermidiate",
    marks: 45,
  },
];
