```
初回リリース
eas build --platform all

スクショのサイズ
iPhone 11Pro Max
iPhone 8 Plus
iPad Pro 12.9
```

```
リリース
app jsonのversion, buildNumber, versionCodeを更新
eas build --platform all
```

```
[最初]
- hunter-hunterのフォルダをコピーして漫画名にする
- .gitを削除する
- git init
- yarn install

[問合せ]
Googleフォームを作成
https://docs.google.com/forms/u/0/

※回答→通知を受け取るを忘れないように
※短縮URLはだめ！

[広告]
AbMobで、iOSとAnrdoid両方で、リワードとフッターの両方を取得する

[設定変更]
src/styles/common.tsの色を修正
src/common/common.tsの値を修正

[app.json]
- name
- slug
- version
- splash.backgroundColor
- ios.buildNumber
- ios.config.googleMobileAdsAppId
- ios.bundleIdentifier
- ios.appStoreUrl
- android.package
- android.versionCode
- android.adaptiveIcon.backgroundColor
- android.config.googleMobileAdsAppId
- android.playStoreUrl

[pakacege.json]
name

[画像]
- home-logo.png（500*200）
- adaptive-icon.png（1024*1024）　PhotoSpaceXで66%でちょうどいい
- icon.png（1024*1024）　https://sozai.cman.jp/icon/string/alphabet1/?p=2
- splash.png（500*200）
- jenny.png（200*200）

[クイズ]
- ONEDRIVE にエクセルファイルをあげる
- csv ファイルをアウトプットする（挿入→export csv）
- https://www.aconvert.com/jp/document/csv-to-json/ このサイトで json ファイルに変換する
- quiz-batch の inputs フォルダに csv ファイルをおく（ファイル名は base.json）
- node csv.ts を実行すると、outputs フォルダに list.json ファイルがあるのでコピーする
- hunter-hunter の assets.quizAll.tsx に貼り付ける
```
