import React, { useState } from "react";
import "./_style.scss";
import $ from "jquery";

const ProjectView = () => {
  const [EmployeeData, setEmployeeData] = useState({
    name: null,
    age: null,
    dob: null,
  });

  const [EmployeeList, setEmployeeList] = useState([]);
  const createEmpForm = () => {
    setEmployeeData({
      name: null,
      age: null,
      dob: null,
    });
    $("#viewEmployeeModal").modal("show");
  };
  const handleCreate = () => {
    $("#viewEmployeeModal").modal("hide");
    setEmployeeList([
      ...EmployeeList,
      { ...EmployeeData, id: EmployeeList.length + 1 },
    ]);
  };
  const handleUpdate = () => {
    $("#viewEmployeeModal").modal("hide");
    let arr = [...EmployeeList];
    arr.forEach((ele) => {
      if (ele.id === EmployeeData.id) {
        ele.name = EmployeeData.name;
        ele.age = EmployeeData.age;
        ele.dob = EmployeeData.age;
      }
    });
    setEmployeeList(arr);
  };
  const editDetails = (emp) => {
    setEmployeeData(emp);
    $("#viewEmployeeModal").modal("show");
  };
  return (
    <>
      <div className="project-content">
        <div className="createButton">
          <button className="btn teal-button " onClick={createEmpForm}>
            +Create New Employee
          </button>
        </div>
        {EmployeeList.length > 0 ? (
          <>
            <div className="title">Employee List</div>
            <table class="table employee-table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Dob</th>
                </tr>
              </thead>
              <tbody>
                {EmployeeList.map((employee) => {
                  return (
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.age}</td>
                      <td>{employee.dob}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            editDetails(employee);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          ""
        )}
      </div>
      <div
        className="modal modal-style employeeModal"
        id="viewEmployeeModal"
        data-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header " style={{ fontSize: "1rem" }}>
              Employee form
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div class="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    class="form-control"
                    type="text"
                    value={EmployeeData.name}
                    onChange={(e) =>
                      setEmployeeData({ ...EmployeeData, name: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    class="form-control"
                    type="text"
                    value={EmployeeData.age}
                    onChange={(e) =>
                      setEmployeeData({ ...EmployeeData, age: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="age">Date Of Birth</label>
                  <input
                    class="form-control"
                    type="text"
                    value={EmployeeData.dob}
                    onChange={(e) =>
                      setEmployeeData({ ...EmployeeData, dob: e.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {EmployeeData.id ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleCreate}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectView;
