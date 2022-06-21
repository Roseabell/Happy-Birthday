var canvas=new fabric.canvas('myCanvas');
var x =document.getElementById('myAudio');
block_image_width=30;
block_image_height=30;
var block_image_object="";
function block_image_update(){
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        
        block_image_object=Img;
        block_image_width.scaleToWidth(700);
        block_image_height.scaleToHeight(510);
        block_image_object.set({  
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
<button class="btn btn-danger btn-lg"id="myButton"
onclick="playSound()">Happy Bday!!</button>
        

}
   

    
    
            
            


    
        
       
    
        
        
        function playSound(){
            x.play();

        }
        