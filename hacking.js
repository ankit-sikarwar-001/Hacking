async function mode() {
    await string2();
    document.body.style.backgroundImage = `url("https://media.tenor.com/oJoWZIWxt3wAAAAM/the-hacker-matrix.gif")`;
  let x = await string1();
   await string3();
  
  setTimeout(() => {
    string4();
  }, 4000);
}

function string1() {
  return new Promise((res, rej) => {
    let str1 = "Your System is Hacked Now ";
    document.querySelector("#para1").innerText += "\n\n";
    for (let i = 0; i < str1.length; i++) {
      setTimeout(() => {
        document.querySelector("#para1").innerText += str1[i];
        console.log(str1[i]);
        if (i === str1.length - 1) {
          res(); // Resolve the promise when the loop completes
        }
      }, i * 100);
    }
  });
}

function string2() {
  return new Promise((res, rej) => {
    let str2 = "Taking Access to storage and Accounts...";
    for (let j = 0; j < str2.length; j++) {
      setTimeout(() => {
        document.querySelector("#para1").innerText += str2[j];
        console.log(str2[j - 1]);
        if (j === str2.length-1) {
          res(); // Resolve the promise when the loop completes
        }
      }, j * 150);
    }
  });
}

function string3() {
  return new Promise((res, rej) => {
    let str2 = "Transferring your all files and data to \n the server ";
    document.querySelector("#para1").innerText += "\n\n";
    for (let j = 1; j <= str2.length; j++) {
      setTimeout(() => {
        document.querySelector("#para1").innerText += str2[j - 1];
        console.log(str2[j - 1]);
        if (j === str2.length) {
          res(); // Resolve the promise when the loop completes
        }
      }, j * 200);
    }
  });
}

function string4() {
  return new Promise((res, rej) => {
    let str2 = "Cleaning up all history...";
    document.querySelector("#para1").innerText += "\n\n";
    for (let j = 1; j <= str2.length; j++) {
      setTimeout(() => {
        document.querySelector("#para1").innerText += str2[j - 1];
        console.log(str2[j - 1]);
        if (j === str2.length) {
          res(); // Resolve the promise when the loop completes
        }
      }, j * 200);
    }
  });
}

mode();
