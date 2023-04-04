import AccountCreationButton from "./AccountCreationButton"
export default function AccountsSectionTitle(){
  return <div className="d-flex flex-row gap-3 flex-wrap justify-content-start align-items-center">
    Checking/Savings
    <AccountCreationButton />
  </div>
}