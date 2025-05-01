const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*0.5;
canvas.height = window.innerHeight*0.93;

let  grid=new Array(81); 
const w = (canvas.width/9)*0.9;
const h = canvas.height/9;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isvalid =(index,num)=>{
 
//Row
let col = index%9;
let row = Math.floor(index / 9);
for(let i=0;i<9;i++){
    if(grid[i+row*9]==num){
        return false;
    }
}

//check if the number is in the col

for(let i=0;i<9;i++){
    if(grid[i*9+col]==num ){
        return false;
    }
}

//check for the 3d*3d array 

const startRow = (row%3==0)?row:row-(row%3);
const startCol = (col%3==0)?col:col-(col%3);
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let idx = (startRow + i) * 9 + (startCol + j);
        if (grid[idx] == num) return false;
    }
}
return true;
}



// const initialize =(num)=>{
//   for(let i =0;i<81;i++) grid[i] =0;
//   let count =0;
//   let randomIndex;
//   let randomNum;
//   while (count<num){ 
//      randomIndex = Math.floor(Math.random() * 81);  
//      randomNum = Math.floor(Math.random() * 9) + 1; 
    
//       if((grid[randomIndex] === 0)&&(isvalid(randomIndex,randomNum))){
//           grid[randomIndex] = randomNum;
//           count++;
//           console.log(`array at ${randomIndex} is: ${grid[randomIndex]}`)
//   }
 
// }
// }

const drawLines =()=>{
    let x=0;
    let y=0;
    
    
    for(let k=0;k<10;k++){
        ctx.beginPath();
        if(k%3==0){
            ctx.strokeStyle = 'red';
            ctx.lineWidth =4;
        }else{
            ctx.strokeStyle = 'black';
            ctx.lineWidth =2;
        }
    
      ctx.moveTo(x,y);
      ctx.lineTo(canvas.width*0.9,y);
      ctx.stroke()
      y+=h;
    }
     y=0;x=0;
    for(let k=0;k<10;k++){
        ctx.beginPath();
        if(k%3==0){
            ctx.strokeStyle = 'red';
            ctx.lineWidth =4;
        }else{
            ctx.strokeStyle = 'black';
            ctx.lineWidth =2;
        }
        ctx.moveTo(x,y);
        ctx.lineTo(x,canvas.height);
        ctx.stroke()
    
        x+=w;
        
      }
    
}

//setup and draw canvas 
const setupCanvas = () => { 
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (let i = 0; i < 9; i++) {
     for (let j = 0; j < 9; j++) {
          ctx.beginPath();
          ctx.fillStyle = 'white';
          ctx.rect(i*w,j*h,w,h);
          ctx.fill() 
        
          ctx.textAlign = 'center'; 
          ctx.textBaseline = 'middle';
          ctx.font = `${w * 0.4}px Arial`;
          ctx.fillStyle = 'black';
          const value = grid[j + i * 9] || ''; 
          ctx.fillText(value,i * w + w / 2, j * h + h / 2);
    }
        
    
}
drawLines();
}

 const backtrack =async (index)=>{
   if(index==81){
    return true ;
   }
   if (grid[index] !== 0) {
    return backtrack(index + 1);
  }
  
   for (let num = 1; num <= 9; num++) {
    if (isvalid(index, num)) {
        grid[index] = num;
        ctx.beginPath();
        ctx.fillStyle ="black";
        ctx.textAlign = 'center'; 
        ctx.textBaseline = 'middle';
        ctx.font = `${w * 0.4}px Arial`;
        let col = index%9;
        let row =  Math.floor(index / 9);
        ctx.fillText(grid[index], row * w + w / 2, col * h + h / 2);

        drawLines();
        await sleep(1); 
        if (await backtrack(index + 1)) return true;

        grid[index] = 0;  
        ctx.fillStyle = "white";
        ctx.fillRect(row * w, col * h, w, h); 
        drawLines(); 
        await sleep(1);
    }
 }
 return false;
 

   }
  
  
  
 
 
/**
 * 30<=>easy;
 * 20<=>meduim;
 * 10<=>hard
 */

// initialize(30); 
 
console.log(grid) ;
  grid = [
    5, 3, 0, 0, 7, 0, 0, 0, 0,
    6, 0, 0, 1, 9, 5, 0, 0, 0,
    0, 9, 8, 0, 0, 0, 0, 6, 0,
    8, 0, 0, 0, 6, 0, 0, 0, 3,
    4, 0, 0, 8, 0, 3, 0, 0, 1,
    7, 0, 0, 0, 2, 0, 0, 0, 6,
    0, 6, 0, 0, 0, 0, 2, 8, 0,
    0, 0, 0, 4, 1, 9, 0, 0, 5,
    0, 0, 0, 0, 8, 0, 0, 7, 9
  ];
  console.log(grid) ;
  
setupCanvas();  
(async () => {
    await backtrack(0);
  })();


 