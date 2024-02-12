const audio = document.getElementById("audio");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const canvas = document.getElementById("waveform");
const ctx = canvas.getContext("2d");
let bufferLength = 256; // 设置缓冲区长度

// 创建音频分析器
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 512;
bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// 连接音频源和分析器
const source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioCtx.destination);

function draw() {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;

  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#007bff";

  ctx.beginPath();

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * HEIGHT) / 2;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
}

draw();

const audioControl = document.getElementById("audio-control");
let isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    audioControl.src = "../assets/Images/play.png";
  } else {
    audio.play();
    audioControl.src = "../assets/Images/pause.png";
  }
  isPlaying = !isPlaying;
}

audioControl.addEventListener("click", toggleAudio);
