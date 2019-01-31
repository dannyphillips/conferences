import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import data from './list.json'

export class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "What",
              columns: [
                {
                  Header: "Title",
                  accessor: "title"
                },
                {
                  Header: "Tech",
                  id: "tech"
                },
                {
                  Header: "Audience",
                  id: "audience"
                },

              ]
            },
            {
              Header: "When",
              columns: [
                {
                  Header: "Start Date",
                  accessor: "dateStart"
                },
                {
                  Header: "End Date",
                  accessor: "dateEnd"
                },
                {
                  Header: "Submission Deadline",
                  accessor: "submissionDeadline"
                }
              ]
            },
            {
              Header: "Where",
              columns: [
                {
                  Header: "Location",
                  accessor: "location"
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Description",
                  id: "description"
                }
              ]
            }
          ]}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
