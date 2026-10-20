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
  { id: 1, singular: "رَبٌّ", dual: "رَبَّانِ", plural: "أَرْبَابٌ", meaning: "Rab: Terbiye eden, mutlak mâlik ve rızık veren" },
  { id: 2, singular: "آيَةٌ", dual: "آيَتَانِ", plural: "آيَاتٌ", meaning: "Âyet: İlahî delil, mucize ve Kur'an cümlesi" },
  { id: 3, singular: "كِتَابٌ", dual: "كِتَابَانِ", plural: "كُتُبٌ", meaning: "Kitap: Yazılı vahiy, Kur'an ve amel defteri" },
  { id: 4, singular: "رَسُولٌ", dual: "رَسُولَانِ", plural: "رُسُلٌ", meaning: "Resûl: Kitap ve şeriat getiren ilahî elçi" },
  { id: 5, singular: "نَبِيٌّ", dual: "نَبِيَّانِ", plural: "أَنْبِيَاءُ / نَبِيُّونَ", meaning: "Nebî: Vahiy ve gayb haberi alan peygamber" },
  { id: 6, singular: "يَوْمٌ", dual: "يَوْمَانِ", plural: "أَيَّامٌ", meaning: "Yevm: Gün, vakit, kıyamet zamanı" },
  { id: 7, singular: "سَمَاءٌ", dual: "سَمَاوَانِ", plural: "سَمَاوَاتٌ", meaning: "Semâ: Yüksek gök, semavat" },
  { id: 8, singular: "أَرْضٌ", dual: "أَرْضَانِ", plural: "أَرَاضٍ / أَرْضُونَ", meaning: "Arz: Yeryüzü, zemin, dünya" },
  { id: 9, singular: "نَفْسٌ", dual: "نَفْسَانِ", plural: "أَنْفُسٌ / نُفُوسٌ", meaning: "Nefis: İnsanın kendi zâtı, canı, hevesi" },
  { id: 10, singular: "قَوْمٌ", dual: "قَوْمَانِ", plural: "أَقْوَامٌ", meaning: "Kavim: İnsan topluluğu, halk, millet" },
  { id: 11, singular: "عَبْدٌ", dual: "عَبْدَانِ", plural: "عِبَادٌ / عَبِيدٌ", meaning: "Kul: Allah'a boyun eğip ibadet eden insan" },
  { id: 12, singular: "قَلْبٌ", dual: "قَلْبَانِ", plural: "قُلُوبٌ", meaning: "Kalp: Gönül, manevî idrak ve iman merkezi" },
  { id: 13, singular: "عَذَابٌ", dual: "عَذَابَانِ", plural: "أَعْذِبَةٌ", meaning: "Azap: Şiddetli elem ve ahiret cezası" },
  { id: 14, singular: "جَنَّةٌ", dual: "جَنَّتَانِ", plural: "جَنَّاتٌ", meaning: "Cennet: Ebedî saadet, huzur ve mükâfat yurdu" },
  { id: 15, singular: "نَارٌ", dual: "نَارَانِ", plural: "نِيرَانٌ", meaning: "Nâr: Yakıcı ateş, cehennem" },
  { id: 16, singular: "حَقٌّ", dual: "حَقَّانِ", plural: "حُقُوقٌ", meaning: "Hak: Mutlak gerçek, adalet, sabit doğru" },
  { id: 17, singular: "سَبِيلٌ", dual: "سَبِيلَانِ", plural: "سُبُلٌ", meaning: "Sebîl: Yol, rızaya ulaştıran hak yol" },
  { id: 18, singular: "أَمْرٌ", dual: "أَمْرَانِ", plural: "أُمُورٌ / أَوَامِرُ", meaning: "Emir: İlahî buyruk, ferman, hüküm ve iş" },
  { id: 19, singular: "شَيْءٌ", dual: "شَيْئَانِ", plural: "أَشْيَاءُ", meaning: "Şey: Yaratılmış olan her varlık, nesne" },
  { id: 20, singular: "مَالٌ", dual: "مَالَانِ", plural: "أَمْوَالٌ", meaning: "Mal: Dünya serveti, mülk, meta" },
  { id: 21, singular: "وَلَدٌ", dual: "وَلَدَانِ", plural: "أَوْلَادٌ / وِلْدَانٌ", meaning: "Veled: Çocuk, evlat, nesil" },
  { id: 22, singular: "عِلْمٌ", dual: "عِلْمَانِ", plural: "عُلُومٌ", meaning: "İlim: Kesin bilgi, marifet, hakikat ilmi" },
  { id: 23, singular: "عَمَلٌ", dual: "عَمَلَانِ", plural: "أَعْمَالٌ", meaning: "Amel: Niyetle yapılan iş, fiil, eylem" },
  { id: 24, singular: "أَهْلٌ", dual: "أَهْلَانِ", plural: "أَهْلُونَ / أَهَالٍ", meaning: "Ehil: Aile, ev halkı, mensup topluluk" },
  { id: 25, singular: "بَيْتٌ", dual: "بَيْتَانِ", plural: "بُيُوتٌ / أَبْيَاتٌ", meaning: "Beyt: Ev, mesken; Kâbe-i Muazzama" },
  { id: 26, singular: "بَابٌ", dual: "بَابَانِ", plural: "أَبْوَابٌ / بِيبَانٌ", meaning: "Kapı: Giriş yeri, sema ve cennet kapıları" },
  { id: 27, singular: "مَلَكٌ", dual: "مَلَكَانِ", plural: "مَلَائِكَةٌ", meaning: "Melek: Nurdan yaratılmış itaatkâr varlık" },
  { id: 28, singular: "إِنْسَانٌ", dual: "إِنْسَانَانِ", plural: "نَاسٌ / أَنَاسِيُّ", meaning: "İnsan: Akıl ve irade sahibi beşer" },
  { id: 29, singular: "دِينٌ", dual: "دِينَانِ", plural: "أَدْيَانٌ", meaning: "Din: İtaat, hesap ve ilahî şeriat nizamı" },
  { id: 30, singular: "قَوْلٌ", dual: "قَوْلَانِ", plural: "أَقْوَالٌ / أَقَاوِيلُ", meaning: "Söz: Kelam, lafız, hakikat ifadesi" },
  { id: 31, singular: "يَدٌ", dual: "يَدَانِ", plural: "أَيْدٍ / أَيَادٍ", meaning: "El: Organ olan el; güç ve nimet" },
  { id: 32, singular: "عَيْنٌ", dual: "عَيْنَانِ", plural: "أَعْيُنٌ / عُيُونٌ", meaning: "Göz / Pınar: Görme organı; su pınarı" },
  { id: 33, singular: "أُذُنٌ", dual: "أُذُنَانِ", plural: "آذَانٌ", meaning: "Kulak: İşitme ve ibret alma organı" },
  { id: 34, singular: "لِسَانٌ", dual: "لِسَانَانِ", plural: "أَلْسِنَةٌ", meaning: "Dil / Lisan: Konuşma organı, lisan, lehçe" },
  { id: 35, singular: "وَجْهٌ", dual: "وَجْهَانِ", plural: "وُجُوهٌ / أَوْجُهٌ", meaning: "Yüz / Vech: Çehre, taraf; ilahî rıza" },
  { id: 36, singular: "رِجْلٌ", dual: "رِجْلَانِ", plural: "أَرْجُلٌ", meaning: "Ayak: Yürüme ve sebat organı" },
  { id: 37, singular: "صَدْرٌ", dual: "صَدْرَانِ", plural: "صُدُورٌ", meaning: "Göğüs / Sadr: Kalbin mahalli olan sine, bağır" },
  { id: 38, singular: "بَصَرٌ", dual: "بَصَرَانِ", plural: "أَبْصَارٌ", meaning: "Basar: Göz nuru, görme ve idrak kabiliyeti" },
  { id: 39, singular: "سَمْعٌ", dual: "سَمْعَانِ", plural: "أَسْمَاعٌ", meaning: "Sem': İşitme ve hak çağrıyı duyma yetisi" },
  { id: 40, singular: "رَأْسٌ", dual: "رَأْسَانِ", plural: "رُؤُوسٌ", meaning: "Baş / Re's: Baş, tepe noktası, topluluk lideri" },
  { id: 41, singular: "شَمْسٌ", dual: "شَمْسَانِ", plural: "شُمُوسٌ", meaning: "Güneş: Âlemi aydınlatan ve ısıtan kandil" },
  { id: 42, singular: "قَمَرٌ", dual: "قَمَرَانِ", plural: "أَقْمَارٌ", meaning: "Ay / Kamer: Gecenin aydınlığı, zaman ölçüsü" },
  { id: 43, singular: "نَجْمٌ", dual: "نَجْمَانِ", plural: "نُجُومٌ / أَنْجُمٌ", meaning: "Yıldız: Gökyüzünü süsleyen ışıklı cisim" },
  { id: 44, singular: "لَيْلٌ", dual: "لَيْلَانِ", plural: "لَيَالٍ", meaning: "Gece: Karanlığın bürüdüğü sükûn vakti" },
  { id: 45, singular: "نَهَارٌ", dual: "نَهَارَانِ", plural: "أَنْهُرٌ / نُهُرٌ", meaning: "Gündüz: Işıkla aydınlanan çalışma vakti" },
  { id: 46, singular: "نُورٌ", dual: "نُورَانِ", plural: "أَنْوَارٌ", meaning: "Nur: Karanlıkları dağıtan ilahî aydınlık" },
  { id: 47, singular: "ظُلْمَةٌ", dual: "ظُلْمَتَانِ", plural: "ظُلُمَاتٌ", meaning: "Karanlık: Maddî karanlık, şirk ve cehalet" },
  { id: 48, singular: "مَاءٌ", dual: "مَاءَانِ", plural: "مِيَاهٌ / أَمْوَاهٌ", meaning: "Su: Canlılara hayat veren temizleyici nimet" },
  { id: 49, singular: "رِيحٌ", dual: "رِيحَانِ", plural: "رِيَاحٌ / أَرْيَاحٌ", meaning: "Rüzgar: Bulutları sevk eden yel, esinti" },
  { id: 50, singular: "بَحْرٌ", dual: "بَحْرَانِ", plural: "بِحَارٌ / أَبْحُرٌ", meaning: "Deniz: Uçsuz bucaksız engin su kütlesi" },
  { id: 51, singular: "جَبَلٌ", dual: "جَبَلَانِ", plural: "جِبَالٌ", meaning: "Dağ: Yeryüzünü sarsıntıdan koruyan sabit kütle" },
  { id: 52, singular: "نَهْرٌ", dual: "نَهْرَانِ", plural: "أَنْهَارٌ", meaning: "Nehir: Yatağında akan tatlı su ırmağı" },
  { id: 53, singular: "شَجَرَةٌ", dual: "شَجَرَتَانِ", plural: "أَشْجَارٌ / شَجَرٌ", meaning: "Ağaç: Kökü yerde dalları gökte bitki" },
  { id: 54, singular: "ثَمَرَةٌ", dual: "ثَمَرَتَانِ", plural: "ثَمَرَاتٌ / ثَمَرٌ", meaning: "Meyve / Semere: Bitki ürünü; amel hasılatı" },
  { id: 55, singular: "طَعَامٌ", dual: "طَعَامَانِ", plural: "أَطْعِمَةٌ", meaning: "Yiyecek / Taâm: İnsanın beslendiği gıda ve rızık" },
  { id: 56, singular: "مَوْتٌ", dual: "مَوْتَانِ", plural: "أَمْوَاتٌ", meaning: "Ölüm: Ruhun bedenden ayrılıp ahirete göçmesi" },
  { id: 57, singular: "حَيَاةٌ", dual: "حَيَاتَانِ", plural: "حَيَوَاتٌ", meaning: "Hayat: Canlılık, dirilik, hakiki varoluş" },
  { id: 58, singular: "دُنْيَا", dual: "دُنْيَيَانِ", plural: "دُنًى", meaning: "Dünya: Fani, geçici ilk hayat sahnesi" },
  { id: 59, singular: "آخِرَةٌ", dual: "آخِرَتَانِ", plural: "آخِرَاتٌ", meaning: "Ahiret: Dünyadan sonraki ebedî hesap yurdu" },
  { id: 60, singular: "سَاعَةٌ", dual: "سَاعَتَانِ", plural: "سَاعَاتٌ", meaning: "Kıyamet Vakti / Saat: Kâinatın altüst olacağı dehşetli an" },
  { id: 61, singular: "أَجْرٌ", dual: "أَجْرَانِ", plural: "أُجُورٌ", meaning: "Ecir / Mükâfat: Salih amellere verilen sevap" },
  { id: 62, singular: "فَضْلٌ", dual: "فَضْلَانِ", plural: "فُضُولٌ / أَفْضَالٌ", meaning: "Lütuf / Fazl: İlahî bol ihsan, üstünlük ve bereket" },
  { id: 63, singular: "رَحْمَةٌ", dual: "رَحْمَتَانِ", plural: "رَحَمَاتٌ", meaning: "Rahmet: Her şeyi kuşatan ilahî merhamet" },
  { id: 64, singular: "نِعْمَةٌ", dual: "نِعْمَتَانِ", plural: "نِعَمٌ / أَنْعُمٌ", meaning: "Nimet: Maddî ve manevî ilahî bağış, sıhhat" },
  { id: 65, singular: "حَسَنَةٌ", dual: "حَسَنَتَانِ", plural: "حَسَنَاتٌ", meaning: "Hasene: Rızaya uygun güzel amel, iyilik" },
  { id: 66, singular: "سَيِّئَةٌ", dual: "سَيِّئَتَانِ", plural: "سَيِّئَاتٌ", meaning: "Seyyie: Günah, çirkin fiil, fenalık" },
  { id: 67, singular: "ذَنْبٌ", dual: "ذَنْبَانِ", plural: "ذُنُوبٌ", meaning: "Günah / Zenb: Kişiyi sorumlu kılan vebal ve isyan" },
  { id: 68, singular: "خَطِيئَةٌ", dual: "خَطِيئَتَانِ", plural: "خَطَايَا / خَطِيئَاتٌ", meaning: "Hatîe: Kasten veya gafletle işlenen ağır günah" },
  { id: 69, singular: "ظُلْمٌ", dual: "ظُلْمَانِ", plural: "مَظَالِمُ", meaning: "Zulüm: Haddi aşmak, haksızlık, şirk" },
  { id: 70, singular: "إِثْمٌ", dual: "إِثْمَانِ", plural: "آثَامٌ", meaning: "İsm: İnsanı hayırdan alıkoyan ağır günah" },
  { id: 71, singular: "مُؤْمِنٌ", dual: "مُؤْمِنَانِ", plural: "مُؤْمِنُونَ / مُؤْمِنِينَ", meaning: "Mümin: Allah'a ihlasla inanıp güvene eren kul" },
  { id: 72, singular: "كَافِرٌ", dual: "كَافِرَانِ", plural: "كَافِرُونَ / كُفَّارٌ", meaning: "Kâfir: Hakkı ve nimetleri bile bile inkâr eden" },
  { id: 73, singular: "مُنَافِقٌ", dual: "مُنَافِقَانِ", plural: "مُنَافِقُونَ / مُنَافِقِينَ", meaning: "Münafık: İçi inkârcı, dışı inanmış ikiyüzlü" },
  { id: 74, singular: "مُشْرِكٌ", dual: "مُشْرِكَانِ", plural: "مُشْرِكُونَ / مُشْرِكِينَ", meaning: "Müşrik: Allah'a ortak koşan kimse" },
  { id: 75, singular: "ظَالِمٌ", dual: "ظَالِمَانِ", plural: "ظَالِمُونَ / ظَلَمَةٌ", meaning: "Zalim: Sınırları çiğneyen, hakkı gasbeden" },
  { id: 76, singular: "فَاسِقٌ", dual: "فَاسِقَانِ", plural: "فَاسِقُونَ / فُسَّاقٌ", meaning: "Fasık: İtaatten çıkıp günaha dalan kimse" },
  { id: 77, singular: "صَالِحٌ", dual: "صَالِحَانِ", plural: "صَالِحُونَ / صُلَحَاءُ", meaning: "Salih: Ameli dine uygun, temiz ve dürüst kul" },
  { id: 78, singular: "صَادِقٌ", dual: "صَادِقَانِ", plural: "صَادِقُونَ / صُدَقَاءُ", meaning: "Sadık: Sözünde ve inancında dosdoğru olan" },
  { id: 79, singular: "صَابِرٌ", dual: "صَابِرَانِ", plural: "صَابِرُونَ", meaning: "Sabırlı / Sâbir: Güçlüklere ve günaha direnen kul" },
  { id: 80, singular: "شَاكِرٌ", dual: "شَاكِرَانِ", plural: "شَاكِرُونَ / شُكَّارٌ", meaning: "Şükreden / Şâkir: Nimetin kadrini bilip hamdeden" },
  { id: 81, singular: "مُحْسِنٌ", dual: "مُحْسِنَانِ", plural: "مُحْسِنُونَ / مُحْسِنِينَ", meaning: "Muhsin: Allah'ı görür gibi ihlasla iyilik eden" },
  { id: 82, singular: "شَهِيدٌ", dual: "شَهِيدَانِ", plural: "شُهَدَاءُ", meaning: "Şehit / Şahit: Hakikate tanıklık eden; canını feda eden" },
  { id: 83, singular: "عَالِمٌ", dual: "عَالِمَانِ", plural: "عُلَمَاءُ", meaning: "Âlim: İlmiyle amel eden, derin kavrayışlı zat" },
  { id: 84, singular: "عَدُوٌّ", dual: "عَدُوَّانِ", plural: "أَعْدَاءٌ", meaning: "Düşman: İnsanın kötülüğünü isteyen hasım; Şeytan" },
  { id: 85, singular: "وَلِيٌّ", dual: "وَلِيَّانِ", plural: "أَوْلِيَاءُ", meaning: "Veli / Dost: Koruyan, yardım eden, takvalı dost" },
  { id: 86, singular: "نَصِيرٌ", dual: "نَصِيرَانِ", plural: "أَنْصَارٌ", meaning: "Nasîr: Zorlukta yardıma koşan destekçi" },
  { id: 87, singular: "سُلْطَانٌ", dual: "سُلْطَانَانِ", plural: "سَلَاطِينُ", meaning: "Sultan: Kesin delil, karşı konulmaz güç" },
  { id: 88, singular: "بَيِّنَةٌ", dual: "بَيِّنَتَانِ", plural: "بَيِّنَاتٌ", meaning: "Beyyine: Şüphe bırakmayan apaçık delil, mucize" },
  { id: 89, singular: "حِكْمَةٌ", dual: "حِكْمَتَانِ", plural: "حِكَمٌ", meaning: "Hikmet: Eşyanın hakikatini bilip yerli yerince davranmak" },
  { id: 90, singular: "كَلِمَةٌ", dual: "كَلِمَتَانِ", plural: "كَلِمَاتٌ / كَلِمٌ", meaning: "Kelime: İlahî irade fermanı, tevhid sözü" },
  { id: 91, singular: "حَدِيثٌ", dual: "حَدِيثَانِ", plural: "أَحَادِيثُ", meaning: "Hadis / Söz: Haber, söz, anlatı, Kur'an kıssası" },
  { id: 92, singular: "مَسْجِدٌ", dual: "مَسْجِدَانِ", plural: "مَسَاجِدُ", meaning: "Mescit: Allah'a secde ve ibadet edilen mabet" },
  { id: 93, singular: "مَدِينَةٌ", dual: "مَدِينَتَانِ", plural: "مُدُنٌ / مَدَائِنُ", meaning: "Medine / Şehir: Nüfusun toplandığı yerleşim yeri" },
  { id: 94, singular: "قَرْيَةٌ", dual: "قَرْيَتَانِ", plural: "قُرًى", meaning: "Karye / Belde: Kasaba, köy, yerleşim merkezi" },
  { id: 95, singular: "دَارٌ", dual: "دَارَانِ", plural: "دِيَارٌ / دُورٌ", meaning: "Yurt / Dâr: Ev, konut, ebedî ahiret konağı" },
  { id: 96, singular: "أُمٌّ", dual: "أُمَّانِ", plural: "أُمَّهَاتٌ", meaning: "Anne / Ümm: Asıl, kaynak, hürmete layık valide" },
  { id: 97, singular: "أَبٌ", dual: "أَبَوَانِ", plural: "آبَاءٌ", meaning: "Baba / Eb: Nesle vesile olan ata, peder" },
  { id: 98, singular: "أَخٌ", dual: "أَخَوَانِ", plural: "إِخْوَةٌ / إِخْوَانٌ", meaning: "Kardeş / Ah: Öz kardeş ve din kardeşi" },
  { id: 99, singular: "أُخْتٌ", dual: "أُخْتَانِ", plural: "أَخَوَاتٌ", meaning: "Kız Kardeş: Nesep bağıyla bağlı kız kardeş" },
  { id: 100, singular: "زَوْجٌ", dual: "زَوْجَانِ", plural: "أَزْوَاجٌ", meaning: "Eş / Zevc: Birbirini tamamlayan eş, hanım veya koca" },
  { id: 101, singular: "بُرْهَانٌ", dual: "بُرْهَانَانِ", plural: "بَرَاهِينُ", meaning: "Burhân: Kesin delil, sarsılmaz hüccet" },
  { id: 102, singular: "حُجَّةٌ", dual: "حُجَّتَانِ", plural: "حُجَجٌ", meaning: "Hüccet: İkna edici kesin kanıt, senet" },
  { id: 103, singular: "مَوْجُودٌ", dual: "مَوْجُودَانِ", plural: "مَوْجُودَاتٌ", meaning: "Mevcûd: Varlık sahasında bulunan, varlık" },
  { id: 104, singular: "مَخْلُوقٌ", dual: "مَخْلُوقَانِ", plural: "مَخْلُوقَاتٌ", meaning: "Mahlûk: Allah'ın yarattığı varlık" },
  { id: 105, singular: "مَصْنُوعٌ", dual: "مَصْنُوعَانِ", plural: "مَصْنُوعَاتٌ", meaning: "Masnû': Sanatla ve hikmetle yaratılmış eser" },
  { id: 106, singular: "أَثَرٌ", dual: "أَثَرَانِ", plural: "آثَارٌ", meaning: "Eser: Sanatın ve kudretin izi, nişanesi" },
  { id: 107, singular: "سِرٌّ", dual: "سِرَّانِ", plural: "أَسْرَارٌ", meaning: "Sır: Gizli hakikat, derin mana ve incelik" },
  { id: 108, singular: "حَقِيقَةٌ", dual: "حَقِيقَتَانِ", plural: "حَقَائِقُ", meaning: "Hakikat: Bir şeyin aslı, değişmez gerçeği" },
  { id: 109, singular: "لَطِيفَةٌ", dual: "لَطِيفَتَانِ", plural: "لَطَائِفُ", meaning: "Latîfe: İnsandaki ince manevî his ve duygu" },
  { id: 110, singular: "مِنَّةٌ", dual: "مِنَّتَانِ", plural: "مِنَنٌ", meaning: "Minnet: Karşılıksız ilahî iyilik ve ihsan" },
  { id: 111, singular: "نُكْتَةٌ", dual: "نُكْتَتَانِ", plural: "نُكَتٌ", meaning: "Nükte: İnce, derin ve hikmetli mana" },
  { id: 112, singular: "إِشَارَةٌ", dual: "إِشَارَتَانِ", plural: "إِشَارَاتٌ", meaning: "İşaret: Gizli veya remizli delalet, gösterme" },
  { id: 113, singular: "لَمْعَةٌ", dual: "لَمْعَتَانِ", plural: "لَمَعَاتٌ", meaning: "Lem'a: Parlayan ışık parıltısı" },
  { id: 114, singular: "شُعَاعٌ", dual: "شُعَاعَانِ", plural: "أَشِعَّةٌ", meaning: "Şuâ': Işık huzmesi, ışın, güneş ziyası" },
  { id: 115, singular: "قَطْرَةٌ", dual: "قَطْرَتَانِ", plural: "قَطَرَاتٌ", meaning: "Katre: Tek bir su damlası" },
  { id: 116, singular: "زَهْرَةٌ", dual: "زَهْرَتَانِ", plural: "أَزْهَارٌ", meaning: "Zehre: Çiçek, parlak güzellik" },
  { id: 117, singular: "نَافِذَةٌ", dual: "نَافِذَتَانِ", plural: "نَوَافِذُ", meaning: "Nâfize: Dışarıya açılan pencere, menfez" },
  { id: 118, singular: "مِرْآةٌ", dual: "مِرْآتَانِ", plural: "مَرَايَا", meaning: "Mir'ât: Ayna, tecelli yansıma mahalli" },
  { id: 119, singular: "مِيزَانٌ", dual: "مِيزَانَانِ", plural: "مَوَازِينُ", meaning: "Mîzân: Ölçü, tartı, hassas denge terazisi" },
  { id: 120, singular: "مِقْيَاسٌ", dual: "مِقْيَاسَانِ", plural: "مَقَايِيسُ", meaning: "Mikyas: Kıyas ölçüsü, ölçüm kıstası" },
  { id: 121, singular: "مَبْدَأٌ", dual: "مَبْدَآنِ", plural: "مَبَادِئُ", meaning: "Mebde': Başlangıç, asıl kaynak, ilk esas" },
  { id: 122, singular: "مُنْتَهَى", dual: "مُنْتَهَيَانِ", plural: "مُنْتَهَيَاتٌ", meaning: "Müntehâ: Varış noktası, son merhale, nihayet" },
  { id: 123, singular: "مَظْهَرٌ", dual: "مَظْهَرَانِ", plural: "مَظَاهِرُ", meaning: "Mazhar: Tecelli yeri, görünme mahalli" },
  { id: 124, singular: "مَوْرِدٌ", dual: "مَوْرِدَانِ", plural: "مَوَارِدُ", meaning: "Mevrid: Ulaşma yeri, feyiz kaynağı, mecra" },
  { id: 125, singular: "مَصْدَرٌ", dual: "مَصْدَرَانِ", plural: "مَصَادِرُ", meaning: "Masdar: Çıkış yeri, köken, menşe" },
  { id: 126, singular: "مَنْبَعٌ", dual: "مَنْبَعَانِ", plural: "مَنَابِعُ", meaning: "Menba': Yerden kaynayan pınar, su gözü" },
  { id: 127, singular: "عُنْوَانٌ", dual: "عُنْوَانَانِ", plural: "عَنَاوِينُ", meaning: "Unvan: Alamet, nişan, hüviyet başlığı" },
  { id: 128, singular: "طَرِيقٌ", dual: "طَرِيقَانِ", plural: "طُرُقٌ", meaning: "Tarîk: Hakikat yolu, manevi seyr yolu" },
  { id: 129, singular: "مَسْلَكٌ", dual: "مَسْلَكَانِ", plural: "مَسَالِكُ", meaning: "Meslek: Benimsenen yöntem, gidilen yol" },
  { id: 130, singular: "مَشْرَبٌ", dual: "مَشْرَبَانِ", plural: "مَشَارِبُ", meaning: "Meşreb: Su içme yeri; manevi mizaç ve neşve" },
  { id: 131, singular: "رَابِطَةٌ", dual: "رَابِطَتَانِ", plural: "رَوَابِطُ", meaning: "Râbıta: Kalbî bağ, irtibat, alaka" },
  { id: 132, singular: "وَسِيلَةٌ", dual: "وَسِيلَتَانِ", plural: "وَسَائِلُ", meaning: "Vesîle: Gayeye ulaştıran vasıta, sebep" },
  { id: 133, singular: "غَايَةٌ", dual: "غَايَتَانِ", plural: "غَايَاتٌ", meaning: "Gâye: Ulaşılmak istenen nihai hedef, maksat" },
  { id: 134, singular: "مَقْصَدٌ", dual: "مَقْصَدَانِ", plural: "مَقَاصِدُ", meaning: "Maksad: Hedeflenen gaye, niyet edilen murat" },
  { id: 135, singular: "نَتِيجَةٌ", dual: "نَتِيجَتَانِ", plural: "نَتَائِجُ", meaning: "Netîce: Sonuç, elde edilen hasılat, semere" },
  { id: 136, singular: "فَائِدَةٌ", dual: "فَائِدَتَانِ", plural: "فَوَائِدُ", meaning: "Fâide: Sağlanan yarar, elde edilen hayır" },
  { id: 137, singular: "حَاجَةٌ", dual: "حَاجَتَانِ", plural: "حَاجَاتٌ", meaning: "Hâcet: İhtiyaç duyulan şey, lüzum" },
  { id: 138, singular: "عَاجِزٌ", dual: "عَاجِزَانِ", plural: "عَاجِزُونَ", meaning: "Âciz: Kendi gücü yetmeyen, kudretsiz kul" },
  { id: 139, singular: "فَقِيرٌ", dual: "فَقِيرَانِ", plural: "فُقَرَاءُ", meaning: "Fakîr: İlahî rahmete muhtaç olan kul" },
  { id: 140, singular: "نِظَامٌ", dual: "نِظَامَانِ", plural: "أَنْظِمَةٌ", meaning: "Nizâm: Düzen, intizam, kâinattaki ahenk" },
  { id: 141, singular: "قَانُونٌ", dual: "قَانُونَانِ", plural: "قَوَانِينُ", meaning: "Kānûn: İlahî adetullah kuralı, nizam ilkesi" },
  { id: 142, singular: "دُسْتُورٌ", dual: "دُسْتُورَانِ", plural: "دَسَاتِيرُ", meaning: "Düstûr: Temel kural, hareket prensibi" },
  { id: 143, singular: "حِجَابٌ", dual: "حِجَابَانِ", plural: "حُجُبٌ", meaning: "Hicâb: Maddî ve manevî perde, engel, örtü" },
  { id: 144, singular: "سَبَبٌ", dual: "سَبَبَانِ", plural: "أَسْبَابٌ", meaning: "Sebeb: Neticeye perde olan vasıta, vesile" },
  { id: 145, singular: "عِلَّةٌ", dual: "عِلَّتَانِ", plural: "عِلَلٌ", meaning: "İllet: Asıl gerekçe, hakiki sebep ve hikmet" },
  { id: 146, singular: "زَوَالٌ", dual: "زَوَالَانِ", plural: "أَزْوِلَةٌ", meaning: "Zevâl: Güneşin batışı, yok oluş, sona erme" },
  { id: 147, singular: "بَقَاءٌ", dual: "بَقَاءَانِ", plural: "بَقَاءَاتٌ", meaning: "Bekā: Ebedilik, kalıcılık, ölümsüz devam" },
  { id: 148, singular: "تَجَلٍّ", dual: "تَجَلِّيَانِ", plural: "تَجَلِّيَاتٌ", meaning: "Tecellî: İlahî isim ve sıfatların görünmesi" },
  { id: 149, singular: "مِثَالٌ", dual: "مِثَالَانِ", plural: "أَمْثِلَةٌ", meaning: "Misâl: Benzer, örnek, temsilî numune" },
  { id: 150, singular: "دَلِيلٌ", dual: "دَلِيلَانِ", plural: "أَدِلَّةٌ", meaning: "Delîl: Hakikate ulaştıran kanıt, rehber" },
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
