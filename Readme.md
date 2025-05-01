
# Simple Sudoku Game

This is a simple Sudoku game that uses the backtracking algorithm to solve the puzzle. The backtracking algorithm attempts to fill the Sudoku grid by trying out numbers and backtracking if a contradiction is found.

### To learn more about backtracking, check out this [Wikipedia article on Backtracking](https://en.wikipedia.org/wiki/Backtracking).

---

### Functions in this Project:

1. **`isValid(index, num)`**  
   - This function checks if a given number is valid at a particular index in the Sudoku grid. It verifies that the number does not appear in the same row, column, or 3x3 subgrid.

2. **`drawLines()`**  
   - This function handles the visual effect for the grid lines. It draws the boundaries of the 9x9 Sudoku grid, highlighting the 3x3 subgrids with thicker red lines.

3. **`setupCanvas()`**  
   - This function sets up the canvas, initializes the grid, and draws the current state of the Sudoku puzzle on the canvas. It also renders any given initial numbers.

4. **`backtrack(index)`**  
   - This is the main function used to solve the Sudoku puzzle. It uses the backtracking algorithm to fill the grid. If a valid number is found at a particular position, it proceeds to the next empty cell. If an invalid configuration is encountered, it backtracks and tries a different number. The numbers are drawn on the canvas as the solution progresses.

---

### Future Work:

1. **Optimize the Backtracking Algorithm**  
   - The current implementation works, but it can be made more efficient. For example, implementing techniques like constraint propagation or using a more efficient data structure could speed up the solving process.

2. **Improve the Initialization Function**  
   - The `initialize()` function currently fills the grid with random numbers, but it doesn’t guarantee a solvable Sudoku puzzle. The goal is to modify this function so that the randomly placed numbers create a valid, solvable Sudoku grid.

---

### How It Works:

- The game starts with an initial grid of random numbers, with some cells left empty.
- The backtracking algorithm fills in the remaining cells by trying numbers (from 1 to 9) while respecting Sudoku rules (no duplicates in the row, column, or 3x3 subgrid).
- The algorithm will "backtrack" when it encounters an invalid number, trying different numbers until a valid configuration is found.

 