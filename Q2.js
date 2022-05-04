
function twoSum(args,total){
    let obj =[];
    let a=args.length;


    for (let i = 0; i < a; i++) {
         for (let j = 0; j < a; j++) {
            for (let k = 0; k < a; j++) {
                if (args[i]+args[j]+args[k]===total) {
                    if(args[i]+args[j]==total){
                        obj.push([args[i],args[j],args[k]])
                    }    
                }
            }    
        }
    }
};
    // console.log(twoSum(obj)

twoSum([10, 5, 12, 13, 18, 15],30);





// const sum =(nums,target)=>{
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }            
//         }
        
//     }
// };

// console.log(sum(nums,target));

