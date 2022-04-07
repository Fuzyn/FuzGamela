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
        [
          {
            metal: 2000,
            factor: 1
          },
          {
            cristal: 2000,
            factor: 1
          },
          {
            deuter: 2000,
            factor: 1
          },
          {
            energy: 0,
            factor: 1
          }
        ],
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
            energy: 7
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
            energy: 9
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
            energy: 12
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
            energy: 0
          },
          function: [
            {
              description: 'Produkcja energii: ',
              value: 40
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
              source: 'buildings',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              source: 'buildings',
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
              source: 'buildings',
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
              source: 'buildings',
              value: 10
            },
            {
              description: 'Fabryka nanitów',
              source: 'buildings',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              source: 'buildings',
              value: 5
            },
          ],
        },
        {
          id: 11,
          level: 0,
          points: 15,
          name: 'Silos rakietowy',
          description: '	Silos rakietowy pełni rolę magazynu i wyrzutni dla rakiet międzyplanetarnych oraz przeciwrakiet.',
          cost: {
            metal: 40,
            cristal: 10,
            deuter: 25,
            energy: 0
          },
          function: [
            {
              description: 'Ilość rakiet: ',
              value: 50
            },
          ],
          time: 5,
          factor: 2,
          available: true,
          requirements: [],
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
              source: 'buildings',
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
              source: 'buildings',
              value: 2
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 3
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 4
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 7
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
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
              source: 'buildings',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia jonowa',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia komputerowa',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
              value: 3
            },
          ],
        },
        {
          id: 15,
          level: 0,
          points: 50,
          name: 'Rozwój grawitonów',
          description: 'Przez wystrzał skoncentrowanego ładunku cząstek grawitonów może zostaćwytworzone sztuczne pole grawitacyjne, które może niszczyć statki i księżyce.',
          cost: {
            metal: 0,
            cristal: 0,
            deuter: 0,
            energy: 1000
          },
          function: [
            {
              description: 'Siła działa grawitonowego: ',
              value: 100
            },
          ],
          time: 0,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              source: 'buildings',
              value: 12
            }
          ],
        },
        {
          id: 16,
          level: 0,
          points: 50,
          name: '	Technologia Antymaterii',
          description: 'Antymaterię i zwykłą materię jaką znamy z codziennego życia różni jedynie znak ładunku elektrycznego. Ta specyficzna właściwość powoduje, że podczas kontaktu obu rodzajów cząstek ulegają one procesowi Anihilacji, która doprowadza do zamiany ich na promieniowanie o sumarycznej energii równoważnej ich masom.',
          cost: {
            metal: 30,
            cristal: 30,
            deuter: 50,
            energy: 0
          },
          function: [
            {
              description: 'Siła miotacza antymaterii: ',
              value: 100
            },
          ],
          time: 10,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              source: 'buildings',
              value: 15
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 12
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 13
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 14
            },
            {
              description: 'Technologia jonowa',
              source: 'tests',
              value: 8
            },
            {
              description: 'Technologia plazmowa',
              source: 'tests',
              value: 13
            }
          ],
        },
        {
          id: 17,
          level: 0,
          points: 50,
          name: 'Strumień Dezintegracyjny',
          description: 'Przy wykorzystaniu zaawansowanych Technologii możliwe jest wygenerowanie niebezpiecznego strumienia, który po napotkaniu jakiejkolwiek materii rozrywa wiązania między wszystkimi atomami. Powoduje to natychmiastową zapaść cząsteczek i rozbicie ich na wolne atomy pierwiastków.',
          cost: {
            metal: 35,
            cristal: 40,
            deuter: 30,
            energy: 0
          },
          function: [
            {
              description: 'Siła działa dezintegrującego: ',
              value: 100
            },
          ],
          time: 10,
          factor: 2,
          available: false,
          requirements: [
            {
              description: 'Labolatorium',
              source: 'buildings',
              value: 18
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 15
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 19
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 17
            },
            {
              description: 'Technologia bojowa',
              source: 'tests',
              value: 16
            },
            {
              description: 'Technologia plazmowa',
              source: 'tests',
              value: 15
            }
          ],
        }
      ],
      fleet: [
        {
          id: 1,
          quantity: 0,
          points: 6,
          name: 'Mały transporter',
          description: 'Transportery mają mniej więcej taką samą wielkość, jak myśliwce nie posiadają jednak wydajnych napędów, ani broni pokładowej, aby zapewnić dużą przestrzeń ładunkową. Ładowność małego transportera wynosi 5000 jednostek surowca. Z powodu małej siły ognia transportery są często eskortowane przez inne statki kosmiczne.',
          cost: {
            metal: 10,
            cristal: 10,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Lekki myśliwiec: ',
              value: 2
            },
            {
              description: 'Szybki ogień od Ciężki myśliwiec: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 250
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 800
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd spalinowy',
          atack: 5,
          defence: 10,
          capasity: 5000,
          speed: 7,
          fuel: 20,
          time: 5,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 1
            }
          ],
        },
        {
          id: 2,
          quantity: 0,
          points: 10,
          name: 'Duży transporter',
          description: 'Ten statek prawie nie ma broni, ani innych zaawansowanych technologii na pokładzie. Z tego powodu nie powinny być one nigdy wysyłane same. Duży transporter dzięki wysoko rozwiniętemu napędowi spalinowemu służy do szybkiego transportu surowców między planetami i zazwyczaj towarzyszy flotom podczas ich ataków na wrogie planety, aby zrabować możliwie jak najwięcej surowców. Czasami zastępowany przez szybsze Małe transportery, pomimo ich mniejszej ładowności.',
          cost: {
            metal: 20,
            cristal: 20,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 250
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 300
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd spalinowy',
          atack: 5,
          defence: 25,
          capasity: 25000,
          speed: 8,
          fuel: 30,
          time: 7,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 3
            },
            {
              description: 'Napęd spalinowy',
              source: 'tests',
              value: 1
            }
          ],
        },
        {
          id: 3,
          quantity: 0,
          points: 5,
          name: 'Lekki myśliwiec',
          description: 'Lekki myśliwiec to zwrotny statek, który można zastać na prawie każdej planecie. Jego koszty nie są zbyt wysokie, jednakże jego pole ochronne i ładowność są bardzo małe. Na lekkie myśliwce mawia się popularnie "mięso armatnie" głównie dlatego, iż w walkach biorą udział tysiące lekkich mysliwców, które biorą na siebie ogień floty przeciwnika, dając pole do popisu silniejszym statkom.',
          cost: {
            metal: 5,
            cristal: 5,
            deuter: 3,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 2
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Krążownik: ',
              value: 6
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 200
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 850
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd spalinowy',
          atack: 50,
          defence: 10,
          capasity: 50,
          speed: 10,
          fuel: 50,
          time: 5,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 2
            },
            {
              description: 'Technologia bojowa',
              source: 'tests',
              value: 2
            },
            {
              description: 'Napęd spalinowy',
              source: 'tests',
              value: 1
            }
          ],
        },
        {
          id: 4,
          quantity: 0,
          points: 20,
          name: 'Ciężki myśliwiec',
          description: 'Podczas dalszego rozwoju lekkiego myśliwca naukowcy doszli do punktu, w którym konwencjonalne napędy nie dostarczały już wystarczającej mocy. Aby nowy statek mógł się optymalnie poruszać, po raz pierwszy został użyty napęd impulsowy. Podwyższył on wprawdzie koszty, jednak dał także nowe możliwości. Poprzez zastosowanie tego napędu pozostało więcej energii dla broni i powłoki ochronnej. Poza tym w tego typu myśliwcach zostały zastosowane materiały o wyższej jakości.',
          cost: {
            metal: 15,
            cristal: 10,
            deuter: 7,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 100
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 400
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd impulsowy',
          atack: 150,
          defence: 25,
          capasity: 100,
          speed: 12,
          fuel: 75,
          time: 5,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 3
            },
            {
              description: 'Technologia bojowa',
              source: 'tests',
              value: 3
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 3
            },
            {
              description: 'Napęd impulsowy',
              source: 'tests',
              value: 1
            }
          ],
        },
        {
          id: 5,
          quantity: 0,
          points: 23,
          name: 'Krążownik',
          description: 'Krążownik jest prawie trzy razy lepiej opancerzony niż ciężki myśliwiec i dysponuje ponad dwa razy większą siłą ognia. W dodatku jest bardzo szybki.',
          cost: {
            metal: 25,
            cristal: 15,
            deuter: 15,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Lekki myśliwiec: ',
              value: 6
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia rakiet: ',
              value: 10
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 33
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 50
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 15
            }
          ],
          weaponType: 'Działa jonowe',
          fuelType: 'Napęd impulsowy',
          atack: 400,
          defence: 50,
          capasity: 800,
          speed: 15,
          fuel: 300,
          time: 8,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 3
            },
            {
              description: 'Technologia bojowa',
              source: 'tests',
              value: 3
            },
            {
              description: 'Napęd impulsowy',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia jonowa',
              source: 'tests',
              value: 2
            }
          ],
        },
        {
          id: 6,
          quantity: 0,
          points: 30,
          name: 'Okręt wojenny',
          description: 'Okręty wojenne tworzą trzon floty. Ich ciężkie działa, duża prędkość i pojemność ładunkowa robią z nich naprawdę groźych przeciwników.',
          cost: {
            metal: 35,
            cristal: 30,
            deuter: 22,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia rakiet: ',
              value: 8
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 30
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 7
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 35
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 5
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 1000,
          defence: 200,
          capasity: 1500,
          speed: 10,
          fuel: 500,
          time: 10,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 6
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 2
            }
          ],
        },
        {
          id: 7,
          quantity: 0,
          points: 20,
          name: 'Statek kolonizacyjny',
          description: 'Niezamieszkałe planety mogą być kolonizowane przy pomocy tych statków.',
          cost: {
            metal: 100,
            cristal: 100,
            deuter: 90,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 250
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 6
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd impulsowy',
          atack: 50,
          defence: 100,
          capasity: 7500,
          speed: 25,
          fuel: 1000,
          time: 50,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 3
            },
            {
              description: 'Napęd impulsowy',
              source: 'tests',
              value: 3
            }
          ],
        },
        {
          id: 8,
          quantity: 0,
          points: 40,
          name: 'Recykler',
          description: 'Za pomocą recyklerów można odzyskać surowce z pól zniszczeń.',
          cost: {
            metal: 50,
            cristal: 50,
            deuter: 10,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 250
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 40
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 6
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd spalinowy',
          atack: 1,
          defence: 10,
          capasity: 20000,
          speed: 2,
          fuel: 300,
          time: 5,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 3
            },
            {
              description: 'Napęd spalinowy',
              source: 'tests',
              value: 3
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 2
            }
          ],
        },
        {
          id: 9,
          quantity: 0,
          points: 2,
          name: 'Sonda szpiegowska',
          description: 'Sondy szpiegowskie to małe, zwrotne statki bezzałogowe, które przez oddalenie się na duże odległości dostarczają informacji o obcych flotach i planetach.',
          cost: {
            metal: 0,
            cristal: 100,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Mały transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Duży transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Lekki myśliwiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Ciężki myśliwiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Krążownik: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt wojenny: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Statek kolonizacyjny: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Recykler: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Niszczyciel: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 1
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Mega transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 290
            },
            {
              description: 'Szybki ogień od Wyrzutnia rakiet: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Lekkie działo laserowe: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Ciężkie działo laserowe: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Działo Gaussa: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Działo jonowe: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Wyrzutnia plazmy: ',
              value: 5
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd spalinowy',
          atack: 1,
          defence: 1,
          capasity: 10,
          speed: 100000,
          fuel: 1,
          time: 2,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 2
            },
            {
              description: 'Napęd spalinowy',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia szpiegowska',
              source: 'tests',
              value: 3
            }
          ],
        },
        {
          id: 10,
          quantity: 0,
          points: 60,
          name: 'Bombowiec',
          description: 'Bombowiec został stworzony, aby niszczyć systemy obronne innych planet.',
          cost: {
            metal: 200,
            cristal: 150,
            deuter: 100,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia rakiet: ',
              value: 20
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 20
            },
            {
              description: 'Szybki ogień przeciw Ciężkie działo laserowe: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Działo jonowe: ',
              value: 10
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 25
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 2
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 12
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 20
            }
          ],
          weaponType: 'Miotacze plazmy',
          fuelType: 'Napęd impulsowy',
          atack: 1000,
          defence: 500,
          capasity: 500,
          speed: 4,
          fuel: 1000,
          time: 12,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 8
            },
            {
              description: 'Napęd impulsowy',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia plazmowa',
              source: 'tests',
              value: 6
            }
          ],
        },
        {
          id: 11,
          quantity: 0,
          points: 2,
          name: '	Satelita słoneczny',
          description: 'Satelity słoneczne to proste platformy pokryte ogniwami słonecznymi, które znajdują się wysoko na stałej orbicie. Gromadzą światło słoneczne i przekazują je dalej przez laser do stacji naziemnej.',
          cost: {
            metal: 0,
            cristal: 10,
            deuter: 5,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Mały transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Duży transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Lekki myśliwiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Ciężki myśliwiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Krążownik: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt wojenny: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Statek kolonizacyjny: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Recykler: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Niszczyciel: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 1
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Mega transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 500
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 45
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 3
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Brak napędu',
          atack: 1,
          defence: 10,
          capasity: 0,
          speed: 0,
          fuel: 0,
          time: 3,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 1
            }
          ],
        },
        {
          id: 12,
          quantity: 0,
          points: 60,
          name: 'Niszczyciel',
          description: 'Niszczyciel to król wśród statków wojennych. Posiada wielorzędowe falangi dział jonowych, plazmowych i Gaussa.',
          cost: {
            metal: 250,
            cristal: 200,
            deuter: 70,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Pancernik: ',
              value: 2
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 10
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 2
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 50
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 32
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 30
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 2000,
          defence: 500,
          capasity: 2000,
          speed: 5,
          fuel: 1000,
          time: 11,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 8
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 5
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
              value: 5
            }
          ],
        },
        {
          id: 13,
          quantity: 0,
          points: 500,
          name: 'Gwiazda śmierci',
          description: 'Gwiazda śmierci jest uzbrojona w ogromne działo grawitonowe, które może niszczyć statki tak duże jak niszczyciele a nawet księżyce.',
          cost: {
            metal: 5000,
            cristal: 4000,
            deuter: 2500,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 250
            },
            {
              description: 'Szybki ogień przeciw Duży transporter: ',
              value: 250
            },
            {
              description: 'Szybki ogień przeciw Lekki myśliwiec: ',
              value: 200
            },
            {
              description: 'Szybki ogień przeciw Ciężki myśliwiec: ',
              value: 100
            },
            {
              description: 'Szybki ogień przeciw Krążownik: ',
              value: 33
            },
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Statek kolonizacyjny: ',
              value: 250
            },
            {
              description: 'Szybki ogień przeciw Recykler: ',
              value: 250
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 1
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 25
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 1
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Pancernik: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Mega transporter: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 900
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia rakiet: ',
              value: 200
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 200
            },
            {
              description: 'Szybki ogień przeciw Ciężkie działo laserowe: ',
              value: 100
            },
            {
              description: 'Szybki ogień przeciw Działo Gaussa: ',
              value: 50
            },
            {
              description: 'Szybki ogień przeciw Działo jonowe: ',
              value: 100
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 7
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 16
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 45
            }
          ],
          weaponType: 'Działa grawitronowe',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 200000,
          defence: 50000,
          capasity: 1000000,
          speed: 1,
          fuel: 1,
          time: 120,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 12
            },
            {
              description: 'Rozwój grawitonów',
              source: 'tests',
              value: 1
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 7
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
              value: 6
            }
          ],
        },
        {
          id: 14,
          quantity: 0,
          points: 60,
          name: 'Pancernik',
          description: 'Ten statek jest technologicznym cackiem, śmiertelnie niebezpiecznym dla wrogiej floty.',
          cost: {
            metal: 70,
            cristal: 30,
            deuter: 25,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Duży transporter: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Ciężki myśliwiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień przeciw Krążownik: ',
              value: 4
            },
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 7
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Mega transporter: ',
              value: 2
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Niszczyciel: ',
              value: 2
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 60
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 32
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 30
            }
          ],
          weaponType: 'Miotacze laserowe',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 700,
          defence: 400,
          capasity: 750,
          speed: 10,
          fuel: 250,
          time: 10,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 8
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 12
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 6
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
              value: 4
            }
          ],
        },
        {
          id: 15,
          quantity: 0,
          points: 400,
          name: 'Stacja orbitalna',
          description: 'Stacja orbitalna to wyspecjalizowany system zautomatyzowanych miotaczy plazmowych oraz działek laserowych , który nie traci energii strzału tak jak inne systemy obronne, ze względu na to, że znajduje się na orbicie planety. Dzięki temu osiąga ogromną moc, która może zmieść statki wroga z orbity w kilka sekund.',
          cost: {
            metal: 3000,
            cristal: 2000,
            deuter: 2000,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Duży transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Lekki myśliwiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Ciężki myśliwiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Krążownik: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Statek kolonizacyjny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Recykler: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel: ',
              value: 2
            },
            {
              description: 'Szybki ogień przeciw Gwiazda Śmierci: ',
              value: 7
            },
            {
              description: 'Szybki ogień przeciw Mega transporter: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 6
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 9
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 50
            }
          ],
          weaponType: 'Miotacze laserowe',
          fuelType: 'Brak napędu',
          atack: 100000,
          defence: 60000,
          capasity: 0,
          speed: 0,
          fuel: 0,
          time: 100,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 12
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 10
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 10
            },
            {
              description: 'Opancerzenie',
              source: 'tests',
              value: 8
            },
            {
              description: 'Technologia komputerowa',
              source: 'tests',
              value: 10
            }
          ],
        },
        {
          id: 16,
          quantity: 0,
          points: 63,
          name: 'Mega transporter',
          description: 'Coraz większe zapotrzebowanie na ładowność statków wykorzystywanych przez kolonie górnicze do transportu wydobytych surowców zmusiło naukowców do opracowania zupełnie nowego typu transportera. Dzięki zastosowaniu miniaturyzacji oraz nanotechnologii możliwe było stworzenie tego ogromnego pojazdu. Zastosowano w nim także najnowsze silniki nadprzestrzenne by skrócić czas podróży.',
          cost: {
            metal: 100,
            cristal: 100,
            deuter: 5,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 30
            },
            {
              description: 'Szybki ogień od Pancernik: ',
              value: 2
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 25
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 20
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 5,
          defence: 40,
          capasity: 125000,
          speed: 18,
          fuel: 500,
          time: 9,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 8
            },
            {
              description: 'Fabryka nanitów',
              source: 'buildings',
              value: 1
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 6
            },
            {
              description: 'Opancerzenie',
              source: 'tests',
              value: 5
            }
          ],
        },
        {
          id: 17,
          quantity: 0,
          points: 200,
          name: 'Annihilator',
          description: 'Odkrycie sposobu wytwarzania Antymaterii poprzez specjalne reakcje termojądrowe z wykorzystaniem wysokoenergerycznych laserów pozwoliło na opracowanie specjalnego rodzaju rakiety krótkiego zasięgu, która bezpośrednio przed zderzeniem z obiektem doprowadza do Anihilacji kilku ton cząstek skompresowanego wodoru i antywodoru, wytwarzając przy tym ogromne ilości Energii.',
          cost: {
            metal: 150,
            cristal: 120,
            deuter: 70,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Duży transporter: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Lekki myśliwiec: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Ciężki myśliwiec: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Krążownik: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Statek kolonizacyjny: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Recykler: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Gwiazda Śmierci: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Pancernik: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Mega transporter: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Lotniskowiec: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Bombowiec Hadronowy: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Okręt Plazmowy: ',
              value: 2
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia rakiet: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Ciężkie działo laserowe: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Działo Gaussa: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Działo jonowe: ',
              value: 10
            },
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 9
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 12
            }
          ],
          weaponType: 'Miotacze antymaterii',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 400000,
          defence: 70000,
          capasity: 1500,
          speed: 12,
          fuel: 200,
          time: 15,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 15
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 12
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 7
            },
            {
              description: 'Opancerzenie',
              source: 'tests',
              value: 6
            },
            {
              description: 'Technologia Antymaterii',
              source: 'tests',
              value: 5
            },
            {
              description: 'Technologia komputerowa',
              source: 'tests',
              value: 12
            }
          ],
        },
        {
          id: 18,
          quantity: 0,
          points: 10,
          name: 'Wahadłowiec',
          description: 'W XX i XXI wieku ludzie zaczęli podbój kosmosu. Dzięki stworzeniu tego typu statku, mogli wielokrotnie wysyłać ludzi i ładunek na orbitę okołoziemską, ale zużywali na to ogromne ilości paliwa rakietowego, zaś sam statek był bardzo wolny.',
          cost: {
            metal: 50,
            cristal: 30,
            deuter: 30,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Mały transporter: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Duży transporter: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Lekki myśliwiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Ciężki myśliwiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Krążownik: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Okręt wojenny: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Statek kolonizacyjny: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Recykler: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Niszczyciel: ',
              value: 4
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 900
            },
            {
              description: 'Szybki ogień od Stacja orbitalna: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 15
            },
            {
              description: 'Szybki ogień od Lotniskowiec: ',
              value: 200
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 80
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd spalinowy',
          atack: 1,
          defence: 1,
          capasity: 50,
          speed: 1,
          fuel: 100,
          time: 5,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 4
            },
            {
              description: 'Napęd spalinowy',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 4
            }
          ],
        },
        {
          id: 19,
          quantity: 0,
          points: 250,
          name: 'Lotniskowiec',
          description: 'Lotniskowiec to ogromny okręt, którego zadaniem jest transport mniejszych, szybszych i skuteczniejszych jednostek. W swoim hangarze potrafi zmieścić i przygotować do walki setki myśliwców, które z łatwością radzą sobie z dużymi ilościami mniejszych jednostek.',
          cost: {
            metal: 180,
            cristal: 220,
            deuter: 120,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Mały transporter: ',
              value: 800
            },
            {
              description: 'Szybki ogień przeciw Duży transporter: ',
              value: 300
            },
            {
              description: 'Szybki ogień przeciw Lekki myśliwiec: ',
              value: 850
            },
            {
              description: 'Szybki ogień przeciw Ciężki myśliwiec: ',
              value: 400
            },
            {
              description: 'Szybki ogień przeciw Krążownik: ',
              value: 50
            },
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Statek kolonizacyjny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Recykler: ',
              value: 40
            },
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 290
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 2
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 500
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 200
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 9
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 14
            }
          ],
          weaponType: 'Działa jonowe',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 2000,
          defence: 30000,
          capasity: 5000,
          speed: 4,
          fuel: 400,
          time: 15,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 16
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 15
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 10
            },
            {
              description: 'Opancerzenie',
              source: 'tests',
              value: 12
            },
            {
              description: 'Technologia jonowa',
              source: 'tests',
              value: 10
            },
            {
              description: 'Technologia komputerowa',
              source: 'tests',
              value: 15
            }
          ],
        },
        {
          id: 20,
          quantity: 0,
          points: 220,
          name: 'Bombowiec Hadronowy',
          description: 'Dzięki wykorzystaniu zjawiska rozpadu hadronowego możliwe było skonstruowanie idealnej broni przeciwko instalacjom powierzchniowym. Odpowiednio skonstruowane drony, dzięki zastosowaniu sztucznej inteligencji, osiągają skuteczność trafień na poziomie 99%.',
          cost: {
            metal: 230,
            cristal: 150,
            deuter: 100,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 45
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia rakiet: ',
              value: 150
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 150
            },
            {
              description: 'Szybki ogień przeciw Ciężkie działo laserowe: ',
              value: 75
            },
            {
              description: 'Szybki ogień przeciw Działo Gaussa: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Działo jonowe: ',
              value: 75
            },
            {
              description: 'Szybki ogień przeciw Wyrzutnia plazmy: ',
              value: 7
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 3
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 6
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 8
            }
          ],
          weaponType: 'Broń konwencjonalna',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 35000,
          defence: 5000,
          capasity: 4000,
          speed: 5,
          fuel: 400,
          time: 17,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 12
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 16
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 10
            }
          ],
        },
        {
          id: 21,
          quantity: 0,
          points: 260,
          name: 'Okręt Plazmowy',
          description: 'Pojazd ten jest wyposażony w wiele wysokoenergetycznych dział pulsacyjno-plazmowych. Każdy dobry dowódca doceni ich wysoką skuteczność przeciwko dobrze opancerzonym jednostkom wrogich flot bojowych. Niestety, salwy plazmowe nie są dostatecznie szybkie, by mniejsze, lecz bardziej zwrotne statki nie mogły im umknąć.',
          cost: {
            metal: 270,
            cristal: 200,
            deuter: 70,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Krążownik: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 35
            },
            {
              description: 'Szybki ogień przeciw Statek kolonizacyjny: ',
              value: 6
            },
            {
              description: 'Szybki ogień przeciw Recykler: ',
              value: 6
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 12
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel: ',
              value: 50
            },
            {
              description: 'Szybki ogień przeciw Gwiazda Śmierci: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Pancernik: ',
              value: 60
            },
            {
              description: 'Szybki ogień przeciw Stacja orbitalna: ',
              value: 6
            },
            {
              description: 'Szybki ogień przeciw Mega transporter: ',
              value: 25
            },
            {
              description: 'Szybki ogień przeciw Annihilator: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Lotniskowiec: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Bombowiec Hadronowy: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 6
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 2
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 10
            }
          ],
          weaponType: 'Miotacze plazmy',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 47500,
          defence: 10000,
          capasity: 8500,
          speed: 8,
          fuel: 450,
          time: 18,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 18
            },
            {
              description: 'Technologia plazmowa',
              source: 'tests',
              value: 18
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 12
            }
          ],
        },
        {
          id: 22,
          quantity: 0,
          points: 280,
          name: 'Niszczyciel Protonowy',
          description: 'Kolejny przykład znakomitego wykorzystania technologii anihilacyjnej. Wystrzelenie skoncentrowanego strumienia antyprotonów we wrogą jednostkę doprowadza do rozpoczęcia reakcji kaskadowych w opancerzeniu statku, przez co traci on swoją stabilność i rozpada się pod wpływem dekompresji.',
          cost: {
            metal: 300,
            cristal: 200,
            deuter: 150,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Satelita słoneczny: ',
              value: 3
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel: ',
              value: 32
            },
            {
              description: 'Szybki ogień przeciw Gwiazda Śmierci: ',
              value: 16
            },
            {
              description: 'Szybki ogień przeciw Pancernik: ',
              value: 32
            },
            {
              description: 'Szybki ogień przeciw Stacja orbitalna: ',
              value: 9
            },
            {
              description: 'Szybki ogień przeciw Mega transporter: ',
              value: 20
            },
            {
              description: 'Szybki ogień przeciw Annihilator: ',
              value: 9
            },
            {
              description: 'Szybki ogień przeciw Lotniskowiec: ',
              value: 9
            },
            {
              description: 'Szybki ogień przeciw Bombowiec Hadronowy: ',
              value: 6
            },
            {
              description: 'Szybki ogień przeciw Okręt Plazmowy: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Lekkie działo laserowe: ',
              value: 25
            },
            {
              description: 'Szybki ogień przeciw Ciężkie działo laserowe: ',
              value: 15
            },
            {
              description: 'Szybki ogień przeciw Działo Gaussa: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Działo jonowe: ',
              value: 15
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Okręt Dezintegrujący: ',
              value: 2
            }
          ],
          weaponType: 'Miotacze antymaterii',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 440000,
          defence: 20000,
          capasity: 7500,
          speed: 2,
          fuel: 350,
          time: 17,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 20
            },
            {
              description: 'Technologia Antymaterii',
              source: 'tests',
              value: 6
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 15
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 9
            }
          ],
        },
        {
          id: 23,
          quantity: 0,
          points: 320,
          name: 'Okręt Dezintegrujący',
          description: 'Jedna z najpotężniejszych jednostek dostępnych w historii Wszechświata. Wykorzystanie śmiercionośnych strumieni dezintegrujących rozrywa wrogie statki w ułamkach sekund na drobne kawałeczki. Jedynym ratunkiem przed tą ogromną mocą jest ucieczka w najdalsze zakamarki kosmosu.',
          cost: {
            metal: 320,
            cristal: 250,
            deuter: 200,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Okręt wojenny: ',
              value: 5
            },
            {
              description: 'Szybki ogień przeciw Bombowiec: ',
              value: 20
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Gwiazda Śmierci: ',
              value: 45
            },
            {
              description: 'Szybki ogień przeciw Pancernik: ',
              value: 30
            },
            {
              description: 'Szybki ogień przeciw Stacja orbitalna: ',
              value: 50
            },
            {
              description: 'Szybki ogień przeciw Annihilator: ',
              value: 12
            },
            {
              description: 'Szybki ogień przeciw Wahadłowiec: ',
              value: 80
            },
            {
              description: 'Szybki ogień przeciw Lotniskowiec: ',
              value: 14
            },
            {
              description: 'Szybki ogień przeciw Bombowiec Hadronowy: ',
              value: 8
            },
            {
              description: 'Szybki ogień przeciw Okręt Plazmowy: ',
              value: 10
            },
            {
              description: 'Szybki ogień przeciw Niszczyciel Protonowy: ',
              value: 2
            }
          ],
          quickGunMinus: [],
          weaponType: 'Działa dezintegrujące',
          fuelType: 'Napęd nadprzestrzenny',
          atack: 500000,
          defence: 50000,
          capasity: 14000,
          speed: 1,
          fuel: 600,
          time: 20,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 25
            },
            {
              description: 'Technologia komputerowa',
              source: 'tests',
              value: 18
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
              value: 10
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 20
            },
            {
              description: 'Napęd nadprzestrzenny',
              source: 'tests',
              value: 15
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 22
            },
            {
              description: 'Strumień Dezintegracyjny',
              source: 'tests',
              value: 2
            }
          ],
        },
      ],
      defence: [
        {
          id: 1,
          quantity: 0,
          points: 20,
          name: 'Wyrzutnia rakiet',
          description: 'Wyrzutnia rakiet to prosta i korzystna cenowo możliwość obrony.',
          cost: {
            metal: 100,
            cristal: 0,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Krążownik: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Okręt wojenny: ',
              value: 8
            },
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 20
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 200
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 30
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 150
            },
          ],
          weaponType: 'Broń konwencjonalna',
          atack: 80,
          defence: 20,
          time: 2,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 1
            }
          ],
        },
        {
          id: 2,
          quantity: 0,
          points: 30,
          name: 'Lekkie działo laserowe',
          description: 'Przez skoncentrowany ostrzał wybranego celu fotonami można wyrządzić znacznie większe szkody niż przy pomocy zwykłej broni balistycznej.',
          cost: {
            metal: 75,
            cristal: 25,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 20
            },
            {
              description: 'Szybki ogień od Niszczyciel: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 200
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 30
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 150
            },
            {
              description: 'Szybki ogień od Okręt Plazmowy: ',
              value: 6
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 25
            }
          ],
          weaponType: 'Miotacze laserowe',
          atack: 100,
          defence: 25,
          time: 3,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 1
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 3
            }
          ],
        },
        {
          id: 3,
          quantity: 0,
          points: 30,
          name: 'Ciężkie działo laserowe',
          description: 'Ciężkie działo laserowe to następca lekkiego lasera.',
          cost: {
            metal: 150,
            cristal: 50,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 100
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 75
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 15
            }
          ],
          weaponType: 'Miotacze laserowe',
          atack: 250,
          defence: 100,
          time: 4,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 2
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 3
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 6
            }
          ],
        },
        {
          id: 4,
          quantity: 0,
          points: 50,
          name: 'Działo Gaussa',
          description: 'Działo Gaussa przyspiesza kilkutonowe pociski, wykorzystując przy tym gigantyczną ilość energii.',
          cost: {
            metal: 350,
            cristal: 200,
            deuter: 100,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 50
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 5
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 30
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 5
            }
          ],
          weaponType: 'Broń konwencjonalna',
          atack: 1100,
          defence: 200,
          time: 5,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 6
            },
            {
              description: 'Technologia bojowa',
              source: 'tests',
              value: 3
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 1
            }
          ],
        },
        {
          id: 5,
          quantity: 0,
          points: 30,
          name: 'Działo jonowe',
          description: 'Działo jonowe przyśpiesza jony skierowane na cel ataku. Destabilizują one powłokę ochronną i w skutek zmian elektromagnetycznych uszkadzają elektronikę.',
          cost: {
            metal: 50,
            cristal: 150,
            deuter: 0,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Bombowiec: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Gwiazda Śmierci: ',
              value: 100
            },
            {
              description: 'Szybki ogień od Annihilator: ',
              value: 10
            },
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 75
            },
            {
              description: 'Szybki ogień od Niszczyciel Protonowy: ',
              value: 15
            }
          ],
          weaponType: 'Działa jonowe',
          atack: 150,
          defence: 500,
          time: 3,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 4
            },
            {
              description: 'Technologia jonowa',
              source: 'tests',
              value: 4
            }
          ],
        },
        {
          id: 6,
          quantity: 0,
          points: 100,
          name: 'Wyrzutnia plazmy',
          description: 'W tym czasie technologia laserowa była już prawie perfekcyjna, technologia jonowa była w jej końcowym stadium rozwoju.',
          cost: {
            metal: 400,
            cristal: 250,
            deuter: 100,
            energy: 0
          },
          quickGunPlus: [
            {
              description: 'Szybki ogień przeciw Sonda szpiegowska: ',
              value: 5
            }
          ],
          quickGunMinus: [
            {
              description: 'Szybki ogień od Bombowiec Hadronowy: ',
              value: 7
            }
          ],
          weaponType: 'Miotacze plazmy',
          atack: 3000,
          defence: 300,
          time: 3,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 8
            },
            {
              description: 'Technologia plazmowa',
              source: 'tests',
              value: 7
            }
          ],
        },
        {
          id: 7,
          quantity: 0,
          points: 1500,
          name: 'Mała powłoka ochronna',
          description: 'Mała powłoka ochronna osłania całą planetę polem, które może absorbować znaczne ilości energii.',
          cost: {
            metal: 1000,
            cristal: 1000,
            deuter: 1000,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [],
          weaponType: 'Broń konwencjonalna',
          atack: 1,
          defence: 2000,
          time: 3,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 2
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 2
            }
          ],
        },
        {
          id: 8,
          quantity: 0,
          points: 7500,
          name: 'Duża powłoka ochronna',
          description: 'Stanowi dalszy rozwój małej powłoki ochronnej i może pochłonąć znacznie większe ilości energii.',
          cost: {
            metal: 5000,
            cristal: 5000,
            deuter: 5000,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [],
          weaponType: 'Broń konwencjonalna',
          atack: 1,
          defence: 15000,
          time: 3,
          available: false,
          requirements: [
            {
              description: 'Hangar',
              source: 'buildings',
              value: 4
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
              value: 6
            }
          ],
        },
        {
          id: 9,
          quantity: 0,
          points: 50,
          name: 'Przeciwrakieta',
          description: 'Przeciwrakiety niszczą atakujące międzyplanetarne rakiety przeciwnika.',
          cost: {
            metal: 100,
            cristal: 25,
            deuter: 75,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [],
          weaponType: 'Broń konwencjonalna',
          atack: 1,
          defence: 1,
          time: 2,
          available: false,
          requirements: [
            {
              description: 'Silos Rakietowy',
              source: 'buildings',
              value: 1
            }
          ],
        },
        {
          id: 10,
          quantity: 0,
          points: 50,
          name: 'Rakieta międzyplanetarna',
          description: 'Rakiety międzyplanetarne niszczą systemy obronne przeciwnika.',
          cost: {
            metal: 300,
            cristal: 50,
            deuter: 150,
            energy: 0
          },
          quickGunPlus: [],
          quickGunMinus: [],
          weaponType: 'Broń konwencjonalna',
          atack: 12000,
          defence: 1,
          time: 10,
          available: false,
          requirements: [
            {
              description: 'Silos Rakietowy',
              source: 'buildings',
              value: 6
            }
          ],
        },
      ]
    },
    {
      id: 2,
      name: 'Whan',
      resources:
        [
          {
            metal: 2000,
            factor: 1
          },
          {
            cristal: 2000,
            factor: 1
          },
          {
            deuter: 2000,
            factor: 1
          },
          {
            energy: 0,
            factor: 1
          }
        ],
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
            energy: 7
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
            energy: 9
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
            energy: 12
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
            energy: 0
          },
          function: [
            {
              description: 'Produkcja energii: ',
              value: 40
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
              source: 'buildings',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              source: 'buildings',
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
              source: 'buildings',
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
              source: 'buildings',
              value: 10
            },
            {
              description: 'Fabryka nanitów',
              source: 'buildings',
              value: 2
            },
            {
              description: 'Centrum dowodzenia',
              source: 'buildings',
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
              source: 'buildings',
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
              source: 'buildings',
              value: 2
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 3
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 4
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 7
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
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
              source: 'buildings',
              value: 5
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia ochronna',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia laserowa',
              source: 'tests',
              value: 2
            },
            {
              description: 'Technologia jonowa',
              source: 'tests',
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
              source: 'buildings',
              value: 6
            },
            {
              description: 'Technologia energetyczna',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia komputerowa',
              source: 'tests',
              value: 4
            },
            {
              description: 'Technologia nadprzestrzenna',
              source: 'tests',
              value: 3
            }
          ],

        },
      ]
    },
  ]
}

export default User;