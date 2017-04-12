module.exports = (db) => {
    const version = 2;

    db.collection('pages').insert({
    "name": "classes",
    "headline": "Holdundervisning 2017",
    "document": {
        "subtitle": "Løbende optagelse på alle holdene, såfremt der er plads. Prisen reguleres efter hvornår du tilmeldes.",
        "classes": [
            {
                "place": "",
                "signUpInstructions": "Kontonr til indbetaling	5479 0004320112 eller mobile pay 2673 2571\n\nMail eller ring for tilmelding.",
                "classes": [
                    {
                        "sortOrder": 1,
                        "day": "Mandag",
                        "groups": [
                            {
                                "time": "kl. 18.30 - 20.00",
                                "space": "Hatha Yoga, Aktivitetshuset, Bredgade 4, 8870 Langå",
                                "prices": [
                                    {
                                        "dates": "Start 2/1 - 27/3",
                                        "price": "Pris kr. 910, 13 gange"
                                    },
                                    {
                                        "dates": "Start 3/4 - 26/6",
                                        "price": "Pris kr. 770, 11 gange"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sortOrder": 2,
                        "day": "Tirsdag",
                        "groups": [
                            {
                                "time": "kl. 19.30 - 21.00",
                                "space": "Hatha Yoga, Traneparken, 8960 Randers SØ",
                                "prices": [
                                    {
                                        "dates": "Start 3/1 - 28/3",
                                        "price": "Pris kr. 1080, 12 gange - drop in kr. 100 pr. gang"
                                    },
                                    {
                                        "dates": "Start 4/4 - 27/6",
                                        "price": "Pris kr. 1170, 13 gange - drop in kr. 100 pr. gang"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sortOrder": 3,
                        "day": "Onsdag",
                        "groups": [
                            {
                                "time": "kl. 12.30 - 14.00",
                                "space": "Energitræning skånehold, Fritidscentret, Vestergade 15, 8900 Randers C",
                                "prices": [
                                    {
                                        "dates": "Start 4/1 - 12/4",
                                        "price": "Pris kr. 1050, 15 gange"
                                    },
                                    {
                                        "dates": "Start 19/4 - 28/6",
                                        "price": "Pris kr. 770, 11 gange"
                                    }
                                ]
                            },
                            {
                                "time": "kl. 19.00 - 20.30",
                                "space": "Hatha Yoga, Bjergby forsamlingshus, Mariagervej 354, 8981 Spentrup",
                                "prices": [
                                    {
                                        "dates": "Start 4/1 - 29/3",
                                        "price": "Pris kr. 900, 12 gange"
                                    },
                                    {
                                        "dates": "Start 5/4 - 28/6",
                                        "price": "Pris kr. 975, 13 gange"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sortOrder": 4,
                        "day": "Torsdag",
                        "groups": [
                            {
                                "time": "kl. 16.55 - 18.25",
                                "space": "Hatha Yoga, True forsamlingshus, True Hovedgade, 9550 Mariager",
                                "prices": [
                                    {
                                        "dates": "Start 5/1 - 30/3",
                                        "price": "Pris kr. 900, 12 gange"
                                    },
                                    {
                                        "dates": "Start 6/4 - 29/6",
                                        "price": "Pris kr. 825, 11 gange"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "place": "RgF, Foreningshuset, Udbyhøjvej 189, 8930 Randers NØ",
                "signUpInstructions": "Tilmelding på rgf.dk",
                "classes": [
                    {
                        "sortOrder": 1,
                        "day": "Mandag",
                        "groups": [
                            {
                                "time": "kl. 11.00 - 12.00",
                                "space": "Stor Bold og Pilates",
                                "prices": []
                            }
                        ]
                    },
                    {
                        "sortOrder": 2,
                        "day": "Tirsdag",
                        "groups": [
                            {
                                "time": "kl. 09.00 -10.00",
                                "space": "Aqua gym i Stevnstrup, 33 grader",
                                "prices": []
                            }
                        ]
                    },
                    {
                        "sortOrder": 3,
                        "day": "Torsdag",
                        "groups": [
                            {
                                "time": "kl. 10.00 -.11.00",
                                "space": "Hatha Yoga",
                                "prices": []
                            },
                            {
                                "time": "kl. 19.00 - 20.00",
                                "space": "Hatha Yoga",
                                "prices": []
                            }
                        ]
                    },
                    {
                        "sortOrder": 4,
                        "day": "Fredag",
                        "groups": [
                            {
                                "time": "kl. 14.00 - 14.30",
                                "space": "Babysvømning 0-12 mdr, Water & Wellness",
                                "prices": []
                            },
                            {
                                "time": "kl. 14.30 - 15.00",
                                "space": "Babysvømning 1-2 år, Water & Wellness",
                                "prices": []
                            },
                            {
                                "time": "kl. 16.00 - 16.30",
                                "space": "Nybegynder 4-6 år, Tirsdalens skole (Svømning)",
                                "prices": []
                            },
                            {
                                "time": "kl. 16.30 - 17.00",
                                "space": "Begynder 6-8 år, Tirsdalens skole (Svømning)",
                                "prices": []
                            }
                        ]
                    },
                    {
                        "sortOrder": 5,
                        "day": "Lørdag i Stevnstrup, Handicapcentret",
                        "groups": [
                            {
                                "time": "kl. 08.30 - 09.00",
                                "space": "Babysvømning 6-12 mdr, 36 grader",
                                "prices": []
                            },
                            {
                                "time": "kl. 09.00 - 09.30",
                                "space": "Babysvømning 0-6 mdr, 36 grader",
                                "prices": []
                            },
                            {
                                "time": "kl. 09.30 - 10.00",
                                "space": "Babysvømning 2-4 år, 33 grader",
                                "prices": []
                            },
                            {
                                "time": "kl. 10.00 - 10.30",
                                "space": "Babysvømning 1-2 år, 33 grader",
                                "prices": []
                            }
                        ]
                    }
                ]
            },
            {
                "place": "Vorup FB Gymnastik",
                "signUpInstructions": "Tilmelding til vorupfbgymnastik.dk",
                "classes": [
                    {
                        "sortOrder": 1,
                        "day": "Tirsdag",
                        "groups": [
                            {
                                "time": "kl. 17.00 - 18.00",
                                "space": "Pilates, Søndermarkskolen",
                                "prices": []
                            },
                            {
                                "time": "kl. 18.00 - 19.00",
                                "space": "Hatha Yoga, Søndermarkskolen",
                                "prices": []
                            }
                        ]
                    },
                    {
                        "sortOrder": 2,
                        "day": "Torsdag",
                        "groups": [
                            {
                                "time": "kl. 11.30 - 12.30",
                                "space": "Qi gong/Hatha Yoga, Vorup skole",
                                "prices": []
                            }
                        ]
                    }
                ]
            },
            {
                "place": "Nordbyens Motion",
                "signUpInstructions": "Tilmelding, mød op på holdene",
                "classes": [
                    {
                        "sortOrder": 1,
                        "day": "Onsdag",
                        "groups": [
                            {
                                "time": "kl. 16.30 - 17.30",
                                "space": "Pilates, Rismølleskolen, gymnatiksalen",
                                "prices": []
                            },
                            {
                                "time": "kl. 17.30 - 18.30",
                                "space": "Hatha Yoga, Rismølleskolen, gymnastiksalen",
                                "prices": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

db.collection('version').update({"name": "version"}, {$set: {"value": version}}, false, true);

return version
}
