// import {
//   DataGrid,
//   GridToolbar,
//   GridToolbarContainer,
//   GridToolbarExport,
// } from "@mui/x-data-grid";
// import styles from "./TableGrid.module.css";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import Button from "../../ui/Button";
// import { Box, TextField } from "@mui/material";

// const rows = [
//   {
//     id: 1,
//     name: "محمد علي",
//     age: 25,
//     city: "القاهرة",
//     email: "mohamed.ali@example.com",
//     job: "مهندس",
//     phone: "0123456789",
//     address: "شارع التحرير",
//     gender: "ذكر",
//   },
//   {
//     id: 2,
//     name: "فاطمة حسين",
//     age: 30,
//     city: "الجيزة",
//     email: "fatma.hussein@example.com",
//     job: "طبيبة",
//     phone: "0112345678",
//     address: "شارع النيل",
//     gender: "أنثى",
//   },
//   {
//     id: 3,
//     name: "أحمد إبراهيم",
//     age: 28,
//     city: "الإسكندرية",
//     email: "ahmed.ibrahim@example.com",
//     job: "محاسب",
//     phone: "0109876543",
//     address: "حي المنشية",
//     gender: "ذكر",
//   },
//   {
//     id: 4,
//     name: "سارة محمد",
//     age: 24,
//     city: "المنصورة",
//     email: "sarah.mohamed@example.com",
//     job: "مدرسة",
//     phone: "0128765432",
//     address: "حي الجامعة",
//     gender: "أنثى",
//   },
//   {
//     id: 5,
//     name: "خالد عبد الله",
//     age: 35,
//     city: "أسوان",
//     email: "khaled.abdallah@example.com",
//     job: "مبرمج",
//     phone: "0154321987",
//     address: "حي الجزيرة",
//     gender: "ذكر",
//   },
//   {
//     id: 6,
//     name: "منى سعيد",
//     age: 29,
//     city: "طنطا",
//     email: "mona.saeed@example.com",
//     job: "محامية",
//     phone: "0107654321",
//     address: "حي المحطة",
//     gender: "أنثى",
//   },
//   {
//     id: 7,
//     name: "عمر حسن",
//     age: 33,
//     city: "الزقازيق",
//     email: "omar.hassan@example.com",
//     job: "طبيب أسنان",
//     phone: "0123456781",
//     address: "حي الحلمية",
//     gender: "ذكر",
//   },
//   {
//     id: 8,
//     name: "نور أحمد",
//     age: 26,
//     city: "دمنهور",
//     email: "nour.ahmed@example.com",
//     job: "مصممة جرافيك",
//     phone: "0112233445",
//     address: "شارع الجمهورية",
//     gender: "أنثى",
//   },
// ];

// const columns = [
//   { field: "name", headerName: "الاسم", width: 150, editable: false },
//   { field: "age", headerName: "العمر", width: 100, editable: false },
//   { field: "city", headerName: "المدينة", width: 150, editable: false },
//   {
//     field: "email",
//     headerName: "البريد الإلكتروني",
//     width: 200,
//     editable: false,
//   },
//   { field: "job", headerName: "الوظيفة", width: 150, editable: false },
//   { field: "phone", headerName: "رقم الهاتف", width: 150, editable: false },
//   { field: "address", headerName: "العنوان", width: 200, editable: false },
//   { field: "gender", headerName: "النوع", width: 100, editable: false },
// ];

// export default function TableGrid() {
//   const actionColumn = {
//     field: "action",
//     headerName: "الإجراءات",
//     width: 150,
//     renderCell: (params) => {
//       return (
//         <div
//           style={{
//             display: "flex",
//             height: "100%",
//             gap: "10px",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <VisibilityIcon
//             style={{ cursor: "pointer", color: "#888888", fontSize: "16px" }}
//           />
//           <EditIcon
//             style={{ cursor: "pointer", color: "#888888", fontSize: "16px" }}
//           />
//           <DeleteIcon
//             style={{ cursor: "pointer", color: "#888888", fontSize: "16px" }}
//           />
//         </div>
//       );
//     },
//   };
//   return (
//     <>
//       <div style={{ width: "100%" }}>
//         <DataGrid
//           sx={{
//             direction: "rtl",
//             "& .MuiDataGrid-columnHeaders": {
//               fontSize: "14px",
//               fontFamily: "cairo",
//               justifyContent: "flex-end",
//             },
//             "& MuiDataGrid-toolbarContainer ": {
//               backgroundColor: "red",
//             },
//             "& .MuiDataGrid-cell": {
//               fontSize: "12px",
//               fontFamily: "cairo",
//               textAlign: "right",
//             },
//           }}
//           rows={rows}
//           columns={[...columns, actionColumn]}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 10,
//               },
//             },
//           }}
//           slots={{ toolbar: GridToolbar }}
//           slotProps={{
//             toolbar: {
//               showQuickFilter: true,
//             },
//           }}
//           pageSizeOptions={[5, 10, 25]}
//           checkboxSelection
//           disableRowSelectionOnClick
//           disableDensitySelector
//           disableColumnSelector
//         />
//       </div>{" "}
//     </>
//   );
// }
// function CustomToolbar() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "flex-end",
//         gap: "10px",
//         alignItems: "center",
//         padding: "8px 16px",
//         backgroundColor: "#f5f5f5",
//         borderBottom: "1px solid #e0e0e0",
//       }}
//     >
//       <Button variation="primary">
//         <GridToolbarExport />
//       </Button>
//     </Box>
//   );
// }
