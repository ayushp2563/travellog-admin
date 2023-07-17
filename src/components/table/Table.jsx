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
      id: 1143155,
      hotel: "Hotel Taj",
      img: "https://media.istockphoto.com/id/926704710/photo/taj-mahal-hotel-reviews-india.jpg?s=612x612&w=is&k=20&c=LVmPsaWHABTdMfaLwM8alLo-Iz7HtqT4QXEpkdof3WE=",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      hotel: "Lilavati",
      img: "https://images.trvl-media.com/lodging/1000000/910000/905500/905407/076666ed_d.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      hotel: "Hotel H",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103414426.jpg?k=50e4c60f5bc3e07ed6b80f839b49d4d4ccfcc9ae536e8483b9f028a72f5e63a6&o=&hp=1",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      hotel: "Hotel SunLight",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/320656905.jpg?k=d1fd99528d84330d15fbfe4004e70bc2a265521a50046015ee6225c3b5949439&o=&hp=1",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      hotel: "Hotel Mountain View",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465520517.jpg?k=db77d8eae5d504b7c4f433a5554d8fa08016e7a66cc487b8a2cac7156e1c4c26&o=&hp=1",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
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
                  {row.hotel}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
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
