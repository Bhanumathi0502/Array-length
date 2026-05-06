let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";
text=text.toLowerCase();
text=text.replaceAll(',','');
text=text.replaceAll('.','');
let str=text.split(" ");
let count=str.reduce(myfunction,{});
function myfunction(a,b)
{
   a[b]=(a[b] || 0)+1;
   return a; 
}
let arr=Object.entries(count);
for(let i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i][1]<arr[j][1])
        {
             let temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
 
        }
    }
}
let details=[]
for(let i=0;i<3;i++)
{
    details.push(arr[i]);
}
 console.log(details)









