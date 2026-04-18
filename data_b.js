const examDataB = {
    "AERODINAMIKA": [
        {
            q: "1. Milyen szélsebesség felett tilos elstartolni? Miért? Mi az aerodinamikai magyarázata? – 3 pont (165, 229.o.)",
            a: "Kezdő pilótaként 5 m/s az engedélyezett felső határ, de 7 m/s felett még a versenyeket is lefújják, mert az erős szél többnyire turbulens, besodorhat a starthely mögé. Az ernyő a közeghez képest repül, ha a szél erősebb, mint a trimmsebesség, a talajhoz képest hátrafele haladnánk (gyorsító nélkül)."
        },
        {
            q: "2. Rajzolj egy szárnyprofilt, majd jelöld be az ábrán a szárnyra ható erőket, nevezd is meg őket! Írd le a melyik erő, mivel, milyen összefüggésben áll. – 6 pont (131.o.)",
            a: "<img src='images_b/aerodinamika_b_2.jpg' class='exam-image' alt='Szárnyprofil és erők'>\n$F_e^2 = F_d^2 + F_l^2$\nKülső hatás nélkül az ernyő egyenes vonalú egyenletes mozgást végez, a rá ható erők eredője nulla. A légellenállás és a felhajtóerő eredőjének nagysága megegyezik a gravitációs erő nagyságával és ellentétes irányú. Fd a siklás irányával ellentétes, Fl merőleges Fd-re."
        },
        {
            q: "3. Miért előz meg és fordul dinamikusan a nyitott oldal féloldalas csukás esetén? (a kérdésre aerodinamikai / fizikai magyarázatot várunk) – 3 pont (273.o.)",
            a: "Mert ilyenkor a pilóta súlya a nyitott oldalt terheli, emiatt megnő a felületi terhelés és a nyitva maradt oldal sebessége is, a csukott oldalnak viszont megnő a légellenállása és lassul."
        },
        {
            q: "4. Miért kell nyomnunk a gyorsítót leáramlásban? (aerodinamikai magyarázatot várunk a megfelelő ábrával alátámasztva és szöveges indoklással) – 4 pont (163, 244.o.)",
            a: "<img src='images_b/aerodinamika_b_4.jpg' class='exam-image' alt='Gyorsító leáramlásban'>\nÁbra: polárgörbe: Az optimális sebességet (legjobb siklószám) az origóból a polárgörbére húzott érintő adja, ami leáramlásban kinyomott gyorsítóval érhető el, az érintőből húzott Vx (át kell váltani m/s-ra) és Vy hányadosa adja ki a siklószámot. Másrészt hamarabb hagyhatjuk el a leáramlást."
        },
        {
            q: "5. Hogyan változik a siklószám a minimum és a maximum terhelés esetén? Rajzolj egy ábrát és magyarázd el az aerodinamikai összefüggéseket! – 3 pont (166.o)",
            a: "<img src='images_b/aerodinamika_b_15_terheles.jpg' class='exam-image' alt='Polárgörbe terhelés függvényében'>\nA nagyobb súlyú pilóta nagyobb terhelést jelent, az ernyő ezért nagyobb sebességgel halad. Arányosan nő a légellenállás és a felhajtóerő.\nA siklószám terheléstől függetlenül változatlan marad, de nő a sebesség."
        },
        {
            q: "6. Mitől esik át az ernyő? Mi történik ilyenkor? (aerodinamikai magyarázattal) – 2 pont (150.o.)",
            a: "Csak a pilóta idézheti elő, a fékek használatával. Az ernyő állásszöge meghaladja a maximum kritikus értékét, leválik az áramlás, megszűnik a felhajtóerő.\nStatikus: Az ernyőt fokozatosan a minimum sebessége alá lassítjuk.\nDinamikus: Hirtelen lehúzzuk és ott tartjuk a fékeket."
        },
        {
            q: "7. Előidézhet-e repülésközben az oldalszél féloldalas csukást? Miért? – 1 pont (165.o.)",
            a: "Nem, mert az ernyő a közeghez képest repül, legfeljebb a talajhoz viszonyított sodródást befolyásolja."
        },
        {
            q: "8. Ha a pilóta maximálisan kinyomja a gyorsítóját egy ernyőnek, melynek legnagyobb sebessége 72 km/h miközben 20 km/ h hátszélben repül – (1) mennyi az ernyő sebessége a közeghez viszonyítva és (2) mennyi a talajhoz viszonyítva? – 2 pont",
            a: "Közeghez: 72km/h\nTalajhoz: 92km/h"
        },
        {
            q: "9. Mit nevezünk Venturi hatásnak? Milyen szerepe van a siklóernyőzésben? – 2 pont (253, 265.o.)",
            a: "A Venturi-hatás a Bernoulli-törvény egyik gyakorlati példája. Azt jelenti, hogy szűkülő térben (pl. két hegy között vagy völgyben) a levegő áramlásának sebessége megnő, a nyomása pedig csökken. Szerepe a siklóernyőzésben: hágóknál, völgy bejáratnál fokozottan kell ügyelni, mert hatására a szél akár a napi átlag kétszeresére is felerősödhet."
        },
        {
            q: "10. Mi az állásszög? Hogyan tudjuk megváltoztatni és mi változik általa? – 2 pont (142.o.)",
            a: "A szárnyhúr és a siklás iránya által bezárt szög. Csökkenteni a gyorsítóval tudjuk, ezáltal nő a sebesség és a magasságvesztés mértéke. Növelni a fékekkel tudjuk, ezáltal csökken a sebesség és csökken a magasságvesztés (egy bizonyos mértékig, a sebességpoláris alapján)."
        },
        {
            q: "11. Mire kell figyelni minimum és maximum állásszögnél? Miért? – 3 pont (150.o)",
            a: "Maximum állásszögnél az ernyő érzékeny lesz a pilótahibára és könnyebben leválhat az áramlás, átesés következhet be.\nMinimum állásszögnél az ernyő maximálisan kigyorsított állapotban van és érzékenyebb lesz a turbulenciára. Nagyobb a tehetetlenség a nagyobb sebesség miatt, emiatt a reakciók is hevesebbek egy esetleges fülcsukás vagy frontstall esetén. Turbulens körülmények között vagy talajközelben kerülni kell a gyorsító használatát."
        }
    ],
    "EGÉSZSÉGÜGY": [
        {
            q: "1. Mit teszel, ha szemtanúja vagy egy személyi sérüléssel járó balesetnek, vagy sérültet találsz valahol( azaz nem láttad magát a balesetet)? Milyen alapvető információk lehetnek fontosak és miért? – 3 pont",
            a: "Ha nincs eszméleténél és nem reagál semmire: megnézem vesz-e levegőt, van-e pulzusa, ha nincs megpróbálom újraéleszteni, miközben hívom a mentőket. Ha eszméleténél van, megkérdezem hogyan történt a baleset, mije fáj, tud-e mozogni, ha nem, akkor nem mozgatom, hogy ne okozzak nagyobb bajt. Amennyiben szükséges, szintén segítséget hívok, megkérdezem van-e gyógyszer allergiája, pontos helyszínt megpróbálom megállapítani(pl. GPS koordináták) , sérült adatait megpróbálom megtudni, mert ezek felgyorsíthatják az érkező ellátást."
        },
        {
            q: "2. Hogyan döntöd el egy balesetnél, hogy egy sérülthöz mentőt kell hívni, elégséges bevinni az ügyeletre vagy nem igényel orvosi ellátást? – 2 pont",
            a: "Ha nincs eszméleténél és nem reagál semmire mentőt hívok. Ha eszméleténél van, de fennáll nagyobb sérülés esélye, pl. törés, belső szerv sérülés, nagy fájdalom, akkor is orvosi ellátást igényel. Ha eszméleténél van, akkor kikérdezem a balesetről, majd felmérem az állapotát, tud-e mozogni, vérzik-e, érez-e fájdalmat valahol, stb. és a józan ész keretein belül döntök. Kisebb sérülés, pl. kupolázás közbeni esés esetén, horzsolás, bokakibicsaklás esetén nem szükséges azonnal orvost hívni."
        },
        {
            q: "3. Mit kell tenni végtagsérülés esetén a sérülttel? Mit teszel, ha hamarosan érkezik az orvosi segítség, és mit, ha valamilyen oknál fogva hosszabb várakozási időre számíthatsz? – 2 pont (299.o.)",
            a: "Ha gerincsérülés gyanúja nem áll fenn, akkor lehet a sérültet kényelmes helyzetbe segíteni, rögzíteni a sérült végtagot, hogy ne mozduljon el, esetleg nyomókötést alkalmazni, ha komoly vérzés van. Figyelemmel kell tartani, a sokk jeleire (sápadtság, hideg verejték, szapora pulzus), és szükség esetén hanyatt kell fektetni, lábait enyhén megemelve. Hosszabb várakozási idő esetén ha romlik az állapota, akkor újra kell hívni a mentőt és jelezni, hogy sürgős esetről van szó."
        },
        {
            q: "4. Mik a gerincsérülés jelei? Ilyenkor mi a teendő? – 2 pont",
            a: "Magasból történő esés esetén az a legbiztosabb, ha eleve gerincsérültként kezeljük a sérültet. Egyéb erre utaló jelek:\nFájdalom vagy nyomásérzés a gerinc mentén (nyak, hát, derék)\nVégtagok zsibbadása, bizsergése, érzéketlensége\nVégtaggyengeség vagy bénulás (nem tudja mozgatni a karját/lábát)\nVizelet- vagy székletürítési zavar\nSzokatlan testtartás, deformitás a gerincen\nEszméletvesztés, zavartság, légzési nehézség (súlyosabb esetben)\nHa jó helyen van és az állapota stabil, akkor nem mozgatom, sőt biztosítani kell a mozdulatlanságát. Csak életveszély esetén szabad mozgatni. Mentőket kell hívni és feltétlenül jelezni a gerincsérülés gyanúját. A fejet nagyon óvatosan lehet rögzíteni, hogy ne mozduljon el. Figyelemmel kell követni a légzést és keringést, vészhelyzet esetén óvatosan, a fej-nyak tengely elmozdítása nélkül újraéleszteni."
        },
        {
            q: "5. Allergiás tünetek esetén mit kell tennünk? Milyen tünetek utalhatnak jellemzően allergiás reakcióra? – 2 pont (299,300.o.)",
            a: "Megszüntetni a kiváltó okot, pl. méhcsípés esetén a fullánk eltávolítása, antihisztamin beszedés, esetleg kálcium tabletta. Tünete általában a nyelv, szemhéj enyhe duzzanata, alacsony vérnyomásos szapora pulzus. Az anafilaxiás sokk az allergia legsúlyosabb következménye, jellemző tünete a gégevizenyő, ami fulladáshoz vezethet. Epipen(adrenalin) injekció beadása a teendő, amennyiben az érintett tart magánál."
        }
    ],
    "FELSZERELÉSISMERET": [
        {
            q: "1. Mit jelent a porozitás fogalma? Milyen egységben és hogyan mérjük? Milyen különbség lehet anyagtípusonként? Milyen érték alatt válhat veszélyessé az ernyő? Mi a veszélye az alacsony porozitású ernyőnek? – 4 pont (81.o.)",
            a: "Légáteresztő képesség. Secundumban mérjük poroziméterrel(pl. JDC MK1) , amely egy bizonyos légtömeget átszív az ernyő egy adott részén x másodperc alatt. A különböző típusú anyagok különböző módon öregednek, ezért nem lehet összehasonlítani egy-egy ernyő állapotát kizárólag a porozitás alapján. 30 alatt zsákesésre hajlamos, 15 alatt nem szabad repülni. Zsákesés."
        },
        {
            q: "2. Milyen rendszer(ek) szerint sorolják be a siklóernyőket? Biztonsági vagy teljesítményparaméterekhez kötődik a besorolás? Milyen tudásszinthez, évi kb. hány repült órához ajánlottak az egyes osztályok? – 4 pont (53-55.o.)",
            a: "LTF,DHV,EN. A besorolás elsősorban az ernyő biztonsági tulajdonságaihoz köthető.<br><img src='images_b/felszereles_b_2a.jpg' class='exam-image' alt='Siklóernyők besorolása 1'><br><img src='images_b/felszereles_b_2b.jpg' class='exam-image' alt='Siklóernyők besorolása 2'>"
        },
        {
            q: "3. Mit mond számodra egy „DHV plakett”? Milyen adatokat találsz rajta? Hol találod az adattáblát? – 3 pont (80.o.)",
            a: "Az ernyő alapvető adatai vannak rajta: min., max. felszálló tömeg, besorolás, az ernyő súlya, területe, trimmrendszer, gyorsító, stb. Általában a belépőél közepénél vagy valamelyik stablapnál található."
        },
        {
            q: "4. Mi a „ripstop” és mi a szerepe? – 2 pont (24.o.)",
            a: "Az ernyő szövete, 5-10mm-enként hálószerűen egy vastagabb, erősebb szállal, ami egy esetleges szakadás esetén meggátolja a továbbhasadást, segíti az alaktartást."
        },
        {
            q: "5. Mi a „rigifoil” és mi a szerepe? – 2 pont (23.o.)",
            a: "Merevítőpálcika a beölmőnyílásnál. Szerepe a profilorr tökéletesítése, teljesítménynövelés, azáltal, hogy nagyobb sebességnél sem horpad be a profilorr, kevésbé deformálódik. Előnye az is, hogy az ernyő felhúzásakor jobban nyitva vannak a beömlőnyílások, jobban töltődik a kupola."
        },
        {
            q: "6. Mit jelent a „cápaorr”? Mi a szerepe? – 2 pont (45-46.o.)",
            a: "Egyfajta orrprofil a belépőélnél. Segít az állandó nyomás fenntartásában minden állászög mellett, ezáltal nő a kihasználható sebességtartomány, biztonságosabbá válik az alsó sebességzóna."
        },
        {
            q: "7. Mit jelent a ’diagonál cella’ és mi a szerepe? – 2 pont (23.o.)",
            a: "A diagonál cella olyan belső merevítő elem a kupolán belül, amely átlósan (diagonálisan) köti össze a szomszédos cellákat. Kevésbé deformálódik a kupola repülés közben, jobban ellenáll a terhelésnek. Alkalmazásával szélesebb cellák építhetők, ami kevesebb felfüggesztési pontot, kevesebb zsinórt eredményez, ezáltalán csökken a légellenállás és javul a teljesítmény is."
        },
        {
            q: "8. Mik azok a „stablapok” és mi a szerepük? Melyik zsinór csatlakozik hozzájuk? – 4 pont (27.o)",
            a: "Stabilizátorlapok. A kupola két szélén elhelyezkedő majdnem függőleges része.\nSzerepük: 1. Stabilizálják az irányt 2. Keresztirányban feszítik a kupolát, ezzel javítva a kupola tartását a sebesség következtében kialakuló felhajtóerő segítségével3. Csökkentik az indukált ellenállást a szárnyvégeken, ezzel gyengítik a teljesítmény romlását\nÁltalában a „B” sorhoz, ritkábban a „C”- hez csatlakoznak."
        },
        {
            q: "9. Hány repült óra után ajánlatos ellenőrizni a zsinórokat? Mikor kötelező az ellenőrzés és milyen esetekben ajánlott? Miért? – 3 pont (81,83,84.o.)",
            a: "Ha az ernyő 2 évnél öregebb és 100 óránál többet repült. Kötelező évente, ajánlatos bizonyos körülmények közötti használat (nedvesség, homok, sós vízzel érintkezés, sok csörlőzés, hátimotor, fáraszállás) után. Azért mert a nyúlt/zsugorodott/deformálódott zsinórzat befolyásolja az ernyő biztonsági és teljesítmény paramétereit."
        },
        {
            q: "10. Hogyan épül fel a „kétzsinóros” ernyő zsinórzata? – 2 pont (31.o.)",
            a: "Valójában két hevederes, A és B hevederről indulnak a főzsinórok. Részei: A, B heveder, fékek."
        },
        {
            q: "11. Hogyan használjuk a gyorsítót? Mikor kell bekötni? Beállításánál mik a legfőbb szempontok? – 2 pont (37.o.)",
            a: "Lábbal, két fokozatban lehet müködésbe hozni, az állásszöget lehet vele csökkenteni. Beállításnál számít az ernyő, beülő típusa, a pilóta testalkata, magassága. Teljesen kinyomott gyorsítónál a lábnak teljesen nyújtva kell lennie és a gyorsító két csigájának szimmetrikusan mindkét oldalon össze kell érnie. A földön kell bekötni."
        },
        {
            q: "12. Milyen mentőernyőket / mentőrendszereket ismersz? Mik a sajátosságaik? – 3 pont (100-104.o.)",
            a: "Mentőrendszernek nevezzük a mentőernyőt és a beülőhöz történő csatlakoztatását egy konténer segítségével, amely lehet cső, vagy borítékrendszerű.\n-körkupolás: legalapabb (4-7m/s)\n-cross: kisebb süllyedés, jobb ingastabilitás és nyitási gyorsaság\n-SQR (square round): a körkupolásnál szintén kisebb süllyedés, jobb ingastabilitás, nyitási sebesség\n-rogallo: irányítható, kis süllyedés(3-4,5m/s), de le kell hozzá oldani a főernyőt"
        },
        {
            q: "13. Hasonlítsd össze a hagyományos körkupolás és a rogallo mentőernyő tulajdonságait! – 3 pont (103.o.)",
            a: "-körkupolás: legalapabb (4-7m/s), nem befolyásolható a földet érés helye\n-rogallo: irányítható, kis süllyedés(3-4,5m/s), de le kell hozzá oldani a főernyőt"
        },
        {
            q: "14. Sorold fel a VFR (látvarepülés) navigációs eszközeit! Írd le működési elvüket, illetve mire, hogyan használjuk őket! – 3 pont (111, 312, 316.o.)",
            a: "-GPS: műholdak segítségével működik, helymeghatározásra, tájékozódásra, sebességjelzésre használjuk.\n-Variométer( magasságmérő, barometer): a légnyomásból adatokból dolgozik, ami az időjárással változik, ezért minden repülés előtt kalibrálni kell. Pontosabb magasság meghatározásra képes, mint a GPS, kb. 10cm-es hibaértékkel. A függőleges sebesség jelzés is a feladata.\n-szélmérő, iránytű"
        },
        {
            q: "15. Miért szükséges a magasságmérő használata? – 1 pont (111.o.)",
            a: "A légterek szabályos használata, biztonságunk és teljesítményünk miatt."
        }
    ],
    "KÜLÖNLEGES REPÜLÉSI HELYZETEK": [
        {
            q: "1. Hogyan irányítod az ernyőt, ha elszakad a fékzsinór? – 2 pont (Tesztek és valóság videó 44.p, Jani)",
            a: "Testsúlyáthelyezéssel, a hátsó hevederekkel (ernyő típusától jellemzően C vagy D)."
        },
        {
            q: "2. Mit teszel, ha felhúzás után csomót látsz a zsinórokon? Mit teszel, ha még a talajon veszed észre a csomót? És mit teszel, ha már csak a levegőben? – 3 pont (233.o.)",
            a: "Felmérem melyik zsinóron keletkezett a csomó, majd a kisebb megoldásoktól haladok a nagyobbak felé. Elsőként meg lehet próbálni a stablapokhoz tartozó zsinór meghúzását, aztán két oldali fülcsukás. Drasztikusabb megoldás lehet a féloldalas csukás, esetleg full stall-al az ernyő „reset”-elése, de ezek csak tapasztalt pilótáknak ajánlott. Attól függően, hogy hol van a csomó, fordíthatja különböző mértékben az ernyőt, ellen kell tartani a másik fékkel, de vigyázni kell, hogy ne fékezzük túl, mert áteshet az ernyő."
        },
        {
            q: "3. Egyenletes leáramlásba kerülve mit teszel? Miért? – 2 pont (163.o)",
            a: "Nyomom a gyorsítót, mert a legjobb siklást az origóból a polárgörbére húzott érintő adja meg, ez pedig kinyomott gyorsítóval érhető el. Ezenkívül hamarabb ki is kerülhetek a leáramlásból."
        },
        {
            q: "4. Turbulens leáramlásba kerülve mit teszel? Miért? – 2 pont (163.o.)",
            a: "Mellőzöm a gyorsító használatát, mert kisebb állásszögnél az ernyő érzékenyebben reagál a turbulenciára."
        },
        {
            q: "5. Milyen sorrendben használjuk a fülcsukást és a gyorsítót? Miért? Fordított sorrendben mi történhet? – 2 pont (281.o.)",
            a: "Először becsukjuk a füleket, majd nyomjuk a gyorsítót. Fordított sorrendben frontstall vagy féloldalas csukás keletkezhet."
        },
        {
            q: "6. Mi a front stall? Mikor fordulhat elő? Hogyan zajlik a folyamat, mik a jellemzői? Hogyan korrigálható? Mikor jelenthet komoly vészhelyzetet és miért?– 4 pont (61.o., 142-143.o., 273.o., 275.o.)",
            a: "Az a helyzet, amikor a kupola belépőéle kisebb vagy nagyobb mértékben aláhajlik. Előfordulhat turbulens időben (különösen gyorsító használatával), egyes manőverek hibás kivitelezésénél. Az aláhajlott belépőél légellenállása megnő, a pilóta pedig tehetetlenségénél fogva előrelendül, az ernyő a háta mögé kerül, ezért számítani kell rá, hogy a visszatöltődő kupola előre lő. Mivel szimmetrikus veszélyhelyzet, jellemzően nincs forgás, irányváltoztatás. Ha volt gyorsítás le kell róla lépni és mindkét fék egyidejű, egyszeri, kb. mellmagasságig pumpálásával lehet korrigálni. Talaj közelben jelenthet vészhelyzetet, mert magasságvesztéssel jár."
        },
        {
            q: "7. Az ernyőd baloldala becsukódik, hogyan korrigálod ezt a helyzetet? Mi válthatja ki? Hogyan zajlik a folyamat, mik a jellemzői? Megelőzhető-e és ha igen, hogyan? – 4 pont (273.o.)",
            a: "A korrekció függ a csukás mértékétől, amennyiben a gyorsító használatban volt, le kell lépni róla. Kisebb csukás esetén igyekezni kell tartani az irányunkat, testsúlyunkat rá kell terhelni a nyitott oldalra és feszesen tartani a nyitott oldali féket, ezáltal általában a torlónyomás miatt visszatöltődik az ernyő. Nagyobb csukásnál először azt kell megakadályozni, hogy az ernyő spirálba essen, ezután, ha nem nyílik vissza magától az ernyő, a csukott oldali féken kell pumpálni egyet-kettőt. A csukott oldal légellenállása megnő, a pilóta súlya a nyitott oldalt terheli, ezáltal annak sebessége megnő, az ernyő a csukott fele elfordul, korrekció nélkül akár spirálba is eshet. Turbulencia vagy pilótahiba okozhatja. Nyomáscsökkenés előzi meg, ezt jellemzően lehet érezni a fékek felkönnyülésével, ilyenkor még megelőzhető a csukás, a fékek olyan mértékű húzásával, amíg újra érezhető a fékerő."
        },
        {
            q: "8. Milyen alapvető különbség van a szimulált és a valós helyzetben bekövetkező féloldalas csukás között? – 1 pont",
            a: "A szimuláltnál számít rá a pilóta, ő váltja ki, tudja, hogy mi történt és hogyan kell reagálni, míg a valós helyzetben váratlanul ér és nem biztos, hogy ismeri a kiváltó okot."
        },
        {
            q: "9. Féloldalas csukás esetén milyen mértékben kell az ellenkező oldalt fékezni? Miért? – 2 pont (274.o.)",
            a: "Feszesen kell tartani, hogy nagyjából tartsuk az irányt, de nem szabad túlhúzni, mert azzal átejthetjük a nyitottan maradt szárnyrészt."
        },
        {
            q: "10. Milyen különbség lehet a trimmsebességen, illetve a kigyorsított állapotban bekövetkező csukások között? Miért? – 2 pont (274.o.)",
            a: "A gyorsított állapotban történő csukások jóval hevesebben zajlanak, gyorsabb az elfordulás, megnő a twist esélye, több ideig tart visszaállítani az ernyőt a normális repülési helyzetbe, nagyobb a magasságvesztés, mert nagyobb sebességen nagyobb a pilóta lendülete, tehetetlensége."
        },
        {
            q: "11. Milyen magasságleépítési manővereket ismersz? Ismertesd őket! (mikor alkalmazhatod, süllyedés mértéke, alkalmazás technikája) – 6 pont (280.o.- )",
            a: "1. Fülcsukás:\n-süllyedés: 2-3 m/s\n-mikor: amikor enyhe magasságcsökkenésre van szükségünk, kis magasságban is használható, kevesebb gyakorlatot igényel\n-technikája: a szélső „A” heveder 15-30cm-es lehúzásával lehet előidézni, és a fékek dinamikus, de nem túl mély(kb.30cm-re) húzott egymással ellentétes pumpálásával lehet kivezetni (amennyiben nem nyílik magától vissza a hevederek elengedése után) \n2. Fülcsukás gyorsítóval:\n-süllyedés: 3-4 m/s\n-mikor: pl. megerősödött szélben, ha minél gyorsabban meg akarjuk közelíteni a leszállót\n-technikája: először becsukjuk a füleket utána nyomjuk a gyorsítót, kivezetéshez először lelépünk a gyorsítóról, majd visszanyitjuk a füleket\n3. B-stall: \n-süllyedés: 6-10 m/s\n-mikor: ha az ernyő alkalmas rá, legalább 300m magasságban, és ha nincs szükségünk vízszintes sebességre\n-technikája: a „B” zsinórsor meghúzásával beroppantjuk, kivezetéshez egyszerűen felengedjük\n4. Merülőspirál: \n-süllyedés: 10-15 m/s\n-mikor: ha gyors magasságvesztésre van szükségünk\n-technikája: bevezetése lehet statikus (a pilóta a súlypontja áthelyezésével és a belső oldali fék 30-40cm-re húzásával fordulóba viszi az ernyőt és megvárja míg pár kör elteltével spirálba esik) és dinamikus (a pilóta hintáztatni kezdi az ernyőt, kibillenti a kupolát a stabil repülési helyzetéből és a hintázás lendületét kihasználva ugratja az ernyőt spirálba). Kivezetéshez először pár másodpercre áthelyezzük testsúlyunkat a külső oldalra, ezalatt lassan felengedünk 10-15cm-t a belső fékből, ezután testsúlyunkat visszahelyezzük normál pozícióba, a fékek helyzetén már nem változtatunk. Ezután megvárjuk míg a spirál lassulni kezd, a süllyedés és a kerületi sebesség is csökken, majd teljesen felengedjük a fékeket."
        },
        {
            q: "12. Mi a B-stall? Hogyan zajlik a folyamat, mik a jellemzői? Mennyivel süllyed az ernyő stabil B-stallban? Hogyan idézem elő? Hogyan vezetem ki? Mikor használjuk és mikor nem? – 4 pont (281.o)",
            a: "Magasságleépítő manőver. A „B” zsinórsor meghúzásával beroppantjuk a kupolát, 6-10 m/s-os süllyedés érhető el vele, de vízszintes sebesség nincs, ezért elsodorhatja a szél az ernyőt. Kivezetéshez egyszerűen fel kell engedni a behúzott „B” sort. Legalább 300m magasságban használjuk és nem, ha nem megfelelő hozzá az ernyőnk (ernyő kézikönyve)."
        },
        {
            q: "13. Milyen horizontális sebessége van az ernyőnek B-stallban? – 1 pont (281.o.)",
            a: "Alapvetően nincs, csak ha a szél sodorja."
        },
        {
            q: "14. Ha B-stallban fordul az ernyőd, mi okozhatja? Hogyan korrigálod? – 2 pont (282.o.)",
            a: "Aszimmetrikusan vannak húzva a B-hevederek. Vissza kell állítani a szimmetriát, az ellenkező oldalon a B-heveder pár centivel lejjebb húzásával."
        },
        {
            q: "15. Hogyan kell kivezetni B-stallból az ernyőt? Miért? – 2 pont (282-283.o.)",
            a: "El kell engedni a B-hevedereket. A lassú visszaengedés zsákeséshez vezethet."
        },
        {
            q: "16. Mi a frontrozetta? Mikor következhet be? Hogy néz ki? Mi a veszélye? Hogyan korrigálod? – 3 pont (275.o.)",
            a: "Amikor a szárnyvégek patkó alakban elöl összecsapnak. Az ernyő közepén nincs áramlás, szélén van, rosszul kivezetett manővernél. A két vége összefűződik. Szimmetrikus fékezessel."
        },
        {
            q: "17. Mi a spirál? Mik a jellemzői? Mennyivel süllyed(het) az ernyő? Mikor használjuk? – 4 pont (283-284.o)",
            a: "Magasságleépítő manőver. A pilóta és az ernyő egyaránt nagy erőknek vannak kitéve (ezek csökkentésére használhatunk Anti-G ernyőt), alapos felkészülést és gyakorlatot igényel. Süllyedése 10-15m/s. Bevezetése lehet statikus (a pilóta a súlypontja áthelyezésével és a belső oldali fék 30-40cm-re húzásával fordulóba viszi az ernyőt és megvárja míg pár kör elteltével spirálba esik) és dinamikus (a pilóta hintáztatni kezdi az ernyőt, kibillenti a kupolát a stabil repülési helyzetéből és a hintázás lendületét kihasználva ugratja az ernyőt spirálba). Kivezetéshez először pár másodpercre áthelyezzük testsúlyunkat a külső oldalra, ezalatt lassan felengedünk 10-15cm-t a belső fékből, ezután testsúlyunkat visszahelyezzük normál pozícióba, a fékek helyzetén már nem változtatunk. Ezután megvárjuk míg a spirál lassulni kezd, a süllyedés és a kerületi sebesség is csökken, majd teljesen felengedjük a fékeket. Gyors magasságvesztésre használjuk."
        },
        {
            q: "18. Milyen bevezetési módokat ismersz spirálba? Ismertesd őket!- 3 pont (283-284.o.)",
            a: "-statikus: a pilóta a súlypontja áthelyezésével és a belső oldali fék 30-40cm-re húzásával fordulóba viszi az ernyőt és megvárja míg pár kör elteltével spirálba esik.\n-dinamikus: a pilóta hintáztatni kezdi az ernyőt, kibillenti a kupolát a stabil repülési helyzetéből és a hintázás lendületét kihasználva ugratja az ernyőt spirálba."
        },
        {
            q: "19. Hogyan vezeted ki az ernyőt spirálból? – 2 pont (283-284.o.)",
            a: "Először pár másodpercre áthelyezzük testsúlyunkat a külső oldalra, ezalatt lassan felengedünk 10-15cm-t a belső fékből, ezután testsúlyunkat visszahelyezzük normál pozícióba, a fékek helyzetén már nem változtatunk. Ezután megvárjuk míg a spirál lassulni kezd, a süllyedés és a kerületi sebesség is csökken, majd teljesen felengedjük a fékeket."
        },
        {
            q: "20. Mik lehetnek a spirál veszélyei főként a tanulási fázisban? – 2 pont (284-285.o.)",
            a: "-a pilóta túlhúzza a féket a statikus bevezetésnél, leválik az áramlás a túlfékezett szárnyrészről és az ernyő dugóhúzóba kerül\n-a pilóta kivezetésnél túl hirtelen engedi fel a féket, az ernyő heves bólintással, esetleg oldalcsukással lép ki a spirálból\n-szokatlanul nagy G terhelés a szervezetre, ami ájuláshoz vezethet"
        },
        {
            q: "21. Mondj olyan külső körülményt, amely előidézheti a full stallt! Miért? – 1 pont (277.o.)",
            a: "Nincs ilyen, kizárólag mindkét fék ülőlapig húzásával és lent tartásával lehet előidézni."
        },
        {
            q: "22. Mi a full stall? Ki vagy mi idézheti elő? Hogyan zajlik, hogy néz ki a full stall folyamata? Hogyan korrigálható? – 4 pont (277-279.o.)",
            a: "Teljes áramlásleválás. Kizárólag a pilóta idézheti elő, mindkét fék teljes lehúzásával és lent tartásával (8-10 m/s-os süllyedéssel jár). Az ernyő sebessége min. sebesség alá csökken, leválik az áramlás. Tapasztalt pilóták használhatják az ernyő „reset”-elésére pl. befűződéskor, negatív kanyar korrekciójaként, az aszimmetrikus veszélyhelyzetből szimmetrikust teremtve, ami jobban kezelhető. Kivezetéshez először engedjük fel a fékeket szimmetrikusan a legalsó pozíciótól kb 20cm-re, amikor az ernyő stabilabbá válik (még mindig egy kicsit pumpáló, összeomlott szárny), fokozatosan engedjük feljebb a fékeket kb. 2mp-enként."
        },
        {
            q: "23. Jellemzően milyen helyzetekben húznak a pilóták szándékolatlanul full stallt? – 1 pont (278.o.)",
            a: "Jellemzően kezdő pilóták fékkel a kezükben akarják magukat beigazítani a beülőbe. Hirtelen sebesség csökkentésre kényszerüléskor(pl.ütközés elkerülése). Valamilyen egyszerűbb vészhelyzet túlreagálása(pl front stall). Elhibázott leszálláskor(kilebegtetés túl magasan)."
        },
        {
            q: "24. Ha a pilóta már átejtette az ernyőt és levált az áramlás a kupoláról, mikor és hogyan engedheti vissza a fékeket és mikor nem? Miért? – 2 pont (279.o.)",
            a: "Teljesen akkor engedheti vissza miután az ernyő erős pulzálását megszüntette a fékek szimmetrikus, legalsó pontjuktól kb 20cm-el való feljebb engedésével. Az átesést követően hirtelen semmiképp nem szabad visszaengedni a fékeket, mert a kupola annyira előre lőhet ettől, hogy a megfeszülő zsinórzattal, a pilótát magába rántja."
        },
        {
            q: "25. Mi a negatív kanyar? Ki vagy mi idézheti elő? Miről ismered fel? Hogyan korrigálható? – 4 pont (276-277.o.)",
            a: "Az áramlás féloldalas leválása, dugóhúzó. Kizárólag a pilóta tudja előidézni az egyik fék túlzott lehúzásával és lent tartásával. Megtorpan (leválik az áramlás) az egyik szárnyfél, míg a másik tovább repül körülötte, a pilóta kilendül. Korrigáláshoz nem túl hirtelen vissza kell engedni a húzott féket."
        },
        {
            q: "26. Jellemzően milyen helyzetekben húznak a pilóták szándékolatlanul negatívot? – 1 pont (276.o.)",
            a: "Termikben vagy lejtőszélben, amikor az alapból fékezett ernyővel akar a pilóta túl szűken fordulni, ütközés elkerülése érdekében túlhúzott fék használatakor, elhibázott leszálláskor."
        },
        {
            q: "27. Mi a zsákesés? Mi történik ilyenkor? Miről ismered fel? Mik a jellemzői? Mikor fordulhat elő? Mi a veszélye? Hogyan korrigáljuk? – 4 pont (287.o.)",
            a: "A minimumsebesség közelében és az áramlás leválás között az ernyőn átáramlik a levegő, az ernyő a formáját megtartja, de nem keletkezik felhajtóerő, ejtőernyőszerűen viselkedik. 5- 8m/s-os süllyedés jellemzi, okozhatja pl. rosszul kivitelezett B-stall. Stabil zsákesésbe leginkább alkalmatlan műszaki állapotú, alacsony porozitású ernyő tud kerülni, ennek veszélye, hogy sokkal nehezebb megszüntetni, mint egy jó állapotú ernyőn. Korrigálni lehet a gyorsító kinyomásával, egyes típusoknél a fékek dinamikus félig behúzúsával majd visszaengedésével."
        },
        {
            q: "28. Milyen helyzetekben használunk mentőernyőt? Mikor érdemes még a főernyő helyrehozatalával próbálkozni és mikor kell azonnal mentőernyőt dobni? – 2 pont (100,110.o)",
            a: "Alapvetően akkor használjuk, ha elvesztettük a kontrollt a főernyő felett. Megfelelő magasságban, ha a főernyő a fejünk felett van meg lehet próbálkozni a helyreállításával. Ütközés eseten azonnal mentőernyőt kell dobni. Twist (heveder megtekeredés), befűződés, heves spirál esetén, ha nincs a fejünk felett az ernyő, dobni kell, legkésőbb 100m magasságig."
        },
        {
            q: "29. Hány fázisból áll a mentőernyő dobás és mik azok? Hogyan használjuk a mentőernyőt? – 3 pont (100,109,110.o.)",
            a: "Két fázisból áll: A pilóta a fogantyú segítségével kirántja a konténerből a mentőernyőt, majd irányítottan eldobja."
        },
        {
            q: "30. Az eldobást követően milyen dolga van még a pilótának, mire kell odafigyelnie? Miért? – 2 pont (109.o.)",
            a: "Dobás után be kell gyűjteni a főernyőt. Földet érni zárt lábbal kell, kigurulva, hogy elvesszen a nagy mozgási energia. Vízre szállásnál ügyelni kell, hogy időben kicsatoljuk magunkat, mert a beülő a pilótát arccal a vízbe fordítva fent marad a vízen."
        },
        {
            q: "31. Mire kell figyelni a pilótának mentőernyővel történő földetérésnél? – 2 pont (109.o.)",
            a: "Zárt lábbal kell talajt érni, a nagy mozgási energiát a pilóta valamelyik oldalán ki kell gurulja. Földet érést követően erős szélben a töltve maradt mentőernyő elhúzhatja a pilótát, ezért kontrollálni kell a középzsinórokkal."
        },
        {
            q: "32. Hová van bekötve a mentőernyő és miért? – 2 pont (101.o.)",
            a: "A vállkörök tetejéhez, mert ez predesztinálja, hogy a pilóta álló helyzetben érjen földet."
        },
        {
            q: "33. Mit nevezünk V-állásnak mentőernyő dobás esetén? Miért fordulhat elő? Mik a veszélyei? Hogyan kerülhető el? – 3 pont (110.o.)",
            a: "V-állás, amikor a mentőernyő dobást követően a főernyő visszanyílik. Mert a pilóta nem „hatástalanította” (pl. gyűjtötte be) a főernyőt. Veszélye, hogy pl. el kezd pörögni, nem biztosítja a megfelelő sebességcsökkenést, pozíciót a megfelelő földet éréshez. Elkerülhető a főernyő begyűjtésével."
        }
    ],
    "METEOROLÓGIA": [
        {
            q: "1. Milyen időjárási paramétereket figyelünk, amikor meg szeretnénk határozni, hogy alkalmas-e siklóernyős repülésre az Időjárás? – 3 pont (171.o.)",
            a: "Szélirány, szélerősség, felhőzet, páratartalom, látótávolság, légnyomás, csapadék, stb."
        },
        {
            q: "2. Mi a Coriolis-erő? – 1 pont (180.o.)",
            a: "A Föld forgásából adódó eltérítő erő, mely a már mozgó testeket a mozgás irányára merőleges akar kitérítani, az északi féltekén jobbra, a délin balra."
        },
        {
            q: "3. Mi az izotermia? – 1 pont (172.o.)",
            a: "Izotermiának nevezzük, amikor valamely légréteg hőmérsékleti gradiense nulla, vagyis a magasság növekedésével a hőmérséklet nem változik."
        },
        {
            q: "4. Mi az inverzió? Szabad szemmel hogyan láthatod? – 2 pont (172,173.o.)",
            a: "Inverzió, amikor a légkör egy bizonyos rétegében a hőmérséklet a magassággal növekszik. Esetenként szabad szemmel is látható, mivel a záróréteg miatt megáll a feláramlás, alatta megreked a pára, köd, szmog."
        },
        {
            q: "5. Mit jelent a hőmérsékleti gradiens fogalma? – 1 pont (171,172.o.)",
            a: "Egységnyi távolságra eső hőmérséklet változás, lehet függőleges és vízszines. Siklóernyőzésben leginkább a 100m-enként függőleges hőmérséklet változást értjük alatta."
        },
        {
            q: "6. Mit nevezünk adiabatikus folyamatnak? – 1 pont (172.o.)",
            a: "Amikor a rendszer és környezete között nincs hőcsere. Ez alapvetően jellemző a termikekáramlására."
        },
        {
            q: "7. Milyen hőmérsékleti gradienseket ismersz? – 2 pont (171,172.o.)",
            a: "-vízszintes (horizontális): vektormennyiség, megmutatja, hogy egy vizsgált pontban a léghőmérséklet melyik irányban csökken a legjobban, és megadja, hogy mekkora a távolságegységre eső hőmérséklet csökkenés\n-függőleges (vertikális): a hőmérséklet függőleges eloszlását jellemzi, általában 100m-es egységben"
        },
        {
            q: "8. Mennyi az átlagos hőmérsékleti gradiens értéke a mérsékelt övben? – 1 pont (172.o.)",
            a: "0,65 Celsius fok/100m"
        },
        {
            q: "9. Mennyi a száraz levegőre jellemző adiabatikus hőmérsékleti gradiens értéke? – 1 pont (172.o.)",
            a: "1 Celsius fok/100m"
        },
        {
            q: "10. Mennyi a közepes tengerszintre ható légnyomás átlagos értéke? – 1 pont (174.o.)",
            a: "1013,25 hPa."
        },
        {
            q: "11. Mi a jele az időjárási térképeken a hidegfrontnak, a melegfrontnak és az okklúziós frontnak? – 2 pont",
            a: "Hidegfront:<br><img src='images_b/met_b_11_hideg.jpg' class='exam-image' alt='Hidegfront'><br>Melegfront:<br><img src='images_b/met_b_11_meleg.jpg' class='exam-image' alt='Melegfront'><br>Okklúziós front:<br><img src='images_b/met_b_11_okkluzios.jpg' class='exam-image' alt='Okklúziós front'>"
        },
        {
            q: "12. Mit nevezünk anticiklonnak? Mik a jellemzői? – 3 pont (181,182.o.)",
            a: "Egy vagy több zárt izobárral rendelkező légköri képződmény, melynek középpontjában a legmagasabb a légnyomás. Jellemzői: felhőoszlató, forgási iránya az északi féltekén az óramutató járásával megegyező, középpontjában magas a légnyomás."
        },
        {
            q: "13. Mit nevezünk ciklonnak? Mi a szerepe? Mik a jellemzői? – 3 pont (182-184.o.)",
            a: "Egy vagy több zárt izobárral rendelkező légköri örvény, melynek középpontjában a legalacsonyabb a légnyomás, és a szélek felé növekszik. Jellemzői: forgási iránya az északi féltekén az óramutató járásával ellentétes, középpontjában a légnyomás alacsonyabb, nagy (akár 500-2000km) kiterjedésű, felhőképző hatása van, borult, csapadékos időjárással jár."
        },
        {
            q: "14. Mutasd be a ’klasszikus’, másodfajú hidegfrontot! – 3 pont (187.o.)",
            a: "A ciklon belsejében lévő, gyorsan mozgó(80-120km/h) hidegfront. A hideg levegő nagy sebességgel a meleg alá nyomul, ezzel emelkedésre kényszeríti azt. A front előtt erős feláramlás, kifutószél jön létre, a frontvonal előtt és mögött zápor, zivatar jelentkezik. 24-48 órán át marad fenn. Aktív felhőzete keskeny, 100km körüli, ezért nagy sebessége miatt, csak pár órával lehet előre látni."
        },
        {
            q: "15. Mutasd be a melegfrontot! – 3 pont (186.o.)",
            a: "Kisebb fajsúlya miatt a meleglevegő felsiklik a hidegebb, sűrűbb levegőtömegre. Lassú, kb. 30km/h-s sebességgel mozog, 600-800km-el a front előtt már vannak ismertető jelei (pl. nagy magasságban pehelyfelhő kialakulása), ezért jól előrejelezhető. Ritkán kísérik zivatarok, siklóernyős szempontból nem jelent különösebb veszélyt."
        },
        {
            q: "16. Mit jelent az okklúziós front? Jellemezd! – 3 pont (188.o.)",
            a: "Az a helyzet, amikor a hidegfront utoléri a meleget. Az okklúzióval a ciklon gyengül, majd megszűnik. A cikloncentrumhoz közeli részen alakul ki, két front záródása hozza létre, jelentős mennyiségű csapadékkal jár."
        },
        {
            q: "17. Mi az ’izobár’ fogalmának jelentése? – 1 pont (174.o.)",
            a: "Azonos légnyomású helyek. Az izobár vonalak a meteorológiában olyan vonalak, amelyek azonos légnyomású pontokat kötnek össze egy térképen."
        },
        {
            q: "18. Mit mesél számodra egy izobár térkép? Mit és hogyan tudsz leolvasni róla? – 4 pont (174,175.o.)",
            a: "Összefüggéseiben figyelve a jelenségeket, következtethetünk a várható változásokra. Leolvasható róluk a ciklonok, anticiklonok helyzete, a frontok keletkezése, haladása, felszívódása, várható szélirány, szélerősség. Minél sűrűbbek a vonalak, annál erősebb a szél."
        },
        {
            q: "19. Ismertesd a lejtőszél kialakulásának feltételeit! Jelöld be egy ábrán az emelőzónát és a rotort! Hogyan változik a lejtő emelőtere a lejtő meredekségével? – 3 pont (250,251.o.)",
            a: "Feltételei: megfelelő szélirány, szélerősség, hegygerinc. A szelet az útjában álló akadály (domb, hegyoldal stb.) kitérésre kényszeríti, a fölfelé kényszerített légáramlat emelőteret hoz létre. A legideálisabb, ha a szél iránya merőleges a hegyoldalra.<br><img src='images_b/met_b_19_lejtoszel.jpg' class='exam-image' alt='Lejtőszél'>"
        },
        {
            q: "20. Hol és hogyan keletkezik a termik? Mik a termik kialakulásának feltételei? – 3 pont (190-192.o.)",
            a: "Általános ott képződik, ahol egy anyagnak jobb a hőelnyelő képessége, pl. száraz homok, száraz, sötét szántók, parkoló vagy egyéb nagy kiterjedésű betonfelszín stb. Amikor a nap már elég magasan van, sugárzása átmelegíti a talajt, a talaj pedig maga felett a levegőt. A melegebb (kb. 2 Celsius fokkal a környezetéhez képest) levegő kisebb sűrűsége miatt elkezd felemelkedni. Feltételei: száraz talaj, megfelelő napsugárzás, megfelelő talaj hőelnyelő képesség."
        },
        {
            q: "21. Hogyan változnak a termik tulajdonságai a magassággal? – 2 pont (194,258.o.)",
            a: "A magasság növekedésével elkezd lehűlni, tágulni, emelése erősödni, majd felhő formájában kicsapódik a vízgőz és megszűnik a termik."
        },
        {
            q: "22. Ábrázold a termik metszetét szélcsendes és szeles időben! Írd le mi, mit jelent rajta! – 3 pont (194.o.)",
            a: "Szélben:<br><img src='images_b/met_b_22_termik_szelben.jpg' class='exam-image' alt='Termik szélben'>"
        },
        {
            q: "23. Hogyan állapítod meg, hogy egy cumulus keletkező, aktív vagy feloszló életszakaszában van? – 2 pont (205,206.o.)",
            a: "-keletkező: a felhőfoszlányok sűrűsödnek, szaporodnak, gömbszerűvé formálódnak\n-aktív: a felhő elterül, alja egyenessé vagy kissé harang alakúvá válik, ami élénk feláramlásra utal\n-feloszló: elkezd rojtosodni, szétmállik a felhőalap\nA gomolyfelhő keletkezési és feloszló szakasza első pillantásra nagyon hasonló, érdemes figyelni egy kis ideig, mielőtt elindulnánk megtekerni."
        },
        {
            q: "24. Mutasd be a völgyszelet! – 2 pont (190.o.)",
            a: "Nappal a hegyoldalak felmelegszenek, a lejtő mentén elkezd felemelkedni a meleg levegő, lecsökken a nyomás, ezért a völgy bejárata felől hidegebb levegő áramlik a helyére. Éjszaka a jelenség megfordul."
        },
        {
            q: "25. Hogyan működik a parti szél? – 2 pont (190.o.)",
            a: "A vízparton a szárazföld nappal egy felmelegedett, alacsony nyomású felületté válik, ezért a szél a víz felől a part felé fúj, éjszaka a folyamat megfordul."
        },
        {
            q: "26. Hogyan és mi szerint osztályozzuk a felhőket? - 3 pont (198,199.o.)",
            a: "Alakjuk és elhelyezkedési magasságuk szerint. Magasság: magas(cirrus), közepes(alto), alacsony (nincs előtag), függőleges felépítésű felhők\nAlak: réteges, gomolyos, vastag"
        },
        {
            q: "27. Hogyan osztályozzuk a felhőket magasságuk szerint? Mutasd be a különböző rétegeket, a felhők jellemző anyagát és milyen előtagot kapnak! – 4 pont (198.o.)",
            a: "Magas szintű felhők: „Cirrus”: 5-13km, jellemzően jégkristályokból áll.\nKözepes szintű felhők: „Alto”: 2-7km, jégkristály és túlhűlt vízcsepp vegyesen.\nAlacsony szintű felhők: nem kapnak előtagot, talajszint-4km között képződnek, jellemzően vízcseppekből áll. Függőleges felépítésű felhők: alapjuk kb. 500m, tetejük kb. 8000m-ig ér fel. Anyaguk a kondenzáció végbemenetelének hőmérsékletétől, ezért magasságuktól is függ. 0 Celsius fok alatt jégkristályokból, 0 Celsius fok felett folyadékcseppekből állnak."
        },
        {
            q: "28. Hogyan osztályozzuk a felhőket alakjuk szerint? – 3 pont (199.o.)",
            a: "Réteges: vízszintes kiterjedésük a függőlegeshez képest nagy\nGomolyos: vízszintes kiterjedésükhöz képest jelentős vastagsággal rendelkeznek\nVastag: hasonló a vízszintes és függőleges kiterjedésük"
        },
        {
            q: "29. Sorold fel a 10 felhőfajt! – 5 pont (199-202.o.)",
            a: "1.Cirrus (Ci)-pehelyfelhő 2.Cirrocumulus (Cc)-magas szintű gomolyfelhő/bárányfelhő 3.Cirrostratus (Cs)-magas szintű rétegfelhő/fátyolfelhő 4.Altocumulus (Ac)-középszintű gomolyfelhő/párnafelhő 5.Altostratus (As)-középszintű rétegfelhő/lepelfelhő 6.Stratus (St)-alacsony szintű rétegfelhő 7.Stratocumulus (Sc)-réteges gomolyfelhő 8.Cumulus (Cu)-gomolyfelhő 9.Nimbostratus (Ns)-esőrétegfelhő 10.Cumulonimbus (Cb)-zivatarfelhő"
        },
        {
            q: "30. Sorolj fel néhány „beszélő felhőt”! Írd le hogyan néznek ki, hol helyezkednek el és mit mondanak neked? – 4 pont (204,205.o.)",
            a: "Cumulus humilis: Tehénlepény formájú gomolyfelhő, szélesebb a magasságánál, ha alapja egyenes rendszerint kényelmes, enyhe emelés van alatta.\nCumulus mediocris: Közepes gomolyfelhő, szélessége megközelítőleg egyenlő magasságával, a humilisnál kicsit dinamikusabb emelést adnak.\nCumulus congestus: Tornyos gomolyfelhő, magassága nagyobb szélességénél, zivatarokat jelezhet, óvatosan, bizonyos távolságot tartva érdemes berepülni alá."
        },
        {
            q: "31. Milyen fajtái vannak a zivataroknak? Jellemezd őket és kialakulásukat! – 4 pont (207-210.o. ; Meteorológiai alapok siklóernyőzéshez - 2024 1:24:30)",
            a: "-fronti: a front előtt instabilitási vonal mentén keletkeznek, ahol a nagy sebességgel beáramló hideglevegő emelkedésre kényszeríti a meleglevegőt, hevességét a két levegőtömeg közötti hőmérséklet különbség és a meleg levegő nedvességtartalma határozza meg\n-konvektív: tipikusan nyári zivatarok,a közepes szinten létrejövő inverzió kedvez a kialakulásához, a nap közbeni erős termikus tevékenység következtében a záróréteg alatt hatalmas instabilitási energia halmozódik fel, ami áttöri a réteget, és Cb-be koncentrálódva „konkurenciamentesen” indul el a feláramlás, ami nagy eséllyel vezet heves zivatarhoz, nem kapcsolható fronttevékenységhez\n-orografikus: a domborzat kényszeríti emelkedésre a labilis, meleg levegőt, nem kapcsolható fronttevékenységhez, a hegyekben a növényzet miatt nagyobb a nedvességtartalék, és a hegyoldal is hamarabb felmelegszik, mint a sík vidék, ezért képződnek az első cumulusok a hegyek felett, amikből zivatar alakulhat ki"
        },
        {
            q: "32. Mik a zivatar életciklusai és ezek jellemzői? – 4 pont (208,209.o.)",
            a: "-fejlődő: a cumulus congestus elkezd túlfejlődni\n-kifejlett: aktív villámtevékenység, csapadék, le és feláramlások egyidejűleg jelen vannak\n-leépülő: megszűnik a feláramlás, gyengül a csapadék intenzitása, a felhőzet feloszlóban"
        },
        {
            q: "33. Milyen jelek utalnak zivatarveszélyre? (hosszabb idővel, majd közvetlenül előtte) – 3 pont (210.o.)",
            a: "Hosszabban előtte: cirrocumulus(bárányfelhők), előzetes meteorológiai adatok, korai órákban castellanusok (bástyafelhők) megjelenése\nRöviddel előtte: felhők között csíkosan lesütő napfény, cumulus congestus, sötétté vált felhőalj."
        },
        {
            q: "34. Milyen adatok utalnak zivatarveszélyre a meteorológiai előrejelzésekben? – 2 pont",
            a: "-nagy hőmérsékleti gradiens_\n-cape mutató\n-lifted index, minél kisebb annál durvább\n-magas páratartalom-felhőalapbecslés\n-hattárréteg magasság becslés"
        },
        {
            q: "35. Milyen szabad szemmel, terepen észlelhető jelek figyelmeztetnek zivatarveszélyre? – 2 pont (210.o.)",
            a: "-cumulus congestus\n-sötétedő felhőalj\n-halo jelenség\n-korai órákban castellanusok (bástyafelhők) megjelenése"
        },
        {
            q: "36. Magasan, közel felhőalapon repülve hogyan tudom megbecsülni a felettem lévő vagy egy közeli felhő horizontális kiterjedését? – 1 pont (210.o.)",
            a: "-környező felhőkből\n-ha a felhő alja nagyon sötétté válik, az azt jelenti, hogy vastagodik is\n-ha lenézünk a földre, és nem, vagy csak alig látunk át a felhőárnyék alatt a következő napos területre, akkor széltében is kiterjedt"
        },
        {
            q: "37. Mik a zivatar veszélyei a siklóernyősökre nézve? Milyen távolságból érinthetnek a zivatar veszélyei? – 3 pont (210.o.)",
            a: "-heves(10-20m/s) feláramlások\n-villámtevékenység\n-a csapadéktól elnehezült ernyő csukásnál összetapad, biztonsági paraméterei kiszámíthatatlan mértékben romlanak\n-turbulens szélgallér: kifutószél a talajközelben a zivatartól akár 10-30km-re leszállásra alkalmatlan szelet generál"
        },
        {
            q: "38. Alapvetően mi a különbség a siklóernyős repüléshez ideális időjárási viszonyokban összehasonlítva a síkvidéki területeket (pl. Magyarország) a magas hegyekkel (pl. Alpok)? – 2 pont (Meteorológiai alapok siklóernyőzéshez – 2024, 35:30)",
            a: "Az anticiklon felhőoszlató hatása síkvidéken nem ideális, a hegységekben viszont meggátolja a felhők túlfejlődését."
        }
    ],
    "REPÜLÉSTECHNIKA": [
        {
            q: "1. Hány szakaszból áll a start és mik ezek? – 2 pont (221.o.)",
            a: "1.A kupola felhúzása 2. Az ernyő stabilizálása, korrekció (belefutós startnál plusz kontroll pillantás) 3. Gyorsítás"
        },
        {
            q: "2. Milyen behelyezkedési módokat ismersz leszálláshoz? Ismertesd őket! – 3 pont",
            a: "1. Nyolcasozás: a pilóta a szélirányra merőlegesen nyolcasokat repül a leszálló elejétől, a széleknél fordulóval, egyre szűkebben. Nem szabad nyolcasozni, amennyiben a leszálló előtt veszélyes terepakadályok (fasor, épületek, vezeték) vannak egy kiszámíthatatlan leáramlás miatt. Sok pilóta egyidejű leszállására nem a legalkalmasabb módszer.\n2. Iskolakör: a téglalap alakú leszálló oldalaival párhuzamosan repülünk 90 fokos fordulókkal, folyamatosan veszítve magasságunkból, a végsiklásnál szembefordulva a széliránnyal. Egyidejűleg több pilóta leszállására is alkalmas."
        },
        {
            q: "3. Rajzold le, hogyan szállsz le nyolcasozással! Írd le, hogyan hajtod végre és mire kell figyelni! – 2 pont (235, 236.o.)",
            a: "A pilóta a szélirányra merőlegesen nyolcasokat repül a leszálló elejétől, a széleknél fordulóval, egyre szűkebben. Nem szabad nyolcasozni, amennyiben a leszálló előtt veszélyes terepakadályok (fasor, épületek, vezeték) vannak egy kiszámíthatlan leáramlás miatt. Sok pilóta egyidejű leszállására nem a legalkalmasabb módszer.<br><img src='images_b/reptech_b_3_nyolcasozas.jpg' class='exam-image' alt='Nyolcasozás'>"
        },
        {
            q: "4. Rajzold le, hogyan helyezkedsz be iskolakörrel! Írd le mik a legfőbb szempontok, mire kell figyelned! – 2 pont",
            a: "A téglalap alakú leszálló oldalaival párhuzamosan repülünk 90 fokos fordulókkal, folyamatosan veszítve magasságunkból, a végsiklásnál szembefordulva a széliránnyal. Egyidejűleg több pilóta leszállására is alkalmas.<br><img src='images_b/reptech_b_4_iskolakor.jpg' class='exam-image' alt='Iskolakör'>"
        },
        {
            q: "5. Mire kell odafigyelni, ha sok ernyő egyszerre helyezkedik be a leszállóba? - 2 pont (236.o.)",
            a: "Arra, hogy mindenkinek biztosítsuk a kellő helyet, egymás mögé kell besorolni, ugyanazon az íven repülve, így elkerülhető a zavarás és ütközés veszélye."
        },
        {
            q: "6. Mire figyelsz, amikor ismeretlen leszállóhelyet választasz pl. távrepülés során? – 2 pont (234.o.)",
            a: "Már 100-150m magasságban el kell kezdeni a leszállást, tölcsérben kell veszíteni a magasságot, aminek az alja a kinézett leszálló.\nTerepviszonyok: domborzat, talaj, épületek, vezetékek(tartóoszlopok), fák, bokrok, kerítés. Ki kell számítani a leszálló nettó területét.\nCélszerű a leszállás utáni hazajutást is figyelembe venni, ha van rá lehetőség, pl. út közelében leszállni."
        },
        {
            q: "7. Ismeretlen, szélzsák nélküli leszállóban mi alapján határozhatod meg a szélirányt? – 2 pont (114, 220, 234.o.)",
            a: "1. Bokrok, fű, fák mozgásából. 2. Műszer (GPS-es vario) segítségével.3. Más pilóták leszállásának megfigyeléséből."
        },
        {
            q: "8. Mit jelent a „passzív biztonsági paraméterek” fogalma? Mi kell ahhoz, hogy működni tudjanak? Mennyiben változik ez ernyőtípusonként? – 3 pont (231.o.)",
            a: "Az ernyő beavatkozás nélküli visszatértését normál repülési helyzetbe. Magasság. Minél magasabb kategóriájú egy ernyő, annál kisebb a passzív biztonsága."
        },
        {
            q: "9. Hogyan repülünk a lejtőszélben? (Itt repüléstechnikai választ várunk! – A repülés vonala. A fordulók módja, helye. Az ernyő pozíciója a lejtőhöz képest.) – 3 pont (252.o.)",
            a: "Ingavonalon repülünk, párhuzamosan a hegyoldallal. Fordulni lehetőség szerint emelésben, a hegyoldaltól mindig kifelé. Maradjunk mindig a lejtő vonala előtt, a legjobb emelés nem a gerinc felett, hanem előtt van."
        },
        {
            q: "10. Hol találom lejtőszélben a legideálisabb emelőzónát? – 2 pont (250, 251.o.)",
            a: "A szélirány felől a gerinc előtt. A nagyobb szélerő, nagyobb, magasabb emelőteret hoz létre, de nagyobb turbulenciát is okoz. Minél meredekebb a lejtő, annál inkább kitolódik a lejtő elé az emelőtér, minél laposabb, annál hátrébb a lejtő elé-fölé."
        },
        {
            q: "11. Már a levegőben vagy, amikor a lejtőszél veszélyesen megerősödik. Mit teszel ilyenkor? (legalább 3 változatot sorolj fel!) – 3 pont (252, 253.o.)",
            a: "Első próbálkozásként nyomhatjuk a gyorsítót és leszállni a hegy előtt. Ha a gerinc nyílt terepen végződik (a turbulencia elkerülése miatt), megpróbálhatunk eljutni a végéig, ahol jellemzően gyengébb a szél. Ha ezek sem működnek próbáljunk meg magasságot gyűjteni, majd hátszélbe fordulva repüljük át a gerincet és a lehető legmesszebb a lee-oldalon szálljunk le."
        },
        {
            q: "12. Hogyan repülünk termikben? – 3 pont (254-258.o.)",
            a: "Először szondaköröket repülünk, hogy megtaláljuk a termik közepét, ahol a legnagyobb az emelés, majd körözünk a magban. A szél fújási irányához közelebb találtható a termik magja. A legjobb úgy abba hagyni a körözést, hogy a felhőalap szélénél érjünk ki a felhő alól. A kitérést nagyjából 1 egységnyi sugarú felhőből, a felhő alap alatt 1 egységnyi magasságból kell elkezdeni. Ez a 45°-os ökölszabály."
        },
        {
            q: "13. Hogyan találod meg a termik magját? Mi a különbség, ha szembeszélben, vagy ha hátszélben érkezel a termikbe? – 3 pont (256, 257.o.)",
            a: "A vario figyelésével és szondakörök repülésével. A mag mindig a termik szél felőli oldalához közel található. Szembeszélben érkezve előrefele kell tágítani a szondaköröket, lehet „szőlőszemezéssel” is keresni. Hátszélben nagyon gyorsan elérjük a legjobb emelési zónát, mert a termik magja erősebben ellenáll a szélnek, ezért ennek megfelelően kell körözni."
        },
        {
            q: "14. Találkozhatsz-e erdőterület fölött termikkel? Miért? – 2 pont (192.o.)",
            a: "Jellemzően nem, mert ahhoz túl jó az erdő hőelnyelő képessége, viszont a szél eldöntheti, besodorhatja az erdő föle, ha a környéken van honnan elszakadnia."
        },
        {
            q: "15. A talajhoz viszonylag közeli zónában haladva hol keresnél termiket? – 3 pont (191.o)",
            a: "Könnyebben átmelegedő, sötétebb felületek fölött:\n-száraz homok\n-száraz, sötét szántók\n-országút, parkoló, nagy kiterjedésű beton\n-kiégett vagy lekaszált, száraz mező"
        },
        {
            q: "16. A felhőalapon (vagy felhőalaphoz közel) repülve milyen jelek alapján keresnéd a következő termiket? – 2 pont (Meteorológiai alapok siklóernyőzéshez - 2024 1:21:29)",
            a: "Felhőalaphoz közelebb felhőre, alatta talajra helyezkedünk. Olyan felhőket kell keresni, amiknek egyenes az alja, tehát aktív a feláramlás alattuk."
        },
        {
            q: "17. Mit jelent az „aktív repülés” fogalma? Miért hasznos? – 2 pont (244, 245.o.)",
            a: "A testsúlyunk és a fékek összehangolt mozdulataival azonnal reagálás a levegő változásaira, arra törekedve, hogy a kupola mindig pontosan a fejünk felett legyen. Azért, mert egy bukdácsoló ernyő rosszabb hatásfokkal repül, másrészt megnő a csukások esélye."
        },
        {
            q: "18. Mit nevezünk MacCready elvnek és hogyan alkalmazzuk a siklóernyős repülésben? – 3 pont (266.o.)",
            a: "Az optimális siklórepülés stratégiája (McCready = speed to fly): a saját repülési paramétereink, a várható termiksűrűség és a következő termik várható ereje alapján a gyorsító és fékek használatával a sebesség megválasztása, logikusan, érzésből következtetve."
        }
    ],
    "TEMATIKA, SZABÁLYOK, JOGSZABÁLYOK": [
        {
            q: "1. Ingyenes hivatalos forrásból honnan kaphatunk információt a napi légtérfelhasználási tervben érintett légterekről és azok tervezett üzemidejéről? – 1 pont",
            a: "hungarocontrol.hu, netbriefing.hu, telefonon, FIC (Flight Information Center)"
        },
        {
            q: "2. Mit tudsz elmondani Budapest TMA szektor szerkezetéről – 3 pont",
            a: "A Budapest TMA egy többszintű, szektorokra bontott, ellenőrzött légtér, tipikusan folyamatos nagygépes, többségében IFR forgalommal, amely a Liszt Ferenc Nemzetközi Repülőtér körül helyezkedik el 50 NM sugarú szabálytalan körben. Osztály: C\nTöbb részre (szektorra) van felosztva, amelyek mindegyikének saját alsó és felső magassága, valamint földrajzi határa van. Ezeket TMA 1, TMA 2, stb. néven jelölik."
        },
        {
            q: "3. Van-e jogszerű lehetőség transzponder nélküli siklórepülővel F osztályú légtérben repülni? Ha nem akkor mi zárja ki, ha igen akkor mi a feltétele?",
            a: "Van, de VFR szerint, transzponder nélkül repülő légi jármű is bejelentési kötelezettséggel tartozik. A bejelentésről a FIC tájékoztatja a körzetben IFR/VFR szerint repülő légi járműveket, ezért a FIC fleé jelenteni kell a hogy milyen űtvonalon, milyen irányban és mikor lehet siklóernyős tevékenységre számítani."
        },
        {
            q: "4. Mi az alapvető különbség az ellenőrzött és a nem ellenőrzött légterek között? – 1 pont (304.o)",
            a: "Ellenőrzött légtérben a légi járműveknek légiforgalmi irányítást adnak. A nem ellenőrzött légterekben a pilóták saját belátásuk és felelősségük alapján repülnek: információt kapnak, de irányítást nem."
        },
        {
            q: "5. Mit jelent a G és az F légtér? – 2 pont (Légterek és légiközlekedési szabályok - siklóernyős szemszögből 54:58)",
            a: "Régebben Magyarországon volt külön G és F ICAO légtérosztály, ma már össze vannak vonva, nem hivatalosan alsó és felső G-re oszthatjuk. Felső G (3000ft-9500ft) kb 900m-től 2900m-ig. Alsó G értelemszerűen 900m alatt.<br><img src='images_b/szabalyok_b_5_legter.jpg' class='exam-image' alt='G és F légtér'>"
        },
        {
            q: "6. Mit jelent a D, a P és az R légtér? Értelmezd őket röviden! – 3 pont (Légterek és légiközlekedési szabályok - siklóernyős szemszögből 1:04:40)",
            a: "-D: Dangerous: pl. lőtér felett, nem mindig aktív, csak a tevékenységben részt vevő légijármű repülhet be. Csak üzemidőn kívül szabad siklóernyővel.\n-P: Prohibited: a légijármű balesete esetén katasztrófával járna a berepülés, pl. atomerőmű felett. Csak katasztrófaelhárító légijárművek. Mindig aktív, siklóernyővel tilos berepülni.\n-R: Restricted: Mindig aktív, siklóernyővel tilos berepülni."
        },
        {
            q: "7. Mit jelentenek a VFR és az IFR fogalmak? A siklóernyőzésre melyik vonatkozik? – 2 pont",
            a: "VFR: látva repülés IFR: műszerrepülés. Siklóernyő VFR."
        },
        {
            q: "8. Hogyan és mikor kell bejelenteni a baleseteket? Hová jelented be? (akár több hely is felsorolható) Milyen típusú eseményeket kell bejelenteni? Miért kell bejelenteni a baleseteket? Milyen következménye lehet a bejelentésnek, és a bejelentés elmulasztásának? – 4 pont (335.-336.o)",
            a: "-Hogyan és mikor: Minden eseményt be kell jelenteni melyeknél a repülés biztonsága csökken vagy meghiúsul, minden olyan rendellenes repülési helyzetet, amely személyi vagy anyagi kárral járt vagy járhatott volna, minden elhárított különleges esetet, ha nem is járt következménnyel.\n-Hova: Repülés Biztonsági Szervezet. (REBISZ)\n-Miért: Ezekből később tanulságot vonnak le pl. bizonyos ernyő típusok viselkedéséről.\n-Következmény: A REBISZ nem büntet, de megelőzhetünk vele további baleseteket."
        },
        {
            q: "9. Mi a REBISZ? Mikor és milyen eseményeket kell bejelenteni hozzá? Miért? – 2 pont",
            a: "Repülés Biztonsági Szervezet. Minden eseményt be kell jelenteni melyeknél a repülés biztonsága csökken vagy meghiúsul, minden olyan rendellenes repülési helyzetet, amely személyi vagy anyagi kárral járt vagy járhatott volna, minden elhárított különleges esetet, ha nem is járt következménnyel. A tanulság levonása és esetleges balesetek megelőzése miatt."
        },
        {
            q: "10. Milyen szervezethez kapcsolódik a REBISZ és hol találod a telefonszámát? – 2 pont",
            a: "A Fly Away pilótájaként a SIRESZ-hez (Siklórepülő Szövetség) kapcsolódik. A Siresz kártyán az összes elérhetőség megtalálható."
        },
        {
            q: "11. Ismertesd a kitérés szabályait lejtőszélben, termikben, és nyílt légtérben! (Más repülőeszközökkel való találkozások. Előny-helyzetek lejtőszélben, termikben, nyílt légtérben. Találkozások kb. azonos magasságon, illetve alulról – felülről érkező ernyők esetén. A körzés iránya termikben.) – 6 pont",
            a: "Nyílt légtér: -szembetartó két ernyős esetén mindkettőnek kötelező jobbra kitérnie, alulról, felülről tilos kerülni. -összetartó irányban és hozzávetőleg azonos magasságon repülve, az a légi jármű köteles kitérni, amelyik a másikat jobbról látja, kivéve irányíthatósági elsőbbség esetén. Pl.: hőlégballon elől a siklóernyő tér ki minden esetben.\n-keresztező haladásnál annak van elsőbbsége, aki jobbról érkezik, tehát az ad elsőbbséget aki jobbról látja a másikat\n-előzés esetén az előzőtt embernek van elsőbbsége, mindaddig amíg az előzés nincs teljesen befejezve, az előzőnek jobbról kell előznie\nLejtőzés:\n -akinek a hegy a jobb oldalára esik, annak van elsőbbsége, tehát akinek a bal oldalára esik a hegy, annak kell jobbra kerülnie.\n-a lejtőzőknek elsőbbségük van a termikezőkkel szemben, ha a termik a lejtőtérben van\nTermikrepülés:\nA termiket megtaláló pilóta határozza meg a körözés irányát, a többieknek akár felette, akár alatta csatlakoznak, ezt az irányt kell követniük. Azonos magasság esetén koncentrikus körökben szabad repülni, lehet felfelé „előzni” pl. a sugár változtatásával, de csak ha nem veszélyeztetünk mást, és tilos irányt változtatni."
        },
        {
            q: "12. Milyen képzettségi szintet jelent a Pilóta 1. jogosítás és mi a nemzetközi megjelölése? Milyen feltételei vannak? Mire jogosít? – 2 pont",
            a: "-B-vizsgás képzettségi szint: Pilóta 1\n-nemzetközi megjelölés: Para Pro 4 (PP4)\n-min. követelmény: PP2, 30 óra repült idő, ebből legalább 10 óra termikus körülmények között, ezekből min. 2 legalább 1 órás repülés\n- jogosít: öneálló repülésre korlátozás nélkül\n-érvényesség: nincs lejárata"
        },
        {
            q: "13. Milyen további képzettségi szinteket, jogosításokat ismersz? Mik a feltételeik és mire jogosítanak? – 4 pont",
            a: "A tanfolyam szempontjából releváns:\nA-vizsga=Növendék 2=PP2\n-min. követelmény: 40 kisdomb/csörlés, 10 magasstart, elméleti+gyakorlati vizsga\n-jogosít: saját oktató vagy általa a növendéknaplóba bejegyzett PP4 felügyeletével repülésre\n-érvényesség: az oktatási szerződés időtartama\nGyakorló pilóta=PP3\n-min. követelmény: PP2, 20 magasstart, min.10 óra repülés, ebből min. egy repülés legalább 1 órás, sikeres írásbeli B-vizsga\n-jogosít: önálló repülésre termikusan nem aktív időjárásban belföldön, max. 5 m/s szélben\n-érvényesség: 1 év, de az oktató meghosszabbíthatja egyéni elbírálás alapján, amennyiben a pilóta rendelkezik legalább 20 repült órával"
        }
    ]
};