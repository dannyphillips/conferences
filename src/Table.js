import React from "react";
import ReactTable from "react-table";
import { SegmentedController } from '@procore/core-react'
import data from './list.json'

export class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      year: "2019"
    };
  }
  setYear = (year) => this.setState({ year: year})
  render() {
    const conferences = data[this.state.year]
    return (
      <div>
        <SegmentedController>
          <SegmentedController.Segment
            onClick={() => this.setYear("2019")}
            active={this.state.year === "2019"}
          >
            2019
          </SegmentedController.Segment>
          <SegmentedController.Segment
            onClick={() => this.setYear("2020")}
            active={this.state.year === "2020"}
          >
            2020
          </SegmentedController.Segment>
        </SegmentedController>
        <ReactTable
          data={conferences}
          columns={[
            {
              Header: "What",
              columns: [
                {
                  Header: "Title",
                  accessor: "title",
                },
                {
                  Header: "Tech",
                  id: "tech",
                },
                {
                  Header: "Audience",
                  id: "audience",
                },
              ],
            },
            {
              Header: "When",
              columns: [
                {
                  Header: "Start Date",
                  accessor: "dateStart",
                },
                {
                  Header: "End Date",
                  accessor: "dateEnd",
                },
                {
                  Header: "Submission Deadline",
                  accessor: "submissionDeadline",
                },
              ],
            },
            {
              Header: "Where",
              columns: [
                {
                  Header: "Location",
                  accessor: "location",
                },
              ],
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Description",
                  id: "description",
                },
              ],
            },
          ]}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
