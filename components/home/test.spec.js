import React from 'react';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeContainer from '.';

describe('<HomeContainer/>', ()=>{
    it('Should render component properly', ()=>{
        render(<HomeContainer />);

        expect(screen.getByText(/urbitável/i)).toBeInTheDocument();

        expect(screen.getByText(/lixeira/i)).toBeInTheDocument();
    })
})