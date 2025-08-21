import { Chess } from 'chess.js';
import { useRef, useState } from 'react'
import { Chessboard, type PieceDropHandlerArgs } from 'react-chessboard';

function Game() {
    const chessGameRef = useRef(new Chess());
    const chessGame = chessGameRef.current;

    const [chessPosition, setChessPosition] = useState(chessGame.fen());

    function makeRandomMove() {

      const possibleMoves = chessGame.moves();

      if (chessGame.isGameOver()) {
        return;
      }

      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      chessGame.move(randomMove);

      setChessPosition(chessGame.fen());
    }


    function onPieceDrop({
      sourceSquare,
      targetSquare
    }: PieceDropHandlerArgs) {
    
      if (!targetSquare) {
        return false;
      }

      try {
        chessGame.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q' 
        });

      
        setChessPosition(chessGame.fen());

        setTimeout(makeRandomMove, 500);

        return true;
      } catch {
        return false;
      }
    }
    const chessboardOptions = {
      position: chessPosition,
      onPieceDrop,
      id: 'play-vs-random'
    };
  return (
    <Chessboard options={chessboardOptions} />
  )
}

export default Game