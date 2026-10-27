# 📦 Ekstra Özellikler Modül Paketi (Kullanım Kılavuzu)

Bu paket; **Hafıza Oyunu, Arapça Soruları, Arapça Admin Sayfası, Arapça Hikaye ve Arapça Hikaye Kelimeleri** özelliklerini ana uygulamadan bağımsızlaştırmak ve dilediğiniz herhangi bir web veya mobil uygulamaya **tek satırla** ekleyebilmeniz için hazırlanmıştır.

---

## 📁 Paket İçeriği

| Dosya / Klasör | Açıklama |
|---|---|
| `feature_manager.js` | **Evrensel Yönetici:** Herhangi bir sayfada özellikleri açıp kapatmayı sağlayan tek kontrolcü. |
| `ornek_entegrasyon.html` | Butonların ve özelliklerin nasıl çalıştığını gösteren canlı demo sayfası. |
| `hafiza.html` + `hafiza/` | Hafıza Oyunu ve tüm ses/stil bileşenleri. |
| `dil_oyunu.html` + `language_game.js` + `words_dataset.json` | Emsile, Zamirler ve 778 kelimelik adaptif Arapça soru oyunu. |
| `dil_oyunu_admin.html` | Tüm kilitlerin açık olduğu Arapça kelime yönetim paneli. |
| `hikaye.html` + `hikaye_data.js` | 40 sayfalık interaktif Arapça hikaye ve kelime çözümleme aracı. |
| `hikaye_kelimeler.html` | Hikayedeki kelimeleri pekiştiren adaptif test sistemi. |

---

## 🚀 İstediğiniz Bir Uygulamaya Nasıl Eklersiniz?

### Adım 1: Klasörü Projenize Kopyalayın
Bu `Ekstra_Moduller_Paketi` klasörünü hedef projenizin dizinine (örneğin `assets/modules/` veya doğrudan ana dizine) yapıştırın.

### Adım 2: Sayfanıza Script'i Ekleyin
Hedef sayfanızın `<head>` veya `<body>` etiketleri arasına şu satırı ekleyin:
```html
<script src="feature_manager.js"></script>
```
*(Eğer bir alt klasörde tutuyorsanız yolu ona göre ayarlayın, örneğin `modules/feature_manager.js`)*

### Adım 3: Butonlarınızı Oluşturun
Sayfanızdaki herhangi bir butona `onclick` olayı ekleyerek dilediğiniz özelliği açtırın:

```html
<!-- 1. Hafıza Oyunu -->
<button onclick="FeatureManager.open('hafiza')">🧠 Hafıza Oyunu</button>

<!-- 2. Arapça Soru & Dil Oyunu -->
<button onclick="FeatureManager.open('dil_oyunu')">📖 Arapça Soruları</button>

<!-- 3. Arapça Admin Yönetim Sayfası -->
<button onclick="FeatureManager.open('admin')">⚙️ Arapça Admin Paneli</button>

<!-- 4. Arapça Hikaye -->
<button onclick="FeatureManager.open('hikaye')">📜 Arapça Hikaye</button>

<!-- 5. Arapça Hikaye Kelimeleri Testi -->
<button onclick="FeatureManager.open('hikaye_kelimeler')">✍️ Hikaye Kelimeleri</button>

<!-- Kapatma Butonu (İsteğe bağlı, modül açıldığında zaten kendi geri butonu da vardır) -->
<button onclick="FeatureManager.close()">Kapat</button>

<!-- Aç/Kapat Toggle Butonu -->
<button onclick="FeatureManager.toggle('hafiza')">Hafıza Aç / Kapat</button>
```

---

## 🛡️ İzolasyon ve Güvenlik Avantajı
- Her özellik tam ekran **izole bir iframe** içinde çalışır.
- Ana uygulamanızın JavaScript değişkenlerini, fonksiyonlarını veya CSS stillerini **asla bozmaz ve çakışma yaratmaz**.
- Kullanıcı sol üstteki **"⬅ Ana Menüye Dön"** butonuna bastığında iframe içeriği bellekten (`about:blank`) tamamen silinir; arka planda ses veya işlemci yükü bırakmaz.

---

## 💻 Test Etmek İçin
Klasörün içindeki `ornek_entegrasyon.html` dosyasını herhangi bir tarayıcıda çift tıklayarak açabilirsiniz.
