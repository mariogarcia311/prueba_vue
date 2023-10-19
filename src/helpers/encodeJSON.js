import * as CryptoJS from "crypto-js";

export const encodeJSON = (decodeObject) => {
  const cryptkey = CryptoJS.enc.Utf8.parse("ZXN0YWVzbWlrZXl4ZGRk");
  return CryptoJS.AES.encrypt(JSON.stringify(decodeObject), cryptkey, {
    iv: CryptoJS.enc.Hex.parse("00000000000000000000000000000000"),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};
