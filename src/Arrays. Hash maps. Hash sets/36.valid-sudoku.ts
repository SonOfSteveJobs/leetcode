/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    const rows = {};
    const cols = {};
    const squares = {};

    for (let row = 0; row < 9; row += 1) {
        for (let col = 0; col < 9; col += 1) {
            const num = board[row][col];
            const square = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;

            if (num === '.') {
                continue;
            }

            if (!cols[col]) {
                cols[col] = new Set();
            }
            if (!rows[row]) {
                rows[row] = new Set();
            }
            if (!squares[square]) {
                squares[square] = new Set();
            }

            if (cols[col].has(num) || rows[row].has(num) || squares[square].has(num)) {
                return false;
            }

            cols[col].add(num);
            rows[row].add(num);
            squares[square].add(num)
        }
    }

    return true;
};
// @lc code=end

