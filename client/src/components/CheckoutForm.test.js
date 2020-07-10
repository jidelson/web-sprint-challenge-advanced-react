import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details",  () => {
   render(<CheckoutForm />)
   
   const fnInput = screen.getByLabelText(/First Name:/i);
   const lnInput = screen.getByLabelText(/Last Name:/i);
   const addressInput = screen.getByLabelText(/Address:/i);
   const cityInput = screen.getByLabelText(/City:/i);
   const stateInput = screen.getByLabelText(/State:/i);
   const zipInput = screen.getByLabelText(/Zip:/i); 

   fireEvent.change(fnInput, { target: { value: 'Joe'}});
   fireEvent.change(lnInput, { target: { value: 'Idelson'}});
   fireEvent.change(addressInput, { target: { value: '1250 Walker Ave'}});
   fireEvent.change(cityInput, { target: { value: 'Walnut Creek'}});
   fireEvent.change(stateInput, { target: { value: 'CA'}});
   fireEvent.change(zipInput, { target: { value: '94596'}});

   const checkoutButton =  screen.getByTestId(/myButton/i);
   fireEvent.click(checkoutButton);
   
   const successMessage =  screen.getByTestId(/successMessage/i);
   expect(successMessage).toBeInTheDocument();


});
