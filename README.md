# Daz3DScriptSet
DAZ Studioのスクリプト集です。
自分が作画時に使用したものを都度、追加していこうかと思います。



## LimitList.dsa：各関節のLimitの設定を一覧表示する

各関節のLimitの設定を一覧表示します。  
表示したいFigureのノードを選択して、スクリプトを実行してください。

![実行結果](https://github.com/lowpolysnow/DAZStudioScriptSet/blob/images/LimitList_1.png "実行結果")

下図のように、Limit設定が解除されている関節は緑色で表示されます。

!["説明1"](https://github.com/lowpolysnow/DAZStudioScriptSet/blob/images/LimitList_2.png "説明1")

現在のところ、Genesis3Femaleのみに対応しています。  
関節の構造が異なるため、Genesis3MaleやGenesis8への対応は若干の改造が必要です。

### 使い方（インストール方法）

本スクリプトでは、事前に用意した画像ファイルをウィンドウ上に表示します。

LimitList_imagesフォルダ内の各PNGファイルを任意のフォルダに格納し、LimitList.dsa内の以下の箇所に画像ファイルのフルパスを指定してください。

設定例）

```javascript
var basepath = "C:/DAZ Studio/LimitList/images/";
```

### 開発背景

PoseをFigureへ適用する時、下記のようにLimit設定を解除するか尋ねられることがあります。「Turn limits off」を選択するとFigureのLimit設定が解除されますが、このとき、どの関節を解除したのかは特に表示されません。

普段、ポーズ適用後にカスタマイズをすることが多かったため、どの関節のLimit設定が解除されたのか把握しておきたくて、開発しました。

![開発背景](https://github.com/lowpolysnow/DAZStudioScriptSet/blob/images/LimitList_3.png "開発背景")

### 仕組み

各NodeのPropertyのうち、XRotate、YRotate、ZRotateの`isClamped`値を取得して判定しています。NodeによってはXRotate、YRotateが無いものもあるため（指など）、それらはONでもOFFでもない透明表示(None)にしています。

![説明2](https://github.com/lowpolysnow/DAZStudioScriptSet/blob/images/LimitList_4.png "説明2")

また、Hidden設定になっているNodeやPropertyは取得していません。  
そのため、DAZ Studio上の見た目そのままの設定値の確認ができると思います。

### TypeScript版

このスクリプトはTypeScriptで書いた後、DAZ Scriptへ変換しています。  
変換前のTypeScriptのソースはtsフォルダに格納しています。



## switch_visible.dsa：選択ノードの表示／非表示を切り替え時、子ノードも含める
 * 選択しているノードを表示／非表示を切り替えるとき、子ノードも一緒に切り替えます。
 * 複数のノードを選択していても有効です。
 * 作画参考時に、「腕が邪魔で体のラインが見えない！」なんていうときに使ってみてください。

実行前
![実行前](https://github.com/lowpolysnow/Daz3DScriptSet/blob/images/switch_visible_1.PNG "実行前")
実行後
![実行後](https://github.com/lowpolysnow/Daz3DScriptSet/blob/images/switch_visible_2.PNG "実行後")




# DAZ Script開発環境について
DAZ ScriptはECMAScript(gen3)の言語仕様のため、TypeScriptで開発しています。  
Visual StudioによるTypeScriptを用いたDAZ Script用の開発環境の構築方法を以下に解説しています。

[DAZ Script開発環境の構築方法[DAZ Studio]](https://qiita.com/lowpolysnow/items/1cb0ab1315a95fae5d6d)




# 注意
DAZ StudioのScript IDE画面では日本語が文字化けします。上書きしないように注意してください。
