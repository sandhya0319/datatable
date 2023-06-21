import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";


const baseURL = "http://localhost:5454";
const Displaystudent = () => {

  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(1);
  const options=[10,20]
  const [perPage, setPerPage] = useState(options);
  //console.log(options,"oo")

 //const[options,setOptions]=useState(10);
  const fetchUsers = async page => {
   
    const response = await axios.get(`http://localhost:5454/student/displaydata/?page=${page}&limit=${perPage}`);

    setData(response.data.rows);
   //console.log(response.data,"data")
    setTotalRows(response.data);
    //setTotalRows(response.data.rows);
    //console.log(response.data.rows,"tt")
    console.log(totalRows,"ll")
};

const handlePageChange = page => {
    fetchUsers(page);
};

const handlePerRowsChange = async (newPerPage, page) => {
   
    const response = await axios.get(`http://localhost:5454/student/displaydata/?page=${page}&limit=${newPerPage}`);

    setData(response.data.rows);
    setPerPage(newPerPage);
};

useEffect(() => {
    fetchUsers(1); // fetch page 1 of users
}, []);

const columns = [
    {
        name: "id",
        selector: (row) => row.id,
        sortable: true,
      },
    {
      name: "firstname",
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: "lastname",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
    },
  ];
return (
    <DataTable
        title="Users"
        columns={columns}
        data={data}
        // progressPending={loading}
        pagination
        //paginationComponentOptions={options}
        paginationRowsPerPageOptions={options}
        paginationServer
        paginationTotalRows={totalRows}

        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        
    />
);
}

export default Displaystudent
