const Button = (props) => {
  return (
    <input
      type="button"
      value={props.value}
      className="button"
      id={props.id}
      onClick={props.onClick}
    />
  );
};

export default Button;
