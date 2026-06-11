Phase 3 — Layouts

• Display Property
• Positioning
• Z-index

-> Ye CSS ka sabse important part hai.
-> Professional UI, Navbar, Sidebar, Cards, Modals sab isi se bante hain

1. Display Property
   Display decide karta hai element page me kaise behave karega.

(a) block
Pure line occupy karta hai.

-> display: block;
Examples:

<div></div>
<h1></h1>
<p></p>
👉 Har element new line me aayega.

(b) inline
Sirf content jitni jagah lega.

-> display: inline;
Examples:
<span>Hello</span>
<a>Link</a>
👉 Width & Height kaam nahi karti.

(c) inline-block  
Inline bhi rahega aur width-height bhi kaam karegi.
-> display: inline-block;

(d) none
Element hide ho jayega.
display: none;
👉 Page se gayab.

⭐⭐⭐⭐ flex ⭐⭐⭐⭐⭐
Sabse important.
(e) display: flex;

Example:

<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

CSS
.container{
display: flex;
}

Result:
1 2 3

Flexbox Important Properties
justify-content
Horizontal alignment
⭐justify-content: center;

justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

⭐align-items
Vertical alignment
align-items: center --> Vertical center.
align-items:flex-start --> Top.
align-items:flex-end --> Bottom.

⭐ gap
Items ke beech spacing
gap: 20px;

2. Positioning ⭐⭐⭐
   Position decide karta hai element kaha dikhega.

static
Default position
position: static;

⭐⭐⭐ relative ⭐⭐⭐
Apni current position ke relative move hota hai.
position: relative;
top: 20px;
left: 30px;

Example:
.box{
position: relative;
left: 50px;
}

👉 Original jagah se 50px right.

absolute ⭐⭐⭐⭐⭐
Parent ke according position set karta hai.
position: absolute;

Example:
.parent{
position: relative;
}

.child{
position: absolute;
top: 0;
right: 0;
}
👉 Child parent ke top-right me chala jayega.

fixed ⭐⭐⭐⭐⭐
Screen ke according fixed rehta hai.
position: fixed;

Example:
button{
position: fixed;
bottom: 20px;
right: 20px;
}
👉 Scroll karne par bhi wahi rahega.

Use:
Chat button , WhatsApp button , Back to Top button

sticky ⭐⭐⭐⭐
Scroll tak normal.
Ek point ke baad chipak jata hai.

position: sticky;
top: 0;

Use:
Navbar
Table Header

Position Properties
top
right
bottom
left

Example:-
position: absolute;
top: 10px;
right: 20px;

3. Z-Index ⭐⭐⭐
   Layers control karta hai.
   Higher z-index = upar dikhega.

Example:

.red{
z-index: 1;
}

.blue{
z-index: 2;
}

👉 Blue red ke upar dikhega.

Working Example
.red{
width:100px;
height:100px;
background:red;

position:absolute;
z-index:1;
}

.blue{
width:100px;
height:100px;
background:blue;

position:absolute;
left:50px;

z-index:2;
}

Result:
👉 Blue box red box ke upar.

⭐Interview Question
(Ques) z-index kaam kab karta hai?
-> Jab element me position ho:

position: relative;
position: absolute;
position: fixed;
position: sticky;

⭐⭐⭐Top Properties to Remember⭐⭐⭐

Display
display: block;
display: inline;
display: inline-block;
display: flex;
display: none;

Position
position: relative;
position: absolute;
position: fixed;
position: sticky;

Most Used in Real Projects 🚀
display: flex;
justify-content: center;
align-items: center;

position: relative;
position: absolute;
position: fixed;

z-index: 999;

gap: 20px;

4. flex-direction
   Items kis direction me jayenge.

-> row (default)
flex-direction:row;
1 2 3

-> flex-direction:column;
1
2
3

-> row-reverse
flex-direction:row-reverse;
3 2 1

-> column-reverse
flex-direction:column-reverse;
3
2
1

5. gap
   Items ke beech spacing.

.container{
display:flex;
gap:20px;
}
Result:
1 2 3
-> Modern CSS me margin se better.

6. flex-wrap⭐
   -> Items next line me ja sakte hain.

nowrap (default)
flex-wrap:nowrap;

-> Sab ek line me rehne ki koshish karenge.

⭐ wrap ⭐
flex-wrap:wrap;

Container chhota hua to items next line me chale jayenge.

Example:-
.container{
display:flex;
flex-wrap:wrap;
gap:20px;
}

⭐ Advanced Flexbox ⭐

⭐ flex-grow ⭐

-> Extra space consume karta hai.

.box{
flex-grow:1;
}

-> Sab equal width le lenge.

Example:-

.box1{
flex-grow:1;
}

.box2{
flex-grow:2;
}

Result:
-> Box2 Box1 se double width lega

⭐ flex-shrink ⭐

-> Container chhota hone par shrink hone ka control.

flex-shrink:0;

-> Shrink nahi hoga.

⭐ flex-basis ⭐

Initial size.

flex-basis:200px;
align-self

-> Single item ki alignment.

align-self:center;

-> Sirf ek item center hoga.

Perfect Center ⭐⭐⭐⭐⭐
-> Interview me bahut pucha jata hai.

.container{
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}
--> Element screen ke exact center me aa jayega.

🚀🚀 Top 5 Most Important 🚀🚀
display:flex;
justify-content:center;
justify-content:space-between;
align-items:center;
gap:20px;
flex-wrap:wrap;

--> Agar ye 5 concepts strong ho gaye, toh tum 80% frontend layouts (Navbar, Cards, Dashboard, Hero Section, Footer) bana sakte ho.

⭐⭐⭐⭐⭐ Phase 6 — Responsive Design 📱💻
-> Responsive Design ka matlab:

👉 Website har device par sahi dikhe

Mobile
Tablet
Laptop
Desktop

Aaj ke time me responsive design mandatory hai.

1. Media Queries ⭐⭐⭐⭐⭐

-> Screen size ke hisab se CSS apply karne ke liye use hota hai.

Syntax:

@media (max-width:768px){

}

Matlab:
👉 Agar screen width 768px ya usse kam hai to ye CSS chalegi.


Example
h1{
   font-size:40px;
}

@media (max-width:768px){

   h1{
      font-size:24px;
   }
}

Desktop:
40px

Mobile:
24px

⭐⭐⭐ Common Breakpoints ⭐⭐⭐
->Mobile
@media (max-width:480px)
->Tablet
@media (max-width:768px)
->Laptop
@media (max-width:1024px)

2. Responsive Layouts⭐⭐⭐
Wrong Way ❌
.card{
   width:500px;
}

-> Mobile me toot sakta hai.

Better Way ✅
.card{
   width:100%;
   max-width:500px;
}

Responsive Images⭐⭐

❌
img{
   width:500px;
}

✅
img{
   width:100%;
   height:auto;
}
Image har screen me fit rahegi

⭐⭐ Responsive Container ⭐⭐
.container{
   width:90%;
   margin:auto;
}

-> Ye bahut common hai.

3. Mobile Friendly Design
Desktop Layout
.container{
   display:flex;
   gap:20px;
}

Desktop:

Card1  Card2  Card3


⭐⭐Mobile Layout⭐⭐
@media (max-width:768px){

   .container{
      flex-direction:column;
   }
}

Mobile:
Card1
Card2
Card3

⭐⭐Responsive Navbar Example⭐⭐

Desktop:

.navbar{
   display:flex;
   justify-content:space-between;
}

Mobile:

@media (max-width:768px){

   .navbar{
      flex-direction:column;
   }
}

⭐ Mobile First Approach ⭐⭐

Professional developers pehle mobile banate hain.

Example:

.card{
   width:100%;
}

Fir desktop:

@media (min-width:768px){

   .card{
      width:300px;
   }
}

⭐⭐ Useful Responsive Units ⭐⭐
%
width:100%;
Parent ke according.

⭐⭐ vw ⭐⭐
width:50vw;
Screen width ka 50%.

⭐⭐ vh ⭐⭐
height:100vh;
Full screen height.

⭐⭐ rem ⭐⭐
font-size:1.2rem;
Responsive typography ke liye best.


⭐⭐ Responsive Card Example ⭐⭐
HTML
<div class="card">
   Responsive Card
</div>

CSS
.card{
   width:100%;
   max-width:400px;

   padding:20px;
   background:white;
}

@media (max-width:768px){

   .card{
      max-width:100%;
   }
}

⭐⭐ Responsive Flexbox Example ⭐⭐
.container{
   display:flex;
   gap:20px;
}

@media (max-width:768px){

   .container{
      flex-direction:column;
   }
}

⭐⭐ Most Used Media Query ⭐⭐
@media (max-width:768px){

   .container{
      flex-direction:column;
   }
}

⭐⭐ Responsive Design Cheat Sheet ⭐⭐
/* Mobile */
@media (max-width:480px)

/* Tablet */
@media (max-width:768px)

/* Laptop */
@media (max-width:1024px)

width:100%;

max-width:1200px;

height:auto;

flex-direction:column;

img{
   width:100%;
}

.container{
   width:90%;
   margin:auto;
}

Top 5 Most Important 🚀
@media (max-width:768px)

width:100%;
max-width:500px;

img{
   width:100%;
   height:auto;
}

flex-direction:column;


⭐⭐ Phase 7 — Animations & Effects 🎨✨

Animation website ko interactive aur modern banati hai.

Is phase me 3 cheezein sabse important hain:

1. Transitions
2. Transforms
3. Keyframe Animations

1. Transitions ⭐⭐⭐⭐⭐

-> Property change ko smooth banata hai.

Without transition:

button:hover{
   background:red;
}

-> Color instantly change hoga

⭐ With transition:

button{
   transition: all 0.3s ease;
}

-> Smooth animation aayega.

⭐ Syntax ⭐
=> transition: property duration timing-function;

⭐Example:

=> transition: all 0.3s ease;

2. Transforms ⭐⭐⭐⭐⭐

-> Element ka shape, size, position ya rotation change karta hai.

⭐ Scale
transform: scale(1.1);
-> Zoom effect.

⭐ TranslateX
transform: translateX(20px);

Right moveTranslateX
transform: translateX(20px);

-> Right move

⭐ TranslateY
transform: translateY(-10px);
-> Up move.

⭐ Rotate
transform: rotate(45deg);
-> Rotate.

⭐ Skew
transform: skew(20deg);
-> Tilt.

⭐⭐ Multiple Transforms ⭐⭐
transform: translateY(-5px) scale(1.05);
-> Lift + Zoom.

⭐ Professional Hover Example ⭐
button{
   transition: all 0.3s ease;
}

button:hover{
   transform: translateY(-5px) scale(1.05);
}

3. ⭐⭐⭐⭐⭐ Keyframe Animations ⭐⭐⭐⭐⭐

-> Automatic animation ke liye use hota hai.

⭐ Basic Syntax ⭐
@keyframes move{

}


⭐⭐ Example 1: Move Box ⭐⭐
@keyframes move{

   from{
      transform: translateX(0);
   }

   to{
      transform: translateX(200px);
   }

}

Apply:
.box{
   animation: move 2s;
}

⭐⭐ Example 2: Infinite Animation ⭐⭐
.box{
   animation: move 2s infinite;
}

-> Bar bar chalega.

⭐⭐ Example 3: Loading Effect ⭐⭐
@keyframes pulse{

   0%{
      transform: scale(1);
   }

   50%{
      transform: scale(1.2);
   }

   100%{
      transform: scale(1);
   }

}

Apply:
.box{
   animation: pulse 1s infinite;
}


⭐⭐ Example 4: Fade In ⭐⭐
@keyframes fadeIn{

   from{
      opacity:0;
   }

   to{
      opacity:1;
   }
}

Apply:
.card{
   animation: fadeIn 1s;
}


⭐⭐ Example 5: Bounce Effect ⭐⭐
@keyframes bounce{

   0%{
      transform: translateY(0);
   }

   50%{
      transform: translateY(-20px);
   }

   100%{
      transform: translateY(0);
   }
}

Apply:
.box{
   animation: bounce 1s infinite;
}


⭐⭐ Animation Properties ⭐⭐
⭐Duration
animation-duration: 2s;

⭐Delay
animation-delay: 1s;

⭐Iteration Count
animation-iteration-count: infinite;

⭐Direction
animation-direction: alternate;
Forward + Backward.

⭐Timing Function
animation-timing-function: ease;

⭐⭐ Shortcut ⭐⭐
animation: bounce 1s ease infinite;

⭐ Format: ⭐
animation:
name
duration
timing-function
iteration-count;


⭐ Most Used Animations in Real Projects ⭐
⭐Fade In
animation: fadeIn 0.5s ease;

⭐Lift Hover
transform: translateY(-5px);

⭐Zoom Hover
transform: scale(1.05);

⭐Pulse
animation: pulse 1s infinite;

⭐Bounce
animation: bounce 1s infinite;

⭐⭐ Animation Cheat Sheet 🚀

/* Transition */
transition: all 0.3s ease;

/* Transform */
transform: scale(1.05);
transform: translateY(-5px);
transform: translateX(20px);
transform: rotate(45deg);
transform: skew(20deg);

/* Animation */
animation: fadeIn 1s ease;
animation: bounce 1s infinite;
animation: pulse 1s infinite;

/* Keyframes */
@keyframes fadeIn{
   from{opacity:0;}
   to{opacity:1;}
}

⭐⭐ Top 5 Most Important ⭐⭐
transition: all 0.3s ease;

transform: translateY(-5px);

transform: scale(1.05);

animation: fadeIn 0.5s ease;

animation: bounce 1s infinite;

-> Agar Transition + Transform + Keyframes aa gaye, toh tum modern buttons, cards, loaders, hero sections, modals aur landing pages me professional animations laga sakte ho. 🚀✨
