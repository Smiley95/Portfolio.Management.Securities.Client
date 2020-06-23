import React from "react";
import { MDBBtn, MDBRow } from "mdbreact";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
export const Portfolios = {
  columns: [
    {
      label: "Ticker",
      field: "id",
      sort: "asc",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
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
      id: "SPY",
      name: "SPDR S&P 500",
      price: 294.94,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "CMCSA",
      name: "Comcast Corporation Class A Common Stock",
      price: 38.09,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "KMI",
      name: "Kinder Morgan Inc.",
      price: 15.49,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "INTC",
      name: "Intel Corporation",
      price: 59.92,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "MU",
      name: "Micron Technology Inc.",
      price: 45.92,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "GDX",
      name: "VanEck Vectors Gold Miners",
      price: 35.93,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "GE",
      name: "General Electric Company",
      price: 6.27,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "BAC",
      name: "Bank of America Corporation",
      price: 22.93,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "EEM",
      name: "iShares MSCI Emerging Index Fund",
      price: 37.44,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "XLF",
      name: "SPDR Select Sector Fund - Financial",
      price: 22.13,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "AAPL",
      name: "Apple Inc.",
      price: 314.96,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
    {
      id: "MSFT",
      name: "Microsoft Corporation",
      price: 184.91,
      quantity: 20,
      handle: (
        <MDBRow center>
          <MDBBtn color="success" size="sm">
            <AiFillEdit />
          </MDBBtn>
          <MDBBtn color="danger" size="sm">
            <AiFillDelete />
          </MDBBtn>
        </MDBRow>
      ),
    },
  ],
};
