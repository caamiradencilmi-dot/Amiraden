// 1. STYLE SECTION (CSS)
const style = document.createElement('style');
style.textContent = `
    body { font-family: 'Segoe UI', sans-serif; margin: 0; background: #4a14dd; color: #333; transition: 0.3s; }
    header { background: white; padding: 20px; text-align: center; border-bottom: 3px solid #a114e8; }
    nav { background: #1de40f; padding: 15px; display: flex; justify-content: center; gap: 20px; position: sticky; top: 0; z-index: 1000; }
    nav a { color: white; text-decoration: none; font-weight: bold; cursor: pointer; padding: 8px 12px; border-radius: 5px; }
    nav a:hover { background: rgba(255,255,255,0.3); }
    main { max-width: 900px; margin: 30px auto; padding: 20px; min-height: 80vh; }
    .kaadh { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 30px; position: relative; }
    .badge-tirada { background: #2943ef; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; position: absolute; top: 20px; right: 20px; }
    pre { background: #222; color: #bee81d; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 14px; position: relative; margin: 15px 0; white-space: pre-wrap; }
    .run-btn { background: #28a745; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; float: right; font-weight: bold; }
    .run-btn:hover { background: #218838; }
    .profile-img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #4b68e7; }
    .info-tag { display: inline-block; background: #eef2ff; color: #4b68e7; padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: bold; margin: 5px; }
    .contact-item { margin: 15px 0; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
    .about-links a { display: inline-block; color: #4b68e7; font-weight: bold; text-decoration: none; border: 2px solid #4b68e7; padding: 8px 15px; border-radius: 8px; margin: 5px; transition: 0.3s; }
    .about-links a:hover { background: #f71b1b; color: white; border-color: #f71b1b; }
    footer { background: #333; color: white; padding: 20px; text-align: center; margin-top: 40px; }
    .dark-mode { background: #1a1a1a !important; color: #f1f1f1 !important; }
`;
document.head.appendChild(style);

// 2. DATA SECTION (CHAPTERS)
const chapterData = [
    { 
        title: "Chapter 7: Objects", 
        count: 16,
        examples: [
            "// 1. Literal Object\nconst obj = {name:'Amiir aden', age:22};\nalert('Name: ' + obj.name);",
            "// 2. Square Brackets\nconst obj = {name:'Amiir'};\nalert(obj['name']);",
            "// 3. Add Property\nconst obj = {name:'Amiir'};\nobj.job='Dev';\nalert(obj.job);",
            "// 4. Update Property\nconst obj = {name:'Amiir', age:22};\nobj.age=26;\nalert(obj.age);",
            "// 5. Methods\nconst obj = {name:'Mohamed', hi: function(){return 'Hi '+this.name}};\nalert(obj.hi());",
            "// 6. Constructor Function\nfunction Person(n){this.name=n;}\nconst p=new Person('Amiir');\nalert(p.name);",
            "// 7. Prototype Method\nfunction P(n){this.name=n;}\nP.prototype.say=function(){return 'Yo '+this.name;};\nconst x=new P('Mohamed');\nalert(x.say());",
            "// 8. Class Syntax\nclass User{constructor(n){this.name=n;} show(){return this.name;}}\nconst u=new User('Mohamed');\nalert(u.show());",
            "// 9. For..in Loop\nconst obj={a:1, b:2, c:3};\nfor(let k in obj){ console.log(k+': '+obj[k]); }\nalert('Check Console!');",
            "// 10. Object.keys()\nconst obj={name:'Amiir', age:22};\nalert(Object.keys(obj));",
            "// 11. Object.values()\nconst obj={name:'Mohamed', age:22};\nalert(Object.values(obj));",
            "// 12. Object.entries()\nconst obj={name:'Amiir'};\nalert(JSON.stringify(Object.entries(obj)));",
            "// 13. Delete Property\nconst obj={name:'Amiir', x:50};\ndelete obj.x;\nalert(JSON.stringify(obj));",
            "// 14. hasOwnProperty\nconst obj={name:'Amiir'};\nalert(obj.hasOwnProperty('name'));",
            "// 15. JSON.parse()\nconst j='{\"user\":\"Amiir\"}';\nconst o=JSON.parse(j);\nalert(o.user);",
            "// 16. JSON.stringify()\nconst obj={user:'Mohamed'};\nalert(JSON.stringify(obj));"
        ]
    },
    { 
        title: "Chapter 8: DOM Manipulation",
        count: 20,
        examples: [
            "// 1. Change Background\ndocument.body.style.background='lightgreen';",
            "// 2. Change Title\ndocument.querySelector('h1').textContent='Amiir Portal';",
            "// 3. Create Element\nconst p=document.createElement('p'); p.textContent='Hello Mohamed'; document.body.appendChild(p);",
            "// 4. Hide Header\ndocument.querySelector('header').style.display='none';",
            "// 5. Toggle Dark Mode\ndocument.body.classList.toggle('dark-mode');",
            "// 6. Change Image Source\ndocument.querySelector('img').src = 'https://via.placeholder.com/150';",
            "// 7. Get Attribute\nalert(document.querySelector('nav a').textContent);",
            "// 8. Remove Element\nconst h=document.querySelector('h1'); if(h) h.style.color='red';",
            "// 9. InnerHTML Update\ndocument.querySelector('h1').innerHTML='<u>Updated with DOM</u>';",
            "// 10. Change Font Size\ndocument.body.style.fontSize='20px';",
            "// 11. Create List\nconst li=document.createElement('li'); li.textContent='New Task'; document.body.appendChild(li);",
            "// 12. Set Border Style\ndocument.body.style.border='5px solid gold';",
            "// 13. QueryAll Style\ndocument.querySelectorAll('nav a').forEach(a => a.style.color='black');",
            "// 14. Check Class\nalert('Is Dark Mode? ' + document.body.classList.contains('dark-mode'));",
            "// 15. Create Div\nconst d=document.createElement('div'); d.style.height='20px'; d.style.background='red'; document.body.appendChild(d);",
            "// 16. Replace Content\ndocument.querySelector('h1').innerText='Welcome to My Page';",
            "// 17. Scroll Smooth\nwindow.scrollTo({top: 0, behavior: 'smooth'});",
            "// 18. Offset Width\nalert('Main Width: ' + document.querySelector('main').offsetWidth + 'px');",
            "// 19. Insert Adjacent\ndocument.querySelector('nav').insertAdjacentHTML('afterend', '<marquee>Breaking News: DOM is Easy!</marquee>');",
            "// 20. Input Placeholder\nconst inp = document.querySelector('input'); if(inp) inp.placeholder='Search here...';"
        ]
    },
    { 
        title: "Chapter 9: Events",
        count: 20,
        examples: [
            "// 1. Click Event\ndocument.onclick=()=>alert('Document Clicked!');",
            "// 2. Prompt\nconst m=prompt('Muxuu yahay magacaagu?'); alert('Soo dhawaaw ' + m);",
            "// 3. Confirm\nconst c=confirm('Ma tirtirtaa xogta?'); alert(c);",
            "// 4. Double Click\ndocument.ondblclick=()=>alert('Double Click Success!');",
            "// 5. Keydown Event\ndocument.onkeydown=(e)=>alert('Waxaad riixday: ' + e.key);",
            "// 6. Mouse Over\ndocument.querySelector('header').onmouseover=()=>console.log('Header Hover!');",
            "// 7. Mouse Out\ndocument.querySelector('header').onmouseout=()=>console.log('Mouse Left Header');",
            "// 8. Window Load\nalert('Page is ready!');",
            "// 9. Scroll Track\nwindow.onscroll=()=>console.log('User is scrolling');",
            "// 10. Right Click Disable\nwindow.oncontextmenu=(e)=>{ e.preventDefault(); alert('Right click is restricted!'); };",
            "// 11. Focus Style\nconst inp=document.querySelector('input'); if(inp) inp.focus();",
            "// 12. Blur Event\nalert('Blur happens when you leave an input');",
            "// 13. Copy Alert\ndocument.oncopy=()=>alert('Copying is recorded!');",
            "// 14. Drag Start\ndocument.ondragstart=()=>console.log('Dragging started');",
            "// 15. Resize Window\nwindow.onresize=()=>console.log('Width: ' + window.innerWidth);",
            "// 16. Visibility Change\ndocument.onvisibilitychange=()=>console.log('Hidden: ' + document.hidden);",
            "// 17. Form Submit\nalert('Use e.preventDefault() to stop page reload');",
            "// 18. KeyUp Event\ndocument.onkeyup=(e)=>console.log('Released: ' + e.key);",
            "// 19. Online Status\nalert('Is Online: ' + navigator.onLine);",
            "// 20. Custom Click\ndocument.querySelector('nav').onclick=()=>alert('Nav Bar Clicked');"
        ]
    }
];

// 3. INTERFACE BUILDER (DOM)
const h = document.createElement("header"); 
h.innerHTML = "<h1>Amiir Aden Elmi</h1>"; 
document.body.appendChild(h);

const n = document.createElement("nav");
const menu = [
    {n:"HOME",i:"home"},
    {n:"CHAPTERS",i:"chapters"},
    {n:"ABOUT",i:"about"},
    {n:"CONTACT",i:"contact"}
];
menu.forEach(m => {
    const a = document.createElement("a"); 
    a.textContent=m.n; 
    a.onclick=()=>loadPage(m.i); 
    n.appendChild(a);
});
document.body.appendChild(n);

const mainArea = document.createElement("main"); 
document.body.appendChild(mainArea);

// 4. NAVIGATION LOGIC
function loadPage(page) {
    mainArea.innerHTML = "";
    if (page === "home") {
        mainArea.innerHTML = `
            <div class="kaadh" style="text-align:center;">
                <h1>Welcome to My Portal</h1>
                <p>Kani waa barashada JavaScript - Batch 15 (Class B)</p>
                <button class="run-btn" style="float:none;" onclick="loadPage('chapters')">Get Started</button>
            </div>`;
    } 
    else if (page === "chapters") {
        chapterData.forEach(ch => {
            const div = document.createElement("div"); 
            div.className = "kaadh";
            div.innerHTML = `<span class="badge-tirada">${ch.count} Examples</span><h2>${ch.title}</h2><hr>`;
            
            ch.examples.forEach(ex => {
                const pre = document.createElement("pre"); 
                pre.textContent = ex;
                const btn = document.createElement("button"); 
                btn.className="run-btn"; 
                btn.textContent="Run ▶";
                btn.onclick = () => { 
                    try { eval(ex); } catch(err) { alert("Error: " + err); } 
                };
                pre.prepend(btn); 
                div.appendChild(pre);
            });
            mainArea.appendChild(div);
        });
    }
    else if (page === "about") {
        mainArea.innerHTML = `
            <div class="kaadh" style="text-align: center;">
                <img src="amiir.png" class="profile-img" onerror="this.src='https://via.placeholder.com/150?text=Amiir'">
                <h2>Amiir Aden Elmi</h2>
                <div>
                    <span class="info-tag">Batch 15</span> 
                    <span class="info-tag">Class B</span>
                    <span class="info-tag">ID: CS1501176</span>
                </div>
                <p style="margin: 15px 0; color: #666;">Waxaan ahay arday barta Computer Science (Web Development)</p>
                <div style="margin-top:10px;"><span class="info-tag">Skills: Graphic Design & Public Speaking</span></div>
                <div class="about-links" style="margin-top:15px;">
                <a href="https://webdesignmastery.github.io/AgencyBD_26-04-25" target="_blank">
    <button>Digital marketing agency‑ka</button>
</a>

                    <a href="https://webdesignmastery.github.io/Skywings_17-08-24" target="_blank">🔗 View My Project</a>
                       <h2 style="color:#4b68e7; text-align:center;">Contact Me</h2>
                <hr>
                <div class="contact-item">📧 <b>Email:</b> Amiir Aden Elmi</div>
                <div class="contact-item">📞 <b>Phone:</b> +252 619575426</div>
                <div class="contact-item">📍 <b>Address:</b> Mogadishu, Somalia</div>
                <div style="text-align:center; margin-top:20px;">
                </div>
            </div>`;
    }
    else if (page === "contact") {
        mainArea.innerHTML = `
            <div class="kaadh">
                    <a href="caamiradencilmigmail.com" class="run-btn" style="float:none; padding:12px 25px; text-decoration:none; display:inline-block;">Send Direct Email</a>
                </div>
            </div>`;
    }
}

// 5. FOOTER
const footer = document.createElement("footer");
footer.innerHTML = `<p>© ${new Date().getFullYear()} MR Amiir Aden Elmi. .</p>`;
document.body.appendChild(footer);

// CSS Styling
footer.style.width = "100%";
footer.style.padding = "30px 20px";          // height weyn iyo padding
footer.style.backgroundColor = "#222";      // midab madow
footer.style.color = "#fff";                // qoraal cad
footer.style.textAlign = "center";          // qoraalka dhexe
footer.style.fontSize = "18px";             // font weyn
footer.style.fontFamily = "Arial, sans-serif";
footer.style.position = "relative";          // hoos ku muuqdo
footer.style.bottom = "0";
footer.style.boxShadow = "0 -3px 10px rgba(0,0,0,0.3)";  // hoos shid


// Initialize
loadPage("home");