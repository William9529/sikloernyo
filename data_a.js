const examDataA = {
    "AERODINAMIKA": [
        {
            q: "1. Rajzolj egy szárnyprofilt, majd jelöld be az ábrán a szárnyra ható erőket! Nevezd is meg őket! Írd le, melyik erő, mivel, milyen összefüggésben áll! – 5 pont (131.o.)",
            a: "<img src='images_a/aerodinamika_a_1.jpg' class='exam-image' alt='Szárnyprofil és erők'>\n$F_e^2 = F_d^2 + F_l^2$\nKülső hatás nélkül az ernyő egyenes vonalú egyenletes mozgást végez, a rá ható erők eredője nulla. A légellenállás és a felhajtóerő eredőjének nagysága megegyezik a gravitációs erő nagyságával és ellentétes irányú. Fd a siklás irányával ellentétes, Fl merőleges Fd-re."
        },
        {
            q: "2. Milyen elv(ek), illetve törvény(ek) alapján repül a szárnyprofil? Mit mond(anak) ki ez(ek)? Ábrázold az erők eloszlását a szárnyon! – 4 pont (128.o-133.o, 144.o-146.o)",
            a: "Bernoulli törvénye: Ha az áramló folyadék vagy gáz sebessége nő, akkor nyomása lecsökken. A szárny felett gyorsabban mozog a levegő, mint a szárny alatt, ezért alul megnő a nyomás.\nNewton III (hatás-ellenhatás): Két test (anyag) kölcsönhatásakor mindkét test egyenlő nagyságú, ellentétes irányú erővel hat egymásra. A szárnyprofil lefelé téríti el a levegőt, ezért a levegő felfele nyomja a szárnyat.\nCoanda-effektus: egy áramló folyadék vagy gáz egy közeli szilárd felülethez tapad és annak alakját követi. +első feladatos ábra."
        },
        {
            q: "3. Mi az összefüggés a trimmsebesség és a startolható szélsebesség között? Mi az aerodinamikai magyarázata? – 3 pont (161.o)",
            a: "Az ernyő trimmsebességének nagysága a terheléstől függ, a földön kupolázva kisebb, mint a levegőben teljes terhelés alatt, mivel kisebb a felületi terhelése is. A megterhelt ernyő trimmsebességénél nagyobb szélben nem lehet elstartolni, mert a földhöz viszonyítva hátrafele haladnánk. Az ernyő a közeghez képest repül, a légáramhoz képest előre megy, de mivel a légáram sebessége meghaladja a trimmsebességet, ezért a talajhoz képest hátrafelé fog mozogni."
        },
        {
            q: "4. Rajzolj egy koordináta rendszert, benne annak az ernyőnek a sebességpolárisát, melynek jellemző adatai: * Jelöld be az ábrán a polárgörbe nevezetes pontjait. Rajzold le, hogyan tolódik el a polárgörbe, ha ez az ernyő ** szembe/hátszélben repül! – 4 pont (160.o-163.o)",
            a: "<img src='images_a/aerodinamika_a_4_polargorbe.jpg' class='exam-image' alt='Sebességpoláris'>\nA szembeszél hátra, a hátszél előre, az emelés felfele, a süllyedés lefele tolja el a görbét.\nA trimmsebesség nem nevezetes pont, de segít a repülési helyzetek értelmezésében."
        },
        {
            q: "5. Miért érdemes nyomnunk a gyorsítót leáramlásban? (aerodinamikai magyarázatot várunk a megfelelő ábrával alátámasztva és szöveges indoklással) – 3 pont (163.o,244.o)",
            a: "<img src='images_a/aerodinamika_a_5_gyorsito.jpg' class='exam-image' alt='Gyorsító leáramlásban'>\nÁbra: polárgörbe: Az optimális sebességet (legjobb siklószám) az origóból a polárgörbére húzott érintő adja, ami leáramlásban kinyomott gyorsítóval érhető el, az érintőből húzott Vx (át kell váltani m/s-ra) és Vy hányadosa adja ki a siklószámot. Másrészt hamarabb hagyhatjuk el a leáramlást."
        },
        {
            q: "6. Nevezd meg a siklórepülés három alapfeltételét! – 1 pont (128.o)",
            a: "Áramló közeg, repülésre alkalmas szárnyprofil, gravitáció."
        },
        {
            q: "7. Mit nevezünk trimmsebességnek? Kb. milyen érték ez, és milyen mértékegységben szokás megadni a repülésben? – 2 pont (160.o)",
            a: "Az a gyári beállítás, mellyel a pilóta beavatkozása (fék vagy gyorsító használata) nélkül repül az ernyő. Kb.36-40km/h. Km/h-ban szokás megadni, legalábbis a könyvben abban van."
        },
        {
            q: "8. Feltétele-e a siklóernyős repülésnek a szél? Miért igen, avagy miért nem? – 1 pont(128.o)",
            a: "Nem feltétele, erre a helyzetre való a belefutós start, mivel az ernyőn a sebesség növelésével alakul ki felhajtóerő. Az ernyő a közeghez képest repül."
        },
        {
            q: "9. Repülhetünk-e siklóernyővel az ernyő trimmsebességénél nagyobb hátszélben? Miért? – 1 pont",
            a: "Aerodinamikailag igen, mivel az ernyő a közeghez képest repül, de leszállásnál hátrafelé haladnánk(gyorsító használata nélkül), tehát nem célszerű."
        },
        {
            q: "10. Nyugat felé repülsz sík terep fölött, miközben északi szél fúj. Előidézhet-e ez féloldalas csukást a levegőben? Miért? – 1 pont(165.o)",
            a: "Nem, mert a közeghez képest repül az ernyő, az áramlás nem oldalról jön. Féloldalas csukást a szárnyvégek közti hirtelen bekövetkező nyomáskülönbség idézhet elő."
        },
        {
            q: "11. Mi az állásszög? Hogyan tudjuk megváltoztatni és mi változik általa? – 3 pont(142.o)",
            a: "A szárnyhúr és a siklás iránya által bezárt szög. Csökkenteni a gyorsítóval tudjuk, ezáltal nő a sebesség és a magasságvesztés mértéke. Növelni a fékekkel tudjuk, ezáltal csökken a sebesség és csökken a magasságvesztés (egy bizonyos mértékig, a sebességpoláris alapján)."
        },
        {
            q: "12. Mire kell figyelni minimum és maximum állásszögnél? Miért? – 3 pont(150.o)",
            a: "Maximum állásszögnél az ernyő érzékeny lesz a pilótahibára és könnyebben leválhat az áramlás, átesés következhet be.\nMinimum állásszögnél az ernyő maximálisan kigyorsított állapotban van és érzékenyebb lesz a turbulenciára. Nagyobb a tehetetlenség a nagyobb sebesség miatt, emiatt a reakciók is hevesebbek egy esetleges fülcsukás vagy frontstall esetén. Turbulens körülmények között vagy talajközelben kerülni kell a gyorsító használatát."
        },
        {
            q: "13. A pilóta maximálisan kinyomja siklóernyője gyorsítóját, melynek legnagyobb sebessége 50... km/h, miközben 10... km/ h szembeszélben / hátszélben repül. (1) Mennyi az ernyő sebessége a közeghez viszonyítva? (2) Mennyi a talajhoz viszonyítva? – 1 pont",
            a: "Közeg, szembeszél: 50km/h Közeg, hátszél: 50km/h\nTalaj, szembeszél: 40km/h Talaj, hátszél: 60km/h"
        },
        {
            q: "14. Mit nevezünk siklószámnak? Kb. milyen siklószámuk van a mai EN-B (LTF 1-2) kategóriájú ernyőknek? – 1 pont(154.o)",
            a: "A siklószám megmutatja, hogy egységnyi magasságból hány egységnyi távolságra siklik az ernyő mozdulatlan levegőben. A mai ernyők siklószáma kb.8-11."
        },
        {
            q: "15. Hogyan változik a minimum és maximum terheléssel az ernyő siklószáma? Rajzolj egy ábrát és magyarázd el az aerodinamikai összefüggéseket! – 3 pont(166.o)",
            a: "<img src='images_a/aerodinamika_a_15_terheles.jpg' class='exam-image' alt='Polárgörbe terhelés függvényében'>\nA nagyobb súlyú pilóta nagyobb terhelést jelent, az ernyő ezért nagyobb sebességgel halad. Arányosan nő a légellenállás és a felhajtóerő.\nA siklószám terheléstől függetlenül változatlan marad, de nő a sebesség."
        }
    ],
    "EGÉSZSÉGÜGY": [
        {
            q: "1. Miért fontos a folyadék pótlása sportolás közben? Mik lehetnek a dehidratáció tünetei és következményei? – 2 pont (294.o)",
            a: "A folyamatos koncentrációhoz, jó döntések meghozásához szükséges az elengedő folyadék bevitel. Tudatosan kell pótolni a folyadékot, mert izgalmi állapotban gyakran megszűnik a szomjúságérzet. Első tünetei többek közt lassulás és zavartság, ami balesethez vezethet."
        },
        {
            q: "2. Mit jelent a napszúrás és a hőguta? Hogyan előzhetőek meg? – 2 pont (294.o)",
            a: "A napszúrást a hosszabb ideig tűző napon tartozkodás válthatja ki. Első tünetei a fejfájás, szédülés, kábultság, émelygés, hányinger, gyengeség. Amikor hosszabb ideig tartó, jelentős hősugárzás hatására a fedetlen fej hőmérséklete jóval meghaladja a test hőmérsékletét, az agy felmelegszik és hőguta alakul ki. A hőguta 39 fok feletti lázzal, akár ájulással jár. Fej árnyékolásával, elegendő folyadékbevitellel előzhetők meg, ami víz vagy izotóniás ital legyen. Tilos alkoholt inni."
        },
        {
            q: "3. Kullancscsípés esetén mi a teendő? – 1 pont",
            a: "Mielőbb el kell távolítani a kullancsot, amennyiben a helye koncentrikus körökben pirosodni kezd, orvoshoz kell fordulni, mert Lyme-kór lehet."
        },
        {
            q: "4. Milyen tünetek utalhatnak allergiára és mi a teendő? – 2 pont (299,300.o)",
            a: "Kiütés, szemhéj duzzanat, alacsony vérnyomásos szapora pulzus. Megszüntetni a kiváltó okot, pl. méhcsípés esetén a fullánk eltávolítása, antihisztamin beszedés, esetleg kálcium tabletta. Az anafilaxiás sokk az allergia legsúlyosabb következménye, jellemző tünete a gégevizenyő, ami fulladáshoz vezethet. Epipen(adrenalin) injekció beadása a teendő."
        },
        {
            q: "5. Mit teszel, ha szemtanúja vagy egy személyi sérüléssel járó balesetnek, vagy sérültet találsz valahol (vagyis nem láttad magát a balesetet)? Milyen alapvető információk lehetnek fontosak a baleset bejelentésénél és miért? – 3 pont",
            a: "Ha nincs eszméleténél és nem reagál semmire: megnézem vesz-e levegőt, van-e pulzusa, ha nincs megpróbálom újraéleszteni, miközben hívom a mentőket. Ha eszméleténél van, megkérdezem hogyan történt a baleset, mije fáj, tud-e mozogni, ha nem, akkor nem mozgatom, hogy ne okozzak nagyobb bajt. Amennyiben szükséges, szintén segítséget hívok, megkérdezem van-e gyógyszer allergiája, pontos helyszínt megpróbálom megállapítani(pl. GPS koordináták) , sérült adatait megpróbálom megtudni, mert ezek felgyorsíthatják az érkező ellátást."
        },
        {
            q: "6. Hogyan döntöd el egy balesetnél, hogy egy sérülthöz mentőt kell hívni, elégséges bevinni az ügyeletre vagy nem igényel orvosi ellátást? – 2 pont (299.o)",
            a: "Ha nincs eszméleténél és nem reagál semmire mentőt hívok. Ha eszméleténél van, de fennáll nagyobb sérülés esélye, pl. törés, belső szerv sérülés, nagy fájdalom, akkor is orvosi ellátást igényel. Ha eszméleténél van, akkor kikérdezem a balesetről, majd felmérem az állapotát, tud-e mozogni, vérzik-e, érez-e fájdalmat valahol, stb. és a józan ész keretein belül döntök. Kisebb sérülés, pl. kupolázás közbeni esés esetén, horzsolás, bokakibicsaklás esetén nem szükséges azonnal orvost hívni."
        },
        {
            q: "7. Milyen, esetenként lassan és tünetszegényen kialakuló, ámde komoly veszéllyel járó állapotokat ismersz, amelyek például a magasból történő esés következményei lehetnek? Mi a helyes eljárási rend, ha magasból történő esés miatt következett be egy baleset? – 2 pont",
            a: "Belső sérülések: belső vérzés, lép, máj sérülés, agyödéma, agyvérzés, tüdő zúzódás(légmell), törés miatti trombózis. Hívom a mentőket, mert előfordulhat, hogy váratlanul romlik az állapota a sérültnek."
        }
    ],
    "FELSZERELÉSISMERET": [
        {
            q: "1. Rajzolj egy siklóernyő kupolát és nevezd meg rajta a részeit, beleértve a belső szerkezetét is! – 3 pont (22.o)",
            a: "<img src='images_a/felszereles_a_1a.jpg' class='exam-image' alt='Siklóernyő kupola felépítése 1'><br><img src='images_a/felszereles_a_1b.jpg' class='exam-image' alt='Siklóernyő kupola felépítése 2'>"
        },
        {
            q: "2. Milyen súlyú a vitorla anyaga /m2? Mekkora egy átlagos méretű kupola kiterített felülete? Összesen hány m2 anyagot építenek be egy kupolába nagyjából? – 2 pont (24.o, 39.o)",
            a: "Régebben 40-45g/m2, ma 20-24g/m2. Egy átlagos kupola felülete 20-34m2, tandemernyők 40-42m2, acro ernyők 16-19m2. Összesen a kiterített felület kb. háromszorosát, 70-100m2 anyagot építenek be egy kupolába. A vetített felület természetesen kisebb, mint a kiterített, a kupola íve miatt."
        },
        {
            q: "3. Milyen súlyú kb. egy siklóernyő? – 1 pont (39.o)",
            a: "Egy mai ernyő 4,2-7kg, a könnyített hegymászóernyők 2-3kg-osak."
        },
        {
            q: "4. Mi a „ripstop” és mi a szerepe? – 2 pont (24.o)",
            a: "Az ernyő szövete, 5-10mm-enként hálószerűen egy vastagabb, erősebb szállal, ami egy esetleges szakadás esetén meggátolja a továbbhasadást, segíti az alaktartást."
        },
        {
            q: "5. Mi a „rigifoil” és mi a szerepe? – 2 pont (23.o)",
            a: "Merevítőpálcika a beölmőnyílásnál. Szerepe a profilorr tökéletesítése, teljesítménynövelés, azáltal, hogy nagyobb sebességnél sem horpad be a profilorr, kevésbé deformálódik. Előnye az is, hogy az ernyő felhúzásakor jobban nyitva vannak a beömlőnyílások, jobban töltődik a kupola."
        },
        {
            q: "6. Mik azok a „stablapok” és mi a szerepük? Általában melyik zsinórsorhoz csatlakoznak? – 4 pont (27.o)",
            a: "Stabilizátorlapok. A kupola két szélén elhelyezkedő majdnem függőleges része.\nSzerepük: 1. Stabilizálják az irányt 2. Keresztirányban feszítik a kupolát, ezzel javítva a kupola tartását a sebesség következtében kialakuló felhajtóerő segítségével 3. Csökkentik az indukált ellenállást a szárnyvégeken, ezzel gyengítik a teljesítmény romlását.\nÁltalában a „B” sorhoz, ritkábban a „C”- hez csatlakoznak."
        },
        {
            q: "7. Rajzolj egy ábrát és nevezd meg rajta a zsinórzat részeit! – 3 pont (28.o)",
            a: "<img src='images_a/felszereles_a_7a.jpg' class='exam-image' alt='Zsinórzat felépítése 1'><br><img src='images_a/felszereles_a_7b.jpg' class='exam-image' alt='Zsinórzat felépítése 2'>"
        },
        {
            q: "8. Átlagosan hány mm a függesztőzsinórok teljes átmérője? Mennyi kb. a teherbírásuk (-tól -ig)? – 2 pont (36.o)",
            a: "0,4-4mm (tandemernyőkön) vastagságúak is lehetnek a zsinórok, 400-tól 3000-4000N-ig terjed a teherbírásuk, ami 40-től 300-400kg-nak felel meg. A főzsinórok kb. 1,6-1,8mm vastagok."
        },
        {
            q: "9. A kupola mely részéhez kapcsolódnak a fékzsinórok? Hogyan működnek, mire használjuk, és milyen változást idéznek elő a kupolán? – 3 pont (33.o, 157.o)",
            a: "A kilépőélhez csatlakoznak, irány és sebességváltoztatásra használjuk. A fékek szimmetrikus húzásával nő az állásszög, lassul az ernyő. Az egyik fék aszimmetrikus húzásával a kupola húzott oldalának megnő az ellenállása, lecsökken a sebessége, míg a másik oldal változatlan sebességgel halad, ezért a fékezett oldal felé fordul."
        },
        {
            q: "10. Rajzolj egy ábrát és nevezd meg rajta hevederzet részeit! – 3 pont (38.o)",
            a: "<img src='images_a/felszereles_a_10.jpg' class='exam-image' alt='Hevederzet részei'>"
        },
        {
            q: "11. Rajzolj egy trimmrendszert és ismertesd a működését! – 3 pont (37,38.o)",
            a: "A gyorsítóra lépve lerövidülnek az „A” és „B” sorok, ezzel megváltoztatva az állászöget növelhetünk a sebességen.<br><img src='images_a/felszereles_a_11.jpg' class='exam-image' alt='Trimmrendszer'>"
        },
        {
            q: "12. Hogyan használjuk a gyorsítót? Mikor kell bekötni? Beállításánál mik a legfőbb szempontok? – 2 pont (37.o)",
            a: "Lábbal, két fokozatban lehet müködésbe hozni, az állásszöget lehet vele csökkenteni. Beállításnál számít az ernyő, beülő típusa, a pilóta testalkata, magassága. Teljesen kinyomott gyorsítónál a lábnak teljesen nyújtva kell lennie és a gyorsító két csigájának szimmetrikusan mindkét oldalon össze kell érnie. A földön kell bekötni."
        },
        {
            q: "13. Rajzolj egy beülőt, és nevezd meg rajta a részeit! – 3 pont (89.o)",
            a: "<img src='images_a/felszereles_a_13.jpg' class='exam-image' alt='Beülő részei'>"
        },
        {
            q: "14. Milyen alapvető beülőtípusokat ismersz? Milyen lényegi különbségek lehetnek az egyes modellek között? – 3 pont (85.o)",
            a: "Hagyományos, pondrós(kisebb légellenállás), kifordítható, tandem, könnyített, acro(több mentőernyő konténer). Lényegi különbségek a súly, légellenás, tehát a teljesítmény, kényelem."
        },
        {
            q: "15. Milyen bevizsgáló rendszer(ek) minősíti(k) a siklóernyőket? Biztonsági vagy teljesítményparaméterekhez kötődik ez a minősítés? Milyen tudásszinthez, évi kb. hány repült órához ajánlottak az egyes osztályok? – 4 pont (53-55.o)",
            a: "LTF, DHV, EN. A besorolás elsősorban az ernyő biztonsági tulajdonságaihoz köthető.<br><img src='images_a/felszereles_a_15a.jpg' class='exam-image' alt='Besorolási táblázat 1'><br><img src='images_a/felszereles_a_15b.jpg' class='exam-image' alt='Besorolási táblázat 2'>"
        },
        {
            q: "16. Mit mond számodra egy adattábla? Milyen adatokat találsz rajta? Általában hol található az adattábla? – 3 pont (80.o)",
            a: "Az ernyő alapvető adatai vannak rajta: min., max. felszálló tömeg, besorolás, az ernyő súlya, területe, trimmrendszer, gyorsító, stb. Általában a belépőél közepénél vagy valamelyik stablapnál található."
        },
        {
            q: "17. Mit jelent a porozitás fogalma? Milyen egységben és hogyan mérjük? Milyen érték alatt válhat veszélyessé az ernyő? Mi a veszélye az alacsony porozitású ernyőnek? – 3 pont (81.o)",
            a: "Légáteresztő képesség. Secundumban mérjük poroziméterrel (pl. JDC MK1) , amely egy bizonyos légtömeget átszív az ernyő egy adott részén x másodperc alatt. 30 alatt zsákesésre hajlamos, 15 alatt nem szabad repülni. Az alacsony porozitású ernyőknek már nagyon alacsony a passzív biztonságuk."
        },
        {
            q: "18. A magasabb porozitás feltétlen jobb állapotú kupolát jelent? Ha igen: miért? Ha nem: miért nem? – 2 pont (82.o)",
            a: "Nem, mert a különböző anyagú ernyők, különböző képpen öregednek. A szakítószilárdság is egy fontos tulajdonság, ami nem feltétlenül függ össze a porozitással."
        },
        {
            q: "19. Mi az oka, hogy nem érdemes egy bizonyos érték fölött az ernyők porozitását egymással összehasonlítani? – 1 pont (82.o)",
            a: "Mert a különböző anyagú ernyők másképp öregednek, 300s felett egy ernyő újszerűnek tekinthető."
        },
        {
            q: "20. Milyen mentőernyőket / mentőrendszereket ismersz? Mik a sajátosságaik? – 3 pont (100-104.o)",
            a: "Mentőrendszernek nevezzük a mentőernyőt és a beülőhöz történő csatlakoztatását egy konténer segítségével, amely lehet cső, vagy borítékrendszerű.\n-körkupolás: legalapabb (4-7m/s)\n-cross: kisebb süllyedés, jobb ingastabilitás és nyitási gyorsaság\n-SQR (square round): a körkupolásnál szintén kisebb süllyedés, jobb ingastabilitás, nyitási sebesség\n-rogallo: irányítható, kis süllyedés(3-4,5m/s), de le kell hozzá oldani a főernyőt"
        },
        {
            q: "21. Hasonlítsd össze a hagyományos körkupolás, a négyszög, illetve a rogallo mentőernyő tulajdonságait! – 3 pont",
            a: "-körkupolás: legalapabb (4-7m/s)\n-cross: kisebb süllyedés, jobb ingastabilitás és nyitási gyorsaság\n-SQR (square round): a körkupolásnál szintén kisebb süllyedés, jobb ingastabilitás, nyitási sebesség\n-rogallo: irányítható, kis süllyedés(3-4,5m/s), de le kell hozzá oldani a főernyőt"
        },
        {
            q: "22. Sorold fel, milyen navigációs eszközöket használunk a siklóernyőzéshez! – 2 pont (111.o-...)",
            a: "Variométer (magasságmérő, barometer), GPS, szélmérő, iránytű"
        },
        {
            q: "23. Írd le mi az alapvető elvi különbség a barometrikus és a műholdas magasságmérési módok között. Mire kell odafigyelni a különböző műszerek beállításánál? – 3 pont",
            a: "A barométer a környezet légnyomásából számol, ezért az időjárással változhat, a GPS-hez 4 műhold kell, időben vagy egy kis késés. A jól beállított barometrikus magasságmeghatározás sokkal pontosabb, kb. 10cm a hibázás, a GPS 15m-es pontosságához képest."
        },
        {
            q: "24. Hogyan győződhetsz meg biztonsággal arról, hogy egy siklóernyő a korának megfelelő, és repülésre alkalmas állapotban van-e? – 2 pont (82.o)",
            a: "Porozitás méréssel, zsinórzat, kupola ellenőrzésével, légialkalmassági vizsga meglétével.Kupola szakítószilárdságának és a zsinórok nyúlásának ellenőrzésével."
        },
        {
            q: "25. Milyen típusú sisakokat ismersz, amit siklóernyőzéshez használunk? Milyen szempontokat kell figyelembe venni? – 1 pont (119.o)",
            a: "Állvédős, állvédő nélküli. Érdemes siklóernyőzéshez fejlesztett sisakot (EN 966 szabvány) vásárolni, többek közt a sisak súlya miatt."
        },
        {
            q: "26. Milyen a megfelelő siklóernyős bakancs? Miért? – 1 pont (120.o)",
            a: "Magasszárú bakancs, mely védi, tartja a bokát, nyitott akasztók nélkül, hogy ne akadjon bele a zsinórzat."
        },
        {
            q: "27. Milyen egyéb szempontokra kell / érdemes odafigyelni a pilóta öltözeténél? – 1 pont (120.o)",
            a: "Időjárásnak megfelelő legyen, figyelembe véve a magasság növekedésével járó hőmérséklet csökkenést is. Sokat javíthat a komfort érzeten egy kesztyű vagy maszk."
        }
    ],
    "KÜLÖNLEGES REPÜLÉSI HELYZETEK": [
        {
            q: "1. Mit teszel, ha az ernyő felhúzásakor csomót látsz a zsinórzaton? – 1 pont (221.o)",
            a: "Megszakítom a startot."
        },
        {
            q: "2. Mit teszel, ha a levegőben vagy, amikor csomót észlelsz a zsinórzaton? Milyen veszéllyel jár ez? Mire kell ebben a helyzetben figyelni a repülésnél? – 3 pont (233.o)",
            a: "Felmérem melyik zsinóron keletkezett a csomó, majd a kisebb megoldásoktól haladok a nagyobbak felé. Elsőként meg lehet próbálni a stablapokhoz tartozó zsinór meghúzását, aztán két oldali fülcsukás. Drasztikusabb megoldás lehet a féloldalas csukás, esetleg full stall-al az ernyő „reset”-elése, de ezek csak tapasztalt pilótáknak ajánlott. Attól függően, hogy hol van a csomó, fordíthatja különböző mértékben az ernyőt, ellen kell tartani a másik fékkel, de vigyázni kell, hogy ne fékezzük túl, mert áteshet az ernyő."
        },
        {
            q: "3. Egyenletes leáramlásba kerülve mit teszel? Miért? – 2 pont (163.o)",
            a: "Nyomom a gyorsítót, mert a legjobb siklást az origóból a polárgörbére húzott érintő adja meg, ez pedig kinyomott gyorsítóval érhető el. Ezenkívül hamarabb ki is kerülhetek a leáramlásból."
        },
        {
            q: "4. Turbulens leáramlásba kerülve mit teszel? Miért? – 1 pont (163.o)",
            a: "Mellőzöm a gyorsító használatát, mert kisebb állásszögnél az ernyő érzékenyebben reagál a turbulenciára."
        },
        {
            q: "5. Mi a „fülcsukás”? Mire és mikor használjuk? Mik a jellemzői? Mennyit süllyed benne az ernyő? – 3 pont (280.o)",
            a: "Magasságleépítő manőver. Akkor használjuk, amikor enyhe magasságcsökkenésre van szükségünk. Csökken az ernyő vetített felülete, ezért nő a felületi terhelés, de nem nő számottevően a vízszintes sebesség, mert a fülek fékezik az ernyőt. Kis magasságban is jól használható, kevesebb gyakorlatot igényel, megőrzi vízszintes sebességét az ernyő és irányítható marad testsúlykormányzással, mert (ha fülcsukásban is maradna az ernyő) a fékek húzására visszanyílnak a fülek. 2-3m/s-os süllyedés érhető el vele."
        },
        {
            q: "6. Írd le, hogyan idézed elő és hogyan vezeted ki a fülcsukást! – 2 pont (280.o)",
            a: "A szélső „A” heveder 15-30cm-es lehúzásával lehet előidézni, és a fékek dinamikus, de nem túl mély(kb.30cm-re) húzott egymással ellentétes pumpálásával lehet kivezetni."
        },
        {
            q: "7. Hogyan irányítom az ernyőt csukott fülekkel? – 1 pont (280.o)",
            a: "Testsúlykormányzással, mert fék húzásra visszanyílik a csukott fül."
        },
        {
            q: "8. Milyen sorrendben használjuk a fülcsukást és a gyorsítót? Miért? Fordított sorrendben mi történhet? – 2 pont (281.o)",
            a: "Először becsukjuk a füleket, majd nyomjuk a gyorsítót. Fordított sorrendben frontstall vagy féloldalas csukás keletkezhet."
        },
        {
            q: "9. Hogyan nevezzük azt a helyzetet, amikor az ernyőd teljes belépőéle aláhajlik? Mikor fordulhat elő? Mikor jelenthet komoly vészhelyzetet és miért? Hogyan korrigálható? – 4 pont (61.o, 142-143.o, 273.o, 275.o)",
            a: "Frontstall. Előfordulhat turbulens időben (különösen gyorsító használatával), egyes manőverek hibás kivitelezésénél. Talaj közelben jelenthet vészhelyzetet, mert magasságvesztéssel jár. Ha volt gyorsítás le kell róla lépni és mindkét fék egyidejű, egyszeri, kb vállig pumpálásával lehet korrigálni."
        },
        {
            q: "10. Kezdő pilóták jellemzően a repülés mely fázisában idézhetnek elő frontstallt? Milyen hibát követnek el ehhez? – 2 pont (275.o)",
            a: "Startnál vagy közvetlen utána, azzal, hogy nem fékezik meg, hagyják túlságosan előre lőni az ernyőt."
        },
        {
            q: "11. Az ernyőd baloldala becsukódik, hogyan korrigálod ezt a helyzetet? Mi válthatja ki? Hogyan zajlik a folyamat, mik a jellemzői? Hogyan előzhető meg? – 5 pont (273.o)",
            a: "A korrekció függ a csukás mértékétől, amennyiben a gyorsító használatban volt, le kell lépni róla. Kisebb csukás esetén igyekezni kell tartani az irányunkat, testsúlyunkat rá kell terhelni a nyitott oldalra és feszesen tartani a nyitott oldali féket, ezáltal általában a torlónyomás miatt visszatöltődik az ernyő. Nagyobb csukásnál először azt kell megakadályozni, hogy az ernyő spirálba essen, ezután, ha nem nyílik vissza magától az ernyő, a csukott oldali féken kell pumpálni egyet-kettőt. Turbulencia vagy pilótahiba okozhatja. Nyomáscsökkenés előzi meg, ezt jellemzően lehet érezni a fékek felkönnyülésével, ilyenkor még megelőzhető a csukás, a fékek olyan mértékű húzásával, amíg újra érezhető a fékerő."
        },
        {
            q: "12. Miért előz meg és fordul dinamikusan a nyitott oldal féloldalas csukás esetén? (a kérdésre aerodinamikai / fizikai magyarázatot várunk) – 3 pont (273.o)",
            a: "Mert ilyenkor a pilóta teljes súlya a nyitott oldalt terheli, emiatt megnő a felületi terhelés és a nyitva maradt oldal sebessége is, a csukott oldalnak viszont megnő a légellenállása és lassul."
        },
        {
            q: "13. Mi a zsákesés? Mik a jellemzői? Mi okozhatja? Mi a veszélye? Hogyan korrigálod? – 3 pont (287.o)",
            a: "A minimumsebesség közelében és az áramlás leválás között az ernyőn átáramlik a levegő, az ernyő a formáját megtartja, de nem keletkezik felhajtóerő, ejtőernyőszerűen viselkedik. 5-8m/s-os süllyedés jellemzi, okozhatja pl. rosszul kivitelezett B-stall. Stabil zsákesésbe leginkább alkalmatlan műszaki állapotú, alacsony porozitású ernyő tud kerülni, ennek veszélye, hogy sokkal nehezebb megszüntetni, mint egy jó állapotú ernyőn. Korrigálni lehet a gyorsító kinyomásával, egyes típusoknél a fékek dinamikus félig behúzúsával majd visszaengedésével."
        },
        {
            q: "14. Mi a B-stall? Hogyan idézed elő? Hogyan zajlik a folyamat, mik a jellemzői? Mennyivel süllyed az ernyő stabil B-stallban? Milyen horizontális sebessége van az ernyőnek B-stallban? Hogyan vezeted ki? Mikor használjuk és mikor nem? – 4 pont (281.o)",
            a: "Magasságleépítő manőver. A „B” zsinórsor meghúzásával beroppantjuk a kupolát, 6-10m/s-os süllyedés érhető el vele, de vízszintes sebesség nincs, ezért elsodorhatja a szél az ernyőt. Kivezetéshez egyszerűen fel kell engedni a behúzott „B” sort. Legalább 300m magasságban használjuk és nem, ha nem megfelelő hozzá az ernyőnk (ernyő kézikönyve)."
        },
        {
            q: "15. Mi a merülőspirál? Mik a jellemzői? Mennyivel süllyed(het) az ernyő? Milyen módjait ismered a bevezetésnek? Hogyan vezeted ki? Mikor használjuk? – 4 pont (283-284.o)",
            a: "Magasságleépítő manőver. A pilóta és az ernyő egyaránt nagy erőknek vannak kitéve (ezek csökkentésére használhatunk Anti-G ernyőt), alapos felkészülést és gyakorlatot igényel. Süllyedése 10-15m/s. Bevezetése lehet statikus (a pilóta a súlypontja áthelyezésével és a belső oldali fék 30-40cm-re húzásával fordulóba viszi az ernyőt és megvárja míg pár kör elteltével spirálba esik) és dinamikus (a pilóta hintáztatni kezdi az ernyőt, kibillenti a kupolát a stabil repülési helyzetéből és a hintázás lendületét kihasználva ugratja az ernyőt spirálba). Kivezetéshez először pár másodpercre áthelyezzük testsúlyunkat a külső oldalra, ezalatt lassan felengedünk 10-15cm-t a belső fékből, ezután testsúlyunkat visszahelyezzük normál pozícióba, a fékek helyzetén már nem változtatunk. Ezután megvárjuk míg a spirál lassulni kezd, a süllyedés és a kerületi sebesség is csökken, majd teljesen felengedjük a fékeket. Gyors magasságvesztésre használjuk."
        },
        {
            q: "16. Mik a spirál veszélyei főként a tanulási fázisban? – 2 pont (284-285.o)",
            a: "Statikus bevezetésnél a fék túlhúzása, ilyenkor leválik az áramlás a túlfékezett szárnyfélről, az ernyő dugóhúzóba kerül. A spirálban a pilóta tovább húzza a belső oldali féket, túl gyors süllyedésbe kezd, túl nagy erők hatnak a szervezetére, ájuláshoz vezethet. Kivezetésnél a fék túl gyors felengedése oldalcsukáshoz vezethet."
        },
        {
            q: "17. Mi a full stall? Ki vagy mi idézheti elő? Hogyan zajlik, hogy néz ki a full stall folyamata? Hogyan vezethető ki? – 4 pont (277-279.o)",
            a: "Teljes áramlásleválás. Kizárólag a pilóta idézheti elő, mindkét fék teljes lehúzásával és lent tartásával (8-10 m/s-os süllyedéssel jár). Az ernyő sebessége min. sebesség alá csökken, leválik az áramlás. Tapasztalt pilóták használhatják az ernyő „reset”-elésére pl. befűződéskor, negatív kanyar korrekciójaként, az aszimmetrikus veszélyhelyzetből szimmetrikust teremtve, ami jobban kezelhető. Kivezetéshez először engedjük fel a fékeket szimmetrikusan a legalsó pozíciótól kb 20cm-re, amikor az ernyő stabilabbá válik (még mindig egy kicsit pumpáló, összeomlott szárny), fokozatosan engedjük feljebb a fékeket kb. 2mp-enként."
        },
        {
            q: "18. Jellemzően milyen helyzetekben húznak a pilóták szándékolatlanul full stallt? – 2 pont (278.o)",
            a: "Jellemzően kezdő pilóták fékkel a kezükben akarják magukat beigazítani a beülőbe. Hirtelen sebesség csökkentésre kényszerüléskor(pl.ütközés elkerülése). Valamilyen egyszerűbb vészhelyzet túlreagálása(pl front stall). Elhibázott leszálláskor(kilebegtetés túl magasan)."
        },
        {
            q: "19. Ha a pilóta már átejtette az ernyőt és levált az áramlás a kupoláról, mikor és hogyan engedheti vissza a fékeket és mikor nem? Miért? – 2 pont (279.o)",
            a: "Teljesen akkor engedheti vissza miután az ernyő erős pulzálását megszüntette a fékek szimmetrikus, legalsó pontjuktól kb 20cm-el való feljebb engedésével. Az átesést követően hirtelen semmiképp nem szabad visszaengedni a fékeket, mert a kupola annyira előre lőhet ettől, hogy a megfeszülő zsinórzattal, a pilótát magába rántja."
        },
        {
            q: "20. Mi a negatív kanyar? Ki vagy mi idézheti elő? Miről ismered fel? Hogyan korrigálható? – 4 pont (276-277.o)",
            a: "Az áramlás féloldalas leválása, dugóhúzó. Kizárólag a pilóta tudja előidézni az egyik fék túlzott lehúzásával és lent tartásával. Megtorpan (leválik az áramlás) az egyik szárnyfél, míg a másik tovább repül körülötte, a pilóta kilendül. Korrigáláshoz nem túl hirtelen vissza kell engedni a húzott féket."
        },
        {
            q: "21. Jellemzően milyen helyzetekben húznak a pilóták szándékolatlanul negatív kanyart? – 2 pont (276.o)",
            a: "Termikben vagy lejtőszélben, amikor az alapból fékezett ernyővel akar a pilóta túl szűken fordulni, ütközés elkerülése érdekében túlhúzott fék használatakor, elhibázott leszálláskor."
        },
        {
            q: "22. Hány fázisból áll a mentőernyődobás és mik azok? – 2 pont (108.o)",
            a: "Két fázisból áll: A pilóta a fogantyú segítségével kirántja a konténerből a mentőernyőt, majd irányítottan eldobja."
        },
        {
            q: "23. Milyen helyzetekben használunk mentőernyőt? Mikor érdemes még a főernyő helyrehozatalával próbálkozni és mikor kell azonnal mentőernyőt dobni? – 2 pont (100.o, 110.o)",
            a: "Alapvetően akkor használjuk, ha elvesztettük a kontrollt a főernyő felett. Megfelelő magasságban, ha a főernyő a fejünk felett van meg lehet próbálkozni a helyreállításával. Ütközés eseten azonnal mentőernyőt kell dobni. Twist (heveder megtekeredés), befűződés, heves spirál esetén, ha nincs a fejünk felett az ernyő, dobni kell, legkésőbb 100m magasságig."
        },
        {
            q: "24. A mentőernyő eldobását követően milyen dolga van még a pilótának, mire kell odafigyelnie földet érésnél föld, erdő, illetve víz fölött? Miért? - 2 pont (109.o)",
            a: "Dobás után be kell gyűjteni a főernyőt. Földet érni zárt lábbal kell, kigurulva, hogy elvesszen a nagy mozgási energia. Vízre szállásnál ügyelni kell, hogy időben kicsatoljuk magunkat, mert a beülő a pilótát arccal a vízbe fordítva fent marad a vízen."
        },
        {
            q: "25. Mire kell figyelni a pilótának mentőernyővel történő földet érésnél? – 2 pont (109.o)",
            a: "Zárt lábbal kell talajt érni, a nagy mozgási energiát a pilóta valamelyik oldalán ki kell gurulja. Földet érést követően erős szélben a töltve maradt mentőernyő elhúzhatja a pilótát, ezért kontrollálni kell a középzsinórokkal."
        },
        {
            q: "26. Hová van bekötve a mentőernyő csatolótagja és miért? – 1 pont (101.o)",
            a: "A vállkörök tetejéhez, mert ez predesztinálja, hogy a pilóta álló helyzetben érjen földet."
        },
        {
            q: "27. Mit nevezünk V-állásnak mentőernyődobás esetén? Miért fordulhat elő? Mik a veszélyei? Hogyan kerülhető el? – 2 pont (110.o)",
            a: "V-állás, amikor a mentőernyő dobást követően a főernyő visszanyílik. Mert a pilóta nem „hatástalanította” (pl. gyűjtötte be) a főernyőt. Veszélye, hogy pl. el kezd pörögni, nem biztosítja a megfelelő sebességcsökkenést, pozíciót a megfelelő földet éréshez. Elkerülhető a főernyő begyűjtésével."
        }
    ],
    "LÉGTEREK ÉS LÉGI KÖZLEKEDÉSI SZABÁLYOK": [
        {
            q: "1. Mi a nem ellenőrzött, nem koordinált légterek maximális átlagos tengerszint feletti magassága Magyarország felett? – 1 pont (jogtar.hu)",
            a: "2900m."
        },
        {
            q: "2. Ingyenes, hivatalos forrásból honnan kaphatunk információt a napi légtérfelhasználási tervben érintett légterekről és azok tervezett üzemidejéről? – 1 pont (előadás)",
            a: "hungarocontrol.hu , netbriefing.hu, telefonon, FIC (Flight Information Center)"
        },
        {
            q: "3. Mi a különbség az ellenőrzött és a nem ellenőrzött légtér között? – 1 pont (304.o)",
            a: "Ellenőrzött légtérben a légi járműveknek légiforgalmi irányítást adnak. A nem ellenőrzött légterekben a pilóták saját belátásuk és felelősségük alapján repülnek: információt kapnak, de irányítást nem."
        },
        {
            q: "4. Mi a különbség az ellenőrzött és a koordinált légtér között? – 1 pont (jogtar.hu)",
            a: "koordinált légtér: a vitorlázó- és siklórepülések céljára az ellenőrzött légtérben kijelölt légtér, amelyben repülések az ellenőrzött légtérben illetékes légiforgalmi szolgálati egység engedélye alapján, koordinációs feladatokat ellátó szervezet közreműködésével hajthatók végre."
        },
        {
            q: "5. Ismertesd a következő légtértípusok jellemzőit, és az ilyen légterekre érvényes szabályokat. Fejtsd ki, mikor és milyen feltételekkel repülhetünk bennük siklóernyővel! – 10 pont",
            a: "-P: Prohibited: a légijármű balesete esetén katasztrófával járna a berepülés, pl. atomerőmű felett. Mindig aktív. Csak katasztrófaelhárító légijárművek. Siklóernyővel tilos berepülni.\n-D: Dangerous: pl. lőtér felett, nem mindig aktív, csak a tevékenységben részt vevő légijármű repülhet be. Csak üzemidőn kívül szabad siklóernyővel.\n-TRA: Temporarily Reserved Airspace: Állami (jellemzően katonai) légijárműveknek fenntartva, nem mindig aktív. Csak üzemidőn kívül szabad siklóernyővel.\n-KVL vagy B (nem légtérosztály): környezetvédelmi szempontból korlátozott légtér, alapszabályként tilos a hőlégballonos és hajtóműves repülés (külön engedéllyel lehetséges), mindig aktív. Motor nélküli siklóernyővel szabad.\n-R: Reserved/Restricted: mindig aktív, valaminek (pl. épület, élővilág) védelmére fenntartva, siklóernyővel a legtöbb berepülhető (mer.re) / siklóernyővel tilos berepülni(előadás).\n-TMZ: Transponder Mandatory Zone: kötelező A/C vagy S üzemmódú transzponder folyamatos fedélzeti üzemeltetése. Siklóernyővel tilos berepülni, mivel nincs ilyen eszköz rajta\n-RMZ: Radio Mandatory Zone: belépés előtt kötelező a rádiókapcsolat felvétel, szükség vagy felszólítás esetén kapcsolatlétesítés, kötelező figyelni a rádió forgalmat. Siklóernyővel rádiós vizsga, engedély és készülék esetén berepülhető.\n-DZ: drop zone: tipikusan ejtőernyős tevékenység céljából időszakosan működő légtér, nincs riasztó és tájékoztató szolgálat, kötelező a folyamatos kétoldalú rádiókapcsolat, IFR forgalom tilos, közvetlen belépés előtt kötelező kapcsolatfelvétel a DZ kezelőjével. Siklóernyővel üzemidőben kapcsolatfelvétel és engedély után, üzemidőn kívül berepülhető.\n-G: mindig aktív, csak VFR engedélyezett, nem keverendő a G légtérosztállyal, lehet koordinált/nem koordinált, tipikusan ellenőrzött légterekből \"kivágva\". Siklóernyővel berepülhető.\n-Eseti: Ideiglenesen lefoglalt légtér pl. drónoknak vagy légibemutatóhoz. Siklóernyővel csak üzemidőn kívül használható."
        },
        {
            q: "6. Melyik ICAO légtérosztályba tartoznak a magyarországi nem ellenőrzött légterek? Milyen általános szabályok érvényesek erre az osztályra? – 2 pont (318., 329.o)",
            a: "G osztályba tartoznak, 1200m AMSL-ig VFR, 1200 és 2900m AMSL között VFR vagy IFR. VFR szabályok: kitérés, előzés, elsőbbségadás, termikrepülés szabályai."
        },
        {
            q: "7. Mi a különbség a G típusú légtér és a G osztályú légterek fogalma között? – 1 pont",
            a: "G osztály: ICAO „G” osztályra vonatkozik. G típusú légtér: nem lehet benne IFR forgalom, M.o.-n egy ilyen légtér van, a Dunakanyar környékén(állandó)."
        },
        {
            q: "8. Milyen feltételek mellett kerülhető siklóernyővel felülről egy olyan légtér, melybe berepülni tilos? – 1 pont (előadás)",
            a: "A tilos légtér felső határától minden esetben 150m-t kell tartani, berepülés előtt meg kell győződni arról, hogy emelés nélkül, akár leáramlásban is kiérünk felette valamelyik oldalán."
        },
        {
            q: "9. Siklóernyővel repülhetsz-e, és ha igen, milyen feltételekkel egy G típusú légtér azon részében, mely átlapol egy TMA-val? Változtat-e ezen, ha a G légtér koordinált, és ha igen, hogyan? – 2 pont",
            a: "Alapvetően nem, de ha koordinálttá teszik, akkor igen. M.o-n nincs ilyen."
        },
        {
            q: "10. Mit jelentenek a VFR és az IFR fogalmak? A siklóernyőzésre melyik vonatkozik? – 2 pont",
            a: "VFR: látva repülés IFR: műszerrepülés. Siklóernyő VFR."
        },
        {
            q: "11. Milyen meteorológiai feltételek mellett végezhető VFR repülés? – 1 pont",
            a: "Megfelelő látóviszonyok esetén, a felhőktől való távolság határokat betartva: VMC (Visual Meteorological Conditions) limitek.\n(3000m AMSL felett: min. látótáv: 8000m vízszintesen, felhőktől való min. távolság: 1500m vízszintesen, 300m függőlegesen.)\n900-3000m AMSL között: min. látótáv: 5000m vízszintesen, felhőktől való min. távolság: 1500m vízszintesen, 300m függőlegesen.\n900m AMSL alatt min. látótáv: 1500m látótáv vízszintesen,felhőktől való min. távolság: 0m, de folyamatos talaj vagy vízfelszín látás."
        },
        {
            q: "12. VFR repülés során milyen magasságban mennyire közelíthetőek meg tereptárgyak, illetve felhők? – 2 pont (14/2000. (xi. 14.) kövim rendelet)",
            a: "-felhők: 900m AMSL vagy 300m AGL (amelyik magasabb) alatt: teljesen megközelíthető.\n-felhők: 900m és 2900m AMSL között vagy 300m AGL esetén: 1500m vízszintes, 300m függőleges."
        },
        {
            q: "13. Siklóernyővel milyen feltételekkel vehetőek igénybe a magyarországi határsávi légterek, illetve repülhető át az országhatár? – 1 pont",
            a: "Nem repülhető át, nem vehetők igénybe."
        },
        {
            q: "14. Ismertesd a kitérés szabályait nyílt légtérben és lejtőszélben! – 4 pont (330.o)",
            a: "Nyílt tér:\n-szembetartó két ernyős esetén mindkettőnek kötelező jobbra kitérnie, alulról, felülről tilos kerülni.\n-összetartó irányban és hozzávetőleg azonos magasságon repülve, az a légi jármű köteles kitérni, amelyik a másikat jobbról látja, kivéve irányíthatósági elsőbbség esetén. Pl.: hőlégballon elől a siklóernyő tér ki minden esetben.\n-keresztező haladásnál annak van elsőbbsége, aki jobbról érkezik, tehát az ad elsőbbséget aki jobbról látja a másikat\n-előzés esetén az előzőtt embernek van elsőbbsége, mindaddig amíg az előzés nincs teljesen befejezve, az előzőnek jobbról kell előznie\nLejtő:\n-akinek a hegy a jobb oldalára esik, annak van elsőbbsége, tehát akinek a bal oldalára esik a hegy, annak kell jobbra kerülnie.\n-a lejtőzőknek elsőbbségük van a termikezőkkel szemben, ha a termik a lejtőtérben van"
        },
        {
            q: "15. A jogszabály milyen repülőeszközöket sorol a siklóernyővel azonos kategóriába? Milyen jelentősége van ennek a kitérés szempontjából? – 1 pont (328.o)",
            a: "Hajtómű nélküli, levegőnél nehezebb járművek. Elsőbbség adás szempontjából van jelentősége, annak van elsőbbsége, akinek a manőverezhetősége korlátozottabb."
        },
        {
            q: "16. Ismertesd különböző repülőeszközök találkozásának alapelveit! – 1 pont",
            a: "Azonos rangú jármű esetén jobbra kitérés, egyéb esetben a nehezebben manőverezhető járműnek van elsőbbsége."
        },
        {
            q: "17. Ismertesd a termikrepülés szabályait! – 2 pont (331.o.-)",
            a: "A termiket megtaláló pilóta határozza meg a körözés irányát, a többieknek akár felette, akár alatta csatlakoznak, ezt az irányt kell követniük. Azonos magasság esetén koncentrikus körökben szabad repülni, lehet felfelé „előzni” pl. a sugár változtatásával, de csak ha nem veszélyeztetünk mást, és tilos irányt változtatni."
        },
        {
            q: "18. Mit nevezünk holttérnek? – 1 pont (329.o)",
            a: "A pilóta háta mögötti és az ernyő által kitakart felette levő tér."
        },
        {
            q: "19. Mit teszel, ha balesetveszélyes helyzetbe kerülsz egy szabálytalan módon feléd közeledő légijármű miatt? – 1 pont",
            a: "Megpróbálok kitérni, mindent meg kell tenni a baleset elkerülése érdekében, elsőbbségről le kell mondani."
        },
        {
            q: "20. Magyarországon repülve hol számíthatsz legálisan repülő pilóta nélküli légijárművel (UAV-val) való találkozásra? Mit tud és mit köteles tenni a siklóernyő, illetve az UAV pilótája az elkülönítés biztosítására? – 2 pont (329.o)",
            a: "Magyarországon drón legálisan csak eseti légtérben, illetve 150m AGL G osztályú légtérben repülhet. A drónnak van elsőbbségadási kötelezettsége, 30m-es távolságot kell tartani. Az ütközés elkerülése a legfontosabb, ha a siklóernyővel észlelem, természetesen én is kitérek."
        }
    ],
    "METEOROLÓGIA": [
        {
            q: "1. Mit jelent az időjárás fogalma? – 1 pont (169,171.o)",
            a: "A troposzféra pillanatnyi fizikai állapota. Több meteorológiai alapelemmel jellemezhetjük: hőmérséklet, páratartalom, légnyomás, szél, csapadék, látótávolság, felhőzet, stb."
        },
        {
            q: "2. Milyen időjárási paramétereket figyelünk, amikor meg szeretnénk határozni, hogy alkalmas-e siklóernyős repülésre az Időjárás? – 3 pont (171.o)",
            a: "Páratartalom, légnyomás, szélirány, szélerősség, csapadék, látótávolság, felhőzet, stb."
        },
        {
            q: "3. A légkör mely rétegében játszódnak a számunkra fontos időjárási jelenségek? Milyen magas réteget jelent ez a sarkoknál és az egyenlítőnél? – 2 pont (169,171.o)",
            a: "A troposzférában. A sarkoknál kb. 6km az egyenlítőnél kb. 18km."
        },
        {
            q: "4. Mi az „izobár” fogalmának jelentése? – 1 pont (174.o)",
            a: "Azonos légnyomású helyek. Az izobár vonalak a meteorológiában olyan vonalak, amelyek azonos légnyomású pontokat kötnek össze egy térképen."
        },
        {
            q: "5. Mit nevezünk anticiklonnak? Mik a jellemzői? – 3 pont (181,182.o)",
            a: "Egy vagy több zárt izobárral rendelkező légköri képződmény, melynek középpontjában a legmagasabb a légnyomás. Jellemzői: felhőoszlató, forgási iránya az északi féltekén az óramutató járásával megegyező, középpontjában magas a légnyomás."
        },
        {
            q: "6. Mit nevezünk ciklonnak? Mi a szerepe? Mik a jellemzői? – 3 pont (182-184.o)",
            a: "Egy vagy több zárt izobárral rendelkező légköri örvény, melynek középpontjában a legalacsonyabb a légnyomás, és a szélek felé növekszik. Jellemzői: forgási iránya az északi féltekén az óramutató járásával ellentétes, középpontjában a légnyomás alacsonyabb, nagy (akár 500-2000km) kiterjedésű, felhőképző hatása van, borult, csapadékos időjárással jár."
        },
        {
            q: "7. Hogyan jelölik a térképeken a hidegfrontot? – 1 pont (175.o)",
            a: "<img src='images_a/met_a_7a.jpg' class='exam-image' alt='Hidegfront 1'><br><img src='images_a/met_a_7b.jpg' class='exam-image' alt='Hidegfront 2'>"
        },
        {
            q: "8. Mutasd be a ’klasszikus’, másodfajú hidegfrontot! – 3 pont (187.o)",
            a: "A ciklon belsejében lévő, gyorsan mozgó(80-120km/h) hidegfront. A hideg levegő nagy sebességgel a meleg alá nyomul, ezzel emelkedésre kényszeríti azt. A front előtt erős feláramlás, kifutószél jön létre, a frontvonal előtt és mögött zápor, zivatar jelentkezik. 24-48 órán át marad fenn. Aktív felhőzete keskeny, 100km körüli, ezért nagy sebessége miatt, csak pár órával lehet előre látni."
        },
        {
            q: "9. Hogyan jelölik az időjárási térképeken a melegfrontot? – 1 pont (175.o)",
            a: "<img src='images_a/met_a_9a.jpg' class='exam-image' alt='Melegfront 1'><br><img src='images_a/met_a_9b.jpg' class='exam-image' alt='Melegfront 2'>"
        },
        {
            q: "10. Mutasd be a melegfrontot! – 3 pont (186.o)",
            a: "Kisebb fajsúlya miatt a meleglevegő felsiklik a hidegebb, sűrűbb levegőtömegre. Lassú, kb. 30km/h-s sebességgel mozog, 600-800km-el a front előtt már vannak ismertető jelei (pl. nagy magasságban pehelyfelhő kialakulása), ezért jól előrejelezhető. Ritkán kísérik zivatarok, siklóernyős szempontból nem jelent különösebb veszélyt."
        },
        {
            q: "11. Hogyan jelölik az időjárási térképeken az okklúziós frontot? – 1 pont (175.o)",
            a: "<img src='images_a/met_a_11a.jpg' class='exam-image' alt='Okklúziós front 1'><br><img src='images_a/met_a_11b.jpg' class='exam-image' alt='Okklúziós front 2'>"
        },
        {
            q: "12. Mit jelent az okklúziós front? Jellemezd! – 3 pont (188.o)",
            a: "Az a helyzet, amikor a hidegfront utoléri a meleget. Az okklúzióval a ciklon gyengül, majd megszűnik. A cikloncentrumhoz közeli részen alakul ki, két front záródása hozza létre, jelentős mennyiségű csapadékkal jár."
        },
        {
            q: "13. Mit mesél számodra egy izobár térkép? Mit és hogyan tudsz leolvasni róla? – 3 pont (174,175.o)",
            a: "Összefüggéseiben figyelve a jelenségeket, következtethetünk a várható változásokra. Leolvasható róluk a ciklonok, anticiklonok helyzete, a frontok keletkezése, haladása, felszívódása, várható szélirány, szélerősség. Minél sűrűbbek a vonalak, annál erősebb a szél."
        },
        {
            q: "14. Mi az izotermia? – 1 pont (172.o)",
            a: "Izotermiának nevezzük, amikor valamely légréteg hőmérsékleti gradiense nulla, vagyis a magasság növekedésével a hőmérséklet nem változik."
        },
        {
            q: "15. Mi az inverzió? Szabad szemmel hogyan láthatod? – 2 pont (172,173.o)",
            a: "Inverzió, amikor a légkör egy bizonyos rétegében a hőmérséklet a magassággal növekszik. Esetenként szabad szemmel is látható, mivel a záróréteg miatt megáll a feláramlás, alatta megreked a pára, köd, szmog."
        },
        {
            q: "16. Mit nevezünk adiabatikus folyamatnak? – 1 pont (172.o)",
            a: "Amikor a rendszer és környezete között nincs hőcsere. Ez alapvetően jellemző a termikekáramlására."
        },
        {
            q: "17. Mit jelent a hőmérsékleti gradiens fogalma? – 1 pont (171,172.o)",
            a: "Egységnyi távolságra eső hőmérséklet változás, lehet függőleges és vízszines. Siklóernyőzésben leginkább a 100m-enként függőleges hőmérséklet változást értjük alatta."
        },
        {
            q: "18. Mennyi az átlagos hőmérsékleti gradiens értéke? – 1 pont (172.o)",
            a: "0,65 Celsius fok/100m"
        },
        {
            q: "19. Mennyi a közepes tengerszintre ható légnyomás átlagos értéke? – 1 pont (174.o)",
            a: "1013,25 hPa."
        },
        {
            q: "20. Ismertesd a lejtőszél kialakulásának feltételeit! Jelöld be egy ábrán az emelőzónákat és a rotort! – 3 pont (250,251.o)",
            a: "Feltételei: megfelelő szélirány, szélerősség, hegygerinc. A szelet az útjában álló akadály (domb, hegyoldal stb.) kitérésre kényszeríti, a fölfelé kényszerített légáramlat emelőteret hoz létre. A legideálisabb, ha a szél iránya merőleges a hegyoldalra.<br><img src='images_a/met_a_20_lejtoszel.jpg' class='exam-image' alt='Lejtőszél kialakulása'>"
        },
        {
            q: "21. Hogyan változik a lejtő emelőtere a lejtő meredekségével? – 2 pont (251.o)",
            a: "Minél meredekebb a lejtő, annál jobban kitolódik a lejtő elé az emelőtér, minél laposabb, annál hátrébb, azonban soha nem találjuk pontosan a hegygerinc felett."
        },
        {
            q: "22. A hegyoldal szél felőli oldalán hol számíthatunk turbulenciára? – 1 pont (252.o)",
            a: "Másik siklóernyő mögött haladva, termik elszakadási helyénél, bármilyen a szél útjában álló tereptárgy mögött."
        },
        {
            q: "23. Hogyan alakul napközben a termikus aktivitás? Kezdő pilótáknak a nap mely szakaszában tanácsos szüneteltetni a repüléseiket? (napszak, időjárás, évszak…) – 3 pont (197,229,265.o)",
            a: "A feláramló termik helyére a talajfelszínen beömlő levegő erőssége hozzáadódik az alapszélhez, ami rövid ideig tartó, erős széllökéseket eredményezhet. Ezek jellemzően tavasszal, szárazabb időben, a kora délutáni órákban jelentkeznek, ugyanis dél körül melegíti a nap a vízszinten talajt a legnagyobb beesési szögben(derékszög), ami rövid időn belül termikeket hoz létre."
        },
        {
            q: "24. Hol és hogyan keletkezik a termik? Mik a termik kialakulásának feltételei? – 4 pont (190-192.o)",
            a: "Általános ott képződik, ahol egy anyagnak jobb a hőelnyelő képessége, pl. száraz homok, száraz, sötét szántók, parkoló vagy egyéb nagy kiterjedésű betonfelszín stb. Amikor a nap már elég magasan van, sugárzása átmelegíti a talajt, a talaj pedig maga felett a levegőt. A melegebb (kb. 2 Celsius fokkal a környezetéhez képest) levegő kisebb sűrűsége miatt elkezd felemelkedni. Feltételei: száraz talaj, megfelelő napsugárzás, megfelelő talaj hőelnyelő képesség."
        },
        {
            q: "25. Hogyan változnak általában a termik tulajdonságai a magassággal? – 1 pont (194.o,258.o)",
            a: "A magasság növekedésével elkezd lehűlni, tágulni, emelése erősödni, majd felhő formájában kicsapódik a vízgőz és megszűnik a termik."
        },
        {
            q: "26. Rajzold le a termik vízszintes keresztmetszetét, ha a szél a papírlapodon jobbról fúj! Írd le mi, mit jelent rajta! – 2 pont (194.o)",
            a: "<img src='images_a/met_a_26_termik.jpg' class='exam-image' alt='Termik keresztmetszete'>"
        },
        {
            q: "27. Mi a völgyszél? – 3 pont (190.o)",
            a: "Nappal a hegyoldalak felmelegszenek, a lejtő mentén elkezd felemelkedni a meleg levegő, lecsökken a nyomás, ezért a völgy bejárata felől hidegebb levegő áramlik a helyére. Éjszaka a jelenség megfordul.\n<img src='images_a/met_a_27_volgyszel.png' class='exam-image' alt='Völgyszél'>"
        },
        {
            q: "28. Hogyan működik a parti szél? – 3 pont (190.o)",
            a: "A vízparton a szárazföld nappal egy felmelegedett, alacsony nyomású felületté válik, ezért a szél a víz felől a part felé fúj, éjszaka a folyamat megfordul."
        },
        {
            q: "29. Hogyan és mi szerint osztályozzuk a felhőket? - 3 pont (198,199.o)",
            a: "Alakjuk és elhelyezkedési magasságuk szerint. Magasság: magas(cirrus), közepes(alto), alacsony (nincs előtag), függőleges felépítésű felhők. Alak: réteges, gomolyos, vastag."
        },
        {
            q: "30. Hogyan osztályozzuk a felhőket magasságuk szerint? Mutasd be a különböző rétegeket, a felhők jellemző anyagát és milyen előtagot kapnak! – 4 pont (198.o)",
            a: "Magas szintű felhők: „Cirrus”: 5-13km, jellemzően jégkristályokból áll.\nKözepes szintű felhők: „Alto”: 2-7km, jégkristály és túlhűlt vízcsepp vegyesen.\nAlacsony szintű felhők: nem kapnak előtagot, talajszint-4km között képződnek, jellemzően vízcseppekből áll.\nFüggőleges felépítésű felhők: alapjuk kb. 500m, tetejük kb. 8000m-ig ér fel. Anyaguk a kondenzáció végbemenetelének hőmérsékletétől, ezért magasságuktól is függ. 0 Celsius fok alatt jégkristályokból, 0 Celsius fok felett folyadékcseppekből állnak."
        },
        {
            q: "31. Hogyan osztályozzuk a felhőket alakjuk szerint? – 3 pont (199.o)",
            a: "Réteges: vízszintes kiterjedésük a függőlegeshez képest nagy\nGomolyos: vízszintes kiterjedésükhöz képest jelentős vastagsággal rendelkeznek\nVastag: hasonló a vízszintes és függőleges kiterjedésük"
        },
        {
            q: "32. Sorold fel a 10 felhőfajt! – 5 pont (199-202.o)",
            a: "1.Cirrus (Ci)-pehelyfelhő 2.Cirrocumulus (Cc)-magas szintű gomolyfelhő/bárányfelhő 3.Cirrostratus (Cs)-magas szintű rétegfelhő/fátyolfelhő 4.Altocumulus (Ac)-középszintű gomolyfelhő/párnafelhő 5.Altostratus (As)-középszintű rétegfelhő/lepelfelhő 6.Stratus (St)-alacsony szintű rétegfelhő 7.Stratocumulus (Sc)-réteges gomolyfelhő 8.Cumulus (Cu)-gomolyfelhő 9.Nimbostratus (Ns)-esőrétegfelhő 10.Cumulonimbus (Cb)-zivatarfelhő"
        },
        {
            q: "33. Sorolj fel néhány „beszélő felhőt”! Írd le, hogy néznek ki, hol helyezkednek el és mit mondanak neked? – 4 pont (204,205.o)",
            a: "Cumulus humilis: Tehénlepény formájú gomolyfelhő, szélesebb a magasságánál, ha alapja egyenes rendszerint kényelmes, enyhe emelés van alatta.\nCumulus mediocris: Közepes gomolyfelhő, szélessége megközelítőleg egyenlő magasságával, a humilisnál kicsit dinamikusabb emelést adnak.\nCumulus congestus: Tornyos gomolyfelhő, magassága nagyobbb szélességénél, zivatarokat jelezhet, óvatosan, bizonyos távolságot tartva érdemes berepülni alá."
        },
        {
            q: "34. Milyen körülmények járulhatnak hozzá a zivatar kialakulásához? – 3 pont (207.o)",
            a: "Megfelelően instabil levegő, számottevő páratartalom, olyan mechanizmus, ami a levegőt emelkedésre készteti."
        },
        {
            q: "35. Milyen jelek utalnak zivatarveszélyre hosszabb idővel, majd közvetlenül előtte? – 4 pont (210.o)",
            a: "Hosszabban előtte: cirrocumulus(bárányfelhők), előzetes meteorológiai adatok, korai órákban castellanusok (bástyafelhők) megjelenése\nRöviddel előtte: felhők között csíkosan lesütő napfény, cumulus congestus, sötétté vált felhőalj."
        },
        {
            q: "36. Mik a zivatar veszélyei a siklóernyősökre nézve? – 3 pont (210.o)",
            a: "Heves(10-20m/s) feláramlások, villámlás, a csapadéktól elnehezült ernyő csukásnál összetapad, biztonsági paraméterei kiszámíthatatlan mértékben romlanak, turbulens szélgallér, kifutószél."
        },
        {
            q: "37. Mit jelent a kifutószél fogalma? – 1 pont (210.o)",
            a: "A zivatar előtt járó, erős, hirtelen megváltozott irányú, turbulens szélgallér."
        },
        {
            q: "38. Milyen távolságba érhet el a kifutószél és milyen szélsebességgel? – 2 pont (210.o)",
            a: "A zivatar intezitásától függően akár 10-30km távolságra, leszállásra alkalmatlan sebességgel."
        }
    ],
    "REPÜLÉSTECHNIKA": [
        {
            q: "1. Hogyan terítjük start előtt az ernyőt? (forma, pilóta, szélirány stb.) – 3 pont (219.o)",
            a: "Ívesen, banán alakban. Az ernyő közepe, a pilóta és a szélirány optimális esetben egy egyenesre esnek."
        },
        {
            q: "2. Mennyiben terítem az ernyőt másként, ha erős szélben, és ha szélcsendben startolok? – 2 pont (219.o)",
            a: "Erős szélben összébb húzzuk az ernyőt, csak annyira terítjük ki, hogy elkerüljük a lefűződést és a szálátvetődéseket, a starthelyen lejjebb helyezkedünk el. Amennyiben az „A” hevederünk kettéosztott, megkönnyíti az erős szeles startot, ha csak a középső „A” sorokkal húzzuk fel a kupolát. Gyenge szélben vagy szélcsendben minél nagyobb felületen fektetjük ki az ernyőt, lehetőségeink szerint feljebb a start helyen, hogy legyen hely gyorsítani."
        },
        {
            q: "3. Ismertesd a start előtti ellenőrzés lépéseit! Fejtsd ki az egyes lépéseket! – 5 pont (219,220.o)",
            a: "1.Kupola: nincs szakadás, szálátvetődés, a terítés iránya, formája megfelelő 2.Zsinórzat: nincs csomó, szakadás, nincs faág vagy bármilyen nővény beleékedve, nincs a zsinórzat leakadva növényben, sziklában, a fékzsinórok szabadon futnak 3.Csatok, karabinerek: minden helyesen be van csatolva, rögzítenek, zárnak, a gyorsító, mentőernyő megfelelő csatlakoztatásának ellenőrzése 4.Szélirány, szélerősség: környezetünkből követekeztetünk a szél aktuális természetére pl. előttünk elhelyezkedő bokrok, fű, fák mozgásából, szélzsákok figyeléséből 5.Nekifutópálya, légtér: szabad-e a starthely és a légtér a felszálláshoz, elsőbbséget meg kell adni a már repülő pilótáknak startnál, legfontosabb bármilyen ütközés elkerülése"
        },
        {
            q: "4. Mit és hogyan kell ellenőrizni a mentőernyővel kapcsolatban start előtt? Miért? – 1 pont (108.o)",
            a: "A kioldófogantyú a helyén van-e, megfelelően be van-e zárva a konténer, a kioldótüskék a helyükön vannak, van-e bármilyen látható sérülés a felszerelésen, ami befolyásolja a légi alkalmasságot. Ajánlott minden repülés előtt, ráfogni a kioldó fogantyúra, hogy tudatosítsuk magunkban a hollétét, reflexszerűvé váljon a mozdulat esetleges használatkor. Azért, hogy elkerüljük az akaratlan mentőernyő nyílást."
        },
        {
            q: "5. Hány szakaszból áll a start és mik ezek? – 3 pont (221.o)",
            a: "1.A kupola felhúzása 2. Az ernyő stabilizálása, korrekció (belefutós startnál plusz kontroll pillantás) 3. Gyorsítás"
        },
        {
            q: "6. Milyen starttechnikákat ismersz? Ismertesd mindegyiknél, hogy mikor, hogyan használjuk őket és miért! – 4 pont (223-230.o)",
            a: "1. Belefutós start: könnyen és jól alkalmazható szélcsendben, gyenge szélben, nem kell befújásra várni, a fékek oldalhelyesen folyamatosan kézben vannak 2. Kifordulós start: élénkebb szélben 3. Oldalhelyes (Simonics-féle): Kifordulóssal megegyezik, csak nem kell átfogni a fékekre"
        },
        {
            q: "7. Mit nevezünk kontrollpillantásnak? Mikor használjuk, hogyan és miért? – 1 pont (223-225.o)",
            a: "Belefutós startnál, az ernyő felhúzása után egy ellenőrző visszanézés, a biztonságos startolás érdekében. Felfelé kell irányuljon, mert oldalirányú nézéssel többnyire a vállunk is elfordul és ügyelnünk kell, hogy testünkkel ne billentsük ki egyensúlyából az ernyőt. Megtorpanás nélkül, hogy ne lassítsuk a gyorsulást."
        },
        {
            q: "8. Mit nevezünk a startolást követő veszélyzónának? Mire ügyeljünk startnál, hogy minimálisra csökkentsük a baleset esélyét? – 3 pont (231,232.o)",
            a: "Veszélyzóna az a rész, a hol nincs akkora magasság a pilóta alatt, hogy az ernyő passzív biztonsági paraméterei működni tudjanak. Amíg kikerülünk a veszélyzónából az ernyő irányításával kell foglalkozni: kezek a fékeken, nem szabad a beülésre koncentrálni."
        },
        {
            q: "9. Milyen behelyezkedési módokat ismersz leszálláshoz? Ismertesd őket! – 4 pont (235,236.o)",
            a: "1. Nyolcasozás: a pilóta a szélirányra merőlegesen nyolcasokat repül a leszálló elejétől, a széleknél fordulóval, egyre szűkebben. Nem szabad nyolcasozni, amennyiben a leszálló előtt veszélyes terepakadályok (fasor, épületek, vezeték) vannak egy kiszámíthatatlan leáramlás miatt. Sok pilóta egyidejű leszállására nem a legalkalmasabb módszer. 2. Iskolakör: a téglalap alakú leszálló oldalaival párhuzamosan repülünk 90 fokos fordulókkal, folyamatosan veszítve magasságunkból, a végsiklásnál szembefordulva a széliránnyal. Egyidejűleg több pilóta leszállására is alkalmas."
        },
        {
            q: "10. Rajzold le, hogyan szállsz le nyolcasozással! Írd le, hogyan hajtod végre és mire kell figyelni! – 2 pont (235,236.o)",
            a: "A pilóta a szélirányra merőlegesen nyolcasokat repül a leszálló elejétől, a széleknél fordulóval, egyre szűkebben. Nem szabad nyolcasozni, amennyiben a leszálló előtt veszélyes terepakadályok (fasor, épületek, vezeték) vannak egy kiszámíthatlan leáramlás miatt. Sok pilóta egyidejű leszállására nem a legalkalmasabb módszer.<br><img src='images_a/reptech_a_10_nyolcasozas.jpg' class='exam-image' alt='Behelyezkedés nyolcasozással'>"
        },
        {
            q: "11. Rajzold le, hogyan helyezkedsz be iskolakörrel! Írd le mik a legfőbb szempontok, mire kell figyelned! – 2 pont (236.o)",
            a: "A téglalap alakú leszálló oldalaival párhuzamosan repülünk 90 fokos fordulókkal, folyamatosan veszítve magasságunkból, a végsiklásnál szembefordulva a széliránnyal. Egyidejűleg több pilóta leszállására is alkalmas.<br><img src='images_a/reptech_a_11_iskolakor.jpg' class='exam-image' alt='Behelyezkedés iskolakörrel'>"
        },
        {
            q: "12. Hogyan történik a leszállás és milyen fázisai vannak? – 3 pont (235-237.o)",
            a: "Behelyezkedés, magasságleépítés, majd végsiklás. A leszállást meg kell tervezni, fel kell mérni a terepviszonyokat, akadályokat. Mindig szembeszélben."
        },
        {
            q: "13. Mit nevezünk végsiklásnak? Hogyan hajtod végre? – 2 pont (237.o)",
            a: "A leszállás befejező fázisa. Széllel szembe fordulva egyenesen siklok, kanyarodás nélkül, legfeljebb kisebb korrekciókkal. Lépései: siklószám és sebesség lerontása, kiülés a beülőből, kilebegtetés, talajfogás/futás."
        },
        {
            q: "14. Miért nem startolhatunk el élénk hátszélben? – 2 pont (229.o)",
            a: "Egyrészt nehéz felgyorsítani a kupolát, másrészt, mert a lee-oldalon azonnal egy turbulens, rotoros zónában találnánk magunkat."
        },
        {
            q: "15. Miről ismered fel, hogy a starthelyen a szembeszelet nem a gradiens szél, hanem a rotorszél okozza? – 1 pont",
            a: "Ereje és iránya sűrűbben változik, minimális hőmérsékletváltozásokból is észre lehet venni (1-1,5 Celsius fok)."
        },
        {
            q: "16. Hogyan irányítod a siklóernyőt a levegőben? – 2 pont (216,217.o)",
            a: "A fékekkel és testsúly áthelyezéssel. A fék húzásával megnő az ellenállás a húzott oldalon, lelassul a kupola azon oldala, a másik változatlan sebességgel halad, ezért a lassított oldal fordulásra kényszeríti azt."
        },
        {
            q: "17. Hogyan fordulsz balra a siklóernyővel? – 1 pont",
            a: "A bal fék húzásával és/vagy a testsúlyom balraáthelyezésével."
        },
        {
            q: "18. Milyen mértékig használhatod a fékeket a siklóernyőn? Miért? – 2 pont (243,246.o)",
            a: "Az ernyő minimum sebessége határozza meg, mert leválhat az áramlás."
        },
        {
            q: "19. Milyen mértékig és hogyan használhatod a testsúlyod az ernyő irányításánál? – 1 pont (246.o)",
            a: "Testsúlyunkat bátran használhatjuk, akár a hevedereken kívülre is kidőlhetünk, nem tudunk vele kárt okozni."
        },
        {
            q: "20. Mit jelent a „passzív biztonsági paraméterek” fogalma? Mi kell ahhoz, hogy működni tudjanak? Mennyiben változik ez ernyőtípusonként? – 4 pont (231.o)",
            a: "Az ernyő beavatkozás nélküli visszatértét normál repülési helyzetbe. Magasság. Minél magasabb kategóriájú egy ernyő, annál kisebb a passzív biztonsága."
        },
        {
            q: "21. Hogyan repülünk a lejtőszélben? Ábrát is várunk! (Itt repüléstechnikai választ várunk! – A repülés vonala. A fordulók módja, helye. Az ernyő pozíciója a lejtőhöz képest.) – 3 pont (252.o)",
            a: "Ingavonalon repülünk, párhuzamosan a hegyoldallal. Fordulni lehetőség szerint emelésben, a hegyoldaltól mindig kifelé. Maradjunk mindig a lejtő vonala előtt, a legjobb emelés nem a gerinc felett, hanem előtt van."
        },
        {
            q: "22. Hogyan tudod elérni, hogy laposabban, kisebb merüléssel forduljon az ernyő? Mikor célszerű így fordulni vele? – 1 pont (256.o)",
            a: "Testsúlyáthelyezéssel, az ellentétes fékre rátartva. Szondakörözésnél, amikor a termik magját keressük."
        },
        {
            q: "23. Hol találom lejtőszélben a legideálisabb emelőzónát? Hogyan befolyásolhatja ezt a szélerő, illetve a lejtő meredeksége? – 3 pont (250,251.o)",
            a: "A szélirány felől a gerinc előtt. A nagyobb szélerő, nagyobb, magasabb emelőteret hoz létre, de nagyobb turbulenciát is okoz. Minél meredekebb a lejtő, annál inkább kitolódik a lejtő elé az emelőtér, minél laposabb, annál hátrébb a lejtő elé-fölé."
        },
        {
            q: "24. Már a levegőben vagy, amikor a lejtőszél veszélyesen megerősödik. Mit teszel ilyenkor? (legalább 3 megoldást sorolj fel!) – 3 pont (252,253.o)",
            a: "Első próbálkozásként nyomhatjuk a gyorsítót és leszállni a hegy előtt. Ha a gerinc nyílt terepen végződik (a turbulencia elkerülése miatt), megpróbálhatunk eljutni a végéig, ahol jellemzően gyengébb a szél. Ha ezek sem működnek próbáljunk meg magasságot gyűjteni, majd hátszélbe fordulva repüljük át a gerincet és a lehető legmesszebb a lee-oldalon szálljunk le."
        },
        {
            q: "25. Hogyan repülünk termikben? – 3 pont (254-258.o)",
            a: "Először szondaköröket repülünk, hogy megtaláljuk a termik közepét, ahol a legnagyobb az emelés, majd körözünk a magban. A szél fújási irányához közelebb találtható a termik magja. A legjobb úgy abba hagyni a körözést, hogy a felhőalap szélénél érjünk ki a felhő alól. A kitérést nagyjából 1 egységnyi sugarú felhőből, a felhő alap alatt 1 egységnyi magasságból kell elkezdeni. Ez a 45°-os ökölszabály.<br><img src='images_a/reptech_a_25_termik_repules.png' class='exam-image' alt='Termik repülése'>"
        }
    ],
    "SIKLÓERNYŐS ETIKETT": [
        {
            q: "1. Sorolj fel néhány dolgot, amit siklóernyősként megtehetsz a természet védelméért! – 3 pont",
            a: "A természetvédelmi területeket tiszteletben tartom, nem végzek felesleges növényírtást egy könnyebb start érdekében, nem szemetelek se a földön, se a levegőből. Az ernyő terítésénél nem taposom le a növényeket. Gépjárművel szabályosan parkolok, nem rá a növényekre."
        },
        {
            q: "2. Sorolj fel néhány dolgot, ami az alapvető „siklóernyős etiketthez” tartozik a starthelyen, illetve az előkészületek során. Itt nem az írott, hanem a siklóernyős viselkedés íratlan szabályaira vagyunk kíváncsiak. – 3 pont (327.o)",
            a: "Az előkészületekkel mások nem zavarása: kupola terítése, zsinórzat ellenőrzése távolabb a startolóknál, csak a konkrétan startolási szándékkal rózsában odavitt ernyőt terítjük ki. Nem terítünk más pilóta elé, sorban állásnál a sor végére terítünk. Segítünk az előttünk levőknek, akár a terítésben, akár figyelmeztetjük bármilyen veszélyre (csomó, ág, kicsúszó mentőernyő, nyitott karabiner, stb.). Tandemeseket előre engedjük."
        },
        {
            q: "3. Sorolj fel néhány dolgot, ami az alapvető „siklóernyős etiketthez” tartozik a levegőben, repülés közben. Itt nem az írott, hanem a siklóernyős viselkedés íratlan szabályaira vagyunk kíváncsiak. – 3 pont (332.o)",
            a: "Kezdőkre vigyázás, tolerálás, figyelés. Tandemernyők nehezebben manőverezhetőségének figyelembevétele. Szemmel láthatóan elfoglalt pilóta javára elsőbbségről lemondás. Segítség nyújtás, hívás pl. fára szállás, mentőernyő dobás esetén. Lejtőrepülésnél figyelünk a még startolni szándékozó emberekre."
        },
        {
            q: "4. Sorolj fel néhány dolgot, ami az alapvető „siklóernyős etiketthez” tartozik a leszállás során, a leszállást követően, illetve a leszállóban. Itt nem az írott, hanem a siklóernyős viselkedés íratlan szabályaira vagyunk kíváncsiak. – 3 pont (333,334.o)",
            a: "A szabályokat mindig felülírja a józanész: ha nem iskolakörrel vagy nyolcasozással szállunk le, figyeljünk a hátunk mögé, ne szorítsunk ki senkit. A földet érés után azonnal szedjük össze a kupolát és hagyjuk el a leszállót a többiek számára. Tanfolyam alatt a leszállón gyakorlásnál figyeljünk a leszálló pilótákra. Gépjárművet nem zavaró helyen parkoljunk. Távrepülésnél nem kijelölt leszállón ügyeljünk, hogy semmilyen személyi, vagyoni, kárt ne okozzunk."
        }
    ],
    "TEMATIKA, JOGSZABÁLYOK": [
        {
            q: "1. Mi az a REBISZ? Mikor és milyen eseményeket kell bejelenteni hozzá? Miért? – 2 pont (335,336.o)",
            a: "Repülés Biztonsági Szervezet. Minden eseményt be kell jelenteni melyeknél a repülés biztonsága csökken vagy meghiúsul, minden olyan rendellenes repülési helyzetet, amely személyi vagy anyagi kárral járt vagy járhatott volna, minden elhárított különleges esetet, ha nem is járt következménnyel. Ezekből később tanulságot vonnak le pl. bizonyos ernyő típusok viselkedéséről."
        },
        {
            q: "2. Egy vagy több REBISZ van Magyarországon? Miért? – 1 pont (335.o)",
            a: "Több, minden üzembe tartó szervezetnek üzemeltetnie kell egy REBISZ-t vagy szerződéses jogviszonyban kell állnia eggyel."
        },
        {
            q: "3. A Fly Away pilótájaként milyen szervezethez kapcsolódik a REBISZ és hol találod a telefonszámát? – 1 pont (előadás)",
            a: "Siresz REBISZ-hez. A Fly Away honlapján, a (jog)szabályok menüpont alatt."
        },
        {
            q: "4. Feltételezve, hogy siklóernyős növendék vagy, még nincs A-vizsgád és nincs saját felszerelésed: Ebben az esetben milyen dokumentumok szükségesek a jogszerű siklóernyős repüléshez Magyarországon? Mely dokumentumoknak kell a növendéknél lenni és melyeknek otthon? – 2 pont",
            a: "-Nálam kell legyen: SIRESZ regisztrációs kártya, érvényes repülőorvosi alkalmassági, személyi igazolvány, növendéknapló\n-Otthon: oktatási szerződés"
        },
        {
            q: "5. Feltételezve, hogy siklóernyős A-vizsgával rendelkező siklóernyős növendék vagy és saját felszerelésed van: Ebben az esetben milyen dokumentumok szükségesek a jogszerű siklóernyős repüléshez Magyarországon? Mely dokumentumoknak kell a növendéknél lenni és melyeknek otthon? – 3 pont",
            a: "- Nálam: SIRESZ kártya, ernyőkártya, légialkalmassági tanúsítvány, orvosi alkalmassági, személyi, növendéknapló\n-Otthon: Ernyő törzskönyv, oktatási szerződés"
        },
        {
            q: "6. A-vizsga: a jogosítás hivatalos megnevezése / nemzetközi megjelölése / minimumkövetelménye (min. 3 feltétel) / Mire jogosít? / Milyen feltételekkel repülhet A-vizsgás növendék oktatója nélkül más, minimum Pilóta 1 jogosítással rendelkező pilóta felügyeletével? – 3 pont (Fly away képzési tematika pdf)",
            a: "-Megnevezése: Növendék 2 / Para pro 2. -Min. követelmény: 10 gyakorlati nap, 40 kisdombos lesiklás vagy 40 csörlőzés, 10 magasstart.-Jogosít: Oktatója vagy megnevezett, növendék naplóba bejegyzett és aláírással igazolt Pilóta felügyeletével gyakorló repüléshez."
        },
        {
            q: "7. Gyakorló Pilóta jogosítás: nemzetközi megjelölése / minimumkövetelménye / Mire jogosít? / érvényessége (2 feltétel) / Mi történik, ha B-vizsgáját a megadott időszakon belül nem teszi le? – 2 pont (Képzési tematika 110.o)",
            a: "-nemzetközi megjelölés: Para Pro 3-min. követelmény: 10 repült óra, 20 magasstart-5 különböző starthelyen, 3 repülés enyhén termikus időjárásban, legalább 1 min. 1 órás repülés-jogosít: önálló repülésre max. 5 m/s-os szélben, termikusan nem aktív időjárásban, szakoktatói felügyelettel középfokú gyakorlatok végrehajtására-érvényessége: önálló repülés a megszerzéstől számított 365 napig, ezután „B” vizsgáig csak oktatói vagy felhatalmazott felügyelettel"
        },
        {
            q: "8. B-vizsga: jogosítás hivatalos neve / nemzetközi megjelölése / minimumkövetelménye (min. 3 feltétel) /lejárata / Mire jogosít? – 2 pont (Képzési tematika 110.o)",
            a: "-hivatalos neve: Pilóta 1-nemzetközi megjelölés: Para Pro 4-min. követelmény: 30 óra repült idő, ebből legalább 10 óra termikus körülmények között, ezekből min. 2 legalább 1 órás repülés, B írásbeli vizsga, gyakorlati elemek a BT táborban"
        }
    ]
};