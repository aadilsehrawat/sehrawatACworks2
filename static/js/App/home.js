function readmore(){
    document.getElementById('readMoreText').innerHTML = ". Our certified technicians are equipped to handle various AC models and brands, delivering tailored solutions that meet your specific needs and budget. Trust us to keep your home or business cool and comfortable with our reliable, customer-focused services.";
    document.getElementById('readMore').style.display = 'none';
    document.getElementById('readLess').style.display = 'inline-block';
}

function readless(){
    document.getElementById('readMoreText').innerHTML = "...";
    document.getElementById('readLess').style.display = 'none';
    document.getElementById('readMore').style.display = 'inline-block';
}