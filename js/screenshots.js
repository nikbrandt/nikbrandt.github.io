$(".button-collapse").sideNav();

$(document).ready(function() {
    // add files to this array.
    var files = [ 'http://www.use.com/images/s_5/c4f9a1022967fe328a38_1.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_2.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_3.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_4.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_5.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_6.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_7.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_8.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_10.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_11.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_12.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_13.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_14.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_15.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_16.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_17.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_18.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_19.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_20.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_21.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_22.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_23.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_24.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_25.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_26.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_27.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_28.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_29.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_30.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_31.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_32.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_33.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_34.jpg',
        'http://www.use.com/images/s_5/c4f9a1022967fe328a38_35.jpg'
    ];

    var cols = ['<div class="row"><div class="col s12 m6 l4 xl3">', '<div class="col s12 m6 l4 xl3">', '<div class="col s12 m6 l4 xl3">', '<div class="col s12 m6 l4 xl3">'];

    var cardFront = '<div class="card hoverable"><div class="card-image"><img class="materialboxed" src="';
    var cardEnd = '"></div></div>';

    var col = 0;
    for (var i = 0; i < files.length; i++) {
        cols[col] += cardFront + files[i] + cardEnd;
        col++;
        if (col === 4) col = 0;
    }

    var final = cols[0] + '</div>' + cols[1] + '</div>' + cols[2] + '</div>' + cols[3] + '</div></div>';

    $(".gallery").html(final);
    $('.materialboxed').materialbox();
});