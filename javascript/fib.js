curr = 0;
prev = 1;
preprev = 1;

for(i=0; i<=98; ++i){
    curr = preprev + prev;
    preprev = prev; 
    prev = curr;
    console.log(`${i+2}th value is ${curr}`); 
}
