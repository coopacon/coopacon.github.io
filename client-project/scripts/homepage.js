$(document).ready( () => {
    $('.dropped-info').hide();
    $('.dropdown').on('click', () => {
        //alert("Clicked on");
        $('.dropped-info').toggle();
        $('.dropdown').mouseleave(() => {
            $('.dropped-info').hide();
            
        });
    });
});


//Get every location where data needs to be imported
const placeToInclude = document.querySelectorAll("[data-include]");
//Loop for every element
placeToInclude.forEach( async (element) => {
    //Location path to element
    const dataLocation = element.getAttribute("data-include");
    //If location is found
    if (dataLocation){
        try {
            //Establish the data to be used
            const dataToInclude = await fetch(dataLocation);
            if (dataToInclude.ok){
                //If data is valid, then replace the elements content w/ the respective text
                const content = await dataToInclude.text();
                element.innerHTML = content;
            } else {
                //Error Handling
                console.error(error.content);
            }
        //Error Handling
        } catch (error){
            console.error(error.content);
        }
    }
});
