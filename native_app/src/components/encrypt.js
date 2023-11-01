import {Aeskey, Ivs_key} from '../config/common';
import { decode , encode } from 'base-64';

const encrypts = async strs => {
  let sty = JSON.stringify(strs)
  const encodedData = encode(sty);
  return encodedData;
};
export default encrypts;
