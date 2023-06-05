import React, {useState} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";

export const UpiCollect = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div style={{background: 'darkblue'}}>
            <h1>MUI TS Payment Demo</h1>

            <FormControl component="fieldset">
                <h2>Select Payment Method</h2>
                <RadioGroup name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <FormControlLabel value="creditCard" control={<Radio/>} label="Credit Card"/>
                    <FormControlLabel value="paypal" control={<Radio/>} label="PayPal"/>
                    <FormControlLabel value="netbanking" control={<Radio/>} label="Net Banking"/>
                </RadioGroup>
            </FormControl>

            {paymentMethod === 'creditCard' && (
                <div>
                    <h2>Credit Card Details</h2>
                    <TextField label="Card Number"/>
                    <TextField label="Expiry Date (MM/YY)"/>
                    <TextField label="CVV"/>
                </div>
            )}

            {/* Add the respective sections for PayPal and Net Banking details */}
        </div>
    );
};

