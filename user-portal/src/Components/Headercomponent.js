import React from "react";

const HeaderComponent = ({pageName, pageDescription})=>{
    return (
        <>
        <header className=" Header m-2 py-2">
        <div className="banner-container container">
          <h1 data-testid="header-test"  className="Header-banner  ">{pageName}</h1>
          <h4 className="Header-banner-description">{pageDescription}</h4>
        </div>
        </header>
        </>
    );

}

export default HeaderComponent;