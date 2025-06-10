export const plans = [
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
  }
];