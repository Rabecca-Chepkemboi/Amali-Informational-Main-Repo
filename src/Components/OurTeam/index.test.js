import React from 'react';
import { render, screen } from '@testing-library/react';
import OurTeam from '.';

test('renders Meet Our Team heading', () => {
  render(<OurTeam />);

  const headingElement = screen.getByText('Meet Our Team');
  expect(headingElement).toBeInTheDocument();
});

test('renders team member names', () => {
  render(<OurTeam />);

  expect(screen.getByText('Angeth Herjok')).toBeInTheDocument();
  expect(screen.getByText('Eunice Mjera')).toBeInTheDocument();
  expect(screen.getByText('Ann Muyale')).toBeInTheDocument();
  expect(screen.getByText('Maurine Jebet')).toBeInTheDocument();
  expect(screen.getByText('Rabecca Chepkemboi')).toBeInTheDocument();
  
});

test('renders social links for team members', () => {
    render(<OurTeam/>);
 
  const links = screen.getAllByRole('link');
  const emailLinks = links.filter(link => link.href.startsWith('mailto:'));
  const twitterLinks = links.filter(link => link.href.startsWith('https://twitter.com/'));
  const linkedinLinks = links.filter(link => link.href.startsWith('https://linkedin.com/in/'));
  
  expect(emailLinks).toHaveLength(5);
  expect(twitterLinks).toHaveLength(5); 
  expect(linkedinLinks).toHaveLength(5); 
    
  });
  

test('renders team member images', () => {
  render(<OurTeam />);
  expect(screen.getAllByRole('img')).toHaveLength(5); 
  
});
