// Fetch data from Sveriges Radio API
fetch("https://api.sr.se/api/v2/channels/?format=json")
  .then((response) => {
    // Check if fetch was successful
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    // Return JSON format of the response
    return response.json();
  })
  .then((data) => {
    // Loop through each channel in data.channels
    data.channels.forEach((channel) => {
      // Create a new HTML element for each channel
      const channelElement = document.createElement("div");
      channelElement.classList.add("channel");
      channelElement.innerHTML = `
            <div style="display:flex; background-color:${changeColor(channel.name)}" class="parentWidth border" >
                <div class=" flex childWidth divWidth">
                    <img src="${channel.image}" alt="${channel.name}" />
                </div>
                <div class="flex innerBorder padding"> 
                    <h2>${channel.name}</h2>
                    <audio controls class="audio">
                        <source src="${channel.liveaudio.url}" type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        `;
      // Add the created element to the HTML document
      document.getElementById("channelsContainer").appendChild(channelElement);
    });
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch
    console.error("Fetch error:", error);
  });

  const changeColor =(name) =>{
    switch(name)
    {
      case "P1":
        return "#00FFFF";
        console.log(1)
        break;
      case "P2":
        return "#D2691E";
        console.log(2)
        break;
      case "P3":
        return "#8FBC8F";
        console.log(3)
        break;
      default:
        return "#9932CC";
        console.log(4)
        break;
    }
    
  }
