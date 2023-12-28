import Button2 from "./Button2";
import { useState } from "react";
import InputField from "./InputField";

const Form = () => {
  const [isim, setIsim] = useState();
  const [soyadınız, setSoyadınız] = useState();
  const [yas, setYas] = useState();
  return (
    <form action="">
      <InputField
        labelTitle={"Adınızı Giriniz"}
        placeholderTitle={"Adınız"}
        onChange={(e) => setIsim(e.target.value)}
      />
      <InputField
        labelTitle={"Soyadınızı Giriniz"}
        placeholderTitle={"Soyadınız"}
        onChange={(e) => setSoyadınız(e.target.value)}
      />
      <InputField
        labelTitle={"Yaşınızı Giriniz"}
        placeholderTitle={"Yaşınız"}
        onChange={(e)=>setYas(e.target.value)}
      />

      <Button2
        onClick={() => console.log(isim ,soyadınız,yas )}
        buttonTitle={"Form Gönder"}
        buttonColor={"pink"}
        
      />
    </form>
  );
};
export default Form;
