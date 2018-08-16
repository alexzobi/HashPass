import sha512 from 'js-sha512';

const hash = (password, salt, length) => {
  let syms = {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*'
  }
  let result = password.toString() + salt.toString();
  for (let i = 0; i <= 4000; i++) {
    result = sha512(result);
  }
  result = result.substr(0, length).split('');
  for (let i = 0; i < length; i++) {
    if (i > Math.floor(length / 3) && i%2===0 && syms[result[i]]) {
      result[i] = syms[result[i]];
    } else if (i%2===0) {
      result[i] = result[i].toUpperCase();
    }
  }
  return result.join('');
}

export default hash;