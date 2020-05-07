import React, { Fragment, useEffect } from 'react';
import { EmployeeDatabase } from './_employee';

const $ = require('jquery');
$.DataTable = require('datatables.net-bs4');

const TableHeading = (
    <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start date</th>
        <th>Salary</th>
    </tr>
);

const Tables = () => {
    useEffect(() => {
        const dataTableResult = $('#dataTable').DataTable();
        return () => {
            dataTableResult.destroy();
        }
    }, []);
    return (
        <Fragment>

            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">
                DataTables is a third party plugin that is used to generate the demo table&nbsp;
                below. For more information about DataTables, please visit the&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://datatables.net">
                    official DataTables documentation
                </a>.
            </p>

            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead>{TableHeading}</thead>
                            <tfoot>{TableHeading}</tfoot>
                            <tbody>
                                {
                                    EmployeeDatabase.map((employee, index) => {
                                        return (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <tr key={index}>
                                                <td>{employee.Name}</td>
                                                <td>{employee.Position}</td>
                                                <td>{employee.Office}</td>
                                                <td>{employee.Age}</td>
                                                <td>{employee.Start} date</td>
                                                <td>{employee.Salary}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Tables;