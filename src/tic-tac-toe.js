class TicTacToe {
  constructor() {
    this.currentPlayer = 'x';
    this.field = [[null,null,null],[null,null,null],[null,null,null]];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex]===null){
      this.field[rowIndex][columnIndex]=this.currentPlayer;
      this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
    }
  }

  isFinished() {
   return this.isDraw()||this.getWinner()!==null;
 }

 getWinner() {
  const point00 = this.getFieldValue(0,0);
  const point01 = this.getFieldValue(0,1);
  const point02 = this.getFieldValue(0,2);
  const point10 = this.getFieldValue(1,0);
  const point11 = this.getFieldValue(1,1);
  const point12 = this.getFieldValue(1,2);
  const point20 = this.getFieldValue(2,0);
  const point21 = this.getFieldValue(2,1);
  const point22 = this.getFieldValue(2,2);
      //horisontal
      if (point00 === point01 && point00 === point02 && point00 !== null) {
        return point00;
      }

      if (point10 === point11 && point10 === point12 && point10 !== null) {
        return point10;
      }

      if (point20 === point21 && point20 === point22 && point20 !== null) {
        return point20;
      }
      //vertical
      if (point00 === point10 && point00 === point20 && point00 !== null) {
        return point00;
      }

      if (point01 === point11 && point01 === point21 && point00 !== null) {
        return point01;
      }

      if (point02 === point12 && point02 === point22 && point02 !== null) {
        return point02;
      }
      //diagonal
      if (point00 === point11 && point00 === point22 && point00 !== null) {
        return point00;
      }

      if (point20 === point11 && point20 === point02 && point20 !== null) {
        return point20;
      }

      return null;
    }


    noMoreTurns() {
      for (var i = 0; i < 3; i++) {
        if (this.field[i].includes(null))
          return false;
      }
      return true;
    }

    isDraw() {
     return this.noMoreTurns()&&(this.getWinner()===null);
   }

   getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;