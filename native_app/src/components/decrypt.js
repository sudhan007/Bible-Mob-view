import {Aeskey, Ivs_key} from '../config/common';
import { encode , decode } from 'base-64';

const decrypts = async encryptedStr => {
  const decodedData = decode(encryptedStr);
  return decodedData;
};
export default decrypts;
