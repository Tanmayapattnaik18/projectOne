let selects = document.querySelectorAll('select');

selects.forEach(function(select) {
    select.addEventListener('mouseenter', function() {
        for (let i = 0; i < select.options.length; i++) {
            select.options[i].style.display = 'block';
        }
    });

    select.addEventListener('mouseleave', function() {

            for (let i = 0; i < select.options.length; i++) {
                select.options[i].style.display = 'none';
            }
            select.options[select.selectedIndex].style.display = 'block';
        
    });


    for (let i = 0; i < select.options.length; i++) {
        if (i !== select.selectedIndex) {
            select.options[i].style.display = 'none';
        }
    }
});
