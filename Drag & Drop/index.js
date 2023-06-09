let IMGBOX=document.querySelector('.imgBox');

const Boxes=document.getElementsByClassName('Box');


const reset=document.querySelector('.reset');

IMGBOX.addEventListener('dragstart', (e)=>{
   e.target.className += ' hold';
    setTimeout(()=>{
        e.target.className = 'hide';
    },0);
});

IMGBOX.addEventListener('dragend', (e)=>{
    console.log("dragend trigged")
    e.target.className='imgBox';
});

for (boxe of Boxes) {
    boxe.addEventListener('dragover', (e)=>{
        e.preventDefault();
    })

    boxe.addEventListener('drop',(e)=>{
        e.target.append(IMGBOX);
    })

}


reset.addEventListener("click", ()=>{
    const New=document.querySelector('.nn');
    IMGBOX.className = 'hide';
    New.className="imgBox"
    
})







