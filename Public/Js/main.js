const btn = document.querySelectorAll('.btn');
const passLenght = document.querySelector('#passLenght');
const result = document.querySelector('#result')
const checkbox = document.querySelectorAll('[data-id]')

const values = {
    charsetNumbers: false,
    charsetCaracter: false,
    charsetUppercase: false,
    charsetTiny: false
  }
  
  const conditions = {
    number: { attribute: 'charsetNumbers', value: true },
    symbols: { attribute: 'charsetCaracter', value: true },
    upperCase: { attribute: 'charsetUppercase', value: true },
    lowerCase: { attribute: 'charsetTiny', value: true },
  }
  
  checkbox.forEach(item => {
    item.addEventListener('click', () => {
      const value = item.dataset.id
      values[conditions[value].attribute] = item.checked ? conditions[value].value : false
    })
  })

const GetApiGeneratePassword = (value) => {
    fetch(`http://localhost:8080/getPassword/${value}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(data => {
            result.value = data.msg
            console.log(data.msg)
        }).catch(err => console.log(err))
};

const CopyPassword = () => {
    const elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = result.value

    document.body.appendChild(elementoTemporario)

    elementoTemporario.select();
    document.execCommand("copy");

    document.body.removeChild(elementoTemporario)
}

btn[0].addEventListener('click', () => {
    GetApiGeneratePassword(passLenght.value);
});

btn[1].addEventListener('click', () => {
    CopyPassword();
});

