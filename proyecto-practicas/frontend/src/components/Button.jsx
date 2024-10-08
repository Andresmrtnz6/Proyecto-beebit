const Button = ({ label, onClick, icon, className }) => {
    return (
      <button className={`btn btn-primary ${className}`} onClick={onClick}>
        {icon && <i className={icon}></i>}
        {label}
      </button>
    );
  };
  
  export default Button;
  