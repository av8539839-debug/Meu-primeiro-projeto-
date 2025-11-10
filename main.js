function mostrarInput() {
    // 1. Pegamos o elemento input pelo seu ID
    const inputBusca = document.getElementById('inputNome');
    
    // 2. Verificamos se ele já está visível
    if (inputBusca.classList.contains('mostrar-busca')) {
        // Se já está visível (clicou de novo), esconde ele
        inputBusca.classList.remove('mostrar-busca');
        inputBusca.blur(); // Remove o foco
    } else {
        // Se não está visível, mostra ele e foca
        inputBusca.classList.add('mostrar-busca');
        // Usamos setTimeout para garantir que a transição de visualização
        // termine antes de tentar focar (opcional)
        setTimeout(() => {
            inputBusca.focus(); // Coloca o cursor no campo de texto
        }, 300); // 300ms, igual à duração da transição no CSS
    }
    
}
// Seleciona o botão e o body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Pega o tema salvo do localStorage, com 'light' como padrão
const savedTheme = localStorage.getItem('site-theme') || 'light';

// Aplica o tema salvo ao carregar a página
if (savedTheme === 'dark') {
  body.classList.add('dark');
}

// Adiciona o evento de clique
themeToggle.addEventListener('click', () => {
  // Alterna a classe 'dark' no body
  body.classList.toggle('dark');

  // Verifica qual é o tema atual e salva no localStorage
  if (body.classList.contains('dark')) {
    localStorage.setItem('site-theme', 'dark');
  } else {
    localStorage.setItem('site-theme', ':');
  }
});
function btn2 () {
alert("você colocou paos no carrinho");
}
 
    
function btn() {
alert("você colocou frutas no carrinho ");
}