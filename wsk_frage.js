const kQuestions = [
  {
     "id":"1.01",
     "de_q":"Was regelt das Waffengesetz?",
     "de_a":"Das Waffengesetz regelt den Umgang mit Waffen oder Munition unter Berücksichtigung der Belange der öffentlichen Sicherheit und Ordnung.",
     "en_q":"What does the gun law regulate?",
     "en_a":"The Weapons Act regulates the handling of weapons or ammunition, taking into account the interests of public safety and order.",
     "ru_q":"Что регулирует закон об оружии?",
     "ru_a":"Закон об оружии регулирует обращение с оружием или боеприпасами с учетом интересов общественной безопасности и порядка.",
     "c":"x"
  },
  {
     "id":"1.02",
     "de_q":"Umgang mit einer Schusswaffe hat…",
     "de_a":"a) wer damit schießt. b) wer die Waffe verbringt oder mitnimmt. c) wer die Waffe unbrauchbar macht.",
     "en_q":"Handling a firearm has ...",
     "en_a":"a) who shoots with it. b) whoever brings the weapon or takes it with him. c) who makes the weapon unusable.",
     "ru_q":"Обращение с огнестрельным оружием ...",
     "ru_a":"a) кто стреляет им. b) кто бы ни принес оружие или заберет его с собой. c) кто приводит оружие в негодность.",
     "c":"abc"
  },
  {
     "id":"1.03",
     "de_q":"Wie werden Schusswaffen im Sinne des Waffengesetzes definiert?",
     "de_a":"Schusswaffen sind Gegenstände, die zum Angriff oder zur Verteidigung, zur Signalgebung, zur Jagd, zur Distanzinjektion, zur Markierung, zum Sport oder zum Spiel bestimmt sind und bei denen Geschosse durch einen Lauf getrieben werden (Anlage 1 Ab schnitt 1 Unterabschnitt 1 Nr. 1.1 WaffG).",
     "en_q":"How are firearms defined in terms of the Weapons Act?",
     "en_a":"Firearms are objects that are intended for attack or defense, for signaling, hunting, distance injection, marking, sport or play and with which projectiles are driven through a barrel (Annex 1, Section 1, Subsection 1, No. 1.1 WaffG).",
     "ru_q":"Как определяется огнестрельное оружие с точки зрения Закона об оружии?",
     "ru_a":"Огнестрельное оружие - это объекты, которые предназначены для нападения или защиты, для сигнализации, охоты, дистанционной инъекции, маркировки, спорта или игр и с которыми снаряды проходят через ствол (Приложение 1, Раздел 1, Подраздел 1, № 1.1 WaffG).",
     "c":"x"
  },
  {
     "id":"1.04",
     "de_q":"Welche der hier genannten Gegen stände sind Schusswaffen im Sinne des Waffengesetzes?",
     "de_a":"a) Armbrust b) Druckluftgewehr mit Zulassungszeichen „F im Fünfeck“ c) Doppelflinte",
     "en_q":"Which of the items mentioned here are firearms within the meaning of the Weapons Act?",
     "en_a":"a) Crossbow b) Compressed air rifle with approval mark “F in the pentagon” c) Double shotgun",
     "ru_q":"Какие из упомянутых здесь предметов являются огнестрельным оружием по смыслу Закона об оружии?",
     "ru_a":"a) Арбалет b) Пневматическая винтовка со знаком официального утверждения «F в пятиугольнике» c) Двустворчатое ружье.",
     "c":"bc"
  },
  {
     "id":"1.05",
     "de_q":"Welche der hier genannten Gegen stände sind Schusswaffen, bzw. ihnen gleichgestellte Gegenstände im Sinne des Waffengesetzes?",
     "de_a":"a) Soft-Air-Waffen mit einer Geschossenergie über 0,5 Joule b) Waffen mit einer Mündungsenergie von weniger als 7,5 Joule, bei denen die Geschosse durch Federdruck durch einen Lauf getrieben werden c) Präzisionsschleudern",
     "en_q":"Which of the items mentioned here are firearms or items equivalent to them within the meaning of the Weapons Act?",
     "en_a":"a) Soft-air weapons with a projectile energy above 0.5 joules b) Weapons with a muzzle energy of less than 7.5 joules, in which the projectiles are driven through a barrel by spring pressure c) Precision slings",
     "ru_q":"Какие из упомянутых здесь предметов являются огнестрельным оружием или предметами, эквивалентными ему по смыслу Закона об оружии?",
     "ru_a":"a) Пневматическое оружие с энергией снаряда более 0,5 Дж. b) Оружие с дульной энергией менее 7,5 Дж, в котором снаряды проходят через ствол под действием давления пружины c) Прецизионные стропы",
     "c":"ab"
  },
  {
     "id":"1.06",
     "de_q":"Welche der aufgeführten Waffen ist eine halbautomatische Schusswaffe im Sinne des Waffengesetzes?",
     "de_a":"a) Single-Action-Revolver b) Selbstladepistole c) Doppelflinte d) Double-Action Revolver",
     "en_q":"Which of the listed weapons is a semi-automatic firearm within the meaning of the Weapons Act?",
     "en_a":"a) Single-action revolver b) Self-loading pistol c) Side-by-side shotgun d) Double-action revolver",
     "ru_q":"Какое из перечисленных видов оружия является полуавтоматическим огнестрельным оружием по смыслу Закона об оружии?",
     "ru_a":"a) Револьвер одинарного действия b) Самозарядный пистолет c) Ружье параллельного действия d) Револьвер двойного действия",
     "c":"b"
  },
  {
     "id":"1.07",
     "de_q":"Ein Double-Action-Revolver ist im Sinne des Waffenrechts...",
     "de_a":"a) eine vollautomatische Waffe. b) keine halbautomatische Waffe. c) eine halbautomatische Waffe.",
     "en_q":"In terms of gun law, a double-action revolver is ...",
     "en_a":"a) a fully automatic weapon. b) no semi-automatic weapon. c) a semi-automatic weapon.",
     "ru_q":"С точки зрения закона об оружии револьвер двойного действия - это ...",
     "ru_a":"a) полностью автоматическое оружие. b) никакого полуавтоматического оружия. c) полуавтоматическое оружие.",
     "c":"b"
  },
  {
     "id":"1.08",
     "de_q":"Wie ist ein Revolver im „Kleinstkaliber“ 4 mm M20 waffenrechtlich einzuordnen?",
     "de_a":"a) WBK-pflichtige Schusswaffe b) Für Personen ab 18 Jahren frei erwerbbar c) Kann mit einem kleinen Waffenschein erworben werden",
     "en_q":"How should a revolver in the 'small caliber' 4 mm M20 be classified in terms of weapons law?",
     "en_a":"a) Firearms subject to WBK b) Can be acquired freely by persons over the age of 18 c) Can be purchased with a small gun license",
     "ru_q":"Как следует классифицировать револьвер «малокалиберный» 4 мм М20 с точки зрения закона об оружии?",
     "ru_a":"a) Огнестрельное оружие, подпадающее под действие WBK. b) Может быть свободно приобретено лицами старше 18 лет c) Может быть приобретено с лицензией на стрелковое оружие.",
     "c":"a"
  },
  {
     "id":"1.09",
     "de_q":"Welches sind die wesentlichen Teile einer halbautomatischen Pistole im waffenrechtlichen Sinne?",
     "de_a":"1. Lauf (Patronenlager) 2. Verschluss 3. Griffstück",
     "en_q":"What are the essential parts of a semi-automatic pistol in terms of weapons law?",
     "en_a":"1. Barrel (cartridge chamber) 2. Bolt 3. Handle",
     "ru_q":"Каковы основные части полуавтоматического пистолета с точки зрения закона об оружии?",
     "ru_a":"1. Ствол (патронник) 2. Болт 3. Рукоятка",
     "c":"x"
  },
  {
     "id":"1.10",
     "de_q":"Was ist die Schließfeder der großkalibrigen Pistole waffenrechtlich gesehen?",
     "de_a":"a) Ein Zubehörteil der Schusswaffe ohne waffenrechtliche Bedeutung. b) Ein wesentlicher, erlaubnispflichtiger Teil der Schusswaffe. c) Ein wesentlicher, beschusspflichtiger Teil der Schusswaffe.",
     "en_q":"What is the closing spring of the large pistol in terms of weapons law?",
     "en_a":"a) An accessory part of the firearm that has no legal significance. b) An essential part of the firearm that requires a license. c) An essential part of the firearm that is subject to shelling.",
     "ru_q":"Что такое замыкающая пружина большого пистолета с точки зрения закона об оружии?",
     "ru_a":"a) Принадлежность к огнестрельному оружию, не имеющая юридического значения. b) Существенная часть огнестрельного оружия, требующая лицензии. c) Существенная часть огнестрельного оружия, которая подлежит обстрелу.",
     "c":"a"
  },
  {
     "id":"1.11",
     "de_q":"Erläutern Sie den Begriff „Waffe“ im Sinne des WaffG!",
     "de_a":"a) Schusswaffen oder ihnen gleichgestellte Gegenstände. b) Tragbare Gegenstände, die ihrem Wesen nach dazu bestimmt sind, die Angriffs- oder Abwehrfähigkeit von Menschen zu beseitigen oder herabzusetzen, insbesondere Hieb- und Stoßwaffen. c) Tragbare Gegenstände, die ohne dafür bestimmt zu sein, insbesondere wegen ihrer Beschaffenheit, Handhabung oder Wirkungsweise geeignet sind die Angriffs- oder Abwehrfähigkeit von Menschen zu beseitigen oder herabzusetzen und die im Waffengesetz genannt sind.",
     "en_q":"Explain the term “weapon” in the sense of the WaffG!",
     "en_a":"a) Firearms or objects of the same kind. b) Portable objects which by their nature are intended to eliminate or reduce the ability of people to attack or defend themselves, in particular cutting and thrusting weapons. c) Portable objects which are not intended to be used, in particular due to their nature, handling or mode of action, are suitable for eliminating or reducing the ability of people to attack or defend themselves and which are specified in the Weapons Act.",
     "ru_q":"Объясните термин «оружие» в смысле WaffG!",
     "ru_a":"a) огнестрельное оружие или предметы того же типа. b) Переносные предметы, которые по своей природе предназначены для устранения или уменьшения способности людей атаковать или защищаться, в частности, рубящее и колющее оружие. c) Переносные предметы, которые не предназначены для использования, в частности, из-за их характера, обращения или способа действия, подходят для устранения или уменьшения способности людей атаковать или защищаться и которые указаны в Законе об оружии.",
     "c":"abc"
  },
  {
     "id":"1.12",
     "de_q":"Wie unterscheidet das Waffengesetz Langwaffen und Kurzwaffen?",
     "de_a":"a) Langwaffen sind Schusswaffen, deren Lauf und Verschluss in geschlossener Stellung insgesamt länger als 30 cm sind und deren kürzeste bestimmungsgemäß verwendbare Gesamtlänge 60 cm überschreitet. b) Schusswaffen, die eine Gesamtmindestlänge von 60 cm unterschreiten oder bei denen die Lauflänge kleiner als 30 cm ist, werden als Kurzwaffe bezeichnet. c) Kurzwaffen haben maximal eine Länge von 20 cm.",
     "en_q":"How does the Weapons Act differentiate long guns and handguns?",
     "en_a":"a) Long guns are firearms whose barrel and slide are longer than 30 cm in the closed position and whose shortest total length that can be used as intended is more than 60 cm. b) Firearms with a total length of less than 60 cm or with a barrel length of less than 30 cm are referred to as short weapons. c) Handguns have a maximum length of 20 cm.",
     "ru_q":"Как Закон об оружии различает длинноствольное и ручное огнестрельное оружие?",
     "ru_a":"a) Длинное ружье - это огнестрельное оружие, ствол и затвор которого длиннее 30 см в закрытом положении и кратчайшая общая длина, которая может использоваться по назначению, составляет более 60 см. b) Огнестрельное оружие общей длиной менее 60 см или с длиной ствола менее 30 см считается короткоствольным. c) Пистолеты имеют максимальную длину 20 см.",
     "c":"ab"
  },
  {
     "id":"1.13",
     "de_q":"Welcher der nebenstehend aufgeführten Gegenstände ist eine verbotene Waffe/ verbotener Gegenstand? (Hinweis: Vollständige Aufzählung s. Anlage 2 Abschnitt 1 Waffengesetz)",
     "de_a":"a) Blasrohr, Harpune, Armbrust b) halbautomatisches Gewehr / halbautomatische Pistole c) Schlagring, Stockdegen, Würgeholz (Nun-Chaku) d) Wurfsterne, bestimmte Hartkernmunition, bestimmte Leuchtspurmunition",
     "en_q":"Which of the items listed opposite is a prohibited weapon / prohibited item? (Note: for a full list, see Appendix 2, Section 1, Weapons Act)",
     "en_a":"a) Blowpipe, harpoon, crossbow b) Semi-automatic rifle / semi-automatic pistol c) Brass knuckles, stick rapier, choke wood (Nun-Chaku) d) Throwing stars, certain hard core ammunition, certain tracer ammunition",
     "ru_q":"Какой из предметов, перечисленных напротив, является запрещенным оружием / запрещенным предметом? (Примечание: полный список см. В Приложении 2, Раздел 1, Закон об оружии)",
     "ru_a":"a) Горелка, гарпун, арбалет b) Полуавтоматическая винтовка / полуавтоматический пистолет c) Латунные кастеты, палка-рапира, удушающее дерево (Nun-Chaku) d) Метательные звезды, некоторые боеприпасы с твердым сердечником, некоторые трассирующие боеприпасы",
     "c":"cd"
  },
  {
     "id":"1.14",
     "de_q":"Welcher der nebenstehend aufgeführten Gegenstände ist eine verbotene Waffe?",
     "de_a":"a) Samuraischwert b) feststehendes Messer mit einer Klinge von mehr als 8,5 cm c) Vorderschaftrepetierflinte mit einer Lauflänge unter 45 cm",
     "en_q":"Which of the items listed opposite is a prohibited weapon?",
     "en_a":"a) Samurai sword b) Fixed knife with a blade of more than 8.5 cm c) Forearm repeater with a barrel length of less than 45 cm",
     "ru_q":"Какой из предметов, перечисленных напротив, является запрещенным оружием?",
     "ru_a":"a) Самурайский меч b) Неподвижный нож с лезвием более 8,5 см c) Репетир цевья с длиной ствола менее 45 см",
     "c":"c"
  },
  {
     "id":"1.15",
     "de_q":"Bei welchen der aufgeführten Beispiele handelt es sich um „verbotene Waffen“?",
     "de_a":"a) Schusswaffen mit Schalldämpfer b) Schusswaffen, die Reihenfeuer (Dauerfeuer) schießen. c) Für Schusswaffen bestimmte Vorrichtungen, die das Ziel beleuchten. d) Vorderschaftrepetierflinten deren Ge samtlänge in der kürzesten Verwendungsform weniger als 95 cm beträgt.",
     "en_q":"Which of the examples listed are “prohibited weapons”?",
     "en_a":"a) Firearms with silencers b) Firearms that shoot continuous fire. c) Devices designed for firearms that illuminate the target. d) Forearm repeater shotguns whose total length in the shortest form of use is less than 95 cm.",
     "ru_q":"Какие из перечисленных примеров относятся к «запрещенному оружию»?",
     "ru_a":"a) Огнестрельное оружие с глушителями. b) Огнестрельное оружие, стреляющее непрерывным огнем. c) Устройства, предназначенные для огнестрельного оружия, которые освещают цель. d) Ружья с репетиром на предплечье, общая длина которых в самом коротком варианте использования составляет менее 95 см.",
     "c":"bcd"
  },
  {
     "id":"1.16",
     "de_q":"Welche der nachfolgend genannten Gegenstände sind gemäß Waffengesetz verboten?",
     "de_a":"a) Schalldämpfer b) Distanz-Elektroimpulsgeräte c) für Schusswaffen bestimmte Zielscheinwerfer d) Kleinkaliberpatronen mit Leuchtspurgeschossen e) Teleskopschlagstöcke f) Büchsenpatronen mit Treibspiegelgeschossen",
     "en_q":"Which of the following items are prohibited under the Weapons Act?",
     "en_a":"a) Silencers b) Distance electro-pulse devices c) Target lights designed for firearms d) Small caliber cartridges with tracer bullets e) Telescopic batons f) Rifle cartridges with sabot bullets",
     "ru_q":"Какие из следующих предметов запрещены Законом об оружии?",
     "ru_a":"a) Глушители b) Дистанционные электроимпульсные устройства c) Фонари мишени, предназначенные для огнестрельного оружия d) Патроны малого калибра с трассирующими пулями e) Телескопические дубинки f) Винтовочные патроны с подкалиберными пулями",
     "c":"bcdf"
  },
  {
     "id":"1.17",
     "de_q":"Welche Gegenstände zählen zu den verbotenen Waffen?",
     "de_a":"a) Feuerwaffen mit Dauerfeuereinrichtung b) Spielzeugwaffen c) Schusswaffen mit Schalldämpfer",
     "en_q":"Which items are prohibited weapons?",
     "en_a":"a) Firearms with continuous fire equipment b) Toy weapons c) Firearms with silencers",
     "ru_q":"Какие предметы запрещены к оружию?",
     "ru_a":"a) Огнестрельное оружие с оборудованием непрерывного действия b) Игрушечное оружие c) Огнестрельное оружие с глушителями",
     "c":"a"
  },
  {
     "id":"1.18",
     "de_q":"Erlaubnispflichtig, jedoch keine verbotene Waffe ist...",
     "de_a":"a) ein Fallmesser. b) eine vollautomatische Pistole. c) eine zivile halbautomatische Schusswaffe, die wie eine vollautomatische Kriegswaffe aussieht.",
     "en_q":"Requires a permit, but is not a prohibited weapon ...",
     "en_a":"a) a drop knife. b) a fully automatic pistol. c) a civil semi-automatic firearm that looks like a fully automatic war weapon.",
     "ru_q":"Требуется разрешение, но это не запрещенное оружие ...",
     "ru_a":"a) капельный нож. b) полностью автоматический пистолет. c) гражданское полуавтоматическое огнестрельное оружие, которое выглядит как полностью автоматическое боевое оружие.",
     "c":"c"
  },
  {
     "id":"1.19",
     "de_q":"Welches sind wesentliche Teile von Schusswaffen?",
     "de_a":"a) der Lauf b) das Magazin c) der Verschluss d) das Griffstück mit Auslösemechanismus bei Kurzwaffen e) die Trommel eines Revolvers f) das Gehäuse bei Langwaffen g) das Zielfernrohr",
     "en_q":"What are the essential parts of firearms?",
     "en_a":"a) the barrel b) the magazine c) the breechblock d) the handle with trigger mechanism for handguns e) the drum of a revolver f) the housing for long weapons g) the telescopic sight",
     "ru_q":"Каковы основные части огнестрельного оружия?",
     "ru_a":"a) ствол b) магазин c) затвор d) рукоятка с ударно-спусковым механизмом для ручного огнестрельного оружия e) барабан револьвера f) кожух для длинномерного оружия g) оптический прицел",
     "c":"acdef"
  },
  {
     "id":"1.20",
     "de_q":"Was ist ein Schalldämpfer waffenrechtlich gesehen?",
     "de_a":"a) Der Schalldämpfer ist ein verbotener Gegenstand. b) Der Schalldämpfer ist immer erlaubnisfreies Zubehör. c) Der Schalldämpfer für eine erlaubnispflichtige Schusswaffe steht waffenrechtlich der Schusswaffe gleich für die sie bestimmt ist.",
     "en_q":"What is a silencer in terms of weapons law?",
     "en_a":"a) The silencer is a prohibited item. b) The silencer is always an unauthorized accessory. c) The silencer for a firearm that requires a license is legally equivalent to the firearm for which it is intended.",
     "ru_q":"Что такое глушитель с точки зрения закона об оружии?",
     "ru_a":"a) Глушитель - запрещенный предмет. b) Глушитель всегда является неавторизованным аксессуаром. c) Глушитель для огнестрельного оружия, для которого требуется лицензия, юридически эквивалентен огнестрельному оружию, для которого он предназначен.",
     "c":"c"
  },
  {
     "id":"1.21",
     "de_q":"Mit welchen Gegenständen (in Verbindung mit einer Schusswaffe) ist der Umgang verboten?",
     "de_a":"a) Zielscheinwerfer b) Leuchtpunktvisiere für Kurzwaffen c) Nachtzielgeräte",
     "en_q":"Which objects (in connection with a firearm) are prohibited from handling?",
     "en_a":"a) Target lights b) Red dot sights for handguns c) Night sights",
     "ru_q":"С какими предметами (в связи с огнестрельным оружием) запрещено обращаться?",
     "ru_a":"a) Прицельные приспособления b) Прицелы с красной точкой для пистолетов c) Ночные прицелы",
     "c":"ac"
  },
  {
     "id":"1.22",
     "de_q":"Mit welcher Munition der Bezeichnung „9 mm Luger“ ist der Umgang verboten?",
     "de_a":"a) Hohlspitzpatronen b) Kleinschrotpatronen c) Leuchtspurpatronen",
     "en_q":"Which ammunition with the designation “9 mm Luger” is prohibited from handling?",
     "en_a":"a) Hollow point cartridges b) Small shot cartridges c) Tracer cartridges",
     "ru_q":"Какие боеприпасы с обозначением «9 mm Luger» запрещены к обращению?",
     "ru_a":"a) Пустотелые патроны b) Мелкие дробовые патроны c) Трассирующие патроны",
     "c":"c"
  },
  {
     "id":"1.23",
     "de_q":"Mit welcher Munition ist der Umgang verboten?",
     "de_a":"a) Kleinschrotmunition für Kartuschenlager bis 12,5 mm (sog. Grenaille-Patronen) b) Patronenmunition mit Vollmantelgeschossen, bei denen die Geschossspitze entfernt wurde, so dass der Bleikernfreiliegt c) Patronenmunition mit Treibspiegelgeschossen für Waffen mit gezogenen Läufen",
     "en_q":"Which ammunition is prohibited from handling?",
     "en_a":"a) Small shot ammunition for cartridge bearings up to 12.5 mm (so-called grenaille cartridges) b) Cartridge ammunition with full-jacket shot, where the bullet tip has been removed so that the lead core is exposed c) Cartridge ammunition with sabot shot for weapons with rifled barrels",
     "ru_q":"С какими боеприпасами нельзя обращаться?",
     "ru_a":"a) Мелкозарядные боеприпасы для патронных подшипников диаметром до 12,5 мм (так называемые греналевые патроны) b) Патронные боеприпасы с выстрелом в полную рубашку, у которых наконечник пули удален так, что обнажается свинцовый сердечник c) Патронные боеприпасы с подрывным выстрелом для оружия с нарезным стволом",
     "c":"ac"
  },
  {
     "id":"1.24",
     "de_q":"Ist eine Patrone mit Wadcutter Geschoss verbotene Munition?",
     "de_a":"a) Ja, denn es handelt sich um ein Dum-Dum-Geschoss. b) Nein, es ist Scheibenmunition.",
     "en_q":"Is a cartridge with a wadcutter bullet prohibited ammunition?",
     "en_a":"a) Yes, because it is a dum-dum bullet. b) No, it's disk ammunition.",
     "ru_q":"Запрещены ли патроны с пулей для пыжиковых боеприпасов?",
     "ru_a":"a) Да, потому что это пуля дум-дум. b) Нет, это дисковые боеприпасы.",
     "c":"b"
  },
  {
     "id":"1.25",
     "de_q":"Welche der hier genannten Gegen stände sind keine „wesentlichen Teile“ von Schusswaffen im Sinne des Waffengesetzes?",
     "de_a":"a) Wechseltrommel für Revolver b) Klappschaft für Flinten c) Ersatzmagazin für Büchsen",
     "en_q":"Which of the items mentioned here are not “essential parts” of firearms within the meaning of the Weapons Act?",
     "en_a":"a) Replacement drum for revolver b) Folding stock for shotguns c) Replacement magazine for rifles",
     "ru_q":"Какие из упомянутых здесь предметов не являются «основными частями» огнестрельного оружия по смыслу Закона об оружии?",
     "ru_a":"a) Запасной барабан для револьвера b) Складной приклад для ружей c) Запасной магазин для винтовок",
     "c":"bc"
  },
  {
     "id":"1.26",
     "de_q":"Welche der hier genannten Waffen ist ein Einzellader im Sinne des Waffengesetzes?",
     "de_a":"a) halbautomatische Pistole b) Doppelflinte c) Schreckschussrevolver",
     "en_q":"Which of the weapons mentioned here is a single loader within the meaning of the Weapons Act?",
     "en_a":"a) semi-automatic pistol b) double shotgun c) alarm revolver",
     "ru_q":"Какое из упомянутых здесь видов оружия является одиночным заряжающим в значении Закона об оружии?",
     "ru_a":"a) полуавтоматический пистолет b) двустволка c) сигнальный револьвер",
     "c":"b"
  },
  {
     "id":"1.27",
     "de_q":"Welche der hier genannten Waffen sind Mehrlader im Sinne des Waffengesetzes?",
     "de_a":"a) Double-Action-Revolver b) Repetierbüchse c) Doppelflinte",
     "en_q":"Which of the weapons mentioned here are multi-loaders within the meaning of the Weapons Act?",
     "en_a":"a) double action revolver b) bolt action rifle c) double shotgun",
     "ru_q":"Какое из упомянутых здесь видов оружия является многозарядным в соответствии с Законом об оружии?",
     "ru_a":"a) револьвер двойного действия b) винтовка с продольно-скользящим затвором c) двустволка",
     "c":"ab"
  },
  {
     "id":"1.28",
     "de_q":"Zu welcher Waffenart im Sinne des Waffengesetzes zählt eine Unterhebel-Repetierbüchse (lever-action)?",
     "de_a":"a) Einzelladerwaffen b) Repetierwaffen c) halbautomatische Waffen",
     "en_q":"Which type of weapon does a lever action rifle belong to within the meaning of the Weapons Act?",
     "en_a":"a) single-shot weapons b) repeating weapons c) semi-automatic weapons",
     "ru_q":"К какому типу оружия относится винтовка с рычажным механизмом действия по смыслу Закона об оружии?",
     "ru_a":"a) однозарядное оружие b) многозарядное оружие c) полуавтоматическое оружие",
     "c":"b"
  },
  {
     "id":"1.29",
     "de_q":"Was zählt zu den Geschossen im Sinne des Waffengesetzes?",
     "de_a":"a) Platzpatronen b) Bleirundkugeln für Vorderlader c) CO2 - Kartuschen für Druckluftwaffen",
     "en_q":"What is a bullet in terms of the Weapons Act?",
     "en_a":"a) Blank cartridges b) Round lead balls for muzzle loaders c) CO2 cartridges for compressed air weapons",
     "ru_q":"Что такое пуля с точки зрения Закона об оружии?",
     "ru_a":"a) холостые патроны b) круглые свинцовые шары для дульного заряжания c) баллончики с СО2 для пневматического оружия",
     "c":"b"
  },
  {
     "id":"1.30",
     "de_q":"Welche Arten von Munition unter scheidet das Waffengesetz?",
     "de_a":"- Patronenmunition (Hülsen mit Treibladungen, die ein Geschoss enthalten und Geschosse mit Eigenantrieb) - Kartuschenmunition (Hülsen mit Ladungen, die kein Geschoss enthalten) - Pyrotechnische Munition (Munition, in der explosionsgefährliche Stoffe oder Stoffgemische enthalten sind, die einen Licht-, Schall-, Rauch- oder ähnlichen Effekt erzeugen) - Hülsenlose Munition (Treibladungen mit und ohne Geschosse)",
     "en_q":"What types of ammunition does the Weapons Act differentiate?",
     "en_a":"- Cartridge ammunition (cases with propellant charges that contain a bullet and projectiles with self-propulsion) - Cartridge ammunition (cases with charges that do not contain a projectile) - Pyrotechnic ammunition (ammunition that contains explosive substances or mixtures of substances that cause light, Create sound, smoke or similar effects) - Caseless ammunition (propellant charges with and without projectiles)",
     "ru_q":"Какие типы боеприпасов различаются в Законе об оружии?",
     "ru_a":"- Патронные боеприпасы (гильзы с метательными зарядами, которые содержат пулю и снаряды с самодвижением) - Патронные боеприпасы (гильзы с зарядами, не содержащими снаряда) - Пиротехнические боеприпасы (боеприпасы, содержащие взрывчатые вещества или смеси веществ, вызывающих свет, Создание звука, дыма или подобных эффектов) - Безгильзовые боеприпасы (пороховые заряды со снарядами и без них)",
     "c":"x"
  },
  {
     "id":"1.31 ",
     "de_q":"Welche Munitionsarten sind vom Waffengesetz erfasst?",
     "de_a":"a) Patronenmunition b) hülsenlose Munition c) pyrotechnische Munition",
     "en_q":"Which types of ammunition are covered by the Weapons Act?",
     "en_a":"a) cartridge ammunition b) caseless ammunition c) pyrotechnic ammunition",
     "ru_q":"На какие типы боеприпасов распространяется Закон об оружии?",
     "ru_a":"a) патронные боеприпасы; b) безгильзовые боеприпасы; c) пиротехнические боеприпасы.",
     "c":"abc"
  },
  {
     "id":"1.32",
     "de_q":"Zur Munition im Sinne des Waffengesetzes zählen:",
     "de_a":"a) Stahlkugeln für Präzisionsschleudern b) Patronenmunition Kaliber .38 Special c) .177 (4,5 mm) Rundkugeln",
     "en_q":"Ammunition within the meaning of the Weapons Act includes:",
     "en_a":"a) Steel balls for precision slings b) Cartridge ammunition caliber .38 Special c) .177 (4.5 mm) round balls",
     "ru_q":"Боеприпасы по смыслу Закона об оружии включают:",
     "ru_a":"a) Стальные шарики для прецизионных строп b) Патронные патроны калибра .38 Special c) Круглые шарики .177 (4,5 мм)",
     "c":"b"
  },
  {
     "id":"1.33",
     "de_q":"Welche der hier genannten Gegen stände sind Munition im Sinne des Waffengesetzes?",
     "de_a":"a) Hohlspitzgeschosse für Kurzwaffen b) Armbrustbolzen c) Schrotpatronen",
     "en_q":"Which of the items mentioned here are ammunition within the meaning of the Weapons Act?",
     "en_a":"a) Hollow point bullets for handguns b) Crossbow bolts c) Shotgun cartridges",
     "ru_q":"Какие из упомянутых здесь предметов являются боеприпасами по смыслу Закона об оружии?",
     "ru_a":"a) Пустотелые пули для пистолетов b) Арбалетные болты c) Патроны для дробовика",
     "c":"c"
  },
  {
     "id":"1.34",
     "de_q":"Welcher der hier genannten Gegen stände ist keine Munition im Sinne des Waffengesetzes?",
     "de_a":"a) Geschosse für Druckluftgewehre (Diabolos) b) Platzpatronen für Schreckschusswaffen c) Zündhütchen für Vorderladerwaffen mit Zündhütchenzündung (Perkussion)",
     "en_q":"Which of the items mentioned here is not ammunition within the meaning of the Weapons Act?",
     "en_a":"a) Projectiles for compressed air rifles (pellets) b) Blank cartridges for alarm guns c) Primers for muzzle-loading weapons with primer ignition (percussion)",
     "ru_q":"Какие из упомянутых здесь предметов не являются боеприпасами по смыслу Закона об оружии?",
     "ru_a":"a) Снаряды для пневматических винтовок (пули) b) Холостые патроны к сигнальному ружью c) Капсюли для дульнозарядного оружия с капсюльным зажиганием (ударным)",
     "c":"ac"
  },
  {
     "id":"1.35",
     "de_q":"Welche der nachfolgend genannten Beispiele sind Kartuschenmunition im Sinne des Waffengesetzes?",
     "de_a":"a) Platzpatronen b) Munition mit Betäubungsmittel für die Distanzinjektion c) Zentralfeuerpatronen mit wiederladbaren Hülsen",
     "en_q":"Which of the following examples are cartridge ammunition within the meaning of the Weapons Act?",
     "en_a":"a) Blank cartridges b) Ammunition with narcotics for distance injection c) Centerfire cartridges with rechargeable cases",
     "ru_q":"Какие из следующих примеров являются патронными боеприпасами по смыслу Закона об оружии?",
     "ru_a":"a) холостые патроны b) боеприпасы с наркотиками для дистанционной инъекции c) патроны центрального огня с перезаряжаемыми гильзами",
     "c":"a"
  },
  {
     "id":"1.36",
     "de_q":"Was bedeutet „erwerben“ im Sinne des Waffengesetzes?",
     "de_a":"Das Erlangen der tatsächlichen Gewalt über die Schusswaffe.",
     "en_q":"What does “acquire” mean in the sense of the Weapons Act?",
     "en_a":"Gaining actual control of the firearm.",
     "ru_q":"Что означает «приобретать» в смысле Закона об оружии?",
     "ru_a":"Получение фактического контроля над огнестрельным оружием.",
     "c":"x"
  },
  {
     "id":"1.37",
     "de_q":"Was bedeutet „erwerben“ einer Schusswaffe im Sinne des Waffengesetzes?",
     "de_a":"a) Abschluss eines Kaufvertrages b) Einsetzen als Erbe im Testament c) Erlangen der tatsächlichen Gewalt über die Waffe",
     "en_q":"What does “acquiring” a firearm mean in terms of the Weapons Act?",
     "en_a":"a) Conclusion of a purchase contract b) Appointment as heir in the will c) Gaining actual control of the weapon",
     "ru_q":"Что означает «приобретение» огнестрельного оружия с точки зрения Закона об оружии?",
     "ru_a":"a) Заключение договора купли-продажи b) Назначение наследником по завещанию c) Получение фактического контроля над оружием",
     "c":"c"
  },
  {
     "id":"1.38",
     "de_q":"Wer ist Erwerber einer Schusswaffe im Sinne des Waffengesetzes?",
     "de_a":"a) Der Dieb, der die Waffe stiehlt. b) Derjenige, der in einem Waffengeschäft lediglich den Kaufvertrag für eine Waffe unterschreibt. c) Der Finder, wenn er die Waffen an sich nimmt.",
     "en_q":"Who is the acquirer of a firearm within the meaning of the Weapons Act?",
     "en_a":"a) The thief who steals the gun. b) Anyone who only signs the purchase contract for a weapon in a weapons shop. c) The finder when he takes the weapons.",
     "ru_q":"Кто является покупателем огнестрельного оружия по смыслу Закона об оружии?",
     "ru_a":"a) Вор, укравший ружье. b) Любой, кто подписывает договор купли-продажи оружия только в оружейном магазине. c) Искатель, когда он берет оружие.",
     "c":"ac"
  },
  {
     "id":"1.39",
     "de_q":"Sie wollen ihren Revolver mit dem Ihres Schützenkameraden dauerhaft tauschen, was müssen sie dabei beachten?",
     "de_a":"a) Beide haben eine Erlaubnis zum Erwerb (Voreintrag) der jeweiligen Waffe zu beantragen. b) Die Waffen können getauscht werden. Dies ist aber der zuständigen Behörde innerhalb von 14 Tagen anzuzeigen. c) Es handelt sich um ein gegenseitiges Überlassen und Erwerben.",
     "en_q":"You want to permanently swap your revolver with that of your fellow rifleman, what do you have to consider?",
     "en_a":"a) Both have to apply for a license to purchase (pre-register) the respective weapon. b) The weapons can be exchanged. However, this must be reported to the competent authority within 14 days. c) It is a matter of mutual transfer and acquisition.",
     "ru_q":"Вы хотите навсегда поменять свой револьвер на револьвер своего товарища-стрелка, что вы должны учесть?",
     "ru_a":"a) Оба должны подать заявку на получение лицензии на покупку (предварительную регистрацию) соответствующего оружия. b) Оружие можно обменять. Однако об этом необходимо сообщить в компетентный орган в течение 14 дней. c) Это вопрос взаимной передачи и приобретения.",
     "c":"ac"
  },
  {
     "id":"1.40",
     "de_q":"Wann wird eine Schusswaffe im Sinne des Gesetzes erworben?",
     "de_a":"a) Bei unrechtmäßiger Aneignung. b) Waffenrechtlicher Erwerb liegt erst bei behördlichem Eintrag der Waffe in die WBK vor. c) Wenn der Waffenhändler dem Schützen die Waffe im Geschäft übergibt.",
     "en_q":"When is a firearm acquired within the meaning of the law?",
     "en_a":"a) In the event of unlawful appropriation. b) Weapons are only acquired when the weapon is officially entered in the WBK. c) When the gun dealer hands the gun over to the shooter in the shop.",
     "ru_q":"Когда приобретается огнестрельное оружие по смыслу закона?",
     "ru_a":"a) В случае незаконного присвоения. b) Оружие приобретается только тогда, когда оно официально внесено в WBK. c) Когда торговец оружием передает оружие стрелку в магазине.",
     "c":"ac"
  },
  {
     "id":"1.41",
     "de_q":"Wer erwirbt eine Waffe im Sinne des Waffengesetzes?",
     "de_a":"a) Jeder, der die tatsächliche Gewalt über die Waffe erlangt. b) Jeder, der sich die Waffe für einen Zeitraum von weniger als 4 Wochen ausleiht. c) Jeder, der die tatsächliche Gewalt über die Waffe ausübt.",
     "en_q":"Who acquires a weapon within the meaning of the Weapons Act?",
     "en_a":"a) Anyone who gains actual control of the weapon. b) Anyone who borrows the weapon for a period of less than 4 weeks. c) Anyone who exercises actual control over the weapon.",
     "ru_q":"Кто приобретает оружие по смыслу Закона об оружии?",
     "ru_a":"a) Любой, кто получает фактический контроль над оружием. b) Любой, кто одалживает оружие на срок менее 4 недель. c) Любой, кто фактически контролирует оружие.",
     "c":"ab"
  },
  {
     "id":"1.42",
     "de_q":"Wann „erwirbt“ der Käufer eine Waffe im Sinne des Waffengesetzes?",
     "de_a":"a) Bei dem Abschluss eines Kaufvertrages. b) Bei der Vorlage der Waffenbesitzkarte des Käufers zum Eintrag der Waffe bei seiner zuständigen Behörde. c) Bei der Aushändigung der Waffe durch den Verkäufer.",
     "en_q":"When does the buyer “acquire” a weapon within the meaning of the Weapons Act?",
     "en_a":"a) When concluding a purchase contract. b) When submitting the buyer's gun ownership card to register the gun with his competent authority. c) When the weapon is handed over by the seller.",
     "ru_q":"Когда покупатель «приобретает» оружие по смыслу Закона об оружии?",
     "ru_a":"a) При заключении договора купли-продажи. b) При подаче карты покупателя на право собственности на оружие для регистрации оружия в его компетентном органе. c) При передаче оружия продавцом.",
     "c":"c"
  },
  {
     "id":"1.43",
     "de_q":"Was bedeutet „Überlassen“ einer Schusswaffe?",
     "de_a":"a) Vererben einer Schusswaffe (nach dem Tod). b) Wer einem anderen die tatsächliche Gewalt darüber einräumt. c) Verleihen einer Vereinswaffe (für wenige Tage) an einen anderen Verein.",
     "en_q":"What does 'leaving' a firearm mean?",
     "en_a":"a) Inheriting a firearm (after death). b) Anyone who grants actual power over it to another. c) Lending a club weapon (for a few days) to another club.",
     "ru_q":"Что значит «оставить» огнестрельное оружие?",
     "ru_a":"a) Наследование огнестрельного оружия (после смерти). b) Кто дает реальную власть над ним другому. c) Одолжить дубинку (на несколько дней) другому клубу.",
     "c":"bc"
  },
  {
     "id":"1.44",
     "de_q":"Wer ist sachkundig im Sinne des Waffengesetzes?",
     "de_a":"a) Derjenige, der vor einem Prüfungsausschuss die Sachkundeprüfung erfolgreich abgelegt hat. b) Soldaten, die mehrere Jahre mit Wartung, Pflege und Lagerung von Handfeuerwaffen betraut waren. c) Derjenige, der erfolgreich seine Gesellenprüfung im Büchsenmacherhandwerk abgelegt hat.",
     "en_q":"Who is competent within the meaning of the Weapons Act?",
     "en_a":"a) The person who has successfully passed the proficiency test in front of an examination board. b) Soldiers who have been entrusted with the maintenance, care and storage of handguns for several years. c) The one who has successfully passed his apprenticeship examination in gunsmithing.",
     "ru_q":"Кто компетентен в смысле Закона об оружии?",
     "ru_a":"a) Лицо, успешно сдавшее квалификационный экзамен перед экзаменационной комиссией. b) Солдаты, которым в течение нескольких лет было поручено техническое обслуживание, уход и хранение огнестрельного оружия. c) Успешно сдавший экзамен по специальности оружейное дело.",
     "c":"ac"
  },
  {
     "id":"1.45",
     "de_q":"Was bedeutet „Führen“ im Sinne des Waffengesetzes?",
     "de_a":"Das Ausüben der tatsächlichen Gewalt außerhalb der eigenen Wohnung, Geschäfts räume, des eigenen befriedeten Besitztums oder einer Schießstätte.",
     "en_q":"What does “leading” mean in the sense of the Weapons Act?",
     "en_a":"Exercising actual violence outside one's own home, business premises, one's own pacified property or a shooting range.",
     "ru_q":"Что означает «лидерство» в смысле Закона об оружии?",
     "ru_a":"Осуществление фактического насилия вне собственного дома, офиса, собственного умиротворенного имущества или стрельбища.",
     "c":"x"
  },
  {
     "id":"1.46",
     "de_q":"„Führen“ im Sinne des Waffengesetzes bedeutet Ausübung der tatsächlichen Gewalt...",
     "de_a":"a) in der eigenen Wohnung. b) außerhalb des eigenen befriedeten Besitztums. c) durch den Waffenhändler im Geschäftsraum.",
     "en_q":"“Leading” in the sense of the Gun Act means exercising actual violence ...",
     "en_a":"a) in your own home. b) outside of one's own pacified property. c) by the arms dealer in the business premises.",
     "ru_q":"«Лидерство» в смысле Закона об оружии означает применение фактического насилия ...",
     "ru_a":"a) в собственном доме. b) вне своей умиротворенной собственности. c) торговцем оружием в служебных помещениях.",
     "c":"b"
  },
  {
     "id":"1.47",
     "de_q":"„Führen“ im Sinne des Waffengesetzes liegt vor, wenn die Waffe...",
     "de_a":"a) in der eigenen Wohnung im Holster getragen wird. b) im Treppenhaus eines fremden Mehrfamilienhauses im Holster getragen wird. c) im eigenen PKW in der offenen Seitenablage transportiert wird.",
     "en_q":"Carrying within the meaning of the Weapons Act exists if the weapon ...",
     "en_a":"a) is carried in the holster at home. b) is carried in the holster in the stairwell of an apartment building that is not part of the family. c) is transported in the own car in the open side shelf.",
     "ru_q":"«Ношение» по смыслу Закона об оружии существует, если оружие ...",
     "ru_a":"a) переносится в кобуре дома. b) переносится в кобуре в подъезде многоквартирного дома, не являющегося частью семьи. c) перевозится в собственном автомобиле на открытой боковой полке.",
     "c":"bc"
  },
  {
     "id":"1.48",
     "de_q":"Durch wen und wie wird die waffenrechtliche Zuverlässigkeit einer Person festgestellt?",
     "de_a":"a) Die Zuverlässigkeit wird von der zuständigen Behörde geprüft. b) Es werden Auskünfte aus dem Bundeszentralregister, dem zentralen staatsanwaltschaftlichen Verfahrensregister und einer Stellungnahme der örtlichen Polizeidienststelle eingeholt. Zudem werden Auskünfte bei den zuständigen Verfassungsschutzämtern eingeholt. c) Die Zuverlässigkeit wird durch die persönliche Vorstellung bei der örtlichen Behörde festgestellt.",
     "en_q":"By whom and how is the legal reliability of a person determined by weapons?",
     "en_a":"a) Reliability is checked by the competent authority. b) Information is obtained from the Federal Central Register, the Central Public Prosecutor's Procedure Register and an opinion from the local police station. In addition, information is obtained from the responsible constitutional protection offices. c) Reliability is determined by personal presentation to the local authority.",
     "ru_q":"Кем и как определяется юридическая надежность человека оружием?",
     "ru_a":"a) Надежность проверяется компетентным органом. b) Информация получена из Федерального центрального реестра, Центрального процессуального реестра прокуратуры и заключения местного отделения полиции. Кроме того, информация поступает от ответственных органов конституционной защиты. c) Надежность определяется личным представлением местным властям.",
     "c":"ab"
  },
  {
     "id":"1.49",
     "de_q":"Wer ist im Sinne des Waffengesetzes in der Regel nicht mehr zuverlässig?",
     "de_a":"a) Jeder, der wegen einer vorsätzlich begangenen Straftat zu einer Geldstrafe von mindestens 60 Tagessätzen verurteilt wurde. b) Jeder, der wegen der Begehung von zwei verschiedenen vorsätzlichen Straftaten zu Geldstrafen in Höhe von jeweils 30 Tagessätzen verurteilt wurde. c) Jeder, der wegen einer vorsätzlichen Geschwindigkeitsüberschreitung seinen Führerschein für mehr als 60 Tage abgeben musste.",
     "en_q":"Who is usually no longer reliable within the meaning of the Weapons Act?",
     "en_a":"a) Anyone who has been sentenced to a fine of at least 60 daily sentences for an intentional crime. b) Anyone convicted of committing two different deliberate crimes with fines of 30 daily rates each. c) Anyone who had to surrender their driving license for more than 60 days because of intentionally exceeding the speed limit.",
     "ru_q":"Кто обычно перестает быть надежным по смыслу Закона об оружии?",
     "ru_a":"a) Лицо, приговоренное к штрафу в размере не менее 60 ежедневных приговоров за умышленное преступление. b) лицо, признанное виновным в совершении двух различных умышленных преступлений, со штрафом в размере 30 суточных ставок каждое. c) Любое лицо, которому пришлось отказаться от водительских прав на срок более 60 дней из-за преднамеренного превышения ограничения скорости.",
     "c":"ab"
  },
  {
     "id":"1.50",
     "de_q":"Wer ist im Sinne des Waffengesetzes nicht geeignet?",
     "de_a":"a) Jeder, bei dem Tatsachen die Annahme rechtfertigen, dass er ab hängig von berauschenden Mitteln ist. b) Jeder, der aus einem anerkannten Schießsportverband ausgeschlossen wurde. c) Jeder, bei dem Tatsachen die Annahme rechtfertigen, dass er aufgrund in der Person liegender Um stände mit Waffen oder Munition unsachgemäß umgehen wird.",
     "en_q":"Who is unsuitable for the purposes of the Weapons Act?",
     "en_a":"a) Anyone for whom facts justify the assumption that he is dependent on intoxicating substances. b) Anyone who has been expelled from a recognized shooting association. c) Anyone for whom facts justify the assumption that, due to personal circumstances, they will handle weapons or ammunition improperly.",
     "ru_q":"Кто не подходит для целей Закона об оружии?",
     "ru_a":"a) Любой, для кого факты подтверждают предположение о его зависимости от одурманивающих веществ. b) любое лицо, исключенное из признанной стрелковой ассоциации. c) Любой, для кого факты подтверждают предположение, что в силу личных обстоятельств они будут обращаться с оружием или боеприпасами ненадлежащим образом.",
     "c":"ac"
  },
  {
     "id":"1.51",
     "de_q":"Durch wen und wie wird die persönliche Eignung einer Person festgestellt?",
     "de_a":"Die persönliche Eignung wird von der zuständigen Behörde geprüft; ggf. ist ein amts- oder fachärztliches oder fachpsychologisches Zeugnis beizubringen.",
     "en_q":"By whom and how is a person's personal suitability determined?",
     "en_a":"Personal suitability is checked by the competent authority; If necessary, an official or specialist medical or specialist psychological certificate must be provided.",
     "ru_q":"Кем и как определяется личная пригодность человека?",
     "ru_a":"Персональная пригодность проверяется компетентным органом; При необходимости должно быть предоставлено официальное или специализированное медицинское свидетельство или специализированное психологическое заключение.",
     "c":"x"
  },
  {
     "id":"1.52",
     "de_q":"Wer verfügt im Sinne des Waffengesetzes nicht über die erforderliche persönliche Eignung zum Waffenbesitz.",
     "de_a":"a) Grundsätzlich alle Personen unter 25 Jahren, wenn sie kein amts- oder fachärztliches oder fachpsychologisches Zeugnis über ihre geistige und körperliche Eignung vorlegen können. b) Personen, bei denen Tatsachen die Annahme rechtfertigen, dass sie psychisch krank oder debil sind. c) Personen, bei denen Tatsachen die Annahme rechtfertigen, dass sie alkoholabhängig sind.",
     "en_q":"Anyone who does not have the necessary personal aptitude to possess a weapon within the meaning of the Weapons Act.",
     "en_a":"a) In principle, all persons under the age of 25 if they cannot provide an official, specialist doctor or specialist psychological certificate about their mental and physical aptitude. b) People for whom facts justify the assumption that they are mentally ill or moronic. c) People for whom facts justify the assumption that they are addicted to alcohol.",
     "ru_q":"Любой, кто не обладает необходимыми личными способностями владеть оружием по смыслу Закона об оружии.",
     "ru_a":"a) В принципе, все лица моложе 25 лет, если они не могут предоставить официальное свидетельство врача-специалиста или психологическое свидетельство специалиста об их умственных и физических способностях. b) Люди, для которых факты подтверждают предположение, что они психически больны или слабоумны. c) Люди, для которых факты подтверждают предположение, что они пристрастились к алкоголю.",
     "c":"bc"
  },
  {
     "id":"1.53",
     "de_q":"Was versteht man unter dem „Ver bringen“ im Sinne des WaffG?",
     "de_a":"a) Waffen oder Munition verbringt, wer diese über die Grenze zum dortigen Verbleib oder mit dem Ziel des Besitzwechsels in den, durch den oder aus dem Geltungsbereich des WaffG zu einer anderen Person oder zu sich selbst transportieren lässt oder selbst transportiert. b) Waffen werden dauerhaft in einen anderen Mitgliedstaat mit einem Europäischen Feuerwaffenpass verbracht. c) Waffen werden mit einem Europäischen Feuerwaffenpass zu einer Schießsportveranstaltung in einem anderen Mitgliedstaat mitgenommen.",
     "en_q":"What is meant by “bringing” in the sense of the WaffG?",
     "en_a":"a) Weapons or ammunition is brought by anyone who has them transported across the border to their whereabouts or with the aim of changing ownership into, through or out of the scope of the WaffG to another person or to themselves, or transports them themselves. b) Weapons are permanently moved to another Member State with a European Firearms Passport. c) Weapons are taken with a European firearms pass to a shooting sport event in another Member State.",
     "ru_q":"Что подразумевается под «принесением» в смысле WaffG?",
     "ru_a":"a) Оружие или боеприпасы привозит любой, у кого они перевозятся через границу к месту их нахождения или с целью передачи права собственности в, через или за пределы WaffG другому лицу или себе, или перевозит их самостоятельно. b) Оружие навсегда перемещается в другое государство-член с Европейским паспортом огнестрельного оружия. c) Оружие ввозится с европейским пропуском на огнестрельное оружие на соревнования по стрелковому спорту в другом государстве-члене.",
     "c":"a"
  },
  {
     "id":"1.54",
     "de_q":"Was versteht man unter dem Begriff „Europäischer Feuerwaffenpass“?",
     "de_a":"a) Einen europaweit gültigen Waffen schein für gefährdete Personen, die gegenüber dem Bundesverwaltungsamt ein besonderes Schutzbedürfnis glaubhaft gemacht haben. b) Eine europaweit gültige Waffenbesitzkarte, die die Waffenmitnahme auf Reisen in Mitgliedstaaten der EU gestattet. c) Ein von der EU standardisiertes Waffenbesitzdokument (gegebenen falls ist vor der Einreise in einen anderen Mitgliedstaat dessen Erlaubnis zur Mitnahme einzuholen).",
     "en_q":"What does the term “European Firearms Pass” mean?",
     "en_a":"a) A certificate of arms valid throughout Europe for persons at risk who have made a special need for protection credible to the Federal Administration Office. b) A weapon possession card valid throughout Europe, which allows you to take weapons with you when traveling in member states of the EU. c) A weapons possession document standardized by the EU (if necessary, permission to take it with you must be obtained before entering another member state).",
     "ru_q":"Что означает термин «Европейский пропуск на огнестрельное оружие»?",
     "ru_a":"a) Свидетельство о вооружении, действующее на всей территории Европы для лиц из группы риска, которые особо нуждаются в защите, заслуживающее доверия со стороны Федерального административного ведомства. b) Карта владения оружием, действующая на всей территории Европы, которая позволяет брать оружие с собой во время путешествий по странам-членам ЕС. c) Документ о владении оружием, стандартизованный ЕС (при необходимости, разрешение на то, чтобы взять его с собой, должно быть получено до въезда в другое государство-член).",
     "c":"c"
  },
  {
     "id":"1.55",
     "de_q":"Eine Schusswaffe ist „zugriffsbereit“ im Sinne des Waffengesetzes, ...",
     "de_a":"a) wenn sie unmittelbar, also mit wenigen schnellen Handgriffen, in An schlag gebracht werden kann. b) wenn sie im abgeschlossenen Koffer im Kfz untergebracht ist. c) wenn sie ungeladen in der verschlossenen Schublade liegt.",
     "en_q":"A firearm is 'ready to use' within the meaning of the Weapons Act, ...",
     "en_a":"a) if it can be brought into contact immediately, i.e. with a few quick movements. b) if it is stored in a locked suitcase in the vehicle. c) if it is unloaded in the locked drawer.",
     "ru_q":"Огнестрельное оружие «готово к использованию» в смысле Закона об оружии ...",
     "ru_a":"a) если его можно привести в контакт немедленно, то есть несколькими быстрыми движениями. b) если он находится в запертом чемодане в транспортном средстве. c) если он выгружен в запертом ящике.",
     "c":"a"
  },
  {
     "id":"1.56",
     "de_q":"Wann ist eine Waffe „schussbereit“?",
     "de_a":"Wenn Sie geladen ist, d. h. dass Munition oder Geschosse in der Trommel, im in die Waffe eingefügten Magazin oder im Patronen- oder Geschosslager sind, auch wenn sie nicht gespannt ist.",
     "en_q":"When is a weapon 'ready to fire'?",
     "en_a":"When it is loaded i. H. that ammunition or projectiles are in the drum, in the magazine inserted in the weapon or in the cartridge or projectile chamber, even if it is not cocked.",
     "ru_q":"Когда оружие «готово к стрельбе»?",
     "ru_a":"Когда он загружен i. ЧАС. что боеприпасы или снаряды находятся в барабане, в магазине, вставленном в оружие, или в патроннике или патроннике, даже если он не взведен.",
     "c":"x"
  },
  {
     "id":"1.57",
     "de_q":"Wann ist eine Waffe „zugriffsbereit“ (im Sinne des WaffG)?",
     "de_a":"Wenn sie unmittelbar, also mit wenigen schnellen Handgriffen in Anschlag gebracht werden kann.",
     "en_q":"When is a weapon 'ready to use' (in the sense of the WaffG)?",
     "en_a":"If it can be brought to the stop immediately, i.e. with a few quick movements.",
     "ru_q":"Когда оружие «готово к использованию» (в смысле WaffG)?",
     "ru_a":"Если его можно остановить немедленно, то есть несколькими быстрыми движениями.",
     "c":"x"
  },
  {
     "id":"1.58",
     "de_q":"Wann ist eine Schusswaffe im Sinne des Waffengesetzes „schussbereit“?",
     "de_a":"a) Wenn sie griffbereit, aber ungeladen im Holster getragen wird. b) Wenn das Schlagstück / der Schlag bolzen bei entladener Waffe gespannt und entsichert ist. c) Wenn sie geladen ist.",
     "en_q":"When is a firearm “ready to fire” within the meaning of the Weapons Act?",
     "en_a":"a) When it is close at hand but carried unloaded in the holster. b) When the striker / striker is cocked and unlocked with the weapon unloaded. c) When it is loaded.",
     "ru_q":"Когда огнестрельное оружие «готово к стрельбе» по смыслу Закона об оружии?",
     "ru_a":"a) Когда он находится под рукой, но переносится в кобуре без груза. b) Когда ударник взведен и разблокирован при разряженном оружии. c) Когда он загружен.",
     "c":"c"
  },
  {
     "id":"1.59",
     "de_q":"Wann ist eine Waffe „schussbereit“ im Sinne des Waffengesetzes?",
     "de_a":"a) Wenn die Waffe geladen und gespannt ist. b) Wenn die Waffe geladen, aber entspannt und gesichert ist. c) Wenn ein gefülltes Magazin eingeführt ist. d) Wenn das gefüllte Magazin griffbereit liegt.",
     "en_q":"When is a weapon “ready to fire” within the meaning of the Weapons Act?",
     "en_a":"a) When the gun is loaded and cocked. b) When the gun is loaded, but relaxed and secured. c) When a full magazine is inserted. d) When the filled magazine is within reach.",
     "ru_q":"Когда оружие «готово к стрельбе» по смыслу Закона об оружии?",
     "ru_a":"a) Когда ружье заряжено и взведено. b) Когда ружье заряжено, но расслаблено и закреплено. c) Когда вставлен полный магазин. d) Когда заполненный магазин находится в пределах досягаемости.",
     "c":"abc"
  },
  {
     "id":"1.60",
     "de_q":"Wann ist eine Waffe „schussbereit“ im Sinne des Waffengesetzes?",
     "de_a":"a) Wenn sie ungeladen im Holster getragen wird. b) Wenn sie in einem verschlossenen Koffer liegt und sich eine Patrone im Patronenlager befindet. c) Wenn das Magazin in der Waffe mit Patronen gefüllt ist und die Waffe im unverschlossenen Handschuhfach eines PKW liegt.",
     "en_q":"When is a weapon “ready to fire” within the meaning of the Weapons Act?",
     "en_a":"a) When carried unloaded in the holster. b) When it is in a locked case and there is a cartridge in the chamber. c) When the magazine in the weapon is filled with cartridges and the weapon is in the unlocked glove compartment of a car.",
     "ru_q":"Когда оружие «готово к стрельбе» по смыслу Закона об оружии?",
     "ru_a":"a) При переноске в кобуре без груза. b) Когда он в закрытом корпусе и в патроннике есть патрон. c) Когда магазин оружия заполнен патронами, а оружие находится в незапертом бардачке автомобиля.",
     "c":"bc"
  },
  {
     "id":"1.61",
     "de_q":"Was bedeutet „schießen“ im Sinne des Waffengesetzes?",
     "de_a":"Im Sinne des WaffG schießt jemand, der mit einer Schusswaffe ein Geschoss durch einen Lauf verschießt, Kartuschenmunition abschießt, mit Patronen- oder Kartuschenmunition Reiz- oder andere Wirkstoffe verschießt oder pyrotechnische Munition verschießt.",
     "en_q":"What does “shoot” mean in the sense of the Weapons Act?",
     "en_a":"In terms of the WaffG, someone who shoots a projectile through a barrel with a firearm, shoots cartridge ammunition, shoots irritants or other active substances with cartridge or cartridge ammunition, or shoots pyrotechnic ammunition.",
     "ru_q":"Что означает «стрелять» в смысле Закона об оружии?",
     "ru_a":"В терминах WaffG, тот, кто стреляет снарядом через ствол из огнестрельного оружия, стреляет патронными патронами, стреляет раздражителями или другими активными веществами патронами или патронами или стреляет пиротехническими патронами.",
     "c":"x"
  },
  {
     "id":"1.62",
     "de_q":"Welche Erlaubnis berechtigt zum Schießen mit Schreckschuss-, Reiz stoff- und Signalwaffen (mit Zulasungszeichen PTB im Kreis) außer halb des eigenen befriedeten Besitztums?",
     "de_a":"a) Kleiner Waffenschein b) behördliche Schießerlaubnis c) Waffenbesitzkarte",
     "en_q":"Which permit entitles you to shoot with alarm guns, stimulant weapons and signal weapons (with the PTB approval mark in a circle) outside of your own pacified property?",
     "en_a":"a) Small gun license b) Official shooting license c) Gun license",
     "ru_q":"Какое разрешение дает вам право вести стрельбу из сигнального, стимулирующего и сигнального оружия (со знаком одобрения PTB в кружке) за пределами вашей умиротворенной собственности?",
     "ru_a":"a) Лицензия на стрелковое оружие b) Официальная лицензия на стрельбу c) Лицензия на стрелковое оружие",
     "c":"b"
  },
  {
     "id":"1.63",
     "de_q":"Was bedeutet für einen Sportschützen der Rechtsbegriff „Zu einem vom Bedürfnis umfassten Zweck oder im Zusammenhang damit“ in Bezug auf den Transport einer Schusswaffe?",
     "de_a":"a) Der Schütze darf die Waffe in der fremden Wohnung mit Einwilligung des Hausrechtsinhabers zu Schutzzwecken führen. b) Der Schütze transportiert seine de fekte Schusswaffe zur Reparatur zum Büchsenmacher. c) Die Schusswaffe wird am Wohnort des Schützen von ihm über mehrere Tage in einem Autotresor im Kofferraum des PKWs transportiert.",
     "en_q":"What does the legal term “for a purpose encompassed by a need or in connection therewith” mean for a marksman in relation to the transport of a firearm?",
     "en_a":"a) The shooter may carry the weapon in the foreign apartment with the consent of the owner of the property rights for protection purposes. b) The shooter transports his defective firearm to the gunsmith for repair. c) The firearm is transported by him for several days in a car safe in the trunk of the car at the place of residence of the shooter.",
     "ru_q":"Что означает для стрелка юридический термин «для цели, связанной с необходимостью или в связи с этим» применительно к транспортировке огнестрельного оружия?",
     "ru_a":"a) Стрелок может носить оружие в чужой квартире с согласия правообладателя в защитных целях. b) Стрелок отвозит свое неисправное огнестрельное оружие оружейнику для ремонта. c) Огнестрельное оружие перевозится им в течение нескольких суток в автомобильном сейфе в багажнике автомобиля по месту жительства стрелка.",
     "c":"b"
  },
  {
     "id":"1.64",
     "de_q":"Welche Voraussetzungen müssen gegeben sein, damit der Rechtsbegriff „sportliches Schießen“ erfüllt wird?",
     "de_a":"a) Sportliches Schießen liegt dann vor, wenn nach festen Regeln einer genehmigten Sportordnung geschossen wird. b) Sportliches Schießen liegt dann vor, wenn nach einer nicht genehmigten Sportordnung geschossen wird. c) Sportliches Schießen liegt dann vor, wenn man in einer Gruppe Paintball spielt.",
     "en_q":"What requirements must be met in order for the legal term “sport shooting” to be fulfilled?",
     "en_a":"a) Sporting shooting occurs when shooting is carried out in accordance with the fixed rules of an approved sporting order. b) Sporting shooting occurs when shooting in accordance with unapproved sporting regulations. c) Sporting shooting occurs when you play paintball in a group.",
     "ru_q":"Какие требования должны быть соблюдены, чтобы соблюдался юридический термин «спортивная стрельба»?",
     "ru_a":"a) Спортивная стрельба происходит, когда стрельба ведется в соответствии с установленными правилами утвержденного спортивного порядка. b) Спортивная стрельба происходит при стрельбе в соответствии с неутвержденными спортивными правилами. c) Спортивная стрельба происходит, когда вы играете в пейнтбол в группе.",
     "c":"a"
  },
  {
     "id":"1.65",
     "de_q":"In welchem zeitlichen Mindestabstand werden die Inhaber waffenrechtlicher Erlaubnisse erneut auf ihre Zuverlässigkeit und ihre persönliche Eignung geprüft?",
     "de_a":"Mindestens alle drei Jahre.",
     "en_q":"At what minimum time interval are the owners of legal weapons re-examined for their reliability and personal suitability?",
     "en_a":"At least every three years.",
     "ru_q":"Через какой минимальный промежуток времени проводится повторная проверка владельцев легального оружия на предмет его надежности и личной пригодности?",
     "ru_a":"По крайней мере, каждые три года.",
     "c":"x"
  },
  {
     "id":"1.66",
     "de_q":"Welche Voraussetzungen müssen Sie als Antragsteller für die Erteilung einer Waffenbesitzkarte erfüllen?",
     "de_a":"1. Ich muss ein Bedürfnis nachweisen. 2. Ich muss die persönliche Eignung besitzen. 3. Ich muss die erforderliche Zuverlässigkeit besitzen. 4. Ich muss die erforderliche Sachkunde nachweisen. 5. Ich muss das 18. Lebensjahr vollendet haben. (Beachte: Altersbeschränkungen bei Sportschützen) 6. Nachweise der sicheren Aufbewahrung für Schusswaffen.",
     "en_q":"As an applicant, what requirements do you have to meet in order to be issued with a gun license?",
     "en_a":"1. I have to prove a need. 2. I must be personally qualified. 3. I have to be reliable. 4. I have to prove that I have the necessary expertise. 5. I must have reached the age of 18. (Note: age restrictions for sport shooters) 6. Proof of safe storage for firearms.",
     "ru_q":"Как соискатель, каким требованиям вы должны соответствовать, чтобы получить лицензию на оружие?",
     "ru_a":"1. Я должен доказать необходимость. 2. Я должен иметь личную квалификацию. 3. Я должен быть надежным. 4. Я должен доказать, что обладаю необходимым опытом. 5. Мне должно быть 18 лет. (Примечание: возрастные ограничения для стрелков) 6. Доказательство безопасного хранения огнестрельного оружия.",
     "c":"x"
  },
  {
     "id":"1.67",
     "de_q":"Welche Angaben zu einer Waffe werden in einer Waffenbesitzkarte eintragen?",
     "de_a":"a) Waffenart, Bezeichnung der Munition oder des Kalibers, Hersteller- / Warenzeichen oder Marke, Modellbezeichnung, Herstellungsnummer und Tag des Überlassens, sowie der Name und die Anschrift des Überlassers. b) Waffenart, Kaliber, Hersteller- oder Warenzeichen, Beschusszeichen, Seriennummer und Tag des Überlassens, sowie der Name und die Personalausweisnummer des Überlassers. c) Waffenart, Kaliber, Hersteller- oder Warenzeichen, Nummer der Waffenherstellungserlaubnis und Tag des Überlassens, sowie der Name und die Waffenbesitzkartennummer des Überlassers.",
     "en_q":"What information about a weapon is entered in a weapon ownership card?",
     "en_a":"a) Type of weapon, designation of ammunition or caliber, manufacturer / trademark or brand, model designation, production number and date of release, as well as the name and address of the user. b) Type of weapon, caliber, manufacturer or trademark, proof mark, serial number and date of release, as well as the name and ID number of the user. c) Weapon type, caliber, manufacturer's or trademark, number of the weapon manufacturing license and the date of release, as well as the name and number of the weapon ownership card of the user.",
     "ru_q":"Какая информация об оружии заносится в карточку владения оружием?",
     "ru_a":"a) Тип оружия, обозначение боеприпасов или калибра, производитель / торговая марка или торговая марка, обозначение модели, заводской номер и дата выпуска, а также имя и адрес пользователя. b) Тип оружия, калибр, производитель или товарный знак, контрольный знак, серийный номер и дата выпуска, а также имя и идентификационный номер пользователя. c) Тип оружия, калибр, производитель или товарный знак, номер лицензии на производство оружия и дата выпуска, а также имя и номер карты владения оружием пользователя.",
     "c":"a"
  },
  {
     "id":"1.68",
     "de_q":"Für die Anerkennung eines Bedürfnisses zum Erwerb und Besitz von Schusswaffen (grüne Waffenbesitz karte) ist bei Sportschützen die Vorlage einer Bescheinigung des anerkannten Schießsportverbandes erforderlich, dem der Antragsteller durch seine Vereinsmitgliedschaft angehört. Die Bescheinigung muss ausweisen, dass ...",
     "de_a":"a) er seit mindestens 12 Monaten den Schießsport in einem Verein regelmäßig als Sportschütze betreibt. b) er seine Sammlung vervollständigen möchte. c) die Waffe für eine Disziplin nach der Sportordnung des Schießsportverbandes zugelassen und erforderlich ist.",
     "en_q":"In order to recognize a need to acquire and possess firearms (green weapon possession card), sport shooters must present a certificate from the recognized shooting sports association to which the applicant is a member as a result of his club membership. The certificate must show that ...",
     "en_a":"a) he has been a regular target shooter in a club for at least 12 months. b) he wants to complete his collection. c) the weapon is approved and required for a discipline according to the sports regulations of the shooting sports association.",
     "ru_q":"Чтобы признать необходимость приобретения и владения огнестрельным оружием (зеленая карта владения оружием), спортивные стрелки должны предоставить свидетельство признанной спортивной ассоциации стрелкового спорта, членом которой является заявитель в результате членства в клубе. В сертификате должно быть указано, что ...",
     "ru_a":"a) он регулярно стрелял по мишеням в клубе не менее 12 месяцев. b) он хочет пополнить свою коллекцию. c) оружие одобрено и требуется для использования в дисциплине в соответствии со спортивным регламентом ассоциации стрелкового спорта.",
     "c":"ac"
  },
  {
     "id":"1.69",
     "de_q":"Wann wird in der Regel eine waffenrechtliche Erlaubnis von der Erlaubnisbehörde widerrufen?",
     "de_a":"a) Wenn der Inhaber nicht mehr zuverlässig im Sinne des Waffengesetzes ist. b) Wenn der Inhaber kein Bedürfnis mehr nachweisen kann. c) Wenn der Inhaber seinen Wohnort in ein anderes Bundesland verlegt.",
     "en_q":"When is a gun license usually revoked by the licensing authority?",
     "en_a":"a) If the owner is no longer reliable within the meaning of the Weapons Act. b) If the owner can no longer prove a need. c) If the owner moves his place of residence to another federal state.",
     "ru_q":"Когда лицензирующий орган обычно аннулирует лицензию на оружие?",
     "ru_a":"a) Если владелец больше не является надежным в значении Закона об оружии. b) Если владелец больше не может доказать необходимость. c) Если собственник переезжает в другую федеральную землю.",
     "c":"ab"
  },
  {
     "id":"1.70",
     "de_q":"Welche Eintragungen sieht die grüne Waffenbesitzkarte zum Erwerb einer Schusswaffe vor?",
     "de_a":"Laufende Nummer, Art, Bezeichnung der Munition oder des Kalibers, Dauer der Erwerbsberechtigung und Dienstsiegel.",
     "en_q":"What entries does the green gun ownership card allow for the acquisition of a firearm?",
     "en_a":"Serial number, type, designation of the ammunition or the caliber, duration of the purchase authorization and official seal.",
     "ru_q":"Какие записи дает зеленая карта владения оружием для приобретения огнестрельного оружия?",
     "ru_a":"Серийный номер, тип, обозначение боеприпасов или калибра, срок действия разрешения на покупку и официальная печать.",
     "c":"x"
  },
  {
     "id":"1.71",
     "de_q":"Wie lange gilt grundsätzlich eine Waffenbesitzkarte?",
     "de_a":"Unbefristet.",
     "en_q":"How long is a gun ownership card valid?",
     "en_a":"Indefinitely.",
     "ru_q":"Как долго действительна карта владения оружием?",
     "ru_a":"Бесконечно.",
     "c":"x"
  },
  {
     "id":"1.72",
     "de_q":"Kann eine Waffenbesitzkarte auch nachträglich mit Auflagen versehen werden?",
     "de_a":"Ja.",
     "en_q":"Can conditions be added to a gun ownership card at a later date?",
     "en_a":"Yes.",
     "ru_q":"Могут ли условия быть добавлены к карточке владения оружием позже?",
     "ru_a":"да.",
     "c":"x"
  },
  {
     "id":"1.73",
     "de_q":"Kann eine Waffenbesitzkarte auch einem Schützenverein erteilt werden?",
     "de_a":"a) Ja, wenn es sich um einen eingetragenen Verein handelt. b) Nein. c) Ja, jedem Verein.",
     "en_q":"Can a gun ownership card also be issued to a shooting club?",
     "en_a":"a) Yes, if it is a registered club. b) No. c) Yes, every club.",
     "ru_q":"Можно ли выдать стрелковому клубу карту владения оружием?",
     "ru_a":"a) Да, если это зарегистрированный клуб. b) Нет. c) Да, в каждом клубе.",
     "c":"a"
  },
  {
     "id":"1.74",
     "de_q":"Wie lange gilt üblicherweise ein Voreintrag zum Erwerb einer Schusswaffe in einer grünen Waffenbesitzkarte?",
     "de_a":"a) 6 Monate b) 1 Jahr c) unbefristet",
     "en_q":"How long is a pre-entry for the acquisition of a firearm usually valid in a green gun ownership card?",
     "en_a":"a) 6 months b) 1 year c) unlimited",
     "ru_q":"Как долго обычно действует предварительная запись на приобретение огнестрельного оружия в зеленой карточке владения оружием?",
     "ru_a":"a) 6 месяцев b) 1 год c) неограниченно",
     "c":"b"
  },
  {
     "id":"1.75",
     "de_q":"Wie lange gilt der Kleine Waffenschein?",
     "de_a":"a) 1 Jahr b) 3 Jahre c) unbefristet",
     "en_q":"How long is the small gun license valid?",
     "en_a":"a) 1 year b) 3 years c) unlimited",
     "ru_q":"Как долго действует лицензия на стрелковое оружие?",
     "ru_a":"a) 1 год b) 3 года c) неограниченно",
     "c":"c"
  },
  {
     "id":"1.76",
     "de_q":"Für wie lange wird ein Waffenschein höchstens erteilt?",
     "de_a":"a) 1 Jahr b) 3 Jahre c) 5 Jahre",
     "en_q":"How long is a gun license issued at most?",
     "en_a":"a) 1 year b) 3 years c) 5 years",
     "ru_q":"Максимальный срок выдачи лицензии на оружие?",
     "ru_a":"a) 1 год b) 3 года c) 5 лет",
     "c":"b"
  },
  {
     "id":"1.77",
     "de_q":"Was ist Voraussetzung für den Erwerb von Schreckschuss-, Reizstoff- und Signalwaffen, deren Erwerb und Besitz erlaubnisfrei ist?",
     "de_a":"Vollendung des 18. Lebensjahres.",
     "en_q":"What is the prerequisite for the acquisition of alarm weapons, irritant weapons and signal weapons, the acquisition and possession of which do not require a permit?",
     "en_a":"Completion of the 18th year of life.",
     "ru_q":"Каковы предпосылки для приобретения сигнального оружия, оружия раздражающего действия и сигнального оружия, на приобретение и хранение которых не требуется разрешения?",
     "ru_a":"Завершение 18-го года жизни.",
     "c":"x"
  },
  {
     "id":"1.78",
     "de_q":"Wie lange müssen Sie mindestens als Mitglied eines schießsportlichen Vereins geschossen haben, um als Sportschütze der Behörde ein Bedürfnis zum Erwerb einer Schusswaffe nachweisen zu können?",
     "de_a":"a) mindestens 6 Monate b) mindestens 12 Monate c) mindestens 18 Monate",
     "en_q":"How long must you have fired at least as a member of a shooting club in order to be able to prove to the authorities that you need to acquire a firearm as a marksman?",
     "en_a":"a) at least 6 months b) at least 12 months c) at least 18 months",
     "ru_q":"Как долго вы должны стрелять хотя бы в качестве члена стрелкового клуба, чтобы иметь возможность доказать властям, что вам необходимо приобрести огнестрельное оружие в качестве стрелка?",
     "ru_a":"a) не менее 6 месяцев b) не менее 12 месяцев c) не менее 18 месяцев",
     "c":"b"
  },
  {
     "id":"1.79",
     "de_q":"Wie alt müssen Sie als Sportschütze mindestens sein, um eine Büchse (.308Win) ohne amts- oder fachärztliches oder fachpsychologisches Zeugnis dauerhaft erwerben zu können?",
     "de_a":"a) 21 Jahre b) 25 Jahre c) 27 Jahre",
     "en_q":"How old do you have to be at least as a marksman to be able to permanently acquire a rifle (.308Win) without an official or specialist doctor or specialist psychological certificate?",
     "en_a":"a) 21 years b) 25 years c) 27 years",
     "ru_q":"Сколько вам должно быть лет как стрелку, чтобы иметь возможность постоянно приобретать винтовку (.308Win) без официального или специализированного врача или специального психологического сертификата?",
     "ru_a":"a) 21 год b) 25 лет c) 27 лет",
     "c":"b"
  },
  {
     "id":"1.80",
     "de_q":"Welches Lebensjahr müssen Sie vollendet haben, um Einzellader Langwaffen mit glatten Läufen im Kaliber 12 oder kleiner als Sport schütze dauerhaft erwerben zu dürfen?",
     "de_a":"a) 18 Jahre b) 21 Jahre c) 25 Jahre",
     "en_q":"How old do you have to be to be able to permanently purchase single-shot long guns with smooth barrels in caliber 12 or smaller as a sport shooter?",
     "en_a":"a) 18 years b) 21 years c) 25 years",
     "ru_q":"Сколько вам должно быть лет, чтобы иметь возможность постоянно покупать однозарядное длинноствольное ружье с гладким стволом калибра 12 или меньше в качестве спортивного стрелка?",
     "ru_a":"a) 18 лет b) 21 год c) 25 лет",
     "c":"a"
  },
  {
     "id":"1.81",
     "de_q":"Welche Voraussetzungen müssen zur Erteilung einer waffenrechtlichen Erlaubnis für einen Revolver .44MAGNUM bei Sportschützen gegeben sein?",
     "de_a":"1. Vollendung des 21. Lebensjahres 2. Nachweis der Sachkunde 3. Zuverlässigkeit 4. Persönliche Eignung, bei Personen vor Vollendung des 25. Lebensjahres nachgewiesen durch ein amts- oder fachärztlichen oder fachpsychologischen Zeugnis 5. Nachweis eines Bedürfnisses 6. Nachweis der sicheren Aufbewahrung von Schusswaffen",
     "en_q":"What are the prerequisites for a gun license for a .44MAGNUM revolver for sport shooters?",
     "en_a":"1. Completion of the 21st year of life 2. Proof of expertise 3. Reliability 4. Personal suitability, for persons under 25 years of age proven by an official or specialist doctor or specialist psychological certificate 5. Proof of a need 6. Proof of safe storage of firearms",
     "ru_q":"Каковы предварительные условия для получения лицензии на револьвер .44MAGNUM для спортивных стрелков?",
     "ru_a":"1. Завершение 21-го года жизни 2. Подтверждение опыта 3. Надежность 4. Личные способности для лиц моложе 25 лет, подтвержденные официальным или специализированным медицинским или психологическим сертификатом 5. Доказательство необходимости 6. Подтверждение безопасное хранение огнестрельного оружия",
     "c":"x"
  },
  {
     "id":"1.82",
     "de_q":"Das Fortbestehen des Bedürfnisses wird nach erstmaliger Erteilung einer waffenrechtlichen Erlaubnis von der Behörde geprüft. Welche Frist hat der Gesetzgeber hier vorgesehen?",
     "de_a":"Drei Jahre",
     "en_q":"The continued existence of the need will be checked by the authority after a weapon law permit has been issued for the first time. What deadline has the legislator stipulated here?",
     "en_a":"Three years",
     "ru_q":"Сохранение необходимости будет проверено властями после того, как разрешение на оружие будет выдано в первый раз. Какой срок здесь указал законодатель?",
     "ru_a":"Три года",
     "c":"x"
  },
  {
     "id":"1.83",
     "de_q":"Das Fortbestehen des Bedürfnisses wird drei Jahre nach der erstmaligen Erteilung einer waffenrechtlichen Erlaubnis von der Behörde geprüft. Ist dies die einzige Prüfung des Fortbestehens des Bedürfnisses?",
     "de_a":"Nein, das Fortbestehen des Bedürfnisses kann von der zuständigen Behörde auch nach diesem Zeitraum geprüft werden.",
     "en_q":"The continued existence of the need will be checked by the authority three years after the initial issue of a gun license. Is this the only test of persistence of the need?",
     "en_a":"No, the competent authority can also check whether the need continues after this period.",
     "ru_q":"Сохранение необходимости будет проверено властями через три года после первоначальной выдачи лицензии на оружие. Это единственное испытание на настойчивость потребности?",
     "ru_a":"Нет, компетентный орган также может проверить, сохраняется ли потребность после этого периода.",
     "c":"x"
  },
  {
     "id":"1.84",
     "de_q":"Welche weiteren Voraussetzungen müssen Jugendliche, die das 16. Lebensjahr vollendet haben und unter 18 Jahren sind, erfüllen, damit sie mit WBK-pflichtigen Waffen für Randfeuerpatronen bis zu einem Kaliber von 5,6 mm lfB (.22l.r.) und einer maximalen Mündungsenergie von 200 Joule schießen dürfen?",
     "de_a":"Schriftliches oder elektronisches Einverständnis des Sorgeberechtigten oder dessen/deren Anwesenheit.",
     "en_q":"What other requirements must adolescents who have reached the age of 16 and are under the age of 18 meet in order to be able to use weapons that are subject to WBK for rim fire cartridges up to a caliber of 5.6 mm barrel width (.22 l. R.) And shooting with a maximum muzzle energy of 200 joules?",
     "en_a":"Written or electronic consent of the custodian or his / her presence.",
     "ru_q":"Какие еще требования должны выполнять подростки, достигшие 16 лет и моложе 18 лет, чтобы иметь возможность использовать оружие, подпадающее под действие WBK, для патронов кольцевого воспламенения до калибра шириной ствола 5,6 мм (0,22 л. Р.) А стрельба с максимальной дульной энергией 200 джоулей?",
     "ru_a":"Письменное или электронное согласие хранителя или его присутствие.",
     "c":"x"
  },
  {
     "id":"1.85",
     "de_q":"Welche weiteren Voraussetzungen müssen erfüllt sein, damit Jugendliche unter 16 Jahren mit WBK pflichtigen Einzellader-Flinten bis zu dem Kaliber 12 schießen dürfen?",
     "de_a":"Schriftliches oder elektronisches Einverständnis des Sorgeberechtigten und dessen Anwesenheit oder die Anwesenheit einer verantwortlichen und zur Kinder- und Jugendarbeit für das Schießen geeigneten Aufsichtsperson.",
     "en_q":"What other requirements must be met so that young people under the age of 16 are allowed to shoot single-shot shotguns up to caliber 12 that are subject to WBK?",
     "en_a":"Written or electronic consent of the guardian and his or her presence or the presence of a responsible supervisor who is suitable for child and youth work for the shooting.",
     "ru_q":"Какие еще требования должны быть выполнены, чтобы молодые люди в возрасте до 16 лет могли стрелять из однозарядного ружья до калибра 12, подпадающего под действие WBK?",
     "ru_a":"Письменное или электронное согласие опекуна и его или ее присутствие или присутствие ответственного руководителя, который подходит для детской и молодежной работы на съемках.",
     "c":"x"
  },
  {
     "id":"1.86",
     "de_q":"Was sind „Anscheinswaffen“ im Sin ne des Waffengesetzes?",
     "de_a":"a) Schusswaffen, die ihrer äußeren Form nach im Gesamterscheinungsbild den Anschein von Feuerwaffen (Anlage 1 Abschnitt 1 Unterabschnitt 1 Nr. 2.1 WaffG) hervorrufen und bei denen zum Antrieb der Geschosse keine heißen Gase verwendet werden. b) Nachbildungen von Schusswaffen mit dem Aussehen der o.g. Schusswaffen c) unbrauchbar gemachte Schusswaffen mit dem Aussehen der o.g. Schusswaffen",
     "en_q":"What are “apparent weapons” in the sense of the Weapons Act?",
     "en_a":"a) Firearms whose overall appearance gives the appearance of firearms (Appendix 1, Section 1, Subsection 1, No. 2.1 WaffG) and in which no hot gases are used to propel the projectiles. b) Replicas of firearms with the appearance of the firearms mentioned above c) Firearms that have been rendered unusable with the appearance of the firearms mentioned above",
     "ru_q":"Что такое «очевидное оружие» в смысле Закона об оружии?",
     "ru_a":"a) Огнестрельное оружие, внешний вид которого напоминает огнестрельное оружие (Приложение 1, Раздел 1, Подраздел 1, № 2.1 WaffG) и в котором не используются горячие газы для запуска снарядов. b) Копии огнестрельного оружия с внешним видом огнестрельного оружия, упомянутого выше. c) Огнестрельное оружие, которое было приведено в негодность с появлением вышеупомянутого огнестрельного оружия.",
     "c":"abc"
  },
  {
     "id":"1.87",
     "de_q":"Welcher der genannten Gegenstände ist eine Anscheinswaffe im Sinne des Waffengesetzes?",
     "de_a":"a) Sportgewehr .223 Remington, das wie ein Sturmgewehr aussieht ohne Zulassungszeichen b) Schreckschuss-, Reizstoff- und Signalpistole mit Zulassungszeichen „PTB im Kreis“ c) Spielzeugpistole, die äußerlich einer echten Pistole im Kaliber 9mm Luger zum Verwechseln ähnlich sieht",
     "en_q":"Which of the items mentioned is a pretend weapon within the meaning of the Weapons Act?",
     "en_a":"a) Sports rifle .223 Remington, which looks like an assault rifle without approval mark b) Blank, irritant and signal pistol with approval mark “PTB in a circle” c) Toy pistol that looks very similar to a real pistol in caliber 9mm Luger",
     "ru_q":"Какой из упомянутых предметов является воображаемым оружием по смыслу Закона об оружии?",
     "ru_a":"a) Спортивная винтовка .223 Remington, которая выглядит как штурмовая винтовка без знака утверждения b) Пустой, раздражающий и сигнальный пистолет с отметкой «ПТБ в круге» c) Игрушечный пистолет, очень похожий на настоящий пистолет калибра 9 мм Luger",
     "c":"c"
  },
  {
     "id":"1.88",
     "de_q":"Welcher der genannten Gegenstände ist eine Anscheinswaffe im Sinne des Waffengesetzes?",
     "de_a":"a) Messer mit einer 14 cm langen, aber nur einseitig geschliffenen Klinge. b) Nach waffenrechtlichen Vorschriften unbrauchbar gemachtes altes Armeegewehr mit Zulassungszeichen „Ortszeichen in der Raute“. c) Stockflinte (als Spazierstock getarnte Flinte, früher angeblich oft von Wilderern benutzt)",
     "en_q":"Which of the items mentioned is a pretend weapon within the meaning of the Weapons Act?",
     "en_a":"a) Knife with a 14 cm long blade that is only sharpened on one side. b) Old army rifle made unusable in accordance with the provisions of the law on weapons with the approval mark “location sign in the diamond”. c) Stock shotgun (shotgun disguised as a walking stick, allegedly often used by poachers in the past)",
     "ru_q":"Какой из упомянутых предметов является воображаемым оружием по смыслу Закона об оружии?",
     "ru_a":"a) Нож с лезвием длиной 14 см, заточенным только с одной стороны. b) Старая армейская винтовка, приведенная в негодность в соответствии с положениями закона об оружии, с отметкой официального утверждения «Местонахождение знака в ромбе». c) Стандартное ружье (ружье, замаскированное под трость, которое, как утверждается, в прошлом часто использовалось браконьерами)",
     "c":"b"
  },
  {
     "id":"1.89",
     "de_q":"Welche Ausnahmen vom Verbot des Führens von Anscheinswaffen gibt es?",
     "de_a":"a) Anscheinswaffen dürfen an Silvester geführt werden. b) Anscheinswaffen dürfen geführt werden, bei der Verwendung bei Foto-, Film oder Fernsehaufnahmen oder bei Theateraufführungen. c) Anscheinswaffen dürfen immer verdeckt geführt werden.",
     "en_q":"What are the exceptions to the ban on carrying fake weapons?",
     "en_a":"a) Fake weapons may be wielded on New Year's Eve. b) Apparent weapons may be wielded when used for photo, film or television recordings or for theater performances. c) Apparent weapons may always be kept concealed.",
     "ru_q":"Какие исключения из запрета на ношение поддельного оружия?",
     "ru_a":"a) В канун Нового года можно носить фальшивое оружие. b) Кажущееся оружие может использоваться при использовании для фото-, кино- или телепрограмм или для театральных представлений. c) Видимое оружие всегда можно скрыть.",
     "c":"b"
  },
  {
     "id":"1.90",
     "de_q":"Wann wird eine Schusswaffe im Sin ne des Waffengesetzes „bearbeitet“?",
     "de_a":"a) Der Schaft eines Gewehres wird auf ein für den Schützen passendes Maß abgefräst. b) Die gebrochene Schließfeder einer Pistole wird ausgetauscht. c) Der Lauf eines Revolvers wird von einem befreundeten Schlosser auf 4 Zoll verkürzt.",
     "en_q":"When is a firearm 'processed' in accordance with the Weapons Act?",
     "en_a":"a) The stock of a rifle is milled to a size suitable for the shooter. b) The broken recoil spring of a pistol is replaced. c) The barrel of a revolver is shortened to 4 inches by a locksmith friend.",
     "ru_q":"Когда огнестрельное оружие «обрабатывается» в соответствии с Законом об оружии?",
     "ru_a":"a) Ложа винтовки отшлифована до размера, подходящего для стрелка. b) Заменена сломанная возвратная пружина пистолета. c) Ствол револьвера укорочен до 4 дюймов другом слесаря.",
     "c":"c"
  },
  {
     "id":"2.01",
     "de_q":"Was muss der Erwerbsberechtigte nach dem Kauf einer Schusswaffe von einer Privatperson/Händler veranlassen?",
     "de_a":"a) Er muss einen lizenzierten Waffenhändler einschalten. b) Er muss den Kauf der zuständigen Behörde unter Vorlage des Kaufvertrages mitteilen. c) Er muss innerhalb von zwei Wochen bei der zuständigen Behörde den Erwerb schriftlich oder elektronisch anzeigen und seine Waffenbesitzkarte zur Eintragung vorlegen.",
     "en_q":"What does the person entitled to purchase have to do after buying a firearm from a private person / dealer?",
     "en_a":"a) He must employ a licensed arms dealer. b) He must notify the competent authority of the purchase by submitting the purchase contract. c) He must notify the competent authority of the acquisition in writing or electronically within two weeks and submit his weapon possession card for entry.",
     "ru_q":"Что должно делать лицо, имеющее право на покупку, после покупки огнестрельного оружия у частного лица / дилера?",
     "ru_a":"a) Он должен нанять лицензированного торговца оружием. b) Он должен уведомить компетентный орган о покупке, представив договор купли-продажи. c) Он должен уведомить компетентный орган о приобретении в письменной или электронной форме в течение двух недель и представить свою карточку владения оружием для въезда.",
     "c":"c"
  },
  {
     "id":"2.02",
     "de_q":"Was muss ein Sportschütze nach dem dauerhaften Erwerb einer Waffe von einem anderen Sportschützen veranlassen?",
     "de_a":"a) Nichts b) Er muss den Erwerb innerhalb von zwei Wochen schriftlich oder elektronisch anzeigen und seine Waffenbesitzkarte bei der zuständigen Behörde vorlegen. c) Beide Waffenbesitzkarten sofort der zuständigen Behörde vorlegen.",
     "en_q":"What does a marksman have to do after permanently acquiring a weapon from another marksman?",
     "en_a":"a) Nothing b) He must notify the acquisition in writing or electronically within two weeks and submit his weapon possession card to the competent authority. c) Submit both gun ownership cards to the competent authority immediately.",
     "ru_q":"Что должен делать стрелок после того, как навсегда получил оружие у другого стрелка?",
     "ru_a":"a) Ничего подобного. b) Он должен уведомить о приобретении в письменной или электронной форме в течение двух недель и представить свою карточку владения оружием в компетентный орган. c) Немедленно отправьте обе карты владения оружием в компетентный орган.",
     "c":"b"
  },
  {
     "id":"2.03",
     "de_q":"Innerhalb welcher Zeit haben Sie den Erwerb, bzw. den Verkauf einer erlaubnispflichtigen Waffe anzuzeigen?",
     "de_a":"a) binnen einer Woche b) binnen zwei Wochen c) binnen eines Monats",
     "en_q":"How long do you have to report the purchase or sale of a weapon that requires a license?",
     "en_a":"a) within one week b) within two weeks c) within one month",
     "ru_q":"Как долго вы должны сообщать о покупке или продаже оружия, для которого требуется лицензия?",
     "ru_a":"a) в течение одной недели b) в течение двух недель c) в течение одного месяца",
     "c":"b"
  },
  {
     "id":"2.04",
     "de_q":"Welcher Sportschütze muss für die erstmalige Erteilung einer Erlaubnis zum Erwerb und Besitz von Schusswaffen ein amts- oder fachärztliches oder fachpsychologisches Zeugnis über seine geistige Eignung vorlegen?",
     "de_a":"a) Ein 18-jähriger, der ein Kleinkalibergewehr erwerben möchte. b) Ein 19-jähriger, der eine Doppelflinte im Kaliber 12/70 erwerben möchte. c) Ein 22-jähriger, der einen großkalibrigen Revolver erwerben möchte.",
     "en_q":"Which sport shooter has to submit an official or specialist doctor or specialist psychological certificate about his mental aptitude for the initial issue of a license to acquire and possess firearms?",
     "en_a":"a) An 18 year old who wants to purchase a small bore rifle. b) A 19-year-old who wants to purchase a 12/70 caliber side-by-side shotgun. c) A 22 year old who wants to purchase a large caliber revolver.",
     "ru_q":"Какой спортивный стрелок должен предоставить официальное или специализированное свидетельство врача или психолога-психолога о психических способностях для первоначальной выдачи лицензии на приобретение огнестрельного оружия и владение им?",
     "ru_a":"a) 18-летний подросток, желающий приобрести малокалиберную винтовку. b) 19-летний парень, желающий приобрести дробовик с параллельным расположением стволов 12/70 калибра. c) 22-летний мужчина, желающий приобрести револьвер большого калибра.",
     "c":"c"
  },
  {
     "id":"2.05",
     "de_q":"Welche Erlaubnispapiere berechtigen auch zum Erwerb von Einzellader Langwaffen?",
     "de_a":"a) Waffenschein b) Jagdschein c) Europäischer Feuerwaffenpass",
     "en_q":"Which permit documents also entitle the holder to purchase single-shot long guns?",
     "en_a":"a) Gun license b) Hunting license c) European firearms pass",
     "ru_q":"Какие разрешительные документы также дают право на приобретение однозарядного длинноствольного оружия?",
     "ru_a":"a) Лицензия на оружие b) Лицензия на охоту c) Европейский пропуск на огнестрельное оружие",
     "c":"b"
  },
  {
     "id":"2.06",
     "de_q":"Welche Erlaubnispapiere berechtigen auch zum Erwerb von Einzellader Langwaffen?",
     "de_a":"a) Sportschützen-WBK (gelbe WBK) (ohne Voreintrag) b) allgemeine WBK -grün- (ohne Voreintrag) c) Waffenhandelserlaubnis (uneingeschränkt)",
     "en_q":"Which permit documents also entitle the holder to purchase single-shot long guns?",
     "en_a":"a) Sportschützen-WBK (yellow WBK) (without pre-entry) b) General WBK -green- (without pre-entry) c) Arms trading license (unrestricted)",
     "ru_q":"Какие разрешительные документы также дают право на приобретение однозарядного длинноствольного оружия?",
     "ru_a":"a) Sportschützen-WBK (желтый WBK) (без предварительной записи) b) General WBK -green- (без предварительной записи) c) Лицензия на торговлю оружием (без ограничений)",
     "c":"a"
  },
  {
     "id":"2.07",
     "de_q":"Was ist eine Erwerbsberechtigung für eine einläufige Einzellader-Kurzwaffe (Kleinkaliber-Sportpistole)?",
     "de_a":"a) Waffenschein b) Waffenbesitzkarte für Sportschützen (gelbe WBK) c) Waffenerwerbsschein",
     "en_q":"What is a purchase authorization for a single-barreled handgun (small-caliber sport pistol)?",
     "en_a":"a) Gun license b) Gun license for sport shooters (yellow WBK) c) Gun acquisition license",
     "ru_q":"Что такое разрешение на покупку одноствольного пистолета (спортивного малокалиберного пистолета)?",
     "ru_a":"a) Лицензия на оружие b) Лицензия на оружие для спортивных стрелков (желтый WBK) c) Лицензия на приобретение оружия",
     "c":"b"
  },
  {
     "id":"2.08",
     "de_q":"Welche Erlaubnis ist zum Erwerb einer halbautomatischen Pistole .32 S&W erforderlich?",
     "de_a":"a) Waffenschein b) Waffenbesitzkarte für Sportschützen c) Waffenbesitzkarte mit Erwerbsberechtigung (Voreintrag)",
     "en_q":"What license is required to purchase a .32 S&W semi-automatic pistol?",
     "en_a":"a) Gun license b) Gun ownership card for sport shooters c) Gun ownership card with purchase authorization (pre-entry)",
     "ru_q":"Какая лицензия требуется для покупки полуавтоматического пистолета .32 S&W?",
     "ru_a":"a) Лицензия на оружие b) Карточка владения оружием для стрелков c) Карточка владения оружием с разрешением на покупку (предварительная запись)",
     "c":"c"
  },
  {
     "id":"2.09",
     "de_q":"Beim Erwerb einer erlaubnispflichtigen Schusswaffe von einer Privatperson durch den Erwerbsberechtigten ist ...",
     "de_a":"a) der Erwerb der Waffe innerhalb eines Jahres der zuständigen Behörde anzuzeigen und die WBK zur Eintragung vorzulegen. b) der Erwerb der Waffe innerhalb von vier Wochen der zuständigen Behörde anzuzeigen und die WBK zur Eintragung vorzulegen. c) der Erwerb der Waffe innerhalb von zwei Wochen der zuständigen Behör de anzuzeigen und die WBK zur Eintragung vorzulegen.",
     "en_q":"When purchasing a firearm from a private person that requires a permit, the authorized person is ...",
     "en_a":"a) notify the competent authority of the acquisition of the weapon within one year and submit it to the WBK for registration. b) notify the competent authority of the acquisition of the weapon within four weeks and submit it to the WBK for registration. c) notify the competent authority of the acquisition of the weapon within two weeks and submit it to the WBK for registration.",
     "ru_q":"При покупке огнестрельного оружия у частного лица, требующего разрешения, уполномоченным лицом является ...",
     "ru_a":"a) уведомить компетентный орган о приобретении оружия в течение одного года и представить его в WBK для регистрации. b) уведомить компетентный орган о приобретении оружия в течение четырех недель и представить его в WBK для регистрации. c) уведомить компетентный орган о приобретении оружия в течение двух недель и представить его в WBK для регистрации.",
     "c":"c"
  },
  {
     "id":"2.10",
     "de_q":"Bei Abhandenkommen der Waffenbesitzkarte ist zu benachrichtigen?",
     "de_a":"a) Erlaubnisbehörde b) Deutscher Schützenbund c) Bundeszentralregister",
     "en_q":"Should the weapon possession card be lost?",
     "en_a":"a) Licensing authority b) Deutscher Schützenbund c) Federal Central Register",
     "ru_q":"Следует ли потерять карту владения оружием?",
     "ru_a":"a) Лицензирующий орган b) Deutscher Schützenbund c) Федеральный центральный регистр",
     "c":"a"
  },
  {
     "id":"2.11",
     "de_q":"Was ist zu tun, wenn erlaubnispflichtige Waffen oder Munition abhanden kommen?",
     "de_a":"a) Unverzüglich den Verlust der zuständigen Waffenbehörde melden. b) Innerhalb eines Monats den Verlust der zuständigen Behörde melden. c) Eine Verlustanzeige bei der zuständigen Polizeidienststelle aufgeben.",
     "en_q":"What should be done if weapons or ammunition that require a license are lost?",
     "en_a":"a) Immediately report the loss to the responsible weapons authority. b) Report the loss to the competent authority within one month. c) Submit a loss report to the responsible police station.",
     "ru_q":"Что делать, если утеряно оружие или боеприпасы, требующие лицензии?",
     "ru_a":"a) Немедленно сообщите об утере в ответственный орган по оружию. b) Сообщите об убытках в компетентный орган в течение одного месяца. c) Отправьте отчет о потере в соответствующий полицейский участок.",
     "c":"a"
  },
  {
     "id":"2.12",
     "de_q":"Was ist zu tun, wenn Erlaubnisurkunden abhanden kommen?",
     "de_a":"a) Das Abhandenkommen ist unverzüglich der zuständigen Behörde anzuzeigen. b) Eine Ersatzausfertigung ist zu beantragen. c) Solange das Dokument nicht genutzt wird ist nichts weiter zu veranlassen.",
     "en_q":"What should I do if the permit documents are lost?",
     "en_a":"a) The loss must be reported to the competent authority immediately. b) A replacement copy must be requested. c) As long as the document is not being used, nothing needs to be done.",
     "ru_q":"Что делать, если разрешительные документы утеряны?",
     "ru_a":"a) Об утере необходимо немедленно сообщить в компетентный орган b) Необходимо запросить заменяющую копию. c) Пока документ не используется, ничего делать не нужно.",
     "c":"a"
  },
  {
     "id":"2.13",
     "de_q":"Was ist nach Verlust einer erlaubnispflichtigen Schusswaffe oder einer Waffenbesitzkarte zu veranlassen?",
     "de_a":"a) Der Verlust ist unverzüglich der zu ständigen Behörde mitzuteilen. b) Die Versicherung ist umgehend in Kenntnis zu setzen, damit diese die Polizei verständigen und alle weiteren Maßnahmen einleiten kann. c) Sämtliche denkbaren Maßnahmen zur Wiedererlangung der Schusswaffe und der WBK sind einzuleiten.",
     "en_q":"What should I do after losing a gun that requires a license or a gun ownership card?",
     "en_a":"a) The loss must be reported to the competent authority immediately. b) The insurance company must be informed immediately so that it can inform the police and take all further measures. c) All conceivable measures to regain the firearm and the WBK are to be initiated.",
     "ru_q":"Что мне делать после потери оружия, требующего лицензии или карты владения оружием?",
     "ru_a":"a) О потере необходимо немедленно сообщить в компетентный орган. b) Страховая компания должна быть проинформирована немедленно, чтобы она могла проинформировать полицию и принять все дальнейшие меры. c) Все мыслимые меры по возвращению огнестрельного оружия и WBK должны быть приняты.",
     "c":"a"
  },
  {
     "id":"2.14",
     "de_q":"Sind Sie bezüglich Ihrer Schusswaffen der zuständigen Behörde gegenüber in begründeten Fällen auskunftspflichtig?",
     "de_a":"a) Nein, nur wenn gegen mich ein Verfahren eingeleitet wurde. b) Ja c) Nein, nur bei Fragen zur Aufbewahrung.",
     "en_q":"Do you have to provide information about your firearms to the competent authority in justified cases?",
     "en_a":"a) No, only if proceedings have been initiated against me. b) Yes c) No, only for questions about storage.",
     "ru_q":"Обязательно ли в обоснованных случаях предоставлять компетентному органу информацию о своем огнестрельном оружии?",
     "ru_a":"a) Нет, только если против меня возбуждено дело. b) Да c) Нет, только по вопросам хранения.",
     "c":"b"
  },
  {
     "id":"2.15",
     "de_q":"Kann die zuständige Behörde die Vorlage von erlaubnispflichtigen Schusswaffen, Munition und Erlaubnisscheinen zur Prüfung verlangen?",
     "de_a":"a) Nein, solange Waffenbesitzkarte und Munitionserwerbschein gültig sind. b) Ja, nur im Rahmen eines Strafverfahrens. c) Ja, aus begründetem Anlass.",
     "en_q":"Can the competent authority require firearms, ammunition and permits that require a permit to be presented for inspection?",
     "en_a":"a) No, as long as the gun ownership card and ammunition purchase certificate are valid. b) Yes, only in the context of criminal proceedings. c) Yes, for justified reasons.",
     "ru_q":"Может ли компетентный орган потребовать предъявления огнестрельного оружия, боеприпасов и разрешений, требующих разрешения, для проверки?",
     "ru_a":"a) Нет, пока действительны карточка владения оружием и свидетельство о покупке боеприпасов. b) Да, только в рамках уголовного производства. c) Да, по уважительным причинам.",
     "c":"c"
  },
  {
     "id":"2.16",
     "de_q":"Für welche Inhaber waffenrechtlicher Erlaubnisse ist das Bundesverwaltungsamt sachlich unter anderem zu ständig?",
     "de_a":"a) Für Deutsche im Sinne des Artikels 116 des Grundgesetzes, die ihren gewöhnlichen Aufenthalt im Ausland haben (Auslandsdeutsche). b) Für ausländische Staatsangehörige innerhalb der Bunderepublik Deutschland. c) Im Rahmen der Sportförderung für Profisportler (Sportschützen).",
     "en_q":"For which holders of gun permits is the Federal Administrative Office responsible, among other things?",
     "en_a":"a) For Germans within the meaning of Article 116 of the Basic Law who have their habitual residence abroad (Germans abroad). b) For foreign nationals within the Federal Republic of Germany. c) As part of sports funding for professional athletes (sport shooters).",
     "ru_q":"За каких держателей разрешений на оружие, помимо прочего, отвечает Федеральное административное управление?",
     "ru_a":"a) Для немцев в значении статьи 116 Основного закона, которые обычно проживают за границей (немцы за границей). b) Для иностранных граждан в Федеративной Республике Германии. c) В рамках спортивного финансирования профессиональных спортсменов (спортивных стрелков).",
     "c":"a"
  },
  {
     "id":"2.17",
     "de_q":"Welche Teile einer erlaubnispflichtigen Schusswaffe darf jeder erwerben?",
     "de_a":"a) einen Austauschlauf b) ein Wechselsystem c) ein Abzugssystem",
     "en_q":"Which parts of a gun that requires a license can everyone purchase?",
     "en_a":"a) an exchange run b) an exchange system c) a trigger system",
     "ru_q":"Какие части оружия, требующие лицензии, может приобрести каждый?",
     "ru_a":"a) цикл обмена b) система обмена c) триггерная система",
     "c":"c"
  },
  {
     "id":"2.18",
     "de_q":"Ist Sportschützen der Erwerb und die anschließende Nutzung von Kurzwaffenmagazinen mit einer Kapazität von mehr als 20 Patronen und Langwaffenmagazinen mit einer Kapazität von mehr als 10 Patronen gestattet (wechselbares Magazin)?",
     "de_a":"a) Ja, wenn damit nachweislich dynamische Disziplinen (IPSC) absolviert werden. b) Ja, allerdings nur zu Trainingszwecken und nicht im Rahmen von Wettkämpfen. c) Nein, da solche Magazine für Privatpersonen verboten sind.",
     "en_q":"Is the acquisition and subsequent use of short gun magazines with a capacity of more than 20 cartridges and long gun magazines with a capacity of more than 10 cartridges permitted (exchangeable magazine)?",
     "en_a":"a) Yes, if it can be demonstrated that dynamic disciplines (IPSC) have been completed. b) Yes, but only for training purposes and not in the context of competitions. c) No, as such magazines are forbidden for private individuals.",
     "ru_q":"Разрешено ли приобретение и последующее использование коротких оружейных магазинов вместимостью более 20 патронов и длинных оружейных магазинов вместимостью более 10 патронов (сменный магазин)?",
     "ru_a":"a) Да, если можно продемонстрировать, что динамические дисциплины (IPSC) были выполнены. b) Да, но только в тренировочных целях, а не в контексте соревнований. c) Нет, поскольку такие журналы запрещены для частных лиц.",
     "c":"c"
  },
  {
     "id":"2.19",
     "de_q":"Welche Waffe kann nur mit einer grünen Waffenbesitzkarte (mit Voreintrag) erworben werden?",
     "de_a":"a) Druckluftwaffe mit dem Zeichen „F im Fünfeck“ b) Armbrust c) Kurzwaffe mit Kaliber .357 SIG",
     "en_q":"Which gun can only be purchased with a green gun ownership card (with pre-entry)?",
     "en_a":"a) Compressed air weapon with the symbol 'F in the pentagon' b) Crossbow c) Short weapon with caliber .357 SIG",
     "ru_q":"Какое оружие можно приобрести только с зеленой картой владения оружием (с предварительной записью)?",
     "ru_a":"a) Пневматическое оружие с символом «F в пятиугольнике» b) Арбалет c) Укороченное оружие калибра .357 SIG",
     "c":"c"
  },
  {
     "id":"2.20",
     "de_q":"Welcher Nachweis ist als Erwerbsberechtigung von halbautomatischen Kurzwaffen für Sportschützen erforderlich?",
     "de_a":"a) Waffenbesitzkarte mit Voreintrag b) Schießbuch c) Sportschützenausweis",
     "en_q":"What proof is required as a license to acquire semi-automatic handguns for sport shooters?",
     "en_a":"a) Gun ownership card with pre-entry b) Shooting book c) Marksman's ID",
     "ru_q":"Какие доказательства требуются в качестве лицензии на приобретение полуавтоматического пистолета для стрелков-спортсменов?",
     "ru_a":"a) Карточка владения оружием с предварительной записью b) Стрелковая книжка c) Удостоверение стрелка.",
     "c":"a"
  },
  {
     "id":"2.21",
     "de_q":"Welche Teile erlaubnispflichtiger Schusswaffen dürfen einzeln nur mit gültiger Erwerbserlaubnis erworben werden?",
     "de_a":"Lauf; Verschluss; Patronen- oder Kartuschenlager; Griffstück bei Kurzwaffen",
     "en_q":"Which parts of firearms requiring a permit may only be purchased individually with a valid purchase permit?",
     "en_a":"Barrel; breech; Cartridge or Cartridge storage; handle for handguns",
     "ru_q":"Какие части огнестрельного оружия, требующие разрешения, могут быть приобретены индивидуально только при наличии действующего разрешения на покупку?",
     "ru_a":"Cтвол; казенная часть; патрон или хранилище патронов; рукоятка для ручного огнестрельного оружия",
     "c":"x"
  },
  {
     "id":"2.22",
     "de_q":"Für Erwerb und Besitz welcher Waffen bedarf es keiner Waffenbesitzkarte?",
     "de_a":"a) Druckluftwaffen, die das Zulassungszeichen „F im Fünfeck“ tragen. b) Schreckschuss-, Reizstoff- und Signalwaffen, die das Zulassungszeichen „PTB im Kreis“ tragen. c) Spielzeugwaffen mit einer Mündungsenergie von mehr als 0,5 Joule (ohne „F im Fünfeck“).",
     "en_q":"Which weapons do not require a weapon possession card to acquire and own which weapons?",
     "en_a":"a) Pneumatic weapons that have the approval mark 'F in a pentagon'. b) Blank firing, irritant and signal weapons that bear the approval mark “PTB in a circle”. c) Toy weapons with a muzzle energy of more than 0.5 joules (without the 'F in the pentagon').",
     "ru_q":"Для какого оружия не требуется карта владения оружием, чтобы приобретать и владеть каким оружием?",
     "ru_a":"a) Пневматическое оружие, имеющее знак официального утверждения 'F в пятиугольнике'. b) холодное, раздражающее и сигнальное оружие, имеющее знак официального утверждения «ПТБ по кругу». c) Игрушечное оружие с дульной энергией более 0,5 Дж (без буквы «F» в пятиугольнике).",
     "c":"ab"
  },
  {
     "id":"2.23",
     "de_q":"Wie können Sie als 19-jähriger Sport schütze Ihre persönliche Eignung für den dauerhaften Erwerb einer halbautomatischen Pistole im Kaliber „.45 Auto“ gegenüber der Behörde nachweisen?",
     "de_a":"a) Durch ein fachärztliches Gutachten. b) Durch eine Bescheinigung eines anerkannten Schießsportverbandes. c) Es besteht keine Möglichkeit des Erwerbs in diesem Alter.",
     "en_q":"How can you, as a 19-year-old Sportschütze, prove to the authorities your personal suitability for the permanent purchase of a semi-automatic pistol in caliber '.45 Auto'?",
     "en_a":"a) By a specialist medical report. b) With a certificate from a recognized shooting sports association. c) There is no possibility of acquiring at this age.",
     "ru_q":"Как вы, как 19-летний Sportschütze, можете доказать властям свою личную пригодность для постоянной покупки полуавтоматического пистолета калибра '.45 Auto'?",
     "ru_a":"a) Медицинским заключением специалиста. b) Имея свидетельство признанной спортивной ассоциации стрелкового спорта. c) В этом возрасте нет возможности приобретения.",
     "c":"c"
  },
  {
     "id":"2.24",
     "de_q":"Wer benötigt als Sportschütze ein amts- oder fachärztliches oder fachpsychologisches Gutachten?",
     "de_a":"a) Sportschützen, die das 25. Lebensjahr noch nicht vollendet haben und erst malig eine erlaubnis- und bedürfnispflichtige Großkaliberwaffe erwerben wollen. b) Sportschützen, die das 25. Lebensjahr noch nicht vollendet haben und erst malig eine Einzellader-Flinten bis Kaliber 12 erwerben wollen. c) Sportschützen, die das 25. Lebensjahr noch nicht vollendet haben und erst malig eine Schusswaffe bis Kaliber .22lr (mit Randzündung) erwerben wollen.",
     "en_q":"As a marksman, who needs an official or specialist medical or specialist psychological report?",
     "en_a":"a) Sports shooters who have not yet reached the age of 25 and who want to purchase a large-caliber weapon that requires a permit and requires for the first time. b) Sport shooters who have not yet reached the age of 25 and want to purchase a single-shot shotgun up to caliber 12 for the first time. c) Sports shooters who have not yet reached the age of 25 and want to purchase a firearm up to caliber .22lr (with rim ignition) for the first time.",
     "ru_q":"Кому как стрелку нужен официальный или специализированный медицинский или специализированный психологический отчет?",
     "ru_a":"a) Спортивные стрелки, не достигшие еще 25-летнего возраста и желающие приобрести крупнокалиберное оружие, для которого требуется разрешение и которое требуется впервые. b) Спортивные стрелки, которые еще не достигли 25-летнего возраста и хотят впервые приобрести однозарядное ружье до 12-го калибра. c) Спортивные стрелки, которые еще не достигли 25-летнего возраста и хотят впервые приобрести огнестрельное оружие до калибра .22lr (с воспламенением от оправы).",
     "c":"a"
  },
  {
     "id":"2.25",
     "de_q":"Welche Schusswaffen dürfen Sie als 20-jähriger Sportschütze ohne vorheriges Gutachten über Ihre persönliche Eignung dauerhaft erwerben?",
     "de_a":"a) halbautomatische Pistole im Kaliber 9 mm Luger b) Double-Action-Revolver im Kaliber .357 Magnum c) Bockflinte im Kaliber 12/70",
     "en_q":"As a 20-year-old marksman, which firearms are you allowed to acquire permanently without a prior assessment of your personal suitability?",
     "en_a":"a) semi-automatic pistol in caliber 9 mm Luger b) double-action revolver in caliber .357 Magnum c) over-and-under shotgun in caliber 12/70",
     "ru_q":"Как 20-летний стрелок, какое огнестрельное оружие вам разрешено приобретать на постоянной основе без предварительной оценки вашей личной пригодности?",
     "ru_a":"a) полуавтоматический пистолет калибра 9 мм Luger b) револьвер двойного действия калибра .357 Magnum c) ружье с вертикальным расположением стволов калибра 12/70",
     "c":"b"
  },
  {
     "id":"2.26",
     "de_q":"Sie wollen ein Kleinkaliber Repetiergewehr verkaufen. Es interessieren sich 1. ein Jäger, 2. ein Sportschütze. In welcher Form ist der Nachweis der Erwerbsberechtigung in den genannten Fällen zu erbringen?",
     "de_a":"Zu 1: gültiger Jagdschein Zu 2: Waffenbesitzkarte für Sportschützen oder grüne Waffenbesitzkarte mit Voreintrag",
     "en_q":"You want to sell a small-bore bolt-action rifle. 1. A hunter, 2. a marksman. In what form do you have to provide proof of entitlement to purchase in the cases mentioned?",
     "en_a":"To 1: valid hunting license. To 2: Gun ownership card for sport shooters or green gun ownership card with pre-entry",
     "ru_q":"Вы хотите продать малокалиберную винтовку с продольно-скользящим затвором. 1. Охотник, 2. Стрелок. В какой форме вы должны предоставить подтверждение права на покупку в упомянутых случаях?",
     "ru_a":"К 1: действующая охотничья лицензия. К 2: карта владения оружием для спортивных стрелков или зеленая карта владения оружием с предварительной записью.",
     "c":"x"
  },
  {
     "id":"2.27",
     "de_q":"Welche der nebenstehend aufgeführten Schusswaffen kann mit der Waffenbesitzkarte für Sportschützen (gelbe WBK) erworben werden?",
     "de_a":"a) halbautomatische Langwaffe b) einläufige Einzellader-Kurzwaffe c) halbautomatische Kurzwaffe",
     "en_q":"Which of the firearms listed opposite can be acquired with the weapon possession card for sport shooters (yellow WBK)?",
     "en_a":"a) semi-automatic rifle b) single-barrel single-shot rifle c) semi-automatic rifle",
     "ru_q":"Какое из перечисленных напротив огнестрельного оружия можно получить с карточкой владения оружием для спортивных стрелков (желтая WBK)?",
     "ru_a":"a) полуавтоматическая винтовка b) одноствольная однозарядная винтовка c) полуавтоматическая винтовка",
     "c":"b"
  },
  {
     "id":"2.28",
     "de_q":"Darf ein Sportschütze seine Repetierbüchse im Kaliber .22lr mit einem Schalldämpfer ausstatten?",
     "de_a":"a) Nein, Schalldämpfer sind im Bereich des sportlichen Schießens nur für Waffen bei denen Zentralfeuermunition genutzt wird gestattet. b) Ja, Waffen die Munition mit Randfeuerzündung verschießen dürfen immer mit einem Schalldämpfer ausgestattet werden. c) Nein, ein Sportschütze darf für keine seiner Waffen einen Schalldämpfer nutzen.",
     "en_q":"Can a marksman equip his bolt action rifle in .22lr caliber with a silencer?",
     "en_a":"a) No, in the area of ​​sport shooting, silencers are only permitted for weapons that use centerfire ammunition. b) Yes, weapons that fire ammunition with rimfire ignition can always be equipped with a silencer. c) No, a marksman is not allowed to use a silencer for any of his weapons.",
     "ru_q":"Может ли стрелок оснастить свою винтовку калибра .22lr глушителем?",
     "ru_a":"a) Нет, в области спортивной стрельбы глушители разрешены только для оружия, использующего патроны центрального огня. b) Да, оружие, которое стреляет боеприпасами с воспламенением кольцевым воспламенением, всегда может быть оснащено глушителем. c) Нет, стрелку не разрешается использовать глушитель для любого из своего оружия.",
     "c":"c"
  },
  {
     "id":"2.29",
     "de_q":"Wie viele halbautomatische Büchsen darf ein Sportschütze maximal mit seiner gelben Waffenbesitzkarte er werben bzw. diese darin eintragen lassen?",
     "de_a":"a) Keine b) Bis zu zehn c) Hier gibt es keine Einschränkungen.",
     "en_q":"What is the maximum number of semi-automatic rifles that a marksman can advertise with his yellow gun ownership card or have it entered on it?",
     "en_a":"a) None b) Up to ten c) There are no restrictions here.",
     "ru_q":"Каково максимальное количество полуавтоматических винтовок, которое стрелок может рекламировать на своей желтой карточке владения оружием или указывать ее на ней?",
     "ru_a":"a) Нет b) До десяти c) Здесь нет никаких ограничений.",
     "c":"a"
  },
  {
     "id":"2.30",
     "de_q":"Wie viele Waffen darf ein Sport schütze maximal mit seiner gelben Waffenbesitzkarte erwerben bzw. die se darin eintragen lassen?",
     "de_a":"a) Bis zu zehn Waffen, die gemäß den gesetzlichen Vorgaben mit der gelben Waffenbesitzkarte erworben werden dürfen. b) Unbegrenzte Anzahl, jedoch nur wenn jeweils eine Bedürfnisbescheinigung des Verbandes vorliegt. c) Unbegrenzte Anzahl, jedoch dürfen keine halbautomatischen Pistolen damit erworben bzw. darin eingetragen werden.",
     "en_q":"What is the maximum number of guns a sport shooter can acquire with his yellow gun ownership card or have these entered on it?",
     "en_a":"a) Up to ten weapons that may be purchased with the yellow weapon possession card in accordance with legal requirements. b) Unlimited number, but only if a certificate of need from the association is available. c) Unlimited number, however, no semi-automatic pistols may be purchased or registered with them.",
     "ru_q":"Какое максимальное количество оружия спортивный стрелок может приобрести со своей желтой карточкой владения оружием или указать их в ней?",
     "ru_a":"a) До десяти видов оружия, которые можно приобрести с желтой картой владения оружием в соответствии с требованиями законодательства. b) Неограниченное количество, но только при наличии справки о необходимости от ассоциации. c) Неограниченное количество, однако нельзя покупать или регистрировать полуавтоматические пистолеты.",
     "c":"a"
  },
  {
     "id":"2.31",
     "de_q":"Wie viele Schusswaffen dürfen Sie als Sportschütze maximal innerhalb von sechs Monaten bei entsprechendem Bedürfnis erwerben?",
     "de_a":"a) Zwei b) Eine c) Drei",
     "en_q":"As a marksman, how many firearms can you acquire within six months if you need to?",
     "en_a":"a) Two b) One c) Three",
     "ru_q":"Как стрелок, сколько огнестрельного оружия вы сможете приобрести в течение шести месяцев при необходимости?",
     "ru_a":"a) два b) один c) три",
     "c":"a"
  },
  {
     "id":"2.32",
     "de_q":"Dürfen Schalldämpfer für erlaubnispflichtige Schusswaffen erworben werden?",
     "de_a":"a) Ja, für alle in der grünen WBK eingetragenen Waffen. b) Nein c) Ja, jedoch unterliegen Schalldämpfer für erlaubnispflichtige Schusswaffen ebenfalls der Erlaubnispflicht.",
     "en_q":"Can silencers be purchased for firearms that require a license?",
     "en_a":"a) Yes, for all weapons registered in the green WBK. b) No c) Yes, but silencers for firearms that require a permit are also subject to a permit.",
     "ru_q":"Можно ли приобрести глушители для огнестрельного оружия, требующего лицензии?",
     "ru_a":"a) Да, для всего оружия, зарегистрированного в зеленом WBK. b) Нет c) Да, но глушители для огнестрельного оружия, требующие разрешения, также подлежат разрешению.",
     "c":"c"
  },
  {
     "id":"2.33",
     "de_q":"Welche Druckluftwaffen dürfen erlaubnisfrei erworben werden?",
     "de_a":"a) Alle Druckluftwaffen, deren Geschossen eine Bewegungsenergie von weniger als 7,5 Joule erteilt wird. b) Alle Druckluftwaffen, die vor dem 01.01.1970 hergestellt und in den Handel gebracht wurden. c) Alle Druckluftwaffen mit dem Zulassungszeichen „F im Fünfeck“.",
     "en_q":"Which compressed air weapons can be purchased without a permit?",
     "en_a":"a) All compressed air weapons whose projectiles are given a kinetic energy of less than 7.5 joules. b) All compressed air weapons that were manufactured and marketed before 01.01.1970. c) All compressed air weapons with the approval mark “F in a pentagon”.",
     "ru_q":"Какое пневматическое оружие можно приобрести без разрешения?",
     "ru_a":"a) Все пневматическое оружие, снаряды которого имеют кинетическую энергию менее 7,5 джоулей. b) Все пневматическое оружие, которое было произведено и реализовано до 01.01.1970. c) Все пневматическое оружие со знаком официального утверждения «F в пятиугольнике».",
     "c":"bc"
  },
  {
     "id":"2.34",
     "de_q":"Welche der folgendermaßen gekennzeichneten Waffen dürfen Sie grundsätzlich als volljährige Person erlaubnisfrei erwerben?",
     "de_a":"a) Der Aufdruck „Frei ab 18 Jahren“ ist auf allen wesentlichen Teilen der Waffe eingeprägt. b) Auf der Waffe befindet sich das Zulassungszeichen (PTB im Kreis) oder das Zulassungszeichen (F im Fünfeck). c) Auf der Waffe befinden sich die Zulassungszeichen „PTB im Viereck“ und das Zulassungszeichen (F im Fünfeck).",
     "en_q":"As an adult, which of the following weapons can you acquire without a permit?",
     "en_a":"a) The imprint 'Free from 18 years of age' is embossed on all essential parts of the weapon. b) The approval mark (PTB in a circle) or the approval mark (F in a pentagon) is on the weapon. c) The approval mark “PTB in a square” and the approval mark (F in a pentagon) are on the weapon.",
     "ru_q":"Какое из следующих видов оружия вы, взрослые, можете приобрести без разрешения?",
     "ru_a":"a) На всех основных частях оружия тиснено клеймо «Не старше 18 лет». b) Знак официального утверждения (ПТБ в кружке) или знак официального утверждения (F в пятиугольнике) находится на оружии. c) Знак официального утверждения «ПТБ в квадрате» и знак официального утверждения (F в пятиугольнике) нанесены на оружие.",
     "c":"b"
  },
  {
     "id":"2.35",
     "de_q":"Braucht ein Volljähriger für den Erwerb von Druckluft-, Federdruck- oder CO2-Waffen eine Erwerbsberechtigung?",
     "de_a":"a) Ja, in jedem Fall. b) Ja, wenn die Waffe mit „F im Fünfeck“ gekennzeichnet ist. c) Nein, wenn die Waffe mit „F im Fünfeck“ gekennzeichnet ist.",
     "en_q":"Does an adult need a purchase authorization to purchase compressed air, spring-loaded or CO2 weapons?",
     "en_a":"a) Yes, in any case. b) Yes, if the weapon is marked with an 'F in a pentagon'. c) No, if the weapon is marked with an 'F in a pentagon'.",
     "ru_q":"Требуется ли разрешение на покупку для покупки оружия со сжатым воздухом, пружиной или CO2?",
     "ru_a":"a) Да, в любом случае. b) Да, если оружие обозначено буквой «F в пятиугольнике». c) Нет, если оружие обозначено буквой «F в пятиугольнике».",
     "c":"c"
  },
  {
     "id":"2.36",
     "de_q":"Sie haben in ihrer WBK einen Voreintrag für einen Revolver im Kaliber .38 Spezial. Ihr Waffenhändler bietet Ihnen zu einem sehr günstigen Preis ein Sondermodell im Kaliber .357 Mag. an. Dürfen Sie diesen erwerben?",
     "de_a":"a) Ja, der Durchmesser (das Kaliber) ist ja gleich. b) Nein, die Magnum-Patrone ist länger. c) Nein, weil Sie keinen entsprechenden Voreintrag haben.",
     "en_q":"You have a preliminary entry in your WBK for a revolver in caliber .38 special. Your arms dealer offers you a special model in caliber .357 Mag. At a very affordable price. Are you allowed to purchase it?",
     "en_a":"a) Yes, the diameter (the caliber) is the same. b) No, the Magnum cartridge is longer. c) No, because you do not have a corresponding entry.",
     "ru_q":"В вашем WBK имеется предварительная запись на револьвер специального калибра .38. Ваш дилер по продаже оружия предлагает вам особую модель калибра .357 Mag. По очень доступной цене. Вы можете купить это?",
     "ru_a":"a) Да, диаметр (калибр) такой же. b) Нет, патрон Магнум длиннее. c) Нет, потому что у вас нет соответствующей записи.",
     "c":"c"
  },
  {
     "id":"2.37",
     "de_q":"An wen dürfen erlaubnispflichtige Pistolen verkauft werden?",
     "de_a":"a) Reservisten der Bundeswehr b) Polizeibeamte c) Personen mit Erwerbsberechtigung",
     "en_q":"Who can pistols requiring a license be sold to?",
     "en_a":"a) reservists in the armed forces b) police officers c) persons with employment authorization",
     "ru_q":"Кому можно продать пистолеты, требующие разрешения?",
     "ru_a":"a) резервистов в вооруженных силах b) полицейских c) лиц, имеющих разрешение на работу",
     "c":"c"
  },
  {
     "id":"2.38",
     "de_q":"Wer benötigt keine Waffenbesitzkarte?",
     "de_a":"a) Derjenige, der eine Druckluftwaffe, deren Geschosse eine Bewegungsenergie von nicht mehr als 7,5 Joule erteilt wurde und die mit dem Zulassungszeichen „F im Fünfeck“ gekennzeichnet ist, erwirbt. b) Derjenige, der eine Schreckschuss-, Reizstoff- oder Signalwaffe mit dem Zulassungszeichen „PTB im Kreis“ er wirbt. c) Derjenige, der eine Zündnadel-Pistole erwirbt, deren Modell vor dem 01.01.1871 hergestellt worden ist.",
     "en_q":"Who doesn't need a gun license?",
     "en_a":"a) Anyone who purchases a compressed air weapon whose projectile has been given a kinetic energy of no more than 7.5 joules and which is marked with the approval mark “F in the pentagon”. b) Anyone who advertises a blank firing, irritant or signal weapon with the approval mark 'PTB in a circle'. c) Anyone who purchases a needle pistol, the model of which was manufactured before 01.01.1871.",
     "ru_q":"Кому не нужна лицензия на оружие?",
     "ru_a":"a) Любой, кто покупает пневматическое оружие, снаряду которого была придана кинетическая энергия не более 7,5 джоулей и который отмечен знаком утверждения «F в пятиугольнике». b) Любой, кто рекламирует холостое, раздражающее или сигнальное оружие со знаком официального утверждения «ПТБ в круге». c) Всем, кто приобретает игольчатый пистолет, модель которого изготовлена ​​до 01.01.1871.",
     "c":"abc"
  },
  {
     "id":"2.39",
     "de_q":"Wer benötigt keine eigene Waffenbesitzkarte?",
     "de_a":"a) Derjenige, der eine erlaubnispflichtige Schusswaffe nur vorübergehend auf einem Schießstand zum dortigen Schießen erwirbt. b) Derjenige, der eine erlaubnispflichtige Schusswaffe nur vorübergehend für einen Zeitraum von weniger als einem Monat von einem Berechtigten leiht. c) Derjenige, der eine erlaubnispflichtige Schusswaffe nur vorübergehend von einem Berechtigten zur gewerbsmäßigen Beförderung, bzw. Lagerung übernimmt.",
     "en_q":"Who doesn't need their own gun license?",
     "en_a":"a) Anyone who purchases a firearm that requires a permit only temporarily at a shooting range for shooting there. b) Anyone who only temporarily borrows a firearm from an authorized person for a period of less than a month that requires a license. c) Anyone who only temporarily takes over a firearm requiring a permit from an authorized person for commercial transport or storage.",
     "ru_q":"Кому не нужна собственная лицензия на оружие?",
     "ru_a":"a) Любой, кто покупает огнестрельное оружие, для которого требуется временное разрешение на стрельбище, для стрельбы по нему. b) Любой, кто только временно одалживает огнестрельное оружие у уполномоченного лица на срок менее месяца, для которого требуется лицензия. c) Любой, кто только временно принимает огнестрельное оружие, требуя разрешения от уполномоченного лица на коммерческую транспортировку или хранение.",
     "c":"ac"
  },
  {
     "id":"2.40",
     "de_q":"Welches Dokument berechtigt auch zum Erwerb von Munition?",
     "de_a":"a) Europäischer Feuerwaffenpass b) Jagdschein (nur für Langwaffenmunition) c) Polizeidienstausweis",
     "en_q":"Which document also entitles you to purchase ammunition?",
     "en_a":"a) European firearms pass b) Hunting license (only for rifle ammunition) c) Police service ID",
     "ru_q":"Какой документ также дает право на покупку боеприпасов?",
     "ru_a":"a) Европейский паспорт на огнестрельное оружие b) Лицензия на охоту (только на винтовочные патроны) c) Удостоверение полицейской службы",
     "c":"b"
  },
  {
     "id":"2.41",
     "de_q":"Welche Erlaubnisse berechtigen zum Erwerb von Munition?",
     "de_a":"a) Waffenbesitzkarte, sofern eine Munitionserwerbsberechtigung eingetragen ist. b) Gültiger Jagdschein (Langwaffenmunition) c) Munitionserwerbsschein",
     "en_q":"Which permits entitle you to purchase ammunition?",
     "en_a":"a) Gun ownership card, provided that an ammunition acquisition license has been entered. b) Valid hunting license (long gun ammunition) c) Ammunition acquisition license",
     "ru_q":"Какие разрешения дают право на покупку боеприпасов?",
     "ru_a":"a) Карточка владения оружием при наличии лицензии на приобретение боеприпасов. b) Действующая лицензия на охоту (боеприпасы для длинных ружей) c) Лицензия на приобретение боеприпасов.",
     "c":"abc"
  },
  {
     "id":"2.42",
     "de_q":"Berechtigt die grüne Waffenbesitzkarte zum Munitionserwerb?",
     "de_a":"a) Ja, wenn ich Sportschütze bin. b) Nur, soweit für die eingetragenen Waffen die Erlaubnis zum Munitionserwerb in der WBK vermerkt ist. c) Nein, es ist immer zusätzlich ein Munitionserwerbsschein erforderlich.",
     "en_q":"Does the green gun ownership card entitle you to purchase ammunition?",
     "en_a":"a) Yes, if I am a marksman. b) Only insofar as the license to purchase ammunition is noted in the WBK for the weapons registered. c) No, an ammunition acquisition license is always required.",
     "ru_q":"Дает ли зеленая карта владения оружием право покупать боеприпасы?",
     "ru_a":"a) Да, если я стрелок. b) Только постольку, поскольку в WBK указывается лицензия на приобретение боеприпасов для зарегистрированного оружия. c) Нет, всегда требуется лицензия на приобретение боеприпасов.",
     "c":"b"
  },
  {
     "id":"2.43",
     "de_q":"Mit welcher Erlaubnis kann Munition erworben werden?",
     "de_a":"a) Sportschützenausweis b) Sportschützen-WBK (gelbe WBK) c) Sprengstofferlaubnis",
     "en_q":"What permit can ammunition be purchased?",
     "en_a":"a) Target shooting card b) Target shooting club (yellow target group) c) Permit for explosives",
     "ru_q":"Какое разрешение можно приобретать боеприпасы?",
     "ru_a":"a) Карточка для стрельбы по мишеням b) Булава для стрельбы по мишеням (желтая целевая группа) c) Разрешение на взрывчатые вещества",
     "c":"b"
  },
  {
     "id":"2.44",
     "de_q":"Eine Munitionserwerbsberechtigung für Patronen im Kaliber .357 Magnum berechtigt zum Erwerb von Munition...",
     "de_a":"a) auch im Kaliber .38 Special. b) nur im Kaliber .357 Magnum. c) auch im Kaliber 9 mm Luger.",
     "en_q":"An ammunition purchase authorization for cartridges in caliber .357 Magnum entitles the holder to purchase ammunition ...",
     "en_a":"a) also in caliber .38 Special. b) only in caliber .357 Magnum. c) also in 9 mm Luger caliber.",
     "ru_q":"Разрешение на покупку боеприпасов для патронов калибра .357 Magnum дает право владельцу приобретать боеприпасы ...",
     "ru_a":"a) также калибра .38 Special. b) только калибра .357 Magnum. c) также калибра 9 мм Luger.",
     "c":"a"
  },
  {
     "id":"2.45",
     "de_q":"Ihre WBK lässt den Erwerb von Munition im Kaliber .357 Magnum zu. Dürfen Sie damit auch Munition 9 mm Luger erwerben?",
     "de_a":"a) Ja, weil der Durchmesser nur einen minimalen Unterschied aufweist. b) Nein c) Ja, aber ich muss später die Behörde informieren.",
     "en_q":"Your WBK permits the purchase of .357 Magnum ammunition. Can you also use it to purchase 9 mm Luger ammunition?",
     "en_a":"a) Yes, because the diameter shows only a minimal difference. b) No c) Yes, but I have to inform the authorities later.",
     "ru_q":"Ваш WBK разрешает приобретение боеприпасов .357 Magnum. Можете ли вы также использовать его для покупки боеприпасов Luger калибра 9 мм?",
     "ru_a":"a) Да, потому что разница в диаметре минимальна. b) Нет c) Да, но я должен сообщить властям позже.",
     "c":"b"
  },
  {
     "id":"2.46",
     "de_q":"Ihre WBK lässt den Erwerb von Munition im Kaliber 9 mm Luger zu. Dürfen Sie dann auch Munition im Kaliber 9 mm kurz erwerben?",
     "de_a":"a) Ja, der Kaliberdurchmesser ist ja identisch. b) Nur, wenn der Händler mir die Munition überlässt. c) Nein, nur Patronen im Kaliber 9 mm Luger.",
     "en_q":"Your WBK permits the purchase of 9 mm Luger ammunition. Are you then also allowed to purchase short 9 mm ammunition?",
     "en_a":"a) Yes, the caliber diameter is identical. b) Only if the dealer gives me the ammunition. c) No, only 9 mm Luger cartridges.",
     "ru_q":"Ваш WBK разрешает приобретение боеприпасов Luger калибра 9 мм. Разрешено ли вам также покупать короткие боеприпасы калибра 9 мм?",
     "ru_a":"a) Да, диаметр калибра идентичный. b) Только если дилер предоставит мне боеприпасы. c) Нет, только патроны Люгера калибра 9 мм.",
     "c":"c"
  },
  {
     "id":"2.47",
     "de_q":"Für welche Patronenmunition erhält der Pistolenschütze eine Erlaubnis?",
     "de_a":"a) Für Munition mit Hohlspitzgeschossen b) Für Leuchtspurmunition c) Für Betäubungsmunition zu Angriffszwecken",
     "en_q":"For which cartridge ammunition does the pistol shooter receive a license?",
     "en_a":"a) For ammunition with hollow point projectiles b) For tracer ammunition c) For stunning ammunition for attack purposes",
     "ru_q":"На боеприпасы какого патрона стрелок из пистолета получает лицензию?",
     "ru_a":"a) Для боеприпасов с полым снарядом b) Для трассирующих боеприпасов c) Для оглушающих боеприпасов для атакующих целей.",
     "c":"a"
  },
  {
     "id":"2.48",
     "de_q":"Ist der Erwerb von Presslingen erlaubnispflichtig?",
     "de_a":"a) Ja, Sprengstofferlaubnis erforderlich b) Ja, Munitionserwerbsberechtigung erforderlich c) Nein",
     "en_q":"Does the acquisition of pellets require a permit?",
     "en_a":"a) Yes, explosives permit required b) Yes, ammunition acquisition permit required c) No.",
     "ru_q":"Требуется ли разрешение на приобретение пеллет?",
     "ru_a":"a) Да, требуется разрешение на взрывчатые вещества b) Да, требуется разрешение на приобретение боеприпасов c) Нет.",
     "c":"b"
  },
  {
     "id":"2.49",
     "de_q":"Darf man Schrotmunition in unbeschränkter Menge erwerben?",
     "de_a":"a) Ja, auf dem Schießstand zum sofortigen Verbrauch lediglich auf dieser Schießstätte. b) Ja, mit Erwerbsberechtigung c) Nein",
     "en_q":"Can I buy an unlimited amount of shotgun ammunition?",
     "en_a":"a) Yes, on the shooting range for immediate consumption only at this shooting range. b) Yes, with purchase authorization c) No.",
     "ru_q":"Могу ли я купить неограниченное количество боеприпасов для дробовика?",
     "ru_a":"a) Да, в тире для немедленного использования только в этом тире. b) Да, при наличии разрешения на покупку c) Нет.",
     "c":"ab"
  },
  {
     "id":"2.50",
     "de_q":"Sie überlassen Ihre WBK-pflichtigen Schusswaffen Ihrem Vereinskollegen für die Dauer von 2 Monaten. Er will die Waffen ausprobieren und Ihnen gegebenenfalls abkaufen.",
     "de_a":"a) Das ist waffenrechtlich erlaubt. b) Das ist waffenrechtlich nicht erlaubt. c) WBK-Inhaber dürfen ihre Schusswaffen grundsätzlich immer tauschen.",
     "en_q":"You leave your firearms subject to WBK to your club colleague for a period of 2 months. He wants to try the weapons and buy them from you if necessary.",
     "en_a":"a) This is permitted under gun law. b) This is not allowed under gun law. c) WBK holders are always allowed to exchange their firearms.",
     "ru_q":"Вы оставляете свое огнестрельное оружие, подпадающее под действие WBK, своему коллеге по клубу сроком на 2 месяца. Он хочет опробовать оружие и при необходимости купить его у вас.",
     "ru_a":"a) Это разрешено законом об оружии. b) Это запрещено законом об оружии. c) Владельцам WBK всегда разрешается обменивать свое огнестрельное оружие.",
     "c":"b"
  },
  {
     "id":"2.51",
     "de_q":"Sie überlassen einem Berechtigten auf Dauer Ihr Großkaliber Sportgewehr. Innerhalb welcher Frist müssen Sie Ihrer Behörde das Überlassen anzeigen?",
     "de_a":"a) 2 Wochen b) 4 Wochen c) 1 Woche",
     "en_q":"You leave your large-caliber sport rifle to an authorized person on a permanent basis. What is the deadline for notifying your authority about the release?",
     "en_a":"a) 2 weeks b) 4 weeks c) 1 week",
     "ru_q":"Вы оставляете крупнокалиберную спортивную винтовку уполномоченному лицу на постоянной основе. Каков крайний срок для уведомления вашего ведомства о выпуске?",
     "ru_a":"a) 2 недели b) 4 недели c) 1 неделя",
     "c":"a"
  },
  {
     "id":"2.52",
     "de_q":"Darf man einem anderen Waffenbesitzkarteninhaber eine Waffe leihen?",
     "de_a":"a) Ja, für einen von seinem Bedürfnis umfassten Zweck, aber nur vorüber gehend, höchstens für einen Monat. b) Ja, ohne Zweckbindung, aber nur vorübergehend, für die Dauer von maximal einen Monat. c) Nein, es ist grundsätzlich eine behördliche Genehmigung erforderlich.",
     "en_q":"Can I lend a gun to another gun owner?",
     "en_a":"a) Yes, for a purpose included in his needs, but only temporarily, for a month at most. b) Yes, without earmarking, but only temporarily, for a maximum of one month. c) No, official approval is generally required.",
     "ru_q":"Могу ли я одолжить пистолет другому владельцу?",
     "ru_a":"a) Да, для цели, входящей в его нужды, но только временно, максимум на месяц. b) Да, без целевого назначения, но только временно, максимум на один месяц. c) Нет, обычно требуется официальное разрешение.",
     "c":"a"
  },
  {
     "id":"2.53",
     "de_q":"Unter welchen Voraussetzungen darf Ihnen ein Waffenhändler eine erlaubnispflichtige Schusswaffe zum Ausprobieren ohne vorherige Erlaubnis der zuständigen Behörde überlassen?",
     "de_a":"a) Überhaupt nicht. Ohne vorherige Erlaubnis ist das immer verboten. b) Das ist waffenrechtlich für die Dauer von bis zu sechs Wochen ohne weitere Voraussetzung erlaubt. c) Das ist nur erlaubt, wenn man bereits eine WBK besitzt und der Erwerb vorübergehend ist (höchstens einen Monat).",
     "en_q":"Under what conditions is a gun dealer allowed to give you a gun that requires a license to try out without the prior consent of the competent authority?",
     "en_a":"a) Not at all. This is always forbidden without prior permission. b) This is permitted under gun law for a period of up to six weeks without any further requirements. c) This is only allowed if you already have a WBK and the acquisition is temporary (at most one month).",
     "ru_q":"При каких условиях торговцу оружием разрешено без предварительного согласия компетентного органа дать вам оружие, для испытания которого требуется лицензия?",
     "ru_a":"a) Вовсе нет. Это всегда запрещено без предварительного разрешения. b) Это разрешено законом об оружии на срок до шести недель без каких-либо дополнительных требований. c) Это разрешено только в том случае, если у вас уже есть WBK и приобретение носит временный характер (не более одного месяца).",
     "c":"c"
  },
  {
     "id":"2.54",
     "de_q":"Was hat der Erbe einer Schusswaffe zu veranlassen?",
     "de_a":"a) Benachrichtigung des Nachlassgerichts b) Änderung der WBK des Verstorbenen c) Beantragung einer WBK bei der zu ständigen Waffenbehörde binnen eines Monats nach Annahme der Erbschaft",
     "en_q":"What does the heir of a firearm have to do?",
     "en_a":"a) Notification of the probate court b) Change of the deceased's WBK c) Application for a WBK at the competent weapons authority within one month of acceptance of the inheritance",
     "ru_q":"Что делать наследнику огнестрельного оружия?",
     "ru_a":"a) Уведомление суда по наследственным делам b) Изменение WBK умершего c) Заявление на получение WBK в компетентном оружейном органе в течение одного месяца с момента принятия наследства",
     "c":"c"
  },
  {
     "id":"2.55",
     "de_q":"Was muss ein gesetzlicher Erbe einer Schusswaffe tun?",
     "de_a":"a) Innerhalb eines Monats nach Annahme der Erbschaft die Ausstellung einer WBK beantragen, sofern die Schusswaffe nicht vorher einem Berechtigten überlassen oder unbrauchbar gemacht wird. b) Änderung der WBK des Verstorbenen beantragen. c) Ein Erbe ohne waffenrechtliches Bedürfnis muss die geerbte Waffe blockieren lassen, soweit ein geeignetes Blockiersystem verfügbar ist.",
     "en_q":"What must a legal heir to a firearm do?",
     "en_a":"a) Apply for a WBK to be issued within one month of accepting the inheritance, unless the firearm has been handed over to an authorized person or made unusable beforehand. b) Apply for a change in the deceased's WBK. c) An heir without a need under the law on weapons must have the inherited weapon blocked, provided a suitable blocking system is available.",
     "ru_q":"Что должен делать законный наследник огнестрельного оружия?",
     "ru_a":"a) Подать заявление на выдачу WBK в течение одного месяца с момента принятия наследства, если огнестрельное оружие не было передано уполномоченному лицу или заранее приведено в негодность. b) Подать заявление об изменении WBK умершего. c) Наследник без необходимости в соответствии с законом об оружии должен заблокировать унаследованное оружие при наличии подходящей системы блокировки.",
     "c":"ac"
  },
  {
     "id":"2.56",
     "de_q":"Sie wollen eine Waffe mit einem anderen Berechtigten dauerhaft tauschen, was müssen Sie berücksichtigen?",
     "de_a":"a) Ein Waffentausch ist gesetzlich nicht vorgesehen, jeder muss für die angestrebte Waffe erwerbsberechtigt sein und den Erwerb, sowie das Überlassen der anderen Waffe seiner zuständigen Behörde fristgerecht melden. b) Ein Waffentausch ist nur dann waffenrechtlich zulässig, wenn die Waffenart und das Kaliber gleich bleiben Anschließend ist die zuständige Behörde binnen von 14 Tagen zu informieren. c) Ein Waffentausch darf nur zwischen den Inhabern zweier gleichartiger Erlaubnisse im Rahmen des von ihrem Bedürfnis umfassten Zweckes erfolgen (z.B. nur zwei Sportschützen).",
     "en_q":"You want to permanently swap a weapon with another authorized person, what do you have to take into account?",
     "en_a":"a) A weapon exchange is not provided for by law; everyone must be authorized to purchase the weapon they are aiming for and must notify the competent authority of the acquisition and the transfer of the other weapon in due time. b) A weapon exchange is only legally permissible if the weapon type and caliber remain the same. The competent authority must then be informed within 14 days. c) A weapon exchange may only take place between the holders of two similar permits within the scope of the purpose covered by their needs (e.g. only two sport shooters).",
     "ru_q":"Вы хотите навсегда обменяться оружием с другим уполномоченным лицом, что вы должны принять во внимание?",
     "ru_a":"a) Обмен оружия не предусмотрен законом; каждый должен иметь разрешение на покупку оружия, к которому он стремится, и должен своевременно уведомить компетентный орган о приобретении и передаче другого оружия. b) Обмен оружия разрешен законом только в том случае, если тип и калибр оружия остаются прежними. В этом случае компетентный орган должен быть проинформирован в течение 14 дней. c) Обмен оружия может происходить только между держателями двух одинаковых разрешений в рамках цели, предусмотренной их потребностями (например, только два спортивных стрелка).",
     "c":"a"
  },
  {
     "id":"2.57",
     "de_q":"Welcher Sportschütze muss sich einer amts- oder fachärztlichen oder fachpsychologischen Untersuchung unterziehen, um seine persönliche Eignung zum Waffenerwerb nachzuweisen?",
     "de_a":"a) 18-jähriger Sportschütze für eine Kleinkaliberpistole (KK-Pistole) b) 21-jähriger Sportschütze für ein Kleinkalibergewehr (KK-Gewehr) c) 24-jähriger Sportschütze für eine als erste Großkaliberwaffe zu erwerbende halbautomatische Pistole im Kaliber .45 ACP",
     "en_q":"Which sport shooter has to undergo an official or specialist medical or specialist psychological examination in order to prove his / her personal suitability for acquiring weapons?",
     "en_a":"a) 18-year-old marksman for a small-bore pistol (small bore pistol) b) 21-year-old marksman for a small-bore rifle (small bore rifle) c) 24-year-old marksman for a .45 ACP .45 caliber semi-automatic pistol to be purchased as the first large-caliber weapon",
     "ru_q":"Какой спортивный стрелок должен пройти официальное или специализированное медицинское или специализированное психологическое обследование, чтобы доказать его / ее личную пригодность для приобретения оружия?",
     "ru_a":"a) 18-летний стрелок из малокалиберного пистолета (малокалиберный пистолет) b) 21-летний стрелок из малокалиберной винтовки (малокалиберная винтовка) c) 24-летний стрелок из .45 Самозарядный пистолет ACP .45 калибра будет закуплен как первое крупнокалиберное оружие",
     "c":"c"
  },
  {
     "id":"2.58",
     "de_q":"Für den Erwerb welcher Schusswaffe bedarf es einer Waffenbesitzkarte?",
     "de_a":"a) mehrschüssiger Vorderlader-Revolver b) CO2-Pistole mit Zeichen c) Gaspistole mit Zulassungszeichen",
     "en_q":"Which firearms do I need a gun ownership card to buy?",
     "en_a":"a) multi-shot muzzle-loading revolver b) CO2 pistol with mark c) gas pistol with approval mark",
     "ru_q":"Для покупки какого огнестрельного оружия мне нужна карта владения оружием?",
     "ru_a":"a) многозарядный дульнозарядный револьвер b) пистолет СО2 с отметкой c) газовый пистолет со знаком официального утверждения",
     "c":"a"
  },
  {
     "id":"2.59",
     "de_q":"Für den Erwerb welcher der nachfolgend genannten Waffen bedarf es einer Waffenbesitzkarte?",
     "de_a":"a) Druckluftgewehre ohne Zulassungszeichen „F im Fünfeck“, die nach dem 01.01.1970 hergestellt wurden (ausgenommen DDR-Produktion). b) Perkussionsrevolver, deren Modell vor dem 01.01.1871 entwickelt wurde. c) Waffen in 4 mm M20 mit den Zulassungszeichen „F im Fünfeck“ und „PTB im Viereck“.",
     "en_q":"Which of the following weapons is required to purchase a weapon possession card?",
     "en_a":"a) Compressed air rifles without the approval mark “F im Fünfeck”, which were manufactured after 01.01.1970 (with the exception of East German production). b) Percussion revolvers, the model of which was developed before 01/01/1871. c) Weapons in 4 mm M20 with the approval marks “F in the pentagon” and “PTB in the square”.",
     "ru_q":"Какое из следующих видов оружия необходимо для покупки карты владения оружием?",
     "ru_a":"a) Пневматические винтовки без знака официального утверждения «F im Fünfeck», которые были изготовлены после 01.01.1970 (за исключением производства Восточной Германии). b) Ударные револьверы, образец которых был разработан до 01.01.1871. c) Оружие калибра 4 мм M20 с знаками официального утверждения «F в пятиугольнике» и «PTB в квадрате».",
     "c":"abc"
  },
  {
     "id":"2.60",
     "de_q":"Schusswaffen können vorübergehend überlassen werden:",
     "de_a":"a) dem Inhaber einer WBK. b) einer Person des persönlichen Vertrauens. c) einer Person mit bestandener Sachkundeprüfung.",
     "en_q":"Firearms can be left temporarily:",
     "en_a":"a) the owner of a WBK. b) a person of personal trust. c) a person who has passed the technical examination.",
     "ru_q":"Огнестрельное оружие можно временно оставить:",
     "ru_a":"a) владелец WBK. b) человек личного доверия. c) лицо, сдавшее технический экзамен.",
     "c":"a"
  },
  {
     "id":"2.61",
     "de_q":"Wem darf auf einer Schießstätte eine Kleinkaliber-Pistole überlassen werden, wenn eine für die Jugendarbeit geeignete Aufsichtsperson zur Verfügung steht?",
     "de_a":"a) Einem 12-jährigen, wenn eine schriftliche oder elektronische Einverständniserklärung des Sorgeberechtigten vorliegt. b) Einem 14-jährigen, wenn eine schriftliche oder elektronische Einverständniserklärung des Sorgeberechtigten vorliegt. c) Einem 14-jährigen, aber nur wenn er Mitglied der Schützenjugend ist.",
     "en_q":"Who may be given a small-bore pistol at a shooting range if a suitable supervisor is available for youth work?",
     "en_a":"a) A 12-year-old if a written or electronic declaration of consent is available from the custodian. b) A 14-year-old, if a written or electronic declaration of consent is available from the custodian. c) A 14-year-old, but only if he is a member of the Schützenjugend.",
     "ru_q":"Кому можно дать малокалиберный пистолет на стрельбище, если есть подходящий руководитель для работы с молодежью?",
     "ru_a":"a) 12-летний ребенок, если у хранителя имеется письменное или электронное заявление о согласии. b) 14-летнего возраста, если у хранителя имеется письменное или электронное заявление о согласии. c) 14-летний, но только если он является членом Schützenjugend.",
     "c":"b"
  },
  {
     "id":"2.62",
     "de_q":"Wem dürfen Sie während Ihres 3- wöchigen Urlaubs ihre erlaubnispflichtigen Schusswaffen zur Aufbewahrung überlassen?",
     "de_a":"a) befreundeten Polizeibeamten b) Inhabern einer Waffenbesitzkarte c) besonders vertrauenswürdigen Personen (z.B. Notar, Pfarrer)",
     "en_q":"Whom can you leave your firearms that require a permit for safekeeping during your 3-week holiday?",
     "en_a":"a) befriended police officers b) holders of a gun ownership card c) particularly trustworthy persons (e.g. notary, pastor)",
     "ru_q":"Кому вы можете оставить свое огнестрельное оружие, которое требует разрешения на хранение во время вашего трехнедельного отпуска?",
     "ru_a":"a) друзья полиции b) обладатели карточки владения оружием c) особо надежные лица (например, нотариус, пастор)",
     "c":"b"
  },
  {
     "id":"2.63",
     "de_q":"Wer benötigt keinen Waffenschein?",
     "de_a":"a) Derjenige, der eine erlaubnispflichtige Kurzwaffe als Bewachungsunternehmer im Rahmen seiner Tätigkeit führt. b) Derjenige, der eine erlaubnispflichtige Kurzwaffe während einer traditionellen Brauchtumsveranstaltung (z.B. Schützenaufmarsch) führt. c) Derjenige, der als Inhaber eines gültigen Jagdscheins eine erlaubnispflichtige Kurzwaffe während der berechtigten Jagdausübung führt.",
     "en_q":"Who doesn't need a gun license?",
     "en_a":"a) Anyone who uses a handgun subject to authorization as a security company as part of his activity. b) Anyone who wields a handgun that requires a license during a traditional event (e.g. rifle march). c) Anyone who, as the holder of a valid hunting license, wields a handgun that requires a permit while hunting.",
     "ru_q":"Кому не нужна лицензия на оружие?",
     "ru_a":"a) Любой, кто использует пистолет при условии авторизации охранной компании в рамках своей деятельности. b) Любой, кто владеет пистолетом, требующим лицензии, во время традиционного мероприятия (например, марша из винтовки). c) Любой, кто как владелец действующей охотничьей лицензии владеет пистолетом, требующим разрешения во время охоты.",
     "c":"c"
  },
  {
     "id":"2.64",
     "de_q":"Was darf der Inhaber eines Kleinen Waffenscheins?",
     "de_a":"a) Schreckschuss-, Reizstoff- und Signalwaffen mit dem Zulassungszeichen „PTB im Kreis“ in der Öffentlichkeit (ausgenommen öffentliche Veranstaltungen) führen. b) Druckluft- und CO2-Waffen mit dem Zulassungszeichen „F im Fünfeck“ in der Öffentlichkeit (ausgenommen öffentliche Veranstaltungen) führen. c) Erlaubnispflichtige Schusswaffen lediglich vorübergehend, höchstens aber für einen Monat von einem Berechtigen zur sicheren Lagerung übernehmen.",
     "en_q":"What is the holder of a small gun license allowed to do?",
     "en_a":"a) Carrying alarm weapons, irritant weapons and signal weapons with the approval mark “PTB in a circle” in public (except for public events). b) Carry compressed air and CO2 weapons with the approval mark “F in the pentagon” in public (except for public events). c) Taking over firearms requiring a license only temporarily, but for a maximum of one month, from an authorized person for safe storage.",
     "ru_q":"Что может делать обладатель лицензии на стрелковое оружие?",
     "ru_a":"a) ношение тревожного, раздражающего и сигнального оружия с отметкой «ПТБ по кругу» в общественных местах (кроме массовых мероприятий). b) Носить оружие со сжатым воздухом и CO2 со знаком допуска «F в пятиугольнике» публично (за исключением публичных мероприятий). c) Принятие огнестрельного оружия, требующего лицензии, только временно, но не более одного месяца, от уполномоченного лица для безопасного хранения.",
     "c":"a"
  },
  {
     "id":"2.65",
     "de_q":"Wozu berechtigt der Kleine Waffenschein?",
     "de_a":"a) Zum Erwerb von Schreckschuss-, Reizstoff- und Signalwaffen, sofern diese das Zulassungszeichen „PTB im Kreis“ tragen. b) Zum Besitz von Schreckschuss-, Reiz stoff- und Signalwaffen, sofern diese das Zulassungszeichen „PTB im Kreis“ tragen. c) Zum Führen von Schreckschuss-, Reizstoff- und Signalwaffen, sofern diese das Zulassungszeichen „PTB im Kreis“ tragen.",
     "en_q":"What does the small gun license entitle you to?",
     "en_a":"a) For the acquisition of alarm weapons, irritant weapons and signal weapons, provided that these bear the approval mark “PTB in a circle”. b) For possession of alarm guns, stimulant weapons and signal weapons, provided that these bear the approval mark “PTB in a circle”. c) For carrying alarm weapons, irritant weapons and signal weapons, provided that these bear the approval mark “PTB in a circle”.",
     "ru_q":"На что вам дает лицензия на стрелковое оружие?",
     "ru_a":"a) для приобретения сигнального оружия, оружия раздражающего действия и сигнального оружия при условии, что на них имеется знак официального утверждения «PTB в круге». b) при хранении сигнального, стимулирующего и сигнального оружия при наличии на них знака официального утверждения «PTB в круге». c) для ношения сигнального оружия, оружия раздражающего действия и сигнального оружия при условии, что они имеют знак официального утверждения «PTB в круге».",
     "c":"c"
  },
  {
     "id":"2.66",
     "de_q":"Welche Erlaubnisse berechtigen zum zugriffsbereiten Führen außerhalb der eigenen Wohnung, der eigenen Geschäftsräume und des eigenen befriedeten Besitztums einer Druckluftwaffe (mit Zulassungszeichen „F im Fünfeck“)?",
     "de_a":"a) Kleiner Waffenschein in Verbindung mit einem gültigen Ausweis b) Waffenbesitzkarte in Verbindung mit Sportschützenausweis c) Waffenschein oder behördliche Ausnahmegenehmigung",
     "en_q":"Which permits entitle you to access and use outside your own apartment, your own business premises and your own satisfied possession of a compressed air weapon (with the approval mark “F in pentagon”)?",
     "en_a":"a) Small gun license in connection with a valid ID b) Gun ownership card in connection with a shooting license c) Gun license or official exemption",
     "ru_q":"Какие разрешения дают вам право доступа и использования вне вашей квартиры, вашего собственного служебного помещения и вашего собственного довольного владения пневматическим оружием (со знаком одобрения «F в пятиугольнике»)?",
     "ru_a":"a) Лицензия на стрелковое оружие в сочетании с действующим удостоверением личности b) Карточка владения оружием в связи с лицензией на стрельбу c) Лицензия на оружие или официальное освобождение",
     "c":"c"
  },
  {
     "id":"2.67",
     "de_q":"Welche Gegenstände dürfen grundsätzlich nicht in der Öffentlichkeit geführt werden?",
     "de_a":"a) Anscheinswaffen (originalgetreue Imitate von Feuerwaffen) b) Schweizer Taschenmesser und Gurtschneider c) Feststehende Messer mit einer Klingenlänge über 12 cm und Einhandmesser",
     "en_q":"Which objects are generally not allowed to be shown in public?",
     "en_a":"a) Fake weapons (imitations of firearms true to the original) b) Swiss army knives and belt cutters c) Fixed knives with a blade length of over 12 cm and one-hand knives",
     "ru_q":"Какие объекты обычно не разрешается показывать публично?",
     "ru_a":"a) Поддельное оружие (имитация огнестрельного оружия, соответствующая оригиналу) b) Швейцарские армейские ножи и резаки для ремней c) Несъемные ножи с длиной лезвия более 12 см и одноручные ножи",
     "c":"ac"
  },
  {
     "id":"2.68",
     "de_q":"Unter welchen Voraussetzungen dürfen Hieb- und Stoßwaffen, feststehen de Messer mit einer Klingenlänge über 12 cm und Einhandmesser ausnahmsweise in der Öffentlichkeit geführt werden?",
     "de_a":"a) Für den Fall, dass man sich irgendwann einmal selbst verteidigen muss. b) Beim Transport in einem verschlossenen Behältnis. c) Sofern ein berechtigtes Interesse am Führen vorliegt (z. B. im Zusammen hang mit der Berufsausübung, der Brauchtumspflege, dem Sport oder einem allgemein anerkannten Zweck).",
     "en_q":"Under what conditions may cut and thrust weapons, fixed knives with a blade length of over 12 cm and one-hand knives be used in public in exceptional cases?",
     "en_a":"a) In the event that you have to defend yourself at some point. b) When transported in a closed container. c) If there is a legitimate interest in leading (e.g. in connection with the practice of the profession, the maintenance of customs, sport or a generally recognized purpose).",
     "ru_q":"При каких условиях можно использовать рубящее и колющее оружие, фиксированные ножи с длиной лезвия более 12 см и одноручные ножи в общественных местах в исключительных случаях?",
     "ru_a":"a) В случае, если вам в какой-то момент придется защищаться. b) При транспортировке в закрытой таре. c) Если есть законный интерес к руководству (например, в связи с профессиональной деятельностью, поддержанием обычаев, спортом или общепризнанной целью).",
     "c":"bc"
  },
  {
     "id":"2.69",
     "de_q":"Wer benötigt einen Waffenschein?",
     "de_a":"a) Wer eine erlaubnispflichtige Schusswaffe besitzt. b) Wer als Berechtigter mehr als drei Waffen zum Schießstand transportieren will. c) Wer eine Schusswaffe außerhalb der eigenen Wohnung, Geschäftsräume, des befriedeten Besitztums oder der Schießstätte zugriffsbereit führen möchte.",
     "en_q":"Who needs a gun license?",
     "en_a":"a) Anyone who has a firearm that requires a license. b) Anyone entitled to transport more than three weapons to the shooting range. c) Anyone who wants to keep a firearm within reach outside of their own home, business premises, fenced property or shooting range.",
     "ru_q":"Кому нужна лицензия на оружие?",
     "ru_a":"a) Любой, у кого есть огнестрельное оружие, требующее лицензии. b) Любой человек, имеющий право провозить на стрельбище более трех единиц оружия. c) Любой, кто хочет держать огнестрельное оружие в пределах досягаемости за пределами своего дома, служебных помещений, огороженной территории или стрельбища.",
     "c":"c"
  },
  {
     "id":"2.70",
     "de_q":"Zum Führen welcher Waffen benötigt man keine Erlaubnis?",
     "de_a":"a) Waffen mit dem Zeichen b) Reizstoff-Sprühdosen mit dem Zeichen c) Waffen mit dem Zeichen",
     "en_q":"Which weapons do you not need a permit to carry?",
     "en_a":"a) Weapons with the mark b) Irritant spray cans with the mark c) Weapons marked with the mark",
     "ru_q":"Какое оружие вам не нужно иметь разрешение на ношение?",
     "ru_a":"a) Оружие с меткой b) Раздражающие аэрозольные баллончики с меткой c) Оружие с меткой",
     "c":"b"
  },
  {
     "id":"2.71",
     "de_q":"Für welche Art des Umgangs mit Schusswaffen benötigt man einen Waffenschein?",
     "de_a":"a) Transport einer erlaubnispflichtigen Waffe zum Schießstand b) Selbstschutz zu Hause c) Zugriffsbereites Führen einer erlaubnispflichtigen Waffe auf der Straße",
     "en_q":"For what kind of handling of firearms do you need a gun license?",
     "en_a":"a) Transporting a weapon that requires a permit to the shooting range b) Self-protection at home c) Carrying a weapon that requires a permit on the street with accessibility",
     "ru_q":"Для обращения с огнестрельным оружием вам нужна лицензия на оружие?",
     "ru_a":"a) Транспортировка оружия, для которого требуется разрешение, на стрельбище b) Самозащита дома c) Ношение оружия, требующего разрешения, на улице с доступом",
     "c":"c"
  },
  {
     "id":"2.72",
     "de_q":"Als Erlaubnis zum zugriffsbereiten Führen einer Waffe braucht man den Kleinen Waffenschein für...",
     "de_a":"a) Druckluft-, Federdruck-, CO2 Waffen. b) Schreckschuss-, Reizstoff-, Signalwaffen mit dem Zeichen „PTB im Kreis“ (PTB = Physikalisch-Technische Bundesanstalt). c) Feuerwaffen, die nicht zugriffs- und nicht schussbereit transportiert werden.",
     "en_q":"You need a small gun license for ...",
     "en_a":"a) Compressed air, spring pressure, CO2 weapons. b) Blank firing, irritant and signal weapons with the symbol “PTB in a circle” (PTB = Physikalisch-Technische Bundesanstalt). c) Firearms that are not being transported and are not ready to fire.",
     "ru_q":"Вам нужна лицензия на стрелковое оружие для ...",
     "ru_a":"a) Сжатый воздух, давление пружины, оружие CO2. b) Холостое, раздражающее и сигнальное оружие с обозначением «PTB в круге» (PTB = Physikalisch-Technische Bundesanstalt). c) огнестрельное оружие, которое не перевозится и не готово к стрельбе.",
     "c":"b"
  },
  {
     "id":"2.73",
     "de_q":"Wie ist eine Schusswaffe von der Wohnung zu der Schießstätte zu transportieren, wenn kein Waffenschein erteilt wurde?",
     "de_a":"Beim Transport darf die Waffe nicht zugriffsbereit und nicht schussbereit sein.",
     "en_q":"How should a firearm be transported from the apartment to the shooting range if a gun license has not been issued?",
     "en_a":"The weapon must not be accessible or ready to fire during transport.",
     "ru_q":"Как перевезти огнестрельное оружие из квартиры на стрельбище, если лицензия на оружие не выдана?",
     "ru_a":"Во время транспортировки оружие не должно быть доступным или готовым к стрельбе.",
     "c":"x"
  },
  {
     "id":"2.74",
     "de_q":"a) Welche Signalwaffen können erlaubnisfrei erworben werden? b) Dürfen diese zugriffsbereit geführt werden?",
     "de_a":"a) Signalwaffen mit dem Bauartzulassungszeichen „PTB im Kreis“ (PTB = Physikalisch Technische Bundesanstalt). b) Das Führen ist nur mit dem Kleinen Waffen schein erlaubt.",
     "en_q":"a) Which signal weapons can be purchased without permission? b) May these be kept readily accessible?",
     "en_a":"a) Signal weapons with the type approval mark “PTB in a circle” (PTB = Physikalisch Technische Bundesanstalt). b) Carrying is only permitted with a small gun license.",
     "ru_q":"a) Какое сигнальное оружие можно купить без разрешения? b) Могут ли они быть легкодоступными?",
     "ru_a":"a) Сигнальное оружие со знаком официального утверждения типа «PTB в круге» (PTB = Physikalisch Technische Bundesanstalt). b) Ношение разрешено только при наличии лицензии на стрелковое оружие.",
     "c":"x"
  },
  {
     "id":"2.75",
     "de_q":"Benötigen Jäger zur befugten Jagdausübung einen Waffenschein?",
     "de_a":"Nein",
     "en_q":"Do hunters need a gun license to be authorized to hunt?",
     "en_a":"no",
     "ru_q":"Нужна ли охотникам лицензия на оружие для получения разрешения на охоту?",
     "ru_a":"нет",
     "c":"x"
  },
  {
     "id":"2.76",
     "de_q":"Wer benötigt einen Waffenschein?",
     "de_a":"a) Wer eine „scharfe“ Waffe zu Hause führt. b) Wer eine Druckluftpistole unverpackt auf dem Rücksitz im PKW mitnimmt. c) Wer mit der Armbrust auf einem Feld schießt.",
     "en_q":"Who needs a gun license?",
     "en_a":"a) Anyone who has a “live” weapon at home. b) Anyone who takes a compressed air pistol unpacked on the back seat of the car. c) Whoever shoots a crossbow in a field.",
     "ru_q":"Кому нужна лицензия на оружие?",
     "ru_a":"a) Всем, у кого дома есть «живое» оружие. b) Тот, кто берет распакованный пистолет со сжатым воздухом на заднем сиденье автомобиля. c) Кто стреляет из арбалета в поле.",
     "c":"b"
  },
  {
     "id":"2.77",
     "de_q":"Bei welcher der nebenstehend aufgeführten Schusswaffen benötigt man einen Waffenschein, wenn man sie außerhalb der Wohnung zugriffsbereit „bei sich“ hat?",
     "de_a":"a) doppelläufiges Steinschlossgewehr (Modell vor 1871) b) Druckluftpistole mit einer Mündungsenergie bis zu 7,5 Joule c) Steinschloss-Duellpistole (Modell vor 1871)",
     "en_q":"For which of the firearms listed opposite do you need a gun license if you have them 'with you' outside the apartment?",
     "en_a":"a) double-barreled flintlock rifle (model before 1871) b) compressed air pistol with a muzzle energy of up to 7.5 joules c) flintlock duel pistol (model before 1871)",
     "ru_q":"На какое огнестрельное оружие, указанное напротив, вам нужно иметь лицензию на огнестрельное оружие, если оно у вас «с собой» вне квартиры?",
     "ru_a":"a) двустволка с кремневым замком (модель до 1871 г.) b) пневматический пистолет с дульной энергией до 7,5 джоулей c) дуэльный пистолет с кремневым замком (модель до 1871 г.)",
     "c":"b"
  },
  {
     "id":"2.78",
     "de_q":"Einer Erlaubnis zum Führen einer erlaubnispflichtigen Schusswaffe bedarf nicht,",
     "de_a":"a) wer diese beim Schießen auf Schießstätten zu einem vom Bedürfnis um fassten Zweck oder im Zusammen hang damit verwendet. b) wer die Waffe als Sportschütze unverpackt auf dem PKW-Rücksitz zum Büchsenmacher bringt. c) wer die Waffe seinen Freunden auf der Straße zeigt.",
     "en_q":"A license to carry a firearm that requires a license is not required,",
     "en_a":"a) Whoever uses them when shooting at the shooting range for a purpose defined by the need or in connection with it. b) Anyone who, as a marksman, brings the weapon to the gunsmith unpacked in the back seat of a car. c) who shows the gun to his friends on the street.",
     "ru_q":"Лицензия на ношение огнестрельного оружия, требующая лицензии, не требуется,",
     "ru_a":"a) Кто бы ни использовал их при стрельбе на стрельбище для цели, определенной необходимостью или в связи с ней. b) Тот, кто в качестве стрелка приносит оружейнику распакованное на заднем сиденье автомобиля оружие. c) который показывает пистолет своим друзьям на улице.",
     "c":"a"
  },
  {
     "id":"2.79",
     "de_q":"Benötigen Sie zum Führen einer Druckluftpistole (mit Kennzeichnung „F im Fünfeck“) im Gürtelholster einen Waffenschein?",
     "de_a":"a) Ja b) Nein c) Nur, wenn ich noch nicht volljährig bin.",
     "en_q":"Do you need a gun license to carry a compressed air pistol (marked “F in the pentagon”) in your belt holster?",
     "en_a":"a) Yes b) No c) Only if I am not yet of legal age.",
     "ru_q":"Вам нужна лицензия на оружие, чтобы носить пистолет со сжатым воздухом (помеченный буквой F в пятиугольнике) в кобуре на поясе?",
     "ru_a":"a) Да b) Нет c) Только если я еще не достиг совершеннолетия.",
     "c":"a"
  },
  {
     "id":"2.80",
     "de_q":"Welcher der genannten Gegenstände darf nicht ohne weiteres geführt werden?",
     "de_a":"a) Baseballschläger b) Klappmesser mit 14 cm langer, nicht feststellbarer einseitig geschliffener Klinge. c) Kochmesser mit 14 cm langer Klinge. d) Samuraischwert e) Schlagstock",
     "en_q":"Which of the items mentioned may not be carried out without further ado?",
     "en_a":"a) Baseball bat b) Folding knife with a 14 cm long, non-lockable blade that is sharpened on one side. c) Chef's knife with a 14 cm long blade. d) Samurai sword e) Baton",
     "ru_q":"Какие из упомянутых пунктов нельзя выполнять без лишних слов?",
     "ru_a":"a) Бейсбольная бита. b) Складной нож с лезвием длиной 14 см без фиксации, заостренным с одной стороны. c) Поварской нож с лезвием длиной 14 см. d) Самурайский меч e) Дубинка",
     "c":"cde"
  },
  {
     "id":"2.81",
     "de_q":"Ist der Umgang mit sogenannten Pfeilabschussgeräten im Sinne des Waffengesetzes erlaubnispflichtig und der Eintrag in eine Waffenbesitzkarte erforderlich?",
     "de_a":"a) Ja, da Pfeilabschussgeräte nicht in der Anlage 2 Unterabschnitt 2 - erlaubnisfreie Arten des Umgangs genannt sind. b) Nein, sie sind waffenrechtlich wie Armbrüste einzuordnen.",
     "en_q":"Does the use of so-called arrow launchers require a permit within the meaning of the Weapons Act and does it require entry in a weapons possession card?",
     "en_a":"a) Yes, as arrow launchers are not listed in Appendix 2, Subsection 2 - Permission-free types of handling. b) No, they are to be classified like crossbows in terms of weapons law.",
     "ru_q":"Требуется ли разрешение на использование так называемых стрелковых установок по смыслу Закона об оружии и требуется ли запись в карточке владения оружием?",
     "ru_a":"a) Да, поскольку стрелковые установки не указаны в Приложении 2, Подраздел 2 - Беспрепятственные виды обращения. b) Нет, они должны классифицироваться как арбалеты с точки зрения закона об оружии.",
     "c":"a"
  },
  {
     "id":"2.82",
     "de_q":"Um Ihre Vorderschaftrepetierflinte leichter transportieren zu können ersetzen Sie den normalen Schaft durch einen Pistolengriff.",
     "de_a":"a) Das ist verboten. b) Änderungen am Schaft sind zulässig, wenn die Waffe danach noch mindestens 61 cm lang ist. c) Das ist nur Jägern erlaubt.",
     "en_q":"To be able to transport your forearm repeater more easily, replace the normal stock with a pistol grip.",
     "en_a":"a) That is forbidden. b) Changes to the stock are permitted if the weapon is still at least 61 cm long afterwards. c) Only hunters are allowed to do this.",
     "ru_q":"Чтобы упростить транспортировку репетира на цевье, замените обычный приклад пистолетной рукояткой.",
     "ru_a":"a) Это запрещено. b) Изменения ложи разрешены, если после этого длина оружия все еще составляет не менее 61 см. c) Это разрешено делать только охотникам.",
     "c":"a"
  },
  {
     "id":"2.83",
     "de_q":"Welche Legitimationspapiere sind beim Transport einer erlaubnispflichtigen Schusswaffe durch einen Sportschützen mitzuführen?",
     "de_a":"a) Personal-/Reisepass und Schützenausweis b) Waffenbesitzkarte und Waffenschein c) Personalausweis oder Reisepass und Waffenbesitzkarte",
     "en_q":"Which legitimation papers have to be carried by a marksman when transporting a firearm that requires a permit?",
     "en_a":"a) Personal / passport and riflemen's ID b) Gun ownership card and gun license c) ID card or passport and gun license",
     "ru_q":"Какие разрешительные документы должен иметь при себе стрелок при транспортировке огнестрельного оружия, требующего разрешения?",
     "ru_a":"a) Личный / паспорт и удостоверение стрелка b) Карточка владения оружием и лицензия на оружие c) Удостоверение личности или паспорт и лицензия на оружие",
     "c":"c"
  },
  {
     "id":"2.84",
     "de_q":"Welche Dokumente muss ein Sportschütze mitführen, der a) seine eigene erlaubnispflichtige Waffe zum Schießstand führt (nicht zugriffs- bzw. schussbereit) b) die erlaubnispflichtige Waffe eines anderen zum Schießstand führt (nicht zugriffs- bzw. schussbereit)?",
     "de_a":"a) Personalausweis oder Reisepass und WBK b) Personalausweis oder Reisepass, die eigene WBK und eine Bescheinigung des Überlassens mit Datum der Überlassung.",
     "en_q":"Which documents must a sports shooter carry with him who a) brings his own weapon that requires a license to the shooting range (not ready for access or ready to fire) b) carries someone else's weapon that requires a license to the shooting range (not ready for access or ready to fire)?",
     "en_a":"a) Identity card or passport and WBK b) Identity card or passport, your own WBK and a certificate of leasing with the date of leasing.",
     "ru_q":"Какие документы должен иметь при себе спортивный стрелок, который: а) приносит свое собственное оружие, требующее лицензии, на стрельбище (не готово для доступа или не готово к стрельбе) b) носит чужое оружие, требующее лицензии на стрельбище (не готов к доступу или готов к стрельбе)?",
     "ru_a":"a) Удостоверение личности или паспорт и WBK b) Удостоверение личности или паспорт, ваш собственный WBK и свидетельство об аренде с датой аренды.",
     "c":"x"
  },
  {
     "id":"2.85",
     "de_q":"Welche Dokumente benötigen Sie zum zugriffsbereiten Führen einer bauartzugelassenen Schreckschusswaffe?",
     "de_a":"a) Keine Dokumente erforderlich, da der Erwerb ja auch genehmigungsfrei ist. b) Kleiner Waffenschein und Personalausweis oder Reisepass c) Waffenbesitzkarte und Personalausweis oder Reisepass",
     "en_q":"Which documents do you need in order to have access to a type-approved alarm gun?",
     "en_a":"a) No documents required, as the acquisition does not require a permit. b) Small gun license and identity card or passport c) Gun ownership card and identity card or passport",
     "ru_q":"Какие документы вам нужны, чтобы иметь доступ к одобренному типу сигнального пистолета?",
     "ru_a":"a) Никаких документов не требуется, так как приобретение не требует разрешения. b) Лицензия на стрелковое оружие и удостоверение личности или паспорт c) Карточка владения оружием и удостоверение личности или паспорт",
     "c":"b"
  },
  {
     "id":"2.86",
     "de_q":"Der Transport einer Kleinkaliber Sportpistole durch einen WBK Inhaber bedarf keiner Erlaubnis, wenn diese…",
     "de_a":"a) im nicht einsehbaren Handschuhfach eines Pkw befördert wird. b) versteckt am Körper getragen wird. c) ungeladen im verschlossenen Waffenkoffer befördert wird, wenn der Transport zu einem vom Bedürfnis umfassten Zweck erfolgt.",
     "en_q":"The transport of a small caliber sport pistol by a WBK holder does not require a permit if this ...",
     "en_a":"a) is carried in the non-visible glove compartment of a car. b) is worn hidden on the body. c) is transported unloaded in a locked gun case if the transport is for a purpose covered by the need.",
     "ru_q":"Транспортировка спортивного пистолета малого калибра держателем WBK не требует разрешения, если это ...",
     "ru_a":"a) перевозится в невидимом бардачке автомобиля. b) носит скрытно на теле. c) транспортируется без груза в запертом ящике для оружия, если транспортировка предназначена для целей, предусмотренных необходимостью.",
     "c":"c"
  },
  {
     "id":"2.87",
     "de_q":"Darf ein Anderer als der WBK Inhaber dessen Kurzwaffe zur Instandsetzung zum Waffengeschäft bringen?",
     "de_a":"a) Ja, wenn er Inhaber einer WBK ist oder die Waffe gewerblich transportiert. b) Nein, das ist nicht erlaubt. c) Das muss immer erst bei der Behörde beantragt werden.",
     "en_q":"Can someone other than the WBK owner bring his handgun to the gun shop for repairs?",
     "en_a":"a) Yes, if he is the owner of a WBK or is transporting the weapon commercially. b) No, that is not allowed. c) This must always be requested from the authority first.",
     "ru_q":"Может ли кто-нибудь, кроме владельца WBK, принести его пистолет в оружейный магазин для ремонта?",
     "ru_a":"a) Да, если он является владельцем WBK или занимается коммерческой транспортировкой оружия. b) Нет, это запрещено. c) Это всегда должно быть запрошено в первую очередь у властей.",
     "c":"a"
  },
  {
     "id":"2.88",
     "de_q":"Sie wollen den defekten Lauf ihrer Pistole zum Waffenhändler bringen. Wie nehmen sie ihn waffenrechtlich einwandfrei mit?",
     "de_a":"Bei einem Lauf handelt es sich um ein wesentliches Teil einer Waffe. Diese stehen den Schusswaffen gleich. Der Lauf ist deshalb nicht zugriffsbereit zu transportieren.",
     "en_q":"They want to take the defective barrel of their pistol to the arms dealer. How do you take him with you in accordance with gun law?",
     "en_a":"A barrel is an essential part of a weapon. These are the same as firearms. The barrel is therefore not accessible to transport.",
     "ru_q":"Они хотят отнести дефектный ствол своего пистолета торговцу оружием. Как взять его с собой в соответствии с законом об оружии?",
     "ru_a":"Ствол - неотъемлемая часть оружия. Это то же самое, что и огнестрельное оружие. Таким образом, ствол недоступен для транспортировки.",
     "c":"x"
  },
  {
     "id":"2.89",
     "de_q":"Was ist beim Transport einer Schusswaffe von der Wohnung zur Schießstätte zu beachten?",
     "de_a":"Beim Transport darf die Waffe nicht schussbereit und nicht zugriffsbereit sein. Der Transport darf nur zum vom Bedürfnis umfassten Zweck erfolgen.",
     "en_q":"What should you watch out for when transporting a firearm from your home to the shooting range?",
     "en_a":"The weapon must not be ready to fire or accessible during transport. The transport may only take place for the purpose covered by the need.",
     "ru_q":"На что следует обращать внимание при транспортировке огнестрельного оружия из дома на стрельбище?",
     "ru_a":"Оружие не должно быть готовым к стрельбе или доступным во время транспортировки. Транспортировка может осуществляться только в целях, предусмотренных необходимостью.",
     "c":"x"
  },
  {
     "id":"2.90",
     "de_q":"Erlaubnisfreies Führen im Sinne des Waffengesetzes liegt vor, wenn man als WBK-Inhaber die Waffe...",
     "de_a":"a) bei einer Schützenhochzeit zum Spalier stehen verwendet. b) im verschlossenen Kofferraum des PKW, ungeladen und verpackt zum Schießstand fährt. c) im verschlossenen Waffenkoffer zum Büchsenmacher transportiert.",
     "en_q":"License-free carrying within the meaning of the Weapons Act exists if, as a WBK holder, the weapon ...",
     "en_a":"a) used to stand in a trellis at a rifleman wedding. b) drives to the shooting range in the locked trunk of the car, unloaded and packed. c) transported to the gunsmith in a locked gun case.",
     "ru_q":"Безлицензионное ношение по смыслу Закона об оружии существует, если в качестве держателя WBK оружие ...",
     "ru_a":"a) на свадьбе стрелков стояла в решетке. b) подъезжает к стрельбищу в запертом багажнике автомобиля в разряженном и упакованном виде. c) доставляется оружейнику в запертом футляре для оружия.",
     "c":"bc"
  },
  {
     "id":"2.91",
     "de_q":"Unter welchen Voraussetzungen darf man in einem fremden Besitztum eine Schusswaffe ohne Waffenschein bei sich haben?",
     "de_a":"Unter der Voraussetzung, dass das Führen der Waffe vom Bedürfnis umfasst ist oder damit im Zusammenhang steht und der Hausrechtsinhaber zugestimmt hat.",
     "en_q":"Under what conditions can you have a firearm with you in someone else's possession without a gun license?",
     "en_a":"Provided that the use of the weapon is included in the need or is related to it and the owner of the house rights has consented.",
     "ru_q":"При каких условиях вы можете иметь при себе огнестрельное оружие без лицензии на оружие?",
     "ru_a":"При условии, что использование оружия входит в необходимость или связано с этим, и владелец прав на дом дал согласие.",
     "c":"x"
  },
  {
     "id":"2.92",
     "de_q":"Bedarf es zum Führen 1. einer nicht schussbereiten Waffe im unverschlossenen Handschuhfach oder 2. einer schussbereiten Waffe im verschlossenen Handschuhfach eines Waffenscheines?",
     "de_a":"Zu 1: Ja Zu 2: Ja",
     "en_q":"Is it necessary to carry 1. a weapon that is not ready to fire in the unlocked glove compartment or 2. a weapon that is ready to fire in the locked glove compartment of a gun license?",
     "en_a":"To 1: Yes To 2: Yes",
     "ru_q":"Обязательно ли носить 1. оружие, которое не готово к стрельбе, в незапертом бардачке или 2. оружие, готовое к стрельбе, в запертом перчаточном ящике лицензии на оружие?",
     "ru_a":"Кому 1: Да До 2: Да",
     "c":"x"
  },
  {
     "id":"2.93",
     "de_q":"Dürfen Teilnehmer an öffentlichen Veranstaltungen, insbesondere an Volksfesten und öffentlichen Vergnügungen, Waffen mit sich führen?",
     "de_a":"Nein, es sei denn, die zuständige Behör de hat allgemein oder für den Einzelfall eine Ausnahme zugelassen.",
     "en_q":"Are participants in public events, in particular at public festivals and public amusements, allowed to carry weapons with them?",
     "en_a":"No, unless the competent authority has approved an exception in general or for individual cases.",
     "ru_q":"Разрешено ли участникам массовых мероприятий, в частности, массовых фестивалей и массовых аттракционов носить с собой оружие?",
     "ru_a":"Нет, если только компетентный орган не утвердил исключение в целом или для отдельных случаев.",
     "c":"x"
  },
  {
     "id":"2.94",
     "de_q":"Brauchen Sie zum zugriffsbereiten Führen von Druckluft-, Federdruck oder CO2-Waffen in der Öffentlichkeit einen Waffenschein?",
     "de_a":"Ja (Der Kleine Waffenschein reicht nicht aus.)",
     "en_q":"Do you need a gun license to carry compressed air, spring pressure or CO2 guns in public?",
     "en_a":"Yes (the small gun license is not enough.)",
     "ru_q":"Вам нужна лицензия на огнестрельное оружие, чтобы носить пистолеты со сжатым воздухом, пружиной или CO2 в общественных местах?",
     "ru_a":"Да (лицензии на стрелковое оружие недостаточно.)",
     "c":"x"
  },
  {
     "id":"2.95",
     "de_q":"Ist der Transport einer erlaubnispflichtigen Schusswaffe durch den WBK-Inhaber von der Wohnung zum Schießstand zulässig?",
     "de_a":"a) Nur mit Waffenschein. b) Ja, wenn sie ungeladen und gesichert im Holster am Körper getragen wird. c) Ja, wenn sie nicht zugriffsbereit und nicht schussbereit transportiert wird und dies vom Bedürfnis umfasst ist.",
     "en_q":"Is it permissible for the WBK holder to transport a firearm that requires a permit from the apartment to the shooting range?",
     "en_a":"a) Only with a gun license. b) Yes, if it is worn unloaded and secured in the holster on the body. c) Yes, if it is not ready to be transported and not ready to fire and this is covered by the need ..",
     "ru_q":"Разрешено ли владельцу WBK перевозить огнестрельное оружие, требующее разрешения, из квартиры на стрельбище?",
     "ru_a":"a) Только с лицензией на оружие. b) Да, если носить его в разряженном состоянии и закрепить в кобуре на теле. c) Да, если он не готов к транспортировке и не готов к возгоранию, и это покрывается необходимостью.",
     "c":"c"
  },
  {
     "id":"2.96",
     "de_q":"Eine Erlaubnis zum Führen einer Schusswaffe im Sinne des Waffengesetzes ist erforderlich, wenn",
     "de_a":"a) ... sie entladen in der unverschlossenen Aktentasche mitgeführt wird. b) ... sie geladen in einer verschlossenen Aktentasche mitgeführt wird. c) ... sie sich entladen im unverschlossenen Handschuhfach eines PKW befindet und die Munition in einem Metallbehältnis mit Schwenkriegelschloss im Kofferraum mitgeführt wird.",
     "en_q":"A license to carry a firearm within the meaning of the Weapons Act is required if",
     "en_a":"a) ... it is unloaded and carried in the unlocked briefcase. b) ... it is loaded and carried in a locked briefcase. c) ... it is unloaded in the unlocked glove compartment of a car and the ammunition is carried in a metal container with a swing bolt lock in the trunk.",
     "ru_q":"Лицензия на ношение огнестрельного оружия по смыслу Закона об оружии требуется, если",
     "ru_a":"a) ... он разгружается и переносится в незапертом портфеле. b) ... он загружается и переносится в закрытом портфеле. c) ... он выгружается в незапертом бардачке автомобиля, а боеприпасы перевозятся в металлическом контейнере с откидным замком в багажнике.",
     "c":"abc"
  },
  {
     "id":"2.97",
     "de_q":"Wer ist zum zugriffsbereiten Führen von Schreckschuss-, Reizstoff- und Signalwaffen, deren Erwerb und Besitz erlaubnisfrei ist, berechtigt?",
     "de_a":"Inhaber des Kleinen Waffenscheines",
     "en_q":"Who is authorized to carry alarm weapons, irritant weapons and signal weapons, the acquisition and possession of which does not require a permit?",
     "en_a":"Holder of the small gun license",
     "ru_q":"Кто имеет право носить сигнальное оружие, оружие раздражающего действия и сигнальное оружие, на приобретение и хранение которого не требуется разрешения?",
     "ru_a":"Обладатель лицензии на стрелковое оружие",
     "c":"x"
  },
  {
     "id":"2.98",
     "de_q":"Welche Schusswaffen bzw. sonstigen Waffen dürfen Sie bei öffentlichen Veranstaltungen „bei sich“ haben?",
     "de_a":"a) Erlaubt ist das Führen eines Schreckschussrevolvers, wenn ich den Kleinen Waffenschein habe. b) Steinschlosspistole, weil diese nach dem WaffG ohnehin geführt werden darf. c) Es dürfen keine Waffen im Sinne des § 1 Abs. 2 WaffG bei sich geführt werden.",
     "en_q":"Which firearms or other weapons can you have 'with you' at public events?",
     "en_a":"a) It is allowed to use a shock revolver if I have the small gun license. b) Flintlock pistol, because according to the WaffG it can be used anyway. c) You are not allowed to carry weapons within the meaning of Section 1 (2) WaffG.",
     "ru_q":"Какое огнестрельное или другое оружие можно иметь «с собой» на массовых мероприятиях?",
     "ru_a":"a) Разрешено использовать ударный револьвер, если у меня есть лицензия на стрелковое оружие. b) Пистолет с кремневым замком, потому что согласно WaffG его можно использовать в любом случае. c) Вам не разрешается носить оружие в значении Раздела 1 (2) WaffG.",
     "c":"c"
  },
  {
     "id":"2.99",
     "de_q":"Kann man eine im Ausland erworbene erlaubnispflichtige Schusswaffe in die Bundesrepublik einführen/verbringen?",
     "de_a":"a) Ja, ohne Einschränkung. b) Ja, mit Waffenbesitzkarte. c) Ja, mit Verbringungserlaubnissen der zuständigen Behörden.",
     "en_q":"Can a firearm acquired abroad that requires a permit be imported into the Federal Republic of Germany?",
     "en_a":"a) Yes, without restriction. b) Yes, with a gun license. c) Yes, with transfer permits from the responsible authorities.",
     "ru_q":"Можно ли ввозить в Федеративную Республику Германию огнестрельное оружие, приобретенное за границей и требующее разрешения?",
     "ru_a":"a) Да, без ограничений. b) Да, с лицензией на оружие. c) Да, с разрешениями на передачу от ответственных органов.",
     "c":"c"
  },
  {
     "id":"2.100",
     "de_q":"Unter welchen Voraussetzungen darf man eine im Ausland erworbene Schusswaffe, die in der Bundesrepublik Deutschland erlaubnispflichtig ist, in das Bundesgebiet einführen?",
     "de_a":"a) Nur, wenn man im Besitz einer in Deutschland gültigen Waffenbesitzkarte mit Voreintrag ist. b) Nur, wenn man im Besitz eines Europäischen Feuerwaffenpasses ist. c) Nur, wenn man im Besitz der entsprechenden Verbringungserlaubnis se ist.",
     "en_q":"Under what conditions can a firearm acquired abroad that requires a permit in the Federal Republic of Germany be imported into the federal territory?",
     "en_a":"a) Only if you are in possession of a weapon possession card valid in Germany with a pre-entry. b) Only if you are in possession of a European firearms pass. c) Only if you are in possession of the relevant transfer permit.",
     "ru_q":"На каких условиях можно ввозить на федеральную территорию огнестрельное оружие, приобретенное за границей и требующее разрешения в Федеративной Республике Германии?",
     "ru_a":"a) Только если у вас есть действующая в Германии карта владения оружием с предварительной записью. b) Только если у вас есть европейский пропуск на огнестрельное оружие. c) Только если у вас есть соответствующее разрешение на перемещение.",
     "c":"c"
  },
  {
     "id":"2.101",
     "de_q":"Was ist beim Verbringen von Schusswaffen über Staatsgrenzen immer zu beachten?",
     "de_a":"a) Beim Verbringen von Waffen nach Deutschland müssen vor Grenzüber tritt die erforderlichen Erlaubnisse (z.B. Verbringungserlaubnis) vorliegen. b) Beim Verbringen von Waffen aus Deutschland müssen vor Grenzüber tritt die erforderlichen Erlaubnisse des Ziellandes, der Bundesrepublik Deutschland und ggf. aller Transitländer vorliegen. c) Es genügt immer eine deutsche WBK.",
     "en_q":"What should you watch out for when bringing firearms across national borders?",
     "en_a":"a) When bringing weapons to Germany, the necessary permits (e.g. transfer permit) must be available before crossing the border. b) When bringing weapons from Germany, the necessary permits from the destination country, the Federal Republic of Germany and, if applicable, all transit countries must be available before the border is crossed . c) A German WBK is always sufficient.",
     "ru_q":"На что следует обращать внимание при ввозе огнестрельного оружия через национальные границы?",
     "ru_a":"a) При ввозе оружия в Германию необходимые разрешения (например, разрешение на передачу) должны быть доступны до пересечения границы. b) При ввозе оружия из Германии необходимые разрешения из страны назначения, Федеративной Республики Германии и, если применимо, все страны транзита должны быть доступны до пересечения границы. c) Немецкого WBK всегда достаточно.",
     "c":"ab"
  },
  {
     "id":"2.102",
     "de_q":"Was muss ein Waffenbesitzer veranlassen, wenn er seine erlaubnispflichtige Schusswaffe in einem anderen Mitgliedsstaat der Europäischen Union verkaufen möchte?",
     "de_a":"a) Nichts, der Verkauf von erlaubnispflichtigen Schusswaffen in das europäische Ausland ist generell erlaubnisfrei. b) Der Waffenbesitzer lässt sich die Erwerbserlaubnis des Käufers vorlegen und überlässt diesem dann die Waffe. Der Käufer meldet die Waffe nach Erhalt in seinem Heimatland an. Anschließend schickt er dem Verkäufer eine Kopie der Anmeldung, damit dieser die Waffe bei seiner Behörde abmelden kann. c) Er bittet den Käufer um Übersendung einer Erlaubnis des Empfängerlandes zur Einfuhr der Waffe. Anschließend beantragt der Verkäufer bei seiner zuständigen Behörde eine Erlaubnis zum dauerhaften Verbringen der Waffe ins Ausland. Erst nach Erlaubniserteilung darf die Waffe verbracht werden. (Die Behörde meldet die Erteilung der Ausfuhrerlaubnis dem Bundesverwaltungsamt, EU Meldedienst)",
     "en_q":"What does a gun owner have to do if he wants to sell his firearm, which requires a license, in another member state of the European Union?",
     "en_a":"a) Nothing, the sale of firearms requiring a license to other European countries is generally license-free. b) The gun owner has the buyer's license to purchase and then leaves the gun to him. The buyer registers the weapon in his home country upon receipt. He then sends the seller a copy of the registration so that he can de-register the weapon with his authorities. c) He asks the buyer to send a permit from the recipient country to import the weapon. The seller then applies to his competent authority for permission to permanently move the weapon abroad. The weapon may only be taken away after permission has been granted. (The authority reports the issue of the export permit to the Federal Administration Office, EU reporting service)",
     "ru_q":"Что должен сделать владелец оружия, если он хочет продать свое огнестрельное оружие, требующее лицензии, в другом государстве-члене Европейского Союза?",
     "ru_a":"a) Ничего, продажа огнестрельного оружия, требующая лицензии, в другие европейские страны, как правило, безлицензионная. b) Владелец оружия имеет лицензию покупателя на покупку и оставляет оружие ему. Покупатель регистрирует оружие в своей стране при получении. Затем он отправляет продавцу копию регистрации, чтобы он мог отменить регистрацию оружия в своих органах власти. c) Он просит покупателя прислать разрешение страны-получателя на импорт оружия. Затем продавец обращается в свой компетентный орган за разрешением на постоянный вывоз оружия за границу. Оружие можно забрать только после получения разрешения. (Орган сообщает о выдаче разрешения на экспорт в Федеральное административное управление, службу отчетности ЕС)",
     "c":"c"
  },
  {
     "id":"2.103",
     "de_q":"Darf man als Inhaber einer Waffenbesitzkarte eine im Ausland erworbene Schusswaffe in die Bundesrepublik Deutschland einführen?",
     "de_a":"a) Ja, aber nur wenn sich in der Waffenbesitzkarte ein entsprechender Voreintrag der zuständigen Erlaubnisbehörde befindet. b) Ja, die Waffe ist innerhalb von 14 Tagen bei der zuständigen Erlaubnisbehörde anzumelden. c) Nein, man benötigt vor der Einfuhr zunächst eine Verbringungserlaubnis seiner zuständigen Waffenbehörde und dann eine Verbringungserlaubnis des ausländischen Staates.",
     "en_q":"As a holder of a gun possession card, is it allowed to import a firearm acquired abroad into the Federal Republic of Germany?",
     "en_a":"a) Yes, but only if there is a corresponding entry from the relevant licensing authority on the weapon possession card. b) Yes, the weapon must be registered with the competent licensing authority within 14 days. c) No, before importation you first need a transfer permit from your competent weapons authority and then a transfer permit from the foreign country.",
     "ru_q":"Разрешено ли как владельцу карточки владения оружием ввозить в Федеративную Республику Германию огнестрельное оружие, приобретенное за границей?",
     "ru_a":"a) Да, но только при наличии соответствующей записи соответствующего лицензирующего органа в карточке владения оружием. b) Да, оружие должно быть зарегистрировано в компетентном лицензирующем органе в течение 14 дней. c) Нет, перед ввозом вам необходимо сначала разрешение на передачу от вашего компетентного органа по оружию, а затем разрешение на ввоз из другой страны.",
     "c":"c"
  },
  {
     "id":"2.104",
     "de_q":"Wozu berechtigt der Europäische Feuerwaffenpass?",
     "de_a":"Zur Mitnahme der dort eingetragenen Feuerwaffen und für diese bestimmten Munition in einen anderen Mitgliedsstaat. Eventuell ist eine Genehmigung des Mitgliedstaates notwendig.",
     "en_q":"What does the European Firearms Pass entitle you to?",
     "en_a":"To take the firearms registered there and ammunition intended for them to another member state. Approval from the member state may be required.",
     "ru_q":"На что дает вам европейский пропуск на огнестрельное оружие?",
     "ru_a":"Вывозить зарегистрированное там огнестрельное оружие и предназначенные для него боеприпасы в другое государство-член. Может потребоваться одобрение государства-члена.",
     "c":"x"
  },
  {
     "id":"2.105",
     "de_q":"Wozu berechtigt mich der Europäische Feuerwaffenpass?",
     "de_a":"a) Zum dauerhaften Verbringen von Feuerwaffen in Mitgliedstaaten. b) Zur Feuerwaffenmitnahme bei Reisen in Mitgliedstaaten, beispielsweise zur Teilnahme an schießsportlichen Veranstaltungen oder zur Jagd. c) Zur Feuerwaffenmitnahme bei Reisen in Mitgliedstaaten, muss ich die Reise mindestens 14 Tage vorher meiner zuständigen Erlaubnisbehörde schriftlich anzeigen.",
     "en_q":"What does the European Firearms Pass entitle me to?",
     "en_a":"a) For the permanent introduction of firearms in Member States. b) To take firearms with you when traveling in Member States, for example to take part in shooting events or to go hunting. c) In order to take firearms with me when traveling in member states, I must notify my competent licensing authority in writing of the trip at least 14 days in advance.",
     "ru_q":"На что мне дает европейский проездной на огнестрельное оружие?",
     "ru_a":"a) Для постоянного использования огнестрельного оружия в государствах-членах. b) брать с собой огнестрельное оружие во время поездок в государства-члены, например, для участия в стрельбах или на охоту. c) Чтобы взять с собой огнестрельное оружие во время путешествия по странам-участницам, я должен письменно уведомить свой компетентный лицензирующий орган о поездке не менее чем за 14 дней до поездки.",
     "c":"b"
  },
  {
     "id":"2.106",
     "de_q":"Wie können Feuerwaffen dauerhaft in einen anderen Mitgliedstaat verbracht werden?",
     "de_a":"a) Die Feuerwaffen können mit einem Europäischen Feuerwaffenpass verbracht werden. b) Eine Verbringungserlaubnis zum Verbringen in einen Mitgliedstaat ist nicht erforderlich. c) Durch vorherige Verbringungserlaubnis des Mitgliedsstaates und darauffolgend einer Verbringungserlaubnis der zuständigen deutschen Waffenbehörde.",
     "en_q":"How can firearms be moved permanently to another Member State?",
     "en_a":"a) The firearms can be brought with a European firearms passport. b) A transfer permit for transfer to a Member State is not required. c) Through a prior transfer permit from the member state and then a transfer permit from the competent German weapons authority.",
     "ru_q":"Как можно навсегда переместить огнестрельное оружие в другое государство-член?",
     "ru_a":"a) Огнестрельное оружие можно ввозить с европейским паспортом на огнестрельное оружие. b) Разрешение на передачу в государство-член не требуется. c) Путем предварительного разрешения на передачу от государства-члена, а затем разрешения на передачу от компетентного германского оружейного ведомства.",
     "c":"c"
  },
  {
     "id":"2.107",
     "de_q":"Welche Handlung erfüllt einen Straftatbestand im Sinne des Waffengesetzes?",
     "de_a":"a) Feuerwaffen werden dauerhaft ohne entsprechende Erlaubnisse zum Ver bringen in einen Mitgliedstaat verbracht. b) Feuerwaffen werden ohne eine waffenrechtliche Erlaubnis zur Ausfuhr in einen Drittstaat verbracht. c) Feuerwaffen werden mit einem Europäischen Feuerwaffenpasses dauerhaft in einen Mitgliedstaat verbracht.",
     "en_q":"Which act constitutes a criminal offense within the meaning of the Arms Act?",
     "en_a":"a) Firearms are permanently brought into a Member State without appropriate permits. b) Firearms are brought into a third country for export without a permit under the law on weapons. c) Firearms are brought into a Member State permanently with a European Firearms Passport.",
     "ru_q":"Какое деяние является уголовным преступлением по смыслу Закона об оружии?",
     "ru_a":"a) Огнестрельное оружие постоянно ввозится в государство-член без соответствующих разрешений. b) Огнестрельное оружие ввозится в третью страну для экспорта без разрешения согласно закону об оружии. c) Огнестрельное оружие ввозится в государство-член на постоянной основе с европейским паспортом огнестрельного оружия.",
     "c":"ac"
  },
  {
     "id":"2.108",
     "de_q":"Was ist bei einer dauerhaften Ausfuhr von Schusswaffen in einen Drittstaat zu beachten?",
     "de_a":"a) Es ist nichts zu beachten. b) Es ist eine Ausfuhrerlaubnis der zu ständigen Waffenbehörde erforderlich. c) Außenwirtschaftsrechtliche Bestimmungen sind zu beachten (Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA).",
     "en_q":"What should be considered when permanently exporting firearms to a third country?",
     "en_a":"a) There is nothing to watch out for. b) An export license from the competent weapons authority is required. c) Foreign trade law provisions must be observed (Federal Office for Economics and Export Control (BAFA).",
     "ru_q":"Что следует учитывать при постоянном экспорте огнестрельного оружия в третью страну?",
     "ru_a":"a) Нечего остерегаться. b) Требуется экспортная лицензия от компетентного оружейного ведомства. c) Должны соблюдаться положения законодательства о внешней торговле (Федеральное управление экономики и экспортного контроля (BAFA).",
     "c":"c"
  },
  {
     "id":"2.109",
     "de_q":"Berechtigt der Europäische Feuerwaffenpass zur Einfuhr von erlaubnispflichtiger Munition aus einem Mitgliedstaat, sofern die Munition dort von Ihnen berechtigterweise erworben wurde?",
     "de_a":"a) Ja b) Nein. Eine Verbringungserlaubnis ist erforderlich. c) Ja, aber nur wenn eine Waffe entsprechenden Kalibers in den EFP eingetragen ist.",
     "en_q":"Does the European firearms pass entitle the holder to import ammunition that requires a permit from a member state, provided that you legitimately acquired the ammunition there?",
     "en_a":"a) yes b) no. A transfer permit is required. c) Yes, but only if a weapon of the appropriate caliber is entered in the EFP.",
     "ru_q":"Дает ли европейский пропуск на огнестрельное оружие право владельцу импортировать боеприпасы, требующие разрешения от государства-члена, при условии, что вы законно приобрели боеприпасы там?",
     "ru_a":"a) да b) нет. Требуется разрешение на перевод. c) Да, но только если в EFP внесено оружие соответствующего калибра.",
     "c":"b"
  },
  {
     "id":"2.110",
     "de_q":"Welche Waffen dürfen ohne Beschusszeichen einem anderen zum Schießen überlassen werden?",
     "de_a":"a) alle Schusswaffen b) Grundsätzlich keine Schusswaffen, außer diejenigen, die vor dem 1. Januar 1891 hergestellt wurden oder für die von einem Beschussamt eine Bescheinigung darüber ausgestellt wurde, dass der Beschuss der Waffe nicht durchgeführt werden kann. c) Doppelflinten",
     "en_q":"Which weapons may be given to someone else to shoot without a bullet mark?",
     "en_a":"a) All firearms b) Basically no firearms, except those that were manufactured before January 1, 1891 or for which a firearms office issued a certificate stating that the firearm cannot be fired. c) side-by-side shotguns",
     "ru_q":"Из какого оружия можно дать кому-нибудь стрелять без следа от пули?",
     "ru_a":"a) Все огнестрельное оружие. b) В основном никакого огнестрельного оружия, за исключением того, которое было изготовлено до 1 января 1891 года или на которое управление огнестрельного оружия выдало сертификат о том, что из огнестрельного оружия нельзя стрелять. c) горизонтальные ружья",
     "c":"b"
  },
  {
     "id":"2.111",
     "de_q":"Dürfen Sie als Sportschütze mit einer Schusswaffe, die der Beschusspflicht unterliegt, auf dem Schießstand „Probeschüsse“ abgeben, wenn kein Beschussstempel angebracht ist?",
     "de_a":"a) Ja, das Probeschießen ist gestattet. b) Nein, das ist niemals gestattet. c) Solche Schüsse sind nur durch die verantwortliche Aufsicht zulässig.",
     "en_q":"As a marksman, are you allowed to use a firearm that is subject to mandatory shooting at the shooting range, if no gunshot stamp is affixed?",
     "en_a":"a) Yes, test shooting is permitted. b) No, that is never allowed. c) Such shots are only permitted by the responsible supervisor.",
     "ru_q":"Разрешено ли вам, как стрелку, использовать огнестрельное оружие, которое подлежит обязательной стрельбе на стрельбище, если на стрельбище не проставлено клеймо?",
     "ru_a":"a) Да, пробная стрельба разрешена. b) Нет, это никогда не разрешается. c) Такие выстрелы разрешены только ответственным супервайзером.",
     "c":"b"
  },
  {
     "id":"2.112",
     "de_q":"Wann ist eine Waffe erneut zu beschießen?",
     "de_a":"a) Neuwaffen nach 15 Jahren, bei Gebrauchtwaffen nach 10 Jahren. b) Ein Beschuss ist unter anderem dann erforderlich, wenn eine Waffe von einem gewerblichen Waffenhändler an einen Kunden verkauft wird. c) Ein erneuter Beschuss muss immer dann erfolgen, wenn wesentliche Teile der Waffe verändert oder instandgesetzt wurden.",
     "en_q":"When should a weapon be fired at again?",
     "en_a":"a) New weapons after 15 years, for used weapons after 10 years. b) Shelling is required, among other things, when a weapon is sold to a customer by a commercial arms dealer. c) Another bombardment must take place whenever essential parts of the weapon have been changed or repaired.",
     "ru_q":"Когда следует снова выстрелить из оружия?",
     "ru_a":"a) Новое оружие через 15 лет, бывшее в употреблении оружие через 10 лет. b) артобстрел требуется, среди прочего, когда оружие продается покупателю коммерческим торговцем оружием. c) Другая бомбардировка должна иметь место всякий раз, когда основные части оружия были заменены или отремонтированы.",
     "c":"c"
  },
  {
     "id":"2.113",
     "de_q":"Ist die zuständige Erlaubnisbehörde zu unterrichten, wenn durch einen Büchsenmacher der Lauf ersetzt und die Waffe anschließend neu beschossen wurde?",
     "de_a":"a) Die Erlaubnisbehörde ist immer zu unterrichten. b) Die Erlaubnisbehörde ist zu unterrichten, wenn ein wesentliches Teil erworben wurde. c) Die Erlaubnisbehörde ist nie zu unterrichten.",
     "en_q":"Should the competent licensing authority be informed if the barrel was replaced by a gunsmith and the weapon was then fired again?",
     "en_a":"a) The licensing authority must always be informed. b) The licensing authority must be informed when a substantial part has been acquired. c) The licensing authority is never to be informed.",
     "ru_q":"Следует ли информировать компетентный лицензирующий орган, если оружейник заменил ствол, а затем из оружия был произведен повторный выстрел?",
     "ru_a":"a) Лицензирующий орган всегда должен быть проинформирован. b) Лицензирующий орган должен быть проинформирован о приобретении значительной части. c) Лицензирующий орган никогда не должен быть проинформирован.",
     "c":"b"
  },
  {
     "id":"2.114",
     "de_q":"Was bedeutet die Überstempelung eines Beschusszeichens mit einem „X“?",
     "de_a":"a) Die Waffe wurde in England erneut beschossen, es ist nur noch der englische Beschuss gültig. b) Die Waffe wurde bei einer erneuten Beschussprüfung als nicht mehr beschusstauglich befunden, der bereits vorhandene Beschussstempel ist ungültig. c) Die Waffe wurde für den Export nach Großbritannien erneut beschossen, da dort der deutsche Beschuss nicht gültig ist.",
     "en_q":"What does the overstamping of a proof mark with an 'X' mean?",
     "en_a":"a) The weapon was fired again in England, only English fire is valid. b) The weapon was found to be no longer fit for firing after a new firing test; the existing firing stamp is invalid. c) The weapon was fired again for export to Great Britain, since the German fire is not valid there.",
     "ru_q":"Что означает проставление знака 'X' на пробном штампе?",
     "ru_a":"a) Из оружия снова стреляли в Англии, действителен только английский огонь. b) Оружие было признано непригодным для стрельбы после нового огневого испытания; существующий штамп о стрельбе недействителен. c) Оружие было выпущено повторно для экспорта в Великобританию, поскольку там не действует немецкий огонь.",
     "c":"b"
  },
  {
     "id":"2.115",
     "de_q":"Wann ist eine Waffe erneut zum Beschuss vorzulegen?",
     "de_a":"a) ein neuer Lauf (kein Austauschlauf) wurde eingebaut b) Sportgriffschalen wurden montiert c) der Verschluss wurde erneuert d) die Schussfolge wurde geändert e) der Lauf wurde mit Kompensatoröffnungen versehen f) das Abzugsgewicht wurde durch Einbau einer anderen Feder verringert",
     "en_q":"When should a weapon be presented again for fire?",
     "en_a":"a) a new barrel (no replacement barrel) was installed b) sports grips were installed c) the bolt was replaced d) the firing sequence was changed e) the barrel was provided with compensator openings f) the trigger weight was reduced by installing a different spring",
     "ru_q":"Когда нужно снова предъявить оружие для стрельбы?",
     "ru_a":"a) был установлен новый ствол (без запасного ствола) b) были установлены спортивные рукоятки c) заменен затвор d) изменена последовательность стрельбы e) в стволе были предусмотрены компенсирующие отверстия f) вес спускового крючка уменьшен за счет установки другая весна",
     "c":"acde"
  },
  {
     "id":"2.116",
     "de_q":"Darf mit einer amerikanischen Schusswaffe mit französischem Beschusszeichen in der Bundesrepublik geschossen werden?",
     "de_a":"a) Nein, die Waffe braucht ein deutsches Beschusszeichen. b) Ja, das französische Beschusszeichen ist anerkannt. c) Nein, die Waffe braucht ein amerikanisches Beschusszeichen.",
     "en_q":"Is it allowed to shoot an American firearm with a French bullet mark in the Federal Republic of Germany?",
     "en_a":"a) No, the weapon needs a German proof mark. b) Yes, the French proof mark is recognized. c) No, the weapon needs an American proof mark.",
     "ru_q":"Разрешено ли стрелять из американского огнестрельного оружия с французским следом от пули в Федеративной Республике Германии?",
     "ru_a":"a) Нет, оружие требует немецкого клейма. b) Да, французский контрольный знак признан. c) Нет, на оружии нужен американский знак доказательства.",
     "c":"b"
  },
  {
     "id":"2.117",
     "de_q":"Eine Feuerwaffe wird aus einem der nebenstehenden Länder eingeführt. Bei welchem Land muss die Feuerwaffe einem Beschussamt der C.I.P. (Internationale Kommission zur Prüfung von Handfeuerwaffen und Munition) vorgelegt werden?",
     "de_a":"a) USA b) Ungarn c) Chile",
     "en_q":"A firearm is imported from one of the countries opposite. In which country must the firearm be submitted to a C.I.P. (International Commission for the Testing of Small Arms and Ammunition)?",
     "en_a":"a) USA b) Hungary c) Chile",
     "ru_q":"Огнестрельное оружие ввозится из одной из противоположных стран. В какой стране огнестрельное оружие должно быть сдано в C.I.P. (Международная комиссия по испытаниям стрелкового оружия и боеприпасов)?",
     "ru_a":"a) США b) Венгрия c) Чили",
     "c":"a"
  },
  {
     "id":"2.118",
     "de_q":"Wo dürfen Sie mit Druckluftwaffen, die das Zeichen „F im Fünfeck“ tragen, schießen?",
     "de_a":"a) In Ihrem eingezäunten Garten, wenn sichergestellt ist, dass die Geschosse den Garten nicht verlassen können. b) In einem verlassenen Steinbruch (kein Geschoss kann das Gelände verlassen). c) Nur auf zugelassenen Schießständen. d) Im eigenen Keller, wenn hierbei niemand gefährdet werden kann.",
     "en_q":"Where are you allowed to shoot with compressed air guns bearing the “F in a pentagon”?",
     "en_a":"a) In your fenced-in garden, if it has been ensured that the floors cannot leave the garden. b) In an abandoned quarry (no floor can leave the site). c) Only on approved shooting ranges. d) In your own cellar, if nobody can be endangered.",
     "ru_q":"Где можно стрелять из пневматических пистолетов с буквой F в пятиугольнике?",
     "ru_a":"a) В вашем огороженном саду, если предусмотрено, что полы не могут выходить за пределы сада. b) В заброшенном карьере (пол не может покидать площадку). c) Только на утвержденных стрельбищах. d) В собственном подвале, если никто не может подвергнуться опасности.",
     "c":"ad"
  },
  {
     "id":"2.119",
     "de_q":"Benötigen Sie zum Schießen mit einer Waffe im Kaliber 6 mm Flobert (kein F im Fünfeck auf der Waffe vorhanden) eine behördliche Erlaubnis?",
     "de_a":"a) Nein b) Ja, außerhalb von Schießstätten. c) Nicht auf dafür zugelassenen Schießstätten.",
     "en_q":"Do you need an official permit to shoot with a weapon in caliber 6 mm Flobert (there is no F in the pentagon on the weapon)?",
     "en_a":"a) No b) Yes, outside of shooting ranges. c) Not on approved shooting ranges.",
     "ru_q":"Вам нужно официальное разрешение на стрельбу из оружия калибра 6 мм Flobert (на оружии нет буквы F в пятиугольнике)?",
     "ru_a":"a) Нет b) Да, вне стрельбища. c) Не на утвержденных стрельбищах.",
     "c":"bc"
  },
  {
     "id":"2.120",
     "de_q":"Wo darf man ohne Erlaubnis mit einem Gewehr im Kaliber .22lr schießen?",
     "de_a":"a) Im Wald b) Außerhalb des befriedeten Besitztums c) Auf dafür zugelassenen Schießstätten",
     "en_q":"Where can you shoot a .22lr rifle without permission?",
     "en_a":"a) In the forest b) Outside the pacified property c) On approved shooting ranges",
     "ru_q":"Где можно без разрешения стрелять из ружья 22-го калибра?",
     "ru_a":"a) В лесу b) Вне умиротворенной территории c) На разрешенных стрельбищах",
     "c":"c"
  },
  {
     "id":"2.121",
     "de_q":"Wann darf ein 14-jähriger mit dem Einverständnis des/der Sorgeberechtigten auf dem Schießstand mit einer Waffe für Randfeuerpatronen bis Kaliber 5,6 mm lfB (.22lr) und einer Mündungsenergie von maximal 200 Joule schießen?",
     "de_a":"a) Wenn der Schießstandbetreiber zustimmt. b) Wenn der erforderlichen Aufsichtsperson das Einverständnis des/der Sorgeberechtigten vorliegt. c) Wenn die behördliche Ausnahmegenehmigung vorliegt.",
     "en_q":"When is a 14-year-old allowed to shoot with a weapon for rimfire cartridges up to a diameter of 5.6 mm (.22lr) and a muzzle energy of a maximum of 200 joules on the shooting range with the consent of the legal guardian?",
     "en_a":"a) If the shooting range operator agrees. b) If the required supervisor has the consent of the legal guardian. c) If the official exemption is available.",
     "ru_q":"Когда 14-летнему ребенку разрешается стрелять из оружия под патроны кольцевого воспламенения диаметром до 5,6 мм (.22lr) и дульной энергией до 200 джоулей на стрельбище с согласия законного опекуна?",
     "ru_a":"a) Если оператор стрельбища согласен. b) Если требуемый руководитель имеет согласие законного опекуна. c) Если доступно официальное освобождение.",
     "c":"b"
  },
  {
     "id":"2.122",
     "de_q":"In welchem Alter darf ein Jugendlicher auf dem Schießstand, ohne unter einer besonderen Obhut (durch den/die Sorgeberechtigten oder der zur Kinder- und Jugendarbeit für das Schießen geeigneten Aufsichtsperson) zu stehen, mit einem Kleinkaliber-Match-Gewehr schießen?",
     "de_a":"a) mit 12 Jahren b) mit 14 Jahren c) mit 17 Jahren",
     "en_q":"At what age is a young person allowed to shoot with a small bore match rifle on the shooting range without being under special care (by the guardian or by a supervisor who is suitable for child and youth work for shooting)?",
     "en_a":"a) at the age of 12 b) at the age of 14 c) at the age of 17",
     "ru_q":"В каком возрасте молодым людям разрешается стрелять из малокалиберной спортивной винтовки на стрельбище без особого ухода (со стороны опекуна или надзирателя, подходящего для детской и молодежной работы по стрельбе)?",
     "ru_a":"a) в возрасте 12 лет b) в возрасте 14 лет c) в возрасте 17 лет",
     "c":"c"
  },
  {
     "id":"2.123",
     "de_q":"Mit welchen Waffen dürfen ein 13- jähriger und ein 15-jähriger auf einer zugelassenen Schießstätte schießen?",
     "de_a":"a) Ein 13-jähriger darf mit Druckluft-, Federdruck- und CO2-Waffen schießen, wenn der/die Sorgeberechtigte/n schriftlich oder elektronisch sein/ihr Einverständnis erklärt hat/haben und eine geeignete Aufsichtsperson ständig anwesend ist. b) Ein 15-jähriger darf mit halbautomatischen Waffen bis Kaliber 9mm schießen, wenn der/die Sorgeberechtigte/n schriftlich oder elektronisch sein/ihr Einverständnis er-klärt hat/haben und eine geeignete Aufsichtsperson ständig anwesend. c) Ein 15-jähriger darf mit Waffen für Randfeuerpatronen bis Kaliber 5,6 mm lfB (.22 l. r.) und einer Mündungsenergie von maximal 200 Joule und mit Einzellader-Langwaffen mit glatten Läufen im Kaliber 12 oder kleiner schießen, wenn der/die Sorgeberechtigte/n schriftlich oder elektronisch sein/ihr Einverständnis erklärt hat/haben und eine geeignete Aufsichtsperson ständig anwesend ist.",
     "en_q":"Which weapons are 13-year-olds and 15-year-olds allowed to shoot at an approved shooting range?",
     "en_a":"a) A 13-year-old can shoot with compressed air, spring-loaded and CO2 guns if the legal guardian has given his / her consent in writing or electronically and a suitable supervisor is permanently present. b) A 15-year-old may shoot semi-automatic weapons up to 9mm caliber if the legal guardian has given his / her consent in writing or electronically and a suitable supervisor is permanently present. c) A 15-year-old may shoot with weapons for rimfire cartridges up to caliber 5.6 mm lfB (.22 lr) and a muzzle energy of a maximum of 200 joules and with single-shot long guns with smooth barrels in caliber 12 or smaller, if the The legal guardian has / have given his / her consent in writing or electronically and a suitable supervisor is permanently present.",
     "ru_q":"Из какого оружия разрешено стрелять 13-летним и 15-летним на утвержденном тире?",
     "ru_a":"a) 13-летний подросток может стрелять из пневматического, подпружиненного пистолета и пистолета с СО2, если законный опекун дал / дал свое согласие в письменной или электронной форме и соответствующий руководитель постоянно присутствует. b) 15-летний подросток может стрелять из полуавтоматического оружия калибром до 9 мм, если законный опекун дал свое согласие в письменной или электронной форме и на нем постоянно присутствует подходящий руководитель. c) 15-летний подросток может стрелять из оружия под патроны кольцевого воспламенения до калибра 5,6 мм lfB (.22 lr) и дульной энергией не более 200 джоулей, а также из длинноствольного однозарядного ружья с гладкими стволами калибра 12 или меньше, если законный опекун дал / дал свое согласие в письменной или электронной форме и соответствующий руководитель постоянно присутствует.",
     "c":"ac"
  },
  {
     "id":"2.124",
     "de_q":"Darf ein 16-jähriger Schütze auf einer dafür zugelassenen Schießstätte mit einer halbautomatischen Pistole im Kaliber .40 S&W schießen?",
     "de_a":"a) Wenn eine verantwortliche Aufsichtsperson anwesend ist, ist dies möglich. b) Nur unter Aufsicht eines Behördenvertreters. c) Nein, der Schütze muss dafür mindestens 18 Jahre alt sein.",
     "en_q":"Can a 16-year-old shooter shoot with a .40 S&W semi-automatic pistol at an approved shooting range?",
     "en_a":"a) If a responsible supervisor is present, this is possible. b) Only under the supervision of a public authority representative. c) No, the shooter must be at least 18 years old.",
     "ru_q":"Может ли 16-летний стрелок стрелять из полуавтоматического пистолета .40 S&W на утвержденном тире?",
     "ru_a":"a) Если присутствует ответственный руководитель, это возможно. b) Только под наблюдением представителя государственной власти. c) Нет, стрелку должно быть не менее 18 лет.",
     "c":"c"
  },
  {
     "id":"2.125",
     "de_q":"Unter welchen Voraussetzungen darf ein Jugendlicher nach Vollendung des 15. Lebensjahres und noch nicht vollendetem 16. Lebensjahr auf dem Schießstand eines Vereins schießen?",
     "de_a":"a) Mit schriftlichem Einverständnis der Sorgeberechtigten bei Druckluftwaffen bis zu 7,5 Joule Bewegungsenergie. b) Hierfür ist die behördliche Genehmigung (§3 WaffG) erforderlich. c) Mit schriftlichem Einverständnis der Sorgeberechtigten und unter Aufsicht einer hierfür geeigneten Person beim Schießen mit einem Kleinkaliberge wehr (.22lr) mit maximal 200 Joule Mündungsenergie.",
     "en_q":"Under what conditions is a young person allowed to shoot at the shooting range of a club after they have reached the age of 15 and under 16?",
     "en_a":"a) With the written consent of the custodian for compressed air weapons up to 7.5 joules of kinetic energy. b) Official approval (Section 3 WaffG) is required for this. c) With the written consent of the guardian and under the supervision of a suitable person when shooting with a small caliber rifle (.22lr) with a maximum muzzle energy of 200 joules.",
     "ru_q":"При каких условиях молодому человеку разрешается стрелять на стрельбище клуба после достижения им 15-летнего и младше 16-летнего возраста?",
     "ru_a":"a) С письменного согласия хранителя пневматического оружия до 7,5 джоулей кинетической энергии. b) Для этого требуется официальное разрешение (Раздел 3 WaffG). c) С письменного согласия опекуна и под наблюдением подходящего человека при стрельбе из малокалиберной винтовки (.22lr) с максимальной дульной энергией 200 джоулей.",
     "c":"ac"
  },
  {
     "id":"2.126",
     "de_q":"Unter welchen Voraussetzungen darf ein Kind nach Vollendung seines 12. Lebensjahres mit einer Druckluftpistole auf dem Schießstand eines Vereins schießen?",
     "de_a":"a) Das Kind darf nur mit der vereinseigenen Druckluftpistole schießen. b) Hierfür ist die behördliche Genehmigung (§3 WaffG) erforderlich. c) Das Kind darf mit schriftlichem Einverständnis seiner Eltern und unter Aufsicht einer hierfür geeigneten Person schießen.",
     "en_q":"Under what conditions is a child allowed to shoot with a compressed air pistol at the shooting range of a club after the age of 12?",
     "en_a":"a) The child may only shoot with the club's compressed air pistol. b) Official approval (Section 3 WaffG) is required for this. c) The child may shoot with the written consent of its parents and under the supervision of a suitable person.",
     "ru_q":"При каких условиях ребенку после 12 лет разрешается стрелять из пистолета со сжатым воздухом на тире клуба?",
     "ru_a":"a) Ребенок может стрелять только из пневматического пистолета клюшки. b) Для этого требуется официальное разрешение (Раздел 3 WaffG). c) Ребенок может стрелять с письменного согласия родителей и под присмотром подходящего человека.",
     "c":"c"
  },
  {
     "id":"2.127",
     "de_q":"Darf eine kombinierte Langwaffe (z.B. Drilling) zum sportlichen Schießen benutzt werden?",
     "de_a":"a) Ja, nur wenn es die Sportordnung und die Schießstandzulassung erlauben. b) Nein, kombinierte Waffen sind vom sportlichen Schießen ausgeschlossen. c) Ja, ohne jede Einschränkung.",
     "en_q":"Can a combined long rifle (e.g. three-of-a-kind) be used for sportive shooting?",
     "en_a":"a) Yes, only if the sports regulations and the shooting range permit permit. b) No, combined weapons are excluded from sport shooting. c) Yes, without any restriction.",
     "ru_q":"Можно ли использовать комбинированную длинную винтовку (например, тройку) для спортивной стрельбы?",
     "ru_a":"a) Да, только если это разрешено спортивными правилами и стрельбищем. b) Нет, комбинированное оружие исключено из спортивной стрельбы. c) Да, без каких-либо ограничений.",
     "c":"a"
  },
  {
     "id":"2.128",
     "de_q":"Wo darf der Sportschütze Patronen mit Hohlspitzgeschossen aus Kurzwaffen im Kaliber .22lr verschießen?",
     "de_a":"a) Auf dem eigenen Grundstück. b) Auf dafür zugelassenen Schießständen. c) Nirgends, das ist gesetzlich verboten.",
     "en_q":"Where is the marksman allowed to fire cartridges with hollow point bullets from handguns in .22lr caliber?",
     "en_a":"a) On your own property. b) On approved shooting ranges. c) Nowhere, this is prohibited by law.",
     "ru_q":"Где стрелку разрешено стрелять пустотелыми патронами из пистолетов калибра .22lr?",
     "ru_a":"a) На своей собственности. b) На утвержденных стрельбищах. c) Нигде это запрещено законом.",
     "c":"b"
  },
  {
     "id":"2.129",
     "de_q":"Welche Dokumente benötigt ein Brauchtumsschütze beim Schießen in der Öffentlichkeit?",
     "de_a":"a) Waffenschein und Pass b) Waffenbesitzkarte und Sportschützenausweis c) Schießerlaubnis, evtl. Waffenbesitzkarte und Personalausweis, bei Vorderladern: „Erlaubnis nach dem Sprengstoffgesetz“.",
     "en_q":"What documents does a traditional shooter need when shooting in public?",
     "en_a":"a) Gun license and passport b) Gun possession card and marksman ID c) Shooting license, possibly gun possession card and identity card, in front of loaders: 'Permit under the Explosives Act'.",
     "ru_q":"Какие документы нужны традиционному стрелку при публичной стрельбе?",
     "ru_a":"a) Лицензия на оружие и паспорт b) Карта владения оружием и удостоверение стрелка c) Лицензия на стрельбу, возможно, карта владения оружием и удостоверение личности, в случае фронтальных погрузчиков: «Разрешение в соответствии с Законом о взрывчатых веществах».",
     "c":"c"
  },
  {
     "id":"2.130",
     "de_q":"Ist für das Schießen mit einem Ge wehr im Kaliber .22lr im Keller eines Wohnhauses eine behördliche Erlaubnis erforderlich?",
     "de_a":"a) Nein, wenn die Sicherheit gewährleistet ist. b) Ja, eine Erlaubnis zum Betrieb einer Schießstätte oder eine Schießerlaubnis. c) Nein, die des Hauseigentümers reicht aus.",
     "en_q":"Is an official permit required to shoot with a .22lr rifle in the basement of a residential building?",
     "en_a":"a) No, if security is guaranteed. b) Yes, a permit to operate a shooting range or a shooting permit. c) No, that of the house owner is sufficient.",
     "ru_q":"Требуется ли официальное разрешение для стрельбы из ружья 22-го калибра в подвале жилого дома?",
     "ru_a":"a) Нет, если безопасность гарантирована. b) Да, разрешение на управление стрельбищем или разрешение на стрельбу. c) Нет, достаточно.",
     "c":"b"
  },
  {
     "id":"2.131",
     "de_q":"Sie wollen an Silvester mit Ihrer Repetierbüchse auf der öffentlichen Straße vor Ihrem Haus Kartuschenmunition verschießen. Was ist dabei zu beachten?",
     "de_a":"a) Ich benötige einen kleinen Waffen schein. b) Es sind lediglich die Zeiten an Silvester zu beachten, an denen Pyrotechnisches Material gezündet werden darf. c) Ich benötige einen Waffenschein und eine Schießerlaubnis.",
     "en_q":"You want to shoot cartridges with your bolt action rifle on the public street in front of your house on New Year's Eve. What is to be considered?",
     "en_a":"a) I need a small gun license. b) Only the times on New Year's Eve need to be observed when pyrotechnic material may be ignited. c) I need a gun license and a shooting license.",
     "ru_q":"Вы хотите стрелять патронами из своей винтовки с продольно-скользящим затвором на улице перед вашим домом в канун Нового года. Что следует учитывать?",
     "ru_a":"a) Мне нужна лицензия на стрелковое оружие. b) Соблюдать только то время в канун Нового года, когда возможно возгорание пиротехнических материалов. c) Мне нужны лицензия на оружие и лицензия на стрельбу.",
     "c":"c"
  },
  {
     "id":"2.132",
     "de_q":"Darf man zu Silvester mit einem Revolver im Kaliber .38 Spezial ohne behördliche Erlaubnis Platzpatronen (Kartuschenmunition) verschießen?",
     "de_a":"a) Nein b) Ja. Dies ist aber nur innerhalb der behördlich genehmigten „Knallzeit“ zulässig, wenn man sich zudem auf einem befriedeten Grundstück befindet. c) Ja. Dies ist aber nur innerhalb der behördlich genehmigten „Knallzeit“ zulässig, wenn man sich zudem auf seinem eigenen, befriedeten Grundstück befindet.",
     "en_q":"Is it allowed to shoot blank cartridges (cartridge ammunition) with a .38 special caliber revolver on New Year's Eve without official permission?",
     "en_a":"a) No b) Yes. However, this is only permitted within the officially approved 'bang time' if you are also on a pacified property. c) Yes. However, this is only permitted within the officially approved 'bang time' if you are also on your own pacified property.",
     "ru_q":"Разрешено ли в канун Нового года стрелять холостыми патронами (патронами) из револьвера специального калибра .38 без официального разрешения?",
     "ru_a":"a) Нет b) Да. Однако это разрешено только в официально утвержденное «время взрыва», если вы также проживаете в спокойной собственности. c) Да. Однако это разрешено только в официально утвержденное «время взрыва», если вы также проживаете на своей собственной умиротворенной территории.",
     "c":"a"
  },
  {
     "id":"2.133",
     "de_q":"Ist das nichtgewerbliche Wiederladen von Patronenhülsen erlaubt?",
     "de_a":"a) Ja, für Inhaber einer Munitionserwerbserlaubnis. b) Ja, nur mit einer Erlaubnis nach § 27 Sprengstoffgesetz. c) Nein",
     "en_q":"Is it allowed to reload cartridge cases for non-commercial purposes?",
     "en_a":"a) Yes, for holders of an ammunition marketing license. b) Yes, only with a permit in accordance with Section 27 of the Explosives Act. c) No.",
     "ru_q":"Можно ли перезаряжать гильзы в некоммерческих целях?",
     "ru_a":"a) Да, для владельцев лицензии на продажу боеприпасов. b) Да, только при наличии разрешения в соответствии с разделом 27 Закона о взрывчатых веществах. c) Нет.",
     "c":"b"
  },
  {
     "id":"2.134",
     "de_q":"Das nichtgewerbliche Wiederladen von Patronenmunition ist...",
     "de_a":"a) für jeden erlaubt, der eine Waffensachkundeprüfung bestanden hat. b) für jeden erlaubt, der gefahrlos mit Schwarzpulver umgehen kann. c) für jeden erlaubt, der die Fachkundeprüfung nach dem Sprengstoffgesetz nachgewiesen hat und dem durch die Behörde eine entsprechende Erlaubnis nach § 27 SprengG erteilt wurde.",
     "en_q":"The non-commercial reloading of cartridge ammunition is ...",
     "en_a":"a) Permitted for anyone who has passed a weapons test. b) Allowed for anyone who can safely handle black powder. c) Permitted for anyone who has demonstrated the specialist examination in accordance with the Explosives Act and who has been granted a corresponding permit by the authorities in accordance with Section 27 of the Explosives Act.",
     "ru_q":"Некоммерческая перезарядка патронных боеприпасов ...",
     "ru_a":"a) Разрешено для всех, кто прошел испытание на оружие. b) Разрешено всем, кто может безопасно обращаться с дымным порохом. c) Разрешено для всех, кто продемонстрировал специализированный осмотр в соответствии с Законом о взрывчатых веществах и кому было предоставлено соответствующее разрешение властями в соответствии с разделом 27 Закона о взрывчатых веществах.",
     "c":"c"
  },
  {
     "id":"2.135",
     "de_q":"Berechtigt die abgelegte Sachkundeprüfung zum nichtgewerblichen Wiederladen von Hülsen?",
     "de_a":"Nein, hierzu bedarf es einer gesonderten Fachkundeprüfung nach dem Sprengstoffgesetz und einer Erlaubnis nach § 27 SprengG.",
     "en_q":"Does the passed proficiency test entitle the holder to reload casings for non-commercial purposes?",
     "en_a":"No, this requires a separate specialist examination in accordance with the Explosives Act and a permit in accordance with Section 27 of the Explosives Act.",
     "ru_q":"Дает ли пройденный квалификационный тест право владельцу перезагружать оболочки в некоммерческих целях?",
     "ru_a":"Нет, это требует отдельного специального осмотра в соответствии с Законом о взрывчатых веществах и разрешения в соответствии с разделом 27 Закона о взрывчатых веществах.",
     "c":"x"
  },
  {
     "id":"2.136",
     "de_q":"Berechtigt die abgelegte Sachkundeprüfung zum nichtgewerblichen Wiederladen von Hülsen?",
     "de_a":"a) Ja, durch die Sachkundeprüfung ist man berechtigt Hülsen wiederzuladen. b) Nein, es ist eine Erlaubnis nach § 27 Sprengstoffgesetz erforderlich. c) Das Wiederladen von Hülsen ist immer erlaubt.",
     "en_q":"Does the passed proficiency test entitle the holder to reload casings for non-commercial purposes?",
     "en_a":"a) Yes, you are entitled to reload cases through the proficiency test. b) No, a permit in accordance with Section 27 of the Explosives Act is required. c) The reloading of cases is always allowed.",
     "ru_q":"Дает ли пройденный квалификационный тест право владельцу перезагружать оболочки в некоммерческих целях?",
     "ru_a":"a) Да, вы имеете право повторно загрузить дела через квалификационный экзамен. b) Нет, требуется разрешение в соответствии с разделом 27 Закона о взрывчатых веществах. c) Перезагрузка ящиков всегда разрешена.",
     "c":"b"
  },
  {
     "id":"2.137",
     "de_q":"Welche Änderung an einer Schusswaffe dürfen nur von hierzu berechtigten Personen durchgeführt werden?",
     "de_a":"a) Schaftmodifizierung b) Änderung am Visier c) Anbringen von Bohrungen an der Systemhülse zur Zielfernrohrmontage",
     "en_q":"Which changes to a firearm may only be carried out by authorized persons?",
     "en_a":"a) Shaft modification b) Changes to the sight c) Drilling of holes in the system sleeve for mounting the telescopic sight",
     "ru_q":"Какие изменения в огнестрельном оружии могут вносить только уполномоченные лица?",
     "ru_a":"a) Модификация вала b) Изменения прицела c) Просверливание отверстий в системной втулке для установки оптического прицела",
     "c":"c"
  },
  {
     "id":"2.138",
     "de_q":"Welche Änderung an einer Schusswaffe dürfen nur von hierzu berechtigten Personen durchgeführt werden?",
     "de_a":"a) Änderung des Verschlusses von Rand- auf Zentralfeuer b) Aufsetzen eines Wechselsystems c) Anbringen von Sportgriffschalen",
     "en_q":"Which changes to a firearm may only be carried out by authorized persons?",
     "en_a":"a) Changing the lock from edge to central fire b) Attaching a change system c) Attaching sports grips",
     "ru_q":"Какие изменения в огнестрельном оружии могут вносить только уполномоченные лица?",
     "ru_a":"a) Замена замка с краю на центральный b) Прикрепление системы смены c) Прикрепление спортивных захватов",
     "c":"a"
  },
  {
     "id":"2.139",
     "de_q":"Welche Änderungen an Schusswaffen dürfen nur von hierzu berechtigten Personen durchgeführt werden?",
     "de_a":"a) Verkürzung des Laufes b) Die Schussfolge der Waffe wird verändert. c) Die Schusswaffe wird so geändert, dass andere Munition oder Geschosse mit anderem Kaliber aus ihr verschossen werden können. d) Wesentliche Teile, zu deren Einpassung eine Nacharbeit erforderlich ist, werden ausgewechselt. e) Der gesamte Schaft wird getauscht.",
     "en_q":"Which changes to firearms may only be made by authorized persons?",
     "en_a":"a) Shortening the barrel b) The firing sequence of the weapon is changed. c) The firearm is modified so that other ammunition or projectiles with a different caliber can be fired from it. d) Essential parts that require reworking to adjust are replaced. e) The entire shaft is exchanged.",
     "ru_q":"Какие изменения в огнестрельном оружии могут вносить только уполномоченные лица?",
     "ru_a":"a) Укорочение ствола b) Изменена последовательность стрельбы из оружия. c) Оружие модифицировано таким образом, чтобы из него можно было стрелять другими боеприпасами или снарядами другого калибра. d) Основные детали, требующие доработки для регулировки, заменяются. e) Заменяется весь вал.",
     "c":"abcd"
  },
  {
     "id":"2.140",
     "de_q":"Sie brauchen eine behördliche Erlaubnis...",
     "de_a":"a) zum Austausch eines Trainingsabzuges. b) zur Verwendung eines 10 Schuss anstelle eines 5 Schuss- Magazins. c) zur Änderung des Patronenlagers / Laufinneren auf ein größeres Kaliber.",
     "en_q":"You need an official permit ...",
     "en_a":"a) to exchange a training trigger. b) to use a 10 round magazine instead of a 5 round magazine. c) to change the chamber / barrel interior to a larger caliber.",
     "ru_q":"Вам нужно официальное разрешение ...",
     "ru_a":"a) обменять тренировочный триггер. b) использовать магазин на 10 патронов вместо магазина на 5 патронов. c) изменить внутреннее пространство патронника / ствола на больший калибр.",
     "c":"c"
  },
  {
     "id":"2.141",
     "de_q":"Dürfen Sie Schusswaffen für bessere Ergebnisse ohne Erlaubnis bearbeiten?",
     "de_a":"a) Nur, wenn ich in der Metallbearbeitung erfahren bin. b) Abzug, Visierung und Schaft dürfen von mir bearbeitet werden. c) Auch wesentliche Teile dürfen von mir geändert werden.",
     "en_q":"Are you allowed to manipulate firearms without permission for better results?",
     "en_a":"a) Only if I am experienced in metalworking. b) Trigger, sights and stock may be edited by me. c) I can also change essential parts.",
     "ru_q":"Разрешено ли вам манипулировать огнестрельным оружием без разрешения для достижения лучших результатов?",
     "ru_a":"a) Только если у меня есть опыт работы с металлом. b) Спусковой крючок, прицел и ложа могут редактироваться мной. c) Я также могу изменить основные части.",
     "c":"b"
  },
  {
     "id":"2.142",
     "de_q":"Eine Langwaffe wird unzulässigerweise bearbeitet, wenn Sie ohne Erlaubnis...",
     "de_a":"a) den Gewehrlauf kürzen. b) eine Schaftkappe montieren. c) die Griffschalen austauschen.",
     "en_q":"A rifle is improperly processed if you ...",
     "en_a":"a) shorten the gun barrel. b) mount a butt plate. c) replace the handle shells.",
     "ru_q":"Винтовка обработана неправильно, если вы ...",
     "ru_a":"a) укоротить ствол пистолета. b) установить затыльник. c) заменить корпуса ручки.",
     "c":"a"
  },
  {
     "id":"2.143",
     "de_q":"Eine Kurzwaffe wird von Ihnen unzulässigerweise bearbeitet, wenn ohne Erlaubnis...",
     "de_a":"a) der Lauf mit Kompensatorbohrungen versehen wird. b) ein Balkenkorn eingesetzt wird.",
     "en_q":"A handgun is improperly processed by you if without permission ...",
     "en_a":"a) the barrel is provided with compensator holes. b) a front sight is used.",
     "ru_q":"Пистолет неправильно обработан вами, если без разрешения ...",
     "ru_a":"a) ствол снабжен компенсаторными отверстиями. b) используется мушка.",
     "c":"a"
  },
  {
     "id":"2.144",
     "de_q":"Darf zugelassene pyrotechnische Munition im Aufbau verändert werden?",
     "de_a":"Nein",
     "en_q":"Can approved pyrotechnic ammunition be modified in its structure?",
     "en_a":"no",
     "ru_q":"Можно ли изменить конструкцию разрешенных пиротехнических боеприпасов?",
     "ru_a":"нет",
     "c":"x"
  },
  {
     "id":"2.145",
     "de_q":"Wenn ein Mitglied, das als Sport schütze eine waffenrechtliche Erlaubnis besitzt, aus dem Schießsportverein austritt, muss der Verein ...",
     "de_a":"a) den Austritt unverzüglich der zuständigen Behörde melden. b) die Waffen des Mitgliedes in Verwahrung nehmen. c) nichts tun.",
     "en_q":"If a member who has a gun license as a sport shooter resigns from the shooting sports club, the club must ...",
     "en_a":"a) report the resignation to the competent authority immediately. b) take the weapons of the member into safekeeping. c) do nothing.",
     "ru_q":"Если участник, имеющий лицензию на стрелковое оружие в качестве спортивного стрелка, уходит из стрелкового спортивного клуба, клуб должен ...",
     "ru_a":"a) немедленно сообщить об отставке в компетентный орган. b) взять оружие члена на хранение. c) ничего не делать.",
     "c":"a"
  },
  {
     "id":"2.146",
     "de_q":"Dürfen Sorgeberechtigte minderjährige Schützen beim Schießbetrieb beaufsichtigen?",
     "de_a":"a) Ja, wenn sie zur Standaufsicht berechtigt sind, dürfen sie ihre Kinder beaufsichtigen. b) Nein, das dürfen nur in der Kinder und Jugendarbeit ausgebildete Obhutspersonen. c) Ja, Sorgeberechtigte dürfen alle minderjährigen Schützen beim Schießbetrieb beaufsichtigen.",
     "en_q":"Are legal guardians allowed to supervise underage shooters when shooting?",
     "en_a":"a) Yes, if you are authorized to supervise your stand, you can supervise your children. b) No, only carers trained in child and youth work are allowed to do so. c) Yes, custodians may supervise all under-age shooters at the shooting range.",
     "ru_q":"Разрешено ли официальным опекунам контролировать несовершеннолетних стрелков во время стрельбы?",
     "ru_a":"a) Да, если вы уполномочены присматривать за своим стендом, вы можете присматривать за своими детьми. b) Нет, это могут делать только лица, осуществляющие уход за детьми и молодежью. c) Да, смотрители могут контролировать всех несовершеннолетних стрелков на стрельбище.",
     "c":"a"
  },
  {
     "id":"2.147",
     "de_q":"Was hat ein schießsportlicher Verein eines anerkannten Schießsportverbandes im Hinblick auf die Aufsicht zu beachten?",
     "de_a":"a) Aufsichtspersonen im Verein registrieren. b) Voraussetzungen der Sachkunde prüfen. c) Ein Nachweisdokument ausstellen.",
     "en_q":"What does a shooting club of a recognized shooting sports association have to consider with regard to supervision?",
     "en_a":"a) Register supervisors in the association. b) Check the prerequisites for specialist knowledge. c) Issue a verification document.",
     "ru_q":"Что должен учитывать стрелковый клуб признанной ассоциации стрелкового спорта в отношении надзора?",
     "ru_a":"a) Зарегистрировать руководителей в ассоциации. b) Проверьте предварительные условия для получения специальных знаний. c) Выдать подтверждающий документ.",
     "c":"abc"
  },
  {
     "id":"2.148",
     "de_q":"Ab welchem Alter dürfen Kinder und Jugendliche mit Druckluft-, Feder druck- oder CO2-Waffen schießen und was ist dabei zu beachten?",
     "de_a":"a) Ab 12 Jahren, wenn die Sorgeberechtigten schriftlich oder elektronisch da bei sind. b) Ab 12 Jahren, sofern die Personensorgeberechtigten ihr Einverständnis erklärt haben und eine geeignete Aufsichtsperson zur Betreuung vorhanden ist. c) Ab 12 Jahren, wenn die Sorgeberechtigten schriftlich oder elektronisch ihr Einverständnis erklärt haben.",
     "en_q":"From what age are children and young people allowed to shoot with compressed air, spring pressure or CO2 guns and what should be considered?",
     "en_a":"a) From the age of 12 if the legal guardians are present in writing or electronically. b) From the age of 12, provided that the legal guardians have given their consent and a suitable supervisor is available to look after them. c) From the age of 12 if the legal guardians have given their consent in writing or electronically.",
     "ru_q":"С какого возраста детям и молодым людям разрешается стрелять из пистолетов со сжатым воздухом, пружиной или CO2 и что следует учитывать?",
     "ru_a":"a) С 12 лет, если законные опекуны присутствуют в письменной или электронной форме. b) С 12-летнего возраста при условии, что законные опекуны дали свое согласие и есть подходящий руководитель, который будет заботиться о них. c) С 12 лет, если законные опекуны дали свое согласие в письменной или электронной форме.",
     "c":"b"
  },
  {
     "id":"2.149",
     "de_q":"Wer darf auf einer Schießstätte Aufsicht führen?",
     "de_a":"a) Alle Vereinsmitglieder b) Der Eigentümer der Schießstätte c) Alle vom Betreiber bestellten Personen.",
     "en_q":"Who is allowed to supervise a shooting range?",
     "en_a":"a) All club members b) The owner of the shooting range c) All persons appointed by the operator.",
     "ru_q":"Кому разрешено контролировать стрельбище?",
     "ru_a":"a) Все члены клуба b) Владелец стрельбища c) Все лица, назначенные оператором.",
     "c":"c"
  },
  {
     "id":"2.150",
     "de_q":"Wer darf die Schießaufsicht ausüben?",
     "de_a":"Der Aufsichtsberechtigte muss volljährig, zuverlässig, persönlich geeignet und sachkundig sowie zur Aufsicht bestellt sein.",
     "en_q":"Who is allowed to supervise the shooting?",
     "en_a":"The person authorized to supervise must be of legal age, reliable, personally suitable and knowledgeable and must be appointed to supervise.",
     "ru_q":"Кому разрешено контролировать съемку?",
     "ru_a":"Лицо, уполномоченное осуществлять надзор, должно быть совершеннолетним, надежным, подходящим и хорошо осведомленным и должно быть назначено для надзора.",
     "c":"x"
  },
  {
     "id":"2.151",
     "de_q":"Darf eine Aufsicht selbst am Schießen teilnehmen?",
     "de_a":"Nein",
     "en_q":"Can a supervisor take part in the shooting himself?",
     "en_a":"no",
     "ru_q":"Может ли супервайзер сам принять участие в съемке?",
     "ru_a":"нет",
     "c":"x"
  },
  {
     "id":"2.152",
     "de_q":"Welche Anforderungen werden an die verantwortliche Aufsichtsperson gestellt?",
     "de_a":"a) Volljährigkeit, persönliche Eignung b) Zuverlässigkeit, Sachkunde c) Bei Aufsicht über Minderjährige die Eignung für Kinder- und Jugendarbeit",
     "en_q":"What are the requirements for the responsible supervisor?",
     "en_a":"a) Age of majority, personal suitability b) Reliability, expertise c) In the case of supervision of minors, suitability for child and youth work",
     "ru_q":"Какие требования к ответственному руководителю?",
     "ru_a":"a) Возраст совершеннолетия, личная пригодность b) Надежность, компетентность c) В случае присмотра за несовершеннолетними - пригодность для работы с детьми и молодежью",
     "c":"abc"
  },
  {
     "id":"2.153",
     "de_q":"Was zählt zu den Aufgaben der verantwortlichen Aufsichtsperson?",
     "de_a":"a) Dafür Sorge zu tragen, dass von den Schützen und ihren Waffen keine Ge fahr ausgeht. b) Die Betreuung von Zuschauern und Gästen. c) Überprüfen, ob der Verbandskasten aufgefüllt ist.",
     "en_q":"What are the responsibilities of the responsible supervisor?",
     "en_a":"a) To ensure that the shooters and their weapons do not pose a threat. b) The care of spectators and guests. c) Check whether the first aid kit is full.",
     "ru_q":"Каковы обязанности ответственного руководителя?",
     "ru_a":"a) Убедиться, что стрелки и их оружие не представляют угрозы. b) Забота о зрителях и гостях. c) Проверьте, заполнена ли аптечка.",
     "c":"a"
  },
  {
     "id":"2.154",
     "de_q":"Nennen sie mindestens vier Pflichten der verantwortlichen Aufsichtsperson beim Schießen!",
     "de_a":"- Das Schießen ständig beaufsichtigen, insbesondere - dafür zu sorgen, dass nur mit für die Schießstätte zugelassenen Waffen und Munition geschossen wird, - sicherzustellen, dass nur Kinder und Jugendliche ab den vorgeschriebenen Altersgrenzen und mit den altersmäßig zugelassenen Waffen teilnehmen und - die dafür eventuell notwendigen Einverständniserklärungen der Personensorgeberechtigten aufbewahren und der zuständigen Behörde auf Verlangen aushändigen. - Dafür Sorge tragen, dass die in der Schießstätte anwesenden Personen durch ihr Ver halten keine vermeidbaren Gefahren verursachen.",
     "en_q":"Name at least four duties of the responsible supervisor when shooting!",
     "en_a":"- Constantly supervise the shooting, in particular - to ensure that only weapons and ammunition approved for the shooting range are fired, - to ensure that only children and adolescents from the prescribed age limit and with the age-approved weapons take part and - the appropriate weapons Keep the necessary declarations of consent from the legal guardians and hand them over to the competent authority on request. - Make sure that the people present in the shooting range do not cause any avoidable hazards through their behavior.",
     "ru_q":"Назовите хотя бы четыре обязанности ответственного супервайзера при съемке!",
     "ru_a":"- Постоянно контролировать стрельбу, в частности - гарантировать, что стреляет только оружие и боеприпасы, одобренные для стрельбища, - гарантировать, что участвуют только дети и подростки от установленного возрастного предела и с одобренным по возрасту оружием, и - при необходимости Держать необходимые заявления о согласии от законных опекунов и передать их в компетентный орган по запросу. - Убедитесь, что люди, находящиеся в тире, своим поведением не создают опасностей, которых можно избежать.",
     "c":"x"
  },
  {
     "id":"3.01",
     "de_q":"Bei welchen Dekorationswaffen ist kein Zulassungszeichen (Ortszeichen des Beschussamtes in der Raute) erforderlich?",
     "de_a":"a) Bei allen offensichtlich unbrauchbaren und nicht mehr schussfähigen Waffen, die vor dem 01.01.1970 hergestellt wurden. b) Bei allen Schusswaffen, die vor dem 01.04.2003 nach dem damals gelten den Waffenrechtunbrauchbar gemacht wurden. c) Bei allen Schusswaffen, deren Modell vor dem 01.01.1871 hergestellt oder entwickelt wurde.",
     "en_q":"Which decorative weapons do not require an approval mark (location mark of the fire protection office in the diamond)?",
     "en_a":"a) For all obviously unusable and no longer firable weapons that were manufactured before 01.01.1970. b) For all firearms that were rendered unusable before April 1st, 2003 according to the then applicable firearms law. c) For all firearms whose model was manufactured or developed before 01.01.1871.",
     "ru_q":"На какое декоративное оружие не нужно проставлять знак официального утверждения (отметка о местонахождении пожарной охраны в ромбе)?",
     "ru_a":"a) Для всего явно непригодного к использованию и не подлежащего стрельбе оружия, изготовленного до 01.01.1970. b) Для всего огнестрельного оружия, которое было приведено в негодность до 1 апреля 2003 г. в соответствии с действующим в то время законом об огнестрельном оружии. c) Для всего огнестрельного оружия, модель которого была произведена или разработана до 01.01.1871.",
     "c":"b"
  },
  {
     "id":"3.02",
     "de_q":"Welches Kennzeichen muss u.a. auf einem Großkaliber-Revolver angebracht sein?",
     "de_a":"a) Bezeichnung der Munition b) Herstellerzeichen c) Warnhinweis „Gefährlich…“",
     "en_q":"Which mark must be affixed to a large-bore revolver, among other things?",
     "en_a":"a) Designation of the ammunition b) Manufacturer's symbol c) Warning notice 'Dangerous ...'",
     "ru_q":"Какая метка должна быть нанесена, среди прочего, на крупнокалиберный револьвер?",
     "ru_a":"a) Обозначение боеприпасов b) Символ производителя c) Предупреждающая надпись «Опасно ...»",
     "c":"ab"
  },
  {
     "id":"3.03",
     "de_q":"Welche Kennzeichnung trägt üblicherweise eine Feuerwaffe?",
     "de_a":"a) Name des Besitzers b) Beschusszeichen c) Lauflänge",
     "en_q":"What marking does a firearm usually bear?",
     "en_a":"a) Name of the owner b) Proof mark c) Barrel length",
     "ru_q":"Какую маркировку обычно имеет огнестрельное оружие?",
     "ru_a":"a) Имя владельца b) Контрольный знак c) Длина ствола",
     "c":"b"
  },
  {
     "id":"3.04",
     "de_q":"Welche Kennzeichnung trägt üblicherweise eine Schusswaffe?",
     "de_a":"a) Name, Firma oder Marke eines Waffenherstellers oder -händlers, der im Geltungsbereich dieses Gesetzes eine gewerbliche Niederlassung hat. b) Landeskürzel des Herstellungslandes c) die Bezeichnung der Munition; sofern keine Munition verwendet wird, die Bezeichnung der Geschosse d) Beschusszeichen e) Herstellungsnummer f) bei Importwaffen unter anderem auch Einfuhrland (Länderkürzel) und Einfuhrjahr.",
     "en_q":"What marking does a firearm usually bear?",
     "en_a":"a) Name, company name or brand of a weapon manufacturer or dealer who has a commercial establishment within the scope of this Act. b) Country code of the country of manufacture c) Name of the ammunition; If no ammunition is used, the designation of the projectiles d) Proof mark e) Production number f) In the case of imported weapons, also include the importing country (country code) and importing year.",
     "ru_q":"Какую маркировку обычно имеет огнестрельное оружие?",
     "ru_a":"a) Название, название компании или торговая марка производителя или продавца оружия, у которого есть коммерческое предприятие, подпадающее под действие настоящего Закона. b) код страны-производителя; c) название боеприпаса; Если боеприпасы не используются, обозначение снарядов d) Контрольный знак e) Заводской номер f) В случае импортированного оружия также укажите страну-импортер (код страны) и год импорта.",
     "c":"abcdef"
  },
  {
     "id":"3.05",
     "de_q":"Welche der nebenstehenden Kennzeichen sind nicht auf einer waffenbesitzkartenpflichtigen Schusswaffe zu finden?",
     "de_a":"a) b) c)",
     "en_q":"Which of the adjacent marks cannot be found on a firearm that requires a gun license?",
     "en_a":"a) b) c)",
     "ru_q":"Какие из соседних знаков нельзя найти на огнестрельном оружии, для которого требуется лицензия на оружие?",
     "ru_a":"a) b) c)",
     "c":"ac"
  },
  {
     "id":"3.06",
     "de_q":"Wie sind Schreckschuss-, Reizstoff und Signalwaffen gekennzeichnet, deren Erwerb und Besitz erlaubnisfrei ist?",
     "de_a":"Durch das Zulassungszeichen „PTB im Kreis“ (PTB = Physikalisch-Technische Bundesanstalt).",
     "en_q":"How are alarm guns, irritants and signal weapons marked, the acquisition and possession of which is permit-free?",
     "en_a":"With the approval mark “PTB in a circle” (PTB = Physikalisch-Technische Bundesan stalt).",
     "ru_q":"Как маркируются сигнальные пистолеты, раздражители и сигнальное оружие, приобретение и хранение которых не разрешается?",
     "ru_a":"Имеет знак официального утверждения «PTB в круге» (PTB = Physikalisch-Technische Bundesan stalt).",
     "c":"x"
  },
  {
     "id":"3.07",
     "de_q":"Welche Kennzeichnung muss eine erlaubnispflichtige Feuerwaffe mindestens aufweisen?",
     "de_a":"a) Hersteller- oder Händlerzeichen, Seriennummer, Modell, Bezeichnung der Munition b) Hersteller- oder Händlerzeichen, Herstellungsland (Länderkürzel), Seriennummer, Beschusszeichen, Bezeichnung der Munition, bei Importwaffen unter anderem auch Einfuhrland (Landeskürzel) und Einfuhrjahr c) Hersteller- oder Händlerzeichen, Seriennummer, Herstellungsjahr, Bezeichnung der Munition",
     "en_q":"What marking must a firearm subject to authorization have at least?",
     "en_a":"a) Manufacturer or dealer mark, serial number, model, name of the ammunition b) Manufacturer or dealer mark, country of manufacture (country code), serial number, proof mark, name of the ammunition, in the case of imported weapons also import country (country code) and year of import c ) Manufacturer or dealer mark, serial number, year of manufacture, designation of the ammunition",
     "ru_q":"Какую маркировку должно иметь хотя бы разрешенное огнестрельное оружие?",
     "ru_a":"a) марка производителя или дилера, серийный номер, модель, название боеприпасов; b) марка производителя или дилера, страна изготовления (код страны), серийный номер, контрольный знак, название боеприпасов; в случае импортированного оружия также импорт страна (код страны) и год импорта c) Марка производителя или дилера, серийный номер, год производства, обозначение боеприпасов.",
     "c":"b"
  },
  {
     "id":"3.08",
     "de_q":"Welche Kennzeichen müssen auf der kleinsten Verpackungseinheit von Patronen angebracht sein?",
     "de_a":"a) Hersteller- oder Fertigungszeichen, Fertigungsserie, Patronendaten, Zulassungszeichen b) Herstellungsdatum, Patronenkaliber c) keine",
     "en_q":"Which labels must be affixed to the smallest packaging unit of cartridges?",
     "en_a":"a) Manufacturer or production mark, production series, cartridge data, approval mark b) Date of manufacture, cartridge caliber c) None",
     "ru_q":"Какие ярлыки необходимо наклеить на наименьшую упаковку картриджей?",
     "ru_a":"a) Заводской или производственный знак, производственная серия, данные патрона, знак официального утверждения b) Дата изготовления, калибр патрона c) Нет",
     "c":"a"
  },
  {
     "id":"3.09",
     "de_q":"Handfeuerwaffen müssen Beschusszeichen tragen. Was wird geprüft?",
     "de_a":"- Haltbarkeit, - Funktionssicherheit, - Maßhaltigkeit und - richtige Kennzeichnung.",
     "en_q":"Handguns must be marked with proof. What is being checked?",
     "en_a":"- durability, - functional reliability, - dimensional accuracy and - correct labeling.",
     "ru_q":"Пистолеты должны быть маркированы доказательством. Что проверяется?",
     "ru_a":"- долговечность, - функциональная надежность, - точность размеров и - правильная маркировка.",
     "c":"x"
  },
  {
     "id":"3.10",
     "de_q":"Welche Waffenteile unterliegen, bei Einfuhr in den Geltungsbereich des Waffengesetzes, der Kennzeichnungspflicht des § 24 Abs. 1 des Waffengesetzes?",
     "de_a":"a) Mindestens ein wesentliches Waffenteil muss entsprechend den gesetzlichen Vorgaben gekennzeichnet sein. b) Alle wesentlichen Waffenteile müssen entsprechend den gesetzlichen Vorgaben gekennzeichnet sein. c) Es ist ausreichend wenn sich eine Seriennummer auf dem Lauf der Waffe befindet.",
     "en_q":"When imported into the scope of the Weapons Act, which weapon parts are subject to the labeling requirement of Section 24 (1) of the Weapons Act?",
     "en_a":"a) At least one essential weapon part must be labeled in accordance with the legal requirements. b) All essential weapon parts must be labeled in accordance with the legal requirements. c) It is sufficient if there is a serial number on the barrel of the weapon.",
     "ru_q":"При импорте в сферу действия Закона об оружии, какие части оружия подпадают под требование маркировки Раздела 24 (1) Закона об оружии?",
     "ru_a":"a) По крайней мере, одна важная часть оружия должна иметь маркировку в соответствии с требованиями законодательства. b) Все основные части оружия должны иметь маркировку в соответствии с требованиями законодательства. c) Достаточно наличия серийного номера на стволе оружия.",
     "c":"b"
  },
  {
     "id":"3.11",
     "de_q":"Welche Kennzeichnung muss die Randfeuerpatrone aufweisen?",
     "de_a":"a) Kaliberangabe auf der Hülse b) Herstellerzeichen auf der Hülse c) Kaliber und Herstellerzeichen auf der Hülse",
     "en_q":"What marking must the rimfire cartridge have?",
     "en_a":"a) Caliber information on the case b) Manufacturer's mark on the case c) Caliber and manufacturer's mark on the case",
     "ru_q":"Какую маркировку должен иметь патрон кольцевого воспламенения?",
     "ru_a":"a) Информация о калибре на корпусе b) Маркировка производителя на корпусе c) Калибр и маркировка производителя на корпусе",
     "c":"b"
  },
  {
     "id":"3.12",
     "de_q":"Welche Kennzeichnung muss die Zentralfeuerpatrone aufweisen?",
     "de_a":"a) Kaliberangabe und Geschossart auf dem Hülsenboden b) Herstellerzeichen auf dem Hülsenhals c) Herstellerzeichen und Bezeichnung der Munition auf der Hülse",
     "en_q":"What marking must the center fire cartridge have?",
     "en_a":"a) Caliber specification and type of bullet on the case base b) Manufacturer's mark on the case neck c) Manufacturer's mark and designation of the ammunition on the case",
     "ru_q":"Какую маркировку должен иметь центральный патрон?",
     "ru_a":"a) Калибр и тип пули на основании гильзы b) Маркировка производителя на шейке гильзы c) Маркировка производителя и обозначение боеприпасов на гильзе",
     "c":"c"
  },
  {
     "id":"3.13",
     "de_q":"Was bedeutet der Zusatz „R“ in der Munitionsbezeichnung?",
     "de_a":"a) Patrone mit Rand b) Randfeuerpatrone c) Patrone für Revolver (R = Revolver)",
     "en_q":"What does the addition 'R' in the ammunition designation mean?",
     "en_a":"a) cartridge with rim b) rimfire cartridge c) cartridge for revolver (R = revolver)",
     "ru_q":"Что означает добавление 'R' в обозначении боеприпаса?",
     "ru_a":"a) патрон с ободком b) патрон кольцевого воспламенения c) патрон для револьвера (R = револьвер)",
     "c":"a"
  },
  {
     "id":"3.14",
     "de_q":"Welche zusätzlichen Angaben müssen Schrotpatronen im Kaliber 12/70 aufweisen?",
     "de_a":"a) keine zusätzlichen Angaben erforderlich b) auf der Hülse die Längenangabe 70 c) Angabe der Anzahl der Schrote",
     "en_q":"What additional information must 12/70 caliber shotgun shells have?",
     "en_a":"a) no additional information required b) the length indication 70 on the case c) indication of the number of shot",
     "ru_q":"Какую дополнительную информацию должны иметь патроны для дробовика калибра 12/70?",
     "ru_a":"a) дополнительная информация не требуется b) указатель длины 70 на футляре c) указатель количества выстрелов",
     "c":"b"
  },
  {
     "id":"3.15",
     "de_q":"Welche Kennzeichen müssen auf Zentralfeuermunition angebracht sein?",
     "de_a":"Auf der Hülse der Munition müssen das Herstellerzeichen und die Bezeichnung der Munition angebracht sein.",
     "en_q":"Which marks must be affixed to center fire ammunition?",
     "en_a":"The manufacturer's mark and the name of the ammunition must be affixed to the case of the ammunition.",
     "ru_q":"Какие отметки должны быть нанесены на боеприпасы для стрельбы по центру огня?",
     "ru_a":"Марка производителя и название боеприпасов должны быть нанесены на корпус боеприпасов.",
     "c":"x"
  },
  {
     "id":"3.16",
     "de_q":"Welche Kennzeichen müssen auf der kleinsten Verpackungseinheit der Munition angebracht sein?",
     "de_a":"#NAME?",
     "en_q":"Which labels must be affixed to the smallest packaging unit of the ammunition?",
     "en_a":"- the manufacturer's mark - the production mark (production series) - the designation of the ammunition - approval mark",
     "ru_q":"Какие ярлыки должны быть нанесены на наименьшую упаковочную единицу боеприпасов?",
     "ru_a":"- знак производителя - знак производства (производственная серия) - обозначение боеприпаса - знак официального утверждения",
     "c":"x"
  },
  {
     "id":"3.17",
     "de_q":"Welche Kennzeichnung muss auf einer Randfeuerpatrone angebracht sein?",
     "de_a":"a) Bezeichnung der Munition b) Randfeuer c) Herstellerzeichen",
     "en_q":"What marking must be affixed to a rimfire cartridge?",
     "en_a":"a) Designation of the ammunition b) Rimfire c) Manufacturer's mark",
     "ru_q":"Какая маркировка должна быть нанесена на патрон кольцевого воспламенения?",
     "ru_a":"a) Обозначение боеприпасов b) Rimfire c) Марка производителя",
     "c":"c"
  },
  {
     "id":"3.18",
     "de_q":"Welche Kennzeichen müssen auf der kleinsten Munitionsverpackungseinheit angebracht sein?",
     "de_a":"a) Herstellerzeichen, Bezeichnung der Munition, Fertigungsserie (Losnummer), Zulassungszeichen b) Herstellerzeichen, Bezeichnung der Munition, Anzahl der Patronen in der Packung, Herstellungsjahr, Zulassungszeichen c) Herstellerzeichen, Bezeichnung der Munition, Anzahl der Patronen in der Packung, Fertigungsserie (Losnummer), Herstellungsdatum",
     "en_q":"Which labels must be affixed to the smallest ammunition packaging unit?",
     "en_a":"a) Manufacturer's mark, designation of the ammunition, production series (lot number), approval mark b) Manufacturer's mark, designation of the ammunition, number of cartridges in the pack, year of manufacture, approval mark c) Manufacturer’s mark, designation of the ammunition, number of cartridges in the pack, production series ( Lot number), date of manufacture",
     "ru_q":"Какие ярлыки необходимо наклеить на самую маленькую единицу упаковки боеприпасов?",
     "ru_a":"a) Знак производителя, обозначение боеприпаса, производственная серия (номер партии), знак утверждения b) Знак производителя, обозначение боеприпаса, количество патронов в упаковке, год изготовления, знак утверждения c) Знак производителя, обозначение боеприпасы, количество патронов в упаковке, производственная серия (Номер партии), дата изготовления",
     "c":"a"
  },
  {
     "id":"3.19",
     "de_q":"Welche Kennzeichnung muss auf einer Zentralfeuerpatrone angebracht sein?",
     "de_a":"a) Bezeichnung der Munition und Geschossart b) Bezeichnung der Munition und Herstellerzeichen c) Bezeichnung der Munition und Losnummer",
     "en_q":"What marking must be affixed to a center fire cartridge?",
     "en_a":"a) Name of the ammunition and type of bullet b) Name of the ammunition and manufacturer's mark c) Name of the ammunition and lot number",
     "ru_q":"Какая маркировка должна быть нанесена на патрон центрального огня?",
     "ru_a":"a) Название боеприпаса и тип пули b) Название боеприпаса и марка производителя c) Название боеприпаса и номер партии",
     "c":"b"
  },
  {
     "id":"3.20",
     "de_q":"Welche Bedeutung hat ein Beschusszeichen?",
     "de_a":"a) Sicherheitsüberprüfung der Waffe beim zuständigen TÜV b) Die Waffe ist durch die Physikalisch Technische Bundesanstalt auf Funktionsfähigkeit geprüft. c) Die Waffe ist auf Haltbarkeit, Funktionssicherheit, Maßhaltigkeit und richtige Kennzeichnung durch ein anerkanntes Beschussamt geprüft.",
     "en_q":"What is the meaning of a proof mark?",
     "en_a":"a) Safety check of the weapon by the responsible TÜV b) The weapon has been tested for functionality by the Physikalisch Technische Bundesanstalt. c) The weapon has been checked for durability, functional safety, dimensional accuracy and correct marking by a recognized fire protection office.",
     "ru_q":"Что означает знак доказательства?",
     "ru_a":"a) Проверка безопасности оружия ответственным органом TÜV. b) Оружие было проверено на работоспособность Physikalisch Technische Bundesanstalt. c) Оружие было проверено на прочность, функциональную безопасность, точность размеров и правильность маркировки признанным органом пожарной безопасности.",
     "c":"c"
  },
  {
     "id":"3.21",
     "de_q":"Woran erkennt man, ob eine Schusswaffe zum Schießen zugelassen ist?",
     "de_a":"Die Waffe muss ein gültiges Prüf- und/oder Beschusszeichen tragen.",
     "en_q":"How can you tell whether a firearm is approved for shooting?",
     "en_a":"The weapon must have a valid test and / or proof mark.",
     "ru_q":"Как узнать, разрешено ли огнестрельное оружие к стрельбе?",
     "ru_a":"Оружие должно иметь действительную отметку об испытаниях и / или испытаниях.",
     "c":"x"
  },
  {
     "id":"3.22",
     "de_q":"Wann ist eine Schusswaffe erneut zum Beschuss vorzulegen?",
     "de_a":"Wenn ein wesentliches Teil ausgetauscht, verändert oder instandgesetzt worden ist.",
     "en_q":"When is a firearm to be presented again for fire?",
     "en_a":"When an essential part has been replaced, modified or repaired.",
     "ru_q":"Когда снова предъявить огнестрельное оружие?",
     "ru_a":"Когда существенная часть была заменена, модифицирована или отремонтирована.",
     "c":"x"
  },
  {
     "id":"3.23",
     "de_q":"Auf welchem Waffenteil muss das Beschusszeichen auch angebracht sein?",
     "de_a":"a) Auf dem Lauf b) Auf dem Schaft c) Auf dem Visier",
     "en_q":"On which part of the weapon must the proof mark also be affixed?",
     "en_a":"a) On the barrel b) On the shaft c) On the visor",
     "ru_q":"На какой части оружия также должна быть проставлена ​​отметка?",
     "ru_a":"a) На стволе b) На валу c) На козырьке",
     "c":"a"
  },
  {
     "id":"3.24",
     "de_q":"Welches Beschusszeichen trägt ein in der Bundesrepublik beschossener Revolver .357 Magnum?",
     "de_a":"a) Bundesadler V / CIP S seit 20.10.2014 b) Bundesadler N / CIP N seit 20.10.2014 c) Bundesadler SP / CIP PN seit 20.10.2014",
     "en_q":"Which proof mark does a .357 Magnum revolver that has been shot at in the Federal Republic of Germany?",
     "en_a":"a) Federal eagle V / CIP S since October 20, 2014 b) Federal eagle N / CIP N since October 20, 2014 c) Federal eagle SP / CIP PN since October 20, 2014",
     "ru_q":"Какой контрольный знак стоит на револьвере .357 Magnum, в который стреляли в Федеративной Республике Германии?",
     "ru_a":"a) Federal eagle V / CIP S с 20 октября 2014 г. b) Federal eagle N / CIP N с 20 октября 2014 г. c) Federal eagle SP / CIP PN с 20 октября 2014 г.",
     "c":"b"
  },
  {
     "id":"3.25",
     "de_q":"Was bedeutet das Beschusszeichen Bundesadler N bzw. CIP N? seit 20.10.2014",
     "de_a":"a) Die Waffe ist behördlich geprüft und zum Schießen zugelassen. b) Die Gebühren sind bezahlt. c) Die Waffe ist gebraucht.",
     "en_q":"What does the proof mark Bundesadler N or CIP N mean? since October 20, 2014",
     "en_a":"a) The weapon has been officially tested and approved for shooting. b) The fees have been paid. c) The weapon is used.",
     "ru_q":"Что означает знак подтверждения Bundesadler N или CIP N? с 20 октября 2014 г.",
     "ru_a":"a) Оружие прошло официальные испытания и допущено к стрельбе. b) Сборы уплачены. c) Оружие использовано.",
     "c":"a"
  },
  {
     "id":"3.26",
     "de_q":"Welche Schusswaffe muss ein amtliches Beschusszeichen tragen?",
     "de_a":"a) Ein jetzt hergestellter Nachbau einer Steinschlosspistole (Original 18. Jhdt.) b) Ein Druckluftgewehr, das dem Geschoss eine Energie von ca. 10 Joule erteilt. c) Ordonnanzgewehr aus dem 2. Welt krieg d) Bauartgeprüfter Schreckschussrevolver im Kaliber bis 6 mm",
     "en_q":"Which firearm must have an official proof mark?",
     "en_a":"a) A now manufactured replica of a flintlock pistol (original 18th century) b) A compressed air rifle that gives the projectile an energy of approx. 10 joules. c) Ordnance rifle from World War II. d) Type-approved alarm revolver in caliber up to 6 mm",
     "ru_q":"Какое огнестрельное оружие должно иметь официальный знак доказательства?",
     "ru_a":"a) Изготовленная сейчас копия пистолета с кремневым замком (оригинал 18 века) b) Пневматическая винтовка, дающая снаряду энергию примерно в 10 джоулей. c) Артиллерийская винтовка времен Второй мировой войны. d) Одобренный типовой сигнальный револьвер калибра до 6 мм.",
     "c":"ac"
  },
  {
     "id":"3.27",
     "de_q":"Welche Beschussstempelung trägt üblicherweise eine in der Bundesrepublik Deutschland beschossene Schusswaffe?",
     "de_a":"a) Beschusszeichen in Form eines Bundesadlers (seit 20.10.2014 CIP Zeichen) mit darunter liegendem Kennbuchstaben für die Art des Beschusses. b) Ortszeichen für das Beschussamt c) Zahlen oder Buchstabencodierung für das Beschussdatum",
     "en_q":"Which gunshot stamps are usually on a firearm that has been shot at in the Federal Republic of Germany?",
     "en_a":"a) Proof mark in the form of a German eagle (since October 20, 2014 CIP mark) with a code letter underneath for the type of bullet. b) Place symbols for the firing office c) Numbers or letter coding for the firing date",
     "ru_q":"Какие штампы огнестрельного оружия обычно есть на огнестрельном оружии, в которое стреляли в Федеративной Республике Германии?",
     "ru_a":"a) Контрольный знак в виде немецкого орла (с 20 октября 2014 года знак CIP) с кодовой буквой под ним для обозначения типа пули. b) Поместите символы для стрельбы c) Цифры или буквенное обозначение даты увольнения.",
     "c":"abc"
  },
  {
     "id":"3.28",
     "de_q":"Welche Bedeutung hat ein Beschusszeichen, bei dem ein Bundesadler (seit 20.10.2014 CIP-Zeichen) mit den darunter liegenden Buchstaben „PN“ abgebildet ist?",
     "de_a":"a) Die Waffe ist für das Schießen mit allen Munitionssorten (Schwarzpulver und rauchloses Pulver) im entsprechenden Kaliber zugelassen. (PN = Prüfung Normal) b) Die Waffe ist für das Schießen mit allen Munitionssorten im entsprechenden Kaliber zugelassen, die mit rauchlosem Pulver geladen sind. (PN = Prüfung Nitro) c) Die Waffe ist für das Schießen mit allen Munitionssorten im entsprechenden Kaliber zugelassen, die mit Schwarzpulver geladen sind. (PN = poudre noir)",
     "en_q":"What is the meaning of a proof mark on which a federal eagle (since October 20, 2014 CIP mark) is depicted with the letters “PN” underneath?",
     "en_a":"a) The weapon is approved for shooting with all types of ammunition (black powder and smokeless powder) in the corresponding caliber. (PN = normal test) b) The weapon is approved for shooting with all types of ammunition in the appropriate caliber that are loaded with smokeless powder. (PN = Nitro test) c) The weapon is approved for shooting with all types of ammunition in the appropriate caliber that are loaded with black powder. (PN = poudre noir)",
     "ru_q":"Что означает знак проверки, на котором изображен федеральный орел (с 20 октября 2014 года знак CIP) с буквами «PN» под ним?",
     "ru_a":"a) Оружие допущено к стрельбе всеми типами боеприпасов (дымным порохом и бездымным порохом) соответствующего калибра. (PN = нормальное испытание) b) Оружие допущено к стрельбе всеми типами боеприпасов соответствующего калибра, снаряженных бездымным порохом. (PN = Nitro test) c) Оружие допущено к стрельбе всеми типами боеприпасов соответствующего калибра, снаряженных дымным порохом. (PN = poudre noir)",
     "c":"c"
  },
  {
     "id":"3.29",
     "de_q":"Was wird bei einem amtlichen Beschuss geprüft?",
     "de_a":"a) Die Waffe wird auf Haltbarkeit, Funktionssicherheit, Maßhaltigkeit und Kennzeichnung geprüft. b) Die Waffe wird auf Lebensdauer, Konstruktionsschlüssigkeit und Funktionstauglichkeit geprüft. c) Die Waffe wird auf Präzision, Fertigungstoleranzen und Materialhärte geprüft.",
     "en_q":"What is checked during an official fire?",
     "en_a":"a) The weapon is checked for durability, functional reliability, dimensional accuracy and marking. b) The weapon is checked for service life, structural integrity and functionality. c) The weapon is checked for precision, manufacturing tolerances and material hardness.",
     "ru_q":"Что проверяют во время официального пожара?",
     "ru_a":"a) Оружие проверяется на прочность, функциональную надежность, точность размеров и маркировку. b) Оружие проверяется на срок службы, конструктивную целостность и работоспособность. c) Оружие проверяется на точность, производственные допуски и твердость материала.",
     "c":"a"
  },
  {
     "id":"3.30",
     "de_q":"Auf welchen Waffenteilen muss das Beschusszeichen (auch) angebracht sein?",
     "de_a":"a) Lauf, Verschluss b) Schaft, Visier c) Sicherung, Magazin",
     "en_q":"On which weapon parts must the proof mark (also) be affixed?",
     "en_a":"a) barrel, breech b) stock, visor c) safety, magazine",
     "ru_q":"На каких частях оружия должен быть (также) проставлен контрольный знак?",
     "ru_a":"a) ствол, казенная часть b) ложа, козырек c) предохранитель, магазин",
     "c":"a"
  },
  {
     "id":"3.31",
     "de_q":"Welche der folgenden Waffenteile unterliegen der Beschusspflicht?",
     "de_a":"a) Einsteckläufe für Zentralfeuerpatronen b) Wechseltrommeln c) Wechselsysteme",
     "en_q":"Which of the following weapon parts are subject to mandatory gunfire?",
     "en_a":"a) Insert barrels for center fire cartridges b) Exchange drums c) Exchange systems",
     "ru_q":"Какие из следующих частей оружия подлежат обязательной стрельбе?",
     "ru_a":"a) Вставные стволы для патронов центрального огня b) Заменяемые барабаны c) Системы замены",
     "c":"abc"
  },
  {
     "id":"3.32",
     "de_q":"Werden in Deutschland auch Beschusszeichen anderer Staaten anerkannt?",
     "de_a":"a) Ja, aller Staaten, die eine Sicherheitsprüfung vorschreiben. b) Ja, aber nur Staaten, die dem Über einkommen über die gegenseitige Anerkennung von Beschusszeichen und Prüfzeichen beigetreten sind (C.I.P.). c) Nein, alle Schusswaffen müssen vor ihrem Gebrauch von deutschen Beschussämtern geprüft sein.",
     "en_q":"Are proof marks from other countries recognized in Germany?",
     "en_a":"a) Yes, of all countries that require a security check. b) Yes, but only states that have acceded to the Convention on the Mutual Recognition of Proof Marks and Certification Marks (C.I.P.). c) No, all firearms must be tested by German fire authorities before they can be used.",
     "ru_q":"Признаются ли в Германии контрольные знаки из других стран?",
     "ru_a":"a) Да, из всех стран, в которых требуется проверка безопасности. b) Да, но только государства, присоединившиеся к Конвенции о взаимном признании пробных и сертификационных знаков (C.I.P.). c) Нет, все огнестрельное оружие должно быть испытано немецкими пожарными органами, прежде чем его можно будет использовать.",
     "c":"b"
  },
  {
     "id":"3.33",
     "de_q":"Bei welchen der folgenden ehemaligen Staaten ist der dortige amtliche Beschuss auch in der Bundesrepublik Deutschland weiterhin gültig? (D.h. die dort beschossenen Waffen müssen nicht von einem deutschen Beschussamt erneut beschossen werden.)",
     "de_a":"a) CSSR b) DDR c) Deutsches Reich (sollte sich ein Hakenkreuz auf der Waffe befinden, müsste das Hakenkreuz vom Beschussamt mit einem „X“ versehen werden)",
     "en_q":"In which of the following former states is the official bombardment still valid in the Federal Republic of Germany? (I.e. the weapons fired there do not have to be fired again by a German firing office.)",
     "en_a":"a) CSSR b) GDR c) German Reich (if there is a hook cross on the weapon, the swastika would have to be marked with an 'X')",
     "ru_q":"В каком из следующих бывших государств официальная бомбардировка все еще действует в Федеративной Республике Германии? (То есть из выпущенного там оружия не нужно стрелять снова из немецкой огневой службы.)",
     "ru_a":"a) ЧССР b) ГДР c) Германский Рейх (если на оружии есть крест с крючками, свастика должна быть отмечена знаком 'X')",
     "c":"abc"
  },
  {
     "id":"3.34",
     "de_q":"Welche Schusswaffe muss neben dem Zulassungszeichen „F im Fünfeck“ noch als weiteres Zulassungszeichen „PTB im Quadrat“ tragen? (PTB = Physikalisch-Technische Bundesanstalt)",
     "de_a":"a) Druckluftwaffen mit einer Bewegungsenergie bis zu 7,5 Joule. b) Schusswaffen mit kleinerem Kaliber als .22lr und einer Bewegungsenergie bis zu 10 Joule. c) Feuerwaffen, deren Geschossen eine Bewegungsenergie von nicht mehr als 7,5 Joule erteilt wird.",
     "en_q":"Which firearm must bear the approval mark “F in the pentagon” as a further approval mark “PTB in the square”? (PTB = Physikalisch-Technische Bundesanstalt)",
     "en_a":"a) Pneumatic weapons with a kinetic energy of up to 7.5 joules. b) Firearms with a caliber smaller than .22lr and a kinetic energy of up to 10 joules. c) Firearms, the projectile of which is given a kinetic energy of not more than 7.5 joules.",
     "ru_q":"Какое огнестрельное оружие должно иметь знак официального утверждения «F в пятиугольнике» в качестве дополнительного знака официального утверждения «PTB в квадрате»? (PTB = Physikalisch-Technische Bundesanstalt)",
     "ru_a":"a) Пневматическое оружие с кинетической энергией до 7,5 Дж. b) Огнестрельное оружие калибром менее .22lr и кинетической энергией до 10 джоулей. c) огнестрельное оружие, снаряду которого придана кинетическая энергия не более 7,5 джоулей.",
     "c":"c"
  },
  {
     "id":"3.35",
     "de_q":"Welche Bedeutung hat das Zeichen „F im Fünfeck“?",
     "de_a":"a) Das Zeichen „F im Fünfeck“ kenn zeichnet Waffen, die von volljährigen Personen erlaubnisfrei erworben werden dürfen. b) Das Zeichen „F im Fünfeck“ kenn zeichnet Waffen, deren Geschossenergie E0 maximal 7,5 Joule beträgt. c) Das Zeichen „F im Fünfeck“ kenn zeichnet Waffen, deren Mündungsgeschwindigkeit unter 7,5 m/s. liegt.",
     "en_q":"What is the meaning of the symbol 'F in a pentagon'?",
     "en_a":"a) The symbol 'F in the pentagon' identifies weapons that can be acquired by persons of legal age without permission. b) The symbol 'F in the pentagon' identifies weapons whose projectile energy E0 is a maximum of 7.5 joules. c) The symbol 'F in the pentagon' identifies weapons with a muzzle velocity below 7.5 m / s. located.",
     "ru_q":"Что означает символ «F в пятиугольнике»?",
     "ru_a":"a) Символ «F в пятиугольнике» обозначает оружие, которое могут быть приобретены лицами, достигшими совершеннолетия, без разрешения. b) Символ «F в пятиугольнике» обозначает оружие, энергия снаряда E0 которого не превышает 7,5 джоулей. c) Символ «F в пятиугольнике» обозначает оружие с начальной скоростью ниже 7,5 м / с. расположена.",
     "c":"b"
  },
  {
     "id":"4.01",
     "de_q":"Wo darf eine erlaubnispflichtige Kurzwaffe gelagert werden?",
     "de_a":"a) In einem Waffenschrank der Sicherheitsstufe A nach VDMA 24992, sofern sich keine dazu passende Munition im Schrank befindet. b) In einem Waffenschrank der Sicherheitsstufe B nach VDMA 24992, sofern sich keine dazu passende Munition im Schrank befindet wenn der Schrank bereits vor dem 06.07.2017 rechtmäßig vom Betroffenen zur Waffenaufbewahrung genutzt wurde. c) In einem Waffenschrank der Norm DIN/EN 1143- 1 mit dem Widerstandsgrad 0.",
     "en_q":"Where can a handgun that requires a permit be stored?",
     "en_a":"a) In a weapon cabinet of security level A according to VDMA 24992, as long as there is no suitable ammunition in the cabinet. b) In a weapons locker of security level B according to VDMA 24992, provided that there is no matching ammunition in the locker if the locker was already legally used by the person concerned to store weapons before July 6th, 2017. c) In a gun safe according to the DIN / EN 1143-1 standard with a degree of resistance of 0.",
     "ru_q":"Где можно хранить пистолет, требующий разрешения?",
     "ru_a":"a) В оружейном шкафу уровня безопасности A согласно VDMA 24992, пока в шкафу нет подходящих боеприпасов. b) В шкафчике для оружия уровня безопасности B согласно VDMA 24992 при условии, что в шкафчике нет подходящих боеприпасов, если шкафчик уже законно использовался заинтересованным лицом для хранения оружия до 6 июля 2017 года. c) В оружейном сейфе согласно стандарту DIN / EN 1143-1 со степенью сопротивления 0.",
     "c":"bc"
  },
  {
     "id":"4.02",
     "de_q":"Welchem Sicherheitsstandard muss ein Waffenschrank mindestens entsprechen, damit Waffen und dazu passende Munition zusammen darin aufbewahrt werden dürfen?",
     "de_a":"a) Sicherheitsstufe B nach VDMA 24992, Schrankgewicht über 200kg b) DIN/EN 1143- 1 Widerstandsgrad 0 c) DIN/EN 1143- 1 Widerstandsgrad I",
     "en_q":"What minimum security standard does a gun cabinet have to meet so that guns and matching ammunition can be stored together in it?",
     "en_a":"a) Security level B according to VDMA 24992, cabinet weight over 200kg b) DIN / EN 1143-1 resistance grade 0 c) DIN / EN 1143-1 resistance grade I.",
     "ru_q":"Какому минимальному стандарту безопасности должен соответствовать оружейный шкаф, чтобы в нем можно было хранить оружие и соответствующие боеприпасы?",
     "ru_a":"a) Уровень безопасности B согласно VDMA 24992, вес шкафа более 200 кг b) Класс сопротивления DIN / EN 1143-1 0 c) Уровень сопротивления DIN / EN 1143-1 I.",
     "c":"b"
  },
  {
     "id":"4.03",
     "de_q":"In welchem Behältnis darf erlaubnispflichtige Munition gelagert werden?",
     "de_a":"a) Wohnzimmerschrank mit Sicherheitsschloss b) Blechschrank mit Vorhängeschloss c) Stahlblechbehältnis mit Schwenkriegelschloss",
     "en_q":"In which container may ammunition requiring a permit be stored?",
     "en_a":"a) Living room cupboard with security lock b) Sheet metal cupboard with padlock c) Sheet steel container with swivel bolt lock",
     "ru_q":"В каком контейнере можно хранить боеприпасы, требующие разрешения?",
     "ru_a":"a) Шкаф в гостиной с замком безопасности b) Шкаф из листового металла с замком c) Контейнер из листовой стали с замком с поворотным болтом",
     "c":"c"
  },
  {
     "id":"4.04",
     "de_q":"Darf die Erlaubnisbehörde gegen den Willen des Erlaubnisinhabers dessen Wohnräume betreten, um die ordnungsgemäße Waffenaufbewahrung zu überprüfen?",
     "de_a":"a) Ja, dies ist stets zulässig. b) Ja, sofern eine dringende Gefahr für die öffentliche Sicherheit besteht. c) Ja, aber nur mit einem richterlichen Durchsuchungsbefehl.",
     "en_q":"Can the licensing authority enter the license holder's living quarters against the will of the license holder in order to check that the weapons are properly stored?",
     "en_a":"a) Yes, this is always permissible. b) Yes, provided there is an urgent threat to public safety. c) Yes, but only with a judicial search warrant.",
     "ru_q":"Может ли лицензирующий орган войти в жилые помещения держателя лицензии против воли держателя лицензии, чтобы проверить правильность хранения оружия?",
     "ru_a":"a) Да, это всегда допустимо. b) Да, при наличии острой угрозы общественной безопасности. c) Да, но только при наличии ордера на обыск.",
     "c":"b"
  },
  {
     "id":"4.05",
     "de_q":"Schusswaffen sind aufzubewahren...",
     "de_a":"a) an einem versteckten Ort. b) nur bei der Erlaubnisbehörde. c) in einem Behältnis der entsprechenden Sicherheitsstufe.",
     "en_q":"Firearms must be kept ...",
     "en_a":"a) in a hidden place. b) only with the licensing authority. c) in a container of the corresponding security level.",
     "ru_q":"Огнестрельное оружие необходимо хранить ...",
     "ru_a":"a) в скрытом месте. b) только в лицензирующем органе. c) в контейнере соответствующего уровня безопасности.",
     "c":"c"
  },
  {
     "id":"4.06",
     "de_q":"Wo müssen erlaubnispflichtige Schusswaffen und Munition aufbewahrt werden?",
     "de_a":"a) Im Kleiderschrank b) In einer verschlossenen und alarmgesicherten Familienwohnung. c) In einem Behältnis der entsprechenden Sicherheitsstufe.",
     "en_q":"Where do firearms and ammunition that require a license have to be stored?",
     "en_a":"a) In the wardrobe b) In a locked and alarm-secured family apartment. c) In a container of the corresponding security level.",
     "ru_q":"Где нужно хранить огнестрельное оружие и боеприпасы, требующие лицензии?",
     "ru_a":"a) В шкафу b) В запертой и охраняемой семейной квартире. c) В контейнере соответствующего уровня безопасности.",
     "c":"c"
  },
  {
     "id":"4.07",
     "de_q":"Gegen unbefugten Zugriff ist eine erlaubnispflichtige Pistole zu Hause gesichert, wenn sie…",
     "de_a":"a) versteckt im Bücherregal liegt. b) im abgeschlossenen Waffenkoffer im Schrank aufbewahrt wird. c) in einem Behältnis der Norm DIN/EN 1143-1 Widerstandsgrad 0 oder I aufbewahrt wird.",
     "en_q":"A pistol at home that requires a permit is secured against unauthorized access if it ...",
     "en_a":"a) is hidden in the bookshelf. b) is kept in a locked gun case in the cupboard. c) is stored in a container of the standard DIN / EN 1143-1 resistance grade 0 or I.",
     "ru_q":"Пистолет дома, требующий разрешения, защищен от несанкционированного доступа, если он ...",
     "ru_a":"a) спрятан на книжной полке. b) хранится в запертом ящике для оружия в шкафу. c) хранится в контейнере стандарта DIN / EN 1143-1 класса устойчивости 0 или I.",
     "c":"c"
  },
  {
     "id":"4.08",
     "de_q":"Gegen unbefugten Zugriff ist eine erlaubnispflichtige Langwaffe gesichert, wenn sie...",
     "de_a":"a) sich in einem abgeschlossenen Waffenschrank der Norm DIN/EN 1143-1 Widerstandsgrad 0 oder I befindet. b) im Gewehrständer steht. c) an der Wand hängt und mit einem Schloss gesichert ist.",
     "en_q":"A long gun requiring a license is secured against unauthorized access if it ...",
     "en_a":"a) is in a locked weapon cabinet of the DIN / EN 1143-1 standard, resistance grade 0 or I. b) is in the rifle rack. c) hangs on the wall and is secured with a lock.",
     "ru_q":"Длинное ружье, требующее лицензии, защищено от несанкционированного доступа, если оно ...",
     "ru_a":"a) находится в запертом оружейном шкафу стандарта DIN / EN 1143-1, степень сопротивления 0 или I. b) находится в стойке для винтовки. c) висит на стене и фиксируется замком.",
     "c":"a"
  },
  {
     "id":"4.09",
     "de_q":"Sind Sie in Bezug auf die sichere Verwahrung ihrer Waffe(n) oder Munition zur Auskunft gegenüber der Behörde verpflichtet?",
     "de_a":"a) Es besteht keine Pflicht zum Nachweis über die sichere Verwahrung. b) Ja, wer Waffen oder Munition besitzt, hat der zuständigen Behörde die zur sicheren Verwahrung getroffenen Maßnahmen nachzuweisen. c) Nein, nur wenn mehr als 10 Schusswaffen im Besitz sind.",
     "en_q":"Are you obliged to provide information to the authorities regarding the safe storage of your weapon (s) or ammunition?",
     "en_a":"a) There is no obligation to provide evidence of secure storage. b) Yes, anyone who owns weapons or ammunition must provide the competent authority with evidence of the measures taken for safekeeping. c) No, only if more than 10 firearms are in possession.",
     "ru_q":"Обязаны ли вы предоставлять властям информацию о безопасном хранении вашего оружия (ов) или боеприпасов?",
     "ru_a":"a) Нет никаких обязательств по предоставлению доказательств безопасного хранения. b) Да, любой, кто владеет оружием или боеприпасами, должен предоставить компетентному органу доказательства принятых мер по хранению. c) Нет, только при наличии более 10 единиц огнестрельного оружия.",
     "c":"b"
  },
  {
     "id":"4.10",
     "de_q":"Wozu kann die nicht ordnungsgemäße Aufbewahrung von Waffen oder Munition u.a. führen?",
     "de_a":"Zum Verlust der waffenrechtlichen Zuverlässigkeit.",
     "en_q":"What can the improper storage of weapons or ammunition lead to?",
     "en_a":"To the loss of reliability under weapons law.",
     "ru_q":"К чему может привести неправильное хранение оружия или боеприпасов?",
     "ru_a":"К потере надежности по закону об оружии.",
     "c":"x"
  },
  {
     "id":"4.11",
     "de_q":"Ist die gemeinschaftliche Aufbewahrung von Waffen oder Munition durch berechtigte Personen, die in einer häuslichen Gemeinschaft leben, zulässig?",
     "de_a":"a) Ja b) Nein",
     "en_q":"Is the joint storage of weapons or ammunition by authorized persons who live in a domestic community permitted?",
     "en_a":"a) yes b) no",
     "ru_q":"Разрешено ли совместное хранение оружия или боеприпасов уполномоченными лицами, проживающими в домашнем сообществе?",
     "ru_a":"a) да b) нет",
     "c":"a"
  },
  {
     "id":"4.12",
     "de_q":"Wozu kann die nicht ordnungsgemäße Aufbewahrung von Waffen oder Munition u.a. führen?",
     "de_a":"a) Eine nicht ordnungsgemäße Aufbewahrung von Waffen stellt einen Straftatbestand im Sinne des Waffengesetzes dar. b) Verlust der persönlichen Eignung c) Die nicht ordnungsgemäße Aufbewahrung von Waffen stellt lediglich einen Ordnungswidrigkeitentatbestand dar.",
     "en_q":"What can the improper storage of weapons or ammunition lead to?",
     "en_a":"a) Improper storage of weapons is a criminal offense within the meaning of the Weapons Act. b) Loss of personal suitability c) Improper storage of weapons is merely an offense.",
     "ru_q":"К чему может привести неправильное хранение оружия или боеприпасов?",
     "ru_a":"a) Неправильное хранение оружия является уголовным преступлением по смыслу Закона об оружии. b) Утрата личной пригодности c) Неправильное хранение оружия является просто правонарушением.",
     "c":"a"
  },
  {
     "id":"4.13",
     "de_q":"Wie können Waffen und Munition außerhalb der Wohnung, z.B. bei Hotelübernachtung anlässlich eines Wettkampfes, sicher aufbewahrt werden?",
     "de_a":"a) Die Schusswaffe/n ist/sind immer am Körper zu tragen. b) Ein wesentlicher Teil der Schusswaffe/n ist zu entnehmen und mit sich zu führen. Der Rest der Schusswaffe ist gegen unbefugten Zugriff zu sichern. c) Aufbewahrung in einem Transportbehältnis oder in einem verschlossenen Schrank oder einem sonstigen verschlossenen Behältnis.",
     "en_q":"How can weapons and ammunition be safely stored outside the home, e.g. when staying in a hotel for a competition?",
     "en_a":"a) The firearm / s must always be carried on the body. b) A substantial part of the firearm must be removed and carried with you. The rest of the firearm must be secured against unauthorized access. c) Storage in a transport container or in a locked cabinet or other locked container.",
     "ru_q":"Как можно безопасно хранить оружие и боеприпасы вне дома, например, во время пребывания в отеле на соревнованиях?",
     "ru_a":"a) Огнестрельное оружие всегда следует носить на теле. b) Значительную часть оружия необходимо снять и взять с собой. Остальная часть оружия должна быть защищена от несанкционированного доступа. c) Хранение в транспортной таре, запираемом шкафу или другом запертом контейнере.",
     "c":"bc"
  },
  {
     "id":"4.14",
     "de_q":"Wie sind bei einem Transport von Waffen und Munition in einem Fahr zeug diese bei kurzfristigem Verlassen des Fahrzeuges (Einnahme des Mittagessens, Tanken, Schüsseltreiben, Einkäufe etc.) aufzubewahren?",
     "de_a":"a) Waffen und Munition sind in dem verschlossenen Fahrzeug so aufzubewahren, dass keine unmittelbaren Rückschlüsse auf die Art des Inhaltes erkennbar sind. b) Die Waffe/n darf/dürfen hierbei nicht im Fahrzeug verbleiben.",
     "en_q":"When transporting weapons and ammunition in a vehicle, how do you store them if you leave the vehicle for a short period of time (having lunch, refueling, eating bowls, shopping, etc.)?",
     "en_a":"a) Weapons and ammunition are to be stored in the locked vehicle in such a way that no direct conclusions can be drawn about the type of content. b) The weapon (s) must not remain in the vehicle.",
     "ru_q":"При транспортировке оружия и боеприпасов в транспортном средстве, как вы их храните, если вы покидаете транспортное средство на короткий период времени (обед, заправка топливом, миски для еды, покупки и т. Д.)?",
     "ru_a":"a) Оружие и боеприпасы должны храниться в запертом автомобиле таким образом, чтобы нельзя было сделать прямых выводов о типе содержимого. b) Оружие не должно оставаться в транспортном средстве.",
     "c":"a"
  },
  {
     "id":"4.15",
     "de_q":"Wie sind erlaubnispflichtige Kurzwaffen aufzubewahren (bei dem Bestehen einer waffenrechtlichen Erlaubnis vor dem 06.07.2017 und Fortführung der Nutzung eines vorhandenen Behältnisses)?",
     "de_a":"a) In einer Stahlkassette der Sicherheitsstufe A nach VDMA 24992. b) In einem Sicherheitsbehältnis der Sicherheitsstufe B der Norm VDMA 24992 oder einem Behältnis der Sicherheitsstufe DIN/EN 1143- 1 Widerstandsgrad 0 oder I. c) In einer Truhe mit Schwenkriegel schloss im verschlossenen Keller.",
     "en_q":"How are short guns that require a permit to be stored (if there is a gun license before July 6, 2017 and the use of an existing container is continued)?",
     "en_a":"a) In a steel cassette of security level A according to VDMA 24992. b) In a security container of security level B of standard VDMA 24992 or a container of security level DIN / EN 1143-1 resistance grade 0 or I. c) In a chest with Swing bolt locked in the locked cellar.",
     "ru_q":"Как хранить короткоствольное оружие, требующее разрешения (если лицензия на оружие есть до 6 июля 2017 г. и использование существующего контейнера будет продолжено)?",
     "ru_a":"a) В стальной кассете с уровнем безопасности A согласно VDMA 24992. b) В контейнере с уровнем безопасности B стандарта VDMA 24992 или в контейнере с уровнем безопасности DIN / EN 1143-1, степень устойчивости 0 или I. c) В сундук с качающейся задвижкой, запертый в запертом подвале.",
     "c":"b"
  },
  {
     "id":"4.16",
     "de_q":"Wie sind erlaubnispflichtige Kurzwaffen aufzubewahren (Erteilung einer waffenrechtlichen Erlaubnis und dem damit verbunden Erwerb einer Schusswaffe nach dem 06.07.2017)?",
     "de_a":"a) In einem Sicherheitsbehältnis der Sicherheitsstufe B der Norm VDMA 24992. b) In einem Sicherheitsbehältnis der Sicherheitsstufe DIN/EN 1143-1 Widerstandsgrad 0 oder I. c) In einem Sicherheitsbehältnis der Sicherheitsstufe A der Norm VDMA 24992.",
     "en_q":"How are short guns requiring a permit to be stored (issuing a gun license and the associated acquisition of a firearm after July 6, 2017)?",
     "en_a":"a) In a security container of security level B of the standard VDMA 24992. b) In a security container of security level DIN / EN 1143-1 resistance grade 0 or I. c) In a security container of security level A of the standard VDMA 24992.",
     "ru_q":"Как для короткоствольного оружия требуется разрешение на хранение (выдача лицензии на оружие и связанное с этим приобретение огнестрельного оружия после 6 июля 2017 г.)?",
     "ru_a":"a) В защитном контейнере уровня безопасности B стандарта VDMA 24992. b) В защитном контейнере уровня безопасности DIN / EN 1143-1, степень устойчивости 0 или I. c) В защитном контейнере уровня безопасности A стандарта. VDMA 24992.",
     "c":"b"
  },
  {
     "id":"4.17",
     "de_q":"Welche Mindestanforderungen gelten für die dauerhafte Aufbewahrung von Waffen und Munition?",
     "de_a":"a) Munition ist im Stahlbehältnis mit Schwenkriegelschloss oder gleichwertigem Behältnis aufzubewahren. b) Maximal 5 Kurzwaffen in einem Tresor mit Widerstandsgrad 0 (DIN/EN 1143- 1) bis 200 kg. Über 200 kg je 10 Kurzwaffen. Über 10 Kurzwaffen Widerstandsgrad I. c) Bis zu 10 Langwaffen je A-Schrank. Über 10 Langwaffen im B-Schrank.",
     "en_q":"What are the minimum requirements for the permanent storage of weapons and ammunition?",
     "en_a":"a) Ammunition must be stored in a steel container with a swing bolt lock or equivalent container. b) A maximum of 5 handguns in a safe with resistance grade 0 (DIN / EN 1143-1) up to 200 kg. Over 200 kg per 10 handguns. Over 10 handguns, resistance grade I. c) Up to 10 long guns per A-cabinet. Over 10 long guns in the B cabinet.",
     "ru_q":"Каковы минимальные требования к постоянному хранению оружия и боеприпасов?",
     "ru_a":"a) Боеприпасы должны храниться в стальном контейнере с откидным замком или в аналогичном контейнере. b) Максимум 5 пистолетов в сейфе с классом сопротивления 0 (DIN / EN 1143-1) до 200 кг. Более 200 кг на 10 пистолетов. Более 10 пистолетов, степень сопротивления I. c) До 10 длинных пистолетов на A-шкаф. Более 10 длинных пистолетов в шкафу B.",
     "c":"ab"
  },
  {
     "id":"4.18",
     "de_q":"Wie dürfen acht erlaubnispflichtige Kurzwaffen untern anderem sicher vor unbefugtem Zugriff dauerhaft aufbewahrt werden?",
     "de_a":"a) In einem Tresor der Sicherheitsstufe B mit mehr als 200 Kilogramm Gewicht (VDMA 24992) (wenn der Tresor bereits vor dem 06.07.2017 rechtmäßig vom Betroffenen zur Waffenaufbewahrung genutzt wurde). b) In einem Tresor mit Widerstandsgrad 0 (DIN/EN 1143-1), dessen Gewicht mindesten 200 kg beträgt. c) In einem Tresor der Sicherheitsstufe A (VDMA 24992).",
     "en_q":"How can eight handguns requiring a license be kept safe and secure from unauthorized access, among other things?",
     "en_a":"a) In a safe of security level B with a weight of more than 200 kilograms (VDMA 24992) (if the safe was already legally used by the person concerned to store weapons before July 6, 2017). b) In a safe with resistance grade 0 (DIN / EN 1143-1), the weight of which is at least 200 kg. c) In a safe of security level A (VDMA 24992).",
     "ru_q":"Как можно защитить восемь пистолетов, требующих лицензии, в том числе от несанкционированного доступа?",
     "ru_a":"a) В сейфе уровня безопасности B весом более 200 килограммов (VDMA 24992) (если сейф уже использовался на законных основаниях заинтересованным лицом для хранения оружия до 6 июля 2017 г.). b) В сейфе класса прочности 0 (DIN / EN 1143-1), вес которого составляет не менее 200 кг. c) В сейфе уровня безопасности A (VDMA 24992).",
     "c":"ab"
  },
  {
     "id":"4.19",
     "de_q":"Welche und wie viele erlaubnispflichtigen Schusswaffen dürfen Sie in einem Schrank der Sicherheitsstufe A nach VDMA 24992 (bei dem Bestehen einer waffenrechtlichen Erlaubnis vor dem 06.07.2017 und Fortführung der Nutzung eines vorhandenen Behältnisses) dauerhaft aufbewahren?",
     "de_a":"a) 5 Kurzwaffen b) 5 Langwaffen und 5 Kurzwaffen c) 10 Langwaffen",
     "en_q":"Which and how many firearms that require a permit can you permanently store in a locker with security level A according to VDMA 24992 (if you have a weapon permit before July 6, 2017 and you continue to use an existing container)?",
     "en_a":"a) 5 short guns b) 5 long guns and 5 short guns c) 10 long guns",
     "ru_q":"Какое и сколько огнестрельного оружия, для которого требуется разрешение, вы можете постоянно хранить в шкафчике с уровнем безопасности A в соответствии с VDMA 24992 (если у вас есть разрешение на оружие до 6 июля 2017 г. и вы продолжаете использовать существующий контейнер)?",
     "ru_a":"a) 5 коротких ружей b) 5 длинных ружей и 5 коротких ружей c) 10 длинных ружей",
     "c":"c"
  },
  {
     "id":"4.20",
     "de_q":"Dürfen Sie während des Urlaubes einem Vereinskameraden Ihre WBK pflichtige Schusswaffe zur sicheren Aufbewahrung überlassen?",
     "de_a":"a) Ja, wenn er selbst auch eine WBK besitzt und über ein entsprechendes Behältnis verfügt. b) Nein, das ist nicht gestattet. c) Dies ist unter Vereinsmitgliedern gestattet. d) Ja, es ist ausreichend, dass er ein entsprechendes Behältnis besitzt.",
     "en_q":"Are you allowed to hand over your WBK-compulsory firearm to a club mate for safe storage during your vacation?",
     "en_a":"a) Yes, if he himself also has a WBK and has a corresponding container. b) No, that is not permitted. c) This is permitted among club members. d) Yes, it is sufficient that he has an appropriate container.",
     "ru_q":"Разрешено ли вам передать свое обязательное огнестрельное оружие WBK товарищу по клубу для безопасного хранения во время отпуска?",
     "ru_a":"a) Да, если у него самого тоже есть WBK и есть соответствующий контейнер. b) Нет, это не разрешено. c) Это разрешено среди членов клуба. d) Да, достаточно, чтобы у него был соответствующий контейнер.",
     "c":"a"
  },
  {
     "id":"4.21",
     "de_q":"Wem dürfen Sie während Ihres Urlaubs eine erlaubnispflichtige Waffe vorübergehend zur sicheren Aufbewahrung überlassen?",
     "de_a":"a) Waffenhändler b) Dem Nachbarn, der die Waffe in seiner Werkbank im Hobbyraum lagert. c) Einem Inhaber einer Waffenbesitzkarte",
     "en_q":"Whom can you temporarily leave a weapon that requires a permit for safe storage during your vacation?",
     "en_a":"a) Arms dealer b) The neighbor who stores the weapon in his workbench in the hobby room. c) A holder of a gun ownership card",
     "ru_q":"Кому можно временно оставить оружие, которое требует разрешения на безопасное хранение во время отпуска?",
     "ru_a":"a) Торговец оружием. b) Сосед, который хранит оружие на своем верстаке в комнате для занятий. c) Держатель карты владения оружием.",
     "c":"ac"
  },
  {
     "id":"4.22",
     "de_q":"Wie sind erlaubnispflichtige Langwaffen aufzubewahren?",
     "de_a":"a) In einem Sicherheitsbehältnis der Sicherheitsstufe B der Norm VDMA 24992. b) In einem Sicherheitsbehältnis der Sicherheitsstufe DIN/EN 1143-1 Widerstandsgrad 0 oder I. c) In einem Sicherheitsbehältnis der Sicherheitsstufe A der Norm VDMA 24992.",
     "en_q":"How are long guns requiring a license to be stored?",
     "en_a":"a) In a security container of security level B of the standard VDMA 24992. b) In a security container of security level DIN / EN 1143-1 resistance grade 0 or I. c) In a security container of security level A of the standard VDMA 24992.",
     "ru_q":"Как долго хранятся ружья, требующие лицензии?",
     "ru_a":"a) В защитном контейнере уровня безопасности B стандарта VDMA 24992. b) В защитном контейнере уровня безопасности DIN / EN 1143-1, степень устойчивости 0 или I. c) В защитном контейнере уровня безопасности A стандарта. VDMA 24992.",
     "c":"b"
  },
  {
     "id":"4.23",
     "de_q":"Gelten die Aufbewahrungsvorschriften des Waffengesetzes auch für sogenannte Salutwaffen?",
     "de_a":"a) Ja, vollumfänglich b) Nein, aber der Besitzer hat die erforderlichen Vorkehrungen zu treffen, um zu verhindern, dass diese abhanden kommen oder Dritte sie unbefugt an sich nehmen.",
     "en_q":"Do the retention regulations of the Weapons Act also apply to so-called salute weapons?",
     "en_a":"a) Yes, in full b) No, but the owner must take the necessary precautions to prevent them from getting lost or from being taken by third parties without authorization.",
     "ru_q":"Распространяются ли положения Закона об оружии на так называемое салютное оружие?",
     "ru_a":"a) Да, полностью b) Нет, но владелец должен принять необходимые меры предосторожности, чтобы они не потерялись или не были захвачены третьими лицами без разрешения.",
     "c":"b"
  },
  {
     "id":"5.01",
     "de_q":"Was ist Notwehr? Notwehr ist diejenige, die ist, um einen Angriff von sich oder einem anderen abzuwenden.",
     "de_a":"Lösung: Notwehr ist diejenige Verteidigung, die erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden.",
     "en_q":"What is self-defense? Self-defense is the one that is there to avert an attack from oneself or another.",
     "en_a":"Solution: Self-defense is the defense that is required to avert a current illegal attack on yourself or another person.",
     "ru_q":"Что такое самооборона? Самозащита - это защита от нападения на себя или на другого.",
     "ru_a":"Решение: Самозащита - это защита, необходимая для предотвращения текущего незаконного нападения на вас или другого человека.",
     "c":"x"
  },
  {
     "id":"5.02",
     "de_q":"Was ist Notwehr?",
     "de_a":"Notwehr ist diejenige Verteidigung, die erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden.",
     "en_q":"What is self-defense?",
     "en_a":"Self-defense is the defense that is required to avert a current unlawful attack on yourself or on someone else.",
     "ru_q":"Что такое самооборона?",
     "ru_a":"Самозащита - это защита, необходимая для предотвращения текущего незаконного нападения на себя или на кого-то еще.",
     "c":"x"
  },
  {
     "id":"5.03",
     "de_q":"Notwehr ist...",
     "de_a":"a) jede Abwehr eines gegenwärtigen und rechtswidrigen Angriffs von sich und anderen. b) jede Verteidigung, die erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden. c) jede Verteidigung, die erforderlich ist, um jeden Angriff von sich oder einem anderen abzuwenden.",
     "en_q":"Self-defense is ...",
     "en_a":"a) any defense against a current and unlawful attack on oneself and others. b) Any defense necessary to avert a current unlawful attack on yourself or on another. c) Any defense necessary to avert any attack on oneself or on another.",
     "ru_q":"Самозащита - это ...",
     "ru_a":"a) любая защита от текущего и незаконного нападения на себя и других. b) Любая защита, необходимая для предотвращения текущего незаконного нападения на себя или на другого. c) Любая защита, необходимая для предотвращения любого нападения на себя или на другого.",
     "c":"b"
  },
  {
     "id":"5.04",
     "de_q":"Gegen wen findet im Falle der Notwehr die Verteidigungshandlung statt?",
     "de_a":"a) Angreifer b) Zuschauer c) Angegriffener",
     "en_q":"In the case of self-defense, against whom does the act of defense take place?",
     "en_a":"a) attacker b) spectator c) attacked person",
     "ru_q":"В случае самообороны, против кого происходит акт защиты?",
     "ru_a":"a) нападающий b) зритель c) атакованный",
     "c":"a"
  },
  {
     "id":"5.05",
     "de_q":"In Notwehr darf man handeln bei einem Angriff...",
     "de_a":"a) nur auf Leib und Leben. b) auf jedes Individual-Rechtsgut. c) nur gegen das Eigentum.",
     "en_q":"You can act in self-defense in the event of an attack ...",
     "en_a":"a) only to life and limb. b) to each individual legal asset. c) only against property.",
     "ru_q":"Вы можете действовать в порядке самообороны в случае нападения ...",
     "ru_a":"a) только для жизни и здоровья. b) каждому отдельному правовому активу. c) только против собственности.",
     "c":"b"
  },
  {
     "id":"5.06",
     "de_q":"Welches sind Voraussetzungen der Notwehr?",
     "de_a":"a) Verteidigungslage b) Verteidigungswille c) Erforderlichkeit",
     "en_q":"What are the prerequisites for self-defense?",
     "en_a":"a) Defense situation b) Willingness to defend c) Necessity",
     "ru_q":"Каковы предпосылки для самообороны?",
     "ru_a":"a) Оборона b) Готовность защищаться c) Необходимость",
     "c":"abc"
  },
  {
     "id":"5.07",
     "de_q":"Durch eine Notwehrhandlung entfällt die/der …?",
     "de_a":"a) Rechtswidrigkeit b) Vorsatz c) Schuld",
     "en_q":"Due to an act of self-defense, the ...?",
     "en_a":"a) illegality b) intent c) guilt",
     "ru_q":"Из-за акта самообороны ...?",
     "ru_a":"a) незаконность b) умысел c) вина",
     "c":"a"
  },
  {
     "id":"5.08",
     "de_q":"Notwehr mit einer Schusswaffe ist nicht gerechtfertigt...",
     "de_a":"a) bei Beleidigung. b) bei lebensgefährlichem tätlichem Angriff auf den Ehepartner.",
     "en_q":"Self-defense with a firearm is not justified ...",
     "en_a":"a) in the event of insult. b) in the event of a life-threatening physical attack on the spouse.",
     "ru_q":"Самозащита с огнестрельным оружием не оправдана ...",
     "ru_a":"a) в случае оскорбления. b) в случае опасного для жизни физического нападения на супруга.",
     "c":"a"
  },
  {
     "id":"5.09",
     "de_q":"Schusswaffengebrauch als Notwehr kann als letztes Mittel zulässig sein,",
     "de_a":"a) wenn dem Angriff ausgewichen werden kann. b) wenn der Angriff mit einem Messer erfolgt. c) wenn der Angreifer mit der Faust droht.",
     "en_q":"The use of firearms as a self-defense may be permitted as a last resort,",
     "en_a":"a) if the attack can be evaded. b) if the attack is made with a knife. c) if the attacker threatens with his fist.",
     "ru_q":"Использование огнестрельного оружия в качестве самообороны может быть разрешено в крайнем случае.",
     "ru_a":"a) если от атаки можно уклониться. b) если нападение производится ножом. c) если нападающий угрожает кулаком.",
     "c":"b"
  },
  {
     "id":"5.10",
     "de_q":"Ist ein Schusswaffengebrauch in Notwehr zulässig, wenn der Angegriffene dem Angriff ausweichen kann?",
     "de_a":"a) Nein, niemals b) Ist der Einsatz eines milderen Mittels zur Abwehr des Angriffs möglich, ist der Schusswaffengebrauch nicht zu lässig. c) Grundsätzlich ist dem Angegriffenen ein Ausweichen nicht zumutbar, da dies seine Ehre verletzt.",
     "en_q":"Is it permissible to use firearms in self-defense if the attacked person can evade the attack?",
     "en_a":"a) No, never b) If the use of a milder means to ward off the attack is possible, the use of firearms is not permitted. c) In principle, evasive action is not reasonable for the attacked person, as this offends his or her honor.",
     "ru_q":"Допустимо ли использовать огнестрельное оружие в целях самообороны, если атакованный человек может уклониться от нападения?",
     "ru_a":"a) Нет, никогда b) Если возможно использование более мягких средств для отражения атаки, использование огнестрельного оружия не разрешается. c) В принципе, действия по уклонению от нападения неразумны, так как это оскорбляет его или ее честь.",
     "c":"b"
  },
  {
     "id":"5.11",
     "de_q":"Soll im Notwehrfall vor dem Ge brauch der Schusswaffe gewarnt werden?",
     "de_a":"a) Ja, das ist Voraussetzung für einen rechtmäßigen Schusswaffengebrauch. b) Ja, soweit die Umstände es erlauben. c) Nein, das ist nicht erforderlich.",
     "en_q":"Should there be a warning against using the firearm in the event of self-defense?",
     "en_a":"a) Yes, this is a prerequisite for lawful use of firearms. b) Yes, as far as circumstances permit. c) No, it is not necessary.",
     "ru_q":"Следует ли делать предупреждение о недопустимости использования огнестрельного оружия в случае самообороны?",
     "ru_a":"a) Да, это предварительное условие для законного использования огнестрельного оружия. b) Да, насколько позволяют обстоятельства. c) Нет, в этом нет необходимости.",
     "c":"b"
  },
  {
     "id":"5.12",
     "de_q":"Darf in einer Notwehrsituation immer von der Schusswaffe Gebrauch gemacht werden?",
     "de_a":"a) Nur wenn kein milderes Mittel zur Verfügung steht, um den Angriff abzuwehren. b) Der Schusswaffengebrauch ist stets als allerletzter Ausweg aus einer bedrohlichen Situation zu betrachten. c) Ja, immer",
     "en_q":"Can a firearm always be used in a self-defense situation?",
     "en_a":"a) Only if no milder means is available to repel the attack. b) The use of firearms must always be viewed as the very last resort out of a threatening situation. c) Yes, always",
     "ru_q":"Всегда ли можно использовать огнестрельное оружие в ситуации самообороны?",
     "ru_a":"a) Только если нет более мягких средств для отражения атаки. b) Применение огнестрельного оружия всегда должно рассматриваться как крайнее средство выхода из угрожающей ситуации. c) Да, всегда",
     "c":"ab"
  },
  {
     "id":"5.13",
     "de_q":"Sollte im Notwehrfall der Angreifer vor dem Gebrauch der Schusswaffe gewarnt werden?",
     "de_a":"a) Nein b) Wenn möglich durch Zuruf und/oder Warnschuss. c) Das Zeigen der Waffe reicht aus, um den Angriff zu beenden.",
     "en_q":"Should the attacker be warned before using the firearm in the event of self-defense?",
     "en_a":"a) No b) If possible by shouting and / or warning shot. c) Pointing the weapon is enough to end the attack.",
     "ru_q":"Следует ли предупредить нападавшего перед применением огнестрельного оружия в случае самообороны?",
     "ru_a":"a) Нет b) Если возможно, криком и / или предупредительным выстрелом. c) наведения оружия достаточно, чтобы закончить атаку.",
     "c":"b"
  },
  {
     "id":"5.14",
     "de_q":"Soll im Notwehrfall der Angreifer vor dem Gebrauch der Schusswaffe gewarnt werden?",
     "de_a":"Ja, soweit es die Umstände erlauben. (Es sollte vor dem Schusswaffengebrauch durch Zuruf, Warnschuss oder auf andere Weise gewarnt werden.)",
     "en_q":"Should the attacker be warned before using the firearm in the event of self-defense?",
     "en_a":"Yes, as far as circumstances allow. (It should be warned of the use of firearms by shouting, warning shot or otherwise.)",
     "ru_q":"Следует ли предупредить нападавшего перед применением огнестрельного оружия в случае самообороны?",
     "ru_a":"Да, насколько позволяют обстоятельства. (Следует предупреждать об использовании огнестрельного оружия криком, предупредительным выстрелом или иным образом.)",
     "c":"x"
  },
  {
     "id":"5.15",
     "de_q":"Dürfen Sie in jeder Notwehrsituation von der Schusswaffe Gebrauch machen?",
     "de_a":"a) Ja, immer b) Nein, allenfalls bei einem Angriff auf Leben, Leib oder erhebliche Rechtsgüter des Einzelnen. c) Ja, auch wenn der Angriff durch mildere Mittel abgewehrt werden kann.",
     "en_q":"Are you allowed to use a firearm in any self-defense situation?",
     "en_a":"a) Yes, always b) No, at most in the event of an attack on life, limb or significant legal interests of the individual. c) Yes, even if the attack can be repelled by milder means.",
     "ru_q":"Разрешено ли вам использовать огнестрельное оружие в любой ситуации самообороны?",
     "ru_a":"a) Да, всегда b) Нет, самое большее в случае нападения на жизнь, здоровье или существенные законные интересы человека. c) Да, даже если атаку можно отразить более мягкими средствами.",
     "c":"b"
  },
  {
     "id":"5.16",
     "de_q":"Wie lange besteht eine Notwehrsituation fort?",
     "de_a":"a) Bis der Angreifer weggelaufen ist. b) Solange der Angriff andauert. c) Bis ich den Angreifer der Polizei übergeben habe.",
     "en_q":"How long does a self-defense situation last?",
     "en_a":"a) Until the attacker ran away. b) As long as the attack continues. c) Until I handed the attacker over to the police.",
     "ru_q":"Как долго длится ситуация самообороны?",
     "ru_a":"a) Пока злоумышленник не убежал. b) Пока продолжается атака. c) Пока я не передал нападавшего полиции.",
     "c":"b"
  },
  {
     "id":"5.17",
     "de_q":"Wie lange besteht eine Notwehrsituation fort?",
     "de_a":"a) Bis der Gegner bewusstlos bzw. geflüchtet ist. b) Solange der Angriff andauert. c) Bis ich gefahrlos dem Angriff ausweichen kann, wenn ich dadurch keine wesentlichen Rechtsgüter aufgeben muss. d) Auf jeden Fall bis die Polizei eintrifft.",
     "en_q":"How long does a self-defense situation last?",
     "en_a":"a) Until the opponent is unconscious or has fled. b) As long as the attack continues. c) Until I can safely evade the attack if I do not have to give up any essential legal interests. d) Definitely until the police arrive.",
     "ru_q":"Как долго длится ситуация самообороны?",
     "ru_a":"a) Пока противник не потеряет сознание или не убежит. b) Пока продолжается атака. c) Пока я не смогу безопасно уклониться от нападения, если мне не придется отказываться от каких-либо существенных законных интересов. d) Однозначно до приезда полиции.",
     "c":"bc"
  },
  {
     "id":"5.18",
     "de_q":"Was versteht man unter „Putativnotwehr“?",
     "de_a":"a) Überschreitung der Notwehr. b) Ein gegenwärtiger, rechtswidriger Angriff wird von einem anderen Angegriffenen abgewehrt. c) Irrtümliche Annahme einer Notwehrsituation.",
     "en_q":"What does one understand by 'putative defense'?",
     "en_a":"a) Exceeding self-defense. b) A current, illegal attack is being fended off by another attacked person. c) Erroneous assumption of a self-defense situation.",
     "ru_q":"Что понимают под «мнимой защитой»?",
     "ru_a":"a) Превышение самообороны. b) Текущее незаконное нападение отражается другим атакованным лицом. c) Ошибочное предположение о ситуации самообороны.",
     "c":"c"
  },
  {
     "id":"5.19",
     "de_q":"Worauf müssen Sie bei Notwehr vorrangig achten?",
     "de_a":"a) Die Unversehrtheit meines Eigentums. b) Die Verteidigung mit allen Mitteln. c) Eine angemessene Verteidigung. (Verhältnismäßigkeit)",
     "en_q":"What do you have to look out for in self-defense?",
     "en_a":"a) The integrity of my property. b) Defense by all means. c) An adequate defense. (Proportionality)",
     "ru_q":"На что нужно обратить внимание при самообороне?",
     "ru_a":"a) Целостность моей собственности. b) Оборона всеми средствами. c) Адекватная защита. (Пропорциональность)",
     "c":"c"
  },
  {
     "id":"5.20",
     "de_q":"Was bedeutet Notwehrüberschreitung?",
     "de_a":"Notwehrüberschreitung oder Notwehrexzess liegt vor, wenn der Verteidiger das erforderliche Maß der Abwehr überschreitet.",
     "en_q":"What does excess of self-defense mean?",
     "en_a":"Exceeding self-defense or excess of emergency defense exists when the defense attorney exceeds the required level of defense.",
     "ru_q":"Что означает превышение самообороны?",
     "ru_a":"Превышение самообороны или превышение срочной защиты имеет место, когда защитник превышает требуемый уровень защиты.",
     "c":"x"
  },
  {
     "id":"5.21",
     "de_q":"Erklären Sie den Begriff „Notwehrexzess“ und seine strafrechtliche Bedeutung!",
     "de_a":"Beim Notwehrexzess wird das zulässige Maß der Abwehr überschritten. Das Handeln wird nur dann entschuldigt, wenn in Furcht, Verwirrung oder Schrecken über die Grenzen der Notwehr hinausgegangen worden ist.",
     "en_q":"Explain the term “emergency defense excess” and its criminal meaning!",
     "en_a":"In the case of excess of emergency defense, the permissible level of defense is exceeded. Action is only excused if fear, confusion or horror has gone beyond the limits of self-defense.",
     "ru_q":"Разъясните термин «превышение срочной защиты» и его криминальное значение!",
     "ru_a":"В случае превышения аварийной защиты допустимый уровень защиты превышается. Действия оправдываются только в том случае, если страх, замешательство или ужас вышли за пределы самообороны.",
     "c":"x"
  },
  {
     "id":"5.22",
     "de_q":"Was ist Notstand?",
     "de_a":"Bei einem Notstand besteht eine gegenwärtige Gefahr für ein Rechtsgut, die nur durch Verletzung eines anderen Rechtsgutes abgewendet werden kann, wobei eine Abwägung der widerstreitenden Interessen stattfinden muss, in deren Ergebnis das als minderwertiger erkannte Rechtsgut geopfert wird.",
     "en_q":"What is a state of emergency?",
     "en_a":"In the event of an emergency, there is a current danger to a legal interest that can only be averted by violating another legal interest, whereby the conflicting interests must be weighed up, as a result of which the legal interest recognized as inferior is sacrificed.",
     "ru_q":"Что такое ЧП?",
     "ru_a":"В случае чрезвычайной ситуации существует текущая опасность для правового интереса, которую можно предотвратить только путем нарушения другого правового интереса, при этом необходимо взвесить конфликтующие интересы, в результате чего законный интерес, признанный второстепенным, приносится в жертву.",
     "c":"x"
  },
  {
     "id":"5.23",
     "de_q":"Was bedeutet rechtfertigender Notstand?",
     "de_a":"In rechtfertigendem Notstand handelt, wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib, Freiheit, Ehre, Eigentum oder ein anderes Rechtsgut eine Tat begeht, um die Gefahr von sich oder einem Anderen abzuwenden, wenn bei Abwägung der widerstreitenden Interessen das geschützte Interesse das beeinträchtigte wesentlich überwiegt.",
     "en_q":"What does justifiable emergency mean?",
     "en_a":"In a justifiable state of emergency, anyone who commits an act in a current, unavoidable danger to life, limb, freedom, honor, property or another legal asset, in order to avert the danger from himself or another, if after weighing up the conflicting interests the protected interest outweighs the impaired.",
     "ru_q":"Что означает оправданная чрезвычайная ситуация?",
     "ru_a":"В оправданной чрезвычайной ситуации любой, кто совершает действие в условиях текущей неизбежной опасности для жизни, здоровья, свободы, чести, собственности или другого законного актива, чтобы предотвратить опасность от себя или другого лица, если конфликтующие интересы взвесены. защищенный интерес перевешивает уязвимых.",
     "c":"x"
  },
  {
     "id":"5.24",
     "de_q":"Was bedeutet entschuldigender Notstand?",
     "de_a":"Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib oder Freiheit eine rechtswidrige Tat begeht, um die Ge fahr von sich, einem Angehörigen oder einer anderen ihm nahestehenden Person abzuwenden, handelt ohne Schuld.",
     "en_q":"What does apologetic emergency mean?",
     "en_a":"Anyone who commits an unlawful act in a current, unavoidable danger to life, limb or freedom in order to avert the danger from himself, a relative or another person close to him is acting without guilt.",
     "ru_q":"Что означает извиняющаяся чрезвычайная ситуация?",
     "ru_a":"Любой, кто совершает противоправное действие в условиях существующей неизбежной опасности для жизни, здоровья или свободы, чтобы предотвратить опасность от самого себя, родственника или другого близкого ему человека, действует без вины.",
     "c":"x"
  },
  {
     "id":"5.25",
     "de_q":"Welche Situation beurteilen Sie als Notstandslage?",
     "de_a":"a) Sie finden eine geladene Jagdwaffe im Wald. b) Sie werden durch ein herrenloses Tier angegriffen. c) Sie werden durch eine Person angegriffen.",
     "en_q":"Which situation do you consider to be an emergency?",
     "en_a":"a) You find a loaded hunting rifle in the forest. b) You are attacked by an abandoned animal. c) You are being attacked by a person.",
     "ru_q":"Какую ситуацию вы считаете чрезвычайной?",
     "ru_a":"a) Вы нашли в лесу заряженное охотничье ружье. b) На вас напало брошенное животное. c) на вас напал человек.",
     "c":"b"
  },
  {
     "id":"5.26",
     "de_q":"Nennen Sie vier wesentliche Voraussetzungen für den rechtfertigenden Notstand!",
     "de_a":"1. Gegenwärtige Gefahr liegt vor. 2. Rechtsgüter sind bedroht (Leben, Leib, Freiheit, Ehre, Eigentum). 3. Das zu schützende Rechtsgut ist wesentlich höherwertiger als das beeinträchtigte. 4. Die Abwehrhandlung muss angemessen sein.",
     "en_q":"Name four essential prerequisites for a justifiable state of emergency!",
     "en_a":"1. There is a current danger. 2. Legal interests are threatened (life, limb, freedom, honor, property). 3. The legal interest to be protected is much more valuable than the impaired one. 4. The defensive act must be appropriate.",
     "ru_q":"Назовите четыре основных предпосылки для обоснованного чрезвычайного положения!",
     "ru_a":"1. Есть текущая опасность. 2. Угроза законным интересам (жизни, здоровью, свободе, чести, собственности). 3. Правовой интерес, который нужно защищать, намного ценнее, чем ущемленный. 4. Защитный акт должен быть уместным.",
     "c":"x"
  },
  {
     "id":"5.27",
     "de_q":"Welches sind die Voraussetzungen des rechtfertigenden Notstandes?",
     "de_a":"a) gegenwärtige, nicht mit geringerem Eingriff abwehrbare Gefahr für ein Rechtsgut; wesentliches Überwiegen des geschützten Interesses b) Absicht, die Gefahr nicht von sich oder einem anderen abzuwenden c) gegenwärtiger rechtswidriger Angriff",
     "en_q":"What are the prerequisites for a justifying state of emergency?",
     "en_a":"a) current risk to a legal asset that cannot be averted with less interference; Substantial predominance of the protected interest b) Intention not to avert the danger from oneself or from another c) Current unlawful attack",
     "ru_q":"Каковы предпосылки для оправдания чрезвычайного положения?",
     "ru_a":"a) текущий риск для правового актива, который нельзя предотвратить с меньшим вмешательством; Существенное преобладание защищаемого интереса b) Намерение не предотвращать опасность от себя или от другого c) Текущее незаконное нападение",
     "c":"a"
  },
  {
     "id":"5.28",
     "de_q":"Was versteht man unter Nothilfe?",
     "de_a":"Die Abwehr eines Angriffes gegen einen Anderen; sie ist ein Unterfall der Notwehr; die Voraussetzungen sind gleich.",
     "en_q":"What is emergency aid?",
     "en_a":"The defense against an attack against another; it is a subset of self-defense; the prerequisites are the same.",
     "ru_q":"Что такое экстренная помощь?",
     "ru_a":"Защита от нападения на другого; это разновидность самообороны; предпосылки те же.",
     "c":"x"
  },
  {
     "id":"5.29",
     "de_q":"Nothilfe ist diejenige Verteidigung, die erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff...",
     "de_a":"a) von sich selbst abzuwenden. b) von einem anderen abzuwenden. c) vom eigenen Auto abzuwenden.",
     "en_q":"Emergency aid is the defense that is required to prevent a current unlawful attack ...",
     "en_a":"a) turn away from yourself. b) to turn away from another. c) turn away from your own car.",
     "ru_q":"Неотложная помощь - это защита, необходимая для предотвращения текущего незаконного нападения ...",
     "ru_a":"a) отвернись от себя. b) отвернуться от другого. c) отвернуться от собственной машины.",
     "c":"b"
  },
  {
     "id":"5.30",
     "de_q":"Was ist ein gegenwärtiger Angriff?",
     "de_a":"Jede unmittelbar bevorstehende, gerade stattfindende oder fortdauernde Verletzung eines Rechtsgutes.",
     "en_q":"What is a current attack?",
     "en_a":"Any imminent, ongoing or ongoing violation of a legal asset.",
     "ru_q":"Что такое текущая атака?",
     "ru_a":"Любое неизбежное, продолжающееся или продолжающееся нарушение правового актива.",
     "c":"x"
  },
  {
     "id":"5.31",
     "de_q":"Welche Verteidigungshandlung ist erforderlich, um einen Angriff abzuwenden?",
     "de_a":"Die Erforderlichkeit bestimmt sich nach Stärke und Gefährlichkeit des Angriffs; grundsätzlich ist das mildeste Mittel zur Abwehr zu wählen, das erfolgversprechend ist.",
     "en_q":"What defense action is required to avert an attack?",
     "en_a":"The necessity is determined by the strength and danger of the attack; In principle, the mildest means of defense that is promising should be chosen.",
     "ru_q":"Какие действия защиты необходимы, чтобы предотвратить нападение?",
     "ru_a":"Необходимость определяется силой и опасностью нападения; В принципе, следует выбирать самые мягкие и перспективные средства защиты.",
     "c":"x"
  },
  {
     "id":"5.32",
     "de_q":"Wann ist ein Angriff gegenwärtig?",
     "de_a":"a) Wenn er abgeschlossen ist. b) Wenn er unmittelbar bevorsteht. c) Solange er andauert.",
     "en_q":"When is an attack present?",
     "en_a":"a) When it is completed. b) When it is imminent. c) As long as it lasts.",
     "ru_q":"Когда присутствует приступ?",
     "ru_a":"a) Когда он будет завершен. b) Когда это неизбежно. c) Пока длится.",
     "c":"bc"
  },
  {
     "id":"5.33",
     "de_q":"Wann ist ein Angriff gegenwärtig?",
     "de_a":"a) Wenn zu befürchten ist, dass durch eine Drohung des Angreifers zukünftig eine Gefahr für Leib und Leben eintreten könnte. b) Wenn ein Angriff unmittelbar bevorsteht oder noch nicht beendet ist. c) Wenn der Angreifer in die Flucht geschlagen ist, aber mit einem späteren Angriff droht.",
     "en_q":"When is an attack present?",
     "en_a":"a) If it is to be feared that a threat from the attacker could endanger life and limb in the future. b) When an attack is imminent or has not yet ended. c) If the attacker has been put to flight but threatens a later attack.",
     "ru_q":"Когда присутствует приступ?",
     "ru_a":"a) Если есть опасения, что угроза со стороны нападающего может поставить под угрозу жизнь и здоровье в будущем. b) Когда нападение неминуемо или еще не закончилось. c) Если нападающий обратился в бегство, но угрожает более поздней атакой.",
     "c":"b"
  },
  {
     "id":"5.34",
     "de_q":"Wann ist die Gefahr gegenwärtig?",
     "de_a":"a) Es kann jeden Augenblick ein Schaden eintreten. b) Es wird vielleicht ein Schaden eintreten. c) Es ist ein Schaden eingetreten.",
     "en_q":"When is the danger present?",
     "en_a":"a) Damage can occur at any moment. b) Damage may occur. c) Damage has occurred.",
     "ru_q":"Когда присутствует опасность?",
     "ru_a":"a) Повреждение может произойти в любой момент. b) Может произойти повреждение. c) Произошло повреждение.",
     "c":"a"
  },
  {
     "id":"5.35",
     "de_q":"Was bedeutet „rechtswidrig“?",
     "de_a":"Ein Angriff ist rechtswidrig, wenn er gegen eine Rechtsnorm verstößt und ein Rechtfertigungsgrund nicht gegeben ist.",
     "en_q":"What does 'illegal' mean?",
     "en_a":"An attack is illegal if it violates a legal norm and there is no justification for it.",
     "ru_q":"Что значит «незаконный»?",
     "ru_a":"Атака считается незаконной, если она нарушает правовую норму и ей нет оправдания.",
     "c":"x"
  },
  {
     "id":"5.36",
     "de_q":"Was ist Ihre Pflicht nach einem abgewehrten Angriff?",
     "de_a":"a) Ich habe keinerlei Pflichten gegenüber dem Angreifer. b) Ich bin zum Schadensersatz verpflichtet. c) Wenn die Notwendigkeit erkennbar und die Situation zumutbar ist, habe ich Hilfe zu leisten.",
     "en_q":"What is your duty after a repelled attack?",
     "en_a":"a) I have no obligations towards the attacker. b) I am obliged to pay damages. c) If the need is recognizable and the situation is reasonable, I have to provide help.",
     "ru_q":"Каков ваш долг после отраженной атаки?",
     "ru_a":"a) У меня нет обязательств перед злоумышленником. b) Я обязан возместить ущерб. c) Если потребность очевидна и ситуация разумна, я должен оказать помощь.",
     "c":"c"
  },
  {
     "id":"5.37",
     "de_q":"Regelungen über Notwehr und Notstand finden Sie im...",
     "de_a":"a) Grundgesetz b) Waffengesetz c) Strafgesetzbuch / BGB",
     "en_q":"Regulations on self-defense and emergency can be found in ...",
     "en_a":"a) Basic Law b) Weapons Act c) Criminal Code / BGB",
     "ru_q":"Положение о самообороне и чрезвычайных ситуациях можно найти в ...",
     "ru_a":"a) Основной закон b) Закон об оружии c) Уголовный кодекс / BGB",
     "c":"c"
  },
  {
     "id":"5.38",
     "de_q":"Was sind u.a. Rechtfertigungsgründe nach dem Strafgesetzbuch?",
     "de_a":"a) Notwehr b) Nothilfe c) Notstand",
     "en_q":"What are some of the reasons for justification under the Criminal Code?",
     "en_a":"a) Self-defense b) Emergency aid c) State of emergency",
     "ru_q":"Каковы некоторые из причин оправдания в соответствии с Уголовным кодексом?",
     "ru_a":"a) Самозащита b) Скорая помощь c) Чрезвычайное положение",
     "c":"abc"
  },
  {
     "id":"5.39",
     "de_q":"Welches ist das höchste Rechtsgut?",
     "de_a":"a) Freiheit b) Eigentum c) Leib / Leben",
     "en_q":"Which is the highest legal good?",
     "en_a":"a) freedom b) property c) life / limb",
     "ru_q":"Что является высшим юридическим товаром?",
     "ru_a":"a) свобода b) собственность c) жизнь / здоровье",
     "c":"c"
  },
  {
     "id":"5.40",
     "de_q":"Bei der Abwehr eines nicht auf Kommando angreifenden Hundes handeln Sie...",
     "de_a":"a) in Notwehr. b) in Nothilfe. c) in Notstand.",
     "en_q":"When fending off a dog that does not attack on command, you act ...",
     "en_a":"a) in self-defense. b) in emergency aid. c) in an emergency.",
     "ru_q":"Отражая собаку, которая не нападает по команде, вы действуете ...",
     "ru_a":"a) в целях самообороны. b) в экстренной помощи. c) в экстренных случаях.",
     "c":"c"
  },
  {
     "id":"5.41",
     "de_q":"Dürfen Sie auch bei der Gefahr des Verlustes geringwertiger Gegenstände von der Schusswaffe Gebrauch machen?",
     "de_a":"Nein (Bei der Gefahr des Verlustes geringwertiger Gegenstände ist Schusswaffengebrauch keine durch Notwehr gebotene Verteidigungshandlung.)",
     "en_q":"Are you allowed to use a firearm even if there is a risk of losing objects of low value?",
     "en_a":"No.",
     "ru_q":"Можно ли использовать огнестрельное оружие, даже если есть риск потерять малоценные предметы?",
     "ru_a":"Нет.",
     "c":"x"
  },
  {
     "id":"5.42",
     "de_q":"Sie beobachten wie jemand mit einer Schusswaffe bedroht wird. Sie greifen mit Ihrer Schusswaffe ein. Dabei wird der Angreifer verletzt. Es stellt sich hinterher heraus, dass kein rechtswidriger Angriff vorlag, weil es sich um Filmaufnahmen handelte. Sie handelten in…",
     "de_a":"a) Putativnotwehr (scheinbare Notwehr). b) Notstand. c) Notwehrexzess.",
     "en_q":"You watch someone being threatened with a firearm. You intervene with your firearm. The attacker is injured in the process. It turns out afterwards that there was no illegal attack because it was a film. You acted in ...",
     "en_a":"a) Putative self-defense (apparent self-defense). b) State of emergency. c) Emergency excess.",
     "ru_q":"Вы смотрите, как кому-то угрожают огнестрельным оружием. Вы вмешиваетесь со своим огнестрельным оружием. Злоумышленник получает травму. Потом выясняется, что никакого незаконного нападения не было, потому что это был фильм. Вы действовали в ...",
     "ru_a":"a) Предполагаемая самооборона (очевидная самооборона). b) ЧП. c) Аварийное превышение.",
     "c":"a"
  },
  {
     "id":"5.43",
     "de_q":"Eine Person bricht Ihren PKW auf. Sie sehen das vom Fenster Ihres Hauses aus und schießen. Die Person wird dabei verletzt. Wie ist die Situation zu beurteilen?",
     "de_a":"a) Der Einsatz der Schusswaffe war durch Notwehr gerechtfertigt. b) Die Notwehr wurde überschritten (Notwehrexzess). c) Der Einsatz der Schusswaffe war durch Nothilfe gerechtfertigt.",
     "en_q":"A person breaks into your car. You see this from the window of your house and shoot. The person is injured in the process. How is the situation to be assessed?",
     "en_a":"a) The use of the firearm was justified by self-defense. b) Self-defense has been exceeded (emergency excess). c) The use of the firearm was justified by emergency aid.",
     "ru_q":"В вашу машину врывается человек. Вы видите это из окна своего дома и стреляете. Человек получает травму. Как оценивать ситуацию?",
     "ru_a":"a) Использование огнестрельного оружия было оправдано самообороной. b) Самозащита превышена (аварийное превышение). c) Использование огнестрельного оружия было оправдано неотложной помощью.",
     "c":"b"
  },
  {
     "id":"II.1",
     "de_q":"Was ist eine Kurzwaffe?",
     "de_a":"Eine Kurzwaffe ist eine Schusswaffe, deren Lauf und Verschluss in geschlossener Stellung insgesamt kürzer als 30 cm sind und deren kürzeste bestimmungsgemäße verwendbare die Gesamtlänge von 60 cm nicht überschreitet.",
     "en_q":"What is a handgun?",
     "en_a":"A handgun is a firearm whose barrel and slide are shorter than 30 cm in total in the closed position and whose shortest intended use does not exceed the total length of 60 cm.",
     "ru_q":"Что такое пистолет?",
     "ru_a":"Пистолет - это огнестрельное оружие, общая длина ствола и затвора которого в закрытом положении составляет менее 30 см, а его кратчайшее предполагаемое использование не превышает общей длины 60 см.",
     "c":"x"
  },
  {
     "id":"II.2",
     "de_q":"Was versteht man unter halbautomatischen Schusswaffen?",
     "de_a":"Dies sind Schusswaffen, die nach Abgabe eines Schusses selbsttätig erneut schussbereit sind und bei denen aus demselben Lauf durch erneute Betätigung des Abzuges jeweils ein weiterer Schuss abgegeben werden kann (aus genommen Double-Action-Revolver).",
     "en_q":"What is meant by semi-automatic firearms?",
     "en_a":"These are firearms that are automatically ready to fire again after a shot has been fired and for which a further shot can be fired from the same barrel by actuating the trigger again (with the exception of double-action revolvers).",
     "ru_q":"Что подразумевается под полуавтоматическим огнестрельным оружием?",
     "ru_a":"Это огнестрельное оружие, которое автоматически готово к повторному выстрелу после выстрела и для которого можно произвести следующий выстрел из того же ствола, снова нажав на спусковой крючок (за исключением револьверов двойного действия).",
     "c":"x"
  },
  {
     "id":"II.3",
     "de_q":"Was sind die typischen Merkmale einer halbautomatischen Büchse?",
     "de_a":"a) Durch einmaliges Betätigen des Abzuges kann ich mehrere Schüsse hintereinander abgeben. b) Nach Abgabe eines Schusses wird die Büchse selbsttätig erneut schussbereit und es kann aus demselben Lauf durch erneute Betätigung des Abzuges jeweils ein weiterer Schuss abgegeben werden. c) Hierbei handelt es sich um eine Militärwaffe.",
     "en_q":"What are the typical features of a semi-automatic rifle?",
     "en_a":"a) By pressing the trigger once, I can fire several shots in a row. b) After a shot has been fired, the rifle is automatically ready to fire again and another shot can be fired from the same barrel by actuating the trigger again. c) This is a military weapon.",
     "ru_q":"Каковы типичные особенности полуавтоматической винтовки?",
     "ru_a":"a) Нажав на спусковой крючок один раз, я могу сделать несколько выстрелов подряд. b) После того, как произведен выстрел, винтовка автоматически готовится к новому выстрелу, и можно произвести еще один выстрел из того же ствола, снова нажав на спусковой крючок. c) Это военное оружие.",
     "c":"b"
  },
  {
     "id":"II.4",
     "de_q":"Was ist der Unterschied zwischen Pistole und Revolver?",
     "de_a":"a) Die Pistole hat ein Patronenlager im Lauf, der Revolver hat mehrere Patronenlager in der Trommel, getrennt vom Lauf. b) Der Revolver hat einen Hahn, eine Pistole nicht. c) Pistolen sind leichter gebaut als Revolver.",
     "en_q":"What is the difference between a pistol and a revolver?",
     "en_a":"a) The pistol has a cartridge chamber in the barrel, the revolver has several cartridge chambers in the barrel, separated from the barrel. b) The revolver has a hammer, but not a pistol. c) Pistols are lighter in weight than revolvers.",
     "ru_q":"В чем разница между пистолетом и револьвером?",
     "ru_a":"a) Пистолет имеет патронник в стволе, револьвер имеет несколько патронников в стволе, отделенных от ствола. b) У револьвера есть курок, но нет пистолета. c) Пистолеты легче револьверов.",
     "c":"a"
  },
  {
     "id":"II.5",
     "de_q":"Welches sind die wesentlichen Teile eines Revolvers im waffenrechtlichen Sinne?",
     "de_a":"1. Lauf 2. Griffstück (Rahmen) 3. Trommel",
     "en_q":"What are the essential parts of a revolver in terms of weapons law?",
     "en_a":"1. Barrel 2. Handle (frame) 3. Drum",
     "ru_q":"Каковы основные части револьвера с точки зрения закона об оружии?",
     "ru_a":"1. Ствол 2. Ручка (рамка) 3. Барабан",
     "c":"x"
  },
  {
     "id":"II.6",
     "de_q":"Was ist das typische Merkmal eines Revolvers?",
     "de_a":"a) Ein Magazin im Griffstück. b) Die Trommel ist zugleich Patronenlager und Magazin. c) Ein außenliegendes Schlagstück.",
     "en_q":"What is the typical feature of a revolver?",
     "en_a":"a) A magazine in the handle. b) The drum is both a cartridge bearing and a magazine. c) An external hammer.",
     "ru_q":"Что характерно для револьвера?",
     "ru_a":"a) Магазин в ручке. b) Барабан одновременно является патронным подшипником и магазином. c) Внешний молоток.",
     "c":"b"
  },
  {
     "id":"II.7",
     "de_q":"Was ist ein typisches Merkmal einer halbautomatischen Pistole?",
     "de_a":"a) Trommel zur Aufnahme von Patronen b) Magazin zur Aufnahme von Patronen c) Lauf vom Patronenlager getrennt",
     "en_q":"What is a typical feature of a semi-automatic pistol?",
     "en_a":"a) drum for holding cartridges b) magazine for holding cartridges c) barrel separated from the chamber",
     "ru_q":"Что характерно для полуавтоматического пистолета?",
     "ru_a":"a) барабан для хранения патронов b) магазин для хранения патронов c) ствол, отделенный от патронника",
     "c":"b"
  },
  {
     "id":"II.8",
     "de_q":"Welcher Unterschied besteht zwischen Büchse und Flinte?",
     "de_a":"a) Büchse für Kugelschuss, Flinte für Schrotschuss / Flintenlaufgeschosse. b) Büchsen haben Kammerstängel und Zylinderverschluss, Flinten haben immer einen Kipplauf. c) Keine Unterschiede.",
     "en_q":"What is the difference between a rifle and a shotgun?",
     "en_a":"a) Rifle for bullet, shotgun for shotgun / shotgun barrel projectiles. b) Rifles have a bolt handle and cylinder lock, shotguns always have a drop barrel. c) No differences.",
     "ru_q":"В чем разница между винтовкой и дробовиком?",
     "ru_a":"a) Винтовка для пули, дробовик для снарядов для дробовика / дробовика. b) Винтовки имеют затворную рукоять и цилиндровый замок, ружья всегда имеют откидной ствол. c) Никаких отличий.",
     "c":"a"
  },
  {
     "id":"II.9",
     "de_q":"Besonderes Merkmal einer Flinte ist, dass ...",
     "de_a":"a) mit ihr Flintenmunition verschossen wird. b) sie einen gezogenen Lauf besitzt. c) Sie einen Kipplauf besitzt.",
     "en_q":"A special feature of a shotgun is that ...",
     "en_a":"a) shotgun ammunition is fired with it. b) it has a rifled barrel. c) She has a break barrel.",
     "ru_q":"Особенность дробовика в том, что ...",
     "ru_a":"a) из него стреляют боеприпасы для дробовика. b) имеет нарезной ствол. c) У нее сломанный ствол.",
     "c":"a"
  },
  {
     "id":"II.10",
     "de_q":"Was ist bei der Flinte der „Choke“?",
     "de_a":"a) Laufverengung im Bereich des Patronenlagers b) Laufverengung im Bereich der Mündung c) Rückstoß beim Schuss",
     "en_q":"What is the “choke” on the shotgun?",
     "en_a":"a) Barrel narrowing in the area of ​​the cartridge chamber b) Barrel narrowing in the area of ​​the muzzle c) Recoil when firing",
     "ru_q":"Что такое «удушение» у дробовика?",
     "ru_a":"a) Сужение ствола в районе патронника b) Сужение ствола в районе дульного среза c) отдача при стрельбе",
     "c":"b"
  },
  {
     "id":"II.11",
     "de_q":"Welche der nachfolgenden Aussagen ist richtig?",
     "de_a":"a) Mit halbautomatischen Waffen kann man mehrere Schüsse aus demselben Lauf abgeben, ohne dass man Patronen per Hand nachladen muss. b) Mit halbautomatischen Waffen kann man durch einmaliges Betätigen des Abzugs mehrere Schüsse aus demselben Lauf abgeben. c) Mit halbautomatischen Waffen kann man einen Schuss abgeben, dann muss stets eine neue Patrone aus dem Magazin per Hand durchgeladen werden.",
     "en_q":"Which of the following statements is correct?",
     "en_a":"a) With semi-automatic weapons you can fire several shots from the same barrel without having to reload cartridges by hand. b) With semi-automatic weapons, you can fire several shots from the same barrel by pulling the trigger once. c) With semi-automatic weapons you can fire a shot, then a new cartridge must always be reloaded from the magazine by hand.",
     "ru_q":"Какое из следующих утверждений верно?",
     "ru_a":"a) С полуавтоматическим оружием вы можете сделать несколько выстрелов из одного ствола без необходимости перезаряжать патроны вручную. b) С полуавтоматическим оружием вы можете произвести несколько выстрелов из одного ствола, нажав один раз на спусковой крючок. c) Из полуавтоматического оружия можно произвести выстрел, тогда новый патрон всегда нужно перезаряжать из магазина вручную.",
     "c":"a"
  },
  {
     "id":"II.12",
     "de_q":"Was versteht man unter dem Begriff „halbautomatische Waffe“?",
     "de_a":"a) Eine Waffe, die nach Abgabe eines Schusses selbsttätig erneut schussbereit wird und bei der durch nochmalige Betätigung des Abzuges ein weiterer Schuss aus demselben Lauf abgegeben werden kann. b) Eine Waffe, die nach Abgabe eines Schusses durch manuelles Vor- und Zurückziehen des Verschlusshebels die leere Patronenhülse auswirft und eine neue Patrone aus dem Magazin zuführt. c) Eine Waffe, bei der nach Abgabe eines Schusses die leere Patronenhülse automatisch ausgeworfen wird, eine neue Patrone aber manuell per Hand geladen werden muss.",
     "en_q":"What is meant by the term “semi-automatic weapon”?",
     "en_a":"a) A weapon which is automatically ready to fire again after a shot has been fired and which allows another shot to be fired from the same barrel by pressing the trigger again. b) A weapon which, after a shot has been fired, ejects the empty cartridge case by manually pulling the locking lever back and forth and feeds a new cartridge from the magazine. c) A weapon in which the empty cartridge case is automatically ejected after a shot has been fired, but a new cartridge must be loaded manually by hand.",
     "ru_q":"Что подразумевается под термином «полуавтоматическое оружие»?",
     "ru_a":"a) Оружие, которое автоматически становится готовым к повторному выстрелу после того, как был произведен выстрел, и которое позволяет произвести еще один выстрел из того же ствола путем повторного нажатия на спусковой крючок. b) Оружие, которое после выстрела выбрасывает пустую гильзу, вручную перемещая фиксирующий рычаг вперед и назад, и подает новый патрон из магазина. c) Оружие, в котором пустая гильза автоматически выбрасывается после выстрела, но новый патрон необходимо заряжать вручную вручную.",
     "c":"a"
  },
  {
     "id":"II.13",
     "de_q":"Was sind „wesentliche Teile“ von Schusswaffen?",
     "de_a":"a) Das Griffstück, oder sonstige Waffenteile von Kurzwaffen, soweit sie für die Aufnahme des Auslösemechanismus bestimmt sind. b) Das Gehäuse c) Der Verschluss d) Das Patronen- oder Kartuschenlager (wenn dieses nicht bereits Bestandteil des Laufes ist)",
     "en_q":"What are “essential parts” of firearms?",
     "en_a":"a) The handle or other weapon parts of handguns, insofar as they are intended to accommodate the trigger mechanism. b) The housing c) The breech d) The cartridge or cartridge chamber (if this is not already part of the barrel)",
     "ru_q":"Что является «неотъемлемой частью» огнестрельного оружия?",
     "ru_a":"a) Рукоять или другие части оружия пистолетов, если они предназначены для размещения спускового механизма. b) Корпус c) Казенник d) Патрон или патронник (если он еще не является частью ствола)",
     "c":"abcd"
  },
  {
     "id":"II.14",
     "de_q":"Aus welchen wesentlichen Teilen besteht eine Schusswaffe?",
     "de_a":"a) Lauf, Patronenlager, Verschluss, Gehäuse, Griffstück bei Kurzwaffen b) Patrone, Visierung, Abzug c) Magazin, Schaft, Schlagbolzen",
     "en_q":"What are the main parts of a firearm?",
     "en_a":"a) Barrel, cartridge chamber, bolt, housing, grip on handguns b) Cartridge, sights, trigger c) Magazine, stock, firing pin",
     "ru_q":"Какие основные части огнестрельного оружия?",
     "ru_a":"a) Ствол, патронник, затвор, кожух, рукоятка на пистолетах b) Патрон, прицельные приспособления, спусковой крючок c) Магазин, ложа, ударник",
     "c":"a"
  },
  {
     "id":"II.15",
     "de_q":"Was ist ein „wesentlicher Teil“ einer Schusswaffe?",
     "de_a":"a) Verschluss b) Abzug c) Magazin",
     "en_q":"What is an 'essential part' of a firearm?",
     "en_a":"a) bolt b) trigger c) magazine",
     "ru_q":"Что является «неотъемлемой частью» огнестрельного оружия?",
     "ru_a":"a) болт b) спусковой крючок c) магазин",
     "c":"a"
  },
  {
     "id":"II.16",
     "de_q":"Welche der nachfolgenden Aussagen ist richtig?",
     "de_a":"a) Repetierwaffen haben immer ein Magazin. b) Revolver haben immer eine Trommel. c) Pistolen haben immer ein Magazin.",
     "en_q":"Which of the following statements is correct?",
     "en_a":"a) Repeating rifles always have a magazine. b) Revolvers always have a drum. c) Pistols always have a magazine.",
     "ru_q":"Какое из следующих утверждений верно?",
     "ru_a":"a) У магазинных винтовок всегда есть магазин. b) У револьверов всегда есть барабан. c) У пистолетов всегда есть магазин.",
     "c":"ab"
  },
  {
     "id":"II.17",
     "de_q":"Was versteht man bei Sportwaffen unter dem Begriff „Kleinkaliberwaffe“?",
     "de_a":"a) Eine Waffe in einem Kaliber unter 40 mm. b) Eine Waffe im Kaliber .22lr (.22 lfB). c) Eine Waffe mit einer Mündungsenergie unter 7,5 Joule.",
     "en_q":"What is meant by the term “small caliber weapon” for sporting weapons?",
     "en_a":"a) A weapon with a caliber less than 40 mm. b) A weapon in .22lr (.22 lfB) caliber. c) A weapon with a muzzle energy below 7.5 joules.",
     "ru_q":"Что подразумевается под термином «малокалиберное оружие» для спортивного оружия?",
     "ru_a":"a) Оружие калибром менее 40 мм. b) Оружие калибра .22lr (.22 lfB). c) Оружие с дульной энергией ниже 7,5 Дж.",
     "c":"b"
  },
  {
     "id":"II.18",
     "de_q":"Was ist ein Drilling?",
     "de_a":"a) Eine Repetierwaffe b) Eine halbautomatische Waffe c) Eine Einzellader-Schusswaffe",
     "en_q":"What is triplet?",
     "en_a":"a) A repeating weapon b) A semi-automatic weapon c) A single-shot firearm",
     "ru_q":"Что такое тройня?",
     "ru_a":"a) Магазинное оружие b) Полуавтоматическое оружие c) Однозарядное огнестрельное оружие",
     "c":"c"
  },
  {
     "id":"II.19",
     "de_q":"Was sind Einzellader?",
     "de_a":"Schusswaffen ohne Magazine mit einem oder mehreren Läufen, die vor jedem Schuss aus demselben Lauf von Hand geladen werden.",
     "en_q":"What are single loaders?",
     "en_a":"Firearms without magazines with one or more barrels that are manually loaded before each shot from the same barrel.",
     "ru_q":"Что такое одиночные погрузчики?",
     "ru_a":"Огнестрельное оружие без магазинов с одним или несколькими стволами, заряжаемыми вручную перед каждым выстрелом из того же ствола.",
     "c":"x"
  },
  {
     "id":"II.20",
     "de_q":"Eine Kleinkaliberpatrone besteht aus...",
     "de_a":"Hülse, Geschoss, Zündsatz, Treibladung.",
     "en_q":"A small caliber cartridge consists of ...",
     "en_a":"Case, projectile, primer, propellant charge.",
     "ru_q":"Патрон малого калибра состоит из ...",
     "ru_a":"Гильза, снаряд, капсюль, метательный заряд.",
     "c":"x"
  },
  {
     "id":"II.21",
     "de_q":"Aus welchen Teilen besteht eine Zentralfeuerpatrone?",
     "de_a":"a) Zündhütchen, Treibladung, Hülse, Geschoss b) Pressling und Geschoss c) Hülse, Treibladung, Zündsatz",
     "en_q":"What parts does a center fire cartridge consist of?",
     "en_a":"a) primer, propellant charge, case, projectile b) pellet and projectile c) case, propellant charge, primer",
     "ru_q":"Из каких частей состоит патрон центрального огня?",
     "ru_a":"a) капсюль, метательный заряд, гильза, снаряд b) пуля и снаряд c) гильза, метательный заряд, капсюль",
     "c":"a"
  },
  {
     "id":"II.22",
     "de_q":"Was versteht man unter Randfeuerpatronen?",
     "de_a":"a) Alle Patronen mit Rand. b) Alle Patronen mit Zündsatz im Hülsenrand. c) Alle Patronen mit speziellen Ge schossen (z.B. Scharfrandgeschosse).",
     "en_q":"What is rimfire cartridges?",
     "en_a":"a) All cartridges with a rim. b) All cartridges with primer in the case edge. c) All cartridges with special bullets (e.g. sharp-edge bullets).",
     "ru_q":"Что такое патроны кольцевого воспламенения?",
     "ru_a":"a) Все патроны с ободом. b) Все патроны с капсюлем в ободе гильзы. c) Все патроны со специальными пулями (например, пули с острой кромкой).",
     "c":"b"
  },
  {
     "id":"II.23",
     "de_q":"Welche Zündarten gibt es?",
     "de_a":"a) Zentralfeuerzündung b) Randfeuerzündung c) Vorratszündung",
     "en_q":"What types of ignition are there?",
     "en_a":"a) Centerfire ignition b) Rimfire ignition c) Reservoir ignition",
     "ru_q":"Какие бывают виды зажигания?",
     "ru_a":"a) Зажигание от центрального пламени b) Зажигание от ближнего пламени c) Зажигание от резервуара",
     "c":"ab"
  },
  {
     "id":"II.24",
     "de_q":"Was bedeutet „R“ bei der Patronenbezeichnung „7 x 57R“?",
     "de_a":"a) „R“ steht für „RASANT“. b) „R“ steht für Rand. c) „R“ steht für „Randfeuerzündung“.",
     "en_q":"What does 'R' mean in the cartridge designation '7 x 57R'?",
     "en_a":"a) 'R' stands for 'RASANT'. b) 'R' stands for edge. c) 'R' stands for 'rimfire ignition'.",
     "ru_q":"Что означает 'R' в обозначении картриджа '7 x 57R'?",
     "ru_a":"a) «R» означает «РАСАНТ». b) «R» обозначает край. c) «R» означает «зажигание от кольцевого воспламенения».",
     "c":"b"
  },
  {
     "id":"II.25",
     "de_q":"Welche sichtbaren Merkmale kenn zeichnen eine Randfeuerpatrone?",
     "de_a":"a) Patrone ohne Zündhütchen b) Zündhütchen am Patronenboden c) Hülse aus Nickel",
     "en_q":"What are the visible features of a rimfire cartridge?",
     "en_a":"a) Cartridge without primer cap b) Primer cap on the bottom of the cartridge c) Sleeve made of nickel",
     "ru_q":"Каковы видимые особенности патрона кольцевого воспламенения?",
     "ru_a":"a) Картридж без капсюля b) Капсюль на дне картриджа c) Никелевый гильза",
     "c":"a"
  },
  {
     "id":"II.26",
     "de_q":"Was ist eine Pufferpatrone?",
     "de_a":"a) Eine Platzpatrone. b) Eine Patrone mit besonders geringer Treibladung. c) Eine Patrone ohne Zündhütchen und ohne Ladung zum Üben.",
     "en_q":"What is a buffer cartridge?",
     "en_a":"a) A blank cartridge. b) A cartridge with a particularly low propellant charge. c) A cartridge with no primer and no charge for practice.",
     "ru_q":"Что такое буферный картридж?",
     "ru_a":"a) Холостой патрон. b) Патрон с особо малым метательным зарядом. c) Патрон без праймера и бесплатный для практики.",
     "c":"c"
  },
  {
     "id":"II.27",
     "de_q":"Was bedeutet die Bezeichnung „Magnum“?",
     "de_a":"a) Es handelt sich um eine ausländische Patrone. b) Eine in ihrer Kaliberklasse besonders starke Patrone. c) Eine Patrone mit übergroßem Durchmesser.",
     "en_q":"What does the term 'Magnum' mean?",
     "en_a":"a) It is a foreign cartridge. b) A cartridge that is particularly strong in its caliber class. c) An oversized cartridge.",
     "ru_q":"Что означает термин «Магнум»?",
     "ru_a":"a) Это чужой картридж. b) Патрон, который особенно силен в своем классе калибра. c) Картридж увеличенного размера.",
     "c":"b"
  },
  {
     "id":"II.28",
     "de_q":"Welche Bedeutung haben folgende hervorgehobene Angaben in Patronenbezeichnungen: a) 7.63 Mauser b) .30-06 Springfield c) 7 x 57 R?",
     "de_a":"a) Angabe über den Hersteller / Entwickler. b) Angabe über das Einführungsjahr, (1906 militärisch eingeführt). c) Bei den Büchsenpatronen bedeutet der Zusatz „R“, dass die Hülse der Patrone einen Rand hat.",
     "en_q":"What is the meaning of the following highlighted information in cartridge names: a) 7.63 Mauser b) .30-06 Springfield c) 7 x 57 R?",
     "en_a":"a) Information about the manufacturer / developer. b) Information about the year of introduction (introduced by military force in 1906). c) In the case of rifle cartridges, the suffix “R” means that the case of the cartridge has a rim.",
     "ru_q":"Что означает следующая выделенная информация в названиях патронов: a) 7,63 Mauser b) .30-06 Springfield c) 7 x 57 R?",
     "ru_a":"a) Информация о производителе / ​​разработчике. b) Сведения о году введения (введен военной силой в 1906 г.). c) В случае винтовочных патронов суффикс «R» означает, что гильза патрона имеет ободок.",
     "c":"x"
  },
  {
     "id":"II.29",
     "de_q":"Was bedeutet die Zahl 12 bei Schrotpatronen?",
     "de_a":"a) Der Durchmesser des Laufs beträgt 12 mm. b) In der Schrotpatrone befinden sich 12 gleich große Kugeln. c) Die Zahl 12 ergibt sich aus der Anzahl der Bleikugeln vom Laufinnendurchmesser, die zusammen die Masse von einem englischen Pfund (453,6g) ergeben.",
     "en_q":"What does the number 12 mean in shotgun shells?",
     "en_a":"a) The diameter of the barrel is 12 mm. b) There are 12 balls of the same size in the shotshell. c) The number 12 results from the number of lead balls with the inner diameter of the barrel, which together give the mass of one pound (453.6g).",
     "ru_q":"Что означает цифра 12 в патронах для дробовика?",
     "ru_a":"a) Диаметр ствола 12 мм. b) В гильзе 12 шаров одного размера. c) Число 12 получается из количества свинцовых шариков с внутренним диаметром ствола, что вместе дает массу одного фунта (453,6 d).",
     "c":"c"
  },
  {
     "id":"II.30",
     "de_q":"Schrotmunition im Kaliber 16 …",
     "de_a":"a) ist größer als Kaliber 12. b) ist kleiner als Kaliber 12. c) entspricht dem internationalen Kalibermaß 2 x 8 mm.",
     "en_q":"Shotgun ammunition in caliber 16 ...",
     "en_a":"a) is larger than caliber 12. b) is smaller than caliber 12. c) corresponds to the international caliber dimension 2 x 8 mm.",
     "ru_q":"Боеприпасы для дробовика калибра 16 ...",
     "ru_a":"a) больше калибра 12. b) меньше калибра 12. c) соответствует международному размеру калибра 2 x 8 мм.",
     "c":"b"
  },
  {
     "id":"II.31",
     "de_q":"Was bezeichnet die Zahl „12“ bei dem entsprechenden Flintenkaliber?",
     "de_a":"a) Den Innendurchmesser des Laufes in Millimetern. b) Den Innendurchmesser des Laufes in Zoll (Inch). c) Der Innendurchmesser des Laufes entspricht dem Durchmesser einer Bleikugel mit dem Gewicht eines zwölftel (1/12) Pfundes (englisches Maß, ca. 454 Gramm) Blei -> es handelt sich also um einen „Zwölftelpfünder“.",
     "en_q":"What does the number “12” mean for the corresponding shotgun caliber?",
     "en_a":"a) The inside diameter of the barrel in millimeters. b) The inside diameter of the barrel in inches. c) The inside diameter of the barrel corresponds to the diameter of a lead ball with the weight of a twelfth (1/12) pound (English measure, approx. 454 grams) of lead -> it is therefore a “twelfth pound”.",
     "ru_q":"Что означает цифра «12» для соответствующего калибра ружья?",
     "ru_a":"a) Внутренний диаметр ствола в миллиметрах. b) Внутренний диаметр ствола в дюймах. c) Внутренний диаметр ствола соответствует диаметру свинцового шара с весом двенадцатого (1/12) фунта (английская мера, приблизительно 454 грамма) свинца -> следовательно, это «двенадцатый фунт».",
     "c":"c"
  },
  {
     "id":"II.32",
     "de_q":"Woran erkennt man die für eine Waffe zugelassene Munition?",
     "de_a":"a) Wenn die Angaben auf der kleinsten Verpackungseinheit mit den Angaben auf der Waffe übereinstimmen. b) Wenn man die Munition von einem Sportwaffenhändler hat. c) Wenn sie ins Patronenlager eingeführt werden kann.",
     "en_q":"How do you recognize the ammunition approved for a weapon?",
     "en_a":"a) If the information on the smallest packaging unit matches the information on the weapon. b) If you got the ammunition from a sporting arms dealer. c) When it can be inserted into the chamber.",
     "ru_q":"Как распознать разрешенные к оружию боеприпасы?",
     "ru_a":"a) Если информация на наименьшей единице упаковки совпадает с информацией на оружии. b) Если вы приобрели боеприпасы у продавца спортивного оружия. c) Когда его можно вставить в камеру.",
     "c":"a"
  },
  {
     "id":"II.33",
     "de_q":"Welche der folgenden Aussagen über Schalldämpfer ist richtig?",
     "de_a":"a) Ein Schalldämpfer verringert den Mündungsknall. b) Ein Schalldämpfer kann die Mündungsgeschwindigkeit des Geschosses beeinflussen. c) Ein Schalldämpfer kann die Präzision der Waffe beeinflussen.",
     "en_q":"Which of the following statements about silencers is correct?",
     "en_a":"a) A silencer reduces the muzzle bang. b) A silencer can influence the muzzle velocity of the projectile. c) A silencer can affect the precision of the weapon.",
     "ru_q":"Какое из следующих утверждений о глушителях является правильным?",
     "ru_a":"a) Глушитель снижает дульный удар. b) Глушитель может влиять на начальную скорость снаряда. c) Глушитель может повлиять на точность оружия.",
     "c":"abc"
  },
  {
     "id":"II.34",
     "de_q":"Was bewirkt ein Schalldämpfer?",
     "de_a":"a) Er verringert den Mündungsknall beim Schuss. b) Er verstärkt den Rückstoß beim Schuss. c) Er verringert den Geschossknall.",
     "en_q":"What does a silencer do?",
     "en_a":"a) It reduces the muzzle bang when firing. b) It increases the recoil when firing. c) It reduces the blast of the bullet.",
     "ru_q":"Что делает глушитель?",
     "ru_a":"a) Уменьшает дульный удар при стрельбе. b) Увеличивает отдачу при стрельбе. c) Это уменьшает взрыв пули.",
     "c":"a"
  },
  {
     "id":"II.35",
     "de_q":"Was sind Schalldämpfer?",
     "de_a":"Schalldämpfer sind Vorrichtungen, die der wesentlichen Dämpfung des Mündungsknalls dienen und für Schusswaffen bestimmt sind.",
     "en_q":"What are silencers?",
     "en_a":"Silencers are devices that are used for the essential attenuation of the muzzle bang and are intended for firearms.",
     "ru_q":"Что такое глушители?",
     "ru_a":"Глушители - это устройства, которые используются для существенного ослабления дульного удара и предназначены для огнестрельного оружия.",
     "c":"x"
  },
  {
     "id":"II.36",
     "de_q":"Was bewirkt ein Schalldämpfer nicht?",
     "de_a":"a) Er verringert den Mündungsknall beim Schuss. b) Er verstärkt den Rückstoß beim Schuss. c) Er verringert den Geschossknall.",
     "en_q":"What doesn't a silencer do?",
     "en_a":"a) It reduces the muzzle bang when firing. b) It increases the recoil when firing. c) It reduces the blast of the bullet.",
     "ru_q":"Что не делает глушитель?",
     "ru_a":"a) Уменьшает дульный удар при стрельбе. b) Увеличивает отдачу при стрельбе. c) Это уменьшает взрыв пули.",
     "c":"bc"
  },
  {
     "id":"II.37",
     "de_q":"Was versteht man unter einem Kompensator?",
     "de_a":"a) Eine Vorrichtung am Waffenlauf, die das Hochschlagen beim Schuss verringern soll. b) Eine Vorrichtung im Verschluss von halbautomatischen Waffen, die den Rückstoß verringern soll. c) Eine Vorrichtung am Magazin, die dessen Kapazität erhöht.",
     "en_q":"What is a compensator?",
     "en_a":"a) A device on the barrel of the weapon that is supposed to reduce the knocking up when firing. b) A device in the breech of semi-automatic weapons designed to reduce recoil. c) A device on the magazine that increases its capacity.",
     "ru_q":"Что такое компенсатор?",
     "ru_a":"a) Устройство на стволе оружия, которое должно уменьшать подбрасывание при стрельбе. b) Устройство в казенной части полуавтоматического оружия, предназначенное для уменьшения отдачи. c) Устройство на магазине, увеличивающее его емкость.",
     "c":"a"
  },
  {
     "id":"II.38",
     "de_q":"Was versteht man unter einem Einstecklauf?",
     "de_a":"a) Wechsellauf, der anstelle des Laufes in die Verschlusshülse der Waffe eingesetzt und durch Einstecken befestigt wird. b) Ein Lauf ohne eigenen Verschluss, der in die Läufe von Waffen größeren Kalibers eingesteckt werden kann. c) Ein Lauf mit eigenem Verschluss, der in die Läufe von Waffen größeren Kalibers eingesteckt werden kann.",
     "en_q":"What is a plug-in barrel?",
     "en_a":"a) Interchangeable barrel, which is inserted into the locking sleeve of the weapon instead of the barrel and secured by inserting it. b) A barrel without its own bolt that can be inserted into the barrels of larger-caliber weapons. c) A barrel with its own bolt that can be inserted into the barrels of larger caliber weapons.",
     "ru_q":"Что такое съемный ствол?",
     "ru_a":"a) Сменный ствол, который вставляется в запорную гильзу оружия вместо ствола и фиксируется вставкой. b) Ствол без собственного затвора, который можно вставлять в стволы крупнокалиберного оружия. c) Ствол с собственным затвором, который можно вставлять в стволы оружия большего калибра.",
     "c":"b"
  },
  {
     "id":"II.39",
     "de_q":"Was versteht man unter einem Nachtzielgerät?",
     "de_a":"a) Ein Gerät, das mit Montagevorrichtung für Schusswaffen versehen ist und durch Bildwandler oder mittels elektronischer Verstärkung ein Zielen bei Nacht ermöglicht. b) Ein Zielfernrohr mit besonders großen Linsen, das ein Erkennen des Zieles auch bei schlechten Lichtverhältnissen ermöglicht. c) Eine selbstleuchtende oder fluoreszierende Visiereinrichtung, die ein Zielen auch bei Dunkelheit ermöglicht.",
     "en_q":"What is a night aiming device?",
     "en_a":"a) A device that is equipped with a mounting device for firearms and enables aiming at night by means of image converters or electronic amplification. b) A rifle scope with particularly large lenses that enables the target to be recognized even in poor light conditions. c) A self-luminous or fluorescent sighting device that enables aiming even in the dark.",
     "ru_q":"Что такое прибор ночного прицеливания?",
     "ru_a":"a) Устройство, оснащенное приспособлением для крепления огнестрельного оружия и позволяющее прицеливаться в ночное время с помощью преобразователей изображения или электронного усиления. b) Прицел с особенно большими линзами, позволяющими распознавать цель даже в условиях плохой освещенности. c) Самосветящийся или флуоресцентный прицельный прибор, позволяющий прицеливаться даже в темноте.",
     "c":"a"
  },
  {
     "id":"II.40",
     "de_q":"Was versteht man unter Kaliber?",
     "de_a":"a) Den Außendurchmesser eines Laufes. b) Den Innendurchmesser des Laufes. c) Den Durchmesser des Einzelgeschosses.",
     "en_q":"What is a caliber?",
     "en_a":"a) The outside diameter of a barrel. b) The inside diameter of the barrel. c) The diameter of the single bullet.",
     "ru_q":"Что такое калибр?",
     "ru_a":"a) Наружный диаметр ствола. b) Внутренний диаметр ствола. c) Диаметр одиночной пули.",
     "c":"bc"
  },
  {
     "id":"II.41",
     "de_q":"Was versteht man unter Kaliber?",
     "de_a":"Das Kaliber weist auf den Durchmesser des Geschosses bzw. Innendurchmesser des Laufes hin. (In Waffen mit gezogenen Läufen unterscheidet man zwischen: - Feldkaliber = Laufdurchmesser sich gegenüber liegender Felder - Zugkaliber = Laufdurchmesser sich gegenüberliegender Züge - Geschosskaliber = Geschossdurchmesser)",
     "en_q":"What is a caliber?",
     "en_a":"The caliber indicates the diameter of the bullet or the inner diameter of the barrel. (In weapons with rifled barrels, a distinction is made between: - field caliber = barrel diameter of opposing fields - slide caliber = barrel diameter of opposing trains - bullet caliber = bullet diameter)",
     "ru_q":"Что такое калибр?",
     "ru_a":"Калибр указывает диаметр пули или внутренний диаметр ствола. (В оружии с нарезными стволами различают: - полевой калибр = диаметр ствола противоположных полей - калибр затвора = диаметр ствола противостоящих звеньев - калибр пули = диаметр пули)",
     "c":"x"
  },
  {
     "id":"II.42",
     "de_q":"Was versteht man unter Kaliber?",
     "de_a":"a) Durchmesser der Hülse b) Innendurchmesser des Laufes c) Außendurchmesser des Laufes",
     "en_q":"What is a caliber?",
     "en_a":"a) Diameter of the sleeve b) Inside diameter of the barrel c) Outside diameter of the barrel",
     "ru_q":"Что такое калибр?",
     "ru_a":"a) Диаметр гильзы b) Внутренний диаметр ствола c) Наружный диаметр ствола",
     "c":"b"
  },
  {
     "id":"II.43",
     "de_q":"Darf Munition im Kaliber .22lr auch aus Kurzwaffen verschossen werden?",
     "de_a":"a) Ja b) Nur mit Genehmigung des Schießleiters. c) Nein",
     "en_q":"Can .22lr ammunition also be fired from handguns?",
     "en_a":"a) Yes b) Only with the approval of the chief shooting officer. c) No.",
     "ru_q":"Можно ли стрелять боеприпасами .22lr из пистолетов?",
     "ru_a":"a) Да b) Только с одобрения главного стрелка. c) Нет.",
     "c":"a"
  },
  {
     "id":"II.44",
     "de_q":"Warum ist z.B. die Munitionsbezeichnung „9 mm“ nicht ausreichend?",
     "de_a":"a) Weil es verschiedene 9 mm-Patronen gibt. b) Weil die Kaliberangabe in der Regel nie ganz exakt ist, sondern auf gerundeten Werten beruht. c) Weil die Kaliberangabe keine Information über die zulässigen Treibladungsmittel (Schwarz- oder Nitrozellulosepulver) enthält.",
     "en_q":"Why, for example, is the ammunition designation '9 mm' not sufficient?",
     "en_a":"a) Because there are different 9 mm cartridges. b) Because the caliber specification is usually never completely exact, but is based on rounded values. c) Because the caliber specification does not contain any information about the permitted propellants (black or nitrocellulose powder).",
     "ru_q":"Почему, например, недостаточно обозначения боеприпаса «9 мм»?",
     "ru_a":"a) Потому что патроны 9 мм разные. b) Потому что спецификация калибра обычно никогда не бывает полностью точной, а основана на округленных значениях. c) Потому что в спецификации калибра нет информации о разрешенных порохах (черный или нитроцеллюлозный порошок).",
     "c":"a"
  },
  {
     "id":"II.45",
     "de_q":"Was versteht man unter Double Action-Only Pistolen?",
     "de_a":"a) Pistolen, deren Abzug jedes Mal vorgespannt werden muss. b) Pistolen, bei denen nur der erste Schuss mittels Spannabzug abgefeuert wird. c) Pistolen, bei denen jeder Schuss mittels Spannabzug abgefeuert wird.",
     "en_q":"What are double action-only pistols?",
     "en_a":"a) Pistols, the trigger of which must be cocked every time. b) Pistols in which only the first shot is fired by means of a cocked trigger. c) Pistols in which each shot is fired with a cocked trigger.",
     "ru_q":"Что такое пистолеты только двойного действия?",
     "ru_a":"a) Пистолеты, спусковой крючок которых должен каждый раз взводиться. b) Пистолеты, в которых только первый выстрел производится с помощью взведенного спускового крючка. c) Пистолеты, в которых каждый выстрел производится с взведенным курком.",
     "c":"c"
  },
  {
     "id":"II.46",
     "de_q":"Welche der nebenstehenden Schusswaffen können auch halbautomatische Waffen sein?",
     "de_a":"a) Büchsen b) Doppelflinten c) Pistolen",
     "en_q":"Which of the adjacent firearms can also be semi-automatic weapons?",
     "en_a":"a) Rifles b) Double shotguns c) Pistols",
     "ru_q":"Какое из соседних видов огнестрельного оружия также может быть полуавтоматическим?",
     "ru_a":"a) Винтовки b) Двойные ружья c) Пистолеты",
     "c":"ac"
  },
  {
     "id":"II.47",
     "de_q":"Was versteht man unter dem Begriff „Double-Action-Pistole“?",
     "de_a":"a) Eine Waffe mit Spannabzug (auch im entspannten Zustand kann durch Be tätigen des Abzugs ein Schuss abgegeben werden). b) Eine Waffe, die für mindestens zwei Schießsportdisziplinen zugelassen ist. c) Eine Waffe, bei der durch Betätigen der Sicherung im gespannten Zustand sowohl der Hahn (das Schlagstück) entspannt, als auch der Schlagbolzen gesichert wird.",
     "en_q":"What does the term “double-action pistol” mean?",
     "en_a":"a) A weapon with a cocked trigger (a shot can be fired by pulling the trigger even when the trigger is relaxed). b) A weapon that is approved for at least two shooting sports disciplines. c) A weapon in which by operating the safety in the cocked state, both the hammer (the hammer) is released and the firing pin is secured.",
     "ru_q":"Что означает термин «пистолет двойного действия»?",
     "ru_a":"a) Оружие со взведенным спусковым крючком (выстрел может быть произведен нажатием на спусковой крючок, даже если спусковой крючок ослаблен). b) Оружие, утвержденное как минимум для двух стрелковых видов спорта. c) Оружие, в котором при срабатывании предохранителя во взведенном состоянии курок (курок) освобождается, а ударник фиксируется.",
     "c":"a"
  },
  {
     "id":"II.48",
     "de_q":"Bei einem Teilmantelgeschoss...",
     "de_a":"a) liegt in der Regel an der Spitze der Bleikernfrei. b) ist das Geschoss immer verkupfert. c) liegt nur am Geschossboden der Bleikernfrei.",
     "en_q":"With a semi-jacketed bullet ...",
     "en_a":"a) is usually exposed at the tip of the lead core. b) the bullet is always copper-plated. c) The lead core is only exposed on the floor of the floor.",
     "ru_q":"С пулей в полуоболочке ...",
     "ru_a":"a) обычно обнажается на конце свинцового сердечника. b) пуля всегда покрыта медью. c) Свинцовый сердечник обнажен только на полу пола.",
     "c":"a"
  },
  {
     "id":"II.49",
     "de_q":"Welche Läufe weisen Züge und Felder auf?",
     "de_a":"a) Glatte Läufe b) Gezogene Läufe c) Polygonläufe",
     "en_q":"Which runs have trains and fields?",
     "en_a":"a) Smooth runs b) Drawn runs c) Polygon runs",
     "ru_q":"На каких трассах есть поезда и поля?",
     "ru_a":"a) Плавные участки b) Нарисованные участки c) Многоугольные участки",
     "c":"b"
  },
  {
     "id":"II.50",
     "de_q":"Züge und Felder sind typische Merk male von...",
     "de_a":"a) gezogenen Läufen. b) glatten Läufen. c) gezogenen wie glatten Läufen.",
     "en_q":"Trains and fields are typical features of ...",
     "en_a":"a) drawn barrels. b) smooth runs. c) drawn and smooth legs.",
     "ru_q":"Поезда и поля - типичные черты ...",
     "ru_a":"a) тянутые бочки. b) плавность хода. c) нарисованные и гладкие ножки.",
     "c":"a"
  },
  {
     "id":"II.51",
     "de_q":"Das Feldkaliber ist im Verhältnis zum Zugkaliber…",
     "de_a":"a) größer. b) kleiner. c) gleich groß.",
     "en_q":"The field caliber is in relation to the train caliber ...",
     "en_a":"a) bigger. b) smaller. c) same size.",
     "ru_q":"Калибр поля соотносится с калибром поезда ...",
     "ru_a":"a) больше. b) поменьше. c) такого же размера.",
     "c":"b"
  },
  {
     "id":"II.52",
     "de_q":"Müssen Pistolen manuelle Sicherungen haben?",
     "de_a":"a) Auf jeden Fall. b) Nein c) Nur halbautomatische Pistolen.",
     "en_q":"Do guns have to have manual safety devices?",
     "en_a":"a) Definitely. b) No c) Semi-automatic pistols only.",
     "ru_q":"Должны ли пистолеты иметь ручные предохранительные устройства?",
     "ru_a":"a) Однозначно. b) Нет c) Только полуавтоматические пистолеты.",
     "c":"b"
  },
  {
     "id":"II.53",
     "de_q":"Welche Arten von Sicherungen an Schusswaffen unterscheiden Sie a) nach der Art der Betätigung (mind. 3) b) nach der Wirkung (mind. 3)?",
     "de_a":"a) Die Betätigung erfolgt z.B. durch: Schieber, Druckknopf, Hebel, Flügel b) Die Sicherung wirkt auf: Abzug, Stange, Schlagstück, Schlagbolzen",
     "en_q":"Which types of safety devices on firearms do you differentiate a) according to the type of actuation (at least 3) b) according to the effect (at least 3)?",
     "en_a":"a) The actuation takes place e.g. by: slide, push button, lever, wing b) The safety acts on: trigger, rod, hammer, firing pin",
     "ru_q":"Какие типы предохранительных устройств на огнестрельном оружии вы различаете: а) по типу срабатывания (минимум 3) b) по эффекту (минимум 3)?",
     "ru_a":"a) Приведение в действие происходит, например, с помощью: затвора, кнопки, рычага, крыла b) Предохранитель воздействует на: спусковой крючок, стержень, курок, ударник",
     "c":"x"
  },
  {
     "id":"II.54",
     "de_q":"Woran erkennt man, ob eine Schusswaffe gesichert oder entsichert ist?",
     "de_a":"In der Regel ist im entsicherten Zustand ein roter Punkt oder ein „F“ (= Feuer, fire, feu) und im gesicherten Zustand ein „S“ (= sicher, safe, sûr) sichtbar.",
     "en_q":"How can you tell whether a firearm is locked or unlocked?",
     "en_a":"As a rule, a red point or an 'F' (= fire, fire, feu) is visible in the unlocked state and an 'S' (= safe, safe, sûr) in the secured state.",
     "ru_q":"Как узнать, заблокировано или разблокировано огнестрельное оружие?",
     "ru_a":"Как правило, красная точка или буква «F» (= огонь, огонь, feu) видна в разблокированном состоянии и «S» (= безопасный, безопасный, sûr) в защищенном состоянии.",
     "c":"x"
  },
  {
     "id":"II.55",
     "de_q":"Wozu dient der Verschluss?",
     "de_a":"a) Er soll die Waffe gegen Wegnahme sichern. b) Er soll den Rückstoß mindern. c) Er soll das Patronenlager nach hinten abschließen.",
     "en_q":"What is the lock used for?",
     "en_a":"a) He should secure the weapon against being taken away. b) It should reduce the recoil. c) It should lock the cartridge chamber to the rear.",
     "ru_q":"Для чего используется замок?",
     "ru_a":"a) Он должен обезопасить оружие от того, чтобы его отняли. b) Это должно уменьшить отдачу. c) Он должен фиксировать патронник в задней части.",
     "c":"c"
  },
  {
     "id":"II.56",
     "de_q":"Bei einer halbautomatischen Waffe können mehrere Schüsse abgefeuert werden...",
     "de_a":"a) durch jeweiliges Betätigen des Abzuges. b) durch einmaliges Betätigen des Abzuges. c) nach erneutem manuellen Spannen.",
     "en_q":"A semi-automatic weapon can fire multiple shots ...",
     "en_a":"a) by pulling the trigger. b) by pulling the trigger once. c) after renewed manual tensioning.",
     "ru_q":"Полуавтоматическое оружие может стрелять несколькими выстрелами ...",
     "ru_a":"a) нажатием на спусковой крючок. b) однократным нажатием на спусковой крючок. c) после повторного ручного натяжения.",
     "c":"a"
  },
  {
     "id":"II.57",
     "de_q":"Was ist ein Einstecklauf und welchen Zweck hat er?",
     "de_a":"a) Ein Einstecklauf ist ein Lauf ohne eigenen Verschluss, der in einen Lauf von Waffen größeren Kalibers eingesteckt werden kann, um Munition mit einem kleineren Kaliber verschießen zu können. b) Ein Einstecklauf ist ein Lauf mit eigenem Verschluss, mit dem ein kleineres oder größeres Kaliber verschossen werden kann.",
     "en_q":"What is a plug barrel and what is its purpose?",
     "en_a":"a) An insert barrel is a barrel without its own lock that can be inserted into a barrel of larger-caliber weapons in order to be able to fire ammunition with a smaller caliber. b) A plug-in barrel is a barrel with its own slide, with which a smaller or larger caliber can be fired.",
     "ru_q":"Что такое заглушка ствола и для чего она нужна?",
     "ru_a":"a) Вставной ствол - это ствол без собственного замка, который может быть вставлен в ствол оружия большего калибра, чтобы иметь возможность стрелять боеприпасами меньшего калибра. b) Вставной ствол - это ствол с собственным затвором, из которого можно вести огонь меньшего или большего калибра.",
     "c":"a"
  },
  {
     "id":"II.58",
     "de_q":"Wie ist in der Regel die Schussfolge bei Bockflinten beim nicht umschaltbaren Einzelabzug?",
     "de_a":"a) oben / unten b) unten / oben c) rechts / links",
     "en_q":"What is usually the sequence of shots for over and under shotguns with non-reversible single triggers?",
     "en_a":"a) up / down b) down / up c) right / left",
     "ru_q":"Какая обычно последовательность выстрелов для ружей с перевернутым и подрезным стволом с необратимыми одиночными спусковыми крючками?",
     "ru_a":"a) вверх / вниз b) вниз / вверх c) вправо / влево",
     "c":"b"
  },
  {
     "id":"II.59",
     "de_q":"Wie groß ist die (ungefähre) Anfangsgeschwindigkeit der Geschosse mittlerer Büchsenkaliber für Zentral feuer-patronen?",
     "de_a":"a) 200 - 300 m/s b) 700 – 1000 m/s c) 1500 – 1700 m/s",
     "en_q":"What is the (approximate) starting speed of the projectiles of medium rifle caliber for central fire cartridges?",
     "en_a":"a) 200 - 300 m / s b) 700 - 1000 m / s c) 1500 - 1700 m / s",
     "ru_q":"Какова (приблизительная) начальная скорость снарядов среднего винтовочного калибра для патронов центрального огня?",
     "ru_a":"a) 200-300 м / с b) 700-1000 м / с c) 1500-1700 м / с",
     "c":"b"
  },
  {
     "id":"II.60",
     "de_q":"Was bezeichnet in der Ballistik das Kürzel „v“?",
     "de_a":"a) Geschossenergie b) Höchstreichweite des Geschosses c) Geschossgeschwindigkeit",
     "en_q":"What does the abbreviation “v” mean in ballistics?",
     "en_a":"a) Projectile energy b) Maximum range of the projectile c) Projectile speed",
     "ru_q":"Что означает аббревиатура «v» в баллистике?",
     "ru_a":"a) Энергия снаряда b) Максимальная дальность полета снаряда c) Скорость снаряда",
     "c":"c"
  },
  {
     "id":"II.61",
     "de_q":"Was bedeutet die Bezeichnung „vo“?",
     "de_a":"a) Die Fluggeschwindigkeit rotierender Schrote nahe dem Nullpunkt. b) Die Geschossgeschwindigkeit reduziert sich auf Null. c) Die Geschossgeschwindigkeit beim Verlassen der Mündung.",
     "en_q":"What does the term “vo” mean?",
     "en_a":"a) The airspeed of rotating shot close to zero. b) The bullet speed is reduced to zero. c) The bullet speed when leaving the muzzle.",
     "ru_q":"Что означает термин «во»?",
     "ru_a":"a) Скорость вращающегося выстрела близка к нулю. b) Скорость пули снижена до нуля. c) Скорость пули при выходе из дульного среза.",
     "c":"c"
  },
  {
     "id":"II.62",
     "de_q":"Was bedeutet der ballistische Begriff „v100“?",
     "de_a":"a) Geschossgeschwindigkeit 100 Meter vor der Mündung. b) Gefahrenbereich des Geschosses bei 100 Metern. c) Geschossenergie 100 Meter vor der Mündung.",
     "en_q":"What does the ballistic term 'v100' mean?",
     "en_a":"a) Projectile speed 100 meters in front of the muzzle. b) Danger area of ​​the projectile at 100 meters. c) Projectile energy 100 meters in front of the muzzle.",
     "ru_q":"Что означает баллистический термин 'v100'?",
     "ru_a":"a) Скорость снаряда 100 метров перед дульным срезом. b) Опасная зона снаряда на 100 метров. c) Энергия снаряда в 100 метрах от дульного среза.",
     "c":"a"
  },
  {
     "id":"II.63",
     "de_q":"Die Faustregel für die Reichweite von Schroten in Metern beträgt...",
     "de_a":"a) 1000 x Schrotgröße in mm. b) 100 x Schrotgröße in mm. c) 10 x Schrotgröße in mm.",
     "en_q":"The rule of thumb for the range of shot in meters is ...",
     "en_a":"a) 1000 x shot size in mm. b) 100 x shot size in mm. c) 10 x shot size in mm.",
     "ru_q":"Практическое правило для дальности выстрела в метрах ...",
     "ru_a":"a) 1000 x размер выстрела в мм. b) 100-кратный размер кадра в мм. c) 10-кратный размер кадра в мм.",
     "c":"b"
  },
  {
     "id":"II.64",
     "de_q":"Welches Geschoss hat die größte Durchschlagskraft?",
     "de_a":"a) Bleigeschoss b) Vollmantelgeschoss c) Teilmantelgeschoss",
     "en_q":"Which bullet has the greatest penetration?",
     "en_a":"a) Lead bullet b) Full jacketed bullet c) Partial jacketed bullet",
     "ru_q":"Какая пуля имеет наибольшую пробиваемость?",
     "ru_a":"a) Свинцовая пуля b) Пуля с полной оболочкой c) Пуля с частичной оболочкой",
     "c":"b"
  },
  {
     "id":"II.65",
     "de_q":"Was versteht man unter der Höchstreichweite eines Geschosses?",
     "de_a":"a) Die Strecke zwischen Schützenstand und Geschossfang. b) Das Produkt aus Treibladung und Geschossgewicht. c) Die Entfernung zwischen Laufmündung und maximal entferntem Auftreffpunkt des Geschosses.",
     "en_q":"What is the maximum range of a projectile?",
     "en_a":"a) The distance between the shooting range and the bullet trap. b) The product of propellant charge and projectile weight. c) The distance between the muzzle and the most distant point of impact of the projectile.",
     "ru_q":"Какая максимальная дальность полета снаряда?",
     "ru_a":"a) Расстояние между стрельбищем и пулевой ловушкой. b) произведение метательного заряда и массы снаряда. c) Расстояние между дульным срезом и наиболее удаленной точкой попадания снаряда.",
     "c":"c"
  },
  {
     "id":"II.66",
     "de_q":"Der Gefährdungsbereich von Geschossen der Patrone im Kaliber .300 WinMag beträgt...",
     "de_a":"a) 3000 m. b) 5000 m. c) 7000 m.",
     "en_q":"The hazard range from projectiles from the .300 WinMag cartridge is ...",
     "en_a":"a) 3000 m. b) 5000 m. c) 7000 m.",
     "ru_q":"Дальность опасности от снарядов патрона .300 WinMag составляет ...",
     "ru_a":"a) 3000 м. b) 5000 м. c) 7000 м.",
     "c":"b"
  },
  {
     "id":"II.67",
     "de_q":"Welche Höchstreichweite haben Geschosse der Patrone im Kaliber .44 Rem. Mag.?",
     "de_a":"a) 1500 m b) 3000 m c) 2000 m",
     "en_q":"What is the maximum range of the .44 Rem. Like.?",
     "en_a":"a) 1500 m b) 3000 m c) 2000 m",
     "ru_q":"Какова максимальная дальность стрельбы .44 Rem. Нравится.?",
     "ru_a":"a) 1500 м b) 3000 м c) 2000 м",
     "c":"c"
  },
  {
     "id":"II.68",
     "de_q":"Welche Höchstreichweite haben Geschosse der Patrone im Kaliber 9mmLuger?",
     "de_a":"a) 1500 m. b) 2000 m. c) 1000 m.",
     "en_q":"What is the maximum range of bullets in the 9mm Luger cartridge?",
     "en_a":"a) 1500 m. b) 2000 m. c) 1000 m.",
     "ru_q":"Какова максимальная дальность стрельбы 9-мм патрона Люгера?",
     "ru_a":"a) 1500 м. b) 2000 м. c) 1000 м.",
     "c":"b"
  },
  {
     "id":"II.69",
     "de_q":"Wie groß ist der Gefährdungsbereich der Schrote bei einer Korngröße von 2 mm Durchmesser?",
     "de_a":"a) 150 m b) 200 m c) 250 m",
     "en_q":"How big is the hazard area of ​​the shot with a grain size of 2 mm in diameter?",
     "en_a":"a) 150 m b) 200 m c) 250 m",
     "ru_q":"Насколько велика опасная зона выстрела с размером зерна 2 мм в диаметре?",
     "ru_a":"a) 150 м b) 200 м c) 250 м",
     "c":"b"
  },
  {
     "id":"II.70",
     "de_q":"Die Höchstreichweite eines Geschosses im Kaliber .22lr beträgt ca. ...",
     "de_a":"a) 1000 m. b) 1500 m. c) 2000 m.",
     "en_q":"The maximum range of a .22lr bullet is approx. ...",
     "en_a":"a) 1000 m. b) 1500 m. c) 2000 m.",
     "ru_q":"Максимальный радиус действия пули калибра .22LR составляет примерно ...",
     "ru_a":"a) 1000 м. b) 1500 м. c) 2000 м.",
     "c":"b"
  },
  {
     "id":"II.71",
     "de_q":"Die Höchstreichweite von ca. 1500 m kann erreicht werden von einem Geschoss der Patrone...",
     "de_a":"a) .22lr b) .32 S&W Long N.P. (Wadcutter). c) 9 mm Luger.",
     "en_q":"The maximum range of approx. 1500 m can be achieved by one bullet of the cartridge ...",
     "en_a":"a) .22lr b) .32 S&W Long N.P. (Wad cutter). c) 9 mm Luger.",
     "ru_q":"Максимальная дальность около 1500 м может быть достигнута одной пулей патрона ...",
     "ru_a":"a) .22lr b) .32 S&W Long N.P. (Резак для пыж). c) 9 мм Люгер.",
     "c":"ac"
  },
  {
     "id":"II.72",
     "de_q":"Was versteht man unter Gefährdungsbereich eines Geschosses?",
     "de_a":"a) Die Höchstreichweite b) Den Streukreis c) Die günstigste Schussentfernung",
     "en_q":"What is the hazardous area of ​​a floor?",
     "en_a":"a) The maximum range b) The scatter circle c) The best shooting distance",
     "ru_q":"Какая опасная зона пола?",
     "ru_a":"a) Максимальная дальность b) Круг разброса c) Лучшая дистанция для стрельбы",
     "c":"a"
  },
  {
     "id":"II.73",
     "de_q":"Nennen Sie die Gefahrenbereiche der Geschosse folgender Munitionssorten: 4 mm M20 .22lr .223 Rem. 9 mm Luger .32 S&W Long N.P. .38 Special .44 Rem. Magnum .308 Win. 12/70 Flintenlaufgeschoss Schrotpatronen Schrot 3 mm",
     "de_a":"ca. 300 1500 4300 2000 1200 1500 2000 5000 1200 300",
     "en_q":"State the danger areas of the projectiles of the following types of ammunition: 4 mm M20 .22lr .223 Rem. 9 mm Luger .32 S&W Long N.P. .38 Special .44 Rem. Magnum .308 Win. 12/70 shotgun barrel round shotgun shells 3 mm",
     "en_a":"approx. 300 1500 4300 2000 1200 1500 2000 5000 1200 300",
     "ru_q":"Укажите зоны опасности снарядов следующих типов боеприпасов: 4 мм M20 .22lr .223 Rem. 9 мм Luger .32 S&W Long N.P. .38 Special .44 Rem. Магнум .308 Win. 12/70 ствол для дробовика круглые патроны 3 мм",
     "ru_a":"ок. 300 1500 4300 2000 1200 1500 2000 5000 1200300",
     "c":"x"
  },
  {
     "id":"II.74",
     "de_q":"Welcher Begriff gehört nicht zur Ballistik?",
     "de_a":"a) Gasdruck b) Geschossflugbahn c) Abzugsgewicht",
     "en_q":"Which term does not belong to ballistics?",
     "en_a":"a) gas pressure b) projectile trajectory c) trigger weight",
     "ru_q":"Какой термин не относится к баллистике?",
     "ru_a":"a) давление газа b) траектория полета снаряда c) спусковая масса",
     "c":"c"
  },
  {
     "id":"II.75",
     "de_q":"Womit befasst sich u.a. die Außenballistik?",
     "de_a":"a) Mit Wettereinflüssen b) Mit der Geschossflugbahn c) Mit der Geschossform",
     "en_q":"What does external ballistics deal with, among other things?",
     "en_a":"a) With weather influences b) With the bullet trajectory c) With the bullet shape",
     "ru_q":"Чем, помимо прочего, занимается внешняя баллистика?",
     "ru_a":"a) В зависимости от погодных условий b) По траектории пули c) По форме пули",
     "c":"abc"
  },
  {
     "id":"II.76",
     "de_q":"Womit befasst sich u.a. die Innenballistik?",
     "de_a":"a) Mit dem rotationslosen Geschossweg. b) Mit der Strecke zwischen Patronenlager und Auftreffpunkt. c) Mit dem Gasdruckverlauf.",
     "en_q":"What is indoor ballistics dealing with, among other things?",
     "en_a":"a) With the non-rotating projectile path. b) With the distance between the cartridge store and the point of impact. c) With the gas pressure curve.",
     "ru_q":"С чем, помимо прочего, имеет дело внутренняя баллистика?",
     "ru_a":"a) С невращающейся траекторией снаряда. b) С расстоянием между магазином патрона и точкой попадания. c) С кривой давления газа.",
     "c":"ac"
  },
  {
     "id":"II.77",
     "de_q":"Was versteht man unter der Streuung der Geschosse?",
     "de_a":"a) Eine schlechte Schießleistung. b) Die Abweichung einer Reihe von Treffern zueinander bei gleichem Haltepunkt. c) Die Verformung des Geschosses beim Aufprall.",
     "en_q":"What is meant by the dispersion of the projectiles?",
     "en_a":"a) Poor shooting performance. b) The deviation of a number of hits far from each other with the same stopping point. c) The deformation of the projectile on impact.",
     "ru_q":"Что подразумевается под разлетом снарядов?",
     "ru_a":"a) Плохая стрельба. b) отклонение количества попаданий далеко друг от друга с одной и той же точкой остановки. c) Деформация снаряда при ударе.",
     "c":"b"
  },
  {
     "id":"II.78",
     "de_q":"Welche Flugbahnbeschreibung ist richtig?",
     "de_a":"a) Das Geschoss beschreibt auf seiner Flugbahn eine ungleichförmige Kurve, die mit zunehmender Entfernung von der Mündung immer steiler abfällt. b) Das Geschoss steigt auf seiner Flugbahn bis zur Mitte auf und fällt zum Ziel ebenso ab. c) Die Visierlinie ist gleichzeitig auch die Flugbahn des Geschosses.",
     "en_q":"Which trajectory description is correct?",
     "en_a":"a) The bullet describes a non-uniform curve on its trajectory, which drops ever steeper with increasing distance from the muzzle. b) The bullet rises on its trajectory to the middle and also falls towards the target. c) The line of sight is also the trajectory of the projectile.",
     "ru_q":"Какое описание траектории правильное?",
     "ru_a":"a) Пуля описывает неоднородную кривую на своей траектории, которая становится все круче с увеличением расстояния от дула. b) Пуля поднимается по траектории до середины, а также падает в сторону цели. c) Линия визирования также является траекторией полета снаряда.",
     "c":"a"
  },
  {
     "id":"II.79",
     "de_q":"Was bedeutet der ballistische Begriff „Steighöhe eines Geschosses“?",
     "de_a":"a) Die maximale Höhe eines Geschosses in der sogenannten „ballistischen Kurve“. b) Gefahrenbereich des Geschosses bei höchster Steigung. c) Die Entfernung zwischen Laufmündung und Scheitelpunkt der Geschossbahn bei senkrecht nach oben abgegebenem Schuss.",
     "en_q":"What does the ballistic term 'height of rise of a projectile' mean?",
     "en_a":"a) The maximum height of a floor in the so-called “ballistic curve”. b) Danger area of the floor with the highest incline. c) The distance between the muzzle and the apex of the bullet trajectory when the shot is fired vertically upwards.",
     "ru_q":"Что означает баллистический термин «высота подъема снаряда»?",
     "ru_a":"a) Максимальная высота пола по так называемой «баллистической кривой». b) Опасная зона пола с наибольшим уклоном. c) Расстояние между дулом и вершиной траектории пули при выстреле вертикально вверх.",
     "c":"c"
  },
  {
     "id":"II.80",
     "de_q":"Was bedeutet der ballistische Begriff „E0“?",
     "de_a":"a) Geschossgeschwindigkeit auf 100 m. b) Steighöhe des Geschosses (Gefahrenbereich). c) Bewegungsenergie des Geschosses beim Verlassen des Laufes.",
     "en_q":"What does the ballistic term 'E0' mean?",
     "en_a":"a) Projectile speed to 100 m. b) Height of rise of the projectile (danger area). c) kinetic energy of the bullet when leaving the barrel.",
     "ru_q":"Что означает баллистический термин «E0»?",
     "ru_a":"a) Скорость снаряда до 100 м. b) Высота подъема снаряда (опасная зона). c) кинетическая энергия пули при выходе из ствола.",
     "c":"c"
  },
  {
     "id":"II.81",
     "de_q":"Wovon hängt die Eindringtiefe eines Geschosses ab?",
     "de_a":"a) Je geringer das Geschossgewicht und die -härte, desto tiefer das Eindringen. b) Je größer die Querschnittsbelastung, je härter das Geschoss, desto tiefer das Eindringen bei gleicher Auftreffenergie und gleichem Zielmedium. c) Je schwerer und stumpfer das Geschoss, desto größer ist die Geschwindigkeit und das Eindringen.",
     "en_q":"What does the penetration depth of a projectile depend on?",
     "en_a":"a) The lower the bullet weight and hardness, the deeper the penetration. b) The greater the cross-sectional load, the harder the bullet, the deeper the penetration with the same impact energy and the same target medium. c) The heavier and blunt the bullet, the greater the speed and penetration.",
     "ru_q":"От чего зависит глубина проникновения снаряда?",
     "ru_a":"a) Чем меньше вес и твердость пули, тем глубже пробитие. b) Чем больше нагрузка на поперечное сечение, тем тверже пуля, тем глубже проникновение при той же энергии удара и той же целевой среде. c) Чем тяжелее и тупее пуля, тем больше скорость и пробиваемость.",
     "c":"b"
  },
  {
     "id":"II.82",
     "de_q":"Was bewirkt der Drall?",
     "de_a":"a) Das Flugverhalten des Geschosses wird erheblich stabilisiert. b) Die Reichweite des Geschosses verkürzt sich erheblich. c) Die Bewegungsenergie des Geschosses erhöht sich erheblich.",
     "en_q":"What does the twist do?",
     "en_a":"a) The flight behavior of the projectile is considerably stabilized. b) The range of the projectile is reduced considerably. c) The kinetic energy of the projectile increases considerably.",
     "ru_q":"Что делает твист?",
     "ru_a":"a) Полетные характеристики снаряда значительно стабилизированы. b) Дальность полета снаряда значительно уменьшена. c) Кинетическая энергия снаряда значительно увеличивается.",
     "c":"a"
  },
  {
     "id":"II.83",
     "de_q":"Welchen Zweck hat der Drall?",
     "de_a":"Der Drall ist für die Flugstabilität des Geschosses erforderlich.",
     "en_q":"What is the purpose of the twist?",
     "en_a":"The twist is necessary for the flight stability of the projectile.",
     "ru_q":"Какова цель скрутки?",
     "ru_a":"Крутка необходима для устойчивости полета снаряда.",
     "c":"x"
  },
  {
     "id":"II.84",
     "de_q":"Was versteht man unter der Länge des Dralls?",
     "de_a":"a) Die Länge eines gezogenen Laufes. b) Die Strecke, auf der sich das Geschoss einmal um seine eigene Längsachse dreht. c) Die Länge eines speziell gehärteten Laufes einer Schusswaffe.",
     "en_q":"What is meant by the length of the twist?",
     "en_a":"a) The length of a drawn barrel. b) The distance over which the bullet rotates once around its own longitudinal axis. c) The length of a specially hardened barrel of a firearm.",
     "ru_q":"Что подразумевается под длиной скрутки?",
     "ru_a":"a) Длина нарисованного ствола. b) Расстояние, на котором пуля один раз поворачивается вокруг своей продольной оси. c) Длина ствола огнестрельного оружия специальной закалки.",
     "c":"b"
  },
  {
     "id":"II.85",
     "de_q":"Was bedeutet der ballistische Begriff „Geschossrotation“?",
     "de_a":"a) Fluggeschwindigkeit rotierender Schrote. b) Die mathematisch festgelegte Energie des rotierenden Geschosses bei verlassen des Laufes. c) Die Drehung des Geschosses um seine Längsachse.",
     "en_q":"What does the ballistic term 'bullet rotation' mean?",
     "en_a":"a) Airspeed of rotating shot. b) The mathematically determined energy of the rotating projectile when leaving the barrel. c) The rotation of the projectile around its longitudinal axis.",
     "ru_q":"Что означает баллистический термин «вращение пули»?",
     "ru_a":"a) Скорость вращающегося выстрела. b) Математически определяемая энергия вращающегося снаряда при выходе из ствола. c) Вращение снаряда вокруг продольной оси.",
     "c":"c"
  },
  {
     "id":"II.86",
     "de_q":"Wodurch wird der Geschossknall erzeugt?",
     "de_a":"a) Das verbrannte Pulver erzeugt den Knall im Inneren der Schusswaffe. b) Durch die Expansion der vor dem Geschoss komprimierten Luft bei überschallschnellen Geschossen. c) Das nicht vollständig verbrannte Pulvergas vermischt sich mit Sauerstoff und bewirkt den Knall.",
     "en_q":"How is the bullet crack generated?",
     "en_a":"a) The burned powder creates the bang inside the firearm. b) Due to the expansion of the air compressed in front of the projectile with supersonic projectiles. c) The not completely burned powder gas mixes with oxygen and causes the bang.",
     "ru_q":"Как возникает трещина от пули?",
     "ru_a":"a) Пригоревший порох создает взрыв внутри огнестрельного оружия. b) За счет расширения сжатого перед снарядом воздуха сверхзвуковыми снарядами. c) Не полностью сгоревший пороховой газ смешивается с кислородом и вызывает взрыв.",
     "c":"b"
  },
  {
     "id":"II.87",
     "de_q":"Wodurch entsteht der Mündungsknall?",
     "de_a":"a) Durch die mit Überschallgeschwindigkeit austretenden Gase. b) Die dem Geschoss folgenden Pulvergase stoßen auf die kalte Umgebungsluft. c) Durch das nicht vollständig verbrannte Pulver.",
     "en_q":"What causes the muzzle bang?",
     "en_a":"a) Due to the gases escaping at supersonic speed. b) The powder gases following the projectile collide with the cold ambient air. c) Due to the not completely burned powder.",
     "ru_q":"Что вызывает мордочку?",
     "ru_a":"a) Из-за газов, выходящих со сверхзвуковой скоростью. b) Пороховые газы, следующие за снарядом, сталкиваются с холодным окружающим воздухом. c) Из-за не полностью сгоревшего пороха.",
     "c":"a"
  },
  {
     "id":"II.88",
     "de_q":"Warum weisen Langwaffenläufe im Bereich des Patronenlagers stärkere Wandungen auf als im vorderen Lauf teil?",
     "de_a":"a) Damit eine bessere Montage der Visiereinrichtung erfolgen kann. b) Weil in diesem Bereich der höchste Gasdruck auftritt. c) Weil in diesem Bereich Hersteller, Beschusszeichen und Nummer am besten sichtbar angebracht werden können.",
     "en_q":"Why do long gun barrels have thicker walls in the area of ​​the cartridge chamber than in the front barrel?",
     "en_a":"a) So that a better assembly of the sighting device can take place. b) Because the highest gas pressure occurs in this area. c) Because in this area the manufacturer, proof mark and number can best be affixed in a visible manner.",
     "ru_q":"Почему у длинных стволов в области патронника стенки более толстые, чем в переднем стволе?",
     "ru_a":"a) Для лучшей сборки прицельного приспособления. b) Потому что в этой области наблюдается самое высокое давление газа. c) Потому что в этой области производитель, контрольный знак и номер лучше всего могут быть нанесены на видном месте.",
     "c":"b"
  },
  {
     "id":"II.89",
     "de_q":"Was verstehen Sie unter dem Begriff „Basküle“?",
     "de_a":"a) Visiereinrichtung für Spezialgewehre b) Vorderschaft einer „Pump Action“ c) Verschlusskasten einer Kipplaufwaffe",
     "en_q":"What do you understand by the term “receiver”?",
     "en_a":"a) Sighting device for special rifles b) Forearm of a 'Pump Action' c) Lock case of a drop barrel rifle",
     "ru_q":"Что вы понимаете под термином «получатель»?",
     "ru_a":"a) Прицельное приспособление для специальных винтовок b) Цевьё «помпового действия» c) Замок карабина с опускающимся стволом.",
     "c":"c"
  },
  {
     "id":"II.90",
     "de_q":"Wie wird eine Schusswaffe dauerhaft unbrauchbar gemacht, um sie ohne Erwerbsberechtigung erwerben zu können? (sog. Dekorationswaffe)",
     "de_a":"Dauerhaft unbrauchbar gemacht wird eine Schusswaffe durch den Inhaber einer Waffen bearbeitungs- oder Waffenherstellungserlaubnis, wenn sie gemäß den Vorgaben der Durchführungsverordnung (EU) 2015/2403 (Deaktivierungsdurchführungsverordnung) bearbeitet wurde, sodass mit allgemein gebräuchlichen Werkzeugen die Schussfähigkeit der Waffe oder der wesentlichen Teile nicht wiederhergestellt werden kann und dies durch das Anbringen eines Zulassungszeichens (Ortszeichen in der Raute) und durch das Ausstellen einer Deaktivierungsbescheinigung durch ein Beschussamt bestätigt wird.",
     "en_q":"How is a firearm made permanently unusable so that it can be acquired without purchase authorization? (so-called decoration weapon)",
     "en_a":"A firearm is made permanently unusable by the holder of a weapon processing or weapon manufacturing license if it has been processed in accordance with the requirements of the Implementing Regulation (EU) 2015/2403 (Deactivation Implementation Regulation) so that the weapon or the essential weapons can be fired with commonly used tools Parts cannot be restored and this is confirmed by the affixing of an approval mark (place symbol in the diamond) and by the issuing of a deactivation certificate by a fire protection agency.",
     "ru_q":"Как сделать огнестрельное оружие непригодным для использования, чтобы его можно было приобрести без разрешения на покупку? (так называемое декоративное оружие)",
     "ru_a":"Огнестрельное оружие становится окончательно непригодным для использования держателем лицензии на обработку или производство оружия, если оно было обработано в соответствии с требованиями Исполнительного регламента (ЕС) 2015/2403 (Регламента внедрения деактивации), так что оружие или основное оружие можно обжигать с помощью обычно используемых инструментов. Части не подлежат восстановлению, и это подтверждается нанесением знака одобрения (поместите символ в ромб) и выдачей свидетельства о деактивации агентством противопожарной защиты.",
     "c":"x"
  },
  {
     "id":"II.91",
     "de_q":"Wie wird eine Schusswaffe dauerhaft unbrauchbar gemacht, um sie ohne Erwerbsberechtigung erwerben zu können? (sog. Dekorationswaffe)",
     "de_a":"a) Ein Büchsenmacher macht mehrere wesentliche Teile dauerhaft unbrauchbar und bringt sein Markenzeichen auf der Dekorationswaffe an. b) Ein Waffenhändler macht alle wesentlichen Teile vorübergehend unbrauchbar und bringt ein Beschusszeichen auf der Dekorationswaffe anbringen. c) Der Inhaber einer Waffenbearbeitungs- oder Waffenherstellungserlaubnis macht alle wesentlichen Teile gemäß den Vorgaben der Durchführungsverordnung (EU) 2015/2403 (Deaktivierungsdurchführungsverordnung) unbrauchbar und lässt vom Beschussamt das Zulassungszeichen anbringen. Das Beschussamt stellt überdies eine Deaktivierungsbescheinigung aus.",
     "en_q":"How is a firearm made permanently unusable so that it can be acquired without purchase authorization? (so-called decoration weapon)",
     "en_a":"a) A gunsmith renders several essential parts permanently unusable and applies his trademark to the decorative weapon. b) An arms dealer makes all essential parts temporarily unusable and puts a proof mark on the decorative weapon. c) The holder of a weapon processing or weapon manufacturing license renders all essential parts unusable in accordance with the requirements of the Implementation Regulation (EU) 2015/2403 (Deactivation Implementation Regulation) and has the approval mark affixed by the fire fighting agency. The fire protection office also issues a deactivation certificate.",
     "ru_q":"Как сделать огнестрельное оружие непригодным для использования, чтобы его можно было приобрести без разрешения на покупку? (так называемое декоративное оружие)",
     "ru_a":"a) Оружейник приводит в негодность несколько основных частей и наносит на декоративное оружие свой товарный знак. b) Торговец оружием временно выводит из строя все основные части и ставит отметку о пробе на декоративное оружие. c) Владелец лицензии на обработку или производство оружия приводит все существенные части в непригодность для использования в соответствии с требованиями Регламента внедрения (ЕС) 2015/2403 (Регламента внедрения деактивации) и имеет знак утверждения, нанесенный пожарным ведомством. Служба пожарной охраны также выдает справку о дезактивации.",
     "c":"c"
  },
  {
     "id":"II.92",
     "de_q":"Wann sind Feuerwaffen oder deren wesentliche Teile dauerhaft unbrauchbar gemacht?",
     "de_a":"a) Wenn die Waffe mit einem Blockiersystem vorübergehend blockiert wurde. b) Wenn sie gemäß ihrem Waffentyp und in jedem wesentlichen Bestandteil den Maßgaben Durchführungsverordnung (EU) 2015/2403 (Deaktivierungsdurchführungsverordnung) entsprechen. c) Wenn der Lauf der Waffe verzogen ist.",
     "en_q":"When are firearms or their essential parts made permanently unusable?",
     "en_a":"a) If the weapon has been temporarily blocked with a blocking system. b) If they comply with the provisions of Implementing Regulation (EU) 2015/2403 (Deactivation Implementation Regulation) in terms of their weapon type and in every essential component. c) When the barrel of the gun is warped.",
     "ru_q":"Когда огнестрельное оружие или его основные части становятся непригодными для использования?",
     "ru_a":"a) Если оружие временно заблокировано системой блокировки. b) Соответствуют ли они положениям Исполнительного регламента (ЕС) 2015/2403 (Регламента о введении в действие деактивации) в отношении типа оружия и всех основных компонентов. c) При перекосе ствола пистолета.",
     "c":"b"
  },
  {
     "id":"III.1",
     "de_q":"Darf eine Schusswaffe, auch wenn sie ungeladen ist, auf Menschen gerichtet werden?",
     "de_a":"a) Niemals b) Ja c) Nein, außer bei Notwehr.",
     "en_q":"Can a firearm, even if it is unloaded, be aimed at people?",
     "en_a":"a) Never b) Yes c) No, except for self-defense.",
     "ru_q":"Может ли огнестрельное оружие, даже если оно разряжено, быть нацелено на людей?",
     "ru_a":"a) Никогда b) Да c) Нет, за исключением самообороны.",
     "c":"c"
  },
  {
     "id":"III.2",
     "de_q":"Wie soll eine Schusswaffe an eine andere Person übergeben werden?",
     "de_a":"a) geladen, gesichert b) geladen, ungesichert c) ungeladen",
     "en_q":"How should a firearm be handed over to another person?",
     "en_a":"a) loaded, secured b) loaded, unsecured c) unloaded",
     "ru_q":"Как передать огнестрельное оружие другому человеку?",
     "ru_a":"a) загружен, закреплен b) загружен, не закреплен c) разгружен",
     "c":"c"
  },
  {
     "id":"III.3",
     "de_q":"Mit welchen Waffen darf man auf seinem befriedeten Grundstück schießen, wenn sichergestellt ist, dass die Geschosse das Grundstück nicht verlassen können und niemand durch Lärm behindert oder belästigt wird?",
     "de_a":"a) Druckluftwaffen mit dem Zulassungszeichen „F im Fünfeck“ und Softairwaffen. b) Mit Waffen für Randfeuermunition bis Kaliber .22lr (= lfB). c) Mit Waffen (z.B. im „Kleinstkaliber“ 4 mm M20), sofern diese das Zulassungszeichen „F im Fünfeck“ und das Zulassungszeichen „PTB im Viereck“ tragen.",
     "en_q":"What weapons can you shoot with on a pacified property if it is ensured that the projectiles cannot leave the property and that no one is hindered or bothered by noise?",
     "en_a":"a) Air guns with the approval mark 'F in pentagon' and airsoft guns. b) With weapons for rimfire ammunition up to caliber .22lr (= lfB). c) With weapons (e.g. in the 'smallest caliber' 4 mm M20), provided they have the approval mark 'F in the pentagon' and the approval mark 'PTB in the square'.",
     "ru_q":"Из какого оружия вы можете стрелять по умиротворенной территории, если гарантируется, что снаряды не могут покинуть территорию и никого не будет мешать или беспокоить шум?",
     "ru_a":"a) Пневматическое оружие со знаком официального утверждения 'F в пятиугольнике' и страйкбольное оружие. b) с оружием под патроны кольцевого воспламенения до калибра .22lr (= lfB). c) с оружием (например, «наименьшего калибра» 4 мм M20) при условии, что оно имеет знак официального утверждения «F в пятиугольнике» и знак официального утверждения «PTB в квадрате».",
     "c":"ac"
  },
  {
     "id":"III.4",
     "de_q":"Wie sollte man Munition im Bedarfsfall ordnungsgemäß entsorgen?",
     "de_a":"a) In den Hausmüll werfen. b) Beim Waffenhändler abgeben. c) In den Sondermüll geben.",
     "en_q":"How should ammunition be properly disposed of if necessary?",
     "en_a":"a) Throw in household waste. b) Hand it in at the arms dealer. c) Put in the hazardous waste.",
     "ru_q":"Как правильно утилизировать боеприпасы в случае необходимости?",
     "ru_a":"a) Выбрасывайте бытовые отходы. b) Сдать его торговцу оружием. c) Выбрасывать опасные отходы.",
     "c":"b"
  },
  {
     "id":"III.5",
     "de_q":"Welche Munition dürfen Sie aus Ihrer Waffe verschießen?",
     "de_a":"a) Alles, was ins Patronenlager passt. b) Munition, für die diese Waffe konstruiert und zugelassen ist. c) Nur Zentralfeuermunition",
     "en_q":"What ammunition can you use with your gun?",
     "en_a":"a) Everything that fits in the chamber. b) Ammunition for which this weapon is designed and approved. c) Centerfire ammunition only",
     "ru_q":"Какие боеприпасы можно использовать с ружьем?",
     "ru_a":"a) Все, что умещается в камере. b) Боеприпасы, для которых это оружие разработано и одобрено. c) Только боеприпасы центрального огня",
     "c":"b"
  },
  {
     "id":"III.6",
     "de_q":"Wie darf unbrauchbar gewordene Munition entsorgt werden?",
     "de_a":"a) Geschoss abziehen, Pulver in Wasser auflösen, Rest in Hausmüll geben. b) Als Sondermüll / Gefahrstoff bei der örtlichen Annahmestelle abgeben. c) An den Verkäufer / Hersteller oder einen Delaborierbetrieb geben.",
     "en_q":"How can ammunition that has become unusable be disposed of?",
     "en_a":"a) Pull off the bullet, dissolve the powder in water, dispose of the rest in household waste. b) Hand in as hazardous waste / hazardous material at the local collection point. c) Give to the seller / manufacturer or a dismantling company.",
     "ru_q":"Как можно утилизировать боеприпасы, пришедшие в негодность?",
     "ru_a":"a) Снимите пулю, растворите порох в воде, остаток утилизируйте вместе с бытовыми отходами. b) Сдать как опасные отходы / опасный материал в местный пункт сбора. c) Передать продавцу / производителю или демонтажной компании.",
     "c":"c"
  },
  {
     "id":"III.7",
     "de_q":"Wie viel Munition darf mit einer Waffenbesitzkarte bei entsprechender Munitionserwerbsberechtigung erworben werden (ungeachtet von Transportbeschränkungen)?",
     "de_a":"a) bis zu 1000 Patronen je Kauf / Lieferung b) bis zu 5 kg Nettoexplosivmasse je Kauf / Lieferung c) unbegrenzt",
     "en_q":"How much ammunition can be acquired with a weapon possession card with the appropriate ammunition acquisition authorization (regardless of transport restrictions)?",
     "en_a":"a) up to 1000 cartridges per purchase / delivery b) up to 5 kg net explosive mass per purchase / delivery c) unlimited",
     "ru_q":"Сколько боеприпасов можно приобрести с помощью карты владения оружием с соответствующим разрешением на приобретение боеприпасов (независимо от транспортных ограничений)?",
     "ru_a":"a) до 1000 патронов на покупку / доставку b) до 5 кг массы нетто взрывчатого вещества на покупку / доставку c) без ограничений",
     "c":"c"
  },
  {
     "id":"III.8",
     "de_q":"Nennen Sie mindestens fünf Grund regeln zum Umgang mit einer Schusswaffe, die Sie unbedingt beachten müssen!",
     "de_a":"Hier sind allgemeine Sicherheitsregeln zu benennen wie z.B.: - eine Schusswaffe ist immer als geladen zu betrachten, so lange man sich nicht persönlich vom Gegenteil überzeugt hat - es ist immer dafür Sorge zu tragen, dass kein Unbefugter die Waffe an sich nehmen kann - die Waffe darf nur in sicherer Richtung ge- und entladen werden - eine geladene Waffe darf nicht aus der Hand gelegt werden - eine Schusswaffe darf nicht spielerisch auf Personen gerichtet werden - auf Schießanlagen ist die Schießstandordnung zu beachten - den Anweisungen der Aufsicht ist folge zu leisten - fremde Waffen dürfen nicht ohne die ausdrückliche Genehmigung des Besitzers oder der Standaufsicht berührt werden - kein Hantieren mit Waffen unter dem Einfluss berauschender Mittel",
     "en_q":"Name at least five basic rules for handling a firearm that you must observe!",
     "en_a":"General safety rules must be named here, such as: - a firearm must always be considered loaded as long as you have not personally convinced yourself to the contrary - you must always ensure that no unauthorized person can take the weapon - the The weapon may only be loaded and unloaded in a safe direction - a loaded weapon must not be put down - a firearm must not be pointed at people in a playful way - the shooting range rules must be observed on shooting ranges - the instructions of the supervisor must be followed - Foreign weapons must not be touched without the express permission of the owner or the range supervisor - no handling of weapons under the influence of intoxicating substances",
     "ru_q":"Назовите хотя бы пять основных правил обращения с огнестрельным оружием, которые вы должны соблюдать!",
     "ru_a":"Здесь должны быть указаны общие правила безопасности, такие как: - огнестрельное оружие всегда должно считаться заряженным, если вы лично не убедили себя в обратном - вы всегда должны гарантировать, что никакое постороннее лицо не может взять оружие - оружие может только заряжать и разряжать в безопасном направлении - заряженное оружие нельзя класть - нельзя в игровой форме направлять огнестрельное оружие на людей - на стрельбищах должны соблюдаться правила стрельбища - выполнять инструкции супервайзера - Запрещается прикасаться к иностранному оружию без специального разрешения владельца или начальника стрельбища - нельзя обращаться с оружием под воздействием опьяняющих веществ.",
     "c":"x"
  },
  {
     "id":"III.9",
     "de_q":"Wie soll eine halbautomatische Pistole auf der Schießstätte an eine andere Person übergeben werden?",
     "de_a":"a) Die geladene Waffe ist zu sichern, der Ladezustand ist mitzuteilen. b) Aus der geladenen Waffe ist das Magazin zu entnehmen, der Ladezustand ist mitzuteilen. c) Ungeladen, mit geöffnetem Verschluss.",
     "en_q":"How should a semi-automatic pistol be handed over to another person at the shooting range?",
     "en_a":"a) The loaded weapon must be secured, the charge status must be reported. b) The magazine must be taken from the loaded weapon and the charge status must be reported. c) Unloaded, with the breech open.",
     "ru_q":"Как передать полуавтоматический пистолет другому человеку на стрельбище?",
     "ru_a":"a) Заряженное оружие должно быть закреплено, необходимо сообщить о состоянии заряда. b) Магазин должен быть снят с заряженного оружия и должен быть сообщен статус заряда. c) Разряженный, с открытым затвором.",
     "c":"c"
  },
  {
     "id":"III.10",
     "de_q":"Was sollte als erstes geschehen, wenn man eine Schusswaffe übergeben bekommt?",
     "de_a":"a) Die Waffe ist sofort auf ihren Ladezustand zu überprüfen. b) Es genügt die Sicherung der Waffe auf ihre Funktionssicherheit zu prüfen. c) Die Waffe ist sofort zu zerlegen und auf Beschädigungen zu prüfen. Außerdem sollten die Beschusszeichen in Augenschein genommen werden.",
     "en_q":"What should be the first thing to do when handed over a firearm?",
     "en_a":"a) The weapon must be checked immediately to ensure that it is charged. b) It is sufficient to check the safety of the weapon for its functional reliability. c) The weapon must be dismantled immediately and checked for damage. The proof marks should also be inspected.",
     "ru_q":"Что нужно сделать в первую очередь при сдаче огнестрельного оружия?",
     "ru_a":"a) Оружие необходимо немедленно проверить, чтобы убедиться, что оно заряжено. b) Достаточно проверить безопасность оружия на его функциональную надежность. c) Оружие необходимо немедленно разобрать и проверить на предмет повреждений. Контрольные отметки также должны быть проверены.",
     "c":"a"
  },
  {
     "id":"III.11",
     "de_q":"Was haben Sie zu tun, bevor Sie mit einer Schusswaffe schießen?",
     "de_a":"a) Waffe auf sichtbare Beschädigungen prüfen. b) Überprüfen, ob das Patronenlager und der Lauf frei von Fremdkörpern sind. c) Prüfen, ob die bereitgestellte Munition aus dieser Waffe verschossen werden darf.",
     "en_q":"What do you have to do before you shoot a firearm?",
     "en_a":"a) Check the weapon for visible damage. b) Check that the chamber and barrel are free from foreign objects. c) Check whether the ammunition provided may be fired from this weapon.",
     "ru_q":"Что вам нужно сделать, прежде чем выстрелить из огнестрельного оружия?",
     "ru_a":"a) Проверьте оружие на наличие видимых повреждений. b) Убедитесь, что в патроннике и стволе нет посторонних предметов. c) Проверить, можно ли стрелять из этого оружия из предоставленных боеприпасов.",
     "c":"abc"
  },
  {
     "id":"III.12",
     "de_q":"Wo darf ein Sportschütze seine Waffe laden?",
     "de_a":"a) Nur auf dem Schützenstand. b) Auf dem gesamten Schießstand. c) Im Aufenthaltsraum.",
     "en_q":"Where is a marksman allowed to load his weapon?",
     "en_a":"a) Only on the shooting range. b) On the entire shooting range. c) In the lounge.",
     "ru_q":"Где стрелку разрешено заряжать свое оружие?",
     "ru_a":"a) Только на стрельбище. b) На всем огневом рубеже. c) В салоне.",
     "c":"a"
  },
  {
     "id":"III.13",
     "de_q":"Darf ausnahmsweise eine geladene Waffe einem anderen übergeben werden?",
     "de_a":"a) Ja, bei Waffenstörung der verantwortlichen Aufsichtsperson. b) Nur an den Nachbarschützen. c) Nein, auf keinen Fall.",
     "en_q":"As an exception, can a loaded weapon be handed over to someone else?",
     "en_a":"a) Yes, in the event of a weapon malfunction, the responsible supervisor. b) Only to the neighboring shooter. c) No, definitely not.",
     "ru_q":"Можно ли передать заряженное оружие кому-нибудь в порядке исключения?",
     "ru_a":"a) Да, в случае неисправности оружия - ответственный руководитель. b) Только соседнему стрелку. c) Нет, определенно нет.",
     "c":"a"
  },
  {
     "id":"III.14",
     "de_q":"Dürfen Sie mit einem Druckluftgewehr (E0 max. 7,5 J) in Ihrem Keller schießen, wenn sichergestellt ist, dass hierbei niemand gefährdet wird?",
     "de_a":"a) Das ist waffenrechtlich erlaubt. b) Nein, das ist verboten. c) Nein, ich darf nur mit sogenannten Spielgeräten (Energie 0,08 J) außer halb von Schießständen schießen.",
     "en_q":"Are you allowed to shoot with a compressed air rifle (E0 max. 7.5 J) in your basement if you have made sure that nobody is endangered?",
     "en_a":"a) This is permitted under gun law. b) No, that is forbidden. c) No, I am only allowed to shoot with so-called play equipment (energy 0.08 J) outside of the shooting range.",
     "ru_q":"Разрешено ли вам стрелять из пневматической винтовки (E0 макс. 7,5 Дж) в подвале, если вы позаботились о том, чтобы никто не подвергался опасности?",
     "ru_a":"a) Это разрешено законом об оружии. b) Нет, это запрещено. c) Нет, мне разрешено стрелять только с так называемым игровым оборудованием (энергия 0,08 Дж) за пределами стрельбища.",
     "c":"a"
  },
  {
     "id":"III.15",
     "de_q":"Darf mit jeder beliebigen Waffe auf Schießstätten geschossen werden?",
     "de_a":"a) Ja, wenn sie funktionssicher sind. b) Nein.",
     "en_q":"Is it allowed to shoot at a shooting range with any weapon?",
     "en_a":"a) Yes, if they are functionally reliable. b) No.",
     "ru_q":"Разрешено ли стрелять в тире из любого оружия?",
     "ru_a":"a) Да, если они функционально надежны. b) Нет.",
     "c":"b"
  },
  {
     "id":"III.16",
     "de_q":"Den Anordnungen der verantwortlichen Aufsichtsperson auf dem Schießstand ist Folge zu leisten:",
     "de_a":"a) Nur im Wettkampf. b) Nur bei Gefahr im Verzug. c) Immer",
     "en_q":"The instructions of the responsible supervisor on the shooting range must be obeyed:",
     "en_a":"a) Only in competition. b) Only in the event of imminent danger. c) Always",
     "ru_q":"Необходимо соблюдать инструкции ответственного супервайзера на стрельбище:",
     "ru_a":"a) Только на соревнованиях. b) Только в случае непосредственной опасности. c) Всегда",
     "c":"c"
  },
  {
     "id":"III.17",
     "de_q":"Darf eine verantwortliche Aufsichtsperson am Schützenstand dem Schützen im Rahmen der Ausbildung eine geladene Waffe übergeben?",
     "de_a":"a) Ja, da er umfangreiche Fachkenntnis se besitzt. b) Nein, geladene Waffen dürfen nicht übergeben werden. c) Ja, wenn er Anfänger unterweist.",
     "en_q":"Can a responsible supervisor at the shooting range hand over a loaded weapon to the shooter as part of his training?",
     "en_a":"a) Yes, as he has extensive specialist knowledge. b) No, loaded weapons may not be handed over. c) Yes, if he is teaching beginners.",
     "ru_q":"Может ли ответственный наблюдатель на стрельбище передать стрелку заряженное оружие в рамках его тренировки?",
     "ru_a":"a) Да, поскольку он обладает обширными специальными знаниями. b) Нет, заряженное оружие не подлежит передаче. c) Да, если он обучает новичков.",
     "c":"b"
  },
  {
     "id":"III.18",
     "de_q":"Wie ist eine Kipplaufflinte auf einer Schießstätte zu tragen?",
     "de_a":"a) Gesichert, mit einem Tragriemen auf der Schulter. b) Ungeladen, mit geöffnetem Verschluss. c) Geschlossen und gesichert.",
     "en_q":"How should a single shotgun be carried on a shooting range?",
     "en_a":"a) Secured, with a shoulder strap. b) Unloaded, with the breech open. c) Closed and secured.",
     "ru_q":"Как следует носить на стрельбище одиночное ружье?",
     "ru_a":"a) Защищено, с наплечным ремнем. b) Разряженный, с открытым затвором. c) Закрытый и защищенный.",
     "c":"b"
  },
  {
     "id":"III.19",
     "de_q":"Wie sind Kleinkalibergewehre auf dem Schießstand abzulegen?",
     "de_a":"a) Entladen, mit geöffnetem Verschluss, Magazin entnommen. b) Unterladen, mit der Mündung nach oben. c) Gesichert, mit geschlossenem Verschluss.",
     "en_q":"How are small bore rifles to be placed on the shooting range?",
     "en_a":"a) Unloading, with the breech open, magazine removed. b) Underload, with the mouth up. c) Secured, with the lock closed.",
     "ru_q":"Как разместить на стрельбище малокалиберные винтовки?",
     "ru_a":"a) Разрядка при открытом затворе и снятом магазине. b) Недогрузка, с поднятым ртом. c) Защищено, с закрытым замком.",
     "c":"a"
  },
  {
     "id":"III.20",
     "de_q":"Darf ich eine fremde Schusswaffe auf dem Schützenstand in die Hand nehmen?",
     "de_a":"a) Nur mit Erlaubnis des Besitzers. b) Nur mit Erlaubnis des Schießleiters. c) Ja, wenn sie entladen ist, immer.",
     "en_q":"Can I pick up someone else's firearm at the shooting range?",
     "en_a":"a) Only with the permission of the owner. b) Only with the permission of the chief shooting officer. c) Yes, always when it is discharged.",
     "ru_q":"Могу ли я забрать чужое огнестрельное оружие на стрельбище?",
     "ru_a":"a) Только с разрешения собственника. b) Только с разрешения главного стрелка. c) Да, всегда при разряде.",
     "c":"a"
  },
  {
     "id":"III.21",
     "de_q":"Dürfen Sie zur Scheibenbeobachtung eine geladene Schusswaffe ablegen?",
     "de_a":"a) Ja, wenn die Schusswaffe gesichert ist. b) Nur mit Erlaubnis des Schießleiters. c) Nein, nur die entladene und geöffnete Waffe darf abgelegt werden.",
     "en_q":"Are you allowed to put down a loaded firearm to watch the target?",
     "en_a":"a) Yes, if the firearm is locked. b) Only with the permission of the chief shooting officer. c) No, only the unloaded and opened weapon may be put down.",
     "ru_q":"Можно ли положить заряженное огнестрельное оружие, чтобы следить за целью?",
     "ru_a":"a) Да, если огнестрельное оружие заблокировано. b) Только с разрешения главного стрелка. c) Нет, можно складывать только разряженное и открытое оружие.",
     "c":"c"
  },
  {
     "id":"III.22",
     "de_q":"Wann darf mit dem Schießen begonnen werden?",
     "de_a":"a) Wenn sich niemand mehr vor dem Ziel aufhält. b) Wenn die verantwortliche Aufsichtsperson das Schießen freigegeben hat. c) Wenn alle Schützenstände belegt sind.",
     "en_q":"When can shooting be started?",
     "en_a":"a) When nobody is in front of the goal anymore. b) When the responsible supervisor has given permission for shooting. c) When all shooting positions are occupied.",
     "ru_q":"Когда можно будет начать съемку?",
     "ru_a":"a) Когда никого нет перед воротами. b) Когда ответственный супервайзер дал разрешение на съемку. c) Когда все стрелковые позиции заняты.",
     "c":"b"
  },
  {
     "id":"III.23",
     "de_q":"Darf ohne waffenrechtliche Erlaubnis Munition auf einer Schießstätte zum Schießen überlassen werden?",
     "de_a":"a) Ja, nur einem Mitglied des Schützenvereins. b) Ja, aber nur zum sofortigen Ver brauch. c) Nein",
     "en_q":"Can ammunition be left to shoot at a firing range without a permit under the law on weapons?",
     "en_a":"a) Yes, only one member of the shooting club. b) Yes, but only for immediate consumption. c) No.",
     "ru_q":"Можно ли оставить боеприпасы для стрельбы на стрельбище без разрешения по закону об оружии?",
     "ru_a":"a) Да, только один член стрелкового клуба. b) Да, но только для немедленного употребления. c) Нет.",
     "c":"b"
  },
  {
     "id":"III.24",
     "de_q":"Ist es zulässig im Aufenthaltsraum Anschlagübungen mit Schusswaffen zu machen?",
     "de_a":"a) Ja, dies ist nur nach Anleitung des Schießleiters zulässig. b) Ja, wenn eine entsprechende Ladeecke eingerichtet wurde. c) Nein, dies ist nur auf dem Schützen stand erlaubt.",
     "en_q":"Is it permissible to do target exercises with firearms in the lounge?",
     "en_a":"a) Yes, this is only permitted following the instructions of the chief shooting officer. b) Yes, if a corresponding loading corner has been set up. c) No, this is only allowed on the shooter stand.",
     "ru_q":"Можно ли в салоне выполнять целевые упражнения с огнестрельным оружием?",
     "ru_a":"a) Да, это разрешено только в соответствии с инструкциями главного стрелка. b) Да, если установлен соответствующий угол загрузки. c) Нет, это разрешено только на стойке стрелка.",
     "c":"c"
  },
  {
     "id":"III.25",
     "de_q":"Darf einem Gastschützen, der nicht im Besitz einer waffenrechtlichen Erlaubnis ist, eine erlaubnispflichtige Schusswaffe überlassen werden?",
     "de_a":"a) Ja, aber nur zur Mitnahme nach Hause. b) Ja, nur zum Schießen auf einer Schießstätte. c) Nein, unter keinen Umständen.",
     "en_q":"Can a guest shooter who does not have a gun license be given a gun that requires a license?",
     "en_a":"a) Yes, but only to take home. b) Yes, only for shooting at a shooting range. c) No, under no circumstances.",
     "ru_q":"Может ли приглашенный стрелок, у которого нет лицензии на огнестрельное оружие, получить оружие, для которого требуется лицензия?",
     "ru_a":"a) Да, но только чтобы забрать домой. b) Да, только для стрельбы в тире. c) Нет, ни при каких обстоятельствах.",
     "c":"b"
  },
  {
     "id":"III.26",
     "de_q":"Wie sind Schusswaffen auf dem Schießstand aus der Hand zu legen?",
     "de_a":"a) Geladen, entspannt und gesichert. b) Entladen, nur mit leerem Magazin, Verschluss geschlossen. c) Verschluss offen, Lauf Richtung Ge schoßfang, leeres Patronenlager, leeres Magazin (entfernt von Waffe).",
     "en_q":"How are firearms to be put down on the shooting range?",
     "en_a":"a) Loaded, relaxed and secured. b) Unloading, only with empty magazine, bolt closed. c) Bolt open, barrel towards bullet trap, empty cartridge chamber, empty magazine (removed from weapon).",
     "ru_q":"Как положить огнестрельное оружие на стрельбище?",
     "ru_a":"a) Загружен, расслаблен и закреплен. b) Разгрузка, только с пустым магазином, затвор закрыт. c) Затвор открыт, ствол направлен к пулеуловителю, патронник пуст, магазин пустой (снят с оружия).",
     "c":"c"
  },
  {
     "id":"III.27",
     "de_q":"Was ist beim Schießen mit einer halbautomatischen Pistole hinsichtlich der Schussbereitschaft zu beachten?",
     "de_a":"a) Die Waffe ist nach jedem Schuss wie der schussbereit, solange sich Patronen im Magazin befinden. b) Nichts besonderes, wenn die Waffe eine Sicherung hat. c) Die Waffe ist sofort nach Schussabgabe zu sichern.",
     "en_q":"When shooting with a semi-automatic pistol, what should you watch out for with regard to readiness to fire?",
     "en_a":"a) The weapon is ready to fire after every shot as long as there are cartridges in the magazine. b) Nothing special if the weapon has a safety device. c) The weapon must be secured immediately after the shot has been fired.",
     "ru_q":"На что следует обратить внимание при стрельбе из полуавтоматического пистолета в отношении готовности к стрельбе?",
     "ru_a":"a) Оружие готово к стрельбе после каждого выстрела, пока в магазине есть патроны. b) Ничего особенного, если у оружия есть предохранитель. c) Оружие должно быть закреплено сразу после выстрела.",
     "c":"a"
  },
  {
     "id":"III.28",
     "de_q":"Darf mit einem Gewehr im Kaliber .22lr im befriedeten Besitztum geschossen werden?",
     "de_a":"a) Nein. b) Ja, wenn die Geschosse das Grund stück nicht verlassen können. c) Ja, wenn Personen oder Sachen nicht gefährdet werden können.",
     "en_q":"Can a .22lr rifle be fired in a pacified property?",
     "en_a":"on a. b) Yes, if the floors cannot leave the property. c) Yes, if people or property cannot be endangered.",
     "ru_q":"Можно ли стрелять из ружья .22lr на умиротворенной территории?",
     "ru_a":"на. b) Да, если этажи не могут покинуть собственность. c) Да, если люди или имущество не могут подвергнуться опасности.",
     "c":"a"
  },
  {
     "id":"III.29",
     "de_q":"Mit welchen Schusswaffen darf im befriedeten Besitztum außerhalb von Schießstätten ohne Schießerlaubnis geschossen werden?",
     "de_a":"a) Nur mit schallgedämpften Waffen (Immissionsschutz). b) Mit allen, vorausgesetzt es ist ein ausreichender Kugelfang vorhanden, so dass die Geschosse das Besitztum nicht verlassen können. c) Mit bauartzugelassenen Schusswaffen, deren Geschossen eine Energie von max. 7,5 Joule erteilt wird und die Geschosse das Besitztum nicht verlassen können.",
     "en_q":"Which firearms may be used in pacified property outside of shooting ranges without a shooting permit?",
     "en_a":"a) Only with silenced weapons (immission protection). b) With all, provided there is a sufficient bullet trap available so that the projectiles cannot leave the property. c) With type-approved firearms whose projectiles are given an energy of max. 7.5 joules and the projectiles cannot leave the property.",
     "ru_q":"Какое огнестрельное оружие можно использовать в умиротворенной собственности за пределами стрельбищ без разрешения на стрельбу?",
     "ru_a":"a) Только с бесшумным оружием (иммиссионная защита). b) Со всем, при условии наличия достаточного количества ловушки для пуль, чтобы снаряды не могли покинуть территорию. c) С одобренным типом огнестрельного оружия, снаряды которого имеют энергию не более 7,5 джоулей, и снаряды не могут покинуть территорию.",
     "c":"c"
  },
  {
     "id":"III.30",
     "de_q":"Was ist beim sportlichen Schießen auf Schießstätten zu beachten?",
     "de_a":"a) Es darf nur unter Aufsicht geschossen werden (ausgenommen die zur Aufsichtsführung befähigte Person schießt alleine). b) Es darf nur mit für den Stand zugelassenen Waffen und Munition geschossen werden. c) Sportliches Schießen liegt dann vor, wenn nach festen Regeln einer genehmigten Sportordnung geschossen wird.",
     "en_q":"What should you watch out for when shooting at shooting ranges?",
     "en_a":"a) Shooting may only be carried out under supervision (with the exception of the person qualified to supervise the shooting alone). b) You may only shoot with weapons and ammunition approved for the stand. c) Sporting shooting occurs when shooting is carried out in accordance with the fixed rules of an approved sporting order.",
     "ru_q":"На что следует обращать внимание при стрельбе на стрельбище?",
     "ru_a":"a) Стрельба может производиться только под наблюдением (за исключением лица, имеющего право контролировать стрельбу в одиночку). b) Вы можете стрелять только из оружия и боеприпасов, разрешенных для стенда. c) Спортивная стрельба происходит, когда стрельба ведется в соответствии с установленными правилами утвержденного спортивного порядка.",
     "c":"abc"
  },
  {
     "id":"III.31",
     "de_q":"Welche Voraussetzungen müssen erfüllt sein, bevor der Schießbetrieb aufgenommen werden darf?",
     "de_a":"a) Eine verantwortliche Aufsichtsperson muss anwesend sein. b) Die Waffen müssen geladen werden. c) Waffen und Munition müssen der Standzulassung entsprechen.",
     "en_q":"What requirements must be met before shooting can begin?",
     "en_a":"a) A responsible supervisor must be present. b) The weapons must be loaded. c) Weapons and ammunition must correspond to the stand permit.",
     "ru_q":"Какие требования необходимо выполнить перед началом съемок?",
     "ru_a":"a) Должен присутствовать ответственный руководитель. b) Оружие должно быть заряжено. c) Оружие и боеприпасы должны соответствовать разрешению на стенд.",
     "c":"ac"
  },
  {
     "id":"III.32",
     "de_q":"Darf unter Alkoholeinfluss geschossen werden?",
     "de_a":"a) Nein b) Ja, weil Alkohol beim Zielen hilft. c) Ja, aber nur mit Langwaffen.",
     "en_q":"Is it allowed to shoot under the influence of alcohol?",
     "en_a":"a) No b) Yes, because alcohol helps aim. c) Yes, but only with long guns.",
     "ru_q":"Можно ли стрелять в нетрезвом виде?",
     "ru_a":"a) Нет b) Да, потому что алкоголь помогает прицелиться. c) Да, но только с длинным ружьем.",
     "c":"a"
  },
  {
     "id":"III.33",
     "de_q":"Wie sind Schusswaffen und Munition während des Aufenthaltes auf Schießstätten außerhalb des Schießens aufzubewahren?",
     "de_a":"a) Auf Schießstätten ist eine Aufbewahrung nicht zu beachten. b) Ungeladen und getrennt von der Munition. c) So, dass sie nicht in den Besitz Unberechtigter gelangen können.",
     "en_q":"How should firearms and ammunition be stored while staying at the shooting range outside of the shooting range?",
     "en_a":"a) Storage is not to be observed at the shooting range. b) Uncharged and separated from the ammunition. c) In such a way that they cannot come into the possession of unauthorized persons.",
     "ru_q":"Как следует хранить огнестрельное оружие и боеприпасы, находясь на стрельбище за пределами стрельбища?",
     "ru_a":"a) Хранение на стрельбище не допускается. b) Незаряженный и отделенный от боеприпасов. c) таким образом, чтобы они не могли попасть во владение посторонних лиц.",
     "c":"bc"
  },
  {
     "id":"III.34",
     "de_q":"Was besagt der Begriff Gefahrenbereich?",
     "de_a":"a) In diesem Bereich darf auf dem Schießstand nicht geschossen werden. b) Schützen, die mit großkalibrigen Waffenschießen, haben einen Gefahrenbereich von 4 m. In diesem Bereich darf sich kein Zuschauer aufhalten. c) Es handelt sich hierbei um die Höchstreichweite von aus Schusswaffen ab gefeuerten Geschossen.",
     "en_q":"What does the term danger zone mean?",
     "en_a":"a) It is not allowed to shoot in this area on the shooting range. b) Shooters who shoot large-caliber weapons have a danger area of ​​4 m and no spectator is allowed in this area. c) This is the maximum range of projectiles fired from firearms.",
     "ru_q":"Что означает термин опасная зона?",
     "ru_a":"a) Стрельба в этой зоне стрелкового тира запрещена. b) Стрелки, стреляющие из крупнокалиберного оружия, имеют опасную зону 4 м, и зрители в эту зону не допускаются. c) Это максимальная дальность стрельбы из огнестрельного оружия.",
     "c":"c"
  },
  {
     "id":"III.35",
     "de_q":"Was versteht man unter Gefahrenbereich?",
     "de_a":"a) Die Höchstreichweite von aus Schusswaffen abgefeuerten Geschossen. b) Der Bereich, in dem Menschen oder Sachen gefährdet werden können. c) Der unmittelbare Bereich hinter dem Schützen.",
     "en_q":"What is a danger area?",
     "en_a":"a) The maximum range of projectiles fired from firearms. b) The area in which people or property can be endangered. c) The immediate area behind the shooter.",
     "ru_q":"Что такое опасная зона?",
     "ru_a":"a) Максимальная дальность выстрела из огнестрельного оружия. b) Район, в котором люди или имущество могут быть подвергнуты опасности. c) В непосредственной близости от стрелка.",
     "c":"abc"
  },
  {
     "id":"III.36",
     "de_q":"Darf mit einem Gewehr (im Kaliber .308Win) mit Einstecklauf (im Kaliber .22lr) auf einem 50 m KK-Stand geschossen werden?",
     "de_a":"a) Ja, aber nur mit Zentralfeuerpatronen. b) Nein c) Ja, wenn der Einstecklauf bauartzugelassen ist.",
     "en_q":"Can a rifle (.308Win caliber) with an insert barrel (.22lr caliber) be shot on a 50 m small bore range?",
     "en_a":"a) Yes, but only with center fire cartridges. b) No c) Yes, if the insert barrel is type approved.",
     "ru_q":"Можно ли стрелять из винтовки (калибр .308Win) со вставным стволом (калибр .22lr) на 50-метровую малокалиберную дистанцию?",
     "ru_a":"a) Да, но только патронами центрального огня. b) Нет c) Да, если цилиндр вставки одобрен.",
     "c":"c"
  },
  {
     "id":"III.37",
     "de_q":"Eine halbautomatische Pistole entlade ich, indem ich ...",
     "de_a":"a) den Verschluss öffne und das Magazin entleere. b) den Verschluss öffne, das Patronenlager entferne, den Verschluss schließe und das Magazin entnehme. c) das Magazin entnehme, den Verschluss öffne und das Patronenlager entleere.",
     "en_q":"I unload a semi-automatic pistol by ...",
     "en_a":"a) open the breech and empty the magazine. b) Open the breech, remove the cartridge chamber, close the breech and remove the magazine. c) remove the magazine, open the breech and empty the chamber.",
     "ru_q":"Я разряжаю полуавтоматический пистолет ...",
     "ru_a":"a) откройте затвор и опустошите магазин. b) Откройте казенник, снимите патронник, закройте казенник и снимите магазин. c) вынуть магазин, открыть затвор и опорожнить патронник.",
     "c":"c"
  },
  {
     "id":"III.38",
     "de_q":"In welcher Reihenfolge werden halb automatische Waffen entladen?",
     "de_a":"a) Erst nachsehen, ob das Patronenlager frei ist, dann das Magazin entnehmen und durch Abdrücken das Schlagstück entspannen. b) Erst das Magazin entnehmen, Verschluss öffnen, dann das Patronenlager überprüfen; wenn leer, die Waffe, soweit möglich, mit offenem Verschluss ablegen. c) Erst entspannen, sichern, das Magazin entnehmen, ablegen.",
     "en_q":"In what order are semi-automatic weapons unloaded?",
     "en_a":"a) First check whether the chamber is free, then remove the magazine and release the hammer by pressing the trigger. b) First remove the magazine, open the breech, then check the cartridge cage; When empty, put the weapon down with the breech open as far as possible. c) First relax, secure, remove the magazine, put it down.",
     "ru_q":"В каком порядке происходит разгрузка полуавтоматического оружия?",
     "ru_a":"a) Сначала проверьте, свободна ли патронник, затем снимите магазин и отпустите курок, нажав на спусковой крючок. b) Сначала снимите магазин, откройте затвор, затем проверьте обойму патрона; В пустом состоянии опустите оружие с максимально открытым затвором. c) Сначала расслабьтесь, закрепите, выньте магазин, положите его.",
     "c":"b"
  },
  {
     "id":"III.39",
     "de_q":"Wie ist ein Revolver im Kaliber .357 Mag. zu entladen?",
     "de_a":"a) Trommel ausbauen b) 1.Trommel ausschwenken bzw. Lade klappe öffnen 2. alle Kammern entleeren c) Trommel ausschwenken und eine volle Patrone entnehmen",
     "en_q":"How is a .357 Mag. Caliber revolver to be unloaded?",
     "en_a":"a) Remove the drum b) 1. Swing out the drum or open the loading flap 2. Empty all chambers c) Swing out the drum and remove a full cartridge",
     "ru_q":"Как разряжать револьвер .357 Mag. Калибра?",
     "ru_a":"a) Снимите барабан b) 1. Выдвиньте барабан или откройте загрузочную заслонку 2. Опорожните все камеры c) Откиньте барабан и извлеките полный картридж.",
     "c":"b"
  },
  {
     "id":"III.40",
     "de_q":"Was ist hinsichtlich der Schussbereitschaft mehrläufiger Waffen zu beachten?",
     "de_a":"a) Wegen der automatischen Sicherung nichts. b) Eine weitere Schussbereitschaft nach Abgabe eines Schusses ist möglich. c) Ein erneutes Entsichern ist erforderlich.",
     "en_q":"What needs to be taken into account with regard to the readiness of multi-barreled weapons to fire?",
     "en_a":"a) Nothing because of the automatic backup. b) A further readiness to fire after a shot has been fired is possible. c) Unlocking is required again.",
     "ru_q":"Что нужно учитывать при оценке готовности многоствольного оружия к стрельбе?",
     "ru_a":"a) Ничего из-за автоматического бэкапа. b) Возможна дальнейшая готовность к стрельбе после произведенного выстрела. c) Снова требуется разблокировка.",
     "c":"b"
  },
  {
     "id":"III.41",
     "de_q":"Dürfen aus Schusswaffen mit Beschusszeichen „SP“ oder „PN“ auch Nitro-Cellulose-Treibladungen verschossen werden?",
     "de_a":"a) Nein b) Ja c) Nur, wenn die Waffe auch das Zeichen „J“ trägt.",
     "en_q":"Can nitro-cellulose propellants also be fired from firearms with the bullet mark “SP” or “PN”?",
     "en_a":"a) No b) Yes c) Only if the weapon also bears the 'J' mark.",
     "ru_q":"Можно ли стрелять нитроцеллюлозными порохами из огнестрельного оружия с маркировкой пули «СП» или «ПН»?",
     "ru_a":"a) Нет b) Да c) Только если на оружии также есть знак 'J'.",
     "c":"a"
  },
  {
     "id":"III.42",
     "de_q":"Halbautomatische Pistolen mit Sicherung dürfen auf dem Schützenstand abgelegt werden...",
     "de_a":"a) gesichert und gespannt. b) entladen und mit geöffnetem Verschluss. c) mit sichtbarer Sicherung.",
     "en_q":"Semi-automatic pistols with safety devices may be placed on the shooting range ...",
     "en_a":"a) secured and tensioned. b) unloaded and with the breech open. c) with visible fuse.",
     "ru_q":"На стрельбище можно размещать полуавтоматические пистолеты с предохранительными устройствами ...",
     "ru_a":"a) закреплен и натянут. b) без патронов и с открытым затвором. c) с видимым предохранителем.",
     "c":"b"
  },
  {
     "id":"III.43",
     "de_q":"Wie verhalten Sie sich beim Versagen einer Patrone Ihres Kleinkalibergewehres?",
     "de_a":"a) Die Waffe mit der Mündung mindestens 10 Sekunden in Richtung Ge schossfang halten, dann die Waffe entladen. b) Waffe öffnen und Patrone weit wegwerfen. c) Waffe nach oben halten und auf das Brechen des Schusses warten.",
     "en_q":"How do you react if a cartridge in your small bore rifle fails?",
     "en_a":"a) Hold the gun with the muzzle in the direction of the bullet trap for at least 10 seconds, then unload the gun. b) Open the weapon and throw the cartridge far away. c) Hold the gun up and wait for the shot to break.",
     "ru_q":"Как вы реагируете, если в вашей малокалиберной винтовке выйдет из строя патрон?",
     "ru_a":"a) Удерживайте пистолет дулом в направлении пулиуловителя не менее 10 секунд, затем разрядите пистолет. b) Откройте оружие и бросьте патрон подальше. c) Держите пистолет и ждите, пока выстрел не разорвется.",
     "c":"a"
  },
  {
     "id":"III.44",
     "de_q":"Wie wird eine Repetierbüchse beim Öffnen des Verschlusses auf dem Schützenstand gehalten?",
     "de_a":"a) Die Mündung der Waffe ist in Richtung Scheibe / Geschossfang zu richten. b) Die Waffe ist senkrecht nach unten zu richten. c) Beliebig, um eine möglichst bequeme Handhabung zu ermöglichen.",
     "en_q":"How is a bolt action rifle held on the shooting range when the bolt is opened?",
     "en_a":"a) The muzzle of the weapon must be directed towards the target / bullet trap. b) The weapon must be pointed vertically downwards. c) Any, in order to enable the most comfortable handling possible.",
     "ru_q":"Как винтовка с продольно-скользящим затвором удерживается на стрельбище при открытом затворе?",
     "ru_a":"a) Дуло оружия должно быть направлено в сторону цели / пулиуловителя. b) Оружие должно быть направлено вертикально вниз. c) Любой, чтобы обеспечить максимально удобное обращение с ним.",
     "c":"a"
  },
  {
     "id":"III.45",
     "de_q":"Wie ist die Schusswaffe beim Laden zu halten?",
     "de_a":"a) Mit der Mündung zum Geschossfang. b) So wie es die Schießaufsicht gerade möchte. c) Fest in der Hand, damit der Rück schlag nicht die Waffe aus der Hand schlägt.",
     "en_q":"How should the firearm be held while loading?",
     "en_a":"a) With the muzzle to the bullet trap. b) As the shooting supervisor wants it to be. c) Firmly in hand so that the recoil does not knock the weapon out of your hand.",
     "ru_q":"Как следует держать огнестрельное оружие при заряжании?",
     "ru_a":"a) Дулом к ​​пулеуловителю. b) Так, как того хочет руководитель съемок. c) Крепко в руке, чтобы отдача не выбила оружие у вас из руки.",
     "c":"a"
  },
  {
     "id":"III.46",
     "de_q":"Welche Sicherheitsregeln hat jeder Schütze immer zu beachten?",
     "de_a":"a) Keine Sicherung ist als absolut zuverlässig zu betrachten. b) Waffen sind stets entladen zu transportieren und aufzubewahren. c) Schusswaffen sind immer als geladen zu betrachten, solange man sich nicht persönlich vom Gegenteil überzeugt hat. d) Der Lauf von Schusswaffen darf nie auf einen Menschen gerichtet werden.",
     "en_q":"Which safety rules does every shooter always have to observe?",
     "en_a":"a) No backup is to be regarded as absolutely reliable. b) Weapons must always be transported and stored unloaded. c) Firearms are always to be considered loaded as long as you have not personally convinced yourself otherwise. d) The barrel of a firearm must never be pointed at a person.",
     "ru_q":"Какие правила безопасности всегда должен соблюдать каждый стрелок?",
     "ru_a":"a) Никакое резервное копирование не считается абсолютно надежным. b) Оружие всегда должно транспортироваться и храниться разряженным. c) Огнестрельное оружие всегда считается заряженным, если вы лично не убедили себя в обратном. d) Ствол огнестрельного оружия никогда не должен быть направлен на человека.",
     "c":"abcd"
  },
  {
     "id":"III.47",
     "de_q":"Woran erkennen Sie, dass die von Ihnen zu erwerbende Munition zu Ihrer Schusswaffe passt?",
     "de_a":"a) Kennzeichnung auf Schusswaffe und Munitionsverpackung / Patronenhülse identisch. b) An den Beschuss- und Prüfzeichen auf Waffe und Munitionsverpackung. c) An der Gebrauchsanleitung des Waffenhändlers.",
     "en_q":"How do you know if the ammunition you are about to purchase is compatible with your firearm?",
     "en_a":"a) Identical marking on the firearm and ammunition packaging / cartridge case. b) The bullet marks and test marks on the weapon and ammunition packaging. c) The instructions for use of the arms dealer.",
     "ru_q":"Как узнать, совместимы ли боеприпасы, которые вы собираетесь купить, с вашим огнестрельным оружием?",
     "ru_a":"a) Идентичная маркировка на упаковке / гильзе огнестрельного оружия и боеприпасов. b) Следы от пуль и контрольные отметки на оружии и упаковке боеприпасов. c) Инструкция по эксплуатации от продавца оружия.",
     "c":"a"
  },
  {
     "id":"III.48",
     "de_q":"Wann dürfen Schützen mit dem Schießen beginnen?",
     "de_a":"a) Sobald die Aufsichtsperson den Schießstand öffnet. b) Wenn die verantwortliche Aufsichtsperson das Schießen freigegeben hat. c) Sobald Munition und Scheiben vorhanden sind.",
     "en_q":"When are shooters allowed to start shooting?",
     "en_a":"a) As soon as the supervisor opens the shooting range. b) When the responsible supervisor has given permission for shooting. c) As soon as ammunition and targets are available.",
     "ru_q":"Когда стрелкам разрешено начинать стрельбу?",
     "ru_a":"a) Как только супервайзер открывает стрельбище. b) Когда ответственный супервайзер дал разрешение на съемку. c) Как только будут доступны боеприпасы и мишени.",
     "c":"b"
  },
  {
     "id":"III.49",
     "de_q":"Wer darf den freien Raum unmittelbar hinter dem Schützen betreten?",
     "de_a":"a) Zuschauer b) Aufsicht c) Schießleiter",
     "en_q":"Who is allowed to enter the free space immediately behind the shooter?",
     "en_a":"a) Spectators b) Supervision c) Head of the shooting range",
     "ru_q":"Кому разрешено входить в свободное пространство сразу за стрелком?",
     "ru_a":"a) Зрители b) Наблюдение c) Руководитель стрельбища",
     "c":"bc"
  },
  {
     "id":"IV.1",
     "de_q":"Was versteht man unter pyrotechnischen Seenotsignalen?",
     "de_a":"Notsignale, die mit Hilfe explosionsgefährlicher Stoffe ausgelöst werden.",
     "en_q":"What are pyrotechnic distress signals?",
     "en_a":"Emergency signals that are triggered with the help of explosive substances.",
     "ru_q":"Что такое пиротехнические сигналы бедствия?",
     "ru_a":"Аварийные сигналы, которые срабатывают при помощи взрывоопасных веществ.",
     "c":"x"
  },
  {
     "id":"IV.2",
     "de_q":"Was versteht man unter pyrotechnischer Munition?",
     "de_a":"Munition, die explosionsgefährliche Stoffe oder Stoffgemische enthält und einen Licht-, Schall-, Rauch- oder ähnlichen Effekt erzeugt und keine zweckbestimmte Durchschlagskraft im Ziel entfaltet.",
     "en_q":"What is meant by pyrotechnic ammunition?",
     "en_a":"Ammunition that contains explosive substances or mixtures of substances and produces a light, sound, smoke or similar effect and does not develop a specific penetration force in the target.",
     "ru_q":"Что подразумевается под пиротехническими боеприпасами?",
     "ru_a":"Боеприпасы, которые содержат взрывчатые вещества или смеси веществ и производят световой, звуковой, дымовой или аналогичный эффект и не развивают особую проникающую силу в цели.",
     "c":"x"
  },
  {
     "id":"IV.3",
     "de_q":"Was sind explosionsgefährliche Stoffe?",
     "de_a":"Feste oder flüssige Stoffe und Zubereitungen, die durch eine nicht außergewöhnliche Beanspruchung (thermisch, mechanisch oder andere) zur Explosion gebracht werden können.",
     "en_q":"What are explosive substances?",
     "en_a":"Solid or liquid substances and preparations which can be caused to explode if they are not subjected to extraordinary stress (thermal, mechanical or other).",
     "ru_q":"Что такое взрывчатые вещества?",
     "ru_a":"Твердые или жидкие вещества и препараты, которые могут взорваться, если не будут подвергаться чрезвычайным нагрузкам (термическим, механическим или другим).",
     "c":"x"
  },
  {
     "id":"IV.4",
     "de_q":"Was darf zur pyrotechnischen Notsignalgebung verwendet werden?",
     "de_a":"a) Die Signalpistole Kaliber 4 (26,5 mm) b) Signalwaffen mit Zulassung der Physikalisch-Technischen Bundesanstalt (PTB) c) die von der Bundesanstalt für Materialforschung und -prüfung (BAM) zugelassenen sonstigen Notsignale.",
     "en_q":"What may be used for pyrotechnic emergency signals?",
     "en_a":"a) The signal pistol caliber 4 (26.5 mm) b) Signal weapons approved by the Physikalisch-Technische Bundesanstalt (PTB) c) The other emergency signals approved by the Federal Institute for Materials Research and Testing (BAM).",
     "ru_q":"Что можно использовать для пиротехнических аварийных сигналов?",
     "ru_a":"a) Сигнальный пистолет калибра 4 (26,5 мм) b) Сигнальное оружие, одобренное Physikalisch-Technische Bundesanstalt (PTB) c) Другие аварийные сигналы, одобренные Федеральным институтом исследования и испытаний материалов (BAM).",
     "c":"abc"
  },
  {
     "id":"IV.5",
     "de_q":"Welche Arten von Zündern werden bei Not-Handfackeln gewöhnlich verwendet und wie funktionieren sie?",
     "de_a":"a) Reibkopf-Zündung – funktioniert wie ein Streichholz, zündet mit einer Verzögerung direkt den Leuchtsatz (nicht mehr im deutschen Handel) b) Luntenzünder – durch das Entzünden einer Lunte wird nach gewisser Zeit der eigentlichen Signalsatz gezündet. c) Reißzünder – ein Draht im Inneren wird durch einen reibempfindlichen pyrotechnischen Anzündsatz gezogen, der dann den eigentlichen Signalsatz zündet.",
     "en_q":"What types of detonators are commonly used in emergency hand flares and how do they work?",
     "en_a":"a) Rubbing head ignition - works like a match, ignites the flare with a delay (no longer available in German trade) b) Fuse igniter - by igniting a fuse, the actual signal set is ignited after a certain time. c) Detonator - a wire inside is pulled through a friction-sensitive pyrotechnic ignition charge, which then ignites the actual signal set.",
     "ru_q":"Какие типы детонаторов обычно используются в ручных аварийных сигнальных ракетах и ​​как они работают?",
     "ru_a":"a) Зажигание с протирающей головкой - работает как спичка, зажигает факел с задержкой (больше не в немецкой торговле) b) Воспламенитель предохранителя - при зажигании предохранителя фактический набор сигналов зажигается через определенное время. c) Детонатор - провод внутри протягивается через чувствительный к трению пиротехнический воспламенительный заряд, который затем воспламеняет фактический набор сигналов.",
     "c":"ac"
  },
  {
     "id":"IV.6",
     "de_q":"Wann dürfen pyrotechnische Notsignale verwendet werden?",
     "de_a":"Nur im Notfall, d.h. unter anderem, wenn angezeigt werden soll, dass Gefahr für Leib und Leben besteht und Hilfe erforderlich ist.",
     "en_q":"When may pyrotechnic emergency signals be used?",
     "en_a":"Only in an emergency, i.e. when it should be indicated that there is a danger to life and limb and that help is required.",
     "ru_q":"Когда можно использовать пиротехнические аварийные сигналы?",
     "ru_a":"Только в экстренных случаях, т.е. когда следует указать, что существует опасность для жизни и здоровья и требуется помощь.",
     "c":"x"
  },
  {
     "id":"IV.7",
     "de_q":"Was ist sicherheitstechnisch bei der Verwendung einer Seenot Handfackel zu beachten?",
     "de_a":"a) Die brennende Fackel nach Lee waagerecht so halten, dass versprühter Abbrand keine Verletzungen (Hand, Augen) verursacht oder das Boot/Schiff beschädigt. b) Die brennende Fackel nach Luv waagerecht so halten, dass versprühter Abbrand keine Verletzungen (Hand, Augen) verursacht oder das Boot/Schiff beschädigt. c) Gebrauchsanweisung beachten.",
     "en_q":"What should be considered in terms of safety when using a distress hand torch?",
     "en_a":"a) Hold the burning torch to the lee side in such a way that sprayed combustion does not cause injuries (hand, eyes) or damage the boat / ship. b) Hold the burning torch to the windward waa in such a way that sprayed burning does not cause injuries (hand, eyes) or damage the boat / ship. c) Follow the instructions for use.",
     "ru_q":"Что следует учитывать с точки зрения безопасности при использовании ручного фонаря для бедствия?",
     "ru_a":"a) Удерживайте горящий факел с подветренной стороны так, чтобы распыленное горение не приводило к травмам (руки, глаза) или повреждению лодки / корабля. b) Держите горящий факел с наветренной стороны таким образом, чтобы горение распылением не приводило к травмам (руки, глаза) или повреждению лодки / корабля. c) Следуйте инструкциям по применению.",
     "c":"ac"
  },
  {
     "id":"IV.8",
     "de_q":"Was ist bei der Verwendung von Seenot-Rauchsignalen zu beachten?",
     "de_a":"a) Rauchsignale nur am Tage und bei geringen Windstärken verwenden. b) Die Anzündung erfolgt durch eine Reißschnur, die unter einer ab schraubbaren Schutzkappe liegt. c) Nach der Zündung ist das Rauchsignal zur Leeseite außenbords zu werfen.",
     "en_q":"What should you watch out for when using distress smoke signals?",
     "en_a":"a) Use smoke signals only during the day and at low wind speeds. b) The ignition is carried out by a tear cord, which is located under a screw-off protective cap. c) After ignition, the smoke signal is to be thrown outboard to the leeward side.",
     "ru_q":"На что следует обращать внимание при использовании дымовых сигналов бедствия?",
     "ru_a":"a) Используйте дымовые шашки только днем ​​и при небольшой скорости ветра. b) Розжиг осуществляется отрывным шнуром, который находится под отвинчивающимся защитным колпачком. c) После зажигания дымовую шайбу следует выбросить за борт на подветренную сторону.",
     "c":"abc"
  },
  {
     "id":"IV.9",
     "de_q":"Welche pyrotechnischen Seenot Signalmittel werden an Bord verwendet?",
     "de_a":"a) Signalraketen und Fallschirmraketen b) Rauchtöpfe und Bengalische Feuer c) Handfackeln und Rauchsignale",
     "en_q":"Which pyrotechnic distress signaling devices are used on board?",
     "en_a":"a) Signal rockets and parachute rockets b) Smoke pots and Bengali fires c) Hand flares and smoke signals",
     "ru_q":"Какие пиротехнические устройства сигнализации бедствия используются на борту?",
     "ru_a":"a) Сигнальные ракеты и парашютные ракеты b) Дымовые котлы и бенгальские пожары c) Ручные ракеты и дымовые сигналы",
     "c":"ac"
  },
  {
     "id":"IV.10",
     "de_q":"Zu welchem Zweck, außer der Signalgebung, kann die „Signalwaffe“ im Kaliber 4 (26,5 mm) noch verwendet werden?",
     "de_a":"a) An Silvester zum Abschuss von Leuchtfeuerwerk. b) Als Abschussgerät für einen Trägerkörper zur Herstellung einer ersten Leinenverbindung. c) Die Verwendung als Startpistole ist im Rahmen von Regatten erlaubt, wenn eine Schießerlaubnis vorliegt",
     "en_q":"For what purpose, besides signaling, can the “signal weapon” in caliber 4 (26.5 mm) be used?",
     "en_a":"a) On New Year's Eve to launch beacon fireworks. b) As a launcher for a carrier body to produce a first line connection. c) Use as a starting pistol is permitted in regattas if a shooting permit is available",
     "ru_q":"С какой целью, кроме сигнализации, можно использовать «сигнальное оружие» калибра 4 (26,5 мм)?",
     "ru_a":"a) В канун Нового года запустить фейерверк с маяком. b) В качестве пусковой установки для несущего корпуса для создания соединения первой линии. c) Использование в качестве стартового пистолета разрешено на регатах при наличии разрешения на стрельбу.",
     "c":"bc"
  },
  {
     "id":"IV.11",
     "de_q":"Wann sind Rauchsignale zu verwenden?",
     "de_a":"Nur am Tag und erst wenn Hilfe gesichtet worden ist.",
     "en_q":"When to use smoke signals",
     "en_a":"Only during the day and only when help has been seen.",
     "ru_q":"Когда использовать дымовые сигналы",
     "ru_a":"Только днем ​​и только тогда, когда будет оказана помощь.",
     "c":"x"
  },
  {
     "id":"IV.12",
     "de_q":"Welche Farbe ist bei Signalraketen international als Notsignal zu verwenden?",
     "de_a":"a) Rot b) Weiß c) Grün",
     "en_q":"Which color is to be used as an international emergency signal for signal rockets?",
     "en_a":"a) red b) white c) green",
     "ru_q":"Какой цвет будет использоваться в качестве международного аварийного сигнала для сигнальных ракет?",
     "ru_a":"a) красный b) белый c) зеленый",
     "c":"a"
  },
  {
     "id":"IV.13",
     "de_q":"Wann dürfen Notsignale verwendet werden?",
     "de_a":"a) In Notfällen, wenn unter anderem Leib und Leben von Personen in Gefahr sind und dringend fremde Hilfe benötigt wird. b) In Notfällen, wenn bedeutende Sachwerte in Gefahr sind und dringend fremde Hilfe benötigt wird. c) Ausschließlich wenn alle anderen Kommunikationsmittel ausgefallen sind.",
     "en_q":"When can emergency signals be used?",
     "en_a":"a) In emergencies when, among other things, the life and limb of people are in danger and external help is urgently required. b) In emergencies, when significant property is in danger and urgent outside help is needed. c) Only if all other means of communication have failed.",
     "ru_q":"Когда можно использовать аварийные сигналы?",
     "ru_a":"a) В чрезвычайных ситуациях, когда, помимо прочего, жизнь и здоровье людей находятся в опасности и срочно требуется внешняя помощь. b) В чрезвычайных ситуациях, когда значительная собственность находится в опасности и требуется срочная помощь извне. c) Только если все другие средства связи вышли из строя.",
     "c":"ab"
  },
  {
     "id":"IV.14",
     "de_q":"Wie lang ist die Verbrauchsdauer pyrotechnischer Notsignale bei sachgemäßer Lagerung?",
     "de_a":"a) Die Verbrauchsdauer ist unbegrenzt. b) Soweit auf dem einzelnen Gegen stand nichts anderes vermerkt ist, max. 3 Jahre. c) Maximal 10 Jahre",
     "en_q":"How long is the usage period of pyrotechnic emergency signals when properly stored?",
     "en_a":"a) The usage time is unlimited. b) Unless otherwise noted on the individual item, a maximum of 3 years. c) A maximum of 10 years",
     "ru_q":"Как долго длится срок использования пиротехнических аварийных сигналов при правильном хранении?",
     "ru_a":"a) Время использования не ограничено. b) Если иное не указано по отдельности, максимум 3 года. c) Максимум 10 лет",
     "c":"b"
  },
  {
     "id":"IV.15",
     "de_q":"Was verkürzt die durch den Hersteller vorgegebene Verbrauchsdauer pyrotechnischer Notsignale oder beeinträchtigt ihre sichere Verwendung?",
     "de_a":"a) Feuchtigkeit und Korrosion b) hohe Lagertemperaturen c) mechanische Beschädigung",
     "en_q":"What shortens the duration of use of pyrotechnic emergency signals specified by the manufacturer or impairs their safe use?",
     "en_a":"a) moisture and corrosion b) high storage temperatures c) mechanical damage",
     "ru_q":"Что сокращает продолжительность использования пиротехнических аварийных сигналов, указанных производителем, или препятствует их безопасному использованию?",
     "ru_a":"a) влажность и коррозия b) высокие температуры хранения c) механические повреждения",
     "c":"abc"
  },
  {
     "id":"IV.16",
     "de_q":"Was machen Sie mit überlagerten pyrotechnischen Notsignalen?",
     "de_a":"a) Können über den Hausmüll entsorgt werden. b) Über den Munitionshandel zurückgeben oder Delaborierbetrieben übergeben. c) Können auch als Feuerwerkskörper verwenden werden.",
     "en_q":"What do you do with superimposed pyrotechnic emergency signals?",
     "en_a":"a) Can be disposed of with household waste. b) Return via the ammunition trade or handover to dismantling companies. c) Can also be used as fireworks.",
     "ru_q":"Что вы делаете с наложенными пиротехническими сигналами тревоги?",
     "ru_a":"a) Можно утилизировать вместе с бытовыми отходами. b) Возврат через торговлю боеприпасами или передачу демонтажным компаниям. c) Может также использоваться как фейерверк.",
     "c":"b"
  },
  {
     "id":"IV.17",
     "de_q":"Wie lange dürfen Sie Signalmunition verwenden?",
     "de_a":"a) Drei Jahre ab Kauf im Fachhandel. b) Fünf Jahre ab Herstellung im Werk. c) Das Verfallsdatum ist auf der Munition und/oder der Verpackung angebracht.",
     "en_q":"How long can you use signal ammunition?",
     "en_a":"a) Three years from purchase from a specialist retailer. b) Five years from manufacture in the factory. c) The expiry date is indicated on the ammunition and / or the packaging.",
     "ru_q":"Как долго можно использовать сигнальные боеприпасы?",
     "ru_a":"a) Три года с момента покупки в специализированном магазине. b) Пять лет с момента изготовления на заводе. c) Срок годности указан на боеприпасе и / или упаковке.",
     "c":"c"
  },
  {
     "id":"IV.18",
     "de_q":"Wie darf Signalmunition entsorgt werden?",
     "de_a":"a) Durch Rückgabe an den Fachhandel. b) Durch Abgabe bei einer Sondermüll und Gefahrstoffsammelstelle. c) Öffnen der Patrone, Durchfeuchten des Inhaltes mit Wasser, dann wie b).",
     "en_q":"How can signal ammunition be disposed of?",
     "en_a":"a) By returning it to a specialist retailer. b) By submitting it to a hazardous waste and hazardous material collection point. c) Open the cartridge, moisten the contents with water, then as b).",
     "ru_q":"Как можно утилизировать сигнальные боеприпасы?",
     "ru_a":"a) Вернув его в специализированный магазин. b) Сдавая его в пункт сбора опасных отходов и опасных материалов. c) Откройте картридж, смочите содержимое водой, затем как b).",
     "c":"a"
  },
  {
     "id":"IV.19",
     "de_q":"Wie ist pyrotechnische Munition während der Liegezeit im Hafen zu lagern?",
     "de_a":"a) Keine bestimmte Lagerung erforderlich. b) Möglichst originalverpackt, kühl und trocken in einem Metallbehältnis mit Schwenkriegelschloss. c) Die Munition darf keinesfalls an Bord gelagert werden.",
     "en_q":"How should pyrotechnic ammunition be stored while in port?",
     "en_a":"a) No specific storage required. b) If possible in the original packaging, cool and dry in a metal container with a swing bolt lock. c) Under no circumstances may the ammunition be stored on board.",
     "ru_q":"Как следует хранить пиротехнические боеприпасы в порту?",
     "ru_a":"a) Специального хранилища не требуется. b) По возможности, в оригинальной упаковке, охладите и просушите в металлическом контейнере с поворотным ригелем. c) Ни при каких обстоятельствах нельзя хранить боеприпасы на борту.",
     "c":"b"
  },
  {
     "id":"IV.20",
     "de_q":"Wie ist an Bord eines seegehenden Schiffes im Hafen eine Signalpistole im Kaliber 4 (26,5 mm) aufzubewahren?",
     "de_a":"a) In einem mit dem Schiffskörper sicher verankertem Behältnis aus Stahlblech. Die Tür muss mindestens 4mm dick und elektronisch oder mechanisch verriegelt sein (sog. Hamburger Kasten). b) Die Signalpistole kann frei zugänglich an Bord gelagert werden. c) Die Signalpistole darf keinesfalls an Bord gelagert werden.",
     "en_q":"How is a 4 caliber (26.5 mm) signal pistol to be stored on board a seagoing ship in port?",
     "en_a":"a) In a container made of sheet steel that is securely anchored to the hull of the ship. The door must be at least 4mm thick and locked electronically or mechanically (so-called Hamburg box). b) The signal pistol can be stored freely accessible on board. c) The signal pistol must never be stored on board.",
     "ru_q":"Как можно хранить сигнальный пистолет 4 калибра (26,5 мм) на борту морского судна в порту?",
     "ru_a":"a) В контейнере из листовой стали, который надежно прикреплен к корпусу судна. Дверь должна быть толщиной не менее 4 мм и запираться электронным или механическим способом (так называемый гамбургский ящик). b) Сигнальный пистолет можно хранить в свободном доступе на борту. c) Сигнальный пистолет никогда не должен храниться на борту.",
     "c":"a"
  },
  {
     "id":"IV.21",
     "de_q":"Wem kann zum Zweck der sicheren Aufbewahrung an Land die Signalpistole im Kaliber 4 (26,5 mm) übergeben werden?",
     "de_a":"a) Einer Person mit bestandener Sachkundeprüfung. b) Nur einem Berechtigten, z.B. mit Waffenbesitzkarte. c) Einer zuverlässigen Person, die mindestens 18 Jahre alt ist.",
     "en_q":"To whom can the 4 caliber (26.5 mm) signal pistol be given for safe storage on land?",
     "en_a":"a) A person who has passed the technical examination. b) Only one authorized person, e.g. with a weapon possession card. c) A reliable person who is at least 18 years old.",
     "ru_q":"Кому можно передать сигнальный пистолет 4 калибра (26,5 мм) для безопасного хранения на суше?",
     "ru_a":"a) Лицо, сдавшее технический экзамен. b) Только одно уполномоченное лицо, например, с картой владения оружием. c) Надежный человек, которому исполнилось 18 лет.",
     "c":"b"
  },
  {
     "id":"IV.22",
     "de_q":"Wie ist an Land eine Signalpistole im Kaliber 4 (26,5 mm) aufzubewahren?",
     "de_a":"a) In einem Behältnis der Sicherheitsstufe A (VDMA 24992). b) In einem Behältnis der Sicherheitsstufe DIN/EN 1143-1 Widerstandsgrad 0 oder I. Bei Fortführung einer Nutzung eines Behältnisses der Sicherheitsstufe B nach VDMA 24992, die vor dem 06.07.2017 begründet werden, kann dieses Behältnis weitergenutzt werden. c) In einem Stahlblechschrank mit Schwenkriegelschloss.",
     "en_q":"How should a 4 caliber (26.5 mm) signal pistol be stored on land?",
     "en_a":"a) In a container of security level A (VDMA 24992). b) In a container of security level DIN / EN 1143-1 resistance grade 0 or I. If you continue to use a container of security level B according to VDMA 24992, which was established before July 6, 2017, this container can continue to be used. c) In a sheet steel cabinet with a swing bolt lock.",
     "ru_q":"Как следует хранить сигнальный пистолет 4 калибра (26,5 мм) на суше?",
     "ru_a":"a) В контейнере уровня безопасности A (VDMA 24992). b) В контейнере с уровнем безопасности DIN / EN 1143-1, степень устойчивости 0 или I. Если вы продолжите использовать контейнер с уровнем безопасности B в соответствии с VDMA 24992, который был установлен до 07.06.2017, этот контейнер может быть продолжен. быть использованным. c) В шкафу из листовой стали с поворотным ригелем.",
     "c":"b"
  },
  {
     "id":"IV.23",
     "de_q":"Wie ist eine Signalpistole im Kaliber 4 (26,5 mm) aufzubewahren, wenn sich die Yacht im Winterlager befindet?",
     "de_a":"a) Eine Aufbewahrung an Bord ist nur mit einer speziellen behördlichen Erlaubnis möglich. b) Eine Aufbewahrung an Land in einem Behältnis der Sicherheitsstufe DIN/EN 1143-1 Widerstandsgrad 0 oder I. Bei Fortführung einer Nutzung eines Behältnisses der Sicherheitsstufe B nach VDMA 24992, die vor dem 06.07.2017 begründet werden, kann dieses Behältnis weitergenutzt werden. c) In einem Stahlblechschrank mit Schwenkriegelschloss.",
     "en_q":"How should a 4 (26.5 mm) caliber signal pistol be stored when the yacht is in winter storage?",
     "en_a":"a) Storage on board is only possible with a special official permit. b) Storage on land in a container of security level DIN / EN 1143-1 resistance grade 0 or I. If you continue to use a container of security level B according to VDMA 24992, which was established before July 6, 2017, this container can continue to be used will. c) In a sheet steel cabinet with a swing bolt lock.",
     "ru_q":"Как хранить сигнальный пистолет калибра 4 (26,5 мм), когда яхта находится на зимнем хранении?",
     "ru_a":"a) Хранение на борту возможно только при наличии специального официального разрешения. b) Хранение на суше в контейнере с уровнем безопасности DIN / EN 1143-1, степень устойчивости 0 или I. Если вы продолжите использовать контейнер с уровнем безопасности B в соответствии с VDMA 24992, который был установлен до 6 июля 2017 года, этот контейнер может и дальше будет использоваться будет. c) В шкафу из листовой стали с замком с поворотным ригелем.",
     "c":"ab"
  },
  {
     "id":"IV.24",
     "de_q":"Wie ist an Land erlaubnispflichtige Munition aufzubewahren?",
     "de_a":"a) Munition darf nicht an Land aufbewahrt werden. b) Es gibt keine Auflagen für die Aufbewahrung von pyrotechnischer Munition. c) Mindestens in einem Stahlblechbehältnis (klassifizierungsfrei), das mit einem Schwenkriegelschloss oder einem gleichwertigen Verschluss gesichert ist, oder in einem gleichwertigen Behältnis.",
     "en_q":"How should ammunition requiring a permit be stored on land?",
     "en_a":"a) Ammunition may not be stored on land. b) There are no requirements for the storage of pyrotechnic ammunition. c) At least in a sheet steel container (no classification), which is secured with a swivel bolt lock or an equivalent lock, or in an equivalent container.",
     "ru_q":"Как следует хранить боеприпасы, требующие разрешения, на суше?",
     "ru_a":"a) Боеприпасы нельзя хранить на суше. b) Нет требований к хранению пиротехнических боеприпасов. c) По крайней мере, в контейнере из листовой стали (без классификации), который фиксируется поворотным болтом или аналогичным замком, или в эквивалентном контейнере.",
     "c":"c"
  },
  {
     "id":"IV.25",
     "de_q":"Warum sollte pyrotechnische Munition möglichst original verpackt gelagert werden?",
     "de_a":"Diese Verpackungen sind in der Regel wasserdicht und schwimmfähig.",
     "en_q":"Why should pyrotechnic ammunition be stored in their original packaging, if possible?",
     "en_a":"This packaging is usually waterproof and floatable.",
     "ru_q":"Почему пиротехнические боеприпасы по возможности следует хранить в оригинальной упаковке?",
     "ru_a":"Эта упаковка обычно водонепроницаемая и плавучая.",
     "c":"x"
  },
  {
     "id":"IV.26",
     "de_q":"Wie ist die Signalmunition während der Fahrt zu lagern?",
     "de_a":"a) Wie bei einem längeren Aufenthalt im Hafen. b) Zugriffsbereit in der Nähe der Signalwaffe. c) Nicht zugriffsbereit, in größerer Entfernung zur Signalwaffe.",
     "en_q":"How should the signal ammunition be stored while driving?",
     "en_a":"a) As with a longer stay in port. b) Ready to access near the signal weapon. c) Not accessible, at a greater distance from the signal weapon.",
     "ru_q":"Как хранить сигнальные боеприпасы во время движения?",
     "ru_a":"a) Как при более длительном пребывании в порту. b) Готовность к доступу возле сигнального оружия. c) Недоступен на большем расстоянии от сигнального оружия.",
     "c":"b"
  },
  {
     "id":"IV.27",
     "de_q":"Wozu berechtigt eine Waffenbesitzkarte (ausgestellt für das Bedürfnis als Inhaber eines seegehenden Schiffes)?",
     "de_a":"a) Mit entsprechendem Voreintrag zum Erwerb, sowie zum Besitz einer Signalpistole. b) Zum Führen der Waffe an Land. c) Zum Erwerb der zur Signalpistole gehörigen Munition bei entsprechendem Eintrag.",
     "en_q":"What does a weapons possession card entitle you to (issued for the needs of the owner of a seagoing ship)?",
     "en_a":"a) With a corresponding pre-entry for the acquisition and possession of a signal pistol. b) For carrying the weapon ashore. c) To purchase the ammunition belonging to the signal pistol with the appropriate entry.",
     "ru_q":"На что дает карта владения оружием (выдается для нужд владельца морского судна)?",
     "ru_a":"a) С соответствующей предварительной записью на приобретение и хранение сигнального пистолета. b) для выноса оружия на берег. c) Приобрести боеприпасы к сигнальному пистолету с соответствующей записью.",
     "c":"ac"
  },
  {
     "id":"IV.28",
     "de_q":"Wo ist eine Waffenbesitzkarte für Inhaber von seegehenden Schiffen zu beantragen?",
     "de_a":"Bei der zuständigen Behörde des Wohnortes (nicht des Liegeplatzes).",
     "en_q":"Where can I apply for a gun license for owners of seagoing vessels?",
     "en_a":"At the competent authority of the place of residence (not of the berth).",
     "ru_q":"Где я могу подать заявление на получение лицензии на владение оружием для владельцев морских судов?",
     "ru_a":"В компетентном органе по месту жительства (не у причала).",
     "c":"x"
  },
  {
     "id":"IV.29",
     "de_q":"Welche Signalwaffen darf der Inhaber eines Kleinen Waffenscheins führen?",
     "de_a":"a) Alle b) Nur amtlich beschossene Signalwaffen im Kaliber unter 12 mm. c) Nur Signalwaffen mit dem Zulassungszeichen „PTB im Kreis“.",
     "en_q":"Which signal weapons may the holder of a small gun license carry?",
     "en_a":"a) All b) Only officially fired signal weapons with a caliber of less than 12 mm. c) Only signal weapons with the approval mark “PTB in a circle”.",
     "ru_q":"Какое сигнальное оружие может иметь при себе обладатель лицензии на стрелковое оружие?",
     "ru_a":"a) Все b) Только официально стреляющее сигнальное оружие калибром менее 12 мм. c) Только сигнальное оружие со знаком официального утверждения «ПТБ по кругу».",
     "c":"c"
  },
  {
     "id":"IV.30",
     "de_q":"Was haben Sie nach dem Erwerb einer erlaubnispflichtigen Signalpistole zu tun?",
     "de_a":"a) Innerhalb von 2 Wochen nach dem Erwerb habe ich der zuständigen Behörde den Erwerb schriftlich oder in elektronischer Form anzuzeigen. b) Waffenbesitzkarte der zuständigen Behörde zur Eintragung des Erwerbs mit entsprechenden Erwerbsnachweisen (Kaufvertrag, Überlassungsvertrag etc.) vorlegen. c) Es ist keine weitere Handlung erforderlich.",
     "en_q":"What do you have to do after purchasing a signal pistol that requires a license?",
     "en_a":"a) I have to notify the competent authority of the purchase in writing or in electronic form within 2 weeks of the purchase. b) Submit a weapon possession card to the competent authority for the entry of the acquisition with corresponding proof of acquisition (purchase contract, transfer agreement, etc.). c) No further action is required.",
     "ru_q":"Что делать после покупки сигнального пистолета, требующего лицензии?",
     "ru_a":"a) Я должен уведомить компетентный орган о покупке в письменной или электронной форме в течение 2 недель с момента покупки. b) Предоставьте в компетентный орган карточку владения оружием для регистрации приобретения с соответствующим доказательством приобретения (договор купли-продажи, договор передачи и т. д.). c) Никаких дополнительных действий не требуется.",
     "c":"ab"
  },
  {
     "id":"IV.31",
     "de_q":"Welche Signalwaffen können frei erworben und an Bord mitgeführt werden?",
     "de_a":"Signalwaffen (SRS-Waffen) mit dem Bauartzulassungszeichen der Physikalisch-Technischen Bundesanstalt („PTB im Kreis“).",
     "en_q":"Which signal weapons can be freely purchased and carried on board?",
     "en_a":"Signal weapons (SRS weapons) with the type approval mark of the Physikalisch-Technische Bundesanstalt ('PTB im Kreis').",
     "ru_q":"Какое сигнальное оружие можно бесплатно купить и носить на борту?",
     "ru_a":"Сигнальное оружие (оружие SRS) со знаком утверждения типа Physikalisch-Technische Bundesanstalt ('PTB im Kreis').",
     "c":"x"
  },
  {
     "id":"IV.32",
     "de_q":"Welche Voraussetzungen müssen gegeben sein, um eine Waffenbesitzkarte für eine Signalpistole, Kaliber 4 (26,5 mm), erwerben zu können?",
     "de_a":"a) Der Antragsteller muss das 18. Lebensjahr vollendet haben. b) Der Antragsteller muss zuverlässig, sachkundig und persönlich geeignet sein, und ein amts- oder fachärztliches oder fachpsychologisches Zeugnis vorlegen, sofern das 25. Lebensjahr noch nicht vollendet ist. c) Es muss ein Bedürfnis vorliegen (Inhaber eines seegängigen Wasserfahrzeugs).",
     "en_q":"What requirements must be met in order to be able to acquire a weapon possession card for a signal pistol, caliber 4 (26.5 mm)?",
     "en_a":"a) The applicant must be over 18 years of age. b) The applicant must be reliable, knowledgeable and personally suitable, and submit an official or specialist medical or specialist psychological certificate if they are under 25 years of age. c) There must be a need (owner of a seaworthy watercraft).",
     "ru_q":"Какие требования должны быть выполнены, чтобы иметь возможность получить карточку владения оружием для сигнального пистолета калибра 4 (26,5 мм)?",
     "ru_a":"a) Заявитель должен быть старше 18 лет. b) Заявитель должен быть надежным, хорошо осведомленным и подходящим для себя лично, и должен предоставить официальное или специализированное медицинское или специализированное психологическое свидетельство, если он моложе 25 лет. c) Должна быть потребность (владелец мореходного судна).",
     "c":"abc"
  },
  {
     "id":"IV.33",
     "de_q":"Wie kann ein Wassersportler nachweisen, dass ein Bedürfnis für den Erwerb einer Signalpistole vorliegt?",
     "de_a":"a) Durch Vorlage von Unterlagen, aus denen der Besitz eines seegängigen Wasserfahrzeugs (Kaufvertrag, Chartervertrag, Versicherungspolice, Standerschein, Internationaler Boots schein usw.) b) Durch Vorlage eines Sportbootführerscheins. c) Durch Vorlage von Unterlagen, aus denen die Notwendigkeit für Lehr- und Prüfungszwecke hervorgeht.",
     "en_q":"How can a water sports enthusiast prove that there is a need to purchase a signal pistol?",
     "en_a":"a) By submitting documents showing the ownership of a seaworthy watercraft (purchase contract, charter contract, insurance policy, stand license, international boating license, etc.) b) By submitting a pleasure boat driver's license. c) By submitting documents showing the need for teaching and examination purposes.",
     "ru_q":"Как любителю водных видов спорта доказать необходимость покупки сигнального пистолета?",
     "ru_a":"a) путем предоставления документов, подтверждающих владение плавсредством (договор купли-продажи, договор фрахтования, страховой полис, лицензия на стоянку, международное водное удостоверение и т. д.); b) путем предоставления водительского удостоверения прогулочного катера. c) путем подачи документов, подтверждающих необходимость обучения и проведения экзаменов.",
     "c":"ac"
  },
  {
     "id":"IV.34",
     "de_q":"Welche amtlichen Dokumente berechtigen zum Erwerb von erlaubnispflichtiger pyrotechnischer Munition?",
     "de_a":"a) Die Waffenbesitzkarte mit entsprechender Munitionserwerbsberechtigung. b) Ein entsprechender Munitionserwerbsschein. c) Ein Kleiner Waffenschein.",
     "en_q":"Which official documents entitle the holder to purchase pyrotechnic ammunition that requires a license?",
     "en_a":"a) The gun ownership card with the corresponding ammunition purchase authorization. b) A corresponding ammunition advertising license. c) A small gun license.",
     "ru_q":"Какие официальные документы дают право владельцу приобретать пиротехнические боеприпасы, требующие лицензии?",
     "ru_a":"a) Карточка владения оружием с соответствующим разрешением на покупку боеприпасов. b) Соответствующая лицензия на рекламу боеприпасов. c) Лицензия на стрелковое оружие.",
     "c":"ab"
  },
  {
     "id":"IV.35",
     "de_q":"Welche pyrotechnischen Seenotsignale können erlaubnisfrei erworben, aufbewahrt und verwendet werden von Personen, die das 18. Lebensjahr vollendet haben?",
     "de_a":"a) Die der Unterklasse P1, d.h. „Handfackeln rot“ und bestimmte Rauchsigna le, Abschussgeräte ohne Schusswaffeneigenschaft. b) Seenotsignalgeber mit einer Steighöhe von bis etwa 60 Metern (Signalgeber und ihre Munition, die nicht dem WaffG unterliegen) c) Die der Unterklasse T2, d.h. „Signalraketen rot“, „Fallschirmsignalraketen rot“ und bestimmte Rauchsignale.",
     "en_q":"Which pyrotechnic distress signals can be acquired, stored and used without permission by people over the age of 18?",
     "en_a":"a) Those of subclass P1, i.e. “hand torches, red” and certain smoke signals, launchers without firearm properties. b) Distress signaling devices with a height of up to 60 meters (signaling devices and their ammunition which are not subject to the WaffG) c) Those of subclass T2, i.e. 'red signal rockets', 'red parachute signal rockets' and certain smoke signals.",
     "ru_q":"Какие пиротехнические сигналы бедствия могут быть получены, сохранены и использованы без разрешения людьми старше 18 лет?",
     "ru_a":"a) Те из подкласса P1, то есть «ручные фонари красные» и некоторые дымовые сигналы, пусковые установки без свойств огнестрельного оружия. b) Устройства сигнализации бедствия с высотой до 60 метров (сигнальные устройства и боеприпасы к ним, которые не подпадают под действие WaffG) c) Устройства подкласса T2, то есть «красные сигнальные ракеты», «красные парашютные сигнальные ракеты» и определенная дымность. сигналы.",
     "c":"ab"
  },
  {
     "id":"IV.36",
     "de_q":"Welche erlaubnispflichtigen pyrotechnischen Seenotsignale dürfen Wassersportler mit einem im Führer schein eingedruckten Befreiungsvermerk bzw. Sachkundenachweis erwerben?",
     "de_a":"Die der Unterklasse P2, d.h. „Signalraketen rot“, „Fallschirmsignalraketen rot“ und bestimmte Rauchsignale.",
     "en_q":"Which pyro technical distress signals requiring a permit may water sports enthusiasts acquire with an exemption note or certificate of competence printed on the driver's license?",
     "en_a":"Those of subclass P2, i.e. 'red signal rockets', 'red parachute signal rockets' and certain smoke signals.",
     "ru_q":"Какие пиротехнические сигналы бедствия, требующие разрешения, могут получить любители водных видов спорта с отметкой об освобождении или свидетельством о компетентности, напечатанным на водительских правах?",
     "ru_a":"Те из подкласса P2, то есть «красные сигнальные ракеты», «красные парашютные сигнальные ракеты» и определенные дымовые сигналы.",
     "c":"x"
  },
  {
     "id":"IV.37",
     "de_q":"Bis zu welchem Alter ist vom Antragsteller auf erstmalige Erteilung einer waffenrechtlichen Genehmigung zum Erwerb einer Signalpistole Kaliber 4 (26,5 mm) stets ein ärztliches oder fachpsychologisches Zeugnis beizubringen?",
     "de_a":"Bis zur Vollendung des 25. Lebensjahres.",
     "en_q":"Up to what age does the applicant always have to provide a medical or psychological certificate for the initial issuance of a gun license to purchase a 4 caliber signal pistol (26.5 mm)?",
     "en_a":"Until the age of 25.",
     "ru_q":"До какого возраста заявитель всегда должен предоставить медицинское или психологическое свидетельство для первоначальной выдачи лицензии на оружие для покупки сигнального пистолета 4 калибра (26,5 мм)?",
     "ru_a":"До 25 лет.",
     "c":"x"
  },
  {
     "id":"IV.38",
     "de_q":"Darf mit einem Bootsführerschein mit eingetragenem Befreiungsvermerk nach dem Waffen- und Sprengstoffgesetz Seenotsignalmunition im Kaliber 4 erworben werden?",
     "de_a":"a) Nein, hierfür ist eine Waffenbesitzkarte mit eingetragener Munitionserwerbsberechtigung für das Kaliber 4 erforderlich. b) Nein, hierfür ist eine Waffenbesitzkarte mit einer eingetragenen Signalwaffe im Kaliber 4 erforderlich. c) Ja, die Waffenbesitzkarte wird nur für den Waffenerwerb benötigt und dient als Legitimation für den Waffenbesitz.",
     "en_q":"Can sea distress signal ammunition in caliber 4 be purchased with a boating license with a registered exemption note in accordance with the Arms and Explosives Act?",
     "en_a":"a) No, this requires a gun ownership card with registered ammunition marketing authorization for caliber 4. b) No, this requires a gun ownership card with a registered 4-caliber signal gun. c) Yes, the weapon possession card is only required for the acquisition of weapons and serves as a legitimation for the weapon possession.",
     "ru_q":"Могут ли боеприпасы для сигналов бедствия на море калибра 4 быть приобретены с лицензией на плавание с зарегистрированным примечанием об исключении в соответствии с Законом об оружии и взрывчатых веществах?",
     "ru_a":"a) Нет, для этого требуется карточка владельца оружия с зарегистрированным разрешением на продажу боеприпасов для калибра 4. b) Нет, для этого требуется карточка владельца оружия с зарегистрированным сигнальным пистолетом 4-го калибра. c) Да, карта владения оружием требуется только для приобретения оружия и служит для подтверждения владения оружием.",
     "c":"a"
  },
  {
     "id":"IV.39",
     "de_q":"Welches ist das Zulassungszeichen für pyrotechnische Munition nach § 10 BeschG?",
     "de_a":"a) PTB im Kreis (Physikalisch Technischen Bundesanstalt) b) BAM-Zeichen (Bundesanstalt für Materialforschung und prüfung) c) Bundesadler, B (Böllerbeschuss)",
     "en_q":"What is the approval mark for pyrotechnic ammunition according to § 10 BeschG?",
     "en_a":"a) PTB in a circle (Physikalisch Technische Bundesanstalt) b) BAM mark (Federal Institute for Material Research and Testing) c) Federal eagle, B (gun fire)",
     "ru_q":"Какой знак официального утверждения пиротехнических боеприпасов согласно § 10 BeschG?",
     "ru_a":"a) PTB в круге (Physikalisch Technische Bundesanstalt) b) Знак BAM (Федеральный институт исследований и испытаний материалов) c) Федеральный орел, B (огнестрельное оружие)",
     "c":"b"
  },
  {
     "id":"IV.40",
     "de_q":"Neben dem Zulassungszeichen (BAM) folgt zusätzlich eine Klasseneinteilung. Welche Klassen gibt es?",
     "de_a":"a) P 1 (Bsp.: Handfackeln) b) SM 1 (Signalmunition der Klasse 1) c) P 2 (Bsp.: Signalraketen bzw. Fallschirmsignalraketen mit einer Steighöhe von bis zu 300 Metern)",
     "en_q":"In addition to the approval mark (BAM), there is also a classification. What classes are there?",
     "en_a":"a) P 1 (e.g. hand flares) b) SM 1 (signal ammunition of class 1) c) P 2 (e.g. signal rockets or parachute signal rockets with a climbing height of up to 300 meters)",
     "ru_q":"Помимо знака официального утверждения (БАМ) существует еще классификация. Какие есть классы?",
     "ru_a":"a) P 1 (например, ручные ракеты) b) SM 1 (сигнальные боеприпасы класса 1) c) P 2 (например, сигнальные ракеты или парашютные сигнальные ракеты с высотой набора высоты до 300 метров)",
     "c":"ac"
  },
  {
     "id":"IV.41",
     "de_q":"Nennen Sie sechs pyrotechnische Notsignale!",
     "de_a":"1. Signalraketen, rot 2. Fallschirmsignalraketen, rot 3. Handfackeln, rot 4. Rauchsignale, orange 5. Lichtrauchsignale 6. Blitz-Knall-Patronen",
     "en_q":"Name six pyrotechnic emergency signals!",
     "en_a":"1. Signal rockets, red 2. Parachute signal rockets, red 3. Hand flares, red 4. Smoke signals, orange 5. Light smoke signals 6. Lightning-bang cartridges",
     "ru_q":"Назовите шесть пиротехнических аварийных сигналов!",
     "ru_a":"1. Сигнальные ракеты, красный 2. Парашютные сигнальные ракеты, красный 3. Ручные ракеты, красный 4. Дымовые сигналы, оранжевый 5. Легкие дымовые сигналы 6. Молниеносные патроны.",
     "c":"x"
  },
  {
     "id":"IV.42",
     "de_q":"Welche Farben haben pyrotechnische Notsignale?",
     "de_a":"a) Leuchtsignale rot b) Rauchsignale orange c) Leuchtsignal gelb",
     "en_q":"What colors are pyrotechnic emergency signals?",
     "en_a":"a) Red light signals b) Orange smoke signals c) Yellow light signal",
     "ru_q":"Какого цвета пиротехнические аварийные сигналы?",
     "ru_a":"a) Красные световые сигналы b) Оранжевые дымовые сигналы c) Желтые световые сигналы",
     "c":"ab"
  },
  {
     "id":"IV.43",
     "de_q":"Was ist bei allen steigenden Seenotsignalen unbedingt zu beachten?",
     "de_a":"1. Auf freies Schussfeld achten (z.B. Mast und Segel), 2. Signalgerät senkrecht (ggf. in den Wind geneigt) nach oben halten, 3. beim Handhaben und Abfeuern nicht auf Personen richten und selbst nicht mit Körperteilen oder Kleidung vor die Mündung kommen, 4. nicht an Versagern hantieren, sondern diese über Bord werfen.",
     "en_q":"What do you have to pay attention to with all rising distress signals?",
     "en_a":"1. Pay attention to a free field of fire (e.g. mast and sails), 2. Hold the signal device vertically (if necessary inclined into the wind) upwards, 3. Do not point at people when handling or firing, and do not even put body parts or clothing in front of the muzzle come, 4. do not handle failures, but throw them overboard.",
     "ru_q":"На что вы должны обращать внимание при всех возрастающих сигналах бедствия?",
     "ru_a":"1. Обращайте внимание на свободное поле огня (например, мачту и паруса), 2. Держите сигнальное устройство вертикально (при необходимости, наклоненным против ветра) вверх, 3. Не указывайте на людей при обращении или стрельбе, и даже не положить части тела или одежду перед дулом, 4. не справляться с неисправностями, а выбрасывать их за борт.",
     "c":"x"
  },
  {
     "id":"IV.44",
     "de_q":"Was ist bei steigenden Notsignalen zu beachten?",
     "de_a":"a) freies Schussfeld b) Windrichtung und Abschusswinkel c) keine entflammbaren Gegenstände im Gefahrenbereich",
     "en_q":"What should you watch out for when the emergency signals rise?",
     "en_a":"a) free field of fire b) wind direction and angle of fire c) no flammable objects in the danger area",
     "ru_q":"На что следует обращать внимание при повышении сигнала экстренной помощи?",
     "ru_a":"a) свободное поле огня b) направление ветра и угол огня c) отсутствие легковоспламеняющихся предметов в опасной зоне",
     "c":"abc"
  },
  {
     "id":"IV.45",
     "de_q":"Welche Vorteile haben Signalraketen bzw. Signalpatronen, die mit Fall schirmen ausgerüstet sind, gegenüber Signalsternen?",
     "de_a":"Auf Grund geringerer Sinkgeschwindigkeit (5 m/s) ist eine längere Sichtbarkeit/ Brenndauer möglich; dadurch haben sie einen höheren Aufmerksamkeitswert.",
     "en_q":"What are the advantages of signal rockets or signal cartridges equipped with parachutes over signal stars?",
     "en_a":"Due to the lower sink rate (5 m / s), longer visibility / burning time is possible; this gives them a higher level of attention.",
     "ru_q":"В чем преимущества сигнальных ракет или сигнальных патронов, оснащенных парашютами, перед сигнальными звездами?",
     "ru_a":"Из-за меньшей скорости снижения (5 м / с) возможно большее время видимости / горения; это дает им более высокий уровень внимания.",
     "c":"x"
  },
  {
     "id":"IV.46",
     "de_q":"Woraufhin sind pyrotechnische Seenotsignale ständig zu überwachen, damit die Funktionsfähigkeit gewährleistet ist?",
     "de_a":"a) Verbrauchsdauer/Verfallsdatum beachten. b) Auf Korrosion oder Beschädigung prüfen.",
     "en_q":"Whereupon must pyrotechnic sea distress signals be constantly monitored so that functionality is guaranteed?",
     "en_a":"a) Observe the usage time / expiry date. b) Check for corrosion or damage.",
     "ru_q":"В этой связи необходимо постоянно контролировать пиротехнические сигналы бедствия на море, чтобы гарантировать их функциональность?",
     "ru_a":"a) Соблюдайте время использования / срок годности. b) Проверьте на предмет коррозии или повреждений.",
     "c":"ab"
  },
  {
     "id":"IV.47",
     "de_q":"Mit welchen Zeichen ist Notsignalmunition im Kaliber 4 gekennzeichnet?",
     "de_a":"1. Bezeichnung der Munition und der Verbrauchsdauer. 2. Bei „Notsignalen rot“ durchgehende Rändelung des Patronenbodenrandes und roter Lackverschlussdeckel.",
     "en_q":"What symbols are used to identify emergency signal ammunition in caliber 4?",
     "en_a":"1. Designation of the ammunition and the duration of use. 2. In the case of 'red emergency signals', continuous edging of the cartridge base edge and red lacquer cap.",
     "ru_q":"Что такое боеприпасы аварийной сигнализации 4-го калибра?",
     "ru_a":"1. Обозначение боеприпаса и продолжительность использования. 2. В случае «красных аварийных сигналов» - сплошная окантовка края основания картриджа и красной лаковой крышки.",
     "c":"x"
  },
  {
     "id":"IV.48",
     "de_q":"Welche Steighöhe und Leuchtdauer haben Fallschirmsignalpatronen?",
     "de_a":"a) Steighöhe mindestens 300 m, Leuchtdauer mindestens 30 Sekunden. b) Steighöhe mindestens 100 m, Leuchtdauer mindestens 10 Sekunden. c) Steighöhe mindestens 50 m, Leuchtdauer mindestens 50 Sekunden.",
     "en_q":"What is the height and duration of the parachute signal cartridges?",
     "en_a":"a) Climbing height at least 300 m, lighting duration at least 30 seconds. b) Height of rise at least 100 m, lighting duration at least 10 seconds. c) Height of climb at least 50 m, lighting duration at least 50 seconds.",
     "ru_q":"Какова высота и срок службы сигнальных патронов парашюта?",
     "ru_a":"a) Высота набора высоты не менее 300 м, продолжительность освещения не менее 30 секунд. b) Высота подъема не менее 100 м, продолжительность освещения не менее 10 секунд. c) Высота набора высоты не менее 50 м, продолжительность освещения не менее 50 секунд.",
     "c":"a"
  },
  {
     "id":"IV.49",
     "de_q":"Woran erkennen Sie an einem pyrotechnischen Notsignal, um welche Unterklasse es sich handelt?",
     "de_a":"Am Zulassungszeichen: BAM-PT1 oder BAM-PT2.",
     "en_q":"How do you recognize which sub-class it is from a pyro technical emergency signal?",
     "en_a":"On the approval mark: BAM-PT1 or BAM-PT2.",
     "ru_q":"Как определить его подкласс по пиротехническому аварийному сигналу?",
     "ru_a":"О знаке официального утверждения: БАМ-ПТ1 или БАМ-ПТ2.",
     "c":"x"
  },
  {
     "id":"IV.50",
     "de_q":"Wer darf pyrotechnische Notsignale der Klasse T verwenden?",
     "de_a":"a) Jeder, der damit anzeigen will, dass ein Seenotfall vorliegt, d. h. unter anderem, dass Gefahr für Leib oder Leben der Besatzung und daher die Notwendigkeit zur Hilfe besteht. b) An Silvester dürfen die Signale uneingeschränkt verwendet werden. c) Jeder, der damit anzeigen will, dass ein Seenotfall vorliegt, obwohl keine Notwendigkeit zur Hilfe mehr besteht.",
     "en_q":"Who can use Class T pyrotechnic distress signals?",
     "en_a":"a) Anyone who wants to indicate that there is an emergency at sea, d. H. Among other things, there is a danger to life or limb of the crew and therefore the need for assistance. b) The signals can be used without restrictions on New Year's Eve. c) Anyone who wants to indicate that there is an emergency at sea, although there is no longer any need for help.",
     "ru_q":"Кто может использовать пиротехнические сигналы бедствия класса T?",
     "ru_a":"a) любой, кто хочет указать, что на море чрезвычайная ситуация, d. ЧАС. Помимо прочего, существует опасность для жизни или здоровья членов экипажа и, как следствие, необходимость в помощи. b) Сигналы можно использовать без ограничений в канун Нового года. c) Любой, кто хочет указать, что на море возникла чрезвычайная ситуация, хотя в помощи больше нет необходимости.",
     "c":"a"
  },
  {
     "id":"IV.51",
     "de_q":"Wie lang ist die Brenndauer einer Seenot-Handfackel?",
     "de_a":"a) 5-10 Sekunden b) 5 Minuten c) 30 bis 60 Sekunden",
     "en_q":"How long is the burning time of a distress hand torch?",
     "en_a":"a) 5-10 seconds b) 5 minutes c) 30 to 60 seconds",
     "ru_q":"Как долго длится горящий ручной фонарик?",
     "ru_a":"a) 5-10 секунд b) 5 минут c) 30-60 секунд",
     "c":"c"
  },
  {
     "id":"IV.52",
     "de_q":"Beschreiben Sie den allgemeinen Aufbau eines Seenot-Rauchsignals!",
     "de_a":"In einem Behälter befindet sich ein Anzünder (meist Reißzünder) mit Verzögerung, der einen pyrotechnischen Satz anzündet, der dann bis zu 4 Minuten lang orangefarbenen Rauch abgibt.",
     "en_q":"Describe the general structure of a distress smoke signal!",
     "en_a":"In a container there is a lighter (usually tear-off detonator) with a delay, which ignites a pyrotechnic charge, which then emits orange-colored smoke for up to 4 minutes.",
     "ru_q":"Опишите общую структуру дымового сигнала бедствия!",
     "ru_a":"В контейнере находится зажигалка (обычно отрывной детонатор) с задержкой, которая воспламеняет пиротехнический заряд, который затем испускает дым оранжевого цвета на срок до 4 минут.",
     "c":"x"
  },
  {
     "id":"IV.53",
     "de_q":"Fallschirmsignalraketen und Handfackeln sind bei klarem Wetter unter schiedlich weit zu sehen. Welche Aussage/n ist/sind richtig.",
     "de_a":"a) Fallschirmsignalraketen werden verwendet, um weit entfernte Helfer auf eine Notlage aufmerksam zu machen und grob in die Richtung einzuweisen. b) Handfackeln werden verwendet, um die genaue Position bei Annäherung kenntlich zu machen. c) Handfackeln sind ausschließlich Nachts zu verwenden.",
     "en_q":"Parachute signal rockets and handheld guns can be seen from different distances on a clear day. Which statement (s) is / are correct.",
     "en_a":"a) Parachute signal rockets are used to make distant helpers aware of an emergency and give them rough directions. b) Hand torches are used to indicate the exact position when approaching. c) Hand torches are only to be used at night.",
     "ru_q":"Сигнальные ракеты-парашюты и ручные пушки видны с разного расстояния в ясный день. Какие утверждения являются правильными.",
     "ru_a":"a) Сигнальные ракеты-парашюты используются для того, чтобы сообщить дальним помощникам о чрезвычайной ситуации и дать им приблизительное направление. b) Ручные фонари используются для указания точного положения при приближении. c) Ручные фонарики разрешается использовать только в ночное время.",
     "c":"ab"
  },
  {
     "id":"IV.54",
     "de_q":"Welche Angaben finden sich auf allen pyrotechnischen Signalpatronen im Kaliber 4 (26,5 mm)?",
     "de_a":"1. Hersteller bzw. Herstellerzeichen 2. Bezeichnung der Munition 3. Herstellungsjahr und Verbrauchsdauer 4. Art des pyrotechnischen Satzes",
     "en_q":"What information can be found on all pyrotechnic signal cartridges in caliber 4 (26.5 mm)?",
     "en_a":"1. Manufacturer or manufacturer's mark 2. Name of the ammunition 3. Year of manufacture and duration of use 4. Type of pyrotechnic charge",
     "ru_q":"Какую информацию можно найти на всех патронах пиротехнических сигналов калибра 4 (26,5 мм)?",
     "ru_a":"1. Изготовитель или марка изготовителя 2. Название боеприпаса 3. Год изготовления и продолжительность использования 4. Тип пиротехнического заряда",
     "c":"x"
  },
  {
     "id":"IV.55",
     "de_q":"Was bedeutet die Zahl „4“ bei der Kaliberangabe der Signalpistole?",
     "de_a":"a) Die Waffe verschießt Patronen mit einer Hülsenlänge von 4“ (Zoll). b) Die Waffe verschießt Munition mit einem Geschossdurchmesser von 4 cm. c) Die Zahl „4“ bezeichnet die Anzahl der Bleikugeln vom Laufdurchmesser, die zusammen ein englisches Pfund (453,6 Gramm) wiegen. Das entspricht einem Laufinnendurchmesser von ca. 26,5 mm.",
     "en_q":"What does the number “4” mean in the caliber specification of the signal pistol?",
     "en_a":"a) The weapon fires cartridges with a case length of 4 '(inches). b) The weapon fires ammunition with a projectile diameter of 4 cm. c) The number “4” denotes the number of lead bullets of the barrel diameter that together weigh one pound (453.6 grams). This corresponds to an inner barrel diameter of approx. 26.5 mm.",
     "ru_q":"Что означает цифра «4» в спецификации калибра сигнального пистолета?",
     "ru_a":"a) Оружие стреляет патронами с гильзой длиной 4 дюйма. b) Оружие стреляет боеприпасами с диаметром снаряда 4 см. c) Число «4» обозначает количество свинцовых пуль с диаметром ствола, которые вместе весят один фунт (453,6 грамма). Это соответствует внутреннему диаметру ствола примерно 26,5 мм.",
     "c":"c"
  },
  {
     "id":"IV.56",
     "de_q":"Wann muss eine Signalpistole durch ein Beschussamt erneut geprüft werden?",
     "de_a":"a) Alle 3 Jahre b) Alle 10 Jahre c) Wenn wesentliche Waffenteile ausgetauscht oder instand gesetzt wurden",
     "en_q":"When does a signal pistol have to be checked again by a fire department?",
     "en_a":"a) Every 3 years b) Every 10 years c) If essential weapon parts have been replaced or repaired",
     "ru_q":"Когда сигнальный пистолет должен быть снова проверен пожарной службой?",
     "ru_a":"a) Каждые 3 года b) Каждые 10 лет c) Если основные части оружия были заменены или отремонтированы",
     "c":"c"
  },
  {
     "id":"IV.57",
     "de_q":"Wie hoch steigen Seenotsignalraketen bei senkrechtem Abschusswinkel?",
     "de_a":"a) Bis zu 50 Metern b) Bis zu 300 Metern c) Bis zu 200 Metern",
     "en_q":"How high do distress signal rockets rise at a perpendicular launch angle?",
     "en_a":"a) Up to 50 meters b) Up to 300 meters c) Up to 200 meters",
     "ru_q":"Насколько высоко поднимаются ракеты-носители для сигналов бедствия при перпендикулярном угле пуска?",
     "ru_a":"a) до 50 метров b) до 300 метров c) до 200 метров",
     "c":"b"
  },
  {
     "id":"IV.58",
     "de_q":"Dürfen Sie den Lauf der Signalpistole mittels eines Stahlrohrs zur Leistungssteigerung verlängern?",
     "de_a":"a) Nein b) Ja, ich muss die Signalwaffe dann aber durch ein Beschussamt neu beschießen lassen. c) Ja, sofern der Rohrinnendurchmesser um mindestens dreizehntel (3/10) Millimeter größer ist als das Munitionskaliber und zudem das Rohr eine Wand stärke von mindestens 2 Millimetern aufweist und gasdicht ist.",
     "en_q":"Are you allowed to extend the barrel of the signal pistol using a steel tube to increase its performance?",
     "en_a":"a) No b) Yes, but then I have to have the signal weapon re-fired by a fire department. c) Yes, as long as the inside diameter of the tube is at least thirteenth (3/10) millimeter larger than the ammunition case and the tube has a wall thickness of at least 2 millimeters and is gas-tight.",
     "ru_q":"Можно ли удлинить ствол сигнального пистолета с помощью стальной трубки для повышения его характеристик?",
     "ru_a":"a) Нет b) Да, но затем мне нужно, чтобы пожарная команда произвела повторный выстрел из сигнального оружия. c) Да, при условии, что внутренний диаметр трубки не менее тринадцатого (3/10) миллиметра больше, чем гильза для боеприпасов, а трубка имеет толщину стенок не менее 2 мм и является газонепроницаемой.",
     "c":"a"
  },
  {
     "id":"IV.59",
     "de_q":"Brennen pyrotechnische Geschosse weiter, wenn Sie ins Wasser fallen?",
     "de_a":"a) Nein b) Nur, wenn es sich um militärische Munition handelt. c) Ja",
     "en_q":"Do pyrotechnic projectiles keep burning if they fall into the water?",
     "en_a":"a) No b) Only if it is military ammunition. c) Yes",
     "ru_q":"Продолжают ли гореть пиротехнические снаряды при падении в воду?",
     "ru_a":"a) Нет b) Только если это боеприпасы военного назначения. c) Да",
     "c":"c"
  },
  {
     "id":"IV.60",
     "de_q":"Dürfen Sie pyrotechnische Gegen stände selbst herstellen und bearbeiten?",
     "de_a":"a) Personen mit bestandener Sachkundeprüfung dürfen pyrotechnische Ge genstände bearbeiten. b) Nein, nur als Inhaber einer entsprechenden Erlaubnis nach dem Sprengstoffgesetz. c) Jeder darf herstellen und bearbeiten.",
     "en_q":"Are you allowed to manufacture and process pyrotechnic objects yourself?",
     "en_a":"a) Persons who have passed the technical examination are allowed to work on pyrotechnic objects. b) No, only as the holder of a corresponding permit under the Explosives Act. c) Everyone can produce and edit.",
     "ru_q":"Разрешено ли самому изготавливать и обрабатывать пиротехнические изделия?",
     "ru_a":"a) К работе на пиротехнических объектах допускаются лица, прошедшие технический экзамен. b) Нет, только как обладатель соответствующего разрешения в соответствии с Законом о взрывчатых веществах. c) Каждый может создавать и редактировать.",
     "c":"b"
  },
  {
     "id":"IV.61",
     "de_q":"Welche pyrotechnischen Notsignale unterliegen dem Waffengesetz?",
     "de_a":"a) Die Signalpistole (Kaliber 4) und die hierfür bestimmte Munition (nur mit WBK). b) Seenotsignalgeber mit einer Steighöhe von bis etwa 60 Metern (frei er werblich ab 18 Jahre) c) Handfackeln (frei erwerblich ab 18 Jahre)",
     "en_q":"Which pyrotechnic emergency signals are subject to the Weapons Act?",
     "en_a":"a) The signal pistol (caliber 4) and the ammunition intended for it (only with WBK). b) Distress signal generator with a height of up to 60 meters (freely commercially available from 18 years of age) c) Hand torches (freely commercially available from 18 years of age)",
     "ru_q":"На какие пиротехнические аварийные сигналы распространяется Закон об оружии?",
     "ru_a":"a) Сигнальный пистолет (калибр 4) и предназначенные для него боеприпасы (только с WBK). b) Передатчик сигнала бедствия высотой до 60 метров (в свободном доступе с 18 лет) c) Ручные фонарики (в свободном доступе с 18 лет)",
     "c":"a"
  },
  {
     "id":"IV.62",
     "de_q":"Was kann die missbräuchliche Verwendung von Notsignalmitteln für Folgen haben?",
     "de_a":"a) Die missbräuchliche Verwendung stellt in Deutschland nur eine Ordnungswidrigkeit dar. b) Die missbräuchliche Verwendung stellt in Deutschland ein Vergehen dar (Missbrauch von Notzeichen gemäß § 145 StGB und/oder Verstoß gemäß Waffengesetz). c) Der Missbrauch kann auch weltweit enorme Schadenersatzforderungen nach sich ziehen.",
     "en_q":"What consequences can the improper use of emergency signaling devices have?",
     "en_a":"a) The improper use in Germany only constitutes an administrative offense. b) The improper use constitutes an offense in Germany (misuse of emergency signs in accordance with Section 145 of the German Criminal Code and / or a violation in accordance with the Weapons Act). c) The abuse can also result in enormous claims for damages worldwide.",
     "ru_q":"Какие последствия может иметь неправильное использование устройств аварийной сигнализации?",
     "ru_a":"a) Неправильное использование в Германии составляет только административное правонарушение. b) Неправильное использование составляет правонарушение в Германии (злоупотребление аварийными знаками в соответствии с разделом 145 Уголовного кодекса Германии и / или нарушение в соответствии с Законом об оружии) . c) Злоупотребления также могут привести к огромным искам о возмещении ущерба по всему миру.",
     "c":"bc"
  },
  {
     "id":"IV.63",
     "de_q":"Welche pyrotechnischen Seenotsignale unterliegen dem Sprengstoffgesetz?",
     "de_a":"a) Alle pyrotechnischen Seenotsignale, die nicht aus einer Signalpistole abgefeuert werden, wie Signalraketen, Handsignalraketen mit Fallschirm, Handfackeln und Rauchsignale. b) Nur die Signale, in denen explosive Stoffe verwendet wurden. c) Signalmunition im Kaliber 4",
     "en_q":"Which pyrotechnic distress signals are subject to the Explosives Act?",
     "en_a":"a) All pyrotechnic distress signals that are not fired from a signal pistol, such as signal rockets, hand-held signal rockets with parachutes, hand flares and smoke signals. b) Only the signals in which explosive substances were used. c) signal ammunition in caliber 4",
     "ru_q":"Какие пиротехнические сигналы бедствия подпадают под действие Закона о взрывчатых веществах?",
     "ru_a":"a) Все пиротехнические сигналы бедствия, которые не издаются из сигнального пистолета, такие как сигнальные ракеты, ручные сигнальные ракеты с парашютами, ручные ракеты и дымовые сигналы. b) Только сигналы, в которых использовались взрывчатые вещества. c) сигнальные боеприпасы 4-го калибра",
     "c":"a"
  },
  {
     "id":"IV.64",
     "de_q":"Welche pyrotechnische Gegenstände (Zulassungsklasse) unterliegen dem Waffengesetz?",
     "de_a":"a) BAM P I b) BAM PM I c) BAM PM II",
     "en_q":"Which pyrotechnic objects (approval class) are subject to the Weapons Act?",
     "en_a":"a) BAM P I b) BAM PM I c) BAM PM II",
     "ru_q":"На какие пиротехнические объекты (класс допуска) распространяется Закон об оружии?",
     "ru_a":"a) БАМ П I b) БАМ ПМ I c) БАМ ПМ II",
     "c":"bc"
  },
  {
     "id":"IV.65",
     "de_q":"Was regelt das Sprengstoffgesetz?",
     "de_a":"Den Umgang und den Verkehr mit sowie die Einfuhr und die Durchfuhr von explosionsgefährlichen Stoffen und Sprengzubehör.",
     "en_q":"What does the Explosives Act regulate?",
     "en_a":"The handling and traffic with, as well as the import and transit of explosive substances and explosive accessories.",
     "ru_q":"Что регулирует Закон о взрывчатых веществах?",
     "ru_a":"Обработка и транспортировка, а также импорт и транзит взрывчатых веществ и взрывоопасных принадлежностей.",
     "c":"x"
  },
  {
     "id":"IV.66",
     "de_q":"Welche Bestimmung regelt den Einsatz von Notsignalen auf See?",
     "de_a":"Kollisionsverhütungsregeln (KVR; Regel 37).",
     "en_q":"Which regulation regulates the use of distress signals at sea?",
     "en_a":"Collision prevention rules (KVR; Rule 37).",
     "ru_q":"Какие правила регулируют использование сигналов бедствия на море?",
     "ru_a":"Правила предотвращения столкновений (KVR; Правило 37).",
     "c":"x"
  },
  {
     "id":"IV.67",
     "de_q":"Welche Vorschrift regelt die Pflicht zur Hilfeleistung in Seenotfällen?",
     "de_a":"Verordnung über die Sicherung der Seefahrt.",
     "en_q":"Which regulation regulates the duty to provide assistance in emergencies at sea?",
     "en_a":"Ordinance on the safety of seafaring.",
     "ru_q":"Какое положение регулирует обязанность оказывать помощь в чрезвычайных ситуациях на море?",
     "ru_a":"Постановление о безопасности мореплавания.",
     "c":"x"
  },
  {
     "id":"IV.68",
     "de_q":"Welche nautische Veröffentlichung (Broschüre) beschreibt die seemännische Sorgfaltspflicht für Wassersportler, auch für den Seenotfall? Wer gibt sie heraus?",
     "de_a":"Die Broschüre „Sicherheit auf dem Wasser“, herausgegeben vom Bundesamt für Seeschiff fahrt und Hydrographie (BSH).",
     "en_q":"Which nautical publication (brochure) describes the nautical duty of care for water sports enthusiasts, also for emergencies at sea? Who publishes it?",
     "en_a":"The brochure “Safety on the Water”, published by the Federal Maritime and Hydrographic Agency (BSH).",
     "ru_q":"В каком морском издании (брошюре) описывается морская обязанность проявлять заботу об энтузиастах водных видов спорта, в том числе при чрезвычайных ситуациях на море? Кто его издает?",
     "ru_a":"Брошюра «Безопасность на воде», изданная Федеральным морским и гидрографическим агентством (BSH).",
     "c":"x"
  },
  {
     "id":"IV.69",
     "de_q":"Welche nautische Veröffentlichung (Handbuch) für die Sport- und Kleinschifffahrt enthält Anleitungen zur Bewältigung von Notlagen auf See? Wer gibt sie heraus?",
     "de_a":"Das Handbuch „Suche und Rettung“, heraus gegeben vom Bundesamt für Seeschifffahrt und Hydrographie (BSH).",
     "en_q":"Which nautical publication (manual) for sport and small craft contains instructions for dealing with emergencies at sea? Who publishes it?",
     "en_a":"The “Search and Rescue” manual, published by the Federal Maritime and Hydrographic Agency (BSH).",
     "ru_q":"Какое морское издание (руководство) для спортивных и малых судов содержит инструкции по действиям в чрезвычайных ситуациях на море? Кто его издает?",
     "ru_a":"Пособие «Поиск и спасание», изданное Федеральным морским и гидрографическим агентством (BSH).",
     "c":"x"
  },
  {
     "id":"IV.70",
     "de_q":"Welche pyrotechnischen Signalmittel unterliegen dem Waffengesetz?",
     "de_a":"a) Alle Leuchtraketen, die einen eigenen Treibsatz beinhalten. b) Alle Signalpistolen und Abschussvorrichtungen, sowie die für diese bestimmte Munition. c) Alle steigenden Signale, die einen Durchmesser von mehr als 12 mm aufweisen.",
     "en_q":"Which pyrotechnic signaling devices are subject to the Weapons Act?",
     "en_a":"a) All flares that contain their own propellant. b) All signal pistols and launching devices, as well as the ammunition intended for them. c) All rising signals that are more than 12 mm in diameter.",
     "ru_q":"На какие пиротехнические сигнальные устройства распространяется Закон об оружии?",
     "ru_a":"a) Все ракеты, содержащие собственное топливо. b) Все сигнальные пистолеты и пусковые устройства, а также предназначенные для них боеприпасы. c) Все восходящие сигналы диаметром более 12 мм.",
     "c":"b"
  },
  {
     "id":"IV.71",
     "de_q":"Welche pyrotechnischen Signalmittel unterliegen dem Sprengstoffgesetz?",
     "de_a":"a) Handfackeln und Rauchkörper b) Handsignalraketen mit Fallschirm c) Blitz-Knall-Patronen im Kaliber 4",
     "en_q":"Which pyrotechnic signaling devices are subject to the Explosives Act?",
     "en_a":"a) Hand flares and smoke bodies b) Hand signal rockets with parachutes c) Lightning-bang cartridges in caliber 4",
     "ru_q":"Какие пиротехнические сигнальные устройства подпадают под действие Закона о взрывчатых веществах?",
     "ru_a":"a) Ручные сигнальные ракеты и дымовые тела b) Ракеты ручного сигнала с парашютами c) Молниеносные патроны 4-го калибра.",
     "c":"abc"
  },
  {
     "id":"IV.72",
     "de_q":"Wie verhalten Sie sich bei einem Munitionsversager in der Signalpistole?",
     "de_a":"Waffe in Schussrichtung belassen, über Kopf erneut spannen und nochmals abdrücken, bei erneutem Versagen die Waffe mit nach oben gerichtetem Lauf frühestens nach 1 Minute nach außenbords öffnen und den Versager herausgleiten lassen.",
     "en_q":"How do you behave in the event of an ammunition failure in the signal pistol?",
     "en_a":"Leave the weapon in the direction of fire, cock it overhead again and pull the trigger again, if it fails again, open the weapon with the barrel pointing upwards at the earliest after 1 minute outboard and let the failure slide out.",
     "ru_q":"Как вести себя при выходе из строя боеприпасов сигнального пистолета?",
     "ru_a":"Оставьте оружие в направлении огня, снова взведите его над головой и снова нажмите на спусковой крючок, если он снова выйдет из строя, откройте оружие стволом вверх не раньше, чем через 1 минуту за борт, и позвольте повреждению выскользнуть.",
     "c":"x"
  },
  {
     "id":"IV.73",
     "de_q":"Was ist zu tun, wenn die Patrone in der Signalpistole nach Abzugsbetätigung nicht gezündet hat?",
     "de_a":"a) Sofort eine neue Patrone laden und erneut versuchen zu schießen. b) Waffe einem anderen Besatzungsmitglied geben, damit eine Fehlbedienung ausgeschlossen werden kann. Waffe nach frühestens 5 Minuten entladen. c) Waffe in Schussrichtung belassen, über Kopf erneut spannen und nochmals abdrücken, bei erneutem Versa gen die Waffe mit nach oben gerichtetem Lauf frühestens nach 1 Minute nach außenbords öffnen und den Versager herausgleiten lassen.",
     "en_q":"What should I do if the cartridge in the signal pistol did not ignite after the trigger was pressed?",
     "en_a":"a) Immediately load a new cartridge and try again to fire. b) Give the weapon to another crew member so that incorrect operation can be ruled out. Unload the weapon after 5 minutes at the earliest. c) Leave the weapon in the direction of fire, cock it overhead again and pull the trigger again; if the weapon fails again with the barrel pointing upwards, open the weapon outboard after 1 minute at the earliest and allow the failure to slide out.",
     "ru_q":"Что делать, если патрон в сигнальном пистолете не загорелся после нажатия на спусковой крючок?",
     "ru_a":"a) Немедленно загрузите новый патрон и попробуйте снова выстрелить. b) Передать оружие другому члену экипажа, чтобы исключить неправильную работу. Разрядите оружие не раньше, чем через 5 минут. c) Оставьте оружие в направлении огня, снова взведите его над головой и снова нажмите на спусковой крючок; если он снова выйдет из строя, откройте оружие стволом вверх не позднее, чем через 1 минуту, и позвольте повреждению выскользнуть.",
     "c":"c"
  },
  {
     "id":"IV.74",
     "de_q":"Was machen Sie mit Munition, die beim versuchten Verschießen aus der Signalwaffe nicht gezündet hat (Versager)?",
     "de_a":"a) Wieder in die Originalverpackung zurücklegen. b) An einer freien Stelle über Deck lagern. c) Über Bord werfen.",
     "en_q":"What do you do with ammunition that did not fire when you tried to fire it from the signal weapon (failure)?",
     "en_a":"a) Put back in the original packaging. b) Store in a free space above deck. c) Throw overboard.",
     "ru_q":"Что делать с боеприпасами, которые не сработали, когда вы попытались выстрелить из сигнального оружия (неудача)?",
     "ru_a":"a) Положите обратно в оригинальную упаковку. b) Хранить на свободном месте над палубой. c) Выбросить за борт.",
     "c":"c"
  },
  {
     "id":"IV.75",
     "de_q":"Dürfen Sie Seenotsignalmittel in öffentlichen Verkehrsmitteln befördern?",
     "de_a":"Nein",
     "en_q":"Are you allowed to carry distress signals in public transport?",
     "en_a":"no",
     "ru_q":"Можно ли проносить сигналы бедствия в общественном транспорте?",
     "ru_a":"нет",
     "c":"x"
  },
  {
     "id":"IV.76",
     "de_q":"Wie dürfen Sie Ihre Signalpistole von der Wohnung zur Yacht transportieren, wenn Sie keinen Waffenschein besitzen?",
     "de_a":"Nicht schuss- und nicht zugriffsbereit.",
     "en_q":"How can you transport your signal pistol from your apartment to the yacht if you don't have a gun license?",
     "en_a":"Not ready to fire and not accessible.",
     "ru_q":"Как можно перевезти сигнальный пистолет из квартиры на яхту, если у вас нет лицензии на оружие?",
     "ru_a":"Не готов к стрельбе и недоступен.",
     "c":"x"
  },
  {
     "id":"IV.77",
     "de_q":"Wie ist eine Signalpistole an Land zu transportieren?",
     "de_a":"a) entladen, entspannt, gesichert b) entladen, entspannt, von der Munition getrennt c) entladen, verpackt, von der Munition getrennt",
     "en_q":"How should a signal pistol be transported on land?",
     "en_a":"a) unloaded, relaxed, secured b) unloaded, relaxed, separated from the ammunition c) unloaded, packed, separated from the ammunition",
     "ru_q":"Как следует перевозить сигнальный пистолет по суше?",
     "ru_a":"a) разряженный, расслабленный, закрепленный b) разряженный, расслабленный, отделенный от боеприпасов c) разряженный, упакованный, отделенный от боеприпасов",
     "c":"c"
  },
  {
     "id":"IV.78",
     "de_q":"Wem dürfen Seenotsignalmittel dauerhaft überlassen werden?",
     "de_a":"a) Nur berechtigten Personen im Sinne des Waffen- oder Sprengstoffrechts. b) Nur Waffenhändlern. c) Jeder natürlichen Person.",
     "en_q":"To whom may distress signals be given permanently?",
     "en_a":"a) Only authorized persons within the meaning of the law on weapons or explosives. b) Arms dealers only. c) Any natural person.",
     "ru_q":"Кому могут подаваться сигналы бедствия постоянно?",
     "ru_a":"a) Только уполномоченные лица в понимании закона об оружии или взрывчатых веществах. b) Только торговцы оружием. c) Любое физическое лицо.",
     "c":"a"
  },
  {
     "id":"IV.79",
     "de_q":"Wem dürfen Sie ohne Erlaubnis die Signalpistole im Kaliber 4 (26,5 mm) nebst Munition vorübergehend überlassen?",
     "de_a":"a) Volljährigen Personen meines Vertrauens zur sicheren Aufbewahrung. b) Feuerwehrleute c) Charterern von seegehenden Wasserfahrzeugen, sofern der Besitz über die Waffe nach den Weisungen des berechtigten Überlassers erfolgt.",
     "en_q":"Who can you temporarily hand over the signal pistol in caliber 4 (26.5 mm) and ammunition to without permission?",
     "en_a":"a) People of legal age I trust for safe storage. b) Fire fighters c) Charterers of seagoing watercraft, provided that the weapon is owned in accordance with the instructions of the authorized surrender.",
     "ru_q":"Кому можно временно передать без разрешения сигнальный пистолет калибра 4 (26,5 мм) и боеприпасы?",
     "ru_a":"a) Я доверяю людям совершеннолетнего возраста безопасное хранение. b) Пожарные. c) Фрахтователи морского плавсредства, при условии, что оружие находится в собственности в соответствии с инструкциями разрешенной сдачи.",
     "c":"c"
  },
  {
     "id":"IV.80",
     "de_q":"Welche Dokumente sind bei Besitz einer Signalpistole im Kaliber 4 (26,5 mm) in deutschen und europäischen Gewässern, sowie in den Gewässern anderer Länder an Bord mitzuführen?",
     "de_a":"1. Personalausweis oder Pass, 2. Waffenbesitzkarte, 3. In EU-Mitgliedstaaten und nicht EU-Staaten, die zum Schengen Raum gehören: Europäischer Feuerwaffenpass, ggf. Einfuhrgenehmigung, 4. Drittstaaten: ggf. Einfuhrgenehmigung.",
     "en_q":"What documents do you have to carry on board if you have a signal pistol in caliber 4 (26.5 mm) in German and European waters, as well as in the waters of other countries?",
     "en_a":"1. Identity card or passport, 2. Weapons possession card, 3. In EU member states and non-EU states that are part of the Schengen area: European firearms passport, import permit if applicable, 4. Third countries: import permit if applicable.",
     "ru_q":"Какие документы нужно иметь на борту, если у вас есть сигнальный пистолет калибра 4 (26,5 мм) в водах Германии и Европы, а также в водах других стран?",
     "ru_a":"1. Удостоверение личности или паспорт, 2. Карточка владения оружием, 3. В государствах-членах ЕС и государствах, не входящих в ЕС, которые принадлежат к Шенгенской зоне: европейский паспорт огнестрельного оружия, разрешение на ввоз, если применимо, 4. Третьи страны: разрешение на ввоз, если применимо.",
     "c":"x"
  },
  {
     "id":"IV.81",
     "de_q":"Darf an Silvester mit Signalmunition Kaliber 4 (26,5 mm) geschossen werden?",
     "de_a":"a) Ja, aber nur durch den Erlaubnisinhaber selbst innerhalb der amtlich zugelassenen „Abbrennzeit“ (meist 18.00 – 02.00 Uhr), wenn keine brennbaren Objekte in der Nähe sind. b) Ja, aber nur wie unter a) beschrieben. Zusätzlich muss der Schütze Inhaber des Kleinen Waffenscheins sein. c) Nein, dieses Schießen bedarf einer besonderen waffenrechtlichen Erlaubnis.",
     "en_q":"Can 4 (26.5 mm) caliber signal ammunition be fired on New Year's Eve?",
     "en_a":"a) Yes, but only by the permit holder themselves within the officially permitted “burn-off time” (usually 6:00 p.m. - 2:00 a.m.) if there are no flammable objects in the vicinity. b) Yes, but only as described under a). In addition, the shooter must hold a small gun license. c) No, this shooting requires a special gun license.",
     "ru_q":"Можно ли стрелять сигнальными боеприпасами калибра 4 (26,5 мм) в канун Нового года?",
     "ru_a":"a) Да, но только самим владельцем разрешения в течение официально разрешенного «времени сгорания» (обычно с 18:00 до 2:00), если поблизости нет легковоспламеняющихся предметов. b) Да, но только так, как описано в пункте а). Кроме того, стрелок должен иметь лицензию на стрелковое оружие. c) Нет, для этой стрельбы требуется специальная лицензия на оружие.",
     "c":"c"
  },
  {
     "id":"IV.82",
     "de_q":"Wer darf während der Fahrt auf einem Gewässer oder See die Signalwaffe am Körper tragen (führen)?",
     "de_a":"a) Jedes Besatzungsmitglied. b) Alle Inhaber einer Waffensachkundeprüfung. c) Der verantwortliche Führer des Wasserfahrzeugs.",
     "en_q":"Who is allowed to carry (use) the signal weapon on their body while driving on a body of water or lake?",
     "en_a":"a) Every crew member. b) All holders of a weapons test. c) The responsible driver of the watercraft.",
     "ru_q":"Кому разрешено носить (использовать) сигнальное оружие на теле при движении по водоему или озеру?",
     "ru_a":"a) Каждый член экипажа. b) Все обладатели оружейного испытания. c) Ответственный водитель гидроцикла.",
     "c":"c"
  },
  {
     "id":"IV.83",
     "de_q":"Wer darf in Seenotfällen mit einer Signalwaffe schießen?",
     "de_a":"a) Jeder b) Nur Inhaber einer Waffensachkundeprüfung. c) Nur der verantwortliche Führer des betroffenen Wasserfahrzeuges.",
     "en_q":"Who is allowed to shoot with a signal weapon in emergencies at sea?",
     "en_a":"a) Everyone b) Only holder of a gun test. c) Only the responsible operator of the watercraft concerned.",
     "ru_q":"Кому разрешено стрелять из сигнального оружия в чрезвычайных ситуациях на море?",
     "ru_a":"a) Все b) Только обладатель ружья. c) Только ответственный оператор данного гидроцикла.",
     "c":"a"
  },
  {
     "id":"IV.84",
     "de_q":"Was müssen Sie tun, wenn Ihnen Signalmittel oder Waffen abhanden kommen?",
     "de_a":"Der Verlust ist der zuständigen Behörde unverzüglich anzuzeigen.",
     "en_q":"What should you do if you lose signals or weapons?",
     "en_a":"The competent authority must be notified of the loss immediately.",
     "ru_q":"Что делать, если вы теряете сигналы или оружие?",
     "ru_a":"Компетентный орган должен быть немедленно уведомлен о потере.",
     "c":"x"
  },
  {
     "id":"IV.85",
     "de_q":"Für den Erwerb und Besitz welcher Signalwaffe benötigen Sie eine Erlaubnis der zuständigen Behörde?",
     "de_a":"a) Signalpistole Kaliber 4 (26,5 mm). b) Für Signalwaffen (SRS-Waffen), die kein Bauartzulassungszeichen „PTB im Kreis“ (Physikalisch-Technische Bundesanstalt) tragen. c) Signalwaffen (SRS-Waffen), die die Bauartzulassungszeichen „PTB im Kreis“ (Physikalisch-Technische Bundesanstalt) tragen.",
     "en_q":"Which signal weapon do you need a permit from the responsible authority to acquire and possess?",
     "en_a":"a) 4 caliber signal pistol (26.5 mm). b) For signal weapons (SRS weapons) that do not have a type approval mark “PTB im Kreis” (Physikalisch-Technische Bundesanstalt). c) Signal weapons (SRS weapons) that bear the type approval mark “PTB im Kreis” (Physikalisch-Technische Bundesanstalt).",
     "ru_q":"На приобретение какого сигнального оружия и владение им необходимо разрешение ответственного органа?",
     "ru_a":"a) Пистолет сигнальный 4 калибра (26,5 мм). b) Для сигнального оружия (оружия SRS), не имеющего знака официального утверждения типа «PTB im Kreis» (Physikalisch-Technische Bundesanstalt). c) Сигнальное оружие (оружие SRS), имеющее знак официального утверждения типа «PTB im Kreis» (Physikalisch-Technische Bundesanstalt).",
     "c":"ab"
  },
  {
     "id":"IV.86",
     "de_q":"Wodurch verliert ein Bootseigentümer das Bedürfnis zum Besitz einer Signalpistole im Kaliber 4 (26,5 mm)?",
     "de_a":"a) Wenn das Eigentum an einem seegehenden Boot/Schiff nicht mehr nachgewiesen werden kann. b) Wenn der Sportbootführerschein seine Gültigkeit verliert. c) Wenn er ins Ausland verzieht.",
     "en_q":"How does a boat owner lose the need to own a 4 caliber (26.5 mm) signal pistol?",
     "en_a":"a) When ownership of a seagoing boat / ship can no longer be proven. b) If the sports boat license loses its validity. c) If he moves abroad.",
     "ru_q":"Как владелец лодки избавляется от необходимости иметь сигнальный пистолет 4 калибра (26,5 мм)?",
     "ru_a":"a) Когда право собственности на морскую лодку / судно больше не может быть доказано. b) Если лицензия на спортивную лодку утрачивает силу. c) Если он уезжает за границу.",
     "c":"a"
  },
  {
     "id":"IV.87",
     "de_q":"Welche Ausnahme von den waffenrechtlichen Erlaubnispflichten für Waffen und Munition betrifft den Charterer einer seegehenden Yacht?",
     "de_a":"Der Charterer darf ohne waffenrechtliche Erlaubnis die tatsächliche Gewalt über eine an Bord befindliche Signalpistole im Kaliber 4 (26,5 mm) und die dazugehörige Munition ausüben.",
     "en_q":"Which exception to the legal license requirements for weapons and ammunition applies to the charterer of a seagoing yacht?",
     "en_a":"The charterer may exercise actual power over a 4-caliber signal pistol (26.5 mm) and the associated ammunition on board without a permit under the law on weapons.",
     "ru_q":"Какое исключение из требований законной лицензии на оружие и боеприпасы применяется к фрахтователю морской яхты?",
     "ru_a":"Фрахтователь может осуществлять фактическую власть над сигнальным пистолетом 4-го калибра (26,5 мм) и соответствующими боеприпасами на борту без разрешения в соответствии с законом об оружии.",
     "c":"x"
  },
  {
     "id":"IV.88",
     "de_q":"Welche pyrotechnischen Handsignale für den Seenotfall sind erlaubnispflichtig?",
     "de_a":"Handsignale der Unterklasse P2 („Signalraketen rot“, „Fallschirmsignalraketen rot“ und „Rauchsignale orange“).",
     "en_q":"Which pyrotechnic hand signals for emergencies at sea require a permit?",
     "en_a":"Hand signals of subclass P2 ('red signal rockets', 'red parachute signal rockets' and 'orange smoke signals').",
     "ru_q":"Какие пиротехнические ручные сигналы для аварийных ситуаций на море требуют разрешения?",
     "ru_a":"Ручные сигналы подкласса P2 («красные сигнальные ракеты», «красные парашютные сигнальные ракеты» и «оранжевые дымовые сигналы»).",
     "c":"x"
  },
  {
     "id":"IV.89",
     "de_q":"Welche Behörde prüft pyrotechnische Seenotsignale und lässt sie zu?",
     "de_a":"a) Die Physikalisch-Technische Bundesanstalt (PTB) b) Die Bundesanstalt für Materialforschung und -prüfung (BAM). c) Der Technische Überwachungsverein (TÜV)",
     "en_q":"Which authority checks and approves pyrotechnic distress signals?",
     "en_a":"a) The Physikalisch-Technische Bundesanstalt (PTB) b) The Federal Institute for Materials Research and Testing (BAM). c) The Technical Inspection Association (TÜV)",
     "ru_q":"Какой орган проверяет и утверждает пиротехнические сигналы бедствия?",
     "ru_a":"a) Physikalisch-Technische Bundesanstalt (PTB) b) Федеральный институт исследования и испытаний материалов (BAM). c) Ассоциация технического надзора (TÜV)",
     "c":"b"
  }
]

const kChapters = {
   "Chapter 1": 0,
   "Chapter 2": 90,
   "Chapter 3": 244,
   "Chapter 4": 279,
   "Chapter 5": 302,
   "Chapter II": 345,
   "Chapter III": 437,
   "Chapter IV": 486,
}
