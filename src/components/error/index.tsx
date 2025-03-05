import { FC } from 'react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => (
  <div className="card">
    {error}
  </div>
);

export default ErrorMessage;
