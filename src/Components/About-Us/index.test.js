import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from '.';

describe('AboutUs Component', () => {
  it('should render without errors', () => {
    const { getByText, getByAltText } = render(<AboutUs />);
    
    expect(getByText('About Amali')).toBeInTheDocument();
    expect(getByText('Our Mission')).toBeInTheDocument();
    expect(getByText(/Amali is the essential app for athletes/)).toBeInTheDocument();
    expect(getByAltText('Company Team')).toBeInTheDocument();
  });
});