try { if (typeof navigator !== 'undefined') { navigator.vibrate = function() { return false; }; } } catch (_) {}
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
  { id: 1, category: "kuran", singular: "رَبٌّ", dual: "رَبَّانِ", plural: "أَرْبَابٌ", meaning: "Rab: Terbiye eden, mutlak mâlik ve rızık veren" },
  { id: 2, category: "kuran", singular: "آيَةٌ", dual: "آيَتَانِ", plural: "آيَاتٌ", meaning: "Âyet: İlahî delil, mucize ve Kur'an cümlesi" },
  { id: 3, category: "kuran", singular: "كِتَابٌ", dual: "كِتَابَانِ", plural: "كُتُبٌ", meaning: "Kitap: Yazılı vahiy, Kur'an ve amel defteri" },
  { id: 4, category: "kuran", singular: "رَسُولٌ", dual: "رَسُولَانِ", plural: "رُسُلٌ", meaning: "Resûl: Kitap ve şeriat getiren ilahî elçi" },
  { id: 5, category: "kuran", singular: "نَبِيٌّ", dual: "نَبِيَّانِ", plural: "أَنْبِيَاءُ / نَبِيُّونَ", meaning: "Nebî: Vahiy ve gayb haberi alan peygamber" },
  { id: 6, category: "kuran", singular: "يَوْمٌ", dual: "يَوْمَانِ", plural: "أَيَّامٌ", meaning: "Yevm: Gün, vakit, kıyamet zamanı" },
  { id: 7, category: "kuran", singular: "سَمَاءٌ", dual: "سَمَاوَانِ", plural: "سَمَاوَاتٌ", meaning: "Semâ: Yüksek gök, semavat" },
  { id: 8, category: "kuran", singular: "أَرْضٌ", dual: "أَرْضَانِ", plural: "أَرَاضٍ / أَرْضُونَ", meaning: "Arz: Yeryüzü, zemin, dünya" },
  { id: 9, category: "kuran", singular: "نَفْسٌ", dual: "نَفْسَانِ", plural: "أَنْفُسٌ / نُفُوسٌ", meaning: "Nefis: İnsanın kendi zâtı, canı, hevesi" },
  { id: 10, category: "kuran", singular: "قَوْمٌ", dual: "قَوْمَانِ", plural: "أَقْوَامٌ", meaning: "Kavim: İnsan topluluğu, halk, millet" },
  { id: 11, category: "kuran", singular: "عَبْدٌ", dual: "عَبْدَانِ", plural: "عِبَادٌ / عَبِيدٌ", meaning: "Kul: Allah'a boyun eğip ibadet eden insan" },
  { id: 12, category: "kuran", singular: "قَلْبٌ", dual: "قَلْبَانِ", plural: "قُلُوبٌ", meaning: "Kalp: Gönül, manevî idrak ve iman merkezi" },
  { id: 13, category: "kuran", singular: "عَذَابٌ", dual: "عَذَابَانِ", plural: "أَعْذِبَةٌ", meaning: "Azap: Şiddetli elem ve ahiret cezası" },
  { id: 14, category: "kuran", singular: "جَنَّةٌ", dual: "جَنَّتَانِ", plural: "جَنَّاتٌ", meaning: "Cennet: Ebedî saadet, huzur ve mükâfat yurdu" },
  { id: 15, category: "kuran", singular: "نَارٌ", dual: "نَارَانِ", plural: "نِيرَانٌ", meaning: "Nâr: Yakıcı ateş, cehennem" },
  { id: 16, category: "kuran", singular: "حَقٌّ", dual: "حَقَّانِ", plural: "حُقُوقٌ", meaning: "Hak: Mutlak gerçek, adalet, sabit doğru" },
  { id: 17, category: "kuran", singular: "سَبِيلٌ", dual: "سَبِيلَانِ", plural: "سُبُلٌ", meaning: "Sebîl: Yol, rızaya ulaştıran hak yol" },
  { id: 18, category: "kuran", singular: "أَمْرٌ", dual: "أَمْرَانِ", plural: "أُمُورٌ / أَوَامِرُ", meaning: "Emir: İlahî buyruk, ferman, hüküm ve iş" },
  { id: 19, category: "kuran", singular: "شَيْءٌ", dual: "شَيْئَانِ", plural: "أَشْيَاءُ", meaning: "Şey: Yaratılmış olan her varlık, nesne" },
  { id: 20, category: "kuran", singular: "مَالٌ", dual: "مَالَانِ", plural: "أَمْوَالٌ", meaning: "Mal: Dünya serveti, mülk, meta" },
  { id: 21, category: "kuran", singular: "وَلَدٌ", dual: "وَلَدَانِ", plural: "أَوْلَادٌ / وِلْدَانٌ", meaning: "Veled: Çocuk, evlat, nesil" },
  { id: 22, category: "kuran", singular: "عِلْمٌ", dual: "عِلْمَانِ", plural: "عُلُومٌ", meaning: "İlim: Kesin bilgi, marifet, hakikat ilmi" },
  { id: 23, category: "kuran", singular: "عَمَلٌ", dual: "عَمَلَانِ", plural: "أَعْمَالٌ", meaning: "Amel: Niyetle yapılan iş, fiil, eylem" },
  { id: 24, category: "kuran", singular: "أَهْلٌ", dual: "أَهْلَانِ", plural: "أَهْلُونَ / أَهَالٍ", meaning: "Ehil: Aile, ev halkı, mensup topluluk" },
  { id: 25, category: "kuran", singular: "بَيْتٌ", dual: "بَيْتَانِ", plural: "بُيُوتٌ / أَبْيَاتٌ", meaning: "Beyt: Ev, mesken; Kâbe-i Muazzama" },
  { id: 26, category: "kuran", singular: "بَابٌ", dual: "بَابَانِ", plural: "أَبْوَابٌ / بِيبَانٌ", meaning: "Kapı: Giriş yeri, sema ve cennet kapıları" },
  { id: 27, category: "kuran", singular: "مَلَكٌ", dual: "مَلَكَانِ", plural: "مَلَائِكَةٌ", meaning: "Melek: Nurdan yaratılmış itaatkâr varlık" },
  { id: 28, category: "kuran", singular: "إِنْسَانٌ", dual: "إِنْسَانَانِ", plural: "نَاسٌ / أَنَاسِيُّ", meaning: "İnsan: Akıl ve irade sahibi beşer" },
  { id: 29, category: "kuran", singular: "دِينٌ", dual: "دِينَانِ", plural: "أَدْيَانٌ", meaning: "Din: İtaat, hesap ve ilahî şeriat nizamı" },
  { id: 30, category: "kuran", singular: "قَوْلٌ", dual: "قَوْلَانِ", plural: "أَقْوَالٌ / أَقَاوِيلُ", meaning: "Söz: Kelam, lafız, hakikat ifadesi" },
  { id: 31, category: "kuran", singular: "يَدٌ", dual: "يَدَانِ", plural: "أَيْدٍ / أَيَادٍ", meaning: "El: Organ olan el; güç ve nimet" },
  { id: 32, category: "kuran", singular: "عَيْنٌ", dual: "عَيْنَانِ", plural: "أَعْيُنٌ / عُيُونٌ", meaning: "Göz / Pınar: Görme organı; su pınarı" },
  { id: 33, category: "kuran", singular: "أُذُنٌ", dual: "أُذُنَانِ", plural: "آذَانٌ", meaning: "Kulak: İşitme ve ibret alma organı" },
  { id: 34, category: "kuran", singular: "لِسَانٌ", dual: "لِسَانَانِ", plural: "أَلْسِنَةٌ", meaning: "Dil / Lisan: Konuşma organı, lisan, lehçe" },
  { id: 35, category: "kuran", singular: "وَجْهٌ", dual: "وَجْهَانِ", plural: "وُجُوهٌ / أَوْجُهٌ", meaning: "Yüz / Vech: Çehre, taraf; ilahî rıza" },
  { id: 36, category: "kuran", singular: "رِجْلٌ", dual: "رِجْلَانِ", plural: "أَرْجُلٌ", meaning: "Ayak: Yürüme ve sebat organı" },
  { id: 37, category: "kuran", singular: "صَدْرٌ", dual: "صَدْرَانِ", plural: "صُدُورٌ", meaning: "Göğüs / Sadr: Kalbin mahalli olan sine, bağır" },
  { id: 38, category: "kuran", singular: "بَصَرٌ", dual: "بَصَرَانِ", plural: "أَبْصَارٌ", meaning: "Basar: Göz nuru, görme ve idrak kabiliyeti" },
  { id: 39, category: "kuran", singular: "سَمْعٌ", dual: "سَمْعَانِ", plural: "أَسْمَاعٌ", meaning: "Sem': İşitme ve hak çağrıyı duyma yetisi" },
  { id: 40, category: "kuran", singular: "رَأْسٌ", dual: "رَأْسَانِ", plural: "رُؤُوسٌ", meaning: "Baş / Re's: Baş, tepe noktası, topluluk lideri" },
  { id: 41, category: "kuran", singular: "شَمْسٌ", dual: "شَمْسَانِ", plural: "شُمُوسٌ", meaning: "Güneş: Âlemi aydınlatan ve ısıtan kandil" },
  { id: 42, category: "kuran", singular: "قَمَرٌ", dual: "قَمَرَانِ", plural: "أَقْمَارٌ", meaning: "Ay / Kamer: Gecenin aydınlığı, zaman ölçüsü" },
  { id: 43, category: "kuran", singular: "نَجْمٌ", dual: "نَجْمَانِ", plural: "نُجُومٌ / أَنْجُمٌ", meaning: "Yıldız: Gökyüzünü süsleyen ışıklı cisim" },
  { id: 44, category: "kuran", singular: "لَيْلٌ", dual: "لَيْلَانِ", plural: "لَيَالٍ", meaning: "Gece: Karanlığın bürüdüğü sükûn vakti" },
  { id: 45, category: "kuran", singular: "نَهَارٌ", dual: "نَهَارَانِ", plural: "أَنْهُرٌ / نُهُرٌ", meaning: "Gündüz: Işıkla aydınlanan çalışma vakti" },
  { id: 46, category: "kuran", singular: "نُورٌ", dual: "نُورَانِ", plural: "أَنْوَارٌ", meaning: "Nur: Karanlıkları dağıtan ilahî aydınlık" },
  { id: 47, category: "kuran", singular: "ظُلْمَةٌ", dual: "ظُلْمَتَانِ", plural: "ظُلُمَاتٌ", meaning: "Karanlık: Maddî karanlık, şirk ve cehalet" },
  { id: 48, category: "kuran", singular: "مَاءٌ", dual: "مَاءَانِ", plural: "مِيَاهٌ / أَمْوَاهٌ", meaning: "Su: Canlılara hayat veren temizleyici nimet" },
  { id: 49, category: "kuran", singular: "رِيحٌ", dual: "رِيحَانِ", plural: "رِيَاحٌ / أَرْيَاحٌ", meaning: "Rüzgar: Bulutları sevk eden yel, esinti" },
  { id: 50, category: "kuran", singular: "بَحْرٌ", dual: "بَحْرَانِ", plural: "بِحَارٌ / أَبْحُرٌ", meaning: "Deniz: Uçsuz bucaksız engin su kütlesi" },
  { id: 51, category: "kuran", singular: "جَبَلٌ", dual: "جَبَلَانِ", plural: "جِبَالٌ", meaning: "Dağ: Yeryüzünü sarsıntıdan koruyan sabit kütle" },
  { id: 52, category: "kuran", singular: "نَهْرٌ", dual: "نَهْرَانِ", plural: "أَنْهَارٌ", meaning: "Nehir: Yatağında akan tatlı su ırmağı" },
  { id: 53, category: "kuran", singular: "شَجَرَةٌ", dual: "شَجَرَتَانِ", plural: "أَشْجَارٌ / شَجَرٌ", meaning: "Ağaç: Kökü yerde dalları gökte bitki" },
  { id: 54, category: "kuran", singular: "ثَمَرَةٌ", dual: "ثَمَرَتَانِ", plural: "ثَمَرَاتٌ / ثَمَرٌ", meaning: "Meyve / Semere: Bitki ürünü; amel hasılatı" },
  { id: 55, category: "kuran", singular: "طَعَامٌ", dual: "طَعَامَانِ", plural: "أَطْعِمَةٌ", meaning: "Yiyecek / Taâm: İnsanın beslendiği gıda ve rızık" },
  { id: 56, category: "kuran", singular: "مَوْتٌ", dual: "مَوْتَانِ", plural: "أَمْوَاتٌ", meaning: "Ölüm: Ruhun bedenden ayrılıp ahirete göçmesi" },
  { id: 57, category: "kuran", singular: "حَيَاةٌ", dual: "حَيَاتَانِ", plural: "حَيَوَاتٌ", meaning: "Hayat: Canlılık, dirilik, hakiki varoluş" },
  { id: 58, category: "kuran", singular: "دُنْيَا", dual: "دُنْيَيَانِ", plural: "دُنًى", meaning: "Dünya: Fani, geçici ilk hayat sahnesi" },
  { id: 59, category: "kuran", singular: "آخِرَةٌ", dual: "آخِرَتَانِ", plural: "آخِرَاتٌ", meaning: "Ahiret: Dünyadan sonraki ebedî hesap yurdu" },
  { id: 60, category: "kuran", singular: "سَاعَةٌ", dual: "سَاعَتَانِ", plural: "سَاعَاتٌ", meaning: "Kıyamet Vakti / Saat: Kâinatın altüst olacağı dehşetli an" },
  { id: 61, category: "kuran", singular: "أَجْرٌ", dual: "أَجْرَانِ", plural: "أُجُورٌ", meaning: "Ecir / Mükâfat: Salih amellere verilen sevap" },
  { id: 62, category: "kuran", singular: "فَضْلٌ", dual: "فَضْلَانِ", plural: "فُضُولٌ / أَفْضَالٌ", meaning: "Lütuf / Fazl: İlahî bol ihsan, üstünlük ve bereket" },
  { id: 63, category: "kuran", singular: "رَحْمَةٌ", dual: "رَحْمَتَانِ", plural: "رَحَمَاتٌ", meaning: "Rahmet: Her şeyi kuşatan ilahî merhamet" },
  { id: 64, category: "kuran", singular: "نِعْمَةٌ", dual: "نِعْمَتَانِ", plural: "نِعَمٌ / أَنْعُمٌ", meaning: "Nimet: Maddî ve manevî ilahî bağış, sıhhat" },
  { id: 65, category: "kuran", singular: "حَسَنَةٌ", dual: "حَسَنَتَانِ", plural: "حَسَنَاتٌ", meaning: "Hasene: Rızaya uygun güzel amel, iyilik" },
  { id: 66, category: "kuran", singular: "سَيِّئَةٌ", dual: "سَيِّئَتَانِ", plural: "سَيِّئَاتٌ", meaning: "Seyyie: Günah, çirkin fiil, fenalık" },
  { id: 67, category: "kuran", singular: "ذَنْبٌ", dual: "ذَنْبَانِ", plural: "ذُنُوبٌ", meaning: "Günah / Zenb: Kişiyi sorumlu kılan vebal ve isyan" },
  { id: 68, category: "kuran", singular: "خَطِيئَةٌ", dual: "خَطِيئَتَانِ", plural: "خَطَايَا / خَطِيئَاتٌ", meaning: "Hatîe: Kasten veya gafletle işlenen ağır günah" },
  { id: 69, category: "kuran", singular: "ظُلْمٌ", dual: "ظُلْمَانِ", plural: "مَظَالِمُ", meaning: "Zulüm: Haddi aşmak, haksızlık, şirk" },
  { id: 70, category: "kuran", singular: "إِثْمٌ", dual: "إِثْمَانِ", plural: "آثَامٌ", meaning: "İsm: İnsanı hayırdan alıkoyan ağır günah" },
  { id: 71, category: "kuran", singular: "مُؤْمِنٌ", dual: "مُؤْمِنَانِ", plural: "مُؤْمِنُونَ / مُؤْمِنِينَ", meaning: "Mümin: Allah'a ihlasla inanıp güvene eren kul" },
  { id: 72, category: "kuran", singular: "كَافِرٌ", dual: "كَافِرَانِ", plural: "كَافِرُونَ / كُفَّارٌ", meaning: "Kâfir: Hakkı ve nimetleri bile bile inkâr eden" },
  { id: 73, category: "kuran", singular: "مُنَافِقٌ", dual: "مُنَافِقَانِ", plural: "مُنَافِقُونَ / مُنَافِقِينَ", meaning: "Münafık: İçi inkârcı, dışı inanmış ikiyüzlü" },
  { id: 74, category: "kuran", singular: "مُشْرِكٌ", dual: "مُشْرِكَانِ", plural: "مُشْرِكُونَ / مُشْرِكِينَ", meaning: "Müşrik: Allah'a ortak koşan kimse" },
  { id: 75, category: "kuran", singular: "ظَالِمٌ", dual: "ظَالِمَانِ", plural: "ظَالِمُونَ / ظَلَمَةٌ", meaning: "Zalim: Sınırları çiğneyen, hakkı gasbeden" },
  { id: 76, category: "kuran", singular: "فَاسِقٌ", dual: "فَاسِقَانِ", plural: "فَاسِقُونَ / فُسَّاقٌ", meaning: "Fasık: İtaatten çıkıp günaha dalan kimse" },
  { id: 77, category: "kuran", singular: "صَالِحٌ", dual: "صَالِحَانِ", plural: "صَالِحُونَ / صُلَحَاءُ", meaning: "Salih: Ameli dine uygun, temiz ve dürüst kul" },
  { id: 78, category: "kuran", singular: "صَادِقٌ", dual: "صَادِقَانِ", plural: "صَادِقُونَ / صُدَقَاءُ", meaning: "Sadık: Sözünde ve inancında dosdoğru olan" },
  { id: 79, category: "kuran", singular: "صَابِرٌ", dual: "صَابِرَانِ", plural: "صَابِرُونَ", meaning: "Sabırlı / Sâbir: Güçlüklere ve günaha direnen kul" },
  { id: 80, category: "kuran", singular: "شَاكِرٌ", dual: "شَاكِرَانِ", plural: "شَاكِرُونَ / شُكَّارٌ", meaning: "Şükreden / Şâkir: Nimetin kadrini bilip hamdeden" },
  { id: 81, category: "kuran", singular: "مُحْسِنٌ", dual: "مُحْسِنَانِ", plural: "مُحْسِنُونَ / مُحْسِنِينَ", meaning: "Muhsin: Allah'ı görür gibi ihlasla iyilik eden" },
  { id: 82, category: "kuran", singular: "شَهِيدٌ", dual: "شَهِيدَانِ", plural: "شُهَدَاءُ", meaning: "Şehit / Şahit: Hakikate tanıklık eden; canını feda eden" },
  { id: 83, category: "kuran", singular: "عَالِمٌ", dual: "عَالِمَانِ", plural: "عُلَمَاءُ", meaning: "Âlim: İlmiyle amel eden, derin kavrayışlı zat" },
  { id: 84, category: "kuran", singular: "عَدُوٌّ", dual: "عَدُوَّانِ", plural: "أَعْدَاءٌ", meaning: "Düşman: İnsanın kötülüğünü isteyen hasım; Şeytan" },
  { id: 85, category: "kuran", singular: "وَلِيٌّ", dual: "وَلِيَّانِ", plural: "أَوْلِيَاءُ", meaning: "Veli / Dost: Koruyan, yardım eden, takvalı dost" },
  { id: 86, category: "kuran", singular: "نَصِيرٌ", dual: "نَصِيرَانِ", plural: "أَنْصَارٌ", meaning: "Nasîr: Zorlukta yardıma koşan destekçi" },
  { id: 87, category: "kuran", singular: "سُلْطَانٌ", dual: "سُلْطَانَانِ", plural: "سَلَاطِينُ", meaning: "Sultan: Kesin delil, karşı konulmaz güç" },
  { id: 88, category: "kuran", singular: "بَيِّنَةٌ", dual: "بَيِّنَتَانِ", plural: "بَيِّنَاتٌ", meaning: "Beyyine: Şüphe bırakmayan apaçık delil, mucize" },
  { id: 89, category: "kuran", singular: "حِكْمَةٌ", dual: "حِكْمَتَانِ", plural: "حِكَمٌ", meaning: "Hikmet: Eşyanın hakikatini bilip yerli yerince davranmak" },
  { id: 90, category: "kuran", singular: "كَلِمَةٌ", dual: "كَلِمَتَانِ", plural: "كَلِمَاتٌ / كَلِمٌ", meaning: "Kelime: İlahî irade fermanı, tevhid sözü" },
  { id: 91, category: "kuran", singular: "حَدِيثٌ", dual: "حَدِيثَانِ", plural: "أَحَادِيثُ", meaning: "Hadis / Söz: Haber, söz, anlatı, Kur'an kıssası" },
  { id: 92, category: "kuran", singular: "مَسْجِدٌ", dual: "مَسْجِدَانِ", plural: "مَسَاجِدُ", meaning: "Mescit: Allah'a secde ve ibadet edilen mabet" },
  { id: 93, category: "kuran", singular: "مَدِينَةٌ", dual: "مَدِينَتَانِ", plural: "مُدُنٌ / مَدَائِنُ", meaning: "Medine / Şehir: Nüfusun toplandığı yerleşim yeri" },
  { id: 94, category: "kuran", singular: "قَرْيَةٌ", dual: "قَرْيَتَانِ", plural: "قُرًى", meaning: "Karye / Belde: Kasaba, köy, yerleşim merkezi" },
  { id: 95, category: "kuran", singular: "دَارٌ", dual: "دَارَانِ", plural: "دِيَارٌ / دُورٌ", meaning: "Yurt / Dâr: Ev, konut, ebedî ahiret konağı" },
  { id: 96, category: "kuran", singular: "أُمٌّ", dual: "أُمَّانِ", plural: "أُمَّهَاتٌ", meaning: "Anne / Ümm: Asıl, kaynak, hürmete layık valide" },
  { id: 97, category: "kuran", singular: "أَبٌ", dual: "أَبَوَانِ", plural: "آبَاءٌ", meaning: "Baba / Eb: Nesle vesile olan ata, peder" },
  { id: 98, category: "kuran", singular: "أَخٌ", dual: "أَخَوَانِ", plural: "إِخْوَةٌ / إِخْوَانٌ", meaning: "Kardeş / Ah: Öz kardeş ve din kardeşi" },
  { id: 99, category: "kuran", singular: "أُخْتٌ", dual: "أُخْتَانِ", plural: "أَخَوَاتٌ", meaning: "Kız Kardeş: Nesep bağıyla bağlı kız kardeş" },
  { id: 100, category: "kuran", singular: "زَوْجٌ", dual: "زَوْجَانِ", plural: "أَزْوَاجٌ", meaning: "Eş / Zevc: Birbirini tamamlayan eş, hanım veya koca" },
  { id: 101, category: "kuran", singular: "غَيْبٌ", dual: "غَيْبَانِ", plural: "غُيُوبٌ", meaning: "Gayb: Duyu ötesi, gizli olan ilahî hakikat" },
  { id: 102, category: "kuran", singular: "شَهَادَةٌ", dual: "شَهَادَتَانِ", plural: "شَهَادَاتٌ", meaning: "Şehadet: Gözle görünen mülk âlemi, tanıklık" },
  { id: 103, category: "kuran", singular: "خَلْقٌ", dual: "خَلْقَانِ", plural: "أَخْلَاقٌ", meaning: "Halk: Yoktan var etme, yaratılış ve hilkat" },
  { id: 104, category: "kuran", singular: "ظِلٌّ", dual: "ظِلِّانِ", plural: "ظِلَالٌ / أَظْلَالٌ", meaning: "Gölge: Güneşten koruyan sığınak, himaye" },
  { id: 105, category: "kuran", singular: "حَرُورٌ", dual: "حَرُورَانِ", plural: "حَرَائِرُ", meaning: "Harûr: Kavurucu sıcak rüzgâr, şiddetli hararet" },
  { id: 106, category: "kuran", singular: "كَوْكَبٌ", dual: "كَوْكَبَانِ", plural: "كَوَاكِبُ", meaning: "Kevkeb: Parlak yıldız, gök cismi" },
  { id: 107, category: "kuran", singular: "فُلْكٌ", dual: "فُلْكَانِ", plural: "أَفْلَاكٌ", meaning: "Fülk: Denizde yüzen büyük gemi" },
  { id: 108, category: "kuran", singular: "جُنْدٌ", dual: "جُنْدَانِ", plural: "أَجْنَادٌ / جُنُودٌ", meaning: "Cünd: Asker, ilahî ordu ve yardımcı kuvvet" },
  { id: 109, category: "kuran", singular: "حِزْبٌ", dual: "حِزْبَانِ", plural: "أَحْزَابٌ", meaning: "Hizb: Hak veya batıl taraftarı olan topluluk" },
  { id: 110, category: "kuran", singular: "فِرْقَةٌ", dual: "فِرْقَتَانِ", plural: "فِرَقٌ", meaning: "Fırka: İnsan grubu, ayrılan zümre" },
  { id: 111, category: "kuran", singular: "طَائِفَةٌ", dual: "طَائِفَتَانِ", plural: "طَوَائِفُ", meaning: "Tâife: Bir cemaat, zümre, insan topluluğu" },
  { id: 112, category: "kuran", singular: "أُمَّةٌ", dual: "أُمَّتَانِ", plural: "أُمَمٌ", meaning: "Ümmet: Bir peygambere tâbi olan topluluk" },
  { id: 113, category: "kuran", singular: "ذُرِّيَّةٌ", dual: "ذُرِّيَّتَانِ", plural: "ذُرِّيَّاتٌ", meaning: "Zürriyet: Soy sop, nesil, evlatlar" },
  { id: 114, category: "kuran", singular: "أَجَلٌ", dual: "أَجَلَانِ", plural: "آجَالٌ", meaning: "Ecel: Tayin edilmiş ömür sonu, vakit" },
  { id: 115, category: "kuran", singular: "رِزْقٌ", dual: "رِزْقَانِ", plural: "أَرْزَاقٌ", meaning: "Rızık: Canlıya bahşedilen maddi ve manevi gıda" },
  { id: 116, category: "kuran", singular: "مَعَاشٌ", dual: "مَعَاشَانِ", plural: "مَعَايِشُ", meaning: "Meâş: Hayat dirlik sebebi, geçim vasıtası" },
  { id: 117, category: "kuran", singular: "مِشْكَاةٌ", dual: "مِشْكَاةَانِ", plural: "مَشَاكٍ", meaning: "Mişkât: Kandil yuvası, ışık veren oyuk" },
  { id: 118, category: "kuran", singular: "زُجَاجَةٌ", dual: "زُجَاجَتَانِ", plural: "زُجَاجَاتٌ", meaning: "Zücâce: Sırça kandil, berrak billur cam" },
  { id: 119, category: "kuran", singular: "حِلْيَةٌ", dual: "حِلْيَتَانِ", plural: "حُلِيٌّ", meaning: "Hilye: Süs eşyası, ziynet, güzel vasıflar" },
  { id: 120, category: "kuran", singular: "لِبَاسٌ", dual: "لِبَاسَانِ", plural: "أَلْبِسَةٌ / لُبُسٌ", meaning: "Libas: Örtünme giysisi; takva ve hayâ örtüsü" },
  { id: 121, category: "kuran", singular: "سُنْدُسٌ", dual: "سُنْدُسَانِ", plural: "سَنَادِسُ", meaning: "Sündüs: Cennet ehlinin ince ipekten elbisesi" },
  { id: 122, category: "kuran", singular: "إِسْتَبْرَقٌ", dual: "إِسْتَبْرَقَانِ", plural: "أَسَابِرِقُ", meaning: "İstebrak: Cennet ehlinin kalın ve parlak ipeği" },
  { id: 123, category: "kuran", singular: "وِزْرٌ", dual: "وِزْرَانِ", plural: "أَوْزَارٌ", meaning: "Vizr: Ağır günah yükü, mesuliyet" },
  { id: 124, category: "kuran", singular: "إِصْرٌ", dual: "إِصْرَانِ", plural: "آصَارٌ", meaning: "İsr: Ağır yük, bağlayıcı ahit ve külfet" },
  { id: 125, category: "kuran", singular: "أَغْلَالٌ", dual: "غُلَّانِ", plural: "أَغْلَالٌ", meaning: "Ağlâl: Boyunlara vurulan bukağılar, tasmalar" },
  { id: 126, category: "kuran", singular: "سَلَاسِلُ", dual: "سِلْسِلَتَانِ", plural: "سَلَاسِلُ", meaning: "Selâsil: Cehennem ehlinin bağlandığı zincirler" },
  { id: 127, category: "kuran", singular: "جَحِيمٌ", dual: "جَحِيمَانِ", plural: "جُحُمٌ", meaning: "Cahîm: Şiddetle alevlenen, yakıcı derin ateş" },
  { id: 128, category: "kuran", singular: "سَقَرٌ", dual: "سَقَرَانِ", plural: "أَسْقَارٌ", meaning: "Sekar: Yakıp kavuran cehennem tabakası" },
  { id: 129, category: "kuran", singular: "زَمْهَرِيرٌ", dual: "زَمْهَرِيرَانِ", plural: "زَمَاهِرُ", meaning: "Zemherîr: Dondurucu soğuk azap yeri" },
  { id: 130, category: "kuran", singular: "زَقُّومٌ", dual: "زَقُّومَانِ", plural: "زَقَاقِيمُ", meaning: "Zakkum: Cehennemin dibinde biten acı ağaç" },
  { id: 131, category: "kuran", singular: "غِسْلِينٌ", dual: "غِسْلِينَانِ", plural: "أَغْسِلَةٌ", meaning: "Gıslîn: Cehennem ehlinin aktığı cerahatli içecek" },
  { id: 132, category: "kuran", singular: "حَمِيمٌ", dual: "حَمِيمَانِ", plural: "أَحِمَّاءُ", meaning: "Hamîm: Kaynar sıcak su; yakın dost" },
  { id: 133, category: "kuran", singular: "سَلْوَى", dual: "سَلْوَيَانِ", plural: "سَلْوَاتٌ", meaning: "Selvâ: İlahî ikram olan bıldırcın eti" },
  { id: 134, category: "kuran", singular: "مَنٌّ", dual: "مَنَّانِ", plural: "مِنَانٌ", meaning: "Menn: Zahmetsizce lütfedilen ilahî kudret helvası" },
  { id: 135, category: "kuran", singular: "عَسَلٌ", dual: "عَسَلَانِ", plural: "أَعْسَالٌ", meaning: "Asel: Şifalı saf bal nimeti" },
  { id: 136, category: "kuran", singular: "لَبَنٌ", dual: "لَبَنَانِ", plural: "أَلْبَانٌ", meaning: "Leben: Saf ve besleyici temiz süt" },
  { id: 137, category: "kuran", singular: "طِفْلٌ", dual: "طِفْلَانِ", plural: "أَطْفَالٌ", meaning: "Tıfl: Küçük çocuk, sabi" },
  { id: 138, category: "kuran", singular: "شَيْخٌ", dual: "شَيْخَانِ", plural: "شُيُوخٌ / أَشْيَاخٌ", meaning: "Şeyh: İhtiyar kimse; ilim ve maneviyat reisi" },
  { id: 139, category: "kuran", singular: "رَكْعَةٌ", dual: "رَكْعَتَانِ", plural: "رَكَعَاتٌ", meaning: "Rek'at: Namazın rükû ve secdeli her bir cüzü" },
  { id: 140, category: "kuran", singular: "سَجْدَةٌ", dual: "سَجْدَتَانِ", plural: "سَجَدَاتٌ", meaning: "Secde: Alnı yere koyup Allah'a boyun eğme" },
  { id: 141, category: "kuran", singular: "مِحْرَابٌ", dual: "مِحْرَابَانِ", plural: "مَحَارِيبُ", meaning: "Mihrâb: İbadet yeri, caminin kıble nişi" },
  { id: 142, category: "kuran", singular: "مِنْبَرٌ", dual: "مِنْبَرَانِ", plural: "مَنَابِرُ", meaning: "Minber: Hutbe irad edilen yüksek basamaklı kürsü" },
  { id: 143, category: "kuran", singular: "مَسْجِدٌ", dual: "مَسْجِدَانِ", plural: "مَسَاجِدُ", meaning: "Mescid: Secde edilen mübarek ibadethane" },
  { id: 144, category: "kuran", singular: "فُرْقَانٌ", dual: "فُرْقَانَانِ", plural: "فَرَاقِينُ", meaning: "Furkan: Hak ile batılı ayıran Kur'an" },
  { id: 145, category: "kuran", singular: "بَيِّنَةٌ", dual: "بَيِّنَتَانِ", plural: "بَيِّنَاتٌ", meaning: "Beyyine: Açık delil, kesin şahit ve huccet" },
  { id: 146, category: "kuran", singular: "بَشِيرٌ", dual: "بَشِيرَانِ", plural: "بُشَرَاءُ", meaning: "Beşîr: Cenneti ve ilahî mükafatı müjdeleyen elçi" },
  { id: 147, category: "kuran", singular: "نَذِيرٌ", dual: "نَذِيرَانِ", plural: "نُذُرٌ", meaning: "Nezîr: İlahî azaba karşı uyaran peygamber" },
  { id: 148, category: "kuran", singular: "مِيثَاقٌ", dual: "مِيثَاقَانِ", plural: "مَوَاثِيقُ", meaning: "Mîsâk: Sağlam sözleşme, ezelî ahit" },
  { id: 149, category: "kuran", singular: "حَبْلٌ", dual: "حَبْلَانِ", plural: "حِبَالٌ", meaning: "Habl: Sağlam ip; ilahî bağ ve Kur'an" },
  { id: 150, category: "kuran", singular: "عُرْوَةٌ", dual: "عُرْوَتَانِ", plural: "عُرًى", meaning: "Urve: Sağlam kulp; sarsılmaz iman bağı" },
  { id: 151, category: "hadis", singular: "سُنَّةٌ", dual: "سُنَّتَانِ", plural: "سُنَنٌ", meaning: "Sünnet: Peygamberimizin söz, fiil ve takrirleri" },
  { id: 152, category: "hadis", singular: "حَدِيثٌ", dual: "حَدِيثَانِ", plural: "أَحَادِيثُ", meaning: "Hadis: Peygamber efendimizin mübarek sözü ve haberi" },
  { id: 153, category: "hadis", singular: "إِسْنَادٌ", dual: "إِسْنَادَانِ", plural: "أَسَانِيدُ", meaning: "İsnad: Hadisi nakleden raviler zinciri" },
  { id: 154, category: "hadis", singular: "مَتْنٌ", dual: "مَتْنَانِ", plural: "مُتُونٌ", meaning: "Metin: Hadisin asıl lafız ve ibare kısmı" },
  { id: 155, category: "hadis", singular: "رَاوٍ", dual: "رَاوِيَانِ", plural: "رُوَاةٌ", meaning: "Râvî: Hadis-i şerifi nakleden kimse" },
  { id: 156, category: "hadis", singular: "صِحَّةٌ", dual: "صِحَّتَانِ", plural: "صِحَّاتٌ", meaning: "Sıhhat: Hadisin sahih, sağlam ve kusursuz oluşu" },
  { id: 157, category: "hadis", singular: "ضَعْفٌ", dual: "ضَعْفَانِ", plural: "أَضْعَافٌ", meaning: "Za'f: Hadisin sened veya metnindeki kusur" },
  { id: 158, category: "hadis", singular: "مُتَوَاتِرٌ", dual: "مُتَوَاتِرَانِ", plural: "مُتَوَاتِرَاتٌ", meaning: "Mütevâtir: Yalan üzerine birleşmesi imkansız topluluğun rivayeti" },
  { id: 159, category: "hadis", singular: "مَشْهُورٌ", dual: "مَشْهُورَانِ", plural: "مَشَاهِيرُ", meaning: "Meşhur: Her tabakada en az üç ravisi bulunan hadis" },
  { id: 160, category: "hadis", singular: "عَزِيزٌ", dual: "عَزِيزَانِ", plural: "أَعِزَّاءُ", meaning: "Azîz: Her tabakada en az iki ravisi bulunan hadis" },
  { id: 161, category: "hadis", singular: "غَرِيبٌ", dual: "غَرِيبَانِ", plural: "غُرَبَاءُ", meaning: "Garîb: Senedin herhangi bir yerinde tek kalan rivayet" },
  { id: 162, category: "hadis", singular: "مُرْسَلٌ", dual: "مُرْسَلَانِ", plural: "مُرْسَلَاتٌ", meaning: "Mürsel: Tabiînin sahabi atlayarak doğrudan rivayet ettiği hadis" },
  { id: 163, category: "hadis", singular: "مَوْقُوفٌ", dual: "مَوْقُوفَانِ", plural: "مَوْقُوفَاتٌ", meaning: "Mevkuf: Sahabiye nispet edilen söz ve fiil" },
  { id: 164, category: "hadis", singular: "مَقْطُوعٌ", dual: "مَقْطُوعَانِ", plural: "مَقْطُوعَاتٌ", meaning: "Maktu': Tabiîne nispet edilen söz ve fetva" },
  { id: 165, category: "hadis", singular: "مَوْضُوعٌ", dual: "مَوْضُوعَانِ", plural: "مَوْضُوعَاتٌ", meaning: "Mevzû: Peygamber adına uydurulmuş asılsız rivayet" },
  { id: 166, category: "hadis", singular: "إِجْمَاعٌ", dual: "إِجْمَاعَانِ", plural: "إِجْمَاعَاتٌ", meaning: "İcmâ: İslam müctehidlerinin bir hükümde ittifakı" },
  { id: 167, category: "hadis", singular: "قِيَاسٌ", dual: "قِيَاسَانِ", plural: "أَقْيِسَةٌ", meaning: "Kıyas: Hükmü bilinmeyeni bilinene benzeterek hüküm çıkarma" },
  { id: 168, category: "hadis", singular: "إِجْتِهَادٌ", dual: "إِجْتِهَادَانِ", plural: "إِجْتِهَادَاتٌ", meaning: "İçtihad: Şer'î delillerden hüküm çıkarma gayreti" },
  { id: 169, category: "hadis", singular: "مُجْتَهِدٌ", dual: "مُجْتَهِدَانِ", plural: "مُجْتَهِدُونَ", meaning: "Müctehid: Ayet ve hadisten hüküm çıkarma ehliyetine sahip alim" },
  { id: 170, category: "hadis", singular: "فَتْوَى", dual: "فَتْوَيَانِ", plural: "فَتَاوَى", meaning: "Fetva: Dini mesele hakkında verilen şer'î hüküm" },
  { id: 171, category: "hadis", singular: "مُفْتٍ", dual: "مُفْتِيَانِ", plural: "مُفْتُونَ", meaning: "Müftî: Şeriat hükmünü fetva ile bildiren alim" },
  { id: 172, category: "hadis", singular: "تَقْلِيدٌ", dual: "تَقْلِيدَانِ", plural: "تَقَالِيدُ", meaning: "Taklid: Delilini bilmeden alimin içtihadına uyma" },
  { id: 173, category: "hadis", singular: "مُعَامَلَةٌ", dual: "مُعَامَلَتَانِ", plural: "مُعَامَلَاتٌ", meaning: "Muamele: İnsanlar arası hukuki ve ticari ilişkiler" },
  { id: 174, category: "hadis", singular: "عُقُوبَةٌ", dual: "عُقُوبَتَانِ", plural: "عُقُوبَاتٌ", meaning: "Ukûbet: Şeriatın koyduğu cezai müeyyideler" },
  { id: 175, category: "hadis", singular: "طَهَارَةٌ", dual: "طَهَارَتَانِ", plural: "طَهَارَاتٌ", meaning: "Tahâret: Maddi ve hükmi pisliklerden temizlenme" },
  { id: 176, category: "hadis", singular: "نَجَاسَةٌ", dual: "نَجَاسَتَانِ", plural: "نَجَاسَاتٌ", meaning: "Necâset: Namaza ve ibadete mani olan pislik" },
  { id: 177, category: "hadis", singular: "حَدَثٌ", dual: "حَدَثَانِ", plural: "أَحْدَاثٌ", meaning: "Hades: Abdest veya gusül gerektiren hükmi kirlilik" },
  { id: 178, category: "hadis", singular: "جَنَابَةٌ", dual: "جَنَابَتَانِ", plural: "جَنَابَاتٌ", meaning: "Cenâbet: Gusül abdesti almayı gerektiren hal" },
  { id: 179, category: "hadis", singular: "حَيْضٌ", dual: "حَيْضَانِ", plural: "حُيُوضٌ", meaning: "Hayız: Kadınların muayyen fıtri hali" },
  { id: 180, category: "hadis", singular: "نِفَاسٌ", dual: "نِفَاسَانِ", plural: "أَنْفَاسٌ", meaning: "Nifâs: Doğum sonrası lohusalık dönemi" },
  { id: 181, category: "hadis", singular: "إِسْتِحَاضَةٌ", dual: "إِسْتِحَاضَتَانِ", plural: "إِسْتِحَاضَاتٌ", meaning: "İstihâza: Hastalık ve özür kanaması hali" },
  { id: 182, category: "hadis", singular: "مِسْوَاكٌ", dual: "مِسْوَاكَانِ", plural: "مَسَاوِيكُ", meaning: "Misvak: Diş temizliğinde kullanılan sünnet fırça" },
  { id: 183, category: "hadis", singular: "خِتَانٌ", dual: "خِتَانَانِ", plural: "خِتَانَاتٌ", meaning: "Hitân: Erkek çocukların sünnet edilmesi fıtratı" },
  { id: 184, category: "hadis", singular: "إِسْتِنْجَاءٌ", dual: "إِسْتِنْجَاءَانِ", plural: "إِسْتِنْجَاءَاتٌ", meaning: "İstincâ: Tuvalet sonrası su ile yapılan temizlik" },
  { id: 185, category: "hadis", singular: "إِسْتِبْرَاءٌ", dual: "إِسْتِبْرَاءَانِ", plural: "إِسْتِبْرَاءَاتٌ", meaning: "İstibrâ: İdrar kalıntısından tamamen arınma gayreti" },
  { id: 186, category: "hadis", singular: "سَهْوٌ", dual: "سَهْوَانِ", plural: "سَهَوَاتٌ", meaning: "Sehiv: Namazda dalgınlıkla yapılan yanılma" },
  { id: 187, category: "hadis", singular: "قِيَامٌ", dual: "قِيَامَانِ", plural: "قِيَامَاتٌ", meaning: "Kıyâm: Namazda ayakta durma farzı" },
  { id: 188, category: "hadis", singular: "قِرَاءَةٌ", dual: "قِرَاءَتَانِ", plural: "قِرَاءَاتٌ", meaning: "Kıraat: Namazda Kur'an ayetlerini okuma" },
  { id: 189, category: "hadis", singular: "رُكُوعٌ", dual: "رُكُوعَانِ", plural: "رُكُوعَاتٌ", meaning: "Rükû: Namazda bel büküp secde öncesi eğilme" },
  { id: 190, category: "hadis", singular: "تَشَهُّدٌ", dual: "تَشَهُّدَانِ", plural: "تَشَهُّدَاتٌ", meaning: "Teşehhüd: Namaz oturuşunda Ettehiyyâtü okuma" },
  { id: 191, category: "hadis", singular: "نَافِلَةٌ", dual: "نَافِلَتَانِ", plural: "نَوَافِلُ", meaning: "Nâfile: Farz ve vacip dışındaki faziletli sünnet ibadet" },
  { id: 192, category: "hadis", singular: "رَاتِبَةٌ", dual: "رَاتِبَتَانِ", plural: "رَوَاتِبُ", meaning: "Râtibe: Farz namazların öncesi ve sonrasındaki düzenli sünnetler" },
  { id: 193, category: "hadis", singular: "وِتْرٌ", dual: "وِتْرَانِ", plural: "أَوْتَارٌ", meaning: "Vitir: Gece kılınan tek rek'atlı namaz" },
  { id: 194, category: "hadis", singular: "تَرَاوِيحُ", dual: "تَرْوِيحَتَانِ", plural: "تَرَاوِيحُ", meaning: "Terâvih: Ramazan gecelerinde kılınan sünnet namaz" },
  { id: 195, category: "hadis", singular: "تَهَجُّدٌ", dual: "تَهَجُّدَانِ", plural: "تَهَجُّدَاتٌ", meaning: "Teheccüd: Uykudan uyanıp gece kılınan nafile namaz" },
  { id: 196, category: "hadis", singular: "ضُحَى", dual: "ضُحَيَانِ", plural: "أَضْحَاءٌ", meaning: "Duhâ: Kuşluk vaktinde kılınan nafile namaz" },
  { id: 197, category: "hadis", singular: "كُسُوفٌ", dual: "كُسُوفَانِ", plural: "كُسُوفَاتٌ", meaning: "Kusûf: Güneş tutulması esnasında kılınan namaz" },
  { id: 198, category: "hadis", singular: "خُسُوفٌ", dual: "خُسُوفَانِ", plural: "خُسُوفَاتٌ", meaning: "Husûf: Ay tutulması esnasında kılınan namaz" },
  { id: 199, category: "hadis", singular: "إِسْتِسْقَاءٌ", dual: "إِسْتِسْقَاءَانِ", plural: "إِسْتِسْقَاءَاتٌ", meaning: "İstiskâ: Kuraklıkta yapılan yağmur duası ve namazı" },
  { id: 200, category: "hadis", singular: "خُطْبَةٌ", dual: "خُطْبَتَانِ", plural: "خُطَبٌ", meaning: "Hutbe: Cuma ve bayramlarda minberde irad edilen nasihat" },
  { id: 201, category: "hadis", singular: "عِيدٌ", dual: "عِيدَانِ", plural: "أَعْيَادٌ", meaning: "Îd: Sevinç ve şükür günü olan Ramazan ve Kurban bayramı" },
  { id: 202, category: "hadis", singular: "عُمْرَةٌ", dual: "عُمْرَتَانِ", plural: "عُمَرٌ", meaning: "Umre: Hac mevsimi dışında Beytullah'ı ziyaret" },
  { id: 203, category: "hadis", singular: "طَوَافٌ", dual: "طَوَافَانِ", plural: "طَوَافَاتٌ", meaning: "Tavâf: Kâbe-i Muazzama etrafında yedi defa dönme" },
  { id: 204, category: "hadis", singular: "سَعْيٌ", dual: "سَعْيَانِ", plural: "أَسْعَاءٌ", meaning: "Sa'y: Safa ile Merve tepeleri arasında yedi defa yürüme" },
  { id: 205, category: "hadis", singular: "إِحْرَامٌ", dual: "إِحْرَامَانِ", plural: "إِحْرَامَاتٌ", meaning: "İhrâm: Hac ve umreye başlama niyeti ve beyaz örtüsü" },
  { id: 206, category: "hadis", singular: "تَلْبِيَةٌ", dual: "تَلْبِيَتَانِ", plural: "تَلْبِيَاتٌ", meaning: "Telbiye: Lebbeyk Allahümme lebbeyk diyerek ilahî davete icabet" },
  { id: 207, category: "hadis", singular: "عَرَفَاتٌ", dual: "عَرَفَتَانِ", plural: "عَرَفَاتٌ", meaning: "Arafât: Arefe günü vakfe yapılan mübarek tepe" },
  { id: 208, category: "hadis", singular: "مُزْدَلِفَةٌ", dual: "مُزْدَلِفَتَانِ", plural: "مُزْدَلِفَاتٌ", meaning: "Müzdelife: Arafat ile Mina arasında gece vakfe mahalli" },
  { id: 209, category: "hadis", singular: "مِنًى", dual: "مِنَيَانِ", plural: "أَمْنَاءٌ", meaning: "Minâ: Şeytan taşlanan ve kurban kesilen mübarek vadi" },
  { id: 210, category: "hadis", singular: "جَمْرَةٌ", dual: "جَمْرَتَانِ", plural: "جَمَرَاتٌ", meaning: "Cemre: Mina'da taş atılan taş sütun mahalli" },
  { id: 211, category: "hadis", singular: "هَدْيٌ", dual: "هَدْيَانِ", plural: "هَدَايَا", meaning: "Hedy: Harem-i Şerif'te kesilen kurbanlık hayvan" },
  { id: 212, category: "hadis", singular: "أُضْحِيَّةٌ", dual: "أُضْحِيَّتَانِ", plural: "أَضَاحٍ", meaning: "Udhiyye: Kurban bayramı günlerinde kesilen kurban" },
  { id: 213, category: "hadis", singular: "عَقِيقَةٌ", dual: "عَقِيقَتَانِ", plural: "عَقَائِقُ", meaning: "Akîka: Yeni doğan çocuk için şükür niyetiyle kesilen kurban" },
  { id: 214, category: "hadis", singular: "نِكَاحٌ", dual: "نِكَاحَانِ", plural: "أَنْكِحَةٌ", meaning: "Nikâh: Karı koca arasında akdedilen meşru evlilik bağı" },
  { id: 215, category: "hadis", singular: "طَلَاقٌ", dual: "طَلَاقَانِ", plural: "طَلَاقَاتٌ", meaning: "Talâk: Evlilik akdinin şer'î usulle sona erdirilmesi" },
  { id: 216, category: "hadis", singular: "مَهْرٌ", dual: "مَهْرَانِ", plural: "مُهُورٌ", meaning: "Mehir: Erkeğin evlenirken hanımına vermesi gereken mal" },
  { id: 217, category: "hadis", singular: "خُلْعٌ", dual: "خُلْعَانِ", plural: "أَخْلَاعٌ", meaning: "Hul': Kadının bedel vererek boşanmayı talep etmesi" },
  { id: 218, category: "hadis", singular: "عِدَّةٌ", dual: "عِدَّتَانِ", plural: "عِدَدٌ", meaning: "İddet: Boşanan veya eşi vefat eden kadının bekleme süresi" },
  { id: 219, category: "hadis", singular: "رَضَاعٌ", dual: "رَضَاعَانِ", plural: "أَرْضَاعٌ", meaning: "Radâ': Süt emzirme ve oluşan süt akrabalığı" },
  { id: 220, category: "hadis", singular: "مِيرَاثٌ", dual: "مِيرَاثَانِ", plural: "مَوَارِيثُ", meaning: "Miras: Vefat eden kimseden varislerine kalan tereke" },
  { id: 221, category: "hadis", singular: "فَرِيضَةٌ", dual: "فَرِيضَتَانِ", plural: "فَرَائِضُ", meaning: "Ferâiz: Şeriatın belirlediği farz miras payları" },
  { id: 222, category: "hadis", singular: "وَصِيَّةٌ", dual: "وَصِيَّتَانِ", plural: "وَصَايَا", meaning: "Vasiyet: Vefat sonrasına yönelik meşru mal tasarrufu" },
  { id: 223, category: "hadis", singular: "بَيْعٌ", dual: "بَيْعَانِ", plural: "بُيُوعٌ", meaning: "Bey': Malın başka bir mülkle karşılıklı satımı" },
  { id: 224, category: "hadis", singular: "شِرَاءٌ", dual: "شِرَاءَانِ", plural: "أَشْرِيَةٌ", meaning: "Şirâ': Mal satın alma ve mülk edinme akdi" },
  { id: 225, category: "hadis", singular: "رِبًا", dual: "رِبَوَانِ", plural: "أَرْبَاءٌ", meaning: "Ribâ: Haksız kazanç ve haram kılınan faiz fazlalığı" },
  { id: 226, category: "hadis", singular: "تِجَارَةٌ", dual: "تِجَارَتَانِ", plural: "تِجَارَاتٌ", meaning: "Ticâret: Kâr amacıyla mal alıp satma faaliyeti" },
  { id: 227, category: "hadis", singular: "قَرْضٌ", dual: "قَرْضَانِ", plural: "قُرُوضٌ", meaning: "Karz: İhtiyaç sahibine karşılıksız verilen borç" },
  { id: 228, category: "hadis", singular: "رَهْنٌ", dual: "رَهْنَانِ", plural: "رُهُونٌ", meaning: "Rehin: Borca karşılık teminat olarak tutulan mal" },
  { id: 229, category: "hadis", singular: "وَدِيعَةٌ", dual: "وَدِيعَتَانِ", plural: "وَدَائِعُ", meaning: "Vedîa: Korunması için başkasına bırakılan emanet" },
  { id: 230, category: "hadis", singular: "شَرِكَةٌ", dual: "شَرِكَتَانِ", plural: "شَرِكَاتٌ", meaning: "Şirket: İki veya daha fazla kişinin ortaklığı" },
  { id: 231, category: "hadis", singular: "وَكَالَةٌ", dual: "وَكَالَتَانِ", plural: "وَكَالَاتٌ", meaning: "Vekâlet: Başkasını kendi yerine yetkili kılma" },
  { id: 232, category: "hadis", singular: "قَضَاءٌ", dual: "قَضَاءَانِ", plural: "أَقْضِيَةٌ", meaning: "Kazâ: Hâkimin anlaşmazlıkları hükme bağlaması; geciken ibadeti eda" },
  { id: 233, category: "hadis", singular: "حُكْمٌ", dual: "حُكْمَانِ", plural: "أَحْكَامٌ", meaning: "Hüküm: Şeriatın emir, yasak ve serbestlik kararı" },
  { id: 234, category: "hadis", singular: "شَاهِدٌ", dual: "شَاهِدَانِ", plural: "شُهُودٌ / أَشْهَادٌ", meaning: "Şâhid: Bir olayı bizzat görüp mahkemede beyan eden" },
  { id: 235, category: "hadis", singular: "يَمِينٌ", dual: "يَمِينَانِ", plural: "أَيْمَانٌ", meaning: "Yemîn: Allah adına yapılan kasem ve ant" },
  { id: 236, category: "hadis", singular: "حَدٌّ", dual: "حَدَّانِ", plural: "حُدُودٌ", meaning: "Hadd: Şeriatın koyduğu kesin cezai müeyyideler" },
  { id: 237, category: "hadis", singular: "قِصَاصٌ", dual: "قِصَاصَانِ", plural: "أَقْصِصَةٌ", meaning: "Kısâs: Cana can, göze göz denk adalet cezası" },
  { id: 238, category: "hadis", singular: "دِيَةٌ", dual: "دِيَتَانِ", plural: "دِيَاتٌ", meaning: "Diyet: Haksız öldürme ve yaralamada ödenen kan bedeli" },
  { id: 239, category: "hadis", singular: "صُلْحٌ", dual: "صُلْحَانِ", plural: "أَصْلَاحٌ", meaning: "Sulh: Taraflar arasındaki anlaşmazlığı barışla çözme" },
  { id: 240, category: "hadis", singular: "هِجْرَةٌ", dual: "هِجْرَتَانِ", plural: "هِجْرَاتٌ", meaning: "Hicret: Dini yaşamak için Mekke'den Medine'ye göç" },
  { id: 241, category: "hadis", singular: "مُهَاجِرٌ", dual: "مُهَاجِرَانِ", plural: "مُهَاجِرُونَ", meaning: "Muhâcir: Dini uğruna yurdunu terk eden sahabi" },
  { id: 242, category: "hadis", singular: "أَنْصَارِيٌّ", dual: "أَنْصَارِيَّانِ", plural: "أَنْصَارٌ", meaning: "Ensâr: Medine'de muhacirleri bağrına basan yardımcılar" },
  { id: 243, category: "hadis", singular: "غَزْوَةٌ", dual: "غَزْوَتَانِ", plural: "غَزَوَاتٌ", meaning: "Gazve: Peygamber efendimizin bizzat katıldığı sefer" },
  { id: 244, category: "hadis", singular: "سَرِيَّةٌ", dual: "سَرِيَّتَانِ", plural: "سَرَايَا", meaning: "Seriyye: Peygamberimizin görevlendirdiği öncü askeri birlik" },
  { id: 245, category: "hadis", singular: "صَحَابِيٌّ", dual: "صَحَابِيَّانِ", plural: "صَحَابَةٌ", meaning: "Sahâbî: Peygamberimizi görüp imanla vefat eden kutlu nesil" },
  { id: 246, category: "hadis", singular: "تَابِعِيٌّ", dual: "تَابِعِيَّانِ", plural: "تَابِعُونَ", meaning: "Tâbiî: Sahabeyi görüp onlardan ilim alan nesil" },
  { id: 247, category: "hadis", singular: "خَلِيفَةٌ", dual: "خَلِيفَتَانِ", plural: "خُلَفَاءُ", meaning: "Halîfe: Peygamberimizin ardından ümmeti yöneten devlet reisi" },
  { id: 248, category: "hadis", singular: "إِمَامٌ", dual: "إِمَامَانِ", plural: "أَئِمَّةٌ", meaning: "İmâm: Namazda öne geçen; ümmetin manevi rehberi" },
  { id: 249, category: "hadis", singular: "أَذَانٌ", dual: "أَذَانَانِ", plural: "آذَانٌ", meaning: "Ezan: Namaz vaktini bildiren ilahî çağrı" },
  { id: 250, category: "hadis", singular: "إِقَامَةٌ", dual: "إِقَامَتَانِ", plural: "إِقَامَاتٌ", meaning: "Kāmet: Farz namaza başlamadan önce okunan çağrı" },
  { id: 251, category: "hadis", singular: "وُضُوءٌ", dual: "وُضُوءَانِ", plural: "أَوْضِئَةٌ", meaning: "Vudû: Namaz için el, yüz ve ayakları yıkama" },
  { id: 252, category: "hadis", singular: "غُسْلٌ", dual: "غُسْلَانِ", plural: "أَغْسَالٌ", meaning: "Gusül: Bütün vücudu tepeden tırnağa yıkama" },
  { id: 253, category: "hadis", singular: "تَيَمُّمٌ", dual: "تَيَمُّمَانِ", plural: "تَيَمُّمَاتٌ", meaning: "Teyemmüm: Su bulunmadığında temiz toprakla niyetlenme" },
  { id: 254, category: "hadis", singular: "قِبْلَةٌ", dual: "قِبْلَتَانِ", plural: "قِبَلٌ", meaning: "Kıble: Namaz kılarken yönelinen Kâbe istikameti" },
  { id: 255, category: "hadis", singular: "كَعْبَةٌ", dual: "كَعْبَتَانِ", plural: "كِعَابٌ", meaning: "Kâbe: Yeryüzündeki ilk tevhid mabedi, Beytullah" },
  { id: 256, category: "hadis", singular: "سِيَادَةٌ", dual: "سِيَادَتَانِ", plural: "سِيَادَاتٌ", meaning: "Siyâdet: Efendilik, liderlik ve yüksek şeref" },
  { id: 257, category: "hadis", singular: "شَرَفٌ", dual: "شَرَفَانِ", plural: "أَشْرَافٌ", meaning: "Şeref: Yüksek ahlak ve soy asaleti" },
  { id: 258, category: "hadis", singular: "مُرُوءَةٌ", dual: "مُرُوءَتَانِ", plural: "مُرُوءَاتٌ", meaning: "Mürüvvet: İnsaniyet, cömertlik ve asil yiğitlik" },
  { id: 259, category: "hadis", singular: "فُتُوَّةٌ", dual: "فُتُوَّتَانِ", plural: "فُتُوَّاتٌ", meaning: "Fütüvvet: Gençlik mertliği, diğerkamlık ve fedakarlık" },
  { id: 260, category: "hadis", singular: "نَخْوَةٌ", dual: "نَخْوَتَانِ", plural: "نَخَوَاتٌ", meaning: "Nahvet: Asalet gayreti ve gurur" },
  { id: 261, category: "hadis", singular: "حَمِيَّةٌ", dual: "حَمِيَّتَانِ", plural: "حَمِيَّاتٌ", meaning: "Hamiyyet: Hak uğruna koruma gayreti, gayretkeşlik" },
  { id: 262, category: "hadis", singular: "غَيْرَةٌ", dual: "غَيْرَتَانِ", plural: "غَيَرَاتٌ", meaning: "Gayret: Mukaddesatı koruma kıskançlığı ve duyarlılığı" },
  { id: 263, category: "hadis", singular: "حِلْفٌ", dual: "حِلْفَانِ", plural: "أَحْلَافٌ", meaning: "Hılf: Mazluma yardım için yapılan dostluk yemini" },
  { id: 264, category: "hadis", singular: "جِوَارٌ", dual: "جِوَارَانِ", plural: "أَجْوِرَةٌ", meaning: "Civâr: Komşuluk hakkı ve himaye sığınağı" },
  { id: 265, category: "hadis", singular: "جَارٌ", dual: "جَارَانِ", plural: "جِيرَانٌ", meaning: "Câr: Yan yana yaşayan komşu, hami" },
  { id: 266, category: "hadis", singular: "ضَيْفٌ", dual: "ضَيْفَانِ", plural: "ضُيُوفٌ / أَضْيَافٌ", meaning: "Dayf: Eve gelen misafir ve konuk" },
  { id: 267, category: "hadis", singular: "قِرًى", dual: "قِرَيَانِ", plural: "أَقْرَاءٌ", meaning: "Kırâ: Misafire ikram edilen yemek ve ağırlama" },
  { id: 268, category: "hadis", singular: "مَأْدُبَةٌ", dual: "مَأْدُبَتَانِ", plural: "مَآدِبُ", meaning: "Me'dube: İnsanları toplayıp ziyafet verilen sofra" },
  { id: 269, category: "hadis", singular: "وَلِيمَةٌ", dual: "وَلِيمَتَانِ", plural: "وَلَائِمُ", meaning: "Velîme: Düğün münasebetiyle verilen sünnet ziyafeti" },
  { id: 270, category: "hadis", singular: "عَقِيقٌ", dual: "عَقِيقَانِ", plural: "أَعِقَّةٌ", meaning: "Akîk: Kırmızı renkli kıymetli akik taşı" },
  { id: 271, category: "hadis", singular: "خَاتَمٌ", dual: "خَاتَمَانِ", plural: "خَوَاتِمُ", meaning: "Hâtem: Parmakta taşınan mühürlü gümüş yüzük" },
  { id: 272, category: "hadis", singular: "نَعْلٌ", dual: "نَعْلَانِ", plural: "نِعَالٌ", meaning: "Na'l: Ayaklara giyilen sandalet ve ayakkabı" },
  { id: 273, category: "hadis", singular: "رِدَاءٌ", dual: "رِدَاءَانِ", plural: "أَرْدِيَةٌ", meaning: "Ridâ: Omuzlara ve bedenin üstüne sarılan örtü" },
  { id: 274, category: "hadis", singular: "إِزَارٌ", dual: "إِزَارَانِ", plural: "أُزُرٌ", meaning: "İzâr: Bedenin alt kısmına sarılan peştamal" },
  { id: 275, category: "hadis", singular: "عِمَامَةٌ", dual: "عِمَامَتَانِ", plural: "عَمَائِمُ", meaning: "İmâme: Başın üzerine sarılan sünnet sarık" },
  { id: 276, category: "hadis", singular: "قَلَنْسُوَةٌ", dual: "قَلَنْسُوَّتَانِ", plural: "قَلَانِسُ", meaning: "Kalensüve: Sarığın altına giyilen takke" },
  { id: 277, category: "hadis", singular: "جُبَّةٌ", dual: "جُبَّتَانِ", plural: "جُبَبٌ", meaning: "Cübbe: Elbiselerin üzerine giyilen geniş kaftan" },
  { id: 278, category: "hadis", singular: "عَبَاءَةٌ", dual: "عَبَاءَتَانِ", plural: "أَعْبِيَةٌ", meaning: "Abâye: Yünden dokunmuş üstlük pelerin" },
  { id: 279, category: "hadis", singular: "بُرْدَةٌ", dual: "بُرْدَتَانِ", plural: "بُرَدٌ", meaning: "Bürde: Çizgili yün hırka ve örtü" },
  { id: 280, category: "hadis", singular: "شَمْلَةٌ", dual: "شَمْلَتَانِ", plural: "شِمَالٌ", meaning: "Şemle: Başa veya omuza alınan küçük örtü" },
  { id: 281, category: "hadis", singular: "طَيْلَسَانٌ", dual: "طَيْلَسَانَانِ", plural: "طَيَالِسَةٌ", meaning: "Taylesân: Omuzlara dökülen şal ve cübbe yakası" },
  { id: 282, category: "hadis", singular: "سِوَاكٌ", dual: "سِوَاكَانِ", plural: "سُوُكٌ", meaning: "Sivâk: Ağız ve diş temizleme çubuğu" },
  { id: 283, category: "hadis", singular: "كُحْلٌ", dual: "كُحْلَانِ", plural: "أَكْحَالٌ", meaning: "Kuhl: Gözlere çekilen şifalı ismid sürmesi" },
  { id: 284, category: "hadis", singular: "دُهْنٌ", dual: "دُهْنَانِ", plural: "أَدْهَانٌ", meaning: "Dühn: Saça ve sakala sürülen temiz yağ" },
  { id: 285, category: "hadis", singular: "طِيبٌ", dual: "طِيبَانِ", plural: "أَطْيَابٌ", meaning: "Tîb: Hoş koku, esans ve misk" },
  { id: 286, category: "hadis", singular: "مِسْكٌ", dual: "مِسْكَانِ", plural: "أَمْسَاكٌ", meaning: "Misk: Ceylandan elde edilen en güzel koku" },
  { id: 287, category: "hadis", singular: "عَنْبَرٌ", dual: "عَنْبَرَانِ", plural: "عَنَابِرُ", meaning: "Anber: Denizden çıkan hoş kokulu madde" },
  { id: 288, category: "hadis", singular: "بَخُورٌ", dual: "بَخُورَانِ", plural: "أَبْخِرَةٌ", meaning: "Bahûr: Ateşte yakılıp dumanı tütsülenen tütsü" },
  { id: 289, category: "hadis", singular: "مِجْمَرَةٌ", dual: "مِجْمَرَتَانِ", plural: "مَجَامِرُ", meaning: "Micmere: İçinde tütsü yakılan buhurdanlık" },
  { id: 290, category: "hadis", singular: "سُرُجٌ", dual: "سِرَاجَانِ", plural: "سُرُجٌ", meaning: "Sürûc: Evleri ve mescitleri aydınlatan kandiller" },
  { id: 291, category: "hadis", singular: "قِنْدِيلٌ", dual: "قِنْدِيلَانِ", plural: "قَنَادِيلُ", meaning: "Kandil: Yağ ile yanan aydınlatma fanusu" },
  { id: 292, category: "hadis", singular: "حَصِيرٌ", dual: "حَصِيرَانِ", plural: "حُصُرٌ", meaning: "Hasîr: Hurma lifinden örülmüş sergi" },
  { id: 293, category: "hadis", singular: "فِرَاشٌ", dual: "فِرَاشَانِ", plural: "فُرُشٌ", meaning: "Firâş: Üzerinde yatılan sade yatak" },
  { id: 294, category: "hadis", singular: "وِسَادَةٌ", dual: "وِسَادَتَانِ", plural: "وَسَائِدُ", meaning: "Visâde: Baş altına konulan yumuşak yastık" },
  { id: 295, category: "hadis", singular: "نُمْرُقَةٌ", dual: "نُمْرُقَتَانِ", plural: "نَمَارِقُ", meaning: "Nümruka: Üzerine yaslanılan küçük minder" },
  { id: 296, category: "hadis", singular: "سِتْرٌ", dual: "سِتْرَانِ", plural: "أَسْتَارٌ / سُتُورٌ", meaning: "Sitr: Odayı ayıran perde; namazda önüne konan sütre" },
  { id: 297, category: "hadis", singular: "سُتْرَةٌ", dual: "سُتْرَتَانِ", plural: "سُتَرٌ", meaning: "Sütre: Namaz kılanın önüne koyduğu engel" },
  { id: 298, category: "hadis", singular: "مِطْهَرَةٌ", dual: "مِطْهَرَتَانِ", plural: "مَطَاهِرُ", meaning: "Mıthara: Abdest suyu konulan ibrik ve kap" },
  { id: 299, category: "hadis", singular: "إِبْرِيقٌ", dual: "إِبْرِيقَانِ", plural: "أَبَارِيقُ", meaning: "İbrîk: Kulplu ve emzikli su kabı" },
  { id: 300, category: "hadis", singular: "قَصْعَةٌ", dual: "قَصْعَتَانِ", plural: "قِصَاعٌ", meaning: "Kas'a: İçinden birlikte yemek yenen büyük çanak" },
  { id: 301, category: "kitap", singular: "بُرْهَانٌ", dual: "بُرْهَانَانِ", plural: "بَرَاهِينُ", meaning: "Burhân: Kesin delil, sarsılmaz hüccet" },
  { id: 302, category: "kitap", singular: "حُجَّةٌ", dual: "حُجَّتَانِ", plural: "حُجَجٌ", meaning: "Hüccet: İkna edici kesin kanıt, senet" },
  { id: 303, category: "kitap", singular: "مَوْجُودٌ", dual: "مَوْجُودَانِ", plural: "مَوْجُودَاتٌ", meaning: "Mevcûd: Varlık sahasında bulunan, varlık" },
  { id: 304, category: "kitap", singular: "مَخْلُوقٌ", dual: "مَخْلُوقَانِ", plural: "مَخْلُوقَاتٌ", meaning: "Mahlûk: Allah'ın yarattığı varlık" },
  { id: 305, category: "kitap", singular: "مَصْنُوعٌ", dual: "مَصْنُوعَانِ", plural: "مَصْنُوعَاتٌ", meaning: "Masnû': Sanatla ve hikmetle yaratılmış eser" },
  { id: 306, category: "kitap", singular: "أَثَرٌ", dual: "أَثَرَانِ", plural: "آثَارٌ", meaning: "Eser: Sanatın ve kudretin izi, nişanesi" },
  { id: 307, category: "kitap", singular: "سِرٌّ", dual: "سِرَّانِ", plural: "أَسْرَارٌ", meaning: "Sır: Gizli hakikat, derin mana ve incelik" },
  { id: 308, category: "kitap", singular: "حَقِيقَةٌ", dual: "حَقِيقَتَانِ", plural: "حَقَائِقُ", meaning: "Hakikat: Bir şeyin aslı, değişmez gerçeği" },
  { id: 309, category: "kitap", singular: "لَطِيفَةٌ", dual: "لَطِيفَتَانِ", plural: "لَطَائِفُ", meaning: "Latîfe: İnsandaki ince manevî his ve duygu" },
  { id: 310, category: "kitap", singular: "مِنَّةٌ", dual: "مِنَّتَانِ", plural: "مِنَنٌ", meaning: "Minnet: Karşılıksız ilahî iyilik ve ihsan" },
  { id: 311, category: "kitap", singular: "نُكْتَةٌ", dual: "نُكْتَتَانِ", plural: "نُكَتٌ", meaning: "Nükte: İnce, derin ve hikmetli mana" },
  { id: 312, category: "kitap", singular: "إِشَارَةٌ", dual: "إِشَارَتَانِ", plural: "إِشَارَاتٌ", meaning: "İşaret: Gizli veya remizli delalet, gösterme" },
  { id: 313, category: "kitap", singular: "لَمْعَةٌ", dual: "لَمْعَتَانِ", plural: "لَمَعَاتٌ", meaning: "Lem'a: Parlayan ışık parıltısı" },
  { id: 314, category: "kitap", singular: "شُعَاعٌ", dual: "شُعَاعَانِ", plural: "أَشِعَّةٌ", meaning: "Şuâ': Işık huzmesi, ışın, güneş ziyası" },
  { id: 315, category: "kitap", singular: "قَطْرَةٌ", dual: "قَطْرَتَانِ", plural: "قَطَرَاتٌ", meaning: "Katre: Tek bir su damlası" },
  { id: 316, category: "kitap", singular: "زَهْرَةٌ", dual: "زَهْرَتَانِ", plural: "أَزْهَارٌ", meaning: "Zehre: Çiçek, parlak güzellik" },
  { id: 317, category: "kitap", singular: "نَافِذَةٌ", dual: "نَافِذَتَانِ", plural: "نَوَافِذُ", meaning: "Nâfize: Dışarıya açılan pencere, menfez" },
  { id: 318, category: "kitap", singular: "مِرْآةٌ", dual: "مِرْآتَانِ", plural: "مَرَايَا", meaning: "Mir'ât: Ayna, tecelli yansıma mahalli" },
  { id: 319, category: "kitap", singular: "مِيزَانٌ", dual: "مِيزَانَانِ", plural: "مَوَازِينُ", meaning: "Mîzân: Ölçü, tartı, hassas denge terazisi" },
  { id: 320, category: "kitap", singular: "مِقْيَاسٌ", dual: "مِقْيَاسَانِ", plural: "مَقَايِيسُ", meaning: "Mikyas: Kıyas ölçüsü, ölçüm kıstası" },
  { id: 321, category: "kitap", singular: "مَبْدَأٌ", dual: "مَبْدَآنِ", plural: "مَبَادِئُ", meaning: "Mebde': Başlangıç, asıl kaynak, ilk esas" },
  { id: 322, category: "kitap", singular: "مُنْتَهَى", dual: "مُنْتَهَيَانِ", plural: "مُنْتَهَيَاتٌ", meaning: "Müntehâ: Varış noktası, son merhale, nihayet" },
  { id: 323, category: "kitap", singular: "مَظْهَرٌ", dual: "مَظْهَرَانِ", plural: "مَظَاهِرُ", meaning: "Mazhar: Tecelli yeri, görünme mahalli" },
  { id: 324, category: "kitap", singular: "مَوْرِدٌ", dual: "مَوْرِدَانِ", plural: "مَوَارِدُ", meaning: "Mevrid: Ulaşma yeri, feyiz kaynağı, mecra" },
  { id: 325, category: "kitap", singular: "مَصْدَرٌ", dual: "مَصْدَرَانِ", plural: "مَصَادِرُ", meaning: "Masdar: Çıkış yeri, köken, menşe" },
  { id: 326, category: "kitap", singular: "مَنْبَعٌ", dual: "مَنْبَعَانِ", plural: "مَنَابِعُ", meaning: "Menba': Yerden kaynayan pınar, su gözü" },
  { id: 327, category: "kitap", singular: "عُنْوَانٌ", dual: "عُنْوَانَانِ", plural: "عَنَاوِينُ", meaning: "Unvan: Alamet, nişan, hüviyet başlığı" },
  { id: 328, category: "kitap", singular: "طَرِيقٌ", dual: "طَرِيقَانِ", plural: "طُرُقٌ", meaning: "Tarîk: Hakikat yolu, manevi seyr yolu" },
  { id: 329, category: "kitap", singular: "مَسْلَكٌ", dual: "مَسْلَكَانِ", plural: "مَسَالِكُ", meaning: "Meslek: Benimsenen yöntem, gidilen yol" },
  { id: 330, category: "kitap", singular: "مَشْرَبٌ", dual: "مَشْرَبَانِ", plural: "مَشَارِبُ", meaning: "Meşreb: Su içme yeri; manevi mizaç ve neşve" },
  { id: 331, category: "kitap", singular: "رَابِطَةٌ", dual: "رَابِطَتَانِ", plural: "رَوَابِطُ", meaning: "Râbıta: Kalbî bağ, irtibat, alaka" },
  { id: 332, category: "kitap", singular: "وَسِيلَةٌ", dual: "وَسِيلَتَانِ", plural: "وَسَائِلُ", meaning: "Vesîle: Gayeye ulaştıran vasıta, sebep" },
  { id: 333, category: "kitap", singular: "غَايَةٌ", dual: "غَايَتَانِ", plural: "غَايَاتٌ", meaning: "Gâye: Ulaşılmak istenen nihai hedef, maksat" },
  { id: 334, category: "kitap", singular: "مَقْصَدٌ", dual: "مَقْصَدَانِ", plural: "مَقَاصِدُ", meaning: "Maksad: Hedeflenen gaye, niyet edilen murat" },
  { id: 335, category: "kitap", singular: "نَتِيجَةٌ", dual: "نَتِيجَتَانِ", plural: "نَتَائِجُ", meaning: "Netîce: Sonuç, elde edilen hasılat, semere" },
  { id: 336, category: "kitap", singular: "فَائِدَةٌ", dual: "فَائِدَتَانِ", plural: "فَوَائِدُ", meaning: "Fâide: Sağlanan yarar, elde edilen hayır" },
  { id: 337, category: "kitap", singular: "حَاجَةٌ", dual: "حَاجَتَانِ", plural: "حَاجَاتٌ", meaning: "Hâcet: İhtiyaç duyulan şey, lüzum" },
  { id: 338, category: "kitap", singular: "عَاجِزٌ", dual: "عَاجِزَانِ", plural: "عَاجِزُونَ", meaning: "Âciz: Kendi gücü yetmeyen, kudretsiz kul" },
  { id: 339, category: "kitap", singular: "فَقِيرٌ", dual: "فَقِيرَانِ", plural: "فُقَرَاءُ", meaning: "Fakîr: İlahî rahmete muhtaç olan kul" },
  { id: 340, category: "kitap", singular: "نِظَامٌ", dual: "نِظَامَانِ", plural: "أَنْظِمَةٌ", meaning: "Nizâm: Düzen, intizam, kâinattaki ahenk" },
  { id: 341, category: "kitap", singular: "قَانُونٌ", dual: "قَانُونَانِ", plural: "قَوَانِينُ", meaning: "Kānûn: İlahî adetullah kuralı, nizam ilkesi" },
  { id: 342, category: "kitap", singular: "دُسْتُورٌ", dual: "دُسْتُورَانِ", plural: "دَسَاتِيرُ", meaning: "Düstûr: Temel kural, hareket prensibi" },
  { id: 343, category: "kitap", singular: "حِجَابٌ", dual: "حِجَابَانِ", plural: "حُجُبٌ", meaning: "Hicâb: Maddî ve manevî perde, engel, örtü" },
  { id: 344, category: "kitap", singular: "سَبَبٌ", dual: "سَبَبَانِ", plural: "أَسْبَابٌ", meaning: "Sebeb: Neticeye perde olan vasıta, vesile" },
  { id: 345, category: "kitap", singular: "عِلَّةٌ", dual: "عِلَّتَانِ", plural: "عِلَلٌ", meaning: "İllet: Asıl gerekçe, hakiki sebep ve hikmet" },
  { id: 346, category: "kitap", singular: "زَوَالٌ", dual: "زَوَالَانِ", plural: "أَزْوِلَةٌ", meaning: "Zevâl: Güneşin batışı, yok oluş, sona erme" },
  { id: 347, category: "kitap", singular: "بَقَاءٌ", dual: "بَقَاءَانِ", plural: "بَقَاءَاتٌ", meaning: "Bekā: Ebedilik, kalıcılık, ölümsüz devam" },
  { id: 348, category: "kitap", singular: "تَجَلٍّ", dual: "تَجَلِّيَانِ", plural: "تَجَلِّيَاتٌ", meaning: "Tecellî: İlahî isim ve sıfatların görünmesi" },
  { id: 349, category: "kitap", singular: "مِثَالٌ", dual: "مِثَالَانِ", plural: "أَمْثِلَةٌ", meaning: "Misâl: Benzer, örnek, temsilî numune" },
  { id: 350, category: "kitap", singular: "دَلِيلٌ", dual: "دَلِيلَانِ", plural: "أَدِلَّةٌ", meaning: "Delîl: Hakikate ulaştıran kanıt, rehber" },
  { id: 351, category: "kitap", singular: "رَحْمَةٌ", dual: "رَحْمَتَانِ", plural: "رَحَمَاتٌ", meaning: "Merhamet, acıma, ilahî lütuf ve ihsan" },
  { id: 352, category: "kitap", singular: "حِكْمَةٌ", dual: "حِكْمَتَانِ", plural: "حِكَمٌ", meaning: "Eşyanın hakikati, gaye ve fayda" },
  { id: 353, category: "kitap", singular: "قُدْرَةٌ", dual: "قُدْرَتَانِ", plural: "قُدُرَاتٌ", meaning: "İlahî güç, yaratma ve tasarruf kuvveti" },
  { id: 354, category: "kitap", singular: "إِرَادَةٌ", dual: "إِرَادَتَانِ", plural: "إِرَادَاتٌ", meaning: "Dileme, tercih ve tahsis sıfatı" },
  { id: 355, category: "kitap", singular: "عِزَّةٌ", dual: "عِزَّتَانِ", plural: "أَعِزَّةٌ", meaning: "Üstünlük, galebe ve izzet-i ilahiye" },
  { id: 356, category: "kitap", singular: "عَظَمَةٌ", dual: "عَظَمَتَانِ", plural: "عَظَمَاتٌ", meaning: "Büyüklük, ululuk ve kibriya" },
  { id: 357, category: "kitap", singular: "كَرَمٌ", dual: "كَرَمَانِ", plural: "كُرُومٌ", meaning: "Cömertlik, karşılıksız lütuf ve bağış" },
  { id: 358, category: "kitap", singular: "عَدْلٌ", dual: "عَدْلَانِ", plural: "أَعْدَالٌ", meaning: "Adalet, her şeyi yerli yerine koyma" },
  { id: 359, category: "kitap", singular: "جَلَالٌ", dual: "جَلَالَانِ", plural: "أَجِلَّةٌ", meaning: "Büyüklük, azamet ve haşmet tecellisi" },
  { id: 360, category: "kitap", singular: "جَمَالٌ", dual: "جَمَالَانِ", plural: "جَمَالَاتٌ", meaning: "Güzellik, letafet ve cemal-i ilahi" },
  { id: 361, category: "kitap", singular: "كَمَالٌ", dual: "كَمَالَانِ", plural: "كَمَالَاتٌ", meaning: "Kusursuzluk, olgunluk ve mutlak tamlık" },
  { id: 362, category: "kitap", singular: "سُلْطَانٌ", dual: "سُلْطَانَانِ", plural: "سَلَاطِينُ", meaning: "Hükümranlık, ilahî kudret ve hüccet" },
  { id: 363, category: "kitap", singular: "مُلْكٌ", dual: "مُلْكَانِ", plural: "أَمْلَاكٌ", meaning: "Sahip olunan mülk, alem-i şehadet" },
  { id: 364, category: "kitap", singular: "مَلَكُوتٌ", dual: "مَلَكُوتَانِ", plural: "مَلَكُوتَاتٌ", meaning: "Eşyanın iç yüzü, melekler âlemi" },
  { id: 365, category: "kitap", singular: "رُوحٌ", dual: "رُوحَانِ", plural: "أَرْوَاحٌ", meaning: "Hayat veren cevher, latif ilahî kanun" },
  { id: 366, category: "kitap", singular: "جَسَدٌ", dual: "جَسَدَانِ", plural: "أَجْسَادٌ", meaning: "Maddî beden, et ve kemikten kalıp" },
  { id: 367, category: "kitap", singular: "عَقْلٌ", dual: "عَقْلَانِ", plural: "عُقُولٌ", meaning: "Düşünme, anlama ve idrak aleti" },
  { id: 368, category: "kitap", singular: "فِكْرٌ", dual: "فِكْرَانِ", plural: "أَفْكَارٌ", meaning: "Düşünce, tefekkür ve zihin faaliyeti" },
  { id: 369, category: "kitap", singular: "وَهْمٌ", dual: "وَهْمَانِ", plural: "أَوْهَامٌ", meaning: "Asılsız kuruntu, temelsiz vehim" },
  { id: 370, category: "kitap", singular: "شَكٌّ", dual: "شَكَّانِ", plural: "شُكُوكٌ", meaning: "Tereddüt, kararsızlık ve belirsizlik" },
  { id: 371, category: "kitap", singular: "يَقِينٌ", dual: "يَقِينَانِ", plural: "يَقِينَاتٌ", meaning: "Şüpheden uzak kesin, sarsılmaz bilgi" },
  { id: 372, category: "kitap", singular: "نِيَّةٌ", dual: "نِيَّتَانِ", plural: "نِيَّاتٌ", meaning: "Kalbin kastı, amel yönelişi ve niyet" },
  { id: 373, category: "kitap", singular: "إِخْلَاصٌ", dual: "إِخْلَاصَانِ", plural: "إِخْلَاصَاتٌ", meaning: "Ameli yalnız Allah rızası için yapma" },
  { id: 374, category: "kitap", singular: "صِدْقٌ", dual: "صِدْقَانِ", plural: "أَصْدَاقٌ", meaning: "Doğruluk, gerçeğe uygunluk ve vefa" },
  { id: 375, category: "kitap", singular: "كَذِبٌ", dual: "كَذِبَانِ", plural: "أَكَاذِيبُ", meaning: "Yalan, hakikate aykırı beyan" },
  { id: 376, category: "kitap", singular: "حَسَنَةٌ", dual: "حَسَنَتَانِ", plural: "حَسَنَاتٌ", meaning: "İyilik, güzel amel ve sevap" },
  { id: 377, category: "kitap", singular: "سَيِّئَةٌ", dual: "سَيِّئَتَانِ", plural: "سَيِّئَاتٌ", meaning: "Kötülük, günah ve isyan ameli" },
  { id: 378, category: "kitap", singular: "ثَوَابٌ", dual: "ثَوَابَانِ", plural: "أَثْوِبَةٌ", meaning: "Hayırlı amele verilen ilahî karşılık" },
  { id: 379, category: "kitap", singular: "عِقَابٌ", dual: "عِقَابَانِ", plural: "أَعْقِبَةٌ", meaning: "İsyan ve günaha verilen ceza" },
  { id: 380, category: "kitap", singular: "فِطْرَةٌ", dual: "فِطْرَتَانِ", plural: "فِطَرٌ", meaning: "Yaratılış mayası, ilk saf hilkat" },
  { id: 381, category: "kitap", singular: "خِلْقَةٌ", dual: "خِلْقَتَانِ", plural: "خِلَقٌ", meaning: "Yaratılış şekli, bünye ve suret" },
  { id: 382, category: "kitap", singular: "صُورَةٌ", dual: "صُورَتَانِ", plural: "صُوَرٌ", meaning: "Görünüş, biçim, suret ve şekil" },
  { id: 383, category: "kitap", singular: "مَادَّةٌ", dual: "مَادَّتَانِ", plural: "مَوَادُّ", meaning: "Maddî cevher, cisim ve unsur" },
  { id: 384, category: "kitap", singular: "زَمَانٌ", dual: "زَمَانَانِ", plural: "أَزْمِنَةٌ", meaning: "Vakit, çağ, hareket ve anlar zinciri" },
  { id: 385, category: "kitap", singular: "مَكَانٌ", dual: "مَكَانَانِ", plural: "أَمْكِنَةٌ", meaning: "Yer, mevki, cismin kapladığı alan" },
  { id: 386, category: "kitap", singular: "حَيَاةٌ", dual: "حَيَاتَانِ", plural: "حَيَوَاتٌ", meaning: "Dirilik, can, varlığın neşesi" },
  { id: 387, category: "kitap", singular: "مَوْتٌ", dual: "مَوْتَانِ", plural: "أَمْوَاتٌ", meaning: "Ölüm, vazifeden terhis ve tebdil-i mekan" },
  { id: 388, category: "kitap", singular: "حَشْرٌ", dual: "حَشْرَانِ", plural: "حُشُورٌ", meaning: "Mahşerde toplanma, diriltilip bir araya gelme" },
  { id: 389, category: "kitap", singular: "نَشْرٌ", dual: "نَشْرَانِ", plural: "نُشُورٌ", meaning: "Dağılma, kabirlerden çıkıp yayılma" },
  { id: 390, category: "kitap", singular: "مِيزَانٌ", dual: "مِيزَانَانِ", plural: "مَوَازِينُ", meaning: "Ölçü aleti, adalet ve amel terazisi" },
  { id: 391, category: "kitap", singular: "صِرَاطٌ", dual: "صِرَاطَانِ", plural: "صُرُطٌ", meaning: "Doğru yol; cehennem üzerindeki köprü" },
  { id: 392, category: "kitap", singular: "شَفَاعَةٌ", dual: "شَفَاعَتَانِ", plural: "شَفَاعَاتٌ", meaning: "Bağışlanma dileme, ilahî aracı olma" },
  { id: 393, category: "kitap", singular: "مَغْفِرَةٌ", dual: "مَغْفِرَتَانِ", plural: "مَغَافِرُ", meaning: "Günahları örtme, affetme ve bağışlama" },
  { id: 394, category: "kitap", singular: "تَوْبَةٌ", dual: "تَوْبَتَانِ", plural: "تَوْبَاتٌ", meaning: "Günahtan dönme, pişmanlıkla Allah'a yönelme" },
  { id: 395, category: "kitap", singular: "ذَنْبٌ", dual: "ذَنْبَانِ", plural: "ذُنُوبٌ", meaning: "Günah, ilahî emre aykırı kusur" },
  { id: 396, category: "kitap", singular: "خَطِيئَةٌ", dual: "خَطِيئَتَانِ", plural: "خَطَايَا", meaning: "Kasıtlı veya kasıtsız hata, günah" },
  { id: 397, category: "kitap", singular: "طَاعَةٌ", dual: "طَاعَتَانِ", plural: "طَاعَاتٌ", meaning: "İtaat etme, boyun eğme ve kulluk" },
  { id: 398, category: "kitap", singular: "عِصْيَانٌ", dual: "عِصْيَانَانِ", plural: "أَعْصِيَةٌ", meaning: "İsyan, başkaldırma ve emre itaatsizlik" },
  { id: 399, category: "kitap", singular: "فِسْقٌ", dual: "فِسْقَانِ", plural: "فُسُوقٌ", meaning: "Doğru yoldan çıkma, günaha dalma" },
  { id: 400, category: "kitap", singular: "كُفْرٌ", dual: "كُفْرَانِ", plural: "كُفُورٌ", meaning: "Hakkı örtme, inkâr ve nankörlük" },
  { id: 401, category: "kitap", singular: "نِفَاقٌ", dual: "نِفَاقَانِ", plural: "أَنْفِقَةٌ", meaning: "İkiyüzlülük, inanmadığı halde inanmış görünme" },
  { id: 402, category: "kitap", singular: "شِرْكٌ", dual: "شِرْكَانِ", plural: "أَشْرَاكٌ", meaning: "Allah'a ortak koşma, zatında veya sıfatında şirk" },
  { id: 403, category: "kitap", singular: "تَوْحِيدٌ", dual: "تَوْحِيدَانِ", plural: "تَوْحِيدَاتٌ", meaning: "Allah'ın birliğini tasdik ve ilan etme" },
  { id: 404, category: "kitap", singular: "تَنْزِيهٌ", dual: "تَنْزِيهَانِ", plural: "تَنْزِيهَاتٌ", meaning: "Allah'ı her türlü noksanlıktan yüce tutma" },
  { id: 405, category: "kitap", singular: "تَقْدِيسٌ", dual: "تَقْدِيسَانِ", plural: "تَقْدِيسَاتٌ", meaning: "Mukaddes bilme, paklığını ilan etme" },
  { id: 406, category: "kitap", singular: "تَسْبِيحٌ", dual: "تَسْبِيحَانِ", plural: "تَسْبِيحَاتٌ", meaning: "Sübhanallah diyerek tenzih etme" },
  { id: 407, category: "kitap", singular: "تَمْحِيدٌ", dual: "تَمْحِيدَانِ", plural: "تَمْحِيدَاتٌ", meaning: "Hamd ve sena ederek övme" },
  { id: 408, category: "kitap", singular: "تَكْبِيرٌ", dual: "تَكْبِيرَانِ", plural: "تَكْبِيرَاتٌ", meaning: "Allahu ekber diyerek ululama" },
  { id: 409, category: "kitap", singular: "تَهْلِيلٌ", dual: "تَهْلِيلَانِ", plural: "تَهْلِيلَاتٌ", meaning: "Lâ ilahe illallah diyerek tevhid getirme" },
  { id: 410, category: "kitap", singular: "دُعَاءٌ", dual: "دُعَاءَانِ", plural: "أَدْعِيَةٌ", meaning: "Yalvarma, ilahî dergâha hacet arzı" },
  { id: 411, category: "kitap", singular: "صَلَاةٌ", dual: "صَلَاتَانِ", plural: "صَلَوَاتٌ", meaning: "Namaz, ilahî huzurda ibadet ve dua" },
  { id: 412, category: "kitap", singular: "صَوْمٌ", dual: "صَوْمَانِ", plural: "أَصْوَامٌ", meaning: "Oruç, nefsi haram ve şehevattan men etme" },
  { id: 413, category: "kitap", singular: "زَكَاةٌ", dual: "زَكَاتَانِ", plural: "زَكَوَاتٌ", meaning: "Malın arınması için verilen farz pay" },
  { id: 414, category: "kitap", singular: "حَجٌّ", dual: "حَجَّانِ", plural: "حُجُوجٌ", meaning: "Kâbe-i Muazzama'yı farz niyetiyle ziyaret" },
  { id: 415, category: "kitap", singular: "جِهَادٌ", dual: "جِهَادَانِ", plural: "جِهَادَاتٌ", meaning: "Hak yolunda gayret, nefis ve batılla mücadele" },
  { id: 416, category: "kitap", singular: "تَقْوَى", dual: "تَقْوَيَانِ", plural: "تَقْوَاتٌ", meaning: "Günahtan sakınma, ilahî azaptan korunma" },
  { id: 417, category: "kitap", singular: "وَرَعٌ", dual: "وَرَعَانِ", plural: "أَوْرَاعٌ", meaning: "Şüpheli şeylerden titizlikle kaçınma" },
  { id: 418, category: "kitap", singular: "زُهْدٌ", dual: "زُهْدَانِ", plural: "أَزْهَادٌ", meaning: "Dünyaya kalben bağlanmama, aza kanaat" },
  { id: 419, category: "kitap", singular: "صَبْرٌ", dual: "صَبْرَانِ", plural: "أَصْبَارٌ", meaning: "Zorluklara ve musibetlere tahammül etme" },
  { id: 420, category: "kitap", singular: "شُكْرٌ", dual: "شُكْرَانِ", plural: "شُكُورٌ", meaning: "Nimeti vereni tanıyıp minnettarlık gösterme" },
  { id: 421, category: "kitap", singular: "رِضَا", dual: "رِضَيَانِ", plural: "رِضَاءَاتٌ", meaning: "İlahî kaza ve kadere gönülden boyun eğme" },
  { id: 422, category: "kitap", singular: "تَوَكُّلٌ", dual: "تَوَكُّلَانِ", plural: "تَوَكُّلَاتٌ", meaning: "Sebeplere teşebbüs edip neticeyi Allah'a bırakma" },
  { id: 423, category: "kitap", singular: "خَوْفٌ", dual: "خَوْفَانِ", plural: "مَخَاوِفُ", meaning: "İlahî celal ve gazaptan korkma" },
  { id: 424, category: "kitap", singular: "رَجَاءٌ", dual: "رَجَاءَانِ", plural: "أَرْجِيَةٌ", meaning: "İlahî rahmet ve mağfireti ümit etme" },
  { id: 425, category: "kitap", singular: "حُبٌّ", dual: "حُبَّانِ", plural: "أَحْبَابٌ", meaning: "Sevgi, muhabbet ve gönülden meyil" },
  { id: 426, category: "kitap", singular: "بُغْضٌ", dual: "بُغْضَانِ", plural: "أَبْغَاضٌ", meaning: "Kin, nefret, batıla karşı buğz" },
  { id: 427, category: "kitap", singular: "شَفَقَةٌ", dual: "شَفَقَتَانِ", plural: "شَفَقَاتٌ", meaning: "Karşılıksız acıma, esirgeme ve merhamet" },
  { id: 428, category: "kitap", singular: "عَفْوٌ", dual: "عَفْوَانِ", plural: "أَعْفِيَةٌ", meaning: "Cezadan vazgeçme, kusuru bağışlama" },
  { id: 429, category: "kitap", singular: "صَفْحٌ", dual: "صَفْحَانِ", plural: "صُفُوحٌ", meaning: "Kusuru görmezden gelip yüz çevirme" },
  { id: 430, category: "kitap", singular: "حِلْمٌ", dual: "حِلْمَانِ", plural: "أَحْلَامٌ", meaning: "Öfkeyi yenme, yumuşak huyluluk ve teenni" },
  { id: 431, category: "kitap", singular: "جُودٌ", dual: "جُودَانِ", plural: "أَجْوَادٌ", meaning: "İstenmeden bolca verme, cömertlik" },
  { id: 432, category: "kitap", singular: "بَذْلٌ", dual: "بَذْلَانِ", plural: "بُذُولٌ", meaning: "Fedakarlıkla harcama, esirgemeden verme" },
  { id: 433, category: "kitap", singular: "إِحْسَانٌ", dual: "إِحْسَانَانِ", plural: "إِحْسَانَاتٌ", meaning: "Görevini en güzel yapma, lütufta bulunma" },
  { id: 434, category: "kitap", singular: "عَهْدٌ", dual: "عَهْدَانِ", plural: "عُهُودٌ", meaning: "Verilen söz, ahit ve taahhüt" },
  { id: 435, category: "kitap", singular: "مِيثَاقٌ", dual: "مِيثَاقَانِ", plural: "مَوَاثِيقُ", meaning: "Sağlam sözleşme, yeminli muahede" },
  { id: 436, category: "kitap", singular: "أَمَانَةٌ", dual: "أَمَانَتَانِ", plural: "أَمَانَاتٌ", meaning: "Korunmak üzere tevdi edilen emanet" },
  { id: 437, category: "kitap", singular: "خِيَانَةٌ", dual: "خِيَانَتَانِ", plural: "خِيَانَاتٌ", meaning: "Emanete hıyanet etme, ahdi bozma" },
  { id: 438, category: "kitap", singular: "غَدْرٌ", dual: "غَدْرَانِ", plural: "غُدُورٌ", meaning: "Sözünden dönme, kalleşlik ve vefasızlık" },
  { id: 439, category: "kitap", singular: "حَسَدٌ", dual: "حَسَدَانِ", plural: "أَحْسَادٌ", meaning: "Başkasındaki nimetin yok olmasını isteme" },
  { id: 440, category: "kitap", singular: "كِبْرٌ", dual: "كِبْرَانِ", plural: "أَكْبَارٌ", meaning: "Kendini büyük görüp başkalarını hakir görme" },
  { id: 441, category: "kitap", singular: "عُجْبٌ", dual: "عُجْبَانِ", plural: "أَعْجَابٌ", meaning: "Kendi amelini ve nefsini beğenme" },
  { id: 442, category: "kitap", singular: "رِيَاءٌ", dual: "رِيَاءَانِ", plural: "أَرْيَاءٌ", meaning: "Gösteriş yapma, amelde samimiyetsizlik" },
  { id: 443, category: "kitap", singular: "سُمْعَةٌ", dual: "سُمْعَتَانِ", plural: "سُمْعَاتٌ", meaning: "Şöhret ve duyulma arzusu" },
  { id: 444, category: "kitap", singular: "غَفْلَةٌ", dual: "غَفْلَتَانِ", plural: "غَفَلَاتٌ", meaning: "Hakikatten habersiz olma, aymazlık" },
  { id: 445, category: "kitap", singular: "نِسْيَانٌ", dual: "نِسْيَانَانِ", plural: "نِسْيَانَاتٌ", meaning: "Unutma, hatırdan çıkarma" },
  { id: 446, category: "kitap", singular: "ذِكْرٌ", dual: "ذِكْرَانِ", plural: "أَذْكَارٌ", meaning: "Hatırlama, anma ve dille tesbih etme" },
  { id: 447, category: "kitap", singular: "فَهْمٌ", dual: "فَهْمَانِ", plural: "أَفْهَامٌ", meaning: "Derin kavrayış, idrak ve anlama" },
  { id: 448, category: "kitap", singular: "حِفْظٌ", dual: "حِفْظَانِ", plural: "أَحْفَاظٌ", meaning: "Koruma, muhafaza etme ve belleme" },
  { id: 449, category: "kitap", singular: "نَظَرٌ", dual: "نَظَرَانِ", plural: "أَنْظَارٌ", meaning: "Bakış, ibretle müşahede ve tefekkür" },
  { id: 450, category: "kitap", singular: "شُهُودٌ", dual: "شُهُودَانِ", plural: "أَشْهَادٌ", meaning: "Gözle görme, hazır bulunma ve şahitlik" },
  { id: 451, category: "genel", singular: "مَدِينَةٌ", dual: "مَدِينَتَانِ", plural: "مُدُنٌ", meaning: "Şehir: Büyük yerleşim yeri, belde" },
  { id: 452, category: "genel", singular: "قَرْيَةٌ", dual: "قَرْيَتَانِ", plural: "قُرًى", meaning: "Köy: Kırsal yerleşim yeri, kasaba" },
  { id: 453, category: "genel", singular: "شَارِعٌ", dual: "شَارِعَانِ", plural: "شَوَارِعُ", meaning: "Cadde: Geniş yol, ana sokak" },
  { id: 454, category: "genel", singular: "زُقَاقٌ", dual: "زُقَاقَانِ", plural: "أَزِقَّةٌ", meaning: "Sokak: Dar mahalle yolu" },
  { id: 455, category: "genel", singular: "حَيٌّ", dual: "حَيَّانِ", plural: "أَحْيَاءٌ", meaning: "Mahalle: Şehrin semti, bölgesi" },
  { id: 456, category: "genel", singular: "سُوقٌ", dual: "سُوقَانِ", plural: "أَسْوَاقٌ", meaning: "Çarşı: Alışveriş yapılan pazar yeri" },
  { id: 457, category: "genel", singular: "دُكَّانٌ", dual: "دُكَّانَانِ", plural: "دَاكَاكِينُ", meaning: "Dükkân: Küçük ticarethane, mağaza" },
  { id: 458, category: "genel", singular: "مَنْزِلٌ", dual: "مَنْزِلَانِ", plural: "مَنَازِلُ", meaning: "Menzil: Konak yeri, ev ve mesken" },
  { id: 459, category: "genel", singular: "غُرْفَةٌ", dual: "غُرْفَتَانِ", plural: "غُرَفٌ", meaning: "Oda: Evin bölmesi, hücre" },
  { id: 460, category: "genel", singular: "مَطْبَخٌ", dual: "مَطْبَخَانِ", plural: "مَطَابِخُ", meaning: "Mutfak: Yemek pişirilen mekan" },
  { id: 461, category: "genel", singular: "حَمَّامٌ", dual: "حَمَّامَانِ", plural: "حَمَّامَاتٌ", meaning: "Hamam: Yıkanma yeri, banyo" },
  { id: 462, category: "genel", singular: "شُبَّاكٌ", dual: "شُبَّاكَانِ", plural: "شَبَابِيكُ", meaning: "Pencere: Işık ve hava menfezi" },
  { id: 463, category: "genel", singular: "سَرِيرٌ", dual: "سَرِيرَانِ", plural: "أَسِرَّةٌ / سُرُرٌ", meaning: "Karyola: Üzerinde yatılan yatak" },
  { id: 464, category: "genel", singular: "كُرْسِيٌّ", dual: "كُرْسِيَّانِ", plural: "كَرَاسِيُّ", meaning: "Sandalye: Üzerine oturulan koltuk" },
  { id: 465, category: "genel", singular: "مَكْتَبٌ", dual: "مَكْتَبَانِ", plural: "مَكَاتِبُ", meaning: "Masa: Yazı masası, yazıhane ve ofis" },
  { id: 466, category: "genel", singular: "قَلَمٌ", dual: "قَلَمَانِ", plural: "أَقْلَامٌ", meaning: "Kalem: Yazı yazma aleti" },
  { id: 467, category: "genel", singular: "دَفْتَرٌ", dual: "دَفْتَرَانِ", plural: "دَفَاتِرُ", meaning: "Defter: Yazı yazılan ciltli yapraklar" },
  { id: 468, category: "genel", singular: "مِحْفَظَةٌ", dual: "مِحْفَظَتَانِ", plural: "مَحَافِظُ", meaning: "Çanta: Eşya ve kitap konulan çanta" },
  { id: 469, category: "genel", singular: "لَوْحٌ", dual: "لَوْحَانِ", plural: "أَلْوَاحٌ", meaning: "Yazı tahtası: Üzerine yazılan düz levha" },
  { id: 470, category: "genel", singular: "وَرَقَةٌ", dual: "وَرَقَتَانِ", plural: "أَوْرَاقٌ", meaning: "Kağıt: Üzerine yazı yazılan tabaka" },
  { id: 471, category: "genel", singular: "حَرْفٌ", dual: "حَرْفَانِ", plural: "حُرُوفٌ / أَحْرُفٌ", meaning: "Harf: Kelimeleri oluşturan alfabe sesi" },
  { id: 472, category: "genel", singular: "كَلِمَةٌ", dual: "كَلِمَتَانِ", plural: "كَلِمَاتٌ / كَلِمٌ", meaning: "Kelime: Anlamlı lafız ve söz" },
  { id: 473, category: "genel", singular: "جُمْلَةٌ", dual: "جُمْلَتَانِ", plural: "جُمَلٌ", meaning: "Cümle: Anlamı tam bildiren kelimeler dizisi" },
  { id: 474, category: "genel", singular: "سُؤَالٌ", dual: "سُؤَالَانِ", plural: "أَسْئِلَةٌ", meaning: "Soru: Cevap bekleyen istifham" },
  { id: 475, category: "genel", singular: "جَوَابٌ", dual: "جَوَابَانِ", plural: "أَجْوِبَةٌ", meaning: "Cevap: Soruya verilen karşılık" },
  { id: 476, category: "genel", singular: "مُعَلِّمٌ", dual: "مُعَلِّمَانِ", plural: "مُعَلِّمُونَ", meaning: "Öğretmen: İlim ve edep öğreten hoca" },
  { id: 477, category: "genel", singular: "تِلْمِيذٌ", dual: "تِلْمِيذَانِ", plural: "تَلَامِيذُ", meaning: "Öğrenci: Ders alan talebe" },
  { id: 478, category: "genel", singular: "مَكْتَبَةٌ", dual: "مَكْتَبَتَانِ", plural: "مَكْتَبَاتٌ", meaning: "Kütüphane: Kitapların toplandığı yer" },
  { id: 479, category: "genel", singular: "جَامِعَةٌ", dual: "جَامِعَتَانِ", plural: "جَامِعَاتٌ", meaning: "Üniversite: Yüksek tahsil müessesesi" },
  { id: 480, category: "genel", singular: "مَدْرَسَةٌ", dual: "مَدْرَسَتَانِ", plural: "مَدَارِسُ", meaning: "Okul: Ders okutulan mektep" },
  { id: 481, category: "genel", singular: "فَصْلٌ", dual: "فَصْلَانِ", plural: "فُصُولٌ", meaning: "Sınıf: Dershane; yılın mevsimi" },
  { id: 482, category: "genel", singular: "دَرْسٌ", dual: "دَرْسَانِ", plural: "دُرُوسٌ", meaning: "Ders: İlim tahsil edilen konu" },
  { id: 483, category: "genel", singular: "إِمْتِحَانٌ", dual: "إِمْتِحَانَانِ", plural: "إِمْتِحَانَاتٌ", meaning: "Sınav: Bilgi ve ehliyet denemesi" },
  { id: 484, category: "genel", singular: "شَهَادَةٌ", dual: "شَهَادَتَانِ", plural: "شَهَادَاتٌ", meaning: "Diploma: Mezuniyet ve ehliyet belgesi" },
  { id: 485, category: "genel", singular: "إِدَارَةٌ", dual: "إِدَارَتَانِ", plural: "إِدَارَاتٌ", meaning: "İdare: Yönetim birimi ve yöneticilik" },
  { id: 486, category: "genel", singular: "رَئِيسٌ", dual: "رَئِيسَانِ", plural: "رُؤَسَاءُ", meaning: "Başkan: Topluluğun lideri ve amiri" },
  { id: 487, category: "genel", singular: "طَبِيبٌ", dual: "طَبِيبَانِ", plural: "أَطِبَّاءُ", meaning: "Hekim: Hastaları tedavi eden doktor" },
  { id: 488, category: "genel", singular: "مُهَنْدِسٌ", dual: "مُهَنْدِسَانِ", plural: "مُهَنْدِسُونَ", meaning: "Mühendis: Yapı ve fen uzmanı" },
  { id: 489, category: "genel", singular: "تَاجِرٌ", dual: "تَاجِرَانِ", plural: "تُجَّارٌ", meaning: "Tüccar: Alışveriş yapan ticaret erbabı" },
  { id: 490, category: "genel", singular: "فَلَّاحٌ", dual: "فَلَّاحَانِ", plural: "فَلَّاحُونَ", meaning: "Çiftçi: Toprağı ekip biçen rençber" },
  { id: 491, category: "genel", singular: "نَجَّارٌ", dual: "نَجَّارَانِ", plural: "نَجَّارُونَ", meaning: "Marangoz: Ağaç ve mobilya ustası" },
  { id: 492, category: "genel", singular: "حَدَّادٌ", dual: "حَدَّادَانِ", plural: "حَدَّادُونَ", meaning: "Demirci: Demiri işleyen usta" },
  { id: 493, category: "genel", singular: "خَيَّاطٌ", dual: "خَيَّاطَانِ", plural: "خَيَّاطُونَ", meaning: "Terzi: Elbise diken usta" },
  { id: 494, category: "genel", singular: "صَيَّادٌ", dual: "صَيَّادَانِ", plural: "صَيَّادُونَ", meaning: "Avcı: Kara veya deniz avcısı" },
  { id: 495, category: "genel", singular: "جُنْدِيٌّ", dual: "جُنْدِيَّانِ", plural: "جُنُودٌ", meaning: "Asker: Vatanı koruyan er" },
  { id: 496, category: "genel", singular: "شُرْطِيٌّ", dual: "شُرْطِيَّانِ", plural: "شُرْطَةٌ", meaning: "Polis: Asayişi sağlayan memur" },
  { id: 497, category: "genel", singular: "حَارِسٌ", dual: "حَارِسَانِ", plural: "حُرَّاسٌ", meaning: "Bekçi: Koruyan ve nöbet tutan kimse" },
  { id: 498, category: "genel", singular: "خَادِمٌ", dual: "خَادِمَانِ", plural: "خُدَّامٌ", meaning: "Hizmetkâr: Hizmet eden görevli" },
  { id: 499, category: "genel", singular: "سَائِقٌ", dual: "سَائِقَانِ", plural: "سَائِقُونَ", meaning: "Şoför: Araç sevk eden sürücü" },
  { id: 500, category: "genel", singular: "طَيَّارٌ", dual: "طَيَّارَانِ", plural: "طَيَّارُونَ", meaning: "Pilot: Uçak kullanan havacı" },
  { id: 501, category: "genel", singular: "مَلِكٌ", dual: "مَلِكَانِ", plural: "مُلُوكٌ", meaning: "Hükümdar: Ülkeyi yöneten padişah" },
  { id: 502, category: "genel", singular: "وَزِيرٌ", dual: "وَزِيرَانِ", plural: "وُزَرَاءُ", meaning: "Vezir: Hükümdarın baş yardımcısı" },
  { id: 503, category: "genel", singular: "قَاضٍ", dual: "قَاضِيَانِ", plural: "قُضَاةٌ", meaning: "Hâkim: Mahkemede adalet dağıtan" },
  { id: 504, category: "genel", singular: "أَمِيرٌ", dual: "أَمِيرَانِ", plural: "أُمَرَاءُ", meaning: "Bey: Yönetici prens ve ordu kumandanı" },
  { id: 505, category: "genel", singular: "سَفِيرٌ", dual: "سَفِيرَانِ", plural: "سُفَرَاءُ", meaning: "Büyükelçi: Devleti temsil eden elçi" },
  { id: 506, category: "genel", singular: "رَجُلٌ", dual: "رَجُلَانِ", plural: "رِجَالٌ", meaning: "Adam: Yetişkin erkek" },
  { id: 507, category: "genel", singular: "إِمْرَأَةٌ", dual: "إِمْرَأَتَانِ", plural: "نِسَاءٌ", meaning: "Kadın: Yetişkin hanım" },
  { id: 508, category: "genel", singular: "وَلَدٌ", dual: "وَلَدَانِ", plural: "أَوْلَادٌ", meaning: "Erkek çocuk: Oğul, çocuk" },
  { id: 509, category: "genel", singular: "بِنْتٌ", dual: "بِنْتَانِ", plural: "بَنَاتٌ", meaning: "Kız çocuk: Evlat olan kız" },
  { id: 510, category: "genel", singular: "شَابٌّ", dual: "شَابَّانِ", plural: "شَبَابٌ / شُبَّانٌ", meaning: "Genç: Delikanlı, taze ömürlü kimse" },
  { id: 511, category: "genel", singular: "عَجُوزٌ", dual: "عَجُوزَانِ", plural: "عَجَائِزُ", meaning: "İhtiyar: Yaşlı kadın veya erkek" },
  { id: 512, category: "genel", singular: "أَبٌ", dual: "أَبَوَانِ", plural: "آبَاءٌ", meaning: "Baba: Peder, hane reisi" },
  { id: 513, category: "genel", singular: "أُمٌّ", dual: "أُمَّانِ", plural: "أُمَّهَاتٌ", meaning: "Anne: Valide, şefkat pınarı" },
  { id: 514, category: "genel", singular: "أَخٌ", dual: "أَخَوَانِ", plural: "إِخْوَةٌ / إِخْوَانٌ", meaning: "Kardeş: Erkek kardeş" },
  { id: 515, category: "genel", singular: "أُخْتٌ", dual: "أُخْتَانِ", plural: "أَخَوَاتٌ", meaning: "Kız kardeş: Hemşire" },
  { id: 516, category: "genel", singular: "جَدٌّ", dual: "جَدَّانِ", plural: "أَجْدَادٌ", meaning: "Dede: Babanın veya annenin babası" },
  { id: 517, category: "genel", singular: "جَدَّةٌ", dual: "جَدَّتَانِ", plural: "جَدَّاتٌ", meaning: "Nine: Babanın veya annenin annesi" },
  { id: 518, category: "genel", singular: "عَمٌّ", dual: "عَمَّانِ", plural: "أَعْمَامٌ", meaning: "Amca: Babanın erkek kardeşi" },
  { id: 519, category: "genel", singular: "عَمَّةٌ", dual: "عَمَّتَانِ", plural: "عَمَّاتٌ", meaning: "Hala: Babanın kız kardeşi" },
  { id: 520, category: "genel", singular: "خَالٌ", dual: "خَالَانِ", plural: "أَخْوَالٌ", meaning: "Dayı: Annenin erkek kardeşi" },
  { id: 521, category: "genel", singular: "خَالَةٌ", dual: "خَالَتَانِ", plural: "خَالَاتٌ", meaning: "Teyze: Annenin kız kardeşi" },
  { id: 522, category: "genel", singular: "إِبْنٌ", dual: "إِبْنَانِ", plural: "أَبْنَاءٌ / بَنُونَ", meaning: "Oğul: Erkek evlat" },
  { id: 523, category: "genel", singular: "إِبْنَةٌ", dual: "إِبْنَتَانِ", plural: "بَنَاتٌ", meaning: "Kız evlat: Bint" },
  { id: 524, category: "genel", singular: "زَوْجٌ", dual: "زَوْجَانِ", plural: "أَزْوَاجٌ", meaning: "Eş: Nikahlı koca" },
  { id: 525, category: "genel", singular: "زَوْجَةٌ", dual: "زَوْجَتَانِ", plural: "زَوْجَاتٌ", meaning: "Hanım: Nikahlı zevce" },
  { id: 526, category: "genel", singular: "صِهْرٌ", dual: "صِهْرَانِ", plural: "أَصْهَارٌ", meaning: "Damat: Evlilik yoluyla kazanılan akraba" },
  { id: 527, category: "genel", singular: "قَرِيبٌ", dual: "قَرِيبَانِ", plural: "أَقْرِبَاءُ", meaning: "Akraba: Kan bağı olan hısım" },
  { id: 528, category: "genel", singular: "غَرِيبٌ", dual: "غَرِيبَانِ", plural: "غُرَبَاءُ", meaning: "Yabancı: Yurdundan uzak olan kimse" },
  { id: 529, category: "genel", singular: "صَدِيقٌ", dual: "صَدِيقَانِ", plural: "أَصْدِقَاءُ", meaning: "Dost: Sadakatli candan arkadaş" },
  { id: 530, category: "genel", singular: "عَدُوٌّ", dual: "عَدُوَّانِ", plural: "أَعْدَاءٌ", meaning: "Düşman: Husumet besleyen hasım" },
  { id: 531, category: "genel", singular: "شَخْصٌ", dual: "شَخْصَانِ", plural: "أَشْخَاصٌ", meaning: "Şahıs: Fert, birey" },
  { id: 532, category: "genel", singular: "نَاسٌ", dual: "نَاسَانِ", plural: "أُنَاسٌ", meaning: "İnsanlar: Beşer topluluğu" },
  { id: 533, category: "genel", singular: "حَلْقَةٌ", dual: "حَلْقَتَانِ", plural: "حَلَقَاتٌ", meaning: "Halka: İlim meclisi, çember" },
  { id: 534, category: "genel", singular: "صَفٌّ", dual: "صَفَّانِ", plural: "صُفُوفٌ", meaning: "Saf: Namazda veya orduda yan yana duruş" },
  { id: 535, category: "genel", singular: "مَجْلِسٌ", dual: "مَجْلِسَانِ", plural: "مَجَالِسُ", meaning: "Meclis: Oturulan toplantı yeri" },
  { id: 536, category: "genel", singular: "مُجْتَمَعٌ", dual: "مُجْتَمَعَانِ", plural: "مُجْتَمَعَاتٌ", meaning: "Toplum: Birlikte yaşayan cemiyet" },
  { id: 537, category: "genel", singular: "وَطَنٌ", dual: "وَطَنَانِ", plural: "أَوْطَانٌ", meaning: "Vatan: Doğulup yaşanılan memleket" },
  { id: 538, category: "genel", singular: "بَلَدٌ", dual: "بَلَدَانِ", plural: "بِلَادٌ / بُلْدَانٌ", meaning: "Ülke: Diyar, yurt, memleket" },
  { id: 539, category: "genel", singular: "قَارَّةٌ", dual: "قَارَّتَانِ", plural: "قَارَّاتٌ", meaning: "Kıta: Büyük kara parçası" },
  { id: 540, category: "genel", singular: "جَزِيرَةٌ", dual: "جَزِيرَتَانِ", plural: "جُزُرٌ", meaning: "Ada: Dört tarafı suyla çevrili kara" },
  { id: 541, category: "genel", singular: "شِبْهُ جَزِيرَةٍ", dual: "شِبْهَا جَزِيرَةٍ", plural: "أَشْبَاهُ جُزُرٍ", meaning: "Yarımada: Üç tarafı denizle çevrili kara" },
  { id: 542, category: "genel", singular: "نَهْرٌ", dual: "نَهْرَانِ", plural: "أَنْهَارٌ / أَنْهُرٌ", meaning: "Nehir: Akarsu, ırmak" },
  { id: 543, category: "genel", singular: "بِئْرٌ", dual: "بِئْرَانِ", plural: "آبَارٌ", meaning: "Kuyu: Su çıkarılan derin çukur" },
  { id: 544, category: "genel", singular: "وَادٍ", dual: "وَادِيَانِ", plural: "أَوْدِيَةٌ", meaning: "Vadi: Dağlar arasındaki çukur akarsu yatağı" },
  { id: 545, category: "genel", singular: "تَلٌّ", dual: "تَلَّانِ", plural: "تِلَالٌ", meaning: "Tepe: Küçük yükselti" },
  { id: 546, category: "genel", singular: "صَحْرَاءُ", dual: "صَحْرَاوَانِ", plural: "صَحَارَى", meaning: "Çöl: Kumluk ve kurak geniş alan" },
  { id: 547, category: "genel", singular: "غَابَةٌ", dual: "غَابَتَانِ", plural: "غَابَاتٌ", meaning: "Orman: Ağaçlarla kaplı geniş alan" },
  { id: 548, category: "genel", singular: "بُسْتَانٌ", dual: "بُسْتَانَانِ", plural: "بَسَاتِينُ", meaning: "Bahçe: Meyveli ve yeşil alan" },
  { id: 549, category: "genel", singular: "حَدِيقَةٌ", dual: "حَدِيقَتَانِ", plural: "حَدَائِقُ", meaning: "Park / Bahçe: Çiçekli yeşil bahçe" },
  { id: 550, category: "genel", singular: "مَزْرَعَةٌ", dual: "مَزْرَعَتَانِ", plural: "مَزَارِعُ", meaning: "Çiftlik: Tarım ve hayvancılık arazisi" },
  { id: 551, category: "genel", singular: "جِسْرٌ", dual: "جِسْرَانِ", plural: "جُسُورٌ", meaning: "Köprü: Nehir üzerinden geçiren kemer" },
  { id: 552, category: "genel", singular: "نَفَقٌ", dual: "نَفَقَانِ", plural: "أَنْفَاقٌ", meaning: "Tünel: Dağ veya yer altından açılan yol" },
  { id: 553, category: "genel", singular: "سَيَّارَةٌ", dual: "سَيَّارَتَانِ", plural: "سَيَّارَاتٌ", meaning: "Otomobil: Dört tekerlekli binek araç" },
  { id: 554, category: "genel", singular: "حَافِلَةٌ", dual: "حَافِلَتَانِ", plural: "حَافِلَاتٌ", meaning: "Otobüs: Yolcu taşıyan büyük taşıt" },
  { id: 555, category: "genel", singular: "قِطَارٌ", dual: "قِطَارَانِ", plural: "قِطَارَاتٌ", meaning: "Tren: Raylar üzerinde giden katar" },
  { id: 556, category: "genel", singular: "طَائِرَةٌ", dual: "طَائِرَتَانِ", plural: "طَائِرَاتٌ", meaning: "Uçak: Havada uçan yolcu aracı" },
  { id: 557, category: "genel", singular: "زَوْرَقٌ", dual: "زَوْرَقَانِ", plural: "زَوَارِقُ", meaning: "Sandal: Küçük deniz kayığı" },
  { id: 558, category: "genel", singular: "دَرَّاجَةٌ", dual: "دَرَّاجَتَانِ", plural: "دَرَّاجَاتٌ", meaning: "Bisiklet: İki tekerlekli binek" },
  { id: 559, category: "genel", singular: "مَحَطَّةٌ", dual: "مَحَطَّتَانِ", plural: "مَحَطَّاتٌ", meaning: "İstasyon: Tren ve otobüs durağı" },
  { id: 560, category: "genel", singular: "مَطَارٌ", dual: "مَطَارَانِ", plural: "مَطَارَاتٌ", meaning: "Havalimanı: Uçakların kalktığı alan" },
  { id: 561, category: "genel", singular: "سَفَرٌ", dual: "سَفَرَانِ", plural: "أَسْفَارٌ", meaning: "Yolculuk: Bir yerden başka yere seyahat" },
  { id: 562, category: "genel", singular: "رِحْلَةٌ", dual: "رِحْلَتَانِ", plural: "رِحْلَاتٌ", meaning: "Gezi: İbret ve seyahat yolculuğu" },
  { id: 563, category: "genel", singular: "إِقَامَةٌ", dual: "إِقَامَتَانِ", plural: "إِقَامَاتٌ", meaning: "İkamet: Bir beldede yerleşip kalma" },
  { id: 564, category: "genel", singular: "جَوَازُ سَفَرٍ", dual: "جَوَازَا سَفَرٍ", plural: "جَوَازَاتُ سَفَرٍ", meaning: "Pasaport: Seyahat belgesi" },
  { id: 565, category: "genel", singular: "تَذْكِرَةٌ", dual: "تَذْكِرَتَانِ", plural: "تَذَاكِرُ", meaning: "Bilet: Giriş ve seyahat fişi" },
  { id: 566, category: "genel", singular: "نُقُودٌ", dual: "نَقْدَانِ", plural: "أَنْقَادٌ", meaning: "Para: Alışverişte kullanılan nakit" },
  { id: 567, category: "genel", singular: "دِينَارٌ", dual: "دِينَارَانِ", plural: "دَنَانِيرُ", meaning: "Dinar: Altın para birimi" },
  { id: 568, category: "genel", singular: "دِرْهَمٌ", dual: "دِرْهَمَانِ", plural: "دَرَاهِمُ", meaning: "Dirhem: Gümüş para birimi" },
  { id: 569, category: "genel", singular: "لِيرَةٌ", dual: "لِيرَتَانِ", plural: "لِيرَاتٌ", meaning: "Lira: Para birimi" },
  { id: 570, category: "genel", singular: "بَنْكٌ", dual: "بَنْكَانِ", plural: "بُنُوكٌ", meaning: "Banka: Para muhafaza ve ticaret kurumu" },
  { id: 571, category: "genel", singular: "حِسَابٌ", dual: "حِسَابَانِ", plural: "حِسَابَاتٌ", meaning: "Hesap: Aritmetik işlem, banka hesabı" },
  { id: 572, category: "genel", singular: "فَاتُورَةٌ", dual: "فَاتُورَتَانِ", plural: "فَوَاتِيرُ", meaning: "Fatura: Alışveriş masraf dökümü" },
  { id: 573, category: "genel", singular: "شِيكٌ", dual: "شِيكَانِ", plural: "شِيكَاتٌ", meaning: "Çek: Ödeme emri evrakı" },
  { id: 574, category: "genel", singular: "مَلْبَسٌ", dual: "مَلْبَسَانِ", plural: "مَلَابِسُ", meaning: "Elbise: Giyilen giysi" },
  { id: 575, category: "genel", singular: "قَمِيصٌ", dual: "قَمِيصَانِ", plural: "قُمْصَانٌ / أَقْمِصَةٌ", meaning: "Gömlek: Üst bedene giyilen giysi" },
  { id: 576, category: "genel", singular: "ثَوْبٌ", dual: "ثَوْبَانِ", plural: "ثِيَابٌ / أَثْوَابٌ", meaning: "Kumaş / Elbise: Giyilen kumaş giysi" },
  { id: 577, category: "genel", singular: "سِرْوَالٌ", dual: "سِرْوَالَانِ", plural: "سَرَاوِيلُ", meaning: "Pantolon: Bacakları örten don ve pantolon" },
  { id: 578, category: "genel", singular: "خِمَارٌ", dual: "خِمَارَانِ", plural: "خُمُرٌ", meaning: "Başörtüsü: Baş ve boynu örten örtü" },
  { id: 579, category: "genel", singular: "جِلْبَابٌ", dual: "جِلْبَابَانِ", plural: "جَلَابِيبُ", meaning: "Çarşaf / Ferace: Dışarı çıkarken giyilen geniş örtü" },
  { id: 580, category: "genel", singular: "حِذَاءٌ", dual: "حِذَاءَانِ", plural: "أَحْذِيَةٌ", meaning: "Ayakkabı: Ayağa giyilen pabuç" },
  { id: 581, category: "genel", singular: "جَوْرَبٌ", dual: "جَوْرَبَانِ", plural: "جَوَارِبُ", meaning: "Çorap: Ayağa giyilen örgü kılıf" },
  { id: 582, category: "genel", singular: "قُفَّازٌ", dual: "قُفَّازَانِ", plural: "قَفَافِيزُ", meaning: "Eldiven: Eli örten koruyucu" },
  { id: 583, category: "genel", singular: "مِحْفَظَةُ نُقُودٍ", dual: "مِحْفَظَتَا نُقُودٍ", plural: "مَحَافِظُ نُقُودٍ", meaning: "Cüzdan: Para konulan küçük çanta" },
  { id: 584, category: "genel", singular: "مِكْنَسَةٌ", dual: "مِكْنَسَتَانِ", plural: "مَكَانِسُ", meaning: "Süpürge: Toz süpürme aleti" },
  { id: 585, category: "genel", singular: "غَسَّالَةٌ", dual: "غَسَّالَتَانِ", plural: "غَسَّالَاتٌ", meaning: "Çamaşır makinesi: Giysi yıkama cihazı" },
  { id: 586, category: "genel", singular: "ثَلَّاجَةٌ", dual: "ثَلَّاجَتَانِ", plural: "ثَلَّاجَاتٌ", meaning: "Buzdolabı: Gıdaları soğuk tutan dolap" },
  { id: 587, category: "genel", singular: "فُرْنٌ", dual: "فُرْنَانِ", plural: "أَفْرَانٌ", meaning: "Fırın: Ekmek ve yemek pişirme ocağı" },
  { id: 588, category: "genel", singular: "طَبَقٌ", dual: "طَبَقَانِ", plural: "أَطْبَاقٌ", meaning: "Tabak: Yemek konulan yayvan kap" },
  { id: 589, category: "genel", singular: "فِنْجَانٌ", dual: "فِنْجَانَانِ", plural: "فَنَاجِينُ", meaning: "Fincan: Kahve ve çay içilen küçük kulplu kap" },
  { id: 590, category: "genel", singular: "كُوبٌ", dual: "كُوبَانِ", plural: "أَكْوَابٌ", meaning: "Kupa / Bardak: Su içilen kulpsuz kap" },
  { id: 591, category: "genel", singular: "مِلْعَقَةٌ", dual: "مِلْعَقَتَانِ", plural: "مَلَاعِقُ", meaning: "Kaşık: Çorba ve yemek yeme aleti" },
  { id: 592, category: "genel", singular: "شَوْكَةٌ", dual: "شَوْكَتَانِ", plural: "شُوَاكٌ", meaning: "Çatal: Yemek alma aleti" },
  { id: 593, category: "genel", singular: "سِكِّينٌ", dual: "سِكِّينَانِ", plural: "سَكَاكِينُ", meaning: "Bıçak: Kesme aleti" },
  { id: 594, category: "genel", singular: "قِدْرٌ", dual: "قِدْرَانِ", plural: "قُدُورٌ", meaning: "Tencere: Yemek pişirilen derin kap" },
  { id: 595, category: "genel", singular: "كَأْسٌ", dual: "كَأْسَانِ", plural: "كُؤُوسٌ", meaning: "Kadeh: İçecek bardağı" },
  { id: 596, category: "genel", singular: "سَنَةٌ", dual: "سَنَتَانِ", plural: "سَنَوَاتٌ / سِنُونَ", meaning: "Sene: On iki aylık yıl müddeti" },
  { id: 597, category: "genel", singular: "عَامٌ", dual: "عَامَانِ", plural: "أَعْوَامٌ", meaning: "Yıl: Kameri veya şemsi sene" },
  { id: 598, category: "genel", singular: "شَهْرٌ", dual: "شَهْرَانِ", plural: "أَشْهُرٌ / شُهُورٌ", meaning: "Ay: Otuz günlük zaman dilimi" },
  { id: 599, category: "genel", singular: "أُسْبُوعٌ", dual: "أُسْبُوعَانِ", plural: "أَسَابِيعُ", meaning: "Hafta: Yedi günlük zaman süresi" },
  { id: 600, category: "genel", singular: "صَبَاحٌ", dual: "صَبَاحَانِ", plural: "أَصْبَاحٌ", meaning: "Sabah: Günün ilk aydınlık vakti" },
  { id: 601, category: "genel", singular: "ظُهْرٌ", dual: "ظُهْرَانِ", plural: "أَظْهَارٌ", meaning: "Öğle: Güneşin tepeyi aştığı vakit" },
  { id: 602, category: "genel", singular: "عَصْرٌ", dual: "عَصْرَانِ", plural: "أَعْصَارٌ", meaning: "İkindi: Güneşin batmaya meylettiği vakit" },
  { id: 603, category: "genel", singular: "مَسَاءٌ", dual: "مَسَاءَانِ", plural: "أَمْسِيَةٌ", meaning: "Akşam: Güneşin battığı vakit" },
  { id: 604, category: "genel", singular: "غُرُوبٌ", dual: "غُرُوبَانِ", plural: "غُرُوبَاتٌ", meaning: "Gurup: Güneşin ufukta kayboluşu" },
  { id: 605, category: "genel", singular: "شُرُوقٌ", dual: "شُرُوقَانِ", plural: "شُرُوقَاتٌ", meaning: "Şuruk: Güneşin ufuktan doğuşu" },
  { id: 606, category: "genel", singular: "سَاعَةٌ", dual: "سَاعَتَانِ", plural: "سَاعَاتٌ", meaning: "Saat: Altmış dakikalık zaman dilimi" },
  { id: 607, category: "genel", singular: "دَقِيقَةٌ", dual: "دَقِيقَتَانِ", plural: "دَقَائِقُ", meaning: "Dakika: Altmış saniyelik zaman" },
  { id: 608, category: "genel", singular: "ثَانِيَةٌ", dual: "ثَانِيَتَانِ", plural: "ثَوَانٍ", meaning: "Saniye: Dakikanın altmışta biri" },
  { id: 609, category: "genel", singular: "لَحْظَةٌ", dual: "لَحْظَتَانِ", plural: "لَحَظَاتٌ", meaning: "Lahza: Göz açıp kapama süresi, an" },
  { id: 610, category: "genel", singular: "مَوْسِمٌ", dual: "مَوْسِمَانِ", plural: "مَوَاسِمُ", meaning: "Mevsim: Yılın dört ana döneminden her biri" },
  { id: 611, category: "genel", singular: "رَبِيعٌ", dual: "رَبِيعَانِ", plural: "أَرْبِعَاءُ", meaning: "İlkbahar: Ağaçların çiçek açtığı mevsim" },
  { id: 612, category: "genel", singular: "صَيْفٌ", dual: "صَيْفَانِ", plural: "أَصْيَافٌ", meaning: "Yaz: Sıcak günlerin mevsimi" },
  { id: 613, category: "genel", singular: "خَرِيفٌ", dual: "خَرِيفَانِ", plural: "أَخْرِفَةٌ", meaning: "Sonbahar: Yaprakların döküldüğü mevsim" },
  { id: 614, category: "genel", singular: "شِتَاءٌ", dual: "شِتَاءَانِ", plural: "أَشْتِيَةٌ", meaning: "Kış: Soğuk ve karlı mevsim" },
  { id: 615, category: "genel", singular: "سَحَابٌ", dual: "سَحَابَانِ", plural: "سُحُبٌ", meaning: "Bulut: Gökte toplanan su buharı kütlesi" },
  { id: 616, category: "genel", singular: "مَطَرٌ", dual: "مَطَرَانِ", plural: "أَمْطَارٌ", meaning: "Yağmur: Gökten inen bereketli damlalar" },
  { id: 617, category: "genel", singular: "ثَلْجٌ", dual: "ثَلْجَانِ", plural: "ثُلُوجٌ", meaning: "Kar: Beyaz kristal yağış" },
  { id: 618, category: "genel", singular: "بَرَدٌ", dual: "بَرَدَانِ", plural: "أَبْرَادٌ", meaning: "Dolu: Donmuş taneli yağmur damlaları" },
  { id: 619, category: "genel", singular: "ضَبَابٌ", dual: "ضَبَابَانِ", plural: "أَضِبَّةٌ", meaning: "Sis: Yere inen yoğun duman bulutu" },
  { id: 620, category: "genel", singular: "عَاصِفَةٌ", dual: "عَاصِفَتَانِ", plural: "عَوَاصِفُ", meaning: "Fırtına: Şiddetli esen kasırga yeli" },
  { id: 621, category: "genel", singular: "حَرَارَةٌ", dual: "حَرَارَتَانِ", plural: "حَرَارَاتٌ", meaning: "Sıcaklık: Isı derecesi, hararet" },
  { id: 622, category: "genel", singular: "بُرُودَةٌ", dual: "بُرُودَتَانِ", plural: "بُرُودَاتٌ", meaning: "Soğukluk: Düşük ısı, ayaz" },
  { id: 623, category: "genel", singular: "رُطُوبَةٌ", dual: "رُطُوبَتَانِ", plural: "رُطُوبَاتٌ", meaning: "Nem: Havadaki ıslaklık derecesi" },
  { id: 624, category: "genel", singular: "صَوْتٌ", dual: "صَوْتَانِ", plural: "أَصْوَاتٌ", meaning: "Ses: Kulağa ulaşan seda" },
  { id: 625, category: "genel", singular: "صَدًى", dual: "صَدَيَانِ", plural: "أَصْدَاءٌ", meaning: "Yankı: Sesin duvara çarpıp dönmesi" },
  { id: 626, category: "genel", singular: "نِدَاءٌ", dual: "نِدَاءَانِ", plural: "أَنْدِيَةٌ", meaning: "Çağrı: Seslenme, haykırış" },
  { id: 627, category: "genel", singular: "قِصَّةٌ", dual: "قِصَّتَانِ", plural: "قِصَصٌ", meaning: "Kıssa: İbret verici tarihi anlatı" },
  { id: 628, category: "genel", singular: "حِكَايَةٌ", dual: "حِكَايَتَانِ", plural: "حِكَايَاتٌ", meaning: "Hikaye: Yaşanmış veya kurgusal olay" },
  { id: 629, category: "genel", singular: "رِوَايَةٌ", dual: "رِوَايَتَانِ", plural: "رِوَايَاتٌ", meaning: "Roman / Rivayet: Nakil ve geniş edebi anlatı" },
  { id: 630, category: "genel", singular: "شِعْرٌ", dual: "شِعْرَانِ", plural: "أَشْعَارٌ", meaning: "Şiir: Vezinli ve kafiyeli söz sanatı" },
  { id: 631, category: "genel", singular: "قَصِيدَةٌ", dual: "قَصِيدَتَانِ", plural: "قَصَائِدُ", meaning: "Kaside: Uzun manzum şiir" },
  { id: 632, category: "genel", singular: "بَيْتُ شِعْرٍ", dual: "بَيْتَا شِعْرٍ", plural: "أَبْيَاتُ شِعْرٍ", meaning: "Şiir beyti: İki mısradan oluşan dize" },
  { id: 633, category: "genel", singular: "غَزَلٌ", dual: "غَزَلَانِ", plural: "أَغْزَالٌ", meaning: "Gazel: Aşk ve güzelliği terennüm eden şiir" },
  { id: 634, category: "genel", singular: "مَجَلَّةٌ", dual: "مَجَلَّتَانِ", plural: "مَجَلَّاتٌ", meaning: "Dergi: Süreli yayın, mevkute, bülten" },
  { id: 635, category: "genel", singular: "جَرِيدَةٌ", dual: "جَرِيدَتَانِ", plural: "جَرَائِدُ", meaning: "Gazete: Günlük haber neşriyatı" },
  { id: 636, category: "genel", singular: "إِعْلَانٌ", dual: "إِعْلَانَانِ", plural: "إِعْلَانَاتٌ", meaning: "Duyuru: Halka yapılan ilan ve bildiri" },
  { id: 637, category: "genel", singular: "مَكْتُوبٌ", dual: "مَكْتُوبَانِ", plural: "مَكَاتِيبُ", meaning: "Mektup: Yazılan haberleşme kâğıdı" },
  { id: 638, category: "genel", singular: "بَرِيدٌ", dual: "بَرِيدَانِ", plural: "أَبْرِدَةٌ", meaning: "Posta: Mektup ve kargo ulaştırma teşkilatı" },
  { id: 639, category: "genel", singular: "هَاتِفٌ", dual: "هَاتِفَانِ", plural: "هَوَاتِفُ", meaning: "Telefon: Ses ileten haberleşme cihazı" },
  { id: 640, category: "genel", singular: "شَبَكَةٌ", dual: "شَبَكَتَانِ", plural: "شَبَكَاتٌ", meaning: "Ağ / İnternet: Birbirine bağlı iletişim ağı" },
  { id: 641, category: "genel", singular: "حَاسُوبٌ", dual: "حَاسُوبَانِ", plural: "حَوَاسِيبُ", meaning: "Bilgisayar: Elektronik hesaplama ve veri cihazı" },
  { id: 642, category: "genel", singular: "شَاشَةٌ", dual: "شَاشَتَانِ", plural: "شَاشَاتٌ", meaning: "Ekran: Görüntü veren cam panel" },
  { id: 643, category: "genel", singular: "فَوْزٌ", dual: "فَوْزَانِ", plural: "أَفْوَازٌ", meaning: "Kazanma: Başarı, müsabaka galibiyeti" },
  { id: 644, category: "genel", singular: "هَزِيمَةٌ", dual: "هَزِيمَتَانِ", plural: "هَزَائِمُ", meaning: "Mağlubiyet: Yenilgiye uğrama hali" },
  { id: 645, category: "genel", singular: "رِبْحٌ", dual: "رِبْحَانِ", plural: "أَرْبَاحٌ", meaning: "Kâr: Ticaretten elde edilen fazlalık" },
  { id: 646, category: "genel", singular: "خَسَارَةٌ", dual: "خَسَارَتَانِ", plural: "خَسَائِرُ", meaning: "Zarar: Mal ve sermaye kaybı" },
  { id: 647, category: "genel", singular: "صِحَّةٌ", dual: "صِحَّتَانِ", plural: "صِحَّاتٌ", meaning: "Sağlık: Afiyet ve beden esenliği" },
  { id: 648, category: "genel", singular: "مَرَضٌ", dual: "مَرَضَانِ", plural: "أَمْرَاضٌ", meaning: "Hastalık: Sıhhatin bozulması hali" },
  { id: 649, category: "genel", singular: "دَوَاءٌ", dual: "دَوَاءَانِ", plural: "أَدْوِيَةٌ", meaning: "İlaç: Hastalığı iyileştiren şifa vesilesi" },
  { id: 650, category: "genel", singular: "شِفَاءٌ", dual: "شِفَاءَانِ", plural: "أَشْفِيَةٌ", meaning: "Şifa: Hastalıktan kurtulup iyileşme" },
  { id: 651, category: "genel", singular: "أَلَمٌ", dual: "أَلَمَانِ", plural: "آلَامٌ", meaning: "Acı: Bedeni ve ruhi elem" },
  { id: 652, category: "genel", singular: "جُرْحٌ", dual: "جُرْحَانِ", plural: "جُرُوحٌ / جِرَاحٌ", meaning: "Yara: Beden dokusunun kesilip yırtılması" },
  { id: 653, category: "genel", singular: "مُسْتَشْفًى", dual: "مُسْتَشْفَيَانِ", plural: "مُسْتَشْفَيَاتٌ", meaning: "Hastane: Hastaların tedavi edildiği şifahane" },
  { id: 654, category: "genel", singular: "عِيَادَةٌ", dual: "عِيَادَتَانِ", plural: "عِيَادَاتٌ", meaning: "Poliklinik: Doktor muayenehanesi" },
  { id: 655, category: "genel", singular: "صَيْدَلِيَّةٌ", dual: "صَيْدَلِيَّتَانِ", plural: "صَيْدَلِيَّاتٌ", meaning: "Eczane: İlaç yapılan ve satılan yer" },
  { id: 656, category: "genel", singular: "طَعَامٌ", dual: "طَعَامَانِ", plural: "أَطْعِمَةٌ", meaning: "Yemek: Beslenilen her türlü azık" },
  { id: 657, category: "genel", singular: "خُبْزٌ", dual: "خُبْزَانِ", plural: "أَخْبَازٌ", meaning: "Ekmek: Undan pişirilen temel gıda" },
  { id: 658, category: "genel", singular: "لَحْمٌ", dual: "لَحْمَانِ", plural: "لُحُومٌ", meaning: "Et: Helal hayvan eti gıdası" },
  { id: 659, category: "genel", singular: "سَمَكٌ", dual: "سَمَكَانِ", plural: "أَسْمَاكٌ", meaning: "Balık: Denizden çıkan et nimeti" },
  { id: 660, category: "genel", singular: "دَجَاجٌ", dual: "دَجَاجَتَانِ", plural: "دَجَاجَاتٌ", meaning: "Tavuk: Kümes kuşu eti" },
  { id: 661, category: "genel", singular: "بَيْضٌ", dual: "بَيْضَتَانِ", plural: "بُيُوضٌ", meaning: "Yumurta: Kuş ve tavuk yumurtası" },
  { id: 662, category: "genel", singular: "جُبْنٌ", dual: "جُبْنَانِ", plural: "أَجْبَانٌ", meaning: "Peynir: Sütten mayalanan gıda" },
  { id: 663, category: "genel", singular: "حَلِيبٌ", dual: "حَلِيبَانِ", plural: "أَحْلِبَةٌ", meaning: "Süt: Taze sağılmış süt" },
  { id: 664, category: "genel", singular: "زُبْدَةٌ", dual: "زُبْدَتَانِ", plural: "زُبَدٌ", meaning: "Tereyağı: Sütün kaymağından çıkarılan yağ" },
  { id: 665, category: "genel", singular: "سُكَّرٌ", dual: "سُكَّرَانِ", plural: "أَسْكَارٌ", meaning: "Şeker: Tatlı kristal gıda maddesi" },
  { id: 666, category: "genel", singular: "مِلْحٌ", dual: "مِلْحَانِ", plural: "أَمْلَاحٌ", meaning: "Tuz: Yemeklere lezzet katan mineral" },
  { id: 667, category: "genel", singular: "فَاكِهَةٌ", dual: "فَاكِهَتَانِ", plural: "فَوَاكِهُ", meaning: "Meyve: Ağaçta yetişen tatlı yemiş" },
  { id: 668, category: "genel", singular: "تُفَّاحٌ", dual: "تُفَّاحَتَانِ", plural: "تُفَّاحَاتٌ", meaning: "Elma: Kırmızı ve yeşil lezzetli meyve" },
  { id: 669, category: "genel", singular: "بُرْتُقَالٌ", dual: "بُرْتُقَالَتَانِ", plural: "بُرْتُقَالَاتٌ", meaning: "Portakal: C vitamini zengini narenciye" },
  { id: 670, category: "genel", singular: "عِنَبٌ", dual: "عِنَبَانِ", plural: "أَعْنَابٌ", meaning: "Üzüm: Asmada yetişen salkım meyve" },
  { id: 671, category: "genel", singular: "تِينٌ", dual: "تِينَتَانِ", plural: "أَتْيَانٌ", meaning: "İncir: Mübarek tatlı meyve" },
  { id: 672, category: "genel", singular: "رُمَّانٌ", dual: "رُمَّانَتَانِ", plural: "رَمَامِينُ", meaning: "Nar: Taneli kırmızı şifalı meyve" },
  { id: 673, category: "genel", singular: "مَوْزٌ", dual: "مَوْزَتَانِ", plural: "أَمْوَازٌ", meaning: "Muz: Tropikal sarı tatlı meyve" },
  { id: 674, category: "genel", singular: "خُضَارٌ", dual: "خُضَارَانِ", plural: "خُضْرَاوَاتٌ", meaning: "Sebze: Bahçede yetişen yeşillik ve gıdalar" },
  { id: 675, category: "genel", singular: "طَمَاطِمُ", dual: "طَمَاطِمَتَانِ", plural: "طَمَاطِمَاتٌ", meaning: "Domates: Kırmızı sulu sebze" },
  { id: 676, category: "genel", singular: "بَطَاطِسُ", dual: "بَطَاطِسَتَانِ", plural: "بَطَاطِسَاتٌ", meaning: "Patates: Toprak altında yetişen yumru sebze" },
  { id: 677, category: "genel", singular: "بَصَلٌ", dual: "بَصَلَتَانِ", plural: "أَبْصَالٌ", meaning: "Soğan: Kat kat yemeklik kuru sebze" },
  { id: 678, category: "genel", singular: "ثَوْمٌ", dual: "ثَوْمَانِ", plural: "أَثْوَامٌ", meaning: "Sarımsak: Şifalı kokulu dişli sebze" },
  { id: 679, category: "genel", singular: "جَزَرٌ", dual: "جَزَرَتَانِ", plural: "جَزَرَاتٌ", meaning: "Havuç: Turuncu kök sebze" },
  { id: 680, category: "genel", singular: "خِيَارٌ", dual: "خِيَارَتَانِ", plural: "أَخْيَارٌ", meaning: "Salatalık: Yeşil taze hıyar sebzesi" },
  { id: 681, category: "genel", singular: "شَايٌ", dual: "شَايَانِ", plural: "أَشْيَاءُ الشَّاي", meaning: "Çay: Sıcak demlenen yaprak içeceği" },
  { id: 682, category: "genel", singular: "قَهْوَةٌ", dual: "قَهْوَتَانِ", plural: "قَهَوَاتٌ", meaning: "Kahve: Kavrulmuş çekirdekten yapılan içecek" },
  { id: 683, category: "genel", singular: "عَصِيرٌ", dual: "عَصِيرَانِ", plural: "عَصَائِرُ", meaning: "Meyve suyu: Meyvenin sıkılmasıyla elde edilen su" },
  { id: 684, category: "genel", singular: "زَيْتٌ", dual: "زَيْتَانِ", plural: "زُيُوتٌ", meaning: "Zeytinyağı: Zeytinden çıkarılan şifalı yağ" },
  { id: 685, category: "genel", singular: "خَلٌّ", dual: "خَلَّانِ", plural: "خُلُولٌ", meaning: "Sirke: Mayalanmış ekşi sıvı" },
  { id: 686, category: "genel", singular: "أَرُزٌّ", dual: "أَرُزَّانِ", plural: "آرَازٌ", meaning: "Pirinç: Pilav yapılan beyaz tane" },
  { id: 687, category: "genel", singular: "عَدَسٌ", dual: "عَدَسَانِ", plural: "أَعْدَاسٌ", meaning: "Mercimek: Çorbası yapılan bakliyat" },
  { id: 688, category: "genel", singular: "حِمَّصٌ", dual: "حِمَّصَانِ", plural: "أَحْمَاصٌ", meaning: "Nohut: Yuvarlak sarı bakliyat" },
  { id: 689, category: "genel", singular: "فُولٌ", dual: "فُولَانِ", plural: "أَفْوَالٌ", meaning: "Bakla: Taneli yeşil bakliyat" },
  { id: 690, category: "genel", singular: "قَمْحٌ", dual: "قَمْحَانِ", plural: "أَقْمَاحٌ", meaning: "Buğday: Un ve ekmek yapılan sarı başak" },
  { id: 691, category: "genel", singular: "شَعِيرٌ", dual: "شَعِيرَانِ", plural: "أَشْعَارٌ", meaning: "Arpa: Başaklı tahıl tanesi" },
  { id: 692, category: "genel", singular: "طَيْرٌ", dual: "طَيْرَانِ", plural: "طُيُورٌ / أَطْيَارٌ", meaning: "Kuş: Kanatlarıyla havada uçan canlı" },
  { id: 693, category: "genel", singular: "حَمَامَةٌ", dual: "حَمَامَتَانِ", plural: "حَمَامَاتٌ / حَمَائِمُ", meaning: "Güvercin: Barış simgesi evcil kuş" },
  { id: 694, category: "genel", singular: "عُصْفُورٌ", dual: "عُصْفُورَانِ", plural: "عَصَافِيرُ", meaning: "Serçe: Küçük sevimli ötücü kuş" },
  { id: 695, category: "genel", singular: "غُرَابٌ", dual: "غُرَابَانِ", plural: "غِرْبَانٌ / أَغْرِبَةٌ", meaning: "Karga: Siyah tüylü zeki kuş" },
  { id: 696, category: "genel", singular: "نَسْرٌ", dual: "نَسْرَانِ", plural: "نُسُورٌ", meaning: "Kartal: Yükseklerde uçan yırtıcı kuş" },
  { id: 697, category: "genel", singular: "هُدْهُدٌ", dual: "هُدْهُدَانِ", plural: "هَدَاهِدُ", meaning: "Hüthüt: İbik ve süslü tüyleri olan ibretli kuş" },
  { id: 698, category: "genel", singular: "أَسَدٌ", dual: "أَسَدَانِ", plural: "أُسُودٌ / آسَادٌ", meaning: "Aslan: Ormanların heybetli yırtıcı kralı" },
  { id: 699, category: "genel", singular: "نَمِرٌ", dual: "نَمِرَانِ", plural: "نُمُورٌ", meaning: "Kaplan / Pars: Çizgili yırtıcı hayvan" },
  { id: 700, category: "genel", singular: "ذِئْبٌ", dual: "ذِئْبَانِ", plural: "ذِئَابٌ", meaning: "Kurt: Vahşi yırtıcı sürü hayvanı" },
  { id: 701, category: "genel", singular: "ثَعْلَبٌ", dual: "ثَعْلَبَانِ", plural: "ثَعَالِبُ", meaning: "Tilki: Kurnaz tüylü kuyruklu hayvan" },
  { id: 702, category: "genel", singular: "دُبٌّ", dual: "دُبَّانِ", plural: "دِبَبَةٌ", meaning: "Ayı: İri yapılı kış uykusuna yatan hayvan" },
  { id: 703, category: "genel", singular: "فِيلٌ", dual: "فِيلَانِ", plural: "أَفْيَالٌ / فُيُولٌ", meaning: "Fil: Hortumlu iri cüsseli hayvan" },
  { id: 704, category: "genel", singular: "حِصَانٌ", dual: "حِصَانَانِ", plural: "أَحْصِنَةٌ", meaning: "At: Asil binek ve koşu hayvanı" },
  { id: 705, category: "genel", singular: "فَرَسٌ", dual: "فَرَسَانِ", plural: "أَفْرَاسٌ", meaning: "Kısrak / At: Hızlı koşan binek atı" },
  { id: 706, category: "genel", singular: "بَغْلٌ", dual: "بَغْلَانِ", plural: "بِغَالٌ", meaning: "Katır: Yük taşıyan dayanıklı melez hayvan" },
  { id: 707, category: "genel", singular: "حِمَارٌ", dual: "حِمَارَانِ", plural: "حَمِيرٌ / حُمُرٌ", meaning: "Eşek: Yük taşıyan evcil hayvan" },
  { id: 708, category: "genel", singular: "جَمَلٌ", dual: "جَمَلَانِ", plural: "جِمَالٌ", meaning: "Erkek deve: Çöl gemisi dayanıklı hayvan" },
  { id: 709, category: "genel", singular: "نَاقَةٌ", dual: "نَاقَتَانِ", plural: "نُوقٌ", meaning: "Dişi deve: Sütü sağılan dişi deve" },
  { id: 710, category: "genel", singular: "بَقَرَةٌ", dual: "بَقَرَتَانِ", plural: "بَقَرَاتٌ / بَقَرٌ", meaning: "İnek: Süt ve et veren büyükbaş hayvan" },
  { id: 711, category: "genel", singular: "ثَوْرٌ", dual: "ثَوْرَانِ", plural: "ثِيرَانٌ", meaning: "Boğa: Çift süren güçlü erkek sığır" },
  { id: 712, category: "genel", singular: "عِجْلٌ", dual: "عِجْلَانِ", plural: "عُجُولٌ", meaning: "Buzağı: İneğin küçük yavrusu" },
  { id: 713, category: "genel", singular: "خَرُوفٌ", dual: "خَرُوفَانِ", plural: "خِرْفَانٌ", meaning: "Kuzu: Koyunun sevimli yavrusu" },
  { id: 714, category: "genel", singular: "كَبْشٌ", dual: "كَبْشَانِ", plural: "كِبَاشٌ", meaning: "Koç: Boynuzlu erkek koyun" },
  { id: 715, category: "genel", singular: "شَاةٌ", dual: "شَاتَانِ", plural: "شِيَاهٌ", meaning: "Koyun: Yün ve süt veren küçükbaş hayvan" },
  { id: 716, category: "genel", singular: "مَاعِزٌ", dual: "مَاعِزَانِ", plural: "مَوَاعِزُ", meaning: "Keçi: Çevik tırmanıcı boynuzlu hayvan" },
  { id: 717, category: "genel", singular: "كَلْبٌ", dual: "كَلْبَانِ", plural: "كِلَابٌ", meaning: "Köpek: Sadık bekçi ve av hayvanı" },
  { id: 718, category: "genel", singular: "قِطٌّ", dual: "قِطَّانِ", plural: "قِطَاطٌ", meaning: "Kedi: Evcil sevimli temiz hayvan" },
  { id: 719, category: "genel", singular: "فَأْرٌ", dual: "فَأْرَانِ", plural: "فِئْرَانٌ", meaning: "Fare: Küçük kemirgen hayvan" },
  { id: 720, category: "genel", singular: "أَرْنَبٌ", dual: "أَرْنَبَانِ", plural: "أَرَانِبُ", meaning: "Tavşan: Uzun kulaklı hızlı kemirgen" },
  { id: 721, category: "genel", singular: "نَمْلَةٌ", dual: "نَمْلَتَانِ", plural: "نَمْلٌ / نِمَالٌ", meaning: "Karınca: Çalışkan ibretli küçük böcek" },
  { id: 722, category: "genel", singular: "نَحْلَةٌ", dual: "نَحْلَتَانِ", plural: "نَحْلٌ", meaning: "Bal arısı: İlahî ilhamla bal yapan arı" },
  { id: 723, category: "genel", singular: "ذُبَابٌ", dual: "ذُبَابَانِ", plural: "أَذِبَّةٌ", meaning: "Sinek: Havada uçan küçük kanatlı" },
  { id: 724, category: "genel", singular: "بَعُوضَةٌ", dual: "بَعُوضَتَانِ", plural: "بَعُوضٌ", meaning: "Sivrisinek: İnce hortumlu küçük ibretli uçucu" },
  { id: 725, category: "genel", singular: "عَنْكَبُوتٌ", dual: "عَنْكَبُوتَانِ", plural: "عَنَاكِبُ", meaning: "Örümcek: Ağ ören sekiz bacaklı canlı" },
  { id: 726, category: "genel", singular: "عَقْرَبٌ", dual: "عَقْرَبَانِ", plural: "عَقَارِبُ", meaning: "Akrep: Zehirli iğnesi olan kuyruklu hayvan" },
  { id: 727, category: "genel", singular: "حَيَّةٌ", dual: "حَيَّتَانِ", plural: "حَيَّاتٌ", meaning: "Yılan: Sürünerek ilerleyen pullu hayvan" },
  { id: 728, category: "genel", singular: "ضِفْدَعٌ", dual: "ضِفْدَعَانِ", plural: "ضَفَادِعُ", meaning: "Kurbağa: Suda ve karada zıplayan canlı" },
  { id: 729, category: "genel", singular: "دُودَةٌ", dual: "دُودَتَانِ", plural: "دِيدَانٌ", meaning: "Solucan / Kurtçuk: Toprakta yaşayan omurgasız" },
  { id: 730, category: "genel", singular: "شَجَرَةٌ", dual: "شَجَرَتَانِ", plural: "أَشْجَارٌ", meaning: "Ağaç: Kökü yerde dalları gökte bitki" },
  { id: 731, category: "genel", singular: "غُصْنٌ", dual: "غُصْنَانِ", plural: "أَغْصَانٌ", meaning: "Dal: Ağacın yaprak ve meyve taşıyan kolu" },
  { id: 732, category: "genel", singular: "وَرَقَةُ شَجَرٍ", dual: "وَرَقَتَا شَجَرٍ", plural: "أَوْرَاقُ شَجَرٍ", meaning: "Yaprak: Ağacın yeşil örtüsü" },
  { id: 733, category: "genel", singular: "زَهْرَةٌ", dual: "زَهْرَتَانِ", plural: "أَزْهَارٌ / زُهُورٌ", meaning: "Çiçek: Güzel kokulu ve renkli bitki tacı" },
  { id: 734, category: "genel", singular: "شَوْكٌ", dual: "شَوْكَتَانِ", plural: "أَشْوَاكٌ", meaning: "Diken: Bitkilerin sivri koruyucu ucu" },
  { id: 735, category: "genel", singular: "جِذْعٌ", dual: "جِذْعَانِ", plural: "جُذُوعٌ", meaning: "Gövde: Ağacın kalın ana direği" },
  { id: 736, category: "genel", singular: "عِرْقٌ", dual: "عِرْقَانِ", plural: "عُرُوقٌ", meaning: "Kök / Damar: Ağacın kökü; bedendeki kan damarı" },
  { id: 737, category: "genel", singular: "حَبَّةٌ", dual: "حَبَّتَانِ", plural: "حُبُوبٌ", meaning: "Tohum / Tane: Bitkinin üreme çekirdeği" },
  { id: 738, category: "genel", singular: "نَوَاةٌ", dual: "نَوَاةَانِ", plural: "نَوَيَاتٌ", meaning: "Çekirdek: Hurma ve zeytinin sert çekirdeği" },
  { id: 739, category: "genel", singular: "عَظْمٌ", dual: "عَظْمَانِ", plural: "عِظَامٌ", meaning: "Kemik: Bedeni ayakta tutan sert iskelet" },
  { id: 740, category: "genel", singular: "دَمٌ", dual: "دَمَانِ", plural: "دِمَاءٌ", meaning: "Kan: Canlıya hayat taşıyan kırmızı sıvı" },
  { id: 741, category: "genel", singular: "جِلْدٌ", dual: "جِلْدَانِ", plural: "جُلُودٌ", meaning: "Deri: Bedeni kaplayan koruyucu ten" },
  { id: 742, category: "genel", singular: "شَعْرٌ", dual: "شَعْرَانِ", plural: "أَشْعَارٌ", meaning: "Saç / Kıl: Başta ve bedende biten teller" },
  { id: 743, category: "genel", singular: "ظُفْرٌ", dual: "ظُفْرَانِ", plural: "أَظْفَارٌ", meaning: "Tırnak: Parmak uçlarındaki sert tabaka" },
  { id: 744, category: "genel", singular: "سِنٌّ", dual: "سِنَّانِ", plural: "أَسْنَانٌ", meaning: "Diş: Ağızdaki çiğneme organı; yaş" },
  { id: 745, category: "genel", singular: "ضِرْسٌ", dual: "ضِرْسَانِ", plural: "أَضْرَاسٌ", meaning: "Azı dişi: Çenenin gerisindeki öğütücü diş" },
  { id: 746, category: "genel", singular: "رِيقٌ", dual: "رِيقَانِ", plural: "أَرْيَاقٌ", meaning: "Tükürük: Ağızdaki sindirici ıslaklık" },
  { id: 747, category: "genel", singular: "عَرَقٌ", dual: "عَرَقَانِ", plural: "أَعْرَاقٌ", meaning: "Ter: Bedenin sıcaktan salgıladığı su" },
  { id: 748, category: "genel", singular: "دَمْعٌ", dual: "دَمْعَانِ", plural: "دُمُوعٌ", meaning: "Gözyaşı: Gözden dökülen şeffaf damla" },
  { id: 749, category: "genel", singular: "بَسْمَةٌ", dual: "بَسْمَتَانِ", plural: "بَسَمَاتٌ", meaning: "Tebessüm: Yüzdeki sevimli tatlı gülüş" },
  { id: 750, category: "genel", singular: "ضَحْكَةٌ", dual: "ضَحْكَتَانِ", plural: "ضَحَكَاتٌ", meaning: "Kahkaha: Sesli sevinç gülüşü" },
];

let VOCABULARY_WORDS = JSON.parse(JSON.stringify(DEFAULT_VOCABULARY_WORDS));

// CANLI BULUT SENKRONİZASYONU: Uygulamayı yeniden indirmeden kelimeleri anında güncelleme
try {
  const cachedVocab = localStorage.getItem('synced_vocab_words_v2');
  if (cachedVocab) {
    const parsed = JSON.parse(cachedVocab);
    if (Array.isArray(parsed) && parsed.length >= DEFAULT_VOCABULARY_WORDS.length) {
      VOCABULARY_WORDS = parsed;
    }
  }
} catch (_) {}

async function syncWordsFromCloud() {
  try {
    const res = await fetch('https://kayrici.github.io/sinirlayici-app/words_dataset.json?t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length >= DEFAULT_VOCABULARY_WORDS.length) {
        VOCABULARY_WORDS = data;
        localStorage.setItem('synced_vocab_words_v2', JSON.stringify(data));
      }
    }
  } catch (_) {}
}
// Offline-first: Auto network fetch disabled on game launch

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
    const screens = ["langMainMenuSection", "langSigaSelectionSection", "langVocabCategorySection", "langQuizSection", "langTableSection"];
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === screenId ? "flex" : "none");
    });

    const btnMenu = document.getElementById("btnLangMenu");
    const btnTable = document.getElementById("btnLangToggleTable");
    const title = document.getElementById("langModalTitle");

    if (screenId === "langQuizSection" || screenId === "langTableSection") {
      if (btnMenu) btnMenu.style.display = "inline-flex";
      if (btnTable) btnTable.style.display = (this.currentGameMode === "vocab" ? "none" : "inline-flex");
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
  // KELİME KATEGORİ MENÜSÜ AÇMA (Kur'an, Hadis, İslami Eserler, Genel)
  openVocabCategoryMenu() {
    this.currentGameMode = 'vocab';
    this.showScreen("langVocabCategorySection");
    const btnMenu = document.getElementById("btnLangMenu");
    const btnTable = document.getElementById("btnLangToggleTable");
    const title = document.getElementById("langModalTitle");
    const badge = document.getElementById("langPillBadge");

    if (btnMenu) btnMenu.style.display = "inline-flex";
    if (btnTable) btnTable.style.display = "none"; // KULLANICI İSTEĞİ: Tabloyu gör seçeneği olmasın!
    if (title) title.textContent = "Kelime Kategorileri";
    if (badge) badge.style.display = "none";
  }

  // Belirli bir kategori ile kelime testini başlatma
  startVocabCategory(category = 'all') {
    this.currentGameMode = 'vocab';
    this.currentVocabCategory = category;

    let list = VOCABULARY_WORDS;
    if (category && category !== 'all') {
      list = VOCABULARY_WORDS.filter(w => w.category === category);
    }
    if (!list || list.length === 0) list = VOCABULARY_WORDS;

    this.currentQuizWords = list.slice();
    this.initShuffledIndices();
    this.showScreen("langQuizSection");

    // KULLANICI İSTEĞİ: Tablo butonunu kesinlikle gizle
    const btnTable = document.getElementById("btnLangToggleTable");
    if (btnTable) btnTable.style.display = "none";

    const title = document.getElementById("langModalTitle");
    if (title) {
      if (category === 'kuran') title.textContent = "Kur'an Kelimeleri (150)";
      else if (category === 'hadis') title.textContent = "Hadis Kelimeleri (150)";
      else if (category === 'kitap') title.textContent = "İslami Kitaplar (150)";
      else if (category === 'genel') title.textContent = "Genel Kelimeler (300)";
      else title.textContent = "Kelime (750)";
    }

    this.renderQuestion();
  }

  // KELİME KATEGORİ MENÜSÜ AÇMA (Kur'an, Hadis, İslami Eserler, Genel)
  openVocabCategoryMenu() {
    this.currentGameMode = 'vocab';
    this.showScreen("langVocabCategorySection");
    const btnMenu = document.getElementById("btnLangMenu");
    const btnTable = document.getElementById("btnLangToggleTable");
    const title = document.getElementById("langModalTitle");
    const badge = document.getElementById("langPillBadge");

    if (btnMenu) btnMenu.style.display = "inline-flex";
    if (btnTable) btnTable.style.display = "none"; // KULLANICI İSTEĞİ: Tabloyu gör seçeneği olmasın!
    if (title) title.textContent = "Kelime Kategorileri";
    if (badge) badge.style.display = "none";
  }

  // Belirli bir kategori ile kelime testini başlatma
  startVocabCategory(category = 'all') {
    this.currentGameMode = 'vocab';
    this.currentVocabCategory = category;

    let list = VOCABULARY_WORDS;
    if (category && category !== 'all') {
      list = VOCABULARY_WORDS.filter(w => w.category === category);
    }
    if (!list || list.length === 0) list = VOCABULARY_WORDS;

    this.currentQuizWords = list.slice();
    this.initShuffledIndices();
    this.showScreen("langQuizSection");

    // KULLANICI İSTEĞİ: Tablo butonunu kesinlikle gizle
    const btnTable = document.getElementById("btnLangToggleTable");
    if (btnTable) btnTable.style.display = "none";

    const title = document.getElementById("langModalTitle");
    if (title) {
      if (category === 'kuran') title.textContent = "Kur'an Kelimeleri (150)";
      else if (category === 'hadis') title.textContent = "Hadis Kelimeleri (150)";
      else if (category === 'kitap') title.textContent = "İslami Kitaplar (150)";
      else if (category === 'genel') title.textContent = "Genel Kelimeler (300)";
      else title.textContent = "Kelime (750)";
    }

    this.renderQuestion();
  }

  startVocabGame() {
    this.openVocabCategoryMenu();
  }

  toggleTableDirectly() {
    if (this.currentGameMode === "vocab") return; // Kelime modunda tablo yok
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
          /* vibration disabled */
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
      /* vibration disabled */
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
    if (window.languageGame.currentGameMode === 'vocab') {
      window.languageGame.renderQuestion();
    } else {
      window.languageGame.currentOrderIndex = (window.languageGame.currentOrderIndex + 1) % window.languageGame.currentQuizWords.length;
      window.languageGame.renderQuestion();
    }
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
