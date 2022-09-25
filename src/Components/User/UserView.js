import React from "react";
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';

export default function UserView() {
    return <Box component="form" className="form-container">
        <div className="form-element">
            <TextField id="full-name" label="Full Name" variant="standard" />
        </div>
        <div className="form-element">
            <TextField id="address" label="Address" variant="standard" />
        </div>
        <div>
          <TextField id="Number" label="Contact Number" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        </div>


        <div className="submit-container">
            <Button variant="contained">Save</Button>
        </div>
    </Box >
}
