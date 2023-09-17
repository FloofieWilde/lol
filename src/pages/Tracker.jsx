import React, { useEffect, useRef, useState } from 'react'
import { json, useParams } from 'react-router-dom';
import ChampionProfile from '../components/ChampionProfile';
import axios from 'axios';

const Tracker = () => {
    const pseudo = useParams().user;
    const [UserData, setUserData] = useState([])
    const [ChampList, setChampList] = useState({})
    const [ChampArray, setChampArray] = useState([])

    useEffect(() => {        
        for (const [key, value] of Object.entries(ChampList)) {
            ChampArray.push([key, value]);
        }
    }, [ChampList])

    useEffect(() => {
        getChamps();
    }, [pseudo, UserData])

    const getChamps = async () => {
        setChampList({})
        const resp = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json")
        setChampList(resp.data.data)
    }

    const mapChamps = async () => {
        for (const [key, value] of Object.entries(ChampList)) {
            ChampArray.push([key, value, true]);
        }
    }

    const cleanChamps = async () => {
        await setChampArray([]);
        await setChampList({});
    }
    
  return (
    <>
        <h1>Bienvenue {pseudo}</h1>
        <div className='wrapper'>
            {
                ChampArray.map((champ) => 
                    <ChampionProfile name={champ[0]} img={champ[1].image.sprite} validateEvent={(event) => {UserData.push(champ[0])}} active={UserData.find((element) => element === champ[0])}/>
                )
            }
        </div>
    </>
  )
}

export default Tracker