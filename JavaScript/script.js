// Pegue o modal
let modal = document.getElementById("myModal");

// Pegue o botão que abre o modal
let btn = document.getElementById("openModal");

// Pegue o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Fecha o modal quando o usuário pressionar a tecla Esc
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

// Capturar o formulário
let form = document.getElementById("tabela");

// Função para lidar com o envio do formulário
form.onsubmit = function (event) {
  event.preventDefault(); // Impede o envio do formulário para o servidor

  // Pega os valores dos campos
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  // Exemplo de como armazenar os dados localmente
  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);

  // Fechar o modal após enviar
  modal.style.display = "none";
};

// Função para rolar suavemente para o topo
function scrollToTop() {
  const duration = 800; // Duração da animação em milissegundos
  const start = window.scrollY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Normaliza o progresso

      window.scrollTo(0, start * (1 - progress));

      if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
      }
  }

  requestAnimationFrame(animateScroll);
}

// Mostrar o botão quando o usuário rolar para baixo
window.addEventListener('scroll', function() {
  const button = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 300) { // Mostra o botão quando rolar mais de 300px
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
});