import React, { useEffect, useState } from "react";
import CityService from "../services/cityService";
import {Input } from 'semantic-ui-react'

export default function Cities(){
    const [cities,setCities]= useState([]);

    useEffect(()=>{
        let cityService=new CityService();
        cityService.getCities().then((result) => setCities(result.data.data));
    })

    return (
        <div>
            <Input list="cities" placeholder="Şehir Seç"/>
            <datalist id="cities">
                {
                    cities.map((city)=>(
                        <option value={city.name}>{city.name}</option>
                    ))
                }
            </datalist>

        </div>
    )

}