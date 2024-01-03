import Home from '@/app/page';
import { render } from '@testing-library/react';

describe('when', () => {
  it('Render Home page', () => {
    render(<Home />);
  });
});
