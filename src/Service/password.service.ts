export const getRandomPassword = async (
  value: number,
  charsetNumbers: boolean,
  charsetTiny: boolean,
  charsetCaracter: boolean,
  charsetUppercase: boolean
) => {
  let charset = "";
  if (charsetCaracter) {
    charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  if (charsetTiny) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (charsetNumbers) {
    charset += "0123456789";
  }
  if (charsetUppercase || charset.length === 0) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  let password = "";
  for (let i = 0; i < value; i++) {
    const capital = charset.charAt(Math.floor(Math.random() * charset.length));
    password += capital;
  }
  return password;
};
