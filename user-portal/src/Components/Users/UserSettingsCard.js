import React from "react";


const UserSettingsCard = ({settingText}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h4>{settingText}</h4>
            </div>
        </div>
    );
}

export default UserSettingsCard;