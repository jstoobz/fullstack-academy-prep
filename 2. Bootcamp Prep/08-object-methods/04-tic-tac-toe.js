const ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function(char, x, y) {
    if (this.board[y][x] === null) this.board[y][x] = char;
    return this.board;
  },
  clear: function() {
    return this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  },
};

console.log(ticTacToe.move('x', 0, 0));
// console.log(ticTacToe.clear());