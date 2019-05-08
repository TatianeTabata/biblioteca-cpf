function validation(cpfNum) {
  const cpf = cpfNum.replace(/\D/g, '').split('');
  return !(cpfNum.length < 11
      || cpfNum.length > 11
      || isNaN(parseInt(cpf))
      || cpf.every(num => num === cpf[0])
  );
}

function digitsVerification(cpfNumber, sliceNum, mult, arrEnd) {
  const cpfNum = cpfNumber.replace(/\D/g, '');
  if (validation(cpfNum)) {
    const total = cpfNum.split('')
      .slice(0, arrEnd)
      .map(value => parseInt(value) * mult--)
      .reduce((acc, num) => acc + num, 0);
    if ((total * 10) % 11 === parseInt(cpfNum.charAt(sliceNum))) {
      return true;
    }
    return false;
  }
}

function cpfValidator(cpf) {
  const firstDigit = digitsVerification(cpf, 9, 10, 9);
  const secondDigit = digitsVerification(cpf, 10, 11, 10);
  if (firstDigit && secondDigit) {
    return true;
  }
  return false;
}

module.exports.cpfValidator = cpfValidator;
