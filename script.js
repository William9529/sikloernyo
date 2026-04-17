const examData = {
    "A": {
        "AERODINAMIKA": [
            {q: "1. Rajzolj egy szárnyprofilt, majd jelöld be az ábrán a szárnyra ható erőket! Nevezd is meg őket! Írd le, melyik erő, mivel, milyen összefüggésben áll!", a: "Fe2=Fd2+Fl2\nKülső hatás nélkül az ernyő egyenes vonalú egyenletes mozgást végez, a rá ható erők eredője nulla. A légellenállás és a felhajtóerő eredőjének nagysága megegyezik a gravitációs erő nagyságával és ellentétes irányú. Fd a siklás irányával ellentétes, Fl merőleges Fd-re.\n<img src='images/aerodinamika_a_1.jpg' class='exam-image' alt='Szárnyprofil erők'>"},
            {q: "2. Milyen elv(ek), illetve törvény(ek) alapján repül a szárnyprofil? Mit mond(anak) ki ez(ek)? Ábrázold az erők eloszlását a szárnyon!", a: "Bernoulli törvénye: Ha az áramló folyadék vagy gáz sebessége nő, akkor nyomása lecsökken. A szárny felett gyorsabban mozog a levegő, mint a szárny alatt, ezért alul megnő a nyomás.\nNewton III (hatás-ellenhatás): Két test (anyag) kölcsönhatásakor mindkét test egyenlő nagyságú, ellentétes irányú erővel hat egymásra. A szárnyprofil lefelé téríti el a levegőt, ezért a levegő felfele nyomja a szárnyat.\nCoanda-effektus: egy áramló folyadék vagy gáz egy közeli szilárd felülethez tapad és annak alakját követi."},
            {q: "3. Mi az összefüggés a trimmsebesség és a startolható szélsebesség között? Mi az aerodinamikai magyarázata?", a: "Az ernyő trimmsebességének nagysága a terheléstől függ, a földön kupolázva kisebb, mint a levegőben teljes terhelés alatt, mivel kisebb a felületi terhelése is.\nA megterhelt ernyő trimmsebességénél nagyobb szélben nem lehet elstartolni, mert a földhöz viszonyítva hátrafele haladnánk. Az ernyő a közeghez képest repül, a légáramhoz képest előre megy, de mivel a légáram sebessége meghaladja a trimmsebességet, ezért a talajhoz képest hátrafelé fog mozogni."},
            {q: "4. Rajzolj egy koordináta rendszert, benne annak az ernyőnek a sebességpolárisát... Rajzold le, hogyan tolódik el a polárgörbe, ha ez az ernyő szembe/hátszélben repül!", a: "A szembeszél hátra, a hátszél előre, az emelés felfele, a süllyedés lefele tolja el a görbét. A trimmsebesség nem nevezetes pont, de segít a repülési helyzetek értelmezésében.\n<img src='images/aerodinamika_a_4.jpg' class='exam-image' alt='Sebességpoláris'>"},
            {q: "5. Miért érdemes nyomnunk a gyorsítót leáramlásban? (aerodinamikai magyarázat ábrával)", a: "Az optimális sebességet (legjobb siklószám) az origóból a polárgörbére húzott érintő adja, ami leáramlásban kinyomott gyorsítóval érhető el, az érintőből húzott Vx és Vy hányadosa adja ki a siklószámot. Másrészt hamarabb hagyhatjuk el a leáramlást.\n<img src='images/aerodinamika_a_5.jpg' class='exam-image' alt='Gyorsító leáramlásban'>"},
            {q: "6. Nevezd meg a siklórepülés három alapfeltételét!", a: "Áramló közeg, repülésre alkalmas szárnyprofil, gravitáció."},
            {q: "7. Mit nevezünk trimmsebességnek? Kb. milyen érték ez, és milyen mértékegységben szokás megadni?", a: "Az a gyári beállítás, mellyel a pilóta beavatkozása (fék vagy gyorsító használata) nélkül repül az ernyő. Kb.36-40km/h. Km/h-ban szokás megadni."},
            {q: "8. Feltétele-e a siklóernyős repülésnek a szél? Miért igen, avagy miért nem?", a: "Nem feltétele, erre a helyzetre való a belefutós start, mivel az ernyőn a sebesség növelésével alakul ki felhajtóerő. Az ernyő a közeghez képest repül."},
            {q: "9. Repülhetünk-e siklóernyővel az ernyő trimmsebességénél nagyobb hátszélben? Miért?", a: "Aerodinamikailag igen, mivel az ernyő a közeghez képest repül, de leszállásnál hátrafelé haladnánk (gyorsító használata nélkül), tehát nem célszerű."},
            {q: "10. Nyugat felé repülsz sík terep fölött, miközben északi szél fúj. Előidézhet-e ez féloldalas csukást a levegőben? Miért?", a: "Nem, mert a közeghez képest repül az ernyő, az áramlás nem oldalról jön. Féloldalas csukást a szárnyvégek közti hirtelen bekövetkező nyomáskülönbség idézhet elő."},
            {q: "11. Mi az állásszög? Hogyan tudjuk megváltoztatni és mi változik általa?", a: "A szárnyhúr és a siklás iránya által bezárt szög. Csökkenteni a gyorsítóval tudjuk, ezáltal nő a sebesség és a magasságvesztés mértéke. Növelni a fékekkel tudjuk, ezáltal csökken a sebesség és csökken a magasságvesztés (egy bizonyos mértékig)."},
            {q: "12. Mire kell figyelni minimum és maximum állásszögnél? Miért?", a: "Maximum állásszögnél az ernyő érzékeny lesz a pilótahibára és könnyebben leválhat az áramlás, átesés következhet be.\nMinimum állásszögnél az ernyő maximálisan kigyorsított állapotban van és érzékenyebb lesz a turbulenciára. Nagyobb a tehetetlenség a nagyobb sebesség miatt. Turbulens körülmények között vagy talajközelben kerülni kell a gyorsító használatát."},
            {q: "13. A pilóta maximálisan kinyomja gyorsítóját (50 km/h), miközben 10 km/h szembeszélben / hátszélben repül. Mennyi a sebessége a közeghez és a talajhoz viszonyítva?", a: "Közeg, szembeszél: 50km/h Közeg, hátszél: 50km/h\nTalaj, szembeszél: 40km/h Talaj, hátszél: 60km/h"},
            {q: "14. Mit nevezünk siklószámnak? Kb. milyen siklószámuk van a mai EN-B ernyőknek?", a: "A siklószám megmutatja, hogy egységnyi magasságból hány egységnyi távolságra siklik az ernyő mozdulatlan levegőben. A mai ernyők siklószáma kb.8-11."},
            {q: "15. Hogyan változik a minimum és maximum terheléssel az ernyő siklószáma?", a: "A nagyobb súlyú pilóta nagyobb terhelést jelent, az ernyő ezért nagyobb sebességgel halad. Arányosan nő a légellenállás és a felhajtóerő. A siklószám terheléstől függetlenül változatlan marad, de nő a sebesség."}
        ],
        "EGÉSZSÉGÜGY": [
            {q: "1. Miért fontos a folyadék pótlása sportolás közben? Mik lehetnek a dehidratáció tünetei és következményei?", a: "A folyamatos koncentrációhoz, jó döntések meghozásához szükséges az elegendő folyadék bevitel. Tudatosan kell pótolni a folyadékot, mert izgalmi állapotban gyakran megszűnik a szomjúságérzet. Első tünetei többek közt lassulás és zavartság, ami balesethez vezethet."},
            {q: "2. Mit jelent a napszúrás és a hőguta? Hogyan előzhetőek meg?", a: "A napszúrást a hosszabb ideig tűző napon tartozkodás válthatja ki. Első tünetei a fejfájás, szédülés, kábultság, émelygés, hányinger, gyengeség. Hőguta: amikor a fedetlen fej hőmérséklete jóval meghaladja a test hőmérsékletét, az agy felmelegszik, ami 39 fok feletti lázzal, akár ájulással jár. Fej árnyékolásával, elegendő folyadékbevitellel előzhetők meg."},
            {q: "3. Kullancscsípés esetén mi a teendő?", a: "Mielőbb el kell távolítani a kullancsot, amennyiben a helye koncentrikus körökben pirosodni kezd, orvoshoz kell fordulni, mert Lyme-kór lehet."},
            {q: "4. Milyen tünetek utalhatnak allergiára és mi a teendő?", a: "Kiütés, szemhéj duzzanat, alacsony vérnyomásos szapora pulzus. Megszüntetni a kiváltó okot (pl. fullánk eltávolítása), antihisztamin beszedés. Az anafilaxiás sokk esetén (gégevizenyő, fulladás) Epipen (adrenalin) injekció beadása a teendő."},
            {q: "5. Mit teszel, ha szemtanúja vagy egy személyi sérüléssel járó balesetnek, vagy sérültet találsz valahol?", a: "Ha nincs eszméleténél: megnézem vesz-e levegőt, van-e pulzusa, ha nincs megpróbálom újraéleszteni, miközben hívom a mentőket. Ha eszméleténél van, megkérdezem hogyan történt a baleset, mije fáj, tud-e mozogni, ha nem, akkor nem mozgatom. Segítséget hívok, megtudakolom a GPS koordinátákat és a sérült adatait."}
        ],
        "FELSZERELÉSISMERET": [
            {q: "1. Rajzolj egy siklóernyő kupolát és nevezd meg rajta a részeit, beleértve a belső szerkezetét is!", a: "<img src='images/felszereles_a_1.jpg' class='exam-image' alt='Siklóernyő kupola'>\n<img src='images/felszereles_a_1b.jpg' class='exam-image' alt='Siklóernyő belső szerkezet'>"},
            {q: "2. Milyen súlyú a vitorla anyaga /m2? Mekkora egy átlagos méretű kupola kiterített felülete? Összesen hány m2 anyagot építenek be?", a: "Régebben 40-45g/m2, ma 20-24g/m2. Egy átlagos kupola felülete 20-34m2, tandemernyők 40-42m2, acro ernyők 16-19m2. Összesen a kiterített felület kb. háromszorosát, 70-100m2 anyagot építenek be egy kupolába. A vetített felület kisebb a kupola íve miatt."},
            {q: "3. Milyen súlyú kb. egy siklóernyő?", a: "Egy mai ernyő 4,2-7kg, a könnyített hegymászóernyők 2-3kg-osak."},
            {q: "4. Mi a „ripstop” és mi a szerepe?", a: "Az ernyő szövete, 5-10mm-enként hálószerűen egy vastagabb, erősebb szállal, ami egy esetleges szakadás esetén meggátolja a továbbhasadást, segíti az alaktartást."},
            {q: "5. Mi a „rigifoil” és mi a szerepe?", a: "Merevítőpálcika a beölmőnyílásnál. Szerepe a profilorr tökéletesítése, teljesítménynövelés, azáltal, hogy nagyobb sebességnél sem horpad be a profilorr. Előnye, hogy az ernyő felhúzásakor jobban nyitva vannak a beömlőnyílások."},
            {q: "6. Mik azok a „stablapok” és mi a szerepük? Általában melyik zsinórsorhoz csatlakoznak?", a: "Stabilizátorlapok. A kupola két szélén elhelyezkedő majdnem függőleges része. Szerepük: 1. Stabilizálják az irányt 2. Keresztirányban feszítik a kupolát 3. Csökkentik az indukált ellenállást a szárnyvégeken. Általában a „B” sorhoz, ritkábban a „C”- hez csatlakoznak."},
            {q: "7. Rajzolj egy ábrát és nevezd meg rajta a zsinórzat részeit!", a: "<img src='images/felszereles_a_7.jpg' class='exam-image' alt='Zsinórzat'>"},
            {q: "8. Átlagosan hány mm a függesztőzsinórok teljes átmérője? Mennyi kb. a teherbírásuk?", a: "0,4-4mm (tandemernyőkön) vastagságúak is lehetnek a zsinórok, 400-tól 3000-4000N-ig terjed a teherbírásuk (40-300-400kg). A főzsinórok kb. 1,6-1,8mm vastagok."},
            {q: "9. A kupola mely részéhez kapcsolódnak a fékzsinórok? Hogyan működnek, milyen változást idéznek elő?", a: "A kilépőélhez csatlakoznak, irány és sebességváltoztatásra használjuk. Szimmetrikus húzásával nő az állásszög, lassul az ernyő. Aszimmetrikus húzásával a kupola húzott oldalának megnő az ellenállása, lelassul, a fékezett oldal felé fordul."},
            {q: "10. Rajzolj egy ábrát és nevezd meg rajta hevederzet részeit!", a: "<img src='images/felszereles_a_10.jpg' class='exam-image' alt='Hevederzet'>"},
            {q: "11. Rajzolj egy trimmrendszert és ismertesd a működését!", a: "A gyorsítóra lépve lerövidülnek az „A” és „B” sorok, ezzel megváltoztatva az állászöget növelhetünk a sebességen.\n<img src='images/felszereles_a_11.jpg' class='exam-image' alt='Trimmrendszer'>"},
            {q: "12. Hogyan használjuk a gyorsítót? Mikor kell bekötni? Beállításánál mik a legfőbb szempontok?", a: "Lábbal, két fokozatban lehet működésbe hozni. Beállításnál számít az ernyő, beülő típusa, a pilóta testalkata. Teljesen kinyomott gyorsítónál a lábnak teljesen nyújtva kell lennie és a két csigának össze kell érnie. A földön kell bekötni."},
            {q: "13. Rajzolj egy beülőt, és nevezd meg rajta a részeit!", a: "<img src='images/felszereles_a_13.jpg' class='exam-image' alt='Beülő részei'>"},
            {q: "14. Milyen alapvető beülőtípusokat ismersz? Milyen lényegi különbségek lehetnek?", a: "Hagyományos, pondrós(kisebb légellenállás), kifordítható, tandem, könnyített, acro. Lényegi különbségek a súly, légellenállás (teljesítmény), kényelem."},
            {q: "15. Milyen bevizsgáló rendszer(ek) minősíti(k) a siklóernyőket?", a: "LTF, DHV, EN. A besorolás elsősorban az ernyő biztonsági tulajdonságaihoz köthető."},
            {q: "16. Mit mond számodra egy adattábla? Milyen adatokat találsz rajta? Általában hol található?", a: "Az ernyő alapvető adatai vannak rajta: min., max. felszálló tömeg, besorolás, az ernyő súlya, területe, trimmrendszer stb. Általában a belépőél közepénél vagy valamelyik stablapnál található."},
            {q: "17. Mit jelent a porozitás fogalma? Milyen egységben és hogyan mérjük?", a: "Légáteresztő képesség. Secundumban mérjük poroziméterrel (pl. JDC MK1). 30 alatt zsákesésre hajlamos, 15 alatt nem szabad repülni. Az alacsony porozitású ernyőknek nagyon alacsony a passzív biztonságuk."},
            {q: "18. A magasabb porozitás feltétlen jobb állapotú kupolát jelent?", a: "Nem, mert a különböző anyagú ernyők, különböző képpen öregednek. A szakítószilárdság is egy fontos tulajdonság, ami nem feltétlenül függ össze a porozitással."},
            {q: "19. Mi az oka, hogy nem érdemes egy bizonyos érték fölött az ernyők porozitását egymással összehasonlítani?", a: "Mert a különböző anyagú ernyők másképp öregednek, 300s felett egy ernyő újszerűnek tekinthető."},
            {q: "20. Milyen mentőernyőket / mentőrendszereket ismersz? Mik a sajátosságaik?", a: "-körkupolás: legalapabb (4-7m/s)\n-cross: kisebb süllyedés, jobb ingastabilitás és nyitási gyorsaság\n-SQR (square round): kisebb süllyedés, jobb ingastabilitás\n-rogallo: irányítható, kis süllyedés(3-4,5m/s), de le kell hozzá oldani a főernyőt."},
            {q: "22. Sorold fel, milyen navigációs eszközöket használunk a siklóernyőzéshez!", a: "Variométer (magasságmérő, barométer), GPS, szélmérő, iránytű."},
            {q: "23. Írd le mi az alapvető elvi különbség a barometrikus és a műholdas magasságmérési módok között.", a: "A barométer a környezet légnyomásából számol (időjárással változhat). A jól beállított barometrikus magasságmeghatározás sokkal pontosabb (kb. 10cm hiba), mint a GPS 15m-es pontossága. A GPS-hez 4 műhold kell, pici késéssel."},
            {q: "24. Hogyan győződhetsz meg arról, hogy egy siklóernyő repülésre alkalmas állapotban van-e?", a: "Porozitás méréssel, zsinórzat és kupola ellenőrzésével, légialkalmassági vizsga meglétével. Kupola szakítószilárdságának és a zsinórok nyúlásának ellenőrzésével."},
            {q: "25. Milyen típusú sisakokat ismersz, amit siklóernyőzéshez használunk?", a: "Állvédős, állvédő nélküli. Érdemes siklóernyőzéshez fejlesztett sisakot (EN 966 szabvány) vásárolni a súlya miatt."},
            {q: "26. Milyen a megfelelő siklóernyős bakancs? Miért?", a: "Magasszárú bakancs, mely védi, tartja a bokát, nyitott akasztók nélkül, hogy ne akadjon bele a zsinórzat."},
            {q: "27. Milyen egyéb szempontokra kell odafigyelni a pilóta öltözeténél?", a: "Időjárásnak megfelelő legyen, figyelembe véve a magasság növekedésével járó hőmérséklet csökkenést. Komfortot javít a kesztyű vagy maszk."}
        ],
        "KÜLÖNLEGES REPÜLÉSI HELYZETEK": [
            {q: "1. Mit teszel, ha az ernyő felhúzásakor csomót látsz a zsinórzaton?", a: "Megszakítom a startot."},
            {q: "2. Mit teszel, ha a levegőben vagy, amikor csomót észlelsz a zsinórzaton? Milyen veszéllyel jár ez?", a: "Felmérem melyik zsinóron keletkezett a csomó, a kisebb megoldásoktól haladok a nagyobbak felé. Elsőként stablap zsinór meghúzása, aztán két oldali fülcsukás. Drasztikusabb a féloldalas csukás vagy full stall (csak tapasztaltaknak). Attól függően hol a csomó, fordíthatja az ernyőt, ellen kell tartani a másik fékkel, de vigyázva, hogy ne essen át az ernyő."},
            {q: "3. Egyenletes leáramlásba kerülve mit teszel? Miért?", a: "Nyomom a gyorsítót, mert a legjobb siklást az origóból a polárgörbére húzott érintő adja meg, ez kinyomott gyorsítóval érhető el. Ezenkívül hamarabb kikerülhetek a leáramlásból."},
            {q: "4. Turbulens leáramlásba kerülve mit teszel? Miért?", a: "Mellőzöm a gyorsító használatát, mert kisebb állásszögnél az ernyő érzékenyebben reagál a turbulenciára."},
            {q: "5. Mi a „fülcsukás”? Mire és mikor használjuk? Mik a jellemzői? Mennyit süllyed benne az ernyő?", a: "Magasságleépítő manőver. Akkor használjuk, amikor enyhe magasságcsökkenésre van szükségünk. Kis magasságban is jól használható, megőrzi vízszintes sebességét és irányítható marad testsúlykormányzással. 2-3m/s-os süllyedés érhető el vele."},
            {q: "6. Írd le, hogyan idézed elő és hogyan vezeted ki a fülcsukást!", a: "A szélső „A” heveder 15-30cm-es lehúzásával lehet előidézni, és a fékek dinamikus, de nem túl mély (kb.30cm) ellentétes pumpálásával lehet kivezetni."},
            {q: "7. Hogyan irányítom az ernyőt csukott fülekkel?", a: "Testsúlykormányzással, mert fék húzásra visszanyílik a csukott fül."},
            {q: "8. Milyen sorrendben használjuk a fülcsukást és a gyorsítót? Miért?", a: "Először becsukjuk a füleket, majd nyomjuk a gyorsítót. Fordított sorrendben frontstall vagy féloldalas csukás keletkezhet."},
            {q: "9. Hogyan nevezzük azt a helyzetet, amikor az ernyőd teljes belépőéle aláhajlik? Hogyan korrigálható?", a: "Frontstall. Turbulens időben (főleg gyorsítóval) fordulhat elő. Talaj közelben jelenthet vészhelyzetet (magasságvesztés). Ha volt gyorsítás, le kell lépni róla és mindkét fék egyidejű, egyszeri, vállig tartó pumpálásával lehet korrigálni."},
            {q: "10. Kezdő pilóták jellemzően a repülés mely fázisában idézhetnek elő frontstallt?", a: "Startnál vagy közvetlen utána, azzal, hogy nem fékezik meg, hagyják túlságosan előre lőni az ernyőt."},
            {q: "11. Az ernyőd baloldala becsukódik, hogyan korrigálod ezt a helyzetet?", a: "Ha gyorsító használatban volt, le kell lépni róla. Kisebb csukás esetén tartani kell az irányt, testsúlyt a nyitott oldalra terhelni és feszesen tartani a nyitott oldali féket. Nagyobb csukásnál meg kell akadályozni a spirálba esést, majd a csukott oldali féken pumpálni egyet-kettőt."},
            {q: "12. Miért előz meg és fordul dinamikusan a nyitott oldal féloldalas csukás esetén?", a: "Mert ilyenkor a pilóta teljes súlya a nyitott oldalt terheli, emiatt megnő a felületi terhelés és a nyitva maradt oldal sebessége is, a csukott oldalnak viszont megnő a légellenállása és lassul."},
            {q: "13. Mi a zsákesés? Mik a jellemzői? Mi okozhatja?", a: "A minimumsebesség közelében az ernyőn átáramlik a levegő, a formáját megtartja, de nem keletkezik felhajtóerő, ejtőernyőszerűen viselkedik. 5-8m/s süllyedés jellemzi. Okozhatja rosszul kivitelezett B-stall, vagy alacsony porozitású ernyő. Korrigálni a gyorsító kinyomásával lehet."},
            {q: "14. Mi a B-stall? Hogyan zajlik a folyamat, mik a jellemzői?", a: "Magasságleépítő manőver. A „B” zsinórsor meghúzásával beroppantjuk a kupolát, 6-10m/s süllyedés, vízszintes sebesség nincs. Kivezetéshez fel kell engedni a behúzott „B” sort. Legalább 300m magasságban használjuk."},
            {q: "15. Mi a merülőspirál? Mik a jellemzői? Mennyivel süllyed(het) az ernyő?", a: "Magasságleépítő manőver, nagy erőkkel jár. Süllyedése 10-15m/s. Bevezetése statikus vagy dinamikus (hintáztatásból). Kivezetéshez testsúlyt külső oldalra helyezzük, belső fékből lassan felengedünk. Gyors magasságvesztésre használjuk."}
        ],
        "LÉGTEREK ÉS SZABÁLYOK": [
            {q: "1. Mi a nem ellenőrzött, nem koordinált légterek maximális átlagos tengerszint feletti magassága Magyarország felett?", a: "2900m."},
            {q: "2. Ingyenes, hivatalos forrásból honnan kaphatunk információt a napi légtérfelhasználási tervből?", a: "hungarocontrol.hu, netbriefing.hu, telefonon, FIC (Flight Information Center)."},
            {q: "3. Mi a különbség az ellenőrzött és a nem ellenőrzött légtér között?", a: "Ellenőrzött légtérben a légi járműveknek légiforgalmi irányítást adnak. A nem ellenőrzött légterekben a pilóták saját belátásuk és felelősségük alapján repülnek: információt kapnak, de irányítást nem."},
            {q: "4. Mi a különbség az ellenőrzött és a koordinált légtér között?", a: "Koordinált légtér: vitorlázó- és siklórepülések céljára az ellenőrzött légtérben kijelölt légtér, amelyben repülések engedéllyel, koordinációs feladatokat ellátó szervezet közreműködésével hajthatók végre."},
            {q: "5. Ismertesd a légtértípusok jellemzőit (P, D, TRA, KVL, stb.)!", a: "-P (Prohibited): Mindig aktív, siklóernyővel tilos berepülni.\n-D (Dangerous): Csak üzemidőn kívül szabad siklóernyővel.\n-TRA (Temporarily Reserved): Csak üzemidőn kívül szabad.\n-KVL: Motor nélküli siklóernyővel szabad.\n-TMZ (Transponder Mandatory): Siklóernyővel tilos (nincs transzponder).\n-RMZ (Radio Mandatory): Rádiós vizsga, engedély és készülék esetén berepülhető."},
            {q: "6. Melyik ICAO légtérosztályba tartoznak a magyarországi nem ellenőrzött légterek?", a: "G osztályba tartoznak. 1200m AMSL-ig VFR, 1200 és 2900m AMSL között VFR vagy IFR."},
            {q: "7. Mi a különbség a G típusú légtér és a G osztályú légterek fogalma között?", a: "G osztály az ICAO osztályra vonatkozik. G típusú légtérben nem lehet IFR forgalom (Magyarországon a Dunakanyar környékén van ilyen)."},
            {q: "8. Milyen feltételek mellett kerülhető siklóernyővel felülről egy olyan légtér, melybe berepülni tilos?", a: "A tilos légtér felső határától minden esetben 150m-t kell tartani."},
            {q: "10. Mit jelentenek a VFR és az IFR fogalmak? A siklóernyőzésre melyik vonatkozik?", a: "VFR: látva repülés (Siklóernyő erre vonatkozik). IFR: műszerrepülés."}
        ],
        "METEOROLÓGIA": [
            {q: "1. Mit jelent az időjárás fogalma?", a: "A troposzféra pillanatnyi fizikai állapota. Paraméterek: hőmérséklet, páratartalom, légnyomás, szél, csapadék, látótávolság, felhőzet, stb."},
            {q: "2. Milyen időjárási paramétereket figyelünk, hogy alkalmas-e a repülésre az időjárás?", a: "Páratartalom, légnyomás, szélirány, szélerősség, csapadék, látótávolság, felhőzet."},
            {q: "3. A légkör mely rétegében játszódnak a fontos időjárási jelenségek?", a: "A troposzférában. Sarkoknál kb. 6km, egyenlítőnél kb. 18km."},
            {q: "4. Mi az „izobár” fogalmának jelentése?", a: "Azonos légnyomású helyek. A térképen ezeket a pontokat összekötő vonalak."},
            {q: "5. Mit nevezünk anticiklonnak? Mik a jellemzői?", a: "Egy vagy több zárt izobárral rendelkező légköri képződmény, melynek középpontjában a legmagasabb a légnyomás. Jellemzői: felhőoszlató, északi féltekén óramutató járásával megegyezően forog."},
            {q: "6. Mit nevezünk ciklonnak? Mik a jellemzői?", a: "Középpontjában a legalacsonyabb a légnyomás. Jellemzői: északi féltekén óramutató járásával ellentétesen forog, felhőképző hatása van, borult, csapadékos időjárással jár."},
            {q: "7. Hogyan jelölik a térképeken a hidegfrontot?", a: "<img src='images/met_a_7.jpg' class='exam-image' alt='Hidegfront jele'>"},
            {q: "8. Mutasd be a ’klasszikus’, másodfajú hidegfrontot!", a: "Gyorsan mozgó (80-120km/h) hidegfront. A hideg levegő a meleg alá nyomul, emelkedésre kényszeríti azt. Előtte erős feláramlás, zápor, zivatar jelentkezik. Nagy sebessége miatt csak pár órával lehet előre látni."},
            {q: "9. Hogyan jelölik az időjárási térképeken a melegfrontot?", a: "<img src='images/met_a_9.jpg' class='exam-image' alt='Melegfront jele'>"},
            {q: "10. Mutasd be a melegfrontot!", a: "A meleglevegő felsiklik a hidegebb levegőtömegre. Lassú (kb. 30km/h). 600-800km-el a front előtt már vannak jelei (pehelyfelhő). Siklóernyős szempontból nem jelent különösebb veszélyt."},
            {q: "12. Mit jelent az okklúziós front?", a: "Amikor a hidegfront utoléri a meleget. A ciklon gyengül, jelentős mennyiségű csapadékkal jár."},
            {q: "14. Mi az izotermia?", a: "Amikor valamely légréteg hőmérsékleti gradiense nulla, vagyis a magasság növekedésével a hőmérséklet nem változik."},
            {q: "15. Mi az inverzió? Szabad szemmel hogyan láthatod?", a: "Amikor a légkör egy bizonyos rétegében a hőmérséklet a magassággal növekszik. Szabad szemmel is látható, mivel megáll a feláramlás, alatta megreked a pára, köd, szmog."},
            {q: "17. Mit jelent a hőmérsékleti gradiens fogalma?", a: "Egységnyi távolságra eső hőmérséklet változás. Siklóernyőzésben leginkább a 100m-enkénti függőleges hőmérséklet változást értjük alatta. (Átlag: 0,65 fok/100m)."},
            {q: "20. Ismertesd a lejtőszél kialakulásának feltételeit!", a: "Feltételei: megfelelő szélirány, szélerősség, hegygerinc. A szelet az útjában álló akadály kitérésre kényszeríti, ami emelőteret hoz létre.\n<img src='images/met_a_20.jpg' class='exam-image' alt='Lejtőszél'>"},
            {q: "24. Hol és hogyan keletkezik a termik?", a: "Általában ott képződik, ahol egy anyagnak jobb a hőelnyelő képessége (száraz homok, aszfalt). A talaj felmelegíti a felette lévő levegőt, ami kisebb sűrűsége miatt elkezd felemelkedni."},
            {q: "26. Rajzold le a termik vízszintes keresztmetszetét!", a: "A szél deformálja a termiket, így a szél felőli oldala nyomott lesz. A magja (legintenzívebb feláramlás) a szél felől található.\n<img src='images/met_a_26.jpg' class='exam-image' alt='Termik keresztmetszet'>"},
            {q: "27. Mi a völgyszél?", a: "Nappal a hegyoldalak felmelegszenek, a meleg levegő felszáll, a völgy bejárata felől hidegebb levegő áramlik a helyére. Éjszaka a jelenség megfordul.\n<img src='images/met_a_27.png' class='exam-image' alt='Völgyszél'>"},
            {q: "32. Sorold fel a 10 felhőfajt!", a: "1.Cirrus (pehely) 2.Cirrocumulus (bárány) 3.Cirrostratus (fátyol) 4.Altocumulus (párna) 5.Altostratus (lepel) 6.Stratus (réteg) 7.Stratocumulus (réteges gomoly) 8.Cumulus (gomoly) 9.Nimbostratus (esőréteg) 10.Cumulonimbus (zivatar)"},
            {q: "36. Mik a zivatar veszélyei a siklóernyősökre nézve?", a: "Heves (10-20m/s) feláramlások, villámlás, a csapadéktól elnehezült ernyő összetapad, turbulens szélgallér, kifutószél (ami a zivatartól 10-30km-re is elérhet)."}
        ],
        "REPÜLÉSTECHNIKA": [
            {q: "1. Hogyan terítjük start előtt az ernyőt?", a: "Ívesen, banán alakban. Az ernyő közepe, a pilóta és a szélirány optimális esetben egy egyenesre esnek."},
            {q: "2. Mennyiben terítem az ernyőt másként, ha erős szélben startolok?", a: "Erős szélben összébb húzzuk az ernyőt, csak annyira terítjük ki, hogy elkerüljük a lefűződést és a szálátvetődéseket, a starthelyen lejjebb helyezkedünk el."},
            {q: "3. Ismertesd a start előtti ellenőrzés lépéseit!", a: "1. Kupola: nincs szakadás, jó terítés.\n2. Zsinórzat: nincs csomó, fékzsinórok szabadok.\n3. Csatok, karabinerek: minden zárva, gyorsító bekötve.\n4. Szélirány, szélerősség ellenőrzése a környezetből.\n5. Légtér: szabad-e a starthely, elsőbbség megadása."},
            {q: "5. Hány szakaszból áll a start és mik ezek?", a: "1. A kupola felhúzása\n2. Az ernyő stabilizálása, korrekció (belefutós startnál plusz kontroll pillantás)\n3. Gyorsítás"},
            {q: "7. Mit nevezünk kontrollpillantásnak? Mikor használjuk?", a: "Belefutós startnál az ernyő felhúzása után egy ellenőrző visszanézés (felfelé irányuljon, hogy ne billentsük ki a testünket) a biztonságos startolás érdekében, megtorpanás nélkül."},
            {q: "9. Milyen behelyezkedési módokat ismersz leszálláshoz?", a: "1. Nyolcasozás: a szélirányra merőlegesen nyolcasokat repül a leszálló elejétől, egyre szűkebben.\n2. Iskolakör: a téglalap alakú leszálló oldalaival párhuzamosan repülünk 90 fokos fordulókkal, a végsiklásnál szembefordulva a széliránnyal."},
            {q: "10. Rajzold le, hogyan szállsz le nyolcasozással!", a: "<img src='images/reptech_a_10.jpg' class='exam-image' alt='Nyolcasozás'>"},
            {q: "11. Rajzold le, hogyan helyezkedsz be iskolakörrel!", a: "<img src='images/reptech_a_11.jpg' class='exam-image' alt='Iskolakör'>"},
            {q: "13. Mit nevezünk végsiklásnak? Hogyan hajtod végre?", a: "A leszállás befejező fázisa. Széllel szembe fordulva egyenesen siklok, kanyarodás nélkül. Lépései: sebesség lerontása, kiülés a beülőből, kilebegtetés, talajfogás."},
            {q: "16. Hogyan irányítod a siklóernyőt a levegőben?", a: "A fékekkel és testsúly áthelyezéssel. A fék húzásával megnő az ellenállás a húzott oldalon, lelassul, a másik oldal változatlan sebességgel halad, ezért a lassított oldal fordulásra kényszeríti."},
            {q: "21. Hogyan repülünk a lejtőszélben?", a: "Ingavonalon repülünk, párhuzamosan a hegyoldallal. Fordulni emelésben célszerű, a hegyoldaltól kifelé. A legjobb emelés a gerinc előtt van."},
            {q: "23. Hol találom lejtőszélben a legideálisabb emelőzónát?", a: "A szélirány felől a gerinc előtt. Minél meredekebb a lejtő, annál inkább kitolódik a lejtő elé az emelőtér."},
            {q: "25. Hogyan repülünk termikben?", a: "Először szondaköröket repülünk, hogy megtaláljuk a termik közepét (a magot), ahol a legnagyobb az emelés, majd körözünk benne. A szél fújási irányához közelebb található a termik magja."}
        ],
        "SIKLÓERNYŐS ETIKETT": [
            {q: "1. Sorolj fel néhány dolgot, amit siklóernyősként megtehetsz a természet védelméért!", a: "A természetvédelmi területeket tiszteletben tartom, nem végzek felesleges növényírtást, nem szemetelek. Az ernyő terítésénél nem taposom le a növényeket. Szabályosan parkolok."},
            {q: "2. Sorolj fel néhány dolgot, ami az alapvető „siklóernyős etiketthez” tartozik a starthelyen!", a: "Másokat nem zavarunk a terítéssel és zsinórellenőrzéssel. Csak a konkrét startolási szándékkal visszük ki az ernyőt. Nem terítünk más elé, segítünk a többieknek. Tandemeseket előre engedjük."},
            {q: "3. Sorolj fel néhány dolgot, ami az etiketthez tartozik a levegőben!", a: "Kezdőkre vigyázás, tolerálás. Tandemek nehezebb manőverezhetőségének figyelembevétele. Elfoglalt pilóta javára elsőbbségről lemondás. Segítségnyújtás veszély esetén."}
        ],
        "TEMATIKA, JOGSZABÁLYOK": [
            {q: "1. Mi az a REBISZ? Mikor és milyen eseményeket kell bejelenteni hozzá?", a: "Repülés Biztonsági Szervezet. Minden eseményt be kell jelenteni, melynél a repülés biztonsága csökken vagy meghiúsul, minden rendellenes repülési helyzetet, ami kárral járt. Ezekből tanulságot vonnak le balesetmegelőzés céljából."},
            {q: "3. A Fly Away pilótájaként milyen szervezethez kapcsolódik a REBISZ?", a: "A SIRESZ (Siklórepülő Szövetség) REBISZ-hez."},
            {q: "5. A-vizsgával rendelkező növendéknél (saját felszereléssel) milyen dokumentumoknak kell lenni repüléskor?", a: "Nálam: SIRESZ kártya, ernyőkártya, légialkalmassági tanúsítvány, orvosi alkalmassági, személyi igazolvány, növendéknapló.\nOtthon: Ernyő törzskönyv, oktatási szerződés."},
            {q: "11. Ismertesd a kitérés szabályait nyílt légtérben és lejtőzésnél!", a: "Nyílt légtér:\n- Szembetartó esetén mindkettő jobbra tér ki.\n- Keresztező haladásnál a jobbról érkezőnek van elsőbbsége.\n- Előzésnél az előzöttnek van elsőbbsége, jobbról kell előzni.\nLejtőzés:\n- Akinek a hegy a jobb oldalára esik, annak van elsőbbsége.\nTermikrepülés:\n- A termiket megtaláló pilóta határozza meg a körözés irányát, a később csatlakozóknak ezt az irányt kell követniük."}
        ]
    },
    "B": {
        "AERODINAMIKA": [
            {q: "1. Milyen szélsebesség felett tilos elstartolni? Miért? Mi az aerodinamikai magyarázata?", a: "Kezdő pilótaként 5 m/s az engedélyezett felső határ, de 7 m/s felett a versenyeket is lefújják, mert az erős szél többnyire turbulens, besodorhat a starthely mögé. Az ernyő a közeghez képest repül, ha a szél erősebb a trimmsebességnél, a talajhoz képest hátrafelé haladnánk."},
            {q: "2. Rajzolj egy szárnyprofilt, majd jelöld be az ábrán a szárnyra ható erőket!", a: "Külső hatás nélkül az ernyő egyenes vonalú egyenletes mozgást végez, a rá ható erők eredője nulla. A légellenállás (Fd) és a felhajtóerő (Fl) eredőjének nagysága megegyezik a gravitációs erő nagyságával és ellentétes irányú.\n<img src='images/aerodinamika_b_2.jpg' class='exam-image' alt='Szárnyprofil erők'>"},
            {q: "3. Miért előz meg és fordul dinamikusan a nyitott oldal féloldalas csukás esetén?", a: "Mert ilyenkor a pilóta súlya a nyitott oldalt terheli, emiatt megnő a felületi terhelés és a nyitva maradt oldal sebessége is, a csukott oldalnak viszont megnő a légellenállása és lassul."},
            {q: "4. Miért kell nyomnunk a gyorsítót leáramlásban?", a: "Az optimális sebességet az origóból a polárgörbére húzott érintő adja, ami leáramlásban kinyomott gyorsítóval érhető el. Másrészt hamarabb hagyhatjuk el a leáramlást.\n<img src='images/aerodinamika_b_4.jpg' class='exam-image' alt='Polárgörbe leáramlásban'>"},
            {q: "5. Hogyan változik a siklószám a minimum és a maximum terhelés esetén?", a: "A nagyobb súlyú pilóta nagyobb terhelést jelent, az ernyő nagyobb sebességgel halad. Arányosan nő a légellenállás és a felhajtóerő. A siklószám terheléstől függetlenül változatlan marad, de nő a sebesség.\n<img src='images/aerodinamika_b_5.png' class='exam-image' alt='Sebességpoláris terhelés'>"},
            {q: "6. Mitől esik át az ernyő? Mi történik ilyenkor?", a: "Csak a pilóta idézheti elő, a fékek használatával. Az ernyő állásszöge meghaladja a maximum kritikus értékét, leválik az áramlás, megszűnik a felhajtóerő. (Statikus vagy dinamikus átesés)."},
            {q: "8. Ha a pilóta kinyomja a gyorsítóját (72 km/h), 20 km/h hátszélben, mennyi a sebessége a közeghez és a talajhoz viszonyítva?", a: "Közeghez: 72km/h. Talajhoz: 92km/h."},
            {q: "9. Mit nevezünk Venturi hatásnak? Milyen szerepe van a siklóernyőzésben?", a: "A Bernoulli-törvény gyakorlati példája. A szűkülő térben (pl. hegyek között vagy völgyben) a levegő áramlásának sebessége megnő, a nyomása csökken. Hágóknál a szél a napi átlag kétszeresére is felerősödhet."},
            {q: "10. Mi az állásszög? Hogyan tudjuk megváltoztatni?", a: "A szárnyhúr és a siklás iránya által bezárt szög. Csökkenteni a gyorsítóval, növelni a fékekkel tudjuk."}
        ],
        "EGÉSZSÉGÜGY": [
            {q: "1. Mit teszel, ha szemtanúja vagy egy személyi sérüléssel járó balesetnek?", a: "Ha nincs eszméleténél: légzés, pulzus ellenőrzése, újraélesztés, mentőhívás. Ha eszméleténél van: kikérdezés, nem mozgatom (főleg gerincsérülés gyanújánál). Segítség hívása (GPS koordináták bediktálása)."},
            {q: "3. Mit kell tenni végtagsérülés esetén a sérülttel?", a: "Ha gerincsérülés gyanúja nem áll fenn, rögzíteni kell a végtagot, hogy ne mozduljon el. Komoly vérzésnél nyomókötés. Figyelni kell a sokk jeleire (sápadtság, hideg verejték), és hanyatt fektetni a lábait megemelve."},
            {q: "4. Mik a gerincsérülés jelei? Ilyenkor mi a teendő?", a: "Jelek: fájdalom a gerinc mentén, végtagok zsibbadása/bénulása, szokatlan testtartás. Teendő: NEM szabad mozgatni, mentőt hívni és jelezni a gerincsérülés gyanúját. Fejet óvatosan rögzíteni a mozdulatlanság miatt."}
        ],
        "FELSZERELÉSISMERET": [
            {q: "1. Mit jelent a porozitás fogalma? Milyen érték alatt válhat veszélyessé az ernyő?", a: "Légáteresztő képesség (secundumban mérve). 30 alatt zsákesésre hajlamos, 15 alatt nem szabad repülni."},
            {q: "2. Milyen rendszer(ek) szerint sorolják be a siklóernyőket?", a: "LTF, DHV, EN. A besorolás elsősorban az ernyő biztonsági tulajdonságaihoz (passzív biztonság) köthető.\n<img src='images/felszereles_b_2.jpg' class='exam-image' alt='Siklóernyők besorolása'>"},
            {q: "6. Mit jelent a „cápaorr”? Mi a szerepe?", a: "Egyfajta orrprofil a belépőélnél. Segít az állandó nyomás fenntartásában minden állásszög mellett, így biztonságosabbá válik az alsó sebességzóna."},
            {q: "7. Mit jelent a ’diagonál cella’ és mi a szerepe?", a: "Belső merevítő elem, ami átlósan köti össze a cellákat. Az ernyő jobban ellenáll a terhelésnek, és szélesebb cellák építhetők, ami kevesebb zsinórt (kisebb légellenállást) eredményez."},
            {q: "9. Hány repült óra után ajánlatos ellenőrizni a zsinórokat?", a: "Ha az ernyő 2 évnél öregebb és 100 óránál többet repült. Nedvesség, homok, sós víz vagy sok csörlőzés után. Mert a zsugorodott/nyúlt zsinórzat megváltoztatja az ernyő repülési tulajdonságait."},
            {q: "10. Hogyan épül fel a „kétzsinóros” ernyő zsinórzata?", a: "Valójában két hevederes, A és B hevederről indulnak a főzsinórok."},
            {q: "14. Sorold fel a VFR navigációs eszközeit! Írd le működési elvüket!", a: "- GPS: műholdak alapján helymeghatározás, sebességmérés.\n- Variométer (barométer): légnyomásból számolja a magasságot (10cm-es pontossággal) és a függőleges sebességet. Kalibrálni kell.\n- Szélmérő, Iránytű."}
        ],
        "KÜLÖNLEGES REPÜLÉSI HELYZETEK": [
            {q: "1. Hogyan irányítod az ernyőt, ha elszakad a fékzsinór?", a: "Testsúlyáthelyezéssel, és a hátsó hevederekkel (típustól függően C vagy D)."},
            {q: "6. Mi a front stall? Mikor fordulhat elő? Hogyan korrigálható?", a: "A kupola belépőéle aláhajlik. Turbulens időben, gyakran gyorsító használata mellett történik. Ha volt gyorsítás le kell lépni róla, majd mindkét fék egyidejű, kb. mellmagasságig tartó szimmetrikus pumpálásával lehet korrigálni."},
            {q: "7. Az ernyőd baloldala becsukódik, hogyan korrigálod?", a: "Kisebb csukás esetén testsúly ráterhelése a nyitott oldalra, hogy tartsuk az irányt. Nagyobb csukásnál először az irányt stabilizáljuk (ne essen spirálba), majd a csukott oldali féken pumpálunk."},
            {q: "11. Milyen magasságleépítési manővereket ismersz? Ismertesd őket!", a: "1. Fülcsukás (2-3 m/s süllyedés): Szélső A hevederek lehúzása.\n2. Fülcsukás gyorsítóval (3-4 m/s süllyedés).\n3. B-stall (6-10 m/s süllyedés): B hevederek szimmetrikus lehúzása.\n4. Merülőspirál (10-15 m/s süllyedés): Súlypont áthelyezéssel és belső fék húzásával generált gyors forgás."},
            {q: "16. Mi a frontrozetta? Mikor következhet be?", a: "Amikor a szárnyvégek patkó alakban elöl összecsapnak (a két vége összefűződik). Rosszul kivezetett manővernél fordulhat elő. Szimmetrikus fékezéssel korrigálható."},
            {q: "17. Mi a spirál? Mennyivel süllyed az ernyő?", a: "Magasságleépítő manőver (10-15 m/s). Nagy centrifugális erő hat a pilótára. Kivezetéshez lassan, fokozatosan kell felengedni a belső féket és a testsúlyt visszaállítani."}
        ],
        "METEOROLÓGIA": [
            {q: "2. Mi a Coriolis-erő?", a: "A Föld forgásából adódó eltérítő erő, mely a mozgó testeket (légáramlatokat) az északi féltekén jobbra téríti el."},
            {q: "11. Mi a jele az időjárási térképeken a hidegfrontnak, a melegfrontnak és az okklúziós frontnak?", a: "Hidegfront: kék háromszögek. Melegfront: piros félkörök. Okklúziós front: lila (vegyes) jelek.\n<img src='images/met_b_11a.jpg' class='exam-image' alt='Hidegfront'>\n<img src='images/met_b_11b.jpg' class='exam-image' alt='Melegfront'>\n<img src='images/met_b_11c.jpg' class='exam-image' alt='Okklúziós front'>"},
            {q: "22. Ábrázold a termik metszetét szélcsendes és szeles időben!", a: "A szél a termiket deformálja, a magja (legintenzívebb feláramlás) a szél felőli oldalon található.\n<img src='images/met_b_22.jpg' class='exam-image' alt='Termik szélben'>"},
            {q: "23. Hogyan állapítod meg, hogy egy cumulus keletkező, aktív vagy feloszló életszakaszában van?", a: "-Keletkező: a felhőfoszlányok sűrűsödnek.\n-Aktív: a felhő elterül, alja egyenessé vagy kissé harang alakúvá válik (élénk feláramlás).\n-Feloszló: rojtosodik, szétmállik a felhőalap."},
            {q: "31. Milyen fajtái vannak a zivataroknak?", a: "1. Fronti: a hidegfront mentén keletkeznek.\n2. Konvektív (hő): nyári napközbeni erős termikus tevékenység hozza létre, áttöri az inverziós réteget.\n3. Orografikus: a domborzat kényszeríti emelkedésre a meleg, párás levegőt."},
            {q: "38. Mi a különbség a siklóernyős repüléshez ideális időjárásban síkvidéken és magashegységekben?", a: "Az anticiklon felhőoszlató hatása síkvidéken nem ideális (nincs termik), a hegységekben viszont jó, mert meggátolja a zivatarfelhők túlfejlődését."}
        ],
        "REPÜLÉSTECHNIKA": [
            {q: "2. Milyen behelyezkedési módokat ismersz leszálláshoz?", a: "Nyolcasozás és Iskolakör.\n<img src='images/reptech_b_3.jpg' class='exam-image' alt='Nyolcasozás'>\n<img src='images/reptech_b_4.jpg' class='exam-image' alt='Iskolakör'>"},
            {q: "5. Mire kell odafigyelni, ha sok ernyő egyszerre helyezkedik be a leszállóba?", a: "Egymás mögé kell besorolni, ugyanazon az íven (iskolakörön) repülve, elkerülve a nyolcasozást és a kereszteződéseket."},
            {q: "6. Mire figyelsz, amikor ismeretlen leszállóhelyet választasz távrepülés során?", a: "Terepviszonyok, épületek, vezetékek figyelembe vétele. 100-150m magasságban már meg kell kezdeni a leszállást tölcsérben. Célszerű út közelében leszállni."},
            {q: "7. Ismeretlen, szélzsák nélküli leszállóban mi alapján határozod meg a szélirányt?", a: "1. Fák, bokrok mozgásából. 2. GPS variométer sebességadatából. 3. Más leszálló pilóták megfigyeléséből."},
            {q: "13. Hogyan találod meg a termik magját? Szembeszél vs. hátszél?", a: "Vario figyelésével és szondakörökkel. Szembeszélben előrefele kell tágítani a köröket. Hátszélben nagyon gyorsan elérjük az erős emelést, mert a mag erősebben ellenáll a szélnek."},
            {q: "17. Mit jelent az „aktív repülés” fogalma?", a: "A testsúly és a fékek összehangolt mozdulataival azonnal reagálunk a levegő változásaira, arra törekedve, hogy a kupola mindig stabilan a fejünk felett maradjon (megelőzve a csukásokat)."},
            {q: "18. Mit nevezünk MacCready elvnek?", a: "Az optimális siklórepülés stratégiája (speed to fly). A várható termiksűrűség és a következő termik várható ereje alapján választjuk meg az optimális siklási sebességet (gyorsító használata)."}
        ],
        "TEMATIKA, SZABÁLYOK": [
            {q: "2. Mit tudsz elmondani Budapest TMA szektor szerkezetéről?", a: "A Budapest TMA egy többszintű, szektorokra bontott ellenőrzött légtér (C osztály), IFR forgalommal, a Liszt Ferenc repülőtér körül 50 NM sugarú körben.\n<img src='images/szabalyok_b_5.jpg' class='exam-image' alt='Légtér szerkezet'>"},
            {q: "5. Mit jelent a G és az F légtér?", a: "Magyarországon ma már össze vannak vonva. Felső G: kb. 900m-től 2900m-ig. Alsó G: 900m alatt."},
            {q: "8. Hogyan és mikor kell bejelenteni a baleseteket? Hová?", a: "Minden olyan eseményt be kell jelenteni, ahol személyi vagy anyagi kár keletkezett (vagy majdnem). A SIRESZ Repülés Biztonsági Szervezetéhez (REBISZ). A bejelentés célja a balesetmegelőzés."}
        ]
    }
};

// Navigációs logika
function loadExam(examType) {
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('exam-view').classList.add('active');
    document.getElementById('exam-title').textContent = `"${examType}" Vizsga Témakörei`;
    
    const container = document.getElementById('topics-container');
    container.innerHTML = '';

    const topics = examData[examType];

    for (const [topicName, questions] of Object.entries(topics)) {
        const topicDetails = document.createElement('details');
        topicDetails.className = 'topic-details';
        
        const topicSummary = document.createElement('summary');
        topicSummary.textContent = topicName;
        topicDetails.appendChild(topicSummary);

        const topicContent = document.createElement('div');
        topicContent.className = 'topic-content';

        questions.forEach(item => {
            const qDetails = document.createElement('details');
            qDetails.className = 'question-details';

            const qSummary = document.createElement('summary');
            qSummary.textContent = item.q;

            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer';
            answerDiv.innerHTML = item.a; // Az ábrák (<img...>) és HTML tag-ek miatt innerHTML kell

            qDetails.appendChild(qSummary);
            qDetails.appendChild(answerDiv);
            topicContent.appendChild(qDetails);
        });

        topicDetails.appendChild(topicContent);
        container.appendChild(topicDetails);
    }
}

function goHome() {
    document.getElementById('exam-view').classList.remove('active');
    document.getElementById('home-view').classList.add('active');
}