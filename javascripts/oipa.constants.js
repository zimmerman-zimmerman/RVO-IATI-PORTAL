(function () {
    'use strict';

    var regionMapping = {"region_id":"","name":"regions","color":"transparent","children":[{"name":"Africa","region_id":"298","color":"#5598B5","children":[{"name":"North of Sahara","region_id":"189","color":"#5598B5"},{"region_id":"289","name":"South of Sahara","color":"#A6E4F4"}]},{"name":"America","region_id":"498","color":"#00BA96","children":[{"name":"West indies","region_id":"380","color":"#14EFC5"},{"name":"North and Central America","region_id":"389","color":"#C2FFF3"},{"name":"South America","region_id":"489","color":"#C2FFF3"}]},{"name":"Asia","region_id":"798","color":"#4A671E","children":[{"name":"Middle East","region_id":"589","color":"#8DB746"},{"name":"Far East Asia","region_id":"789","color":"#EDFFC5"},{"name":"South and Central Asia","region_id":"619","color":"#C1F460","children":[{"name":"Central Asia","region_id":"689","color":"#ABDD1F"},{"name":"South Asia","region_id":"679","color":"#EDFFC5"}]}]},{"name":"Europe","region_id":"89","color":"#F6A000"},{"name":"Oceania","region_id":"889","color":"#EDFFC5"}]};
    var sectorMapping = {"sector_id":"","name":"Sectors","color":"transparent","children":[{"sector_id":"2","name":"Economic sectors","color":"#9f0943","children":[{"sector_id":"210","name":"Transport and storage","children":[{"name":"Transport policy and administrative management","sector_id":21010},{"name":"Road transport","sector_id":21020},{"name":"Water transport","sector_id":21040},{"name":"Air transport","sector_id":21050}]},{"sector_id":"220","name":"Communication","children":[{"name":"Communications policy and administrative management","sector_id":22010},{"name":"Telecommunications","sector_id":22020},{"name":"Radio/television/print media","sector_id":22030},{"name":"Information and communication technology (ICT)","sector_id":22040}]},{"sector_id":"230","name":"Energy generation and supply","children":[{"name":"Energy policy and administrative management","sector_id":23010},{"name":"Power generation/renewable sources","sector_id":23030},{"name":"Electrical transmission/ distribution","sector_id":23040},{"name":"Hydro-electric power plants","sector_id":23065},{"name":"Solar energy","sector_id":23067},{"name":"Biomass","sector_id":23070},{"name":"Energy education/training","sector_id":23081},{"name":"Energy research","sector_id":23082}]},{"sector_id":"240","name":"Banking and financial services","children":[{"name":"Financial policy and administrative management","sector_id":24010},{"name":"Monetary institutions","sector_id":24020},{"name":"Formal sector financial intermediaries","sector_id":24030},{"name":"Informal/semi-formal financial intermediaries","sector_id":24040},{"name":"Education/training in banking and financial services","sector_id":24081}]},{"sector_id":"250","name":"Business and other services","children":[{"name":"Business support services and institutions","sector_id":25010},{"name":"Privatisation","sector_id":25020}]}]},{"sector_id":"3","name":"Productive sectors","color":"#f8a200","children":[{"sector_id":"311","name":"Agriculture","children":[{"name":"Agricultural policy and administrative management","sector_id":31110},{"name":"Agricultural development","sector_id":31120},{"name":"Agricultural land resources","sector_id":31130},{"name":"Agricultural water resources","sector_id":31140},{"name":"Agricultural inputs","sector_id":31150},{"name":"Food crop production","sector_id":31161},{"name":"Industrial crops/export crops","sector_id":31162},{"name":"Livestock","sector_id":31163},{"name":"Agrarian reform","sector_id":31164},{"name":"Agricultural alternative development","sector_id":31165},{"name":"Agricultural extension","sector_id":31166},{"name":"Agricultural education/training","sector_id":31181},{"name":"Agricultural research","sector_id":31182},{"name":"Agricultural services","sector_id":31191},{"name":"Agricultural financial services","sector_id":31193},{"name":"Agricultural co-operatives","sector_id":31194},{"name":"Livestock/veterinary services","sector_id":31195}]},{"sector_id":"312","name":"Forestry","children":[{"name":"Forestry policy and administrative management","sector_id":31210},{"name":"Forestry development","sector_id":31220},{"name":"Forestry education/training","sector_id":31281},{"name":"Forestry research","sector_id":31282},{"name":"Forestry services","sector_id":31291}]},{"sector_id":"313","name":"Fishing","children":[{"name":"Fishery development","sector_id":31320}]},{"sector_id":"321","name":"Industry","children":[{"name":"Industrial development","sector_id":32120},{"name":"Small and medium-sized enterprises (SME) development","sector_id":32130},{"name":"Agro-industries","sector_id":32161},{"name":"Textiles, leather and substitutes","sector_id":32163},{"name":"Chemicals","sector_id":32164},{"name":"Technological research and development","sector_id":32182}]},{"sector_id":"331","name":"Trade policy and regulations and trade-related adjustment","children":[{"name":"Trade policy and administrative management","sector_id":33110},{"name":"Trade facilitation","sector_id":33120},{"name":"Regional trade agreements (RTAs)","sector_id":33130},{"name":"Trade education/training","sector_id":33181}]},{"sector_id":"332","name":"Tourism","children":[{"name":"Tourism policy and administrative management","sector_id":33210}]}]},{"sector_id":"4","name":"Multi sector","color":"#f8c700","children":[{"sector_id":"410","name":"General environmental protection","children":[{"name":"Environmental policy and administrative management","sector_id":41010},{"name":"Biosphere protection","sector_id":41020},{"name":"Bio-diversity","sector_id":41030},{"name":"Flood prevention/control","sector_id":41050},{"name":"Environmental education/ training","sector_id":41081},{"name":"Environmental research","sector_id":41082}]},{"sector_id":"430","name":"Other multisector","children":[{"name":"Multisector aid","sector_id":43010},{"name":"Urban development and management","sector_id":43030},{"name":"Rural development","sector_id":43040},{"name":"Multisector education/training","sector_id":43081},{"name":"Research/scientific institutions","sector_id":43082}]}]},{"sector_id":"7","name":"Humanitarian aid ","color":"#2364a3","children":[{"sector_id":"720","name":"Emergency Response","children":[{"name":"Material relief assistance and services","sector_id":72010},{"name":"Emergency food aid","sector_id":72040},{"name":"Relief co-ordination; protection and support services","sector_id":72050}]},{"sector_id":"730","name":"Reconstruction relief and rehabilitation","children":[{"name":"Reconstruction relief and rehabilitation","sector_id":73010}]},{"sector_id":"740","name":"Disaster prevention and preparedness","children":[{"name":"Disaster prevention and preparedness","sector_id":74010}]}]},{"sector_id":"9","name":"Other aid","color":"#20456d","children":[{"sector_id":"510","name":"General budget support","children":[{"name":"General budget support","sector_id":51010}]},{"sector_id":"520","name":"Developmental food aid/Food security assistance","children":[{"name":"Food aid/Food security programmes","sector_id":52010}]},{"sector_id":"530","name":"Other commodity assistance","children":[{"name":"Import support (capital goods)","sector_id":53030}]},{"sector_id":"600","name":"Action relating to debt","children":[{"name":"Relief of multilateral debt","sector_id":60030}]},{"sector_id":"910","name":"Administrative costs of donors","children":[{"name":"Administrative costs","sector_id":91010}]},{"sector_id":"930","name":"Refugees in donor countries","children":[{"name":"Refugees in donor countries","sector_id":93010}]},{"sector_id":"998","name":"Unallocated/ unspecified","children":[{"name":"Sectors not specified","sector_id":99810},{"name":"Promotion of development awareness","sector_id":99820}]}]},{"sector_id":"11","name":"Education","color":"#c00726","children":[{"sector_id":"111","name":"Education, level unspecified","children":[{"name":"Education policy and administrative management","sector_id":11110},{"name":"Education facilities and training","sector_id":11120},{"name":"Teacher training","sector_id":11130},{"name":"Educational research","sector_id":11182}]},{"sector_id":"112","name":"Basic education","children":[{"name":"Primary education","sector_id":11220},{"name":"Basic life skills for youth and adults","sector_id":11230},{"name":"Early childhood education","sector_id":11240}]},{"sector_id":"113","name":"Secondary education","children":[{"name":"Secondary education","sector_id":11320},{"name":"Vocational training","sector_id":11330}]},{"sector_id":"114","name":"Post-secondary education","children":[{"name":"Higher education","sector_id":11420},{"name":"Advanced technical and managerial training","sector_id":11430}]}]},{"sector_id":"12","name":"Health","color":"#4fa30e","children":[{"sector_id":"121","name":"Health, general","children":[{"name":"Health policy and administrative management","sector_id":12110},{"name":"Medical education/training","sector_id":12181},{"name":"Medical research","sector_id":12182},{"name":"Medical services","sector_id":12191}]},{"sector_id":"122","name":"Basic health","children":[{"name":"Basic health care","sector_id":12220},{"name":"Basic health infrastructure","sector_id":12230},{"name":"Basic nutrition","sector_id":12240},{"name":"Infectious disease control","sector_id":12250},{"name":"Health education","sector_id":12261},{"name":"Malaria control","sector_id":12262},{"name":"Tuberculosis control","sector_id":12263},{"name":"Health personnel development","sector_id":12281}]}]},{"sector_id":"13","name":"Population policies / programmes and reproductive health","color":"#f73300","children":[{"sector_id":"130","name":"Population policies / programmes and reproductive health","children":[{"name":"Population policy and administrative management","sector_id":13010},{"name":"Reproductive health care","sector_id":13020},{"name":"Family planning","sector_id":13030},{"name":"STD control including HIV/AIDS","sector_id":13040},{"name":"Personnel development for population and reproductive health","sector_id":13081}]}]},{"sector_id":"14","name":"Water and sanitation","color":"#40bce7","children":[{"sector_id":"140","name":"Water and sanitation","children":[{"name":"Water resources policy and administrative management","sector_id":14010},{"name":"Water resources protection","sector_id":14015},{"name":"Water supply and sanitation - large systems","sector_id":14020},{"name":"Water supply - large systems ","sector_id":14021},{"name":"Sanitation - large systems","sector_id":14022},{"name":"Basic drinking water supply and basic sanitation","sector_id":14030},{"name":"Basic sanitation","sector_id":14032},{"name":"River development","sector_id":14040},{"name":"Waste management/disposal","sector_id":14050},{"name":"Education and training in water supply and sanitation","sector_id":14081}]}]},{"sector_id":"15","name":"Government and civil society","color":"#d80069","children":[{"sector_id":"151","name":"Government and civil society, general","children":[{"name":"Economic and development policy/planning","sector_id":15110},{"name":"Public finance management","sector_id":15111},{"name":"Decentralisation and support to subnational government","sector_id":15112},{"name":"Anti-corruption organisations and institutions","sector_id":15113},{"name":"Public sector financial management","sector_id":15120},{"name":"Legal and judicial development","sector_id":15130},{"name":"Democratic participation and civil society","sector_id":15150},{"name":"Elections","sector_id":15151},{"name":"Legislatures and political parties","sector_id":15152},{"name":"Media and free flow of information","sector_id":15153},{"name":"Human rights","sector_id":15160},{"name":"Women's equality organisations and institutions *","sector_id":15170}]},{"sector_id":"152","name":"Conflict prevention and resolution, peace and security","children":[{"name":"Security system management and reform","sector_id":15210},{"name":"Civilian peace-building, conflict prevention and resolution","sector_id":15220},{"name":"Post-conflict peace-building (UN)","sector_id":15230},{"name":"Reintegration and SALW control","sector_id":15240},{"name":"Land mine clearance","sector_id":15250},{"name":"Child soldiers (Prevention and demobilisation)","sector_id":15261}]}]},{"sector_id":"16","name":"Other social infrastructure and services","color":"#f76800","children":[{"sector_id":"160","name":"Other social infrastructure and services","children":[{"name":"Social/ welfare services","sector_id":16010},{"name":"Employment policy and administrative management","sector_id":16020},{"name":"Housing policy and administrative management","sector_id":16030},{"name":"Low-cost housing","sector_id":16040},{"name":"Multisector aid for basic social services","sector_id":16050},{"name":"Culture and recreation","sector_id":16061},{"name":"Statistical capacity building","sector_id":16062},{"name":"Narcotics control","sector_id":16063},{"name":"Social mitigation of HIV/AIDS","sector_id":16064}]}]}]};
    var countryLocations = {"BG":{"name":"Bulgaria","location":{"type":"Point","coordinates":[25,43]}},"BB":{"name":"Barbados","location":{"type":"Point","coordinates":[-59.32,13.1]}},"BM":{"name":"Bermuda","location":{"type":"Point","coordinates":[-64.45,32.2]}},"BO":{"name":"Bolivia (plurinational state of)","location":{"type":"Point","coordinates":[-65,-17]}},"BH":{"name":"Bahrain","location":{"type":"Point","coordinates":[50.33,26]}},"BJ":{"name":"Benin","location":{"type":"Point","coordinates":[2.15,9.3]}},"BT":{"name":"Bhutan","location":{"type":"Point","coordinates":[90.3,27.3]}},"BQ":{"name":"Bonaire, saint eustatius and saba","location":{"type":"Point","coordinates":[-63.234022,17.63626]}},"BR":{"name":"Brazil","location":{"type":"Point","coordinates":[-55,-10]}},"JE":{"name":"Jersey","location":{"type":"Point","coordinates":[-2.1,49.15]}},"BY":{"name":"Belarus","location":{"type":"Point","coordinates":[28,53]}},"GW":{"name":"Guinea-bissau","location":{"type":"Point","coordinates":[-15,12]}},"GU":{"name":"Guam","location":{"type":"Point","coordinates":[144.47,13.28]}},"GR":{"name":"Greece","location":{"type":"Point","coordinates":[22,39]}},"GP":{"name":"Guadeloupe","location":{"type":"Point","coordinates":[-61.35,16.15]}},"JP":{"name":"Japan","location":{"type":"Point","coordinates":[138,36]}},"GY":{"name":"Guyana","location":{"type":"Point","coordinates":[-59,5]}},"GF":{"name":"French guiana","location":{"type":"Point","coordinates":[-53,4]}},"GE":{"name":"Georgia","location":{"type":"Point","coordinates":[43.3,42]}},"GA":{"name":"Gabon","location":{"type":"Point","coordinates":[11.45,-1]}},"JO":{"name":"Jordan","location":{"type":"Point","coordinates":[36,31]}},"HR":{"name":"Croatia","location":{"type":"Point","coordinates":[15.3,45.1]}},"HU":{"name":"Hungary","location":{"type":"Point","coordinates":[20,47]}},"HK":{"name":"Hong kong","location":{"type":"Point","coordinates":[114.1,22.15]}},"HM":{"name":"Heard island and mcdonald islands","location":{"type":"Point","coordinates":[72.31,-53.06]}},"PF":{"name":"French polynesia","location":{"type":"Point","coordinates":[-140,-15]}},"EE":{"name":"Estonia","location":{"type":"Point","coordinates":[25.013607,58.595272]}},"EC":{"name":"Ecuador","location":{"type":"Point","coordinates":[-77.3,-2]}},"IT":{"name":"Italy","location":{"type":"Point","coordinates":[12.5,42.5]}},"ET":{"name":"Ethiopia","location":{"type":"Point","coordinates":[38,8]}},"BV":{"name":"Bouvet island","location":null},"ER":{"name":"Eritrea","location":{"type":"Point","coordinates":[39,15]}},"IL":{"name":"Israel","location":{"type":"Point","coordinates":[34.45,31.3]}},"FR":{"name":"France","location":{"type":"Point","coordinates":[2.17,47.06]}},"FI":{"name":"Finland","location":{"type":"Point","coordinates":[26,64]}},"FJ":{"name":"Fiji","location":{"type":"Point","coordinates":[175,-18]}},"FO":{"name":"Faroe islands (the)","location":{"type":"Point","coordinates":[-7,62]}},"CK":{"name":"Cook islands (the)","location":{"type":"Point","coordinates":[-159.46,-21.14]}},"CI":{"name":"CÃ”te d'ivoire","location":{"type":"Point","coordinates":[-5,8]}},"CO":{"name":"Colombia","location":{"type":"Point","coordinates":[-72,4]}},"CM":{"name":"Cameroon","location":{"type":"Point","coordinates":[12,6]}},"CL":{"name":"Chile","location":{"type":"Point","coordinates":[-71,-30]}},"CA":{"name":"Canada","location":{"type":"Point","coordinates":[-95,60]}},"CG":{"name":"Congo (the)","location":{"type":"Point","coordinates":[15,-1]}},"CD":{"name":"Congo, the democratic republic of the","location":{"type":"Point","coordinates":[25,0]}},"CZ":{"name":"Czech republic (the)","location":{"type":"Point","coordinates":[15.3,49.45]}},"CY":{"name":"Cyprus","location":{"type":"Point","coordinates":[33,35]}},"CR":{"name":"Costa rica","location":{"type":"Point","coordinates":[-84,10]}},"CW":{"name":"CuraÃ‡ao","location":{"type":"Point","coordinates":[-68.99002,12.16957]}},"CU":{"name":"Cuba","location":{"type":"Point","coordinates":[-80,21.3]}},"KE":{"name":"Kenya","location":{"type":"Point","coordinates":[38,1]}},"KI":{"name":"Kiribati","location":{"type":"Point","coordinates":[173,1.25]}},"KM":{"name":"Comoros (the)","location":{"type":"Point","coordinates":[44.15,-12.1]}},"KR":{"name":"Korea (republic of)","location":{"type":"Point","coordinates":[127.3,37]}},"KW":{"name":"Kuwait","location":{"type":"Point","coordinates":[45.45,29.3]}},"KY":{"name":"Cayman islands (the)","location":{"type":"Point","coordinates":[-80.3,19.3]}},"DM":{"name":"Dominica","location":{"type":"Point","coordinates":[-61.2,15.25]}},"DJ":{"name":"Djibouti","location":{"type":"Point","coordinates":[43,11.3]}},"DK":{"name":"Denmark","location":{"type":"Point","coordinates":[10,56]}},"DZ":{"name":"Algeria","location":{"type":"Point","coordinates":[3,28]}},"LB":{"name":"Lebanon","location":{"type":"Point","coordinates":[35.5,33.5]}},"LV":{"name":"Latvia","location":{"type":"Point","coordinates":[25,57]}},"LR":{"name":"Liberia","location":{"type":"Point","coordinates":[-9.3,6.3]}},"LS":{"name":"Lesotho","location":{"type":"Point","coordinates":[28.3,-29.3]}},"TD":{"name":"Chad","location":{"type":"Point","coordinates":[19,15]}},"LY":{"name":"Libyan arab jamahiriya","location":{"type":"Point","coordinates":[17,25]}},"AD":{"name":"Andorra","location":{"type":"Point","coordinates":[1.3,42.3]}},"AG":{"name":"Antigua and barbuda","location":{"type":"Point","coordinates":[-61.48,17.03]}},"AI":{"name":"Anguilla","location":{"type":"Point","coordinates":[-63.1,18.15]}},"IS":{"name":"Iceland","location":{"type":"Point","coordinates":[-18,65]}},"AM":{"name":"Armenia","location":{"type":"Point","coordinates":[45,40]}},"AL":{"name":"Albania","location":{"type":"Point","coordinates":[20,41]}},"AO":{"name":"Angola","location":{"type":"Point","coordinates":[18.3,-12.3]}},"AS":{"name":"American samoa","location":{"type":"Point","coordinates":[-170,-14.2]}},"AU":{"name":"Australia","location":{"type":"Point","coordinates":[133,-27]}},"AT":{"name":"Austria","location":{"type":"Point","coordinates":[13.2,47.2]}},"AX":{"name":"Ã…land islands","location":{"type":"Point","coordinates":[20.273,60.338]}},"IE":{"name":"Ireland","location":{"type":"Point","coordinates":[-8,53]}},"ID":{"name":"Indonesia","location":{"type":"Point","coordinates":[120,-5]}},"RU":{"name":"Russian federation (the)","location":{"type":"Point","coordinates":[100,60]}},"RW":{"name":"Rwanda","location":{"type":"Point","coordinates":[30,-2]}},"TL":{"name":"Timor-leste","location":{"type":"Point","coordinates":[125.634765,-8.711486]}},"TM":{"name":"Turkmenistan","location":{"type":"Point","coordinates":[60,40]}},"TJ":{"name":"Tajikistan","location":{"type":"Point","coordinates":[71,39]}},"TK":{"name":"Tokelau","location":{"type":"Point","coordinates":[-172,-9]}},"SY":{"name":"Syrian arab republic","location":{"type":"Point","coordinates":[38,35]}},"GB":{"name":"United kingdom of great britain and northern ireland (the)","location":{"type":"Point","coordinates":[-2,54]}},"OM":{"name":"Oman","location":{"type":"Point","coordinates":[57,21]}},"VE":{"name":"Venezuela (bolivarian republic of)","location":{"type":"Point","coordinates":[-66,8]}},"PS":{"name":"Palestinian territory, occupied","location":{"type":"Point","coordinates":[35.15,32]}},"PW":{"name":"Palau","location":{"type":"Point","coordinates":[134.3,7.3]}},"SJ":{"name":"Svalbard and jan mayen","location":{"type":"Point","coordinates":[-8,71]}},"PY":{"name":"Paraguay","location":{"type":"Point","coordinates":[-58,-23]}},"PG":{"name":"Papua new guinea","location":{"type":"Point","coordinates":[147,-6]}},"PE":{"name":"Peru","location":{"type":"Point","coordinates":[-76,-10]}},"PH":{"name":"Philippines (the)","location":{"type":"Point","coordinates":[122,13]}},"PL":{"name":"Poland","location":{"type":"Point","coordinates":[20,52]}},"EH":{"name":"Western sahara","location":{"type":"Point","coordinates":[-13,24.3]}},"ZA":{"name":"South africa","location":{"type":"Point","coordinates":[24,-29]}},"ZW":{"name":"Zimbabwe","location":{"type":"Point","coordinates":[30,-20]}},"ES":{"name":"Spain","location":{"type":"Point","coordinates":[-4,40]}},"ME":{"name":"Montenegro","location":{"type":"Point","coordinates":[19.18,42.3]}},"MG":{"name":"Madagascar","location":{"type":"Point","coordinates":[47,-20]}},"MF":{"name":"Saint martin (french part)","location":{"type":"Point","coordinates":[-63.052251,18.08255]}},"MC":{"name":"Monaco","location":{"type":"Point","coordinates":[7.24,43.44]}},"UZ":{"name":"Uzbekistan","location":{"type":"Point","coordinates":[64,41]}},"ML":{"name":"Mali","location":{"type":"Point","coordinates":[-4,17]}},"MO":{"name":"Macao","location":{"type":"Point","coordinates":[113.33,22.1]}},"MU":{"name":"Mauritius","location":{"type":"Point","coordinates":[57.33,-20.17]}},"MT":{"name":"Malta","location":{"type":"Point","coordinates":[14.35,35.5]}},"MW":{"name":"Malawi","location":{"type":"Point","coordinates":[34,-13.3]}},"MV":{"name":"Maldives","location":{"type":"Point","coordinates":[73,3.15]}},"MQ":{"name":"Martinique","location":{"type":"Point","coordinates":[-61,14.4]}},"MP":{"name":"Northern mariana islands (the)","location":{"type":"Point","coordinates":[145.45,15.12]}},"MR":{"name":"Mauritania","location":{"type":"Point","coordinates":[-12,20]}},"UG":{"name":"Uganda","location":{"type":"Point","coordinates":[32,1]}},"MY":{"name":"Malaysia","location":{"type":"Point","coordinates":[112.3,2.3]}},"MX":{"name":"Mexico","location":{"type":"Point","coordinates":[-102,23]}},"FM":{"name":"Micronesia (federated states of)","location":{"type":"Point","coordinates":[158.15,6.55]}},"NI":{"name":"Nicaragua","location":{"type":"Point","coordinates":[-85,13]}},"NL":{"name":"Netherlands (the)","location":{"type":"Point","coordinates":[5.45,52.3]}},"NA":{"name":"Namibia","location":{"type":"Point","coordinates":[17,-22]}},"VU":{"name":"Vanuatu","location":{"type":"Point","coordinates":[167,-16]}},"NE":{"name":"Niger (the)","location":{"type":"Point","coordinates":[8,16]}},"NF":{"name":"Norfolk island","location":{"type":"Point","coordinates":[167.57,-29.02]}},"NZ":{"name":"New zealand","location":{"type":"Point","coordinates":[174,-41]}},"NP":{"name":"Nepal","location":{"type":"Point","coordinates":[84,28]}},"SO":{"name":"Somalia","location":{"type":"Point","coordinates":[49,10]}},"NU":{"name":"Niue","location":{"type":"Point","coordinates":[-169.52,-19.02]}},"SZ":{"name":"Swaziland","location":{"type":"Point","coordinates":[31.3,-26.3]}},"SS":{"name":"South sudan","location":{"type":"Point","coordinates":[30.629883,7.088628]}},"SR":{"name":"Suriname","location":{"type":"Point","coordinates":[-56,4]}},"ST":{"name":"Sao tome and principe","location":{"type":"Point","coordinates":[7,1]}},"SK":{"name":"Slovakia","location":{"type":"Point","coordinates":[19.3,48.4]}},"SN":{"name":"Senegal","location":{"type":"Point","coordinates":[-14,14]}},"SM":{"name":"San marino","location":{"type":"Point","coordinates":[12.25,43.46]}},"SC":{"name":"Seychelles","location":{"type":"Point","coordinates":[55.4,-4.35]}},"SB":{"name":"Solomon islands","location":{"type":"Point","coordinates":[159,-8]}},"SE":{"name":"Sweden","location":{"type":"Point","coordinates":[15,62]}},"SD":{"name":"Sudan (the)","location":{"type":"Point","coordinates":[30,15]}},"YE":{"name":"Yemen","location":{"type":"Point","coordinates":[48,15]}},"UY":{"name":"Uruguay","location":{"type":"Point","coordinates":[-56,-33]}},"YU":{"name":"Former Yugoslavia","location":{"type":"Point","coordinates":[21.01,44.02]}},"YT":{"name":"Mayotte","location":{"type":"Point","coordinates":[45.1,-12.5]}},"LC":{"name":"Saint lucia","location":{"type":"Point","coordinates":[-60.58,13.53]}},"TV":{"name":"Tuvalu","location":{"type":"Point","coordinates":[178,-8]}},"TW":{"name":"Taiwan (province of china)","location":{"type":"Point","coordinates":[121,23.3]}},"TR":{"name":"Turkey","location":{"type":"Point","coordinates":[35,39]}},"LK":{"name":"Sri lanka","location":{"type":"Point","coordinates":[81,7]}},"TO":{"name":"Tonga","location":{"type":"Point","coordinates":[-175,-20]}},"LT":{"name":"Lithuania","location":{"type":"Point","coordinates":[24,56]}},"TH":{"name":"Thailand","location":{"type":"Point","coordinates":[100,15]}},"TG":{"name":"Togo","location":{"type":"Point","coordinates":[1.1,8]}},"AC":{"name":"Ascension Island","location":{"type":"Point","coordinates":[-14.355916,-7.946717]}},"AE":{"name":"United arab emirates (the)","location":{"type":"Point","coordinates":[54,24]}},"VI":{"name":"Virgin islands (u.s.)","location":{"type":"Point","coordinates":[-64.5,18.2]}},"AN":{"name":"Netherland antilles","location":{"type":"Point","coordinates":[-68.45,12.15]}},"UA":{"name":"Ukraine","location":{"type":"Point","coordinates":[32,49]}},"MZ":{"name":"Mozambique","location":{"type":"Point","coordinates":[35,-18.15]}},"BE":{"name":"Belgium","location":{"type":"Point","coordinates":[4,50.5]}},"BA":{"name":"Bosnia and herzegovina","location":{"type":"Point","coordinates":[18,44]}},"WF":{"name":"Wallis and futuna","location":{"type":"Point","coordinates":[-176.12,-13.18]}},"BN":{"name":"Brunei darussalam","location":{"type":"Point","coordinates":[114.4,4.3]}},"BI":{"name":"Burundi","location":{"type":"Point","coordinates":[30,-3.3]}},"BW":{"name":"Botswana","location":{"type":"Point","coordinates":[24,-22]}},"WS":{"name":"Samoa","location":{"type":"Point","coordinates":[-172.2,-13.35]}},"BS":{"name":"Bahamas (the)","location":{"type":"Point","coordinates":[-76,24.15]}},"BZ":{"name":"Belize","location":{"type":"Point","coordinates":[-88.45,17.15]}},"RS":{"name":"Serbia","location":{"type":"Point","coordinates":[21,44]}},"RE":{"name":"Reunion","location":{"type":"Point","coordinates":[55.36,-21.06]}},"RO":{"name":"Romania","location":{"type":"Point","coordinates":[25,46]}},"GT":{"name":"Guatemala","location":{"type":"Point","coordinates":[-90.15,15.3]}},"GQ":{"name":"Equatorial guinea","location":{"type":"Point","coordinates":[10,2]}},"GG":{"name":"Guernsey","location":{"type":"Point","coordinates":[-2.35,49.28]}},"GD":{"name":"Grenada","location":{"type":"Point","coordinates":[-61.4,12.07]}},"GN":{"name":"Guinea","location":{"type":"Point","coordinates":[-10,11]}},"GL":{"name":"Greenland","location":{"type":"Point","coordinates":[-40,72]}},"TN":{"name":"Tunisia","location":{"type":"Point","coordinates":[9,34]}},"JM":{"name":"Jamaica","location":{"type":"Point","coordinates":[-77.3,18.15]}},"HT":{"name":"Haiti","location":{"type":"Point","coordinates":[-72.25,19]}},"HN":{"name":"Honduras","location":{"type":"Point","coordinates":[-86.3,15]}},"PR":{"name":"Puerto rico","location":{"type":"Point","coordinates":[-66.3,18.15]}},"PT":{"name":"Portugal","location":{"type":"Point","coordinates":[-8,39.3]}},"IQ":{"name":"Iraq","location":{"type":"Point","coordinates":[44,33]}},"PA":{"name":"Panama","location":{"type":"Point","coordinates":[-80,9]}},"PK":{"name":"Pakistan","location":{"type":"Point","coordinates":[70,30]}},"PN":{"name":"Pitcairn","location":{"type":"Point","coordinates":[-130.06,-25.04]}},"ZM":{"name":"Zambia","location":{"type":"Point","coordinates":[30,-15]}},"EG":{"name":"Egypt","location":{"type":"Point","coordinates":[30,27]}},"VN":{"name":"Viet nam","location":{"type":"Point","coordinates":[108.55,14.43]}},"SA":{"name":"Saudi arabia","location":{"type":"Point","coordinates":[45,25]}},"MD":{"name":"Moldova (republic of)","location":{"type":"Point","coordinates":[29,47]}},"MA":{"name":"Morocco","location":{"type":"Point","coordinates":[-5,32]}},"MM":{"name":"Myanmar","location":{"type":"Point","coordinates":[95.956223,21.913965]}},"MN":{"name":"Mongolia","location":{"type":"Point","coordinates":[105,46]}},"MH":{"name":"Marshall islands (the)","location":{"type":"Point","coordinates":[168,9]}},"MK":{"name":"Macedonia (the former yugoslav republic of)","location":{"type":"Point","coordinates":[22,41.5]}},"MS":{"name":"Montserrat","location":{"type":"Point","coordinates":[-62.12,16.45]}},"IM":{"name":"Isle of man","location":{"type":"Point","coordinates":[-4.3,54.15]}},"TZ":{"name":"Tanzania, united republic of","location":{"type":"Point","coordinates":[35,-6]}},"IO":{"name":"British indian ocean territory (the)","location":{"type":"Point","coordinates":[72.424233,-7.334756]}},"SH":{"name":"Saint helena, ascension and tristan da cunha","location":{"type":"Point","coordinates":[-5.42,-15.56]}},"FK":{"name":"Falkland islands (the) [malvinas]","location":{"type":"Point","coordinates":[-59,-51.45]}},"NO":{"name":"Norway","location":{"type":"Point","coordinates":[10,62]}},"NC":{"name":"New caledonia","location":{"type":"Point","coordinates":[165.3,-21.3]}},"NG":{"name":"Nigeria","location":{"type":"Point","coordinates":[8,10]}},"NR":{"name":"Nauru","location":{"type":"Point","coordinates":[166.55,-0.32]}},"XK":{"name":"Kosovo","location":{"type":"Point","coordinates":[20.902977,42.602636]}},"CH":{"name":"Switzerland","location":{"type":"Point","coordinates":[8,47]}},"CN":{"name":"China","location":{"type":"Point","coordinates":[105,35]}},"CC":{"name":"Cocos (keeling) islands (the)","location":{"type":"Point","coordinates":[96.5,-12.3]}},"CF":{"name":"Central african republic (the)","location":{"type":"Point","coordinates":[21,7]}},"CX":{"name":"Christmas island","location":{"type":"Point","coordinates":[105.4,-10.3]}},"CV":{"name":"Cape verde","location":{"type":"Point","coordinates":[-24,16]}},"SX":{"name":"Sint maarten (dutch part)","location":{"type":"Point","coordinates":[-63.57,18.05]}},"KG":{"name":"Kyrgyzstan","location":{"type":"Point","coordinates":[75,41]}},"KH":{"name":"Cambodia","location":{"type":"Point","coordinates":[105,13]}},"KN":{"name":"Saint kitts and nevis","location":{"type":"Point","coordinates":[-62.45,17.2]}},"SI":{"name":"Slovenia","location":{"type":"Point","coordinates":[14.49,46.07]}},"KP":{"name":"Korea (democratic people's republic of)","location":{"type":"Point","coordinates":[127,40]}},"SL":{"name":"Sierra leone","location":{"type":"Point","coordinates":[-11.3,8.3]}},"SG":{"name":"Singapore","location":{"type":"Point","coordinates":[103.48,1.22]}},"DO":{"name":"Dominican republic (the)","location":{"type":"Point","coordinates":[-70.4,19]}},"VG":{"name":"Virgin islands (british)","location":{"type":"Point","coordinates":[-64.3,18.3]}},"DE":{"name":"Germany","location":{"type":"Point","coordinates":[9,51]}},"US":{"name":"United states of america (the)","location":{"type":"Point","coordinates":[-97,38]}},"UM":{"name":"United states minor outlying islands (the)","location":{"type":"Point","coordinates":[-176.28,0.13]}},"LA":{"name":"Lao people's democratic republic (the)","location":{"type":"Point","coordinates":[105,18]}},"TT":{"name":"Trinidad and tobago","location":{"type":"Point","coordinates":[-61,11]}},"LI":{"name":"Liechtenstein","location":{"type":"Point","coordinates":[9.32,47.16]}},"LU":{"name":"Luxembourg","location":{"type":"Point","coordinates":[6.1,49.45]}},"TF":{"name":"French southern territories (the)","location":{"type":"Point","coordinates":[69.348557,-49.280366]}},"TC":{"name":"Turks and caicos islands (the)","location":{"type":"Point","coordinates":[-71.35,21.45]}},"VA":{"name":"Holy see (the)","location":{"type":"Point","coordinates":[12.27,41.54]}},"VC":{"name":"Saint vincent and the grenadines","location":{"type":"Point","coordinates":[-61.12,13.15]}},"AF":{"name":"Afghanistan","location":{"type":"Point","coordinates":[65,33]}},"IR":{"name":"Iran (islamic republic of)","location":{"type":"Point","coordinates":[53,32]}},"AQ":{"name":"Antarctica","location":{"type":"Point","coordinates":[-135,-82.862752]}},"BD":{"name":"Bangladesh","location":{"type":"Point","coordinates":[90,24]}},"BF":{"name":"Burkina faso","location":{"type":"Point","coordinates":[-2,13]}},"BL":{"name":"Saint barthÃ‰lemy","location":{"type":"Point","coordinates":[-62.85,17.9]}},"GS":{"name":"South georgia and the south sandwich islands","location":{"type":"Point","coordinates":[-37,-54.3]}},"SV":{"name":"El salvador","location":{"type":"Point","coordinates":[-88.55,13.5]}},"GM":{"name":"Gambia (the)","location":{"type":"Point","coordinates":[-16.34,13.28]}},"GI":{"name":"Gibraltar","location":{"type":"Point","coordinates":[-5.21,36.08]}},"GH":{"name":"Ghana","location":{"type":"Point","coordinates":[-2,8]}},"TA":{"name":"Tristan da Cunha","location":{"type":"Point","coordinates":[-12.277684,-37.105249]}},"PM":{"name":"Saint pierre and miquelon","location":{"type":"Point","coordinates":[-56.2,46.5]}},"KZ":{"name":"Kazakhstan","location":{"type":"Point","coordinates":[66.923684,48.019573]}},"AR":{"name":"Argentina","location":{"type":"Point","coordinates":[-64,-34]}}};


    angular
    	.module('oipa.constants')
		.constant("templateBaseUrl", template_url)
		.constant("homeUrl", home_url)
		.constant("oipaUrl", oipa_url)
		.constant("reportingOrganisationId", reporting_organisation_id)
        .constant("regionMapping", regionMapping)
        .constant("sectorMapping", sectorMapping)
        .constant("countryLocations", countryLocations);

})();
