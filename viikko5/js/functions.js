document.getElementById('dice').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imgElement = document.querySelector('#dice img');
    imgElement.src = './img/' + randomNumber + '.png';
});