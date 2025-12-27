(function() {
  'use strict';
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilter);
  } else {
    initFilter();
  }
  
  function initFilter() {
    var filterButtons = document.querySelectorAll('.keyword-btn');
    var publications = document.querySelectorAll('.publication-item');
    
    console.log('Publications filter initialized');
    console.log('Found ' + filterButtons.length + ' filter buttons');
    console.log('Found ' + publications.length + ' publications');
    
    // Add click handlers to each button
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        var keyword = this.getAttribute('data-keyword');
        console.log('Clicked keyword: ' + keyword);
        
        // Update active button
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter publications
        publications.forEach(function(pub) {
          var pubKeywords = pub.getAttribute('data-keywords') || '';
          console.log('Publication keywords: "' + pubKeywords + '"');
          
          if (keyword === 'all') {
            // Show all publications
            pub.classList.remove('hidden');
          } else if (pubKeywords === '') {
            // No keywords, hide it when filtering
            pub.classList.add('hidden');
          } else {
            // Check if the keyword is in the comma-separated list
            var keywordList = pubKeywords.split(',');
            var found = false;
            
            for (var i = 0; i < keywordList.length; i++) {
              if (keywordList[i] === keyword) {
                found = true;
                break;
              }
            }
            
            if (found) {
              pub.classList.remove('hidden');
            } else {
              pub.classList.add('hidden');
            }
          }
        });
        
        console.log('Filtering complete');
      });
    });
    
    console.log('Event listeners attached');
  }
})();
