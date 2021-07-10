var SCORE=0;
var temp=0;
var str="box";
var items=[];
var newele=[2,4];
var color=['#EEE4DA','#EEE4C9','#f3b27a','f69664','#f77c5f','#f75f3b','#F3D783','#f5cb4d','#f5b906','hsl(30deg 96% 44%)','hsl(0deg 100% 50%)'];
function getindex(value){
   if(value==2)
      return 0;
   else if(value==4){
      return 1;
   }else if(value==8){
      return 2;
   }else if(value==16){
      return 3;
   }else if(value==32){
      return 4;
   }else if(value==64){
      return 5;
   }else if(value==128){
      return 6;
   }else if(value==256){
      return 7;
   }else if(value==512){
      return 8;
   }else if(value==1024){
      return 9;
   }else if(value==2048){
      return 10;
   }
}
function random_item(items){
   return items[Math.floor(Math.random()*items.length)];  
}
function check(){
      for(i=16;i>=1;i=i-4){
         for(j=i;j>i-4;j--){
            var myInnerHtml = document.getElementById(str+j);
            if(myInnerHtml.innerHTML==''){
               return;
            }else if(j==i){
               continue;
            }else{
               temp=j;
               while(temp<i){
                  var x=temp+1;
                  var myInnerHtml = document.getElementById(str+temp);
                  var res=str.concat(x);
                  var myInnerHtml1 = document.getElementById(res);
                  if(myInnerHtml1.innerHTML==''){
                     return;
                  }
                  else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
                     return;
                  }
                  temp++;
               }
            }
         }
      }
      for(i=1;i<=16;i++){
         var myInnerHtml = document.getElementById(str+i);
         if(myInnerHtml.innerHTML==''){
            return;
         }else if(i-4<1){
            continue;
         }else{
            temp=i;
            while(temp-4>=1){
               j=temp-4;
               var myInnerHtml = document.getElementById(str+temp);
               var res=str.concat(j);
               var myInnerHtml1 = document.getElementById(res);
               if(myInnerHtml1.innerHTML==''){
                  return;
               }
               else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
                  return;
               }
               temp-=4;
            }
         }
      }
      for(i=1;i<=16;i=i+4){
         for(j=i;j<i+4;j++){
            var myInnerHtml = document.getElementById(str+j);
            if(myInnerHtml.innerHTML==''){
             return;
            }else if(j==i){
               continue;
            }else{
               temp=j;
               while(temp>i){
                  var x=temp-1;
                  var myInnerHtml = document.getElementById(str+temp);
                  var res=str.concat(x);
                  var myInnerHtml1 = document.getElementById(res);
                  if(myInnerHtml1.innerHTML==''){
                  return;
                  }
                  else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
                     return;
                  }
                  temp--;
               }
            }
         }
      }
      for(i=16;i>0;i--){
         var myInnerHtml = document.getElementById(str+i);
         if(myInnerHtml.innerHTML==''){
            return;
         }else if(i+4>16){
            continue;
         }else{
            temp=i;
            while(temp+4<=16){
               j=temp+4;
               var myInnerHtml = document.getElementById(str+temp);
               var res=str.concat(j);
               var myInnerHtml1 = document.getElementById(res);
               if(myInnerHtml1.innerHTML==''){
                  return;
               }
               else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
                  return;
               }else{
                  break;
               }
               temp+=4;
            }
         }
      }
      setTimeout(function () {
         var box=document.getElementById('game_box');
         box.style.visibility="visible";
         var box1=document.getElementById('outer_box');
         box1.style.backgroundColor="rgb(236 232 229)";
         for(i=1;i<=16;i++)
            document.getElementById('box'+i).style.color='rgba(170, 159, 159, 0.788)';
      }, 500);
}
function fillitem(){
   items=[];
   for(i=1;i<=16;i++){
      var myInnerHtml = document.getElementById(str+i).innerHTML;
      if(myInnerHtml==''){
         items.push(i);
      }
   }
}
var score=document.getElementById('score1');
function cleardefault(){
   for(i=1;i<=16;i++){
      var box=document.getElementById(str+i);
      box.innerHTML='';
      box.style.backgroundColor='rgba(245, 242, 239, 0.35)';
   }
}
function setdefault() {
   var box=document.getElementById('game_box');
   box.style.visibility="hidden";
   var box1=document.getElementById('outer_box');
   box1.style.backgroundColor="#8f7d6a";
   for(i=1;i<=16;i++){
      document.getElementById('box'+i).style.color='rgb(70, 57, 57)';
   }
   cleardefault();
   SCORE=0;
   score.innerHTML=SCORE;
   for(j=0;j<2;j++){
      fillitem();
      temp=random_item(items);
      var res = str.concat(temp);
      var box=document.getElementById(res)
      box.innerHTML='2';
      box.style.animation = "fade-in 1.2s";
      setTimeout(function () {
         box.style.animation ='';
      }, 500);
      box.style.backgroundColor='#EEE4DA';
   }
}
setdefault();
function keyright(){
   let flag=0;
   let flag1=0;
   for(i=16;i>=1;i=i-4){
      for(j=i;j>i-4;j--){
         var myInnerHtml = document.getElementById(str+j);
         if(myInnerHtml.innerHTML==''){
            flag1++;
            continue;
         }else if(j==i){
            continue;
         }else{
            temp=j;
            while(temp<i){
               var x=temp+1;
               var myInnerHtml = document.getElementById(str+temp);
               var res=str.concat(x);
               var myInnerHtml1 = document.getElementById(res);
               if(myInnerHtml1.innerHTML==''){
                  flag++;
                  flag1++;
                  myInnerHtml1.innerHTML=myInnerHtml.innerHTML;
                  var index=getindex(myInnerHtml1.innerHTML);
                  myInnerHtml1.style.backgroundColor=color[index];
                  myInnerHtml.innerHTML='';
                  myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
               }
               else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
                  flag++;
                  flag1++;
                  var x=parseInt(myInnerHtml1.innerHTML);
                  var y=parseInt(myInnerHtml.innerHTML);
                  SCORE+=x+y;
                  if(x+y==2048){
                     window.alert('You won the Game Press OK to keep Playing');
                  }
                  score.innerHTML=SCORE;
                  myInnerHtml1.innerHTML=x+y;
                  myInnerHtml.innerHTML='';
                  myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
                  var index=getindex(myInnerHtml1.innerHTML);
                  myInnerHtml1.style.backgroundColor=color[index];
               }else{
                  break;
               }
               temp++;
            }
         }
      }
   }
   if(flag>0){
      fillitem();
      temp=random_item(items);
      var res = str.concat(temp);
      var box=document.getElementById(res);
      temp=random_item(newele);
      box.innerHTML=temp;
      box.style.animation = "fade-in 1.2s";
      setTimeout(function () {
         box.style.animation ='';
      }, 500);
      var index=getindex(temp);
      box.style.backgroundColor=color[index];
   }else if(flag1==0){
      check(); 
   }
}
function keyup(){
   let flag=0;
   let flag1=0;
   for(i=1;i<=16;i++){
      var myInnerHtml = document.getElementById(str+i);
      if(myInnerHtml.innerHTML==''){
         flag1++;
         continue;
      }else if(i-4<1){
         continue;
      }else{
         temp=i;
         while(temp-4>=1){
            j=temp-4;
            var myInnerHtml = document.getElementById(str+temp);
            var res=str.concat(j);
            var myInnerHtml1 = document.getElementById(res);
            if(myInnerHtml1.innerHTML==''){
               flag++;
               flag1++;
               myInnerHtml1.innerHTML=myInnerHtml.innerHTML;
               var index=getindex(myInnerHtml1.innerHTML);
               myInnerHtml1.style.backgroundColor=color[index];
               myInnerHtml.innerHTML='';
               myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
            }
            else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
               flag++;
               flag1++;
               var x=parseInt(myInnerHtml1.innerHTML);
               var y=parseInt(myInnerHtml.innerHTML);
               SCORE+=x+y;
               if(x+y==2048){
                  window.alert('You won the Game Press OK to keep Playing');
               }
               score.innerHTML=SCORE;
               myInnerHtml1.innerHTML=x+y;
               myInnerHtml.innerHTML='';
               myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
               var index=getindex(myInnerHtml1.innerHTML);
               myInnerHtml1.style.backgroundColor=color[index];
            }else{
               break;
            }
            temp-=4;
         }
      }
   }
   if(flag>0){
      fillitem();
      temp=random_item(items);
      var res = str.concat(temp);
      var box=document.getElementById(res);
      temp=random_item(newele);
      box.innerHTML=temp;
      box.style.animation = "fade-in 1.2s";
      setTimeout(function () {
         box.style.animation ='';
      }, 500);
      var index=getindex(temp);
      box.style.backgroundColor=color[index];
   }else if(flag1==0){
      check();
   }
}
function keyleft(){
   let flag=0;
   let flag1=0;
   for(i=1;i<=16;i=i+4){
      for(j=i;j<i+4;j++){
         var myInnerHtml = document.getElementById(str+j);
         if(myInnerHtml.innerHTML==''){
            flag1++;
            continue;
         }else if(j==i){
            continue;
         }else{
            temp=j;
            while(temp>i){
               var x=temp-1;
               var myInnerHtml = document.getElementById(str+temp);
               var res=str.concat(x);
               var myInnerHtml1 = document.getElementById(res);
               if(myInnerHtml1.innerHTML==''){
                  flag++;
                  flag1++;
                  myInnerHtml1.innerHTML=myInnerHtml.innerHTML;
                  var index=getindex(myInnerHtml1.innerHTML);
                  myInnerHtml1.style.backgroundColor=color[index];
                  myInnerHtml.innerHTML='';
                  myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
               }
               else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
                  flag++;
                  flag1++;
                  var x=parseInt(myInnerHtml1.innerHTML);
                  var y=parseInt(myInnerHtml.innerHTML);
                  SCORE+=x+y;
                  if(x+y==2048){
                     window.alert('You won the Game Press OK to keep Playing');
                  }
                  score.innerHTML=SCORE;
                  myInnerHtml1.innerHTML=x+y;
                  myInnerHtml.innerHTML='';
                  myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
                  var index=getindex(myInnerHtml1.innerHTML);
                  myInnerHtml1.style.backgroundColor=color[index];
               }else{
                  break;
               }
               temp--;
            }
         }
      }
   }
   if(flag>0){
      fillitem();
      temp=random_item(items);
      var res = str.concat(temp);
      var box=document.getElementById(res);
      temp=random_item(newele);
      box.innerHTML=temp;
      box.style.animation = "fade-in 1.2s";
      setTimeout(function () {
         box.style.animation ='';
      }, 500);
      var index=getindex(temp);
      box.style.backgroundColor=color[index];
   }else if(flag1==0){
      check();
   }
}
function keydown2(){
   let flag=0;
   let flag1=0;
   for(i=16;i>0;i--){
      var myInnerHtml = document.getElementById(str+i);
      if(myInnerHtml.innerHTML==''){
         flag1++;
         continue;
      }else if(i+4>16){
         continue;
      }else{
         temp=i;
         while(temp+4<=16){
            j=temp+4;
            var myInnerHtml = document.getElementById(str+temp);
            var res=str.concat(j);
            var myInnerHtml1 = document.getElementById(res);
            if(myInnerHtml1.innerHTML==''){
               flag++;
               flag1++;
               myInnerHtml1.innerHTML=myInnerHtml.innerHTML;
               var index=getindex(myInnerHtml1.innerHTML);
               myInnerHtml1.style.backgroundColor=color[index];
               myInnerHtml.innerHTML='';
               myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
            }
            else if(myInnerHtml1.innerHTML==myInnerHtml.innerHTML){
               flag++;
               flag1++;
               var x=parseInt(myInnerHtml1.innerHTML);
               var y=parseInt(myInnerHtml.innerHTML);
               SCORE+=x+y;
               if(x+y==2048){
                  window.alert('You won the Game Press OK to keep Playing');
               }
               score.innerHTML=SCORE;
               myInnerHtml1.innerHTML=x+y;
               myInnerHtml.innerHTML='';
               myInnerHtml.style.backgroundColor='rgba(245, 242, 239, 0.35)';
               var index=getindex(myInnerHtml1.innerHTML);
               myInnerHtml1.style.backgroundColor=color[index];
            }else{
               break;
            }
            temp+=4;
         }
      }
   }
   if(flag>0){
      fillitem();
      temp=random_item(items);
      var res = str.concat(temp);
      var box=document.getElementById(res);
      temp=random_item(newele);
      box.innerHTML=temp;
      box.style.animation = "fade-in 1.2s";
      setTimeout(function () {
         box.style.animation ='';
      }, 500);
      var index=getindex(temp);
      box.style.backgroundColor=color[index];
   }else if(flag1==0){
      check();
   }
}
document.onkeydown = function(event) {
   switch (event.keyCode) {
      case 37:
           event.preventDefault();
           keyleft();
         break;
      case 38:
         event.preventDefault();
         keyup();
         break;
      case 39:
         event.preventDefault();
         keyright();
         break;
      case 40:
         event.preventDefault();
         keydown2();
         break;
   }
};

var container = document.querySelector("body");
container.addEventListener("touchstart", startTouch, { passive: false });
container.addEventListener("touchmove", moveTouch, { passive: false });
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
function startTouch(e) {
   initialX = e.touches[0].clientX;
   initialY = e.touches[0].clientY;
};
function moveTouch(e) {
   e.preventDefault();
   if (initialX === null) {
      return;
   }
   if (initialY === null) {
      return;
   }
   var currentX = e.touches[0].clientX;
   var currentY = e.touches[0].clientY;
   var diffX = initialX - currentX;
   var diffY = initialY - currentY;
   if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
         // swiped left
         keyleft();
      } else {
         // swiped right
         keyright();
      }  
   } else {
      // sliding vertically
      if (diffY > 0) {
         // swiped up
         keyup();
      } else {
         // swiped down
         keydown2();
      }  
   }
   initialX = null;
   initialY = null;
};