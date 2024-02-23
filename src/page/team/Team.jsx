import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { useTheme } from '@emotion/react';

export default function Team() {
  const theme = useTheme();
  const [rows, setRows] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isCopying, setIsCopying] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const [newUserData, setNewUserData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    access: 'User',
  });

  const handleSelectionModelChange = (selectionModel) => {
    setSelectedRows(selectionModel);
  };

  const handleDeleteSelectedData = () => {
    if (selectedRows.length === 0) {
      alert('Please select at least one row to delete.');
      return;
    }

    const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(updatedRows);

    localStorage.setItem('userData', JSON.stringify(updatedRows));

    setSelectedRows([]);
    alert('Selected data deleted successfully!');
  };

  const handleSaveData = () => {
    setIsSaving(true);

    localStorage.setItem('userData', JSON.stringify(rows));

    setIsSaving(false);
    alert('Data saved successfully!');
  };

  const handleDeleteData = () => {
    const confirmDelete = window.confirm('Are you sure to delete the data?');

    if (confirmDelete) {
      setIsDeleting(true);

      localStorage.removeItem('userData');
      setIsDeleting(false);
      alert('Data deleted successfully!');
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      setRows(JSON.parse(storedData));
    }
  }, []);

  const handleAddRow = () => {
    if (!newUserData.id || !newUserData.name || !newUserData.email || !newUserData.phone) {
      alert('Please fill out all fields');
      return;
    }

    const isDuplicateId = rows.some((row) => row.id === newUserData.id);
    if (isDuplicateId) {
      alert('ID already in use. Please choose a different ID.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUserData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
    if (!phoneRegex.test(newUserData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    const newRow = { ...newUserData };
    setRows([...rows, newRow]);

    setNewUserData({
      id: '',
      name: '',
      email: '',
      phone: '',
      access: 'User',
    });
  };

  const handleCopyData = () => {
    setIsCopying(true);

    try {
      const copiedData = JSON.stringify(rows);
      navigator.clipboard.writeText(copiedData);
      setCopySuccess(true);
      alert('Data copied successfully!');
    } catch (error) {
      console.error('Error copying data:', error);
      alert('Failed to copy data.');
    } finally {
      setIsCopying(false);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Id', width: 33, align: "center", headeralign: "center" },
    { field: 'name', headerName: 'Name', align: "center", headeralign: "center" },
    { field: 'email', headerName: 'Email', flex: 1, headeralign: "center" },
    { field: 'age', headerName: 'Age', align: "center", headeralign: "center" },
    { field: 'phone', headerName: 'Phone', align: "center", headeralign: "center" },
    {
      field: 'access', headerName: 'Access', align: "center", headeralign: "center", renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            p: "5px",
            width: "99px",
            BorederRedues: "3px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            // @ts-ignore
            backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#26a69a",
          }}>
            {access === "Admin" && (<AdminPanelSettingsOutlined sx={{ color: "#fff" }} fontSize='small' />)}
            {access === "Manager" && (<SecurityOutlined sx={{ color: "#fff" }} fontSize='small' />)}
            {access === "User" && (<LockOpenOutlined sx={{ color: "#fff" }} fontSize='small' />)}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <
// @ts-ignore
    Box style={{ height: 600, width: '98%', mx: "auto" }}>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          label="ID"
          variant="outlined"
          value={newUserData.id}
          onChange={(e) => setNewUserData({ ...newUserData, id: e.target.value })}
        />
        <TextField
          label="Name"
          variant="outlined"
          value={newUserData.name}
          onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={newUserData.email}
          onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
        />
        <TextField
          label="Phone"
          variant="outlined"
          value={newUserData.phone}
          onChange={(e) => setNewUserData({ ...newUserData, phone: e.target.value })}
        />
        <TextField
          select
          label="Access"
          variant="outlined"
          value={newUserData.access}
          onChange={(e) => setNewUserData({ ...newUserData, access: e.target.value })}
          style={{ marginLeft: '10px' }}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="User">User</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" onClick={handleAddRow}>
          Add a new user
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveData}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Data'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteData}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete Data'}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCopyData}
          disabled={isCopying}
        >
          {isCopying ? 'Copying...' : 'Copy Data'}
        </Button>
        {copySuccess && <span style={{ color: 'green', marginLeft: '10px' }}>Copied!</span>}
      </div>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>
  );
}

function setIsLoading(arg0) {
  throw new Error('Function not implemented.');
}
