import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaPlay, FaRedo } from 'react-icons/fa';
import analytics from '../services/analytics';

const GravityMaze = () => {
  const [gameState, setGameState] = useState('menu'); // menu, playing, won, lost
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 1 });
  const [gravity, setGravity] = useState('down');
  const [maze, setMaze] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isAnimating, setIsAnimating] = useState(false);
  const [explosions, setExplosions] = useState([]);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const gameRef = useRef(null);

  // Maze generation
  const generateMaze = () => {
    const size = 8;
    const newMaze = Array(size).fill().map(() => Array(size).fill('empty'));
    
    // Add walls
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (Math.random() < 0.3 && !(i === 1 && j === 1) && !(i === 6 && j === 6)) {
          newMaze[i][j] = 'wall';
        }
      }
    }
    
    // Add special blocks
    for (let i = 0; i < 3; i++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if (newMaze[x][y] === 'empty' && !(x === 1 && y === 1) && !(x === 6 && y === 6)) {
        newMaze[x][y] = 'explosive';
      }
    }
    
    // Set start and end
    newMaze[1][1] = 'start';
    newMaze[6][6] = 'exit';
    
    return newMaze;
  };

  // Initialize game
  useEffect(() => {
    if (gameState === 'playing') {
      setMaze(generateMaze());
      setPlayerPos({ x: 1, y: 1 });
      setGravity('down');
      setMoves(0);
      setTimeLeft(60);
      setGameStartTime(Date.now());
      analytics.trackGameStart();
    }
  }, [gameState]);

  // Load analytics data
  useEffect(() => {
    setAnalyticsData(analytics.getAnalytics());
  }, []);

  // Timer
  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameState('lost');
    }
    return () => clearTimeout(timer);
  }, [gameState, timeLeft]);

  // Gravity physics
  const applyGravity = (newMaze) => {
    const updatedMaze = newMaze.map(row => [...row]);
    let moved = false;

    for (let i = updatedMaze.length - 1; i >= 0; i--) {
      for (let j = 0; j < updatedMaze[i].length; j++) {
        if (updatedMaze[i][j] === 'explosive' || updatedMaze[i][j] === 'wall') {
          let newRow = i;
          
          // Apply gravity based on direction
          switch (gravity) {
            case 'down':
              newRow = i + 1;
              break;
            case 'up':
              newRow = i - 1;
              break;
            case 'left':
              newRow = i;
              break;
            case 'right':
              newRow = i;
              break;
          }
          
          // Check if can move
          if (newRow >= 0 && newRow < updatedMaze.length && 
              updatedMaze[newRow][j] === 'empty') {
            updatedMaze[newRow][j] = updatedMaze[i][j];
            updatedMaze[i][j] = 'empty';
            moved = true;
          }
        }
      }
    }

    return { maze: updatedMaze, moved };
  };

  // Move player
  const movePlayer = (direction) => {
    if (isAnimating || gameState !== 'playing') return;

    setIsAnimating(true);
    setMoves(moves + 1);

    let newX = playerPos.x;
    let newY = playerPos.y;

    switch (direction) {
      case 'up':
        newY = Math.max(0, playerPos.y - 1);
        break;
      case 'down':
        newY = Math.min(7, playerPos.y + 1);
        break;
      case 'left':
        newX = Math.max(0, playerPos.x - 1);
        break;
      case 'right':
        newX = Math.min(7, playerPos.x + 1);
        break;
    }

    // Check collision
    if (maze[newY][newX] === 'wall') {
      setIsAnimating(false);
      return;
    }

    if (maze[newY][newX] === 'explosive') {
      // Explosion effect
      setExplosions(prev => [...prev, { x: newX, y: newY, id: Date.now() }]);
      setTimeout(() => setExplosions(prev => prev.filter(e => e.id !== Date.now())), 1000);
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 500);
    }

    setPlayerPos({ x: newX, y: newY });

    // Apply gravity after move
    setTimeout(() => {
      const { maze: newMaze, moved } = applyGravity(maze);
      setMaze(newMaze);
      
      // Check win condition
      if (newX === 6 && newY === 6) {
        const timeSpent = gameStartTime ? (Date.now() - gameStartTime) / 1000 : 0;
        analytics.trackGameComplete(moves, timeSpent);
        setGameState('won');
      }
      
      setIsAnimating(false);
    }, 300);
  };

  // Change gravity
  const changeGravity = (newGravity) => {
    if (isAnimating || gameState !== 'playing') return;
    
    setGravity(newGravity);
    setMoves(moves + 1);
    
    // Apply gravity to all blocks
    const { maze: newMaze } = applyGravity(maze);
    setMaze(newMaze);
  };

  const startGame = () => {
    setGameState('playing');
  };

  const resetGame = () => {
    if (gameState === 'playing' && gameStartTime) {
      const timeSpent = (Date.now() - gameStartTime) / 1000;
      analytics.trackGameAbandon(timeSpent);
    }
    setGameState('menu');
    setExplosions([]);
    setGlitchEffect(false);
    setGameStartTime(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {gameState === 'menu' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              GRAVITY MAZE RUNNER
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Navigate the maze by flipping gravity! Reach the exit before time runs out.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-4">
                <FaArrowUp className="text-cyan-400" />
                <span>Use arrow keys to move</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <FaArrowDown className="text-purple-400" />
                <span>Click gravity buttons to flip the world</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-red-400">💥</span>
                <span>Avoid explosive blocks!</span>
              </div>
            </div>
            <motion.button
              onClick={startGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <FaPlay className="inline mr-2" />
              START GAME
            </motion.button>

          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Game Stats */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-6">
                <div className="text-cyan-400">
                  <span className="font-bold">Moves:</span> {moves}
                </div>
                <div className="text-purple-400">
                  <span className="font-bold">Time:</span> {timeLeft}s
                </div>
                <div className="text-green-400">
                  <span className="font-bold">Gravity:</span> {gravity.toUpperCase()}
                </div>
              </div>
              <button
                onClick={resetGame}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaRedo />
              </button>
            </div>

            {/* Game Board */}
            <div 
              ref={gameRef}
              className={`relative mx-auto w-96 h-96 border-2 border-cyan-400 rounded-lg overflow-hidden ${
                glitchEffect ? 'animate-pulse' : ''
              }`}
              style={{
                transform: gravity === 'up' ? 'rotate(180deg)' : 
                          gravity === 'left' ? 'rotate(90deg)' : 
                          gravity === 'right' ? 'rotate(-90deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {maze.map((row, y) => (
                row.map((cell, x) => (
                  <div
                    key={`${x}-${y}`}
                    className={`absolute w-12 h-12 ${
                      cell === 'wall' ? 'bg-gray-600' :
                      cell === 'explosive' ? 'bg-red-500 animate-pulse' :
                      cell === 'exit' ? 'bg-green-500' :
                      'bg-gray-800'
                    } border border-gray-700`}
                    style={{
                      left: x * 48,
                      top: y * 48
                    }}
                  />
                ))
              ))}

              {/* Player */}
              <motion.div
                className="absolute w-12 h-12 bg-cyan-400 rounded-full border-2 border-white"
                style={{
                  left: playerPos.x * 48,
                  top: playerPos.y * 48
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: ['0 0 0 0 rgba(34, 211, 238, 0.4)', '0 0 20px 10px rgba(34, 211, 238, 0.4)', '0 0 0 0 rgba(34, 211, 238, 0.4)']
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Explosions */}
              <AnimatePresence>
                {explosions.map(explosion => (
                  <motion.div
                    key={explosion.id}
                    className="absolute w-12 h-12 bg-red-500 rounded-full"
                    style={{
                      left: explosion.x * 48,
                      top: explosion.y * 48
                    }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <motion.button
                onClick={() => movePlayer('up')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                disabled={isAnimating}
              >
                <FaArrowUp />
              </motion.button>
              <motion.button
                onClick={() => movePlayer('left')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                disabled={isAnimating}
              >
                <FaArrowLeft />
              </motion.button>
              <motion.button
                onClick={() => movePlayer('down')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                disabled={isAnimating}
              >
                <FaArrowDown />
              </motion.button>
              <motion.button
                onClick={() => movePlayer('right')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                disabled={isAnimating}
              >
                <FaArrowRight />
              </motion.button>
            </div>

            {/* Gravity Controls */}
            <div className="flex justify-center space-x-4">
              <motion.button
                onClick={() => changeGravity('up')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  gravity === 'up' ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                disabled={isAnimating}
              >
                ↑ UP
              </motion.button>
              <motion.button
                onClick={() => changeGravity('down')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  gravity === 'down' ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                disabled={isAnimating}
              >
                ↓ DOWN
              </motion.button>
              <motion.button
                onClick={() => changeGravity('left')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  gravity === 'left' ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                disabled={isAnimating}
              >
                ← LEFT
              </motion.button>
              <motion.button
                onClick={() => changeGravity('right')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  gravity === 'right' ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                disabled={isAnimating}
              >
                → RIGHT
              </motion.button>
            </div>
          </motion.div>
        )}

        {gameState === 'won' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-green-400 mb-4">🎉 VICTORY! 🎉</h2>
            <p className="text-xl mb-6">You completed the maze in {moves} moves!</p>
            <motion.button
              onClick={resetGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-lg text-lg font-bold"
            >
              Play Again
            </motion.button>
          </motion.div>
        )}

        {gameState === 'lost' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-red-400 mb-4">💥 GAME OVER 💥</h2>
            <p className="text-xl mb-6">Time's up! Try again!</p>
            <motion.button
              onClick={resetGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 rounded-lg text-lg font-bold"
            >
              Try Again
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GravityMaze;
