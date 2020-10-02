/**
 * The table you imported from ./Table has React.memo embedded, e.g. in the CustomTable component below.
 * This causes the table not to re-render every time its parent component re-renders.
 * If you are about to extend your table, do not forget to wrap it with memo.
 */
import React, { useState } from 'react';
// import './style.css'

import moment from 'moment';
import { css } from 'emotion';

// In your setup, replace "../../" with "react-bs-datatable".
import {
  Pagination,
  PaginationOpts,
  TableHeader,
  TableBody,
  Filter,
  useDatatableLifecycle,
  shouldTableUpdate
} from 'react-bs-datatable';

// This is a number that will be shown on the screen to determine how many times the table has re-rendered.
let num1 = 0;
let num2 = 0;

const CustomTable = React.memo(props => {
  const {
    data,
    rowsPerPageOption,
    tableHeaders,
    onChangeFilter,
    onPageNavigate,
    classes,
    onRowsPerPageChange,
    onSortChange,
    tableClass,
    labels,
    filterable,
    filterText,
    rowsPerPage,
    currentPage,
    sortedProp,
    maxPage,
    Components
  } = useDatatableLifecycle(props);
  num1 += 1;
  return (
    <>
      {/* <h3>{num1}</h3> */}
      <Components.Row className="controlRow__root mb-3">
        <Components.Col xs={12} md={4}>
        <PaginationOpts
            classes={classes}
            labels={labels}
            onRowsPerPageChange={onRowsPerPageChange}
            rowsPerPage={rowsPerPage}
            rowsPerPageOption={rowsPerPageOption}
            components={{
              Form: Components.Form,
              FormGroup: Components.FormGroup,
              FormControl: Components.FormControl
            }}
          />
        </Components.Col>
        <Components.Col xs={12} md={4} />
        <Components.Col xs={12} md={4} className="text-right">
          <Filter
            classes={classes}
            tableHeaders={tableHeaders}
            placeholder={labels.filterPlaceholder}
            onChangeFilter={onChangeFilter}
            filterText={filterText}
            filterable={filterable}
            components={{
              Adornment: Components.Adornment,
              Button: Components.Button,
              ClearIcon: Components.ClearIcon,
              FormControl: Components.FormControl,
              InputGroup: Components.InputGroup
            }}
          />
        </Components.Col>
      </Components.Row>
      <Components.Row>
        <Components.Col xs="12" className="table-responsive">
          <Components.Table className="table table-hover table-bordered border-t0 text-nowrap">
            <TableHeader
              classes={classes}
              tableHeaders={tableHeaders}
              sortedProp={sortedProp}
              onSortChange={onSortChange}
              components={{
                TableHead: Components.TableHead,
                TableCell: Components.TableCell,
                TableRow: Components.TableRow
              }}
            />
            <TableBody
              classes={classes}
              tableHeaders={tableHeaders}
              labels={labels}
              data={data}
              components={{
                TableBody: Components.TableBody,
                TableCell: Components.TableCell,
                TableRow: Components.TableRow
              }}
            />
          </Components.Table>
        </Components.Col>
      </Components.Row>
      <Components.Row className="controlRow__root bottom">
        {/* <Components.Col xs={12} md={3} />
        <Components.Col xs={12} md={3} /> */}
      <Components.Col md={12} className="text-right">
        
        <Components.Col>
          <Pagination
            classes={{
              Button: css`
              background-color: #fff;
              `,
            }}
            data={data}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onPageNavigate={onPageNavigate}
            labels={labels}
            maxPage={maxPage}
            components={{
              Button: Components.Button,
              ButtonGroup: Components.ButtonGroup
            }}
          />
        </Components.Col>
      </Components.Col>
      </Components.Row>
    </>
  );
}, shouldTableUpdate);


const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);

  if (rd > 0.5) {
    return {
      username: 'i-am-billy',
      realname: `Billy ${rd}`,
      location: 'Mars',
      date: moment()
        .subtract(1, 'days')
        .format('Do MMMM YYYY')
    };
  }

  return {
    username: 'john-nhoj',
    realname: `John ${rd}`,
    location: 'Saturn',
    date: moment()
      .subtract(2, 'days')
      .format('Do MMMM YYYY')
  };
});

const onSortFunction = {
  date(columnValue) {
    // Convert the string date format to UTC timestamp
    // So the table could sort it by number instead of by string
    return moment(columnValue, 'Do MMMM YYYY').valueOf();
  }
};

const customLabels = {
  // first: '<<',
  // last: '>>',
  // prev: '<',
  // next: '>',
  // show: 'Display',
  // entries: 'rows',
  // noResults: 'There are no data to be displayed',
  filterPlaceholder: 'Search'
};

function Wrapper(props) {
  const [idx, setIdx] = useState(0);

  function onClick() {
    setIdx(idx + 1);
  }

  // console.log(props.body())

  return (
    <>
      {/* <button onClick={onClick}>Try re-render</button> */}
      <CustomTable
        tableHeaders={props.head()}
        tableBody={props.body()}
        tableClass="striped hover responsive bordered"
        rowsPerPage={props.rowsPerPage}
        rowsPerPageOption={props.rowsPerPageOption}
        initialSort={{ prop: 'username', isAscending: true }}
        // onSort={onSortFunction}
        labels={customLabels}
        classes={props.classes}
      />
    </>
  );
}

// storiesOf(categoryName, module).add('Testing render count', () => <Wrapper />);

export default Wrapper;

