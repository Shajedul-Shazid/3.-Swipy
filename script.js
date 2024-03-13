function showSidbar() {
	// console.log("This is working fine just");
	let siebarSec = document.querySelector(".sidbar_sec");
	if(siebarSec.style.right === "0%"){
		siebarSec.style.right = "-100%";
		siebarSec.style.transition = "1s";
		
	}
	else{
		siebarSec.style.right = "0%";
	}
}

function hideSide() {
	siebarSec.style.right = "0%";
	siebarSec.style.transition = "1s";
}




const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.accordion-body')
    body.classList.toggle('active')
  })
})

// tab is here 

// Define variables
var tabLabels = document.querySelectorAll("#tabs li");
var tabPanes = document.getElementsByClassName("tab-contents");

function activateTab(e) {
  e.preventDefault();
  
  // Deactivate all tabs
  tabLabels.forEach(function(label, index){
    label.classList.remove("active");
  });
  [].forEach.call(tabPanes, function(pane, index){
    pane.classList.remove("active");
  });
  
  // Activate current tab
  e.target.parentNode.classList.add("active");
  var clickedTab = e.target.getAttribute("href");
  document.querySelector(clickedTab).classList.add("active");
}

// Apply event listeners
tabLabels.forEach(function(label, index){
  label.addEventListener("click", activateTab);
});

// counting in js

(function(){
	numberWang = {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		// Required parameters
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		// Optional parameters
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		// if both numbers ARE numbers
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}
			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}
			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}
				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}
				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}
			}
		}
	}
	// End of function	
	
	// Make an API call:
	// $.getJSON("https://cpv2api.com/profile/cameronfitzwilliam", function(resp){
		// If successful!
		// if(resp.success){
			// Get followers
		var userFollowers = 7;
			// Use function
			numberWang.countUpOrDown('numberWang', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s");
		// }
	// });

})();

// client satisfied

(function(){
	/*
	//
	// This function relies on animate.css! 
	//
	// Numberwang.countUpOrDown -- How to use:
	// 
	//	numberWang.countUpOrDown('yourDivId', startingNumber(can be negative or positive), endingNumber(can be negative or positive), secondsBetweenNumbers, effectBetweenNumbers, transitionDurationBetweenNumber, finalEndingEffect, finalEndingEffectDuration);
	//
	// Check numberWang's github page:
	// https://github.com/CameronFitzwilliam/numberWang
	//
	// You can find the animate effects on the github page:
	// https://github.com/daneden/animate.css
	//
	*/
	clientSatisfied = {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		// Required parameters
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		// Optional parameters
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		// if both numbers ARE numbers
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}
			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}
			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}
				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}
				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}
			}
		}
	}
	// End of function	
	
	// Make an API call:
	// $.getJSON("https://cpv2api.com/profile/cameronfitzwilliam", function(resp){
		// If successful!
		// if(resp.success){
			// Get followers
		var userFollowers = 70;
			// Use function
			clientSatisfied.countUpOrDown('clientSatisfied', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s");
		// }
	// });

})();

// completed project 

(function(){
	/*
	//
	// This function relies on animate.css! 
	//
	// Numberwang.countUpOrDown -- How to use:
	// 
	//	numberWang.countUpOrDown('yourDivId', startingNumber(can be negative or positive), endingNumber(can be negative or positive), secondsBetweenNumbers, effectBetweenNumbers, transitionDurationBetweenNumber, finalEndingEffect, finalEndingEffectDuration);
	//
	// Check numberWang's github page:
	// https://github.com/CameronFitzwilliam/numberWang
	//
	// You can find the animate effects on the github page:
	// https://github.com/daneden/animate.css
	//
	*/
	completedProject = {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		// Required parameters
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		// Optional parameters
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		// if both numbers ARE numbers
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}
			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}
			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}
				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}
				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}
			}
		}
	}
	// End of function	
	
	// Make an API call:
	// $.getJSON("https://cpv2api.com/profile/cameronfitzwilliam", function(resp){
		// If successful!
		// if(resp.success){
			// Get followers
		var userFollowers = 50;
			// Use function
			completedProject.countUpOrDown('completedProject', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s");
		// }
	// });

})();