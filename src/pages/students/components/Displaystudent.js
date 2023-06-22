import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const baseURL = "http://localhost:5454";
const Displaystudent = () => {

  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(1);
  const options = [10, 20]
  const [perPage, setPerPage] = useState(options);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async page => {
    const response = await axios.get(`${baseURL}/student/displaydata/?page=${page}&limit=${perPage}`);
    setData(response.data.rows);
    setTotalRows(response.data.count);
   
  };
  //console.log(data,"displaydata")
  const handlePageChange = async (page) => {
    if (!searchQuery) {
      fetchUsers(page);
    } else {
      const response = await axios.get(
        `${baseURL}/student/searchdata/${searchQuery}?page=${page}&limit=${perPage}`
      );
      setData(response.data.rows);
      setTotalRows(response.data.count);
    }
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await axios.get(`${baseURL}/student/displaydata/?page=${page}&limit=${newPerPage}`);
    setData(response.data.rows);
    setPerPage(newPerPage);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (!searchQuery) return fetchUsers(1);
    const response = await axios.get(
      `${baseURL}/student/searchdata/${searchQuery}?page=1&limit=${perPage}`
    );
    //console.log(response.data.rows,"dataasearch")
    setData(response.data.rows);
    setTotalRows(response.data.count);
  };

  useEffect(() => {
    fetchUsers(1); 
  }, []);
  console.log(data,"alldata")
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      sortField: 'id',
    },
    {
      name: "firstname",
      selector: (row) => row.student.firstname,
      sortable: true,
      //sortField: 'firstname',
    },
    {
      name: "lastname",
      selector: (row) => row.student.lastname,
      sortable: true,
      //sortField: 'firstname',
    },
    {
      name: "title",
      selector: (row) => row.course.title,
      sortable: true,
      sortField: 'title',
    },
    // {
    //   name: "firstname",
    //   selector: (row) => row.firstname,
    //   sortable: true,
    // },
    // {
    //   name: "lastname",
    //   selector: (row) => row.lastname,
    //   sortable: true,
    // },
    // {
    //   name: "phone",
    //   selector: (row) => row.phone,
    //   sortable: true,
    // },
  ];

  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null,3)}</pre>;

  // sorting
  //const [data, setData] = useState(data);

    const handleSort = async (column, sortDirection) => {
    /// reach out to some API and get new data using or sortField and sortDirection
    // e.g. https://api.github.com/search/repositories?q=blog&sort=${column.sortField}&order=${sortDirection}

      //setData(remoteData);
    };

  
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <DataTable
        title="Users"
        columns={columns}
        data={data}
        pagination
        paginationRowsPerPageOptions={options}
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        expandableRows expandableRowsComponent={ExpandedComponent}
        onSort={handleSort}
        sortServer
      />
    </div>
  );
}

export default Displaystudent