const Button = ({buttonMetni}) => {
  // console.log(props);
  
  //console.log(buttonMetni);
  const buttonStyle = {
    backgroundColor:
      buttonMetni === "Kullanıcı Girişi"
        ? "greenyellow"
        : buttonMetni === "Yönetici Girişi"
        ? "orangered"
        : "yellow",
  };
  return (
    <div className="user-login" style={buttonStyle}>
      {buttonMetni}
    </div>
  );
};
export default Button;
