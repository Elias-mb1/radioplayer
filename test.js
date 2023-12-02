<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sveriges Radio Channels</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 20px;
    }

    h2 {
      color: #333;
    }

    .channel {
      background-color: #fff;
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .channel img {
      max-width: 100%;
      border-radius: 8px;
    }
  </style>
</head>
<body>

<div id="channelsContainer"></div>

<script>
  // Fetch data from Sveriges Radio API
  fetch('https://api.sr.se/api/v2/channels/?format=json')
    .then(response => {
      // Check if fetch was successful
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      // Return JSON format of the response
      return response.json();
    })
    .then(data => {
      // Loop through each channel in data.channels
      data.channels.forEach(channel => {
        // Create a new HTML element for each channel
        const channelElement = document.createElement('div');
        channelElement.classList.add('channel');
        channelElement.innerHTML = `
          <h2>${channel.name}</h2>
          <img src="${channel.image}" alt="${channel.name}" />
          <p>Colour: ${channel.color}</p>
          <audio controls>
            <source src="${channel.liveaudio.url}" type="audio/mpeg" />
          </audio>
        `;
        // Add the created element to the HTML document
        document.getElementById('channelsContainer').appendChild(channelElement);
      });
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Fetch error:', error);
    });
</script>

</body>
</html>

