const RenderInput = ({ type = "text", ...rest }) => {
  return <input type={type} {...rest} />;
};

export default RenderInput;
