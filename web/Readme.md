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
align-items: center  --> Vertical center.
align-items:flex-start  --> Top.
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



Perfect Center ⭐⭐⭐⭐⭐
Interview me bahut pucha jata hai.

.container{
   display:flex;
   justify-content:center;
   align-items:center;
   height:100vh;
}
-->Element screen ke exact center me aa jayega.

🚀🚀 Top 5 Most Important 🚀🚀
display:flex;
justify-content:center;
justify-content:space-between;
align-items:center;
gap:20px;
flex-wrap:wrap;

-->Agar ye 5 concepts strong ho gaye, toh tum 80% frontend layouts (Navbar, Cards, Dashboard, Hero Section, Footer) bana sakte ho.

