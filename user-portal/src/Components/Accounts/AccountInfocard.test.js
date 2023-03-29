import React from "react";
import { render } from "@testing-library/react";
import AccountInfoCard from "./AccountInfoCard";

describe("AccountInfoCard", () => {
  const accountInfo = {
    accountName: "Test Account",
    accountTypeName: "Checking",
    balance: 100000,
  };

  it("displays account name correctly", () => {
    const { getByText } = render(<AccountInfoCard AccountInfo={accountInfo} />);
    const accountName = getByText("Name: Test Account");
    expect(accountName).toBeInTheDocument();
  });

  it("displays account type correctly", () => {
    const { getByText } = render(<AccountInfoCard AccountInfo={accountInfo} />);
    const accountType = getByText("Account Type: Checking");
    expect(accountType).toBeInTheDocument();
  });

  it("displays account balance correctly", () => {
    const { getByText } = render(<AccountInfoCard AccountInfo={accountInfo} />);
    const accountBalance = getByText("Current Balance: $100000");
    expect(accountBalance).toBeInTheDocument();
  });
});