// Obtener todos los cuadros del juego
const cuadros = document.querySelectorAll('.cuadro');
let currentPlayer = 'player1'; // Cambia a 'player1' para iniciar
let resultado = document.getElementById('resultado');

// Agregar evento click a cada cuadro
cuadros.forEach(cuadro => {
  cuadro.addEventListener('click', () => {
    if (!cuadro.textContent) {
      cuadro.textContent = currentPlayer === 'player1' ? 'X' : 'O'; // Usa 'X' o 'O'
      if (checkWinner(currentPlayer)) {
        resultado.textContent = `${currentPlayer === 'player1' ? 'Player 1' : 'Player 2'} gana!`;
        resetGame();
      } else if (checkTie()) {
        resultado.textContent = 'Empate. ¡Inténtalo de nuevo!';
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'; // Cambia el jugador
      }
    }
  });
});

// Combinaciones ganadoras
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Función para verificar el ganador
function checkWinner(player) {
  return winningCombos.some(combo => {
    return combo.every(index => cuadros[index].textContent === (player === 'player1' ? 'X' : 'O'));
  });
}

// Función para verificar empate
function checkTie() {
  return [...cuadros].every(cuadro => cuadro.textContent !== '');
}

// Función para reiniciar el juego
function resetGame() {
  cuadros.forEach(cuadro => {
    cuadro.textContent = '';
  });
  currentPlayer = 'player1';
}
