import React, { useState } from 'react';


const UserSettingsCard = ({settingText, settingValue}) => {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState('Edit');
    const [savedDisplay, setSavedDisplay] = useState(settingValue);
    const [savedInput, setSavedInput] = useState('');

    const togglableButton = () => {
        setEditMode(!editMode);
        if (editText === 'Edit') {
            setEditText('Save');
        } else {
            setEditText('Edit');
            setSavedDisplay(savedInput);
        }
    }
    
    const togglableInput = () => {
        if (editMode) {
            return (
                <input className='m-3 p-1' type="text" placeholder={settingText} name={settingText} onChange={(e) => setSavedInput(e.target.value)}/>
            );
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-row">
                    <span>
                        <h4>{settingText}: {savedDisplay}</h4>
                        <button className='btn btn-primary px-4 py-2' onClick={() => {togglableButton();}}>{editText}</button>
                        {togglableInput()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserSettingsCard;