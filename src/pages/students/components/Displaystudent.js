import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const baseURL = "http://localhost:5454";
const Displaystudent = () => {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(1);
  const options = [10, 20];
  const [perPage, setPerPage] = useState(options);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async (page) => {
    const response = await axios.get(
      `${baseURL}/student/displaydata/?page=${page}&limit=${perPage}`
    );
    //console.log(response.data,'response.data');
    setData(response.data.Data);
    setTotalRows(response.data.totalcount);
  };

  const handlePageChange = async (page) => {
    if (!searchQuery) {
      fetchUsers(page);
    } else {
      const response = await axios.get(
        `${baseURL}/student/searchdata/${searchQuery}?page=${page}&limit=${perPage}`
      );
      setData(response.data.Data);
      setTotalRows(response.data.totalcount);
    }
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await axios.get(
      `${baseURL}/student/displaydata/?page=${page}&limit=${newPerPage}`
    );
    setPerPage(newPerPage);
    setData(response.data.Data);
    setTotalRows(response.data.totalcount);
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
   // console.log(response.data, "servhh");
    setData(response.data.searchData);
    setTotalRows(response.data.totalcount);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);
  //console.log(data, "alldata")
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      //sortField: "id",
    },
    {
      name: "Firstname",
      selector: "firstname",
      sortable: true,
      //sortField: "firstname",
    },
    {
      name: "Lastname",
      selector: "lastname",
      sortable: true,
      //sortField: "lastname",
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
      //sortField: "phone",
    },
  ];
  const ExpandedComponent = ({ data }) => {
    if (data && data.enrollments.length > 0) {
      return (
        <div>
          {data.enrollments.map((enrollment) => (
            <div key={enrollment.id}>
              <h3>Enrolled Course: {enrollment.course.title}</h3>
              <p>Professor: {enrollment.course.professor.name}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return <p>No enrollment in any course</p>;
    }
  };

  const handleSort = async (column, sortDirection) => {
    try {
      const response = await axios.get(
        `${baseURL}/student/handleSort/?column=${column}&sortDirection=${sortDirection}&page=1&limit=${perPage}`
      );
      console.log("Sorted data", response.data)
      setData(response.data.searchData);
      setTotalRows(response.data.totalcount);
    } catch (error) {
      console.error("Error handling sort:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationRowsPerPageOptions={options}
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        onSort={(column, sortDirection) => handleSort(column.selector || column.name, sortDirection)}
        sortServer
      />
    </div>
  );
};

export default Displaystudent;
