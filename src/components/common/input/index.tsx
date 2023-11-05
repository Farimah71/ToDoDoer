export const Input = ({ type = "text", ...rest }): JSX.Element => {
  return <input type={type} {...rest} />;
};
