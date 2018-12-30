// import React from 'react';
// import { render } from 'react-testing-library';
// import IndexPage from '../pages/index';
 
jest.mock('../components/seo.js', () => 'div');

describe('IndexPage', () => {
    it('renders correctly', () => {
        // const location = {
        //     pathname: '/'
        // };

        // const { asFragment } = render(<IndexPage location={location} />);
        // expect(asFragment()).toMatchSnapshot();
    });
});
