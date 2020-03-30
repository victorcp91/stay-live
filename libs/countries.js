const countries = [
  {
    namePt: 'Afeganistão',
    nameInt: 'Afghanistan',
    value: 'AF',
  },
  {
    namePt: 'África do Sul',
    nameInt: 'South Africa',
    value: 'ZA',
  },
  {
    namePt: 'Albânia',
    nameInt: 'Albania',
    value: 'AL',
  },
  {
    namePt: 'Alemanha',
    nameInt: 'Germany',
    value: 'DE',
  },
  {
    namePt: 'Andorra',
    nameInt: 'Andorra',
    value: 'AD',
  },
  {
    namePt: 'Angola',
    nameInt: 'Angola',
    value: 'AO',
  },
  {
    namePt: 'Anguilla',
    nameInt: 'Anguilla',
    value: 'AI',
  },
  {
    namePt: 'Antártida',
    nameInt: 'Antarctica',
    value: 'AQ',
  },
  {
    namePt: 'Antígua e Barbuda',
    nameInt: 'Antigua & Barbuda',
    value: 'AG',
  },
  {
    namePt: 'Arábia Saudita',
    nameInt: 'Saudi Arabia',
    value: 'SA',
  },
  {
    namePt: 'Argélia',
    nameInt: 'Algeria',
    value: 'DZ',
  },
  {
    namePt: 'Argentina',
    nameInt: 'Argentina',
    value: 'AR',
  },
  {
    namePt: 'Armênia',
    nameInt: 'Armenia',
    value: 'AM',
  },
  {
    namePt: 'Aruba',
    nameInt: 'Aruba',
    value: 'AW',
  },
  {
    namePt: 'Austrália',
    nameInt: 'Australia',
    value: 'AU',
  },
  {
    namePt: 'Áustria',
    nameInt: 'Austria',
    value: 'AT',
  },
  {
    namePt: 'Azerbaijão',
    nameInt: 'Azerbaijan',
    value: 'AZ',
  },
  {
    namePt: 'Bahamas',
    nameInt: 'Bahamas',
    value: 'BS',
  },
  {
    namePt: 'Bahrein',
    nameInt: 'Bahrain',
    value: 'BH',
  },
  {
    namePt: 'Bangladesh',
    nameInt: 'Bangladesh',
    value: 'BD',
  },
  {
    namePt: 'Barbados',
    nameInt: 'Barbados',
    value: 'BB',
  },
  {
    namePt: 'Belarus',
    nameInt: 'Belarus',
    value: 'BY',
  },
  {
    namePt: 'Bélgica',
    nameInt: 'Belgium',
    value: 'BE',
  },
  {
    namePt: 'Belize',
    nameInt: 'Belize',
    value: 'BZ',
  },
  {
    namePt: 'Benin',
    nameInt: 'Benin',
    value: 'BJ',
  },
  {
    namePt: 'Bermudas',
    nameInt: 'Bermuda',
    value: 'BM',
  },
  {
    namePt: 'Bolívia',
    nameInt: 'Bolivia',
    value: 'BO',
  },
  {
    namePt: 'Bósnia-Herzegóvina',
    nameInt: 'Bosnia & Herzegovina',
    value: 'BA',
  },
  {
    namePt: 'Botsuana',
    nameInt: 'Botswana',
    value: 'BW',
  },
  {
    namePt: 'Brasil',
    nameInt: 'Brazil',
    value: 'BR',
  },
  {
    namePt: 'Brunei',
    nameInt: 'Brunei',
    value: 'BN',
  },
  {
    namePt: 'Bulgária',
    nameInt: 'Bulgaria',
    value: 'BG',
  },
  {
    namePt: 'Burkina Fasso',
    nameInt: 'Burkina Faso',
    value: 'BF',
  },
  {
    namePt: 'Burundi',
    nameInt: 'Burundi',
    value: 'BI',
  },
  {
    namePt: 'Butão',
    nameInt: 'Bhutan',
    value: 'BT',
  },
  {
    namePt: 'Cabo Verde',
    nameInt: 'Cape Verde',
    value: 'CV',
  },
  {
    namePt: 'Camarões',
    nameInt: 'Cameroon',
    value: 'CM',
  },
  {
    namePt: 'Camboja',
    nameInt: 'Cambodia',
    value: 'KH',
  },
  {
    namePt: 'Canadá',
    nameInt: 'Canada',
    value: 'CA',
  },
  {
    namePt: 'Canárias',
    nameInt: 'Canary Islands',
    value: 'IC',
  },
  {
    namePt: 'Cazaquistão',
    nameInt: 'Kazakhstan',
    value: 'KZ',
  },
  {
    namePt: 'Ceuta e Melilla',
    nameInt: 'Ceuta & Melilla',
    value: 'EA',
  },
  {
    namePt: 'Chade',
    nameInt: 'Chad',
    value: 'TD',
  },
  {
    namePt: 'Chile',
    nameInt: 'Chile',
    value: 'CL',
  },
  {
    namePt: 'China',
    nameInt: 'China',
    value: 'CN',
  },
  {
    namePt: 'Chipre',
    nameInt: 'Cyprus',
    value: 'CY',
  },
  {
    namePt: 'Cingapura',
    nameInt: 'Singapore',
    value: 'SG',
  },
  {
    namePt: 'Colômbia',
    nameInt: 'Colombia',
    value: 'CO',
  },
  {
    namePt: 'Comores',
    nameInt: 'Comoros',
    value: 'KM',
  },
  {
    namePt: 'Congo',
    nameInt: 'Congo (Republic)',
    value: 'CG',
  },
  {
    namePt: 'Coréia do Norte',
    nameInt: 'North Korea',
    value: 'KP',
  },
  {
    namePt: 'Coréia do Sul',
    nameInt: 'South Korea',
    value: 'KR',
  },
  {
    namePt: 'Costa do Marfim',
    nameInt: 'Côte d¿Ivoire',
    value: 'CI',
  },
  {
    namePt: 'Costa Rica',
    nameInt: 'Costa Rica',
    value: 'CR',
  },
  {
    namePt: 'Croácia',
    nameInt: 'Croatia',
    value: 'HR',
  },
  {
    namePt: 'Cuba',
    nameInt: 'Cuba',
    value: 'CU',
  },
  {
    namePt: 'Curaçao',
    nameInt: 'Curaçao',
    value: 'CW',
  },
  {
    namePt: 'Diego Garcia',
    nameInt: 'Diego Garcia',
    value: 'DG',
  },
  {
    namePt: 'Dinamarca',
    nameInt: 'Denmark',
    value: 'DK',
  },
  {
    namePt: 'Djibuti',
    nameInt: 'Djibouti',
    value: 'DJ',
  },
  {
    namePt: 'Dominica',
    nameInt: 'Dominica',
    value: 'DM',
  },
  {
    namePt: 'Egito',
    nameInt: 'Egypt',
    value: 'EG',
  },
  {
    namePt: 'El Salvador',
    nameInt: 'El Salvador',
    value: 'SV',
  },
  {
    namePt: 'Emirados Árabes Unidos',
    nameInt: 'United Arab Emirates',
    value: 'AE',
  },
  {
    namePt: 'Equador',
    nameInt: 'Ecuador',
    value: 'EC',
  },
  {
    namePt: 'Eritréia',
    nameInt: 'Eritrea',
    value: 'ER',
  },
  {
    namePt: 'Eslováquia',
    nameInt: 'Slovakia',
    value: 'SK',
  },
  {
    namePt: 'Eslovênia',
    nameInt: 'Slovenia',
    value: 'SI',
  },
  {
    namePt: 'Espanha',
    nameInt: 'Spain',
    value: 'ES',
  },
  {
    namePt: 'Estados Unidos',
    nameInt: 'United States',
    value: 'US',
  },
  {
    namePt: 'Estônia',
    nameInt: 'Estonia',
    value: 'EE',
  },
  {
    namePt: 'Etiópia',
    nameInt: 'Ethiopia',
    value: 'ET',
  },
  {
    namePt: 'Fiji',
    nameInt: 'Fiji',
    value: 'FJ',
  },
  {
    namePt: 'Filipinas',
    nameInt: 'Philippines',
    value: 'PH',
  },
  {
    namePt: 'Finlândia',
    nameInt: 'Finland',
    value: 'FI',
  },
  {
    namePt: 'França',
    nameInt: 'France',
    value: 'FR',
  },
  {
    namePt: 'Gabão',
    nameInt: 'Gabon',
    value: 'GA',
  },
  {
    namePt: 'Gâmbia',
    nameInt: 'Gambia',
    value: 'GM',
  },
  {
    namePt: 'Gana',
    nameInt: 'Ghana',
    value: 'GH',
  },
  {
    namePt: 'Geórgia',
    nameInt: 'Georgia',
    value: 'GE',
  },
  {
    namePt: 'Gibraltar',
    nameInt: 'Gibraltar',
    value: 'GI',
  },
  {
    namePt: 'Grã-Bretanha (Reino Unido, UK)',
    nameInt: 'United Kingdom',
    value: 'GB',
  },
  {
    namePt: 'Granada',
    nameInt: 'Grenada',
    value: 'GD',
  },
  {
    namePt: 'Grécia',
    nameInt: 'Greece',
    value: 'GR',
  },
  {
    namePt: 'Groelândia',
    nameInt: 'Greenland',
    value: 'GL',
  },
  {
    namePt: 'Guadalupe',
    nameInt: 'Guadeloupe',
    value: 'GP',
  },
  {
    namePt: 'Guam (Território dos Estados Unidos)',
    nameInt: 'Guam',
    value: 'GU',
  },
  {
    namePt: 'Guatemala',
    nameInt: 'Guatemala',
    value: 'GT',
  },
  {
    namePt: 'Guernsey',
    nameInt: 'Guernsey',
    value: 'GG',
  },
  {
    namePt: 'Guiana',
    nameInt: 'Guyana',
    value: 'GY',
  },
  {
    namePt: 'Guiana Francesa',
    nameInt: 'French Guiana',
    value: 'GF',
  },
  {
    namePt: 'Guiné',
    nameInt: 'Guinea',
    value: 'GN',
  },
  {
    namePt: 'Guiné Equatorial',
    nameInt: 'Equatorial Guinea',
    value: 'GQ',
  },
  {
    namePt: 'Guiné-Bissau',
    nameInt: 'Guinea-Bissau',
    value: 'GW',
  },
  {
    namePt: 'Haiti',
    nameInt: 'Haiti',
    value: 'HT',
  },
  {
    namePt: 'Holanda',
    nameInt: 'Netherlands',
    value: 'NL',
  },
  {
    namePt: 'Honduras',
    nameInt: 'Honduras',
    value: 'HN',
  },
  {
    namePt: 'Hong Kong',
    nameInt: 'Hong Kong',
    value: 'HK',
  },
  {
    namePt: 'Hungria',
    nameInt: 'Hungary',
    value: 'HU',
  },
  {
    namePt: 'Iêmen',
    nameInt: 'Yemen',
    value: 'YE',
  },
  {
    namePt: 'Ilha Bouvet',
    nameInt: 'Bouvet Island',
    value: 'BV',
  },
  {
    namePt: 'Ilha de Ascensão',
    nameInt: 'Ascension Island',
    value: 'AC',
  },
  {
    namePt: 'Ilha de Clipperton',
    nameInt: 'Clipperton Island',
    value: 'CP',
  },
  {
    namePt: 'Ilha de Man',
    nameInt: 'Isle of Man',
    value: 'IM',
  },
  {
    namePt: 'Ilha Natal',
    nameInt: 'Christmas Island',
    value: 'CX',
  },
  {
    namePt: 'Ilha Pitcairn',
    nameInt: 'Pitcairn Islands',
    value: 'PN',
  },
  {
    namePt: 'Ilha Reunião',
    nameInt: 'Réunion',
    value: 'RE',
  },
  {
    namePt: 'Ilhas Aland',
    nameInt: 'Åland Islands',
    value: 'AX',
  },
  {
    namePt: 'Ilhas Cayman',
    nameInt: 'Cayman Islands',
    value: 'KY',
  },
  {
    namePt: 'Ilhas Cocos',
    nameInt: 'Cocos (Keeling) Islands',
    value: 'CC',
  },
  {
    namePt: 'Ilhas Cook',
    nameInt: 'Cook Islands',
    value: 'CK',
  },
  {
    namePt: 'Ilhas Faroes',
    nameInt: 'Faroe Islands',
    value: 'FO',
  },
  {
    namePt: 'Ilhas Geórgia do Sul e Sandwich do Sul',
    nameInt: 'South Georgia & South Sandwich Islands',
    value: 'GS',
  },
  {
    namePt: 'Ilhas Heard e McDonald (Território da Austrália)',
    nameInt: 'Heard & McDonald Islands',
    value: 'HM',
  },
  {
    namePt: 'Ilhas Malvinas',
    nameInt: 'Falkland Islands (Islas Malvinas)',
    value: 'FK',
  },
  {
    namePt: 'Ilhas Marianas do Norte',
    nameInt: 'Northern Mariana Islands',
    value: 'MP',
  },
  {
    namePt: 'Ilhas Marshall',
    nameInt: 'Marshall Islands',
    value: 'MH',
  },
  {
    namePt: 'Ilhas Menores dos Estados Unidos',
    nameInt: 'U.S. Outlying Islands',
    value: 'UM',
  },
  {
    namePt: 'Ilhas Norfolk',
    nameInt: 'Norfolk Island',
    value: 'NF',
  },
  {
    namePt: 'Ilhas Salomão',
    nameInt: 'Solomon Islands',
    value: 'SB',
  },
  {
    namePt: 'Ilhas Seychelles',
    nameInt: 'Seychelles',
    value: 'SC',
  },
  {
    namePt: 'Ilhas Tokelau',
    nameInt: 'Tokelau',
    value: 'TK',
  },
  {
    namePt: 'Ilhas Turks e Caicos',
    nameInt: 'Turks & Caicos Islands',
    value: 'TC',
  },
  {
    namePt: 'Ilhas Virgens (Estados Unidos)',
    nameInt: 'U.S. Virgin Islands',
    value: 'VI',
  },
  {
    namePt: 'Ilhas Virgens (Inglaterra)',
    nameInt: 'British Virgin Islands',
    value: 'VG',
  },
  {
    namePt: 'Índia',
    nameInt: 'India',
    value: 'IN',
  },
  {
    namePt: 'Indonésia',
    nameInt: 'Indonesia',
    value: 'ID',
  },
  {
    namePt: 'Irã',
    nameInt: 'Iran',
    value: 'IR',
  },
  {
    namePt: 'Iraque',
    nameInt: 'Iraq',
    value: 'IQ',
  },
  {
    namePt: 'Irlanda',
    nameInt: 'Ireland',
    value: 'IE',
  },
  {
    namePt: 'Islândia',
    nameInt: 'Iceland',
    value: 'IS',
  },
  {
    namePt: 'Israel',
    nameInt: 'Israel',
    value: 'IL',
  },
  {
    namePt: 'Itália',
    nameInt: 'Italy',
    value: 'IT',
  },
  {
    namePt: 'Jamaica',
    nameInt: 'Jamaica',
    value: 'JM',
  },
  {
    namePt: 'Japão',
    nameInt: 'Japan',
    value: 'JP',
  },
  {
    namePt: 'Jersey',
    nameInt: 'Jersey',
    value: 'JE',
  },
  {
    namePt: 'Jordânia',
    nameInt: 'Jordan',
    value: 'JO',
  },
  {
    namePt: 'Kiribati',
    nameInt: 'Kiribati',
    value: 'KI',
  },
  {
    namePt: 'Kosovo',
    nameInt: 'Kosovo',
    value: 'XK',
  },
  {
    namePt: 'Kuait',
    nameInt: 'Kuwait',
    value: 'KW',
  },
  {
    namePt: 'Laos',
    nameInt: 'Laos',
    value: 'LA',
  },
  {
    namePt: 'Lesoto',
    nameInt: 'Lesotho',
    value: 'LS',
  },
  {
    namePt: 'Letônia',
    nameInt: 'Latvia',
    value: 'LV',
  },
  {
    namePt: 'Líbano',
    nameInt: 'Lebanon',
    value: 'LB',
  },
  {
    namePt: 'Libéria',
    nameInt: 'Liberia',
    value: 'LR',
  },
  {
    namePt: 'Líbia',
    nameInt: 'Libya',
    value: 'LY',
  },
  {
    namePt: 'Liechtenstein',
    nameInt: 'Liechtenstein',
    value: 'LI',
  },
  {
    namePt: 'Lituânia',
    nameInt: 'Lithuania',
    value: 'LT',
  },
  {
    namePt: 'Luxemburgo',
    nameInt: 'Luxembourg',
    value: 'LU',
  },
  {
    namePt: 'Macau',
    nameInt: 'Macau',
    value: 'MO',
  },
  {
    namePt: 'Macedônia (República Yugoslava)',
    nameInt: 'Macedonia (FYROM)',
    value: 'MK',
  },
  {
    namePt: 'Madagascar',
    nameInt: 'Madagascar',
    value: 'MG',
  },
  {
    namePt: 'Malásia',
    nameInt: 'Malaysia',
    value: 'MY',
  },
  {
    namePt: 'Malaui',
    nameInt: 'Malawi',
    value: 'MW',
  },
  {
    namePt: 'Maldivas',
    nameInt: 'Maldives',
    value: 'MV',
  },
  {
    namePt: 'Mali',
    nameInt: 'Mali',
    value: 'ML',
  },
  {
    namePt: 'Malta',
    nameInt: 'Malta',
    value: 'MT',
  },
  {
    namePt: 'Marrocos',
    nameInt: 'Morocco',
    value: 'MA',
  },
  {
    namePt: 'Martinica',
    nameInt: 'Martinique',
    value: 'MQ',
  },
  {
    namePt: 'Maurício',
    nameInt: 'Mauritius',
    value: 'MU',
  },
  {
    namePt: 'Mauritânia',
    nameInt: 'Mauritania',
    value: 'MR',
  },
  {
    namePt: 'Mayotte',
    nameInt: 'Mayotte',
    value: 'YT',
  },
  {
    namePt: 'México',
    nameInt: 'Mexico',
    value: 'MX',
  },
  {
    namePt: 'Micronésia',
    nameInt: 'Micronesia',
    value: 'FM',
  },
  {
    namePt: 'Moçambique',
    nameInt: 'Mozambique',
    value: 'MZ',
  },
  {
    namePt: 'Moldova',
    nameInt: 'Moldova',
    value: 'MD',
  },
  {
    namePt: 'Mônaco',
    nameInt: 'Monaco',
    value: 'MC',
  },
  {
    namePt: 'Mongólia',
    nameInt: 'Mongolia',
    value: 'MN',
  },
  {
    namePt: 'Montenegro',
    nameInt: 'Montenegro',
    value: 'ME',
  },
  {
    namePt: 'Montserrat',
    nameInt: 'Montserrat',
    value: 'MS',
  },
  {
    namePt: 'Myanma',
    nameInt: 'Myanmar (Burma)',
    value: 'MM',
  },
  {
    namePt: 'Namíbia',
    nameInt: 'Namibia',
    value: 'NA',
  },
  {
    namePt: 'Nauru',
    nameInt: 'Nauru',
    value: 'NR',
  },
  {
    namePt: 'Nepal',
    nameInt: 'Nepal',
    value: 'NP',
  },
  {
    namePt: 'Nicarágua',
    nameInt: 'Nicaragua',
    value: 'NI',
  },
  {
    namePt: 'Níger',
    nameInt: 'Niger',
    value: 'NE',
  },
  {
    namePt: 'Nigéria',
    nameInt: 'Nigeria',
    value: 'NG',
  },
  {
    namePt: 'Niue',
    nameInt: 'Niue',
    value: 'NU',
  },
  {
    namePt: 'Noruega',
    nameInt: 'Norway',
    value: 'NO',
  },
  {
    namePt: 'Nova Caledônia',
    nameInt: 'New Caledonia',
    value: 'NC',
  },
  {
    namePt: 'Nova Zelândia',
    nameInt: 'New Zealand',
    value: 'NZ',
  },
  {
    namePt: 'Omã',
    nameInt: 'Oman',
    value: 'OM',
  },
  {
    namePt: 'Países Baixos Caribenhos',
    nameInt: 'Caribbean Netherlands',
    value: 'BQ',
  },
  {
    namePt: 'Palau',
    nameInt: 'Palau',
    value: 'PW',
  },
  {
    namePt: 'Palestina',
    nameInt: 'Palestine',
    value: 'PS',
  },
  {
    namePt: 'Panamá',
    nameInt: 'Panama',
    value: 'PA',
  },
  {
    namePt: 'Papua-Nova Guiné',
    nameInt: 'Papua New Guinea',
    value: 'PG',
  },
  {
    namePt: 'Paquistão',
    nameInt: 'Pakistan',
    value: 'PK',
  },
  {
    namePt: 'Paraguai',
    nameInt: 'Paraguay',
    value: 'PY',
  },
  {
    namePt: 'Peru',
    nameInt: 'Peru',
    value: 'PE',
  },
  {
    namePt: 'Polinésia Francesa',
    nameInt: 'French Polynesia',
    value: 'PF',
  },
  {
    namePt: 'Polônia',
    nameInt: 'Poland',
    value: 'PL',
  },
  {
    namePt: 'Porto Rico',
    nameInt: 'Puerto Rico',
    value: 'PR',
  },
  {
    namePt: 'Portugal',
    nameInt: 'Portugal',
    value: 'PT',
  },
  {
    namePt: 'Qatar',
    nameInt: 'Qatar',
    value: 'QA',
  },
  {
    namePt: 'Quênia',
    nameInt: 'Kenya',
    value: 'KE',
  },
  {
    namePt: 'Quirguistão',
    nameInt: 'Kyrgyzstan',
    value: 'KG',
  },
  {
    namePt: 'República Centro-Africana',
    nameInt: 'Central African Republic',
    value: 'CF',
  },
  {
    namePt: 'República Democrática do Congo',
    nameInt: 'Congo (DRC)',
    value: 'CD',
  },
  {
    namePt: 'República Dominicana',
    nameInt: 'Dominican Republic',
    value: 'DO',
  },
  {
    namePt: 'República Tcheca',
    nameInt: 'Czech Republic',
    value: 'CZ',
  },
  {
    namePt: 'Romênia',
    nameInt: 'Romania',
    value: 'RO',
  },
  {
    namePt: 'Ruanda',
    nameInt: 'Rwanda',
    value: 'RW',
  },
  {
    namePt: 'Rússia (antiga URSS) - Federação Russa',
    nameInt: 'Russia',
    value: 'RU',
  },
  {
    namePt: 'Saara Ocidental',
    nameInt: 'Western Sahara',
    value: 'EH',
  },
  {
    namePt: 'Saint-Pierre e Miquelon',
    nameInt: 'St. Pierre & Miquelon',
    value: 'PM',
  },
  {
    namePt: 'Samoa Americana',
    nameInt: 'American Samoa',
    value: 'AS',
  },
  {
    namePt: 'Samoa Ocidental',
    nameInt: 'Samoa',
    value: 'WS',
  },
  {
    namePt: 'San Marino',
    nameInt: 'San Marino',
    value: 'SM',
  },
  {
    namePt: 'Santa Helena',
    nameInt: 'St. Helena',
    value: 'SH',
  },
  {
    namePt: 'Santa Lúcia',
    nameInt: 'St. Lucia',
    value: 'LC',
  },
  {
    namePt: 'São Bartolomeu',
    nameInt: 'St. Barthélemy',
    value: 'BL',
  },
  {
    namePt: 'São Cristóvão e Névis',
    nameInt: 'St. Kitts & Nevis',
    value: 'KN',
  },
  {
    namePt: 'São Martim',
    nameInt: 'St. Martin',
    value: 'MF',
  },
  {
    namePt: 'São Martinho',
    nameInt: 'Sint Maarten',
    value: 'SX',
  },
  {
    namePt: 'São Tomé e Príncipe',
    nameInt: 'São Tomé & Príncipe',
    value: 'ST',
  },
  {
    namePt: 'São Vicente e Granadinas',
    nameInt: 'St. Vincent & Grenadines',
    value: 'VC',
  },
  {
    namePt: 'Senegal',
    nameInt: 'Senegal',
    value: 'SN',
  },
  {
    namePt: 'Serra Leoa',
    nameInt: 'Sierra Leone',
    value: 'SL',
  },
  {
    namePt: 'Sérvia',
    nameInt: 'Serbia',
    value: 'RS',
  },
  {
    namePt: 'Síria',
    nameInt: 'Syria',
    value: 'SY',
  },
  {
    namePt: 'Somália',
    nameInt: 'Somalia',
    value: 'SO',
  },
  {
    namePt: 'Sri Lanka',
    nameInt: 'Sri Lanka',
    value: 'LK',
  },
  {
    namePt: 'Suazilândia',
    nameInt: 'Swaziland',
    value: 'SZ',
  },
  {
    namePt: 'Sudão',
    nameInt: 'Sudan',
    value: 'SD',
  },
  {
    namePt: 'Sudão do Sul',
    nameInt: 'South Sudan',
    value: 'SS',
  },
  {
    namePt: 'Suécia',
    nameInt: 'Sweden',
    value: 'SE',
  },
  {
    namePt: 'Suíça',
    nameInt: 'Switzerland',
    value: 'CH',
  },
  {
    namePt: 'Suriname',
    nameInt: 'Suriname',
    value: 'SR',
  },
  {
    namePt: 'Svalbard',
    nameInt: 'Svalbard & Jan Mayen',
    value: 'SJ',
  },
  {
    namePt: 'Tadjiquistão',
    nameInt: 'Tajikistan',
    value: 'TJ',
  },
  {
    namePt: 'Tailândia',
    nameInt: 'Thailand',
    value: 'TH',
  },
  {
    namePt: 'Taiwan',
    nameInt: 'Taiwan',
    value: 'TW',
  },
  {
    namePt: 'Tanzânia',
    nameInt: 'Tanzania',
    value: 'TZ',
  },
  {
    namePt: 'Território Britânico do Oceano índico',
    nameInt: 'British Indian Ocean Territory',
    value: 'IO',
  },
  {
    namePt: 'Territórios do Sul da França',
    nameInt: 'French Southern Territories',
    value: 'TF',
  },
  {
    namePt: 'Timor-Leste',
    nameInt: 'Timor-Leste',
    value: 'TL',
  },
  {
    namePt: 'Togo',
    nameInt: 'Togo',
    value: 'TG',
  },
  {
    namePt: 'Tonga',
    nameInt: 'Tonga',
    value: 'TO',
  },
  {
    namePt: 'Trinidad e Tobago',
    nameInt: 'Trinidad & Tobago',
    value: 'TT',
  },
  {
    namePt: 'Tristão da Cunha',
    nameInt: 'Tristan da Cunha',
    value: 'TA',
  },
  {
    namePt: 'Tunísia',
    nameInt: 'Tunisia',
    value: 'TN',
  },
  {
    namePt: 'Turcomenistão',
    nameInt: 'Turkmenistan',
    value: 'TM',
  },
  {
    namePt: 'Turquia',
    nameInt: 'Turkey',
    value: 'TR',
  },
  {
    namePt: 'Tuvalu',
    nameInt: 'Tuvalu',
    value: 'TV',
  },
  {
    namePt: 'Ucrânia',
    nameInt: 'Ukraine',
    value: 'UA',
  },
  {
    namePt: 'Uganda',
    nameInt: 'Uganda',
    value: 'UG',
  },
  {
    namePt: 'Uruguai',
    nameInt: 'Uruguay',
    value: 'UY',
  },
  {
    namePt: 'Uzbequistão',
    nameInt: 'Uzbekistan',
    value: 'UZ',
  },
  {
    namePt: 'Vanuatu',
    nameInt: 'Vanuatu',
    value: 'VU',
  },
  {
    namePt: 'Vaticano',
    nameInt: 'Vatican City',
    value: 'VA',
  },
  {
    namePt: 'Venezuela',
    nameInt: 'Venezuela',
    value: 'VE',
  },
  {
    namePt: 'Vietnã',
    nameInt: 'Vietnam',
    value: 'VN',
  },
  {
    namePt: 'Wallis e Futuna',
    nameInt: 'Wallis & Futuna',
    value: 'WF',
  },
  {
    namePt: 'Zâmbia',
    nameInt: 'Zambia',
    value: 'ZM',
  },
  {
    namePt: 'Zimbábue',
    nameInt: 'Zimbabwe',
    value: 'ZW',
  },
];

export default countries;
