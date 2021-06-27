import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { incrementEmployeVote } from "../../actions/employeeActions";

function EmployeListItem(props) {
  const { employe, index, incrementEmployeVote } = props;

  return (
    <div key={employe.id + index} className="listItem">
      <Link to={`/employe/${employe.id}`}>
        <img className="empImage" src={employe.image} />
      </Link>
      <Link className="link" to={`/employe/${employe.id}`}>
        <div>{`${employe.firstName} ${employe.lastName}`}</div>
      </Link>
      <Link className="link" to={`/employe/${employe.id}`}>
        <div>{employe.phone}</div>
      </Link>
      <Link className="link" to={`/employe/${employe.id}`}>
        <div>{employe.address}</div>
      </Link>
      <button
        onClick={() => incrementEmployeVote(employe.id)}
        className="voteButton"
      >
        Vote
      </button>
      <div>{employe.voteCount}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
  incrementEmployeVote: (empId) => {
    dispatch(incrementEmployeVote(empId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeListItem);
