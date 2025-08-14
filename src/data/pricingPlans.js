export const planGroups = [
  {
    title: "TARIFE",
    plans: [
      // A. KINETOTERAPIE
      {
        name: "A. KINETOTERAPIE",
        sections: [
          {
            title: "I. STANDARD",
            items: [
              { text: "1 sedinta (1h) - 120 lei" },
              { text: "10 sedinte - 1000 lei (100 lei)" },
              { text: "20 sedinte - 1600 lei (80 lei)" },
            ],
            sectionModalDetails: {
              title: "Detalii Kinetoterapie Standard",
              content: "- STANDARD include: exercitii fizice individualizate contra rezistentelor externe clasice (aparate contragreutati, rezisenta elastica, greutati libere, TRX), exercitii pliometrice / dinamice, recuperare capacitate cardiovasculara, exercitii corective postura;"
            }
          },
          {
            title: "II. PREMIUM",
            items: [
              { text: "1 sedinta (max 3h) - 200 lei" },
              { text: "10 sedinte - 1750 lei (175 lei)" },
              { text: "20 sedinte - 3000 lei (150 lei)" },
            ],
            sectionModalDetails: {
              title: "Detalii Kinetoterapie Premium",
              content: "- PREMIUM include: AlterG, Hyper Knee Extension, Hyper Knee Flexion, Kinetec CPM, EasyTech N3, EasyTech Isokinetic, Kineo MultiStation, Kineo Leg Press, MadUp BFR, Vald ForceDecks, Vald ForceFrame, Vald SpeedGates, Vald BFR, Senaptec Strobe Glasses, Senaptec Synchrony, Motion Guidance, Reax Lift, Reax Lights, Reax Lift, MTrigger Biofeedback, Desmotec D-Full / V-Full / E-Board, Bobo Pro, Skill Court, RPG (reeducare posturala globala);"
            }
          },
        ],
      },
      {
        name: "B. FIZIOTERAPIE",
        sections: [
          {
            title: "I. FIZIOTERAPIE STANDARD 3 PACK",
            items: [
              { text: "1 sedinta - 150 lei" },
              { text: "10 sedinte - 1250 lei (125 lei)" },
              { text: "20 sedinte - 2000 lei (100 lei)" },
            ],
          },
          {
            title: "II. FIZIOTERAPIE INVAZIVA (DryNeedling, ElectroDry, EPI)",
            items: [
              { text: "1 sedinta - 250 lei" },
              { text: "4 sedinte - 800 lei" },
            ],
          },
          {
            title: "III. SERVICII SINGULARE",
            items: [
              { text: "TECAR / ShockWave / Stimulare electromagnetica - 80 lei" },
              { text: "Laser / Crio-compresie - 60 lei" },
              { text: "Electroterapie / Ultrasunet / Vaccum / Drenaj limfatic / CPM - 40 lei" },
            ],
          },
        ],
      },
      {
        name: "C. TERAPIE MANUALA",
        sections: [
          {
            title: "I. TERAPIE MANUALA SEGMENT (MASAJ MEDICAL)",
            items: [
              { text: "1 sedinta - 80 lei (15')" },
              { text: "10 sedinte - 650 lei (65 lei)" },
              { text: "20 sedinte - 1000 lei (50 lei)" },
            ],
            sectionModalDetails: {
              title: "Detalii Terapie Manuala Segment",
              content: "- SEGMENT include: mobilizarea pasiva a unei articulatii si a tesuturilor moi periarticulare acesteia;"
            }
          },
          {
            title: "II. TERAPIE MANUALA REGIUNE (MASAJ MEDICAL)",
            items: [
              { text: "1 sedinta - 150 lei (45')" },
              { text: "10 sedinte - 1250 lei (125 lei)" },
              { text: "20 sedinte - 2000 lei (100 lei)" },
            ],
            sectionModalDetails: {
              title: "Detalii Terapie Manuala Regiune",
              content: "- REGIUNE include: terapia manuala a membrelor inferioare / superioare / spatelui;"
            }
          },
          {
            title: "III. TERAPIE MANUALA PREMIUM",
            items: [
              { text: "1 sedinta - 200 lei (1h)" },
              { text: "5 sedinte - 875 lei (175 lei)" },
              { text: "10 sedinte - 1500 lei (150 lei)" },
            ],
            sectionModalDetails: {
              title: "Detalii Terapie Manuala Premium",
              content: "- PREMIUM include: tratarea regiunii afectate prin terapie manuala, terapie instrumentala (IASTM), DryNeedling, Chiropractica, Taping."
            }
          },
        ],
      },
      {
        name: "D. EVALUARI / TESTARI",
        sections: [
          {
            title: "I. EVALUARE",
            items: [
              { text: "clinica + ecografica: 300 lei" },
              { text: "posturala: 250 lei" },
            ],
            sectionModalDetails: {
              title: "Informații Suplimentare Evaluari/Testari",
              content: "- criterii obiective de progres si reintoarcere la sport;\n- rata de eroare sub 1%, singurele testari validate de literatura de specialitate;\n- scade rata de recidiva sub 1%;"
            }
          },
          {
            title: "II. TESTARE",
            items: [
              { text: "- bilant muscular / forta musculara (izometrica, izokinetica, izotonica) - 300 lei" },
              { text: "- bilant articular / mobilitate - 100 lei;" },
              { text: "- FMS - 100 lei" },
              { text: "- Vald ForceDecks - 300 lei" },
              { text: "- testare neurocognitiva - 300 lei" },
              { text: "- Green Room - 400 lei" },
              { text: "- Return to run / train / sport - 600 lei" }
            ],
            sectionModalDetails: {
              title: "Detalii Testare",
              content: "* criterii obiective de progres si reintoarcere la sport;\n* rata de eroare sub 1%, singurele testari validate de literatura de specialitate;\n* scade rata de recidiva sub 1%;"
            }
          }
        ]
      },
      {
        name: "E. COLOANA",
        sections: [
          {
            title: "Servicii Coloana",
            items: [
              { text: "Elongatii coloana Triton - 100 lei" },
              { text: "Mobilizari 3D coloana Manuthera 242C - 100 lei" },
              { text: "Masaj medical coloana - 150 lei" },
              { text: "Terapie manuala premium coloana - 200 lei" },
              { text: "Diatermie Winback Back4 - 120 lei" },
              { text: "Laser inalta intensitate LightForce 25W - 120 lei" },
              { text: "Criosauna Cryoniq XC - 175 lei" },
            ],
          },
        ],
      },
      {
        name: "F. HOME/TELE - HEALTH",
        sections: [
          {
            title: "Servicii la Distanta",
            items: [
              { text: "Kinetoterapie domiciliu / birou (1h) - 200 lei" },
              { text: "Fizioterapie domiciliu / birou (electro / TECAR / ultrasunet) - 250 lei" },
              { text: "Masaj medical segment - 100 lei" },
              { text: "Masaj medical regiune - 200 lei" },
              { text: "Consultatie / Evaluare online - 300 lei" },
              { text: "Program kinetoterapie personalizat online + 1 testare - 1200 lei / luna" },
            ],
          },
        ],
      },
      {
        name: "G. SERVICII MEDICALE",
        sections: [
          {
            title: "Proceduri Medicale",
            items: [
              { text: "Consultație ortopedie: 300 lei" },
              { text: "Control ortopedie: 150 lei" },
              { text: "Ablație fire: 100 lei" },
              { text: "Pansament steril: 50 lei" },
              { text: "Puncție ecoghidata: 250 lei" },
              { text: "Infiltrație antiinflamator: 300 lei" },
              { text: "Infiltrație soluție viscoelastică: 1000 lei" },
              { text: "Infiltrație PRP: 1200 lei" },
            ],
          },
        ],
      },
      {
        name: "H. PREGATIRE SPORTIVA",
        sections: [
          {
            title: "I. PREGATIRE STANDARD",
            items: [
              { text: "1 sedinta (1h grup) - 80 lei" },
              { text: "12 sedinte - 720 lei (60 lei)" },
            ],
          },
          {
            title: "II. PREGATIRE PREMIUM",
            items: [
              { text: "1 sedinta (individualizat) - 150 lei" },
              { text: "12 sedinte - 1500 lei (125 lei)" },
            ],
          },
          {
            title: "III. REFACERE STANDARD (RECOVERY)",
            items: [
              { text: "1 sedinta - 100 lei" },
              { text: "10 sedinte - 800 lei" },
            ],
            sectionModalDetails: {
              title: "Detalii Refacere Standard",
              content: "Include: cryo-boots, electrostim, IASTM, SGA"
            }
          },
          {
            title: "IV. REFACERE PREMIUM (RECOVERY+)",
            items: [
              { text: "1 sedinta - 300 lei" },
              { text: "10 sedinte - 2500 lei" },
              { text: "Abon 2 persoane 10 sedinte - 4000 lei" },
            ],
            sectionModalDetails: {
              title: "Detalii Refacere Premium",
              content: "Include: criosauna, masaj membre / spate"
            }
          },
          {
            title: "V. SERVICII SINGULARE",
            items: [
              { text: "10 criosauna - 1500 lei" },
              { text: "10 masaj sportiv regiune - 1250 lei" },
              { text: "Masaj full body - 200 lei" },
              { text: "Skill Court - 150 lei" },
              { text: "Testare forta musculara, FMS, viteza, pliometrie, neurocognitiva - 400 lei" },
            ],
          },
        ],
      },
    ]
  },
  {
    title: "ABONAMENTE RECUPERARE",
    plans: [
      {
        name: "A. KINETOTERAPIE + FIZIOTERAPIE",
        sections: [
          {
            title: "I. STANDARD",
            items: [
              { text: "1 sedinta - 200 lei" },
              { text: "10 sedinte - 1750 lei (175 lei)" },
              { text: "20 sedinte - 3000 lei (150 lei)" },
            ],
          },
          {
            title: "II. PREMIUM",
            items: [
              { text: "1 sedinta - 275 lei" },
              { text: "10 sedinte - 2500 lei (250 lei)" },
              { text: "20 sedinte - 4500 lei (225 lei)" },
            ],
          },
        ],
      },
      {
        name: "B. KINETOTERAPIE + TERAPIE MANUALA",
        sections: [
          {
            title: "I. STANDARD SEGMENTAR",
            items: [
              { text: "1 sedinta - 150 lei" },
              { text: "10 sedinte - 1250 lei (125 lei)" },
              { text: "20 sedinte - 2000 lei (100 lei)" },
            ],
          },
          {
            title: "II. STANDARD REGIONAL",
            items: [
              { text: "1 sedinta - 200 lei" },
              { text: "10 sedinte - 1750 lei (175 lei)" },
              { text: "20 sedinte - 3000 lei (150 lei)" },
            ],
          },
          {
            title: "III. PREMIUM SEGMENTAR",
            items: [
              { text: "1 sedinta - 225 lei" },
              { text: "10 sedinte - 2000 lei (200 lei)" },
              { text: "20 sedinte - 3500 lei (175 lei)" },
            ],
          },
          {
            title: "IV. PREMIUM REGIONAL",
            items: [
              { text: "1 sedinta - 275 lei" },
              { text: "10 sedinte - 2500 lei (250 lei)" },
              { text: "20 sedinte - 4500 lei (225 lei)" },
            ],
          },
        ],
      },
      {
        name: "C. FIZIOTERAPIE + TERAPIE MANUALA",
        sections: [
          {
            title: "I. SEGMENTAR",
            items: [
              { text: "1 sedinta - 200 lei" },
              { text: "10 sedinte - 1750 lei (175 lei)" },
              { text: "20 sedinte - 3000 lei (150 lei)" },
            ],
          },
          {
            title: "II. REGIONAL",
            items: [
              { text: "1 sedinta - 275 lei" },
              { text: "10 sedinte - 2500 lei (250 lei)" },
              { text: "20 sedinte - 4500 lei (225 lei)" },
            ],
          },
        ],
      },
      {
        name: "D. FULL",
        sections: [
          {
            title: "I. STANDARD",
            items: [
              { text: "1 sedinta - 250 lei" },
              { text: "10 sedinte - 2250 lei (225 lei)" },
              { text: "20 sedinte - 4000 lei (200 lei)" },
            ],
          },
          {
            title: "II. PREMIUM",
            items: [
              { text: "1 sedinta - 325 lei" },
              { text: "10 sedinte - ~~3000 lei (300 lei)~~ 2100 lei (210 lei)" },
              { text: "20 sedinte - ~~5500 lei (275 lei)~~ 3900 lei (195 lei)" },
              { text: "<span class='text-red-500'>**DISCOUNT 25%**</span>" },
            ],
            sectionModalDetails: {
              title: "Detalii Pachet Full Premium",
              content: "Premium include: kinetoterapie, fizioterapie, terapie manuala segmentara, tape, dry needling, fizioterapie invaziva, testari.<br>* fara limita de timp"
            }
          },
        ],
      },
    ]
  },
  {
    title: "ABONAMENTE PREGATIRE",
    plans: [
      {
        name: "PREMIUM RECOVERY A",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire premium" },
              { text: "- 4 sedinte refacere standard" },
              { text: "**1640 lei**" }
            ]
          }
        ]
      },
      {
        name: "PREMIUM RECOVERY B",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire premium" },
              { text: "- 4 sedinte masaj regiune" },
              { text: "**1800 lei**" }
            ]
          }
        ]
      },
      {
        name: "PREMIUM RECOVERY C",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire premium" },
              { text: "- 4 sedinte criosauna" },
              { text: "**1890 lei**" }
            ]
          }
        ]
      },
      {
        name: "PREMIUM RECOVERY D",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire premium" },
              { text: "- 4 sedinte refacere standard" },
              { text: "- 4 sedinte masaj regiune" },
              { text: "**2090 lei**" }
            ]
          }
        ]
      },
      {
        name: "PREMIUM RECOVERY E",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire premium" },
              { text: "- 4 sedinte criosauna" },
              { text: "- 4 sedinte masaj regiune" },
              { text: "**2340 lei**" }
            ]
          }
        ]
      },
      {
        name: "STANDARD RECOVERY A",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire standard" },
              { text: "- 4 sedinte refacere standard" },
              { text: "**940 lei**" }
            ]
          }
        ]
      },
      {
        name: "STANDARD RECOVERY B",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire standard" },
              { text: "- 4 sedinte masaj regiune" },
              { text: "**1100 lei**" }
            ]
          }
        ]
      },
      {
        name: "STANDARD RECOVERY C",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire standard" },
              { text: "- 4 sedinte criosauna" },
              { text: "**1190 lei**" }
            ]
          }
        ]
      },
      {
        name: "STANDARD RECOVERY D",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire standard" },
              { text: "- 4 sedinte refacere standard" },
              { text: "- 4 sedinte masaj regiune" },
              { text: "**1390 lei**" }
            ]
          }
        ]
      },
      {
        name: "STANDARD RECOVERY E",
        sections: [
          {
            title: "Servicii Incluse",
            items: [
              { text: "- 12 sedinte pregatire standard" },
              { text: "- 4 sedinte criosauna" },
              { text: "- 4 sedinte masaj regiune" },
              { text: "**1640 lei**" }
            ]
          }
        ]
      },
    ]
  },
  {
    title: "ABONAMENTE ACCESS CLUB",
    plans: [
      {
        name: "3 months FULL CLUB ACCES",
        sections: [
          {
            title: "Suited for:",
            items: [
              { text: "- leziuni musculare" },
              { text: "- tendinite" },
              { text: "- lombalgie / cervicalgie" },
              { text: "- enotorse glezna / genunchi / pumn tratament conservativ" },
              { text: "- contuzii / edeme osoase" },
              { text: "- deficiente posturale moderate" },
              { text: "- artroscopii genunchi: meniscectomii, shaving articular" },
              { text: "- coxatroze, gonartroze" },
              { text: "- sindrom pubalgic / impingement femuroacetabular" },
              { text: "- impingement subacromial" },
              { text: "- runners / jumpers knee (ITB syndrome, tendinita patelara)" },
              { text: "- dureri de crestere (apofizita de tractiune, Osgood Schlatter)" },
              { text: "- pregatire sportiva de performanta + refacere STARTER" }
            ]
          },
          {
            title: "Pret Acces Club:",
            items: [
              { text: "<span class='text-red-500'>**5900 lei**</span>" }
            ]
          },
          {
            title: "Rate fara dobanda BT STAR:",
            items: [
              { text: "- 3 luni: 6075 lei (2025 lei / luna)" },
              { text: "- 6 luni: 6135 lei (1022 lei / luna)" },
              { text: "- 12 luni: 6195 lei (516 lei / luna)" },
              { text: "- 18 luni: 6195 lei (344 lei / luna)" }
            ]
          }
        ]
      },
      {
        name: "6 months FULL CLUB ACCES",
        sections: [
          {
            title: "Suited for:",
            items: [
              { text: "- artroscopii de genunchi: reconstructii meniscale, reconstructii condrale (microfracturi)" },
              { text: "- luxatii umar si rotula" },
              { text: "- fracturi tratament conservativ" },
              { text: "- artroplastii" },
              { text: "- protruzii discale" },
              { text: "- tendinite complexe bilaterale" },
              { text: "- pubalgii complexe" },
              { text: "- leziuni de coafa a rotatorilor" },
              { text: "- deficiente posturale accentuate" },
              { text: "- pregatire sportiva de performanta + refacere PRO" }
            ]
          },
          {
            title: "Pret Acces Club:",
            items: [
              { text: "<span class='text-red-500'>**7700 lei**</span>" }
            ]
          },
          {
            title: "Rate fara dobanda BT STAR:",
            items: [
              { text: "- 3 luni: 7930 lei (2643 lei / luna)" },
              { text: "- 6 luni: 8005 lei (1334 lei / luna)" },
              { text: "- 12 luni: 8085 lei (673 lei / luna)" },
              { text: "- 18 luni: 8085 lei (449 lei / luna)" }
            ]
          }
        ]
      },
      {
        name: "9 months FULL CLUB ACCES<br>(up to 12 months)",
        sections: [
          {
            title: "Suited for:",
            items: [
              { text: "- reconstructii ligamentare: ACL, PCL, MCL/LCL, multiligament" },
              { text: "- artrofibroza" },
              { text: "- hernii de disc complexe / chirurgia coloanei" },
              { text: "- rupturi tendon achilian" },
              { text: "- fracturi complexe stabilizate chirurgical" },
              { text: "- chirurgia umarului" },
              { text: "- deficient posturale severe / reposturare" },
              { text: "- pregatire sportiva de performanta + refacere ELITE" }
            ]
          },
          {
            title: "Pret Acces Club:",
            items: [
              { text: "<span class='text-red-500'>**9900 lei**</span>" }
            ]
          },
          {
            title: "Rate fara dobanda BT STAR:",
            items: [
              { text: "- 3 luni: 10.195 lei (3398 lei / luna)" },
              { text: "- 6 luni: 10.295 lei (1715 lei / luna)" },
              { text: "- 12 luni: 10.395 lei (866 lei / luna)" },
              { text: "- 18 luni: 10.395 lei (577 lei / luna)" }
            ]
          }
        ]
      },
    ]
  }
];