//map
var mapExample = [4,2,3,4,5]
var mapDisplay = document.getElementById('map')
mapDisplay.innerHTML = mapExample;
document.getElementById('double').addEventListener('click', function() {
  mapExample = mapExample.map(//write your code here)
  mapDisplay.innerHTML = mapExample;
})

//filter
var filterExample = [4,2,3,4,5]
var filterDisplay = document.getElementById('filter')
filterDisplay.innerHTML = filterExample;
document.getElementById('onlyEven').addEventListener('click', function() {
  filterExample = filterExample.filter(//write your code here)
  filterDisplay.innerHTML = filterExample;
})