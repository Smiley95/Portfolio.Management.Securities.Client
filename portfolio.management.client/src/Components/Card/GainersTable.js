import React from "react";
import PropTypes from "../../utils/propTypes";

import { Table, Badge } from "reactstrap";

const GainersTable = ({ headers, items, ...restProps }) => {
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
        {items.map(({ ticker, changesPercentage, price }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">{ticker}</td>
            <td className="align-middle text-center">
              {changesPercentage.includes("+") && (
                <Badge color="success">{changesPercentage}</Badge>
              )}
              {changesPercentage.includes("-") && (
                <Badge color="danger">{changesPercentage}</Badge>
              )}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string,
      changesPercentage: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

GainersTable.defaultProps = {
  headers: [],
  items: [],
};

export default GainersTable;
