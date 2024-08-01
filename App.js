{\rtf1\ansi\ansicpg1252\deff0\nouicompat{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.22621}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 import React, \{ useState \} from 'react';\par
import \{ BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer \} from 'recharts';\par
\par
const datacenterMapping = \{\par
  "ma-gb-central-1": "Dunstable Data Center (DUN)",\par
  "ma-au-south-1": "NextDC Melbourne Data Center (M2)",\par
  "ma-gb-south-23": "MasterCard Payment Gateway Services",\par
  "ma-us-south-1": "Dallas Cologix DAL3 (DFW)",\par
  "ma-th-south-1": "Bangkok Data Center (BKK)",\par
  "ma-gb-east-1": "Debden Data Center (DEB)",\par
  "ma-fr-north-1": "AZ RNTZ Paris (CDG)",\par
  "ma-pe-central-1": "Peru Data Center VL1 (HUU)",\par
  "ma-pl-central-1": "MasterCard Europe DR Data Center Poznan",\par
  "ma-sg-south-1": "Singapore Data Center (XSP)",\par
  "ma-cn-south-1": "Mastercard Shenzhen Data Center (SZX)",\par
  "ma-cn-east-1": "Mastercard Shanghai Data Center (PVG)",\par
  "ma-sa-east-1": "Mastercard Dammam Data Center (DMM)",\par
  "ma-ae-east-1": "Mastercard Dubai Data Center (DXB)",\par
  "ma-id-west-1": "Indonesia Data Center (HLP)",\par
  "ma-id-west-2": "Indonesia DR Data Center (CGK)",\par
  "ma-us-west-1": "Mastercard San Jose Data Center (SJC)",\par
  "ma-cn-east-21": "Shanghai Corporate Office",\par
  "ma-us-central-2": "Kansas City Data Center (KSC)",\par
  "ma-be-central-1": "MasterCard Belgium DataCentre (BEL)",\par
  "ma-pe-central-2": "Peru Data Center VL2 (JAU)",\par
  "ma-in-north-1": "Mastercard Data Center Delhi (DEL)",\par
  "ma-au-east-1": "MasterCard APC North Ryde Data Center",\par
  "ma-us-central-1": "Saint Louis Data Center (STL)",\par
  "ma-ca-east-1": "Mastercard Montreal Data Center (YUL)",\par
  "ma-ca-south-1": "Mastercard Toronto (YTZ) Data Center",\par
  "ma-ng-west-1": "MasterCard MDS Node Nigeria (LOS)",\par
  "ma-no-south-1": "Mastercard SVG Norway Data Center",\par
  "ma-se-east-1": "Mastercard Sweden Services DataCenter"\par
\};\par
\par
const data = [\par
  \{"Year":"2023","MC_geotag":"ma-ae-east-1","GrowthRate":12.19\},\par
  \{"Year":"2023","MC_geotag":"ma-au-east-1","GrowthRate":8.71\},\par
  \{"Year":"2023","MC_geotag":"ma-au-south-1","GrowthRate":83.58\},\par
  \{"Year":"2023","MC_geotag":"ma-be-central-1","GrowthRate":6.71\},\par
  \{"Year":"2023","MC_geotag":"ma-ca-east-1","GrowthRate":-2.22\},\par
  \{"Year":"2023","MC_geotag":"ma-ca-south-1","GrowthRate":-0.37\},\par
  \{"Year":"2023","MC_geotag":"ma-cn-east-1","GrowthRate":-26.73\},\par
  \{"Year":"2023","MC_geotag":"ma-cn-east-21","GrowthRate":0.56\},\par
  \{"Year":"2023","MC_geotag":"ma-cn-south-1","GrowthRate":-0.91\},\par
  \{"Year":"2023","MC_geotag":"ma-fr-north-1","GrowthRate":-4.43\},\par
  \{"Year":"2023","MC_geotag":"ma-gb-central-1","GrowthRate":0.38\},\par
  \{"Year":"2023","MC_geotag":"ma-gb-east-1","GrowthRate":-2.60\},\par
  \{"Year":"2023","MC_geotag":"ma-gb-south-23","GrowthRate":-0.09\},\par
  \{"Year":"2023","MC_geotag":"ma-id-west-1","GrowthRate":-1.48\},\par
  \{"Year":"2023","MC_geotag":"ma-id-west-2","GrowthRate":3.54\},\par
  \{"Year":"2023","MC_geotag":"ma-in-north-1","GrowthRate":7.42\},\par
  \{"Year":"2023","MC_geotag":"ma-ng-west-1","GrowthRate":11.84\},\par
  \{"Year":"2023","MC_geotag":"ma-no-south-1","GrowthRate":115.53\},\par
  \{"Year":"2023","MC_geotag":"ma-pe-central-1","GrowthRate":13.54\},\par
  \{"Year":"2023","MC_geotag":"ma-pe-central-2","GrowthRate":23.09\},\par
  \{"Year":"2023","MC_geotag":"ma-pl-central-1","GrowthRate":29.45\},\par
  \{"Year":"2023","MC_geotag":"ma-se-east-1","GrowthRate":36.79\},\par
  \{"Year":"2023","MC_geotag":"ma-sg-south-1","GrowthRate":20.67\},\par
  \{"Year":"2023","MC_geotag":"ma-th-south-1","GrowthRate":33.87\},\par
  \{"Year":"2023","MC_geotag":"ma-us-central-1","GrowthRate":8.95\},\par
  \{"Year":"2023","MC_geotag":"ma-us-central-2","GrowthRate":4.38\},\par
  \{"Year":"2023","MC_geotag":"ma-us-west-1","GrowthRate":-25.08\},\par
  \{"Year":"2024","MC_geotag":"ma-au-east-1","GrowthRate":6.45\},\par
  \{"Year":"2024","MC_geotag":"ma-au-south-1","GrowthRate":18.45\},\par
  \{"Year":"2024","MC_geotag":"ma-be-central-1","GrowthRate":6.80\},\par
  \{"Year":"2024","MC_geotag":"ma-ca-south-1","GrowthRate":-0.04\},\par
  \{"Year":"2024","MC_geotag":"ma-cn-east-1","GrowthRate":3.26\},\par
  \{"Year":"2024","MC_geotag":"ma-cn-east-21","GrowthRate":0.00\},\par
  \{"Year":"2024","MC_geotag":"ma-cn-south-1","GrowthRate":0.00\},\par
  \{"Year":"2024","MC_geotag":"ma-fr-north-1","GrowthRate":0.00\},\par
  \{"Year":"2024","MC_geotag":"ma-gb-central-1","GrowthRate":33.83\},\par
  \{"Year":"2024","MC_geotag":"ma-gb-east-1","GrowthRate":-8.39\},\par
  \{"Year":"2024","MC_geotag":"ma-gb-south-23","GrowthRate":-78.12\},\par
  \{"Year":"2024","MC_geotag":"ma-id-west-1","GrowthRate":5.71\},\par
  \{"Year":"2024","MC_geotag":"ma-id-west-2","GrowthRate":-5.65\},\par
  \{"Year":"2024","MC_geotag":"ma-in-north-1","GrowthRate":-13.62\},\par
  \{"Year":"2024","MC_geotag":"ma-ng-west-1","GrowthRate":-6.91\},\par
  \{"Year":"2024","MC_geotag":"ma-no-south-1","GrowthRate":0.00\},\par
  \{"Year":"2024","MC_geotag":"ma-pe-central-1","GrowthRate":-3.17\},\par
  \{"Year":"2024","MC_geotag":"ma-pe-central-2","GrowthRate":-7.73\},\par
  \{"Year":"2024","MC_geotag":"ma-pl-central-1","GrowthRate":0.14\},\par
  \{"Year":"2024","MC_geotag":"ma-sa-east-1","GrowthRate":-2.55\},\par
  \{"Year":"2024","MC_geotag":"ma-se-east-1","GrowthRate":-1.67\},\par
  \{"Year":"2024","MC_geotag":"ma-sg-south-1","GrowthRate":9.86\},\par
  \{"Year":"2024","MC_geotag":"ma-th-south-1","GrowthRate":11.42\},\par
  \{"Year":"2024","MC_geotag":"ma-us-central-1","GrowthRate":2.83\},\par
  \{"Year":"2024","MC_geotag":"ma-us-central-2","GrowthRate":-7.09\},\par
  \{"Year":"2024","MC_geotag":"ma-us-south-1","GrowthRate":-0.85\}\par
];\par
\par
function App() \{\par
  const [selectedYear, setSelectedYear] = useState('2023');\par
\par
  const filteredData = data\par
    .filter(item => item.Year === selectedYear)\par
    .map(item => (\{\par
      ...item,\par
      name: datacenterMapping[item.MC_geotag] || item.MC_geotag\par
    \}));\par
\par
  return (\par
    <div style=\{\{ width: '100%', height: '100vh', padding: '20px' \}\}>\par
      <h2 style=\{\{ textAlign: 'center' \}\}>Datacenter Growth Rates - \{selectedYear\}</h2>\par
      <div style=\{\{ textAlign: 'center', marginBottom: '20px' \}\}>\par
        <button\par
          style=\{\{ \par
            padding: '10px', \par
            marginRight: '10px',\par
            backgroundColor: selectedYear === '2023' ? 'blue' : 'gray',\par
            color: 'white',\par
            border: 'none',\par
            cursor: 'pointer'\par
          \}\}\par
          onClick=\{() => setSelectedYear('2023')\}\par
        >\par
          2023\par
        </button>\par
        <button\par
          style=\{\{ \par
            padding: '10px',\par
            backgroundColor: selectedYear === '2024' ? 'blue' : 'gray',\par
            color: 'white',\par
            border: 'none',\par
            cursor: 'pointer'\par
          \}\}\par
          onClick=\{() => setSelectedYear('2024')\}\par
        >\par
          2024\par
        </button>\par
      </div>\par
      <ResponsiveContainer width="100%" height=\{600\}>\par
        <BarChart\par
          data=\{filteredData\}\par
          margin=\{\{\par
            top: 20,\par
            right: 30,\par
            left: 20,\par
            bottom: 150,\par
          \}\}\par
        >\par
          <XAxis \par
            dataKey="name" \par
            angle=\{-45\} \par
            textAnchor="end" \par
            interval=\{0\} \par
            height=\{150\}\par
            tick=\{\{ fontSize: 10 \}\}\par
          />\par
          <YAxis label=\{\{ value: 'Growth Rate (%)', angle: -90, position: 'insideLeft' \}\} />\par
          <Tooltip />\par
          <Legend />\par
          <Bar dataKey="GrowthRate" fill="#8884d8" />\par
        </BarChart>\par
      </ResponsiveContainer>\par
    </div>\par
  );\par
\}\par
\par
export default App;\par
}
 