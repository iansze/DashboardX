import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataInvoices } from "../data/mockData";
import Header from "../components/Header";
import { colorDesign } from "../components/Theme";

const InvoicesPage = () => {
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
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 120,
      maxWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      minWidth: 80,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 100,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoices" />
      <Box
        m="40px 0 0 0"
        height="60vh"
        width="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
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
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
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
        />
      </Box>
    </Box>
  );
};

export default InvoicesPage;
