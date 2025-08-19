// font size change 
//  var $affectedElements = $("p, h1, h2, h3, h4, h5, h6, span, a, div"); 
//       $affectedElements.each( function(){
//        var $this = $(this);
//        $this.data("orig-size", $this.css("font-size") );
//       });
      
//       $(".btn-increase").click(function(){
//        changeFontSize(1);
//       })
      
//       $(".btn-decrease").click(function(){
//        changeFontSize(-1);
//       })
      
//       $(".btn-orig").click(function(){
//        $affectedElements.each( function(){
//              var $this = $(this);
//              $this.css( "font-size" , $this.data("orig-size") );
//         });
//       })
      
//       function changeFontSize(direction){
//          $affectedElements.each( function(){
//              var $this = $(this);
//              $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
//          });
//       }
var $affectedElements = $("p, h1, h2, h3, h4, h5, h6, span, a, div");
$affectedElements.each(function () {
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size"));
});

$(".btn-increase").click(function () {
  changeFontSize(1);
});

$(".btn-decrease").click(function () {
  changeFontSize(-1);
});

$(".btn-orig").click(function () {
  $affectedElements.each(function () {
    var $this = $(this);
    $this.css("font-size", $this.data("orig-size"));
  });
});

function changeFontSize(direction) {
  $affectedElements.each(function () {
    var $this = $(this);
    var currentSize = parseFloat($this.css("font-size"));
    $this.css("font-size", currentSize + direction + "px");
  });
}







//darkmode stay forever
var darkmode = document.getElementById("darkmode");
var body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  // Check if dark mode is currently enabled and update the button icon
  var isDarkMode = body.classList.toggle("darkmode");
  darkmode.className = isDarkMode ? "t-Icon fa fa-sun-o" : "t-Icon fa fa-moon-o";
  // Save dark mode preference to local storage
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}
// Add a click event listener to the dark mode toggle element
darkmode.addEventListener("click", toggleDarkMode);

// Check for dark mode preference in local storage on page load
window.addEventListener("DOMContentLoaded", function () {
  var darkModePreference = localStorage.getItem("darkMode");
  if (darkModePreference === "enabled") {
    body.classList.add("darkmode");
    darkmode.className = "t-Icon fa fa-sun-o";
  }
});











//screen Reader switch

  var sr = document.getElementById("sound");
  console.log(sr.className);
  sr.onclick = function(){
  if(sr.className == "t-Icon fa fa-volume-up"){
    sr.className= "t-Icon fa fa-volume-off"
    }
    else{
        sr.className= "t-Icon fa fa-volume-up"
        
    }
  }



// Screen Reader
function readText() {
  let checkBoxSR = document.getElementById("screenReaderSwitch");
  const bodyElement = document.querySelector("body");
  const textContent = getTextFromElement(bodyElement);
  const utterance = new SpeechSynthesisUtterance(textContent);

  if (checkBoxSR.checked) {
    speechSynthesis.speak(utterance);
  } else {
    speechSynthesis.cancel();
  }
}
// Screen Reader



function getTextFromElement(element) {
  let text = "";

        // elements excluded
function shouldExclude(element) {
  return (
    element.tagName === "SCRIPT" ||
    element.tagName === "HEAD" ||
    element.style.display === "none" ||
    element.style.visibility === "hidden" ||
    element.classList.contains("gigw") ||
    !element.closest("body")
  );
}


  // Recursively traverse child elements of the provided element
  function traverse(element) {
    for (let node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        // If it's a text node, add its content to the text variable
        text += node.textContent;
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        !shouldExclude(node)
      ) {
        // If it's an element node that should not be excluded, recursively traverse its children
        traverse(node);
      }
    }
  }

  // Start the traversal from the provided element
  traverse(element);

  return text;
}








// mapclusterin
// superfunction
// Function to handle SVG click and trigger button click
function handleSvgClick(buttonId) {
  return function () {
    console.log('SVG clicked for button ID:', buttonId);
    document.getElementById(buttonId).click();
  };
}

// Attach event listener to handle object load
document.getElementById('svgObject').addEventListener('load', function () {
  var svgDocument = this.contentDocument;

  if (svgDocument) {
    // Add click event listener to each SVG path
    var svgPaths = svgDocument.querySelectorAll('path');
    svgPaths.forEach(function (svgPath, index) {
      var buttonId = 'D' + index;
      svgPath.addEventListener('click', handleSvgClick(buttonId));
    });
  }
});





