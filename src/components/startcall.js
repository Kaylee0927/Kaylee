import React, { useState } from 'react';
import './startcall.css'

import FriendList from './FriendList';
import MicIcon from '@mui/icons-material/Mic';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';

export default function StartCall(props) {
    const [selected, setSelected] = useState([]);

    const handleStartCall = () => {
        props.handleStartCall(selected);
    }

    const handleSelected = (selected) => {
        setSelected(selected);
    }

    return (
            <div>
                <div style={{ padding: "10px", top:"10px" }} className="search-container">
                    {/* <TextField
                        id="input-with-icon-textfield"
                        label="Search"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        fullWidth 
                    /> */}
                    <input type="text" className="search" placeholder="Search Contact"></input>
                </div>
                <div className="family-box">
                    <FriendList handleSelected={handleSelected} friends={props.friends}></FriendList>
                </div>
                
                <div className="buttons-container">
                    <button className={selected.length >= 1 ? "button-call-active": "button-call"} onClick={handleStartCall}><VoiceChatIcon className="button-icon"></VoiceChatIcon>Call</button>
                            {/* <Button sx={{width:200}} variant="contained">Call</Button> */}
                    <button className="button-voice"><MicIcon className="button-icon"></MicIcon>Voice Message</button>
                            {/* <Button sx={{width:200}} variant="contained">Voice Message</Button> */}
                </div>
            </div>
    )
}

