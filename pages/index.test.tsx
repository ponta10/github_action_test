import { render } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Get started by editing')).toBeTruthy();
  });
});