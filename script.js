const gameContainer = document.querySelector(".container")
userResult = document.querySelector(".user_result img")
cpuResult = document.querySelector(".cpu_result img")
result = document.querySelector(".result")
optionImages = document.querySelectorAll(".option_image")

//loop through each option image element

optionImages.forEach((image,index) =>{
    image.addEventListener("click", (e) => {
        //Add class "active" to pressed image
        image.classList.add("active");

        optionImages.forEach((image2, index2) => {
            // if the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Add delay
        let time = setTimeout(() => {

            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
    
            //generate random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
    
            //Set the cpu image to a random option from the array
            let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];
    
            //Assing letter values insted of words
            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];
    
            // create an objects containes all possible outcomes
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };
    
            // set the outcome value
            let outComeValue = outcomes[userValue + cpuValue];
    
            //The result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won`
        },2500)
    });
});