import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', function () {
  it('loads and displays greeting', async () => {
    render(<App />);

    await userEvent.click(screen.getByText(/count is/i));
    await screen.findByRole('heading');

    expect(screen.getByRole('button')).toHaveTextContent('count is 1');
  });
});
