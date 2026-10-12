const {test}=require('node:test');
const assert=require('node:assert/strict');
require('./src/lib/weather-search.js');
test('missing city produces an actionable error without forecast request',async()=>{
 let count=0;
 await assert.rejects(FauvorWeather.search('inexistente',undefined,async()=>{count++;return {ok:true,json:async()=>({})}}),/No encontramos/);
 assert.equal(count,1);
});
test('HTTP failures do not fabricate success',async()=>{
 await assert.rejects(FauvorWeather.search('Córdoba',undefined,async()=>({ok:false})),/servicio/);
});
test('real city updates current and forecast, escaping query and preserving abort signal',async()=>{
 const signal=new AbortController().signal;let count=0;
 const dates=['2026-10-12','2026-10-13'];
 const data=await FauvorWeather.search('Córdoba & centro',signal,async(url,opts)=>{
 assert.equal(opts.signal,signal);
 if(count++===0){assert.equal(new URL(url).searchParams.get('name'),'Córdoba & centro');return {ok:true,json:async()=>({results:[{name:'Córdoba',country:'Argentina',latitude:-31.4,longitude:-64.2}]})};}
 return {ok:true,json:async()=>({current:{time:'2026-10-12T12:15',temperature_2m:23.2,apparent_temperature:24,weather_code:80,relative_humidity_2m:60,surface_pressure:1000,wind_speed_10m:12,wind_direction_10m:90,cloud_cover:70},hourly:{time:Array.from({length:48},(_,i)=>'2026-10-12T'+String(i).padStart(2,'0')+':00'),temperature_2m:Array(48).fill(23),precipitation_probability:Array(48).fill(50),dew_point_2m:Array(48).fill(12)},daily:{time:dates,weather_code:[0,95],temperature_2m_max:[27,28],temperature_2m_min:[15,16],uv_index_max:[5,6]}})};
 });
 assert.equal(data.name,'Córdoba');assert.equal(data.temp,23);assert.equal(data.aqi,null);assert.equal(data.hourly.length,12);assert.equal(data.daily[1].icon,'⛈️');assert.equal(data.condition,'Lluvia');
});
