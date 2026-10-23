/**
 * Rami ve Zeyd Arapça Hikayesi - Kitap Formatı & Tamlama/Kelime Çözümleme
 * Cümlenin tamamı değil, sadece ilgili kelime veya ait olduğu tamlama grubu gösterilir.
 */
const STORY_PAGES = [
  {
    "pageNum": 1,
    "title": "الصَّفْحَةُ الأُولَى (1)",
    "paragraphs": [
      {
        "pId": "p1_pr1",
        "words": [
          {
            "id": "p1_pr1_w1",
            "ar": "اسْمِي",
            "root": "سمو",
            "meaning": "Adım",
            "phraseTr": "<u>Adım</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w2",
            "ar": "رَامِي.",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p1_pr1_w3",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p1_pr1_w4",
            "ar": "وَلَدٌ",
            "root": "ولد",
            "meaning": "Erkek çocuk",
            "phraseTr": "<u>Erkek çocuk</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w5",
            "ar": "عُمْرِي",
            "root": "عمر",
            "meaning": "Yaşım",
            "phraseTr": "<u>Yaşım</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w6",
            "ar": "خَمْسَ",
            "root": "خمس",
            "meaning": "beş",
            "phraseTr": "<u>on</u> beş",
            "type": "sayı"
          },
          {
            "id": "p1_pr1_w7",
            "ar": "عَشْرَةَ",
            "root": "عشر",
            "meaning": "on",
            "phraseTr": "on <u>beş</u>",
            "type": "sayı"
          },
          {
            "id": "p1_pr1_w8",
            "ar": "(15)",
            "root": "",
            "meaning": "(15)",
            "phraseTr": "(15)",
            "type": "sayı/noktalama"
          },
          {
            "id": "p1_pr1_w9",
            "ar": "سَنَةً.",
            "root": "سنو",
            "meaning": "Yıl, yaş",
            "phraseTr": "<u>Yıl, yaş</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w10",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p1_pr1_w11",
            "ar": "أَعِيشُ",
            "root": "عيش",
            "meaning": "Yaşıyorum",
            "phraseTr": "<u>Yaşıyorum</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr1_w12",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr1_w13",
            "ar": "قَرْيَةٍ",
            "root": "قري",
            "meaning": "Bir köy",
            "phraseTr": "küçük ve güzel bir <u>köy</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w14",
            "ar": "صَغِيرَةٍ",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> ve güzel bir köy",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w15",
            "ar": "وَجَمِيلَةٍ",
            "root": "جمل",
            "meaning": "Ve Güzel",
            "phraseTr": "küçük ve <u>güzel</u> bir köy",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w16",
            "ar": "فَوْقَ",
            "root": "فوق",
            "meaning": "üstünde, üzerine",
            "phraseTr": "<u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p1_pr1_w17",
            "ar": "الجَبَلِ.",
            "root": "جبل",
            "meaning": "Dağ",
            "phraseTr": "<u>dağın</u> üzerinde",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w18",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr1_w19",
            "ar": "قَرْيَتِي،",
            "root": "قري",
            "meaning": "Köyüm",
            "phraseTr": "<u>köyümde</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w20",
            "ar": "الهَوَاءُ",
            "root": "هوو",
            "meaning": "Hava",
            "phraseTr": "<u>Hava</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w21",
            "ar": "نَظِيفٌ",
            "root": "نظف",
            "meaning": "Temiz",
            "phraseTr": "<u>Temiz</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w22",
            "ar": "وَالمَاءُ",
            "root": "موه",
            "meaning": "Ve Su",
            "phraseTr": "<u>Ve Su</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w23",
            "ar": "بَارِدٌ.",
            "root": "برد",
            "meaning": "Soğuk",
            "phraseTr": "<u>Soğuk</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w24",
            "ar": "عِشْتُ",
            "root": "عيش",
            "meaning": "Yaşadım",
            "phraseTr": "<u>Yaşadım</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr1_w25",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p1_pr1_w26",
            "ar": "مَعَ",
            "root": "مَعَ",
            "meaning": "ile, beraber",
            "phraseTr": "<u>birlikte</u>",
            "type": "zarf"
          },
          {
            "id": "p1_pr1_w27",
            "ar": "جَدِّي",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "yaşlı <u>dedemle</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w28",
            "ar": "الكَبِيرِ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>yaşlı</u> dedemle",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w29",
            "ar": "مُنْذُ",
            "root": "مُنْذُ",
            "meaning": "-den beri",
            "phraseTr": "<u>-den beri</u>",
            "type": "edat"
          },
          {
            "id": "p1_pr1_w30",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr1_w31",
            "ar": "كُنْتُ",
            "root": "كون",
            "meaning": "İdim, oldum",
            "phraseTr": "<u>İdim, oldum</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p1_pr1_w32",
            "ar": "طِفْلاً",
            "root": "طفل",
            "meaning": "Bir çocuk",
            "phraseTr": "küçük bir <u>çocuk</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w33",
            "ar": "صَغِيراً.",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> bir çocuk",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w34",
            "ar": "جَدِّي",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "<u>Dedem</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w35",
            "ar": "رَجُلٌ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "iyi bir <u>adam</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr1_w36",
            "ar": "طَيِّبٌ،",
            "root": "طيب",
            "meaning": "İyi, temiz kalpli",
            "phraseTr": "<u>iyi</u> bir adam",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w37",
            "ar": "وَلَكِنَّهُ",
            "root": "لَكِنْ",
            "meaning": "Fakat o",
            "phraseTr": "<u>Fakat o</u>",
            "type": "bağlaç + harf + zamir"
          },
          {
            "id": "p1_pr1_w38",
            "ar": "قَوِيٌّ",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>güçlü</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr1_w39",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> güçlü",
            "type": "zarf"
          }
        ]
      },
      {
        "pId": "p1_pr2",
        "words": [
          {
            "id": "p1_pr2_w1",
            "ar": "كُلَّ",
            "root": "كلل",
            "meaning": "her",
            "phraseTr": "<u>her</u> gün",
            "type": "zarf"
          },
          {
            "id": "p1_pr2_w2",
            "ar": "يَوْمٍ",
            "root": "يَوْم",
            "meaning": "Gün",
            "phraseTr": "her <u>gün</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w3",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr2_w4",
            "ar": "الصَّبَاحِ،",
            "root": "صَبَحَ",
            "meaning": "Sabah",
            "phraseTr": "<u>sabahleyin</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w5",
            "ar": "كُنْتُ",
            "root": "كون",
            "meaning": "İdim, oldum",
            "phraseTr": "<u>İdim, oldum</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p1_pr2_w6",
            "ar": "أَسْتَيْقِظُ",
            "root": "يقظ",
            "meaning": "Uyanırım",
            "phraseTr": "<u>Uyanırım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr2_w7",
            "ar": "مُبَكِّراً",
            "root": "بكر",
            "meaning": "erkenden",
            "phraseTr": "<u>erkenden</u>",
            "type": "zarf"
          },
          {
            "id": "p1_pr2_w8",
            "ar": "وَأَتَدَرَّبُ",
            "root": "درب",
            "meaning": "Ve Antrenman yaparım",
            "phraseTr": "<u>Ve Antrenman yaparım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr2_w9",
            "ar": "مَعَ",
            "root": "مَعَ",
            "meaning": "ile, beraber",
            "phraseTr": "<u>ile</u>",
            "type": "zarf"
          },
          {
            "id": "p1_pr2_w10",
            "ar": "جَدِّي",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "<u>dedemle</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w11",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr2_w12",
            "ar": "الغَابَةِ.",
            "root": "غيب",
            "meaning": "Orman",
            "phraseTr": "<u>ormanda</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w13",
            "ar": "جَدِّي",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "<u>Dedem</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w14",
            "ar": "عَلَّمَنِي",
            "root": "علم",
            "meaning": "Bana öğretti",
            "phraseTr": "<u>Bana öğretti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr2_w15",
            "ar": "سِرّاً",
            "root": "سرر",
            "meaning": "Bir sır",
            "phraseTr": "çok önemli bir <u>sır</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w16",
            "ar": "مُهِمّاً",
            "root": "همم",
            "meaning": "Önemli",
            "phraseTr": "çok <u>önemli</u> bir sır",
            "type": "sıfat"
          },
          {
            "id": "p1_pr2_w17",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> önemli bir sır",
            "type": "zarf"
          },
          {
            "id": "p1_pr2_w18",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr2_w19",
            "ar": "لِي",
            "root": "لِ",
            "meaning": "Bana / benim için",
            "phraseTr": "<u>Bana</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p1_pr2_w20",
            "ar": "جَدِّي:",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "<u>Dedem</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w21",
            "ar": "«يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p1_pr2_w22",
            "ar": "رَامِي،",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p1_pr2_w23",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr2_w24",
            "ar": "دَاخِلِ",
            "root": "دخل",
            "meaning": "iç",
            "phraseTr": "<u>iç</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w25",
            "ar": "كُلِّ",
            "root": "كلل",
            "meaning": "bütün, her",
            "phraseTr": "<u>her</u> insan",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w26",
            "ar": "إِنْسَانٍ",
            "root": "أنس",
            "meaning": "İnsan",
            "phraseTr": "her <u>insan</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w27",
            "ar": "تُوجَدُ",
            "root": "وجد",
            "meaning": "Bulunur, vardır",
            "phraseTr": "<u>Bulunur, vardır</u>",
            "type": "meçhul fiil"
          },
          {
            "id": "p1_pr2_w28",
            "ar": "طَاقَةٌ",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "Çi adında bir <u>enerji</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w29",
            "ar": "اسْمُهَا",
            "root": "سمو",
            "meaning": "Adı",
            "phraseTr": "<u>adında</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w30",
            "ar": "تْشِي.",
            "root": "تْشِي",
            "meaning": "Çi (yaşam enerjisi)",
            "phraseTr": "<u>Çi</u> adında",
            "type": "terim"
          },
          {
            "id": "p1_pr2_w31",
            "ar": "هَذِهِ",
            "root": "ذه",
            "meaning": "Bu (dişil)",
            "phraseTr": "<u>Bu</u> enerji",
            "type": "işaret ismi"
          },
          {
            "id": "p1_pr2_w32",
            "ar": "الطَّاقَةُ",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "Bu <u>enerji</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w33",
            "ar": "مَوْجُودَةٌ",
            "root": "وجد",
            "meaning": "Mevcut, var",
            "phraseTr": "<u>Mevcut, var</u>",
            "type": "ism-i meful"
          },
          {
            "id": "p1_pr2_w34",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr2_w35",
            "ar": "دَمِكَ",
            "root": "دمي",
            "meaning": "Kanın",
            "phraseTr": "senin <u>kanında</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr2_w36",
            "ar": "وَفِي",
            "root": "فِي",
            "meaning": "Ve -de, -da, içinde",
            "phraseTr": "ve <u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr2_w37",
            "ar": "نَفَسِكَ.»",
            "root": "نفس",
            "meaning": "Nefesin",
            "phraseTr": "senin <u>nefesinde</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p1_pr3",
        "words": [
          {
            "id": "p1_pr3_w1",
            "ar": "طَاقَةُ",
            "root": "طوق",
            "meaning": "Enerjisi",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w2",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p1_pr3_w3",
            "ar": "لَيْسَتْ",
            "root": "ليس",
            "meaning": "değildir",
            "phraseTr": "<u>değildir</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p1_pr3_w4",
            "ar": "سِحْراً.",
            "root": "سحر",
            "meaning": "Sihir, büyü",
            "phraseTr": "<u>Sihir, büyü</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w5",
            "ar": "الإِنْسَانُ",
            "root": "أنس",
            "meaning": "İnsan",
            "phraseTr": "<u>İnsan</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w6",
            "ar": "لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p1_pr3_w7",
            "ar": "يَسْتَطِيعُ",
            "root": "طوع",
            "meaning": "Güç yetirir, yapabilir",
            "phraseTr": "<u>Güç yetirir, yapabilir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w8",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr3_w9",
            "ar": "يَطِيرَ",
            "root": "طير",
            "meaning": "Uçar",
            "phraseTr": "<u>Uçar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w10",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr3_w11",
            "ar": "السَّمَاءِ،",
            "root": "سمو",
            "meaning": "Gökyüzü",
            "phraseTr": "<u>gökyüzünde</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w12",
            "ar": "وَلاَ",
            "root": "لاَ",
            "meaning": "Ve değil, -mez, -maz",
            "phraseTr": "<u>Ve değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p1_pr3_w13",
            "ar": "يَسْتَطِيعُ",
            "root": "طوع",
            "meaning": "Güç yetirir, yapabilir",
            "phraseTr": "<u>Güç yetirir, yapabilir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w14",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr3_w15",
            "ar": "يُخْرِجَ",
            "root": "خرج",
            "meaning": "Çıkarır",
            "phraseTr": "<u>Çıkarır</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w16",
            "ar": "نَاراً",
            "root": "نور",
            "meaning": "Ateş",
            "phraseTr": "<u>Ateş</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w17",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr3_w18",
            "ar": "يَدِهِ.",
            "root": "يدي",
            "meaning": "Eli",
            "phraseTr": "onun <u>elinden</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w19",
            "ar": "لَكِنْ،",
            "root": "لَكِنْ",
            "meaning": "Fakat, lakin",
            "phraseTr": "<u>Fakat, lakin</u>",
            "type": "istidrak harfi"
          },
          {
            "id": "p1_pr3_w20",
            "ar": "إِذَا",
            "root": "إِذَا",
            "meaning": "eğer, -dığı zaman",
            "phraseTr": "<u>eğer, -dığı zaman</u>",
            "type": "şart edatı"
          },
          {
            "id": "p1_pr3_w21",
            "ar": "عَرَفْتَ",
            "root": "عرف",
            "meaning": "Bildin",
            "phraseTr": "<u>Bildin</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr3_w22",
            "ar": "كَيْفَ",
            "root": "كيف",
            "meaning": "nasıl",
            "phraseTr": "<u>nasıl</u>",
            "type": "soru edatı"
          },
          {
            "id": "p1_pr3_w23",
            "ar": "تَسْتَخْدِمُ",
            "root": "خدم",
            "meaning": "Kullanırsın",
            "phraseTr": "<u>Kullanırsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w24",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w25",
            "ar": "التْشِي،",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p1_pr3_w26",
            "ar": "يُمْكِنُكَ",
            "root": "مَكُنَ",
            "meaning": "Yapabilirsin, mümkündür",
            "phraseTr": "<u>Yapabilirsin, mümkündür</u>",
            "type": "fiil + zamir"
          },
          {
            "id": "p1_pr3_w27",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr3_w28",
            "ar": "تَفْعَلَ",
            "root": "فعل",
            "meaning": "Yaparsın",
            "phraseTr": "<u>Yaparsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w29",
            "ar": "أَشْيَاءَ",
            "root": "شيأ",
            "meaning": "Şeyler",
            "phraseTr": "harika <u>şeyler</u>",
            "type": "cemi isim"
          },
          {
            "id": "p1_pr3_w30",
            "ar": "رَائِعَةً.",
            "root": "رَوَعَ",
            "meaning": "Harika, muhteşem",
            "phraseTr": "<u>harika</u> şeyler",
            "type": "sıfat"
          },
          {
            "id": "p1_pr3_w31",
            "ar": "إِذَا",
            "root": "إِذَا",
            "meaning": "eğer, -dığı zaman",
            "phraseTr": "<u>eğer, -dığı zaman</u>",
            "type": "şart edatı"
          },
          {
            "id": "p1_pr3_w32",
            "ar": "وَضَعْتَ",
            "root": "وضع",
            "meaning": "Koydun",
            "phraseTr": "<u>Koydun</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr3_w33",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w34",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p1_pr3_w35",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-e / içine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr3_w36",
            "ar": "رِجْلَيْكَ،",
            "root": "رجل",
            "meaning": "İki bacağın",
            "phraseTr": "senin <u>ayaklarına</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p1_pr3_w37",
            "ar": "تَسْتَطِيعُ",
            "root": "طوع",
            "meaning": "Güç yetirirsin, yapabilirsin",
            "phraseTr": "<u>Güç yetirirsin, yapabilirsin</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w38",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr3_w39",
            "ar": "تَجْرِيَ",
            "root": "جري",
            "meaning": "Koşarsın",
            "phraseTr": "<u>Koşarsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w40",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "büyük bir <u>hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p1_pr3_w41",
            "ar": "كَبِيرَةٍ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir hızla",
            "type": "sıfat"
          },
          {
            "id": "p1_pr3_w42",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p1_pr3_w43",
            "ar": "الحِصَانِ.",
            "root": "حصن",
            "meaning": "At",
            "phraseTr": "<u>at</u> gibi",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w44",
            "ar": "وَإِذَا",
            "root": "إِذَا",
            "meaning": "Ve eğer, -dığı zaman",
            "phraseTr": "<u>Ve eğer, -dığı zaman</u>",
            "type": "şart edatı"
          },
          {
            "id": "p1_pr3_w45",
            "ar": "وَضَعْتَ",
            "root": "وضع",
            "meaning": "Koydun",
            "phraseTr": "<u>Koydun</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr3_w46",
            "ar": "الطَّاقَةَ",
            "root": "طوق",
            "meaning": "Enerjiyi",
            "phraseTr": "<u>Enerjiyi</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w47",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-e / içine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr3_w48",
            "ar": "يَدَيْكَ،",
            "root": "يدي",
            "meaning": "İki elin",
            "phraseTr": "senin <u>ellerine</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p1_pr3_w49",
            "ar": "تَسْتَطِيعُ",
            "root": "طوع",
            "meaning": "Güç yetirirsin, yapabilirsin",
            "phraseTr": "<u>Güç yetirirsin, yapabilirsin</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w50",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr3_w51",
            "ar": "تَرْفَعَ",
            "root": "رفع",
            "meaning": "Kaldırırsın",
            "phraseTr": "<u>Kaldırırsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w52",
            "ar": "حَجَراً",
            "root": "حجر",
            "meaning": "Taş",
            "phraseTr": "büyük bir <u>taş</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr3_w53",
            "ar": "كَبِيراً",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir taş",
            "type": "sıfat"
          },
          {
            "id": "p1_pr3_w54",
            "ar": "وَثَقِيلاً",
            "root": "ثقل",
            "meaning": "Ve Ağır",
            "phraseTr": "ve <u>ağır</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr3_w55",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> ağır",
            "type": "zarf"
          },
          {
            "id": "p1_pr3_w56",
            "ar": "وَإِذَا",
            "root": "إِذَا",
            "meaning": "Ve eğer, -dığı zaman",
            "phraseTr": "<u>Ve eğer, -dığı zaman</u>",
            "type": "şart edatı"
          },
          {
            "id": "p1_pr3_w57",
            "ar": "وَضَعْتَهَا",
            "root": "وضع",
            "meaning": "Onu koydun",
            "phraseTr": "<u>Onu koydun</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr3_w58",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-e / içine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr3_w59",
            "ar": "عَيْنَيْكَ،",
            "root": "عين",
            "meaning": "İki gözün",
            "phraseTr": "senin <u>gözlerine</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p1_pr3_w60",
            "ar": "تَسْتَطِيعُ",
            "root": "طوع",
            "meaning": "Güç yetirirsin, yapabilirsin",
            "phraseTr": "<u>Güç yetirirsin, yapabilirsin</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w61",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p1_pr3_w62",
            "ar": "تَرَى",
            "root": "رأي",
            "meaning": "Görürsün",
            "phraseTr": "<u>Görürsün</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p1_pr3_w63",
            "ar": "الأَشْيَاءَ",
            "root": "شيأ",
            "meaning": "Şeyler",
            "phraseTr": "uzaktaki <u>şeyler</u>",
            "type": "cemi isim"
          },
          {
            "id": "p1_pr3_w64",
            "ar": "البَعِيدَةَ",
            "root": "بعد",
            "meaning": "Uzak",
            "phraseTr": "<u>uzaktaki</u> şeyler",
            "type": "sıfat"
          },
          {
            "id": "p1_pr3_w65",
            "ar": "بِوُضُوحٍ.",
            "root": "وضح",
            "meaning": "net bir şekilde, açıkça",
            "phraseTr": "<u>net bir şekilde, açıkça</u>",
            "type": "zarf"
          }
        ]
      },
      {
        "pId": "p1_pr4",
        "words": [
          {
            "id": "p1_pr4_w1",
            "ar": "تَدَرَّبْتُ",
            "root": "درب",
            "meaning": "Antrenman yaptım",
            "phraseTr": "<u>Antrenman yaptım</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr4_w2",
            "ar": "مَعَ",
            "root": "مَعَ",
            "meaning": "ile, beraber",
            "phraseTr": "<u>ile</u>",
            "type": "zarf"
          },
          {
            "id": "p1_pr4_w3",
            "ar": "جَدِّي",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "<u>dedemle</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr4_w4",
            "ar": "ثَمَانِيَ",
            "root": "ثمن",
            "meaning": "sekiz",
            "phraseTr": "<u>sekiz</u> yıl",
            "type": "sayı"
          },
          {
            "id": "p1_pr4_w5",
            "ar": "سَنَوَاتٍ.",
            "root": "سنو",
            "meaning": "Yıllar",
            "phraseTr": "sekiz <u>yıl</u>",
            "type": "cemi isim"
          },
          {
            "id": "p1_pr4_w6",
            "ar": "أَصْبَحَ",
            "root": "صبح",
            "meaning": "Haline geldi, oldu",
            "phraseTr": "<u>Haline geldi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p1_pr4_w7",
            "ar": "جِسْمِي",
            "root": "جسم",
            "meaning": "Bedenim",
            "phraseTr": "<u>Bedenim</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr4_w8",
            "ar": "قَوِيّاً",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>Güçlü</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr4_w9",
            "ar": "وَسَرِيعاً.",
            "root": "سرع",
            "meaning": "Ve Hızlı",
            "phraseTr": "<u>Ve Hızlı</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr4_w10",
            "ar": "وَفِي",
            "root": "فِي",
            "meaning": "Ve -de, -da, içinde",
            "phraseTr": "<u>Ve -de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr4_w11",
            "ar": "يَوْمٍ",
            "root": "يَوْم",
            "meaning": "Gün",
            "phraseTr": "günlerden bir <u>gün</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr4_w12",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr4_w13",
            "ar": "الأَيَّامِ،",
            "root": "يَوْم",
            "meaning": "Günler",
            "phraseTr": "<u>günlerden</u> bir gün",
            "type": "isim (çoğul)"
          },
          {
            "id": "p1_pr4_w14",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p1_pr4_w15",
            "ar": "لِي",
            "root": "لِ",
            "meaning": "Bana / benim için",
            "phraseTr": "<u>Bana</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p1_pr4_w16",
            "ar": "جَدِّي:",
            "root": "جدد",
            "meaning": "Dedem",
            "phraseTr": "<u>Dedem</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr4_w17",
            "ar": "«أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p1_pr4_w18",
            "ar": "الآنَ",
            "root": "أون",
            "meaning": "şimdi, şu an",
            "phraseTr": "<u>şimdi, şu an</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p1_pr4_w19",
            "ar": "جَاهِزٌ",
            "root": "جهز",
            "meaning": "Hazır",
            "phraseTr": "<u>Hazır</u>",
            "type": "sıfat"
          },
          {
            "id": "p1_pr4_w20",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p1_pr4_w21",
            "ar": "رَامِي.",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p1_pr4_w22",
            "ar": "اذْهَبْ",
            "root": "ذهب",
            "meaning": "Git!",
            "phraseTr": "<u>Git!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p1_pr4_w23",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr4_w24",
            "ar": "المَدِينَةِ",
            "root": "مدن",
            "meaning": "Şehir",
            "phraseTr": "büyük <u>şehir</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr4_w25",
            "ar": "الكَبِيرَةِ،",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> şehir",
            "type": "sıfat"
          },
          {
            "id": "p1_pr4_w26",
            "ar": "وَشَارِكْ",
            "root": "شرك",
            "meaning": "Ve Katıl!",
            "phraseTr": "<u>Ve Katıl!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p1_pr4_w27",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p1_pr4_w28",
            "ar": "المُسَابَقَةِ",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "büyük <u>yarışma</u>",
            "type": "isim"
          },
          {
            "id": "p1_pr4_w29",
            "ar": "الكَبِيرَةِ.»",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> yarışma",
            "type": "sıfat"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 2,
    "title": "الصَّفْحَةُ الثَّانِيَةُ (2)",
    "paragraphs": [
      {
        "pId": "p2_pr1",
        "words": [
          {
            "id": "p2_pr1_w1",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr1_w2",
            "ar": "الصَّبَاحِ",
            "root": "صَبَحَ",
            "meaning": "Sabah",
            "phraseTr": "<u>sabahleyin</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w3",
            "ar": "البَاكِرِ،",
            "root": "بَكَرَ",
            "meaning": "Erken vakit",
            "phraseTr": "<u>erken</u> sabah",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w4",
            "ar": "وَصَلَ",
            "root": "وصل",
            "meaning": "Ulaştı",
            "phraseTr": "<u>Ulaştı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr1_w5",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr1_w6",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr1_w7",
            "ar": "المَدِينَةِ",
            "root": "مدن",
            "meaning": "Şehir",
            "phraseTr": "büyük <u>şehir</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w8",
            "ar": "الكَبِيرَةِ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> şehir",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w9",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr1_w10",
            "ar": "الجَوُّ",
            "root": "جَوّ",
            "meaning": "Hava durumu, atmosfer",
            "phraseTr": "<u>Hava durumu, atmosfer</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w11",
            "ar": "بَارِداً",
            "root": "برد",
            "meaning": "Soğuk",
            "phraseTr": "<u>Soğuk</u>",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w12",
            "ar": "قَلِيلاً.",
            "root": "قلل",
            "meaning": "biraz, az",
            "phraseTr": "<u>biraz, az</u>",
            "type": "zarf"
          },
          {
            "id": "p2_pr1_w13",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr1_w14",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr1_w15",
            "ar": "يَلْبَسُ",
            "root": "لبس",
            "meaning": "Giyer",
            "phraseTr": "<u>Giyer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr1_w16",
            "ar": "قَمِيصاً",
            "root": "قمص",
            "meaning": "Bir gömlek",
            "phraseTr": "yeşil <u>gömlek</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w17",
            "ar": "أَخْضَرَ",
            "root": "خضر",
            "meaning": "Yeşil",
            "phraseTr": "<u>yeşil</u> gömlek",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w18",
            "ar": "بَسِيطاً",
            "root": "بسط",
            "meaning": "Sade, basit",
            "phraseTr": "<u>sade</u> yeşil",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w19",
            "ar": "وَحِذَاءً",
            "root": "حذو",
            "meaning": "Ve Ayakkabı",
            "phraseTr": "<u>Ve Ayakkabı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w20",
            "ar": "خَفِيفاً،",
            "root": "خفف",
            "meaning": "Hafif",
            "phraseTr": "<u>Hafif</u>",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w21",
            "ar": "وَيَحْمِلُ",
            "root": "حمل",
            "meaning": "Ve Taşır",
            "phraseTr": "<u>Ve Taşır</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr1_w22",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr1_w23",
            "ar": "ظَهْرِهِ",
            "root": "ظَهَرَ",
            "meaning": "Sırtı",
            "phraseTr": "onun <u>sırtında</u>",
            "type": "isim + zamir"
          },
          {
            "id": "p2_pr1_w24",
            "ar": "حَقِيبَةً",
            "root": "حقب",
            "meaning": "Bir çanta",
            "phraseTr": "küçük <u>çanta</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w25",
            "ar": "صَغِيرَةً.",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> çanta",
            "type": "sıfat"
          },
          {
            "id": "p2_pr1_w26",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr1_w27",
            "ar": "الحَقِيبَةِ",
            "root": "حقب",
            "meaning": "Çanta",
            "phraseTr": "<u>çantada</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w28",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr1_w29",
            "ar": "يُوجَدُ",
            "root": "وجد",
            "meaning": "Bulunur, vardır",
            "phraseTr": "<u>Bulunur, vardır</u>",
            "type": "meçhul fiil"
          },
          {
            "id": "p2_pr1_w30",
            "ar": "خُبْزٌ،",
            "root": "خبز",
            "meaning": "Ekmek",
            "phraseTr": "<u>Ekmek</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w31",
            "ar": "وَتُفَّاحٌ،",
            "root": "تفح",
            "meaning": "Ve Elma",
            "phraseTr": "<u>Ve Elma</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w32",
            "ar": "وَزُجَاجَةُ",
            "root": "زجج",
            "meaning": "Ve Şişe",
            "phraseTr": "<u>Ve Şişe</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w33",
            "ar": "مَاءٍ",
            "root": "موه",
            "meaning": "Su",
            "phraseTr": "<u>Su</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr1_w34",
            "ar": "فَقَطْ.",
            "root": "فقط",
            "meaning": "yalnızca, sadece",
            "phraseTr": "<u>yalnızca, sadece</u>",
            "type": "edat"
          }
        ]
      },
      {
        "pId": "p2_pr2",
        "words": [
          {
            "id": "p2_pr2_w1",
            "ar": "وَقَفَ",
            "root": "وقف",
            "meaning": "Durdu",
            "phraseTr": "<u>Durdu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr2_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr2_w3",
            "ar": "أَمَامَ",
            "root": "أمم",
            "meaning": "önünde, önüne",
            "phraseTr": "<u>önünde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr2_w4",
            "ar": "بَابٍ",
            "root": "ب Web",
            "meaning": "Bir kapı",
            "phraseTr": "<u>kapının</u> önünde",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w5",
            "ar": "كَبِيرٍ",
            "root": "كبر",
            "meaning": "Büyük, yaşlı",
            "phraseTr": "<u>büyük</u> kapı",
            "type": "sıfat"
          },
          {
            "id": "p2_pr2_w6",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p2_pr2_w7",
            "ar": "مَصْنُوعٍ",
            "root": "صنع",
            "meaning": "Yapılmış",
            "phraseTr": "demirden <u>yapılmış</u>",
            "type": "ism-i meful"
          },
          {
            "id": "p2_pr2_w8",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w9",
            "ar": "الحَدِيدِ.",
            "root": "حدد",
            "meaning": "Demir",
            "phraseTr": "<u>demirden</u> yapılmış",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w10",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u>",
            "type": "işaret ismi"
          },
          {
            "id": "p2_pr2_w11",
            "ar": "هُوَ",
            "root": "هُوَ",
            "meaning": "O",
            "phraseTr": "<u>O</u>",
            "type": "zamir"
          },
          {
            "id": "p2_pr2_w12",
            "ar": "بَابُ",
            "root": "بوب",
            "meaning": "Kapısı",
            "phraseTr": "yarışma <u>kapısı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w13",
            "ar": "المُسَابَقَةِ",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "büyük <u>yarışma</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w14",
            "ar": "الكَبِيرَةِ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> yarışma",
            "type": "sıfat"
          },
          {
            "id": "p2_pr2_w15",
            "ar": "هَذِهِ",
            "root": "ذه",
            "meaning": "Bu (dişil)",
            "phraseTr": "<u>Bu</u> yarışma",
            "type": "işaret ismi"
          },
          {
            "id": "p2_pr2_w16",
            "ar": "المُسَابَقَةُ",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "Bu <u>yarışma</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w17",
            "ar": "تَحْدُثُ",
            "root": "حدث",
            "meaning": "Gerçekleşir",
            "phraseTr": "<u>Gerçekleşir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w18",
            "ar": "مَرَّةً",
            "root": "مَرَّ",
            "meaning": "Bir kere, defa",
            "phraseTr": "bir <u>kez</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w19",
            "ar": "وَاحِدَةً",
            "root": "وحد",
            "meaning": "bir, bir defa",
            "phraseTr": "<u>tek</u> bir kez",
            "type": "sayı"
          },
          {
            "id": "p2_pr2_w20",
            "ar": "كُلَّ",
            "root": "كلل",
            "meaning": "her",
            "phraseTr": "<u>her</u>",
            "type": "zarf"
          },
          {
            "id": "p2_pr2_w21",
            "ar": "ثَلاَثِ",
            "root": "ثلث",
            "meaning": "üç",
            "phraseTr": "<u>üç</u> yıl",
            "type": "sayı"
          },
          {
            "id": "p2_pr2_w22",
            "ar": "سَنَوَاتٍ.",
            "root": "سنو",
            "meaning": "Yıllar",
            "phraseTr": "üç <u>yıl</u>",
            "type": "cemi isim"
          },
          {
            "id": "p2_pr2_w23",
            "ar": "يَأْتِي",
            "root": "أتي",
            "meaning": "Gelir",
            "phraseTr": "<u>Gelir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w24",
            "ar": "إِلَيْهَا",
            "root": "إِلَى",
            "meaning": "Oraya, ona",
            "phraseTr": "<u>Oraya, ona</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p2_pr2_w25",
            "ar": "النَّاسُ",
            "root": "نوس",
            "meaning": "İnsanlar",
            "phraseTr": "güçlü <u>insanlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p2_pr2_w26",
            "ar": "الأَقْوِيَاءُ",
            "root": "قوو",
            "meaning": "Güçlüler",
            "phraseTr": "<u>güçlü</u> insanlar",
            "type": "cemi sıfat"
          },
          {
            "id": "p2_pr2_w27",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w28",
            "ar": "كُلِّ",
            "root": "كلل",
            "meaning": "bütün, her",
            "phraseTr": "<u>bütün</u> ülkeler",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w29",
            "ar": "البُلْدَانِ.",
            "root": "بلد",
            "meaning": "Ülkeler",
            "phraseTr": "bütün <u>ülkeler</u>",
            "type": "cemi isim"
          },
          {
            "id": "p2_pr2_w30",
            "ar": "الشَّخْصُ",
            "root": "شخص",
            "meaning": "Kişi",
            "phraseTr": "<u>kişi</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w31",
            "ar": "الَّذِي",
            "root": "الذي",
            "meaning": "-an, -en, olan",
            "phraseTr": "olan <u>kimse</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p2_pr2_w32",
            "ar": "يَفُوزُ",
            "root": "فوز",
            "meaning": "Kazanır",
            "phraseTr": "<u>Kazanır</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w33",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w34",
            "ar": "المُسَابَقَةِ",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "<u>Yarışma</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w35",
            "ar": "يَحْصُلُ",
            "root": "حصل",
            "meaning": "Elde eder",
            "phraseTr": "<u>Elde eder</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w36",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w37",
            "ar": "لَقَبِ",
            "root": "لقب",
            "meaning": "Unvan",
            "phraseTr": "şampiyon <u>unvanı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w38",
            "ar": "البَطَلِ",
            "root": "بطل",
            "meaning": "Şampiyon",
            "phraseTr": "<u>şampiyon</u> unvanı",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w39",
            "ar": "الأَوَّلِ،",
            "root": "أول",
            "meaning": "birinci, ilk",
            "phraseTr": "<u>birinci</u> şampiyon",
            "type": "sıra sayısı"
          },
          {
            "id": "p2_pr2_w40",
            "ar": "وَيَحْصُلُ",
            "root": "حصل",
            "meaning": "Ve Elde eder",
            "phraseTr": "<u>Ve Elde eder</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w41",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w42",
            "ar": "مَالٍ",
            "root": "مول",
            "meaning": "Para",
            "phraseTr": "çok <u>para</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w43",
            "ar": "كَثِيرٍ،",
            "root": "كَثُرَ",
            "meaning": "Çok, birçok",
            "phraseTr": "<u>çok</u> para",
            "type": "sıfat"
          },
          {
            "id": "p2_pr2_w44",
            "ar": "وَيَسْتَطِيعُ",
            "root": "طوع",
            "meaning": "Ve Güç yetirir, yapabilir",
            "phraseTr": "<u>Ve Güç yetirir, yapabilir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w45",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p2_pr2_w46",
            "ar": "يَدْخُلَ",
            "root": "دخل",
            "meaning": "Girer",
            "phraseTr": "<u>Girer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr2_w47",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w48",
            "ar": "أَيِّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>herhangi</u> bir yer",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p2_pr2_w49",
            "ar": "مَكَانٍ",
            "root": "كون",
            "meaning": "Bir yer",
            "phraseTr": "herhangi bir <u>yer</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr2_w50",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr2_w51",
            "ar": "العَالَمِ.",
            "root": "علم",
            "meaning": "Dünya",
            "phraseTr": "<u>dünyada</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p2_pr3",
        "words": [
          {
            "id": "p2_pr3_w1",
            "ar": "فَتَحَ",
            "root": "فتح",
            "meaning": "Açtı",
            "phraseTr": "<u>Açtı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr3_w2",
            "ar": "الحُرَّاسُ",
            "root": "حرس",
            "meaning": "Muhafızlar",
            "phraseTr": "<u>Muhafızlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p2_pr3_w3",
            "ar": "البَابَ",
            "root": "بوب",
            "meaning": "Kapıyı",
            "phraseTr": "demir <u>kapı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w4",
            "ar": "الحَدِيدِيَّ",
            "root": "حدد",
            "meaning": "Demir",
            "phraseTr": "<u>demir</u> kapı",
            "type": "sıfat"
          },
          {
            "id": "p2_pr3_w5",
            "ar": "الكَبِيرَ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p2_pr3_w6",
            "ar": "دَخَلَ",
            "root": "دخل",
            "meaning": "Girdi",
            "phraseTr": "<u>Girdi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr3_w7",
            "ar": "رَامِي،",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr3_w8",
            "ar": "وَمَشَى",
            "root": "مشي",
            "meaning": "Ve Yürüdü",
            "phraseTr": "<u>Ve Yürüdü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr3_w9",
            "ar": "فَوْقَ",
            "root": "فوق",
            "meaning": "üstünde, üzerine",
            "phraseTr": "<u>üstünde, üzerine</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr3_w10",
            "ar": "دَرَجٍ",
            "root": "درج",
            "meaning": "Merdiven",
            "phraseTr": "uzun <u>merdiven</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w11",
            "ar": "طَوِيلٍ",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>uzun</u> merdiven",
            "type": "sıfat"
          },
          {
            "id": "p2_pr3_w12",
            "ar": "يَنْزِلُ",
            "root": "نزل",
            "meaning": "İner",
            "phraseTr": "<u>İner</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr3_w13",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr3_w14",
            "ar": "تَحْتِ",
            "root": "تحت",
            "meaning": "altında, altına",
            "phraseTr": "<u>altında</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr3_w15",
            "ar": "الأَرْضِ.",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerin</u> altında",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w16",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr3_w17",
            "ar": "الدَّرَجُ",
            "root": "درج",
            "meaning": "Merdiven",
            "phraseTr": "<u>Merdiven</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w18",
            "ar": "مُظْلِماً،",
            "root": "ظلم",
            "meaning": "Karanlık",
            "phraseTr": "<u>Karanlık</u>",
            "type": "sıfat"
          },
          {
            "id": "p2_pr3_w19",
            "ar": "وَلَكِنْ",
            "root": "لَكِنْ",
            "meaning": "Ve lakin, fakat",
            "phraseTr": "<u>Ve lakin, fakat</u>",
            "type": "bağlaç + istidrak"
          },
          {
            "id": "p2_pr3_w20",
            "ar": "كَانَتْ",
            "root": "كون",
            "meaning": "İdi (dişil)",
            "phraseTr": "<u>İdi</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr3_w21",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr3_w22",
            "ar": "نَارٌ",
            "root": "نور",
            "meaning": "Ateş",
            "phraseTr": "küçük <u>ateş</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w23",
            "ar": "صَغِيرَةٌ",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> ateş",
            "type": "sıfat"
          },
          {
            "id": "p2_pr3_w24",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr3_w25",
            "ar": "الجِدَارِ",
            "root": "جدر",
            "meaning": "Duvar",
            "phraseTr": "<u>duvarda</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w26",
            "ar": "تُعْطِي",
            "root": "عطو",
            "meaning": "Verir",
            "phraseTr": "<u>Verir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr3_w27",
            "ar": "ضَوْءاً",
            "root": "ضوء",
            "meaning": "Işık",
            "phraseTr": "<u>Işık</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr3_w28",
            "ar": "لِلْمَكَانِ.",
            "root": "كون",
            "meaning": "... için Bir yer",
            "phraseTr": "<u>... için Bir yer</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p2_pr4",
        "words": [
          {
            "id": "p2_pr4_w1",
            "ar": "وَصَلَ",
            "root": "وصل",
            "meaning": "Ulaştı",
            "phraseTr": "<u>Ulaştı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr4_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr4_w3",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr4_w4",
            "ar": "غُرْفَةٍ",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "geniş <u>salon / oda</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w5",
            "ar": "وَاسِعَةٍ",
            "root": "وسع",
            "meaning": "Geniş",
            "phraseTr": "<u>geniş</u> salon / oda",
            "type": "sıfat"
          },
          {
            "id": "p2_pr4_w6",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p2_pr4_w7",
            "ar": "تَحْتَ",
            "root": "تحت",
            "meaning": "altında, altına",
            "phraseTr": "<u>altında</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr4_w8",
            "ar": "الأَرْضِ.",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerin</u> altında",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w9",
            "ar": "عِنْدَ",
            "root": "عِنْد",
            "meaning": "Yanında, -de",
            "phraseTr": "<u>yanında</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr4_w10",
            "ar": "البَابِ،",
            "root": "بوب",
            "meaning": "Kapı",
            "phraseTr": "<u>kapının</u> yanında",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w11",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr4_w12",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr4_w13",
            "ar": "رَجُلٌ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w14",
            "ar": "يَجْلِسُ",
            "root": "جلس",
            "meaning": "Oturur",
            "phraseTr": "<u>Oturur</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p2_pr4_w15",
            "ar": "أَمَامَ",
            "root": "أمم",
            "meaning": "önünde, önüne",
            "phraseTr": "<u>önünde, önüne</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p2_pr4_w16",
            "ar": "طَاوِلَةٍ",
            "root": "طول",
            "meaning": "Masa",
            "phraseTr": "küçük <u>masa</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w17",
            "ar": "صَغِيرَةٍ.",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> masa",
            "type": "sıfat"
          },
          {
            "id": "p2_pr4_w18",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr4_w19",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w20",
            "ar": "لِرَامِي:",
            "root": "رَامِي",
            "meaning": "... için Rami (baş kahraman)",
            "phraseTr": "<u>... için Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr4_w21",
            "ar": "«مَرْحَباً",
            "root": "رَحِبَ",
            "meaning": "Merhaba!",
            "phraseTr": "<u>Merhaba!</u>",
            "type": "ünlem"
          },
          {
            "id": "p2_pr4_w22",
            "ar": "بِكَ.",
            "root": "بِ",
            "meaning": "Seninle / sana",
            "phraseTr": "<u>Seninle</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p2_pr4_w23",
            "ar": "مَا",
            "root": "ما",
            "meaning": "ne, şey",
            "phraseTr": "<u>ne, şey</u>",
            "type": "soru / nefy"
          },
          {
            "id": "p2_pr4_w24",
            "ar": "اسْمُكَ؟»",
            "root": "سمو",
            "meaning": "Adın",
            "phraseTr": "<u>Adın</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w25",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr4_w26",
            "ar": "رَامِي:",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr4_w27",
            "ar": "«اسْمِي",
            "root": "سمو",
            "meaning": "Adım",
            "phraseTr": "<u>Adım</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w28",
            "ar": "رَامِي.»",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p2_pr4_w29",
            "ar": "أَعْطَاهُ",
            "root": "عطو",
            "meaning": "Ona verdi",
            "phraseTr": "<u>Ona verdi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr4_w30",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w31",
            "ar": "وَرَقَةً",
            "root": "ورق",
            "meaning": "Bir kağıt",
            "phraseTr": "yuvarlak <u>kağıt / rozet</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w32",
            "ar": "دَائِرِيَّةً",
            "root": "دور",
            "meaning": "Yuvarlak",
            "phraseTr": "<u>yuvarlak</u> kağıt / rozet",
            "type": "sıfat"
          },
          {
            "id": "p2_pr4_w33",
            "ar": "بَيْضَاءَ.",
            "root": "بيض",
            "meaning": "Beyaz",
            "phraseTr": "<u>beyaz</u> rozet",
            "type": "sıfat"
          },
          {
            "id": "p2_pr4_w34",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p2_pr4_w35",
            "ar": "مَكْتُوباً",
            "root": "كتب",
            "meaning": "Yazılmış",
            "phraseTr": "<u>Yazılmış</u>",
            "type": "ism-i meful"
          },
          {
            "id": "p2_pr4_w36",
            "ar": "عَلَيْهَا",
            "root": "عَلَى",
            "meaning": "Üzerinde",
            "phraseTr": "<u>Üzerinde</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p2_pr4_w37",
            "ar": "الرَّقْمُ",
            "root": "رقم",
            "meaning": "Numara",
            "phraseTr": "<u>Numara</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w38",
            "ar": "405.",
            "root": "",
            "meaning": "405.",
            "phraseTr": "405.",
            "type": "sayı/noktalama"
          },
          {
            "id": "p2_pr4_w39",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p2_pr4_w40",
            "ar": "الرَّجُلُ:",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w41",
            "ar": "«ضَعْ",
            "root": "وضع",
            "meaning": "Koy!",
            "phraseTr": "<u>Koy!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p2_pr4_w42",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u>",
            "type": "işaret ismi"
          },
          {
            "id": "p2_pr4_w43",
            "ar": "الرَّقْمَ",
            "root": "رقم",
            "meaning": "Numarayı",
            "phraseTr": "<u>Numarayı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w44",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr4_w45",
            "ar": "صَدْرِكَ",
            "root": "صدر",
            "meaning": "Göğsün",
            "phraseTr": "senin <u>göğsünde</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w46",
            "ar": "دَائِماً.",
            "root": "دوم",
            "meaning": "daima, her zaman",
            "phraseTr": "<u>daima, her zaman</u>",
            "type": "zarf"
          },
          {
            "id": "p2_pr4_w47",
            "ar": "أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p2_pr4_w48",
            "ar": "المُتَسَابِقُ",
            "root": "سبق",
            "meaning": "Yarışmacı",
            "phraseTr": "<u>Yarışmacı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w49",
            "ar": "رَقْمُ",
            "root": "رقم",
            "meaning": "Numaralı",
            "phraseTr": "<u>Numaralı</u>",
            "type": "isim"
          },
          {
            "id": "p2_pr4_w50",
            "ar": "أَرْبَعِمِائَةٍ",
            "root": "ربع / مائة",
            "meaning": "dört yüz",
            "phraseTr": "<u>dört yüz</u>",
            "type": "sayı"
          },
          {
            "id": "p2_pr4_w51",
            "ar": "وَخَمْسَةٍ.",
            "root": "خمس",
            "meaning": "Ve beş",
            "phraseTr": "<u>Ve beş</u>",
            "type": "sayı"
          },
          {
            "id": "p2_pr4_w52",
            "ar": "ادْخُلْ",
            "root": "دخل",
            "meaning": "Gir!",
            "phraseTr": "<u>Gir!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p2_pr4_w53",
            "ar": "وَانْتَظِرْ",
            "root": "نظر",
            "meaning": "Ve Bekle!",
            "phraseTr": "<u>Ve Bekle!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p2_pr4_w54",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p2_pr4_w55",
            "ar": "الدَّاخِلِ.»",
            "root": "دَخَلَ",
            "meaning": "İçerisi",
            "phraseTr": "<u>içeride</u>",
            "type": "isim"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 3,
    "title": "الصَّفْحَةُ الثَّالِثَةُ (3)",
    "paragraphs": [
      {
        "pId": "p3_pr1",
        "words": [
          {
            "id": "p3_pr1_w1",
            "ar": "وَضَعَ",
            "root": "وضع",
            "meaning": "Koydu",
            "phraseTr": "<u>Koydu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr1_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr1_w3",
            "ar": "الرَّقْمَ",
            "root": "رقم",
            "meaning": "Numarayı",
            "phraseTr": "<u>Numarayı</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w4",
            "ar": "405",
            "root": "",
            "meaning": "405",
            "phraseTr": "405",
            "type": "sayı/noktalama"
          },
          {
            "id": "p3_pr1_w5",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr1_w6",
            "ar": "قَمِيصِهِ،",
            "root": "قمص",
            "meaning": "Gömleği",
            "phraseTr": "<u>Gömleği</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w7",
            "ar": "وَمَشَى",
            "root": "مشي",
            "meaning": "Ve Yürüdü",
            "phraseTr": "<u>Ve Yürüdü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr1_w8",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr1_w9",
            "ar": "وَسَطِ",
            "root": "وَسَط",
            "meaning": "Ortasında, orta",
            "phraseTr": "odanın <u>ortası</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w10",
            "ar": "الغُرْفَةِ",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "<u>odanın</u> ortası",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w11",
            "ar": "الكَبِيرَةِ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr1_w12",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr1_w13",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr1_w14",
            "ar": "حَوْلَهُ",
            "root": "حول",
            "meaning": "etrafına, çevresine",
            "phraseTr": "<u>etrafına, çevresine</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p3_pr1_w15",
            "ar": "بِعَيْنَيْنِ",
            "root": "عين",
            "meaning": "... ile İki göz",
            "phraseTr": "<u>... ile İki göz</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p3_pr1_w16",
            "ar": "وَاسِعَتَيْنِ.",
            "root": "وَسُعَ",
            "meaning": "İki iri / kocaman",
            "phraseTr": "<u>İki iri</u>",
            "type": "sıfat (tesniye)"
          },
          {
            "id": "p3_pr1_w17",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p3_pr1_w18",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr1_w19",
            "ar": "الغُرْفَةِ",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "<u>Oda</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w20",
            "ar": "أَكْثَرُ",
            "root": "كثر",
            "meaning": "Daha çok, çoğu",
            "phraseTr": "<u>Daha çok, çoğu</u>",
            "type": "ismi tafdil"
          },
          {
            "id": "p3_pr1_w21",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr1_w22",
            "ar": "أَرْبَعِمِائَةِ",
            "root": "ربع / مائة",
            "meaning": "dört yüz",
            "phraseTr": "<u>dört yüz</u> kişi",
            "type": "sayı"
          },
          {
            "id": "p3_pr1_w23",
            "ar": "شَخْصٍ!",
            "root": "شخص",
            "meaning": "Kişi",
            "phraseTr": "dört yüz <u>kişi</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w24",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p3_pr1_w25",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p3_pr1_w26",
            "ar": "رِجَالٌ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "iri <u>adamlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr1_w27",
            "ar": "كِبَارٌ",
            "root": "كبر",
            "meaning": "Büyükler, yaşlılar",
            "phraseTr": "<u>iri</u> adamlar",
            "type": "cemi sıfat"
          },
          {
            "id": "p3_pr1_w28",
            "ar": "وَأَقْوِيَاءُ",
            "root": "قَوِيَ",
            "meaning": "Ve güçlüler",
            "phraseTr": "ve <u>güçlüler</u>",
            "type": "bağlaç + sıfat"
          },
          {
            "id": "p3_pr1_w29",
            "ar": "جِدّاً،",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> güçlüler",
            "type": "zarf"
          },
          {
            "id": "p3_pr1_w30",
            "ar": "وَنِسَاءٌ",
            "root": "نسو",
            "meaning": "Ve Kadınlar",
            "phraseTr": "<u>Ve Kadınlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr1_w31",
            "ar": "سَرِيعَاتٌ،",
            "root": "سرع",
            "meaning": "Hızlılar",
            "phraseTr": "<u>Hızlılar</u>",
            "type": "cemi sıfat"
          },
          {
            "id": "p3_pr1_w32",
            "ar": "وَمُحَارِبُونَ",
            "root": "حرب",
            "meaning": "Ve Savaşçılar",
            "phraseTr": "<u>Ve Savaşçılar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr1_w33",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr1_w34",
            "ar": "كُلِّ",
            "root": "كلل",
            "meaning": "bütün, her",
            "phraseTr": "<u>her</u> yer",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w35",
            "ar": "مَكَانٍ.",
            "root": "كون",
            "meaning": "Bir yer",
            "phraseTr": "her <u>yer</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w36",
            "ar": "لَمْ",
            "root": "لَمْ",
            "meaning": "-medi, -madı",
            "phraseTr": "<u>-medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p3_pr1_w37",
            "ar": "يَكُنْ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p3_pr1_w38",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p3_pr1_w39",
            "ar": "أَطْفَالٌ",
            "root": "طفل",
            "meaning": "Çocuklar",
            "phraseTr": "<u>Çocuklar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr1_w40",
            "ar": "أَوْ",
            "root": "أَوْ",
            "meaning": "veya, yahut",
            "phraseTr": "<u>veya, yahut</u>",
            "type": "bağlaç"
          },
          {
            "id": "p3_pr1_w41",
            "ar": "أَوْلاَدٌ",
            "root": "ولد",
            "meaning": "Çocuklar",
            "phraseTr": "küçük <u>çocuklar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr1_w42",
            "ar": "صِغَارٌ؛",
            "root": "صغر",
            "meaning": "Küçükler",
            "phraseTr": "<u>küçük</u> çocuklar",
            "type": "cemi sıfat"
          },
          {
            "id": "p3_pr1_w43",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p3_pr1_w44",
            "ar": "الجَمِيعُ",
            "root": "جَمَعَ",
            "meaning": "Herkes, hepsi",
            "phraseTr": "<u>Herkes, hepsi</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr1_w45",
            "ar": "كِبَاراً",
            "root": "كبر",
            "meaning": "Büyükler",
            "phraseTr": "<u>Büyükler</u>",
            "type": "cemi sıfat"
          },
          {
            "id": "p3_pr1_w46",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr1_w47",
            "ar": "السِّنِّ.",
            "root": "سِنّ",
            "meaning": "Yaş",
            "phraseTr": "<u>yaşça</u> (yetişkin)",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p3_pr2",
        "words": [
          {
            "id": "p3_pr2_w1",
            "ar": "اقْتَرَبَ",
            "root": "قرب",
            "meaning": "Yaklaştı",
            "phraseTr": "<u>Yaklaştı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr2_w2",
            "ar": "رَجُلٌ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w3",
            "ar": "كَبِيرٌ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr2_w4",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr2_w5",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr2_w6",
            "ar": "رَامِي.",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr2_w7",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p3_pr2_w8",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> adam",
            "type": "işaret ismi"
          },
          {
            "id": "p3_pr2_w9",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "Bu <u>adam</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w10",
            "ar": "طَوِيلاً",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>Uzun</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr2_w11",
            "ar": "وَعَرِيضاً",
            "root": "عرض",
            "meaning": "Ve Geniş, yapılı",
            "phraseTr": "<u>Ve Geniş, yapılı</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr2_w12",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p3_pr2_w13",
            "ar": "الدُّبِّ،",
            "root": "دبب",
            "meaning": "Ayı",
            "phraseTr": "<u>ayı</u> gibi",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w14",
            "ar": "وَلَهُ",
            "root": "لِ",
            "meaning": "Ve onun vardır",
            "phraseTr": "<u>Ve onun vardır</u>",
            "type": "bağlaç + harf + zamir"
          },
          {
            "id": "p3_pr2_w15",
            "ar": "لِحْيَةٌ",
            "root": "لحي",
            "meaning": "Sakal",
            "phraseTr": "siyah <u>sakal</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w16",
            "ar": "سَوْدَاءُ",
            "root": "سود",
            "meaning": "Siyah",
            "phraseTr": "<u>siyah</u> sakal",
            "type": "sıfat"
          },
          {
            "id": "p3_pr2_w17",
            "ar": "طَوِيلَةٌ،",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>uzun</u> sakal",
            "type": "sıfat"
          },
          {
            "id": "p3_pr2_w18",
            "ar": "وَرَقْمُهُ",
            "root": "رقم",
            "meaning": "Ve Numarası",
            "phraseTr": "<u>Ve Numarası</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w19",
            "ar": "12.",
            "root": "",
            "meaning": "12.",
            "phraseTr": "12.",
            "type": "sayı/noktalama"
          },
          {
            "id": "p3_pr2_w20",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr2_w21",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w22",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr2_w23",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr2_w24",
            "ar": "وَضَحِكَ",
            "root": "ضحك",
            "meaning": "Ve Güldü",
            "phraseTr": "<u>Ve Güldü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr2_w25",
            "ar": "بِصَوْتٍ",
            "root": "صوت",
            "meaning": "... ile Ses",
            "phraseTr": "yüksek <u>sesle</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w26",
            "ar": "عَالٍ:",
            "root": "علو",
            "meaning": "Yüksek",
            "phraseTr": "<u>yüksek</u> sesle",
            "type": "sıfat"
          },
          {
            "id": "p3_pr2_w27",
            "ar": "«هَا",
            "root": "صَوْت",
            "meaning": "Ha! (kahkaha)",
            "phraseTr": "<u>Ha!</u>",
            "type": "ünlem"
          },
          {
            "id": "p3_pr2_w28",
            "ar": "هَا",
            "root": "صَوْت",
            "meaning": "Ha! (kahkaha)",
            "phraseTr": "<u>Ha!</u>",
            "type": "ünlem"
          },
          {
            "id": "p3_pr2_w29",
            "ar": "هَا!",
            "root": "صَوْت",
            "meaning": "Ha! (kahkaha)",
            "phraseTr": "<u>Ha!</u>",
            "type": "ünlem"
          },
          {
            "id": "p3_pr2_w30",
            "ar": "انْظُرُوا",
            "root": "نظر",
            "meaning": "Bakın!",
            "phraseTr": "<u>Bakın!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p3_pr2_w31",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p3_pr2_w32",
            "ar": "رِجَالُ!",
            "root": "رجل",
            "meaning": "Adamlar!",
            "phraseTr": "<u>Adamlar!</u>",
            "type": "münada"
          },
          {
            "id": "p3_pr2_w33",
            "ar": "يُوجَدُ",
            "root": "وجد",
            "meaning": "Bulunur, vardır",
            "phraseTr": "<u>Bulunur, vardır</u>",
            "type": "meçhul fiil"
          },
          {
            "id": "p3_pr2_w34",
            "ar": "هُنَا",
            "root": "هنا",
            "meaning": "burada, buraya",
            "phraseTr": "<u>burada, buraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p3_pr2_w35",
            "ar": "وَلَدٌ",
            "root": "ولد",
            "meaning": "Erkek çocuk",
            "phraseTr": "küçük <u>velet</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr2_w36",
            "ar": "صَغِيرٌ!»",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> velet",
            "type": "sıfat"
          }
        ]
      },
      {
        "pId": "p3_pr3",
        "words": [
          {
            "id": "p3_pr3_w1",
            "ar": "ضَحِكَ",
            "root": "ضحك",
            "meaning": "Güldü",
            "phraseTr": "<u>Güldü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr3_w2",
            "ar": "بَعْضُ",
            "root": "بعض",
            "meaning": "Bir kısım, bazıları",
            "phraseTr": "<u>Bir kısım, bazıları</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr3_w3",
            "ar": "الرِّجَالِ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "<u>Adamlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr3_w4",
            "ar": "الآخَرِينَ.",
            "root": "أَخِر",
            "meaning": "Diğerleri, başkaları",
            "phraseTr": "<u>Diğerleri, başkaları</u>",
            "type": "sıfat (çoğul)"
          },
          {
            "id": "p3_pr3_w5",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr3_w6",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr3_w7",
            "ar": "الكَبِيرُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr3_w8",
            "ar": "لِرَامِي:",
            "root": "رَامِي",
            "meaning": "... için Rami (baş kahraman)",
            "phraseTr": "<u>... için Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr3_w9",
            "ar": "«يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p3_pr3_w10",
            "ar": "صَغِيرِي،",
            "root": "صغر",
            "meaning": "Küçüğüm",
            "phraseTr": "<u>Küçüğüm</u>",
            "type": "sıfat / münada"
          },
          {
            "id": "p3_pr3_w11",
            "ar": "هَذِهِ",
            "root": "ذه",
            "meaning": "Bu (dişil)",
            "phraseTr": "<u>Bu</u>",
            "type": "işaret ismi"
          },
          {
            "id": "p3_pr3_w12",
            "ar": "مُسَابَقَةٌ",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "tehlikeli <u>yarışma</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr3_w13",
            "ar": "خَطِيرَةٌ",
            "root": "خطر",
            "meaning": "Tehlikeli",
            "phraseTr": "<u>tehlikeli</u> yarışma",
            "type": "sıfat"
          },
          {
            "id": "p3_pr3_w14",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr3_w15",
            "ar": "النَّاسُ",
            "root": "نوس",
            "meaning": "İnsanlar",
            "phraseTr": "<u>İnsanlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p3_pr3_w16",
            "ar": "هُنَا",
            "root": "هنا",
            "meaning": "burada, buraya",
            "phraseTr": "<u>burada, buraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p3_pr3_w17",
            "ar": "يَتَعَارَكُونَ",
            "root": "عرك",
            "meaning": "Dövüşürler",
            "phraseTr": "<u>Dövüşürler</u>",
            "type": "cemi muzari"
          },
          {
            "id": "p3_pr3_w18",
            "ar": "وَيَتْعَبُونَ",
            "root": "تعب",
            "meaning": "Ve Yorulurlar",
            "phraseTr": "<u>Ve Yorulurlar</u>",
            "type": "cemi muzari"
          },
          {
            "id": "p3_pr3_w19",
            "ar": "كَثِيراً.",
            "root": "كثر",
            "meaning": "çok, fazlaca",
            "phraseTr": "<u>çok, fazlaca</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr3_w20",
            "ar": "اذْهَبْ",
            "root": "ذهب",
            "meaning": "Git!",
            "phraseTr": "<u>Git!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p3_pr3_w21",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr3_w22",
            "ar": "أُمِّكَ",
            "root": "أمم",
            "meaning": "Annen",
            "phraseTr": "senin <u>annene</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr3_w23",
            "ar": "وَاشْرَبِ",
            "root": "شرب",
            "meaning": "Ve İç!",
            "phraseTr": "<u>Ve İç!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p3_pr3_w24",
            "ar": "الحَلِيبَ",
            "root": "حلب",
            "meaning": "Süt",
            "phraseTr": "<u>Süt</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr3_w25",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr3_w26",
            "ar": "البَيْتِ!»",
            "root": "بيت",
            "meaning": "Ev",
            "phraseTr": "<u>evde</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p3_pr4",
        "words": [
          {
            "id": "p3_pr4_w1",
            "ar": "لَمْ",
            "root": "لَمْ",
            "meaning": "-medi, -madı",
            "phraseTr": "<u>-medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p3_pr4_w2",
            "ar": "يَخَفْ",
            "root": "خوف",
            "meaning": "Korktu",
            "phraseTr": "<u>Korktu</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p3_pr4_w3",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr4_w4",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr4_w5",
            "ar": "الرَّجُلِ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>adamdan</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w6",
            "ar": "الكَبِيرِ،",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr4_w7",
            "ar": "وَلَمْ",
            "root": "لَمْ",
            "meaning": "Ve -medi, -madı",
            "phraseTr": "<u>Ve -medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p3_pr4_w8",
            "ar": "يَغْضَبْ",
            "root": "غضب",
            "meaning": "Öfkelendi",
            "phraseTr": "<u>Öfkelendi</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p3_pr4_w9",
            "ar": "أَيْضاً.",
            "root": "أيض",
            "meaning": "de, da, ayrıca",
            "phraseTr": "<u>de, da, ayrıca</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr4_w10",
            "ar": "لَقَدْ",
            "root": "لقد",
            "meaning": "şüphesiz ki",
            "phraseTr": "<u>şüphesiz ki</u>",
            "type": "tekit edatı"
          },
          {
            "id": "p3_pr4_w11",
            "ar": "عَلَّمَهُ",
            "root": "علم",
            "meaning": "Ona öğretti",
            "phraseTr": "<u>Ona öğretti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w12",
            "ar": "جَدُّهُ",
            "root": "جدد",
            "meaning": "Dedesi",
            "phraseTr": "<u>Dedesi</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w13",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p3_pr4_w14",
            "ar": "يَكُونَ",
            "root": "كون",
            "meaning": "Olur",
            "phraseTr": "<u>Olur</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p3_pr4_w15",
            "ar": "هَادِئاً",
            "root": "هدأ",
            "meaning": "Sakin",
            "phraseTr": "<u>Sakin</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr4_w16",
            "ar": "دَائِماً؛",
            "root": "دوم",
            "meaning": "daima, her zaman",
            "phraseTr": "<u>daima, her zaman</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr4_w17",
            "ar": "لأَنَّ",
            "root": "أَنَّ",
            "meaning": "Çünkü",
            "phraseTr": "<u>Çünkü</u>",
            "type": "bağlaç"
          },
          {
            "id": "p3_pr4_w18",
            "ar": "الغَضَبَ",
            "root": "غضب",
            "meaning": "Öfke",
            "phraseTr": "<u>Öfke</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w19",
            "ar": "يُضَيِّعُ",
            "root": "ضيع",
            "meaning": "Boşa harcar",
            "phraseTr": "<u>Boşa harcar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p3_pr4_w20",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w21",
            "ar": "التْشِي.",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p3_pr4_w22",
            "ar": "ابْتَسَمَ",
            "root": "بسم",
            "meaning": "Gülümsedi",
            "phraseTr": "<u>Gülümsedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w23",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr4_w24",
            "ar": "بِهُدُوءٍ،",
            "root": "هدأ",
            "meaning": "sakin bir şekilde",
            "phraseTr": "<u>sakin bir şekilde</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr4_w25",
            "ar": "وَذَهَبَ",
            "root": "ذَهَبَ",
            "meaning": "Ve Gitti",
            "phraseTr": "<u>Ve Gitti</u>",
            "type": "fiil"
          },
          {
            "id": "p3_pr4_w26",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr4_w27",
            "ar": "زَاوِيَةِ",
            "root": "زوي",
            "meaning": "Köşe",
            "phraseTr": "odanın <u>köşesi</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w28",
            "ar": "الغُرْفَةِ.",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "<u>odanın</u> köşesi",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w29",
            "ar": "جَلَسَ",
            "root": "جلس",
            "meaning": "Oturdı",
            "phraseTr": "<u>Oturdı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w30",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p3_pr4_w31",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr4_w32",
            "ar": "الأَرْضِ،",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>Yer, zemin</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w33",
            "ar": "وَأَخْرَجَ",
            "root": "خرج",
            "meaning": "Ve Çıkardı",
            "phraseTr": "<u>Ve Çıkardı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w34",
            "ar": "تُفَّاحَةً",
            "root": "تفح",
            "meaning": "Bir elma",
            "phraseTr": "kırmızı <u>elma</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w35",
            "ar": "حَمْرَاءَ",
            "root": "حمر",
            "meaning": "Kırmızı",
            "phraseTr": "<u>kırmızı</u> elma",
            "type": "sıfat"
          },
          {
            "id": "p3_pr4_w36",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p3_pr4_w37",
            "ar": "حَقِيبَتِهِ،",
            "root": "حقب",
            "meaning": "Çantası",
            "phraseTr": "onun <u>çantasından</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w38",
            "ar": "وَبَدَأَ",
            "root": "بدو",
            "meaning": "Ve Başladı",
            "phraseTr": "<u>Ve Başladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w39",
            "ar": "يَأْكُلُهَا",
            "root": "أكل",
            "meaning": "Onu yiyordu",
            "phraseTr": "<u>Onu yiyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p3_pr4_w40",
            "ar": "بِسَعَادَةٍ.",
            "root": "سعد",
            "meaning": "mutlulukla",
            "phraseTr": "<u>mutlulukla</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr4_w41",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w42",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p3_pr4_w43",
            "ar": "الكَبِيرُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p3_pr4_w44",
            "ar": "إِلَيْهِ",
            "root": "إِلَى",
            "meaning": "Ona",
            "phraseTr": "<u>Ona</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p3_pr4_w45",
            "ar": "بِغَضَبٍ،",
            "root": "غضب",
            "meaning": "öfkeyle",
            "phraseTr": "<u>öfkeyle</u>",
            "type": "zarf"
          },
          {
            "id": "p3_pr4_w46",
            "ar": "ثُمَّ",
            "root": "ثُمَّ",
            "meaning": "sonra, ardından",
            "phraseTr": "<u>sonra, ardından</u>",
            "type": "bağlaç"
          },
          {
            "id": "p3_pr4_w47",
            "ar": "تَرَكَهُ",
            "root": "ترك",
            "meaning": "Onu bıraktı",
            "phraseTr": "<u>Onu bıraktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p3_pr4_w48",
            "ar": "وَمَشَى.",
            "root": "مشي",
            "meaning": "Ve Yürüdü",
            "phraseTr": "<u>Ve Yürüdü</u>",
            "type": "mazi fiil"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 4,
    "title": "الصَّفْحَةُ الرَّابِعَةُ (4)",
    "paragraphs": [
      {
        "pId": "p4_pr1",
        "words": [
          {
            "id": "p4_pr1_w1",
            "ar": "بَعْدَ",
            "root": "بَعْد",
            "meaning": "Sonra",
            "phraseTr": "<u>Sonra</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p4_pr1_w2",
            "ar": "عَشْرِ",
            "root": "عشر",
            "meaning": "on",
            "phraseTr": "<u>on</u> dakika",
            "type": "sayı"
          },
          {
            "id": "p4_pr1_w3",
            "ar": "دَقَائِقَ،",
            "root": "دقق",
            "meaning": "Dakikalar",
            "phraseTr": "on <u>dakika</u>",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr1_w4",
            "ar": "رَنَّ",
            "root": "رنن",
            "meaning": "Çaldı",
            "phraseTr": "<u>Çaldı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr1_w5",
            "ar": "جَرَسٌ",
            "root": "جرس",
            "meaning": "Zil, çan",
            "phraseTr": "büyük <u>çan</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w6",
            "ar": "كَبِيرٌ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> çan",
            "type": "sıfat"
          },
          {
            "id": "p4_pr1_w7",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr1_w8",
            "ar": "الغُرْفَةِ:",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "<u>Oda</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w9",
            "ar": "«دِينْغ!",
            "root": "صَوْت",
            "meaning": "Ding! (çan sesi)",
            "phraseTr": "<u>Ding!</u>",
            "type": "ünlem"
          },
          {
            "id": "p4_pr1_w10",
            "ar": "دُونْغ!»",
            "root": "صَوْت",
            "meaning": "Dong! (çan sesi)",
            "phraseTr": "<u>Dong!</u>",
            "type": "ünlem"
          },
          {
            "id": "p4_pr1_w11",
            "ar": "سَكَتَ",
            "root": "سكت",
            "meaning": "Sustu",
            "phraseTr": "<u>Sustu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr1_w12",
            "ar": "كُلُّ",
            "root": "كلل",
            "meaning": "bütün, her",
            "phraseTr": "<u>bütün, her</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w13",
            "ar": "النَّاسِ،",
            "root": "نوس",
            "meaning": "İnsanlar",
            "phraseTr": "<u>İnsanlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr1_w14",
            "ar": "وَنَظَرُوا",
            "root": "نظر",
            "meaning": "Ve Baktılar",
            "phraseTr": "<u>Ve Baktılar</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr1_w15",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr1_w16",
            "ar": "الأَمَامِ.",
            "root": "أمم",
            "meaning": "ön taraf",
            "phraseTr": "<u>ön taraf</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w17",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr1_w18",
            "ar": "نِهَايَةِ",
            "root": "نهي",
            "meaning": "Son",
            "phraseTr": "odanın <u>sonu</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w19",
            "ar": "الغُرْفَةِ،",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "<u>odanın</u> sonu",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w20",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p4_pr1_w21",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p4_pr1_w22",
            "ar": "بَابٌ",
            "root": "بوب",
            "meaning": "Bir kapı",
            "phraseTr": "başka bir <u>kapı</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w23",
            "ar": "آخَرُ",
            "root": "أخر",
            "meaning": "Son",
            "phraseTr": "<u>başka</u> bir kapı",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w24",
            "ar": "يَفْتَحُ",
            "root": "فتح",
            "meaning": "Açar",
            "phraseTr": "<u>Açar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr1_w25",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr1_w26",
            "ar": "نَفَقٍ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "uzun <u>tünel</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w27",
            "ar": "طَوِيلٍ",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>uzun</u> tünel",
            "type": "sıfat"
          },
          {
            "id": "p4_pr1_w28",
            "ar": "وَمُظْلِمٍ",
            "root": "ظلم",
            "meaning": "Ve Karanlık",
            "phraseTr": "uzun ve <u>karanlık</u>",
            "type": "sıfat"
          },
          {
            "id": "p4_pr1_w29",
            "ar": "تَحْتَ",
            "root": "تحت",
            "meaning": "altında, altına",
            "phraseTr": "<u>altında</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p4_pr1_w30",
            "ar": "الأَرْضِ.",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerin</u> altında",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w31",
            "ar": "خَرَجَ",
            "root": "خرج",
            "meaning": "Çıktı",
            "phraseTr": "<u>Çıktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr1_w32",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr1_w33",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> tünel",
            "type": "işaret ismi"
          },
          {
            "id": "p4_pr1_w34",
            "ar": "النَّفَقِ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "Bu <u>tünel</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w35",
            "ar": "رَجُلٌ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "uzun boylu <u>adam</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w36",
            "ar": "طَوِيلٌ",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>uzun boylu</u> adam",
            "type": "sıfat"
          },
          {
            "id": "p4_pr1_w37",
            "ar": "يَلْبَسُ",
            "root": "لبس",
            "meaning": "Giyer",
            "phraseTr": "<u>Giyer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr1_w38",
            "ar": "مَلاَبِسَ",
            "root": "لبس",
            "meaning": "Elbiseler",
            "phraseTr": "siyah <u>giysiler</u>",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr1_w39",
            "ar": "سَوْدَاءَ.",
            "root": "سود",
            "meaning": "Siyah",
            "phraseTr": "<u>siyah</u> giysiler",
            "type": "sıfat"
          },
          {
            "id": "p4_pr1_w40",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p4_pr1_w41",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w42",
            "ar": "يَمْشِي",
            "root": "مشي",
            "meaning": "Yürür",
            "phraseTr": "<u>Yürür</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr1_w43",
            "ar": "بِهُدُوءٍ،",
            "root": "هدأ",
            "meaning": "sakin bir şekilde",
            "phraseTr": "<u>sakin bir şekilde</u>",
            "type": "zarf"
          },
          {
            "id": "p4_pr1_w44",
            "ar": "وَكَانَ",
            "root": "كون",
            "meaning": "Ve İdi, oldu",
            "phraseTr": "<u>Ve İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p4_pr1_w45",
            "ar": "وَجْهُهُ",
            "root": "وجه",
            "meaning": "Yüzü",
            "phraseTr": "<u>Yüzü</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr1_w46",
            "ar": "جَادّاً",
            "root": "جدد",
            "meaning": "Ciddi",
            "phraseTr": "<u>Ciddi</u>",
            "type": "sıfat"
          },
          {
            "id": "p4_pr1_w47",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          }
        ]
      },
      {
        "pId": "p4_pr2",
        "words": [
          {
            "id": "p4_pr2_w1",
            "ar": "وَقَفَ",
            "root": "وقف",
            "meaning": "Durdu",
            "phraseTr": "<u>Durdu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr2_w2",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr2_w3",
            "ar": "أَمَامَ",
            "root": "أمم",
            "meaning": "önünde, önüne",
            "phraseTr": "<u>önünde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p4_pr2_w4",
            "ar": "المُتَسَابِقِينَ",
            "root": "سبق",
            "meaning": "Yarışmacılar",
            "phraseTr": "<u>yarışmacıların</u> önünde",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr2_w5",
            "ar": "وَقَالَ",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr2_w6",
            "ar": "بِصَوْتٍ",
            "root": "صوت",
            "meaning": "... ile Ses",
            "phraseTr": "gür <u>sesle</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr2_w7",
            "ar": "قَوِيٍّ:",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>gür</u> sesle",
            "type": "sıfat"
          },
          {
            "id": "p4_pr2_w8",
            "ar": "«السَّلاَمُ",
            "root": "سَلِمَ",
            "meaning": "Selam, esenlik",
            "phraseTr": "<u>Selam, esenlik</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr2_w9",
            "ar": "عَلَيْكُمْ.",
            "root": "عَلَى",
            "meaning": "Üzerinize olsun",
            "phraseTr": "<u>Üzerinize olsun</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p4_pr2_w10",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p4_pr2_w11",
            "ar": "اسْمِي",
            "root": "سمو",
            "meaning": "Adım",
            "phraseTr": "<u>Adım</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr2_w12",
            "ar": "سَاجِد،",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p4_pr2_w13",
            "ar": "وَأَنَا",
            "root": "أَنَا",
            "meaning": "Ve Ben",
            "phraseTr": "<u>Ve Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p4_pr2_w14",
            "ar": "الحَكَمُ",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "<u>Hakem</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr2_w15",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr2_w16",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u>",
            "type": "işaret ismi"
          },
          {
            "id": "p4_pr2_w17",
            "ar": "الاخْتِبَارِ",
            "root": "خبر",
            "meaning": "Sınav",
            "phraseTr": "birinci <u>sınav</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr2_w18",
            "ar": "الأَوَّلِ.",
            "root": "أول",
            "meaning": "birinci, ilk",
            "phraseTr": "<u>birinci</u> sınav",
            "type": "sıra sayısı"
          },
          {
            "id": "p4_pr2_w19",
            "ar": "أُرِيدُ",
            "root": "رود",
            "meaning": "İsterim",
            "phraseTr": "<u>İsterim</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr2_w20",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p4_pr2_w21",
            "ar": "أَقُولَ",
            "root": "قول",
            "meaning": "Söylerim",
            "phraseTr": "<u>Söylerim</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr2_w22",
            "ar": "لَكُمْ",
            "root": "كم",
            "meaning": "... için kaç, ne kadar",
            "phraseTr": "<u>... için kaç, ne kadar</u>",
            "type": "soru edatı"
          },
          {
            "id": "p4_pr2_w23",
            "ar": "قَوَانِينَ",
            "root": "قنن",
            "meaning": "Kurallar",
            "phraseTr": "yarışma <u>kuralları</u>",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr2_w24",
            "ar": "المُسَابَقَةِ.»",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "<u>yarışma</u> kuralları",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p4_pr3",
        "words": [
          {
            "id": "p4_pr3_w1",
            "ar": "سَكَتَ",
            "root": "سكت",
            "meaning": "Sustu",
            "phraseTr": "<u>Sustu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr3_w2",
            "ar": "الجَمِيعُ",
            "root": "جَمَعَ",
            "meaning": "Herkes, hepsi",
            "phraseTr": "<u>Herkes, hepsi</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w3",
            "ar": "وَاسْتَمَعُوا",
            "root": "سمع",
            "meaning": "Ve Dinlediler",
            "phraseTr": "<u>Ve Dinlediler</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr3_w4",
            "ar": "إِلَيْهِ",
            "root": "إِلَى",
            "meaning": "Ona",
            "phraseTr": "<u>Ona</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p4_pr3_w5",
            "ar": "بِاهْتِمَامٍ.",
            "root": "همم",
            "meaning": "dikkatle, ilgiyle",
            "phraseTr": "<u>dikkatle, ilgiyle</u>",
            "type": "zarf"
          },
          {
            "id": "p4_pr3_w6",
            "ar": "أَكْمَلَ",
            "root": "كمل",
            "meaning": "Tamamladı",
            "phraseTr": "<u>Tamamladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr3_w7",
            "ar": "الحَكَمُ",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "<u>Hakem</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w8",
            "ar": "سَاجِد",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p4_pr3_w9",
            "ar": "كَلاَمَهُ:",
            "root": "كلم",
            "meaning": "Sözü",
            "phraseTr": "<u>Sözü</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w10",
            "ar": "«أَوَّلاً:",
            "root": "أَوَّل",
            "meaning": "İlk olarak, birincisi",
            "phraseTr": "<u>İlk olarak, birincisi</u>",
            "type": "zarf"
          },
          {
            "id": "p4_pr3_w11",
            "ar": "مَمْنُوعٌ",
            "root": "مَنَعَ",
            "meaning": "Yasaklanmış",
            "phraseTr": "<u>Yasaklanmış</u>",
            "type": "ism-i mef'ul"
          },
          {
            "id": "p4_pr3_w12",
            "ar": "اسْتِخْدَامُ",
            "root": "خَدَمَ",
            "meaning": "Kullanmak, kullanım",
            "phraseTr": "kılıç <u>kullanımı</u>",
            "type": "mastar"
          },
          {
            "id": "p4_pr3_w13",
            "ar": "السُّيُوفِ",
            "root": "سيف",
            "meaning": "Kılıçlar",
            "phraseTr": "<u>kılıç</u> kullanımı",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr3_w14",
            "ar": "أَوْ",
            "root": "أَوْ",
            "meaning": "veya, yahut",
            "phraseTr": "<u>veya, yahut</u>",
            "type": "bağlaç"
          },
          {
            "id": "p4_pr3_w15",
            "ar": "السَّكَاكِينِ",
            "root": "سكن",
            "meaning": "Bıçaklar",
            "phraseTr": "<u>Bıçaklar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr3_w16",
            "ar": "أَوْ",
            "root": "أَوْ",
            "meaning": "veya, yahut",
            "phraseTr": "<u>veya, yahut</u>",
            "type": "bağlaç"
          },
          {
            "id": "p4_pr3_w17",
            "ar": "أَيِّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>herhangi</u> bir silah",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p4_pr3_w18",
            "ar": "سِلاَحٍ.",
            "root": "سلح",
            "meaning": "Silah",
            "phraseTr": "herhangi bir <u>silah</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w19",
            "ar": "هُنَا",
            "root": "هنا",
            "meaning": "burada, buraya",
            "phraseTr": "<u>burada, buraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p4_pr3_w20",
            "ar": "نَسْتَخْدِمُ",
            "root": "خدم",
            "meaning": "Kullanırız",
            "phraseTr": "<u>Kullanırız</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr3_w21",
            "ar": "قُوَّةَ",
            "root": "قوو",
            "meaning": "Güç",
            "phraseTr": "beden <u>gücü</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w22",
            "ar": "الجِسْمِ",
            "root": "جسم",
            "meaning": "Beden",
            "phraseTr": "<u>beden</u> gücü",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w23",
            "ar": "وَطَاقَةَ",
            "root": "طوق",
            "meaning": "Ve Enerji",
            "phraseTr": "<u>Ve Enerji</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w24",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi enerjisi</u>",
            "type": "terim"
          },
          {
            "id": "p4_pr3_w25",
            "ar": "فَقَطْ.",
            "root": "فقط",
            "meaning": "yalnızca, sadece",
            "phraseTr": "<u>yalnızca, sadece</u>",
            "type": "edat"
          },
          {
            "id": "p4_pr3_w26",
            "ar": "ثَانِياً:",
            "root": "ثَنَى",
            "meaning": "İkincisi",
            "phraseTr": "<u>İkincisi</u>",
            "type": "zarf"
          },
          {
            "id": "p4_pr3_w27",
            "ar": "الاخْتِبَارُ",
            "root": "خبر",
            "meaning": "Sınav",
            "phraseTr": "birinci <u>sınav</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w28",
            "ar": "الأَوَّلُ",
            "root": "أول",
            "meaning": "birinci, ilk",
            "phraseTr": "<u>birinci</u> sınav",
            "type": "sıra sayısı"
          },
          {
            "id": "p4_pr3_w29",
            "ar": "سَهْلٌ",
            "root": "سهل",
            "meaning": "Kolay",
            "phraseTr": "<u>Kolay</u>",
            "type": "sıfat"
          },
          {
            "id": "p4_pr3_w30",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr3_w31",
            "ar": "الكَلاَمِ،",
            "root": "كلم",
            "meaning": "Söz",
            "phraseTr": "<u>sözde</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w32",
            "ar": "وَلَكِنَّهُ",
            "root": "لَكِنْ",
            "meaning": "Fakat o",
            "phraseTr": "<u>Fakat o</u>",
            "type": "bağlaç + harf + zamir"
          },
          {
            "id": "p4_pr3_w33",
            "ar": "صَعْبٌ",
            "root": "صعب",
            "meaning": "Zor",
            "phraseTr": "<u>Zor</u>",
            "type": "sıfat"
          },
          {
            "id": "p4_pr3_w34",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr3_w35",
            "ar": "العَمَلِ.",
            "root": "عمل",
            "meaning": "Uygulama, amel",
            "phraseTr": "<u>uygulamada</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w36",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p4_pr3_w37",
            "ar": "سَأَجْرِي",
            "root": "جري",
            "meaning": "Koşacağım",
            "phraseTr": "<u>Koşacağım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr3_w38",
            "ar": "الآنَ",
            "root": "أون",
            "meaning": "şimdi, şu an",
            "phraseTr": "<u>şimdi, şu an</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p4_pr3_w39",
            "ar": "دَاخِلَ",
            "root": "دخل",
            "meaning": "içinde, içerisine",
            "phraseTr": "<u>içinde, içerisine</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p4_pr3_w40",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> tünel",
            "type": "işaret ismi"
          },
          {
            "id": "p4_pr3_w41",
            "ar": "النَّفَقِ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "Bu <u>tünel</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr3_w42",
            "ar": "الطَّوِيلِ،",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>Uzun</u>",
            "type": "sıfat"
          },
          {
            "id": "p4_pr3_w43",
            "ar": "وَأَنْتُمْ",
            "root": "أَنْتُمْ",
            "meaning": "Ve Siz",
            "phraseTr": "<u>Ve Siz</u>",
            "type": "zamir"
          },
          {
            "id": "p4_pr3_w44",
            "ar": "يَجِبُ",
            "root": "وَجَبَ",
            "meaning": "Gerekir, mecburdur",
            "phraseTr": "<u>Gerekir, mecburdur</u>",
            "type": "fiil"
          },
          {
            "id": "p4_pr3_w45",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p4_pr3_w46",
            "ar": "تَجْرُوا",
            "root": "جري",
            "meaning": "Koşarsınız",
            "phraseTr": "<u>Koşarsınız</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr3_w47",
            "ar": "خَلْفِي.»",
            "root": "خلف",
            "meaning": "arkamdan, arkamda",
            "phraseTr": "<u>arkamdan, arkamda</u>",
            "type": "mekan zarfı"
          }
        ]
      },
      {
        "pId": "p4_pr4",
        "words": [
          {
            "id": "p4_pr4_w1",
            "ar": "سَأَلَ",
            "root": "سأل",
            "meaning": "Sordu",
            "phraseTr": "<u>Sordu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr4_w2",
            "ar": "أَحَدُ",
            "root": "أَحَد",
            "meaning": "Biri, birisi",
            "phraseTr": "adamlardan <u>biri</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w3",
            "ar": "الرِّجَالِ:",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "<u>adamlardan</u> biri",
            "type": "cemi isim"
          },
          {
            "id": "p4_pr4_w4",
            "ar": "«يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p4_pr4_w5",
            "ar": "سَيِّدِي",
            "root": "سَادَ",
            "meaning": "Efendim, sayın",
            "phraseTr": "<u>sayın</u> hakem",
            "type": "isim + zamir"
          },
          {
            "id": "p4_pr4_w6",
            "ar": "الحَكَمَ،",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "sayın <u>hakem</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w7",
            "ar": "كَمْ",
            "root": "كم",
            "meaning": "kaç, ne kadar",
            "phraseTr": "<u>kaç</u> saat",
            "type": "soru edatı"
          },
          {
            "id": "p4_pr4_w8",
            "ar": "سَاعَةً",
            "root": "سوع",
            "meaning": "Bir saat",
            "phraseTr": "kaç <u>saat</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w9",
            "ar": "سَنَجْرِي؟",
            "root": "جري",
            "meaning": "Koşacağız",
            "phraseTr": "<u>Koşacağız</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w10",
            "ar": "وَكَمْ",
            "root": "كم",
            "meaning": "Ve kaç, ne kadar",
            "phraseTr": "<u>Ve kaç, ne kadar</u>",
            "type": "soru edatı"
          },
          {
            "id": "p4_pr4_w11",
            "ar": "هِيَ",
            "root": "هِيَ",
            "meaning": "O (dişil)",
            "phraseTr": "<u>O</u>",
            "type": "zamir"
          },
          {
            "id": "p4_pr4_w12",
            "ar": "المَسَافَةُ؟»",
            "root": "سوف",
            "meaning": "Mesafe",
            "phraseTr": "<u>Mesafe</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w13",
            "ar": "ابْتَسَمَ",
            "root": "بسم",
            "meaning": "Gülümsedi",
            "phraseTr": "<u>Gülümsedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr4_w14",
            "ar": "سَاجِد",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p4_pr4_w15",
            "ar": "ابْتِسَامَةً",
            "root": "بَسَمَ",
            "meaning": "Gülümseme",
            "phraseTr": "hafifçe <u>gülümseme</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w16",
            "ar": "صَغِيرَةً",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>hafifçe</u> gülümseme",
            "type": "sıfat"
          },
          {
            "id": "p4_pr4_w17",
            "ar": "وَقَالَ:",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p4_pr4_w18",
            "ar": "«لَنْ",
            "root": "لَنْ",
            "meaning": "asla -meyecek",
            "phraseTr": "<u>asla -meyecek</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p4_pr4_w19",
            "ar": "أَقُولَ",
            "root": "قول",
            "meaning": "Söylerim",
            "phraseTr": "<u>Söylerim</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w20",
            "ar": "لَكُمْ!",
            "root": "كم",
            "meaning": "... için kaç, ne kadar",
            "phraseTr": "<u>... için kaç, ne kadar</u>",
            "type": "soru edatı"
          },
          {
            "id": "p4_pr4_w21",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u>",
            "type": "işaret ismi"
          },
          {
            "id": "p4_pr4_w22",
            "ar": "جُزْءٌ",
            "root": "جزأ",
            "meaning": "Parça",
            "phraseTr": "<u>Parça</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w23",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w24",
            "ar": "الاخْتِبَارِ.",
            "root": "خبر",
            "meaning": "Sınav",
            "phraseTr": "<u>sınavdan</u> bir parça",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w25",
            "ar": "مَنْ",
            "root": "من",
            "meaning": "kim, her kim",
            "phraseTr": "<u>kim, her kim</u>",
            "type": "şart / soru"
          },
          {
            "id": "p4_pr4_w26",
            "ar": "يَتْعَبُ",
            "root": "تعب",
            "meaning": "Yorulur",
            "phraseTr": "<u>Yorulur</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w27",
            "ar": "وَيَجْلِسُ",
            "root": "جلس",
            "meaning": "Ve Oturur",
            "phraseTr": "<u>Ve Oturur</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w28",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w29",
            "ar": "الأَرْضِ،",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>Yer, zemin</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w30",
            "ar": "يَخْسَرُ",
            "root": "خسر",
            "meaning": "Kaybeder",
            "phraseTr": "<u>Kaybeder</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w31",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w32",
            "ar": "المُسَابَقَةِ",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "<u>Yarışma</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w33",
            "ar": "وَيَرْجِعُ",
            "root": "رجع",
            "meaning": "Ve Geri döner",
            "phraseTr": "<u>Ve Geri döner</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w34",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w35",
            "ar": "بَيْتِهِ.",
            "root": "بيت",
            "meaning": "Evi",
            "phraseTr": "<u>Evi</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w36",
            "ar": "وَمَنْ",
            "root": "مِنْ",
            "meaning": "Ve -den, -dan",
            "phraseTr": "<u>Ve -den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w37",
            "ar": "يَصِلُ",
            "root": "وصل",
            "meaning": "Ulaşır",
            "phraseTr": "<u>Ulaşır</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w38",
            "ar": "مَعِي",
            "root": "مَعَ",
            "meaning": "ile, beraber (benim)",
            "phraseTr": "<u>ile, beraber</u>",
            "type": "zarf"
          },
          {
            "id": "p4_pr4_w39",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w40",
            "ar": "نِهَايَةِ",
            "root": "نهي",
            "meaning": "Son",
            "phraseTr": "<u>sonuna</u> kadar",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w41",
            "ar": "النَّفَقِ،",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>Tünel</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w42",
            "ar": "يَنْجَحُ",
            "root": "نجح",
            "meaning": "Başarır",
            "phraseTr": "<u>Başarır</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w43",
            "ar": "وَيَنْتَقِلُ",
            "root": "نقل",
            "meaning": "Ve Geçer",
            "phraseTr": "<u>Ve Geçer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p4_pr4_w44",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p4_pr4_w45",
            "ar": "الاخْتِبَارِ",
            "root": "خبر",
            "meaning": "Sınav",
            "phraseTr": "ikinci <u>sınav</u>",
            "type": "isim"
          },
          {
            "id": "p4_pr4_w46",
            "ar": "الثَّانِي.",
            "root": "ثني",
            "meaning": "ikinci",
            "phraseTr": "<u>ikinci</u> sınav",
            "type": "sıra sayısı"
          },
          {
            "id": "p4_pr4_w47",
            "ar": "هَيَّا،",
            "root": "هَيَّا",
            "meaning": "Haydi!",
            "phraseTr": "<u>Haydi!</u>",
            "type": "fiil-ünlem"
          },
          {
            "id": "p4_pr4_w48",
            "ar": "تَعَالَوْا",
            "root": "علو",
            "meaning": "Gelin!",
            "phraseTr": "<u>Gelin!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p4_pr4_w49",
            "ar": "خَلْفِي!»",
            "root": "خلف",
            "meaning": "arkamdan, arkamda",
            "phraseTr": "<u>arkamdan, arkamda</u>",
            "type": "mekan zarfı"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 5,
    "title": "الصَّفْحَةُ الخَامِسَةُ (5)",
    "paragraphs": [
      {
        "pId": "p5_pr1",
        "words": [
          {
            "id": "p5_pr1_w1",
            "ar": "اسْتَدَارَ",
            "root": "دور",
            "meaning": "Geriye döndü",
            "phraseTr": "<u>Geriye döndü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr1_w2",
            "ar": "الحَكَمُ",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "<u>Hakem</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w3",
            "ar": "سَاجِد،",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr1_w4",
            "ar": "وَوَضَعَ",
            "root": "وضع",
            "meaning": "Ve Koydu",
            "phraseTr": "<u>Ve Koydu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr1_w5",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w6",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p5_pr1_w7",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr1_w8",
            "ar": "رِجْلَيْهِ،",
            "root": "رجل",
            "meaning": "İki bacağı",
            "phraseTr": "<u>İki bacağı</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p5_pr1_w9",
            "ar": "وَبَدَأَ",
            "root": "بدو",
            "meaning": "Ve Başladı",
            "phraseTr": "<u>Ve Başladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr1_w10",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr1_w11",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "<u>hızlıca, hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr1_w12",
            "ar": "دَاخِلَ",
            "root": "دخل",
            "meaning": "içinde, içerisine",
            "phraseTr": "<u>içinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p5_pr1_w13",
            "ar": "النَّفَقِ.",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>tünelin</u> içinde",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w14",
            "ar": "صَرَخَ",
            "root": "صرخ",
            "meaning": "Bağırdı",
            "phraseTr": "<u>Bağırdı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr1_w15",
            "ar": "المُتَسَابِقُونَ",
            "root": "سبق",
            "meaning": "Yarışmacılar",
            "phraseTr": "<u>Yarışmacılar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p5_pr1_w16",
            "ar": "بِحَمَاسٍ:",
            "root": "حمس",
            "meaning": "coşkuyla",
            "phraseTr": "<u>heyecanla</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr1_w17",
            "ar": "«هَيَّا",
            "root": "هَيَّا",
            "meaning": "Haydi!",
            "phraseTr": "<u>Haydi!</u>",
            "type": "fiil-ünlem"
          },
          {
            "id": "p5_pr1_w18",
            "ar": "بِنَا!»",
            "root": "بِ",
            "meaning": "Bizimle / bize",
            "phraseTr": "<u>Bizimle</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p5_pr1_w19",
            "ar": "وَبَدَأَ",
            "root": "بدو",
            "meaning": "Ve Başladı",
            "phraseTr": "<u>Ve Başladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr1_w20",
            "ar": "أَرْبَعُمِائَةٍ",
            "root": "ربع / مائة",
            "meaning": "dört yüz",
            "phraseTr": "<u>dört yüz</u>",
            "type": "sayı"
          },
          {
            "id": "p5_pr1_w21",
            "ar": "وَخَمْسَةُ",
            "root": "خمس",
            "meaning": "Ve beş",
            "phraseTr": "<u>Ve beş</u>",
            "type": "sayı"
          },
          {
            "id": "p5_pr1_w22",
            "ar": "أَشْخَاصٍ",
            "root": "شخص",
            "meaning": "Kişi",
            "phraseTr": "<u>Kişi</u>",
            "type": "cemi isim"
          },
          {
            "id": "p5_pr1_w23",
            "ar": "يَجْرُونَ",
            "root": "جري",
            "meaning": "Koşarlar",
            "phraseTr": "<u>Koşarlar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr1_w24",
            "ar": "مَعاً",
            "root": "معع",
            "meaning": "birlikte, beraber",
            "phraseTr": "<u>birlikte, beraber</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr1_w25",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr1_w26",
            "ar": "نَفْسِ",
            "root": "نفس",
            "meaning": "Aynı",
            "phraseTr": "<u>aynı</u> vakit",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w27",
            "ar": "الوَقْتِ.",
            "root": "وَقَتَ",
            "meaning": "Vakit, zaman",
            "phraseTr": "aynı <u>vakit</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w28",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p5_pr1_w29",
            "ar": "صَوْتُ",
            "root": "صوت",
            "meaning": "Sesi",
            "phraseTr": "<u>Sesi</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w30",
            "ar": "الأَحْذِيَةِ",
            "root": "حذو",
            "meaning": "Ayakkabılar",
            "phraseTr": "<u>Ayakkabılar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p5_pr1_w31",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr1_w32",
            "ar": "الأَرْضِ",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "taş <u>zemin</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w33",
            "ar": "الحَجَرِيَّةِ",
            "root": "حَجَر",
            "meaning": "Taş (zemin)",
            "phraseTr": "<u>taş</u> zemin",
            "type": "sıfat (dişil)"
          },
          {
            "id": "p5_pr1_w34",
            "ar": "عَالِياً",
            "root": "علو",
            "meaning": "Yüksek",
            "phraseTr": "<u>Yüksek</u>",
            "type": "sıfat"
          },
          {
            "id": "p5_pr1_w35",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr1_w36",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>Gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p5_pr1_w37",
            "ar": "صَوْتِ",
            "root": "صوت",
            "meaning": "Ses",
            "phraseTr": "gök gürültüsü <u>sesi</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr1_w38",
            "ar": "الرَّعْدِ.",
            "root": "رعد",
            "meaning": "Gök gürültüsü",
            "phraseTr": "<u>gök gürültüsü</u> sesi",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p5_pr2",
        "words": [
          {
            "id": "p5_pr2_w1",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr2_w2",
            "ar": "البِدَايَةِ،",
            "root": "بدو",
            "meaning": "Başlangıç",
            "phraseTr": "<u>Başlangıç</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr2_w3",
            "ar": "أَرَادَ",
            "root": "رود",
            "meaning": "İstedi",
            "phraseTr": "<u>İstedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr2_w4",
            "ar": "كَثِيرٌ",
            "root": "كَثُرَ",
            "meaning": "Çok, birçok",
            "phraseTr": "<u>Çok, birçok</u>",
            "type": "sıfat"
          },
          {
            "id": "p5_pr2_w5",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr2_w6",
            "ar": "الرِّجَالِ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "<u>Adamlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p5_pr2_w7",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p5_pr2_w8",
            "ar": "يَكُونُوا",
            "root": "كون",
            "meaning": "Olurlar",
            "phraseTr": "<u>Olurlar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr2_w9",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr2_w10",
            "ar": "الأَمَامِ.",
            "root": "أمم",
            "meaning": "ön taraf",
            "phraseTr": "<u>önde</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr2_w11",
            "ar": "لِذَلِكَ،",
            "root": "ذَا",
            "meaning": "Bu yüzden",
            "phraseTr": "<u>Bu yüzden</u>",
            "type": "bağlaç"
          },
          {
            "id": "p5_pr2_w12",
            "ar": "اسْتَخْدَمُوا",
            "root": "خدم",
            "meaning": "Kullandılar",
            "phraseTr": "<u>Kullandılar</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr2_w13",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr2_w14",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p5_pr2_w15",
            "ar": "بِقُوَّةٍ",
            "root": "قوو",
            "meaning": "... ile Güç",
            "phraseTr": "büyük bir <u>güçle</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr2_w16",
            "ar": "كَبِيرَةٍ،",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir güçle",
            "type": "sıfat"
          },
          {
            "id": "p5_pr2_w17",
            "ar": "وَجَرَوْا",
            "root": "جري",
            "meaning": "Ve Koştular",
            "phraseTr": "<u>Ve Koştular</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr2_w18",
            "ar": "بِأَقْصَى",
            "root": "قصو",
            "meaning": "... ile En son, son radde",
            "phraseTr": "<u>son</u> hızla",
            "type": "ismi tafdil"
          },
          {
            "id": "p5_pr2_w19",
            "ar": "سُرْعَةٍ.",
            "root": "سرع",
            "meaning": "Hız",
            "phraseTr": "son <u>hızla</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr2_w20",
            "ar": "أَمَّا",
            "root": "أَمَّا",
            "meaning": "-e gelince, ise",
            "phraseTr": "<u>-e gelince, ise</u>",
            "type": "şart/tafsil edatı"
          },
          {
            "id": "p5_pr2_w21",
            "ar": "رَامِي،",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr2_w22",
            "ar": "فَلَمْ",
            "root": "لَمْ",
            "meaning": "Derhal -medi, -madı",
            "phraseTr": "<u>Derhal -medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p5_pr2_w23",
            "ar": "يَجْرِ",
            "root": "جري",
            "meaning": "Koştu",
            "phraseTr": "<u>Koştu</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p5_pr2_w24",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "büyük bir <u>hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr2_w25",
            "ar": "كَبِيرَةٍ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir hızla",
            "type": "sıfat"
          },
          {
            "id": "p5_pr2_w26",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p5_pr2_w27",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr2_w28",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr2_w29",
            "ar": "وَسَطِ",
            "root": "وَسَط",
            "meaning": "Ortasında, orta",
            "phraseTr": "insanların <u>ortası</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr2_w30",
            "ar": "النَّاسِ",
            "root": "نوس",
            "meaning": "İnsanlar",
            "phraseTr": "<u>insanların</u> ortası",
            "type": "cemi isim"
          },
          {
            "id": "p5_pr2_w31",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "<u>hızlıca, hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr2_w32",
            "ar": "عَادِيَّةٍ",
            "root": "عدو",
            "meaning": "Sıradan, normal",
            "phraseTr": "<u>Sıradan, normal</u>",
            "type": "sıfat"
          },
          {
            "id": "p5_pr2_w33",
            "ar": "وَمُتَوَسِّطَةٍ.",
            "root": "وسط",
            "meaning": "Ve Orta",
            "phraseTr": "ve <u>orta seviye</u>",
            "type": "sıfat"
          }
        ]
      },
      {
        "pId": "p5_pr3",
        "words": [
          {
            "id": "p5_pr3_w1",
            "ar": "تَذَكَّرَ",
            "root": "ذكر",
            "meaning": "Hatırladı",
            "phraseTr": "<u>Hatırladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr3_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr3_w3",
            "ar": "كَلاَمَ",
            "root": "كلم",
            "meaning": "Sözü",
            "phraseTr": "dedesinin <u>sözü</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w4",
            "ar": "جَدِّهِ:",
            "root": "جدد",
            "meaning": "Dedesi",
            "phraseTr": "<u>dedesinin</u> sözü",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w5",
            "ar": "«يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p5_pr3_w6",
            "ar": "رَامِي،",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr3_w7",
            "ar": "إِذَا",
            "root": "إِذَا",
            "meaning": "eğer, -dığı zaman",
            "phraseTr": "<u>eğer, -dığı zaman</u>",
            "type": "şart edatı"
          },
          {
            "id": "p5_pr3_w8",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p5_pr3_w9",
            "ar": "الطَّرِيقُ",
            "root": "طرق",
            "meaning": "Yol",
            "phraseTr": "yol <u>uzun</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w10",
            "ar": "طَوِيلاً،",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>uzun</u> yol",
            "type": "sıfat"
          },
          {
            "id": "p5_pr3_w11",
            "ar": "لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p5_pr3_w12",
            "ar": "تَسْتَخْدِمْ",
            "root": "خدم",
            "meaning": "Kullanırsın",
            "phraseTr": "<u>Kullanırsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr3_w13",
            "ar": "كُلَّ",
            "root": "كلل",
            "meaning": "her",
            "phraseTr": "<u>bütün</u> enerjin",
            "type": "zarf"
          },
          {
            "id": "p5_pr3_w14",
            "ar": "طَاقَتِكَ",
            "root": "طوق",
            "meaning": "Enerjini",
            "phraseTr": "bütün <u>enerjin</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w15",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr3_w16",
            "ar": "البِدَايَةِ.",
            "root": "بدو",
            "meaning": "Başlangıç",
            "phraseTr": "<u>Başlangıç</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w17",
            "ar": "تَنَفَّسْ",
            "root": "نفس",
            "meaning": "Nefes al!",
            "phraseTr": "<u>Nefes al!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p5_pr3_w18",
            "ar": "بِهُدُوءٍ،",
            "root": "هدأ",
            "meaning": "sakin bir şekilde",
            "phraseTr": "<u>sakin bir şekilde</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr3_w19",
            "ar": "وَاجْعَلْ",
            "root": "جعل",
            "meaning": "Ve Kıl, sağla!",
            "phraseTr": "<u>Ve Kıl, sağla!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p5_pr3_w20",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w21",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p5_pr3_w22",
            "ar": "تَمْشِي",
            "root": "مشي",
            "meaning": "Aksın, yürüsün",
            "phraseTr": "<u>Aksın, yürüsün</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr3_w23",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr3_w24",
            "ar": "جِسْمِكَ",
            "root": "جسم",
            "meaning": "Bedenin",
            "phraseTr": "<u>Bedenin</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr3_w25",
            "ar": "قَلِيلاً",
            "root": "قلل",
            "meaning": "biraz, az",
            "phraseTr": "<u>biraz, az</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr3_w26",
            "ar": "قَلِيلاً.»",
            "root": "قلل",
            "meaning": "biraz, az",
            "phraseTr": "<u>biraz, az</u>",
            "type": "zarf"
          }
        ]
      },
      {
        "pId": "p5_pr4",
        "words": [
          {
            "id": "p5_pr4_w1",
            "ar": "أَغْلَقَ",
            "root": "غلق",
            "meaning": "Kapattı",
            "phraseTr": "<u>Kapattı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr4_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr4_w3",
            "ar": "فَمَهُ،",
            "root": "فوه",
            "meaning": "Ağzı",
            "phraseTr": "<u>Ağzı</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w4",
            "ar": "وَبَدَأَ",
            "root": "بدو",
            "meaning": "Ve Başladı",
            "phraseTr": "<u>Ve Başladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr4_w5",
            "ar": "يَأْخُذُ",
            "root": "أخذ",
            "meaning": "Alır",
            "phraseTr": "<u>Alır</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr4_w6",
            "ar": "الهَوَاءَ",
            "root": "هوو",
            "meaning": "Havayı",
            "phraseTr": "<u>Havayı</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w7",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr4_w8",
            "ar": "أَنْفِهِ",
            "root": "أنف",
            "meaning": "Burnu",
            "phraseTr": "onun <u>burnundan</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w9",
            "ar": "بِبُطْءٍ،",
            "root": "بطأ",
            "meaning": "yavaşça",
            "phraseTr": "<u>yavaşça</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr4_w10",
            "ar": "ثُمَّ",
            "root": "ثُمَّ",
            "meaning": "sonra, ardından",
            "phraseTr": "<u>sonra, ardından</u>",
            "type": "bağlaç"
          },
          {
            "id": "p5_pr4_w11",
            "ar": "يُخْرِجُهُ",
            "root": "خرج",
            "meaning": "Onu dışarı verir",
            "phraseTr": "<u>Onu dışarı verir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr4_w12",
            "ar": "بِبُطْءٍ.",
            "root": "بطأ",
            "meaning": "yavaşça",
            "phraseTr": "<u>yavaşça</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr4_w13",
            "ar": "مَعَ",
            "root": "مَعَ",
            "meaning": "ile, beraber",
            "phraseTr": "<u>ile, beraber</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr4_w14",
            "ar": "كُلِّ",
            "root": "كلل",
            "meaning": "bütün, her",
            "phraseTr": "<u>bütün, her</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w15",
            "ar": "نَفَسٍ،",
            "root": "نفس",
            "meaning": "Nefes",
            "phraseTr": "<u>Nefes</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w16",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p5_pr4_w17",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr4_w18",
            "ar": "يَشْعُرُ",
            "root": "شعر",
            "meaning": "Hissediyordu",
            "phraseTr": "<u>Hissediyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr4_w19",
            "ar": "بِطَاقَةِ",
            "root": "طوق",
            "meaning": "... ile Enerji",
            "phraseTr": "<u>... ile Enerji</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w20",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi enerjisi</u>",
            "type": "terim"
          },
          {
            "id": "p5_pr4_w21",
            "ar": "الدَّافِئَةِ",
            "root": "دفأ",
            "meaning": "Ilık",
            "phraseTr": "<u>Ilık</u>",
            "type": "sıfat"
          },
          {
            "id": "p5_pr4_w22",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr4_w23",
            "ar": "بَطْنِهِ",
            "root": "بطن",
            "meaning": "Karnı",
            "phraseTr": "onun <u>karnında</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w24",
            "ar": "وَصَدْرِهِ.",
            "root": "صدر",
            "meaning": "Ve Göğsü",
            "phraseTr": "ve onun <u>göğsünde</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w25",
            "ar": "أَرْسَلَ",
            "root": "رسل",
            "meaning": "Gönderdi",
            "phraseTr": "<u>Gönderdi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr4_w26",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p5_pr4_w27",
            "ar": "القَلِيلَ",
            "root": "قَلَّ",
            "meaning": "Az, biraz",
            "phraseTr": "<u>Az, biraz</u>",
            "type": "sıfat"
          },
          {
            "id": "p5_pr4_w28",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr4_w29",
            "ar": "هَذِهِ",
            "root": "ذه",
            "meaning": "Bu (dişil)",
            "phraseTr": "<u>Bu</u> enerji",
            "type": "işaret ismi"
          },
          {
            "id": "p5_pr4_w30",
            "ar": "الطَّاقَةِ",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "Bu <u>enerji</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w31",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p5_pr4_w32",
            "ar": "قَدَمَيْهِ.",
            "root": "قدم",
            "meaning": "İki ayağı",
            "phraseTr": "onun <u>ayaklarına</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p5_pr4_w33",
            "ar": "شَعَرَ",
            "root": "شعر",
            "meaning": "Hissetti",
            "phraseTr": "<u>Hissetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p5_pr4_w34",
            "ar": "أَنَّ",
            "root": "أَنَّ",
            "meaning": "-dığı, ki, olduğunu",
            "phraseTr": "<u>-dığı, ki, olduğunu</u>",
            "type": "tekit harfi"
          },
          {
            "id": "p5_pr4_w35",
            "ar": "حِذَاءَهُ",
            "root": "حذو",
            "meaning": "Ayakkabı (onun)",
            "phraseTr": "<u>Ayakkabı</u>",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w36",
            "ar": "أَصْبَحَ",
            "root": "صبح",
            "meaning": "Haline geldi, oldu",
            "phraseTr": "<u>Haline geldi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p5_pr4_w37",
            "ar": "خَفِيفاً",
            "root": "خفف",
            "meaning": "Hafif",
            "phraseTr": "<u>Hafif</u>",
            "type": "sıfat"
          },
          {
            "id": "p5_pr4_w38",
            "ar": "جِدّاً،",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr4_w39",
            "ar": "وَأَصْبَحَ",
            "root": "صبح",
            "meaning": "Ve Haline geldi, oldu",
            "phraseTr": "<u>Ve Haline geldi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p5_pr4_w40",
            "ar": "يَقْفِزُ",
            "root": "قفز",
            "meaning": "Zıplar, seker",
            "phraseTr": "<u>Zıplar, seker</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p5_pr4_w41",
            "ar": "فَوْقَ",
            "root": "فوق",
            "meaning": "üstünde, üzerine",
            "phraseTr": "<u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p5_pr4_w42",
            "ar": "الأَرْضِ",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerin</u> üzerinde",
            "type": "isim"
          },
          {
            "id": "p5_pr4_w43",
            "ar": "بِسُهُولَةٍ",
            "root": "سهل",
            "meaning": "kolaylıkla",
            "phraseTr": "<u>kolaylıkla</u>",
            "type": "zarf"
          },
          {
            "id": "p5_pr4_w44",
            "ar": "بِلَا",
            "root": "لَا",
            "meaning": "Olmaksızın, -sız",
            "phraseTr": "<u>olmaksızın</u>",
            "type": "edat"
          },
          {
            "id": "p5_pr4_w45",
            "ar": "أَيِّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>herhangi</u> bir olmadan",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p5_pr4_w46",
            "ar": "تَعَبٍ.",
            "root": "تعب",
            "meaning": "Yorgunluk",
            "phraseTr": "<u>Yorgunluk</u>",
            "type": "isim"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 6,
    "title": "الصَّفْحَةُ السَّادِسَةُ (6)",
    "paragraphs": [
      {
        "pId": "p6_pr1",
        "words": [
          {
            "id": "p6_pr1_w1",
            "ar": "مَرَّتْ",
            "root": "مرر",
            "meaning": "Geçti",
            "phraseTr": "<u>Geçti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr1_w2",
            "ar": "سَاعَةٌ،",
            "root": "سوع",
            "meaning": "Bir saat",
            "phraseTr": "<u>Bir saat</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w3",
            "ar": "ثُمَّ",
            "root": "ثُمَّ",
            "meaning": "sonra, ardından",
            "phraseTr": "<u>sonra, ardından</u>",
            "type": "bağlaç"
          },
          {
            "id": "p6_pr1_w4",
            "ar": "سَاعَتَانِ،",
            "root": "سوع",
            "meaning": "İki saat",
            "phraseTr": "<u>İki saat</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p6_pr1_w5",
            "ar": "ثُمَّ",
            "root": "ثُمَّ",
            "meaning": "sonra, ardından",
            "phraseTr": "<u>sonra, ardından</u>",
            "type": "bağlaç"
          },
          {
            "id": "p6_pr1_w6",
            "ar": "ثَلاَثُ",
            "root": "ثلث",
            "meaning": "üç",
            "phraseTr": "<u>üç</u>",
            "type": "sayı"
          },
          {
            "id": "p6_pr1_w7",
            "ar": "سَاعَاتٍ!",
            "root": "سوع",
            "meaning": "Saatler",
            "phraseTr": "<u>Saatler</u>",
            "type": "cemi isim"
          },
          {
            "id": "p6_pr1_w8",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p6_pr1_w9",
            "ar": "النَّفَقُ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>Tünel</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w10",
            "ar": "طَوِيلاً",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>Uzun</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr1_w11",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr1_w12",
            "ar": "وَلاَ",
            "root": "لاَ",
            "meaning": "Ve değil, -mez, -maz",
            "phraseTr": "<u>Ve değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p6_pr1_w13",
            "ar": "يَنْتَهِي.",
            "root": "نهي",
            "meaning": "Biter",
            "phraseTr": "<u>Biter</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr1_w14",
            "ar": "وَبَعْدَ",
            "root": "بَعْد",
            "meaning": "Ve sonra",
            "phraseTr": "<u>Ve sonra</u>",
            "type": "bağlaç + zarf"
          },
          {
            "id": "p6_pr1_w15",
            "ar": "السَّاعَةِ",
            "root": "سوع",
            "meaning": "Bir saat",
            "phraseTr": "üçüncü <u>saat</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w16",
            "ar": "الثَّالِثَةِ،",
            "root": "ثلث",
            "meaning": "üçüncü (dişil)",
            "phraseTr": "<u>üçüncü</u> saat",
            "type": "sıra sayısı"
          },
          {
            "id": "p6_pr1_w17",
            "ar": "بَدَأَتْ",
            "root": "بدو",
            "meaning": "Başladı (dişil)",
            "phraseTr": "<u>Başladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr1_w18",
            "ar": "أَرْضُ",
            "root": "أرض",
            "meaning": "Zemini",
            "phraseTr": "tünelin <u>zemini</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w19",
            "ar": "النَّفَقِ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>tünelin</u> zemini",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w20",
            "ar": "تَصْعَدُ",
            "root": "صعد",
            "meaning": "Yükselir",
            "phraseTr": "<u>Yükselir</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr1_w21",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr1_w22",
            "ar": "الأَعْلَى",
            "root": "عَلَا",
            "meaning": "Yukarı, üst taraf",
            "phraseTr": "<u>yukarıya</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w23",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>Gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p6_pr1_w24",
            "ar": "الجَبَلِ.",
            "root": "جبل",
            "meaning": "Dağ",
            "phraseTr": "<u>Dağ</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w25",
            "ar": "أَصْبَحَ",
            "root": "صبح",
            "meaning": "Haline geldi, oldu",
            "phraseTr": "<u>Haline geldi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p6_pr1_w26",
            "ar": "الهَوَاءُ",
            "root": "هوو",
            "meaning": "Hava",
            "phraseTr": "<u>Hava</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w27",
            "ar": "دَاخِلَ",
            "root": "دخل",
            "meaning": "içinde, içerisine",
            "phraseTr": "<u>içinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p6_pr1_w28",
            "ar": "النَّفَقِ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>tünelin</u> içinde",
            "type": "isim"
          },
          {
            "id": "p6_pr1_w29",
            "ar": "حَارّاً،",
            "root": "حرر",
            "meaning": "Sıcak",
            "phraseTr": "<u>Sıcak</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr1_w30",
            "ar": "وَأَصْبَحَ",
            "root": "صبح",
            "meaning": "Ve Haline geldi, oldu",
            "phraseTr": "<u>Ve Haline geldi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p6_pr1_w31",
            "ar": "الجَرْيُ",
            "root": "جري",
            "meaning": "Koşma",
            "phraseTr": "<u>Koşma</u>",
            "type": "isim / mastar"
          },
          {
            "id": "p6_pr1_w32",
            "ar": "صَعْباً",
            "root": "صعب",
            "meaning": "Zor",
            "phraseTr": "<u>Zor</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr1_w33",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          }
        ]
      },
      {
        "pId": "p6_pr2",
        "words": [
          {
            "id": "p6_pr2_w1",
            "ar": "الرِّجَالُ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "<u>Adamlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p6_pr2_w2",
            "ar": "الَّذِينَ",
            "root": "الذين",
            "meaning": "-anlar, -enler",
            "phraseTr": "<u>-anlar, -enler</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p6_pr2_w3",
            "ar": "جَرَوْا",
            "root": "جري",
            "meaning": "Koştular",
            "phraseTr": "<u>Koştular</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr2_w4",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "büyük bir <u>hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr2_w5",
            "ar": "كَبِيرَةٍ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir hızla",
            "type": "sıfat"
          },
          {
            "id": "p6_pr2_w6",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr2_w7",
            "ar": "البِدَايَةِ،",
            "root": "بدو",
            "meaning": "Başlangıç",
            "phraseTr": "<u>Başlangıç</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w8",
            "ar": "خَسِرُوا",
            "root": "خسر",
            "meaning": "Kaybettiler",
            "phraseTr": "<u>Kaybettiler</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr2_w9",
            "ar": "كُلَّ",
            "root": "كلل",
            "meaning": "her",
            "phraseTr": "<u>bütün</u> enerji",
            "type": "zarf"
          },
          {
            "id": "p6_pr2_w10",
            "ar": "طَاقَةِ",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w11",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p6_pr2_w12",
            "ar": "الَّتِي",
            "root": "التي",
            "meaning": "-an, -en, olan (dişil)",
            "phraseTr": "<u>-an, -en, olan</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p6_pr2_w13",
            "ar": "عِنْدَهُمْ.",
            "root": "عِنْد",
            "meaning": "Onların yanında / onlarda var",
            "phraseTr": "<u>Onların yanında</u>",
            "type": "zarf + zamir"
          },
          {
            "id": "p6_pr2_w14",
            "ar": "بَدَأَ",
            "root": "بدو",
            "meaning": "Başladı",
            "phraseTr": "<u>Başladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr2_w15",
            "ar": "العَرَقُ",
            "root": "عرق",
            "meaning": "Ter",
            "phraseTr": "<u>Ter</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w16",
            "ar": "يَنْزِلُ",
            "root": "نزل",
            "meaning": "İner",
            "phraseTr": "<u>İner</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr2_w17",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr2_w18",
            "ar": "وُجُوهِهِمْ",
            "root": "وجه",
            "meaning": "Yüzleri",
            "phraseTr": "onların <u>yüzlerinden</u>",
            "type": "cemi isim"
          },
          {
            "id": "p6_pr2_w19",
            "ar": "وَمَلاَبِسِهِمْ",
            "root": "لبس",
            "meaning": "Ve Elbiseleri",
            "phraseTr": "ve onların <u>giysilerinden</u>",
            "type": "cemi isim"
          },
          {
            "id": "p6_pr2_w20",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p6_pr2_w21",
            "ar": "المَطَرِ.",
            "root": "مطر",
            "meaning": "Yağmur",
            "phraseTr": "<u>yağmur</u> gibi",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w22",
            "ar": "سَقَطَ",
            "root": "سقط",
            "meaning": "Düştü",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr2_w23",
            "ar": "رَجُلٌ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w24",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr2_w25",
            "ar": "الأَرْضِ",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>Yer, zemin</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w26",
            "ar": "وَقَالَ:",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr2_w27",
            "ar": "«لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p6_pr2_w28",
            "ar": "أَسْتَطِيعُ!",
            "root": "طوع",
            "meaning": "Güç yetirebilirim",
            "phraseTr": "<u>Güç yetirebilirim</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr2_w29",
            "ar": "رِجْلِي",
            "root": "رجل",
            "meaning": "Ayağım, bacağım",
            "phraseTr": "<u>Ayağım, bacağım</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w30",
            "ar": "تُؤْلِمُنِي",
            "root": "ألم",
            "meaning": "Beni ağrıtıyor",
            "phraseTr": "<u>Beni ağrıtıyor</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr2_w31",
            "ar": "كَثِيراً!»",
            "root": "كثر",
            "meaning": "çok, fazlaca",
            "phraseTr": "<u>çok, fazlaca</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr2_w32",
            "ar": "ثُمَّ",
            "root": "ثُمَّ",
            "meaning": "sonra, ardından",
            "phraseTr": "<u>sonra, ardından</u>",
            "type": "bağlaç"
          },
          {
            "id": "p6_pr2_w33",
            "ar": "سَقَطَ",
            "root": "سقط",
            "meaning": "Düştü",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr2_w34",
            "ar": "رَجُلٌ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "başka bir <u>adam</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w35",
            "ar": "آخَرُ،",
            "root": "أخر",
            "meaning": "Son",
            "phraseTr": "<u>başka</u> bir adam",
            "type": "isim"
          },
          {
            "id": "p6_pr2_w36",
            "ar": "وَبَعْدَهُ",
            "root": "بَعْد",
            "meaning": "Ve ondan sonra",
            "phraseTr": "<u>Ve ondan sonra</u>",
            "type": "bağlaç + zarf + zamir"
          },
          {
            "id": "p6_pr2_w37",
            "ar": "عَشَرَةُ",
            "root": "عشر",
            "meaning": "on",
            "phraseTr": "<u>on</u> adam",
            "type": "sayı"
          },
          {
            "id": "p6_pr2_w38",
            "ar": "رِجَالٍ.",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "on <u>adam</u>",
            "type": "cemi isim"
          }
        ]
      },
      {
        "pId": "p6_pr3",
        "words": [
          {
            "id": "p6_pr3_w1",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p6_pr3_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p6_pr3_w3",
            "ar": "مَا",
            "root": "ما",
            "meaning": "ne, şey",
            "phraseTr": "<u>ne, şey</u>",
            "type": "soru / nefy"
          },
          {
            "id": "p6_pr3_w4",
            "ar": "زَالَ",
            "root": "زَالَ",
            "meaning": "Hala, devam ediyor (mâ zâle)",
            "phraseTr": "<u>Hala, devam ediyor</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p6_pr3_w5",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr3_w6",
            "ar": "بِنَفْسِ",
            "root": "نفس",
            "meaning": "... ile Nefes",
            "phraseTr": "<u>... ile Nefes</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w7",
            "ar": "السُّرْعَةِ",
            "root": "سرع",
            "meaning": "Hız",
            "phraseTr": "<u>Hız</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w8",
            "ar": "الهَادِئَةِ.",
            "root": "هدأ",
            "meaning": "Sakin",
            "phraseTr": "<u>Sakin</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w9",
            "ar": "تَجَاوَزَ",
            "root": "جوز",
            "meaning": "Geçti, geride bıraktı",
            "phraseTr": "<u>Geçti, geride bıraktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr3_w10",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p6_pr3_w11",
            "ar": "كَثِيراً",
            "root": "كثر",
            "meaning": "çok, fazlaca",
            "phraseTr": "<u>çok, fazlaca</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr3_w12",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr3_w13",
            "ar": "الرِّجَالِ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "yorgun <u>adamlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p6_pr3_w14",
            "ar": "المُتْعَبِينَ.",
            "root": "تعب",
            "meaning": "Yorulmuş olanlar",
            "phraseTr": "<u>yorgun</u> adamlar",
            "type": "cemi sıfat"
          },
          {
            "id": "p6_pr3_w15",
            "ar": "وَفَجْأَةً،",
            "root": "فجأ",
            "meaning": "Ve ansızın, birdenbire",
            "phraseTr": "<u>Ve ansızın, birdenbire</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr3_w16",
            "ar": "رَأَى",
            "root": "رأي",
            "meaning": "Gördü",
            "phraseTr": "<u>Gördü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr3_w17",
            "ar": "أَمَامَهُ",
            "root": "أمم",
            "meaning": "önünde, önüne (onun)",
            "phraseTr": "<u>önünde, önüne</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p6_pr3_w18",
            "ar": "الرَّجُلَ",
            "root": "رجل",
            "meaning": "Adamı",
            "phraseTr": "<u>Adamı</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w19",
            "ar": "الكَبِيرَ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w20",
            "ar": "صَاحِبَ",
            "root": "صحب",
            "meaning": "Sahibi",
            "phraseTr": "sakal <u>sahibi</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w21",
            "ar": "اللِّحْيَةِ",
            "root": "لحي",
            "meaning": "Sakal",
            "phraseTr": "<u>sakal</u> sahibi",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w22",
            "ar": "السَّوْدَاءِ",
            "root": "سود",
            "meaning": "Siyah",
            "phraseTr": "<u>siyah</u> sakal",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w23",
            "ar": "(رَقْمُ",
            "root": "رقم",
            "meaning": "Numaralı",
            "phraseTr": "<u>Numaralı</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w24",
            "ar": "12)",
            "root": "",
            "meaning": "12)",
            "phraseTr": "12)",
            "type": "sayı/noktalama"
          },
          {
            "id": "p6_pr3_w25",
            "ar": "الَّذِي",
            "root": "الذي",
            "meaning": "-an, -en, olan",
            "phraseTr": "<u>-an, -en, olan</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p6_pr3_w26",
            "ar": "ضَحِكَ",
            "root": "ضحك",
            "meaning": "Güldü",
            "phraseTr": "<u>Güldü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr3_w27",
            "ar": "عَلَيْهِ",
            "root": "عَلَى",
            "meaning": "Üzerinde / ona",
            "phraseTr": "<u>Üzerinde</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p6_pr3_w28",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr3_w29",
            "ar": "الغُرْفَةِ!",
            "root": "غرف",
            "meaning": "Oda",
            "phraseTr": "<u>Oda</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w30",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p6_pr3_w31",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w32",
            "ar": "الكَبِيرُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w33",
            "ar": "يَمْشِي",
            "root": "مشي",
            "meaning": "Yürür",
            "phraseTr": "<u>Yürür</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr3_w34",
            "ar": "بِبُطْءٍ",
            "root": "بطأ",
            "meaning": "yavaşça",
            "phraseTr": "çok <u>yavaşça</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr3_w35",
            "ar": "شَدِيدٍ،",
            "root": "شدد",
            "meaning": "Şiddetli",
            "phraseTr": "<u>aşırı</u> yavaşça",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w36",
            "ar": "وَوَجْهُهُ",
            "root": "وجه",
            "meaning": "Ve Yüzü",
            "phraseTr": "<u>Ve Yüzü</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w37",
            "ar": "أَحْمَرُ،",
            "root": "حمر",
            "meaning": "Kırmızı",
            "phraseTr": "<u>Kırmızı</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w38",
            "ar": "وَيَتَنَفَّسُ",
            "root": "نفس",
            "meaning": "Ve Nefes alıyordu",
            "phraseTr": "<u>Ve Nefes alıyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr3_w39",
            "ar": "بِصَوْتٍ",
            "root": "صوت",
            "meaning": "... ile Ses",
            "phraseTr": "yüksek <u>sesle</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr3_w40",
            "ar": "عَالٍ:",
            "root": "علو",
            "meaning": "Yüksek",
            "phraseTr": "<u>yüksek</u> sesle",
            "type": "sıfat"
          },
          {
            "id": "p6_pr3_w41",
            "ar": "«هَاه..",
            "root": "صَوْت",
            "meaning": "Hah.. (soluk alma)",
            "phraseTr": "<u>Hah..</u>",
            "type": "ünlem"
          },
          {
            "id": "p6_pr3_w42",
            "ar": "هَاه..",
            "root": "صَوْت",
            "meaning": "Hah.. (soluk alma)",
            "phraseTr": "<u>Hah..</u>",
            "type": "ünlem"
          },
          {
            "id": "p6_pr3_w43",
            "ar": "هَاه!»",
            "root": "صَوْت",
            "meaning": "Hah.. (soluk alma)",
            "phraseTr": "<u>Hah..</u>",
            "type": "ünlem"
          }
        ]
      },
      {
        "pId": "p6_pr4",
        "words": [
          {
            "id": "p6_pr4_w1",
            "ar": "عِنْدَمَا",
            "root": "عِنْد",
            "meaning": "-dığı zaman",
            "phraseTr": "<u>-dığı zaman</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr4_w2",
            "ar": "اقْتَرَبَ",
            "root": "قرب",
            "meaning": "Yaklaştı",
            "phraseTr": "<u>Yaklaştı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w3",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p6_pr4_w4",
            "ar": "لِيَمُرَّ",
            "root": "مرر",
            "meaning": "Geçmek için",
            "phraseTr": "<u>Geçmek için</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr4_w5",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w6",
            "ar": "جَانِبِهِ،",
            "root": "جنب",
            "meaning": "yan, kenar (onun)",
            "phraseTr": "onun <u>yanından</u>",
            "type": "isim / zarf"
          },
          {
            "id": "p6_pr4_w7",
            "ar": "غَضِبَ",
            "root": "غضب",
            "meaning": "Öfkelendi",
            "phraseTr": "<u>Öfkelendi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w8",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w9",
            "ar": "الكَبِيرُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr4_w10",
            "ar": "وَقَالَ",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w11",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w12",
            "ar": "نَفْسِهِ:",
            "root": "نفس",
            "meaning": "Kendi içi",
            "phraseTr": "kendi <u>içinden</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w13",
            "ar": "«لَنْ",
            "root": "لَنْ",
            "meaning": "asla -meyecek",
            "phraseTr": "<u>asla -meyecek</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p6_pr4_w14",
            "ar": "أَتْرُكَ",
            "root": "ترك",
            "meaning": "Bırakırım",
            "phraseTr": "<u>Bırakırım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr4_w15",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> velet",
            "type": "işaret ismi"
          },
          {
            "id": "p6_pr4_w16",
            "ar": "الوَلَدَ",
            "root": "ولد",
            "meaning": "Çocuğu",
            "phraseTr": "Bu <u>velet</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w17",
            "ar": "الصَّغِيرَ",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>Küçük</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr4_w18",
            "ar": "يَسْبِقُنِي!»",
            "root": "سبق",
            "meaning": "Beni geçer",
            "phraseTr": "<u>Beni geçer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr4_w19",
            "ar": "مَدَّ",
            "root": "مدد",
            "meaning": "Uzattı",
            "phraseTr": "<u>Uzattı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w20",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w21",
            "ar": "يَدَهُ",
            "root": "يدي",
            "meaning": "Elini",
            "phraseTr": "büyük <u>eli</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w22",
            "ar": "الكَبِيرَةَ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> eli",
            "type": "sıfat"
          },
          {
            "id": "p6_pr4_w23",
            "ar": "لِيُمْسِكَ",
            "root": "مسك",
            "meaning": "Yakalamak için",
            "phraseTr": "<u>Yakalamak için</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr4_w24",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p6_pr4_w25",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w26",
            "ar": "قَمِيصِهِ",
            "root": "قمص",
            "meaning": "Gömleği",
            "phraseTr": "onun <u>gömleğinden</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w27",
            "ar": "وَيَرْمِيَهُ",
            "root": "رمي",
            "meaning": "Ve Onu fırlatsın",
            "phraseTr": "<u>Ve Onu fırlatsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr4_w28",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w29",
            "ar": "الأَرْضِ.",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>Yer, zemin</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w30",
            "ar": "لَكِنَّ",
            "root": "لَكِنْ",
            "meaning": "Fakat, lakin",
            "phraseTr": "<u>Fakat, lakin</u>",
            "type": "istidrak harfi"
          },
          {
            "id": "p6_pr4_w31",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p6_pr4_w32",
            "ar": "وَضَعَ",
            "root": "وضع",
            "meaning": "Koydu",
            "phraseTr": "<u>Koydu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w33",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w34",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p6_pr4_w35",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w36",
            "ar": "عَيْنَيْهِ",
            "root": "عين",
            "meaning": "İki gözü",
            "phraseTr": "<u>İki gözü</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p6_pr4_w37",
            "ar": "فَوْراً.",
            "root": "فور",
            "meaning": "hemen, derhal",
            "phraseTr": "<u>hemen, derhal</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr4_w38",
            "ar": "رَأَى",
            "root": "رأي",
            "meaning": "Gördü",
            "phraseTr": "<u>Gördü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w39",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p6_pr4_w40",
            "ar": "يَدَ",
            "root": "يَد",
            "meaning": "El",
            "phraseTr": "adamın <u>eli</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w41",
            "ar": "الرَّجُلِ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>adamın</u> eli",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w42",
            "ar": "تَتَحَرَّكُ",
            "root": "حرك",
            "meaning": "Hareket ediyordu",
            "phraseTr": "<u>Hareket ediyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p6_pr4_w43",
            "ar": "بِبُطْءٍ،",
            "root": "بطأ",
            "meaning": "yavaşça",
            "phraseTr": "<u>yavaşça</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr4_w44",
            "ar": "فَنَزَلَ",
            "root": "نزل",
            "meaning": "Derhal İndi",
            "phraseTr": "<u>Derhal İndi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w45",
            "ar": "بِرَأْسِهِ",
            "root": "رأس",
            "meaning": "... ile Başı",
            "phraseTr": "kendi <u>başıyla</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w46",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w47",
            "ar": "الأَسْفَلِ،",
            "root": "سَفُلَ",
            "meaning": "Aşağı, alt taraf",
            "phraseTr": "<u>aşağıya</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w48",
            "ar": "وَمَرَّ",
            "root": "مرر",
            "meaning": "Ve Geçti",
            "phraseTr": "<u>Ve Geçti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w49",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w50",
            "ar": "تَحْتِ",
            "root": "تحت",
            "meaning": "altında, altına",
            "phraseTr": "<u>altından</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p6_pr4_w51",
            "ar": "يَدِ",
            "root": "يَد",
            "meaning": "El",
            "phraseTr": "adamın <u>eli</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w52",
            "ar": "الرَّجُلِ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>adamın</u> eli",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w53",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "<u>hızlıca, hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p6_pr4_w54",
            "ar": "كَالرِّيحِ.",
            "root": "روح",
            "meaning": "... gibi Rüzgar",
            "phraseTr": "<u>rüzgar gibi</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w55",
            "ar": "فَقَدَ",
            "root": "فقد",
            "meaning": "Kaybetti",
            "phraseTr": "<u>Kaybetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w56",
            "ar": "الرَّجُلُ",
            "root": "رجل",
            "meaning": "Adam",
            "phraseTr": "<u>Adam</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w57",
            "ar": "الكَبِيرُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p6_pr4_w58",
            "ar": "تَوَازُنَهُ",
            "root": "وزن",
            "meaning": "Dengesi",
            "phraseTr": "<u>Dengesi</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w59",
            "ar": "وَسَقَطَ",
            "root": "سقط",
            "meaning": "Ve Düştü",
            "phraseTr": "<u>Ve Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w60",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w61",
            "ar": "وَجْهِهِ",
            "root": "وجه",
            "meaning": "Yüzü",
            "phraseTr": "kendi <u>yüzüstü</u>",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w62",
            "ar": "فَوْقَ",
            "root": "فوق",
            "meaning": "üstünde, üzerine",
            "phraseTr": "<u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p6_pr4_w63",
            "ar": "الأَرْضِ،",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerin</u> üzerinde",
            "type": "isim"
          },
          {
            "id": "p6_pr4_w64",
            "ar": "وَخَسِرَ",
            "root": "خسر",
            "meaning": "Ve Kaybetti",
            "phraseTr": "<u>Ve Kaybetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p6_pr4_w65",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p6_pr4_w66",
            "ar": "المُسَابَقَةِ!",
            "root": "سَبَقَ",
            "meaning": "Yarışma",
            "phraseTr": "<u>Yarışma</u>",
            "type": "isim"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 7,
    "title": "الصَّفْحَةُ السَّابِعَةُ (7)",
    "paragraphs": [
      {
        "pId": "p7_pr1",
        "words": [
          {
            "id": "p7_pr1_w1",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr1_w2",
            "ar": "السَّاعَةِ",
            "root": "سوع",
            "meaning": "Bir saat",
            "phraseTr": "dördüncü <u>saat</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w3",
            "ar": "الرَّابِعَةِ،",
            "root": "ربع",
            "meaning": "dördüncü (dişil)",
            "phraseTr": "<u>dördüncü</u> saat",
            "type": "sıra sayısı"
          },
          {
            "id": "p7_pr1_w4",
            "ar": "زَادَ",
            "root": "زيد",
            "meaning": "Artırdı",
            "phraseTr": "<u>Artırdı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr1_w5",
            "ar": "الحَكَمُ",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "<u>Hakem</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w6",
            "ar": "سَاجِد",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p7_pr1_w7",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr1_w8",
            "ar": "سُرْعَتِهِ",
            "root": "سرع",
            "meaning": "Hızı",
            "phraseTr": "kendi <u>hızından</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w9",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr1_w10",
            "ar": "الأَمَامِ.",
            "root": "أمم",
            "meaning": "ön taraf",
            "phraseTr": "<u>önde</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w11",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr1_w12",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p7_pr1_w13",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr1_w14",
            "ar": "نَفْسِهِ:",
            "root": "نفس",
            "meaning": "Kendi içi",
            "phraseTr": "kendi <u>içinden</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w15",
            "ar": "«الحَكَمُ",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "<u>Hakem</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w16",
            "ar": "سَاجِد",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p7_pr1_w17",
            "ar": "سَرِيعٌ",
            "root": "سرع",
            "meaning": "Hızlı",
            "phraseTr": "<u>Hızlı</u>",
            "type": "sıfat"
          },
          {
            "id": "p7_pr1_w18",
            "ar": "جِدّاً!",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr1_w19",
            "ar": "يَجِبُ",
            "root": "وَجَبَ",
            "meaning": "Gerekir, mecburdur",
            "phraseTr": "<u>Gerekir, mecburdur</u>",
            "type": "fiil"
          },
          {
            "id": "p7_pr1_w20",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p7_pr1_w21",
            "ar": "أَزِيدَ",
            "root": "زيد",
            "meaning": "Artırayım",
            "phraseTr": "<u>Artırayım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr1_w22",
            "ar": "سُرْعَتِي",
            "root": "سرع",
            "meaning": "Hızım",
            "phraseTr": "<u>Hızım</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w23",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p7_pr1_w24",
            "ar": "أَيْضاً",
            "root": "أيض",
            "meaning": "de, da, ayrıca",
            "phraseTr": "<u>de, da, ayrıca</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr1_w25",
            "ar": "حَتَّى",
            "root": "حَتَّى",
            "meaning": "Kadar, ta ki",
            "phraseTr": "<u>Kadar, ta ki</u>",
            "type": "edat"
          },
          {
            "id": "p7_pr1_w26",
            "ar": "لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p7_pr1_w27",
            "ar": "يَضِيعَ",
            "root": "ضيع",
            "meaning": "Kaybolur",
            "phraseTr": "<u>Kaybolur</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr1_w28",
            "ar": "مِنِّي",
            "root": "مِنْ",
            "meaning": "-den, -dan (benim)",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr1_w29",
            "ar": "الطَّرِيقُ.»",
            "root": "طرق",
            "meaning": "Yol",
            "phraseTr": "<u>Yol</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w30",
            "ar": "أَرْسَلَ",
            "root": "رسل",
            "meaning": "Gönderdi",
            "phraseTr": "<u>Gönderdi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr1_w31",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p7_pr1_w32",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "<u>Enerjisini</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr1_w33",
            "ar": "تْشِي",
            "root": "تْشِي",
            "meaning": "Çi (yaşam enerjisi)",
            "phraseTr": "<u>Çi</u>",
            "type": "terim"
          },
          {
            "id": "p7_pr1_w34",
            "ar": "أَكْثَرَ",
            "root": "كثر",
            "meaning": "Daha çok",
            "phraseTr": "<u>Daha çok</u>",
            "type": "ismi tafdil"
          },
          {
            "id": "p7_pr1_w35",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr1_w36",
            "ar": "سَاقَيْهِ،",
            "root": "سوق",
            "meaning": "İki baldırı",
            "phraseTr": "onun <u>bacaklarına</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p7_pr1_w37",
            "ar": "وَأَصْبَحَ",
            "root": "صبح",
            "meaning": "Ve Haline geldi, oldu",
            "phraseTr": "<u>Ve Haline geldi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p7_pr1_w38",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr1_w39",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "daha büyük <u>hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr1_w40",
            "ar": "أَكْبَرَ.",
            "root": "كبر",
            "meaning": "Daha büyük",
            "phraseTr": "<u>daha büyük</u> hızla",
            "type": "ismi tafdil"
          }
        ]
      },
      {
        "pId": "p7_pr2",
        "words": [
          {
            "id": "p7_pr2_w1",
            "ar": "دَخَلَ",
            "root": "دخل",
            "meaning": "Girdi",
            "phraseTr": "<u>Girdi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr2_w2",
            "ar": "المُتَسَابِقُونَ",
            "root": "سبق",
            "meaning": "Yarışmacılar",
            "phraseTr": "<u>Yarışmacılar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p7_pr2_w3",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr2_w4",
            "ar": "مَكَانٍ",
            "root": "كون",
            "meaning": "Bir yer",
            "phraseTr": "eski bir <u>bölüm</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w5",
            "ar": "قَدِيمٍ",
            "root": "قدم",
            "meaning": "Eski",
            "phraseTr": "<u>eski</u> bir bölüm",
            "type": "sıfat"
          },
          {
            "id": "p7_pr2_w6",
            "ar": "وَخَطِيرٍ",
            "root": "خطر",
            "meaning": "Ve Tehlikeli",
            "phraseTr": "ve <u>tehlikeli</u>",
            "type": "sıfat"
          },
          {
            "id": "p7_pr2_w7",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr2_w8",
            "ar": "النَّفَقِ.",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>Tünel</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w9",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p7_pr2_w10",
            "ar": "السَّقْفُ",
            "root": "سقف",
            "meaning": "Tavan",
            "phraseTr": "<u>Tavan</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w11",
            "ar": "فَوْقَهُمْ",
            "root": "فوق",
            "meaning": "üstünde, üzerine (onların)",
            "phraseTr": "onların <u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p7_pr2_w12",
            "ar": "قَدِيماً",
            "root": "قدم",
            "meaning": "Eski",
            "phraseTr": "<u>Eski</u>",
            "type": "sıfat"
          },
          {
            "id": "p7_pr2_w13",
            "ar": "وَفِيهِ",
            "root": "فِي",
            "meaning": "Ve onda / içinde var",
            "phraseTr": "<u>Ve onda</u>",
            "type": "bağlaç + harf-i cer + zamir"
          },
          {
            "id": "p7_pr2_w14",
            "ar": "شُقُوقٌ",
            "root": "شَقَّ",
            "meaning": "Çatlaklar",
            "phraseTr": "büyük <u>çatlaklar</u>",
            "type": "isim (çoğul)"
          },
          {
            "id": "p7_pr2_w15",
            "ar": "كَبِيرَةٌ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> çatlaklar",
            "type": "sıfat"
          },
          {
            "id": "p7_pr2_w16",
            "ar": "وَفَجْأَةً،",
            "root": "فجأ",
            "meaning": "Ve ansızın, birdenbire",
            "phraseTr": "<u>Ve ansızın, birdenbire</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr2_w17",
            "ar": "سَمِعَ",
            "root": "سمع",
            "meaning": "Duydu",
            "phraseTr": "<u>Duydu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr2_w18",
            "ar": "الجَمِيعُ",
            "root": "جَمَعَ",
            "meaning": "Herkes, hepsi",
            "phraseTr": "<u>Herkes, hepsi</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w19",
            "ar": "صَوْتاً",
            "root": "صوت",
            "meaning": "Bir ses",
            "phraseTr": "şiddetli bir <u>ses</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w20",
            "ar": "قَوِيّاً",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>şiddetli</u> bir ses",
            "type": "sıfat"
          },
          {
            "id": "p7_pr2_w21",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr2_w22",
            "ar": "فَوْقِهِمْ:",
            "root": "فوق",
            "meaning": "üstünde, üzerine (onların)",
            "phraseTr": "onların <u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p7_pr2_w23",
            "ar": "«كْرَاااش!»",
            "root": "صَوْت",
            "meaning": "Kraaash! (çökme sesi)",
            "phraseTr": "<u>Kraaash!</u>",
            "type": "ünlem"
          },
          {
            "id": "p7_pr2_w24",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr2_w25",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p7_pr2_w26",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr2_w27",
            "ar": "الأَعْلَى،",
            "root": "عَلَا",
            "meaning": "Yukarı, üst taraf",
            "phraseTr": "<u>yukarıya</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w28",
            "ar": "فَرَأَى",
            "root": "رأي",
            "meaning": "Derhal Gördü",
            "phraseTr": "<u>Derhal Gördü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr2_w29",
            "ar": "حِجَارَةً",
            "root": "حَجَرَ",
            "meaning": "Taşlar, kayalar",
            "phraseTr": "büyük <u>taşlar / kayalar</u>",
            "type": "isim (çoğul)"
          },
          {
            "id": "p7_pr2_w30",
            "ar": "كَبِيرَةً",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> taşlar / kayalar",
            "type": "sıfat"
          },
          {
            "id": "p7_pr2_w31",
            "ar": "تَسْقُطُ",
            "root": "سقط",
            "meaning": "Düşüyor",
            "phraseTr": "<u>Düşüyor</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr2_w32",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr2_w33",
            "ar": "السَّقْفِ",
            "root": "سقف",
            "meaning": "Tavan",
            "phraseTr": "<u>tavandan</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr2_w34",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr2_w35",
            "ar": "المُتَسَابِقِينَ!",
            "root": "سبق",
            "meaning": "Yarışmacılar",
            "phraseTr": "<u>yarışmacıların</u> üzerine",
            "type": "cemi isim"
          }
        ]
      },
      {
        "pId": "p7_pr3",
        "words": [
          {
            "id": "p7_pr3_w1",
            "ar": "خَافَ",
            "root": "خوف",
            "meaning": "Korktu",
            "phraseTr": "<u>Korktu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr3_w2",
            "ar": "النَّاسُ",
            "root": "نوس",
            "meaning": "İnsanlar",
            "phraseTr": "<u>İnsanlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p7_pr3_w3",
            "ar": "كَثِيراً",
            "root": "كثر",
            "meaning": "çok, fazlaca",
            "phraseTr": "<u>çok, fazlaca</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr3_w4",
            "ar": "وَبَدَأُوا",
            "root": "بدو",
            "meaning": "Ve Başladılar",
            "phraseTr": "<u>Ve Başladılar</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr3_w5",
            "ar": "يَصْرُخُونَ.",
            "root": "صرخ",
            "meaning": "Bağırıyorlar",
            "phraseTr": "<u>Bağırıyorlar</u>",
            "type": "cemi muzari"
          },
          {
            "id": "p7_pr3_w6",
            "ar": "بَعْضُ",
            "root": "بعض",
            "meaning": "Bir kısım, bazıları",
            "phraseTr": "<u>Bir kısım, bazıları</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr3_w7",
            "ar": "الرِّجَالِ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "<u>Adamlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p7_pr3_w8",
            "ar": "اسْتَخْدَمُوا",
            "root": "خدم",
            "meaning": "Kullandılar",
            "phraseTr": "<u>Kullandılar</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr3_w9",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr3_w10",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p7_pr3_w11",
            "ar": "لِيَقْفِزُوا",
            "root": "قفز",
            "meaning": "... için Atlasınlar",
            "phraseTr": "<u>... için Atlasınlar</u>",
            "type": "cemi muzari"
          },
          {
            "id": "p7_pr3_w12",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr3_w13",
            "ar": "اليَمِينِ",
            "root": "يمن",
            "meaning": "sağ",
            "phraseTr": "<u>sağa</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr3_w14",
            "ar": "وَاليَسَارِ،",
            "root": "يسر",
            "meaning": "Ve sol",
            "phraseTr": "ve <u>sola</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr3_w15",
            "ar": "وَبَعْضُهُمْ",
            "root": "بَعْض",
            "meaning": "Ve bazısı, bir kısmı",
            "phraseTr": "<u>Ve bazısı, bir kısmı</u>",
            "type": "bağlaç + isim + zamir"
          },
          {
            "id": "p7_pr3_w16",
            "ar": "ضَرَبَ",
            "root": "ضرب",
            "meaning": "Vurdu",
            "phraseTr": "<u>Vurdu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr3_w17",
            "ar": "الحِجَارَةَ",
            "root": "حجر",
            "meaning": "Taşları",
            "phraseTr": "küçük <u>taşlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p7_pr3_w18",
            "ar": "الصَّغِيرَةَ",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> taşlar",
            "type": "sıfat"
          },
          {
            "id": "p7_pr3_w19",
            "ar": "بِيَدِهِ",
            "root": "يدي",
            "meaning": "Eliyle",
            "phraseTr": "kendi <u>eliyle</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr3_w20",
            "ar": "لِيُبْعِدَهَا.",
            "root": "بعد",
            "meaning": "Onu uzaklaştırmak için",
            "phraseTr": "<u>Onu uzaklaştırmak için</u>",
            "type": "muzari fiil"
          }
        ]
      },
      {
        "pId": "p7_pr4",
        "words": [
          {
            "id": "p7_pr4_w1",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p7_pr4_w2",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr4_w3",
            "ar": "أَمَامَ",
            "root": "أمم",
            "meaning": "önünde, önüne",
            "phraseTr": "<u>önünde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p7_pr4_w4",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami'nin</u> önünde",
            "type": "özel isim"
          },
          {
            "id": "p7_pr4_w5",
            "ar": "شَابٌّ",
            "root": "شبب",
            "meaning": "Bir genç",
            "phraseTr": "uzun boylu bir <u>genç</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w6",
            "ar": "طَوِيلٌ",
            "root": "طول",
            "meaning": "Uzun",
            "phraseTr": "<u>uzun boylu</u> bir genç",
            "type": "sıfat"
          },
          {
            "id": "p7_pr4_w7",
            "ar": "يَلْبَسُ",
            "root": "لبس",
            "meaning": "Giyer",
            "phraseTr": "<u>Giyer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr4_w8",
            "ar": "قَمِيصاً",
            "root": "قمص",
            "meaning": "Bir gömlek",
            "phraseTr": "sarı <u>gömlek</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w9",
            "ar": "أَصْفَرَ.",
            "root": "صفر",
            "meaning": "Sarı",
            "phraseTr": "<u>sarı</u> gömlek",
            "type": "sıfat"
          },
          {
            "id": "p7_pr4_w10",
            "ar": "عِنْدَمَا",
            "root": "عِنْد",
            "meaning": "-dığı zaman",
            "phraseTr": "<u>-dığı zaman</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr4_w11",
            "ar": "سَقَطَتِ",
            "root": "سقط",
            "meaning": "Düştü (dişil)",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr4_w12",
            "ar": "الحِجَارَةُ،",
            "root": "حجر",
            "meaning": "Taşlar",
            "phraseTr": "<u>Taşlar</u>",
            "type": "cemi isim"
          },
          {
            "id": "p7_pr4_w13",
            "ar": "خَافَ",
            "root": "خوف",
            "meaning": "Korktu",
            "phraseTr": "<u>Korktu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr4_w14",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> genç",
            "type": "işaret ismi"
          },
          {
            "id": "p7_pr4_w15",
            "ar": "الشَّابُّ",
            "root": "شبب",
            "meaning": "Genç",
            "phraseTr": "Bu <u>genç</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w16",
            "ar": "وَضَرَبَتْ",
            "root": "ضرب",
            "meaning": "Ve Çarptı",
            "phraseTr": "<u>Ve Çarptı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr4_w17",
            "ar": "قَدَمُهُ",
            "root": "قدم",
            "meaning": "Ayağı",
            "phraseTr": "<u>Ayağı</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w18",
            "ar": "بِحَجَرٍ",
            "root": "حجر",
            "meaning": "Taş ile",
            "phraseTr": "küçük bir <u>taşa</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w19",
            "ar": "صَغِيرٍ",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> bir taşa",
            "type": "sıfat"
          },
          {
            "id": "p7_pr4_w20",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr4_w21",
            "ar": "الأَرْضِ.",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>Yer, zemin</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w22",
            "ar": "سَقَطَ",
            "root": "سقط",
            "meaning": "Düştü",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr4_w23",
            "ar": "الشَّابُّ",
            "root": "شبب",
            "meaning": "Genç",
            "phraseTr": "<u>Genç</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w24",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr4_w25",
            "ar": "رُكْبَتَيْهِ،",
            "root": "ركب",
            "meaning": "İki dizi",
            "phraseTr": "onun <u>dizleri</u> üstüne",
            "type": "tesniye isim"
          },
          {
            "id": "p7_pr4_w26",
            "ar": "وَتَأَلَّمَ",
            "root": "ألم",
            "meaning": "Ve Acı çekti",
            "phraseTr": "<u>Ve Acı çekti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p7_pr4_w27",
            "ar": "كَثِيراً،",
            "root": "كثر",
            "meaning": "çok, fazlaca",
            "phraseTr": "<u>çok, fazlaca</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr4_w28",
            "ar": "وَلَمْ",
            "root": "لَمْ",
            "meaning": "Ve -medi, -madı",
            "phraseTr": "<u>Ve -medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p7_pr4_w29",
            "ar": "يَسْتَطِعْ",
            "root": "طَاعَ",
            "meaning": "Güç yetiremedi",
            "phraseTr": "<u>Güç yetiremedi</u>",
            "type": "fiil (cezm)"
          },
          {
            "id": "p7_pr4_w30",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p7_pr4_w31",
            "ar": "يَقُومَ.",
            "root": "قوم",
            "meaning": "Ayağa kalksın",
            "phraseTr": "<u>Ayağa kalksın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr4_w32",
            "ar": "وَفِي",
            "root": "فِي",
            "meaning": "Ve -de, -da, içinde",
            "phraseTr": "<u>Ve -de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr4_w33",
            "ar": "نَفْسِ",
            "root": "نفس",
            "meaning": "Aynı",
            "phraseTr": "<u>aynı</u> an",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w34",
            "ar": "اللَّحْظَةِ،",
            "root": "لحظ",
            "meaning": "An",
            "phraseTr": "aynı <u>anda</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w35",
            "ar": "كَانَتْ",
            "root": "كون",
            "meaning": "İdi (dişil)",
            "phraseTr": "<u>İdi</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p7_pr4_w36",
            "ar": "صَخْرَةٌ",
            "root": "صَخَرَ",
            "meaning": "Kaya",
            "phraseTr": "büyük bir <u>kaya</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w37",
            "ar": "كَبِيرَةٌ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir kaya",
            "type": "sıfat"
          },
          {
            "id": "p7_pr4_w38",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p7_pr4_w39",
            "ar": "تَسْقُطُ",
            "root": "سقط",
            "meaning": "Düşüyor",
            "phraseTr": "<u>Düşüyor</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p7_pr4_w40",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p7_pr4_w41",
            "ar": "السَّقْفِ",
            "root": "سقف",
            "meaning": "Tavan",
            "phraseTr": "<u>tavandan</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w42",
            "ar": "فَوْقَ",
            "root": "فوق",
            "meaning": "üstünde, üzerine",
            "phraseTr": "<u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p7_pr4_w43",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> genç",
            "type": "işaret ismi"
          },
          {
            "id": "p7_pr4_w44",
            "ar": "الشَّابِّ",
            "root": "شبب",
            "meaning": "Genç",
            "phraseTr": "Bu <u>genç</u>",
            "type": "isim"
          },
          {
            "id": "p7_pr4_w45",
            "ar": "مُبَاشَرَةً!",
            "root": "بشر",
            "meaning": "Doğrudan",
            "phraseTr": "<u>Doğrudan</u>",
            "type": "zarf"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 8,
    "title": "الصَّفْحَةُ الثَّامِنَةُ (8)",
    "paragraphs": [
      {
        "pId": "p8_pr1",
        "words": [
          {
            "id": "p8_pr1_w1",
            "ar": "رَأَى",
            "root": "رأي",
            "meaning": "Gördü",
            "phraseTr": "<u>Gördü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr1_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr1_w3",
            "ar": "أَنَّ",
            "root": "أَنَّ",
            "meaning": "-dığı, ki, olduğunu",
            "phraseTr": "<u>-dığı, ki, olduğunu</u>",
            "type": "tekit harfi"
          },
          {
            "id": "p8_pr1_w4",
            "ar": "الشَّابَّ",
            "root": "شبب",
            "meaning": "Genci",
            "phraseTr": "<u>Genci</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w5",
            "ar": "سَيَمُوتُ",
            "root": "موت",
            "meaning": "Ölecek",
            "phraseTr": "<u>Ölecek</u>",
            "type": "istikbal fiili"
          },
          {
            "id": "p8_pr1_w6",
            "ar": "إِذَا",
            "root": "إِذَا",
            "meaning": "eğer, -dığı zaman",
            "phraseTr": "<u>eğer, -dığı zaman</u>",
            "type": "şart edatı"
          },
          {
            "id": "p8_pr1_w7",
            "ar": "سَقَطَتِ",
            "root": "سقط",
            "meaning": "Düştü (dişil)",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr1_w8",
            "ar": "الصَّخْرَةُ",
            "root": "صخر",
            "meaning": "Kaya",
            "phraseTr": "<u>Kaya</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w9",
            "ar": "عَلَيْهِ.",
            "root": "عَلَى",
            "meaning": "Üzerinde / ona",
            "phraseTr": "<u>Üzerinde</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p8_pr1_w10",
            "ar": "لَمْ",
            "root": "لَمْ",
            "meaning": "-medi, -madı",
            "phraseTr": "<u>-medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p8_pr1_w11",
            "ar": "يُفَكِّرْ",
            "root": "فكر",
            "meaning": "Düşündü",
            "phraseTr": "<u>Düşündü</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p8_pr1_w12",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr1_w13",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>hakkında</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr1_w14",
            "ar": "التَّعَبِ؛",
            "root": "تعب",
            "meaning": "Yorgunluk",
            "phraseTr": "<u>yorgunluğu</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w15",
            "ar": "أَخَذَ",
            "root": "أخذ",
            "meaning": "Aldı",
            "phraseTr": "<u>Aldı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr1_w16",
            "ar": "نَفَساً",
            "root": "نفس",
            "meaning": "Bir nefes",
            "phraseTr": "derin bir <u>nefes</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w17",
            "ar": "عَمِيقاً",
            "root": "عَمُقَ",
            "meaning": "Derin, derince",
            "phraseTr": "<u>derin</u> bir nefes",
            "type": "sıfat/zarf"
          },
          {
            "id": "p8_pr1_w18",
            "ar": "جِدّاً،",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p8_pr1_w19",
            "ar": "وَجَمَعَ",
            "root": "جمع",
            "meaning": "Ve Topladı",
            "phraseTr": "<u>Ve Topladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr1_w20",
            "ar": "كُلَّ",
            "root": "كلل",
            "meaning": "her",
            "phraseTr": "<u>bütün</u> enerji",
            "type": "zarf"
          },
          {
            "id": "p8_pr1_w21",
            "ar": "طَاقَةِ",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w22",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p8_pr1_w23",
            "ar": "الَّتِي",
            "root": "التي",
            "meaning": "-an, -en, olan (dişil)",
            "phraseTr": "<u>-an, -en, olan</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p8_pr1_w24",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr1_w25",
            "ar": "جِسْمِهِ،",
            "root": "جسم",
            "meaning": "Bedeninden",
            "phraseTr": "onun <u>vücudunda</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w26",
            "ar": "وَوَضَعَهَا",
            "root": "وَضَعَ",
            "meaning": "Ve onu koydu",
            "phraseTr": "<u>Ve onu koydu</u>",
            "type": "bağlaç + fiil + zamir"
          },
          {
            "id": "p8_pr1_w27",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr1_w28",
            "ar": "رِجْلَيْهِ",
            "root": "رجل",
            "meaning": "İki bacağı",
            "phraseTr": "<u>İki bacağı</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p8_pr1_w29",
            "ar": "وَفِي",
            "root": "فِي",
            "meaning": "Ve -de, -da, içinde",
            "phraseTr": "<u>Ve -de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr1_w30",
            "ar": "ذِرَاعَيْهِ.",
            "root": "ذرع",
            "meaning": "İki kolu",
            "phraseTr": "<u>İki kolu</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p8_pr1_w31",
            "ar": "شَعَرَ",
            "root": "شعر",
            "meaning": "Hissetti",
            "phraseTr": "<u>Hissetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr1_w32",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr1_w33",
            "ar": "أَنَّ",
            "root": "أَنَّ",
            "meaning": "-dığı, ki, olduğunu",
            "phraseTr": "<u>-dığı, ki, olduğunu</u>",
            "type": "tekit harfi"
          },
          {
            "id": "p8_pr1_w34",
            "ar": "دَمَهُ",
            "root": "دمي",
            "meaning": "Kanı",
            "phraseTr": "<u>Kanı</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr1_w35",
            "ar": "يَغْلِي",
            "root": "غلي",
            "meaning": "Kaynıyor",
            "phraseTr": "<u>Kaynıyor</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p8_pr1_w36",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr1_w37",
            "ar": "القُوَّةِ!",
            "root": "قوو",
            "meaning": "Güç",
            "phraseTr": "<u>güçten</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p8_pr2",
        "words": [
          {
            "id": "p8_pr2_w1",
            "ar": "قَفَزَ",
            "root": "قفز",
            "meaning": "Atladı",
            "phraseTr": "<u>Atladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr2_w3",
            "ar": "قَفْزَةً",
            "root": "قفز",
            "meaning": "Sıçrayış",
            "phraseTr": "hızlı bir <u>sıçrayış</u>",
            "type": "isim / mastar"
          },
          {
            "id": "p8_pr2_w4",
            "ar": "سَرِيعَةً",
            "root": "سرع",
            "meaning": "Hızlı",
            "phraseTr": "<u>hızlı</u> bir sıçrayış",
            "type": "sıfat"
          },
          {
            "id": "p8_pr2_w5",
            "ar": "وَقَوِيَّةً",
            "root": "قوو",
            "meaning": "Ve Güçlü",
            "phraseTr": "ve <u>güçlü</u>",
            "type": "sıfat"
          },
          {
            "id": "p8_pr2_w6",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> güçlü",
            "type": "zarf"
          },
          {
            "id": "p8_pr2_w7",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p8_pr2_w8",
            "ar": "الأَسَدِ.",
            "root": "أسد",
            "meaning": "Aslan",
            "phraseTr": "<u>aslan</u> gibi",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w9",
            "ar": "وَصَلَ",
            "root": "وصل",
            "meaning": "Ulaştı",
            "phraseTr": "<u>Ulaştı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w10",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w11",
            "ar": "الشَّابِّ",
            "root": "شبب",
            "meaning": "Genç",
            "phraseTr": "<u>Genç</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w12",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w13",
            "ar": "ثَانِيَةٍ",
            "root": "ثني",
            "meaning": "Saniye",
            "phraseTr": "bir <u>saniye</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w14",
            "ar": "وَاحِدَةٍ،",
            "root": "وحد",
            "meaning": "bir, bir defa",
            "phraseTr": "<u>tek</u> bir saniyede",
            "type": "sayı"
          },
          {
            "id": "p8_pr2_w15",
            "ar": "وَأَمْسَكَهُ",
            "root": "مسك",
            "meaning": "Ve Onu yakaladı",
            "phraseTr": "<u>Ve Onu yakaladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w16",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w17",
            "ar": "مَلاَبِسِهِ",
            "root": "لبس",
            "meaning": "Elbisesi",
            "phraseTr": "onun <u>giysilerinden</u>",
            "type": "cemi isim"
          },
          {
            "id": "p8_pr2_w18",
            "ar": "بِيَدَيْهِ",
            "root": "يدي",
            "meaning": "... ile İki eli",
            "phraseTr": "iki <u>eliyle</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p8_pr2_w19",
            "ar": "الاثْنَتَيْنِ.",
            "root": "ثَنَى",
            "meaning": "İkisi (dişil)",
            "phraseTr": "<u>iki</u> eliyle",
            "type": "sayı ismi"
          },
          {
            "id": "p8_pr2_w20",
            "ar": "بَقُوَّةِ",
            "root": "قوو",
            "meaning": "... ile Güç",
            "phraseTr": "Çi <u>gücüyle</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w21",
            "ar": "التْشِي،",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> gücüyle",
            "type": "terim"
          },
          {
            "id": "p8_pr2_w22",
            "ar": "رَفَعَ",
            "root": "رفع",
            "meaning": "Kaldırdı",
            "phraseTr": "<u>Kaldırdı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w23",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr2_w24",
            "ar": "الشَّابَّ",
            "root": "شبب",
            "meaning": "Genci",
            "phraseTr": "ağır <u>genci</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w25",
            "ar": "الثَّقِيلَ",
            "root": "ثقل",
            "meaning": "Ağır",
            "phraseTr": "<u>ağır</u> genci",
            "type": "sıfat"
          },
          {
            "id": "p8_pr2_w26",
            "ar": "عَنِ",
            "root": "عَنْ",
            "meaning": "-den, hakkında",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w27",
            "ar": "الأَرْضِ،",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerden</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w28",
            "ar": "وَقَفَزَ",
            "root": "قفز",
            "meaning": "Ve Atladı",
            "phraseTr": "<u>Ve Atladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w29",
            "ar": "بِهِ",
            "root": "بِ",
            "meaning": "Onunla / onu",
            "phraseTr": "<u>Onunla</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p8_pr2_w30",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w31",
            "ar": "جَانِبِ",
            "root": "جنب",
            "meaning": "yan, kenar",
            "phraseTr": "duvarın <u>kenarı</u>",
            "type": "isim / zarf"
          },
          {
            "id": "p8_pr2_w32",
            "ar": "الجِدَارِ.",
            "root": "جدر",
            "meaning": "Duvar",
            "phraseTr": "<u>duvarın</u> kenarı",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w33",
            "ar": "«بُوووم!»",
            "root": "صَوْت",
            "meaning": "Buum! (çarpma sesi)",
            "phraseTr": "<u>Buum!</u>",
            "type": "ünlem"
          },
          {
            "id": "p8_pr2_w34",
            "ar": "سَقَطَتِ",
            "root": "سقط",
            "meaning": "Düştü (dişil)",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w35",
            "ar": "الصَّخْرَةُ",
            "root": "صخر",
            "meaning": "Kaya",
            "phraseTr": "büyük <u>kaya</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w36",
            "ar": "الكَبِيرَةُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> kaya",
            "type": "sıfat"
          },
          {
            "id": "p8_pr2_w37",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w38",
            "ar": "المَكَانِ",
            "root": "كون",
            "meaning": "Mekan, yer",
            "phraseTr": "<u>Mekan, yer</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w39",
            "ar": "الَّذِي",
            "root": "الذي",
            "meaning": "-an, -en, olan",
            "phraseTr": "<u>-an, -en, olan</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p8_pr2_w40",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p8_pr2_w41",
            "ar": "فِيهِ",
            "root": "فِي",
            "meaning": "-de, -da, içinde (onun)",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr2_w42",
            "ar": "الشَّابُّ",
            "root": "شبب",
            "meaning": "Genç",
            "phraseTr": "<u>Genç</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w43",
            "ar": "قَبْلَ",
            "root": "قَبْل",
            "meaning": "Önce",
            "phraseTr": "<u>Önce</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p8_pr2_w44",
            "ar": "لَحْظَةٍ",
            "root": "لحظ",
            "meaning": "Bir an",
            "phraseTr": "bir <u>an</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w45",
            "ar": "وَاحِدَةٍ،",
            "root": "وحد",
            "meaning": "bir, bir defa",
            "phraseTr": "<u>tek</u> bir an önce",
            "type": "sayı"
          },
          {
            "id": "p8_pr2_w46",
            "ar": "وَامْتَلَأَ",
            "root": "ملأ",
            "meaning": "Ve Doldu",
            "phraseTr": "<u>Ve Doldu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr2_w47",
            "ar": "المَكَانُ",
            "root": "كون",
            "meaning": "Mekan",
            "phraseTr": "<u>Mekan</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w48",
            "ar": "بِالغُبَارِ",
            "root": "غَبِرَ",
            "meaning": "... ile Toz",
            "phraseTr": "<u>toz</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr2_w49",
            "ar": "وَالتُّرَابِ.",
            "root": "تَرِبَ",
            "meaning": "Ve Toprak",
            "phraseTr": "ve <u>toprakla</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p8_pr3",
        "words": [
          {
            "id": "p8_pr3_w1",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr3_w2",
            "ar": "الشَّابُّ",
            "root": "شبب",
            "meaning": "Genç",
            "phraseTr": "<u>Genç</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr3_w3",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr3_w4",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr3_w5",
            "ar": "وَهُوَ",
            "root": "هُوَ",
            "meaning": "Ve O",
            "phraseTr": "<u>Ve O</u>",
            "type": "zamir"
          },
          {
            "id": "p8_pr3_w6",
            "ar": "يَرْتَجِفُ",
            "root": "رجف",
            "meaning": "Titriyordu",
            "phraseTr": "<u>Titriyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p8_pr3_w7",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr3_w8",
            "ar": "الخَوْفِ",
            "root": "خوف",
            "meaning": "Korku",
            "phraseTr": "<u>korkudan</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr3_w9",
            "ar": "وَقَالَ:",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr3_w10",
            "ar": "«شُكْراً",
            "root": "شَكَرَ",
            "meaning": "Teşekkürler",
            "phraseTr": "<u>Teşekkürler</u>",
            "type": "mastar/ünlem"
          },
          {
            "id": "p8_pr3_w11",
            "ar": "لَكَ",
            "root": "لِ",
            "meaning": "Sana / senin için",
            "phraseTr": "<u>Sana</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p8_pr3_w12",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p8_pr3_w13",
            "ar": "أَخِي",
            "root": "أخو",
            "meaning": "Kardeşim",
            "phraseTr": "küçük <u>kardeşim</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr3_w14",
            "ar": "الصَّغِيرَ!",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>küçük</u> kardeşim",
            "type": "sıfat"
          },
          {
            "id": "p8_pr3_w15",
            "ar": "أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p8_pr3_w16",
            "ar": "أَنْقَذْتَ",
            "root": "نقذ",
            "meaning": "Kurtardın",
            "phraseTr": "<u>Kurtardın</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr3_w17",
            "ar": "حَيَاتِي!",
            "root": "حيو",
            "meaning": "Hayatım",
            "phraseTr": "<u>Hayatım</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr3_w18",
            "ar": "أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p8_pr3_w19",
            "ar": "قَوِيٌّ",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>güçlü</u>",
            "type": "sıfat"
          },
          {
            "id": "p8_pr3_w20",
            "ar": "جِدّاً!»",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> güçlü",
            "type": "zarf"
          },
          {
            "id": "p8_pr3_w21",
            "ar": "ابْتَسَمَ",
            "root": "بسم",
            "meaning": "Gülümsedi",
            "phraseTr": "<u>Gülümsedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr3_w22",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr3_w23",
            "ar": "وَقَالَ",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr3_w24",
            "ar": "لَهُ:",
            "root": "لِ",
            "meaning": "Ona / onun için",
            "phraseTr": "<u>Ona</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p8_pr3_w25",
            "ar": "«الحَمْدُ",
            "root": "حَمِدَ",
            "meaning": "Övgü ve şükür",
            "phraseTr": "<u>Övgü ve şükür</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr3_w26",
            "ar": "لِلَّهِ",
            "root": "أَلَهَ",
            "meaning": "Allah'a",
            "phraseTr": "<u>Allah'a</u>",
            "type": "harf-i cer + isim"
          },
          {
            "id": "p8_pr3_w27",
            "ar": "أَنَّكَ",
            "root": "أَنَّ",
            "meaning": "Şüphesiz senin / -dığın",
            "phraseTr": "<u>Şüphesiz senin</u>",
            "type": "harf + zamir"
          },
          {
            "id": "p8_pr3_w28",
            "ar": "بِخَيْرٍ.",
            "root": "خَيْر",
            "meaning": "İyi, esenlikte",
            "phraseTr": "<u>İyi, esenlikte</u>",
            "type": "harf-i cer + isim"
          },
          {
            "id": "p8_pr3_w29",
            "ar": "هَيَّا",
            "root": "هَيَّا",
            "meaning": "Haydi!",
            "phraseTr": "<u>Haydi!</u>",
            "type": "fiil-ünlem"
          },
          {
            "id": "p8_pr3_w30",
            "ar": "قُمْ،",
            "root": "قوم",
            "meaning": "Kalk!",
            "phraseTr": "<u>Kalk!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p8_pr3_w31",
            "ar": "يَجِبُ",
            "root": "وَجَبَ",
            "meaning": "Gerekir, mecburdur",
            "phraseTr": "<u>Gerekir, mecburdur</u>",
            "type": "fiil"
          },
          {
            "id": "p8_pr3_w32",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p8_pr3_w33",
            "ar": "نُكْمِلَ",
            "root": "كمل",
            "meaning": "Tamamlayalım",
            "phraseTr": "<u>Tamamlayalım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p8_pr3_w34",
            "ar": "الجَرْيَ!»",
            "root": "جري",
            "meaning": "Koşma",
            "phraseTr": "<u>Koşma</u>",
            "type": "isim / mastar"
          }
        ]
      },
      {
        "pId": "p8_pr4",
        "words": [
          {
            "id": "p8_pr4_w1",
            "ar": "عَادَ",
            "root": "عود",
            "meaning": "Döndü",
            "phraseTr": "<u>Döndü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr4_w3",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr4_w4",
            "ar": "الجَرْيِ،",
            "root": "جري",
            "meaning": "Koşu",
            "phraseTr": "<u>Koşu</u>",
            "type": "isim / mastar"
          },
          {
            "id": "p8_pr4_w5",
            "ar": "وَلَكِنَّهُ",
            "root": "لَكِنْ",
            "meaning": "Fakat o",
            "phraseTr": "<u>Fakat o</u>",
            "type": "bağlaç + harf + zamir"
          },
          {
            "id": "p8_pr4_w6",
            "ar": "شَعَرَ",
            "root": "شعر",
            "meaning": "Hissetti",
            "phraseTr": "<u>Hissetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w7",
            "ar": "بِتَعَبٍ",
            "root": "تعب",
            "meaning": "... ile Yorgunluk",
            "phraseTr": "<u>... ile Yorgunluk</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w8",
            "ar": "كَبِيرٍ",
            "root": "كبر",
            "meaning": "Büyük, yaşlı",
            "phraseTr": "<u>Büyük, yaşlı</u>",
            "type": "sıfat"
          },
          {
            "id": "p8_pr4_w9",
            "ar": "الآنَ؛",
            "root": "أون",
            "meaning": "şimdi, şu an",
            "phraseTr": "<u>şimdi, şu an</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p8_pr4_w10",
            "ar": "لأَنَّهُ",
            "root": "أَنَّ",
            "meaning": "Çünkü o",
            "phraseTr": "<u>Çünkü o</u>",
            "type": "bağlaç + zamir"
          },
          {
            "id": "p8_pr4_w11",
            "ar": "اسْتَخْدَمَ",
            "root": "خدم",
            "meaning": "Kullandı",
            "phraseTr": "<u>Kullandı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w12",
            "ar": "طَاقَةً",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "büyük bir <u>enerji</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w13",
            "ar": "كَبِيرَةً",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir enerji",
            "type": "sıfat"
          },
          {
            "id": "p8_pr4_w14",
            "ar": "لِيُنْقِذَ",
            "root": "نقذ",
            "meaning": "Kurtarmak için",
            "phraseTr": "<u>Kurtarmak için</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p8_pr4_w15",
            "ar": "الشَّابَّ.",
            "root": "شبب",
            "meaning": "Genci",
            "phraseTr": "<u>Genci</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w16",
            "ar": "شَعَرَ",
            "root": "شعر",
            "meaning": "Hissetti",
            "phraseTr": "<u>Hissetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w17",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr4_w18",
            "ar": "بِالعَطَشِ",
            "root": "عطش",
            "meaning": "... ile Susuzluk",
            "phraseTr": "şiddetli <u>susuzluk</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w19",
            "ar": "الشَّدِيدِ،",
            "root": "شدد",
            "meaning": "Şiddetli",
            "phraseTr": "<u>şiddetli</u> susuzluk",
            "type": "sıfat"
          },
          {
            "id": "p8_pr4_w20",
            "ar": "وَكَانَ",
            "root": "كون",
            "meaning": "Ve İdi, oldu",
            "phraseTr": "<u>Ve İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p8_pr4_w21",
            "ar": "فَمُهُ",
            "root": "فوه",
            "meaning": "Ağzı",
            "phraseTr": "<u>Ağzı</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w22",
            "ar": "جَافّاً.",
            "root": "جفف",
            "meaning": "Kuru",
            "phraseTr": "<u>Kuru</u>",
            "type": "sıfat"
          },
          {
            "id": "p8_pr4_w23",
            "ar": "أَخْرَجَ",
            "root": "خرج",
            "meaning": "Çıkardı",
            "phraseTr": "<u>Çıkardı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w24",
            "ar": "زُجَاجَةَ",
            "root": "زجج",
            "meaning": "Şişeyi",
            "phraseTr": "su <u>şişesi</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w25",
            "ar": "المَاءِ",
            "root": "موه",
            "meaning": "Su",
            "phraseTr": "<u>su</u> şişesi",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w26",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr4_w27",
            "ar": "حَقِيبَتِهِ",
            "root": "حقب",
            "meaning": "Çantası",
            "phraseTr": "onun <u>çantasından</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w28",
            "ar": "وَفَتَحَهَا،",
            "root": "فَتَحَ",
            "meaning": "Ve onu açtı",
            "phraseTr": "<u>Ve onu açtı</u>",
            "type": "bağlaç + fiil + zamir"
          },
          {
            "id": "p8_pr4_w29",
            "ar": "وَلَكِنْ",
            "root": "لَكِنْ",
            "meaning": "Ve lakin, fakat",
            "phraseTr": "<u>Ve lakin, fakat</u>",
            "type": "bağlaç + istidrak"
          },
          {
            "id": "p8_pr4_w30",
            "ar": "لَمْ",
            "root": "لَمْ",
            "meaning": "-medi, -madı",
            "phraseTr": "<u>-medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p8_pr4_w31",
            "ar": "يَنْزِلْ",
            "root": "نزل",
            "meaning": "İndi",
            "phraseTr": "<u>İndi</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p8_pr4_w32",
            "ar": "مِنْهَا",
            "root": "مِنْ",
            "meaning": "-den, -dan (onun)",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p8_pr4_w33",
            "ar": "إِلاَّ",
            "root": "إِلَّا",
            "meaning": "Ancak, sadece, -den başka",
            "phraseTr": "<u>Ancak, sadece, -den başka</u>",
            "type": "istisna edatı"
          },
          {
            "id": "p8_pr4_w34",
            "ar": "نُقْطَةٌ",
            "root": "نقط",
            "meaning": "Bir damla",
            "phraseTr": "tek bir <u>damla</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w35",
            "ar": "وَاحِدَةٌ!",
            "root": "وحد",
            "meaning": "bir, bir defa",
            "phraseTr": "<u>tek</u> bir damla",
            "type": "sayı"
          },
          {
            "id": "p8_pr4_w36",
            "ar": "لَقَدِ",
            "root": "لقد",
            "meaning": "şüphesiz ki",
            "phraseTr": "<u>şüphesiz ki</u>",
            "type": "tekit edatı"
          },
          {
            "id": "p8_pr4_w37",
            "ar": "انْتَهَى",
            "root": "نهي",
            "meaning": "Bitti",
            "phraseTr": "<u>Bitti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w38",
            "ar": "المَاءُ.",
            "root": "موه",
            "meaning": "Su",
            "phraseTr": "<u>Su</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w39",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p8_pr4_w40",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p8_pr4_w41",
            "ar": "بِحُزْنٍ:",
            "root": "حزن",
            "meaning": "hüzünle",
            "phraseTr": "<u>üzüntüyle</u>",
            "type": "zarf"
          },
          {
            "id": "p8_pr4_w42",
            "ar": "«أُوه،",
            "root": "أُوه",
            "meaning": "Oh.. (iç çekme)",
            "phraseTr": "<u>Oh..</u>",
            "type": "ünlem"
          },
          {
            "id": "p8_pr4_w43",
            "ar": "لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p8_pr4_w44",
            "ar": "يُوجَدُ",
            "root": "وجد",
            "meaning": "Bulunur, vardır",
            "phraseTr": "<u>Bulunur, vardır</u>",
            "type": "meçhul fiil"
          },
          {
            "id": "p8_pr4_w45",
            "ar": "مَاءٌ..",
            "root": "موه",
            "meaning": "Su",
            "phraseTr": "<u>Su</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w46",
            "ar": "يَجِبُ",
            "root": "وَجَبَ",
            "meaning": "Gerekir, mecburdur",
            "phraseTr": "<u>Gerekir, mecburdur</u>",
            "type": "fiil"
          },
          {
            "id": "p8_pr4_w47",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p8_pr4_w48",
            "ar": "أَصْبِرَ",
            "root": "صبر",
            "meaning": "Sabredeyim",
            "phraseTr": "<u>Sabredeyim</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p8_pr4_w49",
            "ar": "حَتَّى",
            "root": "حَتَّى",
            "meaning": "Kadar, ta ki",
            "phraseTr": "<u>Kadar, ta ki</u>",
            "type": "edat"
          },
          {
            "id": "p8_pr4_w50",
            "ar": "نِهَايَةِ",
            "root": "نهي",
            "meaning": "Son",
            "phraseTr": "<u>Son</u>",
            "type": "isim"
          },
          {
            "id": "p8_pr4_w51",
            "ar": "النَّفَقِ.»",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>Tünel</u>",
            "type": "isim"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 9,
    "title": "الصَّفْحَةُ التَّاسِعَةُ (9)",
    "paragraphs": [
      {
        "pId": "p9_pr1",
        "words": [
          {
            "id": "p9_pr1_w1",
            "ar": "مَرَّتِ",
            "root": "مرر",
            "meaning": "Geçti",
            "phraseTr": "<u>Geçti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr1_w2",
            "ar": "السَّاعَةُ",
            "root": "سوع",
            "meaning": "Bir saat",
            "phraseTr": "beşinci <u>saat</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr1_w3",
            "ar": "الخَامِسَةُ.",
            "root": "خمس",
            "meaning": "beşinci (dişil)",
            "phraseTr": "<u>beşinci</u> saat",
            "type": "sıra sayısı"
          },
          {
            "id": "p9_pr1_w4",
            "ar": "الآنَ،",
            "root": "أون",
            "meaning": "şimdi, şu an",
            "phraseTr": "<u>şimdi, şu an</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p9_pr1_w5",
            "ar": "سَقَطَ",
            "root": "سقط",
            "meaning": "Düştü",
            "phraseTr": "<u>Düştü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr1_w6",
            "ar": "أَكْثَرُ",
            "root": "كثر",
            "meaning": "Daha çok, çoğu",
            "phraseTr": "yarışmacıların <u>çoğu</u>",
            "type": "ismi tafdil"
          },
          {
            "id": "p9_pr1_w7",
            "ar": "المُتَسَابِقِينَ",
            "root": "سبق",
            "meaning": "Yarışmacılar",
            "phraseTr": "<u>yarışmacıların</u> çoğu",
            "type": "cemi isim"
          },
          {
            "id": "p9_pr1_w8",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr1_w9",
            "ar": "التَّعَبِ،",
            "root": "تعب",
            "meaning": "Yorgunluk",
            "phraseTr": "<u>yorgunluktan</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr1_w10",
            "ar": "وَلَمْ",
            "root": "لَمْ",
            "meaning": "Ve -medi, -madı",
            "phraseTr": "<u>Ve -medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p9_pr1_w11",
            "ar": "يَبْقَ",
            "root": "بقي",
            "meaning": "Kaldı",
            "phraseTr": "<u>Kaldı</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p9_pr1_w12",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr1_w13",
            "ar": "النَّفَقِ",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>Tünel</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr1_w14",
            "ar": "إِلاَّ",
            "root": "إِلَّا",
            "meaning": "Ancak, sadece, -den başka",
            "phraseTr": "<u>Ancak, sadece, -den başka</u>",
            "type": "istisna edatı"
          },
          {
            "id": "p9_pr1_w15",
            "ar": "ثَمَانُونَ",
            "root": "ثمن",
            "meaning": "seksen",
            "phraseTr": "<u>seksen</u>",
            "type": "sayı"
          },
          {
            "id": "p9_pr1_w16",
            "ar": "(80)",
            "root": "",
            "meaning": "(80)",
            "phraseTr": "(80)",
            "type": "sayı/noktalama"
          },
          {
            "id": "p9_pr1_w17",
            "ar": "شَخْصاً",
            "root": "شخص",
            "meaning": "Kişi",
            "phraseTr": "<u>Kişi</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr1_w18",
            "ar": "فَقَطْ",
            "root": "فقط",
            "meaning": "yalnızca, sadece",
            "phraseTr": "<u>yalnızca, sadece</u>",
            "type": "edat"
          },
          {
            "id": "p9_pr1_w19",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr1_w20",
            "ar": "أَصْلِ",
            "root": "أَصْل",
            "meaning": "Asıl, kaynak (-den)",
            "phraseTr": "<u>Asıl, kaynak</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr1_w21",
            "ar": "أَرْبَعِمِائَةٍ",
            "root": "ربع / مائة",
            "meaning": "dört yüz",
            "phraseTr": "<u>dört yüz</u>",
            "type": "sayı"
          },
          {
            "id": "p9_pr1_w22",
            "ar": "وَخَمْسَةٍ.",
            "root": "خمس",
            "meaning": "Ve beş",
            "phraseTr": "<u>Ve beş</u>",
            "type": "sayı"
          },
          {
            "id": "p9_pr1_w23",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p9_pr1_w24",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr1_w25",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr1_w26",
            "ar": "وَهُوَ",
            "root": "هُوَ",
            "meaning": "Ve O",
            "phraseTr": "<u>Ve O</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr1_w27",
            "ar": "يَشْعُرُ",
            "root": "شعر",
            "meaning": "Hissediyordu",
            "phraseTr": "<u>Hissediyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr1_w28",
            "ar": "بِالأَلَمِ",
            "root": "ألم",
            "meaning": "... ile Ağrı, acı",
            "phraseTr": "<u>acıyı</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr1_w29",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-de</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr1_w30",
            "ar": "قَدَمَيْهِ.",
            "root": "قدم",
            "meaning": "İki ayağı",
            "phraseTr": "onun <u>ayaklarında</u>",
            "type": "tesniye isim"
          }
        ]
      },
      {
        "pId": "p9_pr2",
        "words": [
          {
            "id": "p9_pr2_w1",
            "ar": "وَفَجْأَةً،",
            "root": "فجأ",
            "meaning": "Ve ansızın, birdenbire",
            "phraseTr": "<u>Ve ansızın, birdenbire</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr2_w2",
            "ar": "شَعَرَ",
            "root": "شعر",
            "meaning": "Hissetti",
            "phraseTr": "<u>Hissetti</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr2_w3",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr2_w4",
            "ar": "أَنَّ",
            "root": "أَنَّ",
            "meaning": "-dığı, ki, olduğunu",
            "phraseTr": "<u>-dığı, ki, olduğunu</u>",
            "type": "tekit harfi"
          },
          {
            "id": "p9_pr2_w5",
            "ar": "هُنَاكَ",
            "root": "هناك",
            "meaning": "orada, oraya",
            "phraseTr": "<u>orada, oraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p9_pr2_w6",
            "ar": "شَخْصاً",
            "root": "شخص",
            "meaning": "Kişi",
            "phraseTr": "<u>Kişi</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w7",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr2_w8",
            "ar": "بِجَانِبِهِ",
            "root": "جَنَبَ",
            "meaning": "Yanında, yanı başında",
            "phraseTr": "onun <u>yanında</u>",
            "type": "isim + zamir"
          },
          {
            "id": "p9_pr2_w9",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr2_w10",
            "ar": "جِهَةِ",
            "root": "وَجَهَ",
            "meaning": "Yön, taraf",
            "phraseTr": "sağ <u>taraf</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w11",
            "ar": "اليَمِينِ.",
            "root": "يمن",
            "meaning": "sağ",
            "phraseTr": "<u>sağ</u> taraf",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w12",
            "ar": "الشَّيْءُ",
            "root": "شيأ",
            "meaning": "Şey",
            "phraseTr": "garip <u>şey</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w13",
            "ar": "الغَرِيبُ",
            "root": "غرب",
            "meaning": "Garip, tuhaf",
            "phraseTr": "<u>garip</u> şey",
            "type": "sıfat"
          },
          {
            "id": "p9_pr2_w14",
            "ar": "هُوَ",
            "root": "هُوَ",
            "meaning": "O",
            "phraseTr": "<u>O</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr2_w15",
            "ar": "أَنَّ",
            "root": "أَنَّ",
            "meaning": "-dığı, ki, olduğunu",
            "phraseTr": "<u>-dığı, ki, olduğunu</u>",
            "type": "tekit harfi"
          },
          {
            "id": "p9_pr2_w16",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr2_w17",
            "ar": "لَمْ",
            "root": "لَمْ",
            "meaning": "-medi, -madı",
            "phraseTr": "<u>-medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p9_pr2_w18",
            "ar": "يَسْمَعْ",
            "root": "سَمِعَ",
            "meaning": "Duymadı",
            "phraseTr": "<u>Duymadı</u>",
            "type": "fiil (cezm)"
          },
          {
            "id": "p9_pr2_w19",
            "ar": "صَوْتَ",
            "root": "صوت",
            "meaning": "Sesi",
            "phraseTr": "<u>sesi</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w20",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>bunun</u> sesi",
            "type": "işaret ismi"
          },
          {
            "id": "p9_pr2_w21",
            "ar": "الشَّخْصِ",
            "root": "شخص",
            "meaning": "Kişi",
            "phraseTr": "Bu <u>kişi</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w22",
            "ar": "أَبَداً!",
            "root": "أَبَد",
            "meaning": "Asla, katiyen",
            "phraseTr": "<u>Asla, katiyen</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr2_w23",
            "ar": "لَمْ",
            "root": "لَمْ",
            "meaning": "-medi, -madı",
            "phraseTr": "<u>-medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p9_pr2_w24",
            "ar": "يَكُنْ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p9_pr2_w25",
            "ar": "لِحِذَائِهِ",
            "root": "حذو",
            "meaning": "... için Ayakkabısı",
            "phraseTr": "onun <u>ayakkabısının</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w26",
            "ar": "أَيُّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>Hangi, herhangi bir</u>",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p9_pr2_w27",
            "ar": "صَوْتٍ",
            "root": "صوت",
            "meaning": "Ses",
            "phraseTr": "<u>Ses</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w28",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr2_w29",
            "ar": "الحَجَرِ،",
            "root": "حَجَر",
            "meaning": "Taş",
            "phraseTr": "<u>taşta</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w30",
            "ar": "وَلَمْ",
            "root": "لَمْ",
            "meaning": "Ve -medi, -madı",
            "phraseTr": "<u>Ve -medi, -madı</u>",
            "type": "cezm edatı"
          },
          {
            "id": "p9_pr2_w31",
            "ar": "يَكُنْ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "muzari fiil (meczum)"
          },
          {
            "id": "p9_pr2_w32",
            "ar": "لِنَفَسِهِ",
            "root": "نفس",
            "meaning": "... için Nefesi",
            "phraseTr": "onun <u>nefesinin</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr2_w33",
            "ar": "أَيُّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>Hangi, herhangi bir</u>",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p9_pr2_w34",
            "ar": "صَوْتٍ.",
            "root": "صوت",
            "meaning": "Ses",
            "phraseTr": "<u>Ses</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p9_pr3",
        "words": [
          {
            "id": "p9_pr3_w1",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr3_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr3_w3",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr3_w4",
            "ar": "يَمِينِهِ،",
            "root": "يمن",
            "meaning": "sağı",
            "phraseTr": "onun <u>sağına</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w5",
            "ar": "فَرَأَى",
            "root": "رأي",
            "meaning": "Derhal Gördü",
            "phraseTr": "<u>Derhal Gördü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr3_w6",
            "ar": "وَلَداً",
            "root": "ولد",
            "meaning": "Bir çocuk",
            "phraseTr": "<u>Bir çocuk</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w7",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr3_w8",
            "ar": "نَفْسِ",
            "root": "نفس",
            "meaning": "Aynı",
            "phraseTr": "kendi <u>yaşıtı</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w9",
            "ar": "عُمْرِهِ!",
            "root": "عمر",
            "meaning": "Yaşı",
            "phraseTr": "kendi <u>yaşında</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w10",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p9_pr3_w11",
            "ar": "عُمْرُهُ",
            "root": "عمر",
            "meaning": "Yaşı",
            "phraseTr": "<u>Yaşı</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w12",
            "ar": "خَمْسَ",
            "root": "خمس",
            "meaning": "beş",
            "phraseTr": "<u>on</u> beş",
            "type": "sayı"
          },
          {
            "id": "p9_pr3_w13",
            "ar": "عَشْرَةَ",
            "root": "عشر",
            "meaning": "on",
            "phraseTr": "on <u>beş</u>",
            "type": "sayı"
          },
          {
            "id": "p9_pr3_w14",
            "ar": "(15)",
            "root": "",
            "meaning": "(15)",
            "phraseTr": "(15)",
            "type": "sayı/noktalama"
          },
          {
            "id": "p9_pr3_w15",
            "ar": "سَنَةً",
            "root": "سنو",
            "meaning": "Yıl, yaş",
            "phraseTr": "<u>Yıl, yaş</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w16",
            "ar": "أَيْضاً.",
            "root": "أيض",
            "meaning": "de, da, ayrıca",
            "phraseTr": "<u>de, da, ayrıca</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr3_w17",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p9_pr3_w18",
            "ar": "شَعْرُ",
            "root": "شعر",
            "meaning": "Saçı",
            "phraseTr": "<u>Saçı</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w19",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> velet",
            "type": "işaret ismi"
          },
          {
            "id": "p9_pr3_w20",
            "ar": "الوَلَدِ",
            "root": "ولد",
            "meaning": "Çocuğu",
            "phraseTr": "Bu <u>velet</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w21",
            "ar": "أَبْيَضَ",
            "root": "بيض",
            "meaning": "Beyaz",
            "phraseTr": "<u>Beyaz</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr3_w22",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p9_pr3_w23",
            "ar": "الثَّلْجِ،",
            "root": "ثلج",
            "meaning": "Kar",
            "phraseTr": "<u>kar</u> gibi",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w24",
            "ar": "وَعَيْنَاهُ",
            "root": "عين",
            "meaning": "Ve İki gözü",
            "phraseTr": "<u>Ve İki gözü</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p9_pr3_w25",
            "ar": "سَوْدَاوَيْنِ",
            "root": "سَوِدَ",
            "meaning": "İki siyah",
            "phraseTr": "<u>İki siyah</u>",
            "type": "sıfat (tesniye)"
          },
          {
            "id": "p9_pr3_w26",
            "ar": "وَهَادِئَتَيْنِ.",
            "root": "هَدَأَ",
            "meaning": "Ve İki sakin",
            "phraseTr": "<u>Ve İki sakin</u>",
            "type": "sıfat (tesniye)"
          },
          {
            "id": "p9_pr3_w27",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p9_pr3_w28",
            "ar": "يَلْبَسُ",
            "root": "لبس",
            "meaning": "Giyer",
            "phraseTr": "<u>Giyer</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr3_w29",
            "ar": "قَمِيصاً",
            "root": "قمص",
            "meaning": "Bir gömlek",
            "phraseTr": "mavi <u>gömlek</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w30",
            "ar": "أَزْرَقَ،",
            "root": "زررق",
            "meaning": "Mavi",
            "phraseTr": "<u>mavi</u> gömlek",
            "type": "sıfat"
          },
          {
            "id": "p9_pr3_w31",
            "ar": "وَعَلَى",
            "root": "عَلَى",
            "meaning": "Ve üzerinde, -e",
            "phraseTr": "<u>Ve üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr3_w32",
            "ar": "صَدْرِهِ",
            "root": "صدر",
            "meaning": "Göğsü",
            "phraseTr": "<u>Göğsü</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w33",
            "ar": "الرَّقْمُ",
            "root": "رقم",
            "meaning": "Numara",
            "phraseTr": "<u>Numara</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w34",
            "ar": "99.",
            "root": "",
            "meaning": "99.",
            "phraseTr": "99.",
            "type": "sayı/noktalama"
          },
          {
            "id": "p9_pr3_w35",
            "ar": "وَكَانَ",
            "root": "كون",
            "meaning": "Ve İdi, oldu",
            "phraseTr": "<u>Ve İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p9_pr3_w36",
            "ar": "يَجْرِي",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr3_w37",
            "ar": "وَيَدَاهُ",
            "root": "يدي",
            "meaning": "Ve İki eli",
            "phraseTr": "<u>Ve İki eli</u>",
            "type": "tesniye isim"
          },
          {
            "id": "p9_pr3_w38",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr3_w39",
            "ar": "جَيْبِهِ",
            "root": "جيب",
            "meaning": "Cebi",
            "phraseTr": "onun <u>cebinde</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w40",
            "ar": "بِكُلِّ",
            "root": "كلل",
            "meaning": "... ile bütün, her",
            "phraseTr": "<u>büyük bir</u> rahatlıkla",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w41",
            "ar": "رَاحَةٍ،",
            "root": "رَاحَ",
            "meaning": "Rahatlık, huzur",
            "phraseTr": "büyük bir <u>rahatlıkla</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w42",
            "ar": "وَلاَ",
            "root": "لاَ",
            "meaning": "Ve değil, -mez, -maz",
            "phraseTr": "<u>Ve değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p9_pr3_w43",
            "ar": "يُوجَدُ",
            "root": "وجد",
            "meaning": "Bulunur, vardır",
            "phraseTr": "<u>Bulunur, vardır</u>",
            "type": "meçhul fiil"
          },
          {
            "id": "p9_pr3_w44",
            "ar": "أَيُّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>Hangi, herhangi bir</u>",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p9_pr3_w45",
            "ar": "عَرَقٍ",
            "root": "عرق",
            "meaning": "Ter",
            "phraseTr": "<u>Ter</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr3_w46",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr3_w47",
            "ar": "وَجْهِهِ!",
            "root": "وجه",
            "meaning": "Yüzü",
            "phraseTr": "kendi <u>yüzüstü</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p9_pr4",
        "words": [
          {
            "id": "p9_pr4_w1",
            "ar": "فَهِمَ",
            "root": "فهم",
            "meaning": "Anladı",
            "phraseTr": "<u>Anladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr4_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr4_w3",
            "ar": "كَيْفَ",
            "root": "كيف",
            "meaning": "nasıl",
            "phraseTr": "<u>nasıl</u>",
            "type": "soru edatı"
          },
          {
            "id": "p9_pr4_w4",
            "ar": "يَفْعَلُ",
            "root": "فعل",
            "meaning": "Yapar",
            "phraseTr": "<u>Yapar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr4_w5",
            "ar": "الوَلَدُ",
            "root": "ولد",
            "meaning": "Çocuk",
            "phraseTr": "<u>Çocuk</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w6",
            "ar": "ذَلِكَ:",
            "root": "ذا",
            "meaning": "Şu / O",
            "phraseTr": "<u>Şu</u>",
            "type": "işaret ismi"
          },
          {
            "id": "p9_pr4_w7",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> velet",
            "type": "işaret ismi"
          },
          {
            "id": "p9_pr4_w8",
            "ar": "الوَلَدُ",
            "root": "ولد",
            "meaning": "Çocuk",
            "phraseTr": "Bu <u>velet</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w9",
            "ar": "يَضَعُ",
            "root": "وضع",
            "meaning": "Koyar",
            "phraseTr": "<u>Koyar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr4_w10",
            "ar": "طَاقَةَ",
            "root": "طوق",
            "meaning": "Enerjisini",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w11",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p9_pr4_w12",
            "ar": "تَحْتَ",
            "root": "تحت",
            "meaning": "altında, altına",
            "phraseTr": "<u>altına</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p9_pr4_w13",
            "ar": "حِذَائِهِ",
            "root": "حذو",
            "meaning": "Ayakkabısı",
            "phraseTr": "onun <u>ayakkabısının</u> altına",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w14",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>Gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p9_pr4_w15",
            "ar": "القُطْنِ",
            "root": "قطن",
            "meaning": "Pamuk",
            "phraseTr": "yumuşak <u>pamuk</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w16",
            "ar": "النَّاعِمِ،",
            "root": "نعم",
            "meaning": "Yumuşak",
            "phraseTr": "<u>yumuşak</u> pamuk",
            "type": "sıfat"
          },
          {
            "id": "p9_pr4_w17",
            "ar": "لِذَلِكَ",
            "root": "ذَا",
            "meaning": "Bu yüzden",
            "phraseTr": "<u>Bu yüzden</u>",
            "type": "bağlaç"
          },
          {
            "id": "p9_pr4_w18",
            "ar": "لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p9_pr4_w19",
            "ar": "يَخْرُجُ",
            "root": "خرج",
            "meaning": "Çıkar",
            "phraseTr": "<u>Çıkar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr4_w20",
            "ar": "أَيُّ",
            "root": "أَيّ",
            "meaning": "Hangi, herhangi bir",
            "phraseTr": "<u>Hangi, herhangi bir</u>",
            "type": "soru/işaret ismi"
          },
          {
            "id": "p9_pr4_w21",
            "ar": "صَوْتٍ",
            "root": "صوت",
            "meaning": "Ses",
            "phraseTr": "<u>Ses</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w22",
            "ar": "عِنْدَمَا",
            "root": "عِنْد",
            "meaning": "-dığı zaman",
            "phraseTr": "<u>-dığı zaman</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr4_w23",
            "ar": "يَمْشِي",
            "root": "مشي",
            "meaning": "Yürür",
            "phraseTr": "<u>Yürür</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr4_w24",
            "ar": "أَوْ",
            "root": "أَوْ",
            "meaning": "veya, yahut",
            "phraseTr": "<u>veya, yahut</u>",
            "type": "bağlaç"
          },
          {
            "id": "p9_pr4_w25",
            "ar": "يَجْرِي!",
            "root": "جري",
            "meaning": "Koşar",
            "phraseTr": "<u>Koşar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr4_w26",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr4_w27",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr4_w28",
            "ar": "بِإِعْجَابٍ:",
            "root": "عجب",
            "meaning": "hayranlıkla",
            "phraseTr": "<u>hayranlıkla</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr4_w29",
            "ar": "«مَرْحَباً!",
            "root": "رَحِبَ",
            "meaning": "Merhaba!",
            "phraseTr": "<u>Merhaba!</u>",
            "type": "ünlem"
          },
          {
            "id": "p9_pr4_w30",
            "ar": "أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr4_w31",
            "ar": "سَرِيعٌ",
            "root": "سرع",
            "meaning": "Hızlı",
            "phraseTr": "<u>Hızlı</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr4_w32",
            "ar": "وَهَادِئٌ",
            "root": "هدأ",
            "meaning": "Ve Sakin",
            "phraseTr": "<u>Ve Sakin</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr4_w33",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr4_w34",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p9_pr4_w35",
            "ar": "القِطِّ!",
            "root": "قطط",
            "meaning": "Kedi",
            "phraseTr": "<u>kedi</u> gibi",
            "type": "isim"
          },
          {
            "id": "p9_pr4_w36",
            "ar": "كَيْفَ",
            "root": "كيف",
            "meaning": "nasıl",
            "phraseTr": "<u>nasıl</u>",
            "type": "soru edatı"
          },
          {
            "id": "p9_pr4_w37",
            "ar": "تَفْعَلُ",
            "root": "فعل",
            "meaning": "Yaparsın",
            "phraseTr": "<u>Yaparsın</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr4_w38",
            "ar": "هَذَا؟»",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u>",
            "type": "işaret ismi"
          }
        ]
      },
      {
        "pId": "p9_pr5",
        "words": [
          {
            "id": "p9_pr5_w1",
            "ar": "نَظَرَ",
            "root": "نظر",
            "meaning": "Baktı",
            "phraseTr": "<u>Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w2",
            "ar": "الوَلَدُ",
            "root": "ولد",
            "meaning": "Çocuk",
            "phraseTr": "<u>Çocuk</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w3",
            "ar": "ذُو",
            "root": "ذُو",
            "meaning": "Sahibi olan",
            "phraseTr": "<u>sahibi</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w4",
            "ar": "الشَّعْرِ",
            "root": "شعر",
            "meaning": "Saç",
            "phraseTr": "beyaz <u>saç</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w5",
            "ar": "الأَبْيَضِ",
            "root": "بيض",
            "meaning": "Beyaz",
            "phraseTr": "<u>beyaz</u> saç",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w6",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr5_w7",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr5_w8",
            "ar": "وَقَالَ",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w9",
            "ar": "بِصَوْتٍ",
            "root": "صوت",
            "meaning": "... ile Ses",
            "phraseTr": "<u>... ile Ses</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w10",
            "ar": "هَادِئٍ:",
            "root": "هدأ",
            "meaning": "Sakin",
            "phraseTr": "<u>Sakin</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w11",
            "ar": "«أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr5_w12",
            "ar": "أَتَدَرَّبُ",
            "root": "درب",
            "meaning": "Antrenman yaparım",
            "phraseTr": "<u>Antrenman yaparım</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p9_pr5_w13",
            "ar": "عَلَى",
            "root": "عَلَى",
            "meaning": "üzerinde, -e",
            "phraseTr": "<u>üzerinde, -e</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr5_w14",
            "ar": "هَذِهِ",
            "root": "ذه",
            "meaning": "Bu (dişil)",
            "phraseTr": "<u>Bu</u> hareket",
            "type": "işaret ismi"
          },
          {
            "id": "p9_pr5_w15",
            "ar": "الحَرَكَةِ",
            "root": "حرك",
            "meaning": "Hareket",
            "phraseTr": "Bu <u>hareket</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w16",
            "ar": "مُنْذُ",
            "root": "مُنْذُ",
            "meaning": "-den beri",
            "phraseTr": "<u>-den beri</u>",
            "type": "edat"
          },
          {
            "id": "p9_pr5_w17",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p9_pr5_w18",
            "ar": "كُنْتُ",
            "root": "كون",
            "meaning": "İdim, oldum",
            "phraseTr": "<u>İdim, oldum</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p9_pr5_w19",
            "ar": "صَغِيراً.",
            "root": "صغر",
            "meaning": "Küçük",
            "phraseTr": "<u>Küçük</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w20",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr5_w21",
            "ar": "رَأَيْتُكَ",
            "root": "رأي",
            "meaning": "Seni gördüm",
            "phraseTr": "<u>Seni gördüm</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w22",
            "ar": "عِنْدَمَا",
            "root": "عِنْد",
            "meaning": "-dığı zaman",
            "phraseTr": "<u>-dığı zaman</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr5_w23",
            "ar": "حَمَلْتَ",
            "root": "حمل",
            "meaning": "Taşıdın",
            "phraseTr": "<u>Taşıdın</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w24",
            "ar": "ذَلِكَ",
            "root": "ذا",
            "meaning": "Şu / O",
            "phraseTr": "<u>Şu</u> genç",
            "type": "işaret ismi"
          },
          {
            "id": "p9_pr5_w25",
            "ar": "الشَّابَّ",
            "root": "شبب",
            "meaning": "Genci",
            "phraseTr": "Şu <u>genç</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w26",
            "ar": "عِنْدَ",
            "root": "عِنْد",
            "meaning": "Yanında, -de",
            "phraseTr": "<u>yanında</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p9_pr5_w27",
            "ar": "الصَّخْرَةِ",
            "root": "صخر",
            "meaning": "Kaya",
            "phraseTr": "büyük <u>kaya</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w28",
            "ar": "الكَبِيرَةِ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> kaya",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w29",
            "ar": "أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr5_w30",
            "ar": "أَيْضاً",
            "root": "أيض",
            "meaning": "de, da, ayrıca",
            "phraseTr": "<u>de, da, ayrıca</u>",
            "type": "zarf"
          },
          {
            "id": "p9_pr5_w31",
            "ar": "قَوِيٌّ",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>güçlü</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w32",
            "ar": "جِدّاً،",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u> güçlü",
            "type": "zarf"
          },
          {
            "id": "p9_pr5_w33",
            "ar": "وَطَاقَةُ",
            "root": "طوق",
            "meaning": "Ve Enerji",
            "phraseTr": "<u>Ve Enerji</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w34",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi enerjisi</u>",
            "type": "terim"
          },
          {
            "id": "p9_pr5_w35",
            "ar": "عِنْدَكَ",
            "root": "عِنْد",
            "meaning": "Senin yanında / sende var",
            "phraseTr": "<u>Senin yanında</u>",
            "type": "zarf + zamir"
          },
          {
            "id": "p9_pr5_w36",
            "ar": "كَبِيرَةٌ.",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w37",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr5_w38",
            "ar": "اسْمِي",
            "root": "سمو",
            "meaning": "Adım",
            "phraseTr": "<u>Adım</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w39",
            "ar": "زَيْد،",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr5_w40",
            "ar": "جِئْتُ",
            "root": "جيأ",
            "meaning": "Geldim",
            "phraseTr": "<u>Geldim</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w41",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr5_w42",
            "ar": "مَدِينَةِ",
            "root": "مدن",
            "meaning": "Şehir",
            "phraseTr": "Çöl <u>Şehri</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w43",
            "ar": "الصَّحْرَاءِ.»",
            "root": "صحر",
            "meaning": "Çöl",
            "phraseTr": "<u>Çöl</u> Şehri",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w44",
            "ar": "ابْتَسَمَ",
            "root": "بسم",
            "meaning": "Gülümsedi",
            "phraseTr": "<u>Gülümsedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w45",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr5_w46",
            "ar": "ابْتِسَامَةً",
            "root": "بَسَمَ",
            "meaning": "Gülümseme",
            "phraseTr": "genişçe <u>gülümseme</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w47",
            "ar": "وَاسِعَةً",
            "root": "وَسُعَ",
            "meaning": "Genişçe, kocaman",
            "phraseTr": "<u>genişçe</u> gülümseme",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w48",
            "ar": "وَقَالَ:",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w49",
            "ar": "«تَشَرَّفْتُ",
            "root": "شرف",
            "meaning": "Şeref duydum",
            "phraseTr": "<u>Şeref duydum</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w50",
            "ar": "بِكَ",
            "root": "بِ",
            "meaning": "Seninle / sana",
            "phraseTr": "<u>Seninle</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p9_pr5_w51",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p9_pr5_w52",
            "ar": "زَيْد!",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr5_w53",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr5_w54",
            "ar": "اسْمِي",
            "root": "سمو",
            "meaning": "Adım",
            "phraseTr": "<u>Adım</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w55",
            "ar": "رَامِي،",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p9_pr5_w56",
            "ar": "جِئْتُ",
            "root": "جيأ",
            "meaning": "Geldim",
            "phraseTr": "<u>Geldim</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w57",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>-den, -dan</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr5_w58",
            "ar": "قَرْيَةِ",
            "root": "قري",
            "meaning": "Köy",
            "phraseTr": "Dağ <u>Köyü</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w59",
            "ar": "الجَبَلِ.",
            "root": "جبل",
            "meaning": "Dağ",
            "phraseTr": "<u>Dağ</u> Köyü",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w60",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p9_pr5_w61",
            "ar": "سَعِيدٌ",
            "root": "سعد",
            "meaning": "Mutlu",
            "phraseTr": "<u>Mutlu</u>",
            "type": "sıfat"
          },
          {
            "id": "p9_pr5_w62",
            "ar": "لأَنِّي",
            "root": "أَنَّ",
            "meaning": "Çünkü ben",
            "phraseTr": "<u>Çünkü ben</u>",
            "type": "bağlaç + zamir"
          },
          {
            "id": "p9_pr5_w63",
            "ar": "وَجَدْتُ",
            "root": "وجد",
            "meaning": "Buldum",
            "phraseTr": "<u>Buldum</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p9_pr5_w64",
            "ar": "وَلَداً",
            "root": "ولد",
            "meaning": "Bir çocuk",
            "phraseTr": "<u>Bir çocuk</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w65",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p9_pr5_w66",
            "ar": "مِثْلِ",
            "root": "مِثْل",
            "meaning": "Gibi, misli",
            "phraseTr": "benim <u>yaşıtımda</u>",
            "type": "edat/isim"
          },
          {
            "id": "p9_pr5_w67",
            "ar": "عُمْرِي",
            "root": "عمر",
            "meaning": "Yaşım",
            "phraseTr": "benim <u>yaşımda</u>",
            "type": "isim"
          },
          {
            "id": "p9_pr5_w68",
            "ar": "هُنَا!»",
            "root": "هنا",
            "meaning": "burada, buraya",
            "phraseTr": "<u>burada, buraya</u>",
            "type": "mekan zarfı"
          }
        ]
      }
    ]
  },
  {
    "pageNum": 10,
    "title": "الصَّفْحَةُ العَاشِرَةُ (10)",
    "paragraphs": [
      {
        "pId": "p10_pr1",
        "words": [
          {
            "id": "p10_pr1_w1",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p10_pr1_w2",
            "ar": "زَيْد",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr1_w3",
            "ar": "يَعْرِفُ",
            "root": "عرف",
            "meaning": "Biliyordu",
            "phraseTr": "<u>Biliyordu</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p10_pr1_w4",
            "ar": "أَنَّ",
            "root": "أَنَّ",
            "meaning": "-dığı, ki, olduğunu",
            "phraseTr": "<u>-dığı, ki, olduğunu</u>",
            "type": "tekit harfi"
          },
          {
            "id": "p10_pr1_w5",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr1_w6",
            "ar": "عَطْشَانُ",
            "root": "عطش",
            "meaning": "Susamış",
            "phraseTr": "<u>Susamış</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr1_w7",
            "ar": "جِدّاً.",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr1_w8",
            "ar": "فَتَحَ",
            "root": "فتح",
            "meaning": "Açtı",
            "phraseTr": "<u>Açtı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr1_w9",
            "ar": "زَيْد",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr1_w10",
            "ar": "حَقِيبَتَهُ،",
            "root": "حقب",
            "meaning": "Çantası",
            "phraseTr": "<u>Çantası</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w11",
            "ar": "وَأَخْرَجَ",
            "root": "خرج",
            "meaning": "Ve Çıkardı",
            "phraseTr": "<u>Ve Çıkardı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr1_w12",
            "ar": "زُجَاجَةَ",
            "root": "زجج",
            "meaning": "Şişeyi",
            "phraseTr": "<u>şişe</u> (su şişesi)",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w13",
            "ar": "مَاءٍ",
            "root": "موه",
            "meaning": "Su",
            "phraseTr": "<u>su</u> şişesi",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w14",
            "ar": "جَدِيدَةً",
            "root": "جدد",
            "meaning": "Yeni",
            "phraseTr": "yeni ve <u>soğuk</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr1_w15",
            "ar": "وَبَارِدَةً،",
            "root": "برد",
            "meaning": "Ve Soğuk",
            "phraseTr": "yeni ve <u>soğuk</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr1_w16",
            "ar": "وَأَعْطَاهَا",
            "root": "عطو",
            "meaning": "Ve Onu verdi",
            "phraseTr": "<u>Ve Onu verdi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr1_w17",
            "ar": "لِرَامِي.",
            "root": "رَامِي",
            "meaning": "... için Rami (baş kahraman)",
            "phraseTr": "<u>... için Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr1_w18",
            "ar": "قَالَ",
            "root": "قول",
            "meaning": "Dedi",
            "phraseTr": "<u>Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr1_w19",
            "ar": "زَيْد:",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr1_w20",
            "ar": "«خُذْ",
            "root": "أخذ",
            "meaning": "Al!",
            "phraseTr": "<u>Al!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p10_pr1_w21",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p10_pr1_w22",
            "ar": "رَامِي،",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr1_w23",
            "ar": "اشْرَبْ",
            "root": "شرب",
            "meaning": "İç!",
            "phraseTr": "<u>İç!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p10_pr1_w24",
            "ar": "هَذَا",
            "root": "ذا",
            "meaning": "Bu",
            "phraseTr": "<u>Bu</u> su",
            "type": "işaret ismi"
          },
          {
            "id": "p10_pr1_w25",
            "ar": "المَاءَ.",
            "root": "موه",
            "meaning": "Suyu",
            "phraseTr": "Bu <u>su</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w26",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p10_pr1_w27",
            "ar": "عِنْدِي",
            "root": "عِنْد",
            "meaning": "Benim yanımda / bende var",
            "phraseTr": "<u>Benim yanımda</u>",
            "type": "zarf + zamir"
          },
          {
            "id": "p10_pr1_w28",
            "ar": "زُجَاجَةٌ",
            "root": "زجج",
            "meaning": "Bir şişe",
            "phraseTr": "başka bir <u>şişe</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w29",
            "ar": "أُخْرَى",
            "root": "أَخِر",
            "meaning": "Başka, diğer",
            "phraseTr": "<u>başka</u> bir şişe",
            "type": "sıfat (dişil)"
          },
          {
            "id": "p10_pr1_w30",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr1_w31",
            "ar": "حَقِيبَتِي.",
            "root": "حقب",
            "meaning": "Çantam",
            "phraseTr": "<u>Çantam</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w32",
            "ar": "لاَ",
            "root": "لاَ",
            "meaning": "değil, -mez, -maz",
            "phraseTr": "<u>değil, -mez, -maz</u>",
            "type": "nefy edatı"
          },
          {
            "id": "p10_pr1_w33",
            "ar": "أُرِيدُ",
            "root": "رود",
            "meaning": "İsterim",
            "phraseTr": "<u>İsterim</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p10_pr1_w34",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p10_pr1_w35",
            "ar": "تَخْسَرَ",
            "root": "خسر",
            "meaning": "Kaybedersin",
            "phraseTr": "<u>Kaybedersin</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p10_pr1_w36",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr1_w37",
            "ar": "الاخْتِبَارِ",
            "root": "خبر",
            "meaning": "Sınav",
            "phraseTr": "birinci <u>sınav</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr1_w38",
            "ar": "الأَوَّلِ.»",
            "root": "أول",
            "meaning": "birinci, ilk",
            "phraseTr": "<u>birinci</u> sınav",
            "type": "sıra sayısı"
          }
        ]
      },
      {
        "pId": "p10_pr2",
        "words": [
          {
            "id": "p10_pr2_w1",
            "ar": "أَخَذَ",
            "root": "أخذ",
            "meaning": "Aldı",
            "phraseTr": "<u>Aldı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr2_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr2_w3",
            "ar": "الزُّجَاجَةَ",
            "root": "زجج",
            "meaning": "Şişe",
            "phraseTr": "<u>Şişe</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w4",
            "ar": "وَفَرِحَ",
            "root": "فرح",
            "meaning": "Ve Sevindi",
            "phraseTr": "<u>Ve Sevindi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr2_w5",
            "ar": "كَثِيراً:",
            "root": "كثر",
            "meaning": "çok, fazlaca",
            "phraseTr": "<u>çok, fazlaca</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr2_w6",
            "ar": "«شُكْراً",
            "root": "شَكَرَ",
            "meaning": "Teşekkürler",
            "phraseTr": "<u>Teşekkürler</u>",
            "type": "mastar/ünlem"
          },
          {
            "id": "p10_pr2_w7",
            "ar": "جَزِيلاً",
            "root": "جَزُلَ",
            "meaning": "Çok, fazlaca",
            "phraseTr": "<u>Çok, fazlaca</u>",
            "type": "sıfat/zarf"
          },
          {
            "id": "p10_pr2_w8",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p10_pr2_w9",
            "ar": "زَيْد!",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr2_w10",
            "ar": "أَنْتَ",
            "root": "أَنْتَ",
            "meaning": "Sen",
            "phraseTr": "<u>Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p10_pr2_w11",
            "ar": "صَدِيقٌ",
            "root": "صدق",
            "meaning": "Arkadaş",
            "phraseTr": "iyi bir <u>dost</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w12",
            "ar": "طَيِّبٌ",
            "root": "طيب",
            "meaning": "İyi, temiz kalpli",
            "phraseTr": "<u>iyi</u> bir dost",
            "type": "sıfat"
          },
          {
            "id": "p10_pr2_w13",
            "ar": "جِدّاً!»",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr2_w14",
            "ar": "شَرِبَ",
            "root": "شَرِبَ",
            "meaning": "İçti",
            "phraseTr": "<u>İçti</u>",
            "type": "fiil"
          },
          {
            "id": "p10_pr2_w15",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr2_w16",
            "ar": "المَاءَ",
            "root": "موه",
            "meaning": "Suyu",
            "phraseTr": "soğuk <u>su</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w17",
            "ar": "البَارِدَ",
            "root": "برد",
            "meaning": "Soğuk",
            "phraseTr": "<u>soğuk</u> su",
            "type": "sıfat"
          },
          {
            "id": "p10_pr2_w18",
            "ar": "كُلَّهُ.",
            "root": "لِ",
            "meaning": "... gibi Ona / onun için",
            "phraseTr": "<u>... gibi Ona</u>",
            "type": "harf-i cer + zamir"
          },
          {
            "id": "p10_pr2_w19",
            "ar": "وَفَوْراً،",
            "root": "فور",
            "meaning": "Ve hemen, derhal",
            "phraseTr": "<u>Ve hemen, derhal</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr2_w20",
            "ar": "ذَهَبَ",
            "root": "ذَهَبَ",
            "meaning": "Gitti",
            "phraseTr": "<u>Gitti</u>",
            "type": "fiil"
          },
          {
            "id": "p10_pr2_w21",
            "ar": "التَّعَبُ",
            "root": "تعب",
            "meaning": "Yorgunluk",
            "phraseTr": "<u>Yorgunluk</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w22",
            "ar": "مِنْ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr2_w23",
            "ar": "جِسْمِهِ،",
            "root": "جسم",
            "meaning": "Bedeninden",
            "phraseTr": "onun <u>bedeninden</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w24",
            "ar": "وَعَادَتْ",
            "root": "عَادَ",
            "meaning": "Ve Geri döndü",
            "phraseTr": "<u>Ve Geri döndü</u>",
            "type": "fiil"
          },
          {
            "id": "p10_pr2_w25",
            "ar": "طَاقَةُ",
            "root": "طوق",
            "meaning": "Enerjisi",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w26",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p10_pr2_w27",
            "ar": "القَوِيَّةُ",
            "root": "قوو",
            "meaning": "Güçlü",
            "phraseTr": "<u>güçlü</u> Çi enerjisi",
            "type": "sıfat"
          },
          {
            "id": "p10_pr2_w28",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr2_w29",
            "ar": "قَلْبِهِ",
            "root": "قلب",
            "meaning": "Kalbi",
            "phraseTr": "onun <u>kalbine</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr2_w30",
            "ar": "وَعَضَلاَتِهِ.",
            "root": "عَضَلَ",
            "meaning": "Ve Kasları",
            "phraseTr": "ve onun <u>kaslarına</u>",
            "type": "isim + zamir"
          }
        ]
      },
      {
        "pId": "p10_pr3",
        "words": [
          {
            "id": "p10_pr3_w1",
            "ar": "وَفِي",
            "root": "فِي",
            "meaning": "Ve -de, -da, içinde",
            "phraseTr": "<u>Ve -de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr3_w2",
            "ar": "تِلْكَ",
            "root": "ذَا",
            "meaning": "O, şu (dişil)",
            "phraseTr": "<u>O</u> an",
            "type": "işaret ismi"
          },
          {
            "id": "p10_pr3_w3",
            "ar": "اللَّحْظَةِ،",
            "root": "لحظ",
            "meaning": "An",
            "phraseTr": "O <u>anda</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w4",
            "ar": "رَأَى",
            "root": "رأي",
            "meaning": "Gördü",
            "phraseTr": "<u>Gördü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr3_w5",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr3_w6",
            "ar": "وَزَيْد",
            "root": "زَيْد",
            "meaning": "Ve Zeyd (arkadaşı)",
            "phraseTr": "<u>Ve Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr3_w7",
            "ar": "ضَوْءَ",
            "root": "ضوء",
            "meaning": "Işığı",
            "phraseTr": "güneş <u>ışığı</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w8",
            "ar": "الشَّمْسِ",
            "root": "شمس",
            "meaning": "Güneş",
            "phraseTr": "<u>güneş</u> ışığı",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w9",
            "ar": "الأَبْيَضَ",
            "root": "بيض",
            "meaning": "Beyaz",
            "phraseTr": "<u>beyaz</u> ışık",
            "type": "sıfat"
          },
          {
            "id": "p10_pr3_w10",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr3_w11",
            "ar": "آخِرِ",
            "root": "أخر",
            "meaning": "Son",
            "phraseTr": "tünelin <u>sonu</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w12",
            "ar": "النَّفَقِ!",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>tünelin</u> sonu",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w13",
            "ar": "لَقَدْ",
            "root": "لقد",
            "meaning": "şüphesiz ki",
            "phraseTr": "<u>şüphesiz ki</u>",
            "type": "tekit edatı"
          },
          {
            "id": "p10_pr3_w14",
            "ar": "وَصَلُوا",
            "root": "وصل",
            "meaning": "Ulaştılar",
            "phraseTr": "<u>Ulaştılar</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr3_w15",
            "ar": "أَخِيراً",
            "root": "أَخِر",
            "meaning": "Sonunda, nihayet",
            "phraseTr": "<u>Sonunda, nihayet</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr3_w16",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr3_w17",
            "ar": "المَخْرَجِ",
            "root": "خرج",
            "meaning": "Çıkış",
            "phraseTr": "<u>çıkışa</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w18",
            "ar": "بَعْدَ",
            "root": "بَعْد",
            "meaning": "Sonra",
            "phraseTr": "<u>Sonra</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p10_pr3_w19",
            "ar": "سِتِّ",
            "root": "ستت",
            "meaning": "altı",
            "phraseTr": "<u>altı</u> saat",
            "type": "sayı"
          },
          {
            "id": "p10_pr3_w20",
            "ar": "سَاعَاتٍ",
            "root": "سوع",
            "meaning": "Saatler",
            "phraseTr": "altı <u>saat</u>",
            "type": "cemi isim"
          },
          {
            "id": "p10_pr3_w21",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr3_w22",
            "ar": "الجَرْيِ!",
            "root": "جري",
            "meaning": "Koşu",
            "phraseTr": "<u>koşudan</u> sonra",
            "type": "isim / mastar"
          },
          {
            "id": "p10_pr3_w23",
            "ar": "كَانَ",
            "root": "كون",
            "meaning": "İdi, oldu",
            "phraseTr": "<u>İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p10_pr3_w24",
            "ar": "الحَكَمُ",
            "root": "حكم",
            "meaning": "Hakem",
            "phraseTr": "<u>Hakem</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w25",
            "ar": "سَاجِد",
            "root": "سَجَدَ",
            "meaning": "Sacid (sınav hakemi)",
            "phraseTr": "<u>Sacid</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr3_w26",
            "ar": "يَقِفُ",
            "root": "وقف",
            "meaning": "Durur",
            "phraseTr": "<u>Durur</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p10_pr3_w27",
            "ar": "خَارِجَ",
            "root": "خَرَجَ",
            "meaning": "Dışında, dışarı",
            "phraseTr": "tünelin <u>dışında</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr3_w28",
            "ar": "النَّفَقِ،",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>tünelin</u> dışında",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w29",
            "ar": "وَكَانَ",
            "root": "كون",
            "meaning": "Ve İdi, oldu",
            "phraseTr": "<u>Ve İdi, oldu</u>",
            "type": "nâkıs fiil"
          },
          {
            "id": "p10_pr3_w30",
            "ar": "البَابُ",
            "root": "بوب",
            "meaning": "Kapı",
            "phraseTr": "taş <u>kapı</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w31",
            "ar": "الحَجَرِيُّ",
            "root": "حَجَر",
            "meaning": "Taştan (kapı)",
            "phraseTr": "<u>taş</u> kapı",
            "type": "sıfat"
          },
          {
            "id": "p10_pr3_w32",
            "ar": "الكَبِيرُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> taş kapı",
            "type": "sıfat"
          },
          {
            "id": "p10_pr3_w33",
            "ar": "يَنْزِلُ",
            "root": "نزل",
            "meaning": "İner",
            "phraseTr": "<u>İner</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p10_pr3_w34",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr3_w35",
            "ar": "الأَعْلَى",
            "root": "عَلَا",
            "meaning": "Yukarı, üst taraf",
            "phraseTr": "<u>yukarıdan</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr3_w36",
            "ar": "لِيُغْلِقَ",
            "root": "غلق",
            "meaning": "... için Kapanıyor",
            "phraseTr": "<u>... için Kapanıyor</u>",
            "type": "meçhul muzari"
          },
          {
            "id": "p10_pr3_w37",
            "ar": "النَّفَقَ.",
            "root": "نفق",
            "meaning": "Tünel",
            "phraseTr": "<u>Tünel</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p10_pr4",
        "words": [
          {
            "id": "p10_pr4_w1",
            "ar": "ابْتَسَمَ",
            "root": "بسم",
            "meaning": "Gülümsedi",
            "phraseTr": "<u>Gülümsedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr4_w2",
            "ar": "زَيْد",
            "root": "زَيْد",
            "meaning": "Zeyd (arkadaşı)",
            "phraseTr": "<u>Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr4_w3",
            "ar": "وَنَظَرَ",
            "root": "نظر",
            "meaning": "Ve Baktı",
            "phraseTr": "<u>Ve Baktı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr4_w4",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>-e, -a, doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr4_w5",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr4_w6",
            "ar": "وَقَالَ:",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr4_w7",
            "ar": "«البَابُ",
            "root": "بوب",
            "meaning": "Kapı",
            "phraseTr": "<u>Kapı</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr4_w8",
            "ar": "يُغْلَقُ",
            "root": "غلق",
            "meaning": "Kapanıyor",
            "phraseTr": "<u>Kapanıyor</u>",
            "type": "meçhul muzari"
          },
          {
            "id": "p10_pr4_w9",
            "ar": "الآنَ",
            "root": "أون",
            "meaning": "şimdi, şu an",
            "phraseTr": "<u>şimdi, şu an</u>",
            "type": "zaman zarfı"
          },
          {
            "id": "p10_pr4_w10",
            "ar": "يَا",
            "root": "يَا",
            "meaning": "Ey!",
            "phraseTr": "<u>Ey!</u>",
            "type": "nida edatı"
          },
          {
            "id": "p10_pr4_w11",
            "ar": "رَامِي!",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr4_w12",
            "ar": "تَعَالَ",
            "root": "علو",
            "meaning": "Gel!",
            "phraseTr": "<u>Gel!</u>",
            "type": "emir fiili"
          },
          {
            "id": "p10_pr4_w13",
            "ar": "نَتَسَابَقْ",
            "root": "سَبَقَ",
            "meaning": "Yarışalım",
            "phraseTr": "<u>Yarışalım</u>",
            "type": "fiil"
          },
          {
            "id": "p10_pr4_w14",
            "ar": "أَنَا",
            "root": "أَنَا",
            "meaning": "Ben",
            "phraseTr": "<u>Ben</u>",
            "type": "zamir"
          },
          {
            "id": "p10_pr4_w15",
            "ar": "وَأَنْتَ؛",
            "root": "أَنْتَ",
            "meaning": "Ve Sen",
            "phraseTr": "<u>Ve Sen</u>",
            "type": "zamir"
          },
          {
            "id": "p10_pr4_w16",
            "ar": "مَنْ",
            "root": "من",
            "meaning": "kim, her kim",
            "phraseTr": "<u>kim, her kim</u>",
            "type": "şart / soru"
          },
          {
            "id": "p10_pr4_w17",
            "ar": "يَخْرُجُ",
            "root": "خرج",
            "meaning": "Çıkar",
            "phraseTr": "<u>Çıkar</u>",
            "type": "muzari fiil"
          },
          {
            "id": "p10_pr4_w18",
            "ar": "مِنَ",
            "root": "مِنْ",
            "meaning": "-den, -dan",
            "phraseTr": "<u>...-den</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr4_w19",
            "ar": "البَابِ",
            "root": "بوب",
            "meaning": "Kapı",
            "phraseTr": "<u>kapıdan</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr4_w20",
            "ar": "أَوَّلاً؟»",
            "root": "أَوَّل",
            "meaning": "İlk olarak, birincisi",
            "phraseTr": "<u>İlk olarak, birincisi</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr4_w21",
            "ar": "ضَحِكَ",
            "root": "ضحك",
            "meaning": "Güldü",
            "phraseTr": "<u>Güldü</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr4_w22",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr4_w23",
            "ar": "وَقَالَ",
            "root": "قول",
            "meaning": "Ve Dedi",
            "phraseTr": "<u>Ve Dedi</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr4_w24",
            "ar": "بِحَمَاسٍ:",
            "root": "حمس",
            "meaning": "coşkuyla",
            "phraseTr": "<u>heyecanla</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr4_w25",
            "ar": "«مُوَافِقٌ!",
            "root": "وَفَقَ",
            "meaning": "Kabul, razıyım",
            "phraseTr": "<u>Kabul, razıyım</u>",
            "type": "ism-i fail"
          },
          {
            "id": "p10_pr4_w26",
            "ar": "هَيَّا",
            "root": "هَيَّا",
            "meaning": "Haydi!",
            "phraseTr": "<u>Haydi!</u>",
            "type": "fiil-ünlem"
          },
          {
            "id": "p10_pr4_w27",
            "ar": "بِنَا!»",
            "root": "بِ",
            "meaning": "Bizimle / bize",
            "phraseTr": "<u>Bizimle</u>",
            "type": "harf-i cer + zamir"
          }
        ]
      },
      {
        "pId": "p10_pr5",
        "words": [
          {
            "id": "p10_pr5_w1",
            "ar": "وَضَعَ",
            "root": "وضع",
            "meaning": "Koydu",
            "phraseTr": "<u>Koydu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr5_w2",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr5_w3",
            "ar": "وَزَيْد",
            "root": "زَيْد",
            "meaning": "Ve Zeyd (arkadaşı)",
            "phraseTr": "<u>Ve Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr5_w4",
            "ar": "كُلَّ",
            "root": "كلل",
            "meaning": "her",
            "phraseTr": "<u>bütün</u> enerji",
            "type": "zarf"
          },
          {
            "id": "p10_pr5_w5",
            "ar": "طَاقَةِ",
            "root": "طوق",
            "meaning": "Enerji",
            "phraseTr": "Çi <u>enerjisi</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w6",
            "ar": "التْشِي",
            "root": "تْشِي",
            "meaning": "Çi enerjisi",
            "phraseTr": "<u>Çi</u> enerjisi",
            "type": "terim"
          },
          {
            "id": "p10_pr5_w7",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>...-e / içine</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr5_w8",
            "ar": "أَقْدَامِهِمَا.",
            "root": "قَدَمَ",
            "meaning": "İkisinin ayakları",
            "phraseTr": "ikisinin <u>ayaklarına</u>",
            "type": "isim + zamir"
          },
          {
            "id": "p10_pr5_w9",
            "ar": "طَارَ",
            "root": "طَارَ",
            "meaning": "Uçtu",
            "phraseTr": "<u>Uçtu</u>",
            "type": "fiil"
          },
          {
            "id": "p10_pr5_w10",
            "ar": "الوَلَدَانِ",
            "root": "وَلَدَ",
            "meaning": "İki çocuk",
            "phraseTr": "<u>İki çocuk</u>",
            "type": "isim (tesniye)"
          },
          {
            "id": "p10_pr5_w11",
            "ar": "فَوْقَ",
            "root": "فوق",
            "meaning": "üstünde, üzerine",
            "phraseTr": "<u>üzerinde</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p10_pr5_w12",
            "ar": "الأَرْضِ",
            "root": "أرض",
            "meaning": "Yer, zemin",
            "phraseTr": "<u>yerin</u> üzerinde",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w13",
            "ar": "بِسُرْعَةٍ",
            "root": "سرع",
            "meaning": "hızlıca, hızla",
            "phraseTr": "hayret verici bir <u>hızla</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr5_w14",
            "ar": "عَجِيبَةٍ",
            "root": "عجب",
            "meaning": "Şaşırtıcı",
            "phraseTr": "<u>hayret verici</u> bir hızla",
            "type": "sıfat"
          },
          {
            "id": "p10_pr5_w15",
            "ar": "مِثْلَ",
            "root": "مِثْل",
            "meaning": "Gibi",
            "phraseTr": "<u>gibi</u>",
            "type": "edat/isim"
          },
          {
            "id": "p10_pr5_w16",
            "ar": "السَّهْمِ،",
            "root": "سهم",
            "meaning": "Ok",
            "phraseTr": "<u>ok</u> gibi",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w17",
            "ar": "وَسَبَقَا",
            "root": "سَبَقَ",
            "meaning": "Ve İkisi geçti",
            "phraseTr": "<u>Ve İkisi geçti</u>",
            "type": "fiil (tesniye)"
          },
          {
            "id": "p10_pr5_w18",
            "ar": "جَمِيعَ",
            "root": "جَمَعَ",
            "meaning": "Bütün, hepsi",
            "phraseTr": "adamların <u>hepsi</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w19",
            "ar": "الرِّجَالِ",
            "root": "رجل",
            "meaning": "Adamlar",
            "phraseTr": "<u>adamların</u> hepsi",
            "type": "cemi isim"
          },
          {
            "id": "p10_pr5_w20",
            "ar": "الكِبَارِ",
            "root": "كبر",
            "meaning": "Büyükler",
            "phraseTr": "<u>yetişkin</u> adamlar",
            "type": "cemi sıfat"
          },
          {
            "id": "p10_pr5_w21",
            "ar": "الَّذِينَ",
            "root": "الذين",
            "meaning": "-anlar, -enler",
            "phraseTr": "<u>-anlar, -enler</u>",
            "type": "ilgi zamiri"
          },
          {
            "id": "p10_pr5_w22",
            "ar": "كَانُوا",
            "root": "كَانَ",
            "meaning": "İdiler (onlar)",
            "phraseTr": "<u>İdiler</u>",
            "type": "nâkıs fiil (çoğul)"
          },
          {
            "id": "p10_pr5_w23",
            "ar": "أَمَامَهُمَا.",
            "root": "أمم",
            "meaning": "önünde, önüne (ikisinin)",
            "phraseTr": "<u>önünde, önüne</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p10_pr5_w24",
            "ar": "وَقَبْلَ",
            "root": "قَبْل",
            "meaning": "Ve ... önce",
            "phraseTr": "<u>Ve ... önce</u>",
            "type": "bağlaç + zarf"
          },
          {
            "id": "p10_pr5_w25",
            "ar": "أَنْ",
            "root": "أَنْ",
            "meaning": "-mek, -mak",
            "phraseTr": "<u>-mek, -mak</u>",
            "type": "masdariyye harfi"
          },
          {
            "id": "p10_pr5_w26",
            "ar": "يُغْلَقَ",
            "root": "غلق",
            "meaning": "Kapanıyor",
            "phraseTr": "<u>Kapanıyor</u>",
            "type": "meçhul muzari"
          },
          {
            "id": "p10_pr5_w27",
            "ar": "البَابُ",
            "root": "بوب",
            "meaning": "Kapı",
            "phraseTr": "taş <u>kapı</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w28",
            "ar": "الحَجَرِيُّ",
            "root": "حَجَر",
            "meaning": "Taştan (kapı)",
            "phraseTr": "<u>taş</u> kapı",
            "type": "sıfat"
          },
          {
            "id": "p10_pr5_w29",
            "ar": "بِثَانِيَةٍ",
            "root": "ثني",
            "meaning": "... ile Saniye",
            "phraseTr": "<u>... ile Saniye</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w30",
            "ar": "وَاحِدَةٍ،",
            "root": "وحد",
            "meaning": "bir, bir defa",
            "phraseTr": "<u>bir, bir defa</u>",
            "type": "sayı"
          },
          {
            "id": "p10_pr5_w31",
            "ar": "قَفَزَ",
            "root": "قفز",
            "meaning": "Atladı",
            "phraseTr": "<u>Atladı</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr5_w32",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr5_w33",
            "ar": "وَزَيْد",
            "root": "زَيْد",
            "meaning": "Ve Zeyd (arkadaşı)",
            "phraseTr": "<u>Ve Zeyd</u>",
            "type": "özel isim"
          },
          {
            "id": "p10_pr5_w34",
            "ar": "إِلَى",
            "root": "إِلَى",
            "meaning": "-e, -a, doğru",
            "phraseTr": "<u>...-e doğru</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr5_w35",
            "ar": "الخَارِجِ",
            "root": "خَرَجَ",
            "meaning": "Dışarısı",
            "phraseTr": "<u>dışarıya</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w36",
            "ar": "مَعاً",
            "root": "معع",
            "meaning": "birlikte, beraber",
            "phraseTr": "<u>birlikte, beraber</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr5_w37",
            "ar": "فِي",
            "root": "فِي",
            "meaning": "-de, -da, içinde",
            "phraseTr": "<u>-de, -da, içinde</u>",
            "type": "harf-i cer"
          },
          {
            "id": "p10_pr5_w38",
            "ar": "نَفْسِ",
            "root": "نفس",
            "meaning": "Aynı",
            "phraseTr": "<u>aynı</u> vakit",
            "type": "isim"
          },
          {
            "id": "p10_pr5_w39",
            "ar": "الوَقْتِ!",
            "root": "وَقَتَ",
            "meaning": "Vakit, zaman",
            "phraseTr": "aynı <u>vakit</u>",
            "type": "isim"
          }
        ]
      },
      {
        "pId": "p10_pr6",
        "words": [
          {
            "id": "p10_pr6_w1",
            "ar": "وَقَفَ",
            "root": "وقف",
            "meaning": "Durdu",
            "phraseTr": "<u>Durdu</u>",
            "type": "mazi fiil"
          },
          {
            "id": "p10_pr6_w2",
            "ar": "الصَّدِيقَانِ",
            "root": "صَدَقَ",
            "meaning": "İki dost",
            "phraseTr": "iki yeni <u>dost</u>",
            "type": "isim (tesniye)"
          },
          {
            "id": "p10_pr6_w3",
            "ar": "الجَدِيدَانِ",
            "root": "جَدَّ",
            "meaning": "İki yeni",
            "phraseTr": "<u>iki yeni</u> dost",
            "type": "sıfat (tesniye)"
          },
          {
            "id": "p10_pr6_w4",
            "ar": "يَضْحَكَانِ",
            "root": "ضَحِكَ",
            "meaning": "Gülüyorlar",
            "phraseTr": "<u>Gülüyorlar</u>",
            "type": "fiil (tesniye)"
          },
          {
            "id": "p10_pr6_w5",
            "ar": "وَيَتَنَفَّسَانِ",
            "root": "نَفَسَ",
            "meaning": "Ve Soluyorlar",
            "phraseTr": "<u>Ve Soluyorlar</u>",
            "type": "fiil (tesniye)"
          },
          {
            "id": "p10_pr6_w6",
            "ar": "الهَوَاءَ",
            "root": "هوو",
            "meaning": "Havayı",
            "phraseTr": "temiz <u>hava</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr6_w7",
            "ar": "النَّظِيفَ.",
            "root": "نظف",
            "meaning": "Temiz",
            "phraseTr": "<u>temiz</u> hava",
            "type": "sıfat"
          },
          {
            "id": "p10_pr6_w8",
            "ar": "نَظَرَا",
            "root": "نَظَرَ",
            "meaning": "İkisi baktı",
            "phraseTr": "<u>İkisi baktı</u>",
            "type": "fiil (tesniye)"
          },
          {
            "id": "p10_pr6_w9",
            "ar": "أَمَامَهُمَا،",
            "root": "أمم",
            "meaning": "önünde, önüne (ikisinin)",
            "phraseTr": "<u>önünde, önüne</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p10_pr6_w10",
            "ar": "فَرَأَيَا",
            "root": "رَأَى",
            "meaning": "İkisi gördü",
            "phraseTr": "<u>İkisi gördü</u>",
            "type": "fiil (tesniye)"
          },
          {
            "id": "p10_pr6_w11",
            "ar": "غَابَةً",
            "root": "غيب",
            "meaning": "Bir orman",
            "phraseTr": "büyük bir <u>orman</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr6_w12",
            "ar": "كَبِيرَةً",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>büyük</u> bir orman",
            "type": "sıfat"
          },
          {
            "id": "p10_pr6_w13",
            "ar": "جِدّاً",
            "root": "جدد",
            "meaning": "çok",
            "phraseTr": "<u>çok</u>",
            "type": "zarf"
          },
          {
            "id": "p10_pr6_w14",
            "ar": "مَلِيئَةً",
            "root": "ملأ",
            "meaning": "Dolu",
            "phraseTr": "<u>Dolu</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr6_w15",
            "ar": "بِالأَشْجَارِ",
            "root": "شَجَرَ",
            "meaning": "... ile Ağaçlar",
            "phraseTr": "<u>... ile Ağaçlar</u>",
            "type": "isim (çoğul)"
          },
          {
            "id": "p10_pr6_w16",
            "ar": "العَالِيَةِ",
            "root": "علو",
            "meaning": "Yüksek",
            "phraseTr": "<u>Yüksek</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr6_w17",
            "ar": "وَالضَّبَابِ",
            "root": "ضَبَّ",
            "meaning": "Ve Sis",
            "phraseTr": "<u>Ve Sis</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr6_w18",
            "ar": "الأَبْيَضِ.",
            "root": "بيض",
            "meaning": "Beyaz",
            "phraseTr": "<u>Beyaz</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr6_w19",
            "ar": "هُنَا",
            "root": "هنا",
            "meaning": "burada, buraya",
            "phraseTr": "<u>burada, buraya</u>",
            "type": "mekan zarfı"
          },
          {
            "id": "p10_pr6_w20",
            "ar": "سَيَبْدَأُ",
            "root": "بدو",
            "meaning": "Başlayacak",
            "phraseTr": "<u>Başlayacak</u>",
            "type": "istikbal fiili"
          },
          {
            "id": "p10_pr6_w21",
            "ar": "الاخْتِبَارُ",
            "root": "خبر",
            "meaning": "Sınav",
            "phraseTr": "ikinci <u>sınav</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr6_w22",
            "ar": "الثَّانِي،",
            "root": "ثني",
            "meaning": "ikinci",
            "phraseTr": "<u>ikinci</u> sınav",
            "type": "sıra sayısı"
          },
          {
            "id": "p10_pr6_w23",
            "ar": "وَسَتَبْدَأُ",
            "root": "بَدَأَ",
            "meaning": "Ve Başlayacak",
            "phraseTr": "<u>Ve Başlayacak</u>",
            "type": "fiil"
          },
          {
            "id": "p10_pr6_w24",
            "ar": "مُغَامَرَةُ",
            "root": "غَمَرَ",
            "meaning": "Macera",
            "phraseTr": "Rami'nin <u>macerası</u>",
            "type": "isim"
          },
          {
            "id": "p10_pr6_w25",
            "ar": "رَامِي",
            "root": "رَامِي",
            "meaning": "Rami (baş kahraman)",
            "phraseTr": "<u>Rami'nin</u> macerası",
            "type": "özel isim"
          },
          {
            "id": "p10_pr6_w26",
            "ar": "وَزَيْد",
            "root": "زَيْد",
            "meaning": "Ve Zeyd (arkadaşı)",
            "phraseTr": "Rami ve <u>Zeyd'in</u> macerası",
            "type": "özel isim"
          },
          {
            "id": "p10_pr6_w27",
            "ar": "الكَبِيرَةُ",
            "root": "كبر",
            "meaning": "Büyük",
            "phraseTr": "<u>Büyük</u>",
            "type": "sıfat"
          },
          {
            "id": "p10_pr6_w28",
            "ar": "مَعاً.",
            "root": "معع",
            "meaning": "birlikte, beraber",
            "phraseTr": "<u>birlikte, beraber</u>",
            "type": "zarf"
          }
        ]
      }
    ]
  }
];
