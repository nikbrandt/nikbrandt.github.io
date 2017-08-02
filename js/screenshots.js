$(document).ready(function() {
    // add more images to the gallery here.
    var files = [ 'http://thumbs.imagebam.com/c3/3f/f8/42d6d4570372593.jpg',
        'http://thumbs.imagebam.com/e1/c8/44/462fac570372763.jpg',
        'http://thumbs.imagebam.com/a5/be/fc/3d296a570372883.jpg',
        'http://thumbs.imagebam.com/96/94/d4/81ea16570373203.jpg',
        'http://thumbs.imagebam.com/4d/d1/e1/6fabe4570373293.jpg',
        'http://thumbs.imagebam.com/e0/46/81/a55f88570373383.jpg',
        'http://thumbs.imagebam.com/7f/13/e6/72ffd7570373453.jpg',
        'http://thumbs.imagebam.com/b5/35/83/9b2ad2570373553.jpg',
        'http://thumbs.imagebam.com/28/bb/f9/0df473570373703.jpg',
        'http://thumbs.imagebam.com/c9/50/63/db5135570373773.jpg',
        'http://thumbs.imagebam.com/35/bd/24/07c2dc570373823.jpg',
        'http://thumbs.imagebam.com/cc/f6/18/fbd790570373853.jpg',
        'http://thumbs.imagebam.com/73/e3/d9/87207a570373873.jpg',
        'http://thumbs.imagebam.com/07/47/69/b80274570373913.jpg',
        'http://thumbs.imagebam.com/6b/f6/c4/9473a3570373933.jpg',
        'http://thumbs.imagebam.com/4f/97/48/0a0524570373973.jpg',
        'http://thumbs.imagebam.com/40/e6/be/d83db6570373993.jpg',
        'http://thumbs.imagebam.com/92/33/50/109a18570374023.jpg',
        'http://thumbs.imagebam.com/67/38/3e/bcb0b3570374043.jpg',
        'http://thumbs.imagebam.com/66/f6/41/3e6b41570374063.jpg',
        'http://thumbs.imagebam.com/4a/c6/82/771b98570374123.jpg',
        'http://thumbs.imagebam.com/da/6f/a3/db3d00570374133.jpg',
        'http://thumbs.imagebam.com/11/34/94/9f6594570374173.jpg',
        'http://thumbs.imagebam.com/26/55/72/6024c2570374183.jpg',
        'http://thumbs.imagebam.com/b6/5d/2c/78e66f570374213.jpg',
        'http://thumbs.imagebam.com/12/ce/4a/be986b570374243.jpg',
        'http://thumbs.imagebam.com/d8/95/4d/7afff1570374263.jpg',
        'http://thumbs.imagebam.com/29/cc/f9/fdc596570374293.jpg',
        'http://thumbs.imagebam.com/b0/1b/63/4e4a3b570374303.jpg',
        'http://thumbs.imagebam.com/ca/da/18/25bd4a570374323.jpg',
        'http://thumbs.imagebam.com/35/d6/68/4eca8b570374393.jpg',
        'http://thumbs.imagebam.com/71/e0/a6/aa85ab570374413.jpg',
        'http://thumbs.imagebam.com/f8/2d/c4/17f18f570374433.jpg' ];

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