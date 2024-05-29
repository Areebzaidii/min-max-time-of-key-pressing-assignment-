var kyeAndPressTimming=[[0,2],[1,5],[0,9],[2,15]];
var min=kyeAndPressTimming[0];
var max=kyeAndPressTimming[0];
for(i=0;i<kyeAndPressTimming.length;i++){
   var diff=(kyeAndPressTimming[i][1]);
   if(diff<min[1]){
       min=kyeAndPressTimming[i]
   }
  if(diff>max[1]){
   max=kyeAndPressTimming[i]
  }
}
console.log("MAX time:"+max)
console.log("MIN time:"+min)
