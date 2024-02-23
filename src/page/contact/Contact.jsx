import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography } from "@mui/material";
import { columns } from "./data";

const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^[0-9]{10}$/;
  return phoneNumberRegex.test(phoneNumber);
};

const Contacts = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState({});
  const [saveStatus, setSaveStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddRow = () => {
    const hasValidationError = Object.values(error).some((errorMsg) => errorMsg !== null);

    if (hasValidationError) {
      return;
    }

    const newId = rows.length + 1;
    const newRow = { id: newId };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleSaveData = () => {
    const hasError = Object.values(error).some((errorMsg) => errorMsg !== null);

    if (rows.length === 0 || hasError) {
      setSaveStatus("error");
      return;
    }

    // يمكنك تخزين البيانات حسب متطلبات مشروعك هنا
    setSaveStatus("success");
  };

  return (
    <
// @ts-ignore
    Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Add New Row
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddRow}
          style={{ marginBottom: 16 }}
        >
          Add Row
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveData}
          style={{ marginBottom: 16, marginLeft: 16 }}
        >
          Save
        </Button>
        {saveStatus === "success" && (
          <Typography variant="body2" style={{ color: "green" }}>
            Data saved successfully!
          </Typography>
        )}
        {saveStatus === "error" && (
          <Typography variant="body2" style={{ color: "red" }}>
            No data to save. Add at least one row.
          </Typography>
        )}
        <div style={{ height: 630, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns.map((column) => ({
              ...column,
              renderCell: (params) => {
                if (params.field === "id") {
                  return params.row.id;
                }

                return (
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={params.row[params.field] || ""}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      const index = updatedRows.findIndex((row) => row.id === params.id);
                      updatedRows[index] = {
                        ...updatedRows[index],
                        [params.field]: e.target.value,
                      };
                      setRows(updatedRows);

                      if (params.field === "id") {
                        setError({
                          ...error,
                          id: e.target.value ? null : "ID is required",
                        });
                      } else if (params.field === "email") {
                        setError({
                          ...error,
                          email: validateEmail(e.target.value)
                            ? null
                            : "Invalid email",
                        });
                      } else if (params.field === "phoneNumber") {
                        setError({
                          ...error,
                          phoneNumber: validatePhoneNumber(e.target.value)
                            ? null
                            : "Invalid phone number",
                        });
                      }
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      style: { width: "auto" },
                    }}
                    error={error[params.field]}
                    helperText={error[params.field]}
                  />
                );
              },
            }))}
            components={{
              Toolbar: GridToolbar,
            }}
            // @ts-ignore
            pageSize={5}
          />
        </div>
      </div>
    </Box>
  );
};

export default Contacts;
