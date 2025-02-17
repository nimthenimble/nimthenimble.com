document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey) {
      const key = event.key.toUpperCase(); 
      const soundMap = {
          "A": "sounds/A6.mp3",
          "B": "sounds/B4.mp3",
          "C": "sounds/C2.mp3",
          "D": "sounds/D5.mp3",
          "E": "sounds/E3.mp3",
          "F": "sounds/F7.mp3",
          "G": "sounds/G1.mp3"
      };

      if (soundMap[key]) {
          const audio = new Audio(soundMap[key]);
          audio.play();
      }
  }
});
