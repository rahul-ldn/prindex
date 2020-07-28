var country_name_map = [{"Code": "AF", "Name": "Afghanistan"},{"Code": "AX", "Name": "\u00c5land Islands"},{"Code": "AL", "Name": "Albania"},{"Code": "DZ", "Name": "Algeria"},{"Code": "AS", "Name": "American Samoa"},{"Code": "AD", "Name": "Andorra"},{"Code": "AO", "Name": "Angola"},{"Code": "AI", "Name": "Anguilla"},{"Code": "AQ", "Name": "Antarctica"},{"Code": "AG", "Name": "Antigua and Barbuda"},{"Code": "AR", "Name": "Argentina"},{"Code": "AM", "Name": "Armenia"},{"Code": "AW", "Name": "Aruba"},{"Code": "AU", "Name": "Australia"},{"Code": "AT", "Name": "Austria"},{"Code": "AZ", "Name": "Azerbaijan"},{"Code": "BS", "Name": "Bahamas"},{"Code": "BH", "Name": "Bahrain"},{"Code": "BD", "Name": "Bangladesh"},{"Code": "BB", "Name": "Barbados"},{"Code": "BY", "Name": "Belarus"},{"Code": "BE", "Name": "Belgium"},{"Code": "BZ", "Name": "Belize"},{"Code": "BJ", "Name": "Benin"},{"Code": "BM", "Name": "Bermuda"},{"Code": "BT", "Name": "Bhutan"},{"Code": "BO", "Name": "Bolivia"},{"Code": "BQ", "Name": "Bonaire, Sint Eustatius and Saba"},{"Code": "BA", "Name": "Bosnia and Herzegovina"},{"Code": "BW", "Name": "Botswana"},{"Code": "BV", "Name": "Bouvet Island"},{"Code": "BR", "Name": "Brazil"},{"Code": "IO", "Name": "British Indian Ocean Territory"},{"Code": "BN", "Name": "Brunei Darussalam"},{"Code": "BG", "Name": "Bulgaria"},{"Code": "BF", "Name": "Burkina Faso"},{"Code": "BI", "Name": "Burundi"},{"Code": "KH", "Name": "Cambodia"},{"Code": "CM", "Name": "Cameroon"},{"Code": "CA", "Name": "Canada"},{"Code": "CV", "Name": "Cape Verde"},{"Code": "KY", "Name": "Cayman Islands"},{"Code": "CF", "Name": "Central African Republic"},{"Code": "TD", "Name": "Chad"},{"Code": "CL", "Name": "Chile"},{"Code": "CN", "Name": "China"},{"Code": "CX", "Name": "Christmas Island"},{"Code": "CC", "Name": "Cocos (Keeling) Islands"},{"Code": "CO", "Name": "Colombia"},{"Code": "KM", "Name": "Comoros"},{"Code": "CG", "Name": "Congo"},{"Code": "CD", "Name": "Congo, the Democratic Republic of the"},{"Code": "CK", "Name": "Cook Islands"},{"Code": "CR", "Name": "Costa Rica"},{"Code": "CI", "Name": "C\u00f4te d'Ivoire"},{"Code": "HR", "Name": "Croatia"},{"Code": "CU", "Name": "Cuba"},{"Code": "CW", "Name": "Cura\u00e7ao"},{"Code": "CY", "Name": "Cyprus"},{"Code": "CZ", "Name": "Czechia"},{"Code": "DK", "Name": "Denmark"},{"Code": "DJ", "Name": "Djibouti"},{"Code": "DM", "Name": "Dominica"},{"Code": "DO", "Name": "Dominican Republic"},{"Code": "EC", "Name": "Ecuador"},{"Code": "EG", "Name": "Egypt"},{"Code": "SV", "Name": "El Salvador"},{"Code": "GQ", "Name": "Equatorial Guinea"},{"Code": "ER", "Name": "Eritrea"},{"Code": "EE", "Name": "Estonia"},{"Code": "ET", "Name": "Ethiopia"},{"Code": "FK", "Name": "Falkland Islands (Malvinas)"},{"Code": "FO", "Name": "Faroe Islands"},{"Code": "FJ", "Name": "Fiji"},{"Code": "FI", "Name": "Finland"},{"Code": "FR", "Name": "France"},{"Code": "GF", "Name": "French Guiana"},{"Code": "PF", "Name": "French Polynesia"},{"Code": "TF", "Name": "French Southern Territories"},{"Code": "GA", "Name": "Gabon"},{"Code": "GM", "Name": "Gambia"},{"Code": "GE", "Name": "Georgia"},{"Code": "DE", "Name": "Germany"},{"Code": "GH", "Name": "Ghana"},{"Code": "GI", "Name": "Gibraltar"},{"Code": "GR", "Name": "Greece"},{"Code": "GL", "Name": "Greenland"},{"Code": "GD", "Name": "Grenada"},{"Code": "GP", "Name": "Guadeloupe"},{"Code": "GU", "Name": "Guam"},{"Code": "GT", "Name": "Guatemala"},{"Code": "GG", "Name": "Guernsey"},{"Code": "GN", "Name": "Guinea"},{"Code": "GW", "Name": "Guinea-Bissau"},{"Code": "GY", "Name": "Guyana"},{"Code": "HT", "Name": "Haiti"},{"Code": "HM", "Name": "Heard Island and McDonald Islands"},{"Code": "VA", "Name": "Holy See (Vatican City State)"},{"Code": "HN", "Name": "Honduras"},{"Code": "HK", "Name": "Hong Kong"},{"Code": "HU", "Name": "Hungary"},{"Code": "IS", "Name": "Iceland"},{"Code": "IN", "Name": "India"},{"Code": "ID", "Name": "Indonesia"},{"Code": "IR", "Name": "Iran"},{"Code": "IQ", "Name": "Iraq"},{"Code": "IE", "Name": "Ireland"},{"Code": "IM", "Name": "Isle of Man"},{"Code": "IL", "Name": "Israel"},{"Code": "IT", "Name": "Italy"},{"Code": "JM", "Name": "Jamaica"},{"Code": "JP", "Name": "Japan"},{"Code": "JE", "Name": "Jersey"},{"Code": "JO", "Name": "Jordan"},{"Code": "KZ", "Name": "Kazakhstan"},{"Code": "KE", "Name": "Kenya"},{"Code": "KI", "Name": "Kiribati"},{"Code": "KP", "Name": "Korea, Democratic People's Republic of"},{"Code": "KR", "Name": "South Korea"},{"Code": "KW", "Name": "Kuwait"},{"Code": "KG", "Name": "Kyrgyzstan"},{"Code": "LA", "Name": "Laos"},{"Code": "LV", "Name": "Latvia"},{"Code": "LB", "Name": "Lebanon"},{"Code": "LS", "Name": "Lesotho"},{"Code": "LR", "Name": "Liberia"},{"Code": "LY", "Name": "Libya"},{"Code": "LI", "Name": "Liechtenstein"},{"Code": "LT", "Name": "Lithuania"},{"Code": "LU", "Name": "Luxembourg"},{"Code": "MO", "Name": "Macao"},{"Code": "MK", "Name": "North Macedonia"},{"Code": "MG", "Name": "Madagascar"},{"Code": "MW", "Name": "Malawi"},{"Code": "MY", "Name": "Malaysia"},{"Code": "MV", "Name": "Maldives"},{"Code": "ML", "Name": "Mali"},{"Code": "MT", "Name": "Malta"},{"Code": "MH", "Name": "Marshall Islands"},{"Code": "MQ", "Name": "Martinique"},{"Code": "MR", "Name": "Mauritania"},{"Code": "MU", "Name": "Mauritius"},{"Code": "YT", "Name": "Mayotte"},{"Code": "MX", "Name": "Mexico"},{"Code": "FM", "Name": "Micronesia"},{"Code": "MD", "Name": "Moldova"},{"Code": "MC", "Name": "Monaco"},{"Code": "MN", "Name": "Mongolia"},{"Code": "ME", "Name": "Montenegro"},{"Code": "MS", "Name": "Montserrat"},{"Code": "MA", "Name": "Morocco"},{"Code": "MZ", "Name": "Mozambique"},{"Code": "MM", "Name": "Myanmar"},{"Code": "NA", "Name": "Namibia"},{"Code": "NR", "Name": "Nauru"},{"Code": "NP", "Name": "Nepal"},{"Code": "NL", "Name": "Netherlands"},{"Code": "NC", "Name": "New Caledonia"},{"Code": "NZ", "Name": "New Zealand"},{"Code": "NI", "Name": "Nicaragua"},{"Code": "NE", "Name": "Niger"},{"Code": "NG", "Name": "Nigeria"},{"Code": "NU", "Name": "Niue"},{"Code": "NF", "Name": "Norfolk Island"},{"Code": "MP", "Name": "Northern Mariana Islands"},{"Code": "NO", "Name": "Norway"},{"Code": "OM", "Name": "Oman"},{"Code": "PK", "Name": "Pakistan"},{"Code": "PW", "Name": "Palau"},{"Code": "PS", "Name": "Palestine, State Of"},{"Code": "PA", "Name": "Panama"},{"Code": "PG", "Name": "Papua New Guinea"},{"Code": "PY", "Name": "Paraguay"},{"Code": "PE", "Name": "Peru"},{"Code": "PH", "Name": "Philippines"},{"Code": "PN", "Name": "Pitcairn"},{"Code": "PL", "Name": "Poland"},{"Code": "PT", "Name": "Portugal"},{"Code": "PR", "Name": "Puerto Rico"},{"Code": "QA", "Name": "Qatar"},{"Code": "RE", "Name": "R\u00e9union"},{"Code": "RO", "Name": "Romania"},{"Code": "RU", "Name": "Russia"},{"Code": "RW", "Name": "Rwanda"},{"Code": "BL", "Name": "Saint Barth\u00e9lemy"},{"Code": "SH", "Name": "Saint Helena, Ascension and Tristan da Cunha"},{"Code": "KN", "Name": "Saint Kitts and Nevis"},{"Code": "LC", "Name": "Saint Lucia"},{"Code": "MF", "Name": "Saint Martin (French part)"},{"Code": "PM", "Name": "Saint Pierre and Miquelon"},{"Code": "VC", "Name": "Saint Vincent and the Grenadines"},{"Code": "WS", "Name": "Samoa"},{"Code": "SM", "Name": "San Marino"},{"Code": "ST", "Name": "Sao Tome and Principe"},{"Code": "SA", "Name": "Saudi Arabia"},{"Code": "SN", "Name": "Senegal"},{"Code": "RS", "Name": "Serbia"},{"Code": "SC", "Name": "Seychelles"},{"Code": "SL", "Name": "Sierra Leone"},{"Code": "SG", "Name": "Singapore"},{"Code": "SX", "Name": "Sint Maarten (Dutch part)"},{"Code": "SK", "Name": "Slovakia"},{"Code": "SI", "Name": "Slovenia"},{"Code": "SB", "Name": "Solomon Islands"},{"Code": "SO", "Name": "Somalia"},{"Code": "ZA", "Name": "South Africa"},{"Code": "GS", "Name": "South Georgia and the South Sandwich Islands"},{"Code": "SS", "Name": "South Sudan"},{"Code": "ES", "Name": "Spain"},{"Code": "LK", "Name": "Sri Lanka"},{"Code": "SD", "Name": "Sudan"},{"Code": "SR", "Name": "Suriname"},{"Code": "SJ", "Name": "Svalbard and Jan Mayen"},{"Code": "SZ", "Name": "Eswatini"},{"Code": "SE", "Name": "Sweden"},{"Code": "CH", "Name": "Switzerland"},{"Code": "SY", "Name": "Syria"},{"Code": "TW", "Name": "Taiwan"},{"Code": "TJ", "Name": "Tajikistan"},{"Code": "TZ", "Name": "Tanzania"},{"Code": "TH", "Name": "Thailand"},{"Code": "TL", "Name": "Timor-Leste"},{"Code": "TG", "Name": "Togo"},{"Code": "TK", "Name": "Tokelau"},{"Code": "TO", "Name": "Tonga"},{"Code": "TT", "Name": "Trinidad and Tobago"},{"Code": "TN", "Name": "Tunisia"},{"Code": "TR", "Name": "Turkey"},{"Code": "TM", "Name": "Turkmenistan"},{"Code": "TC", "Name": "Turks and Caicos Islands"},{"Code": "TV", "Name": "Tuvalu"},{"Code": "UG", "Name": "Uganda"},{"Code": "UA", "Name": "Ukraine"},{"Code": "AE", "Name": "United Arab Emirates"},{"Code": "GB", "Name": "United Kingdom"},{"Code": "US", "Name": "United States of America"},{"Code": "UM", "Name": "United States Minor Outlying Islands"},{"Code": "UY", "Name": "Uruguay"},{"Code": "UZ", "Name": "Uzbekistan"},{"Code": "VU", "Name": "Vanuatu"},{"Code": "VE", "Name": "Venezuela"},{"Code": "VN", "Name": "Vietnam"},{"Code": "VG", "Name": "Virgin Islands, British"},{"Code": "VI", "Name": "Virgin Islands, U.S."},{"Code": "WF", "Name": "Wallis and Futuna"},{"Code": "EH", "Name": "Western Sahara"},{"Code": "YE", "Name": "Yemen"},{"Code": "ZM", "Name": "Zambia"},{"Code": "ZW", "Name": "Zimbabwe"}];

var all_country_data = {
  "AF": {
    "insecurity": {
      "allprop": {
        "allresp": [
          73,
          24,
          3
        ],
        "urban": [
          63,
          29,
          7
        ],
        "rural": [
          77,
          22,
          1
        ],
        "owner": [
          84,
          14,
          2
        ],
        "renter": [
          12,
          76,
          11
        ],
        "permission": [
          81,
          19,
          0
        ],
        "formal": [
          77,
          20,
          2
        ],
        "informal": [
          21,
          60,
          19
        ],
        "nodocs": [
          33,
          62,
          5
        ],
        "sole": [
          71,
          25,
          3
        ],
        "multiple": [
          78,
          20,
          2
        ],
        "male": [
          76,
          20,
          5
        ],
        "female": [
          70,
          29,
          1
        ],
        "young": [
          72,
          26,
          2
        ],
        "adult": [
          73,
          25,
          3
        ],
        "old": [
          75,
          17,
          8
        ],
        "fulltime": [
          77,
          17,
          6
        ],
        "parttime": [
          44,
          51,
          4
        ],
        "unemployed": [
          75,
          23,
          2
        ],
        "comfortable": [
          83,
          10,
          7
        ],
        "gettingby": [
          79,
          18,
          3
        ],
        "difficulty": [
          72,
          25,
          3
        ]
      },
      "homes": {
        "allresp": [
          74,
          23,
          3
        ],
        "urban": [
          65,
          29,
          7
        ],
        "rural": [
          78,
          21,
          1
        ],
        "owner": [
          86,
          13,
          2
        ],
        "renter": [
          12,
          76,
          11
        ],
        "permission": [
          81,
          18,
          0
        ],
        "formal": [
          79,
          19,
          2
        ],
        "informal": [
          20,
          63,
          17
        ],
        "nodocs": [
          33,
          61,
          5
        ],
        "sole": [
          71,
          25,
          3
        ],
        "multiple": [
          84,
          16,
          0
        ],
        "male": [
          77,
          19,
          4
        ],
        "female": [
          71,
          27,
          1
        ],
        "young": [
          73,
          25,
          2
        ],
        "adult": [
          74,
          24,
          2
        ],
        "old": [
          77,
          17,
          5
        ],
        "fulltime": [
          78,
          16,
          5
        ],
        "parttime": [
          46,
          50,
          4
        ],
        "unemployed": [
          75,
          23,
          2
        ],
        "comfortable": [
          88,
          10,
          2
        ],
        "gettingby": [
          82,
          17,
          1
        ],
        "difficulty": [
          73,
          24,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          2,
          7
        ],
        "urban": [
          88,
          6,
          6
        ],
        "rural": [
          92,
          1,
          7
        ],
        "owner": [
          98,
          0,
          2
        ],
        "renter": [
          74,
          10,
          16
        ],
        "permission": [
          92,
          3,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          3,
          9
        ],
        "multiple": [
          99,
          0,
          1
        ],
        "male": [
          96,
          1,
          3
        ],
        "female": [
          87,
          3,
          10
        ],
        "young": [
          92,
          0,
          8
        ],
        "adult": [
          91,
          3,
          7
        ],
        "old": [
          92,
          5,
          4
        ],
        "fulltime": [
          96,
          1,
          3
        ],
        "parttime": [
          90,
          2,
          9
        ],
        "unemployed": [
          89,
          7,
          3
        ],
        "comfortable": [
          93,
          0,
          7
        ],
        "gettingby": [
          93,
          3,
          5
        ],
        "difficulty": [
          91,
          2,
          7
        ]
      },
      "homes": {
        "allresp": [
          91,
          2,
          7
        ],
        "urban": [
          87,
          7,
          6
        ],
        "rural": [
          92,
          1,
          7
        ],
        "owner": [
          98,
          0,
          2
        ],
        "renter": [
          73,
          11,
          16
        ],
        "permission": [
          92,
          3,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          3,
          9
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          96,
          1,
          3
        ],
        "female": [
          86,
          4,
          10
        ],
        "young": [
          92,
          0,
          8
        ],
        "adult": [
          90,
          3,
          7
        ],
        "old": [
          92,
          5,
          4
        ],
        "fulltime": [
          96,
          1,
          3
        ],
        "parttime": [
          89,
          2,
          9
        ],
        "unemployed": [
          89,
          7,
          3
        ],
        "comfortable": [
          93,
          0,
          7
        ],
        "gettingby": [
          93,
          3,
          5
        ],
        "difficulty": [
          90,
          3,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 90,
      "family": 34,
      "money": 55,
      "death": 26,
      "government": 17,
      "companies": 8,
      "customary": 17
    }
  },
  "AL": {
    "insecurity": {
      "allprop": {
        "allresp": [
          78,
          18,
          4
        ],
        "urban": [
          79,
          18,
          3
        ],
        "rural": [
          77,
          16,
          6
        ],
        "owner": [
          85,
          13,
          3
        ],
        "renter": [
          35,
          61,
          4
        ],
        "permission": [
          74,
          20,
          6
        ],
        "formal": [
          82,
          15,
          3
        ],
        "informal": [
          68,
          25,
          8
        ],
        "nodocs": [
          36,
          58,
          6
        ],
        "sole": [
          79,
          17,
          3
        ],
        "multiple": [
          77,
          19,
          4
        ],
        "male": [
          79,
          18,
          3
        ],
        "female": [
          77,
          18,
          5
        ],
        "young": [
          75,
          21,
          4
        ],
        "adult": [
          72,
          23,
          5
        ],
        "old": [
          89,
          8,
          3
        ],
        "fulltime": [
          73,
          21,
          5
        ],
        "parttime": [
          70,
          26,
          4
        ],
        "unemployed": [
          76,
          23,
          1
        ],
        "comfortable": [
          78,
          11,
          10
        ],
        "gettingby": [
          83,
          15,
          3
        ],
        "difficulty": [
          76,
          20,
          4
        ]
      },
      "homes": {
        "allresp": [
          80,
          16,
          3
        ],
        "urban": [
          80,
          18,
          3
        ],
        "rural": [
          82,
          14,
          4
        ],
        "owner": [
          88,
          11,
          2
        ],
        "renter": [
          35,
          61,
          4
        ],
        "permission": [
          75,
          19,
          6
        ],
        "formal": [
          84,
          13,
          3
        ],
        "informal": [
          71,
          22,
          7
        ],
        "nodocs": [
          39,
          56,
          5
        ],
        "sole": [
          79,
          17,
          3
        ],
        "multiple": [
          87,
          11,
          1
        ],
        "male": [
          82,
          16,
          2
        ],
        "female": [
          79,
          16,
          5
        ],
        "young": [
          78,
          20,
          3
        ],
        "adult": [
          75,
          21,
          4
        ],
        "old": [
          90,
          7,
          3
        ],
        "fulltime": [
          79,
          18,
          3
        ],
        "parttime": [
          73,
          23,
          4
        ],
        "unemployed": [
          76,
          23,
          1
        ],
        "comfortable": [
          82,
          11,
          7
        ],
        "gettingby": [
          85,
          13,
          2
        ],
        "difficulty": [
          77,
          19,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          82,
          15,
          3
        ],
        "urban": [
          82,
          14,
          4
        ],
        "rural": [
          81,
          16,
          3
        ],
        "owner": [
          88,
          11,
          1
        ],
        "renter": [
          46,
          30,
          24
        ],
        "permission": [
          76,
          19,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          80,
          17,
          3
        ],
        "multiple": [
          88,
          9,
          2
        ],
        "male": [
          81,
          17,
          2
        ],
        "female": [
          82,
          14,
          5
        ],
        "young": [
          73,
          18,
          8
        ],
        "adult": [
          80,
          16,
          4
        ],
        "old": [
          87,
          12,
          1
        ],
        "fulltime": [
          86,
          11,
          2
        ],
        "parttime": [
          72,
          27,
          2
        ],
        "unemployed": [
          77,
          13,
          11
        ],
        "comfortable": [
          86,
          12,
          3
        ],
        "gettingby": [
          83,
          15,
          2
        ],
        "difficulty": [
          80,
          15,
          4
        ]
      },
      "homes": {
        "allresp": [
          80,
          17,
          4
        ],
        "urban": [
          81,
          15,
          4
        ],
        "rural": [
          78,
          19,
          4
        ],
        "owner": [
          87,
          12,
          1
        ],
        "renter": [
          39,
          35,
          26
        ],
        "permission": [
          75,
          20,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          80,
          17,
          3
        ],
        "multiple": [
          80,
          16,
          4
        ],
        "male": [
          80,
          18,
          3
        ],
        "female": [
          80,
          15,
          5
        ],
        "young": [
          73,
          18,
          8
        ],
        "adult": [
          77,
          19,
          4
        ],
        "old": [
          86,
          13,
          1
        ],
        "fulltime": [
          84,
          12,
          4
        ],
        "parttime": [
          70,
          28,
          2
        ],
        "unemployed": [
          75,
          14,
          11
        ],
        "comfortable": [
          86,
          12,
          3
        ],
        "gettingby": [
          82,
          15,
          3
        ],
        "difficulty": [
          78,
          18,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 57,
      "family": 38,
      "money": 45,
      "death": 23,
      "government": 18,
      "companies": 4,
      "customary": -1
    }
  },
  "DZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          78,
          16,
          6
        ],
        "urban": [
          78,
          17,
          5
        ],
        "rural": [
          83,
          5,
          12
        ],
        "owner": [
          94,
          4,
          2
        ],
        "renter": [
          59,
          33,
          8
        ],
        "permission": [
          79,
          15,
          6
        ],
        "formal": [
          83,
          13,
          4
        ],
        "informal": [
          64,
          18,
          18
        ],
        "nodocs": [
          37,
          48,
          15
        ],
        "sole": [
          81,
          14,
          5
        ],
        "multiple": [
          56,
          31,
          13
        ],
        "male": [
          80,
          15,
          5
        ],
        "female": [
          77,
          17,
          6
        ],
        "young": [
          73,
          18,
          9
        ],
        "adult": [
          76,
          18,
          5
        ],
        "old": [
          90,
          7,
          3
        ],
        "fulltime": [
          78,
          18,
          4
        ],
        "parttime": [
          73,
          22,
          5
        ],
        "unemployed": [
          71,
          24,
          5
        ],
        "comfortable": [
          82,
          13,
          5
        ],
        "gettingby": [
          84,
          11,
          5
        ],
        "difficulty": [
          61,
          31,
          8
        ]
      },
      "homes": {
        "allresp": [
          80,
          15,
          5
        ],
        "urban": [
          79,
          16,
          5
        ],
        "rural": [
          85,
          5,
          9
        ],
        "owner": [
          94,
          4,
          2
        ],
        "renter": [
          60,
          32,
          7
        ],
        "permission": [
          81,
          14,
          5
        ],
        "formal": [
          85,
          12,
          3
        ],
        "informal": [
          67,
          16,
          17
        ],
        "nodocs": [
          39,
          45,
          16
        ],
        "sole": [
          81,
          14,
          5
        ],
        "multiple": [
          72,
          23,
          5
        ],
        "male": [
          81,
          14,
          5
        ],
        "female": [
          78,
          17,
          5
        ],
        "young": [
          76,
          16,
          7
        ],
        "adult": [
          77,
          18,
          5
        ],
        "old": [
          91,
          7,
          3
        ],
        "fulltime": [
          79,
          17,
          3
        ],
        "parttime": [
          78,
          19,
          3
        ],
        "unemployed": [
          71,
          24,
          5
        ],
        "comfortable": [
          84,
          11,
          5
        ],
        "gettingby": [
          86,
          11,
          4
        ],
        "difficulty": [
          61,
          31,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          8,
          7
        ],
        "urban": [
          84,
          9,
          7
        ],
        "rural": [
          93,
          0,
          7
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          79,
          5,
          16
        ],
        "permission": [
          82,
          13,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          8,
          7
        ],
        "multiple": [
          91,
          4,
          5
        ],
        "male": [
          87,
          6,
          7
        ],
        "female": [
          82,
          10,
          8
        ],
        "young": [
          75,
          13,
          11
        ],
        "adult": [
          85,
          8,
          8
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          87,
          4,
          9
        ],
        "parttime": [
          83,
          9,
          8
        ],
        "unemployed": [
          76,
          18,
          7
        ],
        "comfortable": [
          87,
          7,
          5
        ],
        "gettingby": [
          88,
          8,
          4
        ],
        "difficulty": [
          73,
          9,
          18
        ]
      },
      "homes": {
        "allresp": [
          84,
          8,
          8
        ],
        "urban": [
          84,
          9,
          8
        ],
        "rural": [
          93,
          0,
          7
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          79,
          5,
          16
        ],
        "permission": [
          81,
          13,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          8,
          7
        ],
        "multiple": [
          86,
          4,
          11
        ],
        "male": [
          87,
          6,
          7
        ],
        "female": [
          82,
          10,
          8
        ],
        "young": [
          75,
          13,
          12
        ],
        "adult": [
          84,
          8,
          8
        ],
        "old": [
          94,
          4,
          3
        ],
        "fulltime": [
          87,
          3,
          10
        ],
        "parttime": [
          83,
          9,
          8
        ],
        "unemployed": [
          75,
          18,
          7
        ],
        "comfortable": [
          87,
          7,
          6
        ],
        "gettingby": [
          88,
          8,
          4
        ],
        "difficulty": [
          73,
          10,
          18
        ]
      }
    },
    "reasons": {
      "askedtoleave": 55,
      "family": 32,
      "money": 35,
      "death": 26,
      "government": 20,
      "companies": 8,
      "customary": -1
    }
  },
  "AR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          82,
          16,
          2
        ],
        "urban": [
          82,
          16,
          2
        ],
        "rural": [
          80,
          19,
          2
        ],
        "owner": [
          92,
          6,
          2
        ],
        "renter": [
          62,
          36,
          2
        ],
        "permission": [
          78,
          22,
          0
        ],
        "formal": [
          85,
          14,
          2
        ],
        "informal": [
          71,
          28,
          1
        ],
        "nodocs": [
          70,
          28,
          2
        ],
        "sole": [
          82,
          16,
          2
        ],
        "multiple": [
          82,
          18,
          0
        ],
        "male": [
          83,
          16,
          1
        ],
        "female": [
          82,
          16,
          2
        ],
        "young": [
          78,
          22,
          1
        ],
        "adult": [
          81,
          19,
          0
        ],
        "old": [
          88,
          7,
          5
        ],
        "fulltime": [
          83,
          17,
          0
        ],
        "parttime": [
          81,
          18,
          0
        ],
        "unemployed": [
          63,
          35,
          1
        ],
        "comfortable": [
          91,
          6,
          4
        ],
        "gettingby": [
          84,
          15,
          1
        ],
        "difficulty": [
          79,
          20,
          2
        ]
      },
      "homes": {
        "allresp": [
          83,
          16,
          2
        ],
        "urban": [
          83,
          16,
          2
        ],
        "rural": [
          80,
          19,
          2
        ],
        "owner": [
          92,
          6,
          2
        ],
        "renter": [
          62,
          36,
          2
        ],
        "permission": [
          79,
          21,
          0
        ],
        "formal": [
          85,
          13,
          2
        ],
        "informal": [
          70,
          29,
          1
        ],
        "nodocs": [
          69,
          29,
          2
        ],
        "sole": [
          82,
          16,
          2
        ],
        "multiple": [
          84,
          16,
          0
        ],
        "male": [
          83,
          16,
          1
        ],
        "female": [
          83,
          16,
          2
        ],
        "young": [
          79,
          21,
          1
        ],
        "adult": [
          81,
          19,
          0
        ],
        "old": [
          88,
          7,
          5
        ],
        "fulltime": [
          83,
          17,
          0
        ],
        "parttime": [
          82,
          17,
          0
        ],
        "unemployed": [
          63,
          35,
          1
        ],
        "comfortable": [
          91,
          6,
          4
        ],
        "gettingby": [
          84,
          15,
          1
        ],
        "difficulty": [
          79,
          19,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          84,
          9,
          6
        ],
        "urban": [
          85,
          9,
          6
        ],
        "rural": [
          71,
          18,
          10
        ],
        "owner": [
          93,
          5,
          2
        ],
        "renter": [
          81,
          8,
          11
        ],
        "permission": [
          80,
          14,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          11,
          6
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          87,
          6,
          7
        ],
        "female": [
          82,
          12,
          6
        ],
        "young": [
          85,
          11,
          4
        ],
        "adult": [
          82,
          11,
          7
        ],
        "old": [
          88,
          6,
          6
        ],
        "fulltime": [
          85,
          7,
          8
        ],
        "parttime": [
          81,
          14,
          5
        ],
        "unemployed": [
          85,
          13,
          2
        ],
        "comfortable": [
          92,
          4,
          4
        ],
        "gettingby": [
          89,
          5,
          6
        ],
        "difficulty": [
          79,
          14,
          7
        ]
      },
      "homes": {
        "allresp": [
          84,
          10,
          6
        ],
        "urban": [
          84,
          10,
          6
        ],
        "rural": [
          71,
          18,
          10
        ],
        "owner": [
          93,
          5,
          2
        ],
        "renter": [
          79,
          9,
          12
        ],
        "permission": [
          79,
          15,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          11,
          6
        ],
        "multiple": [
          90,
          6,
          4
        ],
        "male": [
          86,
          7,
          7
        ],
        "female": [
          81,
          12,
          6
        ],
        "young": [
          85,
          11,
          4
        ],
        "adult": [
          81,
          12,
          7
        ],
        "old": [
          87,
          6,
          7
        ],
        "fulltime": [
          84,
          8,
          8
        ],
        "parttime": [
          80,
          14,
          5
        ],
        "unemployed": [
          85,
          13,
          2
        ],
        "comfortable": [
          92,
          4,
          4
        ],
        "gettingby": [
          88,
          6,
          6
        ],
        "difficulty": [
          78,
          15,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 78,
      "family": 42,
      "money": 53,
      "death": 27,
      "government": 15,
      "companies": 10,
      "customary": 7
    }
  },
  "AM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          80,
          14,
          6
        ],
        "urban": [
          81,
          13,
          5
        ],
        "rural": [
          69,
          18,
          13
        ],
        "owner": [
          85,
          8,
          6
        ],
        "renter": [
          35,
          59,
          6
        ],
        "permission": [
          83,
          11,
          6
        ],
        "formal": [
          85,
          9,
          6
        ],
        "informal": [
          55,
          39,
          6
        ],
        "nodocs": [
          47,
          37,
          15
        ],
        "sole": [
          80,
          14,
          6
        ],
        "multiple": [
          80,
          12,
          7
        ],
        "male": [
          77,
          16,
          7
        ],
        "female": [
          83,
          12,
          6
        ],
        "young": [
          75,
          16,
          9
        ],
        "adult": [
          80,
          15,
          5
        ],
        "old": [
          83,
          10,
          7
        ],
        "fulltime": [
          77,
          16,
          7
        ],
        "parttime": [
          78,
          10,
          12
        ],
        "unemployed": [
          82,
          14,
          4
        ],
        "comfortable": [
          86,
          8,
          6
        ],
        "gettingby": [
          85,
          9,
          6
        ],
        "difficulty": [
          70,
          24,
          6
        ]
      },
      "homes": {
        "allresp": [
          81,
          13,
          6
        ],
        "urban": [
          82,
          13,
          5
        ],
        "rural": [
          73,
          15,
          12
        ],
        "owner": [
          86,
          8,
          6
        ],
        "renter": [
          35,
          59,
          6
        ],
        "permission": [
          84,
          10,
          6
        ],
        "formal": [
          86,
          8,
          6
        ],
        "informal": [
          56,
          39,
          5
        ],
        "nodocs": [
          49,
          36,
          15
        ],
        "sole": [
          80,
          14,
          6
        ],
        "multiple": [
          85,
          9,
          6
        ],
        "male": [
          78,
          15,
          7
        ],
        "female": [
          83,
          11,
          5
        ],
        "young": [
          75,
          16,
          9
        ],
        "adult": [
          81,
          14,
          5
        ],
        "old": [
          84,
          9,
          7
        ],
        "fulltime": [
          78,
          16,
          6
        ],
        "parttime": [
          78,
          10,
          12
        ],
        "unemployed": [
          82,
          14,
          4
        ],
        "comfortable": [
          87,
          8,
          6
        ],
        "gettingby": [
          85,
          9,
          6
        ],
        "difficulty": [
          71,
          23,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          9,
          6
        ],
        "urban": [
          85,
          9,
          5
        ],
        "rural": [
          85,
          5,
          10
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          34,
          41,
          25
        ],
        "permission": [
          89,
          6,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          11,
          6
        ],
        "multiple": [
          96,
          3,
          1
        ],
        "male": [
          87,
          7,
          6
        ],
        "female": [
          84,
          10,
          6
        ],
        "young": [
          83,
          7,
          11
        ],
        "adult": [
          84,
          10,
          6
        ],
        "old": [
          89,
          7,
          4
        ],
        "fulltime": [
          90,
          4,
          6
        ],
        "parttime": [
          84,
          9,
          6
        ],
        "unemployed": [
          83,
          7,
          10
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          85,
          9,
          5
        ],
        "difficulty": [
          81,
          13,
          7
        ]
      },
      "homes": {
        "allresp": [
          85,
          9,
          6
        ],
        "urban": [
          85,
          9,
          5
        ],
        "rural": [
          81,
          7,
          12
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          30,
          44,
          25
        ],
        "permission": [
          88,
          6,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          11,
          6
        ],
        "multiple": [
          93,
          5,
          2
        ],
        "male": [
          86,
          8,
          6
        ],
        "female": [
          84,
          10,
          6
        ],
        "young": [
          83,
          7,
          11
        ],
        "adult": [
          84,
          10,
          6
        ],
        "old": [
          88,
          8,
          4
        ],
        "fulltime": [
          90,
          5,
          6
        ],
        "parttime": [
          83,
          11,
          6
        ],
        "unemployed": [
          83,
          7,
          10
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          85,
          9,
          5
        ],
        "difficulty": [
          79,
          13,
          8
        ]
      }
    },
    "reasons": {
      "askedtoleave": 45,
      "family": 10,
      "money": 34,
      "death": 6,
      "government": 6,
      "companies": 2,
      "customary": -1
    }
  },
  "AU": {
    "insecurity": {
      "allprop": {
        "allresp": [
          86,
          13,
          1
        ],
        "urban": [
          86,
          13,
          2
        ],
        "rural": [
          85,
          15,
          0
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          65,
          33,
          2
        ],
        "permission": [
          86,
          12,
          1
        ],
        "formal": [
          86,
          13,
          1
        ],
        "informal": [
          84,
          14,
          1
        ],
        "nodocs": [
          79,
          12,
          9
        ],
        "sole": [
          85,
          14,
          1
        ],
        "multiple": [
          88,
          11,
          1
        ],
        "male": [
          89,
          10,
          1
        ],
        "female": [
          83,
          15,
          2
        ],
        "young": [
          66,
          28,
          7
        ],
        "adult": [
          85,
          15,
          1
        ],
        "old": [
          92,
          7,
          1
        ],
        "fulltime": [
          86,
          13,
          1
        ],
        "parttime": [
          88,
          12,
          0
        ],
        "unemployed": [
          62,
          25,
          13
        ],
        "comfortable": [
          92,
          7,
          1
        ],
        "gettingby": [
          86,
          13,
          1
        ],
        "difficulty": [
          68,
          29,
          3
        ]
      },
      "homes": {
        "allresp": [
          86,
          13,
          1
        ],
        "urban": [
          86,
          12,
          1
        ],
        "rural": [
          86,
          14,
          0
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          65,
          33,
          2
        ],
        "permission": [
          88,
          12,
          0
        ],
        "formal": [
          87,
          13,
          1
        ],
        "informal": [
          87,
          12,
          1
        ],
        "nodocs": [
          82,
          12,
          6
        ],
        "sole": [
          85,
          14,
          1
        ],
        "multiple": [
          90,
          10,
          0
        ],
        "male": [
          89,
          10,
          1
        ],
        "female": [
          83,
          15,
          1
        ],
        "young": [
          68,
          28,
          5
        ],
        "adult": [
          85,
          14,
          1
        ],
        "old": [
          92,
          7,
          1
        ],
        "fulltime": [
          87,
          13,
          1
        ],
        "parttime": [
          88,
          12,
          0
        ],
        "unemployed": [
          62,
          25,
          13
        ],
        "comfortable": [
          93,
          7,
          0
        ],
        "gettingby": [
          87,
          13,
          1
        ],
        "difficulty": [
          68,
          29,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          90,
          6,
          4
        ],
        "urban": [
          91,
          6,
          3
        ],
        "rural": [
          85,
          6,
          9
        ],
        "owner": [
          97,
          3,
          1
        ],
        "renter": [
          85,
          8,
          7
        ],
        "permission": [
          79,
          11,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          97,
          2,
          0
        ],
        "male": [
          88,
          8,
          4
        ],
        "female": [
          92,
          4,
          3
        ],
        "young": [
          83,
          8,
          8
        ],
        "adult": [
          89,
          7,
          4
        ],
        "old": [
          93,
          4,
          3
        ],
        "fulltime": [
          92,
          6,
          3
        ],
        "parttime": [
          89,
          5,
          6
        ],
        "unemployed": [
          94,
          0,
          6
        ],
        "comfortable": [
          92,
          5,
          4
        ],
        "gettingby": [
          88,
          8,
          4
        ],
        "difficulty": [
          94,
          3,
          3
        ]
      },
      "homes": {
        "allresp": [
          88,
          7,
          5
        ],
        "urban": [
          88,
          7,
          5
        ],
        "rural": [
          83,
          7,
          10
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          83,
          9,
          8
        ],
        "permission": [
          70,
          15,
          15
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          89,
          6,
          5
        ],
        "male": [
          86,
          8,
          6
        ],
        "female": [
          90,
          6,
          4
        ],
        "young": [
          75,
          11,
          15
        ],
        "adult": [
          88,
          8,
          4
        ],
        "old": [
          90,
          5,
          4
        ],
        "fulltime": [
          89,
          7,
          4
        ],
        "parttime": [
          83,
          7,
          10
        ],
        "unemployed": [
          94,
          0,
          6
        ],
        "comfortable": [
          88,
          6,
          5
        ],
        "gettingby": [
          86,
          9,
          5
        ],
        "difficulty": [
          93,
          3,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 79,
      "family": 12,
      "money": 39,
      "death": 22,
      "government": 11,
      "companies": 11,
      "customary": 4
    }
  },
  "AT": {
    "insecurity": {
      "allprop": {
        "allresp": [
          94,
          5,
          2
        ],
        "urban": [
          93,
          5,
          2
        ],
        "rural": [
          94,
          4,
          2
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          91,
          7,
          2
        ],
        "permission": [
          95,
          5,
          1
        ],
        "formal": [
          94,
          5,
          1
        ],
        "informal": [
          86,
          7,
          6
        ],
        "nodocs": [
          93,
          3,
          4
        ],
        "sole": [
          95,
          4,
          1
        ],
        "multiple": [
          87,
          9,
          4
        ],
        "male": [
          94,
          5,
          1
        ],
        "female": [
          93,
          4,
          2
        ],
        "young": [
          93,
          6,
          0
        ],
        "adult": [
          92,
          6,
          2
        ],
        "old": [
          96,
          3,
          1
        ],
        "fulltime": [
          95,
          3,
          2
        ],
        "parttime": [
          92,
          5,
          3
        ],
        "unemployed": [
          73,
          27,
          0
        ],
        "comfortable": [
          97,
          3,
          1
        ],
        "gettingby": [
          94,
          4,
          2
        ],
        "difficulty": [
          84,
          14,
          2
        ]
      },
      "homes": {
        "allresp": [
          95,
          4,
          2
        ],
        "urban": [
          95,
          4,
          1
        ],
        "rural": [
          94,
          3,
          2
        ],
        "owner": [
          97,
          1,
          2
        ],
        "renter": [
          92,
          7,
          2
        ],
        "permission": [
          95,
          4,
          1
        ],
        "formal": [
          95,
          4,
          1
        ],
        "informal": [
          91,
          3,
          6
        ],
        "nodocs": [
          94,
          3,
          3
        ],
        "sole": [
          95,
          4,
          1
        ],
        "multiple": [
          94,
          3,
          3
        ],
        "male": [
          95,
          4,
          1
        ],
        "female": [
          94,
          3,
          2
        ],
        "young": [
          94,
          5,
          0
        ],
        "adult": [
          93,
          5,
          2
        ],
        "old": [
          97,
          2,
          1
        ],
        "fulltime": [
          96,
          3,
          2
        ],
        "parttime": [
          93,
          4,
          3
        ],
        "unemployed": [
          78,
          22,
          0
        ],
        "comfortable": [
          98,
          1,
          0
        ],
        "gettingby": [
          95,
          3,
          2
        ],
        "difficulty": [
          84,
          14,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          6,
          5
        ],
        "urban": [
          90,
          6,
          5
        ],
        "rural": [
          88,
          7,
          5
        ],
        "owner": [
          96,
          4,
          0
        ],
        "renter": [
          80,
          10,
          9
        ],
        "permission": [
          90,
          5,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          96,
          2,
          3
        ],
        "male": [
          89,
          6,
          5
        ],
        "female": [
          89,
          6,
          5
        ],
        "young": [
          87,
          8,
          4
        ],
        "adult": [
          90,
          6,
          5
        ],
        "old": [
          89,
          6,
          5
        ],
        "fulltime": [
          88,
          8,
          4
        ],
        "parttime": [
          91,
          4,
          6
        ],
        "unemployed": [
          87,
          13,
          0
        ],
        "comfortable": [
          93,
          4,
          3
        ],
        "gettingby": [
          87,
          7,
          6
        ],
        "difficulty": [
          85,
          8,
          6
        ]
      },
      "homes": {
        "allresp": [
          88,
          7,
          5
        ],
        "urban": [
          88,
          6,
          5
        ],
        "rural": [
          85,
          9,
          6
        ],
        "owner": [
          95,
          5,
          1
        ],
        "renter": [
          77,
          13,
          10
        ],
        "permission": [
          89,
          5,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          87,
          7,
          6
        ],
        "male": [
          87,
          8,
          6
        ],
        "female": [
          89,
          6,
          5
        ],
        "young": [
          87,
          9,
          4
        ],
        "adult": [
          89,
          7,
          5
        ],
        "old": [
          86,
          7,
          7
        ],
        "fulltime": [
          87,
          9,
          4
        ],
        "parttime": [
          89,
          5,
          6
        ],
        "unemployed": [
          85,
          15,
          0
        ],
        "comfortable": [
          91,
          5,
          4
        ],
        "gettingby": [
          86,
          8,
          6
        ],
        "difficulty": [
          85,
          9,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 41,
      "family": 18,
      "money": 34,
      "death": 15,
      "government": 9,
      "companies": 11,
      "customary": -1
    }
  },
  "BD": {
    "insecurity": {
      "allprop": {
        "allresp": [
          66,
          28,
          6
        ],
        "urban": [
          54,
          36,
          10
        ],
        "rural": [
          71,
          25,
          4
        ],
        "owner": [
          74,
          21,
          5
        ],
        "renter": [
          31,
          57,
          12
        ],
        "permission": [
          71,
          24,
          5
        ],
        "formal": [
          70,
          25,
          4
        ],
        "informal": [
          40,
          43,
          18
        ],
        "nodocs": [
          44,
          43,
          13
        ],
        "sole": [
          69,
          25,
          6
        ],
        "multiple": [
          59,
          36,
          5
        ],
        "male": [
          70,
          25,
          5
        ],
        "female": [
          62,
          31,
          7
        ],
        "young": [
          62,
          32,
          6
        ],
        "adult": [
          66,
          29,
          6
        ],
        "old": [
          74,
          20,
          7
        ],
        "fulltime": [
          67,
          28,
          5
        ],
        "parttime": [
          70,
          22,
          8
        ],
        "unemployed": [
          69,
          25,
          6
        ],
        "comfortable": [
          78,
          20,
          2
        ],
        "gettingby": [
          64,
          31,
          6
        ],
        "difficulty": [
          63,
          30,
          7
        ]
      },
      "homes": {
        "allresp": [
          68,
          26,
          6
        ],
        "urban": [
          55,
          35,
          10
        ],
        "rural": [
          73,
          22,
          4
        ],
        "owner": [
          77,
          18,
          5
        ],
        "renter": [
          32,
          55,
          12
        ],
        "permission": [
          72,
          23,
          4
        ],
        "formal": [
          74,
          21,
          5
        ],
        "informal": [
          38,
          47,
          15
        ],
        "nodocs": [
          41,
          48,
          11
        ],
        "sole": [
          69,
          25,
          6
        ],
        "multiple": [
          67,
          28,
          5
        ],
        "male": [
          72,
          22,
          5
        ],
        "female": [
          64,
          29,
          7
        ],
        "young": [
          64,
          29,
          7
        ],
        "adult": [
          68,
          26,
          5
        ],
        "old": [
          74,
          20,
          7
        ],
        "fulltime": [
          70,
          25,
          5
        ],
        "parttime": [
          70,
          20,
          10
        ],
        "unemployed": [
          71,
          23,
          6
        ],
        "comfortable": [
          80,
          18,
          2
        ],
        "gettingby": [
          66,
          28,
          6
        ],
        "difficulty": [
          65,
          28,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          5,
          10
        ],
        "urban": [
          65,
          13,
          22
        ],
        "rural": [
          92,
          3,
          5
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          33,
          20,
          46
        ],
        "permission": [
          92,
          3,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          82,
          7,
          12
        ],
        "multiple": [
          96,
          1,
          3
        ],
        "male": [
          85,
          6,
          9
        ],
        "female": [
          85,
          5,
          11
        ],
        "young": [
          83,
          7,
          10
        ],
        "adult": [
          83,
          6,
          11
        ],
        "old": [
          93,
          1,
          6
        ],
        "fulltime": [
          83,
          7,
          10
        ],
        "parttime": [
          82,
          5,
          13
        ],
        "unemployed": [
          80,
          8,
          12
        ],
        "comfortable": [
          85,
          7,
          8
        ],
        "gettingby": [
          85,
          6,
          9
        ],
        "difficulty": [
          85,
          4,
          11
        ]
      },
      "homes": {
        "allresp": [
          81,
          6,
          12
        ],
        "urban": [
          56,
          16,
          28
        ],
        "rural": [
          91,
          3,
          6
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          12,
          27,
          61
        ],
        "permission": [
          91,
          3,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          82,
          7,
          12
        ],
        "multiple": [
          82,
          6,
          13
        ],
        "male": [
          82,
          7,
          11
        ],
        "female": [
          81,
          6,
          13
        ],
        "young": [
          78,
          7,
          15
        ],
        "adult": [
          80,
          7,
          13
        ],
        "old": [
          93,
          2,
          6
        ],
        "fulltime": [
          78,
          8,
          13
        ],
        "parttime": [
          81,
          6,
          14
        ],
        "unemployed": [
          80,
          8,
          12
        ],
        "comfortable": [
          80,
          7,
          12
        ],
        "gettingby": [
          83,
          7,
          11
        ],
        "difficulty": [
          81,
          6,
          13
        ]
      }
    },
    "reasons": {
      "askedtoleave": 47,
      "family": 35,
      "money": 31,
      "death": 21,
      "government": 15,
      "companies": 7,
      "customary": 16
    }
  },
  "AZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          86,
          6,
          8
        ],
        "urban": [
          86,
          8,
          6
        ],
        "rural": [
          87,
          4,
          10
        ],
        "owner": [
          91,
          2,
          7
        ],
        "renter": [
          13,
          73,
          14
        ],
        "permission": [
          84,
          7,
          10
        ],
        "formal": [
          88,
          4,
          7
        ],
        "informal": [
          55,
          29,
          16
        ],
        "nodocs": [
          33,
          67,
          0
        ],
        "sole": [
          88,
          5,
          7
        ],
        "multiple": [
          84,
          7,
          9
        ],
        "male": [
          89,
          5,
          6
        ],
        "female": [
          84,
          6,
          10
        ],
        "young": [
          84,
          7,
          9
        ],
        "adult": [
          84,
          7,
          9
        ],
        "old": [
          98,
          1,
          2
        ],
        "fulltime": [
          86,
          7,
          7
        ],
        "parttime": [
          87,
          5,
          8
        ],
        "unemployed": [
          75,
          10,
          15
        ],
        "comfortable": [
          96,
          1,
          3
        ],
        "gettingby": [
          88,
          5,
          7
        ],
        "difficulty": [
          81,
          9,
          9
        ]
      },
      "homes": {
        "allresp": [
          89,
          6,
          5
        ],
        "urban": [
          87,
          8,
          5
        ],
        "rural": [
          92,
          3,
          5
        ],
        "owner": [
          93,
          2,
          5
        ],
        "renter": [
          13,
          73,
          14
        ],
        "permission": [
          88,
          7,
          5
        ],
        "formal": [
          92,
          4,
          5
        ],
        "informal": [
          57,
          29,
          14
        ],
        "nodocs": [
          29,
          71,
          0
        ],
        "sole": [
          88,
          5,
          7
        ],
        "multiple": [
          91,
          6,
          2
        ],
        "male": [
          91,
          5,
          4
        ],
        "female": [
          88,
          6,
          6
        ],
        "young": [
          88,
          7,
          5
        ],
        "adult": [
          87,
          7,
          6
        ],
        "old": [
          98,
          0,
          2
        ],
        "fulltime": [
          89,
          7,
          4
        ],
        "parttime": [
          90,
          4,
          5
        ],
        "unemployed": [
          79,
          10,
          11
        ],
        "comfortable": [
          98,
          1,
          1
        ],
        "gettingby": [
          91,
          5,
          4
        ],
        "difficulty": [
          84,
          9,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          94,
          6,
          0
        ],
        "urban": [
          92,
          7,
          1
        ],
        "rural": [
          96,
          4,
          0
        ],
        "owner": [
          97,
          3,
          0
        ],
        "renter": [
          50,
          43,
          6
        ],
        "permission": [
          92,
          8,
          0
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          7,
          1
        ],
        "multiple": [
          98,
          2,
          0
        ],
        "male": [
          95,
          4,
          1
        ],
        "female": [
          93,
          7,
          0
        ],
        "young": [
          86,
          13,
          1
        ],
        "adult": [
          95,
          4,
          0
        ],
        "old": [
          99,
          1,
          0
        ],
        "fulltime": [
          94,
          6,
          0
        ],
        "parttime": [
          94,
          5,
          0
        ],
        "unemployed": [
          86,
          12,
          3
        ],
        "comfortable": [
          96,
          3,
          1
        ],
        "gettingby": [
          95,
          5,
          0
        ],
        "difficulty": [
          91,
          8,
          1
        ]
      },
      "homes": {
        "allresp": [
          92,
          7,
          1
        ],
        "urban": [
          91,
          9,
          1
        ],
        "rural": [
          94,
          5,
          1
        ],
        "owner": [
          96,
          3,
          0
        ],
        "renter": [
          37,
          55,
          8
        ],
        "permission": [
          91,
          9,
          0
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          7,
          1
        ],
        "multiple": [
          94,
          6,
          0
        ],
        "male": [
          94,
          6,
          1
        ],
        "female": [
          91,
          9,
          1
        ],
        "young": [
          85,
          14,
          1
        ],
        "adult": [
          93,
          6,
          1
        ],
        "old": [
          99,
          1,
          0
        ],
        "fulltime": [
          92,
          7,
          0
        ],
        "parttime": [
          93,
          6,
          0
        ],
        "unemployed": [
          82,
          15,
          3
        ],
        "comfortable": [
          95,
          4,
          1
        ],
        "gettingby": [
          93,
          7,
          0
        ],
        "difficulty": [
          90,
          10,
          1
        ]
      }
    },
    "reasons": {
      "askedtoleave": 82,
      "family": 43,
      "money": 36,
      "death": 26,
      "government": 10,
      "companies": 10,
      "customary": -1
    }
  },
  "BY": {
    "insecurity": {
      "allprop": {
        "allresp": [
          86,
          10,
          5
        ],
        "urban": [
          84,
          10,
          6
        ],
        "rural": [
          92,
          6,
          1
        ],
        "owner": [
          92,
          4,
          4
        ],
        "renter": [
          61,
          35,
          4
        ],
        "permission": [
          84,
          11,
          5
        ],
        "formal": [
          87,
          9,
          4
        ],
        "informal": [
          73,
          17,
          10
        ],
        "nodocs": [
          70,
          16,
          15
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          77,
          17,
          6
        ],
        "male": [
          83,
          13,
          4
        ],
        "female": [
          88,
          7,
          5
        ],
        "young": [
          69,
          25,
          6
        ],
        "adult": [
          84,
          10,
          5
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          84,
          10,
          6
        ],
        "parttime": [
          70,
          25,
          5
        ],
        "unemployed": [
          75,
          20,
          4
        ],
        "comfortable": [
          91,
          6,
          4
        ],
        "gettingby": [
          87,
          10,
          3
        ],
        "difficulty": [
          77,
          15,
          8
        ]
      },
      "homes": {
        "allresp": [
          87,
          9,
          4
        ],
        "urban": [
          85,
          10,
          5
        ],
        "rural": [
          93,
          6,
          1
        ],
        "owner": [
          93,
          3,
          4
        ],
        "renter": [
          62,
          34,
          4
        ],
        "permission": [
          85,
          11,
          5
        ],
        "formal": [
          88,
          8,
          4
        ],
        "informal": [
          70,
          22,
          9
        ],
        "nodocs": [
          73,
          13,
          14
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          85,
          11,
          3
        ],
        "male": [
          84,
          12,
          4
        ],
        "female": [
          89,
          6,
          5
        ],
        "young": [
          72,
          24,
          4
        ],
        "adult": [
          85,
          10,
          5
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          85,
          9,
          6
        ],
        "parttime": [
          73,
          22,
          5
        ],
        "unemployed": [
          75,
          20,
          4
        ],
        "comfortable": [
          92,
          5,
          3
        ],
        "gettingby": [
          88,
          9,
          3
        ],
        "difficulty": [
          79,
          14,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          94,
          5,
          2
        ],
        "urban": [
          94,
          4,
          2
        ],
        "rural": [
          93,
          6,
          2
        ],
        "owner": [
          100,
          0,
          0
        ],
        "renter": [
          77,
          17,
          6
        ],
        "permission": [
          92,
          6,
          2
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          94,
          5,
          2
        ],
        "multiple": [
          97,
          1,
          1
        ],
        "male": [
          92,
          5,
          2
        ],
        "female": [
          95,
          4,
          1
        ],
        "young": [
          83,
          11,
          6
        ],
        "adult": [
          94,
          5,
          2
        ],
        "old": [
          96,
          3,
          1
        ],
        "fulltime": [
          94,
          5,
          1
        ],
        "parttime": [
          92,
          2,
          6
        ],
        "unemployed": [
          85,
          10,
          5
        ],
        "comfortable": [
          92,
          4,
          3
        ],
        "gettingby": [
          96,
          3,
          1
        ],
        "difficulty": [
          89,
          8,
          3
        ]
      },
      "homes": {
        "allresp": [
          93,
          5,
          2
        ],
        "urban": [
          93,
          5,
          2
        ],
        "rural": [
          92,
          6,
          2
        ],
        "owner": [
          100,
          0,
          0
        ],
        "renter": [
          72,
          22,
          6
        ],
        "permission": [
          91,
          7,
          2
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          94,
          5,
          2
        ],
        "multiple": [
          91,
          8,
          2
        ],
        "male": [
          92,
          6,
          2
        ],
        "female": [
          94,
          5,
          2
        ],
        "young": [
          83,
          11,
          6
        ],
        "adult": [
          93,
          5,
          2
        ],
        "old": [
          95,
          4,
          1
        ],
        "fulltime": [
          93,
          5,
          1
        ],
        "parttime": [
          90,
          4,
          6
        ],
        "unemployed": [
          85,
          10,
          5
        ],
        "comfortable": [
          92,
          5,
          3
        ],
        "gettingby": [
          95,
          4,
          1
        ],
        "difficulty": [
          88,
          9,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 79,
      "family": 50,
      "money": 51,
      "death": 39,
      "government": 27,
      "companies": 12,
      "customary": -1
    }
  },
  "BE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          81,
          13,
          6
        ],
        "urban": [
          80,
          14,
          6
        ],
        "rural": [
          92,
          7,
          2
        ],
        "owner": [
          87,
          8,
          5
        ],
        "renter": [
          74,
          20,
          6
        ],
        "permission": [
          72,
          21,
          7
        ],
        "formal": [
          83,
          12,
          5
        ],
        "informal": [
          70,
          22,
          8
        ],
        "nodocs": [
          62,
          22,
          16
        ],
        "sole": [
          82,
          13,
          6
        ],
        "multiple": [
          81,
          14,
          5
        ],
        "male": [
          82,
          12,
          6
        ],
        "female": [
          80,
          15,
          6
        ],
        "young": [
          68,
          23,
          9
        ],
        "adult": [
          81,
          14,
          5
        ],
        "old": [
          84,
          9,
          7
        ],
        "fulltime": [
          86,
          10,
          4
        ],
        "parttime": [
          78,
          13,
          9
        ],
        "unemployed": [
          70,
          27,
          4
        ],
        "comfortable": [
          86,
          9,
          5
        ],
        "gettingby": [
          89,
          7,
          4
        ],
        "difficulty": [
          70,
          23,
          7
        ]
      },
      "homes": {
        "allresp": [
          81,
          13,
          6
        ],
        "urban": [
          80,
          14,
          7
        ],
        "rural": [
          93,
          6,
          2
        ],
        "owner": [
          87,
          8,
          5
        ],
        "renter": [
          74,
          19,
          7
        ],
        "permission": [
          73,
          20,
          7
        ],
        "formal": [
          83,
          11,
          6
        ],
        "informal": [
          72,
          22,
          7
        ],
        "nodocs": [
          63,
          21,
          16
        ],
        "sole": [
          82,
          13,
          6
        ],
        "multiple": [
          84,
          12,
          5
        ],
        "male": [
          83,
          11,
          6
        ],
        "female": [
          80,
          14,
          6
        ],
        "young": [
          69,
          21,
          10
        ],
        "adult": [
          81,
          14,
          5
        ],
        "old": [
          84,
          9,
          7
        ],
        "fulltime": [
          86,
          10,
          4
        ],
        "parttime": [
          79,
          11,
          10
        ],
        "unemployed": [
          71,
          27,
          3
        ],
        "comfortable": [
          86,
          8,
          6
        ],
        "gettingby": [
          89,
          7,
          4
        ],
        "difficulty": [
          70,
          23,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          88,
          7,
          4
        ],
        "rural": [
          89,
          11,
          0
        ],
        "owner": [
          99,
          0,
          1
        ],
        "renter": [
          98,
          1,
          2
        ],
        "permission": [
          34,
          47,
          19
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          97,
          0,
          3
        ],
        "male": [
          88,
          8,
          4
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          71,
          13,
          17
        ],
        "adult": [
          90,
          8,
          2
        ],
        "old": [
          91,
          7,
          2
        ],
        "fulltime": [
          90,
          6,
          4
        ],
        "parttime": [
          83,
          12,
          5
        ],
        "unemployed": [
          85,
          6,
          10
        ],
        "comfortable": [
          93,
          4,
          3
        ],
        "gettingby": [
          87,
          10,
          3
        ],
        "difficulty": [
          87,
          9,
          4
        ]
      },
      "homes": {
        "allresp": [
          87,
          10,
          4
        ],
        "urban": [
          87,
          9,
          4
        ],
        "rural": [
          83,
          17,
          0
        ],
        "owner": [
          99,
          0,
          1
        ],
        "renter": [
          98,
          1,
          2
        ],
        "permission": [
          20,
          60,
          20
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          85,
          12,
          3
        ],
        "male": [
          86,
          10,
          4
        ],
        "female": [
          87,
          9,
          4
        ],
        "young": [
          64,
          19,
          18
        ],
        "adult": [
          88,
          9,
          2
        ],
        "old": [
          90,
          8,
          2
        ],
        "fulltime": [
          89,
          8,
          4
        ],
        "parttime": [
          82,
          14,
          5
        ],
        "unemployed": [
          82,
          8,
          10
        ],
        "comfortable": [
          90,
          6,
          4
        ],
        "gettingby": [
          86,
          11,
          3
        ],
        "difficulty": [
          85,
          11,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 72,
      "family": 12,
      "money": 41,
      "death": 15,
      "government": 9,
      "companies": 7,
      "customary": -1
    }
  },
  "BJ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          63,
          35,
          3
        ],
        "urban": [
          61,
          35,
          4
        ],
        "rural": [
          63,
          35,
          2
        ],
        "owner": [
          69,
          27,
          3
        ],
        "renter": [
          60,
          36,
          4
        ],
        "permission": [
          62,
          36,
          2
        ],
        "formal": [
          63,
          33,
          4
        ],
        "informal": [
          56,
          44,
          0
        ],
        "nodocs": [
          62,
          36,
          2
        ],
        "sole": [
          65,
          33,
          2
        ],
        "multiple": [
          59,
          37,
          4
        ],
        "male": [
          66,
          31,
          3
        ],
        "female": [
          59,
          38,
          3
        ],
        "young": [
          61,
          35,
          4
        ],
        "adult": [
          61,
          36,
          3
        ],
        "old": [
          74,
          26,
          0
        ],
        "fulltime": [
          65,
          32,
          3
        ],
        "parttime": [
          72,
          23,
          5
        ],
        "unemployed": [
          70,
          29,
          1
        ],
        "comfortable": [
          49,
          47,
          4
        ],
        "gettingby": [
          64,
          32,
          3
        ],
        "difficulty": [
          64,
          34,
          2
        ]
      },
      "homes": {
        "allresp": [
          69,
          30,
          2
        ],
        "urban": [
          67,
          31,
          3
        ],
        "rural": [
          69,
          29,
          1
        ],
        "owner": [
          78,
          21,
          2
        ],
        "renter": [
          68,
          27,
          4
        ],
        "permission": [
          66,
          33,
          1
        ],
        "formal": [
          70,
          27,
          3
        ],
        "informal": [
          64,
          36,
          0
        ],
        "nodocs": [
          68,
          31,
          1
        ],
        "sole": [
          65,
          33,
          2
        ],
        "multiple": [
          74,
          24,
          2
        ],
        "male": [
          73,
          25,
          2
        ],
        "female": [
          65,
          34,
          2
        ],
        "young": [
          66,
          31,
          3
        ],
        "adult": [
          68,
          30,
          2
        ],
        "old": [
          77,
          23,
          0
        ],
        "fulltime": [
          71,
          27,
          2
        ],
        "parttime": [
          83,
          17,
          0
        ],
        "unemployed": [
          72,
          28,
          0
        ],
        "comfortable": [
          54,
          43,
          3
        ],
        "gettingby": [
          68,
          30,
          2
        ],
        "difficulty": [
          71,
          28,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          44,
          1,
          55
        ],
        "urban": [
          58,
          3,
          39
        ],
        "rural": [
          39,
          0,
          60
        ],
        "owner": [
          55,
          1,
          44
        ],
        "renter": [
          71,
          5,
          24
        ],
        "permission": [
          34,
          0,
          66
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          30,
          1,
          69
        ],
        "multiple": [
          65,
          1,
          34
        ],
        "male": [
          46,
          1,
          53
        ],
        "female": [
          42,
          1,
          57
        ],
        "young": [
          29,
          1,
          70
        ],
        "adult": [
          50,
          1,
          49
        ],
        "old": [
          47,
          1,
          52
        ],
        "fulltime": [
          54,
          1,
          45
        ],
        "parttime": [
          62,
          0,
          38
        ],
        "unemployed": [
          39,
          0,
          61
        ],
        "comfortable": [
          33,
          3,
          64
        ],
        "gettingby": [
          45,
          1,
          54
        ],
        "difficulty": [
          45,
          1,
          55
        ]
      },
      "homes": {
        "allresp": [
          32,
          1,
          67
        ],
        "urban": [
          50,
          3,
          47
        ],
        "rural": [
          26,
          0,
          74
        ],
        "owner": [
          42,
          1,
          57
        ],
        "renter": [
          61,
          6,
          33
        ],
        "permission": [
          23,
          0,
          77
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          30,
          1,
          69
        ],
        "multiple": [
          34,
          2,
          64
        ],
        "male": [
          30,
          2,
          69
        ],
        "female": [
          34,
          1,
          66
        ],
        "young": [
          20,
          1,
          79
        ],
        "adult": [
          36,
          1,
          63
        ],
        "old": [
          35,
          1,
          64
        ],
        "fulltime": [
          37,
          2,
          61
        ],
        "parttime": [
          51,
          0,
          49
        ],
        "unemployed": [
          30,
          2,
          69
        ],
        "comfortable": [
          20,
          3,
          77
        ],
        "gettingby": [
          32,
          2,
          67
        ],
        "difficulty": [
          33,
          1,
          66
        ]
      }
    },
    "reasons": {
      "askedtoleave": 19,
      "family": 14,
      "money": 9,
      "death": 7,
      "government": 14,
      "companies": 3,
      "customary": 1
    }
  },
  "BO": {
    "insecurity": {
      "allprop": {
        "allresp": [
          63,
          25,
          12
        ],
        "urban": [
          63,
          25,
          12
        ],
        "rural": [
          63,
          23,
          14
        ],
        "owner": [
          70,
          15,
          14
        ],
        "renter": [
          49,
          41,
          10
        ],
        "permission": [
          66,
          22,
          12
        ],
        "formal": [
          69,
          22,
          10
        ],
        "informal": [
          50,
          28,
          22
        ],
        "nodocs": [
          53,
          30,
          17
        ],
        "sole": [
          64,
          23,
          13
        ],
        "multiple": [
          55,
          34,
          10
        ],
        "male": [
          65,
          27,
          7
        ],
        "female": [
          61,
          22,
          17
        ],
        "young": [
          63,
          28,
          10
        ],
        "adult": [
          64,
          24,
          12
        ],
        "old": [
          62,
          22,
          16
        ],
        "fulltime": [
          64,
          28,
          8
        ],
        "parttime": [
          67,
          23,
          11
        ],
        "unemployed": [
          68,
          16,
          16
        ],
        "comfortable": [
          77,
          14,
          9
        ],
        "gettingby": [
          65,
          24,
          12
        ],
        "difficulty": [
          56,
          30,
          14
        ]
      },
      "homes": {
        "allresp": [
          64,
          23,
          12
        ],
        "urban": [
          64,
          24,
          12
        ],
        "rural": [
          66,
          20,
          14
        ],
        "owner": [
          72,
          14,
          14
        ],
        "renter": [
          50,
          41,
          10
        ],
        "permission": [
          68,
          21,
          12
        ],
        "formal": [
          71,
          19,
          10
        ],
        "informal": [
          52,
          29,
          19
        ],
        "nodocs": [
          54,
          30,
          16
        ],
        "sole": [
          64,
          23,
          13
        ],
        "multiple": [
          64,
          26,
          9
        ],
        "male": [
          67,
          26,
          7
        ],
        "female": [
          62,
          21,
          17
        ],
        "young": [
          65,
          25,
          10
        ],
        "adult": [
          65,
          23,
          12
        ],
        "old": [
          63,
          21,
          16
        ],
        "fulltime": [
          65,
          27,
          8
        ],
        "parttime": [
          67,
          23,
          11
        ],
        "unemployed": [
          73,
          11,
          17
        ],
        "comfortable": [
          78,
          14,
          9
        ],
        "gettingby": [
          66,
          22,
          12
        ],
        "difficulty": [
          57,
          29,
          14
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          66,
          6,
          28
        ],
        "urban": [
          65,
          6,
          29
        ],
        "rural": [
          67,
          9,
          25
        ],
        "owner": [
          93,
          5,
          2
        ],
        "renter": [
          44,
          10,
          46
        ],
        "permission": [
          59,
          6,
          35
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          61,
          7,
          32
        ],
        "multiple": [
          92,
          2,
          6
        ],
        "male": [
          69,
          4,
          26
        ],
        "female": [
          62,
          8,
          30
        ],
        "young": [
          53,
          9,
          38
        ],
        "adult": [
          66,
          5,
          29
        ],
        "old": [
          79,
          7,
          14
        ],
        "fulltime": [
          72,
          6,
          22
        ],
        "parttime": [
          65,
          8,
          27
        ],
        "unemployed": [
          55,
          1,
          44
        ],
        "comfortable": [
          69,
          4,
          27
        ],
        "gettingby": [
          69,
          6,
          25
        ],
        "difficulty": [
          61,
          8,
          31
        ]
      },
      "homes": {
        "allresp": [
          62,
          7,
          30
        ],
        "urban": [
          63,
          6,
          30
        ],
        "rural": [
          60,
          12,
          28
        ],
        "owner": [
          92,
          6,
          2
        ],
        "renter": [
          40,
          10,
          50
        ],
        "permission": [
          54,
          7,
          39
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          61,
          7,
          32
        ],
        "multiple": [
          70,
          9,
          21
        ],
        "male": [
          66,
          6,
          28
        ],
        "female": [
          59,
          9,
          32
        ],
        "young": [
          49,
          8,
          42
        ],
        "adult": [
          63,
          7,
          31
        ],
        "old": [
          77,
          9,
          15
        ],
        "fulltime": [
          68,
          7,
          24
        ],
        "parttime": [
          61,
          8,
          31
        ],
        "unemployed": [
          54,
          1,
          46
        ],
        "comfortable": [
          66,
          4,
          30
        ],
        "gettingby": [
          65,
          8,
          27
        ],
        "difficulty": [
          58,
          9,
          33
        ]
      }
    },
    "reasons": {
      "askedtoleave": 23,
      "family": 18,
      "money": 5,
      "death": 2,
      "government": 7,
      "companies": 1,
      "customary": 2
    }
  },
  "BA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          87,
          8,
          5
        ],
        "urban": [
          84,
          11,
          5
        ],
        "rural": [
          92,
          4,
          4
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          26,
          64,
          10
        ],
        "permission": [
          87,
          7,
          5
        ],
        "formal": [
          93,
          4,
          3
        ],
        "informal": [
          58,
          33,
          9
        ],
        "nodocs": [
          56,
          26,
          18
        ],
        "sole": [
          88,
          7,
          4
        ],
        "multiple": [
          88,
          10,
          2
        ],
        "male": [
          89,
          7,
          4
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          89,
          5,
          5
        ],
        "adult": [
          85,
          11,
          4
        ],
        "old": [
          90,
          4,
          6
        ],
        "fulltime": [
          87,
          8,
          5
        ],
        "parttime": [
          85,
          12,
          3
        ],
        "unemployed": [
          86,
          13,
          1
        ],
        "comfortable": [
          89,
          7,
          5
        ],
        "gettingby": [
          90,
          7,
          3
        ],
        "difficulty": [
          78,
          11,
          11
        ]
      },
      "homes": {
        "allresp": [
          88,
          7,
          4
        ],
        "urban": [
          85,
          10,
          5
        ],
        "rural": [
          94,
          3,
          3
        ],
        "owner": [
          95,
          1,
          4
        ],
        "renter": [
          26,
          64,
          10
        ],
        "permission": [
          89,
          7,
          5
        ],
        "formal": [
          94,
          4,
          3
        ],
        "informal": [
          62,
          30,
          9
        ],
        "nodocs": [
          57,
          25,
          18
        ],
        "sole": [
          88,
          7,
          4
        ],
        "multiple": [
          95,
          5,
          0
        ],
        "male": [
          90,
          7,
          4
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          90,
          5,
          5
        ],
        "adult": [
          87,
          10,
          4
        ],
        "old": [
          91,
          4,
          6
        ],
        "fulltime": [
          89,
          7,
          4
        ],
        "parttime": [
          88,
          8,
          3
        ],
        "unemployed": [
          87,
          13,
          0
        ],
        "comfortable": [
          90,
          5,
          5
        ],
        "gettingby": [
          91,
          6,
          3
        ],
        "difficulty": [
          79,
          11,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          7,
          8
        ],
        "urban": [
          84,
          8,
          8
        ],
        "rural": [
          88,
          5,
          7
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          28,
          30,
          43
        ],
        "permission": [
          84,
          8,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          7,
          8
        ],
        "multiple": [
          92,
          6,
          2
        ],
        "male": [
          87,
          6,
          7
        ],
        "female": [
          84,
          7,
          9
        ],
        "young": [
          86,
          6,
          7
        ],
        "adult": [
          82,
          7,
          10
        ],
        "old": [
          90,
          6,
          5
        ],
        "fulltime": [
          85,
          6,
          9
        ],
        "parttime": [
          81,
          8,
          11
        ],
        "unemployed": [
          88,
          6,
          6
        ],
        "comfortable": [
          79,
          8,
          13
        ],
        "gettingby": [
          89,
          5,
          6
        ],
        "difficulty": [
          85,
          9,
          6
        ]
      },
      "homes": {
        "allresp": [
          85,
          7,
          8
        ],
        "urban": [
          84,
          8,
          9
        ],
        "rural": [
          87,
          5,
          8
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          27,
          30,
          43
        ],
        "permission": [
          84,
          8,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          7,
          8
        ],
        "multiple": [
          91,
          6,
          3
        ],
        "male": [
          87,
          6,
          7
        ],
        "female": [
          84,
          7,
          9
        ],
        "young": [
          86,
          5,
          8
        ],
        "adult": [
          82,
          7,
          10
        ],
        "old": [
          89,
          6,
          5
        ],
        "fulltime": [
          85,
          6,
          9
        ],
        "parttime": [
          81,
          8,
          11
        ],
        "unemployed": [
          88,
          6,
          6
        ],
        "comfortable": [
          79,
          8,
          13
        ],
        "gettingby": [
          89,
          5,
          6
        ],
        "difficulty": [
          85,
          8,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 63,
      "family": 26,
      "money": 40,
      "death": 27,
      "government": 4,
      "companies": 5,
      "customary": -1
    }
  },
  "BW": {
    "insecurity": {
      "allprop": {
        "allresp": [
          57,
          30,
          13
        ],
        "urban": [
          55,
          32,
          14
        ],
        "rural": [
          70,
          21,
          9
        ],
        "owner": [
          69,
          22,
          9
        ],
        "renter": [
          39,
          48,
          13
        ],
        "permission": [
          56,
          29,
          15
        ],
        "formal": [
          60,
          29,
          11
        ],
        "informal": [
          51,
          40,
          9
        ],
        "nodocs": [
          41,
          35,
          24
        ],
        "sole": [
          64,
          23,
          13
        ],
        "multiple": [
          48,
          43,
          9
        ],
        "male": [
          57,
          32,
          11
        ],
        "female": [
          57,
          29,
          14
        ],
        "young": [
          61,
          31,
          9
        ],
        "adult": [
          52,
          33,
          15
        ],
        "old": [
          69,
          20,
          11
        ],
        "fulltime": [
          55,
          37,
          8
        ],
        "parttime": [
          41,
          45,
          14
        ],
        "unemployed": [
          64,
          24,
          12
        ],
        "comfortable": [
          65,
          25,
          10
        ],
        "gettingby": [
          62,
          28,
          10
        ],
        "difficulty": [
          55,
          31,
          14
        ]
      },
      "homes": {
        "allresp": [
          60,
          28,
          12
        ],
        "urban": [
          58,
          30,
          13
        ],
        "rural": [
          71,
          21,
          8
        ],
        "owner": [
          72,
          20,
          8
        ],
        "renter": [
          42,
          46,
          11
        ],
        "permission": [
          59,
          27,
          14
        ],
        "formal": [
          64,
          25,
          11
        ],
        "informal": [
          56,
          37,
          7
        ],
        "nodocs": [
          39,
          43,
          18
        ],
        "sole": [
          64,
          23,
          13
        ],
        "multiple": [
          57,
          37,
          6
        ],
        "male": [
          60,
          29,
          11
        ],
        "female": [
          60,
          28,
          13
        ],
        "young": [
          62,
          29,
          8
        ],
        "adult": [
          55,
          31,
          14
        ],
        "old": [
          71,
          19,
          10
        ],
        "fulltime": [
          57,
          36,
          7
        ],
        "parttime": [
          44,
          42,
          15
        ],
        "unemployed": [
          68,
          22,
          10
        ],
        "comfortable": [
          69,
          23,
          8
        ],
        "gettingby": [
          63,
          27,
          10
        ],
        "difficulty": [
          57,
          30,
          12
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          83,
          4,
          14
        ],
        "urban": [
          83,
          4,
          14
        ],
        "rural": [
          82,
          3,
          15
        ],
        "owner": [
          95,
          1,
          4
        ],
        "renter": [
          59,
          13,
          28
        ],
        "permission": [
          83,
          2,
          15
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          5,
          15
        ],
        "multiple": [
          94,
          1,
          5
        ],
        "male": [
          82,
          5,
          14
        ],
        "female": [
          84,
          3,
          14
        ],
        "young": [
          80,
          3,
          17
        ],
        "adult": [
          81,
          4,
          15
        ],
        "old": [
          92,
          3,
          5
        ],
        "fulltime": [
          85,
          6,
          9
        ],
        "parttime": [
          75,
          3,
          22
        ],
        "unemployed": [
          84,
          3,
          14
        ],
        "comfortable": [
          83,
          5,
          12
        ],
        "gettingby": [
          84,
          3,
          13
        ],
        "difficulty": [
          83,
          4,
          14
        ]
      },
      "homes": {
        "allresp": [
          79,
          4,
          17
        ],
        "urban": [
          78,
          4,
          17
        ],
        "rural": [
          79,
          3,
          17
        ],
        "owner": [
          93,
          1,
          6
        ],
        "renter": [
          48,
          15,
          37
        ],
        "permission": [
          79,
          3,
          19
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          5,
          15
        ],
        "multiple": [
          79,
          4,
          17
        ],
        "male": [
          74,
          6,
          20
        ],
        "female": [
          82,
          3,
          15
        ],
        "young": [
          75,
          4,
          21
        ],
        "adult": [
          77,
          5,
          18
        ],
        "old": [
          89,
          3,
          8
        ],
        "fulltime": [
          75,
          8,
          17
        ],
        "parttime": [
          72,
          3,
          26
        ],
        "unemployed": [
          83,
          3,
          14
        ],
        "comfortable": [
          76,
          7,
          17
        ],
        "gettingby": [
          81,
          3,
          16
        ],
        "difficulty": [
          79,
          4,
          17
        ]
      }
    },
    "reasons": {
      "askedtoleave": 57,
      "family": 42,
      "money": 52,
      "death": 40,
      "government": 30,
      "companies": 18,
      "customary": 30
    }
  },
  "BR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          74,
          23,
          3
        ],
        "urban": [
          75,
          23,
          2
        ],
        "rural": [
          69,
          27,
          4
        ],
        "owner": [
          85,
          13,
          2
        ],
        "renter": [
          60,
          36,
          4
        ],
        "permission": [
          68,
          30,
          1
        ],
        "formal": [
          79,
          19,
          2
        ],
        "informal": [
          66,
          31,
          3
        ],
        "nodocs": [
          56,
          40,
          4
        ],
        "sole": [
          75,
          22,
          3
        ],
        "multiple": [
          66,
          31,
          3
        ],
        "male": [
          74,
          24,
          3
        ],
        "female": [
          74,
          23,
          3
        ],
        "young": [
          66,
          32,
          2
        ],
        "adult": [
          74,
          25,
          2
        ],
        "old": [
          81,
          13,
          6
        ],
        "fulltime": [
          73,
          26,
          1
        ],
        "parttime": [
          76,
          22,
          2
        ],
        "unemployed": [
          69,
          26,
          5
        ],
        "comfortable": [
          81,
          17,
          2
        ],
        "gettingby": [
          74,
          24,
          3
        ],
        "difficulty": [
          71,
          27,
          3
        ]
      },
      "homes": {
        "allresp": [
          75,
          22,
          3
        ],
        "urban": [
          76,
          22,
          2
        ],
        "rural": [
          72,
          24,
          4
        ],
        "owner": [
          86,
          12,
          2
        ],
        "renter": [
          60,
          36,
          4
        ],
        "permission": [
          70,
          28,
          1
        ],
        "formal": [
          80,
          18,
          2
        ],
        "informal": [
          68,
          29,
          3
        ],
        "nodocs": [
          57,
          40,
          4
        ],
        "sole": [
          75,
          22,
          3
        ],
        "multiple": [
          77,
          21,
          2
        ],
        "male": [
          75,
          22,
          3
        ],
        "female": [
          75,
          22,
          2
        ],
        "young": [
          67,
          31,
          2
        ],
        "adult": [
          75,
          23,
          1
        ],
        "old": [
          81,
          12,
          6
        ],
        "fulltime": [
          73,
          26,
          1
        ],
        "parttime": [
          79,
          21,
          1
        ],
        "unemployed": [
          72,
          23,
          5
        ],
        "comfortable": [
          81,
          16,
          2
        ],
        "gettingby": [
          76,
          22,
          2
        ],
        "difficulty": [
          71,
          26,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          74,
          13,
          13
        ],
        "urban": [
          77,
          13,
          10
        ],
        "rural": [
          56,
          14,
          31
        ],
        "owner": [
          82,
          12,
          6
        ],
        "renter": [
          60,
          14,
          26
        ],
        "permission": [
          76,
          14,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          72,
          14,
          14
        ],
        "multiple": [
          91,
          6,
          3
        ],
        "male": [
          77,
          13,
          10
        ],
        "female": [
          71,
          13,
          16
        ],
        "young": [
          66,
          19,
          16
        ],
        "adult": [
          74,
          12,
          14
        ],
        "old": [
          81,
          10,
          9
        ],
        "fulltime": [
          75,
          13,
          12
        ],
        "parttime": [
          80,
          9,
          11
        ],
        "unemployed": [
          75,
          17,
          8
        ],
        "comfortable": [
          86,
          7,
          6
        ],
        "gettingby": [
          74,
          12,
          13
        ],
        "difficulty": [
          68,
          16,
          16
        ]
      },
      "homes": {
        "allresp": [
          73,
          13,
          13
        ],
        "urban": [
          76,
          13,
          11
        ],
        "rural": [
          55,
          14,
          31
        ],
        "owner": [
          81,
          12,
          6
        ],
        "renter": [
          59,
          14,
          27
        ],
        "permission": [
          75,
          14,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          72,
          14,
          14
        ],
        "multiple": [
          86,
          10,
          4
        ],
        "male": [
          76,
          14,
          10
        ],
        "female": [
          71,
          13,
          17
        ],
        "young": [
          66,
          19,
          16
        ],
        "adult": [
          73,
          13,
          14
        ],
        "old": [
          81,
          10,
          10
        ],
        "fulltime": [
          74,
          14,
          12
        ],
        "parttime": [
          80,
          9,
          11
        ],
        "unemployed": [
          75,
          17,
          8
        ],
        "comfortable": [
          86,
          8,
          6
        ],
        "gettingby": [
          74,
          13,
          13
        ],
        "difficulty": [
          67,
          17,
          16
        ]
      }
    },
    "reasons": {
      "askedtoleave": 71,
      "family": 29,
      "money": 31,
      "death": 22,
      "government": 6,
      "companies": 5,
      "customary": 1
    }
  },
  "BG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          80,
          9,
          10
        ],
        "urban": [
          80,
          10,
          10
        ],
        "rural": [
          87,
          5,
          8
        ],
        "owner": [
          87,
          5,
          8
        ],
        "renter": [
          28,
          57,
          15
        ],
        "permission": [
          76,
          10,
          13
        ],
        "formal": [
          82,
          10,
          8
        ],
        "informal": [
          89,
          4,
          6
        ],
        "nodocs": [
          52,
          11,
          37
        ],
        "sole": [
          82,
          8,
          9
        ],
        "multiple": [
          74,
          16,
          10
        ],
        "male": [
          80,
          10,
          10
        ],
        "female": [
          80,
          9,
          11
        ],
        "young": [
          60,
          23,
          17
        ],
        "adult": [
          78,
          11,
          11
        ],
        "old": [
          86,
          6,
          8
        ],
        "fulltime": [
          78,
          11,
          11
        ],
        "parttime": [
          83,
          11,
          7
        ],
        "unemployed": [
          80,
          15,
          6
        ],
        "comfortable": [
          83,
          13,
          5
        ],
        "gettingby": [
          80,
          9,
          11
        ],
        "difficulty": [
          80,
          9,
          11
        ]
      },
      "homes": {
        "allresp": [
          83,
          8,
          9
        ],
        "urban": [
          82,
          9,
          10
        ],
        "rural": [
          97,
          0,
          3
        ],
        "owner": [
          91,
          3,
          6
        ],
        "renter": [
          29,
          56,
          15
        ],
        "permission": [
          78,
          9,
          13
        ],
        "formal": [
          86,
          7,
          7
        ],
        "informal": [
          85,
          10,
          5
        ],
        "nodocs": [
          55,
          10,
          35
        ],
        "sole": [
          82,
          8,
          9
        ],
        "multiple": [
          88,
          7,
          4
        ],
        "male": [
          83,
          8,
          9
        ],
        "female": [
          83,
          8,
          9
        ],
        "young": [
          66,
          20,
          14
        ],
        "adult": [
          81,
          9,
          10
        ],
        "old": [
          89,
          4,
          7
        ],
        "fulltime": [
          81,
          9,
          10
        ],
        "parttime": [
          85,
          9,
          7
        ],
        "unemployed": [
          80,
          15,
          6
        ],
        "comfortable": [
          85,
          10,
          5
        ],
        "gettingby": [
          83,
          7,
          10
        ],
        "difficulty": [
          84,
          7,
          9
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          5,
          7
        ],
        "urban": [
          89,
          4,
          7
        ],
        "rural": [
          85,
          8,
          8
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          92,
          2,
          6
        ],
        "permission": [
          73,
          12,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          6,
          5
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          88,
          3,
          8
        ],
        "female": [
          89,
          6,
          6
        ],
        "young": [
          81,
          0,
          19
        ],
        "adult": [
          86,
          7,
          7
        ],
        "old": [
          93,
          2,
          5
        ],
        "fulltime": [
          88,
          5,
          7
        ],
        "parttime": [
          94,
          1,
          5
        ],
        "unemployed": [
          81,
          12,
          7
        ],
        "comfortable": [
          86,
          3,
          11
        ],
        "gettingby": [
          88,
          4,
          8
        ],
        "difficulty": [
          90,
          5,
          5
        ]
      },
      "homes": {
        "allresp": [
          88,
          5,
          7
        ],
        "urban": [
          88,
          5,
          7
        ],
        "rural": [
          85,
          8,
          8
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          87,
          6,
          8
        ],
        "permission": [
          71,
          14,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          6,
          5
        ],
        "multiple": [
          93,
          5,
          2
        ],
        "male": [
          88,
          3,
          9
        ],
        "female": [
          87,
          7,
          6
        ],
        "young": [
          81,
          0,
          19
        ],
        "adult": [
          84,
          8,
          7
        ],
        "old": [
          92,
          2,
          5
        ],
        "fulltime": [
          87,
          6,
          7
        ],
        "parttime": [
          94,
          1,
          5
        ],
        "unemployed": [
          81,
          12,
          7
        ],
        "comfortable": [
          83,
          7,
          11
        ],
        "gettingby": [
          87,
          5,
          8
        ],
        "difficulty": [
          89,
          5,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 79,
      "family": 34,
      "money": 33,
      "death": 8,
      "government": 7,
      "companies": 5,
      "customary": -1
    }
  },
  "BF": {
    "insecurity": {
      "allprop": {
        "allresp": [
          54,
          44,
          2
        ],
        "urban": [
          70,
          28,
          2
        ],
        "rural": [
          50,
          48,
          1
        ],
        "owner": [
          57,
          41,
          2
        ],
        "renter": [
          54,
          45,
          1
        ],
        "permission": [
          54,
          46,
          0
        ],
        "formal": [
          48,
          51,
          0
        ],
        "informal": [
          49,
          46,
          5
        ],
        "nodocs": [
          59,
          39,
          2
        ],
        "sole": [
          60,
          39,
          1
        ],
        "multiple": [
          44,
          53,
          3
        ],
        "male": [
          58,
          41,
          0
        ],
        "female": [
          51,
          46,
          3
        ],
        "young": [
          54,
          45,
          1
        ],
        "adult": [
          54,
          45,
          2
        ],
        "old": [
          59,
          38,
          2
        ],
        "fulltime": [
          55,
          44,
          1
        ],
        "parttime": [
          71,
          27,
          2
        ],
        "unemployed": [
          58,
          42,
          0
        ],
        "comfortable": [
          63,
          37,
          0
        ],
        "gettingby": [
          56,
          43,
          1
        ],
        "difficulty": [
          50,
          47,
          3
        ]
      },
      "homes": {
        "allresp": [
          62,
          37,
          1
        ],
        "urban": [
          72,
          26,
          1
        ],
        "rural": [
          59,
          40,
          1
        ],
        "owner": [
          63,
          36,
          2
        ],
        "renter": [
          54,
          45,
          1
        ],
        "permission": [
          65,
          35,
          0
        ],
        "formal": [
          51,
          48,
          0
        ],
        "informal": [
          62,
          35,
          2
        ],
        "nodocs": [
          68,
          30,
          2
        ],
        "sole": [
          60,
          39,
          1
        ],
        "multiple": [
          64,
          34,
          2
        ],
        "male": [
          63,
          37,
          0
        ],
        "female": [
          61,
          37,
          2
        ],
        "young": [
          57,
          41,
          1
        ],
        "adult": [
          61,
          38,
          1
        ],
        "old": [
          71,
          27,
          1
        ],
        "fulltime": [
          59,
          40,
          1
        ],
        "parttime": [
          73,
          25,
          2
        ],
        "unemployed": [
          65,
          35,
          0
        ],
        "comfortable": [
          71,
          29,
          0
        ],
        "gettingby": [
          63,
          36,
          1
        ],
        "difficulty": [
          58,
          40,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          38,
          6,
          56
        ],
        "urban": [
          63,
          13,
          24
        ],
        "rural": [
          31,
          4,
          64
        ],
        "owner": [
          42,
          5,
          53
        ],
        "renter": [
          53,
          18,
          28
        ],
        "permission": [
          29,
          6,
          64
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          44,
          5,
          51
        ],
        "multiple": [
          29,
          8,
          64
        ],
        "male": [
          38,
          5,
          57
        ],
        "female": [
          38,
          7,
          55
        ],
        "young": [
          37,
          5,
          58
        ],
        "adult": [
          39,
          7,
          54
        ],
        "old": [
          37,
          5,
          59
        ],
        "fulltime": [
          43,
          8,
          50
        ],
        "parttime": [
          53,
          4,
          43
        ],
        "unemployed": [
          43,
          8,
          49
        ],
        "comfortable": [
          49,
          4,
          46
        ],
        "gettingby": [
          39,
          5,
          56
        ],
        "difficulty": [
          35,
          7,
          58
        ]
      },
      "homes": {
        "allresp": [
          36,
          6,
          58
        ],
        "urban": [
          62,
          14,
          24
        ],
        "rural": [
          29,
          4,
          67
        ],
        "owner": [
          41,
          5,
          54
        ],
        "renter": [
          50,
          18,
          31
        ],
        "permission": [
          28,
          6,
          66
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          44,
          5,
          51
        ],
        "multiple": [
          23,
          8,
          69
        ],
        "male": [
          36,
          5,
          58
        ],
        "female": [
          36,
          7,
          57
        ],
        "young": [
          35,
          5,
          60
        ],
        "adult": [
          37,
          7,
          56
        ],
        "old": [
          34,
          5,
          60
        ],
        "fulltime": [
          40,
          8,
          51
        ],
        "parttime": [
          51,
          6,
          43
        ],
        "unemployed": [
          43,
          8,
          49
        ],
        "comfortable": [
          48,
          4,
          47
        ],
        "gettingby": [
          36,
          6,
          58
        ],
        "difficulty": [
          33,
          7,
          60
        ]
      }
    },
    "reasons": {
      "askedtoleave": 14,
      "family": 33,
      "money": 8,
      "death": 12,
      "government": 60,
      "companies": 19,
      "customary": 29
    }
  },
  "KH": {
    "insecurity": {
      "allprop": {
        "allresp": [
          52,
          35,
          13
        ],
        "urban": [
          50,
          34,
          16
        ],
        "rural": [
          52,
          35,
          12
        ],
        "owner": [
          53,
          33,
          14
        ],
        "renter": [
          34,
          56,
          10
        ],
        "permission": [
          54,
          34,
          11
        ],
        "formal": [
          51,
          36,
          13
        ],
        "informal": [
          69,
          28,
          4
        ],
        "nodocs": [
          54,
          30,
          16
        ],
        "sole": [
          60,
          25,
          15
        ],
        "multiple": [
          42,
          47,
          11
        ],
        "male": [
          51,
          39,
          10
        ],
        "female": [
          53,
          31,
          15
        ],
        "young": [
          54,
          38,
          8
        ],
        "adult": [
          54,
          35,
          11
        ],
        "old": [
          43,
          30,
          27
        ],
        "fulltime": [
          53,
          36,
          10
        ],
        "parttime": [
          58,
          33,
          9
        ],
        "unemployed": [
          32,
          47,
          21
        ],
        "comfortable": [
          54,
          34,
          11
        ],
        "gettingby": [
          55,
          33,
          13
        ],
        "difficulty": [
          47,
          38,
          16
        ]
      },
      "homes": {
        "allresp": [
          60,
          27,
          13
        ],
        "urban": [
          52,
          30,
          17
        ],
        "rural": [
          62,
          26,
          12
        ],
        "owner": [
          60,
          25,
          15
        ],
        "renter": [
          36,
          51,
          12
        ],
        "permission": [
          66,
          23,
          11
        ],
        "formal": [
          61,
          26,
          13
        ],
        "informal": [
          62,
          30,
          8
        ],
        "nodocs": [
          57,
          28,
          15
        ],
        "sole": [
          60,
          25,
          15
        ],
        "multiple": [
          60,
          28,
          11
        ],
        "male": [
          59,
          31,
          10
        ],
        "female": [
          61,
          23,
          16
        ],
        "young": [
          63,
          30,
          7
        ],
        "adult": [
          61,
          26,
          12
        ],
        "old": [
          52,
          24,
          24
        ],
        "fulltime": [
          58,
          31,
          11
        ],
        "parttime": [
          70,
          19,
          11
        ],
        "unemployed": [
          43,
          36,
          21
        ],
        "comfortable": [
          64,
          25,
          11
        ],
        "gettingby": [
          61,
          27,
          12
        ],
        "difficulty": [
          54,
          29,
          17
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          80,
          4,
          16
        ],
        "urban": [
          74,
          7,
          19
        ],
        "rural": [
          81,
          4,
          15
        ],
        "owner": [
          92,
          5,
          3
        ],
        "renter": [
          73,
          16,
          11
        ],
        "permission": [
          59,
          1,
          39
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          71,
          5,
          24
        ],
        "multiple": [
          91,
          3,
          6
        ],
        "male": [
          78,
          4,
          17
        ],
        "female": [
          81,
          5,
          14
        ],
        "young": [
          66,
          2,
          32
        ],
        "adult": [
          82,
          5,
          12
        ],
        "old": [
          88,
          4,
          8
        ],
        "fulltime": [
          81,
          5,
          15
        ],
        "parttime": [
          75,
          5,
          20
        ],
        "unemployed": [
          66,
          5,
          29
        ],
        "comfortable": [
          78,
          5,
          17
        ],
        "gettingby": [
          77,
          5,
          18
        ],
        "difficulty": [
          84,
          3,
          12
        ]
      },
      "homes": {
        "allresp": [
          73,
          6,
          21
        ],
        "urban": [
          64,
          13,
          23
        ],
        "rural": [
          75,
          4,
          21
        ],
        "owner": [
          92,
          5,
          3
        ],
        "renter": [
          60,
          30,
          11
        ],
        "permission": [
          45,
          1,
          54
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          71,
          5,
          24
        ],
        "multiple": [
          77,
          6,
          17
        ],
        "male": [
          73,
          6,
          21
        ],
        "female": [
          73,
          5,
          21
        ],
        "young": [
          52,
          4,
          44
        ],
        "adult": [
          77,
          6,
          17
        ],
        "old": [
          87,
          4,
          9
        ],
        "fulltime": [
          76,
          6,
          18
        ],
        "parttime": [
          51,
          11,
          38
        ],
        "unemployed": [
          57,
          9,
          34
        ],
        "comfortable": [
          71,
          6,
          23
        ],
        "gettingby": [
          70,
          7,
          23
        ],
        "difficulty": [
          79,
          5,
          16
        ]
      }
    },
    "reasons": {
      "askedtoleave": 4,
      "family": 9,
      "money": 19,
      "death": 7,
      "government": 8,
      "companies": 6,
      "customary": 2
    }
  },
  "CM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          55,
          32,
          13
        ],
        "urban": [
          53,
          34,
          12
        ],
        "rural": [
          57,
          29,
          13
        ],
        "owner": [
          64,
          24,
          12
        ],
        "renter": [
          44,
          41,
          15
        ],
        "permission": [
          60,
          30,
          10
        ],
        "formal": [
          56,
          33,
          10
        ],
        "informal": [
          56,
          31,
          14
        ],
        "nodocs": [
          54,
          30,
          16
        ],
        "sole": [
          58,
          29,
          13
        ],
        "multiple": [
          42,
          44,
          13
        ],
        "male": [
          58,
          30,
          11
        ],
        "female": [
          53,
          33,
          14
        ],
        "young": [
          53,
          35,
          12
        ],
        "adult": [
          56,
          31,
          13
        ],
        "old": [
          58,
          28,
          14
        ],
        "fulltime": [
          57,
          33,
          10
        ],
        "parttime": [
          55,
          33,
          12
        ],
        "unemployed": [
          62,
          27,
          11
        ],
        "comfortable": [
          54,
          32,
          13
        ],
        "gettingby": [
          58,
          29,
          13
        ],
        "difficulty": [
          52,
          35,
          13
        ]
      },
      "homes": {
        "allresp": [
          58,
          29,
          13
        ],
        "urban": [
          57,
          31,
          12
        ],
        "rural": [
          60,
          27,
          13
        ],
        "owner": [
          66,
          22,
          12
        ],
        "renter": [
          44,
          40,
          16
        ],
        "permission": [
          65,
          25,
          9
        ],
        "formal": [
          63,
          27,
          10
        ],
        "informal": [
          55,
          31,
          14
        ],
        "nodocs": [
          55,
          30,
          15
        ],
        "sole": [
          58,
          29,
          13
        ],
        "multiple": [
          59,
          29,
          12
        ],
        "male": [
          61,
          28,
          11
        ],
        "female": [
          56,
          30,
          14
        ],
        "young": [
          57,
          32,
          12
        ],
        "adult": [
          59,
          29,
          13
        ],
        "old": [
          61,
          25,
          14
        ],
        "fulltime": [
          60,
          30,
          10
        ],
        "parttime": [
          63,
          27,
          11
        ],
        "unemployed": [
          64,
          25,
          11
        ],
        "comfortable": [
          59,
          30,
          12
        ],
        "gettingby": [
          61,
          27,
          13
        ],
        "difficulty": [
          55,
          32,
          13
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          47,
          9,
          44
        ],
        "urban": [
          57,
          11,
          32
        ],
        "rural": [
          38,
          6,
          56
        ],
        "owner": [
          53,
          9,
          38
        ],
        "renter": [
          61,
          12,
          27
        ],
        "permission": [
          34,
          5,
          61
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          42,
          10,
          48
        ],
        "multiple": [
          70,
          4,
          26
        ],
        "male": [
          48,
          9,
          44
        ],
        "female": [
          46,
          8,
          45
        ],
        "young": [
          37,
          8,
          55
        ],
        "adult": [
          50,
          9,
          41
        ],
        "old": [
          53,
          8,
          39
        ],
        "fulltime": [
          56,
          7,
          37
        ],
        "parttime": [
          56,
          10,
          34
        ],
        "unemployed": [
          49,
          10,
          41
        ],
        "comfortable": [
          44,
          8,
          48
        ],
        "gettingby": [
          48,
          9,
          43
        ],
        "difficulty": [
          47,
          8,
          45
        ]
      },
      "homes": {
        "allresp": [
          43,
          9,
          48
        ],
        "urban": [
          53,
          12,
          36
        ],
        "rural": [
          33,
          7,
          60
        ],
        "owner": [
          50,
          10,
          40
        ],
        "renter": [
          58,
          14,
          28
        ],
        "permission": [
          27,
          5,
          68
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          42,
          10,
          48
        ],
        "multiple": [
          44,
          8,
          48
        ],
        "male": [
          45,
          9,
          47
        ],
        "female": [
          40,
          10,
          50
        ],
        "young": [
          32,
          8,
          60
        ],
        "adult": [
          46,
          10,
          44
        ],
        "old": [
          50,
          9,
          41
        ],
        "fulltime": [
          51,
          9,
          41
        ],
        "parttime": [
          54,
          9,
          36
        ],
        "unemployed": [
          46,
          11,
          43
        ],
        "comfortable": [
          39,
          8,
          53
        ],
        "gettingby": [
          42,
          11,
          48
        ],
        "difficulty": [
          45,
          8,
          47
        ]
      }
    },
    "reasons": {
      "askedtoleave": 21,
      "family": 13,
      "money": 12,
      "death": 5,
      "government": 10,
      "companies": 3,
      "customary": 6
    }
  },
  "CA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          85,
          14,
          1
        ],
        "urban": [
          85,
          14,
          1
        ],
        "rural": [
          90,
          10,
          0
        ],
        "owner": [
          95,
          5,
          0
        ],
        "renter": [
          76,
          23,
          1
        ],
        "permission": [
          74,
          24,
          2
        ],
        "formal": [
          87,
          13,
          0
        ],
        "informal": [
          68,
          32,
          0
        ],
        "nodocs": [
          77,
          11,
          12
        ],
        "sole": [
          87,
          13,
          1
        ],
        "multiple": [
          81,
          18,
          0
        ],
        "male": [
          86,
          13,
          1
        ],
        "female": [
          84,
          15,
          1
        ],
        "young": [
          76,
          23,
          1
        ],
        "adult": [
          85,
          14,
          0
        ],
        "old": [
          88,
          11,
          1
        ],
        "fulltime": [
          89,
          11,
          1
        ],
        "parttime": [
          80,
          20,
          0
        ],
        "unemployed": [
          67,
          33,
          0
        ],
        "comfortable": [
          90,
          9,
          1
        ],
        "gettingby": [
          90,
          9,
          1
        ],
        "difficulty": [
          65,
          35,
          0
        ]
      },
      "homes": {
        "allresp": [
          86,
          13,
          1
        ],
        "urban": [
          86,
          13,
          1
        ],
        "rural": [
          91,
          9,
          0
        ],
        "owner": [
          96,
          4,
          0
        ],
        "renter": [
          78,
          21,
          1
        ],
        "permission": [
          77,
          22,
          2
        ],
        "formal": [
          88,
          11,
          0
        ],
        "informal": [
          68,
          32,
          0
        ],
        "nodocs": [
          75,
          15,
          11
        ],
        "sole": [
          87,
          13,
          1
        ],
        "multiple": [
          86,
          13,
          0
        ],
        "male": [
          87,
          12,
          1
        ],
        "female": [
          86,
          13,
          1
        ],
        "young": [
          76,
          23,
          1
        ],
        "adult": [
          87,
          13,
          0
        ],
        "old": [
          88,
          10,
          1
        ],
        "fulltime": [
          89,
          10,
          1
        ],
        "parttime": [
          82,
          18,
          0
        ],
        "unemployed": [
          67,
          33,
          0
        ],
        "comfortable": [
          91,
          8,
          1
        ],
        "gettingby": [
          91,
          8,
          1
        ],
        "difficulty": [
          66,
          34,
          0
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          6,
          6
        ],
        "urban": [
          88,
          6,
          6
        ],
        "rural": [
          95,
          3,
          2
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          84,
          8,
          7
        ],
        "permission": [
          78,
          9,
          13
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          7,
          7
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          87,
          7,
          6
        ],
        "female": [
          90,
          4,
          6
        ],
        "young": [
          81,
          7,
          12
        ],
        "adult": [
          90,
          5,
          5
        ],
        "old": [
          88,
          6,
          5
        ],
        "fulltime": [
          90,
          5,
          5
        ],
        "parttime": [
          83,
          7,
          10
        ],
        "unemployed": [
          75,
          17,
          7
        ],
        "comfortable": [
          91,
          4,
          5
        ],
        "gettingby": [
          92,
          4,
          4
        ],
        "difficulty": [
          76,
          13,
          11
        ]
      },
      "homes": {
        "allresp": [
          87,
          6,
          6
        ],
        "urban": [
          87,
          7,
          7
        ],
        "rural": [
          92,
          6,
          2
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          82,
          10,
          8
        ],
        "permission": [
          76,
          9,
          15
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          7,
          7
        ],
        "multiple": [
          92,
          5,
          3
        ],
        "male": [
          87,
          8,
          6
        ],
        "female": [
          88,
          5,
          7
        ],
        "young": [
          79,
          7,
          15
        ],
        "adult": [
          90,
          5,
          5
        ],
        "old": [
          86,
          8,
          6
        ],
        "fulltime": [
          89,
          6,
          5
        ],
        "parttime": [
          83,
          7,
          10
        ],
        "unemployed": [
          75,
          17,
          7
        ],
        "comfortable": [
          88,
          6,
          6
        ],
        "gettingby": [
          91,
          4,
          4
        ],
        "difficulty": [
          76,
          13,
          11
        ]
      }
    },
    "reasons": {
      "askedtoleave": 70,
      "family": 29,
      "money": 57,
      "death": 35,
      "government": 23,
      "companies": 16,
      "customary": -1
    }
  },
  "TD": {
    "insecurity": {
      "allprop": {
        "allresp": [
          70,
          19,
          11
        ],
        "urban": [
          66,
          20,
          13
        ],
        "rural": [
          76,
          18,
          6
        ],
        "owner": [
          80,
          13,
          7
        ],
        "renter": [
          46,
          44,
          10
        ],
        "permission": [
          58,
          25,
          16
        ],
        "formal": [
          65,
          24,
          10
        ],
        "informal": [
          81,
          16,
          3
        ],
        "nodocs": [
          72,
          16,
          12
        ],
        "sole": [
          69,
          19,
          11
        ],
        "multiple": [
          73,
          19,
          7
        ],
        "male": [
          70,
          22,
          9
        ],
        "female": [
          69,
          17,
          14
        ],
        "young": [
          66,
          19,
          15
        ],
        "adult": [
          70,
          19,
          11
        ],
        "old": [
          75,
          23,
          2
        ],
        "fulltime": [
          75,
          19,
          6
        ],
        "parttime": [
          62,
          21,
          17
        ],
        "unemployed": [
          67,
          28,
          5
        ],
        "comfortable": [
          69,
          24,
          7
        ],
        "gettingby": [
          71,
          18,
          10
        ],
        "difficulty": [
          70,
          19,
          11
        ]
      },
      "homes": {
        "allresp": [
          72,
          17,
          10
        ],
        "urban": [
          70,
          18,
          12
        ],
        "rural": [
          78,
          16,
          6
        ],
        "owner": [
          81,
          11,
          7
        ],
        "renter": [
          46,
          43,
          11
        ],
        "permission": [
          64,
          22,
          15
        ],
        "formal": [
          70,
          21,
          10
        ],
        "informal": [
          83,
          14,
          2
        ],
        "nodocs": [
          73,
          16,
          11
        ],
        "sole": [
          69,
          19,
          11
        ],
        "multiple": [
          82,
          13,
          5
        ],
        "male": [
          73,
          19,
          8
        ],
        "female": [
          71,
          16,
          13
        ],
        "young": [
          69,
          17,
          14
        ],
        "adult": [
          73,
          17,
          10
        ],
        "old": [
          79,
          19,
          2
        ],
        "fulltime": [
          77,
          18,
          5
        ],
        "parttime": [
          64,
          19,
          17
        ],
        "unemployed": [
          69,
          26,
          5
        ],
        "comfortable": [
          74,
          22,
          5
        ],
        "gettingby": [
          77,
          14,
          9
        ],
        "difficulty": [
          72,
          18,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          38,
          2,
          59
        ],
        "urban": [
          44,
          2,
          54
        ],
        "rural": [
          27,
          1,
          71
        ],
        "owner": [
          36,
          1,
          62
        ],
        "renter": [
          31,
          7,
          62
        ],
        "permission": [
          51,
          1,
          48
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          38,
          3,
          59
        ],
        "multiple": [
          41,
          0,
          59
        ],
        "male": [
          40,
          2,
          58
        ],
        "female": [
          37,
          2,
          61
        ],
        "young": [
          39,
          2,
          59
        ],
        "adult": [
          37,
          2,
          61
        ],
        "old": [
          43,
          3,
          54
        ],
        "fulltime": [
          34,
          1,
          66
        ],
        "parttime": [
          49,
          4,
          47
        ],
        "unemployed": [
          51,
          1,
          48
        ],
        "comfortable": [
          60,
          6,
          34
        ],
        "gettingby": [
          40,
          2,
          58
        ],
        "difficulty": [
          36,
          2,
          62
        ]
      },
      "homes": {
        "allresp": [
          36,
          3,
          61
        ],
        "urban": [
          40,
          3,
          57
        ],
        "rural": [
          27,
          1,
          71
        ],
        "owner": [
          35,
          1,
          63
        ],
        "renter": [
          25,
          7,
          68
        ],
        "permission": [
          48,
          2,
          50
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          38,
          3,
          59
        ],
        "multiple": [
          34,
          2,
          65
        ],
        "male": [
          38,
          3,
          60
        ],
        "female": [
          35,
          2,
          63
        ],
        "young": [
          37,
          2,
          61
        ],
        "adult": [
          35,
          2,
          62
        ],
        "old": [
          38,
          5,
          57
        ],
        "fulltime": [
          32,
          1,
          67
        ],
        "parttime": [
          46,
          5,
          49
        ],
        "unemployed": [
          48,
          1,
          52
        ],
        "comfortable": [
          57,
          7,
          36
        ],
        "gettingby": [
          35,
          4,
          61
        ],
        "difficulty": [
          35,
          2,
          63
        ]
      }
    },
    "reasons": {
      "askedtoleave": 53,
      "family": 48,
      "money": 45,
      "death": 37,
      "government": 44,
      "companies": 30,
      "customary": 38
    }
  },
  "CL": {
    "insecurity": {
      "allprop": {
        "allresp": [
          72,
          23,
          5
        ],
        "urban": [
          71,
          23,
          6
        ],
        "rural": [
          78,
          22,
          0
        ],
        "owner": [
          84,
          11,
          5
        ],
        "renter": [
          58,
          38,
          4
        ],
        "permission": [
          69,
          24,
          6
        ],
        "formal": [
          75,
          21,
          4
        ],
        "informal": [
          55,
          33,
          12
        ],
        "nodocs": [
          50,
          35,
          15
        ],
        "sole": [
          73,
          22,
          5
        ],
        "multiple": [
          71,
          27,
          2
        ],
        "male": [
          73,
          23,
          4
        ],
        "female": [
          71,
          23,
          6
        ],
        "young": [
          73,
          23,
          4
        ],
        "adult": [
          70,
          25,
          5
        ],
        "old": [
          76,
          18,
          6
        ],
        "fulltime": [
          73,
          24,
          3
        ],
        "parttime": [
          67,
          28,
          5
        ],
        "unemployed": [
          64,
          27,
          9
        ],
        "comfortable": [
          84,
          14,
          3
        ],
        "gettingby": [
          76,
          19,
          5
        ],
        "difficulty": [
          65,
          30,
          6
        ]
      },
      "homes": {
        "allresp": [
          73,
          22,
          5
        ],
        "urban": [
          72,
          22,
          6
        ],
        "rural": [
          78,
          22,
          0
        ],
        "owner": [
          84,
          11,
          5
        ],
        "renter": [
          60,
          37,
          4
        ],
        "permission": [
          70,
          24,
          6
        ],
        "formal": [
          75,
          20,
          4
        ],
        "informal": [
          58,
          31,
          11
        ],
        "nodocs": [
          49,
          37,
          14
        ],
        "sole": [
          73,
          22,
          5
        ],
        "multiple": [
          76,
          22,
          2
        ],
        "male": [
          74,
          22,
          4
        ],
        "female": [
          72,
          22,
          6
        ],
        "young": [
          73,
          23,
          4
        ],
        "adult": [
          70,
          24,
          5
        ],
        "old": [
          77,
          18,
          6
        ],
        "fulltime": [
          73,
          24,
          3
        ],
        "parttime": [
          68,
          27,
          5
        ],
        "unemployed": [
          64,
          27,
          9
        ],
        "comfortable": [
          85,
          12,
          3
        ],
        "gettingby": [
          76,
          19,
          5
        ],
        "difficulty": [
          65,
          29,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          88,
          5,
          7
        ],
        "urban": [
          89,
          5,
          6
        ],
        "rural": [
          83,
          5,
          12
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          88,
          6,
          5
        ],
        "permission": [
          82,
          7,
          11
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          5,
          6
        ],
        "multiple": [
          93,
          3,
          4
        ],
        "male": [
          88,
          6,
          7
        ],
        "female": [
          89,
          4,
          7
        ],
        "young": [
          84,
          12,
          4
        ],
        "adult": [
          88,
          4,
          8
        ],
        "old": [
          91,
          3,
          5
        ],
        "fulltime": [
          88,
          7,
          6
        ],
        "parttime": [
          92,
          2,
          6
        ],
        "unemployed": [
          87,
          5,
          7
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          89,
          6,
          5
        ],
        "difficulty": [
          87,
          4,
          9
        ]
      },
      "homes": {
        "allresp": [
          87,
          6,
          7
        ],
        "urban": [
          88,
          5,
          7
        ],
        "rural": [
          80,
          8,
          12
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          85,
          9,
          6
        ],
        "permission": [
          81,
          8,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          5,
          6
        ],
        "multiple": [
          84,
          9,
          8
        ],
        "male": [
          86,
          6,
          8
        ],
        "female": [
          88,
          5,
          7
        ],
        "young": [
          81,
          13,
          6
        ],
        "adult": [
          87,
          5,
          8
        ],
        "old": [
          90,
          4,
          6
        ],
        "fulltime": [
          87,
          7,
          6
        ],
        "parttime": [
          91,
          3,
          6
        ],
        "unemployed": [
          87,
          5,
          7
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          88,
          6,
          6
        ],
        "difficulty": [
          85,
          5,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 67,
      "family": 31,
      "money": 35,
      "death": 19,
      "government": 6,
      "companies": 6,
      "customary": -1
    }
  },
  "KM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          60,
          32,
          8
        ],
        "urban": [
          59,
          32,
          9
        ],
        "rural": [
          64,
          31,
          5
        ],
        "owner": [
          65,
          25,
          10
        ],
        "renter": [
          59,
          34,
          8
        ],
        "permission": [
          55,
          40,
          5
        ],
        "formal": [
          58,
          36,
          6
        ],
        "informal": [
          67,
          24,
          9
        ],
        "nodocs": [
          58,
          26,
          16
        ],
        "sole": [
          67,
          23,
          10
        ],
        "multiple": [
          47,
          49,
          4
        ],
        "male": [
          61,
          33,
          6
        ],
        "female": [
          59,
          31,
          11
        ],
        "young": [
          63,
          31,
          6
        ],
        "adult": [
          61,
          32,
          8
        ],
        "old": [
          51,
          34,
          15
        ],
        "fulltime": [
          62,
          35,
          3
        ],
        "parttime": [
          53,
          39,
          8
        ],
        "unemployed": [
          68,
          25,
          7
        ],
        "comfortable": [
          50,
          39,
          11
        ],
        "gettingby": [
          67,
          25,
          8
        ],
        "difficulty": [
          61,
          32,
          7
        ]
      },
      "homes": {
        "allresp": [
          67,
          25,
          8
        ],
        "urban": [
          67,
          24,
          9
        ],
        "rural": [
          66,
          29,
          5
        ],
        "owner": [
          71,
          19,
          9
        ],
        "renter": [
          63,
          28,
          9
        ],
        "permission": [
          64,
          31,
          5
        ],
        "formal": [
          67,
          27,
          6
        ],
        "informal": [
          70,
          22,
          8
        ],
        "nodocs": [
          62,
          25,
          12
        ],
        "sole": [
          67,
          23,
          10
        ],
        "multiple": [
          68,
          29,
          3
        ],
        "male": [
          70,
          25,
          5
        ],
        "female": [
          64,
          25,
          11
        ],
        "young": [
          70,
          26,
          5
        ],
        "adult": [
          68,
          25,
          8
        ],
        "old": [
          59,
          26,
          15
        ],
        "fulltime": [
          70,
          28,
          3
        ],
        "parttime": [
          62,
          30,
          7
        ],
        "unemployed": [
          76,
          17,
          7
        ],
        "comfortable": [
          53,
          36,
          11
        ],
        "gettingby": [
          76,
          18,
          6
        ],
        "difficulty": [
          68,
          26,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          62,
          24,
          14
        ],
        "urban": [
          61,
          24,
          15
        ],
        "rural": [
          66,
          21,
          13
        ],
        "owner": [
          65,
          22,
          13
        ],
        "renter": [
          33,
          40,
          26
        ],
        "permission": [
          70,
          20,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          54,
          28,
          18
        ],
        "multiple": [
          82,
          13,
          5
        ],
        "male": [
          66,
          20,
          14
        ],
        "female": [
          59,
          26,
          15
        ],
        "young": [
          64,
          18,
          17
        ],
        "adult": [
          62,
          26,
          12
        ],
        "old": [
          61,
          22,
          17
        ],
        "fulltime": [
          68,
          23,
          9
        ],
        "parttime": [
          66,
          22,
          12
        ],
        "unemployed": [
          51,
          23,
          26
        ],
        "comfortable": [
          71,
          18,
          11
        ],
        "gettingby": [
          58,
          31,
          11
        ],
        "difficulty": [
          63,
          21,
          16
        ]
      },
      "homes": {
        "allresp": [
          56,
          28,
          16
        ],
        "urban": [
          54,
          29,
          16
        ],
        "rural": [
          61,
          24,
          16
        ],
        "owner": [
          58,
          27,
          15
        ],
        "renter": [
          25,
          47,
          28
        ],
        "permission": [
          63,
          24,
          13
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          54,
          28,
          18
        ],
        "multiple": [
          62,
          27,
          11
        ],
        "male": [
          60,
          24,
          16
        ],
        "female": [
          52,
          32,
          16
        ],
        "young": [
          60,
          21,
          19
        ],
        "adult": [
          55,
          31,
          15
        ],
        "old": [
          53,
          29,
          18
        ],
        "fulltime": [
          59,
          29,
          12
        ],
        "parttime": [
          61,
          26,
          14
        ],
        "unemployed": [
          48,
          26,
          26
        ],
        "comfortable": [
          67,
          20,
          13
        ],
        "gettingby": [
          52,
          35,
          13
        ],
        "difficulty": [
          55,
          26,
          18
        ]
      }
    },
    "reasons": {
      "askedtoleave": 49,
      "family": 43,
      "money": 46,
      "death": 34,
      "government": 17,
      "companies": 16,
      "customary": 31
    }
  },
  "CG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          56,
          40,
          4
        ],
        "urban": [
          56,
          40,
          4
        ],
        "rural": [
          54,
          40,
          6
        ],
        "owner": [
          62,
          33,
          5
        ],
        "renter": [
          54,
          40,
          6
        ],
        "permission": [
          50,
          48,
          2
        ],
        "formal": [
          55,
          41,
          4
        ],
        "informal": [
          59,
          33,
          8
        ],
        "nodocs": [
          56,
          40,
          4
        ],
        "sole": [
          63,
          33,
          4
        ],
        "multiple": [
          35,
          63,
          2
        ],
        "male": [
          61,
          38,
          2
        ],
        "female": [
          51,
          42,
          7
        ],
        "young": [
          55,
          40,
          6
        ],
        "adult": [
          53,
          43,
          4
        ],
        "old": [
          71,
          24,
          5
        ],
        "fulltime": [
          56,
          40,
          4
        ],
        "parttime": [
          47,
          52,
          1
        ],
        "unemployed": [
          57,
          41,
          2
        ],
        "comfortable": [
          68,
          30,
          2
        ],
        "gettingby": [
          55,
          35,
          10
        ],
        "difficulty": [
          55,
          42,
          3
        ]
      },
      "homes": {
        "allresp": [
          57,
          38,
          4
        ],
        "urban": [
          58,
          38,
          4
        ],
        "rural": [
          54,
          40,
          6
        ],
        "owner": [
          63,
          31,
          5
        ],
        "renter": [
          54,
          39,
          7
        ],
        "permission": [
          53,
          45,
          2
        ],
        "formal": [
          59,
          37,
          4
        ],
        "informal": [
          59,
          35,
          7
        ],
        "nodocs": [
          54,
          42,
          4
        ],
        "sole": [
          63,
          33,
          4
        ],
        "multiple": [
          43,
          55,
          2
        ],
        "male": [
          63,
          36,
          2
        ],
        "female": [
          52,
          41,
          7
        ],
        "young": [
          57,
          38,
          6
        ],
        "adult": [
          54,
          42,
          4
        ],
        "old": [
          72,
          23,
          5
        ],
        "fulltime": [
          57,
          39,
          4
        ],
        "parttime": [
          47,
          51,
          1
        ],
        "unemployed": [
          60,
          38,
          2
        ],
        "comfortable": [
          70,
          28,
          2
        ],
        "gettingby": [
          58,
          31,
          10
        ],
        "difficulty": [
          56,
          40,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          61,
          12,
          27
        ],
        "urban": [
          63,
          12,
          25
        ],
        "rural": [
          19,
          2,
          80
        ],
        "owner": [
          73,
          4,
          23
        ],
        "renter": [
          46,
          20,
          35
        ],
        "permission": [
          69,
          10,
          21
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          53,
          14,
          32
        ],
        "multiple": [
          88,
          2,
          10
        ],
        "male": [
          59,
          13,
          27
        ],
        "female": [
          63,
          11,
          26
        ],
        "young": [
          66,
          13,
          21
        ],
        "adult": [
          60,
          12,
          28
        ],
        "old": [
          62,
          9,
          29
        ],
        "fulltime": [
          65,
          8,
          27
        ],
        "parttime": [
          62,
          10,
          27
        ],
        "unemployed": [
          65,
          14,
          22
        ],
        "comfortable": [
          54,
          20,
          26
        ],
        "gettingby": [
          71,
          14,
          15
        ],
        "difficulty": [
          60,
          11,
          29
        ]
      },
      "homes": {
        "allresp": [
          57,
          14,
          29
        ],
        "urban": [
          58,
          14,
          28
        ],
        "rural": [
          19,
          2,
          80
        ],
        "owner": [
          71,
          5,
          25
        ],
        "renter": [
          39,
          23,
          38
        ],
        "permission": [
          66,
          11,
          22
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          53,
          14,
          32
        ],
        "multiple": [
          71,
          9,
          20
        ],
        "male": [
          55,
          15,
          30
        ],
        "female": [
          59,
          13,
          28
        ],
        "young": [
          62,
          15,
          23
        ],
        "adult": [
          55,
          14,
          31
        ],
        "old": [
          61,
          10,
          29
        ],
        "fulltime": [
          60,
          10,
          30
        ],
        "parttime": [
          59,
          11,
          30
        ],
        "unemployed": [
          59,
          17,
          24
        ],
        "comfortable": [
          51,
          22,
          27
        ],
        "gettingby": [
          69,
          14,
          17
        ],
        "difficulty": [
          55,
          13,
          32
        ]
      }
    },
    "reasons": {
      "askedtoleave": 69,
      "family": 46,
      "money": 55,
      "death": 32,
      "government": 28,
      "companies": 22,
      "customary": 28
    }
  },
  "CR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          75,
          17,
          8
        ],
        "urban": [
          77,
          17,
          6
        ],
        "rural": [
          70,
          17,
          13
        ],
        "owner": [
          80,
          9,
          11
        ],
        "renter": [
          56,
          36,
          8
        ],
        "permission": [
          79,
          15,
          6
        ],
        "formal": [
          78,
          15,
          6
        ],
        "informal": [
          57,
          26,
          16
        ],
        "nodocs": [
          73,
          18,
          9
        ],
        "sole": [
          75,
          16,
          8
        ],
        "multiple": [
          73,
          21,
          6
        ],
        "male": [
          73,
          21,
          6
        ],
        "female": [
          77,
          13,
          10
        ],
        "young": [
          76,
          21,
          3
        ],
        "adult": [
          74,
          19,
          7
        ],
        "old": [
          77,
          8,
          15
        ],
        "fulltime": [
          75,
          19,
          6
        ],
        "parttime": [
          78,
          15,
          8
        ],
        "unemployed": [
          68,
          28,
          4
        ],
        "comfortable": [
          80,
          15,
          4
        ],
        "gettingby": [
          77,
          16,
          6
        ],
        "difficulty": [
          74,
          18,
          8
        ]
      },
      "homes": {
        "allresp": [
          76,
          16,
          8
        ],
        "urban": [
          78,
          16,
          6
        ],
        "rural": [
          73,
          15,
          13
        ],
        "owner": [
          81,
          8,
          11
        ],
        "renter": [
          59,
          33,
          8
        ],
        "permission": [
          79,
          15,
          6
        ],
        "formal": [
          80,
          14,
          6
        ],
        "informal": [
          61,
          23,
          16
        ],
        "nodocs": [
          74,
          18,
          8
        ],
        "sole": [
          75,
          16,
          8
        ],
        "multiple": [
          84,
          11,
          5
        ],
        "male": [
          75,
          19,
          6
        ],
        "female": [
          78,
          13,
          9
        ],
        "young": [
          77,
          19,
          3
        ],
        "adult": [
          75,
          18,
          7
        ],
        "old": [
          78,
          7,
          15
        ],
        "fulltime": [
          77,
          17,
          6
        ],
        "parttime": [
          78,
          15,
          8
        ],
        "unemployed": [
          69,
          27,
          4
        ],
        "comfortable": [
          80,
          15,
          4
        ],
        "gettingby": [
          79,
          15,
          6
        ],
        "difficulty": [
          75,
          17,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          68,
          10,
          22
        ],
        "urban": [
          66,
          11,
          23
        ],
        "rural": [
          73,
          9,
          17
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          58,
          28,
          14
        ],
        "permission": [
          59,
          5,
          36
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          65,
          11,
          24
        ],
        "multiple": [
          89,
          5,
          6
        ],
        "male": [
          68,
          10,
          22
        ],
        "female": [
          68,
          11,
          21
        ],
        "young": [
          53,
          9,
          38
        ],
        "adult": [
          68,
          12,
          20
        ],
        "old": [
          80,
          7,
          13
        ],
        "fulltime": [
          72,
          11,
          17
        ],
        "parttime": [
          62,
          6,
          32
        ],
        "unemployed": [
          58,
          15,
          26
        ],
        "comfortable": [
          59,
          10,
          31
        ],
        "gettingby": [
          68,
          8,
          24
        ],
        "difficulty": [
          70,
          12,
          18
        ]
      },
      "homes": {
        "allresp": [
          67,
          11,
          23
        ],
        "urban": [
          65,
          11,
          24
        ],
        "rural": [
          71,
          10,
          19
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          57,
          28,
          15
        ],
        "permission": [
          57,
          6,
          38
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          65,
          11,
          24
        ],
        "multiple": [
          78,
          8,
          15
        ],
        "male": [
          67,
          10,
          23
        ],
        "female": [
          66,
          11,
          22
        ],
        "young": [
          50,
          9,
          41
        ],
        "adult": [
          67,
          12,
          21
        ],
        "old": [
          79,
          8,
          13
        ],
        "fulltime": [
          70,
          11,
          18
        ],
        "parttime": [
          59,
          9,
          32
        ],
        "unemployed": [
          58,
          15,
          27
        ],
        "comfortable": [
          55,
          10,
          34
        ],
        "gettingby": [
          67,
          8,
          25
        ],
        "difficulty": [
          70,
          12,
          18
        ]
      }
    },
    "reasons": {
      "askedtoleave": 19,
      "family": 12,
      "money": 20,
      "death": 8,
      "government": 3,
      "companies": 3,
      "customary": 1
    }
  },
  "CI": {
    "insecurity": {
      "allprop": {
        "allresp": [
          59,
          28,
          14
        ],
        "urban": [
          56,
          29,
          16
        ],
        "rural": [
          62,
          27,
          11
        ],
        "owner": [
          72,
          19,
          9
        ],
        "renter": [
          55,
          31,
          14
        ],
        "permission": [
          61,
          25,
          13
        ],
        "formal": [
          64,
          25,
          11
        ],
        "informal": [
          56,
          29,
          15
        ],
        "nodocs": [
          52,
          31,
          17
        ],
        "sole": [
          60,
          26,
          14
        ],
        "multiple": [
          47,
          41,
          12
        ],
        "male": [
          61,
          26,
          12
        ],
        "female": [
          56,
          29,
          15
        ],
        "young": [
          57,
          31,
          12
        ],
        "adult": [
          57,
          27,
          16
        ],
        "old": [
          68,
          24,
          8
        ],
        "fulltime": [
          55,
          29,
          16
        ],
        "parttime": [
          62,
          26,
          12
        ],
        "unemployed": [
          56,
          25,
          19
        ],
        "comfortable": [
          67,
          20,
          12
        ],
        "gettingby": [
          62,
          27,
          12
        ],
        "difficulty": [
          51,
          32,
          17
        ]
      },
      "homes": {
        "allresp": [
          60,
          27,
          13
        ],
        "urban": [
          58,
          28,
          14
        ],
        "rural": [
          63,
          26,
          11
        ],
        "owner": [
          74,
          18,
          8
        ],
        "renter": [
          56,
          31,
          13
        ],
        "permission": [
          64,
          24,
          12
        ],
        "formal": [
          66,
          24,
          10
        ],
        "informal": [
          58,
          28,
          14
        ],
        "nodocs": [
          53,
          31,
          16
        ],
        "sole": [
          60,
          26,
          14
        ],
        "multiple": [
          62,
          33,
          5
        ],
        "male": [
          63,
          26,
          12
        ],
        "female": [
          58,
          28,
          14
        ],
        "young": [
          59,
          30,
          11
        ],
        "adult": [
          59,
          26,
          15
        ],
        "old": [
          69,
          24,
          6
        ],
        "fulltime": [
          56,
          29,
          15
        ],
        "parttime": [
          62,
          26,
          12
        ],
        "unemployed": [
          58,
          25,
          17
        ],
        "comfortable": [
          70,
          19,
          11
        ],
        "gettingby": [
          63,
          26,
          11
        ],
        "difficulty": [
          53,
          31,
          16
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          53,
          11,
          36
        ],
        "urban": [
          57,
          9,
          35
        ],
        "rural": [
          50,
          14,
          37
        ],
        "owner": [
          74,
          9,
          16
        ],
        "renter": [
          53,
          15,
          32
        ],
        "permission": [
          43,
          10,
          47
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          50,
          12,
          38
        ],
        "multiple": [
          80,
          4,
          16
        ],
        "male": [
          57,
          12,
          31
        ],
        "female": [
          49,
          10,
          41
        ],
        "young": [
          40,
          9,
          51
        ],
        "adult": [
          54,
          14,
          32
        ],
        "old": [
          77,
          5,
          18
        ],
        "fulltime": [
          62,
          13,
          25
        ],
        "parttime": [
          59,
          13,
          28
        ],
        "unemployed": [
          39,
          9,
          52
        ],
        "comfortable": [
          53,
          10,
          36
        ],
        "gettingby": [
          51,
          15,
          34
        ],
        "difficulty": [
          57,
          6,
          37
        ]
      },
      "homes": {
        "allresp": [
          52,
          12,
          36
        ],
        "urban": [
          55,
          9,
          35
        ],
        "rural": [
          48,
          15,
          37
        ],
        "owner": [
          74,
          10,
          17
        ],
        "renter": [
          51,
          16,
          33
        ],
        "permission": [
          42,
          10,
          48
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          50,
          12,
          38
        ],
        "multiple": [
          65,
          12,
          23
        ],
        "male": [
          54,
          14,
          32
        ],
        "female": [
          49,
          10,
          41
        ],
        "young": [
          39,
          9,
          52
        ],
        "adult": [
          52,
          15,
          33
        ],
        "old": [
          77,
          5,
          18
        ],
        "fulltime": [
          61,
          14,
          25
        ],
        "parttime": [
          55,
          17,
          28
        ],
        "unemployed": [
          38,
          10,
          52
        ],
        "comfortable": [
          51,
          13,
          37
        ],
        "gettingby": [
          49,
          16,
          35
        ],
        "difficulty": [
          56,
          6,
          37
        ]
      }
    },
    "reasons": {
      "askedtoleave": 35,
      "family": 12,
      "money": 26,
      "death": 2,
      "government": 5,
      "companies": 2,
      "customary": 2
    }
  },
  "HR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          87,
          8,
          5
        ],
        "urban": [
          87,
          8,
          5
        ],
        "rural": [
          90,
          7,
          3
        ],
        "owner": [
          93,
          3,
          4
        ],
        "renter": [
          44,
          41,
          15
        ],
        "permission": [
          92,
          4,
          4
        ],
        "formal": [
          89,
          7,
          4
        ],
        "informal": [
          75,
          15,
          10
        ],
        "nodocs": [
          75,
          13,
          12
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          86,
          7,
          7
        ],
        "male": [
          87,
          8,
          4
        ],
        "female": [
          86,
          7,
          6
        ],
        "young": [
          84,
          14,
          2
        ],
        "adult": [
          87,
          8,
          5
        ],
        "old": [
          87,
          6,
          7
        ],
        "fulltime": [
          89,
          7,
          4
        ],
        "parttime": [
          81,
          6,
          12
        ],
        "unemployed": [
          58,
          39,
          3
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          85,
          9,
          6
        ],
        "difficulty": [
          87,
          8,
          5
        ]
      },
      "homes": {
        "allresp": [
          88,
          7,
          5
        ],
        "urban": [
          88,
          7,
          5
        ],
        "rural": [
          90,
          7,
          3
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          44,
          41,
          15
        ],
        "permission": [
          94,
          2,
          3
        ],
        "formal": [
          90,
          7,
          4
        ],
        "informal": [
          79,
          11,
          10
        ],
        "nodocs": [
          77,
          12,
          11
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          93,
          4,
          3
        ],
        "male": [
          89,
          8,
          4
        ],
        "female": [
          87,
          7,
          6
        ],
        "young": [
          86,
          13,
          1
        ],
        "adult": [
          89,
          8,
          4
        ],
        "old": [
          88,
          6,
          6
        ],
        "fulltime": [
          90,
          7,
          3
        ],
        "parttime": [
          84,
          4,
          12
        ],
        "unemployed": [
          58,
          39,
          3
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          88,
          8,
          4
        ],
        "difficulty": [
          87,
          8,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          5,
          10
        ],
        "urban": [
          85,
          5,
          10
        ],
        "rural": [
          95,
          0,
          5
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          71,
          3,
          25
        ],
        "permission": [
          81,
          7,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          4,
          9
        ],
        "multiple": [
          89,
          8,
          3
        ],
        "male": [
          84,
          5,
          11
        ],
        "female": [
          86,
          5,
          8
        ],
        "young": [
          76,
          6,
          18
        ],
        "adult": [
          86,
          5,
          9
        ],
        "old": [
          86,
          5,
          9
        ],
        "fulltime": [
          89,
          3,
          8
        ],
        "parttime": [
          71,
          14,
          16
        ],
        "unemployed": [
          91,
          4,
          5
        ],
        "comfortable": [
          76,
          9,
          15
        ],
        "gettingby": [
          90,
          3,
          8
        ],
        "difficulty": [
          85,
          6,
          9
        ]
      },
      "homes": {
        "allresp": [
          84,
          6,
          11
        ],
        "urban": [
          83,
          6,
          11
        ],
        "rural": [
          95,
          0,
          5
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          70,
          4,
          25
        ],
        "permission": [
          76,
          9,
          15
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          4,
          9
        ],
        "multiple": [
          76,
          14,
          10
        ],
        "male": [
          84,
          5,
          11
        ],
        "female": [
          83,
          7,
          10
        ],
        "young": [
          74,
          7,
          19
        ],
        "adult": [
          85,
          5,
          10
        ],
        "old": [
          84,
          6,
          10
        ],
        "fulltime": [
          88,
          3,
          8
        ],
        "parttime": [
          69,
          16,
          16
        ],
        "unemployed": [
          76,
          4,
          20
        ],
        "comfortable": [
          75,
          10,
          15
        ],
        "gettingby": [
          85,
          5,
          10
        ],
        "difficulty": [
          85,
          6,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 92,
      "family": 8,
      "money": 59,
      "death": 4,
      "government": 13,
      "companies": 1,
      "customary": -1
    }
  },
  "CY": {
    "insecurity": {
      "allprop": {
        "allresp": [
          71,
          24,
          5
        ],
        "urban": [
          71,
          24,
          5
        ],
        "rural": [
          65,
          27,
          8
        ],
        "owner": [
          78,
          17,
          5
        ],
        "renter": [
          50,
          43,
          7
        ],
        "permission": [
          76,
          21,
          3
        ],
        "formal": [
          72,
          23,
          4
        ],
        "informal": [
          65,
          27,
          8
        ],
        "nodocs": [
          59,
          29,
          12
        ],
        "sole": [
          72,
          23,
          5
        ],
        "multiple": [
          68,
          29,
          3
        ],
        "male": [
          70,
          26,
          4
        ],
        "female": [
          72,
          22,
          6
        ],
        "young": [
          69,
          29,
          3
        ],
        "adult": [
          68,
          27,
          4
        ],
        "old": [
          77,
          16,
          8
        ],
        "fulltime": [
          70,
          26,
          5
        ],
        "parttime": [
          77,
          17,
          5
        ],
        "unemployed": [
          68,
          32,
          0
        ],
        "comfortable": [
          82,
          14,
          4
        ],
        "gettingby": [
          74,
          22,
          5
        ],
        "difficulty": [
          60,
          34,
          6
        ]
      },
      "homes": {
        "allresp": [
          73,
          22,
          5
        ],
        "urban": [
          74,
          22,
          5
        ],
        "rural": [
          65,
          27,
          8
        ],
        "owner": [
          81,
          14,
          5
        ],
        "renter": [
          52,
          41,
          7
        ],
        "permission": [
          77,
          20,
          2
        ],
        "formal": [
          76,
          20,
          4
        ],
        "informal": [
          57,
          37,
          6
        ],
        "nodocs": [
          60,
          28,
          11
        ],
        "sole": [
          72,
          23,
          5
        ],
        "multiple": [
          78,
          20,
          2
        ],
        "male": [
          71,
          24,
          4
        ],
        "female": [
          75,
          20,
          5
        ],
        "young": [
          71,
          27,
          2
        ],
        "adult": [
          71,
          25,
          4
        ],
        "old": [
          79,
          14,
          7
        ],
        "fulltime": [
          72,
          24,
          4
        ],
        "parttime": [
          79,
          16,
          5
        ],
        "unemployed": [
          68,
          32,
          0
        ],
        "comfortable": [
          84,
          12,
          3
        ],
        "gettingby": [
          77,
          18,
          5
        ],
        "difficulty": [
          61,
          34,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          87,
          4,
          8
        ],
        "urban": [
          88,
          4,
          8
        ],
        "rural": [
          85,
          7,
          8
        ],
        "owner": [
          96,
          2,
          2
        ],
        "renter": [
          86,
          5,
          9
        ],
        "permission": [
          81,
          6,
          13
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          5,
          10
        ],
        "multiple": [
          98,
          0,
          2
        ],
        "male": [
          87,
          4,
          8
        ],
        "female": [
          87,
          4,
          8
        ],
        "young": [
          78,
          5,
          16
        ],
        "adult": [
          88,
          5,
          7
        ],
        "old": [
          90,
          2,
          7
        ],
        "fulltime": [
          89,
          4,
          6
        ],
        "parttime": [
          80,
          7,
          12
        ],
        "unemployed": [
          66,
          8,
          26
        ],
        "comfortable": [
          90,
          2,
          8
        ],
        "gettingby": [
          90,
          4,
          6
        ],
        "difficulty": [
          83,
          6,
          11
        ]
      },
      "homes": {
        "allresp": [
          86,
          5,
          9
        ],
        "urban": [
          86,
          5,
          9
        ],
        "rural": [
          82,
          10,
          8
        ],
        "owner": [
          96,
          2,
          2
        ],
        "renter": [
          83,
          6,
          11
        ],
        "permission": [
          78,
          9,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          5,
          10
        ],
        "multiple": [
          89,
          5,
          6
        ],
        "male": [
          85,
          6,
          9
        ],
        "female": [
          86,
          5,
          9
        ],
        "young": [
          75,
          8,
          17
        ],
        "adult": [
          86,
          6,
          8
        ],
        "old": [
          88,
          3,
          9
        ],
        "fulltime": [
          88,
          5,
          7
        ],
        "parttime": [
          78,
          7,
          15
        ],
        "unemployed": [
          66,
          8,
          26
        ],
        "comfortable": [
          87,
          3,
          9
        ],
        "gettingby": [
          88,
          5,
          7
        ],
        "difficulty": [
          81,
          8,
          12
        ]
      }
    },
    "reasons": {
      "askedtoleave": 68,
      "family": 20,
      "money": 65,
      "death": 16,
      "government": 17,
      "companies": 29,
      "customary": -1
    }
  },
  "DK": {
    "insecurity": {
      "allprop": {
        "allresp": [
          92,
          7,
          1
        ],
        "urban": [
          92,
          7,
          1
        ],
        "rural": [
          92,
          8,
          0
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          90,
          10,
          0
        ],
        "permission": [
          93,
          7,
          0
        ],
        "formal": [
          92,
          7,
          1
        ],
        "informal": [
          86,
          14,
          0
        ],
        "nodocs": [
          92,
          8,
          0
        ],
        "sole": [
          93,
          7,
          1
        ],
        "multiple": [
          89,
          11,
          0
        ],
        "male": [
          93,
          7,
          0
        ],
        "female": [
          91,
          8,
          1
        ],
        "young": [
          84,
          16,
          0
        ],
        "adult": [
          94,
          6,
          0
        ],
        "old": [
          92,
          7,
          1
        ],
        "fulltime": [
          95,
          5,
          0
        ],
        "parttime": [
          85,
          14,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          94,
          5,
          1
        ],
        "gettingby": [
          91,
          9,
          0
        ],
        "difficulty": [
          79,
          21,
          0
        ]
      },
      "homes": {
        "allresp": [
          93,
          7,
          1
        ],
        "urban": [
          93,
          7,
          1
        ],
        "rural": [
          95,
          5,
          0
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          90,
          10,
          0
        ],
        "permission": [
          94,
          5,
          0
        ],
        "formal": [
          93,
          6,
          1
        ],
        "informal": [
          88,
          12,
          0
        ],
        "nodocs": [
          93,
          7,
          0
        ],
        "sole": [
          93,
          7,
          1
        ],
        "multiple": [
          93,
          6,
          0
        ],
        "male": [
          94,
          6,
          0
        ],
        "female": [
          92,
          7,
          1
        ],
        "young": [
          84,
          16,
          0
        ],
        "adult": [
          95,
          5,
          0
        ],
        "old": [
          93,
          5,
          1
        ],
        "fulltime": [
          96,
          4,
          0
        ],
        "parttime": [
          85,
          14,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          95,
          4,
          1
        ],
        "gettingby": [
          92,
          8,
          0
        ],
        "difficulty": [
          79,
          21,
          0
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          83,
          4,
          13
        ],
        "urban": [
          82,
          4,
          14
        ],
        "rural": [
          89,
          4,
          8
        ],
        "owner": [
          98,
          0,
          2
        ],
        "renter": [
          72,
          7,
          21
        ],
        "permission": [
          90,
          1,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          80,
          4,
          15
        ],
        "multiple": [
          96,
          2,
          3
        ],
        "male": [
          81,
          4,
          16
        ],
        "female": [
          85,
          4,
          11
        ],
        "young": [
          82,
          2,
          16
        ],
        "adult": [
          84,
          4,
          12
        ],
        "old": [
          82,
          4,
          14
        ],
        "fulltime": [
          84,
          5,
          11
        ],
        "parttime": [
          76,
          4,
          20
        ],
        "unemployed": [
          90,
          0,
          10
        ],
        "comfortable": [
          85,
          4,
          11
        ],
        "gettingby": [
          80,
          5,
          15
        ],
        "difficulty": [
          82,
          0,
          18
        ]
      },
      "homes": {
        "allresp": [
          80,
          5,
          15
        ],
        "urban": [
          80,
          5,
          16
        ],
        "rural": [
          84,
          4,
          12
        ],
        "owner": [
          98,
          0,
          2
        ],
        "renter": [
          66,
          8,
          26
        ],
        "permission": [
          90,
          1,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          80,
          4,
          15
        ],
        "multiple": [
          81,
          5,
          13
        ],
        "male": [
          78,
          4,
          18
        ],
        "female": [
          83,
          5,
          12
        ],
        "young": [
          82,
          3,
          16
        ],
        "adult": [
          81,
          5,
          14
        ],
        "old": [
          79,
          5,
          17
        ],
        "fulltime": [
          81,
          5,
          13
        ],
        "parttime": [
          73,
          6,
          21
        ],
        "unemployed": [
          90,
          0,
          10
        ],
        "comfortable": [
          82,
          4,
          14
        ],
        "gettingby": [
          78,
          5,
          17
        ],
        "difficulty": [
          80,
          0,
          20
        ]
      }
    },
    "reasons": {
      "askedtoleave": 54,
      "family": 7,
      "money": 21,
      "death": 16,
      "government": 5,
      "companies": 18,
      "customary": -1
    }
  },
  "DO": {
    "insecurity": {
      "allprop": {
        "allresp": [
          68,
          28,
          5
        ],
        "urban": [
          67,
          29,
          4
        ],
        "rural": [
          69,
          22,
          8
        ],
        "owner": [
          82,
          12,
          6
        ],
        "renter": [
          64,
          34,
          2
        ],
        "permission": [
          57,
          38,
          5
        ],
        "formal": [
          69,
          27,
          4
        ],
        "informal": [
          69,
          27,
          4
        ],
        "nodocs": [
          61,
          33,
          6
        ],
        "sole": [
          69,
          25,
          5
        ],
        "multiple": [
          61,
          37,
          2
        ],
        "male": [
          64,
          31,
          5
        ],
        "female": [
          72,
          24,
          4
        ],
        "young": [
          64,
          34,
          2
        ],
        "adult": [
          68,
          29,
          3
        ],
        "old": [
          71,
          19,
          10
        ],
        "fulltime": [
          67,
          29,
          4
        ],
        "parttime": [
          67,
          30,
          3
        ],
        "unemployed": [
          61,
          37,
          2
        ],
        "comfortable": [
          76,
          20,
          4
        ],
        "gettingby": [
          75,
          20,
          5
        ],
        "difficulty": [
          62,
          36,
          2
        ]
      },
      "homes": {
        "allresp": [
          71,
          25,
          4
        ],
        "urban": [
          70,
          26,
          4
        ],
        "rural": [
          72,
          20,
          8
        ],
        "owner": [
          85,
          9,
          6
        ],
        "renter": [
          65,
          33,
          2
        ],
        "permission": [
          62,
          34,
          5
        ],
        "formal": [
          72,
          23,
          4
        ],
        "informal": [
          70,
          27,
          4
        ],
        "nodocs": [
          64,
          31,
          5
        ],
        "sole": [
          69,
          25,
          5
        ],
        "multiple": [
          77,
          22,
          2
        ],
        "male": [
          67,
          28,
          5
        ],
        "female": [
          74,
          22,
          4
        ],
        "young": [
          68,
          30,
          2
        ],
        "adult": [
          71,
          26,
          3
        ],
        "old": [
          73,
          17,
          10
        ],
        "fulltime": [
          71,
          25,
          4
        ],
        "parttime": [
          70,
          27,
          3
        ],
        "unemployed": [
          64,
          34,
          2
        ],
        "comfortable": [
          78,
          18,
          4
        ],
        "gettingby": [
          78,
          17,
          5
        ],
        "difficulty": [
          65,
          33,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          73,
          10,
          17
        ],
        "urban": [
          76,
          10,
          14
        ],
        "rural": [
          53,
          14,
          33
        ],
        "owner": [
          81,
          7,
          12
        ],
        "renter": [
          73,
          10,
          17
        ],
        "permission": [
          67,
          13,
          21
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          69,
          11,
          19
        ],
        "multiple": [
          89,
          6,
          5
        ],
        "male": [
          79,
          6,
          15
        ],
        "female": [
          67,
          14,
          19
        ],
        "young": [
          78,
          7,
          15
        ],
        "adult": [
          73,
          11,
          16
        ],
        "old": [
          69,
          11,
          21
        ],
        "fulltime": [
          79,
          7,
          15
        ],
        "parttime": [
          72,
          12,
          16
        ],
        "unemployed": [
          72,
          16,
          12
        ],
        "comfortable": [
          80,
          3,
          17
        ],
        "gettingby": [
          82,
          10,
          9
        ],
        "difficulty": [
          67,
          12,
          21
        ]
      },
      "homes": {
        "allresp": [
          71,
          11,
          18
        ],
        "urban": [
          74,
          10,
          16
        ],
        "rural": [
          53,
          14,
          33
        ],
        "owner": [
          79,
          8,
          13
        ],
        "renter": [
          71,
          11,
          18
        ],
        "permission": [
          65,
          13,
          22
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          69,
          11,
          19
        ],
        "multiple": [
          79,
          9,
          12
        ],
        "male": [
          77,
          7,
          16
        ],
        "female": [
          65,
          15,
          20
        ],
        "young": [
          76,
          8,
          16
        ],
        "adult": [
          71,
          11,
          18
        ],
        "old": [
          67,
          12,
          21
        ],
        "fulltime": [
          76,
          7,
          17
        ],
        "parttime": [
          71,
          12,
          17
        ],
        "unemployed": [
          71,
          17,
          12
        ],
        "comfortable": [
          78,
          3,
          19
        ],
        "gettingby": [
          79,
          10,
          11
        ],
        "difficulty": [
          66,
          13,
          21
        ]
      }
    },
    "reasons": {
      "askedtoleave": 79,
      "family": 42,
      "money": 58,
      "death": 28,
      "government": 15,
      "companies": 12,
      "customary": 9
    }
  },
  "EG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          79,
          19,
          3
        ],
        "urban": [
          77,
          20,
          3
        ],
        "rural": [
          84,
          13,
          3
        ],
        "owner": [
          95,
          5,
          0
        ],
        "renter": [
          51,
          46,
          3
        ],
        "permission": [
          79,
          16,
          5
        ],
        "formal": [
          81,
          16,
          3
        ],
        "informal": [
          72,
          28,
          0
        ],
        "nodocs": [
          62,
          33,
          5
        ],
        "sole": [
          79,
          19,
          3
        ],
        "multiple": [
          77,
          20,
          3
        ],
        "male": [
          84,
          14,
          3
        ],
        "female": [
          74,
          23,
          3
        ],
        "young": [
          77,
          20,
          3
        ],
        "adult": [
          76,
          21,
          3
        ],
        "old": [
          88,
          11,
          1
        ],
        "fulltime": [
          82,
          16,
          3
        ],
        "parttime": [
          77,
          16,
          6
        ],
        "unemployed": [
          62,
          38,
          0
        ],
        "comfortable": [
          90,
          10,
          0
        ],
        "gettingby": [
          84,
          14,
          2
        ],
        "difficulty": [
          70,
          26,
          4
        ]
      },
      "homes": {
        "allresp": [
          79,
          18,
          3
        ],
        "urban": [
          78,
          19,
          3
        ],
        "rural": [
          86,
          12,
          3
        ],
        "owner": [
          96,
          4,
          0
        ],
        "renter": [
          51,
          46,
          3
        ],
        "permission": [
          80,
          15,
          5
        ],
        "formal": [
          82,
          15,
          3
        ],
        "informal": [
          72,
          28,
          0
        ],
        "nodocs": [
          63,
          33,
          5
        ],
        "sole": [
          79,
          19,
          3
        ],
        "multiple": [
          86,
          11,
          3
        ],
        "male": [
          84,
          13,
          3
        ],
        "female": [
          75,
          23,
          3
        ],
        "young": [
          79,
          19,
          3
        ],
        "adult": [
          76,
          21,
          3
        ],
        "old": [
          89,
          10,
          1
        ],
        "fulltime": [
          82,
          15,
          3
        ],
        "parttime": [
          77,
          16,
          6
        ],
        "unemployed": [
          66,
          34,
          0
        ],
        "comfortable": [
          90,
          10,
          0
        ],
        "gettingby": [
          85,
          14,
          2
        ],
        "difficulty": [
          71,
          25,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          82,
          7,
          11
        ],
        "urban": [
          83,
          6,
          11
        ],
        "rural": [
          75,
          13,
          12
        ],
        "owner": [
          89,
          5,
          6
        ],
        "renter": [
          93,
          0,
          7
        ],
        "permission": [
          75,
          12,
          13
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          7,
          12
        ],
        "multiple": [
          93,
          6,
          1
        ],
        "male": [
          88,
          5,
          8
        ],
        "female": [
          76,
          9,
          15
        ],
        "young": [
          78,
          4,
          17
        ],
        "adult": [
          81,
          9,
          10
        ],
        "old": [
          88,
          4,
          8
        ],
        "fulltime": [
          86,
          4,
          10
        ],
        "parttime": [
          70,
          21,
          9
        ],
        "unemployed": [
          78,
          8,
          14
        ],
        "comfortable": [
          92,
          1,
          6
        ],
        "gettingby": [
          83,
          9,
          8
        ],
        "difficulty": [
          77,
          7,
          16
        ]
      },
      "homes": {
        "allresp": [
          81,
          7,
          12
        ],
        "urban": [
          82,
          6,
          11
        ],
        "rural": [
          74,
          14,
          12
        ],
        "owner": [
          89,
          5,
          6
        ],
        "renter": [
          93,
          0,
          7
        ],
        "permission": [
          74,
          12,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          7,
          12
        ],
        "multiple": [
          87,
          8,
          5
        ],
        "male": [
          88,
          5,
          8
        ],
        "female": [
          75,
          9,
          15
        ],
        "young": [
          77,
          4,
          18
        ],
        "adult": [
          81,
          9,
          10
        ],
        "old": [
          88,
          5,
          8
        ],
        "fulltime": [
          86,
          4,
          10
        ],
        "parttime": [
          70,
          21,
          9
        ],
        "unemployed": [
          78,
          8,
          14
        ],
        "comfortable": [
          92,
          1,
          6
        ],
        "gettingby": [
          83,
          9,
          8
        ],
        "difficulty": [
          76,
          7,
          17
        ]
      }
    },
    "reasons": {
      "askedtoleave": 72,
      "family": 35,
      "money": 32,
      "death": 18,
      "government": 2,
      "companies": 1,
      "customary": -1
    }
  },
  "EC": {
    "insecurity": {
      "allprop": {
        "allresp": [
          69,
          19,
          12
        ],
        "urban": [
          69,
          17,
          14
        ],
        "rural": [
          69,
          24,
          6
        ],
        "owner": [
          80,
          8,
          12
        ],
        "renter": [
          53,
          39,
          8
        ],
        "permission": [
          66,
          20,
          14
        ],
        "formal": [
          76,
          13,
          11
        ],
        "informal": [
          57,
          37,
          6
        ],
        "nodocs": [
          58,
          26,
          16
        ],
        "sole": [
          69,
          18,
          13
        ],
        "multiple": [
          66,
          25,
          8
        ],
        "male": [
          69,
          20,
          10
        ],
        "female": [
          68,
          17,
          15
        ],
        "young": [
          66,
          26,
          8
        ],
        "adult": [
          71,
          19,
          11
        ],
        "old": [
          67,
          12,
          21
        ],
        "fulltime": [
          71,
          19,
          10
        ],
        "parttime": [
          60,
          24,
          16
        ],
        "unemployed": [
          71,
          16,
          13
        ],
        "comfortable": [
          82,
          11,
          7
        ],
        "gettingby": [
          74,
          15,
          11
        ],
        "difficulty": [
          63,
          23,
          15
        ]
      },
      "homes": {
        "allresp": [
          70,
          18,
          12
        ],
        "urban": [
          69,
          17,
          14
        ],
        "rural": [
          72,
          22,
          6
        ],
        "owner": [
          83,
          6,
          11
        ],
        "renter": [
          53,
          39,
          8
        ],
        "permission": [
          66,
          20,
          14
        ],
        "formal": [
          77,
          12,
          11
        ],
        "informal": [
          59,
          35,
          6
        ],
        "nodocs": [
          59,
          25,
          15
        ],
        "sole": [
          69,
          18,
          13
        ],
        "multiple": [
          82,
          13,
          5
        ],
        "male": [
          71,
          19,
          10
        ],
        "female": [
          69,
          16,
          14
        ],
        "young": [
          66,
          25,
          8
        ],
        "adult": [
          71,
          18,
          11
        ],
        "old": [
          69,
          10,
          21
        ],
        "fulltime": [
          72,
          18,
          9
        ],
        "parttime": [
          60,
          24,
          16
        ],
        "unemployed": [
          72,
          16,
          12
        ],
        "comfortable": [
          82,
          11,
          7
        ],
        "gettingby": [
          75,
          14,
          11
        ],
        "difficulty": [
          64,
          22,
          14
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          61,
          6,
          33
        ],
        "urban": [
          61,
          6,
          33
        ],
        "rural": [
          63,
          5,
          32
        ],
        "owner": [
          94,
          4,
          2
        ],
        "renter": [
          50,
          14,
          37
        ],
        "permission": [
          49,
          4,
          47
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          59,
          6,
          35
        ],
        "multiple": [
          89,
          5,
          6
        ],
        "male": [
          65,
          7,
          28
        ],
        "female": [
          58,
          5,
          37
        ],
        "young": [
          42,
          6,
          52
        ],
        "adult": [
          62,
          6,
          32
        ],
        "old": [
          79,
          5,
          16
        ],
        "fulltime": [
          66,
          6,
          29
        ],
        "parttime": [
          56,
          17,
          27
        ],
        "unemployed": [
          65,
          5,
          30
        ],
        "comfortable": [
          65,
          5,
          30
        ],
        "gettingby": [
          59,
          5,
          36
        ],
        "difficulty": [
          63,
          6,
          31
        ]
      },
      "homes": {
        "allresp": [
          59,
          6,
          35
        ],
        "urban": [
          59,
          6,
          35
        ],
        "rural": [
          60,
          4,
          36
        ],
        "owner": [
          94,
          4,
          2
        ],
        "renter": [
          50,
          14,
          37
        ],
        "permission": [
          46,
          4,
          50
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          59,
          6,
          35
        ],
        "multiple": [
          58,
          8,
          35
        ],
        "male": [
          62,
          7,
          31
        ],
        "female": [
          57,
          5,
          39
        ],
        "young": [
          38,
          5,
          57
        ],
        "adult": [
          60,
          6,
          34
        ],
        "old": [
          78,
          5,
          17
        ],
        "fulltime": [
          62,
          6,
          32
        ],
        "parttime": [
          55,
          17,
          28
        ],
        "unemployed": [
          63,
          6,
          31
        ],
        "comfortable": [
          61,
          5,
          34
        ],
        "gettingby": [
          56,
          5,
          39
        ],
        "difficulty": [
          61,
          7,
          32
        ]
      }
    },
    "reasons": {
      "askedtoleave": 21,
      "family": 11,
      "money": 5,
      "death": 6,
      "government": 3,
      "companies": 1,
      "customary": 0
    }
  },
  "SV": {
    "insecurity": {
      "allprop": {
        "allresp": [
          65,
          26,
          8
        ],
        "urban": [
          67,
          26,
          8
        ],
        "rural": [
          63,
          27,
          10
        ],
        "owner": [
          77,
          16,
          7
        ],
        "renter": [
          45,
          44,
          12
        ],
        "permission": [
          66,
          26,
          8
        ],
        "formal": [
          70,
          22,
          8
        ],
        "informal": [
          55,
          35,
          10
        ],
        "nodocs": [
          42,
          45,
          12
        ],
        "sole": [
          66,
          25,
          9
        ],
        "multiple": [
          64,
          31,
          5
        ],
        "male": [
          70,
          24,
          6
        ],
        "female": [
          62,
          28,
          10
        ],
        "young": [
          69,
          25,
          6
        ],
        "adult": [
          67,
          27,
          6
        ],
        "old": [
          58,
          25,
          17
        ],
        "fulltime": [
          72,
          24,
          4
        ],
        "parttime": [
          63,
          28,
          10
        ],
        "unemployed": [
          54,
          39,
          7
        ],
        "comfortable": [
          78,
          17,
          5
        ],
        "gettingby": [
          76,
          17,
          7
        ],
        "difficulty": [
          58,
          34,
          8
        ]
      },
      "homes": {
        "allresp": [
          68,
          23,
          8
        ],
        "urban": [
          69,
          23,
          7
        ],
        "rural": [
          67,
          24,
          10
        ],
        "owner": [
          80,
          13,
          7
        ],
        "renter": [
          46,
          42,
          12
        ],
        "permission": [
          70,
          23,
          7
        ],
        "formal": [
          74,
          19,
          7
        ],
        "informal": [
          55,
          35,
          10
        ],
        "nodocs": [
          43,
          45,
          12
        ],
        "sole": [
          66,
          25,
          9
        ],
        "multiple": [
          81,
          16,
          3
        ],
        "male": [
          73,
          21,
          5
        ],
        "female": [
          65,
          25,
          10
        ],
        "young": [
          73,
          22,
          6
        ],
        "adult": [
          70,
          24,
          6
        ],
        "old": [
          61,
          23,
          16
        ],
        "fulltime": [
          76,
          20,
          4
        ],
        "parttime": [
          65,
          26,
          10
        ],
        "unemployed": [
          58,
          35,
          7
        ],
        "comfortable": [
          80,
          15,
          5
        ],
        "gettingby": [
          80,
          13,
          7
        ],
        "difficulty": [
          59,
          32,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          77,
          15,
          8
        ],
        "urban": [
          78,
          16,
          6
        ],
        "rural": [
          75,
          14,
          11
        ],
        "owner": [
          91,
          7,
          2
        ],
        "renter": [
          47,
          35,
          17
        ],
        "permission": [
          81,
          13,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          73,
          17,
          9
        ],
        "multiple": [
          95,
          5,
          0
        ],
        "male": [
          84,
          10,
          6
        ],
        "female": [
          71,
          19,
          9
        ],
        "young": [
          77,
          15,
          7
        ],
        "adult": [
          76,
          15,
          9
        ],
        "old": [
          79,
          16,
          6
        ],
        "fulltime": [
          78,
          16,
          6
        ],
        "parttime": [
          77,
          16,
          7
        ],
        "unemployed": [
          75,
          15,
          10
        ],
        "comfortable": [
          75,
          14,
          11
        ],
        "gettingby": [
          87,
          11,
          2
        ],
        "difficulty": [
          73,
          17,
          10
        ]
      },
      "homes": {
        "allresp": [
          76,
          16,
          8
        ],
        "urban": [
          76,
          16,
          7
        ],
        "rural": [
          75,
          15,
          11
        ],
        "owner": [
          91,
          7,
          2
        ],
        "renter": [
          44,
          37,
          19
        ],
        "permission": [
          80,
          14,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          73,
          17,
          9
        ],
        "multiple": [
          89,
          8,
          3
        ],
        "male": [
          82,
          11,
          7
        ],
        "female": [
          71,
          20,
          10
        ],
        "young": [
          77,
          15,
          8
        ],
        "adult": [
          74,
          16,
          10
        ],
        "old": [
          78,
          16,
          6
        ],
        "fulltime": [
          77,
          16,
          7
        ],
        "parttime": [
          75,
          18,
          7
        ],
        "unemployed": [
          74,
          16,
          10
        ],
        "comfortable": [
          75,
          14,
          12
        ],
        "gettingby": [
          85,
          12,
          3
        ],
        "difficulty": [
          72,
          18,
          10
        ]
      }
    },
    "reasons": {
      "askedtoleave": 77,
      "family": 38,
      "money": 66,
      "death": 42,
      "government": 26,
      "companies": 18,
      "customary": 24
    }
  },
  "EE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          83,
          11,
          5
        ],
        "urban": [
          82,
          12,
          6
        ],
        "rural": [
          86,
          9,
          5
        ],
        "owner": [
          92,
          5,
          3
        ],
        "renter": [
          55,
          38,
          7
        ],
        "permission": [
          80,
          13,
          7
        ],
        "formal": [
          86,
          10,
          4
        ],
        "informal": [
          64,
          25,
          11
        ],
        "nodocs": [
          54,
          19,
          27
        ],
        "sole": [
          86,
          10,
          4
        ],
        "multiple": [
          83,
          14,
          3
        ],
        "male": [
          81,
          14,
          5
        ],
        "female": [
          85,
          9,
          6
        ],
        "young": [
          64,
          19,
          16
        ],
        "adult": [
          82,
          13,
          5
        ],
        "old": [
          89,
          7,
          4
        ],
        "fulltime": [
          84,
          13,
          3
        ],
        "parttime": [
          77,
          10,
          13
        ],
        "unemployed": [
          48,
          40,
          12
        ],
        "comfortable": [
          85,
          11,
          4
        ],
        "gettingby": [
          86,
          10,
          4
        ],
        "difficulty": [
          75,
          16,
          9
        ]
      },
      "homes": {
        "allresp": [
          85,
          10,
          5
        ],
        "urban": [
          83,
          12,
          5
        ],
        "rural": [
          88,
          7,
          5
        ],
        "owner": [
          93,
          4,
          2
        ],
        "renter": [
          57,
          36,
          7
        ],
        "permission": [
          81,
          12,
          7
        ],
        "formal": [
          88,
          9,
          3
        ],
        "informal": [
          69,
          22,
          9
        ],
        "nodocs": [
          57,
          19,
          24
        ],
        "sole": [
          86,
          10,
          4
        ],
        "multiple": [
          89,
          10,
          1
        ],
        "male": [
          82,
          13,
          5
        ],
        "female": [
          87,
          7,
          5
        ],
        "young": [
          67,
          18,
          15
        ],
        "adult": [
          83,
          12,
          4
        ],
        "old": [
          91,
          6,
          3
        ],
        "fulltime": [
          85,
          12,
          3
        ],
        "parttime": [
          81,
          10,
          9
        ],
        "unemployed": [
          48,
          40,
          12
        ],
        "comfortable": [
          86,
          10,
          3
        ],
        "gettingby": [
          88,
          9,
          4
        ],
        "difficulty": [
          77,
          15,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          6,
          5
        ],
        "urban": [
          87,
          7,
          6
        ],
        "rural": [
          93,
          4,
          3
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          78,
          18,
          4
        ],
        "permission": [
          76,
          12,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          89,
          6,
          5
        ],
        "female": [
          89,
          6,
          5
        ],
        "young": [
          78,
          4,
          18
        ],
        "adult": [
          89,
          6,
          5
        ],
        "old": [
          92,
          6,
          2
        ],
        "fulltime": [
          90,
          5,
          5
        ],
        "parttime": [
          88,
          2,
          9
        ],
        "unemployed": [
          81,
          19,
          0
        ],
        "comfortable": [
          91,
          3,
          6
        ],
        "gettingby": [
          89,
          7,
          4
        ],
        "difficulty": [
          89,
          8,
          3
        ]
      },
      "homes": {
        "allresp": [
          87,
          7,
          6
        ],
        "urban": [
          85,
          9,
          7
        ],
        "rural": [
          91,
          4,
          5
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          73,
          22,
          5
        ],
        "permission": [
          72,
          12,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          89,
          5,
          5
        ],
        "male": [
          86,
          7,
          6
        ],
        "female": [
          87,
          7,
          6
        ],
        "young": [
          77,
          4,
          19
        ],
        "adult": [
          86,
          8,
          6
        ],
        "old": [
          89,
          7,
          3
        ],
        "fulltime": [
          88,
          6,
          6
        ],
        "parttime": [
          88,
          2,
          9
        ],
        "unemployed": [
          74,
          24,
          2
        ],
        "comfortable": [
          90,
          3,
          7
        ],
        "gettingby": [
          86,
          8,
          6
        ],
        "difficulty": [
          88,
          10,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 62,
      "family": 23,
      "money": 34,
      "death": 11,
      "government": 5,
      "companies": 5,
      "customary": -1
    }
  },
  "SZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          52,
          42,
          6
        ],
        "urban": [
          44,
          52,
          4
        ],
        "rural": [
          57,
          36,
          6
        ],
        "owner": [
          61,
          32,
          6
        ],
        "renter": [
          28,
          68,
          4
        ],
        "permission": [
          51,
          44,
          5
        ],
        "formal": [
          48,
          47,
          6
        ],
        "informal": [
          63,
          30,
          7
        ],
        "nodocs": [
          56,
          39,
          5
        ],
        "sole": [
          63,
          31,
          6
        ],
        "multiple": [
          36,
          60,
          4
        ],
        "male": [
          55,
          42,
          3
        ],
        "female": [
          50,
          42,
          8
        ],
        "young": [
          57,
          39,
          4
        ],
        "adult": [
          47,
          48,
          5
        ],
        "old": [
          68,
          22,
          10
        ],
        "fulltime": [
          52,
          44,
          4
        ],
        "parttime": [
          45,
          49,
          6
        ],
        "unemployed": [
          48,
          48,
          4
        ],
        "comfortable": [
          70,
          29,
          2
        ],
        "gettingby": [
          53,
          41,
          6
        ],
        "difficulty": [
          48,
          46,
          6
        ]
      },
      "homes": {
        "allresp": [
          59,
          35,
          6
        ],
        "urban": [
          52,
          43,
          5
        ],
        "rural": [
          64,
          30,
          6
        ],
        "owner": [
          72,
          23,
          6
        ],
        "renter": [
          36,
          59,
          5
        ],
        "permission": [
          57,
          38,
          5
        ],
        "formal": [
          60,
          35,
          6
        ],
        "informal": [
          64,
          29,
          6
        ],
        "nodocs": [
          54,
          41,
          5
        ],
        "sole": [
          63,
          31,
          6
        ],
        "multiple": [
          55,
          41,
          4
        ],
        "male": [
          61,
          36,
          3
        ],
        "female": [
          58,
          34,
          8
        ],
        "young": [
          63,
          34,
          4
        ],
        "adult": [
          55,
          40,
          5
        ],
        "old": [
          73,
          17,
          10
        ],
        "fulltime": [
          60,
          36,
          5
        ],
        "parttime": [
          54,
          40,
          6
        ],
        "unemployed": [
          55,
          41,
          4
        ],
        "comfortable": [
          77,
          21,
          2
        ],
        "gettingby": [
          62,
          32,
          6
        ],
        "difficulty": [
          54,
          40,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          62,
          17,
          21
        ],
        "urban": [
          63,
          17,
          21
        ],
        "rural": [
          61,
          18,
          21
        ],
        "owner": [
          69,
          16,
          15
        ],
        "renter": [
          55,
          12,
          34
        ],
        "permission": [
          60,
          19,
          20
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          53,
          22,
          25
        ],
        "multiple": [
          80,
          10,
          10
        ],
        "male": [
          62,
          15,
          23
        ],
        "female": [
          62,
          20,
          19
        ],
        "young": [
          55,
          17,
          28
        ],
        "adult": [
          64,
          17,
          20
        ],
        "old": [
          65,
          22,
          14
        ],
        "fulltime": [
          61,
          22,
          17
        ],
        "parttime": [
          76,
          9,
          15
        ],
        "unemployed": [
          51,
          17,
          32
        ],
        "comfortable": [
          69,
          21,
          10
        ],
        "gettingby": [
          65,
          18,
          17
        ],
        "difficulty": [
          59,
          17,
          24
        ]
      },
      "homes": {
        "allresp": [
          56,
          21,
          23
        ],
        "urban": [
          56,
          19,
          24
        ],
        "rural": [
          56,
          21,
          23
        ],
        "owner": [
          65,
          19,
          16
        ],
        "renter": [
          44,
          14,
          42
        ],
        "permission": [
          54,
          23,
          22
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          53,
          22,
          25
        ],
        "multiple": [
          64,
          19,
          17
        ],
        "male": [
          56,
          20,
          25
        ],
        "female": [
          56,
          22,
          22
        ],
        "young": [
          48,
          20,
          31
        ],
        "adult": [
          58,
          20,
          22
        ],
        "old": [
          60,
          25,
          15
        ],
        "fulltime": [
          56,
          24,
          19
        ],
        "parttime": [
          68,
          12,
          20
        ],
        "unemployed": [
          47,
          21,
          33
        ],
        "comfortable": [
          66,
          23,
          12
        ],
        "gettingby": [
          58,
          22,
          20
        ],
        "difficulty": [
          54,
          19,
          27
        ]
      }
    },
    "reasons": {
      "askedtoleave": 65,
      "family": 56,
      "money": 53,
      "death": 47,
      "government": 23,
      "companies": 17,
      "customary": 38
    }
  },
  "ET": {
    "insecurity": {
      "allprop": {
        "allresp": [
          71,
          27,
          3
        ],
        "urban": [
          61,
          37,
          3
        ],
        "rural": [
          76,
          22,
          2
        ],
        "owner": [
          79,
          19,
          3
        ],
        "renter": [
          39,
          56,
          5
        ],
        "permission": [
          77,
          22,
          1
        ],
        "formal": [
          73,
          25,
          2
        ],
        "informal": [
          77,
          22,
          1
        ],
        "nodocs": [
          61,
          36,
          4
        ],
        "sole": [
          71,
          26,
          3
        ],
        "multiple": [
          70,
          30,
          1
        ],
        "male": [
          69,
          28,
          3
        ],
        "female": [
          73,
          25,
          2
        ],
        "young": [
          67,
          31,
          2
        ],
        "adult": [
          71,
          26,
          3
        ],
        "old": [
          79,
          19,
          1
        ],
        "fulltime": [
          74,
          24,
          2
        ],
        "parttime": [
          66,
          32,
          2
        ],
        "unemployed": [
          55,
          38,
          6
        ],
        "comfortable": [
          69,
          30,
          0
        ],
        "gettingby": [
          80,
          19,
          1
        ],
        "difficulty": [
          66,
          30,
          3
        ]
      },
      "homes": {
        "allresp": [
          73,
          25,
          2
        ],
        "urban": [
          63,
          34,
          3
        ],
        "rural": [
          77,
          21,
          2
        ],
        "owner": [
          81,
          17,
          2
        ],
        "renter": [
          40,
          54,
          5
        ],
        "permission": [
          78,
          21,
          1
        ],
        "formal": [
          75,
          23,
          2
        ],
        "informal": [
          79,
          20,
          1
        ],
        "nodocs": [
          62,
          35,
          3
        ],
        "sole": [
          71,
          26,
          3
        ],
        "multiple": [
          79,
          21,
          0
        ],
        "male": [
          71,
          27,
          3
        ],
        "female": [
          75,
          23,
          2
        ],
        "young": [
          68,
          30,
          2
        ],
        "adult": [
          73,
          24,
          3
        ],
        "old": [
          81,
          18,
          1
        ],
        "fulltime": [
          76,
          22,
          2
        ],
        "parttime": [
          67,
          31,
          2
        ],
        "unemployed": [
          56,
          38,
          6
        ],
        "comfortable": [
          75,
          25,
          0
        ],
        "gettingby": [
          81,
          18,
          1
        ],
        "difficulty": [
          68,
          29,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          78,
          5,
          17
        ],
        "urban": [
          79,
          5,
          16
        ],
        "rural": [
          77,
          5,
          17
        ],
        "owner": [
          84,
          6,
          10
        ],
        "renter": [
          50,
          7,
          43
        ],
        "permission": [
          84,
          4,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          6,
          20
        ],
        "multiple": [
          96,
          4,
          0
        ],
        "male": [
          81,
          4,
          15
        ],
        "female": [
          75,
          6,
          19
        ],
        "young": [
          75,
          7,
          18
        ],
        "adult": [
          77,
          5,
          18
        ],
        "old": [
          86,
          2,
          11
        ],
        "fulltime": [
          82,
          5,
          13
        ],
        "parttime": [
          67,
          8,
          26
        ],
        "unemployed": [
          68,
          5,
          26
        ],
        "comfortable": [
          84,
          5,
          11
        ],
        "gettingby": [
          86,
          2,
          13
        ],
        "difficulty": [
          73,
          7,
          19
        ]
      },
      "homes": {
        "allresp": [
          76,
          5,
          19
        ],
        "urban": [
          77,
          6,
          17
        ],
        "rural": [
          76,
          5,
          19
        ],
        "owner": [
          83,
          6,
          10
        ],
        "renter": [
          46,
          7,
          47
        ],
        "permission": [
          82,
          4,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          6,
          20
        ],
        "multiple": [
          86,
          5,
          9
        ],
        "male": [
          80,
          4,
          16
        ],
        "female": [
          73,
          6,
          21
        ],
        "young": [
          73,
          7,
          19
        ],
        "adult": [
          75,
          5,
          20
        ],
        "old": [
          85,
          3,
          12
        ],
        "fulltime": [
          80,
          5,
          14
        ],
        "parttime": [
          65,
          8,
          27
        ],
        "unemployed": [
          68,
          5,
          26
        ],
        "comfortable": [
          81,
          6,
          13
        ],
        "gettingby": [
          83,
          2,
          16
        ],
        "difficulty": [
          72,
          7,
          20
        ]
      }
    },
    "reasons": {
      "askedtoleave": 68,
      "family": 29,
      "money": 52,
      "death": 22,
      "government": 27,
      "companies": 10,
      "customary": 13
    }
  },
  "FI": {
    "insecurity": {
      "allprop": {
        "allresp": [
          94,
          4,
          1
        ],
        "urban": [
          94,
          5,
          1
        ],
        "rural": [
          96,
          3,
          1
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          92,
          7,
          1
        ],
        "permission": [
          91,
          7,
          2
        ],
        "formal": [
          95,
          4,
          1
        ],
        "informal": [
          93,
          6,
          0
        ],
        "nodocs": [
          90,
          7,
          3
        ],
        "sole": [
          95,
          4,
          1
        ],
        "multiple": [
          94,
          6,
          1
        ],
        "male": [
          94,
          4,
          2
        ],
        "female": [
          95,
          5,
          0
        ],
        "young": [
          88,
          12,
          0
        ],
        "adult": [
          95,
          4,
          0
        ],
        "old": [
          95,
          3,
          2
        ],
        "fulltime": [
          97,
          3,
          0
        ],
        "parttime": [
          85,
          15,
          0
        ],
        "unemployed": [
          90,
          10,
          0
        ],
        "comfortable": [
          97,
          3,
          0
        ],
        "gettingby": [
          95,
          3,
          1
        ],
        "difficulty": [
          79,
          18,
          4
        ]
      },
      "homes": {
        "allresp": [
          95,
          4,
          1
        ],
        "urban": [
          95,
          4,
          1
        ],
        "rural": [
          98,
          1,
          1
        ],
        "owner": [
          97,
          1,
          1
        ],
        "renter": [
          92,
          7,
          1
        ],
        "permission": [
          92,
          6,
          2
        ],
        "formal": [
          95,
          3,
          1
        ],
        "informal": [
          96,
          4,
          0
        ],
        "nodocs": [
          90,
          7,
          3
        ],
        "sole": [
          95,
          4,
          1
        ],
        "multiple": [
          98,
          2,
          0
        ],
        "male": [
          95,
          3,
          2
        ],
        "female": [
          96,
          4,
          0
        ],
        "young": [
          88,
          12,
          0
        ],
        "adult": [
          96,
          4,
          0
        ],
        "old": [
          96,
          2,
          2
        ],
        "fulltime": [
          97,
          2,
          0
        ],
        "parttime": [
          90,
          10,
          0
        ],
        "unemployed": [
          91,
          9,
          0
        ],
        "comfortable": [
          98,
          2,
          0
        ],
        "gettingby": [
          96,
          3,
          1
        ],
        "difficulty": [
          82,
          14,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          13,
          2
        ],
        "urban": [
          86,
          12,
          2
        ],
        "rural": [
          83,
          14,
          3
        ],
        "owner": [
          88,
          12,
          0
        ],
        "renter": [
          91,
          7,
          2
        ],
        "permission": [
          59,
          29,
          11
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          15,
          3
        ],
        "multiple": [
          94,
          5,
          1
        ],
        "male": [
          88,
          10,
          1
        ],
        "female": [
          83,
          15,
          3
        ],
        "young": [
          85,
          12,
          3
        ],
        "adult": [
          91,
          7,
          2
        ],
        "old": [
          80,
          18,
          2
        ],
        "fulltime": [
          90,
          7,
          3
        ],
        "parttime": [
          84,
          16,
          0
        ],
        "unemployed": [
          92,
          8,
          0
        ],
        "comfortable": [
          90,
          9,
          1
        ],
        "gettingby": [
          81,
          16,
          3
        ],
        "difficulty": [
          87,
          13,
          0
        ]
      },
      "homes": {
        "allresp": [
          83,
          15,
          2
        ],
        "urban": [
          84,
          14,
          2
        ],
        "rural": [
          80,
          17,
          3
        ],
        "owner": [
          86,
          14,
          0
        ],
        "renter": [
          90,
          8,
          2
        ],
        "permission": [
          50,
          38,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          15,
          3
        ],
        "multiple": [
          83,
          16,
          1
        ],
        "male": [
          86,
          12,
          1
        ],
        "female": [
          79,
          18,
          3
        ],
        "young": [
          85,
          12,
          3
        ],
        "adult": [
          88,
          9,
          2
        ],
        "old": [
          76,
          21,
          2
        ],
        "fulltime": [
          88,
          9,
          3
        ],
        "parttime": [
          82,
          18,
          0
        ],
        "unemployed": [
          92,
          8,
          0
        ],
        "comfortable": [
          87,
          12,
          1
        ],
        "gettingby": [
          80,
          17,
          3
        ],
        "difficulty": [
          84,
          16,
          0
        ]
      }
    },
    "reasons": {
      "askedtoleave": 61,
      "family": 9,
      "money": 32,
      "death": 17,
      "government": 7,
      "companies": 13,
      "customary": -1
    }
  },
  "FR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          80,
          18,
          2
        ],
        "urban": [
          79,
          19,
          2
        ],
        "rural": [
          85,
          11,
          4
        ],
        "owner": [
          88,
          11,
          1
        ],
        "renter": [
          67,
          28,
          5
        ],
        "permission": [
          80,
          19,
          2
        ],
        "formal": [
          81,
          17,
          2
        ],
        "informal": [
          64,
          31,
          5
        ],
        "nodocs": [
          65,
          27,
          8
        ],
        "sole": [
          80,
          17,
          2
        ],
        "multiple": [
          77,
          21,
          2
        ],
        "male": [
          79,
          18,
          3
        ],
        "female": [
          81,
          18,
          2
        ],
        "young": [
          83,
          15,
          1
        ],
        "adult": [
          75,
          22,
          3
        ],
        "old": [
          85,
          13,
          2
        ],
        "fulltime": [
          78,
          20,
          2
        ],
        "parttime": [
          76,
          21,
          3
        ],
        "unemployed": [
          78,
          20,
          2
        ],
        "comfortable": [
          86,
          12,
          1
        ],
        "gettingby": [
          79,
          19,
          2
        ],
        "difficulty": [
          72,
          23,
          4
        ]
      },
      "homes": {
        "allresp": [
          81,
          17,
          2
        ],
        "urban": [
          80,
          18,
          2
        ],
        "rural": [
          85,
          11,
          4
        ],
        "owner": [
          90,
          9,
          1
        ],
        "renter": [
          68,
          28,
          5
        ],
        "permission": [
          81,
          18,
          1
        ],
        "formal": [
          82,
          16,
          2
        ],
        "informal": [
          65,
          31,
          4
        ],
        "nodocs": [
          67,
          26,
          6
        ],
        "sole": [
          80,
          17,
          2
        ],
        "multiple": [
          83,
          16,
          2
        ],
        "male": [
          79,
          17,
          3
        ],
        "female": [
          82,
          17,
          2
        ],
        "young": [
          84,
          15,
          1
        ],
        "adult": [
          76,
          21,
          3
        ],
        "old": [
          86,
          13,
          2
        ],
        "fulltime": [
          80,
          18,
          2
        ],
        "parttime": [
          77,
          20,
          3
        ],
        "unemployed": [
          78,
          20,
          2
        ],
        "comfortable": [
          87,
          11,
          1
        ],
        "gettingby": [
          81,
          17,
          2
        ],
        "difficulty": [
          72,
          23,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          93,
          4,
          3
        ],
        "urban": [
          93,
          4,
          3
        ],
        "rural": [
          96,
          2,
          3
        ],
        "owner": [
          98,
          0,
          2
        ],
        "renter": [
          92,
          6,
          2
        ],
        "permission": [
          82,
          10,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          5,
          3
        ],
        "multiple": [
          97,
          0,
          2
        ],
        "male": [
          93,
          4,
          3
        ],
        "female": [
          93,
          4,
          3
        ],
        "young": [
          94,
          5,
          1
        ],
        "adult": [
          93,
          4,
          3
        ],
        "old": [
          93,
          4,
          3
        ],
        "fulltime": [
          95,
          3,
          2
        ],
        "parttime": [
          90,
          3,
          6
        ],
        "unemployed": [
          93,
          7,
          0
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          92,
          5,
          2
        ],
        "difficulty": [
          93,
          4,
          3
        ]
      },
      "homes": {
        "allresp": [
          92,
          5,
          3
        ],
        "urban": [
          91,
          6,
          3
        ],
        "rural": [
          96,
          2,
          3
        ],
        "owner": [
          97,
          1,
          2
        ],
        "renter": [
          91,
          7,
          2
        ],
        "permission": [
          80,
          12,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          5,
          3
        ],
        "multiple": [
          91,
          6,
          3
        ],
        "male": [
          91,
          5,
          3
        ],
        "female": [
          93,
          5,
          3
        ],
        "young": [
          93,
          6,
          1
        ],
        "adult": [
          91,
          5,
          3
        ],
        "old": [
          93,
          5,
          3
        ],
        "fulltime": [
          93,
          5,
          2
        ],
        "parttime": [
          90,
          3,
          7
        ],
        "unemployed": [
          91,
          9,
          0
        ],
        "comfortable": [
          93,
          4,
          3
        ],
        "gettingby": [
          91,
          6,
          2
        ],
        "difficulty": [
          92,
          4,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 56,
      "family": 29,
      "money": 54,
      "death": 20,
      "government": 9,
      "companies": 5,
      "customary": -1
    }
  },
  "GM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          65,
          24,
          11
        ],
        "urban": [
          66,
          25,
          9
        ],
        "rural": [
          63,
          20,
          16
        ],
        "owner": [
          69,
          23,
          8
        ],
        "renter": [
          47,
          43,
          10
        ],
        "permission": [
          66,
          21,
          13
        ],
        "formal": [
          68,
          22,
          10
        ],
        "informal": [
          67,
          17,
          16
        ],
        "nodocs": [
          54,
          32,
          14
        ],
        "sole": [
          69,
          22,
          9
        ],
        "multiple": [
          59,
          31,
          10
        ],
        "male": [
          69,
          22,
          9
        ],
        "female": [
          62,
          25,
          13
        ],
        "young": [
          66,
          23,
          11
        ],
        "adult": [
          63,
          26,
          11
        ],
        "old": [
          71,
          15,
          13
        ],
        "fulltime": [
          65,
          26,
          9
        ],
        "parttime": [
          64,
          25,
          11
        ],
        "unemployed": [
          62,
          21,
          17
        ],
        "comfortable": [
          66,
          27,
          8
        ],
        "gettingby": [
          68,
          21,
          11
        ],
        "difficulty": [
          65,
          24,
          11
        ]
      },
      "homes": {
        "allresp": [
          69,
          21,
          10
        ],
        "urban": [
          69,
          22,
          9
        ],
        "rural": [
          69,
          17,
          14
        ],
        "owner": [
          72,
          19,
          8
        ],
        "renter": [
          52,
          40,
          8
        ],
        "permission": [
          70,
          19,
          12
        ],
        "formal": [
          73,
          19,
          9
        ],
        "informal": [
          73,
          15,
          12
        ],
        "nodocs": [
          57,
          29,
          14
        ],
        "sole": [
          69,
          22,
          9
        ],
        "multiple": [
          73,
          21,
          6
        ],
        "male": [
          72,
          19,
          9
        ],
        "female": [
          67,
          22,
          11
        ],
        "young": [
          70,
          20,
          11
        ],
        "adult": [
          68,
          23,
          9
        ],
        "old": [
          74,
          13,
          13
        ],
        "fulltime": [
          70,
          22,
          8
        ],
        "parttime": [
          68,
          23,
          9
        ],
        "unemployed": [
          67,
          16,
          17
        ],
        "comfortable": [
          71,
          23,
          6
        ],
        "gettingby": [
          70,
          20,
          10
        ],
        "difficulty": [
          69,
          21,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          71,
          6,
          23
        ],
        "urban": [
          69,
          7,
          25
        ],
        "rural": [
          78,
          4,
          18
        ],
        "owner": [
          83,
          5,
          12
        ],
        "renter": [
          41,
          8,
          51
        ],
        "permission": [
          72,
          5,
          23
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          69,
          7,
          24
        ],
        "multiple": [
          83,
          3,
          14
        ],
        "male": [
          74,
          6,
          20
        ],
        "female": [
          69,
          5,
          25
        ],
        "young": [
          69,
          5,
          26
        ],
        "adult": [
          71,
          6,
          23
        ],
        "old": [
          81,
          7,
          12
        ],
        "fulltime": [
          66,
          8,
          25
        ],
        "parttime": [
          72,
          3,
          25
        ],
        "unemployed": [
          72,
          3,
          26
        ],
        "comfortable": [
          68,
          3,
          29
        ],
        "gettingby": [
          72,
          8,
          21
        ],
        "difficulty": [
          74,
          6,
          20
        ]
      },
      "homes": {
        "allresp": [
          69,
          6,
          24
        ],
        "urban": [
          67,
          7,
          26
        ],
        "rural": [
          76,
          4,
          20
        ],
        "owner": [
          82,
          6,
          12
        ],
        "renter": [
          35,
          9,
          56
        ],
        "permission": [
          70,
          6,
          24
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          69,
          7,
          24
        ],
        "multiple": [
          75,
          5,
          20
        ],
        "male": [
          72,
          6,
          21
        ],
        "female": [
          66,
          6,
          27
        ],
        "young": [
          67,
          6,
          27
        ],
        "adult": [
          68,
          6,
          26
        ],
        "old": [
          81,
          7,
          12
        ],
        "fulltime": [
          64,
          9,
          27
        ],
        "parttime": [
          69,
          4,
          27
        ],
        "unemployed": [
          68,
          5,
          28
        ],
        "comfortable": [
          65,
          4,
          32
        ],
        "gettingby": [
          69,
          9,
          22
        ],
        "difficulty": [
          72,
          7,
          22
        ]
      }
    },
    "reasons": {
      "askedtoleave": 60,
      "family": 38,
      "money": 39,
      "death": 24,
      "government": 24,
      "companies": 14,
      "customary": 16
    }
  },
  "DE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          87,
          10,
          3
        ],
        "urban": [
          87,
          10,
          3
        ],
        "rural": [
          90,
          10,
          0
        ],
        "owner": [
          92,
          6,
          2
        ],
        "renter": [
          84,
          13,
          2
        ],
        "permission": [
          83,
          12,
          4
        ],
        "formal": [
          89,
          9,
          2
        ],
        "informal": [
          66,
          27,
          8
        ],
        "nodocs": [
          67,
          12,
          21
        ],
        "sole": [
          88,
          9,
          3
        ],
        "multiple": [
          86,
          12,
          2
        ],
        "male": [
          89,
          9,
          2
        ],
        "female": [
          86,
          11,
          4
        ],
        "young": [
          81,
          19,
          1
        ],
        "adult": [
          89,
          9,
          2
        ],
        "old": [
          87,
          9,
          4
        ],
        "fulltime": [
          87,
          10,
          2
        ],
        "parttime": [
          88,
          8,
          3
        ],
        "unemployed": [
          73,
          20,
          7
        ],
        "comfortable": [
          92,
          6,
          2
        ],
        "gettingby": [
          90,
          8,
          2
        ],
        "difficulty": [
          70,
          24,
          6
        ]
      },
      "homes": {
        "allresp": [
          90,
          8,
          2
        ],
        "urban": [
          89,
          8,
          2
        ],
        "rural": [
          92,
          8,
          0
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          86,
          12,
          2
        ],
        "permission": [
          85,
          11,
          4
        ],
        "formal": [
          91,
          8,
          1
        ],
        "informal": [
          72,
          21,
          6
        ],
        "nodocs": [
          68,
          13,
          19
        ],
        "sole": [
          88,
          9,
          3
        ],
        "multiple": [
          95,
          5,
          0
        ],
        "male": [
          91,
          7,
          1
        ],
        "female": [
          88,
          9,
          3
        ],
        "young": [
          84,
          16,
          0
        ],
        "adult": [
          91,
          8,
          1
        ],
        "old": [
          89,
          8,
          3
        ],
        "fulltime": [
          90,
          8,
          2
        ],
        "parttime": [
          91,
          7,
          2
        ],
        "unemployed": [
          73,
          20,
          7
        ],
        "comfortable": [
          95,
          4,
          1
        ],
        "gettingby": [
          92,
          7,
          1
        ],
        "difficulty": [
          73,
          21,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          93,
          3,
          3
        ],
        "urban": [
          93,
          4,
          3
        ],
        "rural": [
          96,
          1,
          3
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          93,
          4,
          3
        ],
        "permission": [
          88,
          6,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          4,
          4
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          95,
          3,
          2
        ],
        "female": [
          92,
          4,
          4
        ],
        "young": [
          93,
          4,
          3
        ],
        "adult": [
          94,
          3,
          2
        ],
        "old": [
          92,
          3,
          4
        ],
        "fulltime": [
          95,
          3,
          2
        ],
        "parttime": [
          90,
          5,
          5
        ],
        "unemployed": [
          84,
          9,
          7
        ],
        "comfortable": [
          97,
          2,
          1
        ],
        "gettingby": [
          94,
          2,
          4
        ],
        "difficulty": [
          84,
          9,
          6
        ]
      },
      "homes": {
        "allresp": [
          92,
          4,
          4
        ],
        "urban": [
          92,
          4,
          3
        ],
        "rural": [
          95,
          1,
          3
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          93,
          4,
          3
        ],
        "permission": [
          86,
          7,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          4,
          4
        ],
        "multiple": [
          95,
          4,
          1
        ],
        "male": [
          94,
          4,
          3
        ],
        "female": [
          91,
          4,
          4
        ],
        "young": [
          92,
          4,
          4
        ],
        "adult": [
          94,
          3,
          3
        ],
        "old": [
          90,
          5,
          5
        ],
        "fulltime": [
          95,
          3,
          2
        ],
        "parttime": [
          90,
          5,
          5
        ],
        "unemployed": [
          82,
          9,
          9
        ],
        "comfortable": [
          95,
          3,
          1
        ],
        "gettingby": [
          93,
          2,
          4
        ],
        "difficulty": [
          83,
          11,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 67,
      "family": 25,
      "money": 37,
      "death": 17,
      "government": 21,
      "companies": 6,
      "customary": -1
    }
  },
  "GA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          58,
          35,
          7
        ],
        "urban": [
          57,
          36,
          7
        ],
        "rural": [
          69,
          28,
          3
        ],
        "owner": [
          74,
          20,
          5
        ],
        "renter": [
          39,
          53,
          8
        ],
        "permission": [
          55,
          37,
          8
        ],
        "formal": [
          60,
          34,
          6
        ],
        "informal": [
          58,
          35,
          7
        ],
        "nodocs": [
          50,
          40,
          10
        ],
        "sole": [
          63,
          31,
          7
        ],
        "multiple": [
          51,
          45,
          5
        ],
        "male": [
          62,
          33,
          5
        ],
        "female": [
          55,
          37,
          8
        ],
        "young": [
          59,
          35,
          6
        ],
        "adult": [
          55,
          37,
          8
        ],
        "old": [
          70,
          26,
          5
        ],
        "fulltime": [
          60,
          35,
          5
        ],
        "parttime": [
          52,
          42,
          7
        ],
        "unemployed": [
          55,
          37,
          8
        ],
        "comfortable": [
          70,
          26,
          4
        ],
        "gettingby": [
          65,
          30,
          5
        ],
        "difficulty": [
          51,
          41,
          8
        ]
      },
      "homes": {
        "allresp": [
          62,
          31,
          6
        ],
        "urban": [
          61,
          32,
          7
        ],
        "rural": [
          74,
          23,
          3
        ],
        "owner": [
          77,
          18,
          5
        ],
        "renter": [
          42,
          51,
          7
        ],
        "permission": [
          61,
          31,
          8
        ],
        "formal": [
          66,
          28,
          6
        ],
        "informal": [
          61,
          33,
          6
        ],
        "nodocs": [
          54,
          39,
          8
        ],
        "sole": [
          63,
          31,
          7
        ],
        "multiple": [
          62,
          34,
          3
        ],
        "male": [
          66,
          29,
          6
        ],
        "female": [
          59,
          34,
          7
        ],
        "young": [
          65,
          29,
          6
        ],
        "adult": [
          59,
          34,
          7
        ],
        "old": [
          73,
          22,
          5
        ],
        "fulltime": [
          64,
          30,
          6
        ],
        "parttime": [
          56,
          38,
          5
        ],
        "unemployed": [
          59,
          34,
          7
        ],
        "comfortable": [
          74,
          25,
          1
        ],
        "gettingby": [
          68,
          27,
          5
        ],
        "difficulty": [
          56,
          36,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          63,
          17,
          20
        ],
        "urban": [
          64,
          18,
          18
        ],
        "rural": [
          54,
          2,
          44
        ],
        "owner": [
          64,
          17,
          19
        ],
        "renter": [
          53,
          22,
          25
        ],
        "permission": [
          71,
          11,
          18
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          51,
          23,
          27
        ],
        "multiple": [
          86,
          5,
          9
        ],
        "male": [
          65,
          17,
          18
        ],
        "female": [
          62,
          16,
          22
        ],
        "young": [
          63,
          18,
          18
        ],
        "adult": [
          65,
          17,
          18
        ],
        "old": [
          55,
          13,
          31
        ],
        "fulltime": [
          65,
          14,
          22
        ],
        "parttime": [
          64,
          18,
          18
        ],
        "unemployed": [
          70,
          13,
          17
        ],
        "comfortable": [
          75,
          9,
          16
        ],
        "gettingby": [
          65,
          20,
          14
        ],
        "difficulty": [
          60,
          15,
          24
        ]
      },
      "homes": {
        "allresp": [
          54,
          21,
          25
        ],
        "urban": [
          55,
          22,
          23
        ],
        "rural": [
          43,
          3,
          54
        ],
        "owner": [
          58,
          19,
          23
        ],
        "renter": [
          36,
          32,
          32
        ],
        "permission": [
          65,
          14,
          22
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          51,
          23,
          27
        ],
        "multiple": [
          60,
          17,
          23
        ],
        "male": [
          56,
          21,
          23
        ],
        "female": [
          52,
          21,
          27
        ],
        "young": [
          55,
          21,
          24
        ],
        "adult": [
          56,
          21,
          23
        ],
        "old": [
          44,
          17,
          39
        ],
        "fulltime": [
          55,
          18,
          27
        ],
        "parttime": [
          56,
          22,
          22
        ],
        "unemployed": [
          58,
          20,
          22
        ],
        "comfortable": [
          67,
          14,
          19
        ],
        "gettingby": [
          57,
          24,
          20
        ],
        "difficulty": [
          50,
          19,
          30
        ]
      }
    },
    "reasons": {
      "askedtoleave": 75,
      "family": 42,
      "money": 54,
      "death": 31,
      "government": 25,
      "companies": 17,
      "customary": 17
    }
  },
  "GE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          79,
          15,
          6
        ],
        "urban": [
          74,
          19,
          7
        ],
        "rural": [
          84,
          10,
          6
        ],
        "owner": [
          87,
          8,
          5
        ],
        "renter": [
          30,
          61,
          9
        ],
        "permission": [
          79,
          12,
          9
        ],
        "formal": [
          86,
          9,
          5
        ],
        "informal": [
          45,
          45,
          10
        ],
        "nodocs": [
          49,
          35,
          16
        ],
        "sole": [
          78,
          15,
          6
        ],
        "multiple": [
          79,
          13,
          8
        ],
        "male": [
          79,
          17,
          4
        ],
        "female": [
          78,
          13,
          8
        ],
        "young": [
          65,
          24,
          11
        ],
        "adult": [
          77,
          18,
          6
        ],
        "old": [
          86,
          8,
          6
        ],
        "fulltime": [
          78,
          16,
          5
        ],
        "parttime": [
          84,
          10,
          7
        ],
        "unemployed": [
          70,
          25,
          5
        ],
        "comfortable": [
          82,
          14,
          4
        ],
        "gettingby": [
          81,
          13,
          6
        ],
        "difficulty": [
          75,
          18,
          7
        ]
      },
      "homes": {
        "allresp": [
          80,
          15,
          6
        ],
        "urban": [
          74,
          19,
          7
        ],
        "rural": [
          86,
          10,
          5
        ],
        "owner": [
          87,
          8,
          5
        ],
        "renter": [
          30,
          61,
          9
        ],
        "permission": [
          81,
          10,
          9
        ],
        "formal": [
          87,
          8,
          5
        ],
        "informal": [
          45,
          45,
          9
        ],
        "nodocs": [
          49,
          34,
          16
        ],
        "sole": [
          78,
          15,
          6
        ],
        "multiple": [
          89,
          8,
          3
        ],
        "male": [
          80,
          16,
          4
        ],
        "female": [
          79,
          13,
          7
        ],
        "young": [
          66,
          24,
          10
        ],
        "adult": [
          77,
          17,
          5
        ],
        "old": [
          88,
          7,
          5
        ],
        "fulltime": [
          79,
          16,
          5
        ],
        "parttime": [
          84,
          10,
          7
        ],
        "unemployed": [
          72,
          23,
          5
        ],
        "comfortable": [
          83,
          14,
          3
        ],
        "gettingby": [
          81,
          13,
          6
        ],
        "difficulty": [
          76,
          18,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          81,
          15,
          4
        ],
        "urban": [
          78,
          17,
          5
        ],
        "rural": [
          85,
          12,
          3
        ],
        "owner": [
          93,
          6,
          1
        ],
        "renter": [
          12,
          69,
          19
        ],
        "permission": [
          79,
          13,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          80,
          16,
          4
        ],
        "multiple": [
          99,
          1,
          0
        ],
        "male": [
          80,
          16,
          4
        ],
        "female": [
          82,
          14,
          4
        ],
        "young": [
          66,
          25,
          10
        ],
        "adult": [
          80,
          16,
          4
        ],
        "old": [
          88,
          10,
          2
        ],
        "fulltime": [
          83,
          14,
          3
        ],
        "parttime": [
          88,
          9,
          3
        ],
        "unemployed": [
          71,
          25,
          4
        ],
        "comfortable": [
          90,
          4,
          7
        ],
        "gettingby": [
          83,
          14,
          3
        ],
        "difficulty": [
          77,
          18,
          5
        ]
      },
      "homes": {
        "allresp": [
          81,
          15,
          4
        ],
        "urban": [
          77,
          18,
          5
        ],
        "rural": [
          85,
          12,
          3
        ],
        "owner": [
          93,
          6,
          1
        ],
        "renter": [
          9,
          72,
          19
        ],
        "permission": [
          78,
          14,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          80,
          16,
          4
        ],
        "multiple": [
          93,
          6,
          1
        ],
        "male": [
          80,
          16,
          4
        ],
        "female": [
          81,
          15,
          4
        ],
        "young": [
          65,
          25,
          10
        ],
        "adult": [
          80,
          16,
          4
        ],
        "old": [
          88,
          10,
          2
        ],
        "fulltime": [
          82,
          15,
          3
        ],
        "parttime": [
          88,
          9,
          3
        ],
        "unemployed": [
          71,
          25,
          4
        ],
        "comfortable": [
          90,
          4,
          7
        ],
        "gettingby": [
          82,
          15,
          3
        ],
        "difficulty": [
          77,
          18,
          5
        ]
      }
    },
    "reasons": {
      "askedtoleave": 78,
      "family": 11,
      "money": 42,
      "death": 3,
      "government": 9,
      "companies": 6,
      "customary": -1
    }
  },
  "GH": {
    "insecurity": {
      "allprop": {
        "allresp": [
          62,
          27,
          11
        ],
        "urban": [
          59,
          28,
          13
        ],
        "rural": [
          64,
          26,
          10
        ],
        "owner": [
          74,
          15,
          11
        ],
        "renter": [
          55,
          39,
          6
        ],
        "permission": [
          60,
          27,
          13
        ],
        "formal": [
          64,
          25,
          10
        ],
        "informal": [
          65,
          22,
          14
        ],
        "nodocs": [
          58,
          31,
          11
        ],
        "sole": [
          62,
          25,
          12
        ],
        "multiple": [
          60,
          34,
          6
        ],
        "male": [
          63,
          28,
          10
        ],
        "female": [
          61,
          26,
          13
        ],
        "young": [
          58,
          30,
          12
        ],
        "adult": [
          61,
          28,
          11
        ],
        "old": [
          72,
          17,
          12
        ],
        "fulltime": [
          70,
          22,
          8
        ],
        "parttime": [
          49,
          46,
          5
        ],
        "unemployed": [
          58,
          26,
          16
        ],
        "comfortable": [
          65,
          30,
          5
        ],
        "gettingby": [
          68,
          26,
          6
        ],
        "difficulty": [
          60,
          26,
          14
        ]
      },
      "homes": {
        "allresp": [
          63,
          25,
          12
        ],
        "urban": [
          60,
          27,
          14
        ],
        "rural": [
          66,
          24,
          10
        ],
        "owner": [
          75,
          14,
          11
        ],
        "renter": [
          56,
          37,
          7
        ],
        "permission": [
          62,
          25,
          13
        ],
        "formal": [
          66,
          22,
          12
        ],
        "informal": [
          66,
          19,
          15
        ],
        "nodocs": [
          59,
          30,
          11
        ],
        "sole": [
          62,
          25,
          12
        ],
        "multiple": [
          68,
          23,
          9
        ],
        "male": [
          64,
          25,
          11
        ],
        "female": [
          62,
          25,
          13
        ],
        "young": [
          59,
          28,
          13
        ],
        "adult": [
          62,
          26,
          11
        ],
        "old": [
          73,
          16,
          12
        ],
        "fulltime": [
          70,
          21,
          9
        ],
        "parttime": [
          49,
          46,
          5
        ],
        "unemployed": [
          59,
          25,
          16
        ],
        "comfortable": [
          67,
          27,
          6
        ],
        "gettingby": [
          69,
          25,
          6
        ],
        "difficulty": [
          61,
          24,
          15
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          44,
          16,
          39
        ],
        "urban": [
          52,
          13,
          35
        ],
        "rural": [
          38,
          19,
          43
        ],
        "owner": [
          63,
          21,
          16
        ],
        "renter": [
          62,
          12,
          26
        ],
        "permission": [
          26,
          17,
          57
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          40,
          17,
          43
        ],
        "multiple": [
          66,
          15,
          20
        ],
        "male": [
          50,
          16,
          33
        ],
        "female": [
          39,
          16,
          45
        ],
        "young": [
          31,
          14,
          55
        ],
        "adult": [
          49,
          15,
          35
        ],
        "old": [
          44,
          24,
          31
        ],
        "fulltime": [
          58,
          13,
          29
        ],
        "parttime": [
          27,
          22,
          51
        ],
        "unemployed": [
          37,
          18,
          45
        ],
        "comfortable": [
          49,
          9,
          43
        ],
        "gettingby": [
          52,
          16,
          32
        ],
        "difficulty": [
          40,
          18,
          41
        ]
      },
      "homes": {
        "allresp": [
          42,
          16,
          42
        ],
        "urban": [
          49,
          15,
          37
        ],
        "rural": [
          36,
          18,
          46
        ],
        "owner": [
          63,
          21,
          16
        ],
        "renter": [
          60,
          14,
          26
        ],
        "permission": [
          22,
          16,
          62
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          40,
          17,
          43
        ],
        "multiple": [
          49,
          15,
          37
        ],
        "male": [
          47,
          16,
          37
        ],
        "female": [
          37,
          17,
          46
        ],
        "young": [
          27,
          14,
          59
        ],
        "adult": [
          47,
          16,
          38
        ],
        "old": [
          44,
          23,
          33
        ],
        "fulltime": [
          56,
          14,
          31
        ],
        "parttime": [
          25,
          21,
          54
        ],
        "unemployed": [
          32,
          17,
          51
        ],
        "comfortable": [
          44,
          8,
          48
        ],
        "gettingby": [
          51,
          16,
          34
        ],
        "difficulty": [
          38,
          19,
          44
        ]
      }
    },
    "reasons": {
      "askedtoleave": 27,
      "family": 28,
      "money": 12,
      "death": 14,
      "government": 7,
      "companies": 7,
      "customary": 4
    }
  },
  "GR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          80,
          16,
          4
        ],
        "urban": [
          79,
          17,
          4
        ],
        "rural": [
          91,
          9,
          0
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          44,
          49,
          7
        ],
        "permission": [
          84,
          9,
          7
        ],
        "formal": [
          81,
          16,
          2
        ],
        "informal": [
          54,
          20,
          26
        ],
        "nodocs": [
          53,
          14,
          33
        ],
        "sole": [
          77,
          19,
          4
        ],
        "multiple": [
          87,
          10,
          2
        ],
        "male": [
          85,
          14,
          2
        ],
        "female": [
          76,
          18,
          6
        ],
        "young": [
          66,
          27,
          7
        ],
        "adult": [
          76,
          20,
          4
        ],
        "old": [
          89,
          9,
          2
        ],
        "fulltime": [
          78,
          20,
          3
        ],
        "parttime": [
          58,
          28,
          14
        ],
        "unemployed": [
          72,
          23,
          5
        ],
        "comfortable": [
          93,
          7,
          0
        ],
        "gettingby": [
          82,
          14,
          4
        ],
        "difficulty": [
          76,
          20,
          4
        ]
      },
      "homes": {
        "allresp": [
          81,
          15,
          3
        ],
        "urban": [
          81,
          16,
          4
        ],
        "rural": [
          91,
          9,
          0
        ],
        "owner": [
          96,
          3,
          0
        ],
        "renter": [
          45,
          48,
          7
        ],
        "permission": [
          86,
          8,
          6
        ],
        "formal": [
          83,
          15,
          2
        ],
        "informal": [
          54,
          22,
          24
        ],
        "nodocs": [
          58,
          11,
          30
        ],
        "sole": [
          77,
          19,
          4
        ],
        "multiple": [
          91,
          8,
          1
        ],
        "male": [
          86,
          13,
          1
        ],
        "female": [
          77,
          18,
          5
        ],
        "young": [
          69,
          24,
          7
        ],
        "adult": [
          77,
          19,
          4
        ],
        "old": [
          90,
          8,
          2
        ],
        "fulltime": [
          79,
          19,
          2
        ],
        "parttime": [
          63,
          24,
          13
        ],
        "unemployed": [
          72,
          23,
          5
        ],
        "comfortable": [
          94,
          6,
          0
        ],
        "gettingby": [
          84,
          13,
          3
        ],
        "difficulty": [
          77,
          20,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          95,
          2,
          2
        ],
        "urban": [
          95,
          3,
          2
        ],
        "rural": [
          99,
          0,
          1
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          97,
          1,
          2
        ],
        "permission": [
          89,
          6,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          94,
          3,
          3
        ],
        "multiple": [
          99,
          0,
          0
        ],
        "male": [
          96,
          2,
          2
        ],
        "female": [
          95,
          3,
          2
        ],
        "young": [
          83,
          6,
          11
        ],
        "adult": [
          96,
          3,
          1
        ],
        "old": [
          97,
          1,
          2
        ],
        "fulltime": [
          97,
          2,
          1
        ],
        "parttime": [
          91,
          6,
          3
        ],
        "unemployed": [
          86,
          5,
          9
        ],
        "comfortable": [
          97,
          2,
          1
        ],
        "gettingby": [
          96,
          2,
          2
        ],
        "difficulty": [
          94,
          3,
          3
        ]
      },
      "homes": {
        "allresp": [
          95,
          3,
          2
        ],
        "urban": [
          94,
          3,
          3
        ],
        "rural": [
          97,
          2,
          1
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          96,
          2,
          2
        ],
        "permission": [
          87,
          7,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          94,
          3,
          3
        ],
        "multiple": [
          97,
          2,
          1
        ],
        "male": [
          95,
          2,
          2
        ],
        "female": [
          94,
          4,
          3
        ],
        "young": [
          80,
          8,
          12
        ],
        "adult": [
          96,
          3,
          1
        ],
        "old": [
          97,
          1,
          2
        ],
        "fulltime": [
          97,
          2,
          1
        ],
        "parttime": [
          91,
          6,
          3
        ],
        "unemployed": [
          86,
          5,
          9
        ],
        "comfortable": [
          96,
          2,
          2
        ],
        "gettingby": [
          96,
          2,
          2
        ],
        "difficulty": [
          94,
          3,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 87,
      "family": 12,
      "money": 56,
      "death": 7,
      "government": 11,
      "companies": 9,
      "customary": -1
    }
  },
  "HN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          68,
          19,
          13
        ],
        "urban": [
          65,
          22,
          13
        ],
        "rural": [
          72,
          15,
          13
        ],
        "owner": [
          74,
          9,
          17
        ],
        "renter": [
          55,
          36,
          9
        ],
        "permission": [
          70,
          18,
          12
        ],
        "formal": [
          70,
          18,
          12
        ],
        "informal": [
          78,
          11,
          11
        ],
        "nodocs": [
          64,
          22,
          15
        ],
        "sole": [
          69,
          18,
          13
        ],
        "multiple": [
          64,
          24,
          11
        ],
        "male": [
          70,
          21,
          9
        ],
        "female": [
          66,
          17,
          17
        ],
        "young": [
          70,
          23,
          7
        ],
        "adult": [
          68,
          19,
          13
        ],
        "old": [
          65,
          12,
          22
        ],
        "fulltime": [
          69,
          22,
          9
        ],
        "parttime": [
          87,
          6,
          8
        ],
        "unemployed": [
          72,
          18,
          10
        ],
        "comfortable": [
          77,
          16,
          6
        ],
        "gettingby": [
          70,
          16,
          14
        ],
        "difficulty": [
          67,
          21,
          12
        ]
      },
      "homes": {
        "allresp": [
          69,
          18,
          13
        ],
        "urban": [
          66,
          21,
          13
        ],
        "rural": [
          73,
          14,
          13
        ],
        "owner": [
          76,
          8,
          17
        ],
        "renter": [
          57,
          34,
          9
        ],
        "permission": [
          70,
          18,
          12
        ],
        "formal": [
          72,
          16,
          12
        ],
        "informal": [
          79,
          11,
          10
        ],
        "nodocs": [
          63,
          22,
          15
        ],
        "sole": [
          69,
          18,
          13
        ],
        "multiple": [
          75,
          13,
          12
        ],
        "male": [
          71,
          20,
          9
        ],
        "female": [
          67,
          16,
          17
        ],
        "young": [
          71,
          23,
          7
        ],
        "adult": [
          69,
          18,
          13
        ],
        "old": [
          66,
          11,
          23
        ],
        "fulltime": [
          71,
          20,
          9
        ],
        "parttime": [
          87,
          6,
          8
        ],
        "unemployed": [
          72,
          18,
          10
        ],
        "comfortable": [
          77,
          16,
          6
        ],
        "gettingby": [
          71,
          16,
          14
        ],
        "difficulty": [
          68,
          20,
          12
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          54,
          7,
          39
        ],
        "urban": [
          57,
          9,
          34
        ],
        "rural": [
          49,
          5,
          45
        ],
        "owner": [
          89,
          4,
          7
        ],
        "renter": [
          45,
          22,
          32
        ],
        "permission": [
          37,
          4,
          59
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          51,
          8,
          41
        ],
        "multiple": [
          82,
          1,
          17
        ],
        "male": [
          56,
          6,
          38
        ],
        "female": [
          52,
          8,
          40
        ],
        "young": [
          41,
          6,
          54
        ],
        "adult": [
          53,
          8,
          39
        ],
        "old": [
          74,
          7,
          20
        ],
        "fulltime": [
          62,
          6,
          33
        ],
        "parttime": [
          38,
          6,
          56
        ],
        "unemployed": [
          46,
          9,
          45
        ],
        "comfortable": [
          44,
          7,
          48
        ],
        "gettingby": [
          53,
          6,
          41
        ],
        "difficulty": [
          57,
          8,
          35
        ]
      },
      "homes": {
        "allresp": [
          51,
          8,
          41
        ],
        "urban": [
          54,
          9,
          36
        ],
        "rural": [
          47,
          6,
          47
        ],
        "owner": [
          88,
          4,
          8
        ],
        "renter": [
          42,
          23,
          35
        ],
        "permission": [
          34,
          5,
          61
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          51,
          8,
          41
        ],
        "multiple": [
          51,
          6,
          43
        ],
        "male": [
          54,
          6,
          41
        ],
        "female": [
          49,
          9,
          42
        ],
        "young": [
          36,
          6,
          58
        ],
        "adult": [
          52,
          9,
          40
        ],
        "old": [
          71,
          8,
          21
        ],
        "fulltime": [
          60,
          6,
          34
        ],
        "parttime": [
          36,
          6,
          58
        ],
        "unemployed": [
          39,
          9,
          52
        ],
        "comfortable": [
          41,
          7,
          52
        ],
        "gettingby": [
          51,
          7,
          42
        ],
        "difficulty": [
          55,
          8,
          37
        ]
      }
    },
    "reasons": {
      "askedtoleave": 21,
      "family": 8,
      "money": 13,
      "death": 2,
      "government": 1,
      "companies": 0,
      "customary": 1
    }
  },
  "GN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          69,
          25,
          6
        ],
        "urban": [
          68,
          28,
          4
        ],
        "rural": [
          69,
          20,
          11
        ],
        "owner": [
          80,
          16,
          4
        ],
        "renter": [
          52,
          45,
          3
        ],
        "permission": [
          59,
          31,
          10
        ],
        "formal": [
          69,
          26,
          5
        ],
        "informal": [
          45,
          44,
          11
        ],
        "nodocs": [
          69,
          22,
          9
        ],
        "sole": [
          72,
          22,
          5
        ],
        "multiple": [
          63,
          35,
          2
        ],
        "male": [
          71,
          24,
          6
        ],
        "female": [
          66,
          27,
          7
        ],
        "young": [
          68,
          27,
          5
        ],
        "adult": [
          68,
          26,
          6
        ],
        "old": [
          72,
          16,
          12
        ],
        "fulltime": [
          63,
          33,
          4
        ],
        "parttime": [
          69,
          23,
          8
        ],
        "unemployed": [
          73,
          24,
          3
        ],
        "comfortable": [
          81,
          18,
          1
        ],
        "gettingby": [
          73,
          21,
          6
        ],
        "difficulty": [
          67,
          28,
          5
        ]
      },
      "homes": {
        "allresp": [
          71,
          23,
          6
        ],
        "urban": [
          70,
          26,
          4
        ],
        "rural": [
          72,
          17,
          11
        ],
        "owner": [
          83,
          13,
          4
        ],
        "renter": [
          52,
          44,
          3
        ],
        "permission": [
          61,
          29,
          10
        ],
        "formal": [
          72,
          23,
          5
        ],
        "informal": [
          50,
          40,
          10
        ],
        "nodocs": [
          69,
          23,
          9
        ],
        "sole": [
          72,
          22,
          5
        ],
        "multiple": [
          72,
          26,
          2
        ],
        "male": [
          73,
          21,
          6
        ],
        "female": [
          68,
          25,
          7
        ],
        "young": [
          68,
          27,
          5
        ],
        "adult": [
          71,
          23,
          5
        ],
        "old": [
          72,
          15,
          12
        ],
        "fulltime": [
          67,
          29,
          4
        ],
        "parttime": [
          69,
          22,
          8
        ],
        "unemployed": [
          74,
          24,
          2
        ],
        "comfortable": [
          84,
          14,
          1
        ],
        "gettingby": [
          74,
          20,
          6
        ],
        "difficulty": [
          70,
          25,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          63,
          2,
          36
        ],
        "urban": [
          72,
          2,
          26
        ],
        "rural": [
          45,
          1,
          54
        ],
        "owner": [
          60,
          0,
          40
        ],
        "renter": [
          61,
          5,
          34
        ],
        "permission": [
          69,
          3,
          28
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          59,
          2,
          39
        ],
        "multiple": [
          74,
          1,
          25
        ],
        "male": [
          66,
          2,
          33
        ],
        "female": [
          59,
          2,
          39
        ],
        "young": [
          65,
          2,
          33
        ],
        "adult": [
          61,
          2,
          37
        ],
        "old": [
          64,
          1,
          35
        ],
        "fulltime": [
          62,
          1,
          37
        ],
        "parttime": [
          66,
          0,
          33
        ],
        "unemployed": [
          73,
          3,
          24
        ],
        "comfortable": [
          77,
          3,
          20
        ],
        "gettingby": [
          64,
          1,
          34
        ],
        "difficulty": [
          62,
          2,
          37
        ]
      },
      "homes": {
        "allresp": [
          60,
          2,
          38
        ],
        "urban": [
          70,
          2,
          27
        ],
        "rural": [
          40,
          1,
          59
        ],
        "owner": [
          57,
          0,
          43
        ],
        "renter": [
          59,
          5,
          36
        ],
        "permission": [
          66,
          4,
          30
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          59,
          2,
          39
        ],
        "multiple": [
          63,
          2,
          35
        ],
        "male": [
          63,
          2,
          35
        ],
        "female": [
          56,
          2,
          41
        ],
        "young": [
          63,
          2,
          35
        ],
        "adult": [
          59,
          2,
          39
        ],
        "old": [
          60,
          1,
          39
        ],
        "fulltime": [
          60,
          1,
          38
        ],
        "parttime": [
          63,
          1,
          36
        ],
        "unemployed": [
          73,
          3,
          24
        ],
        "comfortable": [
          74,
          3,
          23
        ],
        "gettingby": [
          61,
          1,
          38
        ],
        "difficulty": [
          59,
          2,
          39
        ]
      }
    },
    "reasons": {
      "askedtoleave": 74,
      "family": 43,
      "money": 59,
      "death": 45,
      "government": 51,
      "companies": 32,
      "customary": 43
    }
  },
  "GT": {
    "insecurity": {
      "allprop": {
        "allresp": [
          57,
          33,
          10
        ],
        "urban": [
          62,
          31,
          7
        ],
        "rural": [
          52,
          36,
          12
        ],
        "owner": [
          65,
          26,
          10
        ],
        "renter": [
          45,
          46,
          9
        ],
        "permission": [
          58,
          35,
          8
        ],
        "formal": [
          60,
          32,
          8
        ],
        "informal": [
          51,
          38,
          11
        ],
        "nodocs": [
          52,
          34,
          14
        ],
        "sole": [
          61,
          30,
          9
        ],
        "multiple": [
          44,
          47,
          8
        ],
        "male": [
          59,
          34,
          7
        ],
        "female": [
          55,
          33,
          12
        ],
        "young": [
          59,
          35,
          6
        ],
        "adult": [
          56,
          33,
          11
        ],
        "old": [
          56,
          33,
          12
        ],
        "fulltime": [
          60,
          36,
          4
        ],
        "parttime": [
          58,
          31,
          11
        ],
        "unemployed": [
          55,
          34,
          11
        ],
        "comfortable": [
          68,
          24,
          8
        ],
        "gettingby": [
          64,
          30,
          6
        ],
        "difficulty": [
          55,
          39,
          6
        ]
      },
      "homes": {
        "allresp": [
          60,
          31,
          9
        ],
        "urban": [
          64,
          29,
          7
        ],
        "rural": [
          56,
          33,
          12
        ],
        "owner": [
          69,
          23,
          9
        ],
        "renter": [
          47,
          43,
          10
        ],
        "permission": [
          60,
          33,
          7
        ],
        "formal": [
          64,
          29,
          7
        ],
        "informal": [
          51,
          40,
          9
        ],
        "nodocs": [
          53,
          33,
          14
        ],
        "sole": [
          61,
          30,
          9
        ],
        "multiple": [
          56,
          37,
          6
        ],
        "male": [
          62,
          31,
          6
        ],
        "female": [
          57,
          31,
          12
        ],
        "young": [
          62,
          33,
          5
        ],
        "adult": [
          59,
          31,
          10
        ],
        "old": [
          59,
          28,
          13
        ],
        "fulltime": [
          62,
          35,
          3
        ],
        "parttime": [
          62,
          27,
          11
        ],
        "unemployed": [
          57,
          32,
          11
        ],
        "comfortable": [
          70,
          22,
          8
        ],
        "gettingby": [
          67,
          27,
          6
        ],
        "difficulty": [
          58,
          36,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          63,
          8,
          28
        ],
        "urban": [
          62,
          10,
          28
        ],
        "rural": [
          65,
          6,
          29
        ],
        "owner": [
          77,
          5,
          18
        ],
        "renter": [
          40,
          16,
          44
        ],
        "permission": [
          64,
          8,
          28
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          58,
          9,
          32
        ],
        "multiple": [
          84,
          5,
          11
        ],
        "male": [
          68,
          7,
          25
        ],
        "female": [
          59,
          9,
          31
        ],
        "young": [
          65,
          4,
          31
        ],
        "adult": [
          61,
          9,
          29
        ],
        "old": [
          68,
          10,
          21
        ],
        "fulltime": [
          68,
          8,
          24
        ],
        "parttime": [
          69,
          8,
          23
        ],
        "unemployed": [
          50,
          10,
          40
        ],
        "comfortable": [
          68,
          9,
          23
        ],
        "gettingby": [
          68,
          6,
          25
        ],
        "difficulty": [
          62,
          10,
          28
        ]
      },
      "homes": {
        "allresp": [
          62,
          9,
          29
        ],
        "urban": [
          61,
          11,
          28
        ],
        "rural": [
          63,
          6,
          31
        ],
        "owner": [
          76,
          5,
          18
        ],
        "renter": [
          37,
          19,
          45
        ],
        "permission": [
          63,
          8,
          29
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          58,
          9,
          32
        ],
        "multiple": [
          78,
          6,
          16
        ],
        "male": [
          66,
          8,
          26
        ],
        "female": [
          59,
          9,
          32
        ],
        "young": [
          63,
          4,
          33
        ],
        "adult": [
          60,
          9,
          30
        ],
        "old": [
          65,
          12,
          22
        ],
        "fulltime": [
          67,
          8,
          24
        ],
        "parttime": [
          67,
          9,
          25
        ],
        "unemployed": [
          50,
          10,
          40
        ],
        "comfortable": [
          66,
          11,
          24
        ],
        "gettingby": [
          68,
          6,
          27
        ],
        "difficulty": [
          60,
          10,
          30
        ]
      }
    },
    "reasons": {
      "askedtoleave": 61,
      "family": 37,
      "money": 54,
      "death": 38,
      "government": 21,
      "companies": 22,
      "customary": 25
    }
  },
  "CN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          75,
          11,
          14
        ],
        "urban": [
          77,
          12,
          11
        ],
        "rural": [
          73,
          10,
          17
        ],
        "owner": [
          82,
          6,
          12
        ],
        "renter": [
          53,
          32,
          16
        ],
        "permission": [
          70,
          15,
          15
        ],
        "formal": [
          78,
          11,
          12
        ],
        "informal": [
          68,
          11,
          22
        ],
        "nodocs": [
          59,
          15,
          26
        ],
        "sole": [
          80,
          9,
          10
        ],
        "multiple": [
          66,
          17,
          17
        ],
        "male": [
          76,
          11,
          13
        ],
        "female": [
          74,
          11,
          15
        ],
        "young": [
          77,
          15,
          9
        ],
        "adult": [
          76,
          12,
          12
        ],
        "old": [
          72,
          8,
          19
        ],
        "fulltime": [
          77,
          12,
          11
        ],
        "parttime": [
          69,
          12,
          19
        ],
        "unemployed": [
          69,
          18,
          13
        ],
        "comfortable": [
          85,
          9,
          7
        ],
        "gettingby": [
          77,
          11,
          12
        ],
        "difficulty": [
          70,
          13,
          17
        ]
      },
      "homes": {
        "allresp": [
          77,
          10,
          13
        ],
        "urban": [
          78,
          11,
          11
        ],
        "rural": [
          75,
          9,
          16
        ],
        "owner": [
          83,
          6,
          11
        ],
        "renter": [
          54,
          30,
          17
        ],
        "permission": [
          72,
          14,
          14
        ],
        "formal": [
          80,
          9,
          11
        ],
        "informal": [
          61,
          12,
          27
        ],
        "nodocs": [
          60,
          15,
          25
        ],
        "sole": [
          80,
          9,
          10
        ],
        "multiple": [
          73,
          13,
          14
        ],
        "male": [
          77,
          11,
          12
        ],
        "female": [
          76,
          10,
          14
        ],
        "young": [
          78,
          12,
          10
        ],
        "adult": [
          78,
          11,
          11
        ],
        "old": [
          74,
          8,
          19
        ],
        "fulltime": [
          79,
          11,
          10
        ],
        "parttime": [
          70,
          12,
          18
        ],
        "unemployed": [
          69,
          16,
          15
        ],
        "comfortable": [
          86,
          7,
          7
        ],
        "gettingby": [
          78,
          10,
          12
        ],
        "difficulty": [
          72,
          12,
          16
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          84,
          1,
          14
        ],
        "urban": [
          86,
          1,
          13
        ],
        "rural": [
          83,
          1,
          16
        ],
        "owner": [
          89,
          1,
          10
        ],
        "renter": [
          83,
          1,
          16
        ],
        "permission": [
          82,
          1,
          17
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          1,
          15
        ],
        "multiple": [
          95,
          1,
          4
        ],
        "male": [
          86,
          1,
          14
        ],
        "female": [
          83,
          2,
          15
        ],
        "young": [
          85,
          1,
          14
        ],
        "adult": [
          85,
          1,
          14
        ],
        "old": [
          83,
          2,
          16
        ],
        "fulltime": [
          89,
          1,
          11
        ],
        "parttime": [
          83,
          1,
          16
        ],
        "unemployed": [
          62,
          2,
          35
        ],
        "comfortable": [
          90,
          0,
          10
        ],
        "gettingby": [
          87,
          1,
          12
        ],
        "difficulty": [
          79,
          2,
          19
        ]
      },
      "homes": {
        "allresp": [
          83,
          1,
          15
        ],
        "urban": [
          85,
          1,
          14
        ],
        "rural": [
          81,
          1,
          18
        ],
        "owner": [
          88,
          1,
          11
        ],
        "renter": [
          78,
          2,
          20
        ],
        "permission": [
          80,
          1,
          18
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          1,
          15
        ],
        "multiple": [
          89,
          1,
          10
        ],
        "male": [
          84,
          1,
          15
        ],
        "female": [
          82,
          2,
          16
        ],
        "young": [
          84,
          1,
          16
        ],
        "adult": [
          83,
          1,
          15
        ],
        "old": [
          82,
          2,
          16
        ],
        "fulltime": [
          87,
          1,
          12
        ],
        "parttime": [
          80,
          2,
          18
        ],
        "unemployed": [
          58,
          4,
          38
        ],
        "comfortable": [
          89,
          0,
          11
        ],
        "gettingby": [
          86,
          1,
          13
        ],
        "difficulty": [
          78,
          3,
          20
        ]
      }
    },
    "reasons": {
      "askedtoleave": 38,
      "family": 16,
      "money": 26,
      "death": 9,
      "government": 13,
      "companies": 7,
      "customary": -1
    }
  },
  "HU": {
    "insecurity": {
      "allprop": {
        "allresp": [
          88,
          9,
          3
        ],
        "urban": [
          88,
          9,
          3
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          96,
          3,
          2
        ],
        "renter": [
          44,
          49,
          7
        ],
        "permission": [
          87,
          7,
          6
        ],
        "formal": [
          89,
          8,
          2
        ],
        "informal": [
          86,
          14,
          0
        ],
        "nodocs": [
          71,
          12,
          16
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          89,
          6,
          5
        ],
        "male": [
          88,
          8,
          3
        ],
        "female": [
          88,
          9,
          3
        ],
        "young": [
          81,
          11,
          8
        ],
        "adult": [
          86,
          11,
          3
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          87,
          11,
          2
        ],
        "parttime": [
          88,
          5,
          7
        ],
        "unemployed": [
          78,
          22,
          0
        ],
        "comfortable": [
          90,
          7,
          3
        ],
        "gettingby": [
          92,
          6,
          2
        ],
        "difficulty": [
          83,
          13,
          4
        ]
      },
      "homes": {
        "allresp": [
          89,
          8,
          3
        ],
        "urban": [
          89,
          8,
          3
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          96,
          2,
          1
        ],
        "renter": [
          44,
          49,
          7
        ],
        "permission": [
          88,
          7,
          5
        ],
        "formal": [
          90,
          8,
          2
        ],
        "informal": [
          87,
          13,
          0
        ],
        "nodocs": [
          71,
          12,
          16
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          94,
          5,
          1
        ],
        "male": [
          88,
          8,
          3
        ],
        "female": [
          89,
          9,
          2
        ],
        "young": [
          81,
          11,
          8
        ],
        "adult": [
          87,
          11,
          2
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          87,
          11,
          2
        ],
        "parttime": [
          93,
          5,
          2
        ],
        "unemployed": [
          78,
          22,
          0
        ],
        "comfortable": [
          90,
          7,
          3
        ],
        "gettingby": [
          93,
          5,
          2
        ],
        "difficulty": [
          83,
          13,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          3,
          6
        ],
        "urban": [
          91,
          3,
          6
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          97,
          1,
          1
        ],
        "renter": [
          89,
          4,
          8
        ],
        "permission": [
          73,
          6,
          21
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          3,
          5
        ],
        "multiple": [
          99,
          0,
          1
        ],
        "male": [
          90,
          3,
          7
        ],
        "female": [
          92,
          2,
          6
        ],
        "young": [
          86,
          5,
          9
        ],
        "adult": [
          91,
          2,
          7
        ],
        "old": [
          93,
          3,
          5
        ],
        "fulltime": [
          92,
          3,
          5
        ],
        "parttime": [
          94,
          0,
          6
        ],
        "unemployed": [
          76,
          9,
          15
        ],
        "comfortable": [
          93,
          4,
          4
        ],
        "gettingby": [
          91,
          2,
          7
        ],
        "difficulty": [
          91,
          3,
          6
        ]
      },
      "homes": {
        "allresp": [
          91,
          3,
          6
        ],
        "urban": [
          91,
          3,
          6
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          97,
          1,
          1
        ],
        "renter": [
          89,
          4,
          8
        ],
        "permission": [
          72,
          7,
          21
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          3,
          5
        ],
        "multiple": [
          97,
          2,
          1
        ],
        "male": [
          89,
          3,
          7
        ],
        "female": [
          92,
          3,
          6
        ],
        "young": [
          86,
          5,
          9
        ],
        "adult": [
          90,
          3,
          7
        ],
        "old": [
          92,
          3,
          5
        ],
        "fulltime": [
          92,
          3,
          5
        ],
        "parttime": [
          94,
          0,
          6
        ],
        "unemployed": [
          69,
          16,
          15
        ],
        "comfortable": [
          93,
          4,
          4
        ],
        "gettingby": [
          91,
          2,
          7
        ],
        "difficulty": [
          90,
          4,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 69,
      "family": 16,
      "money": 31,
      "death": 9,
      "government": 5,
      "companies": 4,
      "customary": -1
    }
  },
  "CO": {
    "insecurity": {
      "allprop": {
        "allresp": [
          65,
          24,
          11
        ],
        "urban": [
          65,
          24,
          11
        ],
        "rural": [
          66,
          24,
          10
        ],
        "owner": [
          78,
          11,
          12
        ],
        "renter": [
          59,
          31,
          10
        ],
        "permission": [
          66,
          25,
          9
        ],
        "formal": [
          71,
          20,
          9
        ],
        "informal": [
          50,
          41,
          9
        ],
        "nodocs": [
          57,
          28,
          14
        ],
        "sole": [
          65,
          23,
          11
        ],
        "multiple": [
          55,
          37,
          8
        ],
        "male": [
          66,
          24,
          10
        ],
        "female": [
          64,
          24,
          12
        ],
        "young": [
          71,
          23,
          6
        ],
        "adult": [
          62,
          27,
          11
        ],
        "old": [
          67,
          17,
          16
        ],
        "fulltime": [
          67,
          24,
          9
        ],
        "parttime": [
          65,
          26,
          10
        ],
        "unemployed": [
          66,
          26,
          8
        ],
        "comfortable": [
          70,
          22,
          8
        ],
        "gettingby": [
          72,
          17,
          10
        ],
        "difficulty": [
          61,
          28,
          11
        ]
      },
      "homes": {
        "allresp": [
          65,
          23,
          11
        ],
        "urban": [
          65,
          23,
          11
        ],
        "rural": [
          67,
          23,
          10
        ],
        "owner": [
          78,
          10,
          12
        ],
        "renter": [
          59,
          31,
          10
        ],
        "permission": [
          67,
          23,
          9
        ],
        "formal": [
          72,
          19,
          9
        ],
        "informal": [
          51,
          40,
          9
        ],
        "nodocs": [
          58,
          28,
          14
        ],
        "sole": [
          65,
          23,
          11
        ],
        "multiple": [
          69,
          23,
          8
        ],
        "male": [
          66,
          24,
          10
        ],
        "female": [
          65,
          23,
          12
        ],
        "young": [
          72,
          23,
          6
        ],
        "adult": [
          63,
          26,
          11
        ],
        "old": [
          67,
          17,
          16
        ],
        "fulltime": [
          67,
          23,
          9
        ],
        "parttime": [
          66,
          25,
          10
        ],
        "unemployed": [
          66,
          26,
          8
        ],
        "comfortable": [
          70,
          22,
          8
        ],
        "gettingby": [
          74,
          16,
          10
        ],
        "difficulty": [
          61,
          27,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          57,
          4,
          39
        ],
        "urban": [
          59,
          3,
          38
        ],
        "rural": [
          53,
          7,
          39
        ],
        "owner": [
          92,
          3,
          5
        ],
        "renter": [
          51,
          5,
          44
        ],
        "permission": [
          45,
          5,
          50
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          56,
          4,
          40
        ],
        "multiple": [
          87,
          1,
          12
        ],
        "male": [
          60,
          4,
          36
        ],
        "female": [
          55,
          4,
          41
        ],
        "young": [
          50,
          3,
          47
        ],
        "adult": [
          55,
          5,
          41
        ],
        "old": [
          69,
          3,
          28
        ],
        "fulltime": [
          61,
          3,
          36
        ],
        "parttime": [
          51,
          8,
          41
        ],
        "unemployed": [
          53,
          5,
          42
        ],
        "comfortable": [
          61,
          3,
          35
        ],
        "gettingby": [
          60,
          2,
          37
        ],
        "difficulty": [
          56,
          5,
          39
        ]
      },
      "homes": {
        "allresp": [
          57,
          4,
          39
        ],
        "urban": [
          58,
          3,
          39
        ],
        "rural": [
          52,
          7,
          40
        ],
        "owner": [
          92,
          3,
          5
        ],
        "renter": [
          49,
          5,
          45
        ],
        "permission": [
          44,
          5,
          51
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          56,
          4,
          40
        ],
        "multiple": [
          68,
          5,
          27
        ],
        "male": [
          60,
          4,
          36
        ],
        "female": [
          54,
          4,
          42
        ],
        "young": [
          49,
          3,
          48
        ],
        "adult": [
          54,
          5,
          41
        ],
        "old": [
          68,
          3,
          29
        ],
        "fulltime": [
          60,
          3,
          37
        ],
        "parttime": [
          50,
          8,
          42
        ],
        "unemployed": [
          52,
          5,
          43
        ],
        "comfortable": [
          61,
          4,
          36
        ],
        "gettingby": [
          59,
          3,
          38
        ],
        "difficulty": [
          55,
          5,
          40
        ]
      }
    },
    "reasons": {
      "askedtoleave": 33,
      "family": 11,
      "money": 17,
      "death": 4,
      "government": 6,
      "companies": 2,
      "customary": 0
    }
  },
  "IQ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          68,
          29,
          4
        ],
        "urban": [
          67,
          29,
          4
        ],
        "rural": [
          71,
          27,
          2
        ],
        "owner": [
          77,
          21,
          2
        ],
        "renter": [
          48,
          49,
          3
        ],
        "permission": [
          66,
          28,
          5
        ],
        "formal": [
          72,
          25,
          3
        ],
        "informal": [
          55,
          38,
          7
        ],
        "nodocs": [
          48,
          46,
          6
        ],
        "sole": [
          68,
          28,
          4
        ],
        "multiple": [
          63,
          34,
          3
        ],
        "male": [
          69,
          29,
          2
        ],
        "female": [
          66,
          28,
          6
        ],
        "young": [
          69,
          30,
          1
        ],
        "adult": [
          64,
          30,
          6
        ],
        "old": [
          83,
          17,
          0
        ],
        "fulltime": [
          65,
          32,
          4
        ],
        "parttime": [
          62,
          35,
          2
        ],
        "unemployed": [
          64,
          33,
          3
        ],
        "comfortable": [
          76,
          21,
          3
        ],
        "gettingby": [
          74,
          21,
          5
        ],
        "difficulty": [
          59,
          38,
          4
        ]
      },
      "homes": {
        "allresp": [
          69,
          27,
          4
        ],
        "urban": [
          68,
          28,
          4
        ],
        "rural": [
          73,
          25,
          2
        ],
        "owner": [
          78,
          20,
          2
        ],
        "renter": [
          48,
          49,
          3
        ],
        "permission": [
          69,
          26,
          5
        ],
        "formal": [
          74,
          23,
          3
        ],
        "informal": [
          53,
          38,
          9
        ],
        "nodocs": [
          47,
          47,
          6
        ],
        "sole": [
          68,
          28,
          4
        ],
        "multiple": [
          71,
          25,
          3
        ],
        "male": [
          71,
          27,
          2
        ],
        "female": [
          66,
          28,
          6
        ],
        "young": [
          71,
          27,
          2
        ],
        "adult": [
          65,
          30,
          6
        ],
        "old": [
          83,
          17,
          0
        ],
        "fulltime": [
          65,
          31,
          4
        ],
        "parttime": [
          65,
          31,
          3
        ],
        "unemployed": [
          66,
          32,
          3
        ],
        "comfortable": [
          78,
          20,
          3
        ],
        "gettingby": [
          76,
          19,
          5
        ],
        "difficulty": [
          59,
          37,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          78,
          8,
          14
        ],
        "urban": [
          81,
          7,
          13
        ],
        "rural": [
          66,
          15,
          18
        ],
        "owner": [
          88,
          7,
          5
        ],
        "renter": [
          63,
          16,
          21
        ],
        "permission": [
          76,
          6,
          17
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          76,
          9,
          15
        ],
        "multiple": [
          94,
          1,
          4
        ],
        "male": [
          83,
          6,
          11
        ],
        "female": [
          74,
          10,
          16
        ],
        "young": [
          77,
          10,
          13
        ],
        "adult": [
          79,
          7,
          14
        ],
        "old": [
          80,
          7,
          13
        ],
        "fulltime": [
          75,
          10,
          15
        ],
        "parttime": [
          74,
          11,
          15
        ],
        "unemployed": [
          84,
          6,
          9
        ],
        "comfortable": [
          89,
          4,
          7
        ],
        "gettingby": [
          82,
          6,
          12
        ],
        "difficulty": [
          71,
          12,
          17
        ]
      },
      "homes": {
        "allresp": [
          78,
          8,
          14
        ],
        "urban": [
          80,
          7,
          13
        ],
        "rural": [
          66,
          16,
          18
        ],
        "owner": [
          88,
          7,
          5
        ],
        "renter": [
          61,
          16,
          22
        ],
        "permission": [
          76,
          7,
          17
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          76,
          9,
          15
        ],
        "multiple": [
          90,
          4,
          6
        ],
        "male": [
          82,
          7,
          11
        ],
        "female": [
          73,
          10,
          16
        ],
        "young": [
          75,
          11,
          14
        ],
        "adult": [
          79,
          7,
          14
        ],
        "old": [
          80,
          7,
          13
        ],
        "fulltime": [
          75,
          10,
          15
        ],
        "parttime": [
          72,
          13,
          15
        ],
        "unemployed": [
          83,
          6,
          10
        ],
        "comfortable": [
          88,
          5,
          7
        ],
        "gettingby": [
          81,
          6,
          13
        ],
        "difficulty": [
          71,
          12,
          17
        ]
      }
    },
    "reasons": {
      "askedtoleave": 66,
      "family": 36,
      "money": 50,
      "death": 32,
      "government": 13,
      "companies": 13,
      "customary": 18
    }
  },
  "IE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          84,
          15,
          1
        ],
        "urban": [
          83,
          16,
          1
        ],
        "rural": [
          87,
          10,
          2
        ],
        "owner": [
          88,
          10,
          1
        ],
        "renter": [
          77,
          21,
          2
        ],
        "permission": [
          81,
          17,
          2
        ],
        "formal": [
          85,
          14,
          1
        ],
        "informal": [
          86,
          13,
          2
        ],
        "nodocs": [
          58,
          36,
          6
        ],
        "sole": [
          85,
          13,
          1
        ],
        "multiple": [
          73,
          25,
          2
        ],
        "male": [
          84,
          14,
          2
        ],
        "female": [
          84,
          15,
          1
        ],
        "young": [
          79,
          18,
          2
        ],
        "adult": [
          82,
          17,
          1
        ],
        "old": [
          89,
          10,
          2
        ],
        "fulltime": [
          85,
          15,
          0
        ],
        "parttime": [
          82,
          15,
          3
        ],
        "unemployed": [
          80,
          19,
          1
        ],
        "comfortable": [
          85,
          13,
          1
        ],
        "gettingby": [
          86,
          12,
          2
        ],
        "difficulty": [
          72,
          27,
          1
        ]
      },
      "homes": {
        "allresp": [
          86,
          13,
          1
        ],
        "urban": [
          85,
          14,
          1
        ],
        "rural": [
          88,
          10,
          2
        ],
        "owner": [
          90,
          9,
          1
        ],
        "renter": [
          78,
          20,
          2
        ],
        "permission": [
          85,
          14,
          2
        ],
        "formal": [
          86,
          12,
          1
        ],
        "informal": [
          86,
          13,
          1
        ],
        "nodocs": [
          63,
          31,
          6
        ],
        "sole": [
          85,
          13,
          1
        ],
        "multiple": [
          86,
          13,
          1
        ],
        "male": [
          85,
          13,
          2
        ],
        "female": [
          86,
          13,
          1
        ],
        "young": [
          82,
          16,
          2
        ],
        "adult": [
          83,
          16,
          1
        ],
        "old": [
          91,
          7,
          1
        ],
        "fulltime": [
          85,
          14,
          0
        ],
        "parttime": [
          85,
          13,
          2
        ],
        "unemployed": [
          83,
          17,
          0
        ],
        "comfortable": [
          87,
          12,
          1
        ],
        "gettingby": [
          88,
          11,
          2
        ],
        "difficulty": [
          76,
          23,
          1
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          8,
          3
        ],
        "urban": [
          88,
          9,
          3
        ],
        "rural": [
          94,
          5,
          2
        ],
        "owner": [
          95,
          5,
          1
        ],
        "renter": [
          83,
          11,
          6
        ],
        "permission": [
          87,
          9,
          4
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          9,
          3
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          88,
          8,
          4
        ],
        "female": [
          90,
          8,
          2
        ],
        "young": [
          81,
          12,
          7
        ],
        "adult": [
          88,
          9,
          3
        ],
        "old": [
          94,
          5,
          1
        ],
        "fulltime": [
          89,
          8,
          3
        ],
        "parttime": [
          88,
          8,
          4
        ],
        "unemployed": [
          80,
          17,
          3
        ],
        "comfortable": [
          90,
          8,
          2
        ],
        "gettingby": [
          91,
          7,
          2
        ],
        "difficulty": [
          79,
          12,
          8
        ]
      },
      "homes": {
        "allresp": [
          87,
          10,
          3
        ],
        "urban": [
          85,
          11,
          4
        ],
        "rural": [
          94,
          5,
          2
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          79,
          14,
          6
        ],
        "permission": [
          86,
          10,
          4
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          9,
          3
        ],
        "multiple": [
          85,
          13,
          2
        ],
        "male": [
          86,
          10,
          4
        ],
        "female": [
          89,
          9,
          2
        ],
        "young": [
          79,
          14,
          7
        ],
        "adult": [
          85,
          11,
          3
        ],
        "old": [
          94,
          5,
          1
        ],
        "fulltime": [
          86,
          11,
          3
        ],
        "parttime": [
          87,
          9,
          4
        ],
        "unemployed": [
          80,
          17,
          3
        ],
        "comfortable": [
          89,
          9,
          2
        ],
        "gettingby": [
          89,
          9,
          2
        ],
        "difficulty": [
          77,
          15,
          8
        ]
      }
    },
    "reasons": {
      "askedtoleave": 74,
      "family": 25,
      "money": 33,
      "death": 15,
      "government": 15,
      "companies": 13,
      "customary": -1
    }
  },
  "IR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          52,
          42,
          7
        ],
        "urban": [
          52,
          42,
          7
        ],
        "rural": [
          52,
          42,
          6
        ],
        "owner": [
          56,
          36,
          8
        ],
        "renter": [
          40,
          53,
          7
        ],
        "permission": [
          60,
          36,
          4
        ],
        "formal": [
          52,
          42,
          7
        ],
        "informal": [
          54,
          42,
          4
        ],
        "nodocs": [
          39,
          61,
          0
        ],
        "sole": [
          54,
          38,
          8
        ],
        "multiple": [
          44,
          53,
          3
        ],
        "male": [
          47,
          47,
          6
        ],
        "female": [
          56,
          37,
          7
        ],
        "young": [
          63,
          36,
          2
        ],
        "adult": [
          47,
          48,
          5
        ],
        "old": [
          54,
          30,
          16
        ],
        "fulltime": [
          43,
          54,
          4
        ],
        "parttime": [
          47,
          43,
          10
        ],
        "unemployed": [
          45,
          48,
          7
        ],
        "comfortable": [
          64,
          35,
          2
        ],
        "gettingby": [
          58,
          37,
          5
        ],
        "difficulty": [
          46,
          46,
          8
        ]
      },
      "homes": {
        "allresp": [
          57,
          37,
          6
        ],
        "urban": [
          56,
          37,
          7
        ],
        "rural": [
          59,
          35,
          6
        ],
        "owner": [
          64,
          28,
          8
        ],
        "renter": [
          44,
          49,
          7
        ],
        "permission": [
          64,
          32,
          4
        ],
        "formal": [
          57,
          36,
          7
        ],
        "informal": [
          56,
          40,
          5
        ],
        "nodocs": [
          39,
          61,
          0
        ],
        "sole": [
          54,
          38,
          8
        ],
        "multiple": [
          66,
          32,
          2
        ],
        "male": [
          52,
          42,
          6
        ],
        "female": [
          62,
          31,
          7
        ],
        "young": [
          69,
          29,
          2
        ],
        "adult": [
          52,
          42,
          5
        ],
        "old": [
          58,
          27,
          16
        ],
        "fulltime": [
          48,
          48,
          3
        ],
        "parttime": [
          55,
          35,
          10
        ],
        "unemployed": [
          50,
          42,
          7
        ],
        "comfortable": [
          76,
          23,
          2
        ],
        "gettingby": [
          64,
          30,
          5
        ],
        "difficulty": [
          50,
          42,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          7,
          1
        ],
        "urban": [
          93,
          6,
          1
        ],
        "rural": [
          88,
          10,
          2
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          88,
          10,
          2
        ],
        "permission": [
          93,
          6,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          8,
          2
        ],
        "multiple": [
          95,
          5,
          0
        ],
        "male": [
          91,
          8,
          2
        ],
        "female": [
          92,
          7,
          1
        ],
        "young": [
          90,
          9,
          1
        ],
        "adult": [
          91,
          7,
          2
        ],
        "old": [
          94,
          5,
          1
        ],
        "fulltime": [
          93,
          6,
          2
        ],
        "parttime": [
          90,
          8,
          2
        ],
        "unemployed": [
          91,
          8,
          2
        ],
        "comfortable": [
          100,
          0,
          0
        ],
        "gettingby": [
          94,
          5,
          1
        ],
        "difficulty": [
          90,
          9,
          2
        ]
      },
      "homes": {
        "allresp": [
          90,
          9,
          1
        ],
        "urban": [
          92,
          7,
          1
        ],
        "rural": [
          87,
          11,
          2
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          85,
          13,
          2
        ],
        "permission": [
          93,
          6,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          8,
          2
        ],
        "multiple": [
          90,
          10,
          0
        ],
        "male": [
          90,
          8,
          2
        ],
        "female": [
          90,
          9,
          1
        ],
        "young": [
          89,
          10,
          1
        ],
        "adult": [
          90,
          9,
          2
        ],
        "old": [
          93,
          6,
          1
        ],
        "fulltime": [
          92,
          6,
          2
        ],
        "parttime": [
          87,
          11,
          2
        ],
        "unemployed": [
          88,
          10,
          2
        ],
        "comfortable": [
          98,
          2,
          0
        ],
        "gettingby": [
          92,
          6,
          1
        ],
        "difficulty": [
          89,
          10,
          2
        ]
      }
    },
    "reasons": {
      "askedtoleave": 64,
      "family": 28,
      "money": 54,
      "death": 29,
      "government": 9,
      "companies": 10,
      "customary": 4
    }
  },
  "JP": {
    "insecurity": {
      "allprop": {
        "allresp": [
          78,
          19,
          3
        ],
        "urban": [
          78,
          19,
          3
        ],
        "rural": [
          73,
          23,
          4
        ],
        "owner": [
          80,
          16,
          3
        ],
        "renter": [
          71,
          26,
          3
        ],
        "permission": [
          78,
          21,
          1
        ],
        "formal": [
          81,
          17,
          2
        ],
        "informal": [
          65,
          31,
          3
        ],
        "nodocs": [
          67,
          20,
          13
        ],
        "sole": [
          80,
          18,
          2
        ],
        "multiple": [
          68,
          28,
          5
        ],
        "male": [
          78,
          19,
          3
        ],
        "female": [
          78,
          19,
          3
        ],
        "young": [
          68,
          32,
          0
        ],
        "adult": [
          78,
          19,
          3
        ],
        "old": [
          79,
          17,
          4
        ],
        "fulltime": [
          81,
          18,
          2
        ],
        "parttime": [
          73,
          23,
          4
        ],
        "unemployed": [
          55,
          45,
          0
        ],
        "comfortable": [
          87,
          12,
          1
        ],
        "gettingby": [
          78,
          19,
          3
        ],
        "difficulty": [
          60,
          36,
          4
        ]
      },
      "homes": {
        "allresp": [
          81,
          17,
          2
        ],
        "urban": [
          81,
          17,
          2
        ],
        "rural": [
          77,
          21,
          3
        ],
        "owner": [
          85,
          13,
          2
        ],
        "renter": [
          71,
          26,
          3
        ],
        "permission": [
          81,
          19,
          1
        ],
        "formal": [
          85,
          14,
          1
        ],
        "informal": [
          67,
          30,
          3
        ],
        "nodocs": [
          68,
          19,
          13
        ],
        "sole": [
          80,
          18,
          2
        ],
        "multiple": [
          85,
          14,
          1
        ],
        "male": [
          81,
          16,
          3
        ],
        "female": [
          81,
          18,
          2
        ],
        "young": [
          68,
          32,
          0
        ],
        "adult": [
          81,
          17,
          2
        ],
        "old": [
          82,
          15,
          3
        ],
        "fulltime": [
          84,
          15,
          1
        ],
        "parttime": [
          78,
          20,
          2
        ],
        "unemployed": [
          55,
          45,
          0
        ],
        "comfortable": [
          90,
          10,
          0
        ],
        "gettingby": [
          81,
          17,
          2
        ],
        "difficulty": [
          61,
          35,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          78,
          15,
          7
        ],
        "urban": [
          78,
          15,
          7
        ],
        "rural": [
          73,
          17,
          10
        ],
        "owner": [
          89,
          6,
          5
        ],
        "renter": [
          69,
          23,
          8
        ],
        "permission": [
          70,
          22,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          77,
          16,
          7
        ],
        "multiple": [
          94,
          2,
          4
        ],
        "male": [
          78,
          14,
          8
        ],
        "female": [
          78,
          15,
          7
        ],
        "young": [
          47,
          37,
          16
        ],
        "adult": [
          75,
          17,
          8
        ],
        "old": [
          86,
          10,
          5
        ],
        "fulltime": [
          78,
          15,
          7
        ],
        "parttime": [
          79,
          11,
          10
        ],
        "unemployed": [
          86,
          0,
          14
        ],
        "comfortable": [
          81,
          13,
          7
        ],
        "gettingby": [
          78,
          15,
          7
        ],
        "difficulty": [
          71,
          21,
          9
        ]
      },
      "homes": {
        "allresp": [
          77,
          16,
          7
        ],
        "urban": [
          78,
          15,
          7
        ],
        "rural": [
          72,
          18,
          10
        ],
        "owner": [
          89,
          7,
          5
        ],
        "renter": [
          66,
          26,
          8
        ],
        "permission": [
          69,
          22,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          77,
          16,
          7
        ],
        "multiple": [
          89,
          8,
          4
        ],
        "male": [
          77,
          15,
          8
        ],
        "female": [
          77,
          16,
          7
        ],
        "young": [
          46,
          38,
          16
        ],
        "adult": [
          74,
          17,
          8
        ],
        "old": [
          84,
          11,
          5
        ],
        "fulltime": [
          77,
          17,
          7
        ],
        "parttime": [
          77,
          13,
          10
        ],
        "unemployed": [
          86,
          0,
          14
        ],
        "comfortable": [
          79,
          14,
          7
        ],
        "gettingby": [
          77,
          16,
          7
        ],
        "difficulty": [
          70,
          21,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 54,
      "family": 18,
      "money": 35,
      "death": 32,
      "government": 8,
      "companies": 6,
      "customary": -1
    }
  },
  "IT": {
    "insecurity": {
      "allprop": {
        "allresp": [
          89,
          9,
          2
        ],
        "urban": [
          90,
          8,
          2
        ],
        "rural": [
          82,
          18,
          0
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          66,
          27,
          6
        ],
        "permission": [
          84,
          15,
          1
        ],
        "formal": [
          90,
          8,
          1
        ],
        "informal": [
          64,
          36,
          0
        ],
        "nodocs": [
          29,
          0,
          71
        ],
        "sole": [
          91,
          7,
          2
        ],
        "multiple": [
          84,
          16,
          0
        ],
        "male": [
          87,
          10,
          3
        ],
        "female": [
          92,
          7,
          1
        ],
        "young": [
          88,
          10,
          1
        ],
        "adult": [
          88,
          9,
          3
        ],
        "old": [
          92,
          8,
          0
        ],
        "fulltime": [
          90,
          8,
          2
        ],
        "parttime": [
          93,
          7,
          0
        ],
        "unemployed": [
          77,
          18,
          5
        ],
        "comfortable": [
          96,
          3,
          1
        ],
        "gettingby": [
          93,
          6,
          1
        ],
        "difficulty": [
          76,
          20,
          4
        ]
      },
      "homes": {
        "allresp": [
          92,
          6,
          2
        ],
        "urban": [
          92,
          6,
          2
        ],
        "rural": [
          83,
          17,
          0
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          68,
          25,
          7
        ],
        "permission": [
          88,
          11,
          1
        ],
        "formal": [
          93,
          6,
          1
        ],
        "informal": [
          67,
          33,
          0
        ],
        "nodocs": [
          29,
          0,
          71
        ],
        "sole": [
          91,
          7,
          2
        ],
        "multiple": [
          96,
          4,
          0
        ],
        "male": [
          90,
          7,
          3
        ],
        "female": [
          94,
          5,
          1
        ],
        "young": [
          96,
          2,
          1
        ],
        "adult": [
          90,
          7,
          3
        ],
        "old": [
          93,
          6,
          0
        ],
        "fulltime": [
          93,
          5,
          2
        ],
        "parttime": [
          95,
          5,
          0
        ],
        "unemployed": [
          82,
          14,
          5
        ],
        "comfortable": [
          97,
          2,
          1
        ],
        "gettingby": [
          96,
          3,
          1
        ],
        "difficulty": [
          79,
          17,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          97,
          2,
          1
        ],
        "urban": [
          97,
          2,
          1
        ],
        "rural": [
          99,
          1,
          0
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          94,
          2,
          4
        ],
        "permission": [
          91,
          9,
          0
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          97,
          3,
          1
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          97,
          2,
          1
        ],
        "female": [
          98,
          2,
          0
        ],
        "young": [
          95,
          4,
          1
        ],
        "adult": [
          97,
          2,
          1
        ],
        "old": [
          98,
          2,
          0
        ],
        "fulltime": [
          98,
          2,
          0
        ],
        "parttime": [
          99,
          0,
          1
        ],
        "unemployed": [
          91,
          5,
          5
        ],
        "comfortable": [
          98,
          1,
          0
        ],
        "gettingby": [
          98,
          1,
          0
        ],
        "difficulty": [
          94,
          4,
          2
        ]
      },
      "homes": {
        "allresp": [
          97,
          2,
          1
        ],
        "urban": [
          97,
          2,
          1
        ],
        "rural": [
          99,
          1,
          0
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          94,
          2,
          4
        ],
        "permission": [
          89,
          11,
          0
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          97,
          3,
          1
        ],
        "multiple": [
          99,
          1,
          0
        ],
        "male": [
          97,
          2,
          1
        ],
        "female": [
          98,
          2,
          0
        ],
        "young": [
          95,
          4,
          1
        ],
        "adult": [
          97,
          2,
          1
        ],
        "old": [
          98,
          2,
          0
        ],
        "fulltime": [
          97,
          2,
          0
        ],
        "parttime": [
          99,
          0,
          1
        ],
        "unemployed": [
          91,
          5,
          5
        ],
        "comfortable": [
          98,
          1,
          0
        ],
        "gettingby": [
          98,
          2,
          0
        ],
        "difficulty": [
          94,
          4,
          2
        ]
      }
    },
    "reasons": {
      "askedtoleave": 86,
      "family": 9,
      "money": 64,
      "death": 29,
      "government": 57,
      "companies": 21,
      "customary": -1
    }
  },
  "JO": {
    "insecurity": {
      "allprop": {
        "allresp": [
          57,
          40,
          3
        ],
        "urban": [
          56,
          41,
          3
        ],
        "rural": [
          66,
          32,
          1
        ],
        "owner": [
          79,
          19,
          2
        ],
        "renter": [
          35,
          61,
          4
        ],
        "permission": [
          71,
          27,
          2
        ],
        "formal": [
          58,
          40,
          2
        ],
        "informal": [
          43,
          52,
          5
        ],
        "nodocs": [
          60,
          37,
          3
        ],
        "sole": [
          57,
          40,
          3
        ],
        "multiple": [
          52,
          47,
          1
        ],
        "male": [
          53,
          44,
          3
        ],
        "female": [
          62,
          36,
          3
        ],
        "young": [
          55,
          41,
          4
        ],
        "adult": [
          56,
          42,
          2
        ],
        "old": [
          67,
          28,
          4
        ],
        "fulltime": [
          56,
          41,
          3
        ],
        "parttime": [
          42,
          49,
          9
        ],
        "unemployed": [
          54,
          43,
          3
        ],
        "comfortable": [
          78,
          21,
          0
        ],
        "gettingby": [
          64,
          33,
          3
        ],
        "difficulty": [
          48,
          49,
          3
        ]
      },
      "homes": {
        "allresp": [
          59,
          38,
          3
        ],
        "urban": [
          57,
          40,
          3
        ],
        "rural": [
          70,
          29,
          1
        ],
        "owner": [
          82,
          16,
          2
        ],
        "renter": [
          36,
          59,
          4
        ],
        "permission": [
          73,
          25,
          2
        ],
        "formal": [
          60,
          38,
          3
        ],
        "informal": [
          48,
          47,
          5
        ],
        "nodocs": [
          60,
          37,
          3
        ],
        "sole": [
          57,
          40,
          3
        ],
        "multiple": [
          77,
          21,
          2
        ],
        "male": [
          55,
          42,
          3
        ],
        "female": [
          63,
          34,
          3
        ],
        "young": [
          57,
          40,
          4
        ],
        "adult": [
          57,
          41,
          2
        ],
        "old": [
          69,
          26,
          5
        ],
        "fulltime": [
          58,
          39,
          3
        ],
        "parttime": [
          45,
          46,
          9
        ],
        "unemployed": [
          57,
          41,
          2
        ],
        "comfortable": [
          82,
          18,
          0
        ],
        "gettingby": [
          64,
          33,
          3
        ],
        "difficulty": [
          50,
          47,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          58,
          10,
          33
        ],
        "urban": [
          58,
          10,
          32
        ],
        "rural": [
          55,
          6,
          39
        ],
        "owner": [
          83,
          9,
          8
        ],
        "renter": [
          79,
          11,
          10
        ],
        "permission": [
          35,
          10,
          55
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          55,
          10,
          35
        ],
        "multiple": [
          92,
          4,
          4
        ],
        "male": [
          66,
          10,
          24
        ],
        "female": [
          48,
          10,
          42
        ],
        "young": [
          47,
          9,
          44
        ],
        "adult": [
          57,
          11,
          32
        ],
        "old": [
          77,
          7,
          16
        ],
        "fulltime": [
          64,
          9,
          27
        ],
        "parttime": [
          67,
          16,
          17
        ],
        "unemployed": [
          64,
          12,
          24
        ],
        "comfortable": [
          51,
          8,
          41
        ],
        "gettingby": [
          50,
          10,
          40
        ],
        "difficulty": [
          64,
          10,
          26
        ]
      },
      "homes": {
        "allresp": [
          56,
          10,
          34
        ],
        "urban": [
          56,
          11,
          33
        ],
        "rural": [
          54,
          7,
          39
        ],
        "owner": [
          82,
          10,
          8
        ],
        "renter": [
          77,
          12,
          10
        ],
        "permission": [
          33,
          10,
          57
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          55,
          10,
          35
        ],
        "multiple": [
          66,
          12,
          22
        ],
        "male": [
          65,
          10,
          25
        ],
        "female": [
          46,
          10,
          44
        ],
        "young": [
          46,
          9,
          45
        ],
        "adult": [
          55,
          11,
          34
        ],
        "old": [
          77,
          7,
          16
        ],
        "fulltime": [
          62,
          10,
          28
        ],
        "parttime": [
          61,
          20,
          20
        ],
        "unemployed": [
          63,
          12,
          25
        ],
        "comfortable": [
          48,
          8,
          44
        ],
        "gettingby": [
          50,
          10,
          40
        ],
        "difficulty": [
          61,
          11,
          28
        ]
      }
    },
    "reasons": {
      "askedtoleave": 36,
      "family": 14,
      "money": 20,
      "death": 6,
      "government": 0,
      "companies": 1,
      "customary": 1
    }
  },
  "KZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          80,
          11,
          9
        ],
        "urban": [
          74,
          17,
          10
        ],
        "rural": [
          88,
          3,
          9
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          24,
          68,
          8
        ],
        "permission": [
          76,
          8,
          16
        ],
        "formal": [
          84,
          9,
          8
        ],
        "informal": [
          37,
          53,
          9
        ],
        "nodocs": [
          35,
          16,
          48
        ],
        "sole": [
          81,
          12,
          7
        ],
        "multiple": [
          84,
          3,
          14
        ],
        "male": [
          80,
          9,
          11
        ],
        "female": [
          79,
          13,
          8
        ],
        "young": [
          66,
          16,
          18
        ],
        "adult": [
          77,
          12,
          10
        ],
        "old": [
          93,
          5,
          2
        ],
        "fulltime": [
          78,
          15,
          7
        ],
        "parttime": [
          82,
          10,
          8
        ],
        "unemployed": [
          77,
          8,
          16
        ],
        "comfortable": [
          86,
          7,
          7
        ],
        "gettingby": [
          79,
          13,
          8
        ],
        "difficulty": [
          71,
          21,
          8
        ]
      },
      "homes": {
        "allresp": [
          80,
          11,
          9
        ],
        "urban": [
          74,
          17,
          9
        ],
        "rural": [
          89,
          3,
          9
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          24,
          68,
          8
        ],
        "permission": [
          77,
          8,
          15
        ],
        "formal": [
          84,
          9,
          7
        ],
        "informal": [
          42,
          50,
          9
        ],
        "nodocs": [
          35,
          16,
          49
        ],
        "sole": [
          81,
          12,
          7
        ],
        "multiple": [
          87,
          3,
          11
        ],
        "male": [
          81,
          9,
          10
        ],
        "female": [
          79,
          13,
          8
        ],
        "young": [
          67,
          16,
          17
        ],
        "adult": [
          78,
          12,
          10
        ],
        "old": [
          93,
          5,
          2
        ],
        "fulltime": [
          79,
          14,
          7
        ],
        "parttime": [
          82,
          10,
          8
        ],
        "unemployed": [
          77,
          8,
          16
        ],
        "comfortable": [
          87,
          7,
          7
        ],
        "gettingby": [
          79,
          13,
          8
        ],
        "difficulty": [
          71,
          21,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          4,
          4
        ],
        "urban": [
          91,
          5,
          4
        ],
        "rural": [
          92,
          3,
          5
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          68,
          20,
          11
        ],
        "permission": [
          90,
          5,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          5,
          3
        ],
        "multiple": [
          97,
          2,
          1
        ],
        "male": [
          94,
          3,
          3
        ],
        "female": [
          89,
          6,
          5
        ],
        "young": [
          82,
          5,
          13
        ],
        "adult": [
          92,
          5,
          3
        ],
        "old": [
          97,
          2,
          1
        ],
        "fulltime": [
          92,
          5,
          3
        ],
        "parttime": [
          94,
          4,
          2
        ],
        "unemployed": [
          97,
          0,
          3
        ],
        "comfortable": [
          95,
          3,
          2
        ],
        "gettingby": [
          91,
          6,
          3
        ],
        "difficulty": [
          88,
          8,
          4
        ]
      },
      "homes": {
        "allresp": [
          91,
          5,
          4
        ],
        "urban": [
          91,
          6,
          4
        ],
        "rural": [
          91,
          4,
          5
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          66,
          22,
          12
        ],
        "permission": [
          90,
          5,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          5,
          3
        ],
        "multiple": [
          94,
          4,
          2
        ],
        "male": [
          94,
          3,
          3
        ],
        "female": [
          89,
          6,
          5
        ],
        "young": [
          81,
          5,
          14
        ],
        "adult": [
          91,
          6,
          3
        ],
        "old": [
          97,
          2,
          1
        ],
        "fulltime": [
          91,
          6,
          4
        ],
        "parttime": [
          94,
          4,
          2
        ],
        "unemployed": [
          97,
          0,
          3
        ],
        "comfortable": [
          95,
          3,
          2
        ],
        "gettingby": [
          90,
          6,
          3
        ],
        "difficulty": [
          88,
          8,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 77,
      "family": 10,
      "money": 49,
      "death": 6,
      "government": 7,
      "companies": 6,
      "customary": -1
    }
  },
  "IL": {
    "insecurity": {
      "allprop": {
        "allresp": [
          82,
          13,
          4
        ],
        "urban": [
          81,
          14,
          5
        ],
        "rural": [
          92,
          7,
          1
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          59,
          33,
          8
        ],
        "permission": [
          79,
          17,
          4
        ],
        "formal": [
          84,
          12,
          4
        ],
        "informal": [
          70,
          24,
          5
        ],
        "nodocs": [
          60,
          31,
          9
        ],
        "sole": [
          83,
          13,
          4
        ],
        "multiple": [
          78,
          19,
          3
        ],
        "male": [
          82,
          14,
          3
        ],
        "female": [
          82,
          13,
          5
        ],
        "young": [
          81,
          15,
          4
        ],
        "adult": [
          78,
          17,
          5
        ],
        "old": [
          91,
          7,
          2
        ],
        "fulltime": [
          81,
          14,
          4
        ],
        "parttime": [
          72,
          22,
          7
        ],
        "unemployed": [
          72,
          11,
          17
        ],
        "comfortable": [
          90,
          8,
          2
        ],
        "gettingby": [
          87,
          10,
          3
        ],
        "difficulty": [
          69,
          24,
          6
        ]
      },
      "homes": {
        "allresp": [
          84,
          12,
          4
        ],
        "urban": [
          82,
          13,
          4
        ],
        "rural": [
          93,
          6,
          1
        ],
        "owner": [
          96,
          3,
          2
        ],
        "renter": [
          59,
          33,
          8
        ],
        "permission": [
          83,
          14,
          3
        ],
        "formal": [
          86,
          11,
          4
        ],
        "informal": [
          72,
          22,
          6
        ],
        "nodocs": [
          61,
          30,
          9
        ],
        "sole": [
          83,
          13,
          4
        ],
        "multiple": [
          88,
          12,
          1
        ],
        "male": [
          84,
          13,
          3
        ],
        "female": [
          83,
          12,
          5
        ],
        "young": [
          85,
          12,
          3
        ],
        "adult": [
          79,
          16,
          5
        ],
        "old": [
          91,
          6,
          2
        ],
        "fulltime": [
          83,
          13,
          4
        ],
        "parttime": [
          73,
          22,
          6
        ],
        "unemployed": [
          78,
          5,
          17
        ],
        "comfortable": [
          91,
          7,
          2
        ],
        "gettingby": [
          89,
          9,
          3
        ],
        "difficulty": [
          70,
          23,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          7,
          4
        ],
        "urban": [
          89,
          7,
          4
        ],
        "rural": [
          92,
          7,
          1
        ],
        "owner": [
          96,
          3,
          0
        ],
        "renter": [
          94,
          3,
          3
        ],
        "permission": [
          76,
          17,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          7,
          3
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          91,
          6,
          3
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          79,
          12,
          10
        ],
        "adult": [
          89,
          7,
          4
        ],
        "old": [
          94,
          5,
          2
        ],
        "fulltime": [
          91,
          7,
          2
        ],
        "parttime": [
          87,
          3,
          10
        ],
        "unemployed": [
          92,
          4,
          4
        ],
        "comfortable": [
          92,
          5,
          3
        ],
        "gettingby": [
          91,
          5,
          3
        ],
        "difficulty": [
          84,
          11,
          4
        ]
      },
      "homes": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          88,
          8,
          4
        ],
        "rural": [
          92,
          7,
          1
        ],
        "owner": [
          96,
          3,
          0
        ],
        "renter": [
          94,
          3,
          4
        ],
        "permission": [
          73,
          19,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          7,
          3
        ],
        "multiple": [
          92,
          6,
          1
        ],
        "male": [
          91,
          7,
          3
        ],
        "female": [
          86,
          9,
          5
        ],
        "young": [
          75,
          15,
          10
        ],
        "adult": [
          89,
          7,
          4
        ],
        "old": [
          94,
          5,
          2
        ],
        "fulltime": [
          90,
          8,
          2
        ],
        "parttime": [
          87,
          3,
          10
        ],
        "unemployed": [
          92,
          4,
          4
        ],
        "comfortable": [
          91,
          6,
          3
        ],
        "gettingby": [
          90,
          6,
          4
        ],
        "difficulty": [
          84,
          12,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 76,
      "family": 30,
      "money": 32,
      "death": 14,
      "government": 10,
      "companies": 9,
      "customary": -1
    }
  },
  "KR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          78,
          19,
          3
        ],
        "urban": [
          78,
          19,
          3
        ],
        "rural": [
          79,
          17,
          4
        ],
        "owner": [
          88,
          10,
          2
        ],
        "renter": [
          61,
          37,
          2
        ],
        "permission": [
          75,
          19,
          6
        ],
        "formal": [
          79,
          18,
          3
        ],
        "informal": [
          64,
          32,
          4
        ],
        "nodocs": [
          67,
          26,
          7
        ],
        "sole": [
          78,
          19,
          3
        ],
        "multiple": [
          78,
          18,
          4
        ],
        "male": [
          75,
          23,
          3
        ],
        "female": [
          81,
          15,
          4
        ],
        "young": [
          79,
          16,
          6
        ],
        "adult": [
          77,
          22,
          1
        ],
        "old": [
          79,
          15,
          6
        ],
        "fulltime": [
          76,
          21,
          2
        ],
        "parttime": [
          83,
          14,
          3
        ],
        "unemployed": [
          72,
          24,
          3
        ],
        "comfortable": [
          88,
          8,
          4
        ],
        "gettingby": [
          79,
          19,
          2
        ],
        "difficulty": [
          68,
          27,
          6
        ]
      },
      "homes": {
        "allresp": [
          80,
          18,
          3
        ],
        "urban": [
          80,
          18,
          3
        ],
        "rural": [
          81,
          16,
          3
        ],
        "owner": [
          89,
          9,
          2
        ],
        "renter": [
          62,
          36,
          2
        ],
        "permission": [
          78,
          17,
          4
        ],
        "formal": [
          81,
          16,
          3
        ],
        "informal": [
          65,
          31,
          4
        ],
        "nodocs": [
          69,
          24,
          6
        ],
        "sole": [
          78,
          19,
          3
        ],
        "multiple": [
          86,
          11,
          2
        ],
        "male": [
          77,
          21,
          2
        ],
        "female": [
          82,
          14,
          3
        ],
        "young": [
          79,
          16,
          6
        ],
        "adult": [
          78,
          21,
          1
        ],
        "old": [
          82,
          13,
          5
        ],
        "fulltime": [
          79,
          19,
          2
        ],
        "parttime": [
          84,
          13,
          3
        ],
        "unemployed": [
          72,
          24,
          3
        ],
        "comfortable": [
          90,
          6,
          3
        ],
        "gettingby": [
          81,
          18,
          2
        ],
        "difficulty": [
          70,
          25,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          6,
          5
        ],
        "urban": [
          90,
          5,
          4
        ],
        "rural": [
          81,
          8,
          11
        ],
        "owner": [
          97,
          1,
          2
        ],
        "renter": [
          89,
          7,
          4
        ],
        "permission": [
          82,
          10,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          87,
          7,
          6
        ],
        "female": [
          92,
          4,
          3
        ],
        "young": [
          85,
          5,
          10
        ],
        "adult": [
          90,
          5,
          5
        ],
        "old": [
          90,
          6,
          3
        ],
        "fulltime": [
          89,
          6,
          4
        ],
        "parttime": [
          92,
          3,
          5
        ],
        "unemployed": [
          95,
          1,
          4
        ],
        "comfortable": [
          89,
          6,
          5
        ],
        "gettingby": [
          92,
          5,
          3
        ],
        "difficulty": [
          84,
          7,
          9
        ]
      },
      "homes": {
        "allresp": [
          89,
          6,
          5
        ],
        "urban": [
          90,
          6,
          5
        ],
        "rural": [
          81,
          8,
          11
        ],
        "owner": [
          97,
          1,
          2
        ],
        "renter": [
          88,
          7,
          4
        ],
        "permission": [
          81,
          10,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          7,
          5
        ],
        "multiple": [
          95,
          2,
          3
        ],
        "male": [
          86,
          7,
          7
        ],
        "female": [
          92,
          4,
          4
        ],
        "young": [
          85,
          5,
          10
        ],
        "adult": [
          89,
          6,
          6
        ],
        "old": [
          90,
          7,
          3
        ],
        "fulltime": [
          88,
          6,
          5
        ],
        "parttime": [
          90,
          5,
          5
        ],
        "unemployed": [
          95,
          1,
          4
        ],
        "comfortable": [
          88,
          7,
          6
        ],
        "gettingby": [
          91,
          5,
          4
        ],
        "difficulty": [
          83,
          8,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 67,
      "family": 11,
      "money": 41,
      "death": 10,
      "government": 6,
      "companies": 3,
      "customary": -1
    }
  },
  "XK": {
    "insecurity": {
      "allprop": {
        "allresp": [
          88,
          10,
          2
        ],
        "urban": [
          88,
          10,
          2
        ],
        "rural": [
          89,
          8,
          3
        ],
        "owner": [
          92,
          5,
          2
        ],
        "renter": [
          54,
          44,
          2
        ],
        "permission": [
          88,
          10,
          2
        ],
        "formal": [
          91,
          8,
          2
        ],
        "informal": [
          65,
          29,
          7
        ],
        "nodocs": [
          60,
          33,
          7
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          83,
          15,
          2
        ],
        "male": [
          88,
          11,
          1
        ],
        "female": [
          88,
          9,
          3
        ],
        "young": [
          85,
          14,
          1
        ],
        "adult": [
          87,
          10,
          3
        ],
        "old": [
          93,
          6,
          2
        ],
        "fulltime": [
          87,
          11,
          2
        ],
        "parttime": [
          84,
          14,
          2
        ],
        "unemployed": [
          79,
          15,
          5
        ],
        "comfortable": [
          92,
          6,
          2
        ],
        "gettingby": [
          88,
          11,
          2
        ],
        "difficulty": [
          84,
          13,
          2
        ]
      },
      "homes": {
        "allresp": [
          89,
          8,
          2
        ],
        "urban": [
          89,
          9,
          2
        ],
        "rural": [
          90,
          7,
          3
        ],
        "owner": [
          93,
          5,
          2
        ],
        "renter": [
          55,
          43,
          2
        ],
        "permission": [
          90,
          8,
          2
        ],
        "formal": [
          92,
          6,
          1
        ],
        "informal": [
          68,
          26,
          6
        ],
        "nodocs": [
          70,
          18,
          11
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          90,
          7,
          2
        ],
        "male": [
          90,
          10,
          1
        ],
        "female": [
          89,
          7,
          3
        ],
        "young": [
          88,
          11,
          1
        ],
        "adult": [
          88,
          9,
          2
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          89,
          10,
          1
        ],
        "parttime": [
          85,
          13,
          2
        ],
        "unemployed": [
          83,
          12,
          5
        ],
        "comfortable": [
          93,
          6,
          2
        ],
        "gettingby": [
          89,
          9,
          2
        ],
        "difficulty": [
          87,
          11,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          90,
          7,
          2
        ],
        "urban": [
          89,
          9,
          2
        ],
        "rural": [
          94,
          4,
          3
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          64,
          26,
          10
        ],
        "permission": [
          90,
          7,
          2
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          96,
          1,
          4
        ],
        "male": [
          92,
          6,
          2
        ],
        "female": [
          89,
          9,
          2
        ],
        "young": [
          90,
          9,
          1
        ],
        "adult": [
          90,
          7,
          3
        ],
        "old": [
          93,
          6,
          2
        ],
        "fulltime": [
          90,
          6,
          3
        ],
        "parttime": [
          90,
          9,
          1
        ],
        "unemployed": [
          92,
          7,
          1
        ],
        "comfortable": [
          92,
          5,
          3
        ],
        "gettingby": [
          89,
          9,
          2
        ],
        "difficulty": [
          89,
          8,
          3
        ]
      },
      "homes": {
        "allresp": [
          89,
          9,
          2
        ],
        "urban": [
          88,
          10,
          2
        ],
        "rural": [
          91,
          5,
          3
        ],
        "owner": [
          95,
          5,
          1
        ],
        "renter": [
          50,
          36,
          14
        ],
        "permission": [
          88,
          9,
          2
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          87,
          8,
          4
        ],
        "male": [
          90,
          8,
          3
        ],
        "female": [
          88,
          10,
          2
        ],
        "young": [
          86,
          12,
          2
        ],
        "adult": [
          88,
          9,
          3
        ],
        "old": [
          91,
          7,
          2
        ],
        "fulltime": [
          90,
          7,
          3
        ],
        "parttime": [
          83,
          15,
          2
        ],
        "unemployed": [
          92,
          7,
          1
        ],
        "comfortable": [
          90,
          7,
          3
        ],
        "gettingby": [
          88,
          10,
          2
        ],
        "difficulty": [
          88,
          9,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 50,
      "family": 28,
      "money": 24,
      "death": 11,
      "government": 17,
      "companies": 9,
      "customary": -1
    }
  },
  "KW": {
    "insecurity": {
      "allprop": {
        "allresp": [
          47,
          41,
          12
        ],
        "urban": [
          47,
          41,
          12
        ],
        "rural": [
          32,
          53,
          15
        ],
        "owner": [
          77,
          14,
          9
        ],
        "renter": [
          40,
          47,
          13
        ],
        "permission": [
          63,
          30,
          7
        ],
        "formal": [
          50,
          41,
          9
        ],
        "informal": [
          82,
          11,
          7
        ],
        "nodocs": [
          37,
          41,
          21
        ],
        "sole": [
          46,
          42,
          12
        ],
        "multiple": [
          62,
          36,
          2
        ],
        "male": [
          44,
          44,
          12
        ],
        "female": [
          54,
          35,
          11
        ],
        "young": [
          55,
          33,
          12
        ],
        "adult": [
          45,
          44,
          11
        ],
        "old": [
          60,
          21,
          19
        ],
        "fulltime": [
          43,
          45,
          12
        ],
        "parttime": [
          60,
          32,
          8
        ],
        "unemployed": [
          55,
          39,
          5
        ],
        "comfortable": [
          52,
          34,
          13
        ],
        "gettingby": [
          50,
          42,
          9
        ],
        "difficulty": [
          35,
          53,
          13
        ]
      },
      "homes": {
        "allresp": [
          48,
          40,
          12
        ],
        "urban": [
          48,
          40,
          12
        ],
        "rural": [
          32,
          53,
          15
        ],
        "owner": [
          82,
          11,
          7
        ],
        "renter": [
          40,
          47,
          13
        ],
        "permission": [
          65,
          28,
          7
        ],
        "formal": [
          51,
          40,
          9
        ],
        "informal": [
          82,
          11,
          7
        ],
        "nodocs": [
          38,
          41,
          21
        ],
        "sole": [
          46,
          42,
          12
        ],
        "multiple": [
          78,
          22,
          0
        ],
        "male": [
          45,
          43,
          12
        ],
        "female": [
          55,
          34,
          11
        ],
        "young": [
          57,
          31,
          12
        ],
        "adult": [
          46,
          43,
          11
        ],
        "old": [
          60,
          21,
          19
        ],
        "fulltime": [
          44,
          44,
          12
        ],
        "parttime": [
          63,
          29,
          8
        ],
        "unemployed": [
          59,
          36,
          5
        ],
        "comfortable": [
          54,
          33,
          13
        ],
        "gettingby": [
          51,
          41,
          8
        ],
        "difficulty": [
          35,
          52,
          13
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          75,
          1,
          24
        ],
        "urban": [
          75,
          1,
          24
        ],
        "rural": [
          57,
          4,
          38
        ],
        "owner": [
          96,
          0,
          4
        ],
        "renter": [
          80,
          0,
          19
        ],
        "permission": [
          53,
          5,
          43
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          74,
          1,
          25
        ],
        "multiple": [
          89,
          1,
          10
        ],
        "male": [
          72,
          1,
          28
        ],
        "female": [
          81,
          2,
          17
        ],
        "young": [
          72,
          3,
          25
        ],
        "adult": [
          75,
          1,
          25
        ],
        "old": [
          77,
          2,
          21
        ],
        "fulltime": [
          72,
          1,
          28
        ],
        "parttime": [
          80,
          1,
          19
        ],
        "unemployed": [
          86,
          2,
          12
        ],
        "comfortable": [
          73,
          2,
          26
        ],
        "gettingby": [
          73,
          1,
          26
        ],
        "difficulty": [
          80,
          0,
          20
        ]
      },
      "homes": {
        "allresp": [
          74,
          1,
          25
        ],
        "urban": [
          75,
          1,
          24
        ],
        "rural": [
          57,
          4,
          38
        ],
        "owner": [
          95,
          0,
          5
        ],
        "renter": [
          80,
          0,
          19
        ],
        "permission": [
          50,
          5,
          45
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          74,
          1,
          25
        ],
        "multiple": [
          80,
          1,
          19
        ],
        "male": [
          71,
          1,
          28
        ],
        "female": [
          80,
          2,
          18
        ],
        "young": [
          71,
          3,
          26
        ],
        "adult": [
          74,
          1,
          25
        ],
        "old": [
          77,
          2,
          21
        ],
        "fulltime": [
          71,
          1,
          28
        ],
        "parttime": [
          80,
          1,
          20
        ],
        "unemployed": [
          86,
          2,
          12
        ],
        "comfortable": [
          72,
          2,
          26
        ],
        "gettingby": [
          73,
          1,
          26
        ],
        "difficulty": [
          80,
          0,
          20
        ]
      }
    },
    "reasons": {
      "askedtoleave": 69,
      "family": 21,
      "money": 44,
      "death": 21,
      "government": -1,
      "companies": 27,
      "customary": 20
    }
  },
  "KG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          76,
          17,
          7
        ],
        "urban": [
          66,
          25,
          9
        ],
        "rural": [
          81,
          13,
          6
        ],
        "owner": [
          91,
          4,
          5
        ],
        "renter": [
          16,
          76,
          9
        ],
        "permission": [
          68,
          21,
          10
        ],
        "formal": [
          84,
          11,
          6
        ],
        "informal": [
          40,
          52,
          9
        ],
        "nodocs": [
          24,
          51,
          24
        ],
        "sole": [
          81,
          14,
          5
        ],
        "multiple": [
          70,
          23,
          7
        ],
        "male": [
          80,
          13,
          7
        ],
        "female": [
          72,
          20,
          7
        ],
        "young": [
          64,
          27,
          9
        ],
        "adult": [
          76,
          17,
          7
        ],
        "old": [
          91,
          5,
          4
        ],
        "fulltime": [
          74,
          23,
          3
        ],
        "parttime": [
          70,
          25,
          5
        ],
        "unemployed": [
          52,
          27,
          20
        ],
        "comfortable": [
          79,
          10,
          11
        ],
        "gettingby": [
          81,
          17,
          2
        ],
        "difficulty": [
          70,
          24,
          7
        ]
      },
      "homes": {
        "allresp": [
          77,
          17,
          7
        ],
        "urban": [
          66,
          24,
          9
        ],
        "rural": [
          82,
          13,
          5
        ],
        "owner": [
          92,
          4,
          4
        ],
        "renter": [
          19,
          73,
          9
        ],
        "permission": [
          69,
          21,
          9
        ],
        "formal": [
          85,
          9,
          5
        ],
        "informal": [
          41,
          54,
          5
        ],
        "nodocs": [
          27,
          50,
          23
        ],
        "sole": [
          81,
          14,
          5
        ],
        "multiple": [
          75,
          21,
          3
        ],
        "male": [
          81,
          13,
          6
        ],
        "female": [
          73,
          20,
          7
        ],
        "young": [
          66,
          26,
          7
        ],
        "adult": [
          77,
          16,
          7
        ],
        "old": [
          92,
          4,
          4
        ],
        "fulltime": [
          74,
          23,
          3
        ],
        "parttime": [
          72,
          25,
          3
        ],
        "unemployed": [
          58,
          26,
          16
        ],
        "comfortable": [
          80,
          10,
          10
        ],
        "gettingby": [
          82,
          16,
          2
        ],
        "difficulty": [
          71,
          23,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          84,
          9,
          7
        ],
        "urban": [
          76,
          15,
          9
        ],
        "rural": [
          88,
          6,
          5
        ],
        "owner": [
          95,
          2,
          3
        ],
        "renter": [
          23,
          49,
          28
        ],
        "permission": [
          83,
          10,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          84,
          9,
          6
        ],
        "multiple": [
          91,
          7,
          2
        ],
        "male": [
          84,
          8,
          8
        ],
        "female": [
          84,
          10,
          6
        ],
        "young": [
          78,
          11,
          11
        ],
        "adult": [
          83,
          10,
          6
        ],
        "old": [
          95,
          2,
          2
        ],
        "fulltime": [
          78,
          15,
          6
        ],
        "parttime": [
          78,
          18,
          5
        ],
        "unemployed": [
          85,
          4,
          11
        ],
        "comfortable": [
          88,
          6,
          5
        ],
        "gettingby": [
          83,
          10,
          7
        ],
        "difficulty": [
          83,
          11,
          6
        ]
      },
      "homes": {
        "allresp": [
          83,
          10,
          7
        ],
        "urban": [
          73,
          18,
          10
        ],
        "rural": [
          88,
          6,
          6
        ],
        "owner": [
          95,
          3,
          3
        ],
        "renter": [
          11,
          58,
          31
        ],
        "permission": [
          83,
          10,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          84,
          9,
          6
        ],
        "multiple": [
          84,
          13,
          4
        ],
        "male": [
          84,
          9,
          8
        ],
        "female": [
          82,
          12,
          6
        ],
        "young": [
          75,
          13,
          12
        ],
        "adult": [
          82,
          11,
          6
        ],
        "old": [
          95,
          2,
          3
        ],
        "fulltime": [
          76,
          18,
          6
        ],
        "parttime": [
          78,
          18,
          5
        ],
        "unemployed": [
          85,
          4,
          11
        ],
        "comfortable": [
          86,
          7,
          6
        ],
        "gettingby": [
          82,
          11,
          7
        ],
        "difficulty": [
          82,
          12,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 67,
      "family": 12,
      "money": 21,
      "death": 8,
      "government": 5,
      "companies": 4,
      "customary": 3
    }
  },
  "LV": {
    "insecurity": {
      "allprop": {
        "allresp": [
          79,
          11,
          10
        ],
        "urban": [
          79,
          12,
          9
        ],
        "rural": [
          77,
          7,
          16
        ],
        "owner": [
          88,
          4,
          8
        ],
        "renter": [
          56,
          29,
          15
        ],
        "permission": [
          85,
          6,
          8
        ],
        "formal": [
          82,
          10,
          8
        ],
        "informal": [
          52,
          27,
          21
        ],
        "nodocs": [
          52,
          20,
          28
        ],
        "sole": [
          80,
          11,
          9
        ],
        "multiple": [
          78,
          12,
          9
        ],
        "male": [
          76,
          12,
          12
        ],
        "female": [
          82,
          10,
          8
        ],
        "young": [
          76,
          6,
          18
        ],
        "adult": [
          76,
          15,
          9
        ],
        "old": [
          84,
          8,
          9
        ],
        "fulltime": [
          79,
          13,
          9
        ],
        "parttime": [
          67,
          15,
          18
        ],
        "unemployed": [
          76,
          15,
          9
        ],
        "comfortable": [
          83,
          11,
          6
        ],
        "gettingby": [
          83,
          11,
          6
        ],
        "difficulty": [
          76,
          12,
          12
        ]
      },
      "homes": {
        "allresp": [
          81,
          10,
          9
        ],
        "urban": [
          81,
          11,
          9
        ],
        "rural": [
          84,
          6,
          10
        ],
        "owner": [
          92,
          2,
          6
        ],
        "renter": [
          57,
          28,
          14
        ],
        "permission": [
          87,
          6,
          7
        ],
        "formal": [
          85,
          8,
          7
        ],
        "informal": [
          54,
          28,
          18
        ],
        "nodocs": [
          54,
          19,
          27
        ],
        "sole": [
          80,
          11,
          9
        ],
        "multiple": [
          87,
          8,
          5
        ],
        "male": [
          78,
          11,
          11
        ],
        "female": [
          84,
          10,
          7
        ],
        "young": [
          77,
          6,
          17
        ],
        "adult": [
          78,
          14,
          8
        ],
        "old": [
          86,
          6,
          8
        ],
        "fulltime": [
          80,
          11,
          9
        ],
        "parttime": [
          73,
          14,
          13
        ],
        "unemployed": [
          76,
          15,
          9
        ],
        "comfortable": [
          85,
          9,
          6
        ],
        "gettingby": [
          84,
          11,
          6
        ],
        "difficulty": [
          79,
          11,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          7,
          4
        ],
        "urban": [
          89,
          7,
          4
        ],
        "rural": [
          96,
          4,
          0
        ],
        "owner": [
          97,
          2,
          2
        ],
        "renter": [
          88,
          7,
          5
        ],
        "permission": [
          86,
          9,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          97,
          2,
          1
        ],
        "male": [
          87,
          7,
          6
        ],
        "female": [
          91,
          7,
          2
        ],
        "young": [
          74,
          16,
          11
        ],
        "adult": [
          88,
          8,
          4
        ],
        "old": [
          93,
          4,
          3
        ],
        "fulltime": [
          90,
          6,
          4
        ],
        "parttime": [
          91,
          4,
          4
        ],
        "unemployed": [
          82,
          15,
          4
        ],
        "comfortable": [
          93,
          3,
          4
        ],
        "gettingby": [
          88,
          7,
          4
        ],
        "difficulty": [
          90,
          7,
          3
        ]
      },
      "homes": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          87,
          8,
          4
        ],
        "rural": [
          94,
          4,
          3
        ],
        "owner": [
          96,
          2,
          2
        ],
        "renter": [
          87,
          8,
          5
        ],
        "permission": [
          84,
          11,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          90,
          8,
          2
        ],
        "male": [
          85,
          9,
          7
        ],
        "female": [
          90,
          8,
          2
        ],
        "young": [
          72,
          17,
          11
        ],
        "adult": [
          86,
          9,
          4
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          88,
          8,
          4
        ],
        "parttime": [
          89,
          4,
          6
        ],
        "unemployed": [
          82,
          15,
          4
        ],
        "comfortable": [
          91,
          5,
          4
        ],
        "gettingby": [
          87,
          9,
          4
        ],
        "difficulty": [
          89,
          8,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 72,
      "family": 30,
      "money": 52,
      "death": 14,
      "government": 18,
      "companies": 12,
      "customary": -1
    }
  },
  "LA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          52,
          25,
          23
        ],
        "urban": [
          51,
          25,
          24
        ],
        "rural": [
          57,
          21,
          21
        ],
        "owner": [
          54,
          22,
          24
        ],
        "renter": [
          30,
          55,
          14
        ],
        "permission": [
          43,
          35,
          21
        ],
        "formal": [
          53,
          25,
          22
        ],
        "informal": [
          33,
          31,
          36
        ],
        "nodocs": [
          41,
          19,
          41
        ],
        "sole": [
          55,
          21,
          23
        ],
        "multiple": [
          48,
          32,
          20
        ],
        "male": [
          55,
          25,
          20
        ],
        "female": [
          48,
          25,
          27
        ],
        "young": [
          48,
          33,
          19
        ],
        "adult": [
          52,
          24,
          24
        ],
        "old": [
          53,
          17,
          30
        ],
        "fulltime": [
          53,
          23,
          24
        ],
        "parttime": [
          48,
          30,
          22
        ],
        "unemployed": [
          0,
          0,
          100
        ],
        "comfortable": [
          59,
          17,
          23
        ],
        "gettingby": [
          54,
          24,
          21
        ],
        "difficulty": [
          44,
          31,
          26
        ]
      },
      "homes": {
        "allresp": [
          56,
          20,
          23
        ],
        "urban": [
          56,
          21,
          23
        ],
        "rural": [
          63,
          15,
          22
        ],
        "owner": [
          59,
          17,
          23
        ],
        "renter": [
          30,
          55,
          14
        ],
        "permission": [
          47,
          31,
          22
        ],
        "formal": [
          59,
          19,
          22
        ],
        "informal": [
          35,
          31,
          34
        ],
        "nodocs": [
          42,
          18,
          39
        ],
        "sole": [
          55,
          21,
          23
        ],
        "multiple": [
          62,
          19,
          19
        ],
        "male": [
          62,
          18,
          20
        ],
        "female": [
          51,
          23,
          26
        ],
        "young": [
          54,
          28,
          19
        ],
        "adult": [
          57,
          20,
          23
        ],
        "old": [
          60,
          13,
          28
        ],
        "fulltime": [
          58,
          19,
          23
        ],
        "parttime": [
          54,
          25,
          21
        ],
        "unemployed": [
          0,
          0,
          100
        ],
        "comfortable": [
          62,
          15,
          23
        ],
        "gettingby": [
          59,
          21,
          20
        ],
        "difficulty": [
          51,
          23,
          26
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          8,
          2
        ],
        "urban": [
          92,
          6,
          2
        ],
        "rural": [
          75,
          24,
          1
        ],
        "owner": [
          92,
          6,
          2
        ],
        "renter": [
          72,
          21,
          6
        ],
        "permission": [
          85,
          14,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          97,
          3,
          0
        ],
        "male": [
          89,
          8,
          2
        ],
        "female": [
          92,
          7,
          1
        ],
        "young": [
          87,
          11,
          2
        ],
        "adult": [
          90,
          8,
          2
        ],
        "old": [
          97,
          3,
          0
        ],
        "fulltime": [
          90,
          8,
          2
        ],
        "parttime": [
          92,
          7,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          90,
          4,
          5
        ],
        "gettingby": [
          92,
          7,
          1
        ],
        "difficulty": [
          88,
          9,
          3
        ]
      },
      "homes": {
        "allresp": [
          89,
          9,
          2
        ],
        "urban": [
          90,
          8,
          2
        ],
        "rural": [
          70,
          30,
          1
        ],
        "owner": [
          91,
          7,
          2
        ],
        "renter": [
          60,
          30,
          10
        ],
        "permission": [
          84,
          15,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          91,
          8,
          1
        ],
        "male": [
          87,
          10,
          3
        ],
        "female": [
          90,
          9,
          1
        ],
        "young": [
          84,
          14,
          2
        ],
        "adult": [
          89,
          9,
          2
        ],
        "old": [
          96,
          4,
          0
        ],
        "fulltime": [
          88,
          9,
          2
        ],
        "parttime": [
          91,
          8,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          89,
          6,
          5
        ],
        "gettingby": [
          90,
          9,
          1
        ],
        "difficulty": [
          87,
          10,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 39,
      "family": 31,
      "money": 48,
      "death": 35,
      "government": 16,
      "companies": 9,
      "customary": 18
    }
  },
  "LR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          51,
          43,
          6
        ],
        "urban": [
          49,
          43,
          7
        ],
        "rural": [
          52,
          43,
          5
        ],
        "owner": [
          57,
          37,
          6
        ],
        "renter": [
          31,
          64,
          5
        ],
        "permission": [
          55,
          36,
          9
        ],
        "formal": [
          51,
          44,
          6
        ],
        "informal": [
          64,
          36,
          0
        ],
        "nodocs": [
          51,
          42,
          7
        ],
        "sole": [
          49,
          44,
          7
        ],
        "multiple": [
          62,
          36,
          2
        ],
        "male": [
          52,
          42,
          6
        ],
        "female": [
          51,
          44,
          6
        ],
        "young": [
          46,
          45,
          8
        ],
        "adult": [
          51,
          45,
          4
        ],
        "old": [
          63,
          28,
          9
        ],
        "fulltime": [
          53,
          42,
          5
        ],
        "parttime": [
          52,
          39,
          10
        ],
        "unemployed": [
          53,
          40,
          6
        ],
        "comfortable": [
          52,
          31,
          18
        ],
        "gettingby": [
          69,
          29,
          2
        ],
        "difficulty": [
          49,
          46,
          5
        ]
      },
      "homes": {
        "allresp": [
          53,
          41,
          6
        ],
        "urban": [
          50,
          42,
          8
        ],
        "rural": [
          54,
          41,
          5
        ],
        "owner": [
          58,
          36,
          6
        ],
        "renter": [
          31,
          63,
          6
        ],
        "permission": [
          58,
          34,
          8
        ],
        "formal": [
          52,
          42,
          6
        ],
        "informal": [
          64,
          36,
          0
        ],
        "nodocs": [
          54,
          39,
          6
        ],
        "sole": [
          49,
          44,
          7
        ],
        "multiple": [
          71,
          27,
          2
        ],
        "male": [
          53,
          40,
          6
        ],
        "female": [
          52,
          42,
          6
        ],
        "young": [
          49,
          43,
          8
        ],
        "adult": [
          52,
          43,
          4
        ],
        "old": [
          63,
          27,
          10
        ],
        "fulltime": [
          55,
          40,
          5
        ],
        "parttime": [
          54,
          36,
          10
        ],
        "unemployed": [
          54,
          40,
          6
        ],
        "comfortable": [
          54,
          28,
          18
        ],
        "gettingby": [
          69,
          28,
          3
        ],
        "difficulty": [
          51,
          44,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          63,
          1,
          36
        ],
        "urban": [
          75,
          1,
          24
        ],
        "rural": [
          54,
          1,
          45
        ],
        "owner": [
          72,
          1,
          28
        ],
        "renter": [
          90,
          1,
          9
        ],
        "permission": [
          42,
          1,
          57
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          64,
          1,
          35
        ],
        "multiple": [
          60,
          1,
          39
        ],
        "male": [
          66,
          0,
          34
        ],
        "female": [
          62,
          1,
          38
        ],
        "young": [
          61,
          0,
          38
        ],
        "adult": [
          66,
          1,
          33
        ],
        "old": [
          54,
          0,
          46
        ],
        "fulltime": [
          68,
          0,
          32
        ],
        "parttime": [
          74,
          0,
          26
        ],
        "unemployed": [
          70,
          1,
          28
        ],
        "comfortable": [
          67,
          0,
          33
        ],
        "gettingby": [
          73,
          1,
          26
        ],
        "difficulty": [
          62,
          1,
          37
        ]
      },
      "homes": {
        "allresp": [
          61,
          1,
          38
        ],
        "urban": [
          72,
          1,
          27
        ],
        "rural": [
          52,
          1,
          47
        ],
        "owner": [
          71,
          1,
          29
        ],
        "renter": [
          90,
          1,
          9
        ],
        "permission": [
          38,
          1,
          61
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          64,
          1,
          35
        ],
        "multiple": [
          48,
          1,
          51
        ],
        "male": [
          63,
          0,
          37
        ],
        "female": [
          60,
          1,
          39
        ],
        "young": [
          58,
          0,
          42
        ],
        "adult": [
          65,
          1,
          34
        ],
        "old": [
          53,
          0,
          47
        ],
        "fulltime": [
          67,
          0,
          33
        ],
        "parttime": [
          67,
          0,
          33
        ],
        "unemployed": [
          69,
          1,
          29
        ],
        "comfortable": [
          67,
          0,
          33
        ],
        "gettingby": [
          71,
          1,
          28
        ],
        "difficulty": [
          60,
          1,
          40
        ]
      }
    },
    "reasons": {
      "askedtoleave": 29,
      "family": 33,
      "money": 20,
      "death": 5,
      "government": 8,
      "companies": 5,
      "customary": 1
    }
  },
  "LB": {
    "insecurity": {
      "allprop": {
        "allresp": [
          77,
          21,
          2
        ],
        "urban": [
          77,
          22,
          2
        ],
        "rural": [
          78,
          16,
          7
        ],
        "owner": [
          92,
          7,
          1
        ],
        "renter": [
          36,
          62,
          2
        ],
        "permission": [
          86,
          12,
          2
        ],
        "formal": [
          79,
          20,
          2
        ],
        "informal": [
          55,
          45,
          0
        ],
        "nodocs": [
          64,
          28,
          8
        ],
        "sole": [
          77,
          22,
          1
        ],
        "multiple": [
          78,
          16,
          6
        ],
        "male": [
          75,
          23,
          2
        ],
        "female": [
          78,
          19,
          3
        ],
        "young": [
          76,
          19,
          5
        ],
        "adult": [
          74,
          24,
          2
        ],
        "old": [
          85,
          14,
          1
        ],
        "fulltime": [
          75,
          23,
          2
        ],
        "parttime": [
          68,
          24,
          8
        ],
        "unemployed": [
          78,
          21,
          2
        ],
        "comfortable": [
          88,
          10,
          2
        ],
        "gettingby": [
          78,
          18,
          3
        ],
        "difficulty": [
          75,
          23,
          2
        ]
      },
      "homes": {
        "allresp": [
          78,
          20,
          2
        ],
        "urban": [
          78,
          21,
          2
        ],
        "rural": [
          80,
          15,
          6
        ],
        "owner": [
          95,
          5,
          1
        ],
        "renter": [
          36,
          62,
          2
        ],
        "permission": [
          86,
          12,
          2
        ],
        "formal": [
          80,
          19,
          1
        ],
        "informal": [
          63,
          37,
          0
        ],
        "nodocs": [
          64,
          28,
          8
        ],
        "sole": [
          77,
          22,
          1
        ],
        "multiple": [
          89,
          8,
          3
        ],
        "male": [
          77,
          22,
          1
        ],
        "female": [
          79,
          18,
          3
        ],
        "young": [
          77,
          18,
          4
        ],
        "adult": [
          75,
          23,
          2
        ],
        "old": [
          86,
          13,
          1
        ],
        "fulltime": [
          77,
          22,
          1
        ],
        "parttime": [
          71,
          21,
          8
        ],
        "unemployed": [
          78,
          21,
          2
        ],
        "comfortable": [
          91,
          7,
          2
        ],
        "gettingby": [
          81,
          16,
          3
        ],
        "difficulty": [
          76,
          22,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          88,
          0,
          12
        ],
        "urban": [
          89,
          0,
          11
        ],
        "rural": [
          79,
          3,
          18
        ],
        "owner": [
          97,
          1,
          3
        ],
        "renter": [
          87,
          0,
          13
        ],
        "permission": [
          84,
          1,
          15
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          0,
          12
        ],
        "multiple": [
          94,
          1,
          6
        ],
        "male": [
          90,
          0,
          10
        ],
        "female": [
          86,
          1,
          13
        ],
        "young": [
          75,
          1,
          24
        ],
        "adult": [
          89,
          1,
          11
        ],
        "old": [
          93,
          0,
          7
        ],
        "fulltime": [
          90,
          0,
          10
        ],
        "parttime": [
          82,
          4,
          14
        ],
        "unemployed": [
          88,
          1,
          11
        ],
        "comfortable": [
          94,
          0,
          6
        ],
        "gettingby": [
          90,
          0,
          9
        ],
        "difficulty": [
          86,
          1,
          13
        ]
      },
      "homes": {
        "allresp": [
          87,
          1,
          12
        ],
        "urban": [
          88,
          0,
          11
        ],
        "rural": [
          77,
          2,
          20
        ],
        "owner": [
          96,
          1,
          3
        ],
        "renter": [
          85,
          0,
          15
        ],
        "permission": [
          84,
          1,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          88,
          0,
          12
        ],
        "multiple": [
          88,
          1,
          11
        ],
        "male": [
          89,
          0,
          11
        ],
        "female": [
          85,
          1,
          14
        ],
        "young": [
          74,
          1,
          25
        ],
        "adult": [
          88,
          0,
          11
        ],
        "old": [
          92,
          1,
          7
        ],
        "fulltime": [
          90,
          0,
          10
        ],
        "parttime": [
          82,
          4,
          14
        ],
        "unemployed": [
          86,
          1,
          13
        ],
        "comfortable": [
          94,
          0,
          6
        ],
        "gettingby": [
          90,
          0,
          10
        ],
        "difficulty": [
          85,
          1,
          14
        ]
      }
    },
    "reasons": {
      "askedtoleave": 73,
      "family": 24,
      "money": 52,
      "death": 18,
      "government": 3,
      "companies": 2,
      "customary": 3
    }
  },
  "LY": {
    "insecurity": {
      "allprop": {
        "allresp": [
          65,
          29,
          6
        ],
        "urban": [
          67,
          28,
          6
        ],
        "rural": [
          58,
          32,
          10
        ],
        "owner": [
          75,
          19,
          6
        ],
        "renter": [
          39,
          53,
          8
        ],
        "permission": [
          68,
          27,
          5
        ],
        "formal": [
          67,
          26,
          7
        ],
        "informal": [
          null,
          null,
          null
        ],
        "nodocs": [
          55,
          41,
          4
        ],
        "sole": [
          68,
          25,
          6
        ],
        "multiple": [
          58,
          37,
          6
        ],
        "male": [
          67,
          27,
          6
        ],
        "female": [
          63,
          31,
          6
        ],
        "young": [
          71,
          26,
          3
        ],
        "adult": [
          62,
          31,
          7
        ],
        "old": [
          76,
          20,
          5
        ],
        "fulltime": [
          67,
          27,
          6
        ],
        "parttime": [
          65,
          28,
          7
        ],
        "unemployed": [
          51,
          44,
          6
        ],
        "comfortable": [
          75,
          19,
          6
        ],
        "gettingby": [
          61,
          31,
          8
        ],
        "difficulty": [
          58,
          37,
          5
        ]
      },
      "homes": {
        "allresp": [
          71,
          23,
          6
        ],
        "urban": [
          72,
          22,
          6
        ],
        "rural": [
          72,
          18,
          10
        ],
        "owner": [
          81,
          13,
          6
        ],
        "renter": [
          40,
          51,
          9
        ],
        "permission": [
          77,
          19,
          5
        ],
        "formal": [
          76,
          18,
          6
        ],
        "informal": [
          null,
          null,
          null
        ],
        "nodocs": [
          56,
          40,
          4
        ],
        "sole": [
          68,
          25,
          6
        ],
        "multiple": [
          76,
          19,
          5
        ],
        "male": [
          74,
          21,
          5
        ],
        "female": [
          68,
          25,
          7
        ],
        "young": [
          80,
          18,
          2
        ],
        "adult": [
          68,
          25,
          7
        ],
        "old": [
          77,
          19,
          4
        ],
        "fulltime": [
          73,
          22,
          5
        ],
        "parttime": [
          73,
          19,
          7
        ],
        "unemployed": [
          56,
          36,
          8
        ],
        "comfortable": [
          81,
          14,
          5
        ],
        "gettingby": [
          69,
          23,
          8
        ],
        "difficulty": [
          64,
          31,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          82,
          0,
          18
        ],
        "urban": [
          82,
          0,
          18
        ],
        "rural": [
          84,
          0,
          16
        ],
        "owner": [
          96,
          0,
          4
        ],
        "renter": [
          65,
          0,
          35
        ],
        "permission": [
          75,
          0,
          25
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          null,
          null,
          null
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          0,
          25
        ],
        "multiple": [
          97,
          0,
          3
        ],
        "male": [
          80,
          0,
          20
        ],
        "female": [
          84,
          0,
          16
        ],
        "young": [
          76,
          0,
          24
        ],
        "adult": [
          82,
          0,
          18
        ],
        "old": [
          97,
          0,
          3
        ],
        "fulltime": [
          82,
          0,
          18
        ],
        "parttime": [
          88,
          0,
          12
        ],
        "unemployed": [
          66,
          0,
          34
        ],
        "comfortable": [
          93,
          0,
          7
        ],
        "gettingby": [
          82,
          0,
          18
        ],
        "difficulty": [
          72,
          0,
          28
        ]
      },
      "homes": {
        "allresp": [
          78,
          0,
          22
        ],
        "urban": [
          79,
          0,
          21
        ],
        "rural": [
          82,
          0,
          18
        ],
        "owner": [
          93,
          0,
          7
        ],
        "renter": [
          59,
          0,
          41
        ],
        "permission": [
          71,
          0,
          29
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          null,
          null,
          null
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          0,
          25
        ],
        "multiple": [
          85,
          0,
          15
        ],
        "male": [
          77,
          0,
          23
        ],
        "female": [
          79,
          0,
          21
        ],
        "young": [
          75,
          0,
          25
        ],
        "adult": [
          76,
          0,
          24
        ],
        "old": [
          95,
          0,
          5
        ],
        "fulltime": [
          78,
          0,
          22
        ],
        "parttime": [
          81,
          0,
          19
        ],
        "unemployed": [
          62,
          0,
          38
        ],
        "comfortable": [
          91,
          0,
          9
        ],
        "gettingby": [
          77,
          0,
          23
        ],
        "difficulty": [
          66,
          0,
          34
        ]
      }
    },
    "reasons": {
      "askedtoleave": 74,
      "family": 31,
      "money": 55,
      "death": 32,
      "government": 25,
      "companies": 16,
      "customary": 22
    }
  },
  "LU": {
    "insecurity": {
      "allprop": {
        "allresp": [
          73,
          24,
          2
        ],
        "urban": [
          73,
          24,
          2
        ],
        "rural": [
          72,
          24,
          5
        ],
        "owner": [
          80,
          19,
          1
        ],
        "renter": [
          64,
          30,
          6
        ],
        "permission": [
          74,
          25,
          1
        ],
        "formal": [
          75,
          23,
          2
        ],
        "informal": [
          68,
          28,
          4
        ],
        "nodocs": [
          57,
          37,
          7
        ],
        "sole": [
          76,
          22,
          2
        ],
        "multiple": [
          68,
          30,
          2
        ],
        "male": [
          73,
          26,
          2
        ],
        "female": [
          74,
          23,
          3
        ],
        "young": [
          64,
          32,
          4
        ],
        "adult": [
          72,
          25,
          2
        ],
        "old": [
          78,
          20,
          2
        ],
        "fulltime": [
          76,
          21,
          2
        ],
        "parttime": [
          61,
          36,
          2
        ],
        "unemployed": [
          63,
          35,
          1
        ],
        "comfortable": [
          78,
          19,
          2
        ],
        "gettingby": [
          70,
          27,
          2
        ],
        "difficulty": [
          57,
          38,
          5
        ]
      },
      "homes": {
        "allresp": [
          77,
          20,
          2
        ],
        "urban": [
          78,
          20,
          2
        ],
        "rural": [
          72,
          23,
          5
        ],
        "owner": [
          84,
          15,
          1
        ],
        "renter": [
          69,
          25,
          6
        ],
        "permission": [
          77,
          22,
          1
        ],
        "formal": [
          80,
          18,
          2
        ],
        "informal": [
          69,
          28,
          3
        ],
        "nodocs": [
          56,
          39,
          5
        ],
        "sole": [
          76,
          22,
          2
        ],
        "multiple": [
          81,
          17,
          2
        ],
        "male": [
          76,
          22,
          2
        ],
        "female": [
          78,
          19,
          3
        ],
        "young": [
          67,
          30,
          4
        ],
        "adult": [
          77,
          20,
          2
        ],
        "old": [
          81,
          17,
          2
        ],
        "fulltime": [
          82,
          16,
          2
        ],
        "parttime": [
          66,
          32,
          2
        ],
        "unemployed": [
          64,
          34,
          1
        ],
        "comfortable": [
          82,
          16,
          2
        ],
        "gettingby": [
          75,
          23,
          2
        ],
        "difficulty": [
          61,
          34,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          90,
          5,
          5
        ],
        "urban": [
          90,
          5,
          5
        ],
        "rural": [
          83,
          9,
          8
        ],
        "owner": [
          97,
          0,
          2
        ],
        "renter": [
          83,
          11,
          7
        ],
        "permission": [
          81,
          9,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          7,
          7
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          92,
          7,
          2
        ],
        "female": [
          88,
          3,
          9
        ],
        "young": [
          80,
          3,
          16
        ],
        "adult": [
          90,
          5,
          4
        ],
        "old": [
          92,
          4,
          3
        ],
        "fulltime": [
          91,
          5,
          4
        ],
        "parttime": [
          88,
          3,
          9
        ],
        "unemployed": [
          91,
          7,
          2
        ],
        "comfortable": [
          92,
          4,
          4
        ],
        "gettingby": [
          89,
          5,
          6
        ],
        "difficulty": [
          83,
          10,
          7
        ]
      },
      "homes": {
        "allresp": [
          86,
          7,
          6
        ],
        "urban": [
          86,
          7,
          6
        ],
        "rural": [
          83,
          9,
          8
        ],
        "owner": [
          96,
          1,
          3
        ],
        "renter": [
          76,
          16,
          8
        ],
        "permission": [
          75,
          13,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          7,
          7
        ],
        "multiple": [
          86,
          10,
          5
        ],
        "male": [
          87,
          9,
          3
        ],
        "female": [
          85,
          6,
          10
        ],
        "young": [
          71,
          7,
          22
        ],
        "adult": [
          87,
          8,
          5
        ],
        "old": [
          89,
          7,
          4
        ],
        "fulltime": [
          88,
          7,
          5
        ],
        "parttime": [
          87,
          4,
          9
        ],
        "unemployed": [
          87,
          7,
          5
        ],
        "comfortable": [
          89,
          6,
          5
        ],
        "gettingby": [
          86,
          7,
          7
        ],
        "difficulty": [
          77,
          16,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 60,
      "family": 27,
      "money": 38,
      "death": 25,
      "government": 36,
      "companies": 11,
      "customary": -1
    }
  },
  "LT": {
    "insecurity": {
      "allprop": {
        "allresp": [
          87,
          5,
          8
        ],
        "urban": [
          88,
          4,
          8
        ],
        "rural": [
          81,
          10,
          8
        ],
        "owner": [
          93,
          2,
          5
        ],
        "renter": [
          59,
          25,
          16
        ],
        "permission": [
          88,
          3,
          9
        ],
        "formal": [
          89,
          5,
          6
        ],
        "informal": [
          59,
          12,
          29
        ],
        "nodocs": [
          86,
          4,
          10
        ],
        "sole": [
          90,
          5,
          6
        ],
        "multiple": [
          88,
          5,
          6
        ],
        "male": [
          89,
          4,
          7
        ],
        "female": [
          86,
          5,
          9
        ],
        "young": [
          87,
          5,
          8
        ],
        "adult": [
          86,
          6,
          8
        ],
        "old": [
          90,
          2,
          8
        ],
        "fulltime": [
          89,
          7,
          5
        ],
        "parttime": [
          84,
          8,
          9
        ],
        "unemployed": [
          87,
          4,
          10
        ],
        "comfortable": [
          91,
          2,
          7
        ],
        "gettingby": [
          87,
          7,
          5
        ],
        "difficulty": [
          86,
          5,
          9
        ]
      },
      "homes": {
        "allresp": [
          88,
          4,
          8
        ],
        "urban": [
          88,
          4,
          8
        ],
        "rural": [
          81,
          10,
          8
        ],
        "owner": [
          93,
          2,
          5
        ],
        "renter": [
          60,
          24,
          16
        ],
        "permission": [
          88,
          3,
          9
        ],
        "formal": [
          90,
          5,
          6
        ],
        "informal": [
          63,
          11,
          26
        ],
        "nodocs": [
          87,
          3,
          10
        ],
        "sole": [
          90,
          5,
          6
        ],
        "multiple": [
          91,
          3,
          6
        ],
        "male": [
          89,
          4,
          7
        ],
        "female": [
          87,
          5,
          9
        ],
        "young": [
          88,
          4,
          8
        ],
        "adult": [
          86,
          6,
          8
        ],
        "old": [
          90,
          2,
          8
        ],
        "fulltime": [
          89,
          6,
          5
        ],
        "parttime": [
          85,
          7,
          9
        ],
        "unemployed": [
          87,
          4,
          10
        ],
        "comfortable": [
          91,
          1,
          7
        ],
        "gettingby": [
          88,
          7,
          5
        ],
        "difficulty": [
          86,
          5,
          9
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          58,
          2,
          40
        ],
        "urban": [
          57,
          2,
          41
        ],
        "rural": [
          95,
          0,
          5
        ],
        "owner": [
          62,
          1,
          38
        ],
        "renter": [
          79,
          7,
          14
        ],
        "permission": [
          48,
          4,
          48
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          60,
          2,
          38
        ],
        "multiple": [
          92,
          1,
          7
        ],
        "male": [
          59,
          2,
          39
        ],
        "female": [
          58,
          2,
          41
        ],
        "young": [
          34,
          3,
          63
        ],
        "adult": [
          65,
          1,
          33
        ],
        "old": [
          57,
          2,
          41
        ],
        "fulltime": [
          64,
          1,
          35
        ],
        "parttime": [
          70,
          2,
          28
        ],
        "unemployed": [
          41,
          1,
          58
        ],
        "comfortable": [
          39,
          1,
          60
        ],
        "gettingby": [
          76,
          2,
          22
        ],
        "difficulty": [
          73,
          1,
          26
        ]
      },
      "homes": {
        "allresp": [
          58,
          2,
          40
        ],
        "urban": [
          57,
          2,
          41
        ],
        "rural": [
          95,
          0,
          5
        ],
        "owner": [
          62,
          1,
          38
        ],
        "renter": [
          78,
          8,
          14
        ],
        "permission": [
          48,
          4,
          48
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          60,
          2,
          38
        ],
        "multiple": [
          91,
          2,
          7
        ],
        "male": [
          59,
          3,
          39
        ],
        "female": [
          58,
          2,
          41
        ],
        "young": [
          34,
          3,
          63
        ],
        "adult": [
          65,
          1,
          33
        ],
        "old": [
          56,
          3,
          41
        ],
        "fulltime": [
          64,
          1,
          35
        ],
        "parttime": [
          70,
          2,
          28
        ],
        "unemployed": [
          41,
          1,
          58
        ],
        "comfortable": [
          39,
          1,
          60
        ],
        "gettingby": [
          75,
          2,
          22
        ],
        "difficulty": [
          72,
          2,
          26
        ]
      }
    },
    "reasons": {
      "askedtoleave": 62,
      "family": 31,
      "money": 48,
      "death": 15,
      "government": 4,
      "companies": 2,
      "customary": -1
    }
  },
  "MW": {
    "insecurity": {
      "allprop": {
        "allresp": [
          71,
          21,
          9
        ],
        "urban": [
          59,
          27,
          14
        ],
        "rural": [
          72,
          20,
          8
        ],
        "owner": [
          77,
          15,
          8
        ],
        "renter": [
          59,
          30,
          11
        ],
        "permission": [
          74,
          20,
          6
        ],
        "formal": [
          73,
          21,
          6
        ],
        "informal": [
          62,
          25,
          13
        ],
        "nodocs": [
          70,
          20,
          10
        ],
        "sole": [
          72,
          19,
          9
        ],
        "multiple": [
          61,
          36,
          2
        ],
        "male": [
          70,
          21,
          9
        ],
        "female": [
          72,
          21,
          8
        ],
        "young": [
          67,
          23,
          9
        ],
        "adult": [
          72,
          20,
          7
        ],
        "old": [
          71,
          16,
          13
        ],
        "fulltime": [
          64,
          29,
          7
        ],
        "parttime": [
          78,
          18,
          3
        ],
        "unemployed": [
          70,
          20,
          10
        ],
        "comfortable": [
          77,
          18,
          6
        ],
        "gettingby": [
          73,
          16,
          11
        ],
        "difficulty": [
          69,
          23,
          8
        ]
      },
      "homes": {
        "allresp": [
          72,
          19,
          8
        ],
        "urban": [
          62,
          24,
          14
        ],
        "rural": [
          74,
          19,
          8
        ],
        "owner": [
          78,
          14,
          8
        ],
        "renter": [
          59,
          30,
          11
        ],
        "permission": [
          77,
          18,
          6
        ],
        "formal": [
          76,
          18,
          6
        ],
        "informal": [
          63,
          25,
          11
        ],
        "nodocs": [
          71,
          20,
          10
        ],
        "sole": [
          72,
          19,
          9
        ],
        "multiple": [
          75,
          23,
          2
        ],
        "male": [
          72,
          19,
          9
        ],
        "female": [
          72,
          20,
          8
        ],
        "young": [
          69,
          22,
          9
        ],
        "adult": [
          74,
          19,
          7
        ],
        "old": [
          72,
          15,
          13
        ],
        "fulltime": [
          68,
          26,
          6
        ],
        "parttime": [
          81,
          16,
          3
        ],
        "unemployed": [
          70,
          19,
          10
        ],
        "comfortable": [
          79,
          16,
          6
        ],
        "gettingby": [
          74,
          15,
          11
        ],
        "difficulty": [
          71,
          22,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          37,
          5,
          58
        ],
        "urban": [
          31,
          7,
          62
        ],
        "rural": [
          38,
          5,
          57
        ],
        "owner": [
          43,
          4,
          52
        ],
        "renter": [
          26,
          16,
          58
        ],
        "permission": [
          33,
          3,
          64
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          33,
          5,
          62
        ],
        "multiple": [
          76,
          5,
          18
        ],
        "male": [
          40,
          4,
          56
        ],
        "female": [
          34,
          6,
          60
        ],
        "young": [
          33,
          4,
          63
        ],
        "adult": [
          39,
          5,
          57
        ],
        "old": [
          38,
          10,
          52
        ],
        "fulltime": [
          40,
          6,
          55
        ],
        "parttime": [
          47,
          4,
          49
        ],
        "unemployed": [
          32,
          6,
          62
        ],
        "comfortable": [
          47,
          7,
          46
        ],
        "gettingby": [
          35,
          4,
          61
        ],
        "difficulty": [
          36,
          6,
          58
        ]
      },
      "homes": {
        "allresp": [
          35,
          6,
          60
        ],
        "urban": [
          29,
          7,
          64
        ],
        "rural": [
          35,
          5,
          59
        ],
        "owner": [
          43,
          5,
          53
        ],
        "renter": [
          20,
          17,
          62
        ],
        "permission": [
          28,
          3,
          69
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          33,
          5,
          62
        ],
        "multiple": [
          53,
          11,
          37
        ],
        "male": [
          38,
          5,
          57
        ],
        "female": [
          32,
          6,
          62
        ],
        "young": [
          29,
          4,
          67
        ],
        "adult": [
          37,
          5,
          58
        ],
        "old": [
          38,
          11,
          52
        ],
        "fulltime": [
          37,
          6,
          57
        ],
        "parttime": [
          47,
          4,
          49
        ],
        "unemployed": [
          30,
          7,
          64
        ],
        "comfortable": [
          44,
          8,
          48
        ],
        "gettingby": [
          33,
          4,
          63
        ],
        "difficulty": [
          34,
          6,
          60
        ]
      }
    },
    "reasons": {
      "askedtoleave": 23,
      "family": 21,
      "money": 11,
      "death": 3,
      "government": 20,
      "companies": 5,
      "customary": 5
    }
  },
  "MG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          67,
          25,
          8
        ],
        "urban": [
          61,
          29,
          10
        ],
        "rural": [
          69,
          24,
          7
        ],
        "owner": [
          82,
          13,
          5
        ],
        "renter": [
          47,
          45,
          8
        ],
        "permission": [
          67,
          21,
          11
        ],
        "formal": [
          72,
          23,
          5
        ],
        "informal": [
          75,
          17,
          8
        ],
        "nodocs": [
          56,
          31,
          12
        ],
        "sole": [
          67,
          25,
          8
        ],
        "multiple": [
          70,
          24,
          7
        ],
        "male": [
          68,
          25,
          7
        ],
        "female": [
          66,
          25,
          8
        ],
        "young": [
          62,
          29,
          9
        ],
        "adult": [
          68,
          25,
          7
        ],
        "old": [
          78,
          16,
          6
        ],
        "fulltime": [
          69,
          25,
          6
        ],
        "parttime": [
          63,
          28,
          9
        ],
        "unemployed": [
          64,
          20,
          16
        ],
        "comfortable": [
          63,
          33,
          4
        ],
        "gettingby": [
          72,
          21,
          7
        ],
        "difficulty": [
          66,
          26,
          8
        ]
      },
      "homes": {
        "allresp": [
          68,
          25,
          8
        ],
        "urban": [
          61,
          29,
          10
        ],
        "rural": [
          70,
          23,
          7
        ],
        "owner": [
          82,
          12,
          5
        ],
        "renter": [
          47,
          45,
          8
        ],
        "permission": [
          68,
          21,
          11
        ],
        "formal": [
          73,
          23,
          5
        ],
        "informal": [
          75,
          17,
          8
        ],
        "nodocs": [
          57,
          31,
          12
        ],
        "sole": [
          67,
          25,
          8
        ],
        "multiple": [
          74,
          20,
          6
        ],
        "male": [
          69,
          24,
          7
        ],
        "female": [
          66,
          25,
          8
        ],
        "young": [
          62,
          29,
          9
        ],
        "adult": [
          68,
          25,
          7
        ],
        "old": [
          79,
          15,
          7
        ],
        "fulltime": [
          69,
          25,
          6
        ],
        "parttime": [
          63,
          28,
          9
        ],
        "unemployed": [
          64,
          20,
          16
        ],
        "comfortable": [
          63,
          33,
          4
        ],
        "gettingby": [
          72,
          21,
          7
        ],
        "difficulty": [
          67,
          26,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          58,
          10,
          32
        ],
        "urban": [
          67,
          9,
          24
        ],
        "rural": [
          56,
          10,
          35
        ],
        "owner": [
          76,
          10,
          14
        ],
        "renter": [
          48,
          14,
          38
        ],
        "permission": [
          41,
          8,
          52
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          56,
          10,
          34
        ],
        "multiple": [
          91,
          3,
          6
        ],
        "male": [
          61,
          11,
          29
        ],
        "female": [
          56,
          9,
          35
        ],
        "young": [
          47,
          10,
          43
        ],
        "adult": [
          61,
          10,
          29
        ],
        "old": [
          69,
          10,
          21
        ],
        "fulltime": [
          65,
          9,
          27
        ],
        "parttime": [
          54,
          13,
          33
        ],
        "unemployed": [
          53,
          8,
          38
        ],
        "comfortable": [
          54,
          19,
          27
        ],
        "gettingby": [
          60,
          10,
          30
        ],
        "difficulty": [
          58,
          9,
          32
        ]
      },
      "homes": {
        "allresp": [
          57,
          10,
          33
        ],
        "urban": [
          66,
          10,
          25
        ],
        "rural": [
          54,
          10,
          36
        ],
        "owner": [
          76,
          10,
          14
        ],
        "renter": [
          46,
          15,
          39
        ],
        "permission": [
          38,
          7,
          54
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          56,
          10,
          34
        ],
        "multiple": [
          72,
          5,
          22
        ],
        "male": [
          59,
          11,
          30
        ],
        "female": [
          55,
          9,
          36
        ],
        "young": [
          47,
          9,
          44
        ],
        "adult": [
          60,
          10,
          30
        ],
        "old": [
          67,
          11,
          22
        ],
        "fulltime": [
          63,
          9,
          28
        ],
        "parttime": [
          52,
          14,
          34
        ],
        "unemployed": [
          53,
          8,
          38
        ],
        "comfortable": [
          54,
          19,
          27
        ],
        "gettingby": [
          58,
          10,
          32
        ],
        "difficulty": [
          57,
          9,
          34
        ]
      }
    },
    "reasons": {
      "askedtoleave": 48,
      "family": 6,
      "money": 11,
      "death": 1,
      "government": 11,
      "companies": 11,
      "customary": 3
    }
  },
  "MY": {
    "insecurity": {
      "allprop": {
        "allresp": [
          54,
          34,
          12
        ],
        "urban": [
          53,
          35,
          12
        ],
        "rural": [
          67,
          28,
          6
        ],
        "owner": [
          77,
          17,
          6
        ],
        "renter": [
          25,
          56,
          20
        ],
        "permission": [
          66,
          24,
          10
        ],
        "formal": [
          59,
          32,
          10
        ],
        "informal": [
          46,
          38,
          16
        ],
        "nodocs": [
          33,
          49,
          18
        ],
        "sole": [
          56,
          32,
          12
        ],
        "multiple": [
          50,
          44,
          7
        ],
        "male": [
          54,
          35,
          12
        ],
        "female": [
          55,
          34,
          11
        ],
        "young": [
          45,
          43,
          12
        ],
        "adult": [
          52,
          37,
          11
        ],
        "old": [
          72,
          17,
          11
        ],
        "fulltime": [
          52,
          37,
          11
        ],
        "parttime": [
          52,
          38,
          10
        ],
        "unemployed": [
          56,
          34,
          11
        ],
        "comfortable": [
          58,
          33,
          10
        ],
        "gettingby": [
          55,
          35,
          10
        ],
        "difficulty": [
          51,
          34,
          15
        ]
      },
      "homes": {
        "allresp": [
          57,
          32,
          11
        ],
        "urban": [
          56,
          33,
          11
        ],
        "rural": [
          69,
          25,
          6
        ],
        "owner": [
          81,
          14,
          6
        ],
        "renter": [
          26,
          55,
          20
        ],
        "permission": [
          69,
          22,
          9
        ],
        "formal": [
          62,
          29,
          9
        ],
        "informal": [
          45,
          39,
          16
        ],
        "nodocs": [
          35,
          49,
          16
        ],
        "sole": [
          56,
          32,
          12
        ],
        "multiple": [
          64,
          33,
          3
        ],
        "male": [
          57,
          32,
          11
        ],
        "female": [
          57,
          32,
          11
        ],
        "young": [
          47,
          42,
          12
        ],
        "adult": [
          54,
          35,
          11
        ],
        "old": [
          75,
          15,
          10
        ],
        "fulltime": [
          55,
          35,
          10
        ],
        "parttime": [
          56,
          34,
          10
        ],
        "unemployed": [
          56,
          34,
          11
        ],
        "comfortable": [
          60,
          30,
          10
        ],
        "gettingby": [
          58,
          32,
          10
        ],
        "difficulty": [
          53,
          34,
          14
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          77,
          14,
          9
        ],
        "urban": [
          79,
          13,
          8
        ],
        "rural": [
          59,
          24,
          17
        ],
        "owner": [
          91,
          7,
          2
        ],
        "renter": [
          80,
          12,
          8
        ],
        "permission": [
          68,
          22,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          77,
          15,
          8
        ],
        "multiple": [
          83,
          8,
          8
        ],
        "male": [
          75,
          15,
          10
        ],
        "female": [
          79,
          13,
          8
        ],
        "young": [
          75,
          12,
          12
        ],
        "adult": [
          76,
          15,
          9
        ],
        "old": [
          81,
          13,
          6
        ],
        "fulltime": [
          76,
          13,
          11
        ],
        "parttime": [
          81,
          10,
          9
        ],
        "unemployed": [
          71,
          16,
          12
        ],
        "comfortable": [
          76,
          14,
          10
        ],
        "gettingby": [
          79,
          12,
          9
        ],
        "difficulty": [
          74,
          16,
          10
        ]
      },
      "homes": {
        "allresp": [
          76,
          15,
          10
        ],
        "urban": [
          77,
          14,
          9
        ],
        "rural": [
          58,
          24,
          17
        ],
        "owner": [
          91,
          8,
          2
        ],
        "renter": [
          78,
          14,
          9
        ],
        "permission": [
          68,
          22,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          77,
          15,
          8
        ],
        "multiple": [
          77,
          13,
          10
        ],
        "male": [
          74,
          16,
          10
        ],
        "female": [
          77,
          14,
          9
        ],
        "young": [
          74,
          14,
          12
        ],
        "adult": [
          75,
          16,
          10
        ],
        "old": [
          81,
          13,
          6
        ],
        "fulltime": [
          75,
          14,
          11
        ],
        "parttime": [
          80,
          11,
          9
        ],
        "unemployed": [
          71,
          16,
          12
        ],
        "comfortable": [
          74,
          15,
          10
        ],
        "gettingby": [
          78,
          13,
          9
        ],
        "difficulty": [
          72,
          17,
          10
        ]
      }
    },
    "reasons": {
      "askedtoleave": 66,
      "family": 12,
      "money": 37,
      "death": 16,
      "government": 20,
      "companies": 16,
      "customary": 6
    }
  },
  "ML": {
    "insecurity": {
      "allprop": {
        "allresp": [
          65,
          31,
          4
        ],
        "urban": [
          65,
          31,
          4
        ],
        "rural": [
          66,
          31,
          2
        ],
        "owner": [
          70,
          27,
          3
        ],
        "renter": [
          39,
          58,
          3
        ],
        "permission": [
          67,
          28,
          5
        ],
        "formal": [
          66,
          33,
          1
        ],
        "informal": [
          65,
          35,
          0
        ],
        "nodocs": [
          63,
          27,
          10
        ],
        "sole": [
          67,
          30,
          2
        ],
        "multiple": [
          62,
          34,
          4
        ],
        "male": [
          68,
          30,
          2
        ],
        "female": [
          62,
          32,
          6
        ],
        "young": [
          62,
          35,
          3
        ],
        "adult": [
          67,
          30,
          3
        ],
        "old": [
          65,
          26,
          9
        ],
        "fulltime": [
          71,
          26,
          3
        ],
        "parttime": [
          55,
          41,
          4
        ],
        "unemployed": [
          66,
          32,
          3
        ],
        "comfortable": [
          74,
          24,
          2
        ],
        "gettingby": [
          66,
          32,
          3
        ],
        "difficulty": [
          64,
          31,
          4
        ]
      },
      "homes": {
        "allresp": [
          67,
          29,
          4
        ],
        "urban": [
          67,
          28,
          4
        ],
        "rural": [
          67,
          30,
          3
        ],
        "owner": [
          72,
          25,
          3
        ],
        "renter": [
          41,
          57,
          2
        ],
        "permission": [
          69,
          26,
          5
        ],
        "formal": [
          69,
          30,
          1
        ],
        "informal": [
          67,
          33,
          0
        ],
        "nodocs": [
          65,
          25,
          10
        ],
        "sole": [
          67,
          30,
          2
        ],
        "multiple": [
          71,
          24,
          4
        ],
        "male": [
          72,
          26,
          3
        ],
        "female": [
          63,
          31,
          6
        ],
        "young": [
          65,
          32,
          3
        ],
        "adult": [
          69,
          28,
          3
        ],
        "old": [
          66,
          23,
          10
        ],
        "fulltime": [
          73,
          24,
          3
        ],
        "parttime": [
          59,
          37,
          4
        ],
        "unemployed": [
          67,
          31,
          2
        ],
        "comfortable": [
          77,
          21,
          2
        ],
        "gettingby": [
          68,
          30,
          3
        ],
        "difficulty": [
          67,
          29,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          65,
          2,
          33
        ],
        "urban": [
          64,
          3,
          34
        ],
        "rural": [
          71,
          2,
          28
        ],
        "owner": [
          64,
          2,
          34
        ],
        "renter": [
          71,
          5,
          24
        ],
        "permission": [
          68,
          2,
          30
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          60,
          3,
          36
        ],
        "multiple": [
          80,
          0,
          20
        ],
        "male": [
          64,
          2,
          34
        ],
        "female": [
          65,
          3,
          32
        ],
        "young": [
          63,
          3,
          34
        ],
        "adult": [
          67,
          2,
          31
        ],
        "old": [
          59,
          3,
          39
        ],
        "fulltime": [
          63,
          2,
          35
        ],
        "parttime": [
          63,
          3,
          34
        ],
        "unemployed": [
          71,
          3,
          26
        ],
        "comfortable": [
          81,
          4,
          15
        ],
        "gettingby": [
          67,
          2,
          31
        ],
        "difficulty": [
          61,
          3,
          36
        ]
      },
      "homes": {
        "allresp": [
          63,
          3,
          34
        ],
        "urban": [
          62,
          3,
          35
        ],
        "rural": [
          69,
          2,
          29
        ],
        "owner": [
          62,
          2,
          36
        ],
        "renter": [
          69,
          5,
          26
        ],
        "permission": [
          66,
          2,
          31
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          60,
          3,
          36
        ],
        "multiple": [
          73,
          1,
          26
        ],
        "male": [
          62,
          2,
          36
        ],
        "female": [
          64,
          3,
          33
        ],
        "young": [
          63,
          3,
          34
        ],
        "adult": [
          65,
          2,
          33
        ],
        "old": [
          57,
          3,
          40
        ],
        "fulltime": [
          62,
          2,
          36
        ],
        "parttime": [
          61,
          4,
          35
        ],
        "unemployed": [
          71,
          3,
          27
        ],
        "comfortable": [
          77,
          4,
          20
        ],
        "gettingby": [
          66,
          2,
          32
        ],
        "difficulty": [
          59,
          3,
          38
        ]
      }
    },
    "reasons": {
      "askedtoleave": 69,
      "family": 37,
      "money": 51,
      "death": 33,
      "government": 46,
      "companies": 26,
      "customary": 39
    }
  },
  "MT": {
    "insecurity": {
      "allprop": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          87,
          8,
          4
        ],
        "rural": [
          93,
          6,
          0
        ],
        "owner": [
          92,
          5,
          3
        ],
        "renter": [
          58,
          27,
          16
        ],
        "permission": [
          88,
          10,
          2
        ],
        "formal": [
          89,
          7,
          4
        ],
        "informal": [
          73,
          22,
          5
        ],
        "nodocs": [
          90,
          3,
          7
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          87,
          10,
          3
        ],
        "male": [
          88,
          9,
          3
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          98,
          2,
          0
        ],
        "adult": [
          86,
          12,
          2
        ],
        "old": [
          87,
          6,
          7
        ],
        "fulltime": [
          88,
          9,
          3
        ],
        "parttime": [
          94,
          2,
          4
        ],
        "unemployed": [
          87,
          13,
          0
        ],
        "comfortable": [
          89,
          6,
          5
        ],
        "gettingby": [
          92,
          6,
          2
        ],
        "difficulty": [
          73,
          21,
          6
        ]
      },
      "homes": {
        "allresp": [
          89,
          7,
          4
        ],
        "urban": [
          89,
          8,
          4
        ],
        "rural": [
          93,
          6,
          0
        ],
        "owner": [
          93,
          4,
          3
        ],
        "renter": [
          60,
          24,
          16
        ],
        "permission": [
          89,
          10,
          1
        ],
        "formal": [
          90,
          6,
          4
        ],
        "informal": [
          76,
          21,
          3
        ],
        "nodocs": [
          90,
          3,
          7
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          94,
          5,
          1
        ],
        "male": [
          89,
          8,
          3
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          98,
          2,
          0
        ],
        "adult": [
          87,
          11,
          2
        ],
        "old": [
          89,
          5,
          6
        ],
        "fulltime": [
          89,
          8,
          3
        ],
        "parttime": [
          95,
          2,
          3
        ],
        "unemployed": [
          87,
          13,
          0
        ],
        "comfortable": [
          90,
          6,
          5
        ],
        "gettingby": [
          94,
          4,
          2
        ],
        "difficulty": [
          74,
          21,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          7,
          2
        ],
        "urban": [
          91,
          7,
          2
        ],
        "rural": [
          90,
          10,
          0
        ],
        "owner": [
          96,
          4,
          1
        ],
        "renter": [
          70,
          28,
          2
        ],
        "permission": [
          87,
          9,
          4
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          99,
          1,
          0
        ],
        "male": [
          92,
          6,
          2
        ],
        "female": [
          90,
          9,
          1
        ],
        "young": [
          89,
          7,
          4
        ],
        "adult": [
          92,
          6,
          2
        ],
        "old": [
          90,
          9,
          0
        ],
        "fulltime": [
          94,
          4,
          2
        ],
        "parttime": [
          90,
          10,
          0
        ],
        "unemployed": [
          87,
          1,
          12
        ],
        "comfortable": [
          94,
          4,
          2
        ],
        "gettingby": [
          91,
          8,
          1
        ],
        "difficulty": [
          83,
          13,
          4
        ]
      },
      "homes": {
        "allresp": [
          91,
          8,
          2
        ],
        "urban": [
          91,
          7,
          2
        ],
        "rural": [
          90,
          10,
          0
        ],
        "owner": [
          96,
          4,
          1
        ],
        "renter": [
          69,
          29,
          2
        ],
        "permission": [
          85,
          11,
          4
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          9,
          2
        ],
        "multiple": [
          96,
          3,
          0
        ],
        "male": [
          92,
          6,
          2
        ],
        "female": [
          90,
          9,
          1
        ],
        "young": [
          88,
          7,
          5
        ],
        "adult": [
          91,
          6,
          2
        ],
        "old": [
          90,
          10,
          0
        ],
        "fulltime": [
          94,
          4,
          2
        ],
        "parttime": [
          89,
          11,
          0
        ],
        "unemployed": [
          87,
          1,
          12
        ],
        "comfortable": [
          94,
          4,
          2
        ],
        "gettingby": [
          90,
          9,
          1
        ],
        "difficulty": [
          83,
          14,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 63,
      "family": 22,
      "money": 31,
      "death": 27,
      "government": 12,
      "companies": 5,
      "customary": -1
    }
  },
  "KE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          61,
          28,
          11
        ],
        "urban": [
          51,
          37,
          13
        ],
        "rural": [
          64,
          25,
          11
        ],
        "owner": [
          69,
          22,
          9
        ],
        "renter": [
          45,
          41,
          14
        ],
        "permission": [
          67,
          23,
          10
        ],
        "formal": [
          68,
          25,
          8
        ],
        "informal": [
          46,
          43,
          11
        ],
        "nodocs": [
          55,
          29,
          15
        ],
        "sole": [
          63,
          26,
          12
        ],
        "multiple": [
          50,
          41,
          9
        ],
        "male": [
          63,
          28,
          9
        ],
        "female": [
          58,
          28,
          13
        ],
        "young": [
          58,
          30,
          13
        ],
        "adult": [
          60,
          29,
          11
        ],
        "old": [
          71,
          20,
          10
        ],
        "fulltime": [
          61,
          28,
          11
        ],
        "parttime": [
          50,
          38,
          12
        ],
        "unemployed": [
          55,
          32,
          14
        ],
        "comfortable": [
          64,
          26,
          10
        ],
        "gettingby": [
          67,
          26,
          7
        ],
        "difficulty": [
          58,
          30,
          13
        ]
      },
      "homes": {
        "allresp": [
          63,
          26,
          11
        ],
        "urban": [
          52,
          36,
          13
        ],
        "rural": [
          66,
          23,
          10
        ],
        "owner": [
          71,
          21,
          8
        ],
        "renter": [
          46,
          39,
          14
        ],
        "permission": [
          70,
          21,
          9
        ],
        "formal": [
          72,
          22,
          7
        ],
        "informal": [
          49,
          40,
          11
        ],
        "nodocs": [
          56,
          28,
          15
        ],
        "sole": [
          63,
          26,
          12
        ],
        "multiple": [
          62,
          31,
          8
        ],
        "male": [
          65,
          26,
          9
        ],
        "female": [
          61,
          26,
          13
        ],
        "young": [
          59,
          28,
          13
        ],
        "adult": [
          62,
          27,
          11
        ],
        "old": [
          71,
          19,
          10
        ],
        "fulltime": [
          62,
          27,
          11
        ],
        "parttime": [
          51,
          37,
          12
        ],
        "unemployed": [
          57,
          30,
          13
        ],
        "comfortable": [
          66,
          24,
          10
        ],
        "gettingby": [
          69,
          24,
          7
        ],
        "difficulty": [
          60,
          28,
          12
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          50,
          8,
          42
        ],
        "urban": [
          45,
          12,
          42
        ],
        "rural": [
          51,
          7,
          42
        ],
        "owner": [
          67,
          5,
          28
        ],
        "renter": [
          38,
          18,
          44
        ],
        "permission": [
          44,
          3,
          53
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          44,
          9,
          47
        ],
        "multiple": [
          75,
          5,
          20
        ],
        "male": [
          53,
          8,
          39
        ],
        "female": [
          47,
          8,
          45
        ],
        "young": [
          34,
          11,
          55
        ],
        "adult": [
          51,
          8,
          41
        ],
        "old": [
          70,
          4,
          26
        ],
        "fulltime": [
          52,
          9,
          39
        ],
        "parttime": [
          45,
          15,
          41
        ],
        "unemployed": [
          42,
          7,
          52
        ],
        "comfortable": [
          46,
          9,
          45
        ],
        "gettingby": [
          55,
          9,
          36
        ],
        "difficulty": [
          49,
          8,
          43
        ]
      },
      "homes": {
        "allresp": [
          46,
          10,
          45
        ],
        "urban": [
          42,
          14,
          44
        ],
        "rural": [
          47,
          8,
          45
        ],
        "owner": [
          65,
          6,
          29
        ],
        "renter": [
          32,
          21,
          47
        ],
        "permission": [
          40,
          3,
          57
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          44,
          9,
          47
        ],
        "multiple": [
          52,
          12,
          36
        ],
        "male": [
          50,
          9,
          41
        ],
        "female": [
          42,
          10,
          48
        ],
        "young": [
          31,
          12,
          57
        ],
        "adult": [
          47,
          10,
          44
        ],
        "old": [
          67,
          5,
          28
        ],
        "fulltime": [
          47,
          11,
          42
        ],
        "parttime": [
          41,
          17,
          42
        ],
        "unemployed": [
          39,
          7,
          54
        ],
        "comfortable": [
          41,
          10,
          49
        ],
        "gettingby": [
          49,
          12,
          39
        ],
        "difficulty": [
          46,
          9,
          45
        ]
      }
    },
    "reasons": {
      "askedtoleave": 16,
      "family": 10,
      "money": 19,
      "death": 1,
      "government": 9,
      "companies": 2,
      "customary": 2
    }
  },
  "ME": {
    "insecurity": {
      "allprop": {
        "allresp": [
          82,
          13,
          5
        ],
        "urban": [
          81,
          13,
          6
        ],
        "rural": [
          92,
          7,
          1
        ],
        "owner": [
          92,
          6,
          2
        ],
        "renter": [
          43,
          46,
          10
        ],
        "permission": [
          85,
          9,
          6
        ],
        "formal": [
          89,
          9,
          3
        ],
        "informal": [
          54,
          34,
          12
        ],
        "nodocs": [
          60,
          23,
          16
        ],
        "sole": [
          83,
          12,
          5
        ],
        "multiple": [
          81,
          15,
          4
        ],
        "male": [
          84,
          11,
          5
        ],
        "female": [
          81,
          14,
          6
        ],
        "young": [
          80,
          13,
          7
        ],
        "adult": [
          80,
          15,
          5
        ],
        "old": [
          88,
          8,
          5
        ],
        "fulltime": [
          81,
          15,
          4
        ],
        "parttime": [
          86,
          8,
          6
        ],
        "unemployed": [
          90,
          6,
          4
        ],
        "comfortable": [
          86,
          8,
          6
        ],
        "gettingby": [
          81,
          14,
          5
        ],
        "difficulty": [
          84,
          12,
          4
        ]
      },
      "homes": {
        "allresp": [
          83,
          12,
          5
        ],
        "urban": [
          82,
          13,
          5
        ],
        "rural": [
          92,
          7,
          1
        ],
        "owner": [
          93,
          5,
          2
        ],
        "renter": [
          46,
          44,
          10
        ],
        "permission": [
          86,
          9,
          5
        ],
        "formal": [
          90,
          7,
          2
        ],
        "informal": [
          55,
          33,
          12
        ],
        "nodocs": [
          60,
          25,
          15
        ],
        "sole": [
          83,
          12,
          5
        ],
        "multiple": [
          87,
          11,
          2
        ],
        "male": [
          85,
          11,
          4
        ],
        "female": [
          82,
          13,
          5
        ],
        "young": [
          80,
          13,
          7
        ],
        "adult": [
          82,
          14,
          4
        ],
        "old": [
          88,
          8,
          5
        ],
        "fulltime": [
          81,
          15,
          3
        ],
        "parttime": [
          86,
          8,
          6
        ],
        "unemployed": [
          90,
          6,
          4
        ],
        "comfortable": [
          87,
          7,
          6
        ],
        "gettingby": [
          82,
          14,
          4
        ],
        "difficulty": [
          84,
          12,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          79,
          7,
          14
        ],
        "urban": [
          78,
          7,
          15
        ],
        "rural": [
          82,
          9,
          8
        ],
        "owner": [
          94,
          1,
          4
        ],
        "renter": [
          39,
          17,
          44
        ],
        "permission": [
          77,
          9,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          78,
          8,
          14
        ],
        "multiple": [
          94,
          2,
          4
        ],
        "male": [
          82,
          5,
          13
        ],
        "female": [
          76,
          10,
          14
        ],
        "young": [
          68,
          12,
          20
        ],
        "adult": [
          76,
          8,
          16
        ],
        "old": [
          89,
          4,
          7
        ],
        "fulltime": [
          79,
          7,
          15
        ],
        "parttime": [
          83,
          5,
          12
        ],
        "unemployed": [
          83,
          9,
          7
        ],
        "comfortable": [
          80,
          6,
          14
        ],
        "gettingby": [
          78,
          9,
          12
        ],
        "difficulty": [
          80,
          5,
          15
        ]
      },
      "homes": {
        "allresp": [
          78,
          7,
          15
        ],
        "urban": [
          77,
          7,
          16
        ],
        "rural": [
          82,
          9,
          8
        ],
        "owner": [
          94,
          1,
          4
        ],
        "renter": [
          32,
          19,
          49
        ],
        "permission": [
          76,
          9,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          78,
          8,
          14
        ],
        "multiple": [
          89,
          3,
          9
        ],
        "male": [
          80,
          5,
          15
        ],
        "female": [
          76,
          10,
          14
        ],
        "young": [
          66,
          12,
          22
        ],
        "adult": [
          75,
          8,
          17
        ],
        "old": [
          88,
          5,
          7
        ],
        "fulltime": [
          78,
          7,
          16
        ],
        "parttime": [
          77,
          7,
          16
        ],
        "unemployed": [
          81,
          12,
          7
        ],
        "comfortable": [
          79,
          6,
          15
        ],
        "gettingby": [
          77,
          9,
          13
        ],
        "difficulty": [
          79,
          5,
          16
        ]
      }
    },
    "reasons": {
      "askedtoleave": 62,
      "family": 19,
      "money": 20,
      "death": 8,
      "government": 9,
      "companies": 7,
      "customary": -1
    }
  },
  "MR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          72,
          18,
          10
        ],
        "urban": [
          72,
          18,
          10
        ],
        "rural": [
          76,
          18,
          6
        ],
        "owner": [
          89,
          6,
          5
        ],
        "renter": [
          48,
          41,
          12
        ],
        "permission": [
          75,
          15,
          9
        ],
        "formal": [
          75,
          14,
          11
        ],
        "informal": [
          72,
          22,
          6
        ],
        "nodocs": [
          67,
          22,
          11
        ],
        "sole": [
          74,
          19,
          7
        ],
        "multiple": [
          64,
          21,
          15
        ],
        "male": [
          70,
          20,
          9
        ],
        "female": [
          74,
          16,
          10
        ],
        "young": [
          67,
          19,
          14
        ],
        "adult": [
          73,
          19,
          8
        ],
        "old": [
          80,
          10,
          10
        ],
        "fulltime": [
          73,
          23,
          4
        ],
        "parttime": [
          68,
          25,
          7
        ],
        "unemployed": [
          56,
          28,
          16
        ],
        "comfortable": [
          87,
          6,
          7
        ],
        "gettingby": [
          73,
          18,
          9
        ],
        "difficulty": [
          68,
          21,
          10
        ]
      },
      "homes": {
        "allresp": [
          73,
          18,
          9
        ],
        "urban": [
          73,
          18,
          9
        ],
        "rural": [
          77,
          17,
          6
        ],
        "owner": [
          90,
          5,
          4
        ],
        "renter": [
          48,
          41,
          12
        ],
        "permission": [
          76,
          15,
          9
        ],
        "formal": [
          76,
          14,
          10
        ],
        "informal": [
          73,
          21,
          6
        ],
        "nodocs": [
          68,
          22,
          10
        ],
        "sole": [
          74,
          19,
          7
        ],
        "multiple": [
          72,
          18,
          10
        ],
        "male": [
          71,
          20,
          9
        ],
        "female": [
          75,
          16,
          9
        ],
        "young": [
          69,
          18,
          13
        ],
        "adult": [
          74,
          19,
          7
        ],
        "old": [
          80,
          10,
          10
        ],
        "fulltime": [
          74,
          22,
          4
        ],
        "parttime": [
          69,
          25,
          6
        ],
        "unemployed": [
          57,
          27,
          16
        ],
        "comfortable": [
          87,
          6,
          6
        ],
        "gettingby": [
          75,
          18,
          8
        ],
        "difficulty": [
          69,
          21,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          50,
          18,
          32
        ],
        "urban": [
          51,
          18,
          30
        ],
        "rural": [
          36,
          13,
          51
        ],
        "owner": [
          58,
          17,
          26
        ],
        "renter": [
          50,
          25,
          25
        ],
        "permission": [
          50,
          17,
          33
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          46,
          22,
          32
        ],
        "multiple": [
          78,
          6,
          16
        ],
        "male": [
          57,
          15,
          28
        ],
        "female": [
          44,
          21,
          35
        ],
        "young": [
          50,
          15,
          36
        ],
        "adult": [
          51,
          18,
          30
        ],
        "old": [
          47,
          24,
          29
        ],
        "fulltime": [
          51,
          29,
          21
        ],
        "parttime": [
          58,
          14,
          28
        ],
        "unemployed": [
          47,
          16,
          37
        ],
        "comfortable": [
          58,
          10,
          33
        ],
        "gettingby": [
          49,
          22,
          29
        ],
        "difficulty": [
          49,
          17,
          34
        ]
      },
      "homes": {
        "allresp": [
          49,
          18,
          33
        ],
        "urban": [
          50,
          19,
          32
        ],
        "rural": [
          36,
          13,
          51
        ],
        "owner": [
          57,
          16,
          26
        ],
        "renter": [
          48,
          26,
          26
        ],
        "permission": [
          48,
          17,
          35
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          46,
          22,
          32
        ],
        "multiple": [
          66,
          8,
          26
        ],
        "male": [
          56,
          15,
          29
        ],
        "female": [
          42,
          21,
          37
        ],
        "young": [
          48,
          15,
          38
        ],
        "adult": [
          50,
          19,
          31
        ],
        "old": [
          47,
          24,
          29
        ],
        "fulltime": [
          48,
          29,
          23
        ],
        "parttime": [
          57,
          14,
          30
        ],
        "unemployed": [
          47,
          15,
          38
        ],
        "comfortable": [
          58,
          10,
          33
        ],
        "gettingby": [
          47,
          23,
          31
        ],
        "difficulty": [
          48,
          17,
          35
        ]
      }
    },
    "reasons": {
      "askedtoleave": 70,
      "family": 24,
      "money": 43,
      "death": 16,
      "government": 9,
      "companies": 5,
      "customary": 8
    }
  },
  "MU": {
    "insecurity": {
      "allprop": {
        "allresp": [
          65,
          27,
          8
        ],
        "urban": [
          65,
          27,
          8
        ],
        "rural": [
          77,
          23,
          0
        ],
        "owner": [
          67,
          22,
          10
        ],
        "renter": [
          65,
          23,
          11
        ],
        "permission": [
          61,
          37,
          2
        ],
        "formal": [
          65,
          26,
          8
        ],
        "informal": [
          58,
          35,
          7
        ],
        "nodocs": [
          81,
          16,
          3
        ],
        "sole": [
          66,
          25,
          9
        ],
        "multiple": [
          66,
          33,
          1
        ],
        "male": [
          67,
          27,
          5
        ],
        "female": [
          63,
          26,
          11
        ],
        "young": [
          72,
          28,
          0
        ],
        "adult": [
          67,
          31,
          3
        ],
        "old": [
          58,
          17,
          25
        ],
        "fulltime": [
          68,
          29,
          3
        ],
        "parttime": [
          61,
          29,
          10
        ],
        "unemployed": [
          60,
          33,
          7
        ],
        "comfortable": [
          72,
          23,
          5
        ],
        "gettingby": [
          75,
          21,
          4
        ],
        "difficulty": [
          56,
          33,
          10
        ]
      },
      "homes": {
        "allresp": [
          67,
          25,
          8
        ],
        "urban": [
          67,
          25,
          9
        ],
        "rural": [
          77,
          23,
          0
        ],
        "owner": [
          69,
          20,
          11
        ],
        "renter": [
          65,
          23,
          11
        ],
        "permission": [
          63,
          35,
          2
        ],
        "formal": [
          68,
          24,
          8
        ],
        "informal": [
          55,
          39,
          7
        ],
        "nodocs": [
          81,
          17,
          2
        ],
        "sole": [
          66,
          25,
          9
        ],
        "multiple": [
          78,
          21,
          2
        ],
        "male": [
          70,
          25,
          6
        ],
        "female": [
          65,
          24,
          11
        ],
        "young": [
          75,
          25,
          0
        ],
        "adult": [
          69,
          28,
          3
        ],
        "old": [
          58,
          17,
          26
        ],
        "fulltime": [
          70,
          27,
          3
        ],
        "parttime": [
          63,
          28,
          10
        ],
        "unemployed": [
          62,
          32,
          7
        ],
        "comfortable": [
          74,
          21,
          5
        ],
        "gettingby": [
          77,
          18,
          4
        ],
        "difficulty": [
          58,
          31,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          93,
          6,
          1
        ],
        "urban": [
          93,
          6,
          1
        ],
        "rural": [
          93,
          7,
          0
        ],
        "owner": [
          97,
          2,
          0
        ],
        "renter": [
          73,
          19,
          7
        ],
        "permission": [
          87,
          12,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          91,
          7,
          1
        ],
        "multiple": [
          98,
          2,
          1
        ],
        "male": [
          93,
          5,
          1
        ],
        "female": [
          92,
          7,
          1
        ],
        "young": [
          91,
          7,
          2
        ],
        "adult": [
          92,
          7,
          1
        ],
        "old": [
          95,
          5,
          1
        ],
        "fulltime": [
          91,
          8,
          1
        ],
        "parttime": [
          97,
          2,
          1
        ],
        "unemployed": [
          96,
          0,
          4
        ],
        "comfortable": [
          94,
          5,
          1
        ],
        "gettingby": [
          93,
          7,
          0
        ],
        "difficulty": [
          91,
          8,
          2
        ]
      },
      "homes": {
        "allresp": [
          92,
          7,
          1
        ],
        "urban": [
          92,
          7,
          1
        ],
        "rural": [
          93,
          7,
          0
        ],
        "owner": [
          97,
          3,
          0
        ],
        "renter": [
          73,
          20,
          7
        ],
        "permission": [
          86,
          12,
          2
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          91,
          7,
          1
        ],
        "multiple": [
          93,
          5,
          2
        ],
        "male": [
          92,
          6,
          2
        ],
        "female": [
          92,
          8,
          1
        ],
        "young": [
          90,
          8,
          2
        ],
        "adult": [
          91,
          7,
          2
        ],
        "old": [
          95,
          5,
          1
        ],
        "fulltime": [
          90,
          8,
          2
        ],
        "parttime": [
          95,
          4,
          1
        ],
        "unemployed": [
          96,
          1,
          4
        ],
        "comfortable": [
          93,
          5,
          2
        ],
        "gettingby": [
          92,
          8,
          0
        ],
        "difficulty": [
          90,
          9,
          2
        ]
      }
    },
    "reasons": {
      "askedtoleave": 48,
      "family": 47,
      "money": 33,
      "death": 46,
      "government": 14,
      "companies": 6,
      "customary": -1
    }
  },
  "MD": {
    "insecurity": {
      "allprop": {
        "allresp": [
          81,
          11,
          8
        ],
        "urban": [
          79,
          13,
          8
        ],
        "rural": [
          82,
          10,
          8
        ],
        "owner": [
          88,
          7,
          5
        ],
        "renter": [
          49,
          45,
          6
        ],
        "permission": [
          77,
          10,
          13
        ],
        "formal": [
          83,
          9,
          7
        ],
        "informal": [
          63,
          25,
          12
        ],
        "nodocs": [
          49,
          25,
          26
        ],
        "sole": [
          85,
          10,
          5
        ],
        "multiple": [
          75,
          15,
          11
        ],
        "male": [
          81,
          11,
          8
        ],
        "female": [
          81,
          11,
          8
        ],
        "young": [
          78,
          11,
          11
        ],
        "adult": [
          79,
          14,
          8
        ],
        "old": [
          86,
          6,
          8
        ],
        "fulltime": [
          80,
          14,
          6
        ],
        "parttime": [
          81,
          11,
          8
        ],
        "unemployed": [
          72,
          15,
          13
        ],
        "comfortable": [
          88,
          7,
          5
        ],
        "gettingby": [
          83,
          11,
          6
        ],
        "difficulty": [
          80,
          11,
          8
        ]
      },
      "homes": {
        "allresp": [
          82,
          10,
          8
        ],
        "urban": [
          80,
          12,
          8
        ],
        "rural": [
          83,
          9,
          8
        ],
        "owner": [
          88,
          7,
          5
        ],
        "renter": [
          49,
          45,
          6
        ],
        "permission": [
          78,
          10,
          12
        ],
        "formal": [
          85,
          8,
          7
        ],
        "informal": [
          62,
          25,
          13
        ],
        "nodocs": [
          49,
          26,
          25
        ],
        "sole": [
          85,
          10,
          5
        ],
        "multiple": [
          80,
          12,
          8
        ],
        "male": [
          82,
          10,
          8
        ],
        "female": [
          82,
          11,
          7
        ],
        "young": [
          78,
          11,
          11
        ],
        "adult": [
          80,
          13,
          7
        ],
        "old": [
          87,
          6,
          7
        ],
        "fulltime": [
          82,
          13,
          6
        ],
        "parttime": [
          81,
          11,
          8
        ],
        "unemployed": [
          72,
          15,
          13
        ],
        "comfortable": [
          90,
          5,
          5
        ],
        "gettingby": [
          84,
          11,
          5
        ],
        "difficulty": [
          81,
          11,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          7,
          3
        ],
        "urban": [
          87,
          8,
          5
        ],
        "rural": [
          90,
          7,
          2
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          72,
          23,
          4
        ],
        "permission": [
          81,
          12,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          8,
          2
        ],
        "multiple": [
          96,
          1,
          2
        ],
        "male": [
          89,
          8,
          2
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          72,
          19,
          9
        ],
        "adult": [
          91,
          7,
          2
        ],
        "old": [
          94,
          3,
          3
        ],
        "fulltime": [
          91,
          7,
          2
        ],
        "parttime": [
          95,
          4,
          1
        ],
        "unemployed": [
          86,
          6,
          8
        ],
        "comfortable": [
          95,
          4,
          1
        ],
        "gettingby": [
          90,
          6,
          4
        ],
        "difficulty": [
          90,
          7,
          3
        ]
      },
      "homes": {
        "allresp": [
          88,
          8,
          3
        ],
        "urban": [
          86,
          9,
          5
        ],
        "rural": [
          90,
          7,
          2
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          67,
          28,
          6
        ],
        "permission": [
          81,
          13,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          8,
          2
        ],
        "multiple": [
          91,
          6,
          3
        ],
        "male": [
          88,
          9,
          3
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          72,
          19,
          9
        ],
        "adult": [
          90,
          8,
          2
        ],
        "old": [
          93,
          4,
          3
        ],
        "fulltime": [
          90,
          8,
          2
        ],
        "parttime": [
          93,
          5,
          2
        ],
        "unemployed": [
          86,
          6,
          8
        ],
        "comfortable": [
          94,
          5,
          1
        ],
        "gettingby": [
          89,
          7,
          4
        ],
        "difficulty": [
          90,
          7,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 60,
      "family": 45,
      "money": 43,
      "death": 32,
      "government": 10,
      "companies": 14,
      "customary": -1
    }
  },
  "MM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          75,
          19,
          6
        ],
        "urban": [
          75,
          19,
          6
        ],
        "rural": [
          77,
          17,
          7
        ],
        "owner": [
          80,
          15,
          4
        ],
        "renter": [
          42,
          34,
          24
        ],
        "permission": [
          65,
          28,
          8
        ],
        "formal": [
          77,
          18,
          5
        ],
        "informal": [
          64,
          23,
          13
        ],
        "nodocs": [
          72,
          20,
          9
        ],
        "sole": [
          76,
          17,
          7
        ],
        "multiple": [
          71,
          24,
          5
        ],
        "male": [
          75,
          19,
          6
        ],
        "female": [
          75,
          19,
          7
        ],
        "young": [
          76,
          21,
          3
        ],
        "adult": [
          73,
          20,
          7
        ],
        "old": [
          79,
          13,
          7
        ],
        "fulltime": [
          74,
          22,
          4
        ],
        "parttime": [
          77,
          16,
          7
        ],
        "unemployed": [
          74,
          17,
          9
        ],
        "comfortable": [
          80,
          15,
          5
        ],
        "gettingby": [
          75,
          18,
          6
        ],
        "difficulty": [
          70,
          25,
          6
        ]
      },
      "homes": {
        "allresp": [
          77,
          17,
          6
        ],
        "urban": [
          76,
          17,
          6
        ],
        "rural": [
          79,
          15,
          6
        ],
        "owner": [
          82,
          14,
          4
        ],
        "renter": [
          46,
          30,
          24
        ],
        "permission": [
          66,
          26,
          8
        ],
        "formal": [
          78,
          16,
          5
        ],
        "informal": [
          70,
          21,
          10
        ],
        "nodocs": [
          75,
          18,
          8
        ],
        "sole": [
          76,
          17,
          7
        ],
        "multiple": [
          80,
          16,
          4
        ],
        "male": [
          78,
          17,
          6
        ],
        "female": [
          77,
          17,
          6
        ],
        "young": [
          77,
          20,
          2
        ],
        "adult": [
          76,
          18,
          7
        ],
        "old": [
          81,
          11,
          7
        ],
        "fulltime": [
          76,
          20,
          4
        ],
        "parttime": [
          79,
          14,
          7
        ],
        "unemployed": [
          78,
          16,
          7
        ],
        "comfortable": [
          81,
          14,
          5
        ],
        "gettingby": [
          78,
          16,
          6
        ],
        "difficulty": [
          70,
          24,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          77,
          6,
          17
        ],
        "urban": [
          78,
          6,
          16
        ],
        "rural": [
          71,
          6,
          23
        ],
        "owner": [
          79,
          5,
          16
        ],
        "renter": [
          65,
          12,
          22
        ],
        "permission": [
          75,
          6,
          19
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          72,
          7,
          20
        ],
        "multiple": [
          92,
          1,
          7
        ],
        "male": [
          79,
          4,
          17
        ],
        "female": [
          75,
          7,
          18
        ],
        "young": [
          85,
          5,
          10
        ],
        "adult": [
          75,
          7,
          18
        ],
        "old": [
          73,
          4,
          23
        ],
        "fulltime": [
          76,
          6,
          17
        ],
        "parttime": [
          74,
          4,
          22
        ],
        "unemployed": [
          81,
          9,
          10
        ],
        "comfortable": [
          82,
          6,
          12
        ],
        "gettingby": [
          79,
          5,
          16
        ],
        "difficulty": [
          66,
          7,
          27
        ]
      },
      "homes": {
        "allresp": [
          73,
          7,
          20
        ],
        "urban": [
          74,
          7,
          18
        ],
        "rural": [
          69,
          8,
          24
        ],
        "owner": [
          76,
          7,
          18
        ],
        "renter": [
          52,
          14,
          34
        ],
        "permission": [
          72,
          8,
          20
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          72,
          7,
          20
        ],
        "multiple": [
          75,
          8,
          17
        ],
        "male": [
          75,
          6,
          20
        ],
        "female": [
          71,
          9,
          20
        ],
        "young": [
          85,
          5,
          10
        ],
        "adult": [
          70,
          9,
          21
        ],
        "old": [
          70,
          6,
          24
        ],
        "fulltime": [
          72,
          7,
          20
        ],
        "parttime": [
          70,
          6,
          24
        ],
        "unemployed": [
          78,
          11,
          11
        ],
        "comfortable": [
          78,
          7,
          16
        ],
        "gettingby": [
          75,
          7,
          18
        ],
        "difficulty": [
          64,
          7,
          29
        ]
      }
    },
    "reasons": {
      "askedtoleave": 47,
      "family": 25,
      "money": 41,
      "death": 27,
      "government": 22,
      "companies": 5,
      "customary": 11
    }
  },
  "MA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          68,
          21,
          10
        ],
        "urban": [
          66,
          23,
          11
        ],
        "rural": [
          71,
          18,
          10
        ],
        "owner": [
          83,
          12,
          5
        ],
        "renter": [
          51,
          41,
          8
        ],
        "permission": [
          69,
          18,
          12
        ],
        "formal": [
          75,
          18,
          7
        ],
        "informal": [
          64,
          22,
          14
        ],
        "nodocs": [
          58,
          26,
          16
        ],
        "sole": [
          69,
          20,
          11
        ],
        "multiple": [
          66,
          27,
          7
        ],
        "male": [
          72,
          20,
          8
        ],
        "female": [
          65,
          22,
          13
        ],
        "young": [
          76,
          19,
          5
        ],
        "adult": [
          62,
          26,
          12
        ],
        "old": [
          76,
          13,
          11
        ],
        "fulltime": [
          69,
          24,
          6
        ],
        "parttime": [
          55,
          28,
          17
        ],
        "unemployed": [
          63,
          23,
          14
        ],
        "comfortable": [
          77,
          17,
          6
        ],
        "gettingby": [
          70,
          19,
          11
        ],
        "difficulty": [
          64,
          25,
          11
        ]
      },
      "homes": {
        "allresp": [
          72,
          18,
          10
        ],
        "urban": [
          69,
          20,
          10
        ],
        "rural": [
          76,
          15,
          9
        ],
        "owner": [
          88,
          7,
          5
        ],
        "renter": [
          53,
          38,
          8
        ],
        "permission": [
          73,
          16,
          11
        ],
        "formal": [
          80,
          14,
          6
        ],
        "informal": [
          71,
          16,
          12
        ],
        "nodocs": [
          60,
          25,
          15
        ],
        "sole": [
          69,
          20,
          11
        ],
        "multiple": [
          84,
          11,
          5
        ],
        "male": [
          76,
          17,
          8
        ],
        "female": [
          68,
          20,
          12
        ],
        "young": [
          81,
          14,
          5
        ],
        "adult": [
          66,
          23,
          11
        ],
        "old": [
          79,
          10,
          10
        ],
        "fulltime": [
          73,
          21,
          6
        ],
        "parttime": [
          55,
          27,
          19
        ],
        "unemployed": [
          67,
          19,
          14
        ],
        "comfortable": [
          84,
          10,
          6
        ],
        "gettingby": [
          74,
          16,
          10
        ],
        "difficulty": [
          67,
          23,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          56,
          11,
          33
        ],
        "urban": [
          62,
          8,
          30
        ],
        "rural": [
          48,
          14,
          38
        ],
        "owner": [
          88,
          8,
          4
        ],
        "renter": [
          53,
          10,
          37
        ],
        "permission": [
          47,
          12,
          41
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          51,
          10,
          39
        ],
        "multiple": [
          76,
          12,
          13
        ],
        "male": [
          65,
          9,
          26
        ],
        "female": [
          48,
          12,
          40
        ],
        "young": [
          49,
          10,
          41
        ],
        "adult": [
          52,
          10,
          38
        ],
        "old": [
          71,
          11,
          17
        ],
        "fulltime": [
          63,
          8,
          29
        ],
        "parttime": [
          49,
          12,
          40
        ],
        "unemployed": [
          69,
          4,
          27
        ],
        "comfortable": [
          63,
          8,
          30
        ],
        "gettingby": [
          56,
          10,
          34
        ],
        "difficulty": [
          55,
          12,
          33
        ]
      },
      "homes": {
        "allresp": [
          53,
          11,
          36
        ],
        "urban": [
          59,
          8,
          33
        ],
        "rural": [
          44,
          14,
          41
        ],
        "owner": [
          87,
          9,
          4
        ],
        "renter": [
          50,
          8,
          42
        ],
        "permission": [
          44,
          12,
          44
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          51,
          10,
          39
        ],
        "multiple": [
          60,
          13,
          27
        ],
        "male": [
          62,
          10,
          28
        ],
        "female": [
          45,
          12,
          44
        ],
        "young": [
          43,
          12,
          45
        ],
        "adult": [
          49,
          10,
          41
        ],
        "old": [
          70,
          12,
          18
        ],
        "fulltime": [
          61,
          7,
          31
        ],
        "parttime": [
          48,
          11,
          41
        ],
        "unemployed": [
          61,
          7,
          32
        ],
        "comfortable": [
          61,
          7,
          32
        ],
        "gettingby": [
          51,
          11,
          38
        ],
        "difficulty": [
          52,
          12,
          36
        ]
      }
    },
    "reasons": {
      "askedtoleave": 33,
      "family": 28,
      "money": 24,
      "death": 8,
      "government": 6,
      "companies": 1,
      "customary": 1
    }
  },
  "MN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          76,
          19,
          4
        ],
        "urban": [
          74,
          21,
          5
        ],
        "rural": [
          81,
          15,
          4
        ],
        "owner": [
          86,
          12,
          2
        ],
        "renter": [
          47,
          46,
          7
        ],
        "permission": [
          73,
          21,
          6
        ],
        "formal": [
          79,
          18,
          3
        ],
        "informal": [
          55,
          32,
          13
        ],
        "nodocs": [
          62,
          25,
          13
        ],
        "sole": [
          81,
          16,
          3
        ],
        "multiple": [
          66,
          30,
          5
        ],
        "male": [
          76,
          19,
          5
        ],
        "female": [
          76,
          20,
          4
        ],
        "young": [
          76,
          18,
          6
        ],
        "adult": [
          75,
          21,
          4
        ],
        "old": [
          82,
          14,
          4
        ],
        "fulltime": [
          77,
          19,
          4
        ],
        "parttime": [
          64,
          30,
          5
        ],
        "unemployed": [
          60,
          28,
          11
        ],
        "comfortable": [
          90,
          8,
          2
        ],
        "gettingby": [
          80,
          16,
          4
        ],
        "difficulty": [
          71,
          24,
          5
        ]
      },
      "homes": {
        "allresp": [
          79,
          17,
          4
        ],
        "urban": [
          77,
          19,
          5
        ],
        "rural": [
          83,
          13,
          4
        ],
        "owner": [
          88,
          10,
          2
        ],
        "renter": [
          47,
          46,
          7
        ],
        "permission": [
          76,
          18,
          6
        ],
        "formal": [
          83,
          14,
          3
        ],
        "informal": [
          53,
          35,
          13
        ],
        "nodocs": [
          59,
          30,
          10
        ],
        "sole": [
          81,
          16,
          3
        ],
        "multiple": [
          75,
          21,
          4
        ],
        "male": [
          79,
          16,
          5
        ],
        "female": [
          78,
          18,
          4
        ],
        "young": [
          80,
          14,
          6
        ],
        "adult": [
          77,
          19,
          4
        ],
        "old": [
          83,
          13,
          4
        ],
        "fulltime": [
          79,
          17,
          4
        ],
        "parttime": [
          70,
          25,
          5
        ],
        "unemployed": [
          60,
          28,
          11
        ],
        "comfortable": [
          90,
          8,
          2
        ],
        "gettingby": [
          83,
          13,
          4
        ],
        "difficulty": [
          73,
          22,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          87,
          8,
          5
        ],
        "urban": [
          87,
          8,
          4
        ],
        "rural": [
          87,
          6,
          8
        ],
        "owner": [
          97,
          2,
          2
        ],
        "renter": [
          55,
          36,
          9
        ],
        "permission": [
          87,
          7,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          9,
          6
        ],
        "multiple": [
          97,
          1,
          1
        ],
        "male": [
          89,
          7,
          4
        ],
        "female": [
          85,
          8,
          7
        ],
        "young": [
          90,
          5,
          4
        ],
        "adult": [
          86,
          9,
          5
        ],
        "old": [
          89,
          5,
          6
        ],
        "fulltime": [
          88,
          8,
          5
        ],
        "parttime": [
          95,
          3,
          2
        ],
        "unemployed": [
          83,
          5,
          12
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          90,
          6,
          5
        ],
        "difficulty": [
          84,
          10,
          6
        ]
      },
      "homes": {
        "allresp": [
          84,
          9,
          7
        ],
        "urban": [
          85,
          10,
          5
        ],
        "rural": [
          82,
          7,
          11
        ],
        "owner": [
          96,
          2,
          2
        ],
        "renter": [
          48,
          43,
          9
        ],
        "permission": [
          83,
          10,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          9,
          6
        ],
        "multiple": [
          85,
          8,
          7
        ],
        "male": [
          87,
          9,
          4
        ],
        "female": [
          82,
          10,
          9
        ],
        "young": [
          89,
          6,
          4
        ],
        "adult": [
          82,
          11,
          7
        ],
        "old": [
          86,
          6,
          7
        ],
        "fulltime": [
          84,
          9,
          6
        ],
        "parttime": [
          92,
          7,
          2
        ],
        "unemployed": [
          83,
          5,
          12
        ],
        "comfortable": [
          92,
          2,
          5
        ],
        "gettingby": [
          87,
          7,
          6
        ],
        "difficulty": [
          80,
          12,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 59,
      "family": 30,
      "money": 38,
      "death": 20,
      "government": 12,
      "companies": 9,
      "customary": 14
    }
  },
  "MZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          57,
          24,
          19
        ],
        "urban": [
          61,
          25,
          14
        ],
        "rural": [
          55,
          24,
          21
        ],
        "owner": [
          61,
          20,
          19
        ],
        "renter": [
          41,
          37,
          22
        ],
        "permission": [
          53,
          29,
          19
        ],
        "formal": [
          61,
          25,
          15
        ],
        "informal": [
          51,
          29,
          20
        ],
        "nodocs": [
          53,
          23,
          24
        ],
        "sole": [
          58,
          23,
          19
        ],
        "multiple": [
          53,
          30,
          17
        ],
        "male": [
          56,
          24,
          19
        ],
        "female": [
          57,
          24,
          18
        ],
        "young": [
          52,
          30,
          18
        ],
        "adult": [
          58,
          23,
          19
        ],
        "old": [
          63,
          17,
          20
        ],
        "fulltime": [
          57,
          28,
          15
        ],
        "parttime": [
          57,
          22,
          21
        ],
        "unemployed": [
          47,
          35,
          18
        ],
        "comfortable": [
          58,
          25,
          17
        ],
        "gettingby": [
          57,
          24,
          19
        ],
        "difficulty": [
          57,
          25,
          18
        ]
      },
      "homes": {
        "allresp": [
          60,
          22,
          18
        ],
        "urban": [
          64,
          22,
          14
        ],
        "rural": [
          58,
          23,
          20
        ],
        "owner": [
          64,
          18,
          18
        ],
        "renter": [
          43,
          36,
          21
        ],
        "permission": [
          56,
          26,
          18
        ],
        "formal": [
          65,
          21,
          14
        ],
        "informal": [
          55,
          27,
          19
        ],
        "nodocs": [
          54,
          23,
          23
        ],
        "sole": [
          58,
          23,
          19
        ],
        "multiple": [
          67,
          19,
          13
        ],
        "male": [
          59,
          22,
          19
        ],
        "female": [
          60,
          22,
          18
        ],
        "young": [
          54,
          28,
          17
        ],
        "adult": [
          60,
          21,
          18
        ],
        "old": [
          66,
          15,
          20
        ],
        "fulltime": [
          60,
          26,
          14
        ],
        "parttime": [
          63,
          18,
          18
        ],
        "unemployed": [
          49,
          34,
          17
        ],
        "comfortable": [
          60,
          24,
          16
        ],
        "gettingby": [
          59,
          23,
          18
        ],
        "difficulty": [
          60,
          22,
          18
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          53,
          8,
          38
        ],
        "urban": [
          61,
          9,
          30
        ],
        "rural": [
          50,
          8,
          42
        ],
        "owner": [
          62,
          10,
          29
        ],
        "renter": [
          39,
          16,
          45
        ],
        "permission": [
          39,
          5,
          56
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          48,
          9,
          43
        ],
        "multiple": [
          77,
          6,
          17
        ],
        "male": [
          55,
          9,
          35
        ],
        "female": [
          52,
          8,
          41
        ],
        "young": [
          45,
          9,
          46
        ],
        "adult": [
          58,
          9,
          33
        ],
        "old": [
          50,
          5,
          44
        ],
        "fulltime": [
          66,
          9,
          24
        ],
        "parttime": [
          62,
          16,
          21
        ],
        "unemployed": [
          51,
          7,
          42
        ],
        "comfortable": [
          51,
          6,
          44
        ],
        "gettingby": [
          52,
          10,
          38
        ],
        "difficulty": [
          55,
          7,
          38
        ]
      },
      "homes": {
        "allresp": [
          50,
          9,
          41
        ],
        "urban": [
          55,
          9,
          36
        ],
        "rural": [
          47,
          9,
          44
        ],
        "owner": [
          60,
          10,
          29
        ],
        "renter": [
          29,
          18,
          53
        ],
        "permission": [
          33,
          4,
          63
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          48,
          9,
          43
        ],
        "multiple": [
          57,
          8,
          35
        ],
        "male": [
          52,
          9,
          39
        ],
        "female": [
          48,
          9,
          44
        ],
        "young": [
          41,
          8,
          50
        ],
        "adult": [
          54,
          9,
          36
        ],
        "old": [
          48,
          7,
          45
        ],
        "fulltime": [
          63,
          10,
          27
        ],
        "parttime": [
          56,
          16,
          28
        ],
        "unemployed": [
          47,
          7,
          45
        ],
        "comfortable": [
          46,
          7,
          47
        ],
        "gettingby": [
          48,
          10,
          42
        ],
        "difficulty": [
          52,
          8,
          40
        ]
      }
    },
    "reasons": {
      "askedtoleave": 13,
      "family": 21,
      "money": 6,
      "death": 9,
      "government": 11,
      "companies": 4,
      "customary": 2
    }
  },
  "IN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          64,
          22,
          14
        ],
        "urban": [
          61,
          24,
          15
        ],
        "rural": [
          69,
          19,
          12
        ],
        "owner": [
          76,
          15,
          9
        ],
        "renter": [
          45,
          41,
          14
        ],
        "permission": [
          62,
          26,
          12
        ],
        "formal": [
          73,
          18,
          9
        ],
        "informal": [
          55,
          29,
          16
        ],
        "nodocs": [
          52,
          26,
          22
        ],
        "sole": [
          68,
          23,
          10
        ],
        "multiple": [
          66,
          23,
          11
        ],
        "male": [
          66,
          22,
          12
        ],
        "female": [
          62,
          22,
          16
        ],
        "young": [
          64,
          23,
          13
        ],
        "adult": [
          63,
          23,
          13
        ],
        "old": [
          67,
          18,
          16
        ],
        "fulltime": [
          69,
          21,
          11
        ],
        "parttime": [
          54,
          27,
          19
        ],
        "unemployed": [
          66,
          23,
          11
        ],
        "comfortable": [
          60,
          24,
          16
        ],
        "gettingby": [
          67,
          19,
          13
        ],
        "difficulty": [
          65,
          22,
          13
        ]
      },
      "homes": {
        "allresp": [
          66,
          21,
          13
        ],
        "urban": [
          63,
          23,
          14
        ],
        "rural": [
          71,
          17,
          12
        ],
        "owner": [
          78,
          13,
          9
        ],
        "renter": [
          47,
          39,
          14
        ],
        "permission": [
          64,
          24,
          11
        ],
        "formal": [
          76,
          16,
          9
        ],
        "informal": [
          57,
          28,
          15
        ],
        "nodocs": [
          53,
          26,
          21
        ],
        "sole": [
          68,
          23,
          10
        ],
        "multiple": [
          78,
          15,
          7
        ],
        "male": [
          67,
          21,
          12
        ],
        "female": [
          65,
          21,
          14
        ],
        "young": [
          66,
          22,
          12
        ],
        "adult": [
          66,
          22,
          13
        ],
        "old": [
          68,
          17,
          15
        ],
        "fulltime": [
          71,
          19,
          10
        ],
        "parttime": [
          56,
          26,
          18
        ],
        "unemployed": [
          68,
          21,
          11
        ],
        "comfortable": [
          63,
          21,
          16
        ],
        "gettingby": [
          69,
          18,
          13
        ],
        "difficulty": [
          67,
          21,
          12
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          56,
          18,
          26
        ],
        "urban": [
          59,
          15,
          26
        ],
        "rural": [
          52,
          22,
          26
        ],
        "owner": [
          71,
          13,
          15
        ],
        "renter": [
          33,
          24,
          43
        ],
        "permission": [
          55,
          20,
          25
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          52,
          20,
          28
        ],
        "multiple": [
          84,
          9,
          8
        ],
        "male": [
          61,
          15,
          23
        ],
        "female": [
          51,
          20,
          29
        ],
        "young": [
          51,
          20,
          29
        ],
        "adult": [
          56,
          18,
          27
        ],
        "old": [
          64,
          16,
          20
        ],
        "fulltime": [
          64,
          16,
          20
        ],
        "parttime": [
          49,
          25,
          26
        ],
        "unemployed": [
          53,
          15,
          32
        ],
        "comfortable": [
          61,
          22,
          17
        ],
        "gettingby": [
          62,
          14,
          24
        ],
        "difficulty": [
          54,
          18,
          28
        ]
      },
      "homes": {
        "allresp": [
          55,
          19,
          27
        ],
        "urban": [
          58,
          16,
          27
        ],
        "rural": [
          49,
          24,
          27
        ],
        "owner": [
          70,
          14,
          16
        ],
        "renter": [
          31,
          26,
          43
        ],
        "permission": [
          53,
          21,
          26
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          52,
          20,
          28
        ],
        "multiple": [
          76,
          13,
          11
        ],
        "male": [
          60,
          16,
          24
        ],
        "female": [
          50,
          21,
          29
        ],
        "young": [
          50,
          21,
          29
        ],
        "adult": [
          54,
          19,
          28
        ],
        "old": [
          63,
          17,
          21
        ],
        "fulltime": [
          62,
          17,
          21
        ],
        "parttime": [
          47,
          26,
          27
        ],
        "unemployed": [
          50,
          17,
          33
        ],
        "comfortable": [
          59,
          23,
          18
        ],
        "gettingby": [
          61,
          15,
          25
        ],
        "difficulty": [
          53,
          19,
          28
        ]
      }
    },
    "reasons": {
      "askedtoleave": 27,
      "family": 16,
      "money": 32,
      "death": 15,
      "government": 11,
      "companies": 5,
      "customary": 7
    }
  },
  "ID": {
    "insecurity": {
      "allprop": {
        "allresp": [
          63,
          24,
          13
        ],
        "urban": [
          60,
          28,
          11
        ],
        "rural": [
          65,
          20,
          15
        ],
        "owner": [
          73,
          14,
          12
        ],
        "renter": [
          28,
          58,
          14
        ],
        "permission": [
          60,
          27,
          13
        ],
        "formal": [
          69,
          21,
          10
        ],
        "informal": [
          67,
          19,
          14
        ],
        "nodocs": [
          46,
          33,
          21
        ],
        "sole": [
          65,
          22,
          13
        ],
        "multiple": [
          46,
          38,
          16
        ],
        "male": [
          62,
          25,
          13
        ],
        "female": [
          63,
          23,
          14
        ],
        "young": [
          61,
          28,
          12
        ],
        "adult": [
          61,
          25,
          14
        ],
        "old": [
          72,
          14,
          13
        ],
        "fulltime": [
          61,
          28,
          11
        ],
        "parttime": [
          58,
          31,
          11
        ],
        "unemployed": [
          68,
          20,
          11
        ],
        "comfortable": [
          61,
          26,
          12
        ],
        "gettingby": [
          67,
          21,
          13
        ],
        "difficulty": [
          62,
          26,
          12
        ]
      },
      "homes": {
        "allresp": [
          64,
          23,
          13
        ],
        "urban": [
          61,
          27,
          12
        ],
        "rural": [
          66,
          19,
          15
        ],
        "owner": [
          74,
          14,
          12
        ],
        "renter": [
          28,
          58,
          14
        ],
        "permission": [
          62,
          25,
          13
        ],
        "formal": [
          71,
          19,
          10
        ],
        "informal": [
          64,
          19,
          17
        ],
        "nodocs": [
          46,
          33,
          21
        ],
        "sole": [
          65,
          22,
          13
        ],
        "multiple": [
          58,
          25,
          16
        ],
        "male": [
          63,
          24,
          13
        ],
        "female": [
          65,
          22,
          14
        ],
        "young": [
          62,
          27,
          11
        ],
        "adult": [
          62,
          24,
          14
        ],
        "old": [
          73,
          14,
          13
        ],
        "fulltime": [
          62,
          27,
          11
        ],
        "parttime": [
          59,
          31,
          10
        ],
        "unemployed": [
          68,
          20,
          11
        ],
        "comfortable": [
          63,
          25,
          12
        ],
        "gettingby": [
          67,
          20,
          13
        ],
        "difficulty": [
          63,
          24,
          12
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          70,
          5,
          25
        ],
        "urban": [
          70,
          4,
          27
        ],
        "rural": [
          70,
          7,
          23
        ],
        "owner": [
          84,
          7,
          9
        ],
        "renter": [
          44,
          4,
          52
        ],
        "permission": [
          58,
          4,
          38
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          68,
          6,
          26
        ],
        "multiple": [
          83,
          2,
          14
        ],
        "male": [
          74,
          5,
          21
        ],
        "female": [
          66,
          6,
          28
        ],
        "young": [
          58,
          3,
          39
        ],
        "adult": [
          69,
          6,
          25
        ],
        "old": [
          82,
          7,
          11
        ],
        "fulltime": [
          72,
          5,
          23
        ],
        "parttime": [
          68,
          6,
          25
        ],
        "unemployed": [
          60,
          5,
          36
        ],
        "comfortable": [
          70,
          4,
          26
        ],
        "gettingby": [
          70,
          5,
          25
        ],
        "difficulty": [
          71,
          7,
          22
        ]
      },
      "homes": {
        "allresp": [
          68,
          6,
          26
        ],
        "urban": [
          69,
          4,
          27
        ],
        "rural": [
          68,
          8,
          24
        ],
        "owner": [
          84,
          7,
          9
        ],
        "renter": [
          43,
          4,
          53
        ],
        "permission": [
          56,
          5,
          40
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          68,
          6,
          26
        ],
        "multiple": [
          71,
          7,
          23
        ],
        "male": [
          72,
          6,
          22
        ],
        "female": [
          65,
          6,
          29
        ],
        "young": [
          58,
          3,
          39
        ],
        "adult": [
          68,
          6,
          26
        ],
        "old": [
          81,
          8,
          12
        ],
        "fulltime": [
          71,
          4,
          25
        ],
        "parttime": [
          67,
          6,
          26
        ],
        "unemployed": [
          58,
          5,
          36
        ],
        "comfortable": [
          69,
          5,
          27
        ],
        "gettingby": [
          69,
          6,
          25
        ],
        "difficulty": [
          69,
          7,
          23
        ]
      }
    },
    "reasons": {
      "askedtoleave": 15,
      "family": 20,
      "money": 7,
      "death": 9,
      "government": 4,
      "companies": 2,
      "customary": 1
    }
  },
  "MX": {
    "insecurity": {
      "allprop": {
        "allresp": [
          79,
          15,
          6
        ],
        "urban": [
          79,
          15,
          6
        ],
        "rural": [
          75,
          16,
          9
        ],
        "owner": [
          86,
          8,
          6
        ],
        "renter": [
          66,
          28,
          6
        ],
        "permission": [
          78,
          17,
          5
        ],
        "formal": [
          83,
          13,
          4
        ],
        "informal": [
          66,
          27,
          7
        ],
        "nodocs": [
          71,
          19,
          10
        ],
        "sole": [
          79,
          15,
          6
        ],
        "multiple": [
          74,
          21,
          6
        ],
        "male": [
          82,
          14,
          4
        ],
        "female": [
          76,
          17,
          8
        ],
        "young": [
          83,
          13,
          3
        ],
        "adult": [
          77,
          18,
          6
        ],
        "old": [
          79,
          11,
          10
        ],
        "fulltime": [
          80,
          16,
          4
        ],
        "parttime": [
          74,
          24,
          2
        ],
        "unemployed": [
          84,
          9,
          7
        ],
        "comfortable": [
          85,
          11,
          4
        ],
        "gettingby": [
          84,
          13,
          3
        ],
        "difficulty": [
          75,
          18,
          8
        ]
      },
      "homes": {
        "allresp": [
          79,
          15,
          6
        ],
        "urban": [
          80,
          15,
          5
        ],
        "rural": [
          76,
          16,
          9
        ],
        "owner": [
          86,
          7,
          6
        ],
        "renter": [
          66,
          28,
          6
        ],
        "permission": [
          78,
          17,
          5
        ],
        "formal": [
          84,
          12,
          4
        ],
        "informal": [
          65,
          28,
          7
        ],
        "nodocs": [
          72,
          19,
          9
        ],
        "sole": [
          79,
          15,
          6
        ],
        "multiple": [
          83,
          15,
          3
        ],
        "male": [
          82,
          13,
          4
        ],
        "female": [
          76,
          16,
          8
        ],
        "young": [
          84,
          13,
          3
        ],
        "adult": [
          77,
          17,
          5
        ],
        "old": [
          80,
          10,
          10
        ],
        "fulltime": [
          80,
          16,
          4
        ],
        "parttime": [
          74,
          24,
          2
        ],
        "unemployed": [
          84,
          9,
          7
        ],
        "comfortable": [
          86,
          10,
          4
        ],
        "gettingby": [
          84,
          12,
          3
        ],
        "difficulty": [
          75,
          17,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          66,
          5,
          29
        ],
        "urban": [
          67,
          5,
          29
        ],
        "rural": [
          63,
          8,
          29
        ],
        "owner": [
          89,
          4,
          7
        ],
        "renter": [
          63,
          5,
          31
        ],
        "permission": [
          51,
          7,
          42
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          64,
          6,
          30
        ],
        "multiple": [
          92,
          0,
          7
        ],
        "male": [
          70,
          5,
          25
        ],
        "female": [
          62,
          6,
          32
        ],
        "young": [
          52,
          4,
          44
        ],
        "adult": [
          66,
          6,
          28
        ],
        "old": [
          77,
          5,
          18
        ],
        "fulltime": [
          68,
          5,
          27
        ],
        "parttime": [
          59,
          6,
          35
        ],
        "unemployed": [
          60,
          8,
          32
        ],
        "comfortable": [
          73,
          3,
          23
        ],
        "gettingby": [
          68,
          4,
          29
        ],
        "difficulty": [
          64,
          7,
          29
        ]
      },
      "homes": {
        "allresp": [
          65,
          6,
          29
        ],
        "urban": [
          66,
          5,
          29
        ],
        "rural": [
          63,
          8,
          30
        ],
        "owner": [
          89,
          4,
          7
        ],
        "renter": [
          62,
          6,
          32
        ],
        "permission": [
          49,
          8,
          43
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          64,
          6,
          30
        ],
        "multiple": [
          80,
          5,
          15
        ],
        "male": [
          69,
          5,
          26
        ],
        "female": [
          62,
          6,
          32
        ],
        "young": [
          51,
          4,
          45
        ],
        "adult": [
          66,
          6,
          28
        ],
        "old": [
          76,
          5,
          19
        ],
        "fulltime": [
          67,
          5,
          27
        ],
        "parttime": [
          59,
          6,
          35
        ],
        "unemployed": [
          59,
          9,
          32
        ],
        "comfortable": [
          71,
          4,
          24
        ],
        "gettingby": [
          67,
          4,
          30
        ],
        "difficulty": [
          63,
          7,
          30
        ]
      }
    },
    "reasons": {
      "askedtoleave": 23,
      "family": 20,
      "money": 14,
      "death": 7,
      "government": 4,
      "companies": 2,
      "customary": 1
    }
  },
  "NA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          63,
          32,
          5
        ],
        "urban": [
          62,
          32,
          6
        ],
        "rural": [
          63,
          33,
          4
        ],
        "owner": [
          80,
          16,
          4
        ],
        "renter": [
          45,
          51,
          4
        ],
        "permission": [
          62,
          32,
          6
        ],
        "formal": [
          66,
          30,
          5
        ],
        "informal": [
          54,
          40,
          6
        ],
        "nodocs": [
          61,
          34,
          5
        ],
        "sole": [
          64,
          30,
          5
        ],
        "multiple": [
          48,
          49,
          3
        ],
        "male": [
          65,
          31,
          4
        ],
        "female": [
          60,
          34,
          6
        ],
        "young": [
          63,
          32,
          5
        ],
        "adult": [
          61,
          34,
          5
        ],
        "old": [
          68,
          28,
          4
        ],
        "fulltime": [
          61,
          33,
          6
        ],
        "parttime": [
          57,
          40,
          3
        ],
        "unemployed": [
          62,
          33,
          5
        ],
        "comfortable": [
          62,
          33,
          5
        ],
        "gettingby": [
          63,
          33,
          4
        ],
        "difficulty": [
          62,
          32,
          6
        ]
      },
      "homes": {
        "allresp": [
          64,
          31,
          5
        ],
        "urban": [
          63,
          30,
          7
        ],
        "rural": [
          65,
          31,
          4
        ],
        "owner": [
          81,
          15,
          4
        ],
        "renter": [
          49,
          47,
          4
        ],
        "permission": [
          64,
          30,
          6
        ],
        "formal": [
          69,
          26,
          5
        ],
        "informal": [
          55,
          40,
          5
        ],
        "nodocs": [
          62,
          33,
          5
        ],
        "sole": [
          64,
          30,
          5
        ],
        "multiple": [
          65,
          31,
          4
        ],
        "male": [
          67,
          29,
          4
        ],
        "female": [
          62,
          32,
          6
        ],
        "young": [
          64,
          30,
          5
        ],
        "adult": [
          63,
          32,
          5
        ],
        "old": [
          69,
          27,
          4
        ],
        "fulltime": [
          62,
          32,
          6
        ],
        "parttime": [
          59,
          38,
          3
        ],
        "unemployed": [
          64,
          31,
          5
        ],
        "comfortable": [
          64,
          30,
          6
        ],
        "gettingby": [
          66,
          31,
          4
        ],
        "difficulty": [
          63,
          31,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          44,
          6,
          50
        ],
        "urban": [
          58,
          4,
          39
        ],
        "rural": [
          34,
          8,
          58
        ],
        "owner": [
          73,
          3,
          25
        ],
        "renter": [
          59,
          8,
          34
        ],
        "permission": [
          22,
          7,
          70
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          42,
          6,
          52
        ],
        "multiple": [
          70,
          3,
          27
        ],
        "male": [
          45,
          6,
          49
        ],
        "female": [
          44,
          6,
          50
        ],
        "young": [
          22,
          8,
          70
        ],
        "adult": [
          48,
          6,
          46
        ],
        "old": [
          68,
          4,
          28
        ],
        "fulltime": [
          55,
          4,
          41
        ],
        "parttime": [
          48,
          6,
          47
        ],
        "unemployed": [
          30,
          8,
          62
        ],
        "comfortable": [
          43,
          5,
          52
        ],
        "gettingby": [
          50,
          5,
          44
        ],
        "difficulty": [
          42,
          7,
          51
        ]
      },
      "homes": {
        "allresp": [
          41,
          7,
          52
        ],
        "urban": [
          54,
          5,
          42
        ],
        "rural": [
          32,
          9,
          59
        ],
        "owner": [
          72,
          3,
          25
        ],
        "renter": [
          56,
          9,
          35
        ],
        "permission": [
          18,
          9,
          73
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          42,
          6,
          52
        ],
        "multiple": [
          40,
          13,
          47
        ],
        "male": [
          41,
          8,
          51
        ],
        "female": [
          42,
          6,
          52
        ],
        "young": [
          19,
          9,
          71
        ],
        "adult": [
          45,
          7,
          49
        ],
        "old": [
          66,
          4,
          30
        ],
        "fulltime": [
          52,
          6,
          43
        ],
        "parttime": [
          44,
          7,
          48
        ],
        "unemployed": [
          27,
          9,
          63
        ],
        "comfortable": [
          37,
          7,
          55
        ],
        "gettingby": [
          49,
          5,
          46
        ],
        "difficulty": [
          39,
          8,
          54
        ]
      }
    },
    "reasons": {
      "askedtoleave": 26,
      "family": 22,
      "money": 20,
      "death": 8,
      "government": 7,
      "companies": 4,
      "customary": 10
    }
  },
  "NP": {
    "insecurity": {
      "allprop": {
        "allresp": [
          82,
          12,
          6
        ],
        "urban": [
          83,
          14,
          3
        ],
        "rural": [
          81,
          11,
          7
        ],
        "owner": [
          78,
          16,
          5
        ],
        "renter": [
          82,
          12,
          6
        ],
        "permission": [
          83,
          11,
          5
        ],
        "formal": [
          83,
          12,
          5
        ],
        "informal": [
          72,
          19,
          9
        ],
        "nodocs": [
          79,
          14,
          7
        ],
        "sole": [
          84,
          10,
          6
        ],
        "multiple": [
          68,
          29,
          3
        ],
        "male": [
          86,
          10,
          5
        ],
        "female": [
          78,
          15,
          7
        ],
        "young": [
          86,
          12,
          2
        ],
        "adult": [
          81,
          13,
          6
        ],
        "old": [
          78,
          11,
          11
        ],
        "fulltime": [
          82,
          14,
          4
        ],
        "parttime": [
          67,
          26,
          7
        ],
        "unemployed": [
          85,
          13,
          2
        ],
        "comfortable": [
          81,
          11,
          9
        ],
        "gettingby": [
          85,
          12,
          4
        ],
        "difficulty": [
          80,
          13,
          7
        ]
      },
      "homes": {
        "allresp": [
          83,
          11,
          6
        ],
        "urban": [
          84,
          13,
          3
        ],
        "rural": [
          82,
          10,
          7
        ],
        "owner": [
          80,
          15,
          5
        ],
        "renter": [
          82,
          12,
          6
        ],
        "permission": [
          85,
          10,
          5
        ],
        "formal": [
          85,
          10,
          5
        ],
        "informal": [
          74,
          17,
          8
        ],
        "nodocs": [
          74,
          20,
          6
        ],
        "sole": [
          84,
          10,
          6
        ],
        "multiple": [
          77,
          21,
          3
        ],
        "male": [
          87,
          9,
          4
        ],
        "female": [
          79,
          14,
          7
        ],
        "young": [
          86,
          12,
          2
        ],
        "adult": [
          83,
          11,
          6
        ],
        "old": [
          79,
          10,
          11
        ],
        "fulltime": [
          82,
          13,
          4
        ],
        "parttime": [
          72,
          21,
          7
        ],
        "unemployed": [
          86,
          13,
          2
        ],
        "comfortable": [
          82,
          9,
          9
        ],
        "gettingby": [
          85,
          11,
          4
        ],
        "difficulty": [
          82,
          12,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          84,
          11,
          5
        ],
        "urban": [
          78,
          13,
          9
        ],
        "rural": [
          89,
          9,
          2
        ],
        "owner": [
          88,
          9,
          3
        ],
        "renter": [
          43,
          44,
          13
        ],
        "permission": [
          86,
          9,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          12,
          5
        ],
        "multiple": [
          96,
          4,
          0
        ],
        "male": [
          85,
          11,
          4
        ],
        "female": [
          84,
          11,
          5
        ],
        "young": [
          86,
          8,
          5
        ],
        "adult": [
          82,
          13,
          5
        ],
        "old": [
          91,
          6,
          3
        ],
        "fulltime": [
          81,
          14,
          5
        ],
        "parttime": [
          84,
          10,
          6
        ],
        "unemployed": [
          79,
          12,
          9
        ],
        "comfortable": [
          90,
          8,
          3
        ],
        "gettingby": [
          86,
          9,
          5
        ],
        "difficulty": [
          83,
          12,
          5
        ]
      },
      "homes": {
        "allresp": [
          82,
          12,
          6
        ],
        "urban": [
          75,
          15,
          10
        ],
        "rural": [
          88,
          10,
          3
        ],
        "owner": [
          86,
          10,
          4
        ],
        "renter": [
          41,
          46,
          13
        ],
        "permission": [
          83,
          10,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          12,
          5
        ],
        "multiple": [
          82,
          11,
          6
        ],
        "male": [
          83,
          12,
          5
        ],
        "female": [
          82,
          12,
          6
        ],
        "young": [
          83,
          10,
          8
        ],
        "adult": [
          80,
          14,
          6
        ],
        "old": [
          90,
          7,
          3
        ],
        "fulltime": [
          79,
          15,
          6
        ],
        "parttime": [
          79,
          12,
          9
        ],
        "unemployed": [
          76,
          15,
          9
        ],
        "comfortable": [
          87,
          10,
          3
        ],
        "gettingby": [
          83,
          11,
          6
        ],
        "difficulty": [
          81,
          13,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 19,
      "family": 43,
      "money": 41,
      "death": 33,
      "government": 16,
      "companies": 6,
      "customary": 21
    }
  },
  "NL": {
    "insecurity": {
      "allprop": {
        "allresp": [
          90,
          10,
          0
        ],
        "urban": [
          90,
          10,
          0
        ],
        "rural": [
          88,
          12,
          0
        ],
        "owner": [
          94,
          6,
          0
        ],
        "renter": [
          88,
          12,
          0
        ],
        "permission": [
          81,
          19,
          0
        ],
        "formal": [
          90,
          10,
          0
        ],
        "informal": [
          94,
          6,
          0
        ],
        "nodocs": [
          80,
          20,
          0
        ],
        "sole": [
          92,
          8,
          0
        ],
        "multiple": [
          71,
          29,
          0
        ],
        "male": [
          90,
          10,
          0
        ],
        "female": [
          90,
          10,
          0
        ],
        "young": [
          77,
          23,
          0
        ],
        "adult": [
          90,
          10,
          0
        ],
        "old": [
          93,
          7,
          0
        ],
        "fulltime": [
          91,
          9,
          0
        ],
        "parttime": [
          86,
          14,
          0
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          93,
          7,
          0
        ],
        "gettingby": [
          89,
          11,
          0
        ],
        "difficulty": [
          82,
          18,
          0
        ]
      },
      "homes": {
        "allresp": [
          91,
          8,
          0
        ],
        "urban": [
          91,
          9,
          0
        ],
        "rural": [
          95,
          5,
          0
        ],
        "owner": [
          95,
          5,
          0
        ],
        "renter": [
          89,
          11,
          0
        ],
        "permission": [
          86,
          14,
          0
        ],
        "formal": [
          92,
          8,
          0
        ],
        "informal": [
          94,
          6,
          0
        ],
        "nodocs": [
          82,
          18,
          0
        ],
        "sole": [
          92,
          8,
          0
        ],
        "multiple": [
          89,
          11,
          0
        ],
        "male": [
          91,
          9,
          0
        ],
        "female": [
          92,
          8,
          0
        ],
        "young": [
          81,
          19,
          0
        ],
        "adult": [
          91,
          9,
          0
        ],
        "old": [
          94,
          6,
          0
        ],
        "fulltime": [
          92,
          8,
          0
        ],
        "parttime": [
          88,
          12,
          0
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          95,
          4,
          0
        ],
        "gettingby": [
          89,
          11,
          0
        ],
        "difficulty": [
          83,
          17,
          0
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          6,
          3
        ],
        "urban": [
          91,
          6,
          3
        ],
        "rural": [
          88,
          4,
          8
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          89,
          9,
          2
        ],
        "permission": [
          80,
          11,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          7,
          3
        ],
        "multiple": [
          97,
          1,
          3
        ],
        "male": [
          89,
          7,
          4
        ],
        "female": [
          93,
          5,
          2
        ],
        "young": [
          90,
          6,
          4
        ],
        "adult": [
          90,
          5,
          5
        ],
        "old": [
          92,
          7,
          0
        ],
        "fulltime": [
          91,
          6,
          3
        ],
        "parttime": [
          90,
          4,
          6
        ],
        "unemployed": [
          91,
          5,
          4
        ],
        "comfortable": [
          94,
          5,
          1
        ],
        "gettingby": [
          89,
          7,
          4
        ],
        "difficulty": [
          84,
          9,
          7
        ]
      },
      "homes": {
        "allresp": [
          90,
          6,
          3
        ],
        "urban": [
          91,
          6,
          3
        ],
        "rural": [
          86,
          5,
          10
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          88,
          10,
          2
        ],
        "permission": [
          78,
          11,
          11
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          7,
          3
        ],
        "multiple": [
          90,
          3,
          7
        ],
        "male": [
          88,
          7,
          5
        ],
        "female": [
          93,
          5,
          2
        ],
        "young": [
          87,
          6,
          7
        ],
        "adult": [
          90,
          5,
          5
        ],
        "old": [
          92,
          7,
          0
        ],
        "fulltime": [
          90,
          6,
          4
        ],
        "parttime": [
          90,
          4,
          6
        ],
        "unemployed": [
          91,
          5,
          4
        ],
        "comfortable": [
          93,
          5,
          2
        ],
        "gettingby": [
          89,
          7,
          4
        ],
        "difficulty": [
          83,
          9,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 52,
      "family": 27,
      "money": 31,
      "death": 14,
      "government": 15,
      "companies": 14,
      "customary": -1
    }
  },
  "NZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          85,
          14,
          1
        ],
        "urban": [
          85,
          13,
          1
        ],
        "rural": [
          80,
          19,
          1
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          66,
          31,
          3
        ],
        "permission": [
          79,
          19,
          2
        ],
        "formal": [
          84,
          15,
          1
        ],
        "informal": [
          95,
          5,
          0
        ],
        "nodocs": [
          78,
          13,
          9
        ],
        "sole": [
          86,
          13,
          0
        ],
        "multiple": [
          82,
          16,
          2
        ],
        "male": [
          82,
          16,
          2
        ],
        "female": [
          87,
          12,
          1
        ],
        "young": [
          73,
          23,
          4
        ],
        "adult": [
          81,
          17,
          1
        ],
        "old": [
          93,
          6,
          1
        ],
        "fulltime": [
          85,
          14,
          1
        ],
        "parttime": [
          84,
          13,
          3
        ],
        "unemployed": [
          67,
          33,
          0
        ],
        "comfortable": [
          91,
          7,
          2
        ],
        "gettingby": [
          84,
          15,
          1
        ],
        "difficulty": [
          65,
          35,
          0
        ]
      },
      "homes": {
        "allresp": [
          86,
          13,
          1
        ],
        "urban": [
          87,
          12,
          1
        ],
        "rural": [
          83,
          16,
          1
        ],
        "owner": [
          97,
          3,
          1
        ],
        "renter": [
          67,
          31,
          2
        ],
        "permission": [
          84,
          15,
          1
        ],
        "formal": [
          86,
          13,
          1
        ],
        "informal": [
          95,
          5,
          0
        ],
        "nodocs": [
          75,
          18,
          8
        ],
        "sole": [
          86,
          13,
          0
        ],
        "multiple": [
          87,
          12,
          0
        ],
        "male": [
          84,
          15,
          1
        ],
        "female": [
          88,
          11,
          1
        ],
        "young": [
          77,
          20,
          2
        ],
        "adult": [
          82,
          17,
          1
        ],
        "old": [
          94,
          5,
          1
        ],
        "fulltime": [
          86,
          13,
          1
        ],
        "parttime": [
          86,
          12,
          2
        ],
        "unemployed": [
          67,
          33,
          0
        ],
        "comfortable": [
          92,
          7,
          1
        ],
        "gettingby": [
          86,
          13,
          1
        ],
        "difficulty": [
          66,
          34,
          0
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          84,
          8,
          7
        ],
        "urban": [
          85,
          8,
          7
        ],
        "rural": [
          80,
          12,
          8
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          72,
          13,
          16
        ],
        "permission": [
          77,
          12,
          11
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          82,
          10,
          7
        ],
        "multiple": [
          95,
          3,
          3
        ],
        "male": [
          83,
          8,
          8
        ],
        "female": [
          85,
          9,
          6
        ],
        "young": [
          62,
          11,
          27
        ],
        "adult": [
          85,
          11,
          5
        ],
        "old": [
          91,
          5,
          4
        ],
        "fulltime": [
          85,
          10,
          5
        ],
        "parttime": [
          83,
          6,
          10
        ],
        "unemployed": [
          85,
          4,
          11
        ],
        "comfortable": [
          85,
          8,
          7
        ],
        "gettingby": [
          83,
          9,
          8
        ],
        "difficulty": [
          86,
          7,
          6
        ]
      },
      "homes": {
        "allresp": [
          82,
          10,
          9
        ],
        "urban": [
          82,
          9,
          9
        ],
        "rural": [
          77,
          12,
          10
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          67,
          15,
          18
        ],
        "permission": [
          72,
          14,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          82,
          10,
          7
        ],
        "multiple": [
          84,
          7,
          9
        ],
        "male": [
          80,
          10,
          10
        ],
        "female": [
          83,
          9,
          8
        ],
        "young": [
          56,
          12,
          32
        ],
        "adult": [
          82,
          11,
          6
        ],
        "old": [
          89,
          6,
          5
        ],
        "fulltime": [
          82,
          11,
          7
        ],
        "parttime": [
          81,
          8,
          11
        ],
        "unemployed": [
          82,
          7,
          11
        ],
        "comfortable": [
          82,
          9,
          9
        ],
        "gettingby": [
          81,
          11,
          8
        ],
        "difficulty": [
          82,
          8,
          10
        ]
      }
    },
    "reasons": {
      "askedtoleave": 71,
      "family": 18,
      "money": 42,
      "death": 26,
      "government": 11,
      "companies": 5,
      "customary": 3
    }
  },
  "NI": {
    "insecurity": {
      "allprop": {
        "allresp": [
          72,
          19,
          9
        ],
        "urban": [
          73,
          19,
          8
        ],
        "rural": [
          72,
          19,
          9
        ],
        "owner": [
          78,
          14,
          8
        ],
        "renter": [
          53,
          28,
          18
        ],
        "permission": [
          73,
          21,
          7
        ],
        "formal": [
          75,
          18,
          7
        ],
        "informal": [
          57,
          27,
          16
        ],
        "nodocs": [
          57,
          23,
          20
        ],
        "sole": [
          76,
          16,
          8
        ],
        "multiple": [
          54,
          39,
          7
        ],
        "male": [
          76,
          17,
          7
        ],
        "female": [
          69,
          21,
          10
        ],
        "young": [
          73,
          21,
          6
        ],
        "adult": [
          73,
          17,
          9
        ],
        "old": [
          69,
          20,
          11
        ],
        "fulltime": [
          75,
          17,
          7
        ],
        "parttime": [
          70,
          21,
          9
        ],
        "unemployed": [
          68,
          19,
          12
        ],
        "comfortable": [
          75,
          18,
          8
        ],
        "gettingby": [
          74,
          16,
          10
        ],
        "difficulty": [
          71,
          22,
          6
        ]
      },
      "homes": {
        "allresp": [
          74,
          17,
          9
        ],
        "urban": [
          74,
          18,
          8
        ],
        "rural": [
          74,
          16,
          10
        ],
        "owner": [
          80,
          13,
          8
        ],
        "renter": [
          56,
          27,
          17
        ],
        "permission": [
          74,
          19,
          7
        ],
        "formal": [
          77,
          16,
          7
        ],
        "informal": [
          58,
          29,
          14
        ],
        "nodocs": [
          57,
          23,
          20
        ],
        "sole": [
          76,
          16,
          8
        ],
        "multiple": [
          68,
          27,
          5
        ],
        "male": [
          79,
          15,
          6
        ],
        "female": [
          70,
          19,
          10
        ],
        "young": [
          75,
          20,
          5
        ],
        "adult": [
          75,
          16,
          9
        ],
        "old": [
          72,
          17,
          12
        ],
        "fulltime": [
          79,
          15,
          6
        ],
        "parttime": [
          71,
          19,
          9
        ],
        "unemployed": [
          68,
          19,
          12
        ],
        "comfortable": [
          78,
          15,
          8
        ],
        "gettingby": [
          75,
          15,
          10
        ],
        "difficulty": [
          74,
          20,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          8,
          7
        ],
        "urban": [
          85,
          8,
          6
        ],
        "rural": [
          85,
          8,
          7
        ],
        "owner": [
          91,
          7,
          2
        ],
        "renter": [
          55,
          29,
          17
        ],
        "permission": [
          88,
          6,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          84,
          9,
          7
        ],
        "multiple": [
          94,
          4,
          2
        ],
        "male": [
          87,
          7,
          6
        ],
        "female": [
          83,
          9,
          8
        ],
        "young": [
          82,
          7,
          11
        ],
        "adult": [
          85,
          9,
          7
        ],
        "old": [
          90,
          7,
          2
        ],
        "fulltime": [
          87,
          9,
          4
        ],
        "parttime": [
          84,
          9,
          6
        ],
        "unemployed": [
          78,
          9,
          13
        ],
        "comfortable": [
          94,
          3,
          3
        ],
        "gettingby": [
          85,
          9,
          7
        ],
        "difficulty": [
          84,
          9,
          7
        ]
      },
      "homes": {
        "allresp": [
          84,
          9,
          7
        ],
        "urban": [
          84,
          9,
          6
        ],
        "rural": [
          84,
          8,
          7
        ],
        "owner": [
          91,
          7,
          2
        ],
        "renter": [
          52,
          30,
          18
        ],
        "permission": [
          87,
          6,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          84,
          9,
          7
        ],
        "multiple": [
          88,
          9,
          3
        ],
        "male": [
          86,
          8,
          6
        ],
        "female": [
          83,
          9,
          8
        ],
        "young": [
          80,
          9,
          11
        ],
        "adult": [
          84,
          9,
          7
        ],
        "old": [
          90,
          7,
          2
        ],
        "fulltime": [
          86,
          10,
          4
        ],
        "parttime": [
          84,
          9,
          6
        ],
        "unemployed": [
          78,
          9,
          13
        ],
        "comfortable": [
          94,
          3,
          3
        ],
        "gettingby": [
          83,
          10,
          7
        ],
        "difficulty": [
          84,
          9,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 62,
      "family": 40,
      "money": 44,
      "death": 41,
      "government": 14,
      "companies": 7,
      "customary": -1
    }
  },
  "NE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          60,
          29,
          11
        ],
        "urban": [
          44,
          37,
          18
        ],
        "rural": [
          63,
          27,
          10
        ],
        "owner": [
          65,
          25,
          10
        ],
        "renter": [
          32,
          62,
          6
        ],
        "permission": [
          61,
          27,
          12
        ],
        "formal": [
          56,
          31,
          13
        ],
        "informal": [
          69,
          22,
          9
        ],
        "nodocs": [
          61,
          28,
          11
        ],
        "sole": [
          63,
          26,
          11
        ],
        "multiple": [
          49,
          40,
          11
        ],
        "male": [
          65,
          27,
          8
        ],
        "female": [
          55,
          30,
          14
        ],
        "young": [
          61,
          30,
          9
        ],
        "adult": [
          60,
          29,
          11
        ],
        "old": [
          58,
          24,
          18
        ],
        "fulltime": [
          58,
          29,
          12
        ],
        "parttime": [
          39,
          49,
          12
        ],
        "unemployed": [
          37,
          53,
          10
        ],
        "comfortable": [
          61,
          26,
          13
        ],
        "gettingby": [
          67,
          21,
          11
        ],
        "difficulty": [
          57,
          33,
          10
        ]
      },
      "homes": {
        "allresp": [
          63,
          26,
          11
        ],
        "urban": [
          47,
          36,
          17
        ],
        "rural": [
          66,
          24,
          10
        ],
        "owner": [
          69,
          21,
          10
        ],
        "renter": [
          33,
          61,
          6
        ],
        "permission": [
          64,
          25,
          11
        ],
        "formal": [
          64,
          23,
          13
        ],
        "informal": [
          71,
          20,
          10
        ],
        "nodocs": [
          62,
          27,
          10
        ],
        "sole": [
          63,
          26,
          11
        ],
        "multiple": [
          66,
          25,
          9
        ],
        "male": [
          69,
          23,
          8
        ],
        "female": [
          57,
          29,
          14
        ],
        "young": [
          64,
          27,
          9
        ],
        "adult": [
          63,
          26,
          10
        ],
        "old": [
          60,
          22,
          18
        ],
        "fulltime": [
          62,
          27,
          11
        ],
        "parttime": [
          47,
          45,
          8
        ],
        "unemployed": [
          37,
          52,
          10
        ],
        "comfortable": [
          63,
          24,
          13
        ],
        "gettingby": [
          71,
          18,
          11
        ],
        "difficulty": [
          59,
          30,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          30,
          4,
          66
        ],
        "urban": [
          40,
          4,
          56
        ],
        "rural": [
          28,
          4,
          68
        ],
        "owner": [
          46,
          9,
          45
        ],
        "renter": [
          30,
          4,
          66
        ],
        "permission": [
          22,
          2,
          76
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          24,
          4,
          72
        ],
        "multiple": [
          58,
          5,
          37
        ],
        "male": [
          33,
          6,
          61
        ],
        "female": [
          26,
          2,
          71
        ],
        "young": [
          22,
          3,
          75
        ],
        "adult": [
          33,
          4,
          63
        ],
        "old": [
          31,
          8,
          60
        ],
        "fulltime": [
          36,
          3,
          61
        ],
        "parttime": [
          43,
          0,
          57
        ],
        "unemployed": [
          19,
          2,
          79
        ],
        "comfortable": [
          39,
          4,
          58
        ],
        "gettingby": [
          32,
          4,
          64
        ],
        "difficulty": [
          27,
          4,
          69
        ]
      },
      "homes": {
        "allresp": [
          24,
          4,
          72
        ],
        "urban": [
          35,
          4,
          61
        ],
        "rural": [
          22,
          4,
          74
        ],
        "owner": [
          43,
          9,
          49
        ],
        "renter": [
          21,
          7,
          72
        ],
        "permission": [
          14,
          1,
          84
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          24,
          4,
          72
        ],
        "multiple": [
          24,
          4,
          72
        ],
        "male": [
          27,
          5,
          67
        ],
        "female": [
          20,
          2,
          77
        ],
        "young": [
          17,
          2,
          81
        ],
        "adult": [
          27,
          4,
          70
        ],
        "old": [
          26,
          8,
          65
        ],
        "fulltime": [
          29,
          4,
          67
        ],
        "parttime": [
          25,
          4,
          71
        ],
        "unemployed": [
          16,
          2,
          82
        ],
        "comfortable": [
          33,
          3,
          64
        ],
        "gettingby": [
          24,
          4,
          72
        ],
        "difficulty": [
          22,
          4,
          74
        ]
      }
    },
    "reasons": {
      "askedtoleave": 11,
      "family": 17,
      "money": 11,
      "death": 14,
      "government": 2,
      "companies": 2,
      "customary": -1
    }
  },
  "NG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          68,
          23,
          9
        ],
        "urban": [
          68,
          22,
          10
        ],
        "rural": [
          68,
          23,
          9
        ],
        "owner": [
          77,
          16,
          7
        ],
        "renter": [
          55,
          32,
          13
        ],
        "permission": [
          73,
          20,
          8
        ],
        "formal": [
          67,
          25,
          8
        ],
        "informal": [
          60,
          24,
          16
        ],
        "nodocs": [
          70,
          20,
          10
        ],
        "sole": [
          70,
          20,
          10
        ],
        "multiple": [
          63,
          29,
          8
        ],
        "male": [
          71,
          21,
          8
        ],
        "female": [
          65,
          24,
          11
        ],
        "young": [
          63,
          27,
          10
        ],
        "adult": [
          68,
          23,
          8
        ],
        "old": [
          75,
          13,
          13
        ],
        "fulltime": [
          67,
          24,
          9
        ],
        "parttime": [
          65,
          28,
          7
        ],
        "unemployed": [
          67,
          19,
          13
        ],
        "comfortable": [
          66,
          24,
          11
        ],
        "gettingby": [
          70,
          22,
          9
        ],
        "difficulty": [
          68,
          23,
          9
        ]
      },
      "homes": {
        "allresp": [
          70,
          20,
          9
        ],
        "urban": [
          69,
          20,
          10
        ],
        "rural": [
          71,
          20,
          9
        ],
        "owner": [
          80,
          13,
          6
        ],
        "renter": [
          56,
          31,
          13
        ],
        "permission": [
          76,
          17,
          8
        ],
        "formal": [
          71,
          22,
          7
        ],
        "informal": [
          61,
          23,
          16
        ],
        "nodocs": [
          72,
          18,
          10
        ],
        "sole": [
          70,
          20,
          10
        ],
        "multiple": [
          72,
          20,
          8
        ],
        "male": [
          73,
          19,
          8
        ],
        "female": [
          67,
          22,
          11
        ],
        "young": [
          65,
          25,
          10
        ],
        "adult": [
          71,
          21,
          8
        ],
        "old": [
          78,
          10,
          12
        ],
        "fulltime": [
          70,
          22,
          8
        ],
        "parttime": [
          68,
          25,
          7
        ],
        "unemployed": [
          68,
          18,
          14
        ],
        "comfortable": [
          70,
          19,
          11
        ],
        "gettingby": [
          71,
          20,
          9
        ],
        "difficulty": [
          70,
          21,
          9
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          49,
          9,
          42
        ],
        "urban": [
          61,
          11,
          28
        ],
        "rural": [
          43,
          8,
          49
        ],
        "owner": [
          60,
          11,
          30
        ],
        "renter": [
          61,
          13,
          26
        ],
        "permission": [
          35,
          4,
          62
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          45,
          9,
          46
        ],
        "multiple": [
          60,
          8,
          31
        ],
        "male": [
          55,
          8,
          37
        ],
        "female": [
          43,
          10,
          47
        ],
        "young": [
          38,
          10,
          53
        ],
        "adult": [
          55,
          8,
          37
        ],
        "old": [
          41,
          15,
          44
        ],
        "fulltime": [
          61,
          10,
          29
        ],
        "parttime": [
          53,
          8,
          39
        ],
        "unemployed": [
          39,
          10,
          51
        ],
        "comfortable": [
          56,
          8,
          35
        ],
        "gettingby": [
          49,
          12,
          39
        ],
        "difficulty": [
          48,
          8,
          44
        ]
      },
      "homes": {
        "allresp": [
          45,
          10,
          45
        ],
        "urban": [
          60,
          11,
          29
        ],
        "rural": [
          37,
          9,
          54
        ],
        "owner": [
          57,
          11,
          31
        ],
        "renter": [
          58,
          14,
          29
        ],
        "permission": [
          28,
          4,
          68
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          45,
          9,
          46
        ],
        "multiple": [
          44,
          11,
          45
        ],
        "male": [
          50,
          9,
          40
        ],
        "female": [
          39,
          10,
          50
        ],
        "young": [
          32,
          11,
          57
        ],
        "adult": [
          51,
          8,
          41
        ],
        "old": [
          38,
          17,
          45
        ],
        "fulltime": [
          56,
          11,
          32
        ],
        "parttime": [
          46,
          10,
          44
        ],
        "unemployed": [
          37,
          10,
          53
        ],
        "comfortable": [
          47,
          10,
          43
        ],
        "gettingby": [
          46,
          12,
          41
        ],
        "difficulty": [
          44,
          9,
          47
        ]
      }
    },
    "reasons": {
      "askedtoleave": 28,
      "family": 19,
      "money": 18,
      "death": 13,
      "government": 17,
      "companies": 12,
      "customary": 11
    }
  },
  "MK": {
    "insecurity": {
      "allprop": {
        "allresp": [
          85,
          8,
          7
        ],
        "urban": [
          83,
          10,
          7
        ],
        "rural": [
          88,
          4,
          7
        ],
        "owner": [
          90,
          6,
          4
        ],
        "renter": [
          40,
          44,
          17
        ],
        "permission": [
          81,
          9,
          10
        ],
        "formal": [
          86,
          8,
          6
        ],
        "informal": [
          74,
          15,
          11
        ],
        "nodocs": [
          58,
          19,
          23
        ],
        "sole": [
          86,
          8,
          6
        ],
        "multiple": [
          83,
          9,
          8
        ],
        "male": [
          86,
          9,
          5
        ],
        "female": [
          83,
          7,
          9
        ],
        "young": [
          81,
          14,
          5
        ],
        "adult": [
          81,
          9,
          10
        ],
        "old": [
          91,
          6,
          3
        ],
        "fulltime": [
          88,
          7,
          4
        ],
        "parttime": [
          76,
          17,
          7
        ],
        "unemployed": [
          93,
          5,
          2
        ],
        "comfortable": [
          91,
          6,
          3
        ],
        "gettingby": [
          87,
          8,
          5
        ],
        "difficulty": [
          79,
          10,
          11
        ]
      },
      "homes": {
        "allresp": [
          86,
          7,
          6
        ],
        "urban": [
          85,
          9,
          6
        ],
        "rural": [
          90,
          4,
          7
        ],
        "owner": [
          92,
          5,
          3
        ],
        "renter": [
          40,
          44,
          17
        ],
        "permission": [
          82,
          8,
          10
        ],
        "formal": [
          88,
          7,
          5
        ],
        "informal": [
          73,
          14,
          12
        ],
        "nodocs": [
          58,
          19,
          23
        ],
        "sole": [
          86,
          8,
          6
        ],
        "multiple": [
          91,
          4,
          5
        ],
        "male": [
          88,
          8,
          4
        ],
        "female": [
          85,
          7,
          9
        ],
        "young": [
          84,
          12,
          4
        ],
        "adult": [
          82,
          8,
          10
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          89,
          6,
          5
        ],
        "parttime": [
          80,
          13,
          7
        ],
        "unemployed": [
          93,
          5,
          2
        ],
        "comfortable": [
          93,
          5,
          3
        ],
        "gettingby": [
          88,
          7,
          5
        ],
        "difficulty": [
          81,
          9,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          93,
          3,
          4
        ],
        "urban": [
          94,
          2,
          4
        ],
        "rural": [
          91,
          4,
          5
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          75,
          9,
          16
        ],
        "permission": [
          88,
          4,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          3,
          5
        ],
        "multiple": [
          98,
          2,
          0
        ],
        "male": [
          95,
          2,
          3
        ],
        "female": [
          91,
          4,
          5
        ],
        "young": [
          85,
          7,
          8
        ],
        "adult": [
          91,
          4,
          5
        ],
        "old": [
          98,
          1,
          1
        ],
        "fulltime": [
          96,
          1,
          2
        ],
        "parttime": [
          77,
          14,
          9
        ],
        "unemployed": [
          88,
          11,
          1
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          96,
          1,
          3
        ],
        "difficulty": [
          89,
          5,
          6
        ]
      },
      "homes": {
        "allresp": [
          93,
          3,
          4
        ],
        "urban": [
          93,
          2,
          4
        ],
        "rural": [
          91,
          4,
          5
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          72,
          12,
          16
        ],
        "permission": [
          88,
          5,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          3,
          5
        ],
        "multiple": [
          97,
          3,
          0
        ],
        "male": [
          95,
          2,
          3
        ],
        "female": [
          91,
          4,
          5
        ],
        "young": [
          84,
          7,
          8
        ],
        "adult": [
          91,
          4,
          5
        ],
        "old": [
          97,
          1,
          1
        ],
        "fulltime": [
          96,
          1,
          2
        ],
        "parttime": [
          77,
          14,
          9
        ],
        "unemployed": [
          88,
          11,
          1
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          95,
          2,
          3
        ],
        "difficulty": [
          89,
          5,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 34,
      "family": 44,
      "money": 24,
      "death": 27,
      "government": 8,
      "companies": 11,
      "customary": -1
    }
  },
  "XX3": {
    "insecurity": {
      "allprop": {
        "allresp": [
          69,
          26,
          5
        ],
        "urban": [
          70,
          26,
          5
        ],
        "rural": [
          65,
          33,
          2
        ],
        "owner": [
          81,
          15,
          4
        ],
        "renter": [
          50,
          45,
          5
        ],
        "permission": [
          57,
          37,
          6
        ],
        "formal": [
          71,
          25,
          5
        ],
        "informal": [
          68,
          31,
          1
        ],
        "nodocs": [
          58,
          36,
          5
        ],
        "sole": [
          74,
          21,
          5
        ],
        "multiple": [
          51,
          45,
          4
        ],
        "male": [
          68,
          29,
          4
        ],
        "female": [
          71,
          24,
          5
        ],
        "young": [
          61,
          35,
          5
        ],
        "adult": [
          69,
          27,
          4
        ],
        "old": [
          80,
          15,
          5
        ],
        "fulltime": [
          65,
          31,
          4
        ],
        "parttime": [
          75,
          21,
          4
        ],
        "unemployed": [
          71,
          24,
          5
        ],
        "comfortable": [
          77,
          22,
          1
        ],
        "gettingby": [
          72,
          23,
          5
        ],
        "difficulty": [
          60,
          36,
          5
        ]
      },
      "homes": {
        "allresp": [
          73,
          23,
          4
        ],
        "urban": [
          73,
          22,
          4
        ],
        "rural": [
          67,
          31,
          2
        ],
        "owner": [
          84,
          12,
          3
        ],
        "renter": [
          55,
          40,
          5
        ],
        "permission": [
          61,
          33,
          6
        ],
        "formal": [
          76,
          20,
          4
        ],
        "informal": [
          67,
          32,
          1
        ],
        "nodocs": [
          59,
          37,
          4
        ],
        "sole": [
          74,
          21,
          5
        ],
        "multiple": [
          67,
          30,
          2
        ],
        "male": [
          72,
          24,
          3
        ],
        "female": [
          74,
          21,
          5
        ],
        "young": [
          68,
          28,
          4
        ],
        "adult": [
          72,
          24,
          4
        ],
        "old": [
          82,
          13,
          4
        ],
        "fulltime": [
          69,
          27,
          3
        ],
        "parttime": [
          79,
          17,
          4
        ],
        "unemployed": [
          76,
          21,
          3
        ],
        "comfortable": [
          83,
          17,
          1
        ],
        "gettingby": [
          75,
          20,
          5
        ],
        "difficulty": [
          63,
          33,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          4,
          12
        ],
        "urban": [
          84,
          4,
          12
        ],
        "rural": [
          86,
          3,
          11
        ],
        "owner": [
          91,
          4,
          5
        ],
        "renter": [
          87,
          2,
          11
        ],
        "permission": [
          73,
          6,
          20
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          5,
          14
        ],
        "multiple": [
          95,
          1,
          4
        ],
        "male": [
          85,
          4,
          11
        ],
        "female": [
          83,
          4,
          12
        ],
        "young": [
          85,
          3,
          12
        ],
        "adult": [
          82,
          5,
          14
        ],
        "old": [
          92,
          3,
          5
        ],
        "fulltime": [
          85,
          4,
          12
        ],
        "parttime": [
          88,
          3,
          9
        ],
        "unemployed": [
          86,
          4,
          10
        ],
        "comfortable": [
          88,
          4,
          8
        ],
        "gettingby": [
          85,
          3,
          12
        ],
        "difficulty": [
          82,
          6,
          13
        ]
      },
      "homes": {
        "allresp": [
          80,
          5,
          15
        ],
        "urban": [
          80,
          5,
          15
        ],
        "rural": [
          83,
          2,
          15
        ],
        "owner": [
          91,
          4,
          5
        ],
        "renter": [
          81,
          3,
          16
        ],
        "permission": [
          64,
          8,
          28
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          5,
          14
        ],
        "multiple": [
          77,
          5,
          18
        ],
        "male": [
          80,
          6,
          15
        ],
        "female": [
          81,
          4,
          15
        ],
        "young": [
          82,
          4,
          14
        ],
        "adult": [
          76,
          6,
          18
        ],
        "old": [
          91,
          4,
          5
        ],
        "fulltime": [
          80,
          5,
          15
        ],
        "parttime": [
          82,
          3,
          15
        ],
        "unemployed": [
          84,
          4,
          13
        ],
        "comfortable": [
          85,
          5,
          10
        ],
        "gettingby": [
          81,
          4,
          15
        ],
        "difficulty": [
          77,
          7,
          16
        ]
      }
    },
    "reasons": {
      "askedtoleave": 66,
      "family": 28,
      "money": 41,
      "death": 27,
      "government": 22,
      "companies": 16,
      "customary": -1
    }
  },
  "NO": {
    "insecurity": {
      "allprop": {
        "allresp": [
          91,
          8,
          1
        ],
        "urban": [
          92,
          8,
          0
        ],
        "rural": [
          90,
          9,
          2
        ],
        "owner": [
          94,
          6,
          1
        ],
        "renter": [
          85,
          14,
          1
        ],
        "permission": [
          89,
          11,
          0
        ],
        "formal": [
          91,
          8,
          1
        ],
        "informal": [
          96,
          4,
          0
        ],
        "nodocs": [
          94,
          6,
          0
        ],
        "sole": [
          93,
          7,
          1
        ],
        "multiple": [
          89,
          11,
          0
        ],
        "male": [
          91,
          9,
          0
        ],
        "female": [
          92,
          7,
          1
        ],
        "young": [
          85,
          15,
          0
        ],
        "adult": [
          89,
          10,
          1
        ],
        "old": [
          95,
          4,
          1
        ],
        "fulltime": [
          92,
          8,
          0
        ],
        "parttime": [
          84,
          16,
          0
        ],
        "unemployed": [
          84,
          16,
          0
        ],
        "comfortable": [
          93,
          6,
          1
        ],
        "gettingby": [
          90,
          9,
          1
        ],
        "difficulty": [
          77,
          23,
          0
        ]
      },
      "homes": {
        "allresp": [
          93,
          6,
          1
        ],
        "urban": [
          94,
          6,
          0
        ],
        "rural": [
          91,
          7,
          2
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          87,
          12,
          1
        ],
        "permission": [
          90,
          10,
          0
        ],
        "formal": [
          93,
          6,
          1
        ],
        "informal": [
          90,
          10,
          0
        ],
        "nodocs": [
          96,
          4,
          0
        ],
        "sole": [
          93,
          7,
          1
        ],
        "multiple": [
          95,
          5,
          0
        ],
        "male": [
          92,
          7,
          0
        ],
        "female": [
          94,
          5,
          1
        ],
        "young": [
          85,
          15,
          0
        ],
        "adult": [
          92,
          7,
          0
        ],
        "old": [
          96,
          3,
          1
        ],
        "fulltime": [
          95,
          5,
          0
        ],
        "parttime": [
          86,
          14,
          0
        ],
        "unemployed": [
          84,
          16,
          0
        ],
        "comfortable": [
          96,
          4,
          1
        ],
        "gettingby": [
          90,
          9,
          1
        ],
        "difficulty": [
          78,
          22,
          0
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          93,
          5,
          2
        ],
        "urban": [
          92,
          6,
          2
        ],
        "rural": [
          94,
          2,
          4
        ],
        "owner": [
          99,
          1,
          1
        ],
        "renter": [
          78,
          15,
          7
        ],
        "permission": [
          88,
          9,
          3
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          7,
          3
        ],
        "multiple": [
          99,
          1,
          1
        ],
        "male": [
          93,
          4,
          3
        ],
        "female": [
          93,
          6,
          2
        ],
        "young": [
          90,
          8,
          2
        ],
        "adult": [
          93,
          6,
          2
        ],
        "old": [
          93,
          3,
          3
        ],
        "fulltime": [
          92,
          5,
          2
        ],
        "parttime": [
          96,
          4,
          0
        ],
        "unemployed": [
          86,
          14,
          0
        ],
        "comfortable": [
          94,
          4,
          2
        ],
        "gettingby": [
          90,
          8,
          2
        ],
        "difficulty": [
          94,
          2,
          4
        ]
      },
      "homes": {
        "allresp": [
          90,
          7,
          3
        ],
        "urban": [
          89,
          9,
          3
        ],
        "rural": [
          93,
          3,
          4
        ],
        "owner": [
          98,
          1,
          1
        ],
        "renter": [
          71,
          21,
          8
        ],
        "permission": [
          81,
          13,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          90,
          7,
          3
        ],
        "multiple": [
          90,
          7,
          3
        ],
        "male": [
          89,
          8,
          3
        ],
        "female": [
          91,
          7,
          3
        ],
        "young": [
          85,
          12,
          2
        ],
        "adult": [
          90,
          8,
          2
        ],
        "old": [
          91,
          5,
          4
        ],
        "fulltime": [
          89,
          8,
          3
        ],
        "parttime": [
          95,
          5,
          0
        ],
        "unemployed": [
          80,
          20,
          0
        ],
        "comfortable": [
          90,
          6,
          3
        ],
        "gettingby": [
          88,
          9,
          3
        ],
        "difficulty": [
          89,
          7,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 77,
      "family": 29,
      "money": 39,
      "death": 20,
      "government": 26,
      "companies": 12,
      "customary": -1
    }
  },
  "PK": {
    "insecurity": {
      "allprop": {
        "allresp": [
          57,
          17,
          26
        ],
        "urban": [
          51,
          17,
          32
        ],
        "rural": [
          74,
          19,
          7
        ],
        "owner": [
          58,
          11,
          32
        ],
        "renter": [
          44,
          36,
          20
        ],
        "permission": [
          61,
          21,
          18
        ],
        "formal": [
          58,
          18,
          24
        ],
        "informal": [
          49,
          9,
          42
        ],
        "nodocs": [
          53,
          17,
          30
        ],
        "sole": [
          59,
          15,
          26
        ],
        "multiple": [
          51,
          30,
          19
        ],
        "male": [
          54,
          21,
          25
        ],
        "female": [
          59,
          13,
          28
        ],
        "young": [
          52,
          19,
          29
        ],
        "adult": [
          56,
          18,
          26
        ],
        "old": [
          69,
          10,
          21
        ],
        "fulltime": [
          66,
          18,
          16
        ],
        "parttime": [
          41,
          18,
          42
        ],
        "unemployed": [
          38,
          29,
          33
        ],
        "comfortable": [
          52,
          15,
          33
        ],
        "gettingby": [
          61,
          17,
          22
        ],
        "difficulty": [
          56,
          18,
          26
        ]
      },
      "homes": {
        "allresp": [
          58,
          16,
          26
        ],
        "urban": [
          53,
          15,
          32
        ],
        "rural": [
          76,
          17,
          7
        ],
        "owner": [
          60,
          9,
          31
        ],
        "renter": [
          44,
          36,
          19
        ],
        "permission": [
          63,
          19,
          18
        ],
        "formal": [
          60,
          16,
          24
        ],
        "informal": [
          50,
          12,
          39
        ],
        "nodocs": [
          55,
          14,
          31
        ],
        "sole": [
          59,
          15,
          26
        ],
        "multiple": [
          63,
          19,
          18
        ],
        "male": [
          56,
          19,
          25
        ],
        "female": [
          61,
          11,
          28
        ],
        "young": [
          53,
          16,
          30
        ],
        "adult": [
          57,
          17,
          26
        ],
        "old": [
          71,
          8,
          21
        ],
        "fulltime": [
          67,
          18,
          16
        ],
        "parttime": [
          41,
          18,
          41
        ],
        "unemployed": [
          43,
          23,
          35
        ],
        "comfortable": [
          53,
          15,
          32
        ],
        "gettingby": [
          62,
          14,
          23
        ],
        "difficulty": [
          57,
          17,
          26
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          73,
          7,
          20
        ],
        "urban": [
          73,
          7,
          20
        ],
        "rural": [
          74,
          6,
          20
        ],
        "owner": [
          79,
          6,
          15
        ],
        "renter": [
          72,
          6,
          22
        ],
        "permission": [
          72,
          6,
          22
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          73,
          7,
          19
        ],
        "multiple": [
          84,
          3,
          13
        ],
        "male": [
          75,
          6,
          19
        ],
        "female": [
          71,
          7,
          22
        ],
        "young": [
          77,
          6,
          17
        ],
        "adult": [
          71,
          7,
          21
        ],
        "old": [
          73,
          4,
          23
        ],
        "fulltime": [
          76,
          7,
          17
        ],
        "parttime": [
          65,
          4,
          30
        ],
        "unemployed": [
          84,
          3,
          13
        ],
        "comfortable": [
          75,
          8,
          17
        ],
        "gettingby": [
          76,
          7,
          17
        ],
        "difficulty": [
          72,
          6,
          22
        ]
      },
      "homes": {
        "allresp": [
          72,
          7,
          21
        ],
        "urban": [
          72,
          7,
          21
        ],
        "rural": [
          71,
          7,
          21
        ],
        "owner": [
          78,
          6,
          16
        ],
        "renter": [
          66,
          10,
          24
        ],
        "permission": [
          71,
          6,
          23
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          73,
          7,
          19
        ],
        "multiple": [
          74,
          8,
          18
        ],
        "male": [
          74,
          7,
          19
        ],
        "female": [
          70,
          8,
          23
        ],
        "young": [
          76,
          6,
          17
        ],
        "adult": [
          70,
          8,
          22
        ],
        "old": [
          72,
          4,
          24
        ],
        "fulltime": [
          73,
          8,
          18
        ],
        "parttime": [
          65,
          4,
          30
        ],
        "unemployed": [
          83,
          4,
          13
        ],
        "comfortable": [
          75,
          8,
          17
        ],
        "gettingby": [
          74,
          8,
          19
        ],
        "difficulty": [
          71,
          7,
          22
        ]
      }
    },
    "reasons": {
      "askedtoleave": 41,
      "family": 14,
      "money": 19,
      "death": 17,
      "government": 5,
      "companies": 7,
      "customary": 10
    }
  },
  "PS": {
    "insecurity": {
      "allprop": {
        "allresp": [
          73,
          25,
          2
        ],
        "urban": [
          73,
          25,
          2
        ],
        "rural": [
          null,
          null,
          null
        ],
        "owner": [
          81,
          17,
          2
        ],
        "renter": [
          42,
          57,
          1
        ],
        "permission": [
          74,
          24,
          2
        ],
        "formal": [
          77,
          21,
          2
        ],
        "informal": [
          62,
          34,
          4
        ],
        "nodocs": [
          61,
          37,
          2
        ],
        "sole": [
          73,
          24,
          2
        ],
        "multiple": [
          70,
          29,
          2
        ],
        "male": [
          74,
          25,
          1
        ],
        "female": [
          71,
          25,
          3
        ],
        "young": [
          71,
          28,
          1
        ],
        "adult": [
          71,
          27,
          3
        ],
        "old": [
          83,
          13,
          4
        ],
        "fulltime": [
          71,
          27,
          2
        ],
        "parttime": [
          75,
          23,
          2
        ],
        "unemployed": [
          67,
          31,
          2
        ],
        "comfortable": [
          85,
          11,
          4
        ],
        "gettingby": [
          72,
          24,
          4
        ],
        "difficulty": [
          71,
          28,
          1
        ]
      },
      "homes": {
        "allresp": [
          75,
          23,
          2
        ],
        "urban": [
          75,
          23,
          2
        ],
        "rural": [
          null,
          null,
          null
        ],
        "owner": [
          86,
          12,
          2
        ],
        "renter": [
          43,
          56,
          1
        ],
        "permission": [
          75,
          23,
          2
        ],
        "formal": [
          80,
          18,
          2
        ],
        "informal": [
          65,
          32,
          3
        ],
        "nodocs": [
          60,
          37,
          2
        ],
        "sole": [
          73,
          24,
          2
        ],
        "multiple": [
          83,
          17,
          0
        ],
        "male": [
          77,
          22,
          1
        ],
        "female": [
          72,
          24,
          3
        ],
        "young": [
          73,
          26,
          1
        ],
        "adult": [
          73,
          25,
          2
        ],
        "old": [
          86,
          11,
          3
        ],
        "fulltime": [
          75,
          22,
          2
        ],
        "parttime": [
          76,
          22,
          2
        ],
        "unemployed": [
          68,
          30,
          2
        ],
        "comfortable": [
          91,
          7,
          3
        ],
        "gettingby": [
          75,
          21,
          4
        ],
        "difficulty": [
          72,
          26,
          1
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          72,
          16,
          12
        ],
        "urban": [
          72,
          16,
          12
        ],
        "rural": [
          null,
          null,
          null
        ],
        "owner": [
          78,
          15,
          7
        ],
        "renter": [
          83,
          11,
          5
        ],
        "permission": [
          68,
          18,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          67,
          19,
          14
        ],
        "multiple": [
          95,
          5,
          0
        ],
        "male": [
          70,
          18,
          12
        ],
        "female": [
          74,
          15,
          11
        ],
        "young": [
          65,
          19,
          16
        ],
        "adult": [
          72,
          16,
          13
        ],
        "old": [
          85,
          14,
          0
        ],
        "fulltime": [
          72,
          17,
          11
        ],
        "parttime": [
          69,
          16,
          15
        ],
        "unemployed": [
          74,
          16,
          10
        ],
        "comfortable": [
          81,
          13,
          6
        ],
        "gettingby": [
          74,
          16,
          10
        ],
        "difficulty": [
          70,
          16,
          13
        ]
      },
      "homes": {
        "allresp": [
          69,
          18,
          13
        ],
        "urban": [
          69,
          18,
          13
        ],
        "rural": [
          null,
          null,
          null
        ],
        "owner": [
          76,
          17,
          7
        ],
        "renter": [
          80,
          12,
          7
        ],
        "permission": [
          65,
          19,
          15
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          67,
          19,
          14
        ],
        "multiple": [
          80,
          14,
          5
        ],
        "male": [
          67,
          19,
          14
        ],
        "female": [
          72,
          17,
          12
        ],
        "young": [
          65,
          19,
          16
        ],
        "adult": [
          69,
          17,
          14
        ],
        "old": [
          81,
          18,
          1
        ],
        "fulltime": [
          69,
          19,
          12
        ],
        "parttime": [
          66,
          19,
          15
        ],
        "unemployed": [
          70,
          17,
          13
        ],
        "comfortable": [
          79,
          16,
          6
        ],
        "gettingby": [
          72,
          17,
          10
        ],
        "difficulty": [
          67,
          18,
          14
        ]
      }
    },
    "reasons": {
      "askedtoleave": 64,
      "family": 50,
      "money": 35,
      "death": 21,
      "government": 13,
      "companies": 2,
      "customary": 5
    }
  },
  "PA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          73,
          23,
          4
        ],
        "urban": [
          74,
          23,
          3
        ],
        "rural": [
          71,
          23,
          6
        ],
        "owner": [
          81,
          15,
          4
        ],
        "renter": [
          57,
          43,
          1
        ],
        "permission": [
          72,
          25,
          3
        ],
        "formal": [
          76,
          22,
          2
        ],
        "informal": [
          66,
          29,
          5
        ],
        "nodocs": [
          51,
          24,
          25
        ],
        "sole": [
          74,
          23,
          3
        ],
        "multiple": [
          72,
          26,
          2
        ],
        "male": [
          76,
          22,
          3
        ],
        "female": [
          71,
          24,
          5
        ],
        "young": [
          75,
          22,
          3
        ],
        "adult": [
          71,
          26,
          3
        ],
        "old": [
          76,
          17,
          7
        ],
        "fulltime": [
          72,
          26,
          2
        ],
        "parttime": [
          75,
          21,
          4
        ],
        "unemployed": [
          74,
          24,
          2
        ],
        "comfortable": [
          80,
          17,
          3
        ],
        "gettingby": [
          78,
          19,
          3
        ],
        "difficulty": [
          67,
          29,
          4
        ]
      },
      "homes": {
        "allresp": [
          75,
          21,
          4
        ],
        "urban": [
          76,
          22,
          3
        ],
        "rural": [
          74,
          20,
          6
        ],
        "owner": [
          82,
          14,
          4
        ],
        "renter": [
          57,
          43,
          1
        ],
        "permission": [
          75,
          22,
          3
        ],
        "formal": [
          78,
          20,
          2
        ],
        "informal": [
          68,
          28,
          4
        ],
        "nodocs": [
          52,
          24,
          24
        ],
        "sole": [
          74,
          23,
          3
        ],
        "multiple": [
          82,
          16,
          2
        ],
        "male": [
          78,
          19,
          3
        ],
        "female": [
          72,
          23,
          5
        ],
        "young": [
          78,
          19,
          3
        ],
        "adult": [
          73,
          24,
          3
        ],
        "old": [
          78,
          15,
          7
        ],
        "fulltime": [
          74,
          25,
          2
        ],
        "parttime": [
          79,
          17,
          4
        ],
        "unemployed": [
          75,
          23,
          2
        ],
        "comfortable": [
          80,
          17,
          3
        ],
        "gettingby": [
          80,
          17,
          3
        ],
        "difficulty": [
          70,
          27,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          83,
          10,
          7
        ],
        "urban": [
          84,
          10,
          6
        ],
        "rural": [
          82,
          10,
          8
        ],
        "owner": [
          90,
          7,
          3
        ],
        "renter": [
          71,
          22,
          7
        ],
        "permission": [
          84,
          9,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          11,
          7
        ],
        "multiple": [
          96,
          3,
          1
        ],
        "male": [
          85,
          9,
          6
        ],
        "female": [
          82,
          11,
          8
        ],
        "young": [
          80,
          11,
          8
        ],
        "adult": [
          83,
          9,
          8
        ],
        "old": [
          87,
          10,
          2
        ],
        "fulltime": [
          85,
          10,
          5
        ],
        "parttime": [
          86,
          7,
          7
        ],
        "unemployed": [
          81,
          9,
          11
        ],
        "comfortable": [
          85,
          7,
          8
        ],
        "gettingby": [
          86,
          10,
          4
        ],
        "difficulty": [
          82,
          10,
          7
        ]
      },
      "homes": {
        "allresp": [
          82,
          11,
          7
        ],
        "urban": [
          82,
          11,
          7
        ],
        "rural": [
          81,
          12,
          8
        ],
        "owner": [
          90,
          8,
          3
        ],
        "renter": [
          65,
          27,
          8
        ],
        "permission": [
          83,
          10,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          11,
          7
        ],
        "multiple": [
          88,
          10,
          2
        ],
        "male": [
          84,
          10,
          6
        ],
        "female": [
          80,
          12,
          8
        ],
        "young": [
          80,
          11,
          9
        ],
        "adult": [
          81,
          11,
          8
        ],
        "old": [
          86,
          11,
          3
        ],
        "fulltime": [
          83,
          12,
          5
        ],
        "parttime": [
          84,
          8,
          8
        ],
        "unemployed": [
          80,
          10,
          11
        ],
        "comfortable": [
          83,
          8,
          9
        ],
        "gettingby": [
          84,
          12,
          4
        ],
        "difficulty": [
          81,
          11,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 61,
      "family": 36,
      "money": 49,
      "death": 29,
      "government": 25,
      "companies": 20,
      "customary": 10
    }
  },
  "PY": {
    "insecurity": {
      "allprop": {
        "allresp": [
          83,
          13,
          4
        ],
        "urban": [
          82,
          14,
          3
        ],
        "rural": [
          85,
          11,
          4
        ],
        "owner": [
          87,
          8,
          5
        ],
        "renter": [
          68,
          30,
          2
        ],
        "permission": [
          85,
          12,
          3
        ],
        "formal": [
          87,
          11,
          3
        ],
        "informal": [
          71,
          22,
          8
        ],
        "nodocs": [
          74,
          20,
          6
        ],
        "sole": [
          84,
          13,
          3
        ],
        "multiple": [
          75,
          20,
          5
        ],
        "male": [
          85,
          13,
          2
        ],
        "female": [
          81,
          13,
          6
        ],
        "young": [
          80,
          19,
          1
        ],
        "adult": [
          83,
          13,
          4
        ],
        "old": [
          87,
          7,
          7
        ],
        "fulltime": [
          82,
          15,
          3
        ],
        "parttime": [
          82,
          14,
          4
        ],
        "unemployed": [
          84,
          13,
          3
        ],
        "comfortable": [
          81,
          19,
          0
        ],
        "gettingby": [
          88,
          9,
          3
        ],
        "difficulty": [
          78,
          16,
          6
        ]
      },
      "homes": {
        "allresp": [
          84,
          13,
          3
        ],
        "urban": [
          83,
          14,
          3
        ],
        "rural": [
          85,
          11,
          4
        ],
        "owner": [
          88,
          8,
          4
        ],
        "renter": [
          70,
          27,
          2
        ],
        "permission": [
          86,
          12,
          3
        ],
        "formal": [
          88,
          10,
          2
        ],
        "informal": [
          71,
          21,
          7
        ],
        "nodocs": [
          73,
          21,
          6
        ],
        "sole": [
          84,
          13,
          3
        ],
        "multiple": [
          84,
          14,
          2
        ],
        "male": [
          86,
          13,
          2
        ],
        "female": [
          82,
          12,
          5
        ],
        "young": [
          82,
          17,
          1
        ],
        "adult": [
          83,
          13,
          4
        ],
        "old": [
          88,
          6,
          6
        ],
        "fulltime": [
          83,
          15,
          3
        ],
        "parttime": [
          84,
          12,
          4
        ],
        "unemployed": [
          85,
          13,
          2
        ],
        "comfortable": [
          82,
          18,
          0
        ],
        "gettingby": [
          88,
          9,
          2
        ],
        "difficulty": [
          79,
          15,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          78,
          14,
          8
        ],
        "urban": [
          79,
          12,
          10
        ],
        "rural": [
          77,
          18,
          5
        ],
        "owner": [
          87,
          10,
          3
        ],
        "renter": [
          65,
          18,
          18
        ],
        "permission": [
          79,
          15,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          78,
          14,
          8
        ],
        "multiple": [
          94,
          2,
          4
        ],
        "male": [
          81,
          12,
          8
        ],
        "female": [
          76,
          16,
          8
        ],
        "young": [
          71,
          15,
          14
        ],
        "adult": [
          79,
          14,
          7
        ],
        "old": [
          83,
          13,
          4
        ],
        "fulltime": [
          82,
          11,
          7
        ],
        "parttime": [
          75,
          15,
          10
        ],
        "unemployed": [
          75,
          10,
          14
        ],
        "comfortable": [
          87,
          10,
          3
        ],
        "gettingby": [
          79,
          13,
          9
        ],
        "difficulty": [
          75,
          17,
          8
        ]
      },
      "homes": {
        "allresp": [
          78,
          14,
          8
        ],
        "urban": [
          78,
          12,
          10
        ],
        "rural": [
          77,
          18,
          5
        ],
        "owner": [
          86,
          11,
          3
        ],
        "renter": [
          65,
          18,
          18
        ],
        "permission": [
          78,
          15,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          78,
          14,
          8
        ],
        "multiple": [
          89,
          5,
          6
        ],
        "male": [
          80,
          12,
          8
        ],
        "female": [
          75,
          16,
          8
        ],
        "young": [
          70,
          15,
          15
        ],
        "adult": [
          78,
          15,
          7
        ],
        "old": [
          83,
          13,
          4
        ],
        "fulltime": [
          81,
          12,
          7
        ],
        "parttime": [
          74,
          15,
          10
        ],
        "unemployed": [
          75,
          10,
          14
        ],
        "comfortable": [
          86,
          10,
          4
        ],
        "gettingby": [
          78,
          13,
          9
        ],
        "difficulty": [
          75,
          17,
          8
        ]
      }
    },
    "reasons": {
      "askedtoleave": 72,
      "family": 34,
      "money": 49,
      "death": 14,
      "government": 23,
      "companies": 18,
      "customary": -1
    }
  },
  "PE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          67,
          18,
          14
        ],
        "urban": [
          69,
          18,
          12
        ],
        "rural": [
          58,
          19,
          23
        ],
        "owner": [
          69,
          11,
          20
        ],
        "renter": [
          54,
          31,
          16
        ],
        "permission": [
          70,
          18,
          12
        ],
        "formal": [
          72,
          15,
          13
        ],
        "informal": [
          65,
          23,
          12
        ],
        "nodocs": [
          56,
          26,
          18
        ],
        "sole": [
          67,
          18,
          15
        ],
        "multiple": [
          67,
          21,
          12
        ],
        "male": [
          74,
          16,
          10
        ],
        "female": [
          60,
          21,
          19
        ],
        "young": [
          71,
          21,
          8
        ],
        "adult": [
          68,
          18,
          14
        ],
        "old": [
          62,
          17,
          21
        ],
        "fulltime": [
          75,
          16,
          8
        ],
        "parttime": [
          70,
          23,
          6
        ],
        "unemployed": [
          64,
          13,
          23
        ],
        "comfortable": [
          71,
          17,
          12
        ],
        "gettingby": [
          78,
          14,
          8
        ],
        "difficulty": [
          64,
          21,
          15
        ]
      },
      "homes": {
        "allresp": [
          68,
          18,
          14
        ],
        "urban": [
          70,
          18,
          12
        ],
        "rural": [
          58,
          19,
          23
        ],
        "owner": [
          69,
          11,
          20
        ],
        "renter": [
          55,
          29,
          16
        ],
        "permission": [
          71,
          17,
          11
        ],
        "formal": [
          72,
          15,
          13
        ],
        "informal": [
          67,
          22,
          12
        ],
        "nodocs": [
          56,
          26,
          19
        ],
        "sole": [
          67,
          18,
          15
        ],
        "multiple": [
          73,
          16,
          11
        ],
        "male": [
          75,
          15,
          10
        ],
        "female": [
          61,
          20,
          19
        ],
        "young": [
          72,
          20,
          8
        ],
        "adult": [
          68,
          18,
          14
        ],
        "old": [
          62,
          17,
          21
        ],
        "fulltime": [
          76,
          16,
          8
        ],
        "parttime": [
          73,
          22,
          6
        ],
        "unemployed": [
          64,
          13,
          23
        ],
        "comfortable": [
          72,
          16,
          12
        ],
        "gettingby": [
          79,
          13,
          8
        ],
        "difficulty": [
          64,
          21,
          15
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          69,
          4,
          27
        ],
        "urban": [
          69,
          5,
          26
        ],
        "rural": [
          66,
          2,
          32
        ],
        "owner": [
          95,
          1,
          4
        ],
        "renter": [
          61,
          2,
          37
        ],
        "permission": [
          57,
          6,
          37
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          67,
          4,
          29
        ],
        "multiple": [
          96,
          2,
          2
        ],
        "male": [
          72,
          4,
          25
        ],
        "female": [
          66,
          5,
          29
        ],
        "young": [
          61,
          2,
          36
        ],
        "adult": [
          67,
          4,
          29
        ],
        "old": [
          80,
          5,
          15
        ],
        "fulltime": [
          74,
          4,
          21
        ],
        "parttime": [
          65,
          3,
          31
        ],
        "unemployed": [
          61,
          5,
          33
        ],
        "comfortable": [
          64,
          2,
          34
        ],
        "gettingby": [
          71,
          3,
          26
        ],
        "difficulty": [
          72,
          5,
          23
        ]
      },
      "homes": {
        "allresp": [
          68,
          4,
          28
        ],
        "urban": [
          68,
          5,
          27
        ],
        "rural": [
          65,
          2,
          33
        ],
        "owner": [
          95,
          1,
          4
        ],
        "renter": [
          58,
          3,
          40
        ],
        "permission": [
          56,
          6,
          38
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          67,
          4,
          29
        ],
        "multiple": [
          82,
          6,
          12
        ],
        "male": [
          70,
          4,
          26
        ],
        "female": [
          65,
          5,
          30
        ],
        "young": [
          61,
          2,
          37
        ],
        "adult": [
          66,
          4,
          30
        ],
        "old": [
          79,
          6,
          15
        ],
        "fulltime": [
          73,
          5,
          22
        ],
        "parttime": [
          65,
          3,
          32
        ],
        "unemployed": [
          61,
          5,
          33
        ],
        "comfortable": [
          64,
          2,
          34
        ],
        "gettingby": [
          69,
          4,
          27
        ],
        "difficulty": [
          71,
          5,
          24
        ]
      }
    },
    "reasons": {
      "askedtoleave": 17,
      "family": 17,
      "money": 19,
      "death": 4,
      "government": 4,
      "companies": 2,
      "customary": 4
    }
  },
  "PH": {
    "insecurity": {
      "allprop": {
        "allresp": [
          51,
          48,
          1
        ],
        "urban": [
          48,
          51,
          1
        ],
        "rural": [
          55,
          45,
          0
        ],
        "owner": [
          61,
          38,
          1
        ],
        "renter": [
          25,
          73,
          2
        ],
        "permission": [
          54,
          45,
          1
        ],
        "formal": [
          62,
          38,
          1
        ],
        "informal": [
          38,
          60,
          2
        ],
        "nodocs": [
          33,
          66,
          1
        ],
        "sole": [
          53,
          45,
          1
        ],
        "multiple": [
          44,
          56,
          0
        ],
        "male": [
          52,
          47,
          1
        ],
        "female": [
          50,
          48,
          1
        ],
        "young": [
          38,
          60,
          2
        ],
        "adult": [
          52,
          47,
          1
        ],
        "old": [
          59,
          39,
          2
        ],
        "fulltime": [
          55,
          44,
          2
        ],
        "parttime": [
          42,
          58,
          0
        ],
        "unemployed": [
          52,
          48,
          0
        ],
        "comfortable": [
          62,
          36,
          1
        ],
        "gettingby": [
          56,
          43,
          1
        ],
        "difficulty": [
          43,
          56,
          1
        ]
      },
      "homes": {
        "allresp": [
          52,
          46,
          1
        ],
        "urban": [
          50,
          49,
          1
        ],
        "rural": [
          56,
          44,
          0
        ],
        "owner": [
          63,
          36,
          1
        ],
        "renter": [
          26,
          72,
          3
        ],
        "permission": [
          56,
          44,
          1
        ],
        "formal": [
          65,
          34,
          1
        ],
        "informal": [
          39,
          59,
          2
        ],
        "nodocs": [
          33,
          66,
          1
        ],
        "sole": [
          53,
          45,
          1
        ],
        "multiple": [
          51,
          49,
          0
        ],
        "male": [
          54,
          45,
          1
        ],
        "female": [
          51,
          47,
          1
        ],
        "young": [
          40,
          58,
          2
        ],
        "adult": [
          54,
          46,
          1
        ],
        "old": [
          62,
          37,
          2
        ],
        "fulltime": [
          56,
          43,
          2
        ],
        "parttime": [
          42,
          57,
          0
        ],
        "unemployed": [
          55,
          45,
          0
        ],
        "comfortable": [
          62,
          36,
          1
        ],
        "gettingby": [
          57,
          42,
          1
        ],
        "difficulty": [
          45,
          54,
          1
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          57,
          31,
          12
        ],
        "urban": [
          55,
          33,
          12
        ],
        "rural": [
          58,
          30,
          11
        ],
        "owner": [
          70,
          26,
          4
        ],
        "renter": [
          36,
          42,
          23
        ],
        "permission": [
          57,
          29,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          53,
          34,
          13
        ],
        "multiple": [
          74,
          18,
          8
        ],
        "male": [
          61,
          28,
          11
        ],
        "female": [
          53,
          34,
          13
        ],
        "young": [
          55,
          34,
          11
        ],
        "adult": [
          55,
          31,
          14
        ],
        "old": [
          64,
          29,
          6
        ],
        "fulltime": [
          59,
          31,
          9
        ],
        "parttime": [
          53,
          34,
          13
        ],
        "unemployed": [
          57,
          34,
          9
        ],
        "comfortable": [
          67,
          30,
          3
        ],
        "gettingby": [
          61,
          29,
          10
        ],
        "difficulty": [
          50,
          33,
          16
        ]
      },
      "homes": {
        "allresp": [
          54,
          34,
          12
        ],
        "urban": [
          53,
          35,
          12
        ],
        "rural": [
          55,
          33,
          12
        ],
        "owner": [
          68,
          28,
          4
        ],
        "renter": [
          34,
          43,
          23
        ],
        "permission": [
          53,
          33,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          53,
          34,
          13
        ],
        "multiple": [
          60,
          30,
          9
        ],
        "male": [
          60,
          29,
          11
        ],
        "female": [
          49,
          38,
          13
        ],
        "young": [
          54,
          35,
          11
        ],
        "adult": [
          52,
          34,
          14
        ],
        "old": [
          61,
          32,
          6
        ],
        "fulltime": [
          57,
          33,
          10
        ],
        "parttime": [
          48,
          39,
          13
        ],
        "unemployed": [
          54,
          36,
          10
        ],
        "comfortable": [
          63,
          34,
          3
        ],
        "gettingby": [
          59,
          31,
          10
        ],
        "difficulty": [
          47,
          36,
          17
        ]
      }
    },
    "reasons": {
      "askedtoleave": 77,
      "family": 39,
      "money": 42,
      "death": 24,
      "government": 37,
      "companies": 19,
      "customary": 24
    }
  },
  "PL": {
    "insecurity": {
      "allprop": {
        "allresp": [
          82,
          10,
          8
        ],
        "urban": [
          80,
          11,
          9
        ],
        "rural": [
          92,
          2,
          5
        ],
        "owner": [
          92,
          3,
          5
        ],
        "renter": [
          59,
          24,
          17
        ],
        "permission": [
          89,
          6,
          5
        ],
        "formal": [
          83,
          9,
          8
        ],
        "informal": [
          67,
          26,
          7
        ],
        "nodocs": [
          58,
          18,
          23
        ],
        "sole": [
          83,
          9,
          8
        ],
        "multiple": [
          86,
          10,
          4
        ],
        "male": [
          82,
          10,
          8
        ],
        "female": [
          82,
          10,
          8
        ],
        "young": [
          68,
          18,
          14
        ],
        "adult": [
          79,
          13,
          9
        ],
        "old": [
          89,
          4,
          6
        ],
        "fulltime": [
          79,
          13,
          8
        ],
        "parttime": [
          77,
          18,
          5
        ],
        "unemployed": [
          72,
          0,
          28
        ],
        "comfortable": [
          89,
          4,
          8
        ],
        "gettingby": [
          81,
          11,
          8
        ],
        "difficulty": [
          81,
          12,
          7
        ]
      },
      "homes": {
        "allresp": [
          82,
          10,
          8
        ],
        "urban": [
          81,
          11,
          9
        ],
        "rural": [
          93,
          2,
          5
        ],
        "owner": [
          93,
          3,
          5
        ],
        "renter": [
          59,
          24,
          17
        ],
        "permission": [
          89,
          5,
          5
        ],
        "formal": [
          84,
          8,
          8
        ],
        "informal": [
          68,
          25,
          7
        ],
        "nodocs": [
          58,
          18,
          23
        ],
        "sole": [
          83,
          9,
          8
        ],
        "multiple": [
          91,
          7,
          2
        ],
        "male": [
          82,
          10,
          8
        ],
        "female": [
          83,
          9,
          8
        ],
        "young": [
          69,
          17,
          14
        ],
        "adult": [
          79,
          12,
          9
        ],
        "old": [
          90,
          4,
          6
        ],
        "fulltime": [
          80,
          12,
          8
        ],
        "parttime": [
          78,
          17,
          5
        ],
        "unemployed": [
          72,
          0,
          28
        ],
        "comfortable": [
          89,
          4,
          8
        ],
        "gettingby": [
          82,
          11,
          8
        ],
        "difficulty": [
          81,
          12,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          5,
          3
        ],
        "urban": [
          91,
          6,
          3
        ],
        "rural": [
          96,
          0,
          4
        ],
        "owner": [
          99,
          0,
          0
        ],
        "renter": [
          87,
          8,
          5
        ],
        "permission": [
          87,
          7,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          5,
          3
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          90,
          6,
          3
        ],
        "female": [
          92,
          5,
          3
        ],
        "young": [
          77,
          16,
          8
        ],
        "adult": [
          92,
          5,
          4
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          91,
          5,
          4
        ],
        "parttime": [
          95,
          3,
          3
        ],
        "unemployed": [
          95,
          0,
          5
        ],
        "comfortable": [
          93,
          3,
          3
        ],
        "gettingby": [
          91,
          5,
          3
        ],
        "difficulty": [
          89,
          7,
          4
        ]
      },
      "homes": {
        "allresp": [
          90,
          6,
          3
        ],
        "urban": [
          90,
          7,
          3
        ],
        "rural": [
          96,
          0,
          4
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          84,
          10,
          5
        ],
        "permission": [
          86,
          8,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          5,
          3
        ],
        "multiple": [
          90,
          10,
          0
        ],
        "male": [
          89,
          7,
          3
        ],
        "female": [
          91,
          5,
          3
        ],
        "young": [
          75,
          17,
          8
        ],
        "adult": [
          91,
          6,
          4
        ],
        "old": [
          94,
          5,
          2
        ],
        "fulltime": [
          90,
          6,
          4
        ],
        "parttime": [
          95,
          3,
          3
        ],
        "unemployed": [
          95,
          0,
          5
        ],
        "comfortable": [
          93,
          4,
          3
        ],
        "gettingby": [
          91,
          6,
          3
        ],
        "difficulty": [
          88,
          9,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 60,
      "family": 18,
      "money": 36,
      "death": 9,
      "government": 17,
      "companies": 6,
      "customary": -1
    }
  },
  "PT": {
    "insecurity": {
      "allprop": {
        "allresp": [
          87,
          11,
          2
        ],
        "urban": [
          86,
          12,
          2
        ],
        "rural": [
          94,
          4,
          3
        ],
        "owner": [
          93,
          6,
          2
        ],
        "renter": [
          73,
          23,
          4
        ],
        "permission": [
          85,
          13,
          2
        ],
        "formal": [
          88,
          10,
          2
        ],
        "informal": [
          70,
          24,
          5
        ],
        "nodocs": [
          88,
          5,
          7
        ],
        "sole": [
          88,
          10,
          2
        ],
        "multiple": [
          80,
          16,
          4
        ],
        "male": [
          89,
          8,
          3
        ],
        "female": [
          85,
          13,
          2
        ],
        "young": [
          86,
          14,
          0
        ],
        "adult": [
          86,
          13,
          1
        ],
        "old": [
          87,
          8,
          5
        ],
        "fulltime": [
          86,
          12,
          2
        ],
        "parttime": [
          93,
          7,
          1
        ],
        "unemployed": [
          77,
          18,
          5
        ],
        "comfortable": [
          90,
          7,
          3
        ],
        "gettingby": [
          88,
          10,
          3
        ],
        "difficulty": [
          81,
          17,
          2
        ]
      },
      "homes": {
        "allresp": [
          88,
          10,
          2
        ],
        "urban": [
          87,
          11,
          2
        ],
        "rural": [
          94,
          4,
          3
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          76,
          21,
          4
        ],
        "permission": [
          86,
          12,
          2
        ],
        "formal": [
          89,
          9,
          1
        ],
        "informal": [
          73,
          22,
          5
        ],
        "nodocs": [
          88,
          5,
          7
        ],
        "sole": [
          88,
          10,
          2
        ],
        "multiple": [
          91,
          8,
          0
        ],
        "male": [
          89,
          8,
          3
        ],
        "female": [
          86,
          12,
          1
        ],
        "young": [
          87,
          12,
          0
        ],
        "adult": [
          87,
          11,
          1
        ],
        "old": [
          89,
          8,
          4
        ],
        "fulltime": [
          87,
          11,
          2
        ],
        "parttime": [
          94,
          5,
          1
        ],
        "unemployed": [
          78,
          17,
          5
        ],
        "comfortable": [
          93,
          6,
          1
        ],
        "gettingby": [
          89,
          9,
          3
        ],
        "difficulty": [
          82,
          16,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          87,
          8,
          4
        ],
        "urban": [
          88,
          8,
          4
        ],
        "rural": [
          83,
          11,
          6
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          84,
          9,
          7
        ],
        "permission": [
          68,
          24,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          92,
          6,
          3
        ],
        "male": [
          86,
          9,
          5
        ],
        "female": [
          89,
          8,
          3
        ],
        "young": [
          81,
          16,
          3
        ],
        "adult": [
          86,
          8,
          6
        ],
        "old": [
          91,
          6,
          3
        ],
        "fulltime": [
          87,
          8,
          4
        ],
        "parttime": [
          94,
          3,
          3
        ],
        "unemployed": [
          81,
          10,
          10
        ],
        "comfortable": [
          90,
          7,
          2
        ],
        "gettingby": [
          87,
          9,
          4
        ],
        "difficulty": [
          87,
          8,
          6
        ]
      },
      "homes": {
        "allresp": [
          86,
          9,
          4
        ],
        "urban": [
          87,
          9,
          4
        ],
        "rural": [
          83,
          12,
          6
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          82,
          11,
          7
        ],
        "permission": [
          66,
          25,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          82,
          15,
          3
        ],
        "male": [
          85,
          10,
          5
        ],
        "female": [
          88,
          9,
          3
        ],
        "young": [
          78,
          19,
          3
        ],
        "adult": [
          85,
          10,
          6
        ],
        "old": [
          91,
          6,
          3
        ],
        "fulltime": [
          86,
          10,
          4
        ],
        "parttime": [
          93,
          3,
          3
        ],
        "unemployed": [
          81,
          10,
          10
        ],
        "comfortable": [
          88,
          9,
          3
        ],
        "gettingby": [
          87,
          10,
          4
        ],
        "difficulty": [
          86,
          9,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 76,
      "family": 27,
      "money": 44,
      "death": 26,
      "government": 13,
      "companies": 11,
      "customary": -1
    }
  },
  "RO": {
    "insecurity": {
      "allprop": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          88,
          8,
          5
        ],
        "rural": [
          89,
          9,
          3
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          67,
          27,
          7
        ],
        "permission": [
          79,
          16,
          5
        ],
        "formal": [
          91,
          6,
          4
        ],
        "informal": [
          64,
          31,
          5
        ],
        "nodocs": [
          55,
          27,
          18
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          89,
          7,
          5
        ],
        "male": [
          89,
          8,
          3
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          87,
          12,
          1
        ],
        "adult": [
          85,
          10,
          5
        ],
        "old": [
          92,
          4,
          3
        ],
        "fulltime": [
          88,
          8,
          3
        ],
        "parttime": [
          80,
          14,
          6
        ],
        "unemployed": [
          81,
          19,
          0
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          89,
          8,
          3
        ],
        "difficulty": [
          86,
          10,
          4
        ]
      },
      "homes": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          88,
          8,
          4
        ],
        "rural": [
          89,
          8,
          3
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          67,
          27,
          7
        ],
        "permission": [
          80,
          16,
          4
        ],
        "formal": [
          91,
          6,
          3
        ],
        "informal": [
          66,
          30,
          3
        ],
        "nodocs": [
          60,
          26,
          14
        ],
        "sole": [
          88,
          8,
          4
        ],
        "multiple": [
          93,
          6,
          1
        ],
        "male": [
          90,
          8,
          3
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          87,
          12,
          1
        ],
        "adult": [
          86,
          10,
          5
        ],
        "old": [
          93,
          4,
          3
        ],
        "fulltime": [
          89,
          8,
          3
        ],
        "parttime": [
          86,
          13,
          1
        ],
        "unemployed": [
          81,
          19,
          0
        ],
        "comfortable": [
          91,
          4,
          6
        ],
        "gettingby": [
          90,
          8,
          2
        ],
        "difficulty": [
          86,
          10,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          91,
          5,
          4
        ],
        "urban": [
          90,
          6,
          4
        ],
        "rural": [
          91,
          5,
          4
        ],
        "owner": [
          98,
          2,
          1
        ],
        "renter": [
          79,
          11,
          10
        ],
        "permission": [
          77,
          14,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          91,
          5,
          4
        ],
        "multiple": [
          93,
          4,
          3
        ],
        "male": [
          92,
          4,
          4
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          88,
          8,
          3
        ],
        "adult": [
          87,
          7,
          6
        ],
        "old": [
          96,
          2,
          2
        ],
        "fulltime": [
          88,
          6,
          6
        ],
        "parttime": [
          100,
          0,
          0
        ],
        "unemployed": [
          84,
          8,
          8
        ],
        "comfortable": [
          91,
          2,
          7
        ],
        "gettingby": [
          91,
          5,
          4
        ],
        "difficulty": [
          91,
          6,
          3
        ]
      },
      "homes": {
        "allresp": [
          90,
          5,
          4
        ],
        "urban": [
          90,
          6,
          4
        ],
        "rural": [
          91,
          5,
          4
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          79,
          11,
          10
        ],
        "permission": [
          76,
          14,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          91,
          5,
          4
        ],
        "multiple": [
          90,
          4,
          5
        ],
        "male": [
          92,
          4,
          4
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          87,
          8,
          5
        ],
        "adult": [
          87,
          7,
          6
        ],
        "old": [
          96,
          2,
          2
        ],
        "fulltime": [
          88,
          6,
          6
        ],
        "parttime": [
          96,
          0,
          4
        ],
        "unemployed": [
          84,
          8,
          8
        ],
        "comfortable": [
          90,
          3,
          7
        ],
        "gettingby": [
          91,
          6,
          4
        ],
        "difficulty": [
          91,
          6,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 59,
      "family": 42,
      "money": 31,
      "death": 21,
      "government": 2,
      "companies": 2,
      "customary": -1
    }
  },
  "RU": {
    "insecurity": {
      "allprop": {
        "allresp": [
          81,
          11,
          8
        ],
        "urban": [
          80,
          12,
          8
        ],
        "rural": [
          86,
          6,
          9
        ],
        "owner": [
          90,
          5,
          5
        ],
        "renter": [
          49,
          43,
          8
        ],
        "permission": [
          82,
          9,
          10
        ],
        "formal": [
          84,
          10,
          5
        ],
        "informal": [
          71,
          15,
          14
        ],
        "nodocs": [
          52,
          12,
          36
        ],
        "sole": [
          84,
          10,
          6
        ],
        "multiple": [
          76,
          16,
          9
        ],
        "male": [
          79,
          13,
          7
        ],
        "female": [
          83,
          9,
          9
        ],
        "young": [
          73,
          19,
          8
        ],
        "adult": [
          83,
          11,
          6
        ],
        "old": [
          82,
          7,
          11
        ],
        "fulltime": [
          85,
          11,
          5
        ],
        "parttime": [
          71,
          21,
          9
        ],
        "unemployed": [
          81,
          14,
          5
        ],
        "comfortable": [
          87,
          8,
          5
        ],
        "gettingby": [
          83,
          10,
          7
        ],
        "difficulty": [
          76,
          15,
          9
        ]
      },
      "homes": {
        "allresp": [
          83,
          10,
          8
        ],
        "urban": [
          81,
          11,
          8
        ],
        "rural": [
          88,
          5,
          8
        ],
        "owner": [
          91,
          4,
          5
        ],
        "renter": [
          50,
          43,
          7
        ],
        "permission": [
          83,
          8,
          9
        ],
        "formal": [
          86,
          9,
          5
        ],
        "informal": [
          71,
          15,
          14
        ],
        "nodocs": [
          52,
          14,
          34
        ],
        "sole": [
          84,
          10,
          6
        ],
        "multiple": [
          83,
          11,
          6
        ],
        "male": [
          81,
          12,
          7
        ],
        "female": [
          84,
          8,
          8
        ],
        "young": [
          73,
          19,
          8
        ],
        "adult": [
          84,
          10,
          6
        ],
        "old": [
          84,
          6,
          10
        ],
        "fulltime": [
          85,
          10,
          5
        ],
        "parttime": [
          71,
          20,
          9
        ],
        "unemployed": [
          84,
          12,
          4
        ],
        "comfortable": [
          89,
          6,
          4
        ],
        "gettingby": [
          84,
          10,
          7
        ],
        "difficulty": [
          78,
          14,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          86,
          8,
          6
        ],
        "urban": [
          86,
          8,
          6
        ],
        "rural": [
          87,
          8,
          6
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          77,
          16,
          7
        ],
        "permission": [
          84,
          10,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          5
        ],
        "multiple": [
          97,
          2,
          1
        ],
        "male": [
          84,
          9,
          7
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          68,
          17,
          14
        ],
        "adult": [
          87,
          6,
          6
        ],
        "old": [
          90,
          8,
          3
        ],
        "fulltime": [
          87,
          7,
          6
        ],
        "parttime": [
          79,
          14,
          8
        ],
        "unemployed": [
          84,
          8,
          8
        ],
        "comfortable": [
          85,
          10,
          5
        ],
        "gettingby": [
          89,
          7,
          5
        ],
        "difficulty": [
          86,
          8,
          6
        ]
      },
      "homes": {
        "allresp": [
          84,
          10,
          6
        ],
        "urban": [
          84,
          10,
          7
        ],
        "rural": [
          85,
          9,
          6
        ],
        "owner": [
          93,
          4,
          3
        ],
        "renter": [
          71,
          20,
          9
        ],
        "permission": [
          82,
          12,
          6
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          5
        ],
        "multiple": [
          87,
          10,
          3
        ],
        "male": [
          82,
          10,
          8
        ],
        "female": [
          86,
          9,
          5
        ],
        "young": [
          66,
          19,
          15
        ],
        "adult": [
          86,
          8,
          7
        ],
        "old": [
          89,
          9,
          3
        ],
        "fulltime": [
          85,
          9,
          6
        ],
        "parttime": [
          75,
          17,
          8
        ],
        "unemployed": [
          84,
          8,
          8
        ],
        "comfortable": [
          83,
          11,
          5
        ],
        "gettingby": [
          87,
          8,
          5
        ],
        "difficulty": [
          84,
          9,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 76,
      "family": 24,
      "money": 48,
      "death": 17,
      "government": 18,
      "companies": 15,
      "customary": -1
    }
  },
  "RW": {
    "insecurity": {
      "allprop": {
        "allresp": [
          89,
          8,
          3
        ],
        "urban": [
          83,
          12,
          5
        ],
        "rural": [
          90,
          7,
          3
        ],
        "owner": [
          94,
          4,
          2
        ],
        "renter": [
          82,
          14,
          4
        ],
        "permission": [
          88,
          7,
          5
        ],
        "formal": [
          90,
          7,
          3
        ],
        "informal": [
          86,
          14,
          0
        ],
        "nodocs": [
          84,
          14,
          2
        ],
        "sole": [
          90,
          8,
          2
        ],
        "multiple": [
          88,
          8,
          4
        ],
        "male": [
          91,
          7,
          3
        ],
        "female": [
          87,
          9,
          3
        ],
        "young": [
          86,
          10,
          4
        ],
        "adult": [
          90,
          8,
          3
        ],
        "old": [
          92,
          4,
          4
        ],
        "fulltime": [
          83,
          11,
          6
        ],
        "parttime": [
          87,
          11,
          3
        ],
        "unemployed": [
          87,
          7,
          5
        ],
        "comfortable": [
          81,
          8,
          11
        ],
        "gettingby": [
          89,
          9,
          2
        ],
        "difficulty": [
          90,
          8,
          3
        ]
      },
      "homes": {
        "allresp": [
          90,
          7,
          3
        ],
        "urban": [
          85,
          10,
          5
        ],
        "rural": [
          91,
          6,
          3
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          82,
          14,
          4
        ],
        "permission": [
          90,
          6,
          5
        ],
        "formal": [
          91,
          6,
          3
        ],
        "informal": [
          94,
          6,
          0
        ],
        "nodocs": [
          86,
          12,
          2
        ],
        "sole": [
          90,
          8,
          2
        ],
        "multiple": [
          91,
          6,
          4
        ],
        "male": [
          92,
          5,
          2
        ],
        "female": [
          88,
          8,
          3
        ],
        "young": [
          88,
          9,
          4
        ],
        "adult": [
          91,
          7,
          2
        ],
        "old": [
          93,
          4,
          4
        ],
        "fulltime": [
          84,
          10,
          6
        ],
        "parttime": [
          87,
          11,
          2
        ],
        "unemployed": [
          89,
          6,
          5
        ],
        "comfortable": [
          83,
          6,
          10
        ],
        "gettingby": [
          90,
          8,
          2
        ],
        "difficulty": [
          91,
          7,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          81,
          1,
          17
        ],
        "urban": [
          91,
          0,
          9
        ],
        "rural": [
          79,
          2,
          19
        ],
        "owner": [
          88,
          1,
          11
        ],
        "renter": [
          77,
          1,
          22
        ],
        "permission": [
          81,
          2,
          17
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          1,
          24
        ],
        "multiple": [
          91,
          1,
          7
        ],
        "male": [
          84,
          2,
          14
        ],
        "female": [
          80,
          0,
          20
        ],
        "young": [
          78,
          2,
          21
        ],
        "adult": [
          81,
          1,
          17
        ],
        "old": [
          90,
          0,
          10
        ],
        "fulltime": [
          88,
          0,
          12
        ],
        "parttime": [
          77,
          0,
          23
        ],
        "unemployed": [
          77,
          0,
          23
        ],
        "comfortable": [
          92,
          0,
          8
        ],
        "gettingby": [
          91,
          0,
          9
        ],
        "difficulty": [
          77,
          2,
          21
        ]
      },
      "homes": {
        "allresp": [
          78,
          2,
          20
        ],
        "urban": [
          90,
          0,
          10
        ],
        "rural": [
          76,
          2,
          22
        ],
        "owner": [
          86,
          2,
          12
        ],
        "renter": [
          72,
          2,
          26
        ],
        "permission": [
          76,
          2,
          22
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          1,
          24
        ],
        "multiple": [
          84,
          2,
          14
        ],
        "male": [
          79,
          3,
          18
        ],
        "female": [
          78,
          0,
          22
        ],
        "young": [
          74,
          2,
          24
        ],
        "adult": [
          78,
          2,
          20
        ],
        "old": [
          88,
          0,
          12
        ],
        "fulltime": [
          84,
          1,
          15
        ],
        "parttime": [
          74,
          0,
          26
        ],
        "unemployed": [
          75,
          0,
          25
        ],
        "comfortable": [
          89,
          1,
          10
        ],
        "gettingby": [
          87,
          0,
          13
        ],
        "difficulty": [
          75,
          2,
          23
        ]
      }
    },
    "reasons": {
      "askedtoleave": 38,
      "family": 13,
      "money": 22,
      "death": 3,
      "government": 28,
      "companies": 9,
      "customary": 2
    }
  },
  "SA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          59,
          35,
          6
        ],
        "urban": [
          58,
          36,
          6
        ],
        "rural": [
          76,
          24,
          0
        ],
        "owner": [
          84,
          16,
          0
        ],
        "renter": [
          55,
          41,
          4
        ],
        "permission": [
          49,
          37,
          14
        ],
        "formal": [
          60,
          35,
          5
        ],
        "informal": [
          43,
          39,
          18
        ],
        "nodocs": [
          46,
          39,
          15
        ],
        "sole": [
          61,
          33,
          6
        ],
        "multiple": [
          50,
          45,
          4
        ],
        "male": [
          60,
          36,
          3
        ],
        "female": [
          56,
          34,
          10
        ],
        "young": [
          60,
          40,
          0
        ],
        "adult": [
          60,
          34,
          6
        ],
        "old": [
          42,
          41,
          16
        ],
        "fulltime": [
          65,
          33,
          3
        ],
        "parttime": [
          43,
          51,
          6
        ],
        "unemployed": [
          52,
          32,
          15
        ],
        "comfortable": [
          66,
          33,
          1
        ],
        "gettingby": [
          59,
          34,
          7
        ],
        "difficulty": [
          50,
          41,
          9
        ]
      },
      "homes": {
        "allresp": [
          61,
          33,
          6
        ],
        "urban": [
          61,
          33,
          6
        ],
        "rural": [
          78,
          22,
          0
        ],
        "owner": [
          88,
          12,
          0
        ],
        "renter": [
          57,
          39,
          5
        ],
        "permission": [
          53,
          33,
          14
        ],
        "formal": [
          63,
          32,
          5
        ],
        "informal": [
          53,
          34,
          13
        ],
        "nodocs": [
          51,
          37,
          12
        ],
        "sole": [
          61,
          33,
          6
        ],
        "multiple": [
          65,
          30,
          4
        ],
        "male": [
          64,
          33,
          3
        ],
        "female": [
          58,
          33,
          9
        ],
        "young": [
          66,
          34,
          0
        ],
        "adult": [
          61,
          32,
          6
        ],
        "old": [
          52,
          34,
          14
        ],
        "fulltime": [
          67,
          30,
          3
        ],
        "parttime": [
          48,
          46,
          6
        ],
        "unemployed": [
          56,
          29,
          15
        ],
        "comfortable": [
          71,
          27,
          1
        ],
        "gettingby": [
          61,
          33,
          6
        ],
        "difficulty": [
          51,
          39,
          10
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          4,
          6
        ],
        "urban": [
          89,
          5,
          6
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          96,
          0,
          4
        ],
        "renter": [
          94,
          3,
          3
        ],
        "permission": [
          78,
          10,
          12
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          5,
          7
        ],
        "multiple": [
          98,
          0,
          1
        ],
        "male": [
          88,
          4,
          7
        ],
        "female": [
          91,
          5,
          4
        ],
        "young": [
          92,
          3,
          5
        ],
        "adult": [
          89,
          5,
          6
        ],
        "old": [
          86,
          5,
          9
        ],
        "fulltime": [
          91,
          3,
          6
        ],
        "parttime": [
          85,
          4,
          11
        ],
        "unemployed": [
          88,
          5,
          7
        ],
        "comfortable": [
          91,
          4,
          5
        ],
        "gettingby": [
          89,
          5,
          6
        ],
        "difficulty": [
          88,
          3,
          8
        ]
      },
      "homes": {
        "allresp": [
          86,
          6,
          8
        ],
        "urban": [
          86,
          6,
          8
        ],
        "rural": [
          99,
          0,
          1
        ],
        "owner": [
          95,
          0,
          5
        ],
        "renter": [
          91,
          4,
          4
        ],
        "permission": [
          73,
          12,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          5,
          7
        ],
        "multiple": [
          81,
          9,
          10
        ],
        "male": [
          85,
          6,
          9
        ],
        "female": [
          89,
          6,
          6
        ],
        "young": [
          89,
          5,
          6
        ],
        "adult": [
          86,
          6,
          8
        ],
        "old": [
          77,
          12,
          11
        ],
        "fulltime": [
          88,
          6,
          7
        ],
        "parttime": [
          82,
          4,
          14
        ],
        "unemployed": [
          87,
          6,
          8
        ],
        "comfortable": [
          84,
          8,
          8
        ],
        "gettingby": [
          86,
          6,
          7
        ],
        "difficulty": [
          88,
          3,
          8
        ]
      }
    },
    "reasons": {
      "askedtoleave": 74,
      "family": 18,
      "money": 52,
      "death": 20,
      "government": -1,
      "companies": 19,
      "customary": 5
    }
  },
  "SN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          77,
          21,
          2
        ],
        "urban": [
          76,
          23,
          2
        ],
        "rural": [
          77,
          20,
          2
        ],
        "owner": [
          78,
          20,
          1
        ],
        "renter": [
          39,
          59,
          3
        ],
        "permission": [
          79,
          18,
          2
        ],
        "formal": [
          79,
          20,
          1
        ],
        "informal": [
          70,
          28,
          1
        ],
        "nodocs": [
          73,
          23,
          4
        ],
        "sole": [
          80,
          19,
          1
        ],
        "multiple": [
          62,
          33,
          6
        ],
        "male": [
          76,
          23,
          1
        ],
        "female": [
          77,
          20,
          3
        ],
        "young": [
          76,
          22,
          2
        ],
        "adult": [
          76,
          22,
          2
        ],
        "old": [
          81,
          17,
          2
        ],
        "fulltime": [
          76,
          22,
          2
        ],
        "parttime": [
          66,
          29,
          5
        ],
        "unemployed": [
          75,
          24,
          1
        ],
        "comfortable": [
          81,
          19,
          1
        ],
        "gettingby": [
          77,
          21,
          2
        ],
        "difficulty": [
          75,
          23,
          2
        ]
      },
      "homes": {
        "allresp": [
          80,
          19,
          2
        ],
        "urban": [
          77,
          21,
          2
        ],
        "rural": [
          82,
          17,
          1
        ],
        "owner": [
          82,
          17,
          1
        ],
        "renter": [
          41,
          57,
          3
        ],
        "permission": [
          83,
          16,
          2
        ],
        "formal": [
          82,
          17,
          1
        ],
        "informal": [
          69,
          29,
          2
        ],
        "nodocs": [
          78,
          19,
          2
        ],
        "sole": [
          80,
          19,
          1
        ],
        "multiple": [
          79,
          18,
          3
        ],
        "male": [
          80,
          20,
          1
        ],
        "female": [
          80,
          18,
          2
        ],
        "young": [
          81,
          18,
          2
        ],
        "adult": [
          79,
          20,
          1
        ],
        "old": [
          82,
          15,
          3
        ],
        "fulltime": [
          78,
          21,
          1
        ],
        "parttime": [
          72,
          24,
          4
        ],
        "unemployed": [
          80,
          20,
          1
        ],
        "comfortable": [
          82,
          17,
          1
        ],
        "gettingby": [
          80,
          18,
          2
        ],
        "difficulty": [
          79,
          20,
          1
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          60,
          8,
          32
        ],
        "urban": [
          70,
          8,
          22
        ],
        "rural": [
          52,
          8,
          40
        ],
        "owner": [
          68,
          15,
          17
        ],
        "renter": [
          74,
          5,
          21
        ],
        "permission": [
          57,
          6,
          37
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          60,
          7,
          33
        ],
        "multiple": [
          58,
          11,
          31
        ],
        "male": [
          61,
          10,
          29
        ],
        "female": [
          59,
          6,
          35
        ],
        "young": [
          52,
          10,
          38
        ],
        "adult": [
          60,
          8,
          32
        ],
        "old": [
          73,
          5,
          23
        ],
        "fulltime": [
          66,
          9,
          25
        ],
        "parttime": [
          55,
          6,
          39
        ],
        "unemployed": [
          57,
          11,
          32
        ],
        "comfortable": [
          56,
          8,
          37
        ],
        "gettingby": [
          63,
          7,
          31
        ],
        "difficulty": [
          56,
          10,
          33
        ]
      },
      "homes": {
        "allresp": [
          57,
          7,
          36
        ],
        "urban": [
          69,
          7,
          24
        ],
        "rural": [
          48,
          7,
          45
        ],
        "owner": [
          65,
          16,
          19
        ],
        "renter": [
          74,
          5,
          21
        ],
        "permission": [
          54,
          4,
          41
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          60,
          7,
          33
        ],
        "multiple": [
          45,
          6,
          49
        ],
        "male": [
          58,
          9,
          33
        ],
        "female": [
          57,
          5,
          38
        ],
        "young": [
          50,
          7,
          43
        ],
        "adult": [
          58,
          7,
          35
        ],
        "old": [
          72,
          6,
          23
        ],
        "fulltime": [
          63,
          9,
          28
        ],
        "parttime": [
          55,
          6,
          39
        ],
        "unemployed": [
          53,
          8,
          38
        ],
        "comfortable": [
          52,
          7,
          42
        ],
        "gettingby": [
          61,
          6,
          33
        ],
        "difficulty": [
          54,
          8,
          38
        ]
      }
    },
    "reasons": {
      "askedtoleave": 22,
      "family": 18,
      "money": 11,
      "death": 5,
      "government": 20,
      "companies": 1,
      "customary": 5
    }
  },
  "RS": {
    "insecurity": {
      "allprop": {
        "allresp": [
          89,
          9,
          3
        ],
        "urban": [
          88,
          10,
          3
        ],
        "rural": [
          92,
          5,
          3
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          43,
          52,
          6
        ],
        "permission": [
          91,
          5,
          3
        ],
        "formal": [
          92,
          6,
          2
        ],
        "informal": [
          77,
          23,
          0
        ],
        "nodocs": [
          58,
          32,
          10
        ],
        "sole": [
          90,
          9,
          2
        ],
        "multiple": [
          89,
          10,
          2
        ],
        "male": [
          90,
          7,
          3
        ],
        "female": [
          87,
          11,
          2
        ],
        "young": [
          91,
          4,
          5
        ],
        "adult": [
          84,
          12,
          4
        ],
        "old": [
          93,
          6,
          1
        ],
        "fulltime": [
          87,
          11,
          3
        ],
        "parttime": [
          88,
          6,
          5
        ],
        "unemployed": [
          96,
          4,
          0
        ],
        "comfortable": [
          92,
          6,
          2
        ],
        "gettingby": [
          90,
          8,
          2
        ],
        "difficulty": [
          85,
          13,
          2
        ]
      },
      "homes": {
        "allresp": [
          89,
          8,
          3
        ],
        "urban": [
          88,
          9,
          3
        ],
        "rural": [
          94,
          4,
          2
        ],
        "owner": [
          97,
          2,
          1
        ],
        "renter": [
          43,
          50,
          7
        ],
        "permission": [
          92,
          4,
          3
        ],
        "formal": [
          93,
          5,
          2
        ],
        "informal": [
          78,
          22,
          0
        ],
        "nodocs": [
          57,
          32,
          10
        ],
        "sole": [
          90,
          9,
          2
        ],
        "multiple": [
          93,
          4,
          3
        ],
        "male": [
          91,
          6,
          3
        ],
        "female": [
          88,
          10,
          2
        ],
        "young": [
          91,
          4,
          5
        ],
        "adult": [
          85,
          11,
          4
        ],
        "old": [
          94,
          6,
          1
        ],
        "fulltime": [
          88,
          9,
          3
        ],
        "parttime": [
          88,
          6,
          5
        ],
        "unemployed": [
          96,
          4,
          0
        ],
        "comfortable": [
          93,
          6,
          1
        ],
        "gettingby": [
          91,
          6,
          3
        ],
        "difficulty": [
          86,
          12,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          3,
          7
        ],
        "urban": [
          89,
          3,
          8
        ],
        "rural": [
          90,
          4,
          6
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          56,
          14,
          30
        ],
        "permission": [
          91,
          2,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          4,
          7
        ],
        "multiple": [
          93,
          1,
          6
        ],
        "male": [
          90,
          3,
          7
        ],
        "female": [
          89,
          4,
          8
        ],
        "young": [
          79,
          2,
          18
        ],
        "adult": [
          87,
          4,
          9
        ],
        "old": [
          94,
          3,
          3
        ],
        "fulltime": [
          89,
          3,
          8
        ],
        "parttime": [
          95,
          0,
          5
        ],
        "unemployed": [
          87,
          9,
          4
        ],
        "comfortable": [
          91,
          1,
          7
        ],
        "gettingby": [
          93,
          3,
          5
        ],
        "difficulty": [
          85,
          7,
          8
        ]
      },
      "homes": {
        "allresp": [
          88,
          4,
          8
        ],
        "urban": [
          88,
          3,
          9
        ],
        "rural": [
          89,
          4,
          7
        ],
        "owner": [
          96,
          3,
          1
        ],
        "renter": [
          51,
          14,
          35
        ],
        "permission": [
          90,
          2,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          4,
          7
        ],
        "multiple": [
          87,
          2,
          11
        ],
        "male": [
          89,
          3,
          8
        ],
        "female": [
          88,
          4,
          8
        ],
        "young": [
          79,
          2,
          18
        ],
        "adult": [
          85,
          4,
          11
        ],
        "old": [
          93,
          3,
          4
        ],
        "fulltime": [
          88,
          3,
          9
        ],
        "parttime": [
          91,
          1,
          8
        ],
        "unemployed": [
          87,
          9,
          4
        ],
        "comfortable": [
          90,
          2,
          8
        ],
        "gettingby": [
          92,
          3,
          6
        ],
        "difficulty": [
          84,
          7,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 82,
      "family": 26,
      "money": 39,
      "death": 11,
      "government": 11,
      "companies": 2,
      "customary": -1
    }
  },
  "SL": {
    "insecurity": {
      "allprop": {
        "allresp": [
          59,
          35,
          6
        ],
        "urban": [
          60,
          34,
          6
        ],
        "rural": [
          52,
          41,
          8
        ],
        "owner": [
          68,
          27,
          5
        ],
        "renter": [
          45,
          47,
          8
        ],
        "permission": [
          57,
          36,
          7
        ],
        "formal": [
          62,
          35,
          3
        ],
        "informal": [
          64,
          34,
          2
        ],
        "nodocs": [
          53,
          36,
          11
        ],
        "sole": [
          64,
          30,
          6
        ],
        "multiple": [
          54,
          42,
          4
        ],
        "male": [
          60,
          34,
          6
        ],
        "female": [
          58,
          36,
          6
        ],
        "young": [
          57,
          37,
          6
        ],
        "adult": [
          60,
          34,
          6
        ],
        "old": [
          57,
          36,
          7
        ],
        "fulltime": [
          60,
          34,
          6
        ],
        "parttime": [
          57,
          36,
          6
        ],
        "unemployed": [
          61,
          37,
          2
        ],
        "comfortable": [
          72,
          24,
          3
        ],
        "gettingby": [
          54,
          40,
          6
        ],
        "difficulty": [
          61,
          33,
          6
        ]
      },
      "homes": {
        "allresp": [
          65,
          29,
          6
        ],
        "urban": [
          66,
          28,
          5
        ],
        "rural": [
          60,
          33,
          8
        ],
        "owner": [
          77,
          19,
          4
        ],
        "renter": [
          46,
          46,
          8
        ],
        "permission": [
          65,
          28,
          7
        ],
        "formal": [
          67,
          30,
          3
        ],
        "informal": [
          82,
          17,
          2
        ],
        "nodocs": [
          60,
          29,
          10
        ],
        "sole": [
          64,
          30,
          6
        ],
        "multiple": [
          69,
          27,
          3
        ],
        "male": [
          66,
          28,
          6
        ],
        "female": [
          65,
          30,
          5
        ],
        "young": [
          65,
          29,
          6
        ],
        "adult": [
          65,
          29,
          6
        ],
        "old": [
          68,
          27,
          5
        ],
        "fulltime": [
          66,
          28,
          6
        ],
        "parttime": [
          66,
          28,
          6
        ],
        "unemployed": [
          64,
          34,
          2
        ],
        "comfortable": [
          77,
          22,
          2
        ],
        "gettingby": [
          59,
          35,
          6
        ],
        "difficulty": [
          68,
          26,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          56,
          7,
          37
        ],
        "urban": [
          58,
          7,
          35
        ],
        "rural": [
          43,
          7,
          50
        ],
        "owner": [
          65,
          6,
          29
        ],
        "renter": [
          72,
          5,
          23
        ],
        "permission": [
          47,
          8,
          45
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          55,
          8,
          36
        ],
        "multiple": [
          62,
          6,
          32
        ],
        "male": [
          60,
          6,
          33
        ],
        "female": [
          52,
          7,
          40
        ],
        "young": [
          51,
          6,
          43
        ],
        "adult": [
          59,
          7,
          34
        ],
        "old": [
          56,
          7,
          37
        ],
        "fulltime": [
          57,
          8,
          35
        ],
        "parttime": [
          47,
          7,
          46
        ],
        "unemployed": [
          75,
          11,
          14
        ],
        "comfortable": [
          84,
          3,
          13
        ],
        "gettingby": [
          64,
          7,
          28
        ],
        "difficulty": [
          50,
          7,
          43
        ]
      },
      "homes": {
        "allresp": [
          53,
          8,
          40
        ],
        "urban": [
          56,
          7,
          37
        ],
        "rural": [
          35,
          12,
          53
        ],
        "owner": [
          59,
          9,
          32
        ],
        "renter": [
          70,
          5,
          25
        ],
        "permission": [
          45,
          8,
          48
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          55,
          8,
          36
        ],
        "multiple": [
          54,
          8,
          38
        ],
        "male": [
          55,
          8,
          38
        ],
        "female": [
          51,
          8,
          41
        ],
        "young": [
          49,
          6,
          46
        ],
        "adult": [
          55,
          9,
          37
        ],
        "old": [
          51,
          9,
          40
        ],
        "fulltime": [
          53,
          8,
          39
        ],
        "parttime": [
          42,
          9,
          49
        ],
        "unemployed": [
          72,
          11,
          17
        ],
        "comfortable": [
          77,
          3,
          20
        ],
        "gettingby": [
          62,
          7,
          31
        ],
        "difficulty": [
          46,
          9,
          45
        ]
      }
    },
    "reasons": {
      "askedtoleave": 68,
      "family": 51,
      "money": 44,
      "death": 24,
      "government": 34,
      "companies": 18,
      "customary": 37
    }
  },
  "SG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          92,
          4,
          5
        ],
        "urban": [
          92,
          4,
          5
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          95,
          1,
          4
        ],
        "renter": [
          56,
          34,
          10
        ],
        "permission": [
          94,
          2,
          4
        ],
        "formal": [
          93,
          3,
          4
        ],
        "informal": [
          86,
          6,
          8
        ],
        "nodocs": [
          86,
          6,
          8
        ],
        "sole": [
          93,
          3,
          4
        ],
        "multiple": [
          88,
          4,
          8
        ],
        "male": [
          93,
          4,
          3
        ],
        "female": [
          90,
          3,
          6
        ],
        "young": [
          89,
          5,
          6
        ],
        "adult": [
          91,
          4,
          5
        ],
        "old": [
          94,
          3,
          3
        ],
        "fulltime": [
          93,
          3,
          4
        ],
        "parttime": [
          94,
          5,
          1
        ],
        "unemployed": [
          93,
          3,
          4
        ],
        "comfortable": [
          95,
          1,
          4
        ],
        "gettingby": [
          92,
          4,
          4
        ],
        "difficulty": [
          79,
          15,
          6
        ]
      },
      "homes": {
        "allresp": [
          92,
          3,
          4
        ],
        "urban": [
          92,
          3,
          4
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          95,
          1,
          4
        ],
        "renter": [
          56,
          34,
          10
        ],
        "permission": [
          95,
          1,
          4
        ],
        "formal": [
          93,
          3,
          4
        ],
        "informal": [
          87,
          6,
          7
        ],
        "nodocs": [
          86,
          6,
          8
        ],
        "sole": [
          93,
          3,
          4
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          93,
          4,
          3
        ],
        "female": [
          91,
          3,
          6
        ],
        "young": [
          89,
          5,
          6
        ],
        "adult": [
          92,
          4,
          5
        ],
        "old": [
          94,
          3,
          3
        ],
        "fulltime": [
          93,
          3,
          4
        ],
        "parttime": [
          94,
          5,
          1
        ],
        "unemployed": [
          93,
          3,
          4
        ],
        "comfortable": [
          95,
          1,
          4
        ],
        "gettingby": [
          93,
          4,
          4
        ],
        "difficulty": [
          79,
          15,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          86,
          8,
          6
        ],
        "urban": [
          86,
          8,
          6
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          93,
          6,
          1
        ],
        "renter": [
          84,
          10,
          6
        ],
        "permission": [
          73,
          14,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          93,
          7,
          0
        ],
        "male": [
          88,
          8,
          4
        ],
        "female": [
          84,
          9,
          8
        ],
        "young": [
          73,
          9,
          17
        ],
        "adult": [
          87,
          9,
          4
        ],
        "old": [
          87,
          8,
          5
        ],
        "fulltime": [
          90,
          7,
          3
        ],
        "parttime": [
          82,
          10,
          8
        ],
        "unemployed": [
          77,
          7,
          16
        ],
        "comfortable": [
          90,
          6,
          4
        ],
        "gettingby": [
          85,
          9,
          5
        ],
        "difficulty": [
          79,
          11,
          10
        ]
      },
      "homes": {
        "allresp": [
          85,
          9,
          6
        ],
        "urban": [
          85,
          9,
          6
        ],
        "rural": [
          100,
          0,
          0
        ],
        "owner": [
          92,
          7,
          1
        ],
        "renter": [
          84,
          10,
          6
        ],
        "permission": [
          72,
          14,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          4
        ],
        "multiple": [
          81,
          17,
          3
        ],
        "male": [
          87,
          9,
          4
        ],
        "female": [
          83,
          9,
          8
        ],
        "young": [
          73,
          9,
          17
        ],
        "adult": [
          86,
          9,
          5
        ],
        "old": [
          87,
          8,
          5
        ],
        "fulltime": [
          89,
          8,
          4
        ],
        "parttime": [
          82,
          10,
          8
        ],
        "unemployed": [
          77,
          7,
          16
        ],
        "comfortable": [
          90,
          6,
          4
        ],
        "gettingby": [
          85,
          10,
          5
        ],
        "difficulty": [
          79,
          11,
          10
        ]
      }
    },
    "reasons": {
      "askedtoleave": 34,
      "family": 7,
      "money": 39,
      "death": 10,
      "government": 19,
      "companies": 0,
      "customary": -1
    }
  },
  "SK": {
    "insecurity": {
      "allprop": {
        "allresp": [
          79,
          14,
          7
        ],
        "urban": [
          78,
          15,
          7
        ],
        "rural": [
          86,
          10,
          5
        ],
        "owner": [
          87,
          9,
          4
        ],
        "renter": [
          73,
          21,
          7
        ],
        "permission": [
          74,
          17,
          9
        ],
        "formal": [
          81,
          14,
          5
        ],
        "informal": [
          56,
          21,
          23
        ],
        "nodocs": [
          62,
          21,
          17
        ],
        "sole": [
          81,
          13,
          6
        ],
        "multiple": [
          76,
          20,
          4
        ],
        "male": [
          78,
          15,
          7
        ],
        "female": [
          80,
          14,
          6
        ],
        "young": [
          71,
          17,
          12
        ],
        "adult": [
          77,
          17,
          6
        ],
        "old": [
          85,
          10,
          5
        ],
        "fulltime": [
          79,
          16,
          5
        ],
        "parttime": [
          84,
          11,
          5
        ],
        "unemployed": [
          53,
          21,
          26
        ],
        "comfortable": [
          83,
          14,
          3
        ],
        "gettingby": [
          83,
          14,
          3
        ],
        "difficulty": [
          71,
          17,
          12
        ]
      },
      "homes": {
        "allresp": [
          81,
          13,
          6
        ],
        "urban": [
          79,
          14,
          7
        ],
        "rural": [
          88,
          7,
          5
        ],
        "owner": [
          88,
          7,
          4
        ],
        "renter": [
          74,
          20,
          6
        ],
        "permission": [
          76,
          15,
          9
        ],
        "formal": [
          83,
          12,
          5
        ],
        "informal": [
          63,
          17,
          20
        ],
        "nodocs": [
          61,
          23,
          16
        ],
        "sole": [
          81,
          13,
          6
        ],
        "multiple": [
          84,
          12,
          3
        ],
        "male": [
          80,
          13,
          7
        ],
        "female": [
          81,
          13,
          6
        ],
        "young": [
          71,
          15,
          14
        ],
        "adult": [
          79,
          15,
          6
        ],
        "old": [
          86,
          9,
          5
        ],
        "fulltime": [
          81,
          14,
          5
        ],
        "parttime": [
          84,
          7,
          8
        ],
        "unemployed": [
          62,
          21,
          18
        ],
        "comfortable": [
          85,
          12,
          3
        ],
        "gettingby": [
          84,
          12,
          4
        ],
        "difficulty": [
          73,
          16,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          90,
          4,
          7
        ],
        "urban": [
          90,
          4,
          6
        ],
        "rural": [
          89,
          2,
          10
        ],
        "owner": [
          96,
          1,
          2
        ],
        "renter": [
          77,
          12,
          11
        ],
        "permission": [
          88,
          3,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          4,
          7
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          90,
          4,
          6
        ],
        "female": [
          89,
          4,
          7
        ],
        "young": [
          87,
          11,
          2
        ],
        "adult": [
          90,
          3,
          7
        ],
        "old": [
          90,
          3,
          8
        ],
        "fulltime": [
          91,
          4,
          5
        ],
        "parttime": [
          93,
          6,
          1
        ],
        "unemployed": [
          73,
          12,
          14
        ],
        "comfortable": [
          92,
          3,
          4
        ],
        "gettingby": [
          92,
          3,
          5
        ],
        "difficulty": [
          85,
          6,
          9
        ]
      },
      "homes": {
        "allresp": [
          89,
          4,
          7
        ],
        "urban": [
          89,
          5,
          6
        ],
        "rural": [
          87,
          2,
          10
        ],
        "owner": [
          96,
          1,
          2
        ],
        "renter": [
          74,
          15,
          12
        ],
        "permission": [
          88,
          4,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          4,
          7
        ],
        "multiple": [
          93,
          3,
          3
        ],
        "male": [
          89,
          4,
          7
        ],
        "female": [
          89,
          4,
          7
        ],
        "young": [
          87,
          11,
          2
        ],
        "adult": [
          89,
          3,
          7
        ],
        "old": [
          89,
          4,
          8
        ],
        "fulltime": [
          90,
          4,
          6
        ],
        "parttime": [
          93,
          3,
          4
        ],
        "unemployed": [
          71,
          15,
          14
        ],
        "comfortable": [
          90,
          4,
          6
        ],
        "gettingby": [
          92,
          3,
          5
        ],
        "difficulty": [
          84,
          7,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 41,
      "family": 35,
      "money": 32,
      "death": 24,
      "government": 10,
      "companies": 16,
      "customary": -1
    }
  },
  "SI": {
    "insecurity": {
      "allprop": {
        "allresp": [
          91,
          7,
          1
        ],
        "urban": [
          91,
          8,
          1
        ],
        "rural": [
          94,
          4,
          1
        ],
        "owner": [
          93,
          6,
          1
        ],
        "renter": [
          77,
          21,
          2
        ],
        "permission": [
          92,
          8,
          0
        ],
        "formal": [
          91,
          7,
          1
        ],
        "informal": [
          94,
          6,
          0
        ],
        "nodocs": [
          87,
          10,
          3
        ],
        "sole": [
          92,
          7,
          1
        ],
        "multiple": [
          90,
          9,
          1
        ],
        "male": [
          91,
          9,
          1
        ],
        "female": [
          92,
          6,
          2
        ],
        "young": [
          100,
          0,
          0
        ],
        "adult": [
          89,
          9,
          1
        ],
        "old": [
          93,
          6,
          1
        ],
        "fulltime": [
          91,
          9,
          1
        ],
        "parttime": [
          89,
          8,
          3
        ],
        "unemployed": [
          95,
          5,
          0
        ],
        "comfortable": [
          94,
          6,
          0
        ],
        "gettingby": [
          92,
          7,
          2
        ],
        "difficulty": [
          76,
          21,
          3
        ]
      },
      "homes": {
        "allresp": [
          92,
          6,
          1
        ],
        "urban": [
          92,
          7,
          1
        ],
        "rural": [
          95,
          3,
          1
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          79,
          19,
          2
        ],
        "permission": [
          94,
          6,
          0
        ],
        "formal": [
          93,
          6,
          1
        ],
        "informal": [
          92,
          8,
          0
        ],
        "nodocs": [
          88,
          9,
          3
        ],
        "sole": [
          92,
          7,
          1
        ],
        "multiple": [
          93,
          5,
          2
        ],
        "male": [
          92,
          7,
          1
        ],
        "female": [
          93,
          6,
          2
        ],
        "young": [
          100,
          0,
          0
        ],
        "adult": [
          91,
          8,
          2
        ],
        "old": [
          93,
          5,
          1
        ],
        "fulltime": [
          91,
          8,
          1
        ],
        "parttime": [
          92,
          5,
          3
        ],
        "unemployed": [
          95,
          5,
          0
        ],
        "comfortable": [
          95,
          5,
          1
        ],
        "gettingby": [
          93,
          5,
          2
        ],
        "difficulty": [
          76,
          20,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          92,
          4,
          4
        ],
        "urban": [
          93,
          3,
          4
        ],
        "rural": [
          88,
          4,
          8
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          84,
          14,
          2
        ],
        "permission": [
          78,
          7,
          14
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          5,
          6
        ],
        "multiple": [
          98,
          1,
          1
        ],
        "male": [
          93,
          4,
          3
        ],
        "female": [
          92,
          3,
          5
        ],
        "young": [
          88,
          0,
          12
        ],
        "adult": [
          91,
          4,
          5
        ],
        "old": [
          95,
          4,
          2
        ],
        "fulltime": [
          90,
          4,
          6
        ],
        "parttime": [
          97,
          2,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          90,
          4,
          7
        ],
        "gettingby": [
          93,
          4,
          3
        ],
        "difficulty": [
          99,
          1,
          0
        ]
      },
      "homes": {
        "allresp": [
          92,
          4,
          5
        ],
        "urban": [
          92,
          4,
          4
        ],
        "rural": [
          87,
          4,
          8
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          83,
          14,
          3
        ],
        "permission": [
          77,
          8,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          5,
          6
        ],
        "multiple": [
          96,
          2,
          2
        ],
        "male": [
          92,
          4,
          4
        ],
        "female": [
          91,
          3,
          6
        ],
        "young": [
          88,
          0,
          12
        ],
        "adult": [
          90,
          4,
          6
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          89,
          4,
          7
        ],
        "parttime": [
          97,
          2,
          2
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          89,
          4,
          7
        ],
        "gettingby": [
          92,
          4,
          4
        ],
        "difficulty": [
          99,
          1,
          0
        ]
      }
    },
    "reasons": {
      "askedtoleave": 77,
      "family": 31,
      "money": 55,
      "death": 47,
      "government": 17,
      "companies": 12,
      "customary": -1
    }
  },
  "ZA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          62,
          30,
          8
        ],
        "urban": [
          60,
          32,
          8
        ],
        "rural": [
          69,
          23,
          8
        ],
        "owner": [
          72,
          24,
          4
        ],
        "renter": [
          52,
          38,
          10
        ],
        "permission": [
          61,
          31,
          8
        ],
        "formal": [
          64,
          30,
          6
        ],
        "informal": [
          57,
          30,
          13
        ],
        "nodocs": [
          58,
          29,
          13
        ],
        "sole": [
          66,
          27,
          7
        ],
        "multiple": [
          54,
          38,
          7
        ],
        "male": [
          63,
          32,
          5
        ],
        "female": [
          61,
          28,
          11
        ],
        "young": [
          62,
          29,
          8
        ],
        "adult": [
          61,
          31,
          8
        ],
        "old": [
          65,
          26,
          10
        ],
        "fulltime": [
          62,
          28,
          10
        ],
        "parttime": [
          61,
          33,
          6
        ],
        "unemployed": [
          67,
          29,
          5
        ],
        "comfortable": [
          61,
          33,
          7
        ],
        "gettingby": [
          67,
          23,
          10
        ],
        "difficulty": [
          61,
          32,
          7
        ]
      },
      "homes": {
        "allresp": [
          65,
          27,
          8
        ],
        "urban": [
          63,
          29,
          8
        ],
        "rural": [
          73,
          21,
          6
        ],
        "owner": [
          75,
          22,
          3
        ],
        "renter": [
          53,
          36,
          11
        ],
        "permission": [
          65,
          27,
          8
        ],
        "formal": [
          67,
          27,
          6
        ],
        "informal": [
          62,
          26,
          12
        ],
        "nodocs": [
          60,
          28,
          12
        ],
        "sole": [
          66,
          27,
          7
        ],
        "multiple": [
          68,
          27,
          5
        ],
        "male": [
          66,
          29,
          5
        ],
        "female": [
          64,
          25,
          11
        ],
        "young": [
          64,
          28,
          8
        ],
        "adult": [
          65,
          28,
          8
        ],
        "old": [
          69,
          23,
          9
        ],
        "fulltime": [
          66,
          25,
          10
        ],
        "parttime": [
          63,
          31,
          5
        ],
        "unemployed": [
          68,
          27,
          5
        ],
        "comfortable": [
          65,
          30,
          6
        ],
        "gettingby": [
          70,
          22,
          9
        ],
        "difficulty": [
          65,
          29,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          72,
          5,
          23
        ],
        "urban": [
          72,
          6,
          22
        ],
        "rural": [
          72,
          3,
          26
        ],
        "owner": [
          80,
          4,
          16
        ],
        "renter": [
          55,
          9,
          36
        ],
        "permission": [
          76,
          5,
          19
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          69,
          6,
          26
        ],
        "multiple": [
          88,
          4,
          8
        ],
        "male": [
          75,
          5,
          20
        ],
        "female": [
          70,
          5,
          25
        ],
        "young": [
          71,
          3,
          25
        ],
        "adult": [
          71,
          5,
          24
        ],
        "old": [
          77,
          6,
          17
        ],
        "fulltime": [
          68,
          6,
          25
        ],
        "parttime": [
          79,
          2,
          20
        ],
        "unemployed": [
          65,
          8,
          27
        ],
        "comfortable": [
          80,
          3,
          17
        ],
        "gettingby": [
          72,
          7,
          21
        ],
        "difficulty": [
          70,
          5,
          25
        ]
      },
      "homes": {
        "allresp": [
          70,
          6,
          24
        ],
        "urban": [
          70,
          7,
          23
        ],
        "rural": [
          70,
          3,
          27
        ],
        "owner": [
          79,
          4,
          17
        ],
        "renter": [
          52,
          10,
          38
        ],
        "permission": [
          74,
          6,
          20
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          69,
          6,
          26
        ],
        "multiple": [
          81,
          7,
          12
        ],
        "male": [
          73,
          6,
          21
        ],
        "female": [
          68,
          5,
          27
        ],
        "young": [
          68,
          4,
          27
        ],
        "adult": [
          69,
          6,
          25
        ],
        "old": [
          77,
          6,
          17
        ],
        "fulltime": [
          66,
          8,
          27
        ],
        "parttime": [
          76,
          2,
          22
        ],
        "unemployed": [
          65,
          8,
          27
        ],
        "comfortable": [
          79,
          3,
          18
        ],
        "gettingby": [
          69,
          9,
          22
        ],
        "difficulty": [
          69,
          6,
          26
        ]
      }
    },
    "reasons": {
      "askedtoleave": 60,
      "family": 46,
      "money": 52,
      "death": 49,
      "government": 23,
      "companies": 19,
      "customary": 24
    }
  },
  "ES": {
    "insecurity": {
      "allprop": {
        "allresp": [
          88,
          10,
          1
        ],
        "urban": [
          88,
          10,
          1
        ],
        "rural": [
          87,
          13,
          0
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          72,
          27,
          1
        ],
        "permission": [
          86,
          13,
          1
        ],
        "formal": [
          89,
          10,
          1
        ],
        "informal": [
          70,
          30,
          0
        ],
        "nodocs": [
          53,
          29,
          18
        ],
        "sole": [
          90,
          9,
          1
        ],
        "multiple": [
          87,
          13,
          1
        ],
        "male": [
          87,
          13,
          0
        ],
        "female": [
          90,
          8,
          2
        ],
        "young": [
          91,
          8,
          1
        ],
        "adult": [
          87,
          13,
          0
        ],
        "old": [
          90,
          7,
          3
        ],
        "fulltime": [
          87,
          13,
          1
        ],
        "parttime": [
          93,
          7,
          0
        ],
        "unemployed": [
          78,
          22,
          0
        ],
        "comfortable": [
          90,
          8,
          1
        ],
        "gettingby": [
          91,
          8,
          1
        ],
        "difficulty": [
          81,
          18,
          1
        ]
      },
      "homes": {
        "allresp": [
          89,
          9,
          1
        ],
        "urban": [
          89,
          9,
          1
        ],
        "rural": [
          87,
          13,
          0
        ],
        "owner": [
          96,
          4,
          1
        ],
        "renter": [
          74,
          25,
          1
        ],
        "permission": [
          86,
          13,
          1
        ],
        "formal": [
          90,
          9,
          1
        ],
        "informal": [
          83,
          17,
          0
        ],
        "nodocs": [
          61,
          24,
          15
        ],
        "sole": [
          90,
          9,
          1
        ],
        "multiple": [
          89,
          10,
          0
        ],
        "male": [
          88,
          12,
          0
        ],
        "female": [
          91,
          7,
          2
        ],
        "young": [
          91,
          8,
          1
        ],
        "adult": [
          88,
          11,
          0
        ],
        "old": [
          91,
          6,
          3
        ],
        "fulltime": [
          87,
          12,
          1
        ],
        "parttime": [
          94,
          6,
          0
        ],
        "unemployed": [
          79,
          21,
          0
        ],
        "comfortable": [
          91,
          7,
          1
        ],
        "gettingby": [
          93,
          7,
          0
        ],
        "difficulty": [
          82,
          17,
          1
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          97,
          1,
          2
        ],
        "urban": [
          97,
          1,
          2
        ],
        "rural": [
          90,
          4,
          7
        ],
        "owner": [
          100,
          0,
          0
        ],
        "renter": [
          92,
          3,
          6
        ],
        "permission": [
          95,
          4,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          95,
          2,
          3
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          96,
          1,
          2
        ],
        "female": [
          97,
          1,
          2
        ],
        "young": [
          94,
          2,
          4
        ],
        "adult": [
          96,
          2,
          2
        ],
        "old": [
          98,
          1,
          2
        ],
        "fulltime": [
          96,
          2,
          2
        ],
        "parttime": [
          98,
          0,
          2
        ],
        "unemployed": [
          94,
          2,
          4
        ],
        "comfortable": [
          98,
          0,
          1
        ],
        "gettingby": [
          97,
          2,
          1
        ],
        "difficulty": [
          96,
          2,
          3
        ]
      },
      "homes": {
        "allresp": [
          95,
          3,
          2
        ],
        "urban": [
          96,
          2,
          2
        ],
        "rural": [
          85,
          8,
          7
        ],
        "owner": [
          100,
          0,
          0
        ],
        "renter": [
          84,
          8,
          8
        ],
        "permission": [
          93,
          5,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          95,
          2,
          3
        ],
        "multiple": [
          96,
          3,
          1
        ],
        "male": [
          94,
          3,
          3
        ],
        "female": [
          96,
          2,
          2
        ],
        "young": [
          94,
          2,
          4
        ],
        "adult": [
          94,
          4,
          2
        ],
        "old": [
          97,
          1,
          2
        ],
        "fulltime": [
          93,
          4,
          3
        ],
        "parttime": [
          98,
          0,
          2
        ],
        "unemployed": [
          93,
          3,
          4
        ],
        "comfortable": [
          98,
          1,
          1
        ],
        "gettingby": [
          93,
          5,
          2
        ],
        "difficulty": [
          96,
          2,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 53,
      "family": 23,
      "money": 38,
      "death": 19,
      "government": 22,
      "companies": 16,
      "customary": -1
    }
  },
  "LK": {
    "insecurity": {
      "allprop": {
        "allresp": [
          67,
          27,
          6
        ],
        "urban": [
          62,
          32,
          6
        ],
        "rural": [
          78,
          16,
          6
        ],
        "owner": [
          73,
          23,
          4
        ],
        "renter": [
          34,
          56,
          10
        ],
        "permission": [
          66,
          27,
          7
        ],
        "formal": [
          67,
          27,
          6
        ],
        "informal": [
          60,
          32,
          8
        ],
        "nodocs": [
          66,
          29,
          6
        ],
        "sole": [
          68,
          25,
          6
        ],
        "multiple": [
          62,
          34,
          4
        ],
        "male": [
          67,
          27,
          6
        ],
        "female": [
          67,
          28,
          6
        ],
        "young": [
          60,
          33,
          7
        ],
        "adult": [
          65,
          29,
          6
        ],
        "old": [
          74,
          20,
          5
        ],
        "fulltime": [
          63,
          31,
          6
        ],
        "parttime": [
          67,
          28,
          4
        ],
        "unemployed": [
          64,
          30,
          6
        ],
        "comfortable": [
          70,
          26,
          4
        ],
        "gettingby": [
          69,
          25,
          5
        ],
        "difficulty": [
          63,
          30,
          7
        ]
      },
      "homes": {
        "allresp": [
          68,
          26,
          6
        ],
        "urban": [
          64,
          30,
          5
        ],
        "rural": [
          79,
          15,
          6
        ],
        "owner": [
          74,
          21,
          4
        ],
        "renter": [
          34,
          55,
          11
        ],
        "permission": [
          68,
          25,
          7
        ],
        "formal": [
          70,
          25,
          5
        ],
        "informal": [
          59,
          31,
          11
        ],
        "nodocs": [
          64,
          31,
          5
        ],
        "sole": [
          68,
          25,
          6
        ],
        "multiple": [
          69,
          27,
          3
        ],
        "male": [
          68,
          26,
          6
        ],
        "female": [
          68,
          26,
          6
        ],
        "young": [
          62,
          31,
          7
        ],
        "adult": [
          67,
          28,
          5
        ],
        "old": [
          75,
          20,
          5
        ],
        "fulltime": [
          65,
          30,
          5
        ],
        "parttime": [
          70,
          26,
          4
        ],
        "unemployed": [
          64,
          30,
          6
        ],
        "comfortable": [
          73,
          25,
          2
        ],
        "gettingby": [
          70,
          24,
          6
        ],
        "difficulty": [
          65,
          28,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          87,
          6,
          7
        ],
        "urban": [
          88,
          5,
          7
        ],
        "rural": [
          83,
          9,
          8
        ],
        "owner": [
          91,
          6,
          4
        ],
        "renter": [
          73,
          9,
          19
        ],
        "permission": [
          91,
          4,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          7,
          8
        ],
        "multiple": [
          95,
          2,
          3
        ],
        "male": [
          88,
          7,
          5
        ],
        "female": [
          86,
          5,
          9
        ],
        "young": [
          85,
          3,
          12
        ],
        "adult": [
          86,
          8,
          7
        ],
        "old": [
          91,
          4,
          5
        ],
        "fulltime": [
          89,
          7,
          4
        ],
        "parttime": [
          84,
          5,
          11
        ],
        "unemployed": [
          93,
          0,
          6
        ],
        "comfortable": [
          91,
          4,
          5
        ],
        "gettingby": [
          89,
          6,
          6
        ],
        "difficulty": [
          84,
          7,
          10
        ]
      },
      "homes": {
        "allresp": [
          86,
          6,
          8
        ],
        "urban": [
          87,
          5,
          7
        ],
        "rural": [
          82,
          9,
          9
        ],
        "owner": [
          90,
          6,
          4
        ],
        "renter": [
          69,
          10,
          21
        ],
        "permission": [
          91,
          4,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          7,
          8
        ],
        "multiple": [
          90,
          5,
          5
        ],
        "male": [
          87,
          7,
          5
        ],
        "female": [
          85,
          6,
          10
        ],
        "young": [
          84,
          4,
          12
        ],
        "adult": [
          84,
          8,
          8
        ],
        "old": [
          91,
          4,
          5
        ],
        "fulltime": [
          88,
          9,
          4
        ],
        "parttime": [
          84,
          4,
          13
        ],
        "unemployed": [
          93,
          0,
          6
        ],
        "comfortable": [
          91,
          4,
          5
        ],
        "gettingby": [
          87,
          6,
          7
        ],
        "difficulty": [
          83,
          8,
          10
        ]
      }
    },
    "reasons": {
      "askedtoleave": 51,
      "family": 31,
      "money": 24,
      "death": 16,
      "government": 17,
      "companies": 9,
      "customary": -1
    }
  },
  "SE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          92,
          6,
          2
        ],
        "urban": [
          92,
          6,
          2
        ],
        "rural": [
          94,
          3,
          2
        ],
        "owner": [
          95,
          3,
          2
        ],
        "renter": [
          87,
          11,
          2
        ],
        "permission": [
          93,
          6,
          0
        ],
        "formal": [
          92,
          6,
          2
        ],
        "informal": [
          98,
          0,
          2
        ],
        "nodocs": [
          92,
          6,
          2
        ],
        "sole": [
          93,
          5,
          2
        ],
        "multiple": [
          89,
          11,
          0
        ],
        "male": [
          93,
          6,
          1
        ],
        "female": [
          91,
          6,
          2
        ],
        "young": [
          86,
          12,
          2
        ],
        "adult": [
          93,
          6,
          1
        ],
        "old": [
          93,
          5,
          3
        ],
        "fulltime": [
          94,
          6,
          0
        ],
        "parttime": [
          90,
          10,
          0
        ],
        "unemployed": [
          80,
          12,
          8
        ],
        "comfortable": [
          95,
          4,
          0
        ],
        "gettingby": [
          93,
          5,
          2
        ],
        "difficulty": [
          70,
          23,
          7
        ]
      },
      "homes": {
        "allresp": [
          94,
          4,
          2
        ],
        "urban": [
          93,
          5,
          2
        ],
        "rural": [
          97,
          1,
          2
        ],
        "owner": [
          97,
          1,
          2
        ],
        "renter": [
          88,
          10,
          2
        ],
        "permission": [
          95,
          4,
          1
        ],
        "formal": [
          94,
          4,
          2
        ],
        "informal": [
          94,
          0,
          6
        ],
        "nodocs": [
          92,
          6,
          2
        ],
        "sole": [
          93,
          5,
          2
        ],
        "multiple": [
          95,
          4,
          0
        ],
        "male": [
          95,
          4,
          1
        ],
        "female": [
          93,
          5,
          2
        ],
        "young": [
          86,
          12,
          2
        ],
        "adult": [
          95,
          4,
          1
        ],
        "old": [
          94,
          4,
          3
        ],
        "fulltime": [
          96,
          4,
          0
        ],
        "parttime": [
          93,
          7,
          0
        ],
        "unemployed": [
          80,
          12,
          8
        ],
        "comfortable": [
          97,
          3,
          0
        ],
        "gettingby": [
          95,
          4,
          1
        ],
        "difficulty": [
          71,
          21,
          8
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          88,
          1,
          11
        ],
        "urban": [
          87,
          1,
          12
        ],
        "rural": [
          92,
          2,
          6
        ],
        "owner": [
          99,
          0,
          1
        ],
        "renter": [
          81,
          2,
          18
        ],
        "permission": [
          78,
          4,
          19
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          2,
          13
        ],
        "multiple": [
          96,
          1,
          3
        ],
        "male": [
          86,
          2,
          12
        ],
        "female": [
          90,
          1,
          9
        ],
        "young": [
          75,
          1,
          24
        ],
        "adult": [
          86,
          2,
          12
        ],
        "old": [
          93,
          1,
          6
        ],
        "fulltime": [
          88,
          2,
          11
        ],
        "parttime": [
          83,
          1,
          16
        ],
        "unemployed": [
          86,
          5,
          9
        ],
        "comfortable": [
          90,
          1,
          9
        ],
        "gettingby": [
          86,
          2,
          12
        ],
        "difficulty": [
          86,
          2,
          13
        ]
      },
      "homes": {
        "allresp": [
          86,
          1,
          12
        ],
        "urban": [
          85,
          1,
          13
        ],
        "rural": [
          91,
          2,
          7
        ],
        "owner": [
          98,
          0,
          1
        ],
        "renter": [
          77,
          1,
          21
        ],
        "permission": [
          77,
          4,
          19
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          2,
          13
        ],
        "multiple": [
          90,
          1,
          9
        ],
        "male": [
          84,
          2,
          14
        ],
        "female": [
          89,
          1,
          10
        ],
        "young": [
          74,
          1,
          25
        ],
        "adult": [
          85,
          2,
          13
        ],
        "old": [
          91,
          1,
          8
        ],
        "fulltime": [
          86,
          2,
          12
        ],
        "parttime": [
          79,
          0,
          21
        ],
        "unemployed": [
          86,
          5,
          9
        ],
        "comfortable": [
          88,
          1,
          11
        ],
        "gettingby": [
          85,
          2,
          14
        ],
        "difficulty": [
          83,
          2,
          15
        ]
      }
    },
    "reasons": {
      "askedtoleave": 79,
      "family": 17,
      "money": 49,
      "death": 15,
      "government": 13,
      "companies": 8,
      "customary": -1
    }
  },
  "CH": {
    "insecurity": {
      "allprop": {
        "allresp": [
          91,
          5,
          4
        ],
        "urban": [
          91,
          4,
          5
        ],
        "rural": [
          91,
          7,
          2
        ],
        "owner": [
          95,
          0,
          4
        ],
        "renter": [
          89,
          7,
          4
        ],
        "permission": [
          91,
          5,
          5
        ],
        "formal": [
          92,
          4,
          4
        ],
        "informal": [
          94,
          4,
          2
        ],
        "nodocs": [
          83,
          11,
          6
        ],
        "sole": [
          92,
          4,
          3
        ],
        "multiple": [
          93,
          4,
          3
        ],
        "male": [
          91,
          5,
          4
        ],
        "female": [
          91,
          4,
          5
        ],
        "young": [
          85,
          11,
          4
        ],
        "adult": [
          94,
          4,
          2
        ],
        "old": [
          88,
          4,
          8
        ],
        "fulltime": [
          93,
          5,
          2
        ],
        "parttime": [
          94,
          2,
          4
        ],
        "unemployed": [
          87,
          13,
          0
        ],
        "comfortable": [
          94,
          2,
          3
        ],
        "gettingby": [
          90,
          7,
          4
        ],
        "difficulty": [
          77,
          13,
          9
        ]
      },
      "homes": {
        "allresp": [
          91,
          5,
          4
        ],
        "urban": [
          92,
          4,
          4
        ],
        "rural": [
          91,
          7,
          2
        ],
        "owner": [
          96,
          0,
          4
        ],
        "renter": [
          89,
          7,
          4
        ],
        "permission": [
          91,
          5,
          4
        ],
        "formal": [
          92,
          4,
          4
        ],
        "informal": [
          95,
          3,
          2
        ],
        "nodocs": [
          86,
          9,
          5
        ],
        "sole": [
          92,
          4,
          3
        ],
        "multiple": [
          95,
          4,
          1
        ],
        "male": [
          91,
          5,
          3
        ],
        "female": [
          91,
          4,
          5
        ],
        "young": [
          85,
          11,
          4
        ],
        "adult": [
          94,
          4,
          2
        ],
        "old": [
          89,
          4,
          7
        ],
        "fulltime": [
          93,
          5,
          2
        ],
        "parttime": [
          95,
          1,
          3
        ],
        "unemployed": [
          87,
          13,
          0
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          90,
          7,
          4
        ],
        "difficulty": [
          77,
          13,
          9
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          86,
          7,
          7
        ],
        "urban": [
          86,
          7,
          7
        ],
        "rural": [
          87,
          9,
          4
        ],
        "owner": [
          96,
          1,
          3
        ],
        "renter": [
          83,
          9,
          8
        ],
        "permission": [
          82,
          11,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          8,
          7
        ],
        "multiple": [
          98,
          0,
          2
        ],
        "male": [
          86,
          7,
          8
        ],
        "female": [
          86,
          7,
          6
        ],
        "young": [
          84,
          4,
          12
        ],
        "adult": [
          85,
          8,
          7
        ],
        "old": [
          89,
          6,
          5
        ],
        "fulltime": [
          84,
          10,
          6
        ],
        "parttime": [
          87,
          5,
          8
        ],
        "unemployed": [
          81,
          5,
          14
        ],
        "comfortable": [
          91,
          5,
          4
        ],
        "gettingby": [
          83,
          10,
          8
        ],
        "difficulty": [
          76,
          8,
          16
        ]
      },
      "homes": {
        "allresp": [
          84,
          8,
          8
        ],
        "urban": [
          84,
          8,
          9
        ],
        "rural": [
          84,
          9,
          7
        ],
        "owner": [
          96,
          1,
          3
        ],
        "renter": [
          79,
          10,
          11
        ],
        "permission": [
          81,
          12,
          7
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          86,
          8,
          7
        ],
        "multiple": [
          82,
          6,
          12
        ],
        "male": [
          83,
          8,
          9
        ],
        "female": [
          85,
          8,
          7
        ],
        "young": [
          82,
          5,
          13
        ],
        "adult": [
          82,
          9,
          9
        ],
        "old": [
          87,
          7,
          7
        ],
        "fulltime": [
          82,
          10,
          8
        ],
        "parttime": [
          84,
          7,
          9
        ],
        "unemployed": [
          77,
          5,
          18
        ],
        "comfortable": [
          88,
          7,
          5
        ],
        "gettingby": [
          80,
          10,
          10
        ],
        "difficulty": [
          76,
          8,
          16
        ]
      }
    },
    "reasons": {
      "askedtoleave": 40,
      "family": 10,
      "money": 41,
      "death": 0,
      "government": 34,
      "companies": 12,
      "customary": -1
    }
  },
  "TW": {
    "insecurity": {
      "allprop": {
        "allresp": [
          78,
          18,
          4
        ],
        "urban": [
          78,
          18,
          3
        ],
        "rural": [
          80,
          15,
          5
        ],
        "owner": [
          86,
          11,
          3
        ],
        "renter": [
          47,
          47,
          6
        ],
        "permission": [
          81,
          18,
          2
        ],
        "formal": [
          79,
          17,
          4
        ],
        "informal": [
          59,
          41,
          0
        ],
        "nodocs": [
          3,
          97,
          0
        ],
        "sole": [
          80,
          17,
          3
        ],
        "multiple": [
          74,
          21,
          4
        ],
        "male": [
          79,
          19,
          2
        ],
        "female": [
          78,
          18,
          5
        ],
        "young": [
          76,
          24,
          0
        ],
        "adult": [
          76,
          23,
          2
        ],
        "old": [
          84,
          8,
          8
        ],
        "fulltime": [
          77,
          21,
          2
        ],
        "parttime": [
          81,
          15,
          5
        ],
        "unemployed": [
          62,
          38,
          0
        ],
        "comfortable": [
          77,
          23,
          0
        ],
        "gettingby": [
          82,
          15,
          3
        ],
        "difficulty": [
          62,
          32,
          6
        ]
      },
      "homes": {
        "allresp": [
          80,
          17,
          3
        ],
        "urban": [
          80,
          17,
          3
        ],
        "rural": [
          80,
          15,
          5
        ],
        "owner": [
          88,
          9,
          3
        ],
        "renter": [
          47,
          47,
          6
        ],
        "permission": [
          82,
          15,
          2
        ],
        "formal": [
          82,
          15,
          3
        ],
        "informal": [
          53,
          42,
          5
        ],
        "nodocs": [
          7,
          93,
          0
        ],
        "sole": [
          80,
          17,
          3
        ],
        "multiple": [
          80,
          16,
          4
        ],
        "male": [
          80,
          18,
          2
        ],
        "female": [
          80,
          15,
          5
        ],
        "young": [
          77,
          23,
          0
        ],
        "adult": [
          77,
          21,
          2
        ],
        "old": [
          86,
          6,
          8
        ],
        "fulltime": [
          79,
          19,
          2
        ],
        "parttime": [
          82,
          13,
          6
        ],
        "unemployed": [
          62,
          38,
          0
        ],
        "comfortable": [
          77,
          23,
          0
        ],
        "gettingby": [
          84,
          13,
          3
        ],
        "difficulty": [
          62,
          32,
          6
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          96,
          3,
          1
        ],
        "urban": [
          97,
          3,
          1
        ],
        "rural": [
          91,
          9,
          0
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          92,
          5,
          3
        ],
        "permission": [
          97,
          3,
          0
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          95,
          4,
          1
        ],
        "multiple": [
          99,
          1,
          0
        ],
        "male": [
          96,
          3,
          1
        ],
        "female": [
          97,
          3,
          0
        ],
        "young": [
          92,
          8,
          0
        ],
        "adult": [
          97,
          2,
          1
        ],
        "old": [
          98,
          2,
          1
        ],
        "fulltime": [
          97,
          2,
          1
        ],
        "parttime": [
          95,
          4,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          96,
          3,
          1
        ],
        "gettingby": [
          98,
          1,
          1
        ],
        "difficulty": [
          88,
          11,
          1
        ]
      },
      "homes": {
        "allresp": [
          96,
          4,
          1
        ],
        "urban": [
          96,
          3,
          1
        ],
        "rural": [
          90,
          10,
          0
        ],
        "owner": [
          98,
          2,
          0
        ],
        "renter": [
          89,
          8,
          3
        ],
        "permission": [
          96,
          4,
          0
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          95,
          4,
          1
        ],
        "multiple": [
          97,
          3,
          0
        ],
        "male": [
          96,
          3,
          1
        ],
        "female": [
          95,
          4,
          0
        ],
        "young": [
          91,
          9,
          0
        ],
        "adult": [
          96,
          3,
          1
        ],
        "old": [
          97,
          2,
          1
        ],
        "fulltime": [
          96,
          3,
          1
        ],
        "parttime": [
          92,
          8,
          1
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          96,
          3,
          1
        ],
        "gettingby": [
          97,
          2,
          1
        ],
        "difficulty": [
          86,
          13,
          1
        ]
      }
    },
    "reasons": {
      "askedtoleave": 55,
      "family": 21,
      "money": 27,
      "death": 13,
      "government": 18,
      "companies": 4,
      "customary": -1
    }
  },
  "TJ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          74,
          11,
          15
        ],
        "urban": [
          77,
          12,
          11
        ],
        "rural": [
          73,
          11,
          17
        ],
        "owner": [
          79,
          9,
          12
        ],
        "renter": [
          53,
          29,
          18
        ],
        "permission": [
          71,
          12,
          17
        ],
        "formal": [
          76,
          11,
          14
        ],
        "informal": [
          57,
          13,
          29
        ],
        "nodocs": [
          46,
          21,
          33
        ],
        "sole": [
          76,
          10,
          14
        ],
        "multiple": [
          64,
          21,
          16
        ],
        "male": [
          83,
          8,
          8
        ],
        "female": [
          65,
          14,
          21
        ],
        "young": [
          69,
          11,
          20
        ],
        "adult": [
          74,
          12,
          14
        ],
        "old": [
          79,
          8,
          13
        ],
        "fulltime": [
          81,
          9,
          10
        ],
        "parttime": [
          67,
          18,
          15
        ],
        "unemployed": [
          86,
          8,
          6
        ],
        "comfortable": [
          74,
          10,
          16
        ],
        "gettingby": [
          78,
          11,
          11
        ],
        "difficulty": [
          70,
          11,
          19
        ]
      },
      "homes": {
        "allresp": [
          75,
          10,
          15
        ],
        "urban": [
          78,
          11,
          11
        ],
        "rural": [
          74,
          10,
          16
        ],
        "owner": [
          80,
          8,
          12
        ],
        "renter": [
          53,
          29,
          18
        ],
        "permission": [
          72,
          11,
          17
        ],
        "formal": [
          77,
          10,
          13
        ],
        "informal": [
          58,
          15,
          28
        ],
        "nodocs": [
          43,
          19,
          38
        ],
        "sole": [
          76,
          10,
          14
        ],
        "multiple": [
          77,
          11,
          12
        ],
        "male": [
          84,
          8,
          8
        ],
        "female": [
          66,
          12,
          21
        ],
        "young": [
          70,
          10,
          20
        ],
        "adult": [
          76,
          11,
          13
        ],
        "old": [
          79,
          8,
          13
        ],
        "fulltime": [
          82,
          8,
          10
        ],
        "parttime": [
          68,
          18,
          14
        ],
        "unemployed": [
          87,
          7,
          6
        ],
        "comfortable": [
          77,
          8,
          15
        ],
        "gettingby": [
          79,
          10,
          10
        ],
        "difficulty": [
          70,
          11,
          19
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          92,
          6,
          3
        ],
        "urban": [
          92,
          6,
          2
        ],
        "rural": [
          92,
          5,
          3
        ],
        "owner": [
          95,
          5,
          0
        ],
        "renter": [
          81,
          8,
          12
        ],
        "permission": [
          90,
          6,
          4
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          6,
          2
        ],
        "multiple": [
          98,
          0,
          1
        ],
        "male": [
          96,
          3,
          1
        ],
        "female": [
          88,
          8,
          4
        ],
        "young": [
          89,
          6,
          5
        ],
        "adult": [
          92,
          6,
          2
        ],
        "old": [
          95,
          4,
          1
        ],
        "fulltime": [
          96,
          2,
          2
        ],
        "parttime": [
          88,
          6,
          6
        ],
        "unemployed": [
          96,
          4,
          0
        ],
        "comfortable": [
          91,
          6,
          2
        ],
        "gettingby": [
          94,
          4,
          3
        ],
        "difficulty": [
          92,
          6,
          3
        ]
      },
      "homes": {
        "allresp": [
          91,
          6,
          3
        ],
        "urban": [
          91,
          6,
          3
        ],
        "rural": [
          91,
          6,
          3
        ],
        "owner": [
          95,
          5,
          0
        ],
        "renter": [
          74,
          14,
          12
        ],
        "permission": [
          89,
          6,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          92,
          6,
          2
        ],
        "multiple": [
          93,
          3,
          4
        ],
        "male": [
          96,
          3,
          1
        ],
        "female": [
          87,
          8,
          5
        ],
        "young": [
          89,
          6,
          5
        ],
        "adult": [
          92,
          6,
          2
        ],
        "old": [
          92,
          5,
          3
        ],
        "fulltime": [
          96,
          2,
          2
        ],
        "parttime": [
          87,
          7,
          6
        ],
        "unemployed": [
          96,
          4,
          0
        ],
        "comfortable": [
          90,
          7,
          2
        ],
        "gettingby": [
          94,
          4,
          3
        ],
        "difficulty": [
          91,
          6,
          4
        ]
      }
    },
    "reasons": {
      "askedtoleave": 39,
      "family": 34,
      "money": 35,
      "death": 35,
      "government": -1,
      "companies": 4,
      "customary": -1
    }
  },
  "TZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          64,
          22,
          14
        ],
        "urban": [
          63,
          22,
          15
        ],
        "rural": [
          65,
          22,
          13
        ],
        "owner": [
          73,
          16,
          11
        ],
        "renter": [
          48,
          36,
          15
        ],
        "permission": [
          62,
          22,
          17
        ],
        "formal": [
          67,
          23,
          11
        ],
        "informal": [
          43,
          41,
          16
        ],
        "nodocs": [
          63,
          20,
          17
        ],
        "sole": [
          68,
          18,
          13
        ],
        "multiple": [
          49,
          36,
          15
        ],
        "male": [
          66,
          22,
          11
        ],
        "female": [
          62,
          22,
          16
        ],
        "young": [
          61,
          23,
          16
        ],
        "adult": [
          64,
          23,
          13
        ],
        "old": [
          70,
          16,
          14
        ],
        "fulltime": [
          62,
          27,
          12
        ],
        "parttime": [
          48,
          37,
          15
        ],
        "unemployed": [
          63,
          19,
          18
        ],
        "comfortable": [
          59,
          28,
          14
        ],
        "gettingby": [
          69,
          19,
          12
        ],
        "difficulty": [
          65,
          22,
          13
        ]
      },
      "homes": {
        "allresp": [
          66,
          20,
          13
        ],
        "urban": [
          65,
          20,
          15
        ],
        "rural": [
          67,
          20,
          13
        ],
        "owner": [
          76,
          14,
          10
        ],
        "renter": [
          50,
          34,
          16
        ],
        "permission": [
          64,
          20,
          16
        ],
        "formal": [
          70,
          20,
          10
        ],
        "informal": [
          44,
          40,
          16
        ],
        "nodocs": [
          64,
          19,
          17
        ],
        "sole": [
          68,
          18,
          13
        ],
        "multiple": [
          60,
          27,
          13
        ],
        "male": [
          69,
          21,
          11
        ],
        "female": [
          64,
          20,
          16
        ],
        "young": [
          64,
          22,
          15
        ],
        "adult": [
          67,
          21,
          13
        ],
        "old": [
          72,
          15,
          13
        ],
        "fulltime": [
          63,
          25,
          12
        ],
        "parttime": [
          51,
          35,
          14
        ],
        "unemployed": [
          66,
          17,
          16
        ],
        "comfortable": [
          61,
          25,
          13
        ],
        "gettingby": [
          71,
          18,
          12
        ],
        "difficulty": [
          67,
          20,
          12
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          50,
          3,
          48
        ],
        "urban": [
          62,
          3,
          35
        ],
        "rural": [
          46,
          2,
          52
        ],
        "owner": [
          57,
          3,
          40
        ],
        "renter": [
          62,
          4,
          34
        ],
        "permission": [
          33,
          2,
          66
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          45,
          3,
          52
        ],
        "multiple": [
          65,
          2,
          33
        ],
        "male": [
          52,
          2,
          46
        ],
        "female": [
          47,
          3,
          49
        ],
        "young": [
          41,
          1,
          58
        ],
        "adult": [
          54,
          3,
          43
        ],
        "old": [
          48,
          4,
          49
        ],
        "fulltime": [
          64,
          3,
          33
        ],
        "parttime": [
          58,
          6,
          36
        ],
        "unemployed": [
          40,
          2,
          57
        ],
        "comfortable": [
          54,
          2,
          43
        ],
        "gettingby": [
          53,
          2,
          44
        ],
        "difficulty": [
          49,
          3,
          49
        ]
      },
      "homes": {
        "allresp": [
          47,
          3,
          51
        ],
        "urban": [
          60,
          3,
          37
        ],
        "rural": [
          43,
          3,
          55
        ],
        "owner": [
          56,
          3,
          41
        ],
        "renter": [
          60,
          4,
          36
        ],
        "permission": [
          28,
          2,
          70
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          45,
          3,
          52
        ],
        "multiple": [
          51,
          3,
          46
        ],
        "male": [
          49,
          3,
          48
        ],
        "female": [
          44,
          3,
          53
        ],
        "young": [
          37,
          2,
          61
        ],
        "adult": [
          51,
          3,
          46
        ],
        "old": [
          45,
          4,
          51
        ],
        "fulltime": [
          60,
          4,
          36
        ],
        "parttime": [
          55,
          6,
          39
        ],
        "unemployed": [
          38,
          2,
          59
        ],
        "comfortable": [
          49,
          3,
          47
        ],
        "gettingby": [
          50,
          3,
          47
        ],
        "difficulty": [
          46,
          3,
          51
        ]
      }
    },
    "reasons": {
      "askedtoleave": 24,
      "family": 16,
      "money": 9,
      "death": 7,
      "government": 18,
      "companies": 7,
      "customary": 2
    }
  },
  "TH": {
    "insecurity": {
      "allprop": {
        "allresp": [
          72,
          17,
          12
        ],
        "urban": [
          66,
          22,
          12
        ],
        "rural": [
          76,
          12,
          11
        ],
        "owner": [
          81,
          10,
          10
        ],
        "renter": [
          44,
          40,
          16
        ],
        "permission": [
          80,
          10,
          10
        ],
        "formal": [
          75,
          14,
          11
        ],
        "informal": [
          47,
          38,
          15
        ],
        "nodocs": [
          65,
          22,
          13
        ],
        "sole": [
          74,
          16,
          10
        ],
        "multiple": [
          62,
          21,
          17
        ],
        "male": [
          72,
          16,
          12
        ],
        "female": [
          71,
          17,
          11
        ],
        "young": [
          71,
          18,
          11
        ],
        "adult": [
          72,
          18,
          11
        ],
        "old": [
          72,
          14,
          14
        ],
        "fulltime": [
          70,
          20,
          10
        ],
        "parttime": [
          67,
          19,
          14
        ],
        "unemployed": [
          68,
          18,
          14
        ],
        "comfortable": [
          76,
          10,
          13
        ],
        "gettingby": [
          74,
          15,
          11
        ],
        "difficulty": [
          68,
          21,
          11
        ]
      },
      "homes": {
        "allresp": [
          73,
          16,
          11
        ],
        "urban": [
          67,
          21,
          12
        ],
        "rural": [
          78,
          11,
          11
        ],
        "owner": [
          82,
          9,
          9
        ],
        "renter": [
          44,
          40,
          16
        ],
        "permission": [
          81,
          9,
          10
        ],
        "formal": [
          78,
          12,
          10
        ],
        "informal": [
          46,
          38,
          17
        ],
        "nodocs": [
          63,
          22,
          15
        ],
        "sole": [
          74,
          16,
          10
        ],
        "multiple": [
          69,
          15,
          16
        ],
        "male": [
          74,
          15,
          12
        ],
        "female": [
          72,
          17,
          11
        ],
        "young": [
          73,
          18,
          10
        ],
        "adult": [
          72,
          17,
          11
        ],
        "old": [
          74,
          13,
          13
        ],
        "fulltime": [
          70,
          19,
          11
        ],
        "parttime": [
          69,
          17,
          14
        ],
        "unemployed": [
          68,
          18,
          14
        ],
        "comfortable": [
          79,
          10,
          11
        ],
        "gettingby": [
          74,
          14,
          11
        ],
        "difficulty": [
          69,
          19,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          75,
          4,
          22
        ],
        "urban": [
          68,
          6,
          26
        ],
        "rural": [
          80,
          2,
          18
        ],
        "owner": [
          95,
          2,
          3
        ],
        "renter": [
          70,
          4,
          25
        ],
        "permission": [
          69,
          4,
          28
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          70,
          4,
          26
        ],
        "multiple": [
          97,
          1,
          2
        ],
        "male": [
          76,
          3,
          21
        ],
        "female": [
          74,
          4,
          22
        ],
        "young": [
          52,
          4,
          43
        ],
        "adult": [
          75,
          4,
          21
        ],
        "old": [
          84,
          4,
          13
        ],
        "fulltime": [
          70,
          6,
          24
        ],
        "parttime": [
          71,
          4,
          25
        ],
        "unemployed": [
          73,
          1,
          27
        ],
        "comfortable": [
          69,
          3,
          28
        ],
        "gettingby": [
          75,
          4,
          21
        ],
        "difficulty": [
          74,
          4,
          22
        ]
      },
      "homes": {
        "allresp": [
          73,
          4,
          23
        ],
        "urban": [
          66,
          7,
          28
        ],
        "rural": [
          78,
          2,
          19
        ],
        "owner": [
          95,
          2,
          3
        ],
        "renter": [
          68,
          6,
          26
        ],
        "permission": [
          67,
          4,
          30
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          70,
          4,
          26
        ],
        "multiple": [
          86,
          3,
          10
        ],
        "male": [
          74,
          4,
          23
        ],
        "female": [
          72,
          4,
          24
        ],
        "young": [
          48,
          4,
          47
        ],
        "adult": [
          73,
          5,
          22
        ],
        "old": [
          82,
          4,
          14
        ],
        "fulltime": [
          68,
          6,
          25
        ],
        "parttime": [
          69,
          6,
          25
        ],
        "unemployed": [
          69,
          1,
          30
        ],
        "comfortable": [
          67,
          3,
          29
        ],
        "gettingby": [
          73,
          4,
          22
        ],
        "difficulty": [
          73,
          4,
          23
        ]
      }
    },
    "reasons": {
      "askedtoleave": 21,
      "family": 5,
      "money": 5,
      "death": 3,
      "government": 12,
      "companies": 2,
      "customary": 1
    }
  },
  "TG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          63,
          26,
          11
        ],
        "urban": [
          60,
          28,
          11
        ],
        "rural": [
          69,
          22,
          9
        ],
        "owner": [
          77,
          16,
          6
        ],
        "renter": [
          48,
          34,
          18
        ],
        "permission": [
          58,
          32,
          10
        ],
        "formal": [
          65,
          25,
          10
        ],
        "informal": [
          50,
          42,
          8
        ],
        "nodocs": [
          57,
          27,
          16
        ],
        "sole": [
          68,
          23,
          9
        ],
        "multiple": [
          58,
          37,
          5
        ],
        "male": [
          64,
          27,
          9
        ],
        "female": [
          62,
          26,
          12
        ],
        "young": [
          55,
          33,
          12
        ],
        "adult": [
          64,
          25,
          10
        ],
        "old": [
          70,
          19,
          11
        ],
        "fulltime": [
          63,
          22,
          14
        ],
        "parttime": [
          57,
          36,
          7
        ],
        "unemployed": [
          71,
          16,
          13
        ],
        "comfortable": [
          81,
          12,
          7
        ],
        "gettingby": [
          66,
          26,
          8
        ],
        "difficulty": [
          62,
          27,
          11
        ]
      },
      "homes": {
        "allresp": [
          66,
          23,
          11
        ],
        "urban": [
          64,
          24,
          11
        ],
        "rural": [
          71,
          19,
          10
        ],
        "owner": [
          81,
          13,
          6
        ],
        "renter": [
          50,
          31,
          19
        ],
        "permission": [
          63,
          27,
          10
        ],
        "formal": [
          70,
          20,
          10
        ],
        "informal": [
          56,
          37,
          7
        ],
        "nodocs": [
          60,
          25,
          15
        ],
        "sole": [
          68,
          23,
          9
        ],
        "multiple": [
          71,
          24,
          5
        ],
        "male": [
          68,
          23,
          9
        ],
        "female": [
          65,
          23,
          12
        ],
        "young": [
          57,
          31,
          12
        ],
        "adult": [
          68,
          22,
          10
        ],
        "old": [
          81,
          9,
          11
        ],
        "fulltime": [
          67,
          19,
          14
        ],
        "parttime": [
          61,
          32,
          7
        ],
        "unemployed": [
          72,
          15,
          13
        ],
        "comfortable": [
          84,
          9,
          7
        ],
        "gettingby": [
          70,
          22,
          8
        ],
        "difficulty": [
          66,
          24,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          75,
          7,
          18
        ],
        "urban": [
          77,
          7,
          16
        ],
        "rural": [
          70,
          7,
          23
        ],
        "owner": [
          81,
          6,
          13
        ],
        "renter": [
          83,
          3,
          14
        ],
        "permission": [
          66,
          10,
          23
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          74,
          7,
          19
        ],
        "multiple": [
          78,
          7,
          15
        ],
        "male": [
          77,
          6,
          17
        ],
        "female": [
          73,
          8,
          19
        ],
        "young": [
          74,
          6,
          20
        ],
        "adult": [
          74,
          8,
          18
        ],
        "old": [
          81,
          6,
          12
        ],
        "fulltime": [
          78,
          6,
          16
        ],
        "parttime": [
          80,
          7,
          13
        ],
        "unemployed": [
          72,
          10,
          18
        ],
        "comfortable": [
          95,
          3,
          3
        ],
        "gettingby": [
          77,
          9,
          14
        ],
        "difficulty": [
          73,
          7,
          20
        ]
      },
      "homes": {
        "allresp": [
          72,
          8,
          20
        ],
        "urban": [
          74,
          9,
          17
        ],
        "rural": [
          67,
          7,
          27
        ],
        "owner": [
          78,
          7,
          14
        ],
        "renter": [
          79,
          6,
          16
        ],
        "permission": [
          63,
          10,
          26
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          74,
          7,
          19
        ],
        "multiple": [
          67,
          10,
          23
        ],
        "male": [
          74,
          7,
          19
        ],
        "female": [
          70,
          9,
          21
        ],
        "young": [
          72,
          6,
          22
        ],
        "adult": [
          70,
          9,
          21
        ],
        "old": [
          77,
          8,
          14
        ],
        "fulltime": [
          73,
          7,
          19
        ],
        "parttime": [
          76,
          9,
          15
        ],
        "unemployed": [
          72,
          10,
          18
        ],
        "comfortable": [
          94,
          3,
          3
        ],
        "gettingby": [
          75,
          10,
          16
        ],
        "difficulty": [
          69,
          8,
          23
        ]
      }
    },
    "reasons": {
      "askedtoleave": 78,
      "family": 38,
      "money": 62,
      "death": 42,
      "government": 29,
      "companies": 37,
      "customary": 30
    }
  },
  "TN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          74,
          24,
          3
        ],
        "urban": [
          72,
          25,
          3
        ],
        "rural": [
          77,
          21,
          1
        ],
        "owner": [
          90,
          9,
          1
        ],
        "renter": [
          38,
          58,
          4
        ],
        "permission": [
          77,
          20,
          3
        ],
        "formal": [
          80,
          18,
          2
        ],
        "informal": [
          63,
          32,
          5
        ],
        "nodocs": [
          58,
          38,
          4
        ],
        "sole": [
          74,
          24,
          3
        ],
        "multiple": [
          73,
          23,
          3
        ],
        "male": [
          74,
          24,
          2
        ],
        "female": [
          74,
          23,
          3
        ],
        "young": [
          69,
          28,
          2
        ],
        "adult": [
          72,
          26,
          3
        ],
        "old": [
          81,
          16,
          4
        ],
        "fulltime": [
          76,
          23,
          1
        ],
        "parttime": [
          64,
          36,
          0
        ],
        "unemployed": [
          66,
          27,
          7
        ],
        "comfortable": [
          82,
          15,
          3
        ],
        "gettingby": [
          76,
          21,
          3
        ],
        "difficulty": [
          68,
          30,
          2
        ]
      },
      "homes": {
        "allresp": [
          75,
          23,
          3
        ],
        "urban": [
          73,
          24,
          3
        ],
        "rural": [
          79,
          20,
          1
        ],
        "owner": [
          91,
          8,
          1
        ],
        "renter": [
          39,
          57,
          3
        ],
        "permission": [
          79,
          19,
          3
        ],
        "formal": [
          81,
          17,
          2
        ],
        "informal": [
          67,
          29,
          4
        ],
        "nodocs": [
          61,
          35,
          3
        ],
        "sole": [
          74,
          24,
          3
        ],
        "multiple": [
          80,
          17,
          2
        ],
        "male": [
          75,
          23,
          2
        ],
        "female": [
          75,
          22,
          3
        ],
        "young": [
          70,
          28,
          2
        ],
        "adult": [
          73,
          25,
          2
        ],
        "old": [
          82,
          14,
          4
        ],
        "fulltime": [
          77,
          22,
          1
        ],
        "parttime": [
          64,
          36,
          0
        ],
        "unemployed": [
          67,
          27,
          6
        ],
        "comfortable": [
          83,
          14,
          3
        ],
        "gettingby": [
          76,
          20,
          3
        ],
        "difficulty": [
          70,
          29,
          2
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          71,
          8,
          21
        ],
        "urban": [
          71,
          7,
          22
        ],
        "rural": [
          71,
          9,
          20
        ],
        "owner": [
          93,
          5,
          2
        ],
        "renter": [
          56,
          4,
          40
        ],
        "permission": [
          65,
          11,
          24
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          67,
          8,
          25
        ],
        "multiple": [
          91,
          5,
          4
        ],
        "male": [
          76,
          7,
          17
        ],
        "female": [
          66,
          9,
          25
        ],
        "young": [
          72,
          9,
          19
        ],
        "adult": [
          67,
          8,
          25
        ],
        "old": [
          79,
          8,
          14
        ],
        "fulltime": [
          76,
          5,
          19
        ],
        "parttime": [
          73,
          9,
          19
        ],
        "unemployed": [
          61,
          14,
          26
        ],
        "comfortable": [
          78,
          5,
          17
        ],
        "gettingby": [
          69,
          9,
          22
        ],
        "difficulty": [
          70,
          8,
          23
        ]
      },
      "homes": {
        "allresp": [
          66,
          8,
          25
        ],
        "urban": [
          66,
          7,
          27
        ],
        "rural": [
          66,
          11,
          23
        ],
        "owner": [
          92,
          5,
          2
        ],
        "renter": [
          46,
          2,
          52
        ],
        "permission": [
          60,
          12,
          28
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          67,
          8,
          25
        ],
        "multiple": [
          63,
          8,
          29
        ],
        "male": [
          72,
          7,
          20
        ],
        "female": [
          60,
          9,
          30
        ],
        "young": [
          62,
          9,
          29
        ],
        "adult": [
          63,
          8,
          29
        ],
        "old": [
          77,
          8,
          15
        ],
        "fulltime": [
          73,
          5,
          22
        ],
        "parttime": [
          70,
          9,
          21
        ],
        "unemployed": [
          57,
          14,
          29
        ],
        "comfortable": [
          69,
          6,
          25
        ],
        "gettingby": [
          66,
          10,
          24
        ],
        "difficulty": [
          65,
          8,
          27
        ]
      }
    },
    "reasons": {
      "askedtoleave": 41,
      "family": 18,
      "money": 10,
      "death": 7,
      "government": 5,
      "companies": 3,
      "customary": 2
    }
  },
  "TR": {
    "insecurity": {
      "allprop": {
        "allresp": [
          63,
          31,
          6
        ],
        "urban": [
          65,
          31,
          4
        ],
        "rural": [
          46,
          31,
          23
        ],
        "owner": [
          76,
          18,
          5
        ],
        "renter": [
          45,
          51,
          4
        ],
        "permission": [
          61,
          32,
          7
        ],
        "formal": [
          67,
          29,
          5
        ],
        "informal": [
          63,
          31,
          6
        ],
        "nodocs": [
          34,
          50,
          16
        ],
        "sole": [
          69,
          28,
          3
        ],
        "multiple": [
          53,
          38,
          8
        ],
        "male": [
          63,
          31,
          6
        ],
        "female": [
          63,
          31,
          6
        ],
        "young": [
          65,
          31,
          4
        ],
        "adult": [
          61,
          33,
          6
        ],
        "old": [
          68,
          26,
          6
        ],
        "fulltime": [
          62,
          33,
          4
        ],
        "parttime": [
          67,
          29,
          4
        ],
        "unemployed": [
          45,
          51,
          3
        ],
        "comfortable": [
          71,
          25,
          4
        ],
        "gettingby": [
          68,
          27,
          5
        ],
        "difficulty": [
          55,
          39,
          7
        ]
      },
      "homes": {
        "allresp": [
          66,
          28,
          5
        ],
        "urban": [
          67,
          28,
          4
        ],
        "rural": [
          53,
          25,
          22
        ],
        "owner": [
          80,
          15,
          5
        ],
        "renter": [
          47,
          49,
          4
        ],
        "permission": [
          64,
          28,
          7
        ],
        "formal": [
          70,
          26,
          4
        ],
        "informal": [
          66,
          28,
          6
        ],
        "nodocs": [
          37,
          48,
          15
        ],
        "sole": [
          69,
          28,
          3
        ],
        "multiple": [
          66,
          27,
          8
        ],
        "male": [
          66,
          28,
          6
        ],
        "female": [
          66,
          28,
          5
        ],
        "young": [
          66,
          29,
          4
        ],
        "adult": [
          64,
          30,
          6
        ],
        "old": [
          72,
          23,
          6
        ],
        "fulltime": [
          66,
          30,
          4
        ],
        "parttime": [
          67,
          27,
          6
        ],
        "unemployed": [
          49,
          48,
          3
        ],
        "comfortable": [
          72,
          24,
          4
        ],
        "gettingby": [
          73,
          23,
          4
        ],
        "difficulty": [
          56,
          36,
          7
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          5,
          10
        ],
        "urban": [
          86,
          5,
          8
        ],
        "rural": [
          69,
          6,
          25
        ],
        "owner": [
          91,
          3,
          7
        ],
        "renter": [
          91,
          7,
          3
        ],
        "permission": [
          75,
          8,
          18
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          84,
          7,
          9
        ],
        "multiple": [
          94,
          1,
          5
        ],
        "male": [
          86,
          5,
          10
        ],
        "female": [
          85,
          6,
          10
        ],
        "young": [
          82,
          11,
          7
        ],
        "adult": [
          85,
          4,
          11
        ],
        "old": [
          88,
          4,
          8
        ],
        "fulltime": [
          90,
          3,
          7
        ],
        "parttime": [
          77,
          7,
          16
        ],
        "unemployed": [
          86,
          8,
          6
        ],
        "comfortable": [
          91,
          0,
          9
        ],
        "gettingby": [
          90,
          4,
          6
        ],
        "difficulty": [
          78,
          9,
          13
        ]
      },
      "homes": {
        "allresp": [
          83,
          6,
          11
        ],
        "urban": [
          85,
          5,
          10
        ],
        "rural": [
          65,
          10,
          25
        ],
        "owner": [
          89,
          3,
          7
        ],
        "renter": [
          88,
          7,
          4
        ],
        "permission": [
          72,
          7,
          20
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          84,
          7,
          9
        ],
        "multiple": [
          87,
          3,
          11
        ],
        "male": [
          84,
          5,
          11
        ],
        "female": [
          83,
          6,
          11
        ],
        "young": [
          81,
          11,
          8
        ],
        "adult": [
          83,
          4,
          13
        ],
        "old": [
          86,
          6,
          8
        ],
        "fulltime": [
          88,
          4,
          8
        ],
        "parttime": [
          74,
          7,
          19
        ],
        "unemployed": [
          78,
          8,
          14
        ],
        "comfortable": [
          90,
          0,
          10
        ],
        "gettingby": [
          88,
          4,
          8
        ],
        "difficulty": [
          76,
          10,
          14
        ]
      }
    },
    "reasons": {
      "askedtoleave": 68,
      "family": 28,
      "money": 51,
      "death": 29,
      "government": 19,
      "companies": 10,
      "customary": -1
    }
  },
  "TM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          90,
          2,
          8
        ],
        "urban": [
          90,
          2,
          8
        ],
        "rural": [
          90,
          1,
          9
        ],
        "owner": [
          95,
          2,
          4
        ],
        "renter": [
          13,
          77,
          10
        ],
        "permission": [
          84,
          1,
          15
        ],
        "formal": [
          90,
          2,
          8
        ],
        "informal": [
          0,
          100,
          0
        ],
        "nodocs": [
          83,
          17,
          0
        ],
        "sole": [
          90,
          2,
          8
        ],
        "multiple": [
          80,
          8,
          12
        ],
        "male": [
          90,
          2,
          8
        ],
        "female": [
          90,
          1,
          9
        ],
        "young": [
          84,
          3,
          13
        ],
        "adult": [
          90,
          2,
          9
        ],
        "old": [
          96,
          1,
          3
        ],
        "fulltime": [
          87,
          1,
          11
        ],
        "parttime": [
          81,
          0,
          19
        ],
        "unemployed": [
          96,
          1,
          2
        ],
        "comfortable": [
          95,
          3,
          3
        ],
        "gettingby": [
          88,
          1,
          11
        ],
        "difficulty": [
          83,
          0,
          17
        ]
      },
      "homes": {
        "allresp": [
          90,
          2,
          8
        ],
        "urban": [
          90,
          2,
          8
        ],
        "rural": [
          90,
          1,
          9
        ],
        "owner": [
          95,
          2,
          3
        ],
        "renter": [
          13,
          77,
          10
        ],
        "permission": [
          84,
          1,
          15
        ],
        "formal": [
          90,
          1,
          8
        ],
        "informal": [
          0,
          100,
          0
        ],
        "nodocs": [
          83,
          17,
          0
        ],
        "sole": [
          90,
          2,
          8
        ],
        "multiple": [
          89,
          5,
          6
        ],
        "male": [
          90,
          2,
          8
        ],
        "female": [
          90,
          1,
          9
        ],
        "young": [
          84,
          3,
          13
        ],
        "adult": [
          90,
          2,
          8
        ],
        "old": [
          96,
          1,
          3
        ],
        "fulltime": [
          87,
          1,
          11
        ],
        "parttime": [
          81,
          0,
          19
        ],
        "unemployed": [
          96,
          1,
          2
        ],
        "comfortable": [
          95,
          3,
          2
        ],
        "gettingby": [
          88,
          1,
          11
        ],
        "difficulty": [
          83,
          0,
          17
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          99,
          0,
          1
        ],
        "urban": [
          99,
          0,
          1
        ],
        "rural": [
          99,
          0,
          1
        ],
        "owner": [
          100,
          0,
          0
        ],
        "renter": [
          100,
          0,
          0
        ],
        "permission": [
          99,
          0,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          99,
          0,
          1
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          99,
          0,
          1
        ],
        "female": [
          99,
          0,
          1
        ],
        "young": [
          98,
          0,
          2
        ],
        "adult": [
          99,
          0,
          1
        ],
        "old": [
          100,
          0,
          0
        ],
        "fulltime": [
          99,
          0,
          1
        ],
        "parttime": [
          96,
          0,
          4
        ],
        "unemployed": [
          98,
          0,
          2
        ],
        "comfortable": [
          98,
          0,
          2
        ],
        "gettingby": [
          100,
          0,
          0
        ],
        "difficulty": [
          100,
          0,
          0
        ]
      },
      "homes": {
        "allresp": [
          99,
          0,
          1
        ],
        "urban": [
          99,
          0,
          1
        ],
        "rural": [
          99,
          0,
          1
        ],
        "owner": [
          100,
          0,
          0
        ],
        "renter": [
          100,
          0,
          0
        ],
        "permission": [
          99,
          0,
          1
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          99,
          0,
          1
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          99,
          0,
          1
        ],
        "female": [
          99,
          0,
          1
        ],
        "young": [
          98,
          0,
          2
        ],
        "adult": [
          99,
          0,
          1
        ],
        "old": [
          100,
          0,
          0
        ],
        "fulltime": [
          99,
          0,
          1
        ],
        "parttime": [
          96,
          0,
          4
        ],
        "unemployed": [
          98,
          0,
          2
        ],
        "comfortable": [
          98,
          0,
          2
        ],
        "gettingby": [
          100,
          0,
          0
        ],
        "difficulty": [
          100,
          0,
          0
        ]
      }
    },
    "reasons": {
      "askedtoleave": 69,
      "family": 6,
      "money": 18,
      "death": 17,
      "government": -1,
      "companies": 4,
      "customary": -1
    }
  },
  "UG": {
    "insecurity": {
      "allprop": {
        "allresp": [
          62,
          26,
          11
        ],
        "urban": [
          63,
          28,
          9
        ],
        "rural": [
          62,
          26,
          12
        ],
        "owner": [
          68,
          22,
          10
        ],
        "renter": [
          49,
          36,
          15
        ],
        "permission": [
          64,
          26,
          10
        ],
        "formal": [
          63,
          26,
          11
        ],
        "informal": [
          65,
          24,
          10
        ],
        "nodocs": [
          60,
          28,
          12
        ],
        "sole": [
          65,
          23,
          12
        ],
        "multiple": [
          43,
          48,
          9
        ],
        "male": [
          65,
          25,
          10
        ],
        "female": [
          59,
          28,
          13
        ],
        "young": [
          58,
          29,
          12
        ],
        "adult": [
          63,
          26,
          11
        ],
        "old": [
          69,
          21,
          10
        ],
        "fulltime": [
          58,
          30,
          12
        ],
        "parttime": [
          71,
          23,
          6
        ],
        "unemployed": [
          58,
          32,
          11
        ],
        "comfortable": [
          63,
          31,
          6
        ],
        "gettingby": [
          71,
          18,
          11
        ],
        "difficulty": [
          62,
          27,
          11
        ]
      },
      "homes": {
        "allresp": [
          64,
          25,
          11
        ],
        "urban": [
          64,
          27,
          9
        ],
        "rural": [
          64,
          24,
          12
        ],
        "owner": [
          70,
          20,
          10
        ],
        "renter": [
          50,
          34,
          16
        ],
        "permission": [
          65,
          25,
          10
        ],
        "formal": [
          67,
          23,
          10
        ],
        "informal": [
          64,
          25,
          11
        ],
        "nodocs": [
          60,
          27,
          12
        ],
        "sole": [
          65,
          23,
          12
        ],
        "multiple": [
          56,
          36,
          8
        ],
        "male": [
          67,
          23,
          10
        ],
        "female": [
          61,
          26,
          13
        ],
        "young": [
          60,
          28,
          12
        ],
        "adult": [
          65,
          24,
          11
        ],
        "old": [
          72,
          19,
          10
        ],
        "fulltime": [
          60,
          28,
          12
        ],
        "parttime": [
          71,
          23,
          6
        ],
        "unemployed": [
          58,
          32,
          10
        ],
        "comfortable": [
          65,
          29,
          6
        ],
        "gettingby": [
          73,
          17,
          9
        ],
        "difficulty": [
          63,
          26,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          55,
          10,
          36
        ],
        "urban": [
          53,
          17,
          30
        ],
        "rural": [
          55,
          8,
          37
        ],
        "owner": [
          66,
          7,
          27
        ],
        "renter": [
          56,
          22,
          22
        ],
        "permission": [
          32,
          8,
          60
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          52,
          11,
          37
        ],
        "multiple": [
          70,
          3,
          26
        ],
        "male": [
          56,
          10,
          33
        ],
        "female": [
          53,
          9,
          38
        ],
        "young": [
          42,
          8,
          50
        ],
        "adult": [
          59,
          10,
          31
        ],
        "old": [
          68,
          11,
          21
        ],
        "fulltime": [
          62,
          13,
          25
        ],
        "parttime": [
          44,
          10,
          46
        ],
        "unemployed": [
          51,
          6,
          43
        ],
        "comfortable": [
          50,
          9,
          41
        ],
        "gettingby": [
          48,
          11,
          40
        ],
        "difficulty": [
          57,
          10,
          33
        ]
      },
      "homes": {
        "allresp": [
          53,
          10,
          37
        ],
        "urban": [
          50,
          20,
          30
        ],
        "rural": [
          53,
          8,
          39
        ],
        "owner": [
          65,
          7,
          28
        ],
        "renter": [
          53,
          24,
          23
        ],
        "permission": [
          30,
          8,
          62
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          52,
          11,
          37
        ],
        "multiple": [
          55,
          9,
          36
        ],
        "male": [
          55,
          11,
          34
        ],
        "female": [
          50,
          10,
          40
        ],
        "young": [
          38,
          10,
          52
        ],
        "adult": [
          57,
          10,
          32
        ],
        "old": [
          67,
          11,
          22
        ],
        "fulltime": [
          59,
          14,
          27
        ],
        "parttime": [
          40,
          14,
          46
        ],
        "unemployed": [
          50,
          6,
          44
        ],
        "comfortable": [
          46,
          10,
          44
        ],
        "gettingby": [
          45,
          12,
          42
        ],
        "difficulty": [
          55,
          10,
          34
        ]
      }
    },
    "reasons": {
      "askedtoleave": 17,
      "family": 17,
      "money": 13,
      "death": 7,
      "government": 14,
      "companies": 3,
      "customary": 1
    }
  },
  "UA": {
    "insecurity": {
      "allprop": {
        "allresp": [
          78,
          10,
          13
        ],
        "urban": [
          80,
          8,
          12
        ],
        "rural": [
          75,
          12,
          13
        ],
        "owner": [
          82,
          5,
          13
        ],
        "renter": [
          48,
          43,
          9
        ],
        "permission": [
          77,
          11,
          13
        ],
        "formal": [
          80,
          8,
          11
        ],
        "informal": [
          65,
          16,
          19
        ],
        "nodocs": [
          51,
          19,
          31
        ],
        "sole": [
          81,
          8,
          10
        ],
        "multiple": [
          65,
          16,
          18
        ],
        "male": [
          79,
          9,
          12
        ],
        "female": [
          77,
          10,
          14
        ],
        "young": [
          73,
          15,
          13
        ],
        "adult": [
          80,
          11,
          9
        ],
        "old": [
          75,
          7,
          18
        ],
        "fulltime": [
          81,
          11,
          7
        ],
        "parttime": [
          74,
          15,
          11
        ],
        "unemployed": [
          80,
          7,
          13
        ],
        "comfortable": [
          82,
          8,
          10
        ],
        "gettingby": [
          80,
          9,
          11
        ],
        "difficulty": [
          73,
          11,
          16
        ]
      },
      "homes": {
        "allresp": [
          80,
          9,
          11
        ],
        "urban": [
          81,
          8,
          11
        ],
        "rural": [
          80,
          10,
          10
        ],
        "owner": [
          85,
          4,
          11
        ],
        "renter": [
          48,
          43,
          9
        ],
        "permission": [
          80,
          10,
          10
        ],
        "formal": [
          83,
          7,
          10
        ],
        "informal": [
          70,
          17,
          13
        ],
        "nodocs": [
          55,
          20,
          25
        ],
        "sole": [
          81,
          8,
          10
        ],
        "multiple": [
          83,
          11,
          6
        ],
        "male": [
          81,
          9,
          10
        ],
        "female": [
          80,
          8,
          11
        ],
        "young": [
          78,
          15,
          7
        ],
        "adult": [
          82,
          10,
          8
        ],
        "old": [
          78,
          6,
          16
        ],
        "fulltime": [
          84,
          10,
          6
        ],
        "parttime": [
          79,
          13,
          7
        ],
        "unemployed": [
          82,
          4,
          13
        ],
        "comfortable": [
          85,
          7,
          8
        ],
        "gettingby": [
          83,
          9,
          8
        ],
        "difficulty": [
          75,
          9,
          16
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          88,
          8,
          4
        ],
        "urban": [
          86,
          9,
          5
        ],
        "rural": [
          90,
          6,
          4
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          54,
          30,
          16
        ],
        "permission": [
          84,
          14,
          2
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          8,
          3
        ],
        "multiple": [
          94,
          4,
          1
        ],
        "male": [
          85,
          9,
          6
        ],
        "female": [
          89,
          7,
          3
        ],
        "young": [
          80,
          14,
          6
        ],
        "adult": [
          86,
          10,
          5
        ],
        "old": [
          91,
          5,
          4
        ],
        "fulltime": [
          88,
          8,
          3
        ],
        "parttime": [
          87,
          9,
          4
        ],
        "unemployed": [
          75,
          15,
          11
        ],
        "comfortable": [
          87,
          6,
          7
        ],
        "gettingby": [
          88,
          9,
          3
        ],
        "difficulty": [
          88,
          7,
          5
        ]
      },
      "homes": {
        "allresp": [
          87,
          8,
          5
        ],
        "urban": [
          85,
          10,
          5
        ],
        "rural": [
          90,
          6,
          4
        ],
        "owner": [
          94,
          3,
          3
        ],
        "renter": [
          48,
          34,
          18
        ],
        "permission": [
          83,
          14,
          3
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          89,
          8,
          3
        ],
        "multiple": [
          90,
          7,
          3
        ],
        "male": [
          85,
          10,
          6
        ],
        "female": [
          89,
          7,
          4
        ],
        "young": [
          76,
          15,
          8
        ],
        "adult": [
          85,
          10,
          5
        ],
        "old": [
          91,
          5,
          4
        ],
        "fulltime": [
          87,
          9,
          4
        ],
        "parttime": [
          86,
          10,
          4
        ],
        "unemployed": [
          75,
          15,
          11
        ],
        "comfortable": [
          87,
          6,
          7
        ],
        "gettingby": [
          87,
          9,
          4
        ],
        "difficulty": [
          88,
          7,
          5
        ]
      }
    },
    "reasons": {
      "askedtoleave": 69,
      "family": 29,
      "money": 30,
      "death": 15,
      "government": 9,
      "companies": 9,
      "customary": -1
    }
  },
  "GB": {
    "insecurity": {
      "allprop": {
        "allresp": [
          87,
          11,
          1
        ],
        "urban": [
          87,
          11,
          1
        ],
        "rural": [
          88,
          11,
          1
        ],
        "owner": [
          95,
          4,
          1
        ],
        "renter": [
          74,
          25,
          2
        ],
        "permission": [
          79,
          18,
          3
        ],
        "formal": [
          88,
          11,
          1
        ],
        "informal": [
          72,
          28,
          0
        ],
        "nodocs": [
          86,
          13,
          1
        ],
        "sole": [
          88,
          11,
          1
        ],
        "multiple": [
          81,
          14,
          5
        ],
        "male": [
          90,
          9,
          1
        ],
        "female": [
          85,
          14,
          2
        ],
        "young": [
          85,
          13,
          3
        ],
        "adult": [
          84,
          14,
          2
        ],
        "old": [
          93,
          7,
          0
        ],
        "fulltime": [
          92,
          7,
          1
        ],
        "parttime": [
          88,
          9,
          3
        ],
        "unemployed": [
          77,
          19,
          4
        ],
        "comfortable": [
          90,
          10,
          1
        ],
        "gettingby": [
          88,
          10,
          2
        ],
        "difficulty": [
          72,
          23,
          5
        ]
      },
      "homes": {
        "allresp": [
          88,
          11,
          1
        ],
        "urban": [
          89,
          11,
          1
        ],
        "rural": [
          89,
          10,
          1
        ],
        "owner": [
          97,
          3,
          0
        ],
        "renter": [
          74,
          25,
          2
        ],
        "permission": [
          82,
          18,
          0
        ],
        "formal": [
          89,
          10,
          1
        ],
        "informal": [
          72,
          28,
          0
        ],
        "nodocs": [
          86,
          13,
          1
        ],
        "sole": [
          88,
          11,
          1
        ],
        "multiple": [
          91,
          8,
          1
        ],
        "male": [
          92,
          8,
          1
        ],
        "female": [
          85,
          13,
          2
        ],
        "young": [
          87,
          13,
          0
        ],
        "adult": [
          85,
          13,
          2
        ],
        "old": [
          93,
          7,
          0
        ],
        "fulltime": [
          94,
          6,
          1
        ],
        "parttime": [
          88,
          9,
          3
        ],
        "unemployed": [
          80,
          18,
          2
        ],
        "comfortable": [
          90,
          9,
          0
        ],
        "gettingby": [
          90,
          9,
          1
        ],
        "difficulty": [
          72,
          23,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          87,
          2,
          11
        ],
        "urban": [
          85,
          2,
          13
        ],
        "rural": [
          89,
          2,
          9
        ],
        "owner": [
          97,
          0,
          3
        ],
        "renter": [
          98,
          1,
          1
        ],
        "permission": [
          38,
          8,
          54
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          2,
          13
        ],
        "multiple": [
          100,
          0,
          0
        ],
        "male": [
          89,
          2,
          9
        ],
        "female": [
          85,
          1,
          14
        ],
        "young": [
          43,
          7,
          50
        ],
        "adult": [
          89,
          1,
          9
        ],
        "old": [
          97,
          1,
          2
        ],
        "fulltime": [
          95,
          2,
          3
        ],
        "parttime": [
          86,
          1,
          13
        ],
        "unemployed": [
          80,
          4,
          16
        ],
        "comfortable": [
          89,
          1,
          9
        ],
        "gettingby": [
          84,
          1,
          16
        ],
        "difficulty": [
          87,
          7,
          6
        ]
      },
      "homes": {
        "allresp": [
          86,
          2,
          12
        ],
        "urban": [
          84,
          2,
          14
        ],
        "rural": [
          88,
          2,
          10
        ],
        "owner": [
          97,
          0,
          3
        ],
        "renter": [
          98,
          1,
          1
        ],
        "permission": [
          33,
          8,
          59
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          2,
          13
        ],
        "multiple": [
          92,
          0,
          8
        ],
        "male": [
          88,
          2,
          10
        ],
        "female": [
          85,
          1,
          14
        ],
        "young": [
          39,
          7,
          54
        ],
        "adult": [
          89,
          1,
          10
        ],
        "old": [
          96,
          1,
          3
        ],
        "fulltime": [
          94,
          2,
          4
        ],
        "parttime": [
          86,
          1,
          13
        ],
        "unemployed": [
          78,
          4,
          19
        ],
        "comfortable": [
          89,
          1,
          10
        ],
        "gettingby": [
          82,
          1,
          17
        ],
        "difficulty": [
          87,
          7,
          6
        ]
      }
    },
    "reasons": {
      "askedtoleave": 27,
      "family": 16,
      "money": 33,
      "death": 5,
      "government": 11,
      "companies": 3,
      "customary": 4
    }
  },
  "AE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          59,
          38,
          3
        ],
        "urban": [
          59,
          38,
          3
        ],
        "rural": [
          45,
          49,
          6
        ],
        "owner": [
          64,
          33,
          3
        ],
        "renter": [
          61,
          36,
          3
        ],
        "permission": [
          56,
          41,
          3
        ],
        "formal": [
          61,
          37,
          3
        ],
        "informal": [
          68,
          31,
          1
        ],
        "nodocs": [
          45,
          49,
          6
        ],
        "sole": [
          60,
          37,
          3
        ],
        "multiple": [
          53,
          44,
          2
        ],
        "male": [
          55,
          42,
          3
        ],
        "female": [
          70,
          28,
          2
        ],
        "young": [
          61,
          38,
          2
        ],
        "adult": [
          57,
          39,
          3
        ],
        "old": [
          85,
          15,
          0
        ],
        "fulltime": [
          55,
          42,
          4
        ],
        "parttime": [
          57,
          39,
          4
        ],
        "unemployed": [
          67,
          32,
          2
        ],
        "comfortable": [
          66,
          32,
          2
        ],
        "gettingby": [
          67,
          31,
          2
        ],
        "difficulty": [
          40,
          58,
          3
        ]
      },
      "homes": {
        "allresp": [
          61,
          36,
          3
        ],
        "urban": [
          61,
          36,
          3
        ],
        "rural": [
          50,
          44,
          6
        ],
        "owner": [
          67,
          30,
          3
        ],
        "renter": [
          63,
          35,
          3
        ],
        "permission": [
          59,
          39,
          3
        ],
        "formal": [
          63,
          34,
          3
        ],
        "informal": [
          71,
          29,
          1
        ],
        "nodocs": [
          45,
          49,
          6
        ],
        "sole": [
          60,
          37,
          3
        ],
        "multiple": [
          64,
          34,
          2
        ],
        "male": [
          57,
          39,
          3
        ],
        "female": [
          71,
          27,
          2
        ],
        "young": [
          63,
          35,
          2
        ],
        "adult": [
          59,
          37,
          3
        ],
        "old": [
          85,
          15,
          0
        ],
        "fulltime": [
          57,
          39,
          4
        ],
        "parttime": [
          58,
          38,
          4
        ],
        "unemployed": [
          67,
          31,
          2
        ],
        "comfortable": [
          69,
          29,
          2
        ],
        "gettingby": [
          69,
          29,
          2
        ],
        "difficulty": [
          42,
          55,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          78,
          6,
          15
        ],
        "urban": [
          78,
          6,
          15
        ],
        "rural": [
          75,
          12,
          13
        ],
        "owner": [
          90,
          4,
          6
        ],
        "renter": [
          83,
          4,
          13
        ],
        "permission": [
          75,
          9,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          7,
          18
        ],
        "multiple": [
          95,
          3,
          3
        ],
        "male": [
          77,
          6,
          17
        ],
        "female": [
          82,
          6,
          12
        ],
        "young": [
          81,
          8,
          11
        ],
        "adult": [
          78,
          6,
          16
        ],
        "old": [
          70,
          10,
          19
        ],
        "fulltime": [
          76,
          7,
          17
        ],
        "parttime": [
          87,
          4,
          9
        ],
        "unemployed": [
          84,
          4,
          12
        ],
        "comfortable": [
          81,
          6,
          13
        ],
        "gettingby": [
          85,
          6,
          9
        ],
        "difficulty": [
          70,
          7,
          23
        ]
      },
      "homes": {
        "allresp": [
          78,
          7,
          16
        ],
        "urban": [
          78,
          6,
          16
        ],
        "rural": [
          71,
          14,
          16
        ],
        "owner": [
          90,
          4,
          6
        ],
        "renter": [
          83,
          4,
          13
        ],
        "permission": [
          74,
          9,
          17
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          75,
          7,
          18
        ],
        "multiple": [
          91,
          4,
          5
        ],
        "male": [
          76,
          7,
          17
        ],
        "female": [
          81,
          7,
          12
        ],
        "young": [
          80,
          9,
          12
        ],
        "adult": [
          78,
          6,
          16
        ],
        "old": [
          65,
          10,
          24
        ],
        "fulltime": [
          75,
          8,
          17
        ],
        "parttime": [
          87,
          4,
          9
        ],
        "unemployed": [
          83,
          4,
          13
        ],
        "comfortable": [
          80,
          6,
          14
        ],
        "gettingby": [
          85,
          6,
          10
        ],
        "difficulty": [
          69,
          8,
          23
        ]
      }
    },
    "reasons": {
      "askedtoleave": 55,
      "family": 24,
      "money": 47,
      "death": 31,
      "government": 31,
      "companies": 30,
      "customary": -1
    }
  },
  "US": {
    "insecurity": {
      "allprop": {
        "allresp": [
          86,
          13,
          0
        ],
        "urban": [
          86,
          13,
          1
        ],
        "rural": [
          86,
          14,
          0
        ],
        "owner": [
          93,
          7,
          0
        ],
        "renter": [
          81,
          19,
          0
        ],
        "permission": [
          78,
          21,
          2
        ],
        "formal": [
          87,
          12,
          1
        ],
        "informal": [
          78,
          22,
          0
        ],
        "nodocs": [
          67,
          33,
          0
        ],
        "sole": [
          85,
          14,
          0
        ],
        "multiple": [
          89,
          11,
          0
        ],
        "male": [
          86,
          13,
          1
        ],
        "female": [
          86,
          14,
          0
        ],
        "young": [
          77,
          23,
          0
        ],
        "adult": [
          84,
          15,
          1
        ],
        "old": [
          91,
          9,
          0
        ],
        "fulltime": [
          86,
          14,
          1
        ],
        "parttime": [
          85,
          15,
          0
        ],
        "unemployed": [
          81,
          19,
          0
        ],
        "comfortable": [
          93,
          6,
          0
        ],
        "gettingby": [
          86,
          14,
          0
        ],
        "difficulty": [
          63,
          35,
          3
        ]
      },
      "homes": {
        "allresp": [
          87,
          13,
          0
        ],
        "urban": [
          87,
          13,
          1
        ],
        "rural": [
          87,
          13,
          0
        ],
        "owner": [
          94,
          6,
          0
        ],
        "renter": [
          82,
          18,
          0
        ],
        "permission": [
          78,
          21,
          2
        ],
        "formal": [
          88,
          11,
          1
        ],
        "informal": [
          78,
          22,
          0
        ],
        "nodocs": [
          71,
          29,
          0
        ],
        "sole": [
          85,
          14,
          0
        ],
        "multiple": [
          93,
          7,
          0
        ],
        "male": [
          87,
          13,
          1
        ],
        "female": [
          87,
          13,
          0
        ],
        "young": [
          78,
          22,
          0
        ],
        "adult": [
          85,
          14,
          1
        ],
        "old": [
          91,
          8,
          0
        ],
        "fulltime": [
          87,
          12,
          1
        ],
        "parttime": [
          86,
          14,
          0
        ],
        "unemployed": [
          81,
          19,
          0
        ],
        "comfortable": [
          94,
          6,
          0
        ],
        "gettingby": [
          87,
          13,
          0
        ],
        "difficulty": [
          63,
          35,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          89,
          8,
          3
        ],
        "urban": [
          89,
          8,
          3
        ],
        "rural": [
          91,
          5,
          4
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          81,
          16,
          3
        ],
        "permission": [
          85,
          10,
          5
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          3
        ],
        "multiple": [
          99,
          0,
          1
        ],
        "male": [
          88,
          8,
          3
        ],
        "female": [
          91,
          7,
          2
        ],
        "young": [
          89,
          6,
          5
        ],
        "adult": [
          86,
          11,
          3
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          89,
          9,
          2
        ],
        "parttime": [
          92,
          4,
          4
        ],
        "unemployed": [
          89,
          4,
          6
        ],
        "comfortable": [
          93,
          5,
          2
        ],
        "gettingby": [
          88,
          8,
          4
        ],
        "difficulty": [
          82,
          16,
          2
        ]
      },
      "homes": {
        "allresp": [
          88,
          8,
          3
        ],
        "urban": [
          87,
          9,
          3
        ],
        "rural": [
          91,
          6,
          4
        ],
        "owner": [
          99,
          1,
          0
        ],
        "renter": [
          79,
          18,
          4
        ],
        "permission": [
          81,
          11,
          8
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          87,
          9,
          3
        ],
        "multiple": [
          92,
          4,
          4
        ],
        "male": [
          87,
          9,
          4
        ],
        "female": [
          89,
          8,
          3
        ],
        "young": [
          85,
          7,
          8
        ],
        "adult": [
          85,
          12,
          4
        ],
        "old": [
          93,
          5,
          2
        ],
        "fulltime": [
          88,
          10,
          3
        ],
        "parttime": [
          92,
          4,
          4
        ],
        "unemployed": [
          89,
          4,
          6
        ],
        "comfortable": [
          91,
          6,
          3
        ],
        "gettingby": [
          87,
          9,
          4
        ],
        "difficulty": [
          81,
          17,
          2
        ]
      }
    },
    "reasons": {
      "askedtoleave": 68,
      "family": 21,
      "money": 47,
      "death": 34,
      "government": 19,
      "companies": 22,
      "customary": -1
    }
  },
  "UY": {
    "insecurity": {
      "allprop": {
        "allresp": [
          80,
          15,
          5
        ],
        "urban": [
          80,
          15,
          5
        ],
        "rural": [
          78,
          9,
          13
        ],
        "owner": [
          89,
          5,
          5
        ],
        "renter": [
          73,
          22,
          5
        ],
        "permission": [
          74,
          21,
          5
        ],
        "formal": [
          82,
          13,
          4
        ],
        "informal": [
          70,
          22,
          9
        ],
        "nodocs": [
          51,
          30,
          19
        ],
        "sole": [
          80,
          14,
          5
        ],
        "multiple": [
          77,
          18,
          4
        ],
        "male": [
          79,
          15,
          6
        ],
        "female": [
          80,
          15,
          5
        ],
        "young": [
          73,
          23,
          4
        ],
        "adult": [
          78,
          16,
          5
        ],
        "old": [
          84,
          9,
          6
        ],
        "fulltime": [
          80,
          14,
          6
        ],
        "parttime": [
          75,
          21,
          4
        ],
        "unemployed": [
          76,
          19,
          5
        ],
        "comfortable": [
          91,
          5,
          4
        ],
        "gettingby": [
          83,
          12,
          5
        ],
        "difficulty": [
          63,
          32,
          5
        ]
      },
      "homes": {
        "allresp": [
          80,
          14,
          5
        ],
        "urban": [
          81,
          15,
          5
        ],
        "rural": [
          78,
          9,
          13
        ],
        "owner": [
          90,
          5,
          5
        ],
        "renter": [
          73,
          22,
          5
        ],
        "permission": [
          76,
          20,
          5
        ],
        "formal": [
          83,
          13,
          4
        ],
        "informal": [
          71,
          21,
          7
        ],
        "nodocs": [
          54,
          28,
          19
        ],
        "sole": [
          80,
          14,
          5
        ],
        "multiple": [
          83,
          14,
          4
        ],
        "male": [
          80,
          14,
          6
        ],
        "female": [
          81,
          14,
          5
        ],
        "young": [
          73,
          23,
          4
        ],
        "adult": [
          79,
          15,
          5
        ],
        "old": [
          85,
          9,
          6
        ],
        "fulltime": [
          81,
          14,
          6
        ],
        "parttime": [
          77,
          19,
          4
        ],
        "unemployed": [
          76,
          19,
          5
        ],
        "comfortable": [
          92,
          5,
          4
        ],
        "gettingby": [
          83,
          11,
          5
        ],
        "difficulty": [
          65,
          30,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          85,
          11,
          4
        ],
        "urban": [
          85,
          11,
          4
        ],
        "rural": [
          85,
          9,
          6
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          80,
          15,
          6
        ],
        "permission": [
          83,
          13,
          3
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          13,
          4
        ],
        "multiple": [
          99,
          0,
          1
        ],
        "male": [
          86,
          11,
          3
        ],
        "female": [
          85,
          11,
          4
        ],
        "young": [
          84,
          11,
          5
        ],
        "adult": [
          84,
          12,
          4
        ],
        "old": [
          89,
          9,
          3
        ],
        "fulltime": [
          83,
          13,
          4
        ],
        "parttime": [
          91,
          6,
          2
        ],
        "unemployed": [
          81,
          11,
          7
        ],
        "comfortable": [
          92,
          6,
          2
        ],
        "gettingby": [
          86,
          11,
          3
        ],
        "difficulty": [
          78,
          15,
          7
        ]
      },
      "homes": {
        "allresp": [
          83,
          13,
          4
        ],
        "urban": [
          83,
          13,
          4
        ],
        "rural": [
          85,
          9,
          6
        ],
        "owner": [
          93,
          6,
          1
        ],
        "renter": [
          77,
          17,
          6
        ],
        "permission": [
          81,
          16,
          3
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          83,
          13,
          4
        ],
        "multiple": [
          86,
          13,
          1
        ],
        "male": [
          83,
          13,
          3
        ],
        "female": [
          83,
          12,
          4
        ],
        "young": [
          84,
          11,
          5
        ],
        "adult": [
          82,
          14,
          4
        ],
        "old": [
          86,
          11,
          3
        ],
        "fulltime": [
          81,
          15,
          4
        ],
        "parttime": [
          90,
          8,
          2
        ],
        "unemployed": [
          81,
          11,
          7
        ],
        "comfortable": [
          89,
          9,
          2
        ],
        "gettingby": [
          85,
          12,
          3
        ],
        "difficulty": [
          76,
          17,
          7
        ]
      }
    },
    "reasons": {
      "askedtoleave": 72,
      "family": 43,
      "money": 44,
      "death": 30,
      "government": 15,
      "companies": 11,
      "customary": -1
    }
  },
  "UZ": {
    "insecurity": {
      "allprop": {
        "allresp": [
          91,
          6,
          4
        ],
        "urban": [
          87,
          7,
          6
        ],
        "rural": [
          93,
          5,
          2
        ],
        "owner": [
          92,
          5,
          2
        ],
        "renter": [
          50,
          22,
          28
        ],
        "permission": [
          89,
          5,
          6
        ],
        "formal": [
          91,
          5,
          3
        ],
        "informal": [
          94,
          3,
          3
        ],
        "nodocs": [
          60,
          18,
          23
        ],
        "sole": [
          92,
          4,
          3
        ],
        "multiple": [
          83,
          13,
          4
        ],
        "male": [
          90,
          7,
          3
        ],
        "female": [
          92,
          4,
          4
        ],
        "young": [
          94,
          4,
          2
        ],
        "adult": [
          89,
          7,
          4
        ],
        "old": [
          92,
          2,
          6
        ],
        "fulltime": [
          91,
          8,
          1
        ],
        "parttime": [
          87,
          7,
          7
        ],
        "unemployed": [
          92,
          2,
          6
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          89,
          9,
          2
        ],
        "difficulty": [
          85,
          11,
          5
        ]
      },
      "homes": {
        "allresp": [
          92,
          5,
          4
        ],
        "urban": [
          88,
          6,
          6
        ],
        "rural": [
          94,
          4,
          2
        ],
        "owner": [
          94,
          5,
          2
        ],
        "renter": [
          50,
          22,
          28
        ],
        "permission": [
          89,
          5,
          6
        ],
        "formal": [
          92,
          5,
          3
        ],
        "informal": [
          95,
          3,
          2
        ],
        "nodocs": [
          58,
          20,
          22
        ],
        "sole": [
          92,
          4,
          3
        ],
        "multiple": [
          89,
          8,
          2
        ],
        "male": [
          90,
          6,
          3
        ],
        "female": [
          93,
          4,
          4
        ],
        "young": [
          94,
          4,
          2
        ],
        "adult": [
          91,
          6,
          3
        ],
        "old": [
          92,
          2,
          6
        ],
        "fulltime": [
          92,
          7,
          1
        ],
        "parttime": [
          89,
          5,
          6
        ],
        "unemployed": [
          92,
          2,
          6
        ],
        "comfortable": [
          95,
          2,
          3
        ],
        "gettingby": [
          90,
          8,
          2
        ],
        "difficulty": [
          86,
          9,
          4
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          93,
          4,
          2
        ],
        "urban": [
          95,
          2,
          3
        ],
        "rural": [
          92,
          6,
          2
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          31,
          0,
          69
        ],
        "permission": [
          94,
          2,
          3
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          94,
          5,
          2
        ],
        "multiple": [
          96,
          3,
          1
        ],
        "male": [
          93,
          4,
          2
        ],
        "female": [
          94,
          4,
          2
        ],
        "young": [
          96,
          2,
          2
        ],
        "adult": [
          92,
          5,
          3
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          93,
          5,
          2
        ],
        "parttime": [
          94,
          1,
          5
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          96,
          3,
          1
        ],
        "gettingby": [
          94,
          1,
          5
        ],
        "difficulty": [
          90,
          6,
          3
        ]
      },
      "homes": {
        "allresp": [
          93,
          4,
          2
        ],
        "urban": [
          95,
          2,
          3
        ],
        "rural": [
          92,
          6,
          2
        ],
        "owner": [
          94,
          5,
          1
        ],
        "renter": [
          25,
          0,
          75
        ],
        "permission": [
          94,
          2,
          3
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          94,
          5,
          2
        ],
        "multiple": [
          95,
          3,
          2
        ],
        "male": [
          93,
          4,
          3
        ],
        "female": [
          93,
          4,
          2
        ],
        "young": [
          96,
          2,
          2
        ],
        "adult": [
          92,
          5,
          3
        ],
        "old": [
          94,
          4,
          2
        ],
        "fulltime": [
          93,
          5,
          2
        ],
        "parttime": [
          93,
          1,
          6
        ],
        "unemployed": [
          100,
          0,
          0
        ],
        "comfortable": [
          95,
          4,
          1
        ],
        "gettingby": [
          94,
          1,
          5
        ],
        "difficulty": [
          90,
          6,
          3
        ]
      }
    },
    "reasons": {
      "askedtoleave": 42,
      "family": 23,
      "money": 13,
      "death": 14,
      "government": 18,
      "companies": 8,
      "customary": -1
    }
  },
  "VE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          72,
          26,
          2
        ],
        "urban": [
          72,
          26,
          2
        ],
        "rural": [
          69,
          24,
          7
        ],
        "owner": [
          82,
          16,
          2
        ],
        "renter": [
          55,
          43,
          2
        ],
        "permission": [
          65,
          34,
          1
        ],
        "formal": [
          75,
          23,
          1
        ],
        "informal": [
          66,
          30,
          4
        ],
        "nodocs": [
          45,
          51,
          5
        ],
        "sole": [
          74,
          24,
          2
        ],
        "multiple": [
          64,
          36,
          0
        ],
        "male": [
          69,
          29,
          2
        ],
        "female": [
          75,
          24,
          1
        ],
        "young": [
          67,
          32,
          1
        ],
        "adult": [
          72,
          27,
          1
        ],
        "old": [
          76,
          21,
          3
        ],
        "fulltime": [
          72,
          26,
          2
        ],
        "parttime": [
          72,
          26,
          2
        ],
        "unemployed": [
          65,
          31,
          3
        ],
        "comfortable": [
          84,
          15,
          1
        ],
        "gettingby": [
          79,
          19,
          2
        ],
        "difficulty": [
          70,
          29,
          1
        ]
      },
      "homes": {
        "allresp": [
          74,
          25,
          2
        ],
        "urban": [
          74,
          25,
          2
        ],
        "rural": [
          72,
          21,
          7
        ],
        "owner": [
          83,
          14,
          2
        ],
        "renter": [
          56,
          42,
          2
        ],
        "permission": [
          66,
          32,
          1
        ],
        "formal": [
          77,
          22,
          1
        ],
        "informal": [
          67,
          30,
          4
        ],
        "nodocs": [
          47,
          49,
          4
        ],
        "sole": [
          74,
          24,
          2
        ],
        "multiple": [
          74,
          26,
          0
        ],
        "male": [
          71,
          27,
          2
        ],
        "female": [
          76,
          23,
          1
        ],
        "young": [
          71,
          28,
          1
        ],
        "adult": [
          73,
          26,
          1
        ],
        "old": [
          77,
          20,
          3
        ],
        "fulltime": [
          73,
          25,
          2
        ],
        "parttime": [
          73,
          25,
          2
        ],
        "unemployed": [
          71,
          26,
          3
        ],
        "comfortable": [
          86,
          13,
          1
        ],
        "gettingby": [
          81,
          17,
          2
        ],
        "difficulty": [
          71,
          28,
          1
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          86,
          5,
          9
        ],
        "urban": [
          86,
          6,
          9
        ],
        "rural": [
          84,
          2,
          14
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          57,
          21,
          22
        ],
        "permission": [
          85,
          6,
          9
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          6,
          9
        ],
        "multiple": [
          94,
          1,
          4
        ],
        "male": [
          84,
          6,
          10
        ],
        "female": [
          87,
          5,
          7
        ],
        "young": [
          88,
          3,
          8
        ],
        "adult": [
          84,
          6,
          10
        ],
        "old": [
          88,
          6,
          6
        ],
        "fulltime": [
          87,
          5,
          8
        ],
        "parttime": [
          85,
          7,
          9
        ],
        "unemployed": [
          80,
          4,
          16
        ],
        "comfortable": [
          92,
          1,
          7
        ],
        "gettingby": [
          87,
          6,
          7
        ],
        "difficulty": [
          85,
          6,
          9
        ]
      },
      "homes": {
        "allresp": [
          85,
          6,
          9
        ],
        "urban": [
          85,
          6,
          9
        ],
        "rural": [
          82,
          2,
          16
        ],
        "owner": [
          94,
          2,
          4
        ],
        "renter": [
          51,
          24,
          25
        ],
        "permission": [
          84,
          6,
          10
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          85,
          6,
          9
        ],
        "multiple": [
          87,
          3,
          9
        ],
        "male": [
          83,
          6,
          11
        ],
        "female": [
          86,
          6,
          8
        ],
        "young": [
          87,
          3,
          9
        ],
        "adult": [
          83,
          6,
          11
        ],
        "old": [
          87,
          7,
          6
        ],
        "fulltime": [
          85,
          5,
          9
        ],
        "parttime": [
          84,
          7,
          9
        ],
        "unemployed": [
          79,
          3,
          18
        ],
        "comfortable": [
          92,
          1,
          7
        ],
        "gettingby": [
          87,
          6,
          7
        ],
        "difficulty": [
          84,
          6,
          10
        ]
      }
    },
    "reasons": {
      "askedtoleave": 75,
      "family": 47,
      "money": 49,
      "death": 32,
      "government": 20,
      "companies": 9,
      "customary": 12
    }
  },
  "VN": {
    "insecurity": {
      "allprop": {
        "allresp": [
          82,
          10,
          8
        ],
        "urban": [
          78,
          13,
          9
        ],
        "rural": [
          84,
          8,
          7
        ],
        "owner": [
          87,
          7,
          6
        ],
        "renter": [
          47,
          39,
          15
        ],
        "permission": [
          79,
          11,
          10
        ],
        "formal": [
          82,
          11,
          7
        ],
        "informal": [
          88,
          6,
          6
        ],
        "nodocs": [
          79,
          8,
          13
        ],
        "sole": [
          83,
          10,
          7
        ],
        "multiple": [
          76,
          13,
          11
        ],
        "male": [
          83,
          10,
          7
        ],
        "female": [
          81,
          10,
          9
        ],
        "young": [
          76,
          13,
          11
        ],
        "adult": [
          84,
          10,
          6
        ],
        "old": [
          82,
          8,
          11
        ],
        "fulltime": [
          81,
          11,
          8
        ],
        "parttime": [
          79,
          17,
          4
        ],
        "unemployed": [
          71,
          15,
          14
        ],
        "comfortable": [
          78,
          11,
          10
        ],
        "gettingby": [
          84,
          9,
          7
        ],
        "difficulty": [
          75,
          14,
          11
        ]
      },
      "homes": {
        "allresp": [
          83,
          9,
          8
        ],
        "urban": [
          79,
          12,
          9
        ],
        "rural": [
          86,
          7,
          7
        ],
        "owner": [
          88,
          7,
          6
        ],
        "renter": [
          48,
          39,
          14
        ],
        "permission": [
          81,
          9,
          9
        ],
        "formal": [
          83,
          9,
          7
        ],
        "informal": [
          91,
          6,
          3
        ],
        "nodocs": [
          79,
          9,
          12
        ],
        "sole": [
          83,
          10,
          7
        ],
        "multiple": [
          85,
          6,
          9
        ],
        "male": [
          84,
          9,
          7
        ],
        "female": [
          82,
          9,
          8
        ],
        "young": [
          78,
          12,
          10
        ],
        "adult": [
          85,
          9,
          6
        ],
        "old": [
          83,
          7,
          10
        ],
        "fulltime": [
          82,
          10,
          8
        ],
        "parttime": [
          79,
          17,
          4
        ],
        "unemployed": [
          71,
          15,
          14
        ],
        "comfortable": [
          79,
          11,
          10
        ],
        "gettingby": [
          85,
          8,
          6
        ],
        "difficulty": [
          77,
          13,
          11
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          82,
          7,
          11
        ],
        "urban": [
          85,
          4,
          11
        ],
        "rural": [
          80,
          9,
          11
        ],
        "owner": [
          99,
          0,
          1
        ],
        "renter": [
          86,
          6,
          8
        ],
        "permission": [
          59,
          16,
          25
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          7,
          12
        ],
        "multiple": [
          89,
          7,
          4
        ],
        "male": [
          86,
          7,
          7
        ],
        "female": [
          78,
          7,
          15
        ],
        "young": [
          64,
          13,
          23
        ],
        "adult": [
          86,
          6,
          8
        ],
        "old": [
          87,
          3,
          10
        ],
        "fulltime": [
          82,
          6,
          12
        ],
        "parttime": [
          82,
          6,
          12
        ],
        "unemployed": [
          84,
          0,
          16
        ],
        "comfortable": [
          78,
          8,
          14
        ],
        "gettingby": [
          82,
          7,
          11
        ],
        "difficulty": [
          85,
          6,
          9
        ]
      },
      "homes": {
        "allresp": [
          80,
          7,
          13
        ],
        "urban": [
          82,
          4,
          13
        ],
        "rural": [
          79,
          9,
          13
        ],
        "owner": [
          99,
          0,
          1
        ],
        "renter": [
          85,
          6,
          8
        ],
        "permission": [
          54,
          16,
          30
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          81,
          7,
          12
        ],
        "multiple": [
          76,
          8,
          16
        ],
        "male": [
          85,
          7,
          8
        ],
        "female": [
          75,
          7,
          17
        ],
        "young": [
          60,
          13,
          28
        ],
        "adult": [
          85,
          6,
          9
        ],
        "old": [
          86,
          3,
          11
        ],
        "fulltime": [
          81,
          6,
          13
        ],
        "parttime": [
          80,
          6,
          14
        ],
        "unemployed": [
          81,
          0,
          19
        ],
        "comfortable": [
          75,
          9,
          16
        ],
        "gettingby": [
          80,
          7,
          13
        ],
        "difficulty": [
          85,
          6,
          9
        ]
      }
    },
    "reasons": {
      "askedtoleave": 13,
      "family": 18,
      "money": 8,
      "death": 8,
      "government": 14,
      "companies": 3,
      "customary": 4
    }
  },
  "YE": {
    "insecurity": {
      "allprop": {
        "allresp": [
          64,
          26,
          10
        ],
        "urban": [
          55,
          33,
          12
        ],
        "rural": [
          68,
          23,
          10
        ],
        "owner": [
          82,
          12,
          6
        ],
        "renter": [
          20,
          67,
          13
        ],
        "permission": [
          62,
          26,
          12
        ],
        "formal": [
          70,
          20,
          10
        ],
        "informal": [
          46,
          36,
          18
        ],
        "nodocs": [
          37,
          52,
          11
        ],
        "sole": [
          66,
          27,
          8
        ],
        "multiple": [
          62,
          27,
          11
        ],
        "male": [
          68,
          24,
          8
        ],
        "female": [
          60,
          28,
          12
        ],
        "young": [
          66,
          24,
          10
        ],
        "adult": [
          59,
          31,
          11
        ],
        "old": [
          78,
          14,
          8
        ],
        "fulltime": [
          65,
          28,
          7
        ],
        "parttime": [
          68,
          26,
          6
        ],
        "unemployed": [
          70,
          24,
          6
        ],
        "comfortable": [
          72,
          17,
          11
        ],
        "gettingby": [
          64,
          27,
          9
        ],
        "difficulty": [
          63,
          27,
          10
        ]
      },
      "homes": {
        "allresp": [
          68,
          23,
          9
        ],
        "urban": [
          60,
          29,
          11
        ],
        "rural": [
          71,
          20,
          8
        ],
        "owner": [
          88,
          8,
          4
        ],
        "renter": [
          23,
          64,
          13
        ],
        "permission": [
          64,
          24,
          12
        ],
        "formal": [
          75,
          16,
          9
        ],
        "informal": [
          48,
          36,
          16
        ],
        "nodocs": [
          40,
          50,
          10
        ],
        "sole": [
          66,
          27,
          8
        ],
        "multiple": [
          74,
          18,
          8
        ],
        "male": [
          72,
          21,
          7
        ],
        "female": [
          64,
          25,
          12
        ],
        "young": [
          71,
          21,
          8
        ],
        "adult": [
          61,
          27,
          11
        ],
        "old": [
          84,
          11,
          5
        ],
        "fulltime": [
          67,
          26,
          7
        ],
        "parttime": [
          73,
          20,
          6
        ],
        "unemployed": [
          74,
          22,
          3
        ],
        "comfortable": [
          73,
          16,
          11
        ],
        "gettingby": [
          69,
          22,
          9
        ],
        "difficulty": [
          67,
          25,
          9
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          80,
          5,
          15
        ],
        "urban": [
          77,
          6,
          17
        ],
        "rural": [
          81,
          5,
          14
        ],
        "owner": [
          90,
          4,
          6
        ],
        "renter": [
          70,
          4,
          26
        ],
        "permission": [
          77,
          6,
          16
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          70,
          8,
          22
        ],
        "multiple": [
          97,
          0,
          3
        ],
        "male": [
          87,
          3,
          10
        ],
        "female": [
          74,
          7,
          19
        ],
        "young": [
          81,
          6,
          13
        ],
        "adult": [
          77,
          6,
          17
        ],
        "old": [
          90,
          1,
          9
        ],
        "fulltime": [
          91,
          2,
          7
        ],
        "parttime": [
          81,
          5,
          13
        ],
        "unemployed": [
          82,
          7,
          11
        ],
        "comfortable": [
          76,
          3,
          22
        ],
        "gettingby": [
          79,
          5,
          15
        ],
        "difficulty": [
          81,
          5,
          14
        ]
      },
      "homes": {
        "allresp": [
          77,
          6,
          17
        ],
        "urban": [
          75,
          6,
          19
        ],
        "rural": [
          78,
          6,
          16
        ],
        "owner": [
          88,
          4,
          8
        ],
        "renter": [
          68,
          5,
          27
        ],
        "permission": [
          75,
          7,
          18
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          70,
          8,
          22
        ],
        "multiple": [
          89,
          2,
          9
        ],
        "male": [
          83,
          4,
          13
        ],
        "female": [
          72,
          8,
          20
        ],
        "young": [
          76,
          7,
          17
        ],
        "adult": [
          74,
          7,
          19
        ],
        "old": [
          89,
          2,
          10
        ],
        "fulltime": [
          86,
          3,
          11
        ],
        "parttime": [
          81,
          6,
          14
        ],
        "unemployed": [
          74,
          9,
          17
        ],
        "comfortable": [
          73,
          4,
          23
        ],
        "gettingby": [
          76,
          7,
          16
        ],
        "difficulty": [
          78,
          5,
          16
        ]
      }
    },
    "reasons": {
      "askedtoleave": 75,
      "family": 49,
      "money": 48,
      "death": 29,
      "government": 5,
      "companies": 4,
      "customary": 13
    }
  },
  "ZM": {
    "insecurity": {
      "allprop": {
        "allresp": [
          70,
          27,
          3
        ],
        "urban": [
          64,
          31,
          5
        ],
        "rural": [
          73,
          24,
          2
        ],
        "owner": [
          78,
          19,
          3
        ],
        "renter": [
          39,
          57,
          4
        ],
        "permission": [
          70,
          27,
          3
        ],
        "formal": [
          66,
          31,
          3
        ],
        "informal": [
          78,
          20,
          2
        ],
        "nodocs": [
          70,
          27,
          4
        ],
        "sole": [
          72,
          24,
          3
        ],
        "multiple": [
          55,
          41,
          4
        ],
        "male": [
          68,
          28,
          3
        ],
        "female": [
          71,
          26,
          3
        ],
        "young": [
          69,
          28,
          3
        ],
        "adult": [
          69,
          28,
          3
        ],
        "old": [
          79,
          16,
          5
        ],
        "fulltime": [
          60,
          35,
          5
        ],
        "parttime": [
          51,
          43,
          6
        ],
        "unemployed": [
          72,
          24,
          4
        ],
        "comfortable": [
          78,
          19,
          3
        ],
        "gettingby": [
          70,
          24,
          5
        ],
        "difficulty": [
          69,
          28,
          3
        ]
      },
      "homes": {
        "allresp": [
          72,
          24,
          3
        ],
        "urban": [
          67,
          28,
          5
        ],
        "rural": [
          76,
          22,
          2
        ],
        "owner": [
          80,
          17,
          3
        ],
        "renter": [
          42,
          51,
          7
        ],
        "permission": [
          73,
          24,
          3
        ],
        "formal": [
          73,
          23,
          4
        ],
        "informal": [
          81,
          16,
          2
        ],
        "nodocs": [
          70,
          27,
          3
        ],
        "sole": [
          72,
          24,
          3
        ],
        "multiple": [
          72,
          25,
          3
        ],
        "male": [
          71,
          25,
          4
        ],
        "female": [
          73,
          24,
          3
        ],
        "young": [
          71,
          26,
          3
        ],
        "adult": [
          71,
          26,
          3
        ],
        "old": [
          81,
          14,
          5
        ],
        "fulltime": [
          62,
          32,
          6
        ],
        "parttime": [
          55,
          39,
          6
        ],
        "unemployed": [
          74,
          22,
          4
        ],
        "comfortable": [
          79,
          19,
          2
        ],
        "gettingby": [
          74,
          21,
          4
        ],
        "difficulty": [
          71,
          26,
          3
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          25,
          13,
          62
        ],
        "urban": [
          41,
          8,
          52
        ],
        "rural": [
          15,
          16,
          69
        ],
        "owner": [
          23,
          15,
          62
        ],
        "renter": [
          24,
          10,
          66
        ],
        "permission": [
          28,
          13,
          59
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          19,
          12,
          69
        ],
        "multiple": [
          59,
          14,
          28
        ],
        "male": [
          27,
          12,
          62
        ],
        "female": [
          24,
          14,
          63
        ],
        "young": [
          23,
          11,
          66
        ],
        "adult": [
          24,
          14,
          62
        ],
        "old": [
          35,
          13,
          52
        ],
        "fulltime": [
          42,
          10,
          49
        ],
        "parttime": [
          36,
          6,
          58
        ],
        "unemployed": [
          36,
          13,
          51
        ],
        "comfortable": [
          41,
          11,
          48
        ],
        "gettingby": [
          32,
          7,
          61
        ],
        "difficulty": [
          22,
          14,
          64
        ]
      },
      "homes": {
        "allresp": [
          21,
          13,
          66
        ],
        "urban": [
          34,
          8,
          58
        ],
        "rural": [
          13,
          16,
          72
        ],
        "owner": [
          22,
          15,
          63
        ],
        "renter": [
          14,
          8,
          77
        ],
        "permission": [
          26,
          13,
          61
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          19,
          12,
          69
        ],
        "multiple": [
          32,
          13,
          55
        ],
        "male": [
          24,
          12,
          64
        ],
        "female": [
          18,
          13,
          69
        ],
        "young": [
          18,
          11,
          71
        ],
        "adult": [
          20,
          14,
          66
        ],
        "old": [
          34,
          12,
          54
        ],
        "fulltime": [
          33,
          10,
          57
        ],
        "parttime": [
          32,
          6,
          62
        ],
        "unemployed": [
          30,
          13,
          57
        ],
        "comfortable": [
          32,
          11,
          57
        ],
        "gettingby": [
          23,
          7,
          69
        ],
        "difficulty": [
          19,
          14,
          67
        ]
      }
    },
    "reasons": {
      "askedtoleave": 35,
      "family": 12,
      "money": 12,
      "death": 6,
      "government": 11,
      "companies": 5,
      "customary": 12
    }
  },
  "ZW": {
    "insecurity": {
      "allprop": {
        "allresp": [
          67,
          27,
          5
        ],
        "urban": [
          57,
          39,
          5
        ],
        "rural": [
          75,
          20,
          6
        ],
        "owner": [
          87,
          10,
          3
        ],
        "renter": [
          46,
          50,
          5
        ],
        "permission": [
          62,
          31,
          7
        ],
        "formal": [
          68,
          27,
          5
        ],
        "informal": [
          67,
          28,
          5
        ],
        "nodocs": [
          67,
          28,
          5
        ],
        "sole": [
          70,
          25,
          4
        ],
        "multiple": [
          55,
          38,
          8
        ],
        "male": [
          69,
          26,
          5
        ],
        "female": [
          66,
          29,
          6
        ],
        "young": [
          63,
          30,
          6
        ],
        "adult": [
          66,
          30,
          4
        ],
        "old": [
          84,
          9,
          7
        ],
        "fulltime": [
          63,
          31,
          6
        ],
        "parttime": [
          67,
          29,
          4
        ],
        "unemployed": [
          68,
          27,
          5
        ],
        "comfortable": [
          52,
          38,
          11
        ],
        "gettingby": [
          65,
          30,
          6
        ],
        "difficulty": [
          68,
          27,
          5
        ]
      },
      "homes": {
        "allresp": [
          70,
          25,
          5
        ],
        "urban": [
          60,
          35,
          4
        ],
        "rural": [
          77,
          18,
          5
        ],
        "owner": [
          89,
          8,
          3
        ],
        "renter": [
          47,
          48,
          5
        ],
        "permission": [
          66,
          27,
          6
        ],
        "formal": [
          74,
          21,
          5
        ],
        "informal": [
          68,
          27,
          5
        ],
        "nodocs": [
          67,
          28,
          5
        ],
        "sole": [
          70,
          25,
          4
        ],
        "multiple": [
          71,
          24,
          6
        ],
        "male": [
          70,
          25,
          5
        ],
        "female": [
          70,
          25,
          5
        ],
        "young": [
          66,
          28,
          6
        ],
        "adult": [
          69,
          27,
          4
        ],
        "old": [
          85,
          8,
          7
        ],
        "fulltime": [
          67,
          27,
          6
        ],
        "parttime": [
          69,
          28,
          4
        ],
        "unemployed": [
          69,
          26,
          5
        ],
        "comfortable": [
          52,
          38,
          11
        ],
        "gettingby": [
          68,
          27,
          5
        ],
        "difficulty": [
          71,
          24,
          5
        ]
      }
    },
    "docs": {
      "allprop": {
        "allresp": [
          41,
          17,
          42
        ],
        "urban": [
          53,
          19,
          28
        ],
        "rural": [
          33,
          16,
          51
        ],
        "owner": [
          49,
          16,
          35
        ],
        "renter": [
          31,
          20,
          49
        ],
        "permission": [
          44,
          20,
          36
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          37,
          17,
          46
        ],
        "multiple": [
          66,
          18,
          16
        ],
        "male": [
          41,
          19,
          40
        ],
        "female": [
          41,
          16,
          43
        ],
        "young": [
          43,
          15,
          42
        ],
        "adult": [
          38,
          18,
          44
        ],
        "old": [
          51,
          20,
          29
        ],
        "fulltime": [
          39,
          15,
          45
        ],
        "parttime": [
          46,
          11,
          43
        ],
        "unemployed": [
          39,
          21,
          39
        ],
        "comfortable": [
          50,
          22,
          28
        ],
        "gettingby": [
          62,
          4,
          34
        ],
        "difficulty": [
          38,
          19,
          43
        ]
      },
      "homes": {
        "allresp": [
          39,
          17,
          43
        ],
        "urban": [
          51,
          20,
          30
        ],
        "rural": [
          31,
          16,
          53
        ],
        "owner": [
          47,
          17,
          36
        ],
        "renter": [
          28,
          21,
          51
        ],
        "permission": [
          42,
          20,
          38
        ],
        "formal": [
          0,
          0,
          0
        ],
        "informal": [
          0,
          0,
          0
        ],
        "nodocs": [
          0,
          0,
          0
        ],
        "sole": [
          37,
          17,
          46
        ],
        "multiple": [
          55,
          20,
          26
        ],
        "male": [
          39,
          19,
          42
        ],
        "female": [
          39,
          16,
          45
        ],
        "young": [
          41,
          14,
          45
        ],
        "adult": [
          36,
          19,
          46
        ],
        "old": [
          50,
          21,
          29
        ],
        "fulltime": [
          37,
          15,
          47
        ],
        "parttime": [
          45,
          11,
          44
        ],
        "unemployed": [
          38,
          22,
          41
        ],
        "comfortable": [
          50,
          22,
          28
        ],
        "gettingby": [
          59,
          3,
          38
        ],
        "difficulty": [
          36,
          19,
          45
        ]
      }
    },
    "reasons": {
      "askedtoleave": 65,
      "family": 32,
      "money": 43,
      "death": 34,
      "government": 14,
      "companies": 11,
      "customary": 14
    }
  }
};

//end data

function rs_export_data() {
  var message1="ISO,Asked to leave, family, money, death, government, companies, customary<br>";
  //reasons
  const reason_keys = Object.keys(all_country_data)
  for (const reason_key of reason_keys) {
    message1+=reason_key+", "+all_country_data[reason_key].reasons.askedtoleave+", "+all_country_data[reason_key].reasons.family+", "+all_country_data[reason_key].reasons.money+", "+all_country_data[reason_key].reasons.death+", "+all_country_data[reason_key].reasons.government+", "+all_country_data[reason_key].reasons.companies+", "+all_country_data[reason_key].reasons.customary+" <br>";
  };
  var reasons = document.getElementById ("reasons");
            reasons.innerHTML = message1;

 var message2="ISO,APAR secure, APAR insecure, APAR N/A,  , APMULT secure, APMULT insecure, APMULT N/A, , APSOLO secure, APSOLO insecure, APSOLO N/A<br>";
  //reasons
  const alldocs_keys = Object.keys(all_country_data)
  for (const alldocs_key of alldocs_keys) {
    message2+=alldocs_key+", "+all_country_data[alldocs_key].reasons.askedtoleave+", "+all_country_data[alldocs_key].reasons.family+", "+all_country_data[alldocs_key].reasons.money+", "+all_country_data[alldocs_key].reasons.death+", "+all_country_data[alldocs_key].reasons.government+", "+all_country_data[alldocs_key].reasons.companies+", "+all_country_data[alldocs_key].reasons.customary+" <br>";
  };
  var APAR = document.getElementById ("APAR");
            reasons.innerHTML = message2;
   
}

function rs_get_country_data(identified_name) {
  console.log("Fetching data for "+identified_name);
 // console.log(country_name_map);
  var c_iso="XX";
  for (var cm_index=0; cm_index<country_name_map.length;cm_index++)
  {
   // console.log("Examining "+country_name_map[cm_index].Name);
    if (identified_name.toLowerCase() == country_name_map[cm_index].Name.toLowerCase()) {
      c_iso=country_name_map[cm_index].Code;
      console.log("Code for "+identified_name+" found: "+c_iso);
    }
  } //end search for code
  switch (c_iso) { //targetted replacements
   // case "GB" : c_iso = "UK"; break; NOT NEEDED
    case "XX" : console.log("COUNTRY ASSIGNMENT FAILED!!!");
    

  };
  var identified_country = all_country_data[c_iso];
//  console.log("Identified country data object");
//  console.log(identified_country);
  return identified_country;
}

function rs_get_country_name(new_country_code) {
  console.log("Fetching data for "+new_country_code);
 // console.log(country_name_map);
  var c_n="ERROR";
  for (var cm_index=0; cm_index<country_name_map.length;cm_index++)
  {
   // console.log("Examining "+country_name_map[cm_index].Name);
    if (new_country_code == country_name_map[cm_index].Code) {
      c_n=country_name_map[cm_index].Name;
      console.log("Name for "+new_country_code+" found: "+c_n);
    }
  } //end search for code
  switch (c_n) { //targetted replacements
   // case "GB" : c_iso = "UK"; break; NOT NEEDED
    case "ERROR" : console.log("COUNTRY ASSIGNMENT FAILED!!!");
    

  };

  return c_n;
}
