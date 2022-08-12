import { useState, useEffect } from 'react'

export default function Tempo() {

  const [tempo, setTempo] = useState('')

  function zeroEsquerda(numero) {
    if(numero < 10) {
      return 0
    }else{
      return ''
    }
  }

  function instante() {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()

    setTempo(zeroEsquerda(h) + h + ':' + zeroEsquerda(m) + m + ':' + zeroEsquerda(s) + s)
  }

  useEffect(() => {
    setInterval(() => instante(), 1000)
  })

  return (
    <div className="tempo">
      <div className="tela">
        <h1> {tempo} </h1>
      </div>
    </div>
  );
}


