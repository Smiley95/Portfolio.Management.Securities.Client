import React from "react";
import PropTypes from "../../utils/propTypes";

import { Table, Badge } from "reactstrap";

const GainersTable = ({ headers, gainers, ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {gainers.map(({ ticker, changesPercentage, price }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">{ticker}</td>
            <td className="align-middle text-center">
              <Badge color="success">{changesPercentage}</Badge>
            </td>
            <td className="align-middle text-center">{price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

GainersTable.propTypes = {
  headers: PropTypes.node,
  gainers: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string,
      changesPercentage: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

GainersTable.defaultProps = {
  headers: [],
  gainers: [],
};

export default GainersTable;
