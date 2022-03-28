const User =
{
  id: 1,
  nick: 'Fuzyn',
  points: 1,
  planet: [
    {
      id: 1,
      name: 'Khan',
      resources:
        {
          metal: 2000,
          cristal: 2000,
          deuter: 2000,
          energy: 1000
        },
      buildings: [
        {
          id: 1,
          level: 1,
          points: 10,
          name: 'Kopalnia metalu',
          description: 'Metal to podstawowy surowiec wykorzystywany do wznoszenia budowli, odkrywania nowych technologii i budowania floty. Wykorzystując niewolniczo ludność tubylczą na swojej planecie wydobywasz w kopalniach ten cenny surowiec.',
          cost: {
            metal: 10,
            cristal: 5,
            deuter: 0,
            energy: 10
          },
          function: [
            {
              description: 'Wydobycie metalu: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.05,
          available: true,
          requirements: [],

        },
        {
          id: 2,
          level: 1,
          points: 10,
          name: 'Kopalnia kryształu',
          description: 'Kryształ jest towarem luksusowym. Przy pomocy drogich infrastruktur i wyszkolonych pracowników wydobywasz tutaj ten rzadki materiał.',
          cost: {
            metal: 13,
            cristal: 7,
            deuter: 0,
            energy: 12
          },
          function: [
            {
              description: 'Wydobycie kryształu: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.06,
          available: true,
          requirements: [],

        },
        {
          id: 3,
          level: 1,
          points: 10,
          name: 'Kopalnia deuteru',
          description: 'Deuter odkryto już dawno temu w czasach kryzysu naftowego, kiedy ludzie szukali zasobów zastępczych do napędzania swoich maszyn. Teraz kiedy technologia się rozwinęła nie jest to niczym nadzwyczajnym. Wydobycie Deuteru jest stosunkowo proste lecz czasochłonne. Po odpowiedniej przeróbce napędza on Twoją flotę.',
          cost: {
            metal: 15,
            cristal: 10,
            deuter: 0,
            energy: 18
        },
          function: [
            {
              description: 'Wydobycie deuteru: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.02,
          available: true,
          requirements: [],

        },
        {
          id: 4,
          level: 1,
          points: 10,
          name: 'Elektrownia',
          description: 'Każda planeta zawiera jakieś naturalne źródło, które może zaopatrzyć ją w energię. Czasami są to promienie słonecze, czasami woda, węgiel, czy inne zasoby. Ten potężny budynek zapewnia pozyskiwanie energii z wszystkich tych dóbr.',
          cost: {
            metal: 15,
            cristal: 10,
            deuter: 0,
            energy: -18
          },
          function: [
            {
              description: 'Produkcja energii: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.03,
          available: true,
          requirements: [],

        },
        {
          id: 5,
          level: 0,
          points: 10,
          name: 'Centrum dowodzenia',
          description: 'Miejsce, w którym przebywa cała administracja Twojej planety. Centrum zarządzania, dzięki któremu utrzymujesz władzę na planecie. Rozbudowa tego budynku przyspieszy także wydajność wśród ludności tubylczej, którą wykorzystujesz do wznoszenia budowli.',
          cost: {
            metal: 35,
            cristal: 20,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Czas budowy budynków: ',
              value: 1.01
            }
          ],
          time: 3,
          factor: 1.07,
          available: true,
          requirements: [],

        },
        {
          id: 6,
          level: 0,
          points: 10,
          name: 'Hangar',
          description: 'Potęga, władza, surowce. To i wiele więcej zapewni Ci Twoja flota, Twoje własne imperium. Tylko dzięki swoim statkom podbijesz całe układy słoneczne, galaktyki, a nawet wszechświat! Baty w dłoń i pogoń tubylców do budowy swoich krążowników!',
          cost: {
            metal: 30,
            cristal: 22,
            deuter: 12,
            energy: 0
        },
          function: [
            {
              description: 'Czas budowy floty: ',
              value: 1.03
            }
          ],
          time: 3,
          factor: 1.1,
          available: true,
          requirements: [],

        },
        {
          id: 7,
          level: 0,
          points: 10,
          name: 'Fabryka robotów',
          description: 'Fabryka robotów dostarcza tanią siłę roboczą dzięki której możliwa jest rozbudowa infrastruktury na planecie. Każdy kolejny poziom Fabryki robotów zwiększa szybkość powstawania budowli.',
          cost: {
            metal: 20,
            cristal: 20,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Czas budowy budynków: ',
              value: 1.05
            },
            {
              description: 'Czas budowy floty: ',
              value: 1.06
            },
          ],
          time: 3,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              value: 2
            }
          ],

        },
        {
          id: 8,
          level: 0,
          points: 10,
          name: 'Fabryka nanitów',
          description: 'Wysoko zaawansowana technologia umożliwia budowę mikrorobotów, które są znacznie wydajniejsze przy produkcji od żyjących istot. Nie strajkują, nie narzekają i należycie wykonują powierzone im zadania. Rozbuduj fabrykę nanitów żeby przyspieszyć wznoszenie swojej floty i budynków!',
          cost: {
            metal: 50,
            cristal: 40,
            deuter: 35,
            energy: 0
          },
          function: [
            {
              description: 'Czas budowy budynków: ',
              value: 1.45
            },
            {
              description: 'Czas budowy floty: ',
              value: 1.36
            },
          ],
          time: 10,
          factor: 1.15,
          available: false,
          requirements: [
            {
              description: 'Fabryka robotów',
              value: 10
            }
          ],

        },
        {
          id: 9,
          level: 0,
          points: 10,
          name: 'Magazyn',
          description: 'Brak miejsca - odwieczny problem ludzkości i ograniczonych powierzchni planet. Ale i na to jest sposób, na stosunkowo małej powierzchni budowane są wysokie magazyny do składowania Tytanu, Kwarcu i Uranu. Rozbudowuj swój magazyn żeby już nigdy nie zabrakło Ci miejsca na drogocenne surowce.',
          cost: {
            metal: 20,
            cristal: 20,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Pojemność magazynów: ',
              value: 20000
            },
          ],
          time: 5,
          factor: 1.10,
          available: true,
          requirements: []

        },
        {
          id: 10,
          level: 0,
          points: 10,
          name: 'Labolatorium',
          description: 'Rakiety, lasery, napędy nadprzestrzenne. Czym byłby świat bez naukowców i technologii nad którymi wciąż pracują? Zapewne nie chcesz się dowiedzieć, dlatego wybuduj im godne miejsce pracy i wyprzedź swoich wrogów w wyścigu technologicznym.',
          cost: {
            metal: 30,
            cristal: 35,
            deuter: 25,
            energy: 0
          },
          function: [
            {
              description: 'Czas badań: ',
              value: 1.5
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Fabryka robotów',
              value: 10
            },
            {
              description: 'Fabryka nanitów',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              value: 5
            },
          ],
        },
      ],
      tests: [
        {
          id: 1,
          level: 0,
          points: 15,
          name: 'Technologia energetyczna',
          description: 'Odkąd wynaleziono prąd człowiek stara się udoskonalać technologie energetyczna żeby pozyskiwać ją jeszcze wydajniej. Popędź swoich naukowców a może wynajdą perpetum mobile?',
          cost: {
            metal: 20,
            cristal: 22,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Produkcja energii: ',
              value: 2.5
            },
          ],
          time: 10,
          factor: 1.2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 1
            },
          ],

        },
        {
          id: 2,
          level: 0,
          points: 15,
          name: 'Technologia szpiegowska',
          description: 'Dzięki rozwoju tej technologii będziesz w stanie wydobyć za pomocą Planetarium więcej informacji o planecie przeciwnika.',
          cost: {
            metal: 21,
            cristal: 15,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Dokładność szpiegowania: ',
              value: 1.1
            },
          ],
          time: 6,
          factor: 1.1,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 2
            },
            {
              description: 'Technologia energetyczna',
              value: 3
            },
          ],

        },
        {
          id: 3,
          level: 0,
          points: 15,
          name: 'Technologia komputerowa',
          description: 'Technologia komputerowa zajmuje się podwyższaniem dostępnej wydajności komputerów. Tylko wydajne i efektywne systemy komputerowe są budowane.',
          cost: {
            metal: 15,
            cristal: 19,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Ilość flot: ',
              value: 1
            },
          ],
          time: 6,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 3
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
          ],

        },
        {
          id: 4,
          level: 0,
          points: 15,
          name: 'Technologia bojowa',
          description: 'Technologia bojowa zajmuje się przede wszystkim dalszym rozwojem istniejących już systemów obronnych. Podczas rozwoju szczególny nacisk będzie kładziony na to, aby dostępne systemy wyposażyć w większą moc i dokładniej nią sterować.',
          cost: {
            metal: 20,
            cristal: 19,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 6,
          factor: 1.2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 4
            },
            {
              description: 'Technologia energetyczna',
              value: 1
            },
          ],

        },
        {
          id: 5,
          level: 0,
          points: 18,
          name: 'Technologia ochronna',
          description: 'Technologia ochronna zajmuje się odkrywaniem coraz nowszych możliwości, aby powłoki zaopatrywać w coraz więcej energii, usprawniać je i sprawiać bardziej wytrzymałymi.',
          cost: {
            metal: 22,
            cristal: 17,
            deuter: 13,
            energy: 0
          },
          function: [
            {
              description: 'Wartość obrony: ',
              value: 1.2
            },
          ],
          time: 6,
          factor: 1.2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              value: 3
            },
          ],

        },
        {
          id: 6,
          level: 0,
          points: 18,
          name: 'Opancerzenie',
          description: 'Specjalny stop metali polepsza właściwości opancerzenia. Jeśli stop o bardzo dobrej odporności został raz wynaleziony, struktura molekularna systemów militarnych i statków zostanie zmieniona przez specjalne promieniowanie i uzyska postać najlepszego odkrytego stopu.',
          cost: {
            metal: 30,
            cristal: 5,
            deuter: 2,
            energy: 0
          },
          function: [
            {
              description: 'Opancerzenie: ',
              value: 1.1
            },
          ],
          time: 6,
          factor: 1.17,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 3
            },
          ],

        },
        {
          id: 7,
          level: 0,
          points: 18,
          name: 'Napęd spalinowy',
          description: 'Napędy spalinowe bazują na zasadzie odrzutu. Materia o wysokiej temperaturze zostaje wyrzucona i napędza statek w kierunku przeciwnym do kierunku wyrzutu.',
          cost: {
            metal: 14,
            cristal: 10,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Predkość: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 1
            },
          ],

        },
        {
          id: 8,
          level: 0,
          points: 20,
          name: 'Napęd impulsowy',
          description: 'Napęd impulsowy bazuje na zasadzie odrzutu, przy czym masa promienista powstaje w dużej części jako produkt uboczny, wykorzystywanych do uzyskania energii reakcji jądrowych.',
          cost: {
            metal: 20,
            cristal: 30,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Predkość: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 7
            },
            {
              description: 'Technologia energetyczna',
              value: 2
            },
          ],

        },
        {
          id: 9,
          level: 0,
          points: 20,
          name: 'Napęd nadprzestrzenny',
          description: 'Zakrzywia czasoprzestrzeń bezpośrednio w okolicy statku. Przestrzeń ta zostanie skompresowana, dzięki czemu można bardzo szybko pokonać duże odległości.',
          cost: {
            metal: 30,
            cristal: 35,
            deuter: 20,
            energy: 0
          },
          function: [
            {
              description: 'Predkość: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              value: 2
            },
            {
              description: 'Technologia nadprzestrzenna',
              value: 3
            }
          ],

        },
        {
          id: 10,
          level: 0,
          points: 20,
          name: 'Technologia nadprzestrzenna',
          description: 'Przez połączenie 4-tego i 5-tego wymiaru jest teraz możliwe zbudowanie nowatorskiego napędu, który jest oszczędniejszy i wydajniejszy.',
          cost: {
            metal: 20,
            cristal: 25,
            deuter: 20,
            energy: 0
          },
          function: [
            {
              description: 'Skuteczność badań: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.15,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              value: 2
            },
            {
              description: 'Technologia nadprzestrzenna',
              value: 3
            },
            {
              description: 'Technologia ochronna',
              value: 2
            }
          ],

        },
        {
          id: 11,
          level: 0,
          points: 20,
          name: 'Technologia laserowa',
          description: 'Laser wytwarza intensywny, wysokoenergetyczny, spójny promień świetlny. Te urządzenia znajdują zastosowania we wszystkich możliwych dziedzinach - od komputerów optycznych po ciężka broń laserową.',
          cost: {
            metal: 22,
            cristal: 20,
            deuter: 12,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 5,
          factor: 1.13,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
          ],

        },
        {
          id: 12,
          level: 0,
          points: 21,
          name: 'Technologia jonowa',
          description: 'Rozwija skuteczność śmiertelnego promieniowania przyspieszonych jonów. Rozpędzone jony wyrządzają ogromne szkody obiektom, na które trafiają.',
          cost: {
            metal: 15,
            cristal: 18,
            deuter: 9,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 5,
          factor: 1.13,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              value: 2
            },
          ],

        },
        {
          id: 13,
          level: 0,
          points: 20,
          name: 'Technologia plazmowa',
          description: 'Dalszy etap rozwoju technologii jonowej, która nie przyspiesza już jonów, lecz wysokoenergetyczną plazmę. Taka plazma posiada niszczycielską moc podczas atakowania wyznaczonych obiektów.',
          cost: {
            metal: 20,
            cristal: 30,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 5,
          factor: 1.13,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              value: 2
            },
            {
              description: 'Technologia jonowa',
              value: 3
            }
          ],

        },
        {
          id: 14,
          level: 0,
          points: 25,
          name: 'Międzygalaktyczna Sieć Badań Naukowych',
          description: 'Naukowcy z różnych planet komunikują się ze sobą przez tę sieć. Wraz z rozbudową na kolejny poziom, do sieci zostanie przyłączone dodatkowe laboratoria, przy czym przyłączane będą zawsze laboratoria o najwyższym poziomie. ',
          cost: {
            metal: 21,
            cristal: 20,
            deuter: 25,
            energy: 0
          },
          function: [
            {
              description: 'Ilość laboratoriów: ',
              value: 1
            },
          ],
          time: 5,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
            {
              description: 'Technologia komputerowa',
              value: 4
            },
            {
              description: 'Technologia nadprzestrzenna',
              value: 3
            }
          ],

        },
      ]
    },
    {
      id: 2,
      name: 'Whan',
      resources:
        {
          metal: 2000,
          cristal: 2000,
          deuter: 2000,
          energy: 1000
        },
      buildings: [
        {
          id: 1,
          level: 1,
          points: 10,
          name: 'Kopalnia metalu',
          description: 'Metal to podstawowy surowiec wykorzystywany do wznoszenia budowli, odkrywania nowych technologii i budowania floty. Wykorzystując niewolniczo ludność tubylczą na swojej planecie wydobywasz w kopalniach ten cenny surowiec.',
          cost: {
            metal: 10,
            cristal: 5,
            deuter: 0,
            energy: 10
          },
          function: [
            {
              description: 'Wydobycie metalu: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.05,
          available: true,
          requirements: [],

        },
        {
          id: 2,
          level: 1,
          points: 10,
          name: 'Kopalnia kryształu',
          description: 'Kryształ jest towarem luksusowym. Przy pomocy drogich infrastruktur i wyszkolonych pracowników wydobywasz tutaj ten rzadki materiał.',
          cost: {
            metal: 13,
            cristal: 7,
            deuter: 0,
            energy: 12
          },
          function: [
            {
              description: 'Wydobycie kryształu: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.06,
          available: true,
          requirements: [],

        },
        {
          id: 3,
          level: 1,
          points: 10,
          name: 'Kopalnia deuteru',
          description: 'Deuter odkryto już dawno temu w czasach kryzysu naftowego, kiedy ludzie szukali zasobów zastępczych do napędzania swoich maszyn. Teraz kiedy technologia się rozwinęła nie jest to niczym nadzwyczajnym. Wydobycie Deuteru jest stosunkowo proste lecz czasochłonne. Po odpowiedniej przeróbce napędza on Twoją flotę.',
          cost: {
            metal: 15,
            cristal: 10,
            deuter: 0,
            energy: 18
        },
          function: [
            {
              description: 'Wydobycie deuteru: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.02,
          available: true,
          requirements: [],

        },
        {
          id: 4,
          level: 1,
          points: 10,
          name: 'Elektrownia',
          description: 'Każda planeta zawiera jakieś naturalne źródło, które może zaopatrzyć ją w energię. Czasami są to promienie słonecze, czasami woda, węgiel, czy inne zasoby. Ten potężny budynek zapewnia pozyskiwanie energii z wszystkich tych dóbr.',
          cost: {
            metal: 15,
            cristal: 10,
            deuter: 0,
            energy: -18
          },
          function: [
            {
              description: 'Produkcja energii: ',
              value: 10
            }
          ],
          time: 2,
          factor: 1.03,
          available: true,
          requirements: [],

        },
        {
          id: 5,
          level: 0,
          points: 10,
          name: 'Centrum dowodzenia',
          description: 'Miejsce, w którym przebywa cała administracja Twojej planety. Centrum zarządzania, dzięki któremu utrzymujesz władzę na planecie. Rozbudowa tego budynku przyspieszy także wydajność wśród ludności tubylczej, którą wykorzystujesz do wznoszenia budowli.',
          cost: {
            metal: 35,
            cristal: 20,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Czas budowy budynków: ',
              value: 1.01
            }
          ],
          time: 3,
          factor: 1.07,
          available: true,
          requirements: [],

        },
        {
          id: 6,
          level: 0,
          points: 10,
          name: 'Hangar',
          description: 'Potęga, władza, surowce. To i wiele więcej zapewni Ci Twoja flota, Twoje własne imperium. Tylko dzięki swoim statkom podbijesz całe układy słoneczne, galaktyki, a nawet wszechświat! Baty w dłoń i pogoń tubylców do budowy swoich krążowników!',
          cost: {
            metal: 30,
            cristal: 22,
            deuter: 12,
            energy: 0
        },
          function: [
            {
              description: 'Czas budowy floty: ',
              value: 1.03
            }
          ],
          time: 3,
          factor: 1.1,
          available: true,
          requirements: [],

        },
        {
          id: 7,
          level: 0,
          points: 10,
          name: 'Fabryka robotów',
          description: 'Fabryka robotów dostarcza tanią siłę roboczą dzięki której możliwa jest rozbudowa infrastruktury na planecie. Każdy kolejny poziom Fabryki robotów zwiększa szybkość powstawania budowli.',
          cost: {
            metal: 20,
            cristal: 20,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Czas budowy budynków: ',
              value: 1.05
            },
            {
              description: 'Czas budowy floty: ',
              value: 1.06
            },
          ],
          time: 3,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              value: 2
            }
          ],

        },
        {
          id: 8,
          level: 0,
          points: 10,
          name: 'Fabryka nanitów',
          description: 'Wysoko zaawansowana technologia umożliwia budowę mikrorobotów, które są znacznie wydajniejsze przy produkcji od żyjących istot. Nie strajkują, nie narzekają i należycie wykonują powierzone im zadania. Rozbuduj fabrykę nanitów żeby przyspieszyć wznoszenie swojej floty i budynków!',
          cost: {
            metal: 50,
            cristal: 40,
            deuter: 35,
            energy: 0
          },
          function: [
            {
              description: 'Czas budowy budynków: ',
              value: 1.45
            },
            {
              description: 'Czas budowy floty: ',
              value: 1.36
            },
          ],
          time: 10,
          factor: 1.15,
          available: false,
          requirements: [
            {
              description: 'Fabryka robotów',
              value: 10
            }
          ],

        },
        {
          id: 9,
          level: 0,
          points: 10,
          name: 'Magazyn',
          description: 'Brak miejsca - odwieczny problem ludzkości i ograniczonych powierzchni planet. Ale i na to jest sposób, na stosunkowo małej powierzchni budowane są wysokie magazyny do składowania Tytanu, Kwarcu i Uranu. Rozbudowuj swój magazyn żeby już nigdy nie zabrakło Ci miejsca na drogocenne surowce.',
          cost: {
            metal: 20,
            cristal: 20,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Pojemność magazynów: ',
              value: 20000
            },
          ],
          time: 5,
          factor: 1.10,
          available: true,
          requirements: []

        },
        {
          id: 10,
          level: 0,
          points: 10,
          name: 'Labolatorium',
          description: 'Rakiety, lasery, napędy nadprzestrzenne. Czym byłby świat bez naukowców i technologii nad którymi wciąż pracują? Zapewne nie chcesz się dowiedzieć, dlatego wybuduj im godne miejsce pracy i wyprzedź swoich wrogów w wyścigu technologicznym.',
          cost: {
            metal: 30,
            cristal: 35,
            deuter: 25,
            energy: 0
          },
          function: [
            {
              description: 'Czas badań: ',
              value: 1.5
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Fabryka robotów',
              value: 10
            },
            {
              description: 'Fabryka nanitów',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              value: 5
            },
          ],
        },
      ],
      tests: [
        {
          id: 1,
          level: 0,
          points: 15,
          name: 'Technologia energetyczna',
          description: 'Odkąd wynaleziono prąd człowiek stara się udoskonalać technologie energetyczna żeby pozyskiwać ją jeszcze wydajniej. Popędź swoich naukowców a może wynajdą perpetum mobile?',
          cost: {
            metal: 20,
            cristal: 22,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Produkcja energii: ',
              value: 2.5
            },
          ],
          time: 10,
          factor: 1.2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 1
            },
          ],

        },
        {
          id: 2,
          level: 0,
          points: 15,
          name: 'Technologia szpiegowska',
          description: 'Dzięki rozwoju tej technologii będziesz w stanie wydobyć za pomocą Planetarium więcej informacji o planecie przeciwnika.',
          cost: {
            metal: 21,
            cristal: 15,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Dokładność szpiegowania: ',
              value: 1.1
            },
          ],
          time: 6,
          factor: 1.1,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 2
            },
            {
              description: 'Technologia energetyczna',
              value: 3
            },
          ],

        },
        {
          id: 3,
          level: 0,
          points: 15,
          name: 'Technologia komputerowa',
          description: 'Technologia komputerowa zajmuje się podwyższaniem dostępnej wydajności komputerów. Tylko wydajne i efektywne systemy komputerowe są budowane.',
          cost: {
            metal: 15,
            cristal: 19,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Ilość flot: ',
              value: 1
            },
          ],
          time: 6,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 3
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
          ],

        },
        {
          id: 4,
          level: 0,
          points: 15,
          name: 'Technologia bojowa',
          description: 'Technologia bojowa zajmuje się przede wszystkim dalszym rozwojem istniejących już systemów obronnych. Podczas rozwoju szczególny nacisk będzie kładziony na to, aby dostępne systemy wyposażyć w większą moc i dokładniej nią sterować.',
          cost: {
            metal: 20,
            cristal: 19,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 6,
          factor: 1.2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 4
            },
            {
              description: 'Technologia energetyczna',
              value: 1
            },
          ],

        },
        {
          id: 5,
          level: 0,
          points: 18,
          name: 'Technologia ochronna',
          description: 'Technologia ochronna zajmuje się odkrywaniem coraz nowszych możliwości, aby powłoki zaopatrywać w coraz więcej energii, usprawniać je i sprawiać bardziej wytrzymałymi.',
          cost: {
            metal: 22,
            cristal: 17,
            deuter: 13,
            energy: 0
          },
          function: [
            {
              description: 'Wartość obrony: ',
              value: 1.2
            },
          ],
          time: 6,
          factor: 1.2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              value: 3
            },
          ],

        },
        {
          id: 6,
          level: 0,
          points: 18,
          name: 'Opancerzenie',
          description: 'Specjalny stop metali polepsza właściwości opancerzenia. Jeśli stop o bardzo dobrej odporności został raz wynaleziony, struktura molekularna systemów militarnych i statków zostanie zmieniona przez specjalne promieniowanie i uzyska postać najlepszego odkrytego stopu.',
          cost: {
            metal: 30,
            cristal: 5,
            deuter: 2,
            energy: 0
          },
          function: [
            {
              description: 'Opancerzenie: ',
              value: 1.1
            },
          ],
          time: 6,
          factor: 1.17,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 3
            },
          ],

        },
        {
          id: 7,
          level: 0,
          points: 18,
          name: 'Napęd spalinowy',
          description: 'Napędy spalinowe bazują na zasadzie odrzutu. Materia o wysokiej temperaturze zostaje wyrzucona i napędza statek w kierunku przeciwnym do kierunku wyrzutu.',
          cost: {
            metal: 14,
            cristal: 10,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Predkość: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 1
            },
          ],

        },
        {
          id: 8,
          level: 0,
          points: 20,
          name: 'Napęd impulsowy',
          description: 'Napęd impulsowy bazuje na zasadzie odrzutu, przy czym masa promienista powstaje w dużej części jako produkt uboczny, wykorzystywanych do uzyskania energii reakcji jądrowych.',
          cost: {
            metal: 20,
            cristal: 30,
            deuter: 10,
            energy: 0
          },
          function: [
            {
              description: 'Predkość: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 7
            },
            {
              description: 'Technologia energetyczna',
              value: 2
            },
          ],

        },
        {
          id: 9,
          level: 0,
          points: 20,
          name: 'Napęd nadprzestrzenny',
          description: 'Zakrzywia czasoprzestrzeń bezpośrednio w okolicy statku. Przestrzeń ta zostanie skompresowana, dzięki czemu można bardzo szybko pokonać duże odległości.',
          cost: {
            metal: 30,
            cristal: 35,
            deuter: 20,
            energy: 0
          },
          function: [
            {
              description: 'Predkość: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.12,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              value: 2
            },
            {
              description: 'Technologia nadprzestrzenna',
              value: 3
            }
          ],

        },
        {
          id: 10,
          level: 0,
          points: 20,
          name: 'Technologia nadprzestrzenna',
          description: 'Przez połączenie 4-tego i 5-tego wymiaru jest teraz możliwe zbudowanie nowatorskiego napędu, który jest oszczędniejszy i wydajniejszy.',
          cost: {
            metal: 20,
            cristal: 25,
            deuter: 20,
            energy: 0
          },
          function: [
            {
              description: 'Skuteczność badań: ',
              value: 1.1
            },
          ],
          time: 5,
          factor: 1.15,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              value: 2
            },
            {
              description: 'Technologia nadprzestrzenna',
              value: 3
            },
            {
              description: 'Technologia ochronna',
              value: 2
            }
          ],

        },
        {
          id: 11,
          level: 0,
          points: 20,
          name: 'Technologia laserowa',
          description: 'Laser wytwarza intensywny, wysokoenergetyczny, spójny promień świetlny. Te urządzenia znajdują zastosowania we wszystkich możliwych dziedzinach - od komputerów optycznych po ciężka broń laserową.',
          cost: {
            metal: 22,
            cristal: 20,
            deuter: 12,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 5,
          factor: 1.13,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
          ],

        },
        {
          id: 12,
          level: 0,
          points: 21,
          name: 'Technologia jonowa',
          description: 'Rozwija skuteczność śmiertelnego promieniowania przyspieszonych jonów. Rozpędzone jony wyrządzają ogromne szkody obiektom, na które trafiają.',
          cost: {
            metal: 15,
            cristal: 18,
            deuter: 9,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 5,
          factor: 1.13,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              value: 2
            },
          ],

        },
        {
          id: 13,
          level: 0,
          points: 20,
          name: 'Technologia plazmowa',
          description: 'Dalszy etap rozwoju technologii jonowej, która nie przyspiesza już jonów, lecz wysokoenergetyczną plazmę. Taka plazma posiada niszczycielską moc podczas atakowania wyznaczonych obiektów.',
          cost: {
            metal: 20,
            cristal: 30,
            deuter: 15,
            energy: 0
          },
          function: [
            {
              description: 'Wartość ataku: ',
              value: 1.2
            },
          ],
          time: 5,
          factor: 1.13,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              value: 2
            },
            {
              description: 'Technologia jonowa',
              value: 3
            }
          ],

        },
        {
          id: 14,
          level: 0,
          points: 25,
          name: 'Międzygalaktyczna Sieć Badań Naukowych',
          description: 'Naukowcy z różnych planet komunikują się ze sobą przez tę sieć. Wraz z rozbudową na kolejny poziom, do sieci zostanie przyłączone dodatkowe laboratoria, przy czym przyłączane będą zawsze laboratoria o najwyższym poziomie. ',
          cost: {
            metal: 21,
            cristal: 20,
            deuter: 25,
            energy: 0
          },
          function: [
            {
              description: 'Ilość laboratoriów: ',
              value: 1
            },
          ],
          time: 5,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              value: 4
            },
            {
              description: 'Technologia komputerowa',
              value: 4
            },
            {
              description: 'Technologia nadprzestrzenna',
              value: 3
            }
          ],

        },
      ]
    },
  ]
}

export default User;