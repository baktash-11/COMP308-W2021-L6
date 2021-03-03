//custom javascript
//IIFE
(() => {
    function Start(){
        console.log(`%c App Started`, "font-size:25px; color:blue")

         $(".btn-danger").click(function(event){
            if(!confirm("Are you sure???")){
                event.preventDefault();
                window.location.assign('/contact-list');
            }
         });
        
    }
    window.addEventListener("load", Start);
})();

//have to test this later
/* $('.delete').on("click", function (e) {
    e.preventDefault();

    var choice = confirm($(this).attr('data-confirm'));

    if (choice) {
        window.location.href = $(this).attr('href');
    }
}); */