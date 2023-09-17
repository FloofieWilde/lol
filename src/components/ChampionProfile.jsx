import React from 'react'

const ChampionProfile = ({img, name, validateEvent, active}) => {
    console.log(name)
  return (
    <div style={{
        display:'flex',
        flexDirection:"column",
        flex: "1 0 16%",
        height: "120px",
        textAlign:'center',
        justifyContent:'center',
        alignItems:"center"
        }}
        onClick={validateEvent}
    >
        <img style={{
            height : "90px",
            width : "90px",
            filter: active ? "grayscale(0%)" : "grayscale(100%)"
        }}
            src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${name}.png`}
            alt={name}
        />
        <p style={{padding:0, margin:0}}>{name}</p>
    </div>
  )
}

export default ChampionProfile