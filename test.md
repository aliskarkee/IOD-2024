 /* /* first-letters navigation body {
     font-family: sans-serif;
     font-size: 16px;
 }

 a {
     text-decoration: none;
     color: purple;
 }

 .background-1 {
     background: #68B0AB;
 }

 .background-2 {
     background: #8FC0A9;
 }

 .background-3 {
     background: #C8D5B9;
 }

 .background-4 {
     background: #FAF3DD;
 }

 .m-20 {
     margin: 20px;
 }

 .h-80 {
     height: 80px;
 }

 .h-400 {
     height: 400px;
 }

 .w-80 {
     width: 80px;
 }

 /* Add your answers here, do not modify the above CSS */

 .flex-container {
     display: flex;
 }

 /* 2. Basic Flexbox */
 .flex-item-1 {
     flex: 1;
 }

 .flex-item-2 {
     flex: 2;
 }

 .flex-item-3 {
     flex: 3;
 }

 .flex-item-4 {
     flex: 4;
 }

 /* 3. Centering with Flexbox */
 .flex-center {
     justify-content: center;
     align-items: center;
 }

 /* 4. Assigning Leftover Space */
 .flex-space-between {
     justify-content: space-around;
 }

 /*  5.wrapping items */
 .flex-wrap {
     flex-wrap: wrap;
 }

 .flex-basis-item-50 {
     flex-basis: 50%;
     /* Each item takes up 50% of the container width */
 }

 /* 6. Changing Direction */
 .flex-container-column {
     flex-direction: column;
     /* Arrange items in a column */
 }

 /* 7. Flexbox for Horizontal Navigation */

 /* Flexbox container for menu */
 .flex-menu {
     display: flex;
     /* Set container to flexbox */
     justify-content: center;
     /* Center the menu items in the row */
     list-style: none;
     /* Remove default list styling */
     padding: 0;
     /* Remove default padding */
     margin: 0;
     /* Remove default margin */
 }

 /* Menu items styling */
 .flex-menu li {
     flex-grow: 1;
     /* Distribute space evenly among all menu items */
     text-align: center;
     /* Center the text inside each menu item */
     padding: 10px 20px;
     /* Add some padding around the text */
 }

 /* Specific order for menu items */
 .flex-menu .fifth-item {
     order: 5;
     /* Move the "FAQs" item to the last position */
 }

 /* Aligning menu items to the right */
 .flex-menu-right {
     justify-content: flex-end;
     /* Align menu items to the right */
 }

 /* Aligning menu items to the center */
 .flex-menu-center {
     justify-content: center;
     /* Align menu items to the center */
 } 
  