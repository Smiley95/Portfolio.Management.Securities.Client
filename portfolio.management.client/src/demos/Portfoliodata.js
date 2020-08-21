import React from "react";
import { MDBBtn, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
export const Portfolios = {
  columns: [
    {
      label: "Label",
      field: "label",
      sort: "asc",
      width: 150,
    },
    {
      label: "Owner name",
      field: "owner",
      sort: "asc",
      width: 270,
    },
    {
      label: "Price",
      field: "price",
      sort: "asc",
      width: 200,
    },
    {
      label: "Quantity",
      field: "quantity",
      sort: "asc",
      width: 100,
    },
    {
      label: "Actions",
      field: "handle",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      label: "SPY",
      owner: "SPDR S&P 500",
      price: 294.94,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "CMCSA",
      owner: "Comcast Corporation Class A Common Stock",
      price: 38.09,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "KMI",
      owner: "Kinder Morgan Inc.",
      price: 15.49,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/dashboard/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "INTC",
      owner: "Intel Corporation",
      price: 59.92,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "MU",
      owner: "Micron Technology Inc.",
      price: 45.92,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "GDX",
      owner: "VanEck Vectors Gold Miners",
      price: 35.93,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "GE",
      owner: "General Electric Company",
      price: 6.27,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "BAC",
      owner: "Bank of America Corporation",
      price: 22.93,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "EEM",
      owner: "iShares MSCI Emerging Index Fund",
      price: 37.44,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "XLF",
      owner: "SPDR Select Sector Fund - Financial",
      price: 22.13,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "AAPL",
      owner: "Apple Inc.",
      price: 314.96,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      label: "MSFT",
      owner: "Microsoft Corporation",
      price: 184.91,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <Link to="/portfolio" style={{ color: "white" }}>
              <AiFillEdit />
            </Link>
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
  ],
};
