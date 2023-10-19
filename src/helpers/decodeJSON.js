import * as CryptoJS from "crypto-js";

export const decodeJSON = (encodeObject) => {
  try {
    const cryptkey = CryptoJS.enc.Utf8.parse("ZXN0YWVzbWlrZXl4ZGRk");
    const JSONByte = CryptoJS.AES.decrypt(encodeObject, cryptkey, {
      iv: CryptoJS.enc.Hex.parse("00000000000000000000000000000000"),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return JSON.parse(JSONByte.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return "error";
  }
};
