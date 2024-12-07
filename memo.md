https://github.com/nextjs-microcms-book/nextjs-website-sample

```
// 全ての変更をステージ
git add .
git add <file>

// ステージされていない変更を破棄
git restore <file>

// コミット
git commit -m <message>

// 状態を確認
git status

// リモートのURLを設定
git remote add origin <gitのHTTPS>

// リモートの確認
git remote -v

// 追跡関係を設定してpush
git push -u origin HEAD （次回以降はgit pushのみでよくなる）

// 追跡関係の確認
git branch -vv
```
