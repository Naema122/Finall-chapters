// Set basic body style
document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.backgroundColor = "#f0f8ff";
document.body.style.minHeight = "100vh";

// ---------------- HEADER ----------------
const header = document.createElement("header");
header.style.backgroundColor = "#2c3e50";
header.style.padding = "20px";
header.style.color = "white";
header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
header.style.position = "relative";

const logo = document.createElement("h1");
logo.innerText = "Naciima";
logo.style.margin = "0";
logo.style.textAlign = "left";
logo.style.fontSize = "1.8rem";
logo.style.letterSpacing = "1px";
header.appendChild(logo);

// ---------------- NAVIGATION ----------------
const nav = document.createElement("nav");
nav.style.backgroundColor = "#34495e";
nav.style.padding = "15px";
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.gap = "20px";
nav.style.flexWrap = "wrap";
nav.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

// FUNCTION: Create nav link
function createNavLink(name, callback) {
    const link = document.createElement("a");
    link.innerText = name;
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.padding = "10px 15px";
    link.style.cursor = "pointer";
    link.style.borderRadius = "5px";
    link.style.transition = "all 0.3s";
    link.style.fontWeight = "500";
    
    link.onmouseover = () => {
        link.style.backgroundColor = "#3498db";
        link.style.transform = "translateY(-2px)";
    };
    link.onmouseout = () => {
        link.style.backgroundColor = "transparent";
        link.style.transform = "translateY(0)";
    };
    
    link.onclick = () => {
        callback();
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
        }
    };
    return link;
}

// ---------------- MAIN CONTENT AREA ----------------
const main = document.createElement("main");
main.style.padding = "30px";
main.style.maxWidth = "900px";
main.style.margin = "30px auto";
main.style.backgroundColor = "white";
main.style.borderRadius = "10px";
main.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
document.body.appendChild(main);

// ---------------- HOME CONTENT ----------------
function loadHome() {
    main.innerHTML = `
            <h2 style="color:#2c3e50; margin-bottom: 15px;">Welcome to JavaScript Learning Platform</h2>
            <p style="color:#555; font-size: 1.1rem; line-height: 1.6; max-width: 700px; margin: 0 auto 30px;">
                This interactive platform demonstrates JavaScript concepts from all chapters. 
                Explore each chapter to see live examples and practice coding concepts.
            </p>
            
            <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color:#2c3e50; margin-top: 0;">Chapters Covered:</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                    <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <h4 style="color:#3498db; margin: 0 0 10px 0;">Chapter 7</h4>
                        <p style="margin: 0; color:#666;">Objects</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <h4 style="color:#3498db; margin: 0 0 10px 0;">Chapter 8</h4>
                        <p style="margin: 0; color:#666;">DOM Manipulation</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <h4 style="color:#3498db; margin: 0 0 10px 0;">Chapter 9</h4>
                        <p style="margin: 0; color:#666;">JavaScript Events</p>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #3498db, #2980b9); border-radius: 10px; color: white;">
                <h3 style="margin-top: 0;">Get Started</h3>
                <p>Click on any chapter in the navigation menu to explore interactive examples and practice JavaScript concepts.</p>
            </div>
        </div>
    `;
}

// ---------------- SERVICE PAGE ----------------
function loadService() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; text-align: center; margin-bottom: 30px;">Our Services</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; margin-bottom: 30px;">
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s;">
                <div style="width: 60px; height: 60px; background: #3498db; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 30px; color: white;">📚</span>
                </div>
                <h3 style="color:#2c3e50; margin-top: 0;">Interactive Learning</h3>
                <p style="color:#555; line-height: 1.6;">Learn JavaScript concepts through interactive examples and hands-on practice.</p>
                <button onclick="loadChapter2()" class="service-btn" style="background:#3498db;">
                    Try Examples
                </button>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s;">
                <div style="width: 60px; height: 60px; background: #e74c3c; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 30px; color: white;">💻</span>
                </div>
                <h3 style="color:#2c3e50; margin-top: 0;">Code Examples</h3>
                <p style="color:#555; line-height: 1.6;">Explore real JavaScript code examples with explanations for each concept.</p>
                <button onclick="loadChapter3()" class="service-btn" style="background:#e74c3c;">
                    View Examples
                </button>
            </div>
            
            
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s;">
                <div style="width: 60px; height: 60px; background: #9b59b6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 30px; color: white;">🔧</span>
                </div>
                <h3 style="color:#2c3e50; margin-top: 0;">Tools & Resources</h3>
                <p style="color:#555; line-height: 1.6;">Access useful tools and resources for JavaScript development.</p>
                <button onclick="loadAllChapters()" class="service-btn" style="background:#9b59b6;">
                    All Resources
                </button>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #2c3e50, #34495e); color: white; padding: 30px; border-radius: 10px;">
            <h3 style="margin-top: 0; color: white;">Why Learn JavaScript?</h3>
            <p style="line-height: 1.6;">JavaScript is the programming language of the web. It allows you to create interactive websites, build web applications, and develop server-side applications with Node.js. Mastering JavaScript opens doors to countless opportunities in web development.</p>
            
            <div style="margin-top: 20px;">
                <h4 style="color: #3498db;">Quick Access to All Chapters:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-top: 15px;">
                    <button onclick="loadChapter7()" class="chapter-quick-btn">Chapter 7</button>
                    <button onclick="loadChapter8()" class="chapter-quick-btn">Chapter 8</button>
                    <button onclick="loadChapter9()" class="chapter-quick-btn">Chapter 9</button>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button onclick="loadAssignments()" class="assignment-quick-btn" style="background: linear-gradient(135deg, #e74c3c, #c0392b);">
                        View All Assignments
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add hover effects to service cards
    setTimeout(() => {
        const serviceCards = main.querySelectorAll('div[style*="background: #f8f9fa"]');
        serviceCards.forEach(card => {
            card.onmouseover = () => {
                card.style.transform = "translateY(-5px)";
                card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            };
            card.onmouseout = () => {
                card.style.transform = "translateY(0)";
                card.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
            };
        });
    }, 100);
    
    // Add service button styles
    addServiceButtonStyles();
}

// Function to show all chapters in one view (for Service page)
function loadAllChapters() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; text-align: center; margin-bottom: 30px;">All JavaScript Chapters</h2>

            <!-- Chapter 7 -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); border-left: 5px solid #1abc9c;">
                <h3 style="color:#2c3e50; margin-top: 0;">Chapter 7: Objects</h3>
                <p style="color:#555; line-height: 1.6;">Master object creation, properties, methods, and JSON.</p>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button onclick="loadChapter7()" class="service-btn" style="background:#1abc9c; flex:1;">
                        Open Chapter
                    </button>
                    <button onclick="runObjectCreation()" class="service-btn" style="background:#16a085;">
                        Example
                    </button>
                </div>
            </div>
            
            <!-- Chapter 8 -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); border-left: 5px solid #3498db;">
                <h3 style="color:#2c3e50; margin-top: 0;">Chapter 8: DOM Manipulation</h3>
                <p style="color:#555; line-height: 1.6;">Learn to manipulate HTML elements and dynamically update web pages.</p>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button onclick="loadChapter8()" class="service-btn" style="background:#3498db; flex:1;">
                        Open Chapter
                    </button>
                    <button onclick="changePara()" class="service-btn" style="background:#2980b9;">
                        Example
                    </button>
                </div>
            </div>
            
            <!-- Chapter 9 -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); border-left: 5px solid #e74c3c;">
                <h3 style="color:#2c3e50; margin-top: 0;">Chapter 9: JavaScript Events</h3>
                <p style="color:#555; line-height: 1.6;">Handle user interactions with click, keyboard, and form events.</p>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button onclick="loadChapter9()" class="service-btn" style="background:#e74c3c; flex:1;">
                        Open Chapter
                    </button>
                    <button onclick="setupChapter9Events()" class="service-btn" style="background:#c0392b;">
                        Example
                    </button>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 40px; padding: 30px; background: linear-gradient(135deg, #2c3e50, #34495e); border-radius: 10px; color: white; text-align: center;">
            <h3 style="margin-top: 0; color: white;">Ready to Practice?</h3>
            <p style="margin-bottom: 25px; line-height: 1.6;">Test your JavaScript skills with our interactive assignments.</p>
            <button onclick="loadAssignments()" class="assignment-quick-btn" style="background: linear-gradient(135deg, #e74c3c, #c0392b); padding: 15px 30px; font-size: 1.1rem;">
                Go to Assignments
            </button>
        </div>
    `;
    
    // Add service button styles
    addServiceButtonStyles();
}


// ==================== CHAPTER 7: OBJECTS ====================
function loadChapter7() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #1abc9c;">Chapter 7: Objects in JavaScript</h2>
        
        <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 10px; margin: 20px 0; box-shadow: 0 3px 10px rgba(0,0,0,0.05);">
            <h3 style="margin-top: 0; color:#2c3e50;">Choose an Example to Run:</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                <button onclick="runObjectCreation()" class="example-btn">
                    1. Creating Objects
                </button>
                <button onclick="runAccessingProperties()" class="example-btn">
                    2. Accessing Properties
                </button>
                <button onclick="runModifyingProperties()" class="example-btn">
                    3. Modifying Properties
                </button>
                <button onclick="runObjectMethods()" class="example-btn">
                    4. Methods in Objects
                </button>
                <button onclick="runObjectIteration()" class="example-btn">
                    5. Object Iteration
                </button>
                <button onclick="runJSONExamples()" class="example-btn">
                    6. JSON Examples
                </button>
            </div>
        </div>
        
        <div id="chapter7Output" style="background: white; padding: 25px; margin-top: 25px; border-radius: 10px; border: 1px solid #e0e0e0; min-height: 120px;">
            <div style="text-align: center; color: #7f8c8d; padding: 20px;">
                <span style="font-size: 40px;">👆</span>
                <p style="margin: 10px 0 0 0;">Output will appear here when you click the buttons above.</p>
            </div>
        </div>
    `;
    
    // Add CSS for buttons
    addButtonStyles();
}

// ==================== CHAPTER 8: DOM ====================
function loadChapter8() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #3498db;">Chapter 8: Document Object Model (DOM)</h2>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">1. getElementById Example</h3>
            <p id="demoPara" style="background:#e8f4fc; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db;">This paragraph will change when you click the button.</p>
            <button onclick="changePara()" class="demo-btn" style="background:#3498db;">
                Change Paragraph
            </button>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">2. getElementsByClassName</h3>
            <div style="display: flex; gap: 10px; margin: 15px 0; flex-wrap: wrap;">
                <p class="demoClass" style="background:#e8f4fc; padding: 10px 15px; border-radius: 5px; margin: 5px 0;">Element 1</p>
                <p class="demoClass" style="background:#e8f4fc; padding: 10px 15px; border-radius: 5px; margin: 5px 0;">Element 2</p>
                <p class="demoClass" style="background:#e8f4fc; padding: 10px 15px; border-radius: 5px; margin: 5px 0;">Element 3</p>
            </div>
            <button onclick="changeClass()" class="demo-btn" style="background:#e74c3c;">
                Change All Elements
            </button>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">3. Creating & Removing Elements</h3>
            <div id="newElements" style="background:#e8f4fc; padding: 15px; min-height: 60px; margin: 15px 0; border-radius: 5px; border: 2px dashed #bdc3c7;">
                <p style="margin: 0; color:#7f8c8d; text-align: center;">New elements will appear here</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="addElement()" class="demo-btn" style="background:#2ecc71;">
                    Add New Element
                </button>
                <button onclick="removeElement()" class="demo-btn" style="background:#e74c3c;">
                    Remove Last Element
                </button>
                <button onclick="clearAllElements()" class="demo-btn" style="background:#f39c12;">
                    Clear All
                </button>
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">4. Other DOM Examples</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin-top: 15px;">
                <button onclick="runQuerySelector()" class="example-btn">
                    querySelector()
                </button>
                <button onclick="runQuerySelectorAll()" class="example-btn">
                    querySelectorAll()
                </button>
                <button onclick="runModifyContent()" class="example-btn">
                    Modify Content
                </button>
                <button onclick="runStyleManipulation()" class="example-btn">
                    Style Manipulation
                </button>
            </div>
        </div>
        
        <div id="chapter8Output" style="background: white; padding: 25px; margin-top: 10px; border-radius: 10px; border: 1px solid #e0e0e0; min-height: 50px;">
            <p style="margin: 0; color:#7f8c8d; text-align: center;">Output for other DOM examples</p>
        </div>
    `;
    
    // Add CSS for buttons
    addButtonStyles();
    addDemoButtonStyles();
}

// ==================== CHAPTER 9: EVENTS ====================
function loadChapter9() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #e74c3c;">Chapter 9: JavaScript Events</h2>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">1. Click Events</h3>
            <div id="clickBox" style="width:100%; height:100px; background:#e8f4fc; display:flex; align-items:center; justify-content:center; margin:15px 0; cursor:pointer; border-radius:10px; border:2px solid #bdc3c7; transition:all 0.3s; font-weight:bold; font-size:1.1rem;">
                Click or Double Click Me
            </div>
            <div style="display:flex; align-items:center; gap:15px;">
                <div style="padding:10px 15px; background:white; border-radius:5px; flex:1;">
                    <strong>Status:</strong> <span id="clickStatus" style="color:#e74c3c;">Not clicked yet</span>
                </div>
                <div style="padding:10px 15px; background:white; border-radius:5px; flex:1;">
                    <strong>Event Type:</strong> <span id="clickType" style="color:#3498db;">None</span>
                </div>
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">2. Keyboard Events</h3>
            <input type="text" id="keyInput" placeholder="Type here to see keyboard events..." style="padding:12px; width:100%; border:2px solid #bdc3c7; border-radius:5px; font-size:1rem; margin:15px 0;">
            <div style="display:flex; align-items:center; gap:15px;">
                <div style="padding:10px 15px; background:white; border-radius:5px; flex:1;">
                    <strong>Last Key:</strong> <span id="keyStatus" style="color:#2ecc71;">None</span>
                </div>
                <div style="padding:10px 15px; background:white; border-radius:5px; flex:1;">
                    <strong>Key Code:</strong> <span id="keyCode" style="color:#9b59b6;">-</span>
                </div>
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">3. Form Events</h3>
            <form id="simpleForm" style="margin:15px 0;">
                <div style="display:flex; gap:10px; margin-bottom:15px; flex-wrap:wrap;">
                    <input type="text" id="formInput" placeholder="Enter your message" style="padding:12px; flex:1; min-width:200px; border:2px solid #bdc3c7; border-radius:5px; font-size:1rem;">
                    <button type="submit" class="demo-btn" style="background:#3498db;">
                        Submit
                    </button>
                </div>
                <div style="display:flex; align-items:center; gap:15px;">
                    <div style="padding:10px 15px; background:white; border-radius:5px; flex:1;">
                        <strong>Form Status:</strong> <span id="formStatus" style="color:#f39c12;">Ready for input</span>
                    </div>
                    <div style="padding:10px 15px; background:white; border-radius:5px; flex:1;">
                        <strong>Last Submission:</strong> <span id="lastSubmission" style="color:#1abc9c;">None</span>
                    </div>
                </div>
            </form>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color:#2c3e50;">4. Event Delegation</h3>
            <ul id="itemList" style="list-style:none; padding:0; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:10px; margin:15px 0;">
                <li style="padding:12px; background:#e8f4fc; cursor:pointer; border-radius:5px; text-align:center; transition:all 0.3s;">🍎 Apple</li>
                <li style="padding:12px; background:#e8f4fc; cursor:pointer; border-radius:5px; text-align:center; transition:all 0.3s;">🍌 Banana</li>
                <li style="padding:12px; background:#e8f4fc; cursor:pointer; border-radius:5px; text-align:center; transition:all 0.3s;">🍊 Orange</li>
                <li style="padding:12px; background:#e8f4fc; cursor:pointer; border-radius:5px; text-align:center; transition:all 0.3s;">🍇 Grapes</li>
            </ul>
            <div style="padding:10px 15px; background:white; border-radius:5px; margin-top:10px;">
                <strong>Selected Item:</strong> <span id="selectedItem" style="color:#e74c3c; font-weight:bold;">None</span>
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px;">
            <h3 style="margin-top: 0; color:#2c3e50;">5. Other Event Examples</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin-top: 15px;">
                <button onclick="runFocusEvents()" class="example-btn">
                    Focus Events
                </button>
                <button onclick="runMouseEvents()" class="example-btn">
                    Mouse Events
                </button>
                <button onclick="runWindowEvents()" class="example-btn">
                    Window Events
                </button>
                <button onclick="addNewItem()" class="example-btn">
                    Add New Item
                </button>
                <button onclick="runInputEvents()" class="example-btn">
                    Input Events
                </button>
                <button onclick="runTouchEvents()" class="example-btn">
                    Touch Events
                </button>
            </div>
        </div>
        
        <div id="chapter9Output" style="background: white; padding: 25px; margin-top: 25px; border-radius: 10px; border: 1px solid #e0e0e0; min-height: 50px;">
            <p style="margin: 0; color:#7f8c8d; text-align: center;">Output for other event examples</p>
        </div>
    `;
    
    // Add CSS for buttons
    addButtonStyles();
    addDemoButtonStyles();
    
    // Setup Chapter 9 events
    setTimeout(() => {
        setupChapter9Events();
    }, 100);
}

// ==================== ASSIGNMENTS PAGE ====================
function loadAssignments() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #d35400;">JavaScript Assignments</h2>
        
        <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 10px; margin: 20px 0; box-shadow: 0 3px 10px rgba(0,0,0,0.05);">
            <h3 style="margin-top: 0; color:#2c3e50;">Choose an Assignment to Run:</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-top: 20px;">
                <button onclick="runColoriesMealAndWater()" class="example-btn" style="background:linear-gradient(135deg, #3498db, #2980b9);">
                    1. Calories & Water
                </button>
                <button onclick="runCarSpeeds()" class="example-btn" style="background:linear-gradient(135deg, #e74c3c, #c0392b);">
                    2. Car Speeds
                </button>
                <button onclick="runLoanMoney()" class="example-btn" style="background:linear-gradient(135deg, #2ecc71, #27ae60);">
                    3. Loan Money
                </button>
                <button onclick="runTransport()" class="example-btn" style="background:linear-gradient(135deg, #f39c12, #d35400);">
                    4. Transport
                </button>
                <button onclick="runRunningRace()" class="example-btn" style="background:linear-gradient(135deg, #9b59b6, #8e44ad);">
                    5. Running Race
                </button>
                <button onclick="runPattern()" class="example-btn" style="background:linear-gradient(135deg, #1abc9c, #16a085);">
                    6. Pattern
                </button>
                <button onclick="runCheckName()" class="example-btn" style="background:linear-gradient(135deg, #34495e, #2c3e50);">
                    7. Check Name
                </button>
            </div>
        </div>
        
        <div id="assignmentsOutput" style="background: white; padding: 25px; margin-top: 25px; border-radius: 10px; border: 1px solid #e0e0e0; min-height: 150px;">
            <div style="text-align: center; color: #7f8c8d; padding: 30px;">
                <span style="font-size: 50px;">📝</span>
                <p style="margin: 15px 0 0 0; font-size: 1.1rem;">Assignment output will appear here when you run an assignment</p>
                <p style="margin: 10px 0 0 0; color: #95a5a6; font-size: 0.9rem;">Note: Some assignments require user input and will simulate prompts</p>
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; margin-top: 30px; border-radius: 10px; border-left: 5px solid #3498db;">
            <h3 style="color:#2c3e50; margin-top: 0;">Assignment Instructions:</h3>
            <p style="color:#555; line-height: 1.6;">Each assignment tests different JavaScript concepts. Click on an assignment to see it in action. Some assignments simulate user input prompts, while others demonstrate specific programming patterns.</p>
            
            <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 5px;">
                <strong>Tip:</strong> Try running the "Pattern" assignment to see a visual pattern created with JavaScript loops.
            </div>
        </div>
    `;
    
    // Add CSS for buttons
    addButtonStyles();
}

// ==================== ABOUT ME ====================
function loadAboutMe() {
    main.innerHTML = `
            <img src="me.jpg" alt="myImg"<div style="width: 150px; height: 150px; background: linear-gradient(135deg, #3498db, #2c3e50); border-radius: 20%; margin: 0 auto 25px; display: flex; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);">
                <span style="font-size: 70px; color: white;"></span>
            </div>
            
            <h2 style="color:#2c3e50; margin-bottom: 10px;">Naciima Cabdi Raxman Axmed</h2>
            <p style="color:#555; font-size: 1.2rem; margin-bottom: 5px;"><strong>Computer Science Student</strong></p>
            <p style="color:#7f8c8d; max-width: 600px; margin: 0 auto 30px; line-height: 1.6;">
                I am a passionate computer science student with a strong interest in web development and programming. 
                Currently learning JavaScript and building interactive web applications.

           <div style="background: #f8f9fa; padding: 30px; margin-top: 30px; border-radius: 10px;">
    <h3 style=" color:#2c3e50; margin-top: 0; text-align: center; margin-top: 0; text-align: center; font-weight: 500; margin: 0; line-height: 1.5;">
        Final Project links
    </h3>
    <p>1. <a href="https://tourism.gov.so/" target="_blank" style="text-decoration: none;">First Website</a></p>
    <p>2. <a href="https://mott.govsomaliland.org/" target="_blank" style="text-decoration: none;">Second Website</a></p>
</div>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin: 30px 0; flex-wrap: wrap;">
                <div style="padding: 10px 20px; background: #e8f4fc; border-radius: 30px; color: #3498db; font-weight: 500;">
                    <span>JavaScript</span>
                </div>
                <div style="padding: 10px 20px; background: #e8f4fc; border-radius: 30px; color: #3498db; font-weight: 500;">
                    <span>HTML/CSS</span>
                </div>
                <div style="padding: 10px 20px; background: #e8f4fc; border-radius: 30px; color: #3498db; font-weight: 500;">
                    <span>Web Development</span>
                </div>
            
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; margin-top: 30px; border-radius: 10px;">
            <h3 style="color:#2c3e50; margin-top: 0; text-align: center;">Project Information</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 25px;">
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.05);">
                    <div style="width: 50px; height: 50px; background: #3498db; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                        <span style="font-size: 25px; color: white;">🎯</span>
                    </div>
                    <h4 style="color:#2c3e50; margin: 0 0 10px 0;">Project Goal</h4>
                    <p style="color:#555; margin: 0; line-height: 1.5;">Demonstrate JavaScript concepts from Chapters 2-9 in an interactive learning platform.</p>
                </div>
                
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.05);">
                    <div style="width: 50px; height: 50px; background: #2ecc71; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                        <span style="font-size: 25px; color: white;">💡</span>
                    </div>
                    <h4 style="color:#2c3e50; margin: 0 0 10px 0;">Features</h4>
                    <p style="color:#555; margin: 0; line-height: 1.5;">Interactive examples, working buttons, live code execution, and visual feedback.</p>
                </div>
                
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.05);">
                    <div style="width: 50px; height: 50px; background: #9b59b6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                        <span style="font-size: 25px; color: white;">🚀</span>
                    </div>
                    <h4 style="color:#2c3e50; margin: 0 0 10px 0;">Technology</h4>
                    <p style="color:#555; margin: 0; line-height: 1.5;">Pure JavaScript, no external libraries. Built with modern ES6+ features.</p>
                </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #2c3e50, #34495e); border-radius: 8px; color: white; text-align: center;">
                <h4 style="margin: 0 0 10px 0; color: white;">Created with dedication and passion for learning</h4>
                <p style="margin: 0; opacity: 0.9;">This project represents the culmination of learning JavaScript fundamentals</p>
            </div>
        </div>
    `;
}

// ==================== CONTACT ====================
function loadContact() {
    main.innerHTML = `
        <h2 style="color:#2c3e50; text-align: center; margin-bottom: 10px;">Contact Information</h2>
        <p style="color:#7f8c8d; text-align: center; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">Get in touch with me for questions, feedback, or collaboration opportunities</p>
        
        <div style="max-width: 500px; margin: 0 auto;">
            <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
                <div style="background: linear-gradient(135deg, #3498db, #2980b9); padding: 25px; text-align: center; color: white;">
                    <h3 style="margin: 0; color: white;">Contact Details</h3>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Feel free to reach out</p>
                </div>
                
                <div style="padding: 30px;">
                    <div style="display: flex; align-items: center; margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid #eee;">
                        <div style="width: 50px; height: 50px; background: #e8f4fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="font-size: 25px; color: #3498db;">📧</span>
                        </div>
                        <div>
                            <h4 style="margin: 0 0 5px 0; color: #2c3e50;">Email</h4>
                            <p style="margin: 0; color: #555;">naciima@example.com</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid #eee;">
                        <div style="width: 50px; height: 50px; background: #e8f4fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="font-size: 25px; color: #3498db;">📱</span>
                        </div>
                        <div>
                            <h4 style="margin: 0 0 5px 0; color: #2c3e50;">Phone</h4>
                            <p style="margin: 0; color: #555;">+252 XXX XXX XXX</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 25px;">
                        <div style="width: 50px; height: 50px; background: #e8f4fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <span style="font-size: 25px; color: #3498db;">🏫</span>
                        </div>
                        <div>
                            <h4 style="margin: 0 0 5px 0; color: #2c3e50;">University</h4>
                            <p style="margin: 0; color: #555;">SIMAD University</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 30px; background: #f8f9fa; padding: 25px; border-radius: 10px;">
                <h3 style="color:#2c3e50; margin-top: 0; text-align: center;">Contact Form</h3>
                <form id="contactForm" style="margin-top: 20px;">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">Name</label>
                        <input type="text" id="contactName" placeholder="Your name" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; box-sizing: border-box;">
                        <div id="nameError" style="color: #e74c3c; font-size: 0.9rem; margin-top: 5px; display: none;"></div>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">Email</label>
                        <input type="email" id="contactEmail" placeholder="Your email address" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; box-sizing: border-box;">
                        <div id="emailError" style="color: #e74c3c; font-size: 0.9rem; margin-top: 5px; display: none;"></div>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">Message</label>
                        <textarea id="contactMessage" placeholder="Your message" rows="4" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; box-sizing: border-box; resize: vertical;"></textarea>
                        <div id="messageError" style="color: #e74c3c; font-size: 0.9rem; margin-top: 5px; display: none;"></div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button type="submit" class="demo-btn" style="background:#3498db; width: 100%;">
                            Send Message
                        </button>
                    </div>
                </form>
                <div id="contactSuccess" style="margin-top: 20px; padding: 15px; background: #d4edda; color: #155724; border-radius: 5px; display: none;">
                    Message sent successfully! I'll get back to you soon.
                </div>
            </div>
        </div>
    `;
    
    // Add CSS for buttons
    addDemoButtonStyles();
    
    // Setup contact form validation
    setTimeout(() => {
        setupContactForm();
    }, 100);
}
// Add nav links in the correct order
nav.appendChild(createNavLink("Home", loadHome));
nav.appendChild(createNavLink("About Me", loadAboutMe));
nav.appendChild(createNavLink("Service", loadService));


nav.appendChild(createNavLink("Contact", loadContact));

// Add header and nav to page
document.body.prepend(nav);
document.body.prepend(header);

// Load Home by default
loadHome();

// ---------------- FOOTER ----------------
const footer = document.createElement("footer");
footer.style.backgroundColor = "#2c3e50";
footer.style.color = "white";
footer.style.padding = "25px 15px";
footer.style.textAlign = "center";
footer.style.marginTop = "40px";
footer.style.borderTop = "1px solid rgba(255,255,255,0.1)";

const footerText = document.createElement("p");
footerText.innerText = "JavaScript Learning Platform • Created by Naciima • © 2024";
footerText.style.margin = "0";
footerText.style.fontSize = "1rem";
footer.appendChild(footerText);

const footerSubText = document.createElement("p");
footerSubText.innerText = "All examples built with pure JavaScript";
footerSubText.style.margin = "10px 0 0 0";
footerSubText.style.color = "rgba(255,255,255,0.7)";
footerSubText.style.fontSize = "0.9rem";
footer.appendChild(footerSubText);

document.body.appendChild(footer);

// ==================== HELPER FUNCTIONS ====================

// Add button styles dynamically
function addButtonStyles() {
    if (!document.querySelector('#button-styles')) {
        const style = document.createElement('style');
        style.id = 'button-styles';
        style.textContent = `
            .example-btn {
                padding: 12px 15px;
                background: linear-gradient(135deg, #3498db, #2980b9);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 0.95rem;
                font-weight: 500;
                transition: all 0.3s;
                text-align: center;
                box-shadow: 0 3px 5px rgba(52, 152, 219, 0.2);
            }
            
            .example-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 10px rgba(52, 152, 219, 0.3);
            }
            
            .example-btn:active {
                transform: translateY(-1px);
            }
        `;
        document.head.appendChild(style);
    }
}

function addDemoButtonStyles() {
    if (!document.querySelector('#demo-button-styles')) {
        const style = document.createElement('style');
        style.id = 'demo-button-styles';
        style.textContent = `
            .demo-btn {
                padding: 12px 25px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 500;
                transition: all 0.3s;
                text-align: center;
                box-shadow: 0 3px 5px rgba(0,0,0,0.1);
            }
            
            .demo-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 10px rgba(0,0,0,0.15);
            }
            
            .demo-btn:active {
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
}

function addServiceButtonStyles() {
    if (!document.querySelector('#service-button-styles')) {
        const style = document.createElement('style');
        style.id = 'service-button-styles';
        style.textContent = `
            .service-btn {
                padding: 10px 20px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s;
                text-align: center;
                margin-top: 15px;
                width: 100%;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            
            .service-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }
            
            .chapter-quick-btn {
                padding: 10px 15px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.3s;
                text-align: center;
            }
            
            .chapter-quick-btn:hover {
                background: #2980b9;
                transform: translateY(-2px);
            }
            
            .assignment-quick-btn {
                padding: 12px 25px;
                background: linear-gradient(135deg, #e74c3c, #c0392b);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 500;
                transition: all 0.3s;
                text-align: center;
                box-shadow: 0 3px 5px rgba(231, 76, 60, 0.3);
            }
            
            .assignment-quick-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 10px rgba(231, 76, 60, 0.4);
            }
        `;
        document.head.appendChild(style);
    }
}

// ==================== FUNCTION DEFINITIONS ====================

// --------- Display Output Functions ---------
function displayChapter2Output(title, content) {
    const outputDiv = document.getElementById("chapter2Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #3498db;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

function displayChapter3Output(title, content) {
    const outputDiv = document.getElementById("chapter3Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #e74c3c;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

function displayChapter4Output(title, content) {
    const outputDiv = document.getElementById("chapter4Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #2ecc71;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

function displayChapter5Output(title, content) {
    const outputDiv = document.getElementById("chapter5Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #9b59b6;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

function displayChapter6Output(title, content) {
    const outputDiv = document.getElementById("chapter6Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #f39c12;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

function displayChapter7Output(title, content) {
    const outputDiv = document.getElementById("chapter7Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #1abc9c;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

function displayAssignmentsOutput(title, content) {
    const outputDiv = document.getElementById("assignmentsOutput");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #d35400;">
                <h4 style="margin-top: 0; color:#2c3e50;">${title}</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto; font-family: 'Courier New', monospace; font-size: 0.95rem; line-height: 1.5;">
                    ${content}
                </div>
            </div>
        `;
    }
}

// Contact form validation setup
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    
    if (contactForm && contactSuccess) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const messageInput = document.getElementById('contactMessage');
            
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            
            // Reset previous errors
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            messageError.style.display = 'none';
            
            let isValid = true;
            
            // Validate name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Name is required';
                nameError.style.display = 'block';
                nameInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameError.style.display = 'block';
                nameInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                nameInput.style.borderColor = '#2ecc71';
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required';
                emailError.style.display = 'block';
                emailInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                emailInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                emailInput.style.borderColor = '#2ecc71';
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Message is required';
                messageError.style.display = 'block';
                messageInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                messageError.style.display = 'block';
                messageInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                messageInput.style.borderColor = '#2ecc71';
            }
            
            // If form is valid, show success message and reset
            if (isValid) {
                contactSuccess.style.display = 'block';
                contactForm.reset();
                
                // Reset borders to default
                nameInput.style.borderColor = '#ddd';
                emailInput.style.borderColor = '#ddd';
                messageInput.style.borderColor = '#ddd';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    contactSuccess.style.display = 'none';
                }, 5000);
            }
        });
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#ddd';
                const errorDiv = document.getElementById(this.id + 'Error');
                if (errorDiv) {
                    errorDiv.style.display = 'none';
                }
            });
        });
    }
}

// =============== CHAPTER 7 FUNCTIONS ===============

// 1. Creating Objects
function runObjectCreation() {
    let output = "<strong>Creating Objects with Different Methods:</strong><br><br>";
    
    output += "<strong>1. Object Literal:</strong><br>";
    output += "<pre>let car1 = {<br>    brand: \"Toyota\",<br>    model: \"Camry\",<br>    year: 2020<br>};</pre><br>";
    
    output += "<strong>2. Constructor Function:</strong><br>";
    output += "<pre>function Car(brand, model, year) {<br>    this.brand = brand;<br>    this.model = model;<br>    this.year = year;<br>}<br>let car2 = new Car(\"Honda\", \"Civic\", 2021);</pre><br>";
    
    output += "<strong>3. ES6 Class Syntax:</strong><br>";
    output += "<pre>class Vehicle {<br>    constructor(brand, model, year) {<br>        this.brand = brand;<br>        this.model = model;<br>        this.year = year;<br>    }<br>}<br>let car3 = new Vehicle(\"Ford\", \"Focus\", 2022);</pre>";
    
    displayChapter7Output("1. Creating Objects", output);
}

// 2. Accessing Properties
function runAccessingProperties() {
    let output = "<strong>Accessing Object Properties:</strong><br><br>";
    
    output += "<strong>Dot Notation:</strong><br>";
    output += "<pre>let student = {<br>    name: \"Sumaya\",<br>    age: 20,<br>    university: \"SIMAD\"<br>};<br><br>console.log(student.name);       // \"Sumaya\"<br>console.log(student.age);        // 20<br>console.log(student.university); // \"SIMAD\"</pre><br>";
    
    output += "<strong>Bracket Notation:</strong><br>";
    output += "<pre>console.log(student[\"name\"]);       // \"Sumaya\"<br>console.log(student[\"age\"]);        // 20<br>console.log(student[\"university\"]); // \"SIMAD\"<br><br>// Useful for dynamic property access<br>let property = \"name\";<br>console.log(student[property]);     // \"Sumaya\"</pre>";
    
    displayChapter7Output("2. Accessing Properties", output);
}

// 3. Modifying Properties
function runModifyingProperties() {
    let output = "<strong>Modifying and Adding Properties:</strong><br><br>";
    
    output += "<pre>let person = { name: \"Ali\", age: 25 };<br><br>// Modifying existing properties<br>person.age = 26;                    // Dot notation<br>person[\"name\"] = \"Ali Mohamed\";     // Bracket notation<br><br>// Adding new properties<br>person.city = \"Mogadishu\";          // Dot notation<br>person[\"occupation\"] = \"Developer\"; // Bracket notation<br><br>console.log(person);<br>// {<br>//   name: \"Ali Mohamed\",<br>//   age: 26,<br>//   city: \"Mogadishu\",<br>//   occupation: \"Developer\"<br>// }</pre>";
    
    displayChapter7Output("3. Modifying Properties", output);
}

// 4. Methods in Objects
function runObjectMethods() {
    let output = "<strong>Methods in Objects:</strong><br><br>";
    
    output += "<pre>let employee = {<br>    firstName: \"Canab\",<br>    lastName: \"Ahmed\",<br>    salary: 1500,<br>    <br>    // Method to get full name<br>    getFullName: function() {<br>        return this.firstName + \" \" + this.lastName;<br>    },<br>    <br>    // Method to get salary with bonus<br>    getSalaryWithBonus: function(bonus) {<br>        return this.salary + bonus;<br>    },<br>    <br>    // Method to display info<br>    displayInfo: function() {<br>        return \`Name: \${this.getFullName()}, Salary: $\${this.salary}\`;<br>    }<br>};</pre><br>";
    
    output += "<strong>Demo Output:</strong><br>";
    let employee = {
        firstName: "Canab",
        lastName: "Ahmed",
        salary: 1500,
        
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    
    output += "Full Name: " + employee.getFullName() + "<br>";
    output += "Salary: $" + employee.salary;
    
    displayChapter7Output("4. Methods in Objects", output);
}

// 5. Object Iteration
function runObjectIteration() {
    let output = "<strong>Object Iteration Methods:</strong><br><br>";
    
    const iterObj = { 
        name: "Layla", 
        age: 26, 
        country: "Somalia", 
        occupation: "Teacher" 
    };
    
    output += "<strong>Object:</strong> " + JSON.stringify(iterObj) + "<br><br>";
    
    output += "<strong>1. for...in loop:</strong><br>";
    for(let key in iterObj) {
        output += key + ": " + iterObj[key] + "<br>";
    }
    output += "<br>";
    
    output += "<strong>2. Object.keys():</strong><br>";
    output += JSON.stringify(Object.keys(iterObj)) + "<br><br>";
    
    output += "<strong>3. Object.values():</strong><br>";
    output += JSON.stringify(Object.values(iterObj)) + "<br><br>";
    
    output += "<strong>4. Object.entries():</strong><br>";
    Object.entries(iterObj).forEach(([key, value]) => {
        output += key + ": " + value + "<br>";
    });
    
    displayChapter7Output("5. Object Iteration", output);
}

// 6. JSON Examples
function runJSONExamples() {
    let output = "<strong>JSON Examples:</strong><br><br>";
    
    output += "<strong>1. JSON.parse() - String to Object:</strong><br>";
    let jsonStr = '{"name":"Salaad","age":29,"city":"Hargeisa"}';
    output += "JSON string: " + jsonStr + "<br>";
    let obj = JSON.parse(jsonStr);
    output += "Parsed object properties:<br>";
    output += "Name: " + obj.name + "<br>";
    output += "Age: " + obj.age + "<br>";
    output += "City: " + obj.city + "<br><br>";
    
    output += "<strong>2. JSON.stringify() - Object to String:</strong><br>";
    let myObj = {
        name: "Maryan",
        age: 22,
        courses: ["JavaScript", "HTML", "CSS"]
    };
    output += "Original object: " + JSON.stringify(myObj, null, 2) + "<br>";
    let jsonString = JSON.stringify(myObj);
    output += "Stringified JSON: " + jsonString;
    
    displayChapter7Output("6. JSON Examples", output);
}

// =============== CHAPTER 8 FUNCTIONS ===============

function changePara() {
    const para = document.getElementById("demoPara");
    if (para) {
        para.style.backgroundColor = "#3498db";
        para.style.color = "white";
        para.style.padding = "20px";
        para.style.borderLeft = "4px solid #2980b9";
        para.textContent = "Paragraph successfully changed using getElementById() method! The DOM manipulation allows us to dynamically update content, styles, and structure of web pages.";
    }
}

function changeClass() {
    const elements = document.getElementsByClassName("demoClass");
    for (let el of elements) {
        el.style.backgroundColor = "#e74c3c";
        el.style.color = "white";
        el.style.fontWeight = "bold";
        el.style.transform = "scale(1.05)";
        el.style.boxShadow = "0 3px 10px rgba(231, 76, 60, 0.3)";
        el.textContent = "Changed! " + el.textContent;
    }
}

let elementCount = 0;
function addElement() {
    const container = document.getElementById("newElements");
    if (container) {
        elementCount++;
        const newEl = document.createElement("div");
        newEl.textContent = `New Element ${elementCount}`;
        newEl.style.padding = "12px";
        newEl.style.margin = "8px 0";
        newEl.style.backgroundColor = "#e8f4fc";
        newEl.style.borderRadius = "5px";
        newEl.style.borderLeft = "4px solid #3498db";
        newEl.style.transition = "all 0.3s";
        
        newEl.onmouseover = () => {
            newEl.style.backgroundColor = "#d6eaf8";
            newEl.style.transform = "translateX(5px)";
        };
        
        newEl.onmouseout = () => {
            newEl.style.backgroundColor = "#e8f4fc";
            newEl.style.transform = "translateX(0)";
        };
        
        container.appendChild(newEl);
        
        // Remove the placeholder if it exists
        const placeholder = container.querySelector('p[style*="color:#7f8c8d"]');
        if (placeholder) {
            placeholder.remove();
        }
    }
}

function removeElement() {
    const container = document.getElementById("newElements");
    if (container && container.children.length > 0) {
        container.removeChild(container.lastChild);
        if (elementCount > 0) elementCount--;
        
        // Add placeholder back if no elements left
        if (container.children.length === 0) {
            const placeholder = document.createElement("p");
            placeholder.textContent = "New elements will appear here";
            placeholder.style.margin = "0";
            placeholder.style.color = "#7f8c8d";
            placeholder.style.textAlign = "center";
            container.appendChild(placeholder);
        }
    }
}

function clearAllElements() {
    const container = document.getElementById("newElements");
    if (container) {
        container.innerHTML = '<p style="margin: 0; color:#7f8c8d; text-align: center;">New elements will appear here</p>';
        elementCount = 0;
    }
}

function runQuerySelector() {
    const outputDiv = document.getElementById("chapter8Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #3498db;">
                <h4 style="margin-top: 0; color:#2c3e50;">querySelector() Method</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto;">
                    <p><strong>Definition:</strong> Returns the first element that matches a CSS selector.</p>
                    <p><strong>Syntax:</strong> <code>document.querySelector(selector)</code></p>
                    <p><strong>Examples:</strong></p>
                    <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Select first paragraph
const firstPara = document.querySelector('p');

// Select element with ID 'demo'
const demoElement = document.querySelector('#demo');

// Select first element with class 'item'
const firstItem = document.querySelector('.item');</pre>
                    <p><strong>Use Case:</strong> When you need to select a single element from the DOM.</p>
                </div>
            </div>
        `;
    }
}

function runQuerySelectorAll() {
    const outputDiv = document.getElementById("chapter8Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #e74c3c;">
                <h4 style="margin-top: 0; color:#2c3e50;">querySelectorAll() Method</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto;">
                    <p><strong>Definition:</strong> Returns a NodeList of all elements that match a CSS selector.</p>
                    <p><strong>Syntax:</strong> <code>document.querySelectorAll(selector)</code></p>
                    <p><strong>Examples:</strong></p>
                    <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Select all paragraphs
const allParas = document.querySelectorAll('p');

// Select all elements with class 'item'
const allItems = document.querySelectorAll('.item');

// Select all list items in a specific list
const listItems = document.querySelectorAll('#myList li');</pre>
                    <p><strong>Use Case:</strong> When you need to select multiple elements and perform operations on them.</p>
                    <p><strong>Note:</strong> Returns a NodeList (not an Array), but you can use forEach() on it.</p>
                </div>
            </div>
        `;
    }
}

function runModifyContent() {
    const outputDiv = document.getElementById("chapter8Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #2ecc71;">
                <h4 style="margin-top: 0; color:#2c3e50;">Modifying Content</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto;">
                    <p><strong>Methods for modifying element content:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. textContent:</strong> Gets or sets the text content of an element.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Get text content
const text = element.textContent;

// Set text content
element.textContent = 'New text content';</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. innerHTML:</strong> Gets or sets the HTML content of an element.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Get HTML content
const html = element.innerHTML;

// Set HTML content
element.innerHTML = '&lt;strong&gt;New HTML content&lt;/strong&gt;';</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. innerText:</strong> Similar to textContent but respects styling.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Get visible text
const visibleText = element.innerText;

// Set visible text
element.innerText = 'New visible text';</pre>
                    </div>
                    
                    <p><strong>Important:</strong> Use <code>textContent</code> for plain text and <code>innerHTML</code> when you need to include HTML tags.</p>
                </div>
            </div>
        `;
    }
}

function runStyleManipulation() {
    const outputDiv = document.getElementById("chapter8Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #9b59b6;">
                <h4 style="margin-top: 0; color:#2c3e50;">Style Manipulation</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; overflow:auto;">
                    <p><strong>Ways to manipulate element styles:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. style property:</strong> Direct style manipulation.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Change individual properties
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '16px';

// Change multiple properties
Object.assign(element.style, {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px'
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. classList:</strong> Add/remove CSS classes.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('inactive');

// Toggle a class
element.classList.toggle('hidden');

// Check if has class
if (element.classList.contains('active')) {
    // Do something
}</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. className:</strong> Get/set all classes at once.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
// Get classes
const classes = element.className;

// Set classes
element.className = 'btn btn-primary active';</pre>
                    </div>
                    
                    <p><strong>Best Practice:</strong> Use <code>classList</code> for adding/removing classes rather than directly manipulating styles when possible.</p>
                </div>
            </div>
        `;
    }
}

// =============== CHAPTER 9 FUNCTIONS ===============

function setupChapter9Events() {
    // Click Event
    const clickBox = document.getElementById("clickBox");
    const clickStatus = document.getElementById("clickStatus");
    const clickType = document.getElementById("clickType");
    
    if (clickBox && clickStatus && clickType) {
        let clickCount = 0;
        let clickTimeout;
        
        clickBox.addEventListener("click", function() {
            clickCount++;
            
            if (clickCount === 1) {
                clickTimeout = setTimeout(() => {
                    // Single click
                    clickStatus.textContent = "Single Clicked!";
                    clickStatus.style.color = "#2ecc71";
                    clickType.textContent = "Single Click";
                    clickType.style.color = "#2ecc71";
                    clickBox.style.backgroundColor = "#2ecc71";
                    clickBox.style.borderColor = "#27ae60";
                    clickBox.textContent = "Single Click Detected!";
                    
                    clickCount = 0;
                }, 250);
            } else {
                // Double click
                clearTimeout(clickTimeout);
                clickStatus.textContent = "Double Clicked!";
                clickStatus.style.color = "#e74c3c";
                clickType.textContent = "Double Click";
                clickType.style.color = "#e74c3c";
                clickBox.style.backgroundColor = "#e74c3c";
                clickBox.style.borderColor = "#c0392b";
                clickBox.textContent = "Double Click Detected!";
                
                clickCount = 0;
            }
        });
        
        // Add mouseover/mouseout effects
        clickBox.addEventListener("mouseover", function() {
            if (!clickBox.style.backgroundColor.includes("2ecc71") && 
                !clickBox.style.backgroundColor.includes("e74c3c")) {
                clickBox.style.backgroundColor = "#3498db";
                clickBox.style.borderColor = "#2980b9";
            }
        });
        
        clickBox.addEventListener("mouseout", function() {
            if (!clickBox.style.backgroundColor.includes("2ecc71") && 
                !clickBox.style.backgroundColor.includes("e74c3c")) {
                clickBox.style.backgroundColor = "#e8f4fc";
                clickBox.style.borderColor = "#bdc3c7";
                clickBox.textContent = "Click or Double Click Me";
            }
        });
    }
    
    // Keyboard Events
    const keyInput = document.getElementById("keyInput");
    const keyStatus = document.getElementById("keyStatus");
    const keyCode = document.getElementById("keyCode");
    
    if (keyInput && keyStatus && keyCode) {
        keyInput.addEventListener("keydown", function(e) {
            keyStatus.textContent = `Key: "${e.key}"`;
            keyStatus.style.color = "#e74c3c";
            keyCode.textContent = `Code: ${e.code}`;
            keyCode.style.color = "#9b59b6";
            
            // Visual feedback
            keyInput.style.borderColor = "#3498db";
            keyInput.style.boxShadow = "0 0 0 3px rgba(52, 152, 219, 0.2)";
        });
        
        keyInput.addEventListener("keyup", function() {
            keyInput.style.borderColor = "#2ecc71";
            setTimeout(() => {
                keyInput.style.borderColor = "#bdc3c7";
                keyInput.style.boxShadow = "none";
            }, 300);
        });
    }
    
    // Form Events
    const simpleForm = document.getElementById("simpleForm");
    const formStatus = document.getElementById("formStatus");
    const formInput = document.getElementById("formInput");
    const lastSubmission = document.getElementById("lastSubmission");
    
    if (simpleForm && formStatus && formInput && lastSubmission) {
        simpleForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            if (formInput.value.trim() === "") {
                formStatus.textContent = "Please enter text before submitting";
                formStatus.style.color = "#e74c3c";
                formInput.style.borderColor = "#e74c3c";
            } else {
                formStatus.textContent = "Form submitted successfully!";
                formStatus.style.color = "#2ecc71";
                lastSubmission.textContent = `"${formInput.value}"`;
                lastSubmission.style.color = "#1abc9c";
                formInput.style.borderColor = "#2ecc71";
                
                // Reset after 2 seconds
                setTimeout(() => {
                    formStatus.textContent = "Ready for input";
                    formStatus.style.color = "#f39c12";
                    formInput.style.borderColor = "#bdc3c7";
                }, 2000);
                
                formInput.value = "";
            }
        });
        
        // Input event for real-time feedback
        formInput.addEventListener("input", function() {
            const length = formInput.value.length;
            if (length === 0) {
                formStatus.textContent = "Ready for input";
                formStatus.style.color = "#f39c12";
            } else if (length < 3) {
                formStatus.textContent = "Keep typing...";
                formStatus.style.color = "#f39c12";
            } else {
                formStatus.textContent = "Good! Now you can submit";
                formStatus.style.color = "#2ecc71";
            }
        });
    }
    
    // Event Delegation
    const itemList = document.getElementById("itemList");
    const selectedItem = document.getElementById("selectedItem");
    
    if (itemList && selectedItem) {
        itemList.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                selectedItem.textContent = e.target.textContent;
                selectedItem.style.color = "#e74c3c";
                
                // Reset all items
                const items = itemList.querySelectorAll("li");
                items.forEach(item => {
                    item.style.backgroundColor = "#e8f4fc";
                    item.style.color = "black";
                    item.style.transform = "scale(1)";
                    item.style.boxShadow = "none";
                });
                
                // Highlight selected
                e.target.style.backgroundColor = "#e74c3c";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 5px 15px rgba(231, 76, 60, 0.3)";
            }
        });
        
        // Add hover effects to list items
        const items = itemList.querySelectorAll("li");
        items.forEach(item => {
            item.addEventListener("mouseover", function() {
                if (this.style.backgroundColor !== "rgb(231, 76, 60)") {
                    this.style.backgroundColor = "#d6eaf8";
                    this.style.transform = "translateY(-3px)";
                }
            });
            
            item.addEventListener("mouseout", function() {
                if (this.style.backgroundColor !== "rgb(231, 76, 60)") {
                    this.style.backgroundColor = "#e8f4fc";
                    this.style.transform = "translateY(0)";
                }
            });
        });
    }
}

function runFocusEvents() {
    const outputDiv = document.getElementById("chapter9Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #3498db;">
                <h4 style="margin-top: 0; color:#2c3e50;">Focus Events</h4>
                <div style="background: white; padding: 15px; border-radius: 5px;">
                    <p><strong>Focus events occur when an element gains or loses focus:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. focus:</strong> Fires when an element receives focus.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('focus', function() {
    console.log('Element received focus');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. blur:</strong> Fires when an element loses focus.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('blur', function() {
    console.log('Element lost focus');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. focusin:</strong> Similar to focus but bubbles.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('focusin', function() {
    console.log('Focus entered element or descendants');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>4. focusout:</strong> Similar to blur but bubbles.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('focusout', function() {
    console.log('Focus left element or descendants');
});</pre>
                    </div>
                    
                    <p><strong>Use Cases:</strong> Form validation, input highlighting, accessibility features.</p>
                </div>
            </div>
        `;
    }
}

function runMouseEvents() {
    const outputDiv = document.getElementById("chapter9Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #e74c3c;">
                <h4 style="margin-top: 0; color:#2c3e50;">Mouse Events</h4>
                <div style="background: white; padding: 15px; border-radius: 5px;">
                    <p><strong>Mouse events track user interaction with the mouse:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. click:</strong> Single click on an element.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('click', function(e) {
    console.log('Element was clicked at:', e.clientX, e.clientY);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. dblclick:</strong> Double click on an element.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('dblclick', function() {
    console.log('Element was double-clicked');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. mouseover / mouseout:</strong> Mouse enters/leaves element.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('mouseover', function() {
    console.log('Mouse entered element');
});

element.addEventListener('mouseout', function() {
    console.log('Mouse left element');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>4. mousedown / mouseup:</strong> Mouse button pressed/released.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('mousedown', function() {
    console.log('Mouse button pressed');
});

element.addEventListener('mouseup', function() {
    console.log('Mouse button released');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>5. mousemove:</strong> Mouse moves over element.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('mousemove', function(e) {
    console.log('Mouse moving at:', e.clientX, e.clientY);
});</pre>
                    </div>
                    
                    <p><strong>Use Cases:</strong> Interactive UI elements, hover effects, drag-and-drop functionality.</p>
                </div>
            </div>
        `;
    }
}

function runWindowEvents() {
    const outputDiv = document.getElementById("chapter9Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #2ecc71;">
                <h4 style="margin-top: 0; color:#2c3e50;">Window Events</h4>
                <div style="background: white; padding: 15px; border-radius: 5px;">
                    <p><strong>Window events relate to browser window interactions:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. load:</strong> Fires when page finishes loading.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. resize:</strong> Fires when window is resized.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
window.addEventListener('resize', function() {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. scroll:</strong> Fires when page is scrolled.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
window.addEventListener('scroll', function() {
    console.log('Scrolled to:', window.scrollY);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>4. beforeunload:</strong> Fires before page unloads.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
    return 'Are you sure you want to leave?';
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>5. DOMContentLoaded:</strong> Fires when DOM is ready.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
});</pre>
                    </div>
                    
                    <p><strong>Use Cases:</strong> Responsive design, infinite scrolling, page transitions, save warnings.</p>
                </div>
            </div>
        `;
    }
}

function addNewItem() {
    const itemList = document.getElementById("itemList");
    if (itemList) {
        const fruits = ["🍓 Strawberry", "🍍 Pineapple", "🥝 Kiwi", "🍈 Melon", "🍒 Cherry", "🥭 Mango"];
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        
        const newItem = document.createElement("li");
        newItem.textContent = randomFruit;
        newItem.style.padding = "12px";
        newItem.style.background = "#e8f4fc";
        newItem.style.borderRadius = "5px";
        newItem.style.cursor = "pointer";
        newItem.style.textAlign = "center";
        newItem.style.transition = "all 0.3s";
        
        // Add hover effects
        newItem.addEventListener("mouseover", function() {
            if (this.style.backgroundColor !== "rgb(231, 76, 60)") {
                this.style.backgroundColor = "#d6eaf8";
                this.style.transform = "translateY(-3px)";
            }
        });
        
        newItem.addEventListener("mouseout", function() {
            if (this.style.backgroundColor !== "rgb(231, 76, 60)") {
                this.style.backgroundColor = "#e8f4fc";
                this.style.transform = "translateY(0)";
            }
        });
        
        itemList.appendChild(newItem);
        
        const selectedItem = document.getElementById("selectedItem");
        if (selectedItem) {
            selectedItem.textContent = randomFruit + " (New)";
            selectedItem.style.color = "#3498db";
        }
    }
}

function runInputEvents() {
    const outputDiv = document.getElementById("chapter9Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #9b59b6;">
                <h4 style="margin-top: 0; color:#2c3e50;">Input Events</h4>
                <div style="background: white; padding: 15px; border-radius: 5px;">
                    <p><strong>Input events track user input in form elements:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. input:</strong> Fires when the value changes.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
input.addEventListener('input', function() {
    console.log('Input value changed to:', this.value);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. change:</strong> Fires when value changes AND element loses focus.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
input.addEventListener('change', function() {
    console.log('Value finalized:', this.value);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. select:</strong> Fires when text is selected.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
input.addEventListener('select', function() {
    const selected = this.value.substring(this.selectionStart, this.selectionEnd);
    console.log('Text selected:', selected);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>4. cut/copy/paste:</strong> Fires during clipboard operations.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
input.addEventListener('copy', function() {
    console.log('Text copied to clipboard');
});

input.addEventListener('paste', function(e) {
    const pasted = e.clipboardData.getData('text');
    console.log('Text pasted:', pasted);
});</pre>
                    </div>
                    
                    <p><strong>Use Cases:</strong> Real-time validation, auto-complete, character counters, live preview.</p>
                </div>
            </div>
        `;
    }
}

function runTouchEvents() {
    const outputDiv = document.getElementById("chapter9Output");
    if (outputDiv) {
        outputDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #1abc9c;">
                <h4 style="margin-top: 0; color:#2c3e50;">Touch Events (Mobile)</h4>
                <div style="background: white; padding: 15px; border-radius: 5px;">
                    <p><strong>Touch events for mobile and touchscreen devices:</strong></p>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>1. touchstart:</strong> Finger touches the screen.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    console.log('Touch started at:', touch.clientX, touch.clientY);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>2. touchmove:</strong> Finger moves on the screen.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    console.log('Touch moving at:', touch.clientX, touch.clientY);
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>3. touchend:</strong> Finger leaves the screen.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('touchend', function() {
    console.log('Touch ended');
});</pre>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p><strong>4. touchcancel:</strong> Touch is interrupted.</p>
                        <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
element.addEventListener('touchcancel', function() {
    console.log('Touch cancelled');
});</pre>
                    </div>
                    
                    <p><strong>Use Cases:</strong> Mobile gestures, touch-based interactions, swipe navigation, pinch-to-zoom.</p>
                    <p><strong>Note:</strong> Always consider both mouse and touch events for cross-device compatibility.</p>
                </div>
            </div>
        `;
    }
}

// =============== ASSIGNMENT FUNCTIONS ===============

function runColoriesMealAndWater() {
    let output = "<strong>Assignment 1: Calories & Water Tracker</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Create a program that tracks daily calorie intake and water consumption.<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Check if calories are normal (calories > 2000)<br>";
    output += "2. Check if water intake is normal (water >= 2L)<br><br>";
    
    output += "<strong>Simulated Output:</strong><br>";
    
    // Simulated user inputs
    const simulatedCalories = 2200;
    const simulatedWater = 2.5;
    
    output += "Calories consumed: " + simulatedCalories + "<br>";
    output += "Water intake: " + simulatedWater + "L<br><br>";
    
    if (simulatedCalories > 2000) {
        output += "✅ <span style='color:#2ecc71;'>Normal calorie intake</span><br>";
    } else {
        output += "❌ <span style='color:#e74c3c;'>Low calorie intake</span><br>";
    }
    
    if (simulatedWater >= 2) {
        output += "✅ <span style='color:#2ecc71;'>Sufficient water intake</span><br>";
    } else {
        output += "❌ <span style='color:#e74c3c;'>Insufficient water intake</span><br>";
    }
    
    output += "<br><em>In a real implementation, this would use prompt() to get user input.</em>";
    
    displayAssignmentsOutput("1. Calories & Water Tracker", output);
}

function runCarSpeeds() {
    let output = "<strong>Assignment 2: Car Speed Checker</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Create a program that checks if a car's speed is legal or illegal.<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Check if car speed is illegal (speed > 40)<br>";
    output += "2. Check if car speed is legal (speed <= allowed speed)<br><br>";
    
    output += "<strong>Simulated Output:</strong><br>";
    
    // Simulated inputs
    const simulatedSpeed = 45;
    const simulatedAllowedSpeed = 50;
    
    output += "Car speed: " + simulatedSpeed + " km/h<br>";
    output += "Allowed speed: " + simulatedAllowedSpeed + " km/h<br><br>";
    
    if (simulatedSpeed > 40) {
        output += "⚠️ <span style='color:#e67e22;'>Warning: Speed exceeds 40 km/h</span><br>";
    }
    
    if (simulatedSpeed <= simulatedAllowedSpeed) {
        output += "✅ <span style='color:#2ecc71;'>Legal speed (within limit)</span><br>";
    } else {
        output += "❌ <span style='color:#e74c3c;'>Illegal speed (over limit)</span><br>";
    }
    
    output += "<br><em>In a real implementation, this would use prompt() to get user input.</em>";
    
    displayAssignmentsOutput("2. Car Speed Checker", output);
}

function runLoanMoney() {
    let output = "<strong>Assignment 3: Loan Money Calculator</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Calculate loan repayment status based on loan amount and available money.<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Calculate money left to pay<br>";
    output += "2. Check if loan is fully paid<br>";
    output += "3. Check if you can pay all at once<br><br>";
    
    output += "<strong>Simulated Output:</strong><br>";
    
    // Simulated inputs
    const simulatedLoan = 5000;
    const simulatedMoney = 3000;
    
    output += "Loan amount: $" + simulatedLoan + "<br>";
    output += "Money available: $" + simulatedMoney + "<br><br>";
    
    const moneyLeft = simulatedLoan - simulatedMoney;
    
    if (moneyLeft > 0) {
        output += "💰 <span style='color:#e67e22;'>Money left to pay: $" + moneyLeft + "</span><br>";
        output += "Status: <span style='color:#e74c3c;'>Loan not fully paid</span><br>";
        output += "Can pay all: <span style='color:#e74c3c;'>No</span><br>";
    } else if (moneyLeft === 0) {
        output += "✅ <span style='color:#2ecc71;'>Loan fully paid!</span><br>";
        output += "Can pay all: <span style='color:#2ecc71;'>Yes</span><br>";
    } else {
        output += "✅ <span style='color:#2ecc71;'>You have extra money after paying loan</span><br>";
        output += "Extra: <span style='color:#2ecc71;'>$" + Math.abs(moneyLeft) + "</span><br>";
    }
    
    output += "<br><em>In a real implementation, this would use prompt() to get user input.</em>";
    
    displayAssignmentsOutput("3. Loan Money Calculator", output);
}

function runTransport() {
    let output = "<strong>Assignment 4: Transport Budget Calculator</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Calculate transport budget based on income and expenses.<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Calculate total money (income + going money)<br>";
    output += "2. Check if money is left after expenses<br>";
    output += "3. Check if you can buy water<br><br>";
    
    output += "<strong>Simulated Output:</strong><br>";
    
    // Simulated inputs
    const simulatedIncome = 100;
    const simulatedExpense = 80;
    const simulatedBudget = 50;
    
    output += "Income: $" + simulatedIncome + "<br>";
    output += "Expense: $" + simulatedExpense + "<br>";
    output += "Budget: $" + simulatedBudget + "<br><br>";
    
    const totalMoney = simulatedIncome + simulatedExpense;
    const leftAfterExpenses = simulatedIncome - simulatedExpense;
    
    output += "Total money: $" + totalMoney + "<br>";
    
    if (leftAfterExpenses < 0) {
        output += "Status: <span style='color:#e74c3c;'>Negative balance after expenses</span><br>";
        output += "Can buy water: <span style='color:#e74c3c;'>No (negative balance)</span><br>";
    } else if (leftAfterExpenses > 0 && leftAfterExpenses < simulatedBudget) {
        output += "Status: <span style='color:#e67e22;'>Positive balance but below budget</span><br>";
        output += "Can buy water: <span style='color:#2ecc71;'>Yes (but limited)</span><br>";
    } else if (leftAfterExpenses >= simulatedBudget) {
        output += "Status: <span style='color:#2ecc71;'>Positive balance and meets budget</span><br>";
        output += "Can buy water: <span style='color:#2ecc71;'>Yes</span><br>";
    } else {
        output += "Status: <span style='color:#e74c3c;'>No money left after expenses</span><br>";
        output += "Can buy water: <span style='color:#e74c3c;'>No</span><br>";
    }
    
    output += "<br><em>In a real implementation, this would use prompt() to get user input.</em>";
    
    displayAssignmentsOutput("4. Transport Budget Calculator", output);
}

function runRunningRace() {
    let output = "<strong>Assignment 5: Running Race Analyzer</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Compare two runners' performance in a race.<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Calculate time for each runner<br>";
    output += "2. Determine which runner is faster<br>";
    output += "3. Check if runner A is the winner<br><br>";
    
    output += "<strong>Simulated Output:</strong><br>";
    
    // Simulated inputs
    const simulatedDistance = 100; // meters
    const simulatedRunner1Speed = 10; // m/s
    const simulatedRunner2Speed = 8; // m/s
    
    output += "Race distance: " + simulatedDistance + " meters<br>";
    output += "Runner 1 speed: " + simulatedRunner1Speed + " m/s<br>";
    output += "Runner 2 speed: " + simulatedRunner2Speed + " m/s<br><br>";
    
    const time1 = simulatedDistance / simulatedRunner1Speed;
    const time2 = simulatedDistance / simulatedRunner2Speed;
    
    output += "Runner 1 time: " + time1.toFixed(2) + " seconds<br>";
    output += "Runner 2 time: " + time2.toFixed(2) + " seconds<br><br>";
    
    const isAFaster = time1 < time2;
    
    if (isAFaster) {
        output += "🏆 <span style='color:#2ecc71;'>Runner 1 is faster!</span><br>";
        output += "Winner: <span style='color:#2ecc71;'>Runner 1</span><br>";
    } else if (time1 === time2) {
        output += "🤝 <span style='color:#3498db;'>It's a tie!</span><br>";
        output += "Winner: <span style='color:#3498db;'>Both runners (tie)</span><br>";
    } else {
        output += "🏆 <span style='color:#e74c3c;'>Runner 2 is faster!</span><br>";
        output += "Winner: <span style='color:#e74c3c;'>Runner 2</span><br>";
    }
    
    output += "<br><em>In a real implementation, this would use prompt() to get user input.</em>";
    
    displayAssignmentsOutput("5. Running Race Analyzer", output);
}

function runPattern() {
    let output = "<strong>Assignment 6: Pattern Generator</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Create a diamond pattern using asterisks.<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Create a symmetrical diamond pattern<br>";
    output += "2. Use loops to generate the pattern<br><br>";
    
    output += "<strong>Generated Pattern:</strong><br>";
    
    const size = 4;
    const maxStars = size * 2 - 1;
    
    // Top half of diamond
    for (let i = 1; i <= size; i++) {
        const stars = i * 2 - 1;
        const spaces = (maxStars - stars) / 2;
        output += "&nbsp;".repeat(spaces * 3);
        output += "* ".repeat(stars);
        output += "<br>";
    }
    
    // Bottom half of diamond
    for (let i = size - 1; i >= 1; i--) {
        const stars = i * 2 - 1;
        const spaces = (maxStars - stars) / 2;
        output += "&nbsp;".repeat(spaces * 3);
        output += "* ".repeat(stars);
        output += "<br>";
    }
    
    output += "<br><strong>Code Logic:</strong><br>";
    output += "1. Calculate number of stars for each row<br>";
    output += "2. Calculate spaces needed for centering<br>";
    output += "3. Use nested loops for pattern generation";
    
    displayAssignmentsOutput("6. Pattern Generator", output);
}

function runCheckName() {
    let output = "<strong>Assignment 7: Name Validator</strong><br><br>";
    
    output += "<strong>Problem Statement:</strong><br>";
    output += "Check if the entered name matches 'Naciima' (case insensitive).<br><br>";
    
    output += "<strong>Requirements:</strong><br>";
    output += "1. Accept user input for name<br>";
    output += "2. Check if name matches 'Naciima'<br>";
    output += "3. Provide appropriate response<br><br>";
    
    output += "<strong>Simulated Output:</strong><br>";
    
    // Simulated user input
    const simulatedName = "Naciima";
    
    output += "Entered name: " + simulatedName + "<br><br>";
    
    if (simulatedName.toLowerCase() === "naciima") {
        output += "✅ <span style='color:#2ecc71; font-size: 1.2rem;'>Welcome Naciima!</span><br>";
        output += "Status: <span style='color:#2ecc71;'>Name recognized</span><br>";
    } else {
        output += "❌ <span style='color:#e74c3c;'>Name not recognized.</span><br>";
        output += "Status: <span style='color:#e74c3c;'>Name not found in system</span><br>";
    }
    
    output += "<br><em>In a real implementation, this would use prompt() to get user input.</em>";
    
    displayAssignmentsOutput("7. Name Validator", output);
}

// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.cssText = `
        display: none;
        position: absolute;
        right: 20px;
        top: 20px;
        background: #3498db;
        color: white;
        border: none;
        font-size: 24px;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 5px;
        z-index: 1000;
        transition: all 0.3s;
        box-shadow: 0 3px 5px rgba(52, 152, 219, 0.3);
    `;
    
    mobileMenuBtn.onmouseover = () => {
        mobileMenuBtn.style.backgroundColor = '#2980b9';
        mobileMenuBtn.style.transform = 'scale(1.1)';
    };
    
    mobileMenuBtn.onmouseout = () => {
        mobileMenuBtn.style.backgroundColor = '#3498db';
        mobileMenuBtn.style.transform = 'scale(1)';
    };
    
    document.body.appendChild(mobileMenuBtn);
    
    // Check window size and toggle mobile menu
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            nav.style.flexDirection = 'column';
            nav.style.display = 'none';
            nav.style.position = 'fixed';
            nav.style.top = '80px';
            nav.style.left = '0';
            nav.style.right = '0';
        
            nav.style.backgroundColor = '#34495e';
            nav.style.zIndex = '999';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            nav.style.borderRadius = '0 0 10px 10px';
        } else {
            mobileMenuBtn.style.display = 'none';
            nav.style.flexDirection = 'row';
            nav.style.display = 'flex';
            nav.style.position = 'static';
            nav.style.padding = '15px';
        }
    }
    
    mobileMenuBtn.addEventListener('click', function() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
            nav.style.animation = 'slideDown 0.3s ease';
        } else {
            nav.style.display = 'none';
        }
    });
    
    // Add animation for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initial check
    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !nav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target) &&
            nav.style.display === 'flex') {
            nav.style.display = 'none';
        }
    });
});

// Initialize button styles
addButtonStyles();
addDemoButtonStyles();