import React from "react";


const HeaderComponent = ({pageName, pageDescription})=>{
    return (
      <header>
        <div className="p-5 text-center text-primary">
          <h1 className="mb-3 Header-banner ">{pageName}</h1>
          <h4 className="mb-3 Header-banner-description">{pageDescription}</h4>
        </div>
      </header>
    );

}

export default HeaderComponent;