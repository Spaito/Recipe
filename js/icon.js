document.addEventListener('DOMContentLoaded', function () {
    var plus = document.querySelector('#plus');
    var min = document.querySelector('#moins');
    plus.addEventListener('click', incrémenter);
    min.addEventListener('click', décrementer);



    function incrémenter() {
        var input = document.querySelector('#input');
        var oldInput = input.value;
        if (oldInput < 10) {
            input.value = parseInt(oldInput) + 1;
            newProportions(oldInput);
        }
    }

    function décrementer() {
        var input = document.querySelector('#input');
        var oldInput = input.value;
        if (oldInput > 1) {
            input.value = parseInt(oldInput) - 1;
            newProportions(oldInput);
        }
    }


    function newProportions( oldInput) {
        var input = document.getElementById('input').value; // Récupérer la valeur de l'input

        var spans = document.querySelectorAll('span'); // Sélectionner tous les éléments spans

        for (var i = 0; i < spans.length; i++) {
            var span = spans[i];
            var inputValue = parseInt(input);//valeur
            var valeur = parseInt(span.innerHTML); // Récupérer la valeur du span

                span.innerHTML = valeur / oldInput * inputValue; // Calculer la nouvelle proportion
        }
    }
});