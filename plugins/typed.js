const typeMessage = (words, elem) => {
    let line = 0
    let count = 0
    let out = ''
  
    function typeLine() {
      let interval = setTimeout(() => {
        if(!words[line]) return
        
        out += words[line][count]
        elem.value = out + '|'
        count++
  
        if (count === words[line].length) {
          line++
          if (line !== words.length) {
            clearTimeout(interval)
            typeBack()
            return
          }
  
          if (line === words.length) {
            elem.value = out
            clearTimeout(interval)
            return
          }
        }
  
        typeLine()
      }, getRandomInt(400))
    }
  
    function typeBack() {
      let interval = setTimeout(() => {
        out = out.slice(0, out.length - 1)
        elem.value = out + '|'
        count--
  
        if(count === 0) {
          clearTimeout(interval)
          out = ''
          typeLine()
          return
        }
  
        typeBack()
  
      }, getRandomInt(300))
    }
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  
    typeLine()
}

export default typeMessage