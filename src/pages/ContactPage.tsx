import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/mockData";
import Header from "../components/Header";
import { colorDesign } from "../components/Theme";
import { GridToolbar } from "@mui/x-data-grid/components";

const ContactPage = () => {
  const theme = useTheme();
  const colors = colorDesign(theme.palette.mode);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 30, maxWidth: 50 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      minWidth: 50,
      maxWidth: 80,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 120,
      maxWidth: 150,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      minWidth: 200,
      maxWidth: 400,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
      minWidth: 70,
      maxWidth: 100,
    },
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      <Box
        m="40px 0 0 0"
        height="65vh"
        width="100%"
        sx={{
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiButtonBase-root": {
            color: "whitesmoke",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactPage;
