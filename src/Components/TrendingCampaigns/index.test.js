import React from 'react';
import { render } from '@testing-library/react';
import TrendingCampaigns from './index';

describe('TrendingCampaigns', () => {
  it('renders the component with image and text', () => {

    const { getByText, getByAltText } = render(<TrendingCampaigns />);
    

    const titleElement = getByText('Trending Campaigns');
    expect(titleElement).toBeInTheDocument();

    
    const imagesWithText = [
      { imageName: 'jepkemoi.png', text: '1500 Metres runner' },
      { imageName: 'rudisha.png', text: '800 Metres runner' },
      { imageName: 'kipchoge.png', text: '42 Kilometres runner' },
    ];

    imagesWithText.forEach((item, index) => {

      const altText = `winner-${index}`;
      const imageElement = getByAltText(altText);
      expect(imageElement).toBeInTheDocument();

      const textElement = getByText(item.text);
      expect(textElement).toBeInTheDocument();
    });
  });
});