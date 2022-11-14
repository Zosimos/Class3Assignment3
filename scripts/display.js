function displayCards(){
    let card="";
    //travel the array (need a for loop)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //add + after card to add repeated entries instead of removing previous entry and adding a new one
        card+=`
            <petdiv class="pet">
                <table>
                <tr>
                <th>${pet.name}</th>
                </tr>
                <tr>
                <td> Age: ${pet.age}</td>
                </tr>
                <tr>
                <td> Gender: ${pet.gender}</td>
                </tr>
                <tr>
                <td> Breed: ${pet.breed}</td>
                </tr>
                <tr>
                <td> Service: ${pet.service}</td>
                </tr>
                <tr>
                <td> Owner: ${pet.ownerName}</td>
                </tr>
                <tr>
                <td> Phone: ${pet.contactPhone}</td>
                </tr>
                </table>
            </petdiv>
        `;
        
        
    }
    
    console.log(card);
    //create the HTML template with all the values we want to insert for card
    //append the template on the html
    document.getElementById("pets").innerHTML=card;
}