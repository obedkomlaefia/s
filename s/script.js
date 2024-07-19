// document.getElementById('print-button').addEventListener('click', function() {
//    var loadingElement = document.getElementById('loading');
//    loadingElement.classList.remove('loading-hidden');
//    loadingElement.classList.add('loading-visible');

//    // Simulate loading process (e.g., 3 seconds)
//    setTimeout(function() {
//        loadingElement.classList.remove('loading-visible');
//        loadingElement.classList.add('loading-hidden');
//    }, 3000);
// });

document.getElementById('#print-button').addEventListener('click', function() {
   var loadingElement = document.getElementById('#loading');
   if (loadingElement.classList.contains('loading-hidden')) {
       loadingElement.classList.remove('loading-hidden');
       loadingElement.classList.add('loading-visible');
   } else {
       loadingElement.classList.remove('loading-visible');
       loadingElement.classList.add('loading-hidden');
   }
});
