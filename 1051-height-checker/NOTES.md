```
const heightChecker = (heights) => {
    const sorted = [...heights].sort((a,b) => a-b)
    return heights.reduce((total,_,index) =>  sorted[index] !== heights[index] ? total + 1 : total,0)
}
```
