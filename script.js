
function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  if (!peso || !altura) return;
  const imc = peso / (altura * altura);
  let classificacao = '';
  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 25) classificacao = 'Peso normal';
  else if (imc < 30) classificacao = 'Sobrepeso';
  else classificacao = 'Obesidade';
  document.getElementById('resultado-imc').innerText = `IMC: ${imc.toFixed(2)} (${classificacao})`;
}

function registrarUsuario(email, senha) {
  if (!email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }
  if (localStorage.getItem(email)) {
    alert('Usuário já cadastrado!');
    return;
  }
  localStorage.setItem(email, senha);
  alert('Cadastro realizado com sucesso!');
}

function loginUsuario(email, senha) {
  const senhaSalva = localStorage.getItem(email);
  if (senhaSalva && senhaSalva === senha) {
    alert('Login bem-sucedido!');
    localStorage.setItem('usuarioLogado', email);
  } else {
    alert('E-mail ou senha inválidos.');
  }
}

function logoutUsuario() {
  localStorage.removeItem('usuarioLogado');
  alert('Logout realizado!');
}
    