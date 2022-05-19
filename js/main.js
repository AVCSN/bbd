let currentTime = new Date()
let weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let weekday = weekdayArr[currentTime.getDay()]
let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = monthArr[currentTime.getMonth()]
let day = String(currentTime.getDate()).padStart(2, '0')
let currentDay = `${weekday}, ${day} ${month}`
document.querySelector('#dateAndDay').innerText = currentDay

let articleALink
let articleBLink
let articleCLink
let articleDLink

fetch('https://dog.ceo/api/breeds/image/random/8')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.message)
        document.querySelector('.nonBgImgA').src = data.message[0]
        document.querySelector('.nonBgImgB').src = data.message[1]
        document.querySelector('.nonBgImgC').src = data.message[2]
        document.querySelector('.leftBig article').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${data.message[3]})`
        articleALink = data.message[4]
        articleBLink = data.message[5]
        articleCLink = data.message[6]
        articleDLink = data.message[7]
        if (window.innerWidth > 480) {
            document.querySelector('.articleA').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleALink})`
            document.querySelector('.articleB').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleBLink})`
            document.querySelector('.articleC').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleCLink})`
            document.querySelector('.articleD').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleDLink})`
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

window.addEventListener('resize', viewportCheck)
function viewportCheck() {
    if (window.innerWidth > 480) {
        document.querySelector('.articleA').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleALink})`
        document.querySelector('.articleB').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleBLink})`
        document.querySelector('.articleC').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleCLink})`
        document.querySelector('.articleD').style.backgroundImage = `linear-Gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url(${articleDLink})`
    } if (window.innerWidth <= 480) {
        document.querySelector('.articleA').style.backgroundImage = 'none'
        document.querySelector('.articleB').style.backgroundImage = 'none'
        document.querySelector('.articleC').style.backgroundImage = 'none'
        document.querySelector('.articleD').style.backgroundImage = 'none'
    }
}
viewportCheck()