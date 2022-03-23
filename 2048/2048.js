let game = new Vue({
    el: '#game',

    data:{
        name: '',
        score: 0,
        highScore: 0,
        size: 4,
        grid: [],
        gameLost: false,
        gameWon: false
    },

    methods:{
        init: function() {
            $('#name').hide();
            $('.score_list').hide();
            $('#grid_container').show();
            $('.list-group').empty();
            this.gameLost = false;
            this.gameWon = false;
            this.highScore = Math.max(this.highScore, this.score);
            this.score = 0;
            this.createBoard();
            for(let i = 0; i < 2; i++) {
                this.addRandomCell();
            }
        },

        viewLeaderboards: function(){
            $('#grid_container').hide();
            $('.score_list').show();
            return false;
        },

        createBoard: function() {
            this.grid = [];
            for(let i = 0; i < this.size; i++){
                let row = [];
                for(let j = 0; j < this.size; j++){
                    row.push({
                        x: i,
                        y: j,
                        value: 0,
                        class: `cell-0`
                    });
                }
                this.grid.push(row);
            }
        },

        addRandomCell: function () {
            let cell_value = 2;
            let random_cell = this.getRandomCell() || [];
            this.addCell({
                x: random_cell.x,
                y: random_cell.y,
                value: cell_value,
                class: `cell-${cell_value}`
            });
        },

        getRandomCell: function() {
            let zero_values = [];
            for(let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                   if(this.grid[i][j].value === 0)
                       zero_values.push(this.grid[i][j]);
                }
            }
            if(zero_values.length > 0) {
                let random_index = Math.floor(Math.random() * zero_values.length);
                return zero_values[random_index];
            }
        },

        addCell: function(cell) {
            if(this.grid[cell.x])
                this.grid[cell.x].splice(cell.y, 1, cell);
            else
                return null;
        },

        merge: function(row, gameCheck){
            let merged = [];
            let temp = [];
            row.forEach(cell => cell ? temp.push(cell) : null);
            for(let i = 0; i < temp.length; i++){
                if(temp[i+1] && temp[i] === temp[i+1]){
                    if(!gameCheck)
                        this.updateScore(temp[i] + temp[i+1]);
                    merged.push(temp[i] + temp[i+1]);
                    i++;
                } else {
                    merged.push(temp[i]);
                }
            }

            for(let i = 0; i < this.size; i++){
                if(i >= merged.length)
                    merged.push(0);
            }
            return merged;
        },

        updateScore: function (score){
            this.score += score;
            this.highScore = Math.max(this.highScore, this.score);
        },

        getRows: function(){
            let rows = [];
            for(let i = 0; i < this.size; i++){
                let row = [];
                for(let j = 0; j < this.size; j++){
                    row.push(this.grid[i][j].value);
                }
                rows.push(row);
            }
            return rows;
        },

        getColumns: function(){
            let columns = [];
            for(let i = 0; i < this.size; i++){
                let col = [];
                for(let j = 0; j < this.size; j++){
                    col.push(this.grid[j][i].value);
                }
                columns.push(col);
            }
            return columns;
        },

        isGameLost: function(){
            let rows = this.getRows();
            let cols = this.getColumns();
            let endGame = true;

            rows.forEach(row => {
                let mergedRow = this.merge(row, true);
                for(let i = 0; i < row.length; i++){
                    if(row[i] !== mergedRow[i] || row[i] === 0) {
                        endGame = false;
                        break;
                    }
                }
            });

            cols.forEach(col => {
                let mergedCol = this.merge(col, true);
                for(let i = 0; i < col.length; i++){
                    if(col[i] !== mergedCol[i] || col[i] === 0) {
                        endGame = false;
                        break;
                    }
                }
            });

            if(endGame){
                setPlayer();
                getData();
            }
            this.gameLost = endGame;
        },

        isGameWon: function(){
            this.grid.flat().forEach(cell => {
                if(cell.value === 2048) {
                    setPlayer();
                    getData();
                    this.gameWon = true;
                }
            });
        },

        moveLeftOrRight: function(key){
            let hasMoved = false;
            this.grid.forEach(row => {
                let values = []
                let merged = [];

                switch(key){
                    case 'ArrowLeft':
                        values = row.map(cell => cell.value);
                        merged = this.merge(values, false);
                        for(let i = 0; i < values.length; i++){
                            if(values[i] !== merged[i])
                                hasMoved = true;
                        }
                        break;
                    case 'ArrowRight':
                        values = row.map(cell => cell.value).reverse();
                        merged = this.merge(values, false).reverse()
                        let i = 0;
                        let j = merged.length - 1;
                        while(i < values.length){
                            if(values[j] !== merged[i])
                                hasMoved = true;
                            i++;
                            j--;
                        }
                        break;
                    default:
                        throw 'Invalid Key';
                }

                merged.forEach((cell, i) => {
                    row[i].value = cell;
                    cell ? row[i].class = `cell-${cell}` : row[i].class = 'cell-0';
                });
            });
            return hasMoved;
        },

        moveUpOrDown: function(key) {
            let hasMoved = false;
            for (let i = 0; i < this.size; i++) {
                let values = [];
                for (let j = 0; j < this.size; j++) {
                    values.push(this.grid[j][i].value);
                }
                let merged = [];
                switch(key) {
                    case 'ArrowUp':
                        merged = this.merge(values, false);
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] !== merged[i])
                                hasMoved = true;
                        }
                        break;
                    case 'ArrowDown':
                        merged = this.merge(values.reverse(), false);
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] !== merged[i])
                                hasMoved = true;
                        }
                        merged = merged.reverse();
                        break;
                    default:
                        throw 'Invalid Key';
                }

                merged.forEach((cell, j) => {
                    this.grid[j][i].value = cell;
                    cell ? this.grid[j][i].class = `cell-${cell}` : this.grid[j][i].class = 'cell-0';
                });
            }
            return hasMoved;
        },

        keyListener: function(e){
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowRight':
                    if (this.moveLeftOrRight(e.key)) {
                        this.addRandomCell();
                        this.isGameLost();
                        this.isGameWon();
                    }
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                    if (this.moveUpOrDown(e.key)) {
                        this.addRandomCell();
                        this.isGameLost();
                        this.isGameWon();
                    }
                    break;
                default:
                    throw 'Invalid Key';
            }
        }
    }
});

window.addEventListener('keydown', function(e) {
    if(!game.gameLost && !game.gameWon)
        game.keyListener(e);
});