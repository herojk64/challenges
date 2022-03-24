function toggleSwitch(){
    
    
try{
    review=document.getElementById('review');
    thanks=document.getElementById('thanks');
    rateings=document.getElementsByName("rating");
    for(i=0;i<rateings.length;i++){

    if(rateings[i].checked){
       rateing=rateings[i].value;
    }

    }

    rating_display=document.getElementById('rating-display');
    review.style.display = "none";
    thanks.style.display = "block";
    
    
    rating_display.style.background = "hsl(216, 12%, 54%,0.1)";
    rating_display.style.borderRadius="1rem";
    rating_display.style.color="hsl(25, 97%, 53%)";
    rating_display.style.alignItems="center";
    rating_display.style.justifyContent="center";
    rating_display.innerHTML="You selected "+rateing+" out of 5"
    
}catch(e){
        window.alert('Please Rate 1 to 5');
        review.style.display = "block";
        thanks.style.display = "none";
    }
    
    
}
