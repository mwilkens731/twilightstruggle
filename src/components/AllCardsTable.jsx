import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

const allCardsTableColumn = [
  {
    Header: 'All Cards',
    columns: [
      {
        Header: 'Side',
        id: 'side',
        accessor: 'side.name',
        maxWidth: 75,
        filterMethod: (filter, row) => {
          return caseInsensitiveFilter(filter, row);
        }
      },
      {
        Header: 'Ops',
        id: 'ops',
        accessor: 'ops',
        maxWidth: 40
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: 'name',
        filterMethod: (filter, row) => {
          return caseInsensitiveFilter(filter, row);
        }
      },
      {
        Header: 'Location',
        id: 'location',
        accessor: 'location',
        filterMethod: (filter, row) => {
          return caseInsensitiveFilter(filter, row);
        }
      },
    ]
  }
];

const caseInsensitiveFilter = function(filter, row){
  let rowValue = row[filter.id];
  if(rowValue){
    return rowValue.toLowerCase().includes(filter.value.toLowerCase());
  }
  return false;
}

class AllCardsTable extends Component{

  render(){
    return (
      <span>
        <ReactTable className='text-center -striped -highlight' filterable defaultSorted={[{id: 'location', desc: true}]} data={this.props.allCards} columns={allCardsTableColumn} defaultPageSize={10} />
      </span>
    );
  }
}

AllCardsTable.propTypes = {
  allCards: PropTypes.array
}

export default AllCardsTable;
