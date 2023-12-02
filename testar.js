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
            <div style="display:flex; display:inline-block; flex-direction:row;">
                <div >
                    <h2>${channel.name}</h2>
                    <img src="${channel.image}" alt="${channel.name}" />
                </div>
                <div > 
                    <audio controls>
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
