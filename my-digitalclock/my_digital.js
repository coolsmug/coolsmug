setInterval(setClock, 1000)

const hourDiv = document.querySelector("[my-hour2]")
const minuteDiv = document.querySelector("[my-minute2]")
const secondDiv = document.querySelector("[my-second2]")
const hourOneDiv = document.querySelector("[my-hour]")
const minuteOneDiv = document.querySelector("[my-minute]")
const secondOneDiv = document.querySelector("[my-second]")
const bgsecondOneDiv = document.querySelector("[my-time]")
const bg2secondOneDiv = document.querySelector("[my-time2]")

const firstHourContainer = document.querySelector("[my-hour-containerOne]")
const secondHourContainer = document.querySelector("[my-hour-containerTwo]")
const firstMinuteContainer = document.querySelector("[my-minute-containerOne]")
const secondMinuteContainer = document.querySelector("[my-minute-containerTwo]")
const firstSecondContainer = document.querySelector("[my-second-containerOne]")
const secondSecondContainer = document.querySelector("[my-second-containerTwo]")

const MilliDiv = document.querySelector("[my-milli]")
const MilliDivones = document.querySelector("[my-millione]")
const bimPsing = document.querySelector("[bimp-bimp]")
const bimPsingOne = document.querySelector("[bimp-bimp-two]")
 
function setClock(){

    const d = new Date()
    const Sd = d.getSeconds()
    const Mt = d.getMinutes()
    const Hr = d.getHours() 
   

    let tsts=''
    switch (new Date().getSeconds()) {
        case 9:case 19:case 29:case 39:case 49:case 59:
        tsts= "rotateX(-360deg)"
            break;
        default:
            break;
    }
    secondOneDiv.style.transform =tsts
    secondOneDiv.style.transition= '3.5s ease'

    let tstss=''
    switch (new Date().getMinutes()) {
        case 10:case 20: case 30:case 40:case 50:case 60:
        tstss= "rotateX(-360deg)"
            break;
        default:
            break;
    }
    minuteOneDiv.style.transform =tstss
    minuteOneDiv.style.transition= '3.5s ease'

    let tstsss=''
    switch (new Date().getHours()) {
        case 0:case 1:case 2:case 3: case 4: case 5: case 6: case 7:
        case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:
        case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24:
        tstsss= "rotateX(-360deg)"
            break;        
        default:
            break;
    }
    hourOneDiv.style.transform =tstsss
    hourOneDiv.style.transition= '3.5 ease'

    let pm =''
    switch (new Date().getHours) {
        case 12:
        pm = "rotateX(-360deg)"
            break;
        case 0:
        pm = "rotateX(-360deg)"
            break
    
        default:
            break;
    }
    MilliDiv.style.transform = pm
    MilliDiv.style.transition= '3.5 ease'


    MyTimess(Hr)
    MyTime(Mt)
    MyTimeUpdate(Sd)
  
    setRatio(hourDiv, Hr)
    setRatio(minuteDiv, Mt)
    setRatio(secondDiv, Sd /2)  
    
    toTens()

    
}


/*-------function for Updating Am to Pm-----------------------------------------------------------=======*/

function toTens() {
   
    const d = new Date()
    const Hr = d.getHours()

   
    if (Hr >= 12){
        MilliDiv.innerHTML = "P"
        MilliDivones.innerHTML ="P"


        bimPsing.innerHTML ='M'
        bimPsingOne.innerHTML ="M"
        
       
    } else {
        MilliDiv.innerHTML = 'A' 
        bimPsing.innerHTML ='M'
        MilliDivones.innerHTML ="A"
        bimPsingOne.innerHTML ="M"
      
       
    } 
}

/*--------------setProperty Functions-----------------------------------------------------------------------------*/

function setRatio(element, loadRatio){
    element.style.setProperty('--rotation', (loadRatio) * -360)

    element.style.transition = "transform 2s ease"
    
}

/**------Below are the function for Adding Zero to the back of the time whenever the number is less than 10------- */

function MyTimeUpdate(mytimes) {
    const d = new Date()
    const Sd = d.getSeconds()
    let k =''
    let y =''
    if (mytimes < 10) {
            k = Sd.toLocaleString()

            k.split()
    
            let y = k.split()
    
            y.unshift(0)
           
            secondOneDiv.innerHTML = y[0]
            secondDiv.innerHTML = y[1] 
            firstSecondContainer.innerHTML = y[0]
            secondSecondContainer.innerHTML = y[1] 
    } 
    else{
        const k = Sd.toLocaleString()

        k.split()

        secondOneDiv.innerHTML = k[0]
        secondDiv.innerHTML = k[1]

        firstSecondContainer.innerHTML = k[0]
        secondSecondContainer.innerHTML = k[1] 
         } 
}


function MyTime(mytimes) {
    const d = new Date()
  
    const Mt = d.getMinutes()
   
    if (Mt < 10) {
           
            const j = Mt.toLocaleString()
        
            j.split()
    
            let yy = j.split()
            
            yy.unshift(0)

            minuteOneDiv.innerHTML = yy[0]
            minuteDiv.innerHTML = yy[1]
            firstMinuteContainer.innerHTML =yy[0]
            secondMinuteContainer.innerHTML = yy[1]
    }
    else{
      
        const j = Mt.toLocaleString()
       
        j.split()

        minuteOneDiv.innerHTML = j[0]
        minuteDiv.innerHTML = j[1]

        firstMinuteContainer.innerHTML =j[0]
        secondMinuteContainer.innerHTML = j[1]
            } 
    
}

function MyTimess(mytimes) {
    const d = new Date()
    let Hr = d.getHours()

    if (Hr > 12){
        Hr -= 12
        let p = Hr
        const W = p.toLocaleString()

        W.split()

        let baa = W.split()
        baa.unshift(0)
        
        hourOneDiv.innerHTML = baa[0]
        hourDiv.innerHTML = baa[1]   
        firstHourContainer.innerHTML = baa[0]
        secondHourContainer.innerHTML = baa[1]

    }   

    if (Hr < 10) {
           
            const j = Hr.toLocaleString()
        
            j.split()
    
            let yy = j.split()
            
            yy.unshift(0)
         
            hourOneDiv.innerHTML = yy[0]
            hourDiv.innerHTML = yy[1]
            firstHourContainer.innerHTML = yy[0]
            secondHourContainer.innerHTML = yy[1]
    }
    else{
      
        const j = Hr.toLocaleString()
    
        j.split()
    
        hourOneDiv.innerHTML = j[0]
        hourDiv.innerHTML = j[1]
        firstHourContainer.innerHTML = j[0]
        secondHourContainer.innerHTML = j[1]

            } 
}

