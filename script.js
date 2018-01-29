jQuery(function() {

    // Index loader
    setTimeout( function() {
        jQuery('.loader').hide(500);
    }, 2000);

    // Handle Hardward form options
    jQuery('.myForm').on('submit', function(e) {
        e.preventDefault();
        jQuery('input[type="checkbox"]:checked').each( function() {
            console.log(jQuery(this).attr('id') + '=true');
        });

        jQuery('input[type="radio"]:checked').each( function() {
            console.log(jQuery(this).attr('name') + ' = ' + jQuery(this).attr('id'));
        });
    });

    // Handle robot search
    jQuery('.searchbox').on('keyup', function() {
        var value = jQuery(this).val();
        console.log(value);

        jQuery('.robots-catalog>div').each( function() {
            var item = jQuery(this);

            var title = item.find('h4').text().toLowerCase();

            if( title.indexOf(value) >= 0 ) {
                jQuery(this).show(500);
            }else{
                jQuery(this).hide(500);
            }
        })
    })
});