import React from "react";
import { connect } from "react-redux";
import EmployeListItem from "./EmployeListItem";

function EmployeList(props) {
  const { employees } = props;

  return (
    <div className="listContainer">
      <div className="itemsContainer">
        {employees.map((employe, index) => {
          return (
            <EmployeListItem
              key={`${employe.id}-${index}`}
              employe={employe}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, null)(EmployeList);
