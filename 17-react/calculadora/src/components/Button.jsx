import './Button.css';

export default function Button({ label, click, operation, double, triple }) {
  let classes = 'button';
  if (operation) classes += ' operation';
  if (double) classes += ' double';
  if (triple) classes += ' triple';

  return (
    <button 
      onClick={() => click?.(label)}
      className={classes}
    >
      {label}
    </button>
  );
}