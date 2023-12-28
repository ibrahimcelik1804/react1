import Button from "./Button";
import Button2 from "./Button2";
const Header = () => {
  return (
    <header>
      <h1>Fcoder</h1>
      <nav>
        <a href="">Ana Sayfa</a>
        <a href="">Ürünler</a>
        <a href="">Hakkımızda</a>
        <a href="">İletişim</a>
      </nav>
      <div>
     {/* <Button buttonMetni={'Kullanıcı Girişi'} />
         <Button buttonMetni={'Yönetici Girişi'} />
         <Button buttonMetni={'Kayıt Ol'} />*/}
      <Button2 buttonTitle={'Kullanıcı Girişi'} buttonColor= {'greenyellow'}/>
      <Button2 buttonTitle={'Yönetici Girişi'} buttonColor= {'orangered'}/>
      
      </div>
    </header>
  );
};
export default Header;
