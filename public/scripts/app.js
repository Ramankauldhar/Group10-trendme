

(function(){
    function Start()
    {
        console.log("App started...")
        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are You Sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/businessContacts');
                }
            });
        }
    }
    window.addEventListener("load",Start);

})();