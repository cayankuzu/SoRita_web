# SoRita Public Website

Bu klasor, GitHub Pages veya benzeri bir statik hosting uzerine yuklenebilecek hazir web sitesini icerir.

## Dosyalar

- `index.html`: Figma V3 tasarimini uygulayan minimal urun landing sayfasi
- `assets/`: resmi uygulama ikonu, gercek Home/Explore/Profile ekranlari ve resmi magaza rozetleri
- `download/index.html`: iOS ve Android magaza hedefleri
- `lists/index.html`: paylasilan liste baglantilarini uygulamaya aktaran handoff sayfasi
- `auth/callback/index.html`: kimlik dogrulama deep-link handoff sayfasi
- `reset-password/index.html`: sifre sifirlama deep-link handoff sayfasi
- `404.html`: legacy liste baglantisi ve bilinmeyen rota durumlari
- `gizlilik.html`: gizlilik politikasi
- `kvkk.html`: KVKK aydinlatma metni
- `cocuk-guvenligi.html`: cocuk guvenligi sayfasi
- `kullanim-kosullari.html`: kullanim kosullari
- `story/index.html`: eski hikaye linklerini `download/` sayfasina yonlendiren uyumluluk sayfasi
- `styles.css`: ortak Figma V3 tokenlari, responsive ekran sistemi ve route-state stilleri
- `main.js`: erisilebilir Home/Explore/Profile mockup karuseli

## GitHub Pages yayinlama

1. Yeni public repoda bu klasorun icindekileri kok dizine koy.
2. GitHub uzerinde `Settings > Pages` alanina gir.
3. `Deploy from a branch` sec.
4. `main` branch ve `/ (root)` klasorunu sec.
5. Kaydet ve yayin linkinin olusmasini bekle.

## Yayin oncesi kontrol

- Kamusal yayin adresi olarak `https://cayankuzu.github.io/SoRita_web/` bilgisini kullan.
- Gerekirse veri sorumlusu kimligini acik yaz.
- Hukuki metinleri bir uzmanla son kez gozden gecir.
