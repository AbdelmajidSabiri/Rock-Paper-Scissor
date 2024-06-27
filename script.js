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

        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc

        //generate random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3)

        let cpuImages = ["images/paper.png","images/rock.png","images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];
    });
});