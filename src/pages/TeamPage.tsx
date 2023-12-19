import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../data/mockData";
import Header from "../components/Header";
import { colorDesign } from "../components/Theme";

const TeamPage = () => {
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
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      minWidth: 120,
      renderCell: ({ row: { access } }) => {
        let backgroundColor = colors.greenAccent[700];
        if (access === "admin") {
          backgroundColor = colors.redAccent[700];
        } else if (access === "manager") {
          backgroundColor = colors.blueAccent[500];
        }

        return (
          <Box>
            <Typography
              color={colors.grey[100]}
              sx={{
                ml: "5px",
                fontWeight: 600,
                width: "100%",
                p: "5px",
                display: "flex",
                justifyContent: "center",
                backgroundColor: backgroundColor,
                borderRadius: "4px",
              }}
            >
              {access.toUpperCase()}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
          rows={mockDataTeam}
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

export default TeamPage;
