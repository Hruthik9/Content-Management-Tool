import { render, screen } from '@/utils/test-utils';
import CommentList from './CommentList';
import { CommentType } from '@/types';

describe('CommentList', () => {
  it('renders the title "Recent Comments"', () => {
    render(<CommentList comments={[]} />);
    const titleElement = screen.getByText('Recent Comments');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays "No comments found" message when the comments array is empty', () => {
    render(<CommentList comments={[]} />);
    const messageElement = screen.getByText('No comments found');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders the correct number of comments when the comments array is not empty', () => {
    const comments: CommentType[] = [
      {
        id: 1,
        name: 'Hruthik',
        email: 'hruthik@example.com',
        content: 'This is a comment',
        commentedAt: '2023-08-10T00:00:00.000Z',
      },
      {
        id: 2,
        name: 'Hruthik',
        email: 'hruthik@example.com',
        content: 'This is another comment',
        commentedAt: '2023-08-10T00:00:00.000Z',
      },
    ];
    const { getByText } = render(<CommentList comments={comments} />);
    expect(getByText(comments[0].name)).toBeInTheDocument();
    expect(getByText(comments[1].name)).toBeInTheDocument();
  });
});
