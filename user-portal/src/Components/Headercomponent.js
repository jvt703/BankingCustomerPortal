import React from "react";

const HeaderComponent = ({pageName, pageDescription})=>{
    return (
        <header className="pb-2  Header ">
        <div className="p-2 mb-2 banner-container">
          <h1 className="Header-banner ">{pageName}</h1>
          <h4 className="Header-banner-description">{pageDescription}</h4>
        </div>
        </header>
    );

}

export default HeaderComponent;