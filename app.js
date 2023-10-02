     // Get video element and start button
     const video = document.getElementById('video');

     // Function to start the camera
     async function startCamera() {
        try {
            // Get user media (camera) access
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            // Set the video element's srcObject to the stream
            video.srcObject = stream;
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

   startCamera()






