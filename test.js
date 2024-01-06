fetch("https://baidu.com").then((data) => {
    console.log(data);
  });

  setTimeout(() => {
    fetch("https://baidu.com").then((data) => {
      document.getElementById("root").textContent = data
    });
  }, 5000);