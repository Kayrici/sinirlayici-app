/**
 * ARAPÇA EMSİLE VE ÇEKİM MERKEZİ (Android App Assets)
 * ----------------------------------------------------
 * - 24 Sîga Oyunu (Emsile-i Muhtelife)
 * - Zamirlere Göre Çekimler (24 Sîganın her biri için 14 Zamir Çekimi)
 * - Kelime Bilgisi Oyunu (Tekil / İkili / Çoğul)
 * - Asla okunuş yazılmaz!
 * - Çift Yönlü Test: Çekim ➔ Anlam/Çeviri veya Anlam/Çeviri ➔ Çekim
 * - Kelime Modunda Soru ve Şıklarda soldan sağa: Tekil / İkili / Çoğul
 */

// 1. 24 SÎGA LİSTESİ (Sîga Terimi + Türkçe Fiil Çevirisi + Ek Bilgisi)
const DEFAULT_EMSILE_24_WORDS = [
  { id: 1, word: "نَصَرَ", meaning: "Fiil-i mâzî", translation: "Yardım etti", extraHint: "-dı, -di" },
  { id: 2, word: "يَنْصُرُ", meaning: "Fiil-i müzâri'", translation: "Yardım ediyor / eder", extraHint: "-yor, -ar, -acak" },
  { id: 3, word: "نَصْرًا", meaning: "Mastar", translation: "Yardım etmek", extraHint: "-mak, -mek" },
  { id: 4, word: "نَاصِرٌ", meaning: "İsm-i fâil", translation: "Yardım eden", extraHint: "-an, -en, -ıcı" },
  { id: 5, word: "مَنْصُورٌ", meaning: "İsm-i mef'ûl", translation: "Yardım edilmiş", extraHint: "-ılan, -ilmiş" },
  { id: 6, word: "لَمْ يَنْصُرْ", meaning: "Cahd-ı mutlak", translation: "Yardım etmedi", extraHint: "-madı, -medi" },
  { id: 7, word: "لَمَّا يَنْصُرْ", meaning: "Cahd-ı müstağrak", translation: "Henüz yardım etmedi", extraHint: "henüz -madı" },
  { id: 8, word: "مَا يَنْصُرُ", meaning: "Nefy-i hâl", translation: "Şimdi yardım etmiyor", extraHint: "-mıyor, -miyor" },
  { id: 9, word: "لَا يَنْصُرُ", meaning: "Nefy-i istikbâl", translation: "Gelecekte yardım etmez", extraHint: "-mayacak, -maz, -mıyor" },
  { id: 10, word: "لَنْ يَنْصَرَ", meaning: "Te'kîd-i nefy-i istikbâl", translation: "Asla yardım etmeyecek", extraHint: "asla -mayacak" },
  { id: 11, word: "لِيَنْصُرْ", meaning: "Emr-i gâib", translation: "Yardım etsin", extraHint: "-sın, -sin" },
  { id: 12, word: "لَا يَنْصُرْ", meaning: "Nehy-i gâib", translation: "Yardım etmesin", extraHint: "-masın, -mesin" },
  { id: 13, word: "أُنْصُرْ", meaning: "Emr-i hâzır", translation: "Yardım et", extraHint: "- (sen yap)" },
  { id: 14, word: "لَا تَنْصُرْ", meaning: "Nehy-i hâzır", translation: "Yardım etme", extraHint: "-ma, -me" },
  { id: 15, word: "مَنْصَرٌ", meaning: "İsm-i zaman, ism-i mekân, masdar-ı mîmî", translation: "Yardım edecek zaman / mekân", extraHint: "Zaman / Mekân / Mastar" },
  { id: 16, word: "مِنْصَرٌ", meaning: "İsm-i âlet", translation: "Yardım edecek alet", extraHint: "Alet ismi" },
  { id: 17, word: "نَصْرَةً", meaning: "Masdar-ı binâ-i merre", translation: "Bir kere yardım etmek", extraHint: "Bir kere yapma" },
  { id: 18, word: "نِصْرَةً", meaning: "Masdar-ı binâ-i nev'", translation: "Bir çeşit yardım etmek", extraHint: "Bir tarz yapma" },
  { id: 19, word: "نُصَيْرٌ", meaning: "İsm-i tasgîr", translation: "Azıcık yardım etmek", extraHint: "Küçültme (-cık)" },
  { id: 20, word: "نَصْرِيٌّ", meaning: "İsm-i mensûb", translation: "Yardım etmeye mensup", extraHint: "Aitlik (-li, -sel)" },
  { id: 21, word: "نَصَّارٌ", meaning: "Mübalağalı ism-i fâil", translation: "Çok yardım edici", extraHint: "Çok yapan" },
  { id: 22, word: "أَنْصَرُ", meaning: "İsm-i tafdîl", translation: "Daha çok yardım edici", extraHint: "En / Daha çok" },
  { id: 23, word: "مَا أَنْصَرَهُ", meaning: "Fiil-i taaccüb-i evvel", translation: "Ne acayip yardım etti!", extraHint: "Ne acayip ...!" },
  { id: 24, word: "أَنْصِرْ بِهِ", meaning: "Fiil-i taaccüb-i sânî", translation: "Ne güzel yardım etti!", extraHint: "Ne güzel / hoş ...!" }
];

let EMSILE_24_WORDS = JSON.parse(JSON.stringify(DEFAULT_EMSILE_24_WORDS));

// 14 ŞAHIS ZAMİRİ
const PRONOUN_MEANINGS = [
  "O (erkek)", "O ikisi (erkek)", "Onlar (erkek)",
  "O (kadın)", "O ikisi (kadın)", "Onlar (kadın)",
  "Sen (erkek)", "Siz ikiniz (erkek)", "Siz (erkek)",
  "Sen (kadın)", "Siz ikiniz (kadın)", "Siz (kadın)",
  "Ben", "Biz"
];

// 24 SÎGA İÇİN 14 ŞAHIS ÇEKİMİ
const SIGA_CONJUGATIONS = {
  1: ["نَصَرَ", "نَصَرَا", "نَصَرُوا", "نَصَرَتْ", "نَصَرَتَا", "نَصَرْنَ", "نَصَرْتَ", "نَصَرْتُمَا", "نَصَرْتُمْ", "نَصَرْتِ", "نَصَرْتُمَا", "نَصَرْتُنَّ", "نَصَرْتُ", "نَصَرْنَا"],
  2: ["يَنْصُرُ", "يَنْصُرَانِ", "يَنْصُرُونَ", "تَنْصُرُ", "تَنْصُرَانِ", "يَنْصُرْنَ", "تَنْصُرُ", "تَنْصُرَانِ", "تَنْصُرُونَ", "تَنْصُرِينَ", "تَنْصُرَانِ", "تَنْصُرْنَ", "أَنْصُرُ", "نَنْصُرُ"],
  3: ["نَصْرًا", "نَصْرَيْنِ", "نَصَرَاتٍ", "نَصْرًا", "نَصْرَيْنِ", "نَصَرَاتٍ", "نَصْرًا", "نَصْرَيْنِ", "نَصَرَاتٍ", "نَصْرًا", "نَصْرَيْنِ", "نَصَرَاتٍ", "نَصْرًا", "نَصْرًا"],
  4: ["نَاصِرٌ", "نَاصِرَانِ", "نَاصِرُونَ", "نَاصِرَةٌ", "نَاصِرَتَانِ", "نَاصِرَاتٌ", "نَاصِرٌ", "نَاصِرَانِ", "نَاصِرُونَ", "نَاصِرَةٌ", "نَاصِرَتَانِ", "نَاصِرَاتٌ", "نَاصِرٌ", "نَاصِرُونَ"],
  5: ["مَنْصُورٌ", "مَنْصُورَانِ", "مَنْصُورُونَ", "مَنْصُورَةٌ", "مَنْصُورَتَانِ", "مَنْصُورَاتٌ", "مَنْصُورٌ", "مَنْصُورَانِ", "مَنْصُورُونَ", "مَنْصُورَةٌ", "مَنْصُورَتَانِ", "مَنْصُورَاتٌ", "مَنْصُورٌ", "مَنْصُورُونَ"],
  6: ["لَمْ يَنْصُرْ", "لَمْ يَنْصُرَا", "لَمْ يَنْصُرُوا", "لَمْ تَنْصُرْ", "لَمْ تَنْصُرَا", "لَمْ يَنْصُرْنَ", "لَمْ تَنْصُرْ", "لَمْ تَنْصُرَا", "لَمْ تَنْصُرُوا", "لَمْ تَنْصُرِي", "لَمْ تَنْصُرَا", "لَمْ تَنْصُرْنَ", "لَمْ أَنْصُرْ", "لَمْ نَنْصُرْ"],
  7: ["لَمَّا يَنْصُرْ", "لَمَّا يَنْصُرَا", "لَمَّا يَنْصُرُوا", "لَمَّا تَنْصُرْ", "لَمَّا تَنْصُرَا", "لَمَّا يَنْصُرْنَ", "لَمَّا تَنْصُرْ", "لَمَّا تَنْصُرَا", "لَمَّا تَنْصُرُوا", "لَمَّا تَنْصُرِي", "لَمَّا تَنْصُرَا", "لَمَّا تَنْصُرْنَ", "لَمَّا أَنْصُرْ", "لَمَّا نَنْصُرْ"],
  8: ["مَا يَنْصُرُ", "مَا يَنْصُرَانِ", "مَا يَنْصُرُونَ", "مَا تَنْصُرُ", "مَا تَنْصُرَانِ", "مَا يَنْصُرْنَ", "مَا تَنْصُرُ", "مَا تَنْصُرَانِ", "مَا تَنْصُرُونَ", "مَا تَنْصُرِينَ", "مَا تَنْصُرَانِ", "مَا تَنْصُرْنَ", "مَا أَنْصُرُ", "مَا نَنْصُرُ"],
  9: ["لَا يَنْصُرُ", "لَا يَنْصُرَانِ", "لَا يَنْصُرُونَ", "لَا تَنْصُرُ", "لَا تَنْصُرَانِ", "لَا يَنْصُرْنَ", "لَا تَنْصُرُ", "لَا تَنْصُرَانِ", "لَا تَنْصُرُونَ", "لَا تَنْصُرِينَ", "لَا تَنْصُرَانِ", "لَا تَنْصُرْنَ", "لَا أَنْصُرُ", "لَا نَنْصُرُ"],
  10: ["لَنْ يَنْصَرَ", "لَنْ يَنْصَرَا", "لَنْ يَنْصَرُوا", "لَنْ تَنْصَرَ", "لَنْ تَنْصَرَا", "لَنْ يَنْصَرْنَ", "لَنْ تَنْصَرَ", "لَنْ تَنْصَرَا", "لَنْ تَنْصَرُوا", "لَنْ تَنْصَرِي", "لَنْ تَنْصَرَا", "لَنْ تَنْصَرْنَ", "لَنْ أَنْصَرَ", "لَنْ نَنْصَرَ"],
  11: ["لِيَنْصُرْ", "لِيَنْصُرَا", "لِيَنْصُرُوا", "لِتَنْصُرْ", "لِتَنْصُرَا", "لِيَنْصُرْنَ", "لِيَنْصُرْ", "لِيَنْصُرَا", "لِيَنْصُرُوا", "لِتَنْصُرِي", "لِتَنْصُرَا", "لِيَنْصُرْنَ", "لِأَنْصُرْ", "لِنَنْصُرْ"],
  12: ["لَا يَنْصُرْ", "لَا يَنْصُرَا", "لَا يَنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرَا", "لَا يَنْصُرْنَ", "لَا يَنْصُرْ", "لَا يَنْصُرَا", "لَا يَنْصُرُوا", "لَا تَنْصُرِي", "لَا تَنْصُرَا", "لَا يَنْصُرْنَ", "لَا أَنْصُرْ", "لَا نَنْصُرْ"],
  13: ["لِيَنْصُرْ", "لِيَنْصُرَا", "لِيَنْصُرُوا", "لِتَنْصُرْ", "لِتَنْصُرَا", "لِيَنْصُرْنَ", "أُنْصُرْ", "أُنْصُرَا", "أُنْصُرُوا", "أُنْصُرِي", "أُنْصُرَا", "أُنْصُرْنَ", "لِأَنْصُرْ", "لِنَنْصُرْ"],
  14: ["لَا يَنْصُرْ", "لَا يَنْصُرَا", "لَا يَنْصُرُوا", "لَا تَنْصُرْ", "لَا تَنْصُرَا", "لَا يَنْصُرْنَ", "لَا تَنْصُرْ", "لَا تَنْصُرَا", "لَا تَنْصُرُوا", "لَا تَنْصُرِي", "لَا تَنْصُرَا", "لَا تَنْصُرْنَ", "لَا أَنْصُرْ", "لَا نَنْصُرْ"],
  15: ["مَنْصَرٌ", "مَنْصَرَانِ", "مَنَاصِرُ", "مَنْصَرَةٌ", "مَنْصَرَتَانِ", "مَنَاصِرُ", "مَنْصَرٌ", "مَنْصَرَانِ", "مَنَاصِرُ", "مَنْصَرَةٌ", "مَنْصَرَتَانِ", "مَنَاصِرُ", "مَنْصَرٌ", "مَنَاصِرُ"],
  16: ["مِنْصَرٌ", "مِنْصَرَانِ", "مَنَاصِرُ", "مِنْصَرَةٌ", "مِنْصَرَتَانِ", "مَنَاصِرُ", "مِنْصَرٌ", "مِنْصَرَانِ", "مَنَاصِرُ", "مِنْصَرَةٌ", "مِنْصَرَتَانِ", "مَنَاصِرُ", "مِنْصَرٌ", "مَنَاصِرُ"],
  17: ["نَصْرَةً", "نَصْرَتَيْنِ", "نَصَرَاتٍ", "نَصْرَةً", "نَصْرَتَيْنِ", "نَصَرَاتٍ", "نَصْرَةً", "نَصْرَتَيْنِ", "نَصَرَاتٍ", "نَصْرَةً", "نَصْرَتَيْنِ", "نَصَرَاتٍ", "نَصْرَةً", "نَصْرَةً"],
  18: ["نِصْرَةً", "نِصْرَتَيْنِ", "نِصَرَاتٍ", "نِصْرَةً", "نِصْرَتَيْنِ", "نِصَرَاتٍ", "نِصْرَةً", "نِصْرَتَيْنِ", "نِصَرَاتٍ", "نِصْرَةً", "نِصْرَتَيْنِ", "نِصَرَاتٍ", "نِصْرَةً", "نِصْرَةً"],
  19: ["نُصَيْرٌ", "نُصَيْرَانِ", "نُصَيْرُونَ", "نُصَيْرَةٌ", "نُصَيْرَتَانِ", "نُصَيْرَاتٌ", "نُصَيْرٌ", "نُصَيْرَانِ", "نُصَيْرُونَ", "نُصَيْرَةٌ", "نُصَيْرَتَانِ", "نُصَيْرَاتٌ", "نُصَيْرٌ", "نُصَيْرُونَ"],
  20: ["نَصْرِيٌّ", "نَصْرِيَّانِ", "نَصْرِيُّونَ", "نَصْرِيَّةٌ", "نَصْرِيَّتَانِ", "نَصْرِيَّاتٌ", "نَصْرِيٌّ", "نَصْرِيَّانِ", "نَصْرِيُّونَ", "نَصْرِيَّةٌ", "نَصْرِيَّتَانِ", "نَصْرِيَّاتٌ", "نَصْرِيٌّ", "نَصْرِيُّونَ"],
  21: ["نَصَّارٌ", "نَصَّارَانِ", "نَصَّارُونَ", "نَصَّارَةٌ", "نَصَّارَتَانِ", "نَصَّارَاتٌ", "نَصَّارٌ", "نَصَّارَانِ", "نَصَّارُونَ", "نَصَّارَةٌ", "نَصَّارَتَانِ", "نَصَّارَاتٌ", "نَصَّارٌ", "نَصَّارُونَ"],
  22: ["أَنْصَرُ", "أَنْصَرَانِ", "أَنْصَرُونَ", "نُصْرَى", "نُصْرَيَانِ", "نُصْرَيَاتٌ", "أَنْصَرُ", "أَنْصَرَانِ", "أَنْصَرُونَ", "نُصْرَى", "نُصْرَيَانِ", "نُصْرَيَاتٌ", "أَنْصَرُ", "أَنْصَرُونَ"],
  23: [
    "مَا أَنْصَرَهُ", "مَا أَنْصَرَهُمَا", "مَا أَنْصَرَهُمْ",
    "مَا أَنْصَرَهَا", "مَا أَنْصَرَهُمَا", "مَا أَنْصَرَهُنَّ",
    "مَا أَنْصَرَكَ", "مَا أَنْصَرَكُمَا", "مَا أَنْصَرَكُمْ",
    "مَا أَنْصَرِكِ", "مَا أَنْصَرَكُمَا", "مَا أَنْصَرَكُنَّ",
    "مَا أَنْصَرَنِي", "مَا أَنْصَرَنَا"
  ],
  24: ["أَنْصِرْ بِهِ", "أَنْصِرْ بِهِمَا", "أَنْصِرْ بِهِمْ", "أَنْصِرْ بِهَا", "أَنْصِرْ بِهِمَا", "أَنْصِرْ بِهِنَّ", "أَنْصِرْ بِكَ", "أَنْصِرْ بِكُمَا", "أَنْصِرْ بِكُمْ", "أَنْصِرْ بِكِ", "أَنْصِرْ بِكُمَا", "أَنْصِرْ بِكُنَّ", "أَنْصِرْ بِي", "أَنْصِرْ بِنَا"]
};

// YENİ KELİME LİSTESİ (TEKİL / İKİLİ / ÇOĞUL) - KULLANICI İSTEĞİ
const DEFAULT_VOCABULARY_WORDS = [
  { id: 1, singular: "رَبٌّ", dual: "رَبَّانِ", plural: "أَرْبَابٌ", meaning: "Rab: Bir şeyi kemâle erinceye kadar derece derece terbiye eden; mutlak mâlik, efendi, rızık veren ve varlığı yöneten (el-Müfredât / Fâtiha 1/2)" },
  { id: 2, singular: "آيَةٌ", dual: "آيَتَانِ", plural: "آيَاتٌ", meaning: "Âyet: Allah'ın varlık, birlik ve kudretine delalet eden apaçık delil, peygamber mucizesi, ibret ve Kur'an'ın her bir vahiy cümlesi (el-Müfredât / Bakara 2/252)" },
  { id: 3, singular: "كِتَابٌ", dual: "كِتَابَانِ", plural: "كُتُبٌ", meaning: "Kitap: Yazılı vahiy, Kur'an-ı Kerim, kesin ilahî hüküm, farz kılınan emir ve amel defteri (el-Müfredât / Nisâ 4/103)" },
  { id: 4, singular: "رَسُولٌ", dual: "رَسُولَانِ", plural: "رُسُلٌ", meaning: "Resûl: Kendisine kitap ve şeriat verilerek insanları hak dine davet ve tebliğle vazifelendirilen ilahî elçi, peygamber (el-Müfredât / Âl-i İmrân 3/144)" },
  { id: 5, singular: "نَبِيٌّ", dual: "نَبِيَّانِ", plural: "أَنْبِيَاءُ / نَبِيُّونَ", meaning: "Nebî: Allah'tan vahiy ve gayb haberi alan, şanı ve manevî mertebesi yüce olan peygamber (el-Müfredât / Ahzâb 33/40)" },
  { id: 6, singular: "يَوْمٌ", dual: "يَوْمَانِ", plural: "أَيَّامٌ", meaning: "Yevm: Gün, vakit, zaman; ayetlerde özellikle hesap, diriliş ve ceza günü olan Kıyamet Günü (el-Müfredât / Fâtiha 1/4)" },
  { id: 7, singular: "سَمَاءٌ", dual: "سَمَاوَانِ", plural: "سَمَاوَاتٌ", meaning: "Semâ: Yeryüzünü kuşatan yüksek gök, semavat; yağmur, rahmet ve vahyin indiği ulvî alem (el-Müfredât / Bakara 2/22)" },
  { id: 8, singular: "أَرْضٌ", dual: "أَرْضَانِ", plural: "أَرَاضٍ / أَرْضُونَ", meaning: "Arz: İnsan ve canlıların üzerinde yaşadığı yeryüzü, zemin ve nimetlerle donatılmış yer küre (el-Müfredât / Bakara 2/29)" },
  { id: 9, singular: "نَفْسٌ", dual: "نَفْسَانِ", plural: "أَنْفُسٌ / نُفُوسٌ", meaning: "Nefis: İnsanın bizzat kendisi, zâtı, canı, ruhu; şehevî heveslerin ve manevî tezkiyenin mahalli (el-Müfredât / Şems 91/7-8)" },
  { id: 10, singular: "قَوْمٌ", dual: "قَوْمَانِ", plural: "أَقْوَامٌ", meaning: "Kavim: Bir gaye ve bağ etrafında kenetlenen insan topluluğu, bir peygambere muhatap olan halk ve millet (el-Müfredât / Yûnus 10/75)" },
  { id: 11, singular: "عَبْدٌ", dual: "عَبْدَانِ", plural: "عِبَادٌ / عَبِيدٌ", meaning: "Kul: Allah'a mutlak teslimiyet, sevgi ve itaatle boyun eğip ibadet eden insan; köle (el-Müfredât / İsrâ 17/1)" },
  { id: 12, singular: "قَلْبٌ", dual: "قَلْبَانِ", plural: "قُلُوبٌ", meaning: "Kalp: İmanın, aklın, basiretin, niyetin ve ilahî feyzin mahalli olan manevî merkez, gönül (el-Müfredât / Hac 22/46)" },
  { id: 13, singular: "عَذَابٌ", dual: "عَذَابَانِ", plural: "أَعْذِبَةٌ", meaning: "Azap: İnsana elem ve ızdırap veren şiddetli ceza; günahkârların ahirette çarptırılacağı elem verici karşılık (el-Müfredât / Bakara 2/7)" },
  { id: 14, singular: "جَنَّةٌ", dual: "جَنَّتَانِ", plural: "جَنَّاتٌ", meaning: "Cennet: Takva sahibi müminler için ahirette hazırlanan ebedî nimet, huzur, cemalullah ve saadet yurdu; bahçe (el-Müfredât / Tevbe 9/72)" },
  { id: 15, singular: "نَارٌ", dual: "نَارَانِ", plural: "نِيرَانٌ", meaning: "Nâr: Ateş; ayetlerde inkârcıların ve zalimlerin içine atılacağı yakıcı Cehennem ateşi ve azabı (el-Müfredât / Bakara 2/24)" },
  { id: 16, singular: "حَقٌّ", dual: "حَقَّانِ", plural: "حُقُوقٌ", meaning: "Hak: Şüphe götürmez mutlak gerçek, adalet, sabit doğru; Allah Teâlâ'nın yüce ismi ve Kur'an'ın bildirdiği hakikat (el-Müfredât / Yûnus 10/32)" },
  { id: 17, singular: "سَبِيلٌ", dual: "سَبِيلَانِ", plural: "سُبُلٌ", meaning: "Sebîl: Yol, gidişat; ayetlerde özellikle Allah'ın rızasına, cihadına ve hak dinine ulaştıran dosdoğru yol (el-Müfredât / Bakara 2/154)" },
  { id: 18, singular: "أَمْرٌ", dual: "أَمْرَانِ", plural: "أُمُورٌ / أَوَامِرُ", meaning: "Emir: İlahî buyruk, ferman, hüküm; aynı zamanda iş, durum, kaza ve kader tecellisi (el-Müfredât / Şûrâ 42/53)" },
  { id: 19, singular: "شَيْءٌ", dual: "شَيْئَانِ", plural: "أَشْيَاءُ", meaning: "Şey: Varlık, yaratılmış olan her bir nesne, mevcut olan ve bilinen her şey (el-Müfredât / Zümer 39/62)" },
  { id: 20, singular: "مَالٌ", dual: "مَالَانِ", plural: "أَمْوَالٌ", meaning: "Mal: İnsanın sahip olduğu dünya serveti, mülk, meta; imtihan ve infak vesilesi (el-Müfredât / Enfâl 8/28)" },
  { id: 21, singular: "وَلَدٌ", dual: "وَلَدَانِ", plural: "أَوْلَادٌ / وِلْدَانٌ", meaning: "Veled: Çocuk, evlat; insanın neslini devam ettiren ve dünya hayatının süsü olan zürriyet (el-Müfredât / Kehf 18/46)" },
  { id: 22, singular: "عِلْمٌ", dual: "عِلْمَانِ", plural: "عُلُومٌ", meaning: "İlim: Bir şeyin hakikatini kesin delille bilmek; vahiy bilgisi, hak ve hikmet marifeti (el-Müfredât / İsrâ 17/85)" },
  { id: 23, singular: "عَمَلٌ", dual: "عَمَلَانِ", plural: "أَعْمَالٌ", meaning: "Amel: İrade ve niyetle yapılan eylem, iş, fiil; ahirette karşılığı verilecek hayır veya şer ameller (el-Müfredât / Kehf 18/110)" },
  { id: 24, singular: "أَهْلٌ", dual: "أَهْلَانِ", plural: "أَهْلُونَ / أَهَالٍ", meaning: "Ehil: Aile, ev halkı, soydaşlar; aynı zamanda bir kitaba ve inanca mensup olan zümre (Ehl-i Beyt, Ehl-i Kitap) (el-Müfredât / Ahzâb 33/33)" },
  { id: 25, singular: "بَيْتٌ", dual: "بَيْتَانِ", plural: "بُيُوتٌ / أَبْيَاتٌ", meaning: "Beyt: Ev, mesken, barınak; ayetlerde özellikle yeryüzünün ilk ve en kutsal mabedi olan Kâbe-i Muazzama (el-Müfredât / Âl-i İmrân 3/96)" },
  { id: 26, singular: "بَابٌ", dual: "بَابَانِ", plural: "أَبْوَابٌ / بِيبَانٌ", meaning: "Kapı: Giriş ve çıkış yeri; ayetlerde semanın, Cennetin, Cehennemin ve ilahî rahmetin açılan kapıları (el-Müfredât / Zümer 39/73)" },
  { id: 27, singular: "مَلَكٌ", dual: "مَلَكَانِ", plural: "مَلَائِكَةٌ", meaning: "Melek: Allah Teâlâ'nın nurdan yarattığı, emirlere asla isyan etmeyen, ilahî vazifeleri icra eden ruhanî varlık (el-Müfredât / Tahrîm 66/6)" },
  { id: 28, singular: "إِنْسَانٌ", dual: "إِنْسَانَانِ", plural: "نَاسٌ / أَنَاسِيُّ", meaning: "İnsan: Akıl, vicdan ve emaneti yüklenen, yaratılışı ahsen-i takvîm üzere olan beşer (el-Müfredât / Tîn 95/4)" },
  { id: 29, singular: "دِينٌ", dual: "دِينَانِ", plural: "أَدْيَانٌ", meaning: "Din: İtaat, ceza ve mükâfat nizamı, hesap; Allah'ın peygamberleri vasıtasıyla bildirdiği hak şeriat ve inanç yolu (el-Müfredât / Âl-i İmrân 3/19)" },
  { id: 30, singular: "قَوْلٌ", dual: "قَوْلَانِ", plural: "أَقْوَالٌ / أَقَاوِيلُ", meaning: "Söz: Kelam, lafız, ifade; ayetlerde tevhid kelimesi, hakkı beyan eden söz veya peygamberlere vahyedilen ağır hitap (el-Müfredât / Müzzemmil 73/5)" },
  { id: 31, singular: "يَدٌ", dual: "يَدَانِ", plural: "أَيْدٍ / أَيَادٍ", meaning: "El: Organ olan el; ayetlerde güç, kudret, nimet, tasarruf ve ilahî inayet (el-Müfredât / Fetih 48/10)" },
  { id: 32, singular: "عَيْنٌ", dual: "عَيْنَانِ", plural: "أَعْيُنٌ / عُيُونٌ", meaning: "Göz / Pınar: Görme organı; yeryüzünden kaynayan su pınarı; ilahî gözetim ve hıfz (el-Müfredât / Tâhâ 20/39)" },
  { id: 33, singular: "أُذُنٌ", dual: "أُذُنَانِ", plural: "آذَانٌ", meaning: "Kulak: İşitme organı; ayetlerde vahyi ve hakkı dinleyip ibret alma vasıtası (el-Müfredât / Mâide 5/45)" },
  { id: 34, singular: "لِسَانٌ", dual: "لِسَانَانِ", plural: "أَلْسِنَةٌ", meaning: "Dil / Lisan: Konuşma organı, lisan, lehçe; güzel bir nam ile anılma (lisân-ı sıdk) ve hakikat tercümanı (el-Müfredât / Şuarâ 26/84)" },
  { id: 35, singular: "وَجْهٌ", dual: "وَجْهَانِ", plural: "وُجُوهٌ / أَوْجُهٌ", meaning: "Yüz / Vech: Çehre, taraf, istikamet; ayetlerde Allah'ın zâtı ve yüce rızası (el-Müfredât / Kasas 28/88)" },
  { id: 36, singular: "رِجْلٌ", dual: "رِجْلَانِ", plural: "أَرْجُلٌ", meaning: "Ayak: Yürüme organı; hak yolda sebat etme veya günah mahalline gitme aleti (el-Müfredât / Yâsîn 36/65)" },
  { id: 37, singular: "صَدْرٌ", dual: "صَدْرَانِ", plural: "صُدُورٌ", meaning: "Göğüs / Sadr: Kalbin mahalli olan sine, bağır; imanın genişliği (inşirah) yahut vesvese ve kinin barındığı yer (el-Müfredât / İnşirâh 94/1)" },
  { id: 38, singular: "بَصَرٌ", dual: "بَصَرَانِ", plural: "أَبْصَارٌ", meaning: "Basar: Göz nuru, görme hassası; kalbî basiret ve ibret nazarıyla bakış (el-Müfredât / Mülk 67/3-4)" },
  { id: 39, singular: "سَمْعٌ", dual: "سَمْعَانِ", plural: "أَسْمَاعٌ", meaning: "İşitme / Sem': Kulak vasıtasıyla sesleri ve ilahî hitabı duyup kabul etme yetisi (el-Müfredât / Bakara 2/7)" },
  { id: 40, singular: "رَأْسٌ", dual: "رَأْسَانِ", plural: "رُؤُوسٌ", meaning: "Baş / Re's: Bedenin tepe noktası, kafa; ayetlerde abdestte mesh edilen uzuv veya bir topluluğun başı (el-Müfredât / Mâide 5/6)" },
  { id: 41, singular: "شَمْسٌ", dual: "شَمْسَانِ", plural: "شُمُوسٌ", meaning: "Güneş: Âlemi aydınlatıp ısıtan kandil; ilahî kudret ve dakik nizamın apaçık delili (el-Müfredât / Şems 91/1)" },
  { id: 42, singular: "قَمَرٌ", dual: "قَمَرَانِ", plural: "أَقْمَارٌ", meaning: "Ay / Kamer: Gecenin aydınlığı, menzillere göre hilalden dolunaya dönen takvim ve vakit ölçüsü (el-Müfredât / Yâsîn 36/39)" },
  { id: 43, singular: "نَجْمٌ", dual: "نَجْمَانِ", plural: "نُجُومٌ / أَنْجُمٌ", meaning: "Yıldız: Semayı süsleyen ışıklı gök cismi; karanlıklarda yol bulma rehberi (el-Müfredât / Necm 53/1)" },
  { id: 44, singular: "لَيْلٌ", dual: "لَيْلَانِ", plural: "لَيَالٍ", meaning: "Gece: Karanlığın yeryüzünü bürüdüğü dinlenme, tefekkür, ibadet ve sükûn vakti (el-Müfredât / Leyl 92/1)" },
  { id: 45, singular: "نَهَارٌ", dual: "نَهَارَانِ", plural: "أَنْهُرٌ / نُهُرٌ", meaning: "Gündüz: Güneş ışığıyla aydınlanan, maişet ve çalışma vakti (el-Müfredât / İsrâ 17/12)" },
  { id: 46, singular: "نُورٌ", dual: "نُورَانِ", plural: "أَنْوَارٌ", meaning: "Nur: Karanlıkları dağıtan aydınlık; imanın, vahyin ve hidayetin kalbi aydınlatan ilahî feyzi (el-Müfredât / Nûr 24/35)" },
  { id: 47, singular: "ظُلْمَةٌ", dual: "ظُلْمَتَانِ", plural: "ظُلُمَاتٌ", meaning: "Karanlık: Maddî karanlık; ayetlerde özellikle şirk, inkâr ve cehaletin kalbi saran manevî zifiri (el-Müfredât / Bakara 2/17)" },
  { id: 48, singular: "مَاءٌ", dual: "مَاءَانِ", plural: "مِيَاهٌ / أَمْوَاهٌ", meaning: "Su: Her canlı varlığın hayat bulduğu aziz nimet; gökten inen temizleyici rahmet (el-Müfredât / Enbiyâ 21/30)" },
  { id: 49, singular: "رِيحٌ", dual: "رِيحَانِ", plural: "رِيَاحٌ / أَرْيَاحٌ", meaning: "Rüzgar: Rahmet bulutlarını sevk eden müjdeci yel; yahut inkârcılara gönderilen helak edici kasırga (el-Müfredât / Rûm 30/46)" },
  { id: 50, singular: "بَحْرٌ", dual: "بَحْرَانِ", plural: "بِحَارٌ / أَبْحُرٌ", meaning: "Deniz: Uçsuz bucaksız engin su; üzerinde gemilerin akıp gittiği, taze rızık ve inciler barındıran azametli ayet (el-Müfredât / Nahl 16/14)" },
  { id: 51, singular: "جَبَلٌ", dual: "جَبَلَانِ", plural: "جِبَالٌ", meaning: "Dağ: Yeryüzünü sarsıntıdan koruyan kazıklar hükmünde yüce ve sarp kaya kütlesi (el-Müfredât / Nebe 78/7)" },
  { id: 52, singular: "نَهْرٌ", dual: "نَهْرَانِ", plural: "أَنْهَارٌ", meaning: "Nehir: Yatağında çağlayarak akan ırmak; Cennette müminlerin köşkleri altından akan kevser, süt, bal ve su nehirleri (el-Müfredât / Bakara 2/25)" },
  { id: 53, singular: "شَجَرَةٌ", dual: "شَجَرَتَانِ", plural: "أَشْجَارٌ / شَجَرٌ", meaning: "Ağaç: Kökü yerde dalları gökte bitki; ayetlerde imanın kökleşmesini temsil eden mübarek misal (el-Müfredât / İbrâhîm 14/24)" },
  { id: 54, singular: "ثَمَرَةٌ", dual: "ثَمَرَتَانِ", plural: "ثَمَرَاتٌ / ثَمَرٌ", meaning: "Meyve / Semere: Ağaç ve bitkilerin verdiği ürün; amellerin ahiretteki tatlı hasılatı ve ilahî rızık (el-Müfredât / Bakara 2/126)" },
  { id: 55, singular: "طَعَامٌ", dual: "طَعَامَانِ", plural: "أَطْعِمَةٌ", meaning: "Yiyecek / Taâm: İnsanın beslendiği gıda ve rızık; yoksulu ve yetimi doyurma vecibesi (el-Müfredât / Mâûn 107/3)" },
  { id: 56, singular: "مَوْتٌ", dual: "مَوْتَانِ", plural: "أَمْوَاتٌ", meaning: "Ölüm: Ruhun bedenden ayrılmasıyla dünya imtihanının sona ermesi ve ahirete intikal (el-Müfredât / Âl-i İmrân 3/185)" },
  { id: 57, singular: "حَيَاةٌ", dual: "حَيَاتَانِ", plural: "حَيَوَاتٌ", meaning: "Hayat: Canlılık, dirilik; ayetlerde asıl kalıcı ve hakiki varoluş olan ahiret yurdu (Dârü'l-Hayavân) (el-Müfredât / Ankebût 29/64)" },
  { id: 58, singular: "دُنْيَا", dual: "دُنْيَيَانِ", plural: "دُنًى", meaning: "Dünya: Ahirete nispetle çok yakın, fani, geçici ve bir imtihan sahnesi olan ilk hayat (el-Müfredât / Hadîd 57/20)" },
  { id: 59, singular: "آخِرَةٌ", dual: "آخِرَتَانِ", plural: "آخِرَاتٌ", meaning: "Ahiret: Dünyadan sonra gelecek olan ebedî, hakiki ve zevalsiz hesap yurdu (el-Müfredât / Duhâ 93/4)" },
  { id: 60, singular: "سَاعَةٌ", dual: "سَاعَتَانِ", plural: "سَاعَاتٌ", meaning: "Kıyamet Vakti / Saat: Vakit dilimi; ayetlerde kâinat nizamının bir anda altüst olacağı dehşetli Kıyamet anı (el-Müfredât / Kamer 54/1)" },
  { id: 61, singular: "أَجْرٌ", dual: "أَجْرَانِ", plural: "أُجُورٌ", meaning: "Ecir / Mükâfat: İman ve salih amellere Allah katında lütfedilen tükenmez hayır ve sevap (el-Müfredât / Fussilet 41/8)" },
  { id: 62, singular: "فَضْلٌ", dual: "فَضْلَانِ", plural: "فُضُولٌ / أَفْضَالٌ", meaning: "Lütuf / Fazl: Allah'ın kullarına sırf cömertliğiyle bahşettiği bol ihsan, üstünlük ve bereket (el-Müfredât / Bakara 2/105)" },
  { id: 63, singular: "رَحْمَةٌ", dual: "رَحْمَتَانِ", plural: "رَحَمَاتٌ", meaning: "Rahmet: Allah'ın her şeyi kuşatan sınırsız merhameti, şefkati, bağışlaması ve lütfu (el-Müfredât / A'râf 7/156)" },
  { id: 64, singular: "نِعْمَةٌ", dual: "نِعْمَتَانِ", plural: "نِعَمٌ / أَنْعُمٌ", meaning: "Nimet: Saymakla bitirilemeyen maddî ve manevî ilahî bağış, sıhhat, hidayet ve ihsan (el-Müfredât / İbrâhîm 14/34)" },
  { id: 65, singular: "حَسَنَةٌ", dual: "حَسَنَتَانِ", plural: "حَسَنَاتٌ", meaning: "Hasene: Allah rızasına uygun hayır amel, güzellik, dünyada afiyet ve ahirette Cennet sevabı (el-Müfredât / Bakara 2/201)" },
  { id: 66, singular: "سَيِّئَةٌ", dual: "سَيِّئَتَانِ", plural: "سَيِّئَاتٌ", meaning: "Seyyie: Şeriatın kınadığı günah, çirkin fiil, fenalık ve bunların ahiretteki acı cezası (el-Müfredât / Nisâ 4/79)" },
  { id: 67, singular: "ذَنْبٌ", dual: "ذَنْبَانِ", plural: "ذُنُوبٌ", meaning: "Günah / Zenb: Kişinin peşini bırakmayan vebal, ilahî sınırlara aykırı düşen suç ve isyan (el-Müfredât / Şûrâ 42/37)" },
  { id: 68, singular: "خَطِيئَةٌ", dual: "خَطِيئَتَانِ", plural: "خَطَايَا / خَطِيئَاتٌ", meaning: "Hatîe: İnsanı kuşatan büyük günah, kasten veya gafletle işlenen ağır cürüm (el-Müfredât / Bakara 2/81)" },
  { id: 69, singular: "ظُلْمٌ", dual: "ظُلْمَانِ", plural: "مَظَالِمُ", meaning: "Zulüm: Bir şeyi yerinden saptırıp haddi aşmak, haksızlık; en büyük zulüm ise Allah'a şirk koşmaktır (el-Müfredât / Lokmân 31/13)" },
  { id: 70, singular: "إِثْمٌ", dual: "إِثْمَانِ", plural: "آثَامٌ", meaning: "İsm: İnsanı hayırdan geri bırakan, vicdanı rahatsız eden ve cezayı gerektiren ağır günah (el-Müfredât / Bakara 2/219)" },
  { id: 71, singular: "مُؤْمِنٌ", dual: "مُؤْمِنَانِ", plural: "مُؤْمِنُونَ / مُؤْمِنِينَ", meaning: "Mümin: Allah'a, meleklerine, kitaplarına ve ahirete ihlasla iman edip güvene eren samimi kul (el-Müfredât / Enfâl 8/2)" },
  { id: 72, singular: "كَافِرٌ", dual: "كَافِرَانِ", plural: "كَافِرُونَ / كُفَّارٌ", meaning: "Kâfir: Hakkı, tevhid delillerini ve nimetleri bile bile inkâr edip üzerini örten nankör (el-Müfredât / Bakara 2/6)" },
  { id: 73, singular: "مُنَافِقٌ", dual: "مُنَافِقَانِ", plural: "مُنَافِقُونَ / مُنَافِقِينَ", meaning: "Münafık: Dıştan inanmış görünüp içinde inkâr ve nifak besleyen, dinde sahtekâr ikiyüzlü kimse (el-Müfredât / Nisâ 4/145)" },
  { id: 74, singular: "مُشْرِكٌ", dual: "مُشْرِكَانِ", plural: "مُشْرِكُونَ / مُشْرِكِينَ", meaning: "Müşrik: İlahlıkta, yaratmada ve ibadette Allah'a putları veya başka şeyleri ortak koşan (el-Müfredât / Tevbe 9/28)" },
  { id: 75, singular: "ظَالِمٌ", dual: "ظَالِمَانِ", plural: "ظَالِمُونَ / ظَلَمَةٌ", meaning: "Zalim: İlahi sınırları çiğneyen, hakkı gasbeden ve inkârla kendi nefsine yazık eden kimse (el-Müfredât / Bakara 2/165)" },
  { id: 76, singular: "فَاسِقٌ", dual: "فَاسِقَانِ", plural: "فَاسِقُونَ / فُسَّاقٌ", meaning: "Fasık: Allah'a itaatten büsbütün çıkıp günahı aşikare işleyen, yoldan sapmış kimse (el-Müfredât / Secde 32/18)" },
  { id: 77, singular: "صَالِحٌ", dual: "صَالِحَانِ", plural: "صَالِحُونَ / صُلَحَاءُ", meaning: "Salih: İtikadı temiz, ameli Allah'ın rızasına uygun, iyilik ve ıslah üzere yaşayan dürüst kimse (el-Müfredât / Âl-i İmrân 3/114)" },
  { id: 78, singular: "صَادِقٌ", dual: "صَادِقَانِ", plural: "صَادِقُونَ / صُدَقَاءُ", meaning: "Sadık: Sözünde ve inancında dosdoğru olan, ahdine vefa gösteren dürüst ve sadakatli mümin (el-Müfredât / Ahzâb 33/23)" },
  { id: 79, singular: "صَابِرٌ", dual: "صَابِرَانِ", plural: "صَابِرُونَ", meaning: "Sabırlı / Sâbir: İbadette sebat eden, günahlara karşı direnen ve musibet anında metanetini koruyan kul (el-Müfredât / Bakara 2/155)" },
  { id: 80, singular: "شَاكِرٌ", dual: "شَاكِرَانِ", plural: "شَاكِرُونَ / شُكَّارٌ", meaning: "Şükreden / Şâkir: Verilen nimetlerin kadrini bilip Allah'a hamd ile itaat eden kadirşinas kul (el-Müfredât / Nahl 16/121)" },
  { id: 81, singular: "مُحْسِنٌ", dual: "مُحْسِنَانِ", plural: "مُحْسِنُونَ / مُحْسِنِينَ", meaning: "Muhsin: Allah'ı görür gibi ihlasla ibadet eden, işini mükemmel yapan ve insanlara iyilik saçan (el-Müfredât / Bakara 2/112)" },
  { id: 82, singular: "شَهِيدٌ", dual: "شَهِيدَانِ", plural: "شُهَدَاءُ", meaning: "Şehit / Şahit: Hakikate tanıklık eden şahit; Allah yolunda canını feda ederek şehadet mertebesine eren mümin (el-Müfredât / Âl-i İmrân 3/140)" },
  { id: 83, singular: "عَالِمٌ", dual: "عَالِمَانِ", plural: "عُلَمَاءُ", meaning: "Âlim: Hakikati kavrayan, ilmiyle amel eden ve Allah'tan hakkıyla haşyet duyan basiretli zat (el-Müfredât / Fâtır 35/28)" },
  { id: 84, singular: "عَدُوٌّ", dual: "عَدُوَّانِ", plural: "أَعْدَاءٌ", meaning: "Düşman: İnsanın helakini ve kötülüğünü isteyen açık hasım; ayetlerde özellikle apaçık düşman olan Şeytan (el-Müfredât / Bakara 2/168)" },
  { id: 85, singular: "وَلِيٌّ", dual: "وَلِيَّانِ", plural: "أَوْلِيَاءُ", meaning: "Veli / Dost: Koruyan, yardım eden, yakın dost; Allah'ın himayesine sığınan ve O'nun sevgisine mazhar olan takva ehli (el-Müfredât / Yûnus 10/62)" },
  { id: 86, singular: "نَصِيرٌ", dual: "نَصِيرَانِ", plural: "أَنْصَارٌ", meaning: "Nasîr: Zorluk ve düşmanlık karşısında imdada yetişip zafer ve destek bahşeden yardımcı (el-Müfredât / Hac 22/78)" },
  { id: 87, singular: "سُلْطَانٌ", dual: "سُلْطَانَانِ", plural: "سَلَاطِينُ", meaning: "Sultan: Şüpheleri yok eden sarsılmaz hüccet, kesin delil, kudret ve hükümranlık (el-Müfredât / İsrâ 17/33)" },
  { id: 88, singular: "بَيِّنَةٌ", dual: "بَيِّنَتَانِ", plural: "بَيِّنَاتٌ", meaning: "Beyyine: Şüpheye yer bırakmayacak kadar net, apaçık ilahî delil, peygamber mucizesi ve vahiy (el-Müfredât / Beyyine 98/1)" },
  { id: 89, singular: "حِكْمَةٌ", dual: "حِكْمَتَانِ", plural: "حِكَمٌ", meaning: "Hikmet: Eşyanın hakikatini bilip gereğince doğru hareket etmek, her şeyi yerli yerine koymak ve sünnet ilmi (el-Müfredât / Bakara 2/269)" },
  { id: 90, singular: "كَلِمَةٌ", dual: "كَلِمَتَانِ", plural: "كَلِمَاتٌ / كَلِمٌ", meaning: "Kelime: İlahi irade fermanı, tevhid sözü (lâ ilâhe illallâh) ve Allah'ın kesinleşmiş vaad ve hükmü (el-Müfredât / Sâffât 37/171)" },
  { id: 91, singular: "حَدِيثٌ", dual: "حَدِيثَانِ", plural: "أَحَادِيثُ", meaning: "Hadis / Söz: Haber, söz, anlatı; ayetlerde Kur'an-ı Kerim (ahsenü'l-hadîs: sözün en güzeli) ve ibretli kıssalar (el-Müfredât / Zümer 39/23)" },
  { id: 92, singular: "مَسْجِدٌ", dual: "مَسْجِدَانِ", plural: "مَسَاجِدُ", meaning: "Mescit: Allah Teâlâ'ya secde ve ibadet edilen mukaddes mabet, cami (el-Müfredât / Cin 72/18)" },
  { id: 93, singular: "مَدِينَةٌ", dual: "مَدِينَتَانِ", plural: "مُدُنٌ / مَدَائِنُ", meaning: "Medine / Şehir: Nüfusun toplandığı medenî şehir; hususiyle hicret yurdu olan Medine-i Münevvere (el-Müfredât / Tevbe 9/101)" },
  { id: 94, singular: "قَرْيَةٌ", dual: "قَرْيَتَانِ", plural: "قُرًى", meaning: "Karye / Belde: İnsanların ikamet ettiği yerleşim birimi, köy, şehir; ayetlerde peygamber gönderilen beldeler (el-Müfredât / İsrâ 17/16)" },
  { id: 95, singular: "دَارٌ", dual: "دَارَانِ", plural: "دِيَارٌ / دُورٌ", meaning: "Yurt / Dâr: Ev, konut, yurt; ayetlerde selamet yurdu olan Cennet (Dârü's-Selâm) ve ebedî ahiret konağı (el-Müfredât / Yûnus 10/25)" },
  { id: 96, singular: "أُمٌّ", dual: "أُمَّانِ", plural: "أُمَّهَاتٌ", meaning: "Anne / Ümm: Varlığın aslı, kaynağı ve validesi; ayetlerde ana kitap (Levh-i Mahfuz) ve hürmete en layık valide (el-Müfredât / Lokmân 31/14)" },
  { id: 97, singular: "أَبٌ", dual: "أَبَوَانِ", plural: "آبَاءٌ", meaning: "Baba / Eb: İnsanın dünyaya gelişine vesile olan peder, ata, dedeler ve peygamber atalar (el-Müfredât / Yûsuf 12/38)" },
  { id: 98, singular: "أَخٌ", dual: "أَخَوَانِ", plural: "إِخْوَةٌ / إِخْوَانٌ", meaning: "Kardeş / Ah: Öz kardeş; ayetlerde aynı zamanda kalpleri birbirine kaynaştırılmış din kardeşi (el-Müfredât / Hucurât 49/10)" },
  { id: 99, singular: "أُخْتٌ", dual: "أُخْتَانِ", plural: "أَخَوَاتٌ", meaning: "Kız Kardeş: Nesep bağıyla bağlı kız kardeş; şefkat ve sıla-i rahim muhatabı (el-Müfredât / Nisâ 4/12)" },
  { id: 100, singular: "زَوْجٌ", dual: "زَوْجَانِ", plural: "أَزْوَاجٌ", meaning: "Eş / Zevc: Birbirini tamamlayan eş, hanım veya koca; kâinatta çift olarak yaratılan her bir varlık (el-Müfredât / Rûm 30/21)" }
];

let VOCABULARY_WORDS = JSON.parse(JSON.stringify(DEFAULT_VOCABULARY_WORDS));

// 2. SES SİSTEMİ
class LangSoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch(e) {}
  }

  playWrong() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(146.83, now + 0.22);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch(e) {}
  }

  playFlip() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch(e) {}
  }
}

const langSounds = new LangSoundManager();

// 3. OYUN MOTORU
class LanguageGameEngine {
  constructor() {
    this.currentGameMode = 'emsile24'; // 'emsile24' | 'sigaPronouns' | 'vocab'
    this.selectedSigaId = 1;
    this.currentQuizWords = [];
    this.shuffledIndices = [];
    this.currentOrderIndex = 0;
    this.currentWord = null;
    this.isAnswering = false;
    this.lastMissedWordId = null;
    this.currentCorrectAnswerKey = "";
  }

  start() {
    this.showMainMenu();
  }

  showMainMenu() {
    this.showScreen("langMainMenuSection");
    const btnMenu = document.getElementById("btnLangMenu");
    const btnTable = document.getElementById("btnLangToggleTable");
    const title = document.getElementById("langModalTitle");
    const badge = document.getElementById("langPillBadge");

    if (btnMenu) btnMenu.style.display = "none";
    if (btnTable) btnTable.style.display = "none";
    if (title) title.textContent = "Arapça";
    if (badge) badge.style.display = "none";
  }

  showScreen(screenId) {
    const screens = ["langMainMenuSection", "langSigaSelectionSection", "langQuizSection", "langTableSection"];
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === screenId ? "flex" : "none");
    });

    const btnMenu = document.getElementById("btnLangMenu");
    const btnTable = document.getElementById("btnLangToggleTable");
    const title = document.getElementById("langModalTitle");

    if (screenId === "langQuizSection" || screenId === "langTableSection") {
      if (btnMenu) btnMenu.style.display = "inline-flex";
      if (btnTable) btnTable.style.display = "inline-flex";
      if (title) {
        if (this.currentGameMode === 'emsile24') {
          title.textContent = "24 Çekim";
        } else if (this.currentGameMode === 'vocab') {
          title.textContent = "Kelime";
        } else {
          const s = EMSILE_24_WORDS.find(w => w.id === this.selectedSigaId) || EMSILE_24_WORDS[0];
          title.textContent = `${s.meaning} Çekimi`;
        }
      }
    } else if (screenId === "langSigaSelectionSection") {
      if (btnMenu) btnMenu.style.display = "inline-flex";
      if (btnTable) btnTable.style.display = "none";
      if (title) title.textContent = "Zamir Çekimi Seçimi";
    }
  }

  // 1. Mod: 24 Sîga Oyunu
  startEmsileGame() {
    this.currentGameMode = 'emsile24';
    this.currentQuizWords = EMSILE_24_WORDS.slice();
    this.initShuffledIndices();
    this.showScreen("langQuizSection");
    this.renderQuestion();
  }

  // 2. Mod: Zamir Çekimi Seçim Menüsü
  openSigaSelectionMenu() {
    this.renderSigaGrid();
    this.showScreen("langSigaSelectionSection");
  }

  renderSigaGrid() {
    const grid = document.getElementById("langSigaGridList");
    if (!grid) return;
    grid.innerHTML = "";

    EMSILE_24_WORDS.forEach(siga => {
      const card = document.createElement("div");
      card.className = "siga-item-card";
      card.innerHTML = `
        <span class="siga-badge-num">${siga.id}</span>
        <div class="siga-item-arabic">${siga.word}</div>
        <div class="siga-item-title">${escapeHtml(siga.meaning)}</div>
        <div class="siga-item-trans">${escapeHtml(siga.translation)}</div>
        ${siga.extraHint ? `<div class="siga-item-hint">${escapeHtml(siga.extraHint)}</div>` : ""}
      `;
      card.addEventListener("click", () => this.startSigaPronounGame(siga.id));
      grid.appendChild(card);
    });
  }

  startSigaPronounGame(sigaId) {
    this.currentGameMode = 'sigaPronouns';
    this.selectedSigaId = sigaId;

    const forms = SIGA_CONJUGATIONS[sigaId] || SIGA_CONJUGATIONS[1];
    const list = [];
    for (let i = 0; i < 14; i++) {
      list.push({
        id: i + 1,
        word: forms[i] || forms[0],
        meaning: PRONOUN_MEANINGS[i],
        translation: PRONOUN_MEANINGS[i],
        extraHint: ""
      });
    }

    this.currentQuizWords = list;
    this.initShuffledIndices();
    this.showScreen("langQuizSection");
    this.renderQuestion();
  }

  // 3. Mod: Kelime Oyunu (Tekil / İkili / Çoğul) - KULLANICI İSTEĞİ
  startVocabGame() {
    this.currentGameMode = 'vocab';
    this.currentQuizWords = VOCABULARY_WORDS.slice();
    this.initShuffledIndices();
    this.showScreen("langQuizSection");
    this.renderQuestion();
  }

  initShuffledIndices() {
    this.shuffledIndices = [];
    for (let i = 0; i < this.currentQuizWords.length; i++) this.shuffledIndices.push(i);
    for (let i = this.shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledIndices[i], this.shuffledIndices[j]] = [this.shuffledIndices[j], this.shuffledIndices[i]];
    }
    this.currentOrderIndex = 0;
  }

  // ÇİFT YÖNLÜ TEST SORUSU OLUŞTURMA
  renderQuestion() {
    if (this.shuffledIndices.length === 0) this.initShuffledIndices();
    this.isAnswering = false;

    const feedbackBar = document.getElementById("langQuizFeedbackBar");
    if (feedbackBar) feedbackBar.style.display = "none";

    const targetIdx = this.shuffledIndices[this.currentOrderIndex];
    this.currentWord = this.currentQuizWords[targetIdx];

    const targetWordEl = document.getElementById("langTargetWord");
    const targetContainer = document.getElementById("langTargetWordContainer") || (targetWordEl ? targetWordEl.parentElement : null);
    const trackerEl = document.getElementById("langCurrentIndex");
    const captionEl = document.getElementById("langTargetCaption");

    if (trackerEl) trackerEl.textContent = `${this.currentOrderIndex + 1} / ${this.currentQuizWords.length}`;

    let questionConfig = null;

    if (this.currentGameMode === 'vocab') {
      // KELİME MODU: Çift Yönlü
      const qTypes = ['VOCAB_ARABIC_TO_MEANING', 'VOCAB_MEANING_TO_ARABIC'];
      const chosenType = qTypes[Math.floor(Math.random() * qTypes.length)];

      if (chosenType === 'VOCAB_ARABIC_TO_MEANING') {
        questionConfig = {
          mode: 'vocab_ar_to_tr',
          instruction: "Bu kelimelerin (Tekil / İkili / Çoğul) Türkçe anlamı nedir?",
          correctKey: this.currentWord.meaning,
          choices: this.generateVocabChoices(this.currentWord, 'meaning')
        };
        if (targetContainer) {
          targetContainer.innerHTML = `
            <div class="vocab-triplet-display" dir="ltr" style="display:flex; justify-content:center; align-items:center; gap:8px; margin:6px 0;">
              <div class="triplet-col" style="display:flex; flex-direction:column; align-items:center; background:rgba(30,41,59,0.7); padding:6px 12px; border-radius:10px; border:1px solid rgba(255,255,255,0.1);">
                <span style="font-size:0.65rem; color:#818cf8; font-weight:700;">ÇOĞUL</span>
                <span class="arabic-font" style="font-size:1.5rem; color:#fff; direction:rtl;">${this.currentWord.plural}</span>
              </div>
              <span style="font-size:1.4rem; color:#94a3b8; font-weight:700;">/</span>
              <div class="triplet-col" style="display:flex; flex-direction:column; align-items:center; background:rgba(30,41,59,0.7); padding:6px 12px; border-radius:10px; border:1px solid rgba(255,255,255,0.1);">
                <span style="font-size:0.65rem; color:#818cf8; font-weight:700;">İKİLİ</span>
                <span class="arabic-font" style="font-size:1.5rem; color:#fff; direction:rtl;">${this.currentWord.dual}</span>
              </div>
              <span style="font-size:1.4rem; color:#94a3b8; font-weight:700;">/</span>
              <div class="triplet-col" style="display:flex; flex-direction:column; align-items:center; background:rgba(30,41,59,0.7); padding:6px 12px; border-radius:10px; border:1px solid rgba(255,255,255,0.1);">
                <span style="font-size:0.65rem; color:#818cf8; font-weight:700;">TEKİL</span>
                <span class="arabic-font" style="font-size:1.5rem; color:#fff; direction:rtl;">${this.currentWord.singular}</span>
              </div>
            </div>
          `;
        }
      } else {
        // VOCAB_MEANING_TO_ARABIC
        questionConfig = {
          mode: 'vocab_tr_to_ar',
          instruction: "Bu anlamın Tekil / İkili / Çoğul Arapça karşılığı hangisidir?",
          correctKey: this.currentWord.id,
          choices: this.generateVocabChoices(this.currentWord, 'arabic')
        };
        if (targetContainer) {
          targetContainer.innerHTML = `
            <h1 class="lang-target-word-text latin-font" id="langTargetWord">${escapeHtml(this.currentWord.meaning)}</h1>
          `;
        }
      }

    } else if (this.currentGameMode === 'emsile24') {
      const qTypes = [
        'ARABIC_TO_MEANING',
        'ARABIC_TO_TRANSLATION',
        'MEANING_TO_ARABIC',
        'TRANSLATION_TO_ARABIC'
      ];
      const chosenType = qTypes[Math.floor(Math.random() * qTypes.length)];

      if (chosenType === 'ARABIC_TO_MEANING') {
        questionConfig = {
          mode: 'text_simple',
          instruction: "Bu kelimenin sîga terimi (başlığı) nedir?",
          correctKey: this.currentWord.meaning,
          promptText: this.currentWord.word,
          isPromptArabic: true,
          isChoiceArabic: false,
          choices: this.generateSimpleChoices(this.currentWord.meaning, EMSILE_24_WORDS.map(w => w.meaning))
        };
      } else if (chosenType === 'ARABIC_TO_TRANSLATION') {
        questionConfig = {
          mode: 'text_simple',
          instruction: "Bu kelimenin Türkçe fiil manası (çevirisi) nedir?",
          correctKey: this.currentWord.translation,
          promptText: this.currentWord.word,
          isPromptArabic: true,
          isChoiceArabic: false,
          choices: this.generateSimpleChoices(this.currentWord.translation, EMSILE_24_WORDS.map(w => w.translation))
        };
      } else if (chosenType === 'MEANING_TO_ARABIC') {
        questionConfig = {
          mode: 'text_simple',
          instruction: "Bu sîga teriminin Arapça çekimi hangisidir?",
          correctKey: this.currentWord.word,
          promptText: this.currentWord.meaning,
          isPromptArabic: false,
          isChoiceArabic: true,
          choices: this.generateSimpleChoices(this.currentWord.word, EMSILE_24_WORDS.map(w => w.word))
        };
      } else {
        // TRANSLATION_TO_ARABIC
        questionConfig = {
          mode: 'text_simple',
          instruction: "Bu manaya gelen Arapça çekim hangisidir?",
          correctKey: this.currentWord.word,
          promptText: this.currentWord.translation,
          isPromptArabic: false,
          isChoiceArabic: true,
          choices: this.generateSimpleChoices(this.currentWord.word, EMSILE_24_WORDS.map(w => w.word))
        };
      }

      if (targetContainer) {
        targetContainer.innerHTML = `
          <h1 class="lang-target-word-text ${questionConfig.isPromptArabic ? 'arabic-font' : 'latin-font'}" id="langTargetWord">${escapeHtml(questionConfig.promptText)}</h1>
        `;
      }

    } else {
      // Zamir Modu
      const qTypes = ['ARABIC_TO_PRONOUN', 'PRONOUN_TO_ARABIC'];
      const chosenType = qTypes[Math.floor(Math.random() * qTypes.length)];

      if (chosenType === 'ARABIC_TO_PRONOUN') {
        questionConfig = {
          mode: 'text_simple',
          instruction: "Bu çekim hangi şahsa (zamire) aittir?",
          correctKey: this.currentWord.meaning,
          promptText: this.currentWord.word,
          isPromptArabic: true,
          isChoiceArabic: false,
          choices: this.generateSimpleChoices(this.currentWord.meaning, PRONOUN_MEANINGS.slice())
        };
      } else {
        questionConfig = {
          mode: 'text_simple',
          instruction: "Bu şahıs zamirine ait Arapça çekim hangisidir?",
          correctKey: this.currentWord.word,
          promptText: this.currentWord.meaning,
          isPromptArabic: false,
          isChoiceArabic: true,
          choices: this.generateSimpleChoices(this.currentWord.word, this.currentQuizWords.map(w => w.word))
        };
      }

      if (targetContainer) {
        targetContainer.innerHTML = `
          <h1 class="lang-target-word-text ${questionConfig.isPromptArabic ? 'arabic-font' : 'latin-font'}" id="langTargetWord">${escapeHtml(questionConfig.promptText)}</h1>
        `;
      }
    }

    this.currentCorrectAnswerKey = questionConfig.correctKey;
    if (captionEl) captionEl.textContent = questionConfig.instruction;

    this.renderOptionsGrid(questionConfig);
  }

  generateSimpleChoices(correctAnswer, pool) {
    const distractors = pool.filter(opt => opt !== correctAnswer);
    for (let i = distractors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
    }
    const chosen = [correctAnswer, ...distractors.slice(0, 4)];
    for (let i = chosen.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
    }
    return chosen;
  }

  generateVocabChoices(targetWord, type) {
    const others = VOCABULARY_WORDS.filter(w => w.id !== targetWord.id);
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    const chosen = [targetWord, ...others.slice(0, 4)];
    for (let i = chosen.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
    }
    return chosen;
  }

  renderOptionsGrid(cfg) {
    const grid = document.getElementById("langOptionsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];

    if (cfg.mode === 'vocab_tr_to_ar') {
      // Şıklar: Soldan Sağa Tekil / İkili / Çoğul
      cfg.choices.forEach((choiceWord, idx) => {
        const btn = document.createElement("button");
        btn.className = "lang-option-btn";
        btn.setAttribute("type", "button");
        btn.setAttribute("data-key", choiceWord.id);

        btn.innerHTML = `
          <span class="lang-opt-letter">${letters[idx]}</span>
          <div class="lang-opt-content" dir="ltr" style="display:inline-flex; align-items:center; gap:8px;">
            <span class="arabic-font" style="font-size:1.35rem; direction:rtl;">${escapeHtml(choiceWord.plural)}</span>
            <span style="color:#818cf8; font-weight:700;">/</span>
            <span class="arabic-font" style="font-size:1.35rem; direction:rtl;">${escapeHtml(choiceWord.dual)}</span>
            <span style="color:#818cf8; font-weight:700;">/</span>
            <span class="arabic-font" style="font-size:1.35rem; direction:rtl;">${escapeHtml(choiceWord.singular)}</span>
          </div>
        `;
        btn.addEventListener("click", () => this.handleAnswer(choiceWord.id, btn));
        grid.appendChild(btn);
      });

    } else if (cfg.mode === 'vocab_ar_to_tr') {
      cfg.choices.forEach((choiceWord, idx) => {
        const btn = document.createElement("button");
        btn.className = "lang-option-btn";
        btn.setAttribute("type", "button");
        btn.setAttribute("data-key", choiceWord.meaning);

        btn.innerHTML = `
          <span class="lang-opt-letter">${letters[idx]}</span>
          <div class="lang-opt-content">
            <span class="lang-opt-text">${escapeHtml(choiceWord.meaning)}</span>
          </div>
        `;
        btn.addEventListener("click", () => this.handleAnswer(choiceWord.meaning, btn));
        grid.appendChild(btn);
      });

    } else {
      cfg.choices.forEach((choiceText, idx) => {
        const btn = document.createElement("button");
        btn.className = "lang-option-btn";
        btn.setAttribute("type", "button");
        btn.setAttribute("data-key", choiceText);

        const arabicCls = cfg.isChoiceArabic ? "arabic-font" : "";

        btn.innerHTML = `
          <span class="lang-opt-letter">${letters[idx]}</span>
          <div class="lang-opt-content">
            <span class="lang-opt-text ${arabicCls}">${escapeHtml(choiceText)}</span>
          </div>
        `;
        btn.addEventListener("click", () => this.handleAnswer(choiceText, btn));
        grid.appendChild(btn);
      });
    }
  }

  handleAnswer(selectedKey, clickedBtn) {
    if (this.isAnswering) return;
    this.isAnswering = true;

    const isCorrect = (String(selectedKey) === String(this.currentCorrectAnswerKey));

    if (isCorrect) {
      clickedBtn.classList.add("correct-choice");
      langSounds.playCorrect();
      if (navigator.vibrate) navigator.vibrate(35);

      setTimeout(() => {
        this.currentOrderIndex = (this.currentOrderIndex + 1) % this.currentQuizWords.length;
        this.renderQuestion();
      }, 380);
    } else {
      clickedBtn.classList.add("wrong-choice");
      langSounds.playWrong();
      if (navigator.vibrate) navigator.vibrate([60, 40, 60]);

      const grid = document.getElementById("langOptionsGrid");
      if (grid) {
        grid.querySelectorAll(".lang-option-btn").forEach(btn => {
          if (String(btn.getAttribute("data-key")) === String(this.currentCorrectAnswerKey)) {
            btn.classList.add("correct-choice");
          }
        });
      }

      this.lastMissedWordId = this.currentWord.id;

      if (this.currentGameMode === 'vocab') {
        // KULLANICI İSTEĞİ: Kelime bölümünde yanlış yapılırsa tabloya gitme!
        // Sorunun altında Devam Et seçeneği olsun
        const feedbackBar = document.getElementById("langQuizFeedbackBar");
        if (feedbackBar) {
          feedbackBar.style.display = "flex";
          feedbackBar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        setTimeout(() => {
          this.showTableSection(this.lastMissedWordId);
        }, 650);
      }
    }
  }

  showTableSection(highlightId = null) {
    this.showScreen("langTableSection");
    this.renderCardsGrid(highlightId);
  }

  continueQuiz() {
    this.showScreen("langQuizSection");
    this.currentOrderIndex = (this.currentOrderIndex + 1) % this.currentQuizWords.length;
    this.renderQuestion();
  }

  toggleTableDirectly() {
    const tableSec = document.getElementById("langTableSection");
    if (tableSec && tableSec.style.display !== "none") {
      this.continueQuiz();
    } else {
      this.showTableSection(null);
    }
  }

  renderCardsGrid(highlightId = null) {
    const gridEl = document.getElementById("langCardsGrid");
    const bannerTitle = document.getElementById("langTableBannerTitle");
    const bannerDesc = document.getElementById("langTableBannerDesc");
    const bannerIcon = document.getElementById("langTableIcon");
    if (!gridEl) return;
    gridEl.innerHTML = "";

    if (this.currentGameMode === 'vocab') {
      if (bannerIcon) bannerIcon.textContent = "📝";
      if (bannerTitle) bannerTitle.textContent = "Kelime Kartları (Tekil / İkili / Çoğul)";
      if (bannerDesc) bannerDesc.textContent = "Kartın önünde soldan sağa Tekil / İkili / Çoğul formlar yer alır.";

      gridEl.className = "vocab-grid-wrapper";

      this.currentQuizWords.forEach(item => {
        const isMissed = (highlightId && item.id === highlightId);
        const card = document.createElement("div");
        card.className = `lang-flip-card ${isMissed ? "missed-highlight" : ""}`;
        card.setAttribute("data-id", item.id);

        card.innerHTML = `
          <div class="lang-flip-card-inner">
            <div class="lang-flip-card-front" style="padding: 10px 6px;">
              <span class="lang-card-num-badge">${item.id}</span>
              <div class="vocab-card-triplet" dir="ltr" style="display:flex; justify-content:center; align-items:center; gap:6px; width:100%;">
                <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                  <span style="font-size:0.55rem; color:#a5b4fc; font-weight:700;">Tekil</span>
                  <span class="arabic-font" style="font-size:1.15rem; color:#fff; direction:rtl;">${item.singular}</span>
                </div>
                <span style="color:#64748b; font-weight:700; font-size:0.9rem;">/</span>
                <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                  <span style="font-size:0.55rem; color:#a5b4fc; font-weight:700;">İkili</span>
                  <span class="arabic-font" style="font-size:1.15rem; color:#fff; direction:rtl;">${item.dual}</span>
                </div>
                <span style="color:#64748b; font-weight:700; font-size:0.9rem;">/</span>
                <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                  <span style="font-size:0.55rem; color:#a5b4fc; font-weight:700;">Çoğul</span>
                  <span class="arabic-font" style="font-size:1.15rem; color:#fff; direction:rtl;">${item.plural}</span>
                </div>
              </div>
              <div class="lang-card-tap-hint">🔄 Anlamı Gör</div>
            </div>
            <div class="lang-flip-card-back">
              <div class="lang-card-answer-title" style="font-size:1.05rem;">${escapeHtml(item.meaning)}</div>
              <div class="card-trans-text" style="color:#c7d2fe;">Tekil / İkili / Çoğul</div>
              <div class="lang-card-check-icon">✓</div>
            </div>
          </div>
        `;

        card.addEventListener("click", () => {
          card.classList.toggle("flipped");
          langSounds.playFlip();
          if (navigator.vibrate) navigator.vibrate(25);
        });

        gridEl.appendChild(card);
      });

    } else if (this.currentGameMode === 'emsile24') {
      if (bannerIcon) bannerIcon.textContent = "📖";
      if (bannerTitle) bannerTitle.textContent = "24 Sîga Tablosu (Sağdan Sola)";
      if (bannerDesc) bannerDesc.textContent = "Kartın arkasında sîga başlığı ve Türkçe fiil manası yer alır.";

      gridEl.className = "emsile-table-wrapper";

      const rowDefinitions = [
        { rowNum: 1, count: 5, slice: [0, 5], className: "cols-5" },
        { rowNum: 2, count: 5, slice: [5, 10], className: "cols-5" },
        { rowNum: 3, count: 4, slice: [10, 14], className: "cols-4" },
        { rowNum: 4, count: 5, slice: [14, 19], className: "cols-5" },
        { rowNum: 5, count: 5, slice: [19, 24], className: "cols-5" }
      ];

      rowDefinitions.forEach(def => {
        const rowItems = this.currentQuizWords.slice(def.slice[0], def.slice[1]);
        const rowDiv = document.createElement("div");
        rowDiv.className = `emsile-row ${def.className}`;
        rowDiv.setAttribute("data-row", def.rowNum);

        rowItems.forEach(item => {
          rowDiv.appendChild(this.createCard(item, highlightId));
        });

        gridEl.appendChild(rowDiv);
      });
    } else {
      const s = EMSILE_24_WORDS.find(w => w.id === this.selectedSigaId) || EMSILE_24_WORDS[0];
      if (bannerIcon) bannerIcon.textContent = "👤";
      if (bannerTitle) bannerTitle.textContent = `${s.meaning} - 14 Zamir Tablosu`;
      if (bannerDesc) bannerDesc.textContent = "Son satırda 'Ben' tek sütun, 'Biz' sol ve ortayı kaplar.";

      gridEl.className = "emsile-table-wrapper";

      const zamirRows = [
        { rowNum: 1, slice: [0, 3] },
        { rowNum: 2, slice: [3, 6] },
        { rowNum: 3, slice: [6, 9] },
        { rowNum: 4, slice: [9, 12] }
      ];

      zamirRows.forEach(def => {
        const rowItems = this.currentQuizWords.slice(def.slice[0], def.slice[1]);
        const rowDiv = document.createElement("div");
        rowDiv.className = "emsile-row cols-3";
        rowDiv.setAttribute("data-row", def.rowNum);

        rowItems.forEach(item => {
          rowDiv.appendChild(this.createCard(item, highlightId));
        });

        gridEl.appendChild(rowDiv);
      });

      const row5Div = document.createElement("div");
      row5Div.className = "emsile-row zamir-row-5";
      row5Div.setAttribute("data-row", 5);

      const itemBen = this.currentQuizWords[12];
      const itemBiz = this.currentQuizWords[13];

      const cardBen = this.createCard(itemBen, highlightId);
      const cardBiz = this.createCard(itemBiz, highlightId, true);

      row5Div.appendChild(cardBen);
      row5Div.appendChild(cardBiz);
      gridEl.appendChild(row5Div);
    }

    if (highlightId) {
      setTimeout(() => {
        const el = gridEl.querySelector(`.lang-flip-card[data-id="${highlightId}"]`);
        if (el && typeof el.scrollIntoView === 'function') {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 180);
    }
  }

  createCard(item, highlightId = null, isSpan2 = false) {
    const isMissed = (highlightId && item.id === highlightId);
    const card = document.createElement("div");
    card.className = `lang-flip-card ${isSpan2 ? "card-span-2" : ""} ${isMissed ? "missed-highlight" : ""}`;
    card.setAttribute("data-id", item.id);

    const transHtml = item.translation ? `<div class="card-trans-text">(${escapeHtml(item.translation)})</div>` : "";
    const extraHtml = item.extraHint ? `<div class="card-extra-hint">${escapeHtml(item.extraHint)}</div>` : "";

    card.innerHTML = `
      <div class="lang-flip-card-inner">
        <!-- ÖN YÜZ: Arapça Kelime (Sağdan Sola) -->
        <div class="lang-flip-card-front">
          <span class="lang-card-num-badge">${item.id}</span>
          <div class="lang-card-word-title arabic-font">${item.word}</div>
          <div class="lang-card-tap-hint">🔄 Anlamı ve Çevirisi</div>
        </div>
        <!-- ARKA YÜZ: Anlamı ve Türkçe Çevirisi -->
        <div class="lang-flip-card-back">
          <div class="lang-card-answer-title">${escapeHtml(item.meaning)}</div>
          ${transHtml}
          ${extraHtml}
          <div class="lang-card-check-icon">✓</div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      langSounds.playFlip();
      if (navigator.vibrate) navigator.vibrate(25);
    });

    return card;
  }

  toggleSound() {
    langSounds.isMuted = !langSounds.isMuted;
    const btn = document.getElementById("langSoundBtn");
    if (btn) btn.textContent = langSounds.isMuted ? "🔇" : "🔊";
  }
}

// 4. GLOBAL BAŞLATICI VE KÖPRÜLER
const languageGame = new LanguageGameEngine();
window.languageGame = languageGame;

function openLanguageGameModal() {
  const modal = document.getElementById("languageGameModal");
  if (modal) {
    modal.style.display = "flex";
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    languageGame.start();
  }
}
window.openLanguageGameModal = openLanguageGameModal;

function closeLanguageGameModal() {
  const modal = document.getElementById("languageGameModal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
window.closeLanguageGameModal = closeLanguageGameModal;

function advanceLanguageGameQuestion() {
  const bar = document.getElementById("langQuizFeedbackBar");
  if (bar) bar.style.display = "none";
  if (window.languageGame) {
    window.languageGame.isAnswering = false;
    window.languageGame.currentOrderIndex = (window.languageGame.currentOrderIndex + 1) % window.languageGame.currentQuizWords.length;
    window.languageGame.renderQuestion();
  }
}
window.advanceLanguageGameQuestion = advanceLanguageGameQuestion;

function toggleLanguageTable() {
  languageGame.toggleTableDirectly();
}
window.toggleLanguageTable = toggleLanguageTable;

function continueLanguageQuiz() {
  languageGame.continueQuiz();
}
window.continueLanguageQuiz = continueLanguageQuiz;

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.AndroidBridge && typeof window.AndroidBridge.shouldOpenLanguageGame === 'function') {
    if (window.AndroidBridge.shouldOpenLanguageGame()) {
      openLanguageGameModal();
    }
  }
});
