import React from "react";

const HeaderComponent = ({pageName, pageDescription})=>{
    return (
        <>
        <div className="d-flex  justify-content-center"> 

      
        <header className=" Header  m-2 py-2 w-75">
        <div className="banner-container container">
          <h1 data-testid="header-test"  className="Header-banner  ">{pageName}</h1>
          <h4 className="Header-banner-description">{pageDescription}</h4>
        </div>
        </header> 
         </div>
        </>
    );

}

export default HeaderComponent;