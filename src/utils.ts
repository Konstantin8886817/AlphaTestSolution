//get on any array
const getValue = (arr:boolean[], x: number, y: number, size: number): boolean => {
    return arr[x * size + y];
}
//set on any array
const setValue = (arr:boolean[], x: number, y: number, value: boolean, size:number):void => {
    arr[x * size + y] = value;
}

//Generate random array.
export const reset = (size:number): boolean[] => {
    let arr = new Array<boolean>(size);
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            setValue(arr, x, y, Math.random() >= 0.5, size);
        }
    }
    return arr;
}

export const clearArr = (size: number):boolean[] => {
    let arr:boolean[] = new Array<boolean>(size*size);
    for(let i=0;i<arr.length;i++){
        arr[i] = false;
    }
    return arr;
}

//Main function for generate nex array
export const next = (current:boolean[],size:number) => {
    let result: boolean[] = new Array<boolean>(size);
    let count = 0;    
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            count = 0;

            //Count the live cells in the next row
            if ((x + 1) < size) {
                if (getValue(current, x + 1, y,size)) {
                    count++;
                }
                if ((y + 1 < size) && getValue(current, x + 1, y + 1,size)) {
                    count++;
                }
                if ((y - 1 >= 0) && getValue(current, x + 1, y - 1,size)) {
                    count++;
                }
            }

            //Count the live cells in the previous row
            if ((x - 1) >= 0) {
                if (getValue(current, x - 1, y,size)) {
                    count++;
                }
                if ((y + 1 < size) && getValue(current, x - 1, y + 1,size)) {
                    count++;
                }
                if ((y - 1 >= 0) && getValue(current, x - 1, y - 1,size)) {
                    count++;
                }
            }

            //Count the live cells in the current row exlcuding the current position.
            if ((y - 1 >= 0) && getValue(current, x, y - 1,size)) {
                count++;
            }
            if ((y + 1 < size) && getValue(current, x, y + 1,size)) {
                count++;
            }

            // Toggle live / dead cells based on the neighbour count.
            switch (count) {
                case 0: setValue(result, x, y, false,size); break; //Any live cell with fewer than two live neighbours dies (underpopulation).
                case 1: setValue(result, x, y, false,size); break; //Any live cell with two or three live neighbours lives on to the next generation.
                case 2: setValue(result, x, y, getValue(current, x, y, size),size); break; //Any live cell with more than three live neighbours dies (overcrowding).
                case 3: setValue(result, x, y, true,size); break; //Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
                default: setValue(result, x, y, false,size); break;//Any other case
            }
        }
    }
    return result;
}


//For test
export const test1 = ():boolean[] => {
    let arr = [
        0,0,0,0,
        0,1,1,0,
        0,1,1,0,
        0,0,0,0
    ]
    return arr.map(v => v === 1);
}

export const test2 = ():boolean[] => {
    let arr = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,1,1,1,0,
        0,0,0,0,0,
        0,0,0,0,0
    ]
    return arr.map(v => v === 1);
}

export const test3 = (): boolean[] => {
    let arr = [
        0,0,0,0,0,
        0,0,1,0,0,
        0,0,0,1,0,
        0,1,1,1,0,
        0,0,0,0,0
    ]
    return arr.map(v => v === 1);
}



export const test4 = ():boolean[] => {
    let arr = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,
        0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,
        0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,
        0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,
        0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,
        0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,
        0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]

    return arr.map(v => v === 1);
}
