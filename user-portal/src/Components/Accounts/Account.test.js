import Account from "./Account";
import { useParams } from "react-router-dom";
import Router from 'react-router';
import { render } from "@testing-library/react";

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
}));

describe("Account", () => {
  it("Header displays right account", () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '13' });
    const { getByTestId } = render(<Account />);
    const HeaderComponent = getByTestId("header-test").textContent;
    expect(HeaderComponent).toEqual("Checking Account 13");
  });

  it("Section Displays right Section Name", ()=>{
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '13' });
        const { getByTestId } = render(<Account />);
        const section = getByTestId("section-title").textContent;
        expect(section).toEqual("Account")
  });
  it("AccountDisplay renders", ()=>{
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '13' });
        const {  getByText } = render(<Account />);
        expect(getByText("Current Balance: $1110")).toBeInTheDocument();
  })
  
});


