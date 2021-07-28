import classNames from 'classnames';

export default function Button({ onClick, className, outline, children }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}
