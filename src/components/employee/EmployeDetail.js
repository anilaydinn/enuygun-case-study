import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEmploye } from "../../actions/employeeActions";

function EmployeDetail(props) {
  const { getEmploye, employe } = props;

  let { id } = useParams();

  useEffect(() => {
    getEmploye(id);
  }, []);

  return (
    <div className="detailContainer">
      <div className="employeInfoPanel">
        <img src={employe.image} className="employeDetailImage" />
        <div className="employeInfoContainer">
          <div className="employeInfos">
            <h2>
              {employe.firstName} {employe.lastName}
            </h2>
            <p>
              <b>Phone:</b> {employe.phone}
            </p>
            <p>
              <b>Address:</b> {employe.address}
            </p>
            <p>
              <b>Vote Count:</b> {employe.voteCount}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employe: state.employe,
});

const mapDispatchToProps = (dispatch) => ({
  getEmploye: (empId) => {
    dispatch(getEmploye(empId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeDetail);
