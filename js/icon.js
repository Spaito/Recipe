document.addEventListener('DOMContentLoaded', function () {
    var plus = document.querySelector('#plus');
    var min = document.querySelector('#moins');
    plus.addEventListener('click', incrémenter);
    min.addEventListener('click', décrementer);



    function incrémenter() {
        var input = document.getElementById('number');
        let sus  = parseInt(input.textContent);
        var oldInput = sus;
        if (oldInput < 10) {
            input.textContent = oldInput + 1;
            newProportions(oldInput);
        }
    }

    function décrementer() {
        var input = document.getElementById('number');
        let sus = parseInt(input.textContent);
        var oldInput = sus;
        if (oldInput > 1) {
            input.textContent = oldInput - 1;
            newProportions(oldInput);
        }
    }


    function newProportions( oldInput) {
        var input = document.getElementById('number').textContent; // Récupérer la valeur de l'input

        var spans = document.querySelectorAll('span.hasToChange'); // Sélectionner tous les éléments spans

        for (var i = 0; i < spans.length; i++) {
            var span = spans[i];
            var inputValue = parseInt(input);//valeur
            var valeur = parseFloat(span.textContent); // Récupérer la valeur du span
            span.textContent  = ((valeur / oldInput )* inputValue).toFixed(1); // Calculer la nouvelle proportion 
        }
    }
});