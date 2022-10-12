import { createSlice } from '@reduxjs/toolkit';

export interface Kayttaja {
    id : number,
    nimi : string,
    tunnus : string,
    salasana : string,
    admin : boolean
  }

const kayttajat : Kayttaja[] = [{
                                    id : 1,
                                    nimi : "Jaska Jokunen",
                                    tunnus : "user01",
                                    salasana : "kissakala",
                                    admin : false
                                },
                                {
                                    id : 2,
                                    nimi : "Aku Ankka",
                                    tunnus : "user02",
                                    salasana : "kissakala",
                                    admin : true
                                },
                                {
                                    id : 3,
                                    nimi : "Repe Sorsa",
                                    tunnus : "user03",
                                    salasana : "kissakala",
                                    admin : false
                                }];


export const kayttajatSlice = createSlice({
    name : "kayttajat",
    initialState : [...kayttajat],
    reducers : {
    }
});

export const { } = kayttajatSlice.actions;

export default kayttajatSlice.reducer;